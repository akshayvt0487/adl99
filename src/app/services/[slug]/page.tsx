import { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchGraphQL } from "@/lib/wordpress-server";
import { GET_SERVICE_BY_SLUG, GET_ALL_SERVICES } from "@/lib/wordpress-queries";
import { WPService } from "@/lib/wordpress";
import ServicePageClient from "./ServicePageClient";
import { servicesFallbackData } from "@/lib/services-fallback-data";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all services using fallback data
export async function generateStaticParams() {
  // Use fallback data instead of WordPress
  return Object.keys(servicesFallbackData).map((slug) => ({
    slug,
  }));
}

// SEO metadata for specific services
const serviceSEO: Record<string, { title: string; description: string }> = {
  "cyber-maturity": {
    title: "Cyber Maturity Assessment Services Melbourne | ADL99",
    description: "Know where your business stands against NIST, ISO 27001 & Essential Eight. ADL99 delivers a clear cyber security roadmap and gap analysis.",
  },
  "technical-advisory": {
    title: "Cybersecurity Technical Advisory Services | ADL99 Melbourne",
    description: "Navigate complex security decisions with confidence. ADL99's Melbourne advisors provide expert guidance on architecture, risk management and compliance.",
  },
  "engineering-support": {
    title: "Cybersecurity Engineering Support Services | ADL99 Melbourne",
    description: "Hands-on security implementation from ADL99's Melbourne engineers — deploying and optimising your network defence, endpoint protection and cloud security.",
  },
  "cyber-awareness": {
    title: "Cyber Awareness Training  | ADL99 Melbourne",
    description: "Turn your employees into your strongest defence. ADL99 delivers phishing simulations, staff training and security awareness programs for Australian workplaces.",
  },
  "vciso": {
    title: "Virtual CISO (vCISO) Services Melbourne | ADL99",
    description: "Get executive-level cybersecurity leadership without the full-time cost. ADL99's Melbourne vCISO provides strategic oversight, governance and board reporting.",
  },
};

// Generate metadata for SEO using fallback data
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;

  const customSEO = serviceSEO[slug];
  const fallbackData = servicesFallbackData[slug];

  if (!customSEO && !fallbackData) {
    return {
      title: "Service Not Found | ADL99",
      description: "The requested service could not be found.",
    };
  }

  return {
    title: customSEO?.title || `${fallbackData?.heroHeadline} | ADL99`,
    description: customSEO?.description || fallbackData?.heroSubheadline || "",
    alternates: {
      canonical: `https://www.adl99.com.au/services/${slug}`,
    },
    openGraph: {
      title: customSEO?.title || fallbackData?.heroHeadline || "",
      description: customSEO?.description || fallbackData?.heroSubheadline || "",
      type: "website",
      url: `https://www.adl99.com.au/services/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: customSEO?.title || fallbackData?.heroHeadline || "",
      description: customSEO?.description || fallbackData?.heroSubheadline || "",
    },
  };
}

// Server component - uses fallback data instead of WordPress
export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;

  const fallbackData = servicesFallbackData[slug];

  if (!fallbackData) {
    notFound();
  }

  // Create a mock WPService object with just the slug and title
  // The ServicePageClient will use fallback data for everything else
  const mockService: WPService = {
    id: slug,
    slug: slug,
    title: fallbackData.heroHeadline,
    content: "",
    excerpt: "",
    serviceFields: null,
    seo: null,
    featuredImage: null,
  };

  return <ServicePageClient service={mockService} />;
}
