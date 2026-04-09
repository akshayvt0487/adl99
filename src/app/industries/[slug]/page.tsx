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

// SEO metadata for specific industries
const industrySEO: Record<string, { title: string; description: string }> = {
  "law-firms": {
    title: "Trusted Cybersecurity Services for Law Firms | ADL99",
    description: "Protect client privilege and sensitive legal data with ADL99's cybersecurity for law firms. Tailored compliance, risk management, and incident response.",
  },
  "health-clinics": {
    title: "Trusted Cybersecurity Services for Health Clinics | ADL99",
    description: "Safeguard patient records and meet healthcare compliance obligations with ADL99. Expert cybersecurity built for Australian health clinics and medical practices.",
  },
  "accounting": {
    title: "Cybersecurity Services for Accounting Firms | ADL99",
    description: "Accounting firms are prime cyber targets. ADL99 protects Australian accounting practices with tailored security, compliance support, and risk management.",
  },
  "retail": {
    title: "Cybersecurity Solutions for Retail Businesses | ADL99",
    description: "Protect customer data, payment systems, and supply chains with ADL99's retail cybersecurity. Practical, affordable solutions for Australian retail businesses.",
  },
  "manufacturing": {
    title: "Proven Cybersecurity Services for Manufacturers | ADL99",
    description: "ADL99 secures Australian manufacturing operations — protecting OT systems, supply chains, and IP from cyber threats. Purpose-built for the manufacturing sector.",
  },
  "research": {
    title: "Cybersecurity Services for Research Organisations | ADL99",
    description: "Protect sensitive research data and intellectual property with ADL99. Cybersecurity solutions for Australian universities, R&D labs, and research institutions.",
  },
};

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
    const customSEO = industrySEO[slug];

    return {
      title: customSEO?.title || industry.seo?.title || `Cybersecurity for ${industry.title} | ADL99`,
      description: customSEO?.description || industry.seo?.description || industry.industryFields?.shortDescription || "",
      alternates: {
        canonical: `https://www.adl99.com.au/industries/${slug}`,
      },
      openGraph: {
        title: customSEO?.title || industry.seo?.title || `Cybersecurity for ${industry.title}`,
        description: customSEO?.description || industry.seo?.description || industry.industryFields?.shortDescription || "",
        type: "website",
        url: `https://www.adl99.com.au/industries/${slug}`,
        images: [
          {
            url: `https://www.adl99.com.au/industries/${slug}-og.png`,
            width: 1200,
            height: 630,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: customSEO?.title || industry.seo?.title || `Cybersecurity for ${industry.title}`,
        description: customSEO?.description || industry.seo?.description || industry.industryFields?.shortDescription || "",
        images: [`https://www.adl99.com.au/industries/${slug}-og.png`],
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
