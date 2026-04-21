import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import BlogContent from "@/components/BlogContent";
import ShareButton from "@/components/ShareButton";
import MobileCTA from "@/components/MobileCTA";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getBlogPost, getAllBlogSlugs, getAllBlogPosts } from "@/lib/markdown";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs;
}

// Generate metadata
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = getBlogPost(slug);

    return {
      title: `${post.title}`,
      description: post.description,
      keywords: [
        // Extract keywords from category and title
        post.category.toLowerCase(),
        'cybersecurity Australia',
        'cyber security',
        'Melbourne',
        'Australian business',
        'security compliance',
        'cyber threats',
        'data protection',
        'ADL99',
      ],
      authors: [{ name: post.author }],
      creator: post.author,
      publisher: 'ADL99 Cybersecurity',
      category: post.category,
      alternates: {
        canonical: `https://www.adl99.com.au/blog/${slug}`,
      },
      openGraph: {
        title: post.title,
        description: post.description,
        type: "article",
        url: `https://www.adl99.com.au/blog/${slug}`,
        siteName: 'ADL99 Cybersecurity',
        locale: 'en_AU',
        publishedTime: post.date,
        modifiedTime: post.date,
        authors: [post.author],
        section: post.category,
        tags: [post.category, 'Cybersecurity', 'Australia', 'Security'],
        images: [
          {
            url: `https://www.adl99.com.au${post.image}`,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        site: '@adl99cyber',
        creator: '@adl99cyber',
        title: post.title,
        description: post.description,
        images: [`https://www.adl99.com.au${post.image}`],
      },
      robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
    };
  } catch {
    return {
      title: "Blog Post Not Found | ADL99",
      description: "The requested blog post could not be found.",
    };
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  let post;
  try {
    post = getBlogPost(slug);
  } catch {
    notFound();
  }

  // Get related posts (same category, exclude current post, limit to 3)
  const allPosts = getAllBlogPosts();
  const relatedPosts = allPosts
    .filter(p => p.slug !== slug && p.category === post.category)
    .slice(0, 3);

  // If not enough related posts from same category, add more from other categories
  if (relatedPosts.length < 3) {
    const additionalPosts = allPosts
      .filter(p => p.slug !== slug && !relatedPosts.includes(p))
      .slice(0, 3 - relatedPosts.length);
    relatedPosts.push(...additionalPosts);
  }

  // JSON-LD structured data for SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://www.adl99.com.au/blog/${slug}#article`,
    headline: post.title,
    description: post.description,
    image: {
      "@type": "ImageObject",
      url: `https://www.adl99.com.au${post.image}`,
      width: 1200,
      height: 630,
    },
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://www.adl99.com.au",
    },
    publisher: {
      "@type": "Organization",
      name: "ADL99 Cybersecurity",
      url: "https://www.adl99.com.au",
      logo: {
        "@type": "ImageObject",
        url: "https://www.adl99.com.au/android-chrome-512x512.png",
        width: 512,
        height: 512,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.adl99.com.au/blog/${slug}`,
    },
    articleSection: post.category,
    keywords: `${post.category}, cybersecurity, Australia, cyber security, Melbourne, ${post.title}`,
    inLanguage: "en-AU",
    isAccessibleForFree: true,
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
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://www.adl99.com.au/blog/${slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <main>
        {/* Hero Section */}
        <article itemScope itemType="https://schema.org/BlogPosting">
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 mr-3 text-primary-foreground/80 hover:text-primary-foreground mb-8 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Back to Blog</span>
              </Link>

              <div className="inline-block px-4 py-2 bg-accent text-accent-foreground text-sm font-semibold rounded-full mb-6">
                {post.category}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight" itemProp="headline">
                {post.title}
              </h1>

              <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed" itemProp="description">
                {post.description}
              </p>

              <meta itemProp="datePublished" content={post.date} />
              <meta itemProp="dateModified" content={post.date} />
              <meta itemProp="author" content={post.author} />
              <meta itemProp="image" content={`https://www.adl99.com.au${post.image}`} />

              <div className="flex flex-wrap items-center gap-6 text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span className="font-medium">{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{new Date(post.date).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Table of Contents / Quick Links */}
        <section className="py-8 bg-muted/30 border-b border-border">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>Last updated: {post.updated}</span>
                </div>
                <ShareButton
                  title={post.title}
                  url={`https://www.adl99.com.au/blog/${slug}`}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-3" itemProp="articleBody">
                  <BlogContent content={post.content || ''} />
                </div>

                {/* Sidebar - Fixed on Scroll */}
                <aside className="lg:col-span-1">
                  <div className="space-y-6 sticky top-24">
                    {/* Quick Contact Card */}
                    <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-foreground mb-3">Need Expert Help?</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Get a free consultation with our cybersecurity team.
                      </p>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        Book Consultation
                      </Link>
                    </div>

                    {/* Related Services */}
                    <div className="bg-card border border-border rounded-xl p-6">
                      <h3 className="text-lg font-bold text-foreground mb-4">Related Services</h3>
                      <div className="space-y-3">
                        <Link href="/services/cyber-maturity-assessments" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                          → Cyber Maturity Assessment
                        </Link>
                        <Link href="/services/vciso" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                          → vCISO Services
                        </Link>
                        <Link href="/services/technical-advisory" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                          → Technical Advisory
                        </Link>
                        <Link href="/services/cyber-awareness-training" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                          → Security Training
                        </Link>
                      </div>
                    </div>

                    {/* Emergency Contact */}
                    <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-red-600 mb-2">Under Attack?</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Get immediate incident response support.
                      </p>
                      <Link
                        href="/cyber-security-urgent-help"
                        className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
                      >
                        Emergency Help
                      </Link>
                    </div>
                  </div>
                </aside>
              </div>

              {/* Related Posts Section */}
              {relatedPosts.length > 0 && (
                <div className="mt-20 pt-12 border-t border-border">
                  <div className="flex items-center gap-3 mb-8">
                    <BookOpen className="w-6 h-6 text-primary" />
                    <h2 className="text-3xl font-bold text-foreground">Related Articles</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.slug}
                        href={`/blog/${relatedPost.slug}`}
                        className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all"
                      >
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                              {relatedPost.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(relatedPost.date).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{relatedPost.readTime}</span>
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                            {relatedPost.description}
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
              )}
            </div>
          </div>
        </section>
        </article>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {/* Main CTA */}
              <div className="bg-primary rounded-2xl p-8 md:p-12 text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                  Ready to Strengthen Your Cybersecurity?
                </h2>
                <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                  Get expert guidance tailored to your business needs. Schedule a free consultation with our cybersecurity team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-background text-foreground font-medium hover:bg-background/90 transition-colors shadow-lg"
                  >
                    Book Free Consultation
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-primary-foreground text-primary-foreground font-medium hover:bg-primary-foreground/10 transition-colors"
                  >
                    View All Services
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              {/* Related Articles */}
              <div className="text-center">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <span>Back to All Articles</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MobileCTA />
      <Footer />
    </div>
  );
}
