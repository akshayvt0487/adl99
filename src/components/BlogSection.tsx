import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  image: string;
}

interface BlogSectionProps {
  posts: BlogPost[];
}

export default function BlogSection({ posts }: BlogSectionProps) {
  // Show only the 3 most recent posts
  const recentPosts = posts.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            <span>Latest Insights</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Cybersecurity Blog & Resources
          </h2>
          <p className="text-lg text-muted-foreground">
            Expert insights, best practices, and industry trends to help Australian businesses strengthen their cybersecurity posture.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {recentPosts.map((post) => (
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
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
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

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium shadow-lg"
          >
            View All Articles
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
