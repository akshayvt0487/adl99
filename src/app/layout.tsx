import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  preload: true,
  variable: '--font-oswald',
});

// Viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1a2332',
};

// Complete SEO metadata for maximum search engine ranking
export const metadata: Metadata = {
  metadataBase: new URL("https://www.adl99.com.au"),
  title: {
    default: "ADL99 Cybersecurity | Expert Cyber Security Services Australia",
    template: "%s | ADL99 Cybersecurity",
  },
  description:
    "Leading Australian cybersecurity consulting firm. We protect businesses with vCISO services, cyber maturity assessments, Essential Eight compliance, penetration testing & 24/7 security monitoring. Defend your digital assets today.",
  keywords: [
    // Core services
    "cybersecurity Australia",
    "cyber security Melbourne",
    "cybersecurity consulting Australia",
    "vCISO Australia",
    "virtual CISO services",
    "cyber security consultant Melbourne",

    // Compliance & frameworks
    "Essential Eight compliance",
    "Essential Eight assessment",
    "ISO 27001 certification Australia",
    "NIST cybersecurity framework",
    "cyber maturity assessment",
    "cybersecurity audit Australia",

    // Security services
    "penetration testing Australia",
    "vulnerability assessment",
    "security risk assessment",
    "cyber incident response",
    "security awareness training",
    "data breach prevention",

    // Industry specific
    "healthcare cybersecurity Australia",
    "financial services cyber security",
    "legal firm cybersecurity",
    "manufacturing cybersecurity",
    "small business cyber security",

    // Location based
    "Melbourne cybersecurity",
    "Sydney cyber security",
    "Australian cyber security firm",
    "cyber security services Victoria",
  ],
  authors: [{ name: "ADL99 Cybersecurity", url: "https://www.adl99.com.au" }],
  creator: "ADL99 Cybersecurity",
  publisher: "ADL99 Cybersecurity",
  category: "Cybersecurity Services",
  classification: "Business",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://www.adl99.com.au",
    siteName: "ADL99 Cybersecurity",
    title: "ADL99 Cybersecurity | Expert Cyber Security Services Australia",
    description: "Protect your business with Australia's trusted cybersecurity experts. vCISO, Essential Eight compliance, penetration testing & 24/7 security monitoring. Get a free security assessment today.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ADL99 Cybersecurity - Leading Australian Cyber Security Consultants",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@adl99cyber",
    creator: "@adl99cyber",
    title: "ADL99 Cybersecurity | Expert Cyber Security Services Australia",
    description: "Protect your business with Australia's trusted cybersecurity experts. vCISO, Essential Eight, penetration testing & more.",
    images: {
      url: "/og-image.png",
      alt: "ADL99 Cybersecurity - Leading Australian Cyber Security Consultants",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    languages: {
      'en-AU': 'https://www.adl99.com.au',
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "3gFhBW6fieXbDasiUGflD-707pSA-D4ai8-FZ_dBtgA",
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Organization Schema for enhanced SERP display
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.adl99.com.au/#organization",
    name: "ADL99 Cybersecurity",
    alternateName: "ADL99",
    url: "https://www.adl99.com.au",
    logo: {
      "@type": "ImageObject",
      url: "https://www.adl99.com.au/og-image.png",
      width: 1200,
      height: 630,
    },
    description: "Leading Australian cybersecurity consulting firm specializing in vCISO services, Essential Eight compliance, and comprehensive security solutions.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "VIC",
      addressLocality: "Melbourne",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -37.8136,
      longitude: 144.9631,
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Australia",
      },
      {
        "@type": "State",
        name: "Victoria",
      },
      {
        "@type": "State",
        name: "New South Wales",
      },
    ],
    serviceType: [
      "Cybersecurity Consulting",
      "vCISO Services",
      "Penetration Testing",
      "Security Awareness Training",
      "Cyber Maturity Assessment",
      "Essential Eight Compliance",
      "ISO 27001 Implementation",
    ],
    priceRange: "$$",
    knowsAbout: [
      "Cybersecurity",
      "Information Security",
      "Essential Eight",
      "ISO 27001",
      "NIST Framework",
      "Cyber Risk Management",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.adl99.com.au/#website",
    url: "https://www.adl99.com.au",
    name: "ADL99 Cybersecurity",
    description: "Expert cybersecurity services for Australian businesses",
    publisher: {
      "@id": "https://www.adl99.com.au/#organization",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.adl99.com.au/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en-AU">
      <head>
        {/* Preconnect for performance - fonts handled by next/font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Additional meta tags for enhanced SEO */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="application-name" content="ADL99 Cybersecurity" />
        <meta name="apple-mobile-web-app-title" content="ADL99" />
        <meta name="format-detection" content="telephone=no" />

        {/* Geo tags for local SEO */}
        <meta name="geo.region" content="AU-VIC" />
        <meta name="geo.placename" content="Melbourne" />
        <meta name="geo.position" content="-37.8136;144.9631" />
        <meta name="ICBM" content="-37.8136, 144.9631" />

        {/* Rating & content classification */}
        <meta name="rating" content="general" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        {/* Structured Data - Organization & Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${oswald.variable} ${inter.className}`}>
        <Providers>{children}</Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
