import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import BlogContent from "@/components/BlogContent";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Download, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getBlogPost, getAllBlogSlugs } from "@/lib/markdown";

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
    const post = await getBlogPost(slug);

    return {
      title: `${post.title} | ADL99 Blog`,
      description: post.description,
      alternates: {
        canonical: `https://www.adl99.com.au/blog/${slug}`,
      },
      openGraph: {
        title: post.title,
        description: post.description,
        type: "article",
        url: `https://www.adl99.com.au/blog/${slug}`,
        publishedTime: post.date,
        authors: [post.author],
        images: [
          {
            url: `https://www.adl99.com.au${post.image}`,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
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
    post = await getBlogPost(slug);
  } catch {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
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
                className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Back to Blog</span>
              </Link>

              <div className="inline-block px-4 py-2 bg-accent text-accent-foreground text-sm font-semibold rounded-full mb-6">
                {post.category}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                {post.title}
              </h1>

              <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                {post.description}
              </p>

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

                <div className="flex items-center gap-3">
                  <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground bg-background border border-border rounded-lg hover:bg-muted transition-colors">
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                  <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors">
                    <Download className="w-4 h-4" />
                    <span>Download PDF</span>
                  </button>
                </div>
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
                <div className="lg:col-span-3">
                  <BlogContent content={post.content || ''} />
                </div>

                {/* Sidebar */}
                <aside className="lg:col-span-1">
                  <div className="sticky top-24 space-y-6">
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
                        <Link href="/services/cyber-maturity" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                          → Cyber Maturity Assessment
                        </Link>
                        <Link href="/services/vciso" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                          → vCISO Services
                        </Link>
                        <Link href="/services/compliance" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                          → Compliance Services
                        </Link>
                        <Link href="/services/cyber-awareness" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
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
                        href="/panic-button"
                        className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
                      >
                        Emergency Help
                      </Link>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>

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

      <Footer />
    </div>
  );
}
