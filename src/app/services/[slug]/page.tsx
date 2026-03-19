import { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchGraphQL } from "@/lib/wordpress-server";
import { GET_SERVICE_BY_SLUG, GET_ALL_SERVICES } from "@/lib/wordpress-queries";
import { WPService } from "@/lib/wordpress";
import ServicePageClient from "./ServicePageClient";

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
    return [];
  }
}

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

    return {
      title: service.seo?.title || `${service.title} | ADL99`,
      description: service.seo?.description || service.serviceFields?.shortDescription || "",
      alternates: {
        canonical: `https://www.adl99.com.au/services/${slug}`,
      },
      openGraph: {
        title: service.seo?.title || service.title,
        description: service.seo?.description || service.serviceFields?.shortDescription || "",
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
        title: service.seo?.title || service.title,
        description: service.seo?.description || service.serviceFields?.shortDescription || "",
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

// Server component - fetches data and passes to client component
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
