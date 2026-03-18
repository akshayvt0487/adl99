import { MetadataRoute } from 'next';
import { fetchGraphQL } from '@/lib/wordpress-server';
import { GET_ALL_SERVICES, GET_ALL_INDUSTRIES } from '@/lib/wordpress-queries';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.adl99.com.au';

  // Fetch dynamic routes
  let services: string[] = [];
  let industries: string[] = [];

  try {
    const servicesData = await fetchGraphQL<any>(GET_ALL_SERVICES, {}, 3600);
    services = servicesData.services?.nodes?.map((s: any) => s.slug) || [];
  } catch (error) {
    console.error('Error fetching services for sitemap:', error);
  }

  try {
    const industriesData = await fetchGraphQL<any>(GET_ALL_INDUSTRIES, {}, 3600);
    industries = industriesData.industries?.nodes?.map((i: any) => i.slug) || [];
  } catch (error) {
    console.error('Error fetching industries for sitemap:', error);
  }

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/panic-button`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  // Dynamic service pages
  const servicePages = services.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Dynamic industry pages
  const industryPages = industries.map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages, ...industryPages];
}
