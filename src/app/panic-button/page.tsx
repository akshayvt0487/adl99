import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { fetchGraphQL } from "@/lib/wordpress-server";
import { GET_PANIC_BUTTON_PAGE } from "@/lib/wordpress-queries";
import type { Metadata } from "next";
import PanicButtonPageClient from "./PanicButtonPageClient";

// SEO metadata
export const metadata: Metadata = {
  title: "Urgent Help | ADL99 Cybersecurity",
  description: "Emergency cyber incident response. If you're experiencing a cyber attack or security breach, contact ADL99 immediately for expert assistance.",
  keywords: ["cyber incident response", "emergency cybersecurity help", "data breach response Australia"],
  alternates: {
    canonical: "https://www.adl99.com.au/panic-button",
  },
};

// Default info cards (fallback)
const defaultInfoCards = [
  {
    icon: "AlertTriangle",
    title: "Urgent Help",
    value: "Ready to Help",
    description: "Emergency cyber response"
  },
  {
    icon: "Clock",
    title: "Response Time",
    value: "Under 15 Minutes",
    description: "Average callback time"
  },
  {
    icon: "Shield",
    title: "What We Do",
    description: "Comprehensive incident response",
    items: [
      { item: "Immediate threat containment" },
      { item: "Evidence preservation" },
      { item: "System recovery support" },
      { item: "Incident documentation" },
      { item: "Post-incident analysis" }
    ]
  }
];

// Default content (fallback)
const defaultContent = {
  heroTitle: "Emergency Incident Response",
  heroDescription: "If you're experiencing a cyber attack or security breach, fill out this form immediately. Our response team is ready to help contain and resolve the threat.",
  emergencyBannerText: "Urgent Help - Emergency Cyber Response",
  formTitle: "Report an Incident",
  importantNotice: "Do not shut down affected systems unless instructed. Preserve all evidence and avoid making changes to compromised systems. Our team will guide you through the proper response procedures."
};

async function getPanicButtonPageData() {
  try {
    const data = await fetchGraphQL<any>(GET_PANIC_BUTTON_PAGE, {}, 300);
    return data.page;
  } catch (error) {
    console.error("Error fetching panic button page data:", error);
    return null;
  }
}

export default async function PanicButtonPage() {
  const pageData = await getPanicButtonPageData();
  const panicButtonFields = pageData?.panicButtonFields;

  // Use WordPress data or fallback to defaults
  const heroTitle = panicButtonFields?.heroTitle || defaultContent.heroTitle;
  const heroDescription = panicButtonFields?.heroDescription || defaultContent.heroDescription;
  const emergencyBannerText = panicButtonFields?.emergencyBannerText || defaultContent.emergencyBannerText;
  const formTitle = panicButtonFields?.formTitle || defaultContent.formTitle;
  const importantNotice = panicButtonFields?.importantNotice || defaultContent.importantNotice;

  // Info cards from WordPress or defaults
  const infoCards = panicButtonFields?.infoCards && panicButtonFields.infoCards.length > 0
    ? panicButtonFields.infoCards
    : defaultInfoCards;

  // JSON-LD structured data
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Urgent Help - Emergency Incident Response",
    "description": "Emergency cyber incident response for Australian businesses.",
    "url": "https://adl99.com.au/panic-button"
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <Header />

      <PanicButtonPageClient
        heroTitle={heroTitle}
        heroDescription={heroDescription}
        emergencyBannerText={emergencyBannerText}
        infoCards={infoCards}
        formTitle={formTitle}
        importantNotice={importantNotice}
      />

      <Footer />
    </div>
  );
}
