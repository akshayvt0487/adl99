"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { getIcon } from "@/lib/icon-map";
import GravityForm from "@/components/GravityForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface PainPoint {
  icon: string;
  title: string;
  description: string;
}

interface Service {
  icon: string;
  title: string;
  slug: string;
  description: string;
  accent: boolean;
  link: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface ServicesPageClientProps {
  heroTitle: string;
  heroDescription: string;
  heroSubDescription: string;
  painPoints: PainPoint[];
  services: Service[];
  faqs: FAQ[];
}

export default function ServicesPageClient({
  heroTitle,
  heroDescription,
  heroSubDescription,
  painPoints,
  services,
  faqs,
}: ServicesPageClientProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/banner-images/services.webp"
            alt="Cybersecurity Services"
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
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 uppercase tracking-wide">
              {heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-4">
              {heroDescription}
            </p>
            <p className="text-primary-foreground/70 mb-8">
              {heroSubDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="accent" size="lg" asChild>
                <a href="#contact-form">Get Your Free Consultation</a>
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10" asChild>
                <a href="#services">Explore Our Services</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Cybersecurity Services for Melbourne & Australian Businesses
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From cyber maturity assessments and virtual CISO services to phishing training and emergency incident response, ADL99 offers a complete cybersecurity service suite. Whether you're a <Link href="/locations/melbourne" className="text-primary hover:text-primary/80 underline">Melbourne</Link> SMB or a multi-location Australian business, we scale our protection to fit your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 uppercase tracking-wide">
              Common Cybersecurity Challenges Facing Melbourne Businesses
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              These are the concerns we hear every day from business owners just like you.
              You're not alone—and there are solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((point, index) => {
              const IconComponent = getIcon(point.icon || 'alert-triangle');
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-accent" />
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

      {/* Services Grid */}
      <section id="services" className="py-20 scroll-mt-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 uppercase tracking-wide">
              Our Cybersecurity Services Explained
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              From emergency response to strategic planning, we offer comprehensive cybersecurity
              services designed for Australian businesses of all sizes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = getIcon(service.icon);
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={service.link} className="block h-full">
                    <div className={`rounded-2xl p-8 border h-full transition-all duration-300 hover:shadow-lg ${
                      service.accent
                        ? "bg-accent/5 border-accent/20 hover:border-accent/40"
                        : "bg-card border-border hover:border-primary/30"
                    }`}>
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                        service.accent ? "bg-accent/10" : "bg-primary/10"
                      }`}>
                        <IconComponent className={`w-8 h-8 ${
                          service.accent ? "text-accent" : "text-primary"
                        }`} />
                      </div>
                      <h3 className="font-display text-2xl font-bold text-foreground mb-4 uppercase tracking-wide">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <span className={`inline-flex items-center gap-2 font-semibold ${
                        service.accent ? "text-accent" : "text-primary"
                      }`}>
                        Learn More <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 uppercase tracking-wide">
              Cybersecurity Services FAQ — Melbourne Businesses
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
                  <AccordionItem value={`item-${index}`} className="bg-card border border-border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-display text-foreground hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 leading-relaxed [&>p]:mb-2">
                      <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 uppercase tracking-wide">
                Ready to Protect Your Business?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Take the first step towards comprehensive cybersecurity. Schedule your free
                consultation and let's discuss how we can help protect your business.
              </p>
              <ul className="space-y-4">
                {[
                  "Free 30-minute consultation",
                  "No-obligation security assessment",
                  "Tailored recommendations for your business",
                  "Clear pricing with no hidden costs"
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 border border-border"
            >
              <h3 className="font-display text-2xl font-bold text-foreground mb-6 uppercase tracking-wide">
                Get In Touch
              </h3>
              <GravityForm
                formId={2}
                submitButtonClassName="w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
