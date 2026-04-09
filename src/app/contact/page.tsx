import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { fetchGraphQL } from "@/lib/wordpress-server";
import { GET_CONTACT_PAGE } from "@/lib/wordpress-queries";
import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

// SEO metadata
export const metadata: Metadata = {
  title: "Contact ADL99 | Cybersecurity Help for Your Business",
  description: "Ready to strengthen your cybersecurity? Get in touch with the ADL99 team today. We work with Australian businesses across all industries to reduce cyber risk.",
  keywords: ["contact ADL99", "cybersecurity consultation Melbourne", "cyber security quote Australia"],
  openGraph: {
    title: "Contact ADL99 | Cybersecurity Help for Your Business",
    description: "Ready to strengthen your cybersecurity? Get in touch with the ADL99 team today. We work with Australian businesses across all industries to reduce cyber risk.",
    url: "https://www.adl99.com.au/contact",
    type: "website",
    images: [
      {
        url: "https://www.adl99.com.au/contact-og.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://www.adl99.com.au/contact",
  },
};

// Default contact info (fallback)
const defaultContactItems = [
  {
    icon: "Mail",
    title: "Email Us",
    description: "info@adl99.com.au",
    detail: "We'll respond within 24 hours"
  },
  {
    icon: "MapPin",
    title: "Location",
    description: "470 St Kilda Road",
    detail: "Melbourne VIC 3004"
  },
  {
    icon: "Clock",
    title: "Business Hours",
    description: "Mon - Fri: 9am - 5pm AEST",
    detail: "Emergency support available"
  }
];

// Default what to expect items (fallback)
const defaultWhatToExpect = [
  { item: "We'll review your inquiry and assess your needs" },
  { item: "A security expert will reach out within 24 hours" },
  { item: "We'll schedule a free 30-minute consultation" },
  { item: "Receive a tailored proposal for your security needs" }
];

// Default content (fallback)
const defaultContent = {
  heroTitle: "Contact Us",
  heroDescription: "Have questions about your cybersecurity needs? ADL99's Melbourne team is here to help. Reach out for a free 30-minute consultation — no obligation, no pressure.",
  emergencyBannerText: "Experiencing a cyber incident? Get immediate help",
  formTitle: "Get in Touch With Melbourne's Cybersecurity Experts",
  whatToExpectTitle: "What to Expect"
};

async function getContactPageData() {
  try {
    const data = await fetchGraphQL<any>(GET_CONTACT_PAGE, {}, 300);
    return data.page;
  } catch (error) {
    console.error("Error fetching contact page data:", error);
    return null;
  }
}

export default async function ContactPage() {
  const pageData = await getContactPageData();
  const contactFields = pageData?.contactFields;

  // Use WordPress data or fallback to defaults
  const heroTitle = contactFields?.heroTitle || defaultContent.heroTitle;
  const heroDescription = contactFields?.heroDescription || defaultContent.heroDescription;
  const emergencyBannerText = contactFields?.emergencyBannerText || defaultContent.emergencyBannerText;
  const formTitle = contactFields?.formTitle || defaultContent.formTitle;
  const whatToExpectTitle = contactFields?.whatToExpectTitle || defaultContent.whatToExpectTitle;

  // Contact items from WordPress or defaults
  const contactItems = contactFields?.contactItems && contactFields.contactItems.length > 0
    ? contactFields.contactItems
    : defaultContactItems;

  // What to expect from WordPress or defaults
  const whatToExpect = contactFields?.whatToExpect && contactFields.whatToExpect.length > 0
    ? contactFields.whatToExpect
    : defaultWhatToExpect;

  // JSON-LD structured data
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Us",
    "description": "Get in touch with ADL99 for expert cybersecurity consultation.",
    "url": "https://www.adl99.com.au/contact"
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
        "name": "Contact",
        "item": "https://www.adl99.com.au/contact"
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
      <Breadcrumb items={[{ label: "Contact" }]} />

      <ContactPageClient
        heroTitle={heroTitle}
        heroDescription={heroDescription}
        emergencyBannerText={emergencyBannerText}
        contactItems={contactItems}
        whatToExpectTitle={whatToExpectTitle}
        whatToExpect={whatToExpect}
        formTitle={formTitle}
      />

      <Footer />
    </div>
  );
}
