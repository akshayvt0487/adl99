"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceContactForm from "@/components/ServiceContactForm";
import { WPService } from "@/lib/wordpress";
import { getIcon } from "@/lib/icon-map";
import { servicesFallbackData } from "@/lib/services-fallback-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ServicePageClientProps {
  service: WPService;
}

export default function ServicePageClient({ service }: ServicePageClientProps) {
  // Use WordPress data with fallback support
  const fallbackData = servicesFallbackData[service.slug];
  const IconComponent = getIcon(service.serviceFields?.icon || fallbackData?.painPoints?.[0]?.icon || "shield");

  // Prioritize WordPress content, fall back to fallback data if needed
  const heroHeadline = service.serviceFields?.heroHeadline || service.title;
  const heroSubheadline = service.serviceFields?.heroSubheadline || fallbackData?.heroSubheadline || "";
  const introTitle = fallbackData?.introTitle || "";
  const introContent = service.content || fallbackData?.introContent || "";
  const painPointsTitle = fallbackData?.painPointsTitle || "Sound Familiar?";
  const benefitsTitle = fallbackData?.benefitsTitle || "Key Benefits";
  const rightForYouTitle = fallbackData?.rightForYouTitle || "Is This Right For You?";
  const faqTitle = fallbackData?.faqTitle || "Frequently Asked Questions";

  const painPoints = service.serviceFields?.painPoints || fallbackData?.painPoints || [];
  const benefits = service.serviceFields?.benefits || fallbackData?.benefits || [];
  const rightForYou = service.serviceFields?.rightForYou || fallbackData?.rightForYou || [];
  const whatsIncluded = service.serviceFields?.whatsIncluded || fallbackData?.whatsIncluded || [];
  const faqs = service.serviceFields?.faqs || fallbackData?.faqs || [];
  const formBenefits = service.serviceFields?.formBenefits?.map((b) => b.benefit) || fallbackData?.formBenefits?.map((b) => b.benefit) || [];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Breadcrumb
        items={[
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
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
              {heroHeadline}
            </h1>
            {heroSubheadline && (
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8">
                {heroSubheadline}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="accent" size="lg" asChild>
                <a href="#contact-form">Get Started</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10"
                asChild
              >
                <a href="#benefits">See Benefits</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Content Section */}
      {(introTitle || introContent) && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              {introTitle && (
                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 text-center">
                  {introTitle}
                </h2>
              )}
              {introContent && (
                <div
                  className="prose prose-lg prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4"
                  dangerouslySetInnerHTML={{ __html: introContent }}
                />
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* Pain Points Section */}
      {painPoints.length > 0 && (
          <section className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 uppercase tracking-wide">
                  {painPointsTitle}
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  These are the challenges we help you overcome.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {painPoints.map((point, index) => {
                  const PointIcon = getIcon(point.icon || "alert-triangle");
                  return (
                    <motion.div
                      key={point.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-card rounded-2xl p-6 border border-border"
                    >
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                        <PointIcon className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="font-display text-lg font-bold text-foreground mb-2">
                        {point.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {point.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

      {/* Benefits Grid */}
      {benefits.length > 0 && (
          <section id="benefits" className="py-20 scroll-mt-24">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 uppercase tracking-wide">
                  {benefitsTitle}
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((item, index) => {
                  const BenefitIcon = getIcon(item.icon || "check-circle");
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-card rounded-2xl p-6 border border-border text-center"
                    >
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <BenefitIcon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="font-display text-lg font-bold text-foreground mb-2 uppercase tracking-wide">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

      {/* Right For You / What's Included Section */}
      {(rightForYou.length > 0 || whatsIncluded.length > 0) && (
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Right For You */}
              {rightForYou.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 uppercase tracking-wide">
                      {rightForYouTitle}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8">
                      This service is ideal if you:
                    </p>
                    <ul className="space-y-4">
                      {rightForYou.map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                          </div>
                          <span className="text-muted-foreground">
                            {item.item}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}

              {/* What's Included */}
              {whatsIncluded.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-card rounded-2xl p-8 border border-border"
                  >
                    <h3 className="font-display text-2xl font-bold text-foreground mb-4 uppercase tracking-wide">
                      What&apos;s Included
                    </h3>
                    <ul className="space-y-3">
                      {whatsIncluded.map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                          </div>
                          <span className="text-muted-foreground">
                            {item.item}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 uppercase tracking-wide">
                {faqTitle}
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <AccordionItem
                      value={`item-${index}`}
                      className="bg-card border border-border rounded-xl px-6"
                    >
                      <AccordionTrigger className="text-left font-display text-foreground hover:no-underline py-5">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}

      {/* Contact Form */}
      <ServiceContactForm serviceName={service.title} benefits={formBenefits} />

      <Footer />
    </div>
  );
}
