// Centralized JSON-LD schema generators for SEO

const SITE_URL = 'https://www.adl99.com.au';
const SITE_NAME = 'ADL99 Cybersecurity';
const LOGO_URL = `${SITE_URL}/og-image.png`;

export interface FAQ {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export const createOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: LOGO_URL,
  description: 'ADL99 provides expert cybersecurity services for Australian businesses. Protect your data, meet compliance requirements, and build cyber resilience.',
  foundingDate: '2024',
  areaServed: {
    '@type': 'Country',
    name: 'Australia',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Melbourne',
    addressRegion: 'VIC',
    addressCountry: 'AU',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: 'English',
  },
  sameAs: [
    'https://facebook.com/adl99cybersecurity',
    'https://linkedin.com/company/adl99',
  ],
});

export const createLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: SITE_NAME,
  url: SITE_URL,
  logo: LOGO_URL,
  image: LOGO_URL,
  description: 'Expert cybersecurity consulting and managed security services for Australian businesses.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Melbourne',
    addressRegion: 'VIC',
    addressCountry: 'AU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -37.8136,
    longitude: 144.9631,
  },
  areaServed: {
    '@type': 'Country',
    name: 'Australia',
  },
  priceRange: '$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00',
  },
});

export const createWebPageSchema = (title: string, description: string, url: string) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: title,
  description,
  url,
  isPartOf: {
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
  },
});

export const createServiceSchema = (
  name: string,
  description: string,
  url: string,
) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description,
  url,
  provider: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
  },
  areaServed: {
    '@type': 'Country',
    name: 'Australia',
  },
  category: 'Cybersecurity Services',
});

export const createFAQSchema = (faqs: FAQ[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

export const createBreadcrumbSchema = (items: BreadcrumbItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: SITE_URL,
    },
    ...items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 2,
      name: item.label,
      ...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
    })),
  ],
});
