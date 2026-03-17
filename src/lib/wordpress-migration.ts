// WordPress Content Migration via REST API
import { WP_REST_URL, getCredentials, WPCredentials } from './wordpress-rest';
import { servicesData, industriesData, pagesData, siteSettingsData } from './wordpress-content-data';

export interface MigrationResult {
  type: 'service' | 'industry' | 'page' | 'settings';
  title: string;
  success: boolean;
  error?: string;
  id?: number;
}

export interface MigrationProgress {
  current: number;
  total: number;
  results: MigrationResult[];
}

// Generic REST API fetch helper
async function wpFetch<T>(
  endpoint: string,
  options: RequestInit = {},
  credentials: WPCredentials
): Promise<T> {
  const encoded = btoa(`${credentials.username}:${credentials.applicationPassword}`);
  
  const response = await fetch(`${WP_REST_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${encoded}`,
      ...options.headers,
    },
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: response.statusText }));
    throw new Error(error.message || `API Error: ${response.status}`);
  }

  return response.json();
}

// Check if a post with the given slug exists
async function findBySlug(
  endpoint: string,
  slug: string,
  credentials: WPCredentials
): Promise<{ id: number } | null> {
  try {
    const results = await wpFetch<Array<{ id: number; slug: string }>>(
      `${endpoint}?slug=${slug}`,
      {},
      credentials
    );
    return results.length > 0 ? results[0] : null;
  } catch {
    return null;
  }
}

// Create or update a service
async function migrateService(
  service: typeof servicesData[0],
  credentials: WPCredentials
): Promise<MigrationResult> {
  try {
    // Try plural endpoint first (most common), fall back to singular
    let existing = await findBySlug('/wp/v2/services', service.slug, credentials);
    let endpoint = '/wp/v2/services';
    
    if (existing === null) {
      // Try singular endpoint
      existing = await findBySlug('/wp/v2/service', service.slug, credentials);
      if (existing) endpoint = '/wp/v2/service';
    }
    
    const data = {
      title: service.title,
      slug: service.slug,
      content: service.content,
      excerpt: service.excerpt,
      status: 'publish',
      acf: service.acf,
    };

    let result;
    if (existing) {
      result = await wpFetch<{ id: number }>(
        `${endpoint}/${existing.id}`,
        { method: 'PUT', body: JSON.stringify(data) },
        credentials
      );
    } else {
      result = await wpFetch<{ id: number }>(
        endpoint,
        { method: 'POST', body: JSON.stringify(data) },
        credentials
      );
    }

    return { type: 'service', title: service.title, success: true, id: result.id };
  } catch (error) {
    return { 
      type: 'service', 
      title: service.title, 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}

// Create or update an industry
async function migrateIndustry(
  industry: typeof industriesData[0],
  credentials: WPCredentials
): Promise<MigrationResult> {
  try {
    // Try plural endpoint first (most common), fall back to singular
    let existing = await findBySlug('/wp/v2/industries', industry.slug, credentials);
    let endpoint = '/wp/v2/industries';
    
    if (existing === null) {
      // Try singular endpoint
      existing = await findBySlug('/wp/v2/industry', industry.slug, credentials);
      if (existing) endpoint = '/wp/v2/industry';
    }
    
    const data = {
      title: industry.title,
      slug: industry.slug,
      content: industry.content,
      excerpt: industry.excerpt,
      status: 'publish',
      acf: industry.acf,
    };

    let result;
    if (existing) {
      result = await wpFetch<{ id: number }>(
        `${endpoint}/${existing.id}`,
        { method: 'PUT', body: JSON.stringify(data) },
        credentials
      );
    } else {
      result = await wpFetch<{ id: number }>(
        endpoint,
        { method: 'POST', body: JSON.stringify(data) },
        credentials
      );
    }

    return { type: 'industry', title: industry.title, success: true, id: result.id };
  } catch (error) {
    return { 
      type: 'industry', 
      title: industry.title, 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}

// Create or update a page
async function migratePage(
  page: typeof pagesData[0],
  credentials: WPCredentials
): Promise<MigrationResult> {
  try {
    const existing = await findBySlug('/wp/v2/pages', page.slug, credentials);
    
    const data = {
      title: page.title,
      slug: page.slug,
      content: page.content,
      status: 'publish',
      acf: page.acf,
    };

    let result;
    if (existing) {
      result = await wpFetch<{ id: number }>(
        `/wp/v2/pages/${existing.id}`,
        { method: 'PUT', body: JSON.stringify(data) },
        credentials
      );
    } else {
      result = await wpFetch<{ id: number }>(
        '/wp/v2/pages',
        { method: 'POST', body: JSON.stringify(data) },
        credentials
      );
    }

    return { type: 'page', title: page.title, success: true, id: result.id };
  } catch (error) {
    return { 
      type: 'page', 
      title: page.title, 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}

// Update site settings (ACF Options page)
async function migrateSiteSettings(
  credentials: WPCredentials
): Promise<MigrationResult> {
  try {
    // ACF Options are typically updated via a custom endpoint or the options page
    // This requires the ACF to REST API plugin or custom endpoint
    await wpFetch(
      '/acf/v3/options/options',
      { method: 'POST', body: JSON.stringify({ acf: siteSettingsData }) },
      credentials
    );

    return { type: 'settings', title: 'Site Settings', success: true };
  } catch (error) {
    // If ACF options endpoint doesn't exist, return a warning
    return { 
      type: 'settings', 
      title: 'Site Settings', 
      success: false, 
      error: 'ACF Options REST endpoint not available. Update settings manually in WordPress admin.' 
    };
  }
}

// Main migration function
export async function runMigration(
  onProgress?: (progress: MigrationProgress) => void
): Promise<MigrationResult[]> {
  const credentials = getCredentials();
  if (!credentials) {
    throw new Error('No WordPress credentials found. Please log in first.');
  }

  const results: MigrationResult[] = [];
  const total = servicesData.length + industriesData.length + pagesData.length + 1; // +1 for settings
  let current = 0;

  const updateProgress = () => {
    current++;
    onProgress?.({ current, total, results: [...results] });
  };

  // Migrate services
  for (const service of servicesData) {
    const result = await migrateService(service, credentials);
    results.push(result);
    updateProgress();
  }

  // Migrate industries
  for (const industry of industriesData) {
    const result = await migrateIndustry(industry, credentials);
    results.push(result);
    updateProgress();
  }

  // Migrate pages
  for (const page of pagesData) {
    const result = await migratePage(page, credentials);
    results.push(result);
    updateProgress();
  }

  // Migrate site settings
  const settingsResult = await migrateSiteSettings(credentials);
  results.push(settingsResult);
  updateProgress();

  return results;
}

// Verify WordPress REST API is accessible
export async function verifyRestApi(credentials: WPCredentials): Promise<boolean> {
  try {
    const encoded = btoa(`${credentials.username}:${credentials.applicationPassword}`);
    const response = await fetch(`${WP_REST_URL}/wp/v2/users/me`, {
      headers: {
        'Authorization': `Basic ${encoded}`,
      },
    });
    return response.ok;
  } catch {
    return false;
  }
}
