import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import LocationPageClient from "./LocationPageClient";
import { getLocationBySlug, getAllLocationSlugs } from "@/data/locations";

interface LocationPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params
export async function generateStaticParams() {
  const slugs = getAllLocationSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata
export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return {
      title: "Location Not Found | ADL99",
      description: "The requested location could not be found.",
    };
  }

  return {
    title: location.seoTitle,
    description: location.seoDescription,
    alternates: {
      canonical: `https://www.adl99.com.au/locations/${slug}`,
    },
    openGraph: {
      title: location.seoTitle,
      description: location.seoDescription,
      type: "website",
      url: `https://www.adl99.com.au/locations/${slug}`,
      images: [
        {
          url: `https://www.adl99.com.au/og-image.jpg`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: location.seoTitle,
      description: location.seoDescription,
      images: [`https://www.adl99.com.au/og-image.jpg`],
    },
  };
}

// Server component
export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  // JSON-LD structured data
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": `ADL99 Cybersecurity - ${location.name}`,
    "description": location.seoDescription,
    "url": `https://www.adl99.com.au/locations/${slug}`,
    "areaServed": {
      "@type": "City",
      "name": location.name,
      "addressRegion": "VIC",
      "addressCountry": "AU"
    },
    "priceRange": "$$",
    "telephone": "+61370673373",
    "email": "info@adl99.com.au"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": location.faqs.map((faq) => ({
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
        "name": "Locations",
        "item": "https://www.adl99.com.au/locations"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": location.name,
        "item": `https://www.adl99.com.au/locations/${slug}`
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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
      <Breadcrumb items={[{ label: "Locations", href: "/locations" }, { label: location.name }]} />

      <LocationPageClient
        locationName={location.name}
        heroTitle={location.heroTitle}
        heroSubtext={location.heroSubtext}
        introH2={location.introH2}
        introSubtext={location.introSubtext}
        introChallenges={location.introChallenges}
        whyAdl99H2={location.whyAdl99H2}
        whyAdl99Intro={location.whyAdl99Intro}
        whyAdl99Points={location.whyAdl99Points}
        whyAdl99Cta={location.whyAdl99Cta}
        industries={location.industries}
        threatsIntro={location.threatsIntro}
        threats={location.threats.map(t => ({ title: t.title, description: t.description }))}
        faqs={location.faqs}
        nearbySuburbs={location.nearbySuburbs}
      />

      <Footer />
    </div>
  );
}
