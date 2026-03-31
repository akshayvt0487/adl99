"use client";

import { motion } from "framer-motion";
import { ArrowRight, HelpCircle, CheckCircle, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { WPIndustry } from "@/lib/wordpress";
import { getIcon } from "@/lib/icon-map";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Map slugs to banner image filenames
const getIndustryBannerImage = (slug: string) => {
  const imageMap: Record<string, string> = {
    "law-firms": "Law Firms.webp",
    "health-clinics": "Health Clinics.webp",
    "accounting": "Accounting.webp",
    "retail": "Retail.webp",
    "manufacturing": "Manufacturing.webp",
    "research": "Research.webp"
  };

  return imageMap[slug] || "services.webp";
};

// Industry-specific section titles per SEO CSV
const getIndustrySectionTitles = (slug: string) => {
  const titles: Record<string, { challenges: string; solutions: string; faq: string }> = {
    "law-firms": {
      challenges: "Key Cybersecurity Challenges Facing Melbourne & Australian Law Firms",
      solutions: "Cybersecurity Solutions for Melbourne & Australian Law Firms",
      faq: "Law Firm Cybersecurity FAQ"
    },
    "health-clinics": {
      challenges: "Cybersecurity Challenges Facing Melbourne & Australian Healthcare Providers",
      solutions: "Cybersecurity Solutions for Melbourne Health Clinics & Medical Practices",
      faq: "Healthcare Cybersecurity FAQ"
    },
    "accounting": {
      challenges: "Cybersecurity Challenges for Melbourne & Australian Accounting Firms",
      solutions: "Cybersecurity Solutions for Melbourne Accounting Firms",
      faq: "Accounting Firm Cybersecurity FAQ"
    },
    "retail": {
      challenges: "Cybersecurity Threats Facing Melbourne & Australian Retailers",
      solutions: "Cybersecurity Solutions for Melbourne & Australian Retail Businesses",
      faq: "Retail Cybersecurity FAQ"
    },
    "manufacturing": {
      challenges: "Cyber Threats Facing Melbourne & Australian Manufacturers",
      solutions: "Cybersecurity Solutions for Melbourne & Australian Manufacturers",
      faq: "Manufacturing Cybersecurity FAQ"
    },
    "research": {
      challenges: "Cybersecurity Challenges for Australian Research Institutions",
      solutions: "Cybersecurity Solutions for Australian Research Organisations",
      faq: "Research Organisation Cybersecurity FAQ"
    }
  };

  return titles[slug] || {
    challenges: "Industry-Specific Challenges",
    solutions: "Tailored Security Solutions",
    faq: "Frequently Asked Questions"
  };
};

interface IndustryPageClientProps {
  industry: WPIndustry;
}

export default function IndustryPageClient({
  industry,
}: IndustryPageClientProps) {
  const IconComponent = getIcon(industry.industryFields?.icon || "building");
  const sectionTitles = getIndustrySectionTitles(industry.slug);
  const bannerImage = getIndustryBannerImage(industry.slug);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Breadcrumb
        items={[
          { label: "Industries", href: "/industries" },
          { label: industry.title },
        ]}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={`/banner-images/${bannerImage}`}
            alt={industry.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mb-6">
              <IconComponent className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 uppercase tracking-wide">
              {industry.industryFields?.heroHeadline ||
                `Cybersecurity for ${industry.title}`}
            </h1>
            {(industry.industryFields?.heroSubheadline ||
              industry.industryFields?.shortDescription) && (
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-4 font-medium leading-relaxed">
                {industry.industryFields.heroSubheadline ||
                  industry.industryFields.shortDescription}
              </p>
            )}
            {industry.industryFields?.heroDescription && (
              <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-6 md:p-8 mb-8">
                <p className="text-primary-foreground/90 text-base md:text-lg leading-relaxed">
                  {industry.industryFields.heroDescription}
                </p>
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="accent" size="lg" asChild>
                <Link href="/contact">Get a Free Security Assessment</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="/panic-button">Experiencing an Incident?</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      {industry.industryFields?.statistics &&
        industry.industryFields.statistics.length > 0 && (
          <section className="py-16 bg-accent/5 border-y border-border">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {industry.industryFields.statistics.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <p className="font-display text-3xl md:text-4xl font-bold text-accent mb-2">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground mb-1">
                      {stat.label}
                    </p>
                    {stat.source && (
                      <p className="text-xs text-muted-foreground/60 italic">
                        {stat.source}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

      {/* Challenges Section */}
      {industry.industryFields?.challenges &&
        industry.industryFields.challenges.length > 0 && (
          <section className="py-20">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center mb-12"
              >
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 uppercase tracking-wide">
                  {sectionTitles.challenges}
                </h2>
                <p className="text-muted-foreground text-lg">
                  Understanding the unique cybersecurity threats facing{" "}
                  {industry.title.toLowerCase()}.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {industry.industryFields.challenges.map((item, index) => {
                  const ChallengeIcon = getIcon(item.icon || "alert-triangle");
                  return (
                    <motion.article
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-card rounded-2xl p-8 border border-border"
                    >
                      <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                        <ChallengeIcon className="w-7 h-7 text-accent" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-foreground mb-3 uppercase tracking-wide">
                        {item.title}
                      </h3>
                      <div
                        className="text-muted-foreground mb-4"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                      {item.impact && (
                        <p className="text-sm text-accent font-medium flex items-center gap-2">
                          <TrendingUp className="w-4 h-4" />
                          {item.impact}
                        </p>
                      )}
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </section>
        )}

      {/* Pain Points Section */}
      {industry.industryFields?.painPoints &&
        industry.industryFields.painPoints.length > 0 && (
          <section className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center mb-12"
              >
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 uppercase tracking-wide">
                  We Understand Your Concerns
                </h2>
                <p className="text-muted-foreground text-lg">
                  Common hesitations and how we address them.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {industry.industryFields.painPoints.map((point, index) => {
                  const PointIcon = getIcon(point.icon || "alert-triangle");
                  return (
                    <motion.div
                      key={point.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-card rounded-2xl p-8 border border-border"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <PointIcon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-display text-lg font-bold text-foreground mb-3">
                        {point.title}
                      </h3>
                      <div
                        className="text-muted-foreground"
                        dangerouslySetInnerHTML={{ __html: point.description }}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

      {/* Solutions Section */}
      {industry.industryFields?.solutions &&
        industry.industryFields.solutions.length > 0 && (
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 uppercase tracking-wide">
                    {sectionTitles.solutions}
                  </h2>
                  <p className="text-muted-foreground mb-8 text-lg">
                    Our comprehensive approach to protecting{" "}
                    {industry.title.toLowerCase()}.
                  </p>

                  <div className="space-y-6">
                    {industry.industryFields.solutions.map((solution, index) => {
                      const SolutionIcon = getIcon(
                        solution.icon || "check-circle"
                      );
                      return (
                        <motion.div
                          key={solution.title}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="flex items-start gap-4"
                        >
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                            <SolutionIcon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-1">
                              {solution.title}
                            </h3>
                            <div
                              className="text-muted-foreground text-sm"
                              dangerouslySetInnerHTML={{ __html: solution.description }}
                            />
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Why Choose Us Card */}
                {industry.industryFields?.whyChooseUs &&
                  industry.industryFields.whyChooseUs.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="lg:sticky lg:top-24"
                    >
                      <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
                        <div className="flex items-center gap-3 mb-6">
                          <CheckCircle className="w-8 h-8" />
                          <h2 className="font-display text-2xl font-bold uppercase tracking-wide">
                            Why Choose ADL99?
                          </h2>
                        </div>
                        <ul className="space-y-4 mb-8">
                          {industry.industryFields.whyChooseUs.map(
                            (item, index) => (
                              <li key={index} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                <span>{item.item}</span>
                              </li>
                            )
                          )}
                        </ul>
                        <Button
                          variant="accent"
                          size="lg"
                          className="w-full gap-2"
                          asChild
                        >
                          <Link href="/contact">
                            Book Your Free Assessment{" "}
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </motion.div>
                  )}
              </div>
            </div>
          </section>
        )}

      {/* Main Content */}
      {industry.content && (
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div
              className="prose prose-lg max-w-4xl mx-auto prose-headings:font-display prose-headings:uppercase prose-headings:tracking-wide prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground"
              dangerouslySetInnerHTML={{ __html: industry.content }}
            />
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {industry.industryFields?.faqs &&
        industry.industryFields.faqs.length > 0 && (
          <section className="py-20">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto"
              >
                <div className="text-center mb-12">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <HelpCircle className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 uppercase tracking-wide">
                    {sectionTitles.faq}
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Common questions from {industry.title.toLowerCase()}.
                  </p>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  {industry.industryFields.faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <AccordionItem
                        value={`item-${index}`}
                        className="bg-card rounded-xl border border-border px-6"
                      >
                        <AccordionTrigger className="text-left font-semibold hover:no-underline">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          <div
                            dangerouslySetInnerHTML={{ __html: faq.answer }}
                          />
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              </motion.div>
            </div>
          </section>
        )}

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6 uppercase tracking-wide">
              Ready to Protect Your Business?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Get a free security assessment tailored to your industry&apos;s
              specific needs and compliance requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" className="gap-2" asChild>
                <Link href="/contact">
                  Book Free Assessment <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
