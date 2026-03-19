"use client"

import Link from "next/link";

interface IntroSectionProps {
  title: string;
  description: string;
  links?: {
    text: string;
    href: string;
  }[];
}

const IntroSection = ({ title, description, links }: IntroSectionProps) => {
  // Split description and insert links where the link text appears
  const renderDescription = () => {
    if (!links || links.length === 0) {
      return <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">{description}</p>;
    }

    // Replace link text with actual Link components
    let remaining = description;
    const elements: React.ReactNode[] = [];
    let keyCounter = 0;

    links.forEach((link) => {
      const index = remaining.indexOf(link.text);
      if (index !== -1) {
        // Add text before the link
        if (index > 0) {
          elements.push(
            <span key={`text-${keyCounter++}`}>{remaining.substring(0, index)}</span>
          );
        }
        // Add the link
        elements.push(
          <Link
            key={`link-${keyCounter++}`}
            href={link.href}
            className="text-accent hover:text-accent/80 underline transition-colors"
          >
            {link.text}
          </Link>
        );
        // Update remaining text
        remaining = remaining.substring(index + link.text.length);
      }
    });

    // Add any remaining text
    if (remaining) {
      elements.push(<span key={`text-${keyCounter++}`}>{remaining}</span>);
    }

    return (
      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
        {elements}
      </p>
    );
  };

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
            {title}
          </h2>
          {renderDescription()}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
