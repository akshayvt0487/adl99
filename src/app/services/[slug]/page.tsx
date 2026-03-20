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
    title: "Cyber Maturity Assessment Services Melbourne | ADL99",
    description: "Know where your business stands against NIST, ISO 27001 & Essential Eight. ADL99 delivers a clear cyber security roadmap and gap analysis.",
  },
  "technical-advisory": {
    title: "Cybersecurity Technical Advisory Services | ADL99 Melbourne",
    description: "Navigate complex security decisions with confidence. ADL99's Melbourne advisors provide expert guidance on architecture, risk management and compliance.",
  },
  "engineering-support": {
    title: "Cybersecurity Engineering Support Services | ADL99 Melbourne",
    description: "Hands-on security implementation from ADL99's Melbourne engineers — deploying and optimising your network defence, endpoint protection and cloud security.",
  },
  "cyber-awareness": {
    title: "Cyber Awareness Training  | ADL99 Melbourne",
    description: "Turn your employees into your strongest defence. ADL99 delivers phishing simulations, staff training and security awareness programs for Australian workplaces.",
  },
  "vciso": {
    title: "Virtual CISO (vCISO) Services Melbourne | ADL99",
    description: "Get executive-level cybersecurity leadership without the full-time cost. ADL99's Melbourne vCISO provides strategic oversight, governance and board reporting.",
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
        images: service.featuredImage?.node?.sourceUrl
          ? [
              {
                url: service.featuredImage.node.sourceUrl,
                alt: service.featuredImage.node.altText || service.title,
              },
            ]
          : undefined,
      },
      twitter: {
        card: "summary_large_image",
        title: customSEO?.title || service.seo?.title || service.title,
        description: customSEO?.description || service.seo?.description || service.serviceFields?.shortDescription || "",
        images: service.featuredImage?.node?.sourceUrl
          ? [service.featuredImage.node.sourceUrl]
          : undefined,
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
