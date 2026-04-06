import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
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

// Enhanced SEO metadata for homepage
export const metadata: Metadata = {
  title: "Cybersecurity Services for Australian Businesses | ADL99",
  description: "ADL99 is Melbourne's trusted cybersecurity partner — expert assessments, vCISO services & incident response. Book a free consultation.",
  keywords: [
    "cybersecurity Australia",
    "cyber security Melbourne",
    "cybersecurity consulting",
    "vCISO services Australia",
    "Essential Eight compliance",
    "ISO 27001 Australia",
    "NIST framework",
    "cyber maturity assessment",
    "penetration testing",
    "security awareness training",
    "cyber incident response",
    "data breach prevention",
    "Australian cyber security",
  ],
  openGraph: {
    title: "Cybersecurity Services for Australian Businesses | ADL99",
    description: "ADL99 is Melbourne's trusted cybersecurity partner — expert assessments, vCISO services & incident response. Book a free consultation.",
    url: "https://www.adl99.com.au",
    siteName: "ADL99 Cybersecurity",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://www.adl99.com.au/ADL99-LOGO.webp",
        width: 1200,
        height: 630,
        alt: "ADL99 Cybersecurity - Melbourne's Trusted Cybersecurity Partner",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cybersecurity Services for Australian Businesses | ADL99",
    description: "ADL99 is Melbourne's trusted cybersecurity partner — expert assessments, vCISO services & incident response. Book a free consultation.",
    images: ["https://www.adl99.com.au/opengraph-image.jpg"],
  },
  alternates: {
    canonical: "https://www.adl99.com.au",
  },
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

  // Enhanced JSON-LD structured data for rich snippets
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ADL99 Cybersecurity",
    url: "https://www.adl99.com.au",
    logo: "https://www.adl99.com.au/og-image.png",
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

  // FAQ Schema for rich snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What cybersecurity services does ADL99 provide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ADL99 provides comprehensive cybersecurity services including vCISO (virtual Chief Information Security Officer), cyber maturity assessments, Essential Eight compliance, ISO 27001 implementation, penetration testing, security awareness training, and 24/7 security monitoring for Australian businesses.",
        },
      },
      {
        "@type": "Question",
        name: "What is Essential Eight compliance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Essential Eight is the Australian Cyber Security Centre's (ACSC) prioritized mitigation strategies to protect organizations from cyber threats. It includes application control, patch applications, configure Microsoft Office macro settings, user application hardening, restrict administrative privileges, patch operating systems, multi-factor authentication, and regular backups.",
        },
      },
      {
        "@type": "Question",
        name: "Who needs cybersecurity services in Australia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "All Australian businesses need cybersecurity protection, regardless of size. This includes healthcare clinics, law firms, accounting practices, manufacturers, retailers, and research organizations. Cyber threats target businesses of all sizes, making professional security services essential.",
        },
      },
      {
        "@type": "Question",
        name: "What is a vCISO service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A vCISO (virtual Chief Information Security Officer) is an outsourced security leadership service that provides expert cybersecurity strategy, risk management, compliance oversight, and security program development without the cost of a full-time executive. It's ideal for small to medium businesses needing enterprise-level security expertise.",
        },
      },
      {
        "@type": "Question",
        name: "How often should businesses conduct cyber security assessments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Australian businesses should conduct comprehensive cybersecurity assessments at least annually, with continuous monitoring throughout the year. Additional assessments are recommended after significant changes to IT infrastructure, following security incidents, or when compliance requirements change.",
        },
      },
    ],
  };

  // Service schema for search visibility
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Cybersecurity Consulting",
    provider: {
      "@type": "Organization",
      name: "ADL99 Cybersecurity",
      url: "https://www.adl99.com.au",
    },
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cybersecurity Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "vCISO Services",
            description: "Virtual Chief Information Security Officer services for strategic security leadership",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cyber Maturity Assessment",
            description: "Comprehensive evaluation of your organization's cybersecurity posture",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Essential Eight Compliance",
            description: "Implementation and audit of ACSC Essential Eight mitigation strategies",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Penetration Testing",
            description: "Ethical hacking to identify vulnerabilities in your systems",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Security Awareness Training",
            description: "Employee training to build a security-conscious culture",
          },
        },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* JSON-LD Structured Data for Enhanced SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <Header />
      <main>
        <Hero
          data={homePage?.homeFields?.heroSection}
          isLoading={false}
        />
        <IntroSection
          title="Melbourne's Trusted Cybersecurity Services for Australian Businesses"
          description="Based in Melbourne and serving businesses across Australia, ADL99 delivers practical, no-nonsense cybersecurity tailored to your industry and budget. From cyber maturity assessments to emergency incident response, we protect what matters most — your data, your clients, and your reputation."
          links={[
            { text: "cyber maturity assessments", href: "/services/cyber-maturity" },
            { text: "emergency incident response", href: "/panic-button" }
          ]}
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
