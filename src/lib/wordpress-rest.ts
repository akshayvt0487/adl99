// WordPress REST API Configuration for Content Management
// Uses WordPress Application Passwords for authentication

export const WP_REST_URL = process.env.NEXT_PUBLIC_WP_REST_URL || 'https://cms.adl99.com.au/wp-json';

export interface WPCredentials {
  username: string;
  applicationPassword: string;
}

// Store/retrieve credentials from localStorage
export function saveCredentials(credentials: WPCredentials): void {
  localStorage.setItem('wp_admin_credentials', JSON.stringify(credentials));
}

export function getCredentials(): WPCredentials | null {
  const stored = localStorage.getItem('wp_admin_credentials');
  return stored ? JSON.parse(stored) : null;
}

export function clearCredentials(): void {
  localStorage.removeItem('wp_admin_credentials');
}

// Create auth header from credentials
function getAuthHeader(credentials: WPCredentials): string {
  const encoded = btoa(`${credentials.username}:${credentials.applicationPassword}`);
  return `Basic ${encoded}`;
}

// Generic REST API fetch helper
async function wpFetch<T>(
  endpoint: string,
  options: RequestInit = {},
  credentials?: WPCredentials
): Promise<T> {
  const creds = credentials || getCredentials();
  if (!creds) {
    throw new Error('No WordPress credentials found');
  }

  const response = await fetch(`${WP_REST_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getAuthHeader(creds),
      ...options.headers,
    },
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: response.statusText }));
    throw new Error(error.message || `API Error: ${response.status}`);
  }

  return response.json();
}

// Verify credentials are valid
export async function verifyCredentials(credentials: WPCredentials): Promise<boolean> {
  try {
    await wpFetch('/wp/v2/users/me', {}, credentials);
    return true;
  } catch {
    return false;
  }
}

// ============ Pages API ============

export interface WPRestPage {
  id: number;
  title: { rendered: string; raw?: string };
  content: { rendered: string; raw?: string };
  slug: string;
  status: string;
  excerpt: { rendered: string; raw?: string };
  modified: string;
  acf?: Record<string, unknown>;
}

export async function getPages(): Promise<WPRestPage[]> {
  return wpFetch('/wp/v2/pages?per_page=100&context=edit');
}

export async function getPage(id: number): Promise<WPRestPage> {
  return wpFetch(`/wp/v2/pages/${id}?context=edit`);
}

export async function updatePage(id: number, data: Partial<WPRestPage>): Promise<WPRestPage> {
  return wpFetch(`/wp/v2/pages/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

// ============ Services CPT API ============

export interface WPRestService {
  id: number;
  title: { rendered: string; raw?: string };
  content: { rendered: string; raw?: string };
  slug: string;
  status: string;
  excerpt: { rendered: string; raw?: string };
  modified: string;
  acf?: {
    icon?: string;
    short_description?: string;
    benefits?: Array<{ icon?: string; title: string; description: string }>;
    pain_points?: Array<{ icon?: string; title: string; description: string }>;
    faqs?: Array<{ question: string; answer: string }>;
  };
}

export async function getServices(): Promise<WPRestService[]> {
  return wpFetch('/wp/v2/service?per_page=100&context=edit');
}

export async function getService(id: number): Promise<WPRestService> {
  return wpFetch(`/wp/v2/service/${id}?context=edit`);
}

export async function updateService(id: number, data: Partial<WPRestService>): Promise<WPRestService> {
  return wpFetch(`/wp/v2/service/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

export async function createService(data: Partial<WPRestService>): Promise<WPRestService> {
  return wpFetch('/wp/v2/service', {
    method: 'POST',
    body: JSON.stringify({ ...data, status: 'publish' }),
  });
}

// ============ Industries CPT API ============

export interface WPRestIndustry {
  id: number;
  title: { rendered: string; raw?: string };
  content: { rendered: string; raw?: string };
  slug: string;
  status: string;
  excerpt: { rendered: string; raw?: string };
  modified: string;
  acf?: {
    icon?: string;
    short_description?: string;
    challenges?: Array<{ challenge: string }>;
    solutions?: Array<{ solution: string }>;
    statistics?: Array<{ value: string; label: string; source?: string }>;
    faqs?: Array<{ question: string; answer: string }>;
  };
}

export async function getIndustries(): Promise<WPRestIndustry[]> {
  return wpFetch('/wp/v2/industry?per_page=100&context=edit');
}

export async function getIndustry(id: number): Promise<WPRestIndustry> {
  return wpFetch(`/wp/v2/industry/${id}?context=edit`);
}

export async function updateIndustry(id: number, data: Partial<WPRestIndustry>): Promise<WPRestIndustry> {
  return wpFetch(`/wp/v2/industry/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

export async function createIndustry(data: Partial<WPRestIndustry>): Promise<WPRestIndustry> {
  return wpFetch('/wp/v2/industry', {
    method: 'POST',
    body: JSON.stringify({ ...data, status: 'publish' }),
  });
}

// ============ ACF Fields Update ============

export async function updateACFFields(
  postType: 'pages' | 'service' | 'industry',
  postId: number,
  acfData: Record<string, unknown>
): Promise<unknown> {
  const endpoint = postType === 'pages' ? 'pages' : postType;
  return wpFetch(`/wp/v2/${endpoint}/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({ acf: acfData }),
  });
}
