import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BenefitsStrip from "@/components/BenefitsStrip";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import FeatureShowcase from "@/components/FeatureShowcase";
import Industries from "@/components/Industries";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { fetchGraphQL } from "@/lib/wordpress-server";
import { GET_HOME_PAGE, GET_ALL_SERVICES, GET_ALL_INDUSTRIES } from "@/lib/wordpress-queries";
import type { Metadata } from "next";

// SEO metadata
export const metadata: Metadata = {
  title: "ADL99 Cybersecurity | Assess • Defend • Leverage",
  description: "ADL99 provides expert cybersecurity services for Australian businesses. Protect your data, meet compliance requirements, and build cyber resilience.",
  keywords: ["cybersecurity Australia", "cyber security Melbourne", "cybersecurity consulting", "Essential Eight", "ISO 27001", "NIST", "cyber maturity assessment", "vCISO"],
};

// Server-side data fetching
async function getHomePageData() {
  try {
    const data = await fetchGraphQL<any>(GET_HOME_PAGE, {}, 300); // 5 min cache
    return data;
  } catch (error) {
    console.error("Error fetching home page data:", error);
    return null;
  }
}

async function getAllServices() {
  try {
    const data = await fetchGraphQL<any>(GET_ALL_SERVICES, {}, 300);
    return data.services?.nodes || [];
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
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

export default async function HomePage() {
  // Fetch all data in parallel
  const [homePageData, services, industries] = await Promise.all([
    getHomePageData(),
    getAllServices(),
    getAllIndustries(),
  ]);

  const homePage = homePageData?.page;

  // JSON-LD structured data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ADL99 Cybersecurity",
    url: "https://adl99.com.au",
    logo: "https://adl99.com.au/og-image.png",
    description: "Expert cybersecurity services for Australian businesses",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "VIC",
      addressLocality: "Melbourne",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+61-3-XXXX-XXXX",
      contactType: "customer service",
      areaServed: "AU",
      availableLanguage: "en",
    },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <Header />
      <main>
        <Hero
          data={homePage?.homeFields?.heroSection}
          isLoading={false}
        />
        <Stats
          data={homePage?.homeFields?.statsSection}
          isLoading={false}
        />
        <BenefitsStrip
          data={homePage?.homeFields?.benefits}
          isLoading={false}
        />
        <Services
          data={services}
          isLoading={false}
          sectionTitle={homePage?.homeFields?.servicesSection?.sectionTitle}
          sectionDescription={homePage?.homeFields?.servicesSection?.sectionDescription}
        />
        <FeatureShowcase />
        <Industries
          data={industries}
          isLoading={false}
          sectionTitle={homePage?.homeFields?.industriesSection?.sectionTitle}
          sectionDescription={homePage?.homeFields?.industriesSection?.sectionDescription}
        />
        <Process
          data={homePage?.homeFields?.processSection}
          isLoading={false}
        />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
