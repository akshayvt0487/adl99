import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { fetchGraphQL } from "@/lib/wordpress-server";
import { GET_SERVICES_PAGE, GET_ALL_SERVICES } from "@/lib/wordpress-queries";
import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

// SEO metadata
export const metadata: Metadata = {
  title: "Cybersecurity Services for Australian Businesses | ADL99 Melbourne",
  description: "From incident response to vCISO and cyber awareness training, ADL99 delivers practical cybersecurity solutions for Australian businesses.",
  keywords: ["cybersecurity services Australia", "cyber security consulting", "security assessment", "managed security services"],
  openGraph: {
    title: "Cybersecurity Services for Australian Businesses | ADL99 Melbourne",
    description: "From incident response to vCISO and cyber awareness training, ADL99 delivers practical cybersecurity solutions for Australian businesses.",
    url: "https://www.adl99.com.au/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://www.adl99.com.au/services",
  },
};

// Default pain points (fallback)
const defaultPainPoints = [
  {
    icon: "target",
    title: "Feeling Like a Sitting Target?",
    description: "Cyber attacks on Australian businesses increased 23% last year. Without proper defences, your business data, customer information, and reputation are at risk every single day."
  },
  {
    icon: "trending-down",
    title: "Worried About Business Disruption?",
    description: "A single ransomware attack can shut down operations for weeks. The average cost of downtime for Australian SMBs is $8,000 per hour—not including reputational damage."
  },
  {
    icon: "users",
    title: "Unsure If Your Team Is Your Weakest Link?",
    description: "91% of cyber attacks start with a phishing email. Even well-meaning employees can accidentally expose your business to devastating breaches."
  },
  {
    icon: "clock",
    title: "Too Busy to Think About Security?",
    description: "You're focused on running your business, not becoming a cybersecurity expert. But ignoring security doesn't make the threats go away—it just makes you more vulnerable."
  },
  {
    icon: "dollar-sign",
    title: "Concerned About the Cost?",
    description: "Enterprise security solutions are expensive and complex. But the cost of a breach far exceeds the investment in prevention. We offer scalable solutions for every budget."
  },
  {
    icon: "help-circle",
    title: "Not Sure Where to Start?",
    description: "The cybersecurity landscape is overwhelming—endless acronyms, frameworks, and solutions. You need a trusted guide who speaks your language, not technical jargon."
  }
];

// Default FAQs (fallback)
const defaultFaqs = [
  {
    question: "How do I know which services I need?",
    answer: "We start every engagement with a free 30-minute consultation to understand your business, current security posture, and specific concerns. Based on this conversation, we recommend a tailored approach—whether that's a single service or a comprehensive security program. There's no pressure and no obligation."
  },
  {
    question: "How much does cybersecurity actually cost?",
    answer: "Costs vary based on your business size, complexity, and needs. We offer flexible engagement models—from one-off assessments to ongoing managed services. Most importantly, we help you prioritise investments where they'll have the biggest impact. A free consultation will give you a clear understanding of costs before any commitment."
  },
  {
    question: "We're a small business—are we really a target?",
    answer: "Absolutely. In fact, 43% of cyber attacks target small businesses precisely because attackers know they often have weaker defences. Small businesses are attractive targets because they often have valuable data but limited security resources. The good news is that effective protection doesn't require enterprise budgets."
  },
  {
    question: "How long does it take to see results?",
    answer: "Some improvements are immediate—we can often identify and address critical vulnerabilities within the first week. A comprehensive security assessment typically takes 2-4 weeks, with ongoing improvements rolling out over subsequent months. We focus on quick wins first while building longer-term resilience."
  },
  {
    question: "Will this disrupt our business operations?",
    answer: "We design our engagements to minimise disruption. Assessments and advisory work happen alongside your normal operations. Any technical changes are planned, communicated, and implemented during agreed timeframes. Our goal is to protect your business, not interrupt it."
  },
];

async function getServicesPageData() {
  try {
    const data = await fetchGraphQL<any>(GET_SERVICES_PAGE, {}, 300);
    return data.page;
  } catch (error) {
    console.error("Error fetching services page data:", error);
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

export default async function ServicesPage() {
  const pageData = await getServicesPageData();
  const services = await getAllServices();

  // Get content from WordPress or use defaults
  const heroTitle = pageData?.servicesPageFields?.heroTitle || "Cybersecurity Services That Actually Protect Your Business";
  const heroDescription = pageData?.servicesPageFields?.heroDescription || "Stop worrying about cyber threats and start focusing on what you do best—running your business.";
  const heroSubDescription = pageData?.servicesPageFields?.heroSubDescription || "Melbourne-based ADL99 provides practical, no-nonsense cybersecurity services for Australian businesses of all sizes. No jargon, no fear-mongering — just effective protection tailored to your budget, your industry, and your risk profile.";
  const painPoints = pageData?.servicesPageFields?.painPoints && pageData.servicesPageFields.painPoints.length > 0
    ? pageData.servicesPageFields.painPoints
    : defaultPainPoints;
  const faqs = pageData?.servicesPageFields?.faqs && pageData.servicesPageFields.faqs.length > 0
    ? pageData.servicesPageFields.faqs
    : defaultFaqs;

  // Map services for display
  const servicesList = services && services.length > 0
    ? services.map((service: any) => ({
        icon: service.serviceFields?.icon || 'shield',
        title: service.title,
        slug: service.slug,
        description: service.serviceFields?.shortDescription || service.excerpt || '',
        accent: service.serviceFields?.isAccent || service.slug === 'urgent-help',
        link: service.slug === 'urgent-help' ? '/panic-button' : `/services/${service.slug}`,
      }))
    : [];

  // JSON-LD structured data
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Cybersecurity Services",
    "description": "Comprehensive cybersecurity services for Australian businesses.",
    "url": "https://www.adl99.com.au/services"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq: { question: string; answer: string }) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
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
        "name": "Services",
        "item": "https://www.adl99.com.au/services"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />
      <Breadcrumb items={[{ label: "Services" }]} />

      <ServicesPageClient
        heroTitle={heroTitle}
        heroDescription={heroDescription}
        heroSubDescription={heroSubDescription}
        painPoints={painPoints}
        services={servicesList}
        faqs={faqs}
      />

      <Footer />
    </div>
  );
}
