import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

// Viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1a2332',
};

// Complete SEO metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://adl99.com.au"),
  title: {
    default: "ADL99 Cybersecurity | Assess • Defend • Leverage",
    template: "%s | ADL99 Cybersecurity",
  },
  description:
    "ADL99 provides expert cybersecurity services for Australian businesses. Protect your data, meet compliance requirements, and build cyber resilience with our tailored security solutions.",
  keywords: [
    "cybersecurity Australia",
    "cyber security Melbourne",
    "cybersecurity consulting",
    "Essential Eight",
    "ISO 27001",
    "NIST",
    "cyber maturity assessment",
    "vCISO",
    "cyber security services",
    "Australian cybersecurity",
  ],
  authors: [{ name: "ADL99 Cybersecurity" }],
  creator: "ADL99 Cybersecurity",
  publisher: "ADL99 Cybersecurity",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://adl99.com.au",
    siteName: "ADL99 Cybersecurity",
    title: "ADL99 Cybersecurity | Assess • Defend • Leverage",
    description: "Expert cybersecurity services for Australian businesses. Protect your data and build cyber resilience.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ADL99 Cybersecurity - Australian Cyber Security Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ADL99 Cybersecurity | Assess • Defend • Leverage",
    description: "Expert cybersecurity services for Australian businesses.",
    images: ["/og-image.png"],
    creator: "@adl99cyber",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://adl99.com.au",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU">
      <head>
        {/* Additional meta tags that Next.js doesn't handle via Metadata API */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
