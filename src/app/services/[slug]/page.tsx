import { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchGraphQL } from "@/lib/wordpress-server";
import { GET_SERVICE_BY_SLUG, GET_ALL_SERVICES } from "@/lib/wordpress-queries";
import { WPService } from "@/lib/wordpress";
import ServicePageClient from "./ServicePageClient";
import { servicesFallbackData } from "@/lib/services-fallback-data";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all services
export async function generateStaticParams() {
  try {
    const data = await fetchGraphQL<{ services: { nodes: WPService[] } }>(
      GET_ALL_SERVICES,
      {},
      3600 // Cache for 1 hour
    );

    return data.services.nodes.map((service) => ({
      slug: service.slug,
    }));
  } catch (error) {
    console.error("Error fetching services for static params:", error);
    // Fallback to using fallback data slugs if WordPress fails
    return Object.keys(servicesFallbackData).map((slug) => ({
      slug,
    }));
  }
}

// SEO metadata for specific services
const serviceSEO: Record<string, { title: string; description: string }> = {
  "cyber-maturity": {
    title: "Cyber Maturity Assessments for Your Business | ADL99",
    description: "Find out where your business stands with ADL99's cyber maturity assessments. Get a clear roadmap to reduce risk and meet Australian compliance standards.",
  },
  "technical-advisory": {
    title: "Cybersecurity Technical Advisory Services | ADL99",
    description: "ADL99's technical advisory gives Australian businesses direct access to expert security guidance — practical, jargon-free advice aligned with your goals.",
  },
  "engineering-support": {
    title: "Cybersecurity Engineering Support Services | ADL99",
    description: "Hands-on cybersecurity engineering support for Australian businesses. ADL99 helps you implement, configure, and maintain robust security infrastructure.",
  },
  "cyber-awareness": {
    title: "Cyber Awareness Training for Your Business Teams | ADL99",
    description: "Equip your staff to spot and stop cyber threats with ADL99's cyber awareness training. Practical, engaging sessions built for Australian business teams.",
  },
  "vciso": {
    title: "Trusted Virtual CISO Services for Your Business | ADL99",
    description: "Get executive-level cybersecurity leadership without the full-time cost. ADL99's vCISO service gives your business strategic security guidance on demand.",
  },
  "urgent-help": {
    title: "Urgent Cybersecurity Help When You Need It | ADL99",
    description: "Facing an active cyber threat or breach? ADL99 provides urgent cybersecurity assistance to get your business secure fast. Contact our team right now.",
  },
};

// Generate metadata for SEO
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const data = await fetchGraphQL<{ service: WPService }>(
      GET_SERVICE_BY_SLUG,
      { slug },
      300 // Cache for 5 minutes
    );

    if (!data.service) {
      return {
        title: "Service Not Found | ADL99",
        description: "The requested service could not be found.",
      };
    }

    const service = data.service;
    const customSEO = serviceSEO[slug];

    return {
      title: customSEO?.title || service.seo?.title || `${service.title} | ADL99`,
      description: customSEO?.description || service.seo?.description || service.serviceFields?.shortDescription || "",
      alternates: {
        canonical: `https://www.adl99.com.au/services/${slug}`,
      },
      openGraph: {
        title: customSEO?.title || service.seo?.title || service.title,
        description: customSEO?.description || service.seo?.description || service.serviceFields?.shortDescription || "",
        type: "website",
        url: `https://www.adl99.com.au/services/${slug}`,
        images: [
          {
            url: `https://www.adl99.com.au/services/${slug}-og.png`,
            width: 1200,
            height: 630,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: customSEO?.title || service.seo?.title || service.title,
        description: customSEO?.description || service.seo?.description || service.serviceFields?.shortDescription || "",
        images: [`https://www.adl99.com.au/services/${slug}-og.png`],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Service | ADL99",
      description: "ADL99 Cybersecurity Services",
    };
  }
}

// Server component - fetches data from WordPress and passes to client component
export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;

  try {
    const data = await fetchGraphQL<{ service: WPService }>(
      GET_SERVICE_BY_SLUG,
      { slug },
      300 // Revalidate every 5 minutes
    );

    if (!data.service) {
      notFound();
    }

    return <ServicePageClient service={data.service} />;
  } catch (error) {
    console.error("Error fetching service:", error);
    notFound();
  }
}
