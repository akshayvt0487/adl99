// WordPress Headless CMS Configuration - Client-side version (for admin panel)
// ADL99 WordPress Backend: https://cms.adl99.com.au/
// Note: For server components, use wordpress-server.ts instead

const SUPABASE_PROJECT_ID = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_ID || 'hsgwtdlpnynnjdxxwgsj';
const WP_PROXY_URL = `https://${SUPABASE_PROJECT_ID}.supabase.co/functions/v1/wp-proxy`;

// GraphQL fetch helper — routes through edge function proxy
export async function fetchGraphQL<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  console.log('Fetching GraphQL via proxy');
  
  try {
    const response = await fetch(WP_PROXY_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        endpoint: '/graphql',
        method: 'POST',
        body: { query, variables },
      }),
    });

    console.log('GraphQL proxy response status:', response.status);
    
    if (!response.ok) {
      console.error('GraphQL proxy error:', response.status, response.statusText);
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const json = await response.json();
    console.log('GraphQL response data:', json);

    if (json.errors) {
      console.error('GraphQL Errors:', json.errors);
      throw new Error(json.errors[0]?.message || 'GraphQL Error');
    }

    return json.data;
  } catch (error) {
    console.error('GraphQL fetch error:', error);
    throw error;
  }
}

// Keep the same WP_GRAPHQL_URL export for backward compat (unused now but referenced)
export const WP_GRAPHQL_URL = 'https://cms.adl99.com.au/graphql';

// Type definitions for WordPress content
export interface WPImage {
  sourceUrl: string;
  altText: string;
  mediaDetails?: {
    width: number;
    height: number;
  };
}

export interface WPPage {
  id: string;
  title: string;
  slug: string;
  content: string;
  featuredImage?: {
    node: WPImage;
  };
  seo?: {
    title: string;
    description: string;
  };
}

export interface WPServiceBenefit {
  icon?: string;
  title: string;
  description: string;
}

export interface WPServicePainPoint {
  icon?: string;
  title: string;
  description: string;
}

export interface WPService {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage?: {
    node: WPImage;
  };
  serviceFields?: {
    icon: string;
    shortDescription: string;
    isAccent?: boolean;
    heroHeadline?: string;
    heroSubheadline?: string;
    benefits: WPServiceBenefit[];
    painPoints: WPServicePainPoint[];
    rightForYou?: Array<{ item: string }>;
    whatsIncluded?: Array<{ item: string }>;
    formBenefits?: Array<{ benefit: string }>;
    faqs: Array<{
      question: string;
      answer: string;
    }>;
  };
  seo?: {
    title: string;
    description: string;
  };
}

export interface WPIndustryStat {
  value: string;
  label: string;
  source?: string;
}

export interface WPIndustryChallenge {
  icon?: string;
  title: string;
  description: string;
  impact?: string;
}

export interface WPIndustrySolution {
  icon?: string;
  title: string;
  description: string;
}

export interface WPIndustry {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage?: {
    node: WPImage;
  };
  industryFields?: {
    icon: string;
    shortDescription?: string;
    heroHeadline?: string;
    heroSubheadline?: string;
    heroDescription?: string;
    statistics: WPIndustryStat[];
    challenges: WPIndustryChallenge[];
    painPoints: WPServicePainPoint[];
    solutions: WPIndustrySolution[];
    whyChooseUs?: Array<{ item: string }>;
    faqs: Array<{
      question: string;
      answer: string;
    }>;
  };
  seo?: {
    title: string;
    description: string;
  };
}

export interface WPHeroSection {
  headline: string;
  headlineHighlight?: string;
  subheadline: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: {
    node: WPImage;
  };
  tagline: string;
}

export interface WPBenefit {
  title: string;
  description: string;
  icon: string;
}

export interface WPStat {
  value: string;
  label: string;
  sublabel?: string;
}

export interface WPStatsSection {
  sectionTitle?: string;
  sectionDescription?: string;
  stats: WPStat[];
  source?: string;
}

export interface WPProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface WPProcessSection {
  sectionTitle?: string;
  sectionDescription?: string;
  steps: WPProcessStep[];
}

export interface WPSiteSettings {
  siteName: string;
  siteDescription: string;
  logo?: WPImage;
  phone: string;
  email: string;
  address: string;
  businessHours: string;
  socialLinks: {
    facebook: string;
    linkedin: string;
  };
}

export interface WPContactInfo {
  phone: string;
  email: string;
  address: string;
  businessHours: string;
}

export interface WPServicesPageFields {
  heroTitle?: string;
  heroDescription?: string;
  heroSubDescription?: string;
  painPoints?: WPServicePainPoint[];
  faqs?: Array<{ question: string; answer: string }>;
  contactFormTitle?: string;
  contactFormDescription?: string;
  contactFormBenefits?: Array<{ benefit: string }>;
}

export interface WPIndustriesPageFields {
  heroTitle?: string;
  heroDescription?: string;
  heroSubDescription?: string;
  introTitle?: string;
  introDescription?: string;
  ctaTitle?: string;
  ctaDescription?: string;
}

export interface WPInfoCard {
  icon: string;
  title: string;
  value?: string;
  description: string;
  items?: Array<{ item: string }>;
}

export interface WPPanicButtonFields {
  heroTitle?: string;
  heroDescription?: string;
  emergencyBannerText?: string;
  infoCards?: WPInfoCard[];
  formTitle?: string;
  incidentTypes?: Array<{ type: string }>;
  importantNotice?: string;
}

export interface WPAboutFields {
  heroTitle?: string;
  heroDescription?: string;
  missionStatement?: string;
  missionDescription?: string;
  australianOwnedTitle?: string;
  australianOwnedDescription?: string;
  valuesTitle?: string;
  valuesDescription?: string;
  values?: Array<{ icon: string; title: string; description: string }>;
  stats?: Array<{ value: string; label: string }>;
  approachTitle?: string;
  approachDescription?: string;
  approachItems?: Array<{ title: string; description: string }>;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  ctaButtonLink?: string;
}

export interface WPContactItem {
  icon: string;
  title: string;
  description: string;
  detail?: string;
}

export interface WPContactFields {
  heroTitle?: string;
  heroDescription?: string;
  emergencyBannerText?: string;
  contactItems?: WPContactItem[];
  whatToExpectTitle?: string;
  whatToExpect?: Array<{ item: string }>;
  formTitle?: string;
  contactInfo?: {
    email: string;
    phone: string;
    address: string;
    businessHours: string;
  };
}
