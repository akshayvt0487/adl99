import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { fetchGraphQL } from "@/lib/wordpress-server";
import { GET_INDUSTRIES_PAGE, GET_ALL_INDUSTRIES } from "@/lib/wordpress-queries";
import type { Metadata } from "next";
import IndustriesPageClient from "./IndustriesPageClient";

// SEO metadata
export const metadata: Metadata = {
  title: "Industry Cybersecurity Solutions Melbourne | ADL99",
  description: "ADL99 delivers tailored cybersecurity for law firms, health clinics, accounting, retail, manufacturing and research organisations across Australia.",
  keywords: ["industry cybersecurity", "sector specific security", "Australian business cyber protection"],
  openGraph: {
    title: "Industry Cybersecurity Solutions Melbourne | ADL99",
    description: "ADL99 delivers tailored cybersecurity for law firms, health clinics, accounting, retail, manufacturing and research organisations across Australia.",
    url: "https://www.adl99.com.au/industries",
    type: "website",

    images: [
      {
        url: "/industries-og.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://www.adl99.com.au/industries",
  },
};

async function getIndustriesPageData() {
  try {
    const data = await fetchGraphQL<any>(GET_INDUSTRIES_PAGE, {}, 300);
    return data.page;
  } catch (error) {
    console.error("Error fetching industries page data:", error);
    return null;
  }
}

async function getAllIndustries() {
  try {
    const data = await fetchGraphQL<any>(GET_ALL_INDUSTRIES, {}, 300);
    return data.industries?.nodes || [];
  } catch (error) {
    console.error("Error fetching industries:", error);
    return [];
  }
}

export default async function IndustriesPage() {
  const pageData = await getIndustriesPageData();
  const industries = await getAllIndustries();

  // Get content from WordPress or use defaults
  const heroTitle = pageData?.industriesPageFields?.heroTitle || "Industries We Serve";
  const heroDescription = pageData?.industriesPageFields?.heroDescription || "Every industry faces unique cybersecurity challenges. We deliver tailored solutions that address your specific risks and compliance requirements.";
  const introTitle = pageData?.industriesPageFields?.introTitle || "Industry-Specific Cybersecurity Solutions in Melbourne & Across Australia";
  const introDescription = pageData?.industriesPageFields?.introDescription || "From law firms and health clinics to accounting practices, retailers, manufacturers, and research organisations — ADL99 delivers cybersecurity solutions tailored to your industry's compliance frameworks, operational risks, and unique threat landscape. Whether you're based in Melbourne or operating nationally, we understand the challenges you face.";
  const ctaTitle = pageData?.industriesPageFields?.ctaTitle || "Don't See Your Industry?";
  const ctaDescription = pageData?.industriesPageFields?.ctaDescription || "We work with businesses across all sectors. Contact us to discuss how we can address your unique cybersecurity challenges.";

  // Map industries for display
  const industriesList = industries && industries.length > 0
    ? industries.map((industry: any) => ({
        icon: industry.industryFields?.icon || 'building',
        title: industry.title,
        slug: industry.slug,
        description: industry.industryFields?.shortDescription || industry.excerpt || '',
        challenges: industry.industryFields?.challenges?.map((c: any) => c.title) || [],
        solutions: industry.industryFields?.solutions?.map((s: any) => s.title) || [],
        link: `/industries/${industry.slug}`,
      }))
    : [];

  // JSON-LD structured data
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Industries We Serve",
    "description": "Industry-specific cybersecurity solutions for Australian businesses.",
    "url": "https://www.adl99.com.au/industries"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.adl99.com.au"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Industries",
        "item": "https://www.adl99.com.au/industries"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />
      <Breadcrumb items={[{ label: "Industries" }]} />

      <IndustriesPageClient
        heroTitle={heroTitle}
        heroDescription={heroDescription}
        introTitle={introTitle}
        introDescription={introDescription}
        industries={industriesList}
        ctaTitle={ctaTitle}
        ctaDescription={ctaDescription}
      />

      <Footer />
    </div>
  );
}
