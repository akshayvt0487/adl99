import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import MelbournePageClient from "./MelbournePageClient";

export const metadata: Metadata = {
  title: "Cybersecurity Services Melbourne | ADL99 — Melbourne's Trusted Cyber Security Partner",
  description: "ADL99 delivers expert cybersecurity services to Melbourne businesses. From cyber maturity assessments to 24/7 incident response — protect your data, meet compliance, and get peace of mind. Book a free consultation.",
  keywords: [
    "cybersecurity Melbourne",
    "cyber security Melbourne",
    "cybersecurity company Melbourne",
    "managed cybersecurity Melbourne",
    "IT security Melbourne",
    "penetration testing Melbourne",
    "vCISO Melbourne",
    "Essential 8 compliance Melbourne",
    "incident response Melbourne",
    "cybersecurity for small business Melbourne",
  ],
  alternates: {
    canonical: "https://www.adl99.com.au/locations/melbourne",
  },
  openGraph: {
    title: "Cybersecurity Services Melbourne | ADL99",
    description: "Melbourne's trusted cybersecurity partner. Expert assessments, vCISO services, incident response & awareness training for Australian businesses.",
    url: "https://www.adl99.com.au/locations/melbourne",
    siteName: "ADL99",
    locale: "en_AU",
    type: "website",
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
      addressLocality: "Melbourne",
      addressRegion: "VIC",
      addressCountry: "AU",
    },
    areaServed: [
      "Melbourne CBD",
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
        name: "How much do cybersecurity services cost for Melbourne businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cybersecurity costs vary significantly depending on your business size, risk profile, and scope of work. For Melbourne SMBs, a cyber maturity assessment typically starts from a few thousand dollars and gives you a clear picture of your exposure. Ongoing advisory or vCISO services are structured as monthly retainers — often comparable to a fraction of what a single breach would cost. ADL99 provides transparent, fixed-scope pricing with no hidden fees. Book a free consultation to receive a scoping estimate tailored to your business.",
        },
      },
      {
        "@type": "Question",
        name: "Does my Melbourne business need the Essential Eight?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Essential Eight is the Australian Signals Directorate's baseline cybersecurity mitigation framework, and while it's mandatory only for Commonwealth entities, it has become the de facto standard for risk management across Australian businesses of all sizes. Melbourne businesses in regulated industries (finance, health, legal) are increasingly expected to demonstrate Essential Eight maturity by clients, partners, and cyber insurers. ADL99 helps you assess your current maturity level and build a practical roadmap to improve it.",
        },
      },
      {
        "@type": "Question",
        name: "What should I do if my Melbourne business has been hacked?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you suspect an active breach: isolate affected systems from the network immediately, do not power off devices (preserves forensic evidence), and contact ADL99's emergency response line. We provide immediate remote incident response for Melbourne businesses — breach containment, forensic triage, and recovery planning. You should also notify the Office of the Australian Information Commissioner (OAIC) if personal data has been exposed, as required under the Notifiable Data Breaches scheme.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a cybersecurity assessment take for a Melbourne business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For a typical Melbourne SMB (10–100 employees), a cyber maturity assessment takes between 3 and 10 business days depending on scope and complexity. The process includes a discovery session, documentation review, technical interviews, and delivery of a prioritised findings report with actionable recommendations. Larger or more complex organisations may require a longer engagement.",
        },
      },
      {
        "@type": "Question",
        name: "What industries in Melbourne are most targeted by cybercriminals?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Based on ACSC reporting and ADL99's experience, the most heavily targeted sectors in Melbourne are: professional services (law firms and accounting practices) for their access to client financial and legal data; healthcare for patient records; retail and hospitality for payment card data; and financial services for direct access to funds. However, no industry is immune — Melbourne SMBs are targeted precisely because they often have less mature defences than large enterprises.",
        },
      },
      {
        "@type": "Question",
        name: "Does ADL99 work with Melbourne businesses remotely or on-site?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Both. Most ADL99 engagements are conducted remotely, which keeps costs lower and allows us to work efficiently. For incident response, on-site forensic work, or sensitive executive briefings, our Melbourne-based team can attend in person. We cover all of Greater Melbourne and regional Victoria.",
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
