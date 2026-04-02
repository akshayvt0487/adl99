import { motion } from "framer-motion";
import { Shield, Target, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { fetchGraphQL } from "@/lib/wordpress-server";
import { GET_ABOUT_PAGE } from "@/lib/wordpress-queries";
import { getIcon } from "@/lib/icon-map";
import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

// SEO metadata
export const metadata: Metadata = {
  title: "About ADL99 | Melbourne Cybersecurity Experts",
  description: "ADL99 is a Melbourne-based cybersecurity firm. We help Australian businesses of all sizes protect their data, meet compliance and grow securely.",
  keywords: ["about ADL99", "cybersecurity company", "Australian cybersecurity", "cyber security team"],
  openGraph: {
    title: "About ADL99 | Melbourne Cybersecurity Experts",
    description: "ADL99 is a Melbourne-based cybersecurity firm. We help Australian businesses of all sizes protect their data, meet compliance and grow securely.",
    url: "https://www.adl99.com.au/about",
    type: "website",
    images: [
      {
        url: "https://www.adl99.com.au/about-og.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://www.adl99.com.au/about",
  },
};

// Default values (fallback)
const defaultValues = [
  {
    icon: "Shield",
    title: "Integrity",
    description: "We operate with complete transparency and honesty in all our client relationships."
  },
  {
    icon: "Target",
    title: "Excellence",
    description: "We deliver the highest quality cybersecurity solutions tailored to your needs."
  },
  {
    icon: "Users",
    title: "Partnership",
    description: "We work alongside you as trusted advisors, not just service providers."
  },
  {
    icon: "Clock",
    title: "Responsiveness",
    description: "When you need us, we're there. Our team is ready to respond quickly."
  }
];

const defaultStats = [
  { value: "Fast", label: "Response Times" },
  { value: "100%", label: "Client Focused" },
  { value: "AU", label: "Based in Australia" }
];

const defaultApproachItems = [
  { title: "Assess", description: "We start by understanding your current security posture, identifying vulnerabilities, and evaluating risks specific to your business and industry." },
  { title: "Defend", description: "We implement robust security controls and defenses tailored to your needs, protecting your assets from current and emerging threats." },
  { title: "Leverage", description: "We help you turn security into a business advantage, building trust with clients and partners while enabling secure growth and innovation." }
];

const defaultContent = {
  heroTitle: "About ADL99",
  heroDescription: "A Melbourne-based cybersecurity firm dedicated to protecting Australian businesses of all sizes from evolving digital threats — with practical expertise, no jargon, and a genuine commitment to your security.",
  missionStatement: "Our Mission: Accessible Cybersecurity for Every Melbourne & Australian Business",
  missionDescription: "At ADL99, we believe every Melbourne and Australian business deserves enterprise-grade cybersecurity protection. We're here to demystify cybersecurity and make it accessible, practical, and effective — for organisations of all sizes, from St Kilda Road startups to national enterprises.\n\nFounded with a passion for protecting businesses from cyber threats, ADL99 brings together experienced security professionals who understand the unique challenges facing Australian organizations today.",
  australianOwnedTitle: "Melbourne-Based Cybersecurity Experts Serving Australia",
  australianOwnedDescription: "ADL99 is headquartered at 470 St Kilda Road, Melbourne — giving our clients direct access to a local team that understands the Victorian business landscape. We serve clients across Melbourne, Victoria, and nationally, bringing enterprise-grade security expertise to businesses that previously couldn't access it.",
  valuesTitle: "Our Values",
  valuesDescription: "The principles that guide everything we do at ADL99.",
  approachTitle: "Our Cybersecurity Approach: Assess, Defend, Leverage",
  approachDescription: "Our proven three-step methodology transforms cybersecurity from a checkbox exercise into a strategic business advantage.",
  ctaTitle: "Let's Work Together",
  ctaDescription: "Ready to strengthen your cybersecurity posture? We're here to help.",
  ctaButtonText: "Get in Touch",
  ctaButtonLink: "/contact"
};

async function getAboutPageData() {
  try {
    const data = await fetchGraphQL<any>(GET_ABOUT_PAGE, {}, 300);
    return data.page;
  } catch (error) {
    console.error("Error fetching about page data:", error);
    return null;
  }
}

export default async function AboutPage() {
  const pageData = await getAboutPageData();
  const aboutFields = pageData?.aboutFields;

  // Use WordPress data or fallback to defaults
  const heroTitle = aboutFields?.heroTitle || defaultContent.heroTitle;
  const heroDescription = aboutFields?.heroDescription || defaultContent.heroDescription;
  const missionStatement = aboutFields?.missionStatement || defaultContent.missionStatement;
  const missionDescription = aboutFields?.missionDescription || defaultContent.missionDescription;
  const australianOwnedTitle = aboutFields?.australianOwnedTitle || defaultContent.australianOwnedTitle;
  const australianOwnedDescription = aboutFields?.australianOwnedDescription || defaultContent.australianOwnedDescription;
  const valuesTitle = aboutFields?.valuesTitle || defaultContent.valuesTitle;
  const valuesDescription = aboutFields?.valuesDescription || defaultContent.valuesDescription;
  const approachTitle = aboutFields?.approachTitle || defaultContent.approachTitle;
  const approachDescription = aboutFields?.approachDescription || defaultContent.approachDescription;
  const ctaTitle = aboutFields?.ctaTitle || defaultContent.ctaTitle;
  const ctaDescription = aboutFields?.ctaDescription || defaultContent.ctaDescription;
  const ctaButtonText = aboutFields?.ctaButtonText || defaultContent.ctaButtonText;
  const ctaButtonLink = aboutFields?.ctaButtonLink || defaultContent.ctaButtonLink;

  const values = aboutFields?.values?.length ? aboutFields.values : defaultValues;
  const stats = aboutFields?.stats?.length ? aboutFields.stats : defaultStats;
  const approachItems = aboutFields?.approachItems?.length ? aboutFields.approachItems : defaultApproachItems;

  // JSON-LD structured data
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
        "name": "About",
        "item": "https://www.adl99.com.au/about"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />
      <Breadcrumb items={[{ label: "About" }]} />

      <AboutPageClient
        heroTitle={heroTitle}
        heroDescription={heroDescription}
        missionStatement={missionStatement}
        missionDescription={missionDescription}
        australianOwnedTitle={australianOwnedTitle}
        australianOwnedDescription={australianOwnedDescription}
        valuesTitle={valuesTitle}
        valuesDescription={valuesDescription}
        values={values}
        stats={stats}
        approachTitle={approachTitle}
        approachDescription={approachDescription}
        approachItems={approachItems}
        ctaTitle={ctaTitle}
        ctaDescription={ctaDescription}
        ctaButtonText={ctaButtonText}
        ctaButtonLink={ctaButtonLink}
      />

      <Footer />
    </div>
  );
}
