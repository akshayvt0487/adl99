import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
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
        <section className="relative py-20 overflow-hidden">
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
                className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Blog</span>
              </Link>
              <div className="inline-block px-3 py-1 bg-accent text-accent-foreground text-sm font-semibold rounded-full mb-4">
                {post.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div
                className="prose prose-lg max-w-none
                  prose-headings:font-bold
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
                  prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
                  prose-p:text-muted-foreground prose-p:leading-relaxed
                  prose-li:text-muted-foreground
                  prose-strong:text-foreground
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                  prose-blockquote:border-l-primary prose-blockquote:bg-muted/30 prose-blockquote:py-1"
                dangerouslySetInnerHTML={{ __html: post.content || '' }}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Strengthen Your Cybersecurity?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get expert guidance tailored to your business needs. Schedule a free consultation with our cybersecurity team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border bg-background text-foreground font-medium hover:bg-muted transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
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
