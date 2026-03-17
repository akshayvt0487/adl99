import { useQuery } from '@tanstack/react-query';
import { 
  fetchGraphQL, 
  WPService, 
  WPIndustry, 
  WPPage, 
  WPSiteSettings, 
  WPHeroSection, 
  WPBenefit,
  WPStatsSection,
  WPProcessSection,
  WPServicesPageFields,
  WPIndustriesPageFields,
  WPPanicButtonFields
} from '@/lib/wordpress';
import {
  GET_SITE_SETTINGS,
  GET_HOME_PAGE,
  GET_ALL_SERVICES,
  GET_SERVICE_BY_SLUG,
  GET_ALL_INDUSTRIES,
  GET_INDUSTRY_BY_SLUG,
  GET_PAGE_BY_SLUG,
  GET_ABOUT_PAGE,
  GET_CONTACT_PAGE,
  GET_SERVICES_PAGE,
  GET_INDUSTRIES_PAGE,
  GET_PANIC_BUTTON_PAGE,
} from '@/lib/wordpress-queries';

// Site Settings Hook
export function useSiteSettings() {
  return useQuery({
    queryKey: ['siteSettings'],
    queryFn: async () => {
      const data = await fetchGraphQL<{
        acfOptionsSettings: { siteSettings: WPSiteSettings };
      }>(GET_SITE_SETTINGS);
      return data.acfOptionsSettings.siteSettings;
    },
    staleTime: 1000 * 60 * 60, // 1 hour
  });
}

// Home Page Hook
export function useHomePage() {
  return useQuery({
    queryKey: ['homePage'],
    queryFn: async () => {
      try {
        const data = await fetchGraphQL<{
          page: {
            id: string;
            title: string;
            homeFields: {
              heroSection: WPHeroSection;
              benefits: WPBenefit[];
              statsSection: WPStatsSection;
              servicesSection?: {
                sectionTitle?: string;
                sectionDescription?: string;
              };
              industriesSection?: {
                sectionTitle?: string;
                sectionDescription?: string;
              };
              processSection?: WPProcessSection;
            };
            seo: { title: string; description: string };
          };
        }>(GET_HOME_PAGE);
        return data.page;
      } catch (error) {
        console.warn('Failed to fetch home page from WordPress, using fallback content');
        return null;
      }
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: false, // Don't retry on failure, just use fallback
  });
}

// Services Hooks
export function useAllServices() {
  return useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      try {
        const data = await fetchGraphQL<{
          services: { nodes: WPService[] };
        }>(GET_ALL_SERVICES);
        return data.services.nodes;
      } catch (error) {
        console.warn('Failed to fetch services from WordPress, using fallback content');
        return null;
      }
    },
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
}

export function useService(slug: string) {
  return useQuery({
    queryKey: ['service', slug],
    queryFn: async () => {
      const data = await fetchGraphQL<{
        service: WPService | null;
      }>(GET_SERVICE_BY_SLUG, { slug });
      return data.service;
    },
    enabled: !!slug,
    staleTime: 1000 * 60 * 5,
  });
}

// Industries Hooks
export function useAllIndustries() {
  return useQuery({
    queryKey: ['industries'],
    queryFn: async () => {
      try {
        const data = await fetchGraphQL<{
          industries: { nodes: WPIndustry[] };
        }>(GET_ALL_INDUSTRIES);
        return data.industries.nodes;
      } catch (error) {
        console.warn('Failed to fetch industries from WordPress, using fallback content');
        return null;
      }
    },
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
}

export function useIndustry(slug: string) {
  return useQuery({
    queryKey: ['industry', slug],
    queryFn: async () => {
      const data = await fetchGraphQL<{
        industry: WPIndustry | null;
      }>(GET_INDUSTRY_BY_SLUG, { slug });
      return data.industry;
    },
    enabled: !!slug,
    staleTime: 1000 * 60 * 5,
  });
}

// Generic Page Hook
export function usePage(slug: string) {
  return useQuery({
    queryKey: ['page', slug],
    queryFn: async () => {
      const data = await fetchGraphQL<{
        page: WPPage;
      }>(GET_PAGE_BY_SLUG, { slug });
      return data.page;
    },
    enabled: !!slug,
    staleTime: 1000 * 60 * 5,
  });
}

// Services Page Hook
export function useServicesPage() {
  return useQuery({
    queryKey: ['servicesPage'],
    queryFn: async () => {
      const data = await fetchGraphQL<{
        page: {
          id: string;
          title: string;
          servicesPageFields: WPServicesPageFields;
          seo: { title: string; description: string };
        };
      }>(GET_SERVICES_PAGE);
      return data.page;
    },
    staleTime: 1000 * 60 * 5,
  });
}

// Industries Page Hook
export function useIndustriesPage() {
  return useQuery({
    queryKey: ['industriesPage'],
    queryFn: async () => {
      const data = await fetchGraphQL<{
        page: {
          id: string;
          title: string;
          industriesPageFields: WPIndustriesPageFields;
          seo: { title: string; description: string };
        };
      }>(GET_INDUSTRIES_PAGE);
      return data.page;
    },
    staleTime: 1000 * 60 * 5,
  });
}

// About Page Hook
export function useAboutPage() {
  return useQuery({
    queryKey: ['aboutPage'],
    queryFn: async () => {
      const data = await fetchGraphQL<{
        page: {
          id: string;
          title: string;
          aboutFields: {
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
          };
          seo: { title: string; description: string };
        };
      }>(GET_ABOUT_PAGE);
      return data.page;
    },
    staleTime: 1000 * 60 * 5,
  });
}

// Contact Page Hook
export function useContactPage() {
  return useQuery({
    queryKey: ['contactPage'],
    queryFn: async () => {
      const data = await fetchGraphQL<{
        page: {
          id: string;
          title: string;
          contactFields: {
            heroTitle?: string;
            heroDescription?: string;
            emergencyBannerText?: string;
            contactItems?: Array<{
              icon: string;
              title: string;
              description: string;
              detail?: string;
            }>;
            whatToExpectTitle?: string;
            whatToExpect?: Array<{ item: string }>;
            formTitle?: string;
            contactInfo?: {
              email: string;
              phone: string;
              address: string;
              businessHours: string;
            };
          };
          seo: { title: string; description: string };
        };
      }>(GET_CONTACT_PAGE);
      return data.page;
    },
    staleTime: 1000 * 60 * 5,
  });
}

// Panic Button Page Hook
export function usePanicButtonPage() {
  return useQuery({
    queryKey: ['panicButtonPage'],
    queryFn: async () => {
      const data = await fetchGraphQL<{
        page: {
          id: string;
          title: string;
          panicButtonFields: WPPanicButtonFields;
          seo: { title: string; description: string };
        };
      }>(GET_PANIC_BUTTON_PAGE);
      return data.page;
    },
    staleTime: 1000 * 60 * 5,
  });
}
