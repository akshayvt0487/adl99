import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getAllBlogPosts } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Cybersecurity Blog & Insights | Expert Advice for Australian Businesses",
  description: "Expert cybersecurity insights, best practices, and industry trends. Stay informed about the latest security threats and protective measures for Australian businesses. Essential 8, compliance, and security tips.",
  keywords: [
    'cybersecurity blog',
    'cyber security insights',
    'Australia cybersecurity',
    'security best practices',
    'Essential 8',
    'compliance guides',
    'cyber threats Australia',
    'security news',
    'Melbourne cybersecurity',
    'business security tips',
  ],
  alternates: {
    canonical: 'https://www.adl99.com.au/blog',
  },
  openGraph: {
    title: "Cybersecurity Blog & Insights | ADL99",
    description: "Expert cybersecurity insights, best practices, and industry trends for Australian businesses.",
    type: "website",
    url: 'https://www.adl99.com.au/blog',
    siteName: 'ADL99 Cybersecurity',
    locale: 'en_AU',
    images: [
      {
        url: 'https://www.adl99.com.au/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'ADL99 Cybersecurity Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@adl99cyber',
    creator: '@adl99cyber',
    title: "Cybersecurity Blog & Insights | ADL99",
    description: "Expert cybersecurity insights, best practices, and industry trends for Australian businesses.",
    images: ['https://www.adl99.com.au/opengraph-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function BlogPage() {
  const blogPosts = getAllBlogPosts();

  // JSON-LD for Blog listing page
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://www.adl99.com.au/blog#blog",
    url: "https://www.adl99.com.au/blog",
    name: "ADL99 Cybersecurity Blog",
    description: "Expert cybersecurity insights, best practices, and industry trends for Australian businesses",
    publisher: {
      "@type": "Organization",
      name: "ADL99 Cybersecurity",
      url: "https://www.adl99.com.au",
      logo: {
        "@type": "ImageObject",
        url: "https://www.adl99.com.au/opengraph-image.png",
        width: 1200,
        height: 630,
      },
    },
    blogPost: blogPosts.map(post => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      image: `https://www.adl99.com.au${post.image}`,
      datePublished: post.date,
      url: `https://www.adl99.com.au/blog/${post.slug}`,
      author: {
        "@type": "Organization",
        name: post.author,
      },
    })),
  };

  const breadcrumbSchema = {
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
        name: "Blog",
        item: "https://www.adl99.com.au/blog",
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />
      <main className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="border-b border-border bg-muted/30">
          <div className="container mx-auto px-6 py-4">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
              ]}
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <BookOpen className="w-4 h-4" />
                <span>Cybersecurity Insights</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6" itemProp="name">
                Cybersecurity Blog & Resources
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Expert insights, industry trends, and practical advice to help Australian businesses strengthen their cybersecurity posture.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                      {post.description}
                    </p>
                    <div className="flex items-center text-sm text-primary font-medium group-hover:gap-2 transition-all">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Need Expert Cybersecurity Guidance?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our team of cybersecurity professionals is ready to help protect your business. Get a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border bg-background text-foreground font-medium hover:bg-muted transition-colors"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
