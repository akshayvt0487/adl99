import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

// This would normally come from a CMS or database
const blogPosts: Record<string, {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}> = {
  "essential-eight-maturity-model-explained": {
    title: "Essential Eight Maturity Model Explained: A Guide for Australian Businesses",
    excerpt: "Understanding the Essential Eight framework and how to implement it effectively in your organization to meet ACSC standards.",
    content: `
      <p>The Australian Cyber Security Centre (ACSC) Essential Eight is a baseline cybersecurity framework designed to protect organizations against various cyber threats. Understanding and implementing this framework is crucial for Australian businesses of all sizes.</p>

      <h2>What is the Essential Eight?</h2>
      <p>The Essential Eight consists of eight mitigation strategies that organizations should implement to strengthen their cybersecurity posture:</p>

      <ul>
        <li><strong>Application Control:</strong> Prevent execution of unapproved applications</li>
        <li><strong>Patch Applications:</strong> Keep software up to date</li>
        <li><strong>Configure Microsoft Office Macro Settings:</strong> Control macro execution</li>
        <li><strong>User Application Hardening:</strong> Remove unnecessary features</li>
        <li><strong>Restrict Administrative Privileges:</strong> Limit admin access</li>
        <li><strong>Patch Operating Systems:</strong> Keep OS updated</li>
        <li><strong>Multi-Factor Authentication:</strong> Add extra security layer</li>
        <li><strong>Regular Backups:</strong> Ensure data recovery capability</li>
      </ul>

      <h2>Maturity Levels</h2>
      <p>The Essential Eight framework defines four maturity levels:</p>
      <ul>
        <li><strong>Level 0:</strong> Weaknesses exist in implementation</li>
        <li><strong>Level 1:</strong> Partly aligned with intent</li>
        <li><strong>Level 2:</strong> Mostly aligned with intent</li>
        <li><strong>Level 3:</strong> Fully aligned with intent</li>
      </ul>

      <h2>Getting Started</h2>
      <p>Implementing the Essential Eight requires a systematic approach. Start with a maturity assessment to understand your current position, then develop a roadmap to reach your target maturity level.</p>

      <p>At ADL99, we help Australian businesses assess their current Essential Eight maturity and develop practical implementation plans. Contact us for a free consultation.</p>
    `,
    category: "Compliance",
    author: "ADL99 Security Team",
    date: "2024-03-15",
    readTime: "8 min read",
    image: "/banner-images/services.webp",
  },
  "ransomware-protection-strategies-2024": {
    title: "Ransomware Protection Strategies for 2024: What Australian SMEs Need to Know",
    excerpt: "Learn the latest ransomware trends and proven strategies to protect your business from costly attacks.",
    content: `
      <p>Ransomware attacks continue to evolve and pose significant threats to Australian businesses. In 2024, protecting your organization requires a multi-layered approach combining prevention, detection, and response capabilities.</p>

      <h2>Current Ransomware Landscape</h2>
      <p>Recent trends show that ransomware attackers are increasingly targeting small and medium enterprises (SMEs), often demanding ransoms in the range of $50,000 to $500,000.</p>

      <h2>Key Protection Strategies</h2>

      <h3>1. Implement Robust Backup Solutions</h3>
      <p>Follow the 3-2-1 backup rule: 3 copies of data, on 2 different media types, with 1 copy offsite. Ensure backups are immutable and regularly tested.</p>

      <h3>2. Deploy Email Security</h3>
      <p>Most ransomware enters through phishing emails. Implement advanced email filtering, attachment scanning, and user awareness training.</p>

      <h3>3. Network Segmentation</h3>
      <p>Divide your network into segments to limit the spread of ransomware if one system is compromised.</p>

      <h3>4. Endpoint Detection and Response (EDR)</h3>
      <p>Deploy EDR solutions that can detect and respond to suspicious behavior in real-time.</p>

      <h3>5. Access Control</h3>
      <p>Implement least privilege access and multi-factor authentication across all systems.</p>

      <h2>Incident Response Planning</h2>
      <p>Have a documented incident response plan that includes:</p>
      <ul>
        <li>Initial response procedures</li>
        <li>Communication protocols</li>
        <li>Recovery procedures</li>
        <li>Legal and regulatory reporting requirements</li>
      </ul>

      <p>Need help protecting your business from ransomware? ADL99 provides comprehensive ransomware protection services including assessment, implementation, and 24/7 incident response.</p>
    `,
    category: "Threat Intelligence",
    author: "ADL99 Security Team",
    date: "2024-03-10",
    readTime: "10 min read",
    image: "/banner-images/about.webp",
  },
  "cyber-security-compliance-small-business": {
    title: "Cyber Security Compliance for Small Businesses: Getting Started",
    excerpt: "A practical guide to understanding and implementing cyber security compliance requirements for Australian SMEs.",
    content: `
      <p>Cybersecurity compliance can seem overwhelming for small businesses, but understanding the fundamentals and taking a structured approach makes it manageable and valuable for protecting your business.</p>

      <h2>Why Compliance Matters</h2>
      <p>Compliance with cybersecurity standards helps:</p>
      <ul>
        <li>Protect sensitive data</li>
        <li>Build customer trust</li>
        <li>Avoid regulatory penalties</li>
        <li>Reduce insurance premiums</li>
        <li>Win more business opportunities</li>
      </ul>

      <h2>Key Compliance Frameworks</h2>

      <h3>Essential Eight (ACSC)</h3>
      <p>The baseline cybersecurity framework recommended by the Australian government for all organizations.</p>

      <h3>Privacy Act 1988</h3>
      <p>Governs how personal information is handled by Australian organizations.</p>

      <h3>Notifiable Data Breaches (NDB) Scheme</h3>
      <p>Requires organizations to notify individuals and the OAIC when a data breach is likely to result in serious harm.</p>

      <h3>Industry-Specific Requirements</h3>
      <p>Additional requirements may apply based on your industry (e.g., healthcare, financial services, legal).</p>

      <h2>Getting Started: 5 Steps</h2>

      <h3>Step 1: Identify Your Requirements</h3>
      <p>Determine which compliance frameworks apply to your business based on your industry, size, and data handling practices.</p>

      <h3>Step 2: Conduct a Gap Analysis</h3>
      <p>Assess your current security posture against compliance requirements to identify gaps.</p>

      <h3>Step 3: Develop a Compliance Roadmap</h3>
      <p>Create a prioritized plan to address identified gaps, focusing on high-risk areas first.</p>

      <h3>Step 4: Implement Controls</h3>
      <p>Put technical and procedural controls in place to meet compliance requirements.</p>

      <h3>Step 5: Monitor and Maintain</h3>
      <p>Establish ongoing monitoring and review processes to maintain compliance over time.</p>

      <h2>Common Pitfalls to Avoid</h2>
      <ul>
        <li>Treating compliance as a one-time project</li>
        <li>Focusing only on technical controls</li>
        <li>Neglecting employee training</li>
        <li>Inadequate documentation</li>
        <li>Failing to test incident response plans</li>
      </ul>

      <p>ADL99 helps small businesses navigate cybersecurity compliance with practical, cost-effective solutions. Schedule a free consultation to discuss your compliance needs.</p>
    `,
    category: "Compliance",
    author: "ADL99 Security Team",
    date: "2024-03-05",
    readTime: "7 min read",
    image: "/banner-images/services.webp",
  },
};

// Generate static params for all blog posts
export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

// Generate metadata
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return {
      title: "Blog Post Not Found | ADL99",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | ADL99 Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.adl99.com.au/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://www.adl99.com.au/blog/${slug}`,
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
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
                className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-strong:text-foreground"
                dangerouslySetInnerHTML={{ __html: post.content }}
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
