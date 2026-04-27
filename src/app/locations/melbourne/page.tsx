import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import MelbournePageClient from "./MelbournePageClient";

export const metadata: Metadata = {
  title: "Cyber Security Melbourne | ADL99 — Trusted Local Team",
  description: "Cyber security Melbourne — ADL99 protects businesses across Greater Melbourne with Essential Eight, vCISO & 24/7 incident response.",
  keywords: [
    "cyber security Melbourne",
    "cyber security services Melbourne",
    "Melbourne cyber security company",
    "Melbourne cyber security consultants",
    "Essential Eight Melbourne",
    "vCISO Melbourne",
    "incident response Melbourne",
    "cyber security solutions Melbourne",
    "cybersecurity Melbourne",
    "Melbourne cybersecurity",
  ],
  alternates: {
    canonical: "https://www.adl99.com.au/locations/melbourne",
  },
  openGraph: {
    title: "Cyber Security Melbourne | ADL99 — Trusted Local Team",
    description: "Cyber security Melbourne — ADL99 protects businesses across Greater Melbourne with Essential Eight, vCISO & 24/7 incident response.",
    url: "https://www.adl99.com.au/locations/melbourne",
    siteName: "ADL99",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://www.adl99.com.au/banner-images/services.webp",
        width: 1200,
        height: 630,
        alt: "Cyber Security Services in Melbourne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyber Security Melbourne | ADL99 — Trusted Local Team",
    description: "Cyber security Melbourne — ADL99 protects businesses across Greater Melbourne with Essential Eight, vCISO & 24/7 incident response.",
    images: ["https://www.adl99.com.au/banner-images/services.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const structuredData = {
  localBusiness: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ADL99 Cybersecurity Melbourne",
    description:
      "Melbourne-based cybersecurity firm providing assessments, vCISO services, incident response, and awareness training for Australian businesses.",
    url: "https://www.adl99.com.au/locations/melbourne",
    address: {
      "@type": "PostalAddress",
      streetAddress: "470 St Kilda Road",
      addressLocality: "Melbourne",
      addressRegion: "VIC",
      postalCode: "3004",
      addressCountry: "AU",
    },
    areaServed: [
      "Melbourne",
      "Richmond",
      "South Melbourne",
      "St Kilda",
      "Docklands",
      "Southbank",
      "Carlton",
      "Fitzroy",
      "Collingwood",
      "Hawthorn",
      "Toorak",
      "Dandenong",
      "Clayton",
      "Footscray",
      "Sunshine",
      "Brunswick",
    ],
    serviceType: [
      "Cybersecurity Assessment",
      "vCISO Services",
      "Incident Response",
      "Cyber Awareness Training",
      "Penetration Testing",
      "Essential 8 Compliance",
    ],
    priceRange: "$$",
  },
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.adl99.com.au",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Locations",
        item: "https://www.adl99.com.au/locations",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Melbourne",
        item: "https://www.adl99.com.au/locations/melbourne",
      },
    ],
  },
  faqPage: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What cyber security services does ADL99 provide in Melbourne?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ADL99 provides the full cyber security lifecycle for Melbourne businesses: cyber maturity assessments, virtual CISO (vCISO), technical advisory, engineering support, cyber awareness training, and 24/7 urgent incident response. We work with organisations across Greater Melbourne — from CBD to inner suburbs to growth corridors.",
        },
      },
      {
        "@type": "Question",
        name: "How much does cyber security cost for a Melbourne business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pricing depends on scope and business size. Cyber maturity assessments for Melbourne SMBs are fixed-scope engagements typically starting in the low five figures. vCISO retainers scale to organisation size. Incident response is engagement-based. We always provide transparent fixed-scope quotes — never open-ended billing.",
        },
      },
      {
        "@type": "Question",
        name: "Does my Melbourne business need to comply with the Essential Eight?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Essential Eight is mandatory for federal government agencies and increasingly required by cyber insurers, enterprise customers, and government supply chains. Most Melbourne businesses we work with target Maturity Level 1 or 2 as a practical baseline — our cyber maturity assessment benchmarks where you currently sit and maps out how to lift it.",
        },
      },
      {
        "@type": "Question",
        name: "What should I do if my Melbourne business gets hit by ransomware?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Don't pay any ransom, don't shut systems down before forensic preservation, and don't communicate publicly until you understand the scope. Contact our urgent incident response team — we provide remote triage within hours and on-site response across Greater Melbourne where required.",
        },
      },
      {
        "@type": "Question",
        name: "Where is ADL99 located in Melbourne?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ADL99 is headquartered at 470 St Kilda Road, Melbourne VIC 3004 — minutes from the CBD, Southbank, South Yarra, and the St Kilda Road corporate corridor. We deliver services across Greater Melbourne both on-site and remotely.",
        },
      },
    ],
  },
};

export default function MelbournePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }}
      />

      {/* Breadcrumb */}
      <div className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-6 py-4">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Locations", href: "/locations" },
              { label: "Melbourne" },
            ]}
          />
        </div>
      </div>

      <MelbournePageClient />

      <Footer />
    </div>
  );
}
