import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { fetchGraphQL } from "@/lib/wordpress-server";
import { GET_PANIC_BUTTON_PAGE } from "@/lib/wordpress-queries";
import type { Metadata } from "next";
import PanicButtonPageClient from "./PanicButtonPageClient";

// SEO metadata
export const metadata: Metadata = {
  title: "Emergency Cyber Incident Response Melbourne | ADL99",
  description: "Experiencing a cyber attack or data breach? ADL99's Melbourne emergency team responds in under 15 minutes. Immediate containment and recovery.",
  keywords: ["cyber incident response", "emergency cybersecurity help", "data breach response Australia"],
  openGraph: {
    title: "Emergency Cyber Incident Response Melbourne | ADL99",
    description: "Experiencing a cyber attack or data breach? ADL99's Melbourne emergency team responds in under 15 minutes. Immediate containment and recovery.",
    url: "https://www.adl99.com.au/panic-button",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://www.adl99.com.au/panic-button",
  },
};

// Default info cards (fallback)
const defaultInfoCards = [
  {
    icon: "AlertTriangle",
    title: "Melbourne's 24/7 Cyber Emergency Response Team",
    value: "Ready to Help",
    description: "Emergency cyber response"
  },
  {
    icon: "Clock",
    title: "Under 15-Minute Callback Guarantee",
    value: "Under 15 Minutes",
    description: "Average callback time"
  },
  {
    icon: "Shield",
    title: "What Our Incident Response Team Does",
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
  heroTitle: "Emergency Incident Response — We're Ready Right Now",
  heroDescription: "If you're experiencing a cyber attack or data breach, don't wait. ADL99's Melbourne-based emergency response team is available now — with an average callback time of under 15 minutes.",
  emergencyBannerText: "Urgent Help - Emergency Cyber Response",
  formTitle: "Melbourne Cyber Incident Response — Report Your Emergency",
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
