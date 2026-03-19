import { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchGraphQL } from "@/lib/wordpress-server";
import { GET_INDUSTRY_BY_SLUG, GET_ALL_INDUSTRIES } from "@/lib/wordpress-queries";
import { WPIndustry } from "@/lib/wordpress";
import IndustryPageClient from "./IndustryPageClient";

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all industries
export async function generateStaticParams() {
  try {
    const data = await fetchGraphQL<{ industries: { nodes: WPIndustry[] } }>(
      GET_ALL_INDUSTRIES,
      {},
      3600 // Cache for 1 hour
    );

    return data.industries.nodes.map((industry) => ({
      slug: industry.slug,
    }));
  } catch (error) {
    console.error("Error fetching industries for static params:", error);
    return [];
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const data = await fetchGraphQL<{ industry: WPIndustry }>(
      GET_INDUSTRY_BY_SLUG,
      { slug },
      300 // Cache for 5 minutes
    );

    if (!data.industry) {
      return {
        title: "Industry Not Found | ADL99",
        description: "The requested industry could not be found.",
      };
    }

    const industry = data.industry;

    return {
      title: industry.seo?.title || `Cybersecurity for ${industry.title} | ADL99`,
      description: industry.seo?.description || industry.industryFields?.shortDescription || "",
      alternates: {
        canonical: `https://www.adl99.com.au/industries/${slug}`,
      },
      openGraph: {
        title: industry.seo?.title || `Cybersecurity for ${industry.title}`,
        description: industry.seo?.description || industry.industryFields?.shortDescription || "",
        type: "website",
        url: `https://www.adl99.com.au/industries/${slug}`,
        images: industry.featuredImage?.node?.sourceUrl
          ? [
              {
                url: industry.featuredImage.node.sourceUrl,
                alt: industry.featuredImage.node.altText || industry.title,
              },
            ]
          : undefined,
      },
      twitter: {
        card: "summary_large_image",
        title: industry.seo?.title || `Cybersecurity for ${industry.title}`,
        description: industry.seo?.description || industry.industryFields?.shortDescription || "",
        images: industry.featuredImage?.node?.sourceUrl
          ? [industry.featuredImage.node.sourceUrl]
          : undefined,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Industry | ADL99",
      description: "ADL99 Industry Cybersecurity Solutions",
    };
  }
}

// Server component - fetches data and passes to client component
export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;

  try {
    const data = await fetchGraphQL<{ industry: WPIndustry }>(
      GET_INDUSTRY_BY_SLUG,
      { slug },
      300 // Revalidate every 5 minutes
    );

    if (!data.industry) {
      notFound();
    }

    return <IndustryPageClient industry={data.industry} />;
  } catch (error) {
    console.error("Error fetching industry:", error);
    notFound();
  }
}
