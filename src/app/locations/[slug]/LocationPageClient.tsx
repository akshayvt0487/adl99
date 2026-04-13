'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle2, Phone, Mail, ArrowRight, HelpCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface LocationPageClientProps {
  locationName: string;
  heroTitle: string;
  heroSubtext: string;
  introContent: string;
  servicesIntro: string;
  services: Array<{
    title: string;
    description: string;
  }>;
  whyAdl99Content: string;
  industries: Array<{
    title: string;
    description: string;
    link: string;
  }>;
  threatsIntro: string;
  threats: Array<{
    title: string;
    description: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  nearbySuburbs: Array<{
    name: string;
    postcode: string;
    slug: string;
  }>;
}

export default function LocationPageClient({
  locationName,
  heroTitle,
  heroSubtext,
  introContent,
  servicesIntro,
  services,
  whyAdl99Content,
  industries,
  threatsIntro,
  threats,
  faqs,
  nearbySuburbs,
}: LocationPageClientProps) {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/banner-images/services.webp"
            alt={`Cybersecurity Services in ${locationName}`}
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
              <Shield className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 uppercase tracking-wide">
              {heroTitle}
            </h1>
            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-6 md:p-8 mb-8">
              <p className="text-primary-foreground/90 text-base md:text-lg leading-relaxed">
                {heroSubtext}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="accent" size="lg" asChild>
                <Link href="/contact">Get Your Free Cyber Assessment</Link>
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
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>Essential Eight Aligned</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>NIST Framework</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>ISO 27001</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>Australian-Owned</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Primary Keyword Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto prose prose-lg prose-headings:font-display prose-headings:uppercase prose-headings:tracking-wide prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground"
          >
            <div dangerouslySetInnerHTML={{ __html: introContent }} />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-lg text-muted-foreground max-w-3xl">
                {servicesIntro}
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card p-8 rounded-2xl border border-border"
                >
                  <h3 className="font-display text-xl font-bold mb-3 uppercase tracking-wide">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why ADL99 Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto prose prose-lg prose-headings:font-display prose-headings:uppercase prose-headings:tracking-wide prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground"
          >
            <div dangerouslySetInnerHTML={{ __html: whyAdl99Content }} />
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card p-8 rounded-2xl border border-border"
                >
                  <h3 className="font-display text-xl font-bold mb-3 uppercase tracking-wide">{industry.title}</h3>
                  <p className="text-muted-foreground mb-4">{industry.description}</p>
                  <Button variant="link" className="p-0 text-primary font-semibold gap-2" asChild>
                    <Link href={industry.link}>
                      Learn more <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Threats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground mb-8"
            >
              {threatsIntro}
            </motion.p>
            <div className="space-y-6">
              {threats.map((threat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card p-8 rounded-2xl border-l-4 border-accent"
                >
                  <h3 className="font-display text-xl font-bold mb-3 uppercase tracking-wide">{threat.title}</h3>
                  <p className="text-muted-foreground">{threat.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-accent/5 border-y border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 uppercase tracking-wide">
              {locationName}'s Trusted Cyber Security Provider
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 mb-4">
                  <Shield className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-display font-bold mb-2 uppercase tracking-wide">ACSC Aligned</h3>
                <p className="text-sm text-muted-foreground">
                  Essential Eight compliant
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 mb-4">
                  <Shield className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-display font-bold mb-2 uppercase tracking-wide">Australian-Owned</h3>
                <p className="text-sm text-muted-foreground">
                  Local expertise, local support
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 mb-4">
                  <Shield className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-display font-bold mb-2 uppercase tracking-wide">24/7 Response</h3>
                <p className="text-sm text-muted-foreground">
                  Emergency support when you need it
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
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
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wide">
                Cyber Security FAQs for {locationName} Businesses
              </h2>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-card rounded-2xl border border-border p-6"
                >
                  <h3 className="font-display text-xl font-bold mb-3 uppercase tracking-wide">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 uppercase tracking-wide">
              Get Cyber Security Services for Your {locationName} Business Today
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/80">
              Talk to ADL99's Melbourne cybersecurity team. Book a free consultation or call us for immediate support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" variant="accent" className="gap-2" asChild>
                <Link href="/contact">
                  Book Free Consultation <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <a href="tel:0370673373">
                  <Phone className="mr-2 h-5 w-5" />
                  03 7067 3373
                </a>
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@adl99.com.au" className="hover:underline">
                  info@adl99.com.au
                </a>
              </div>
              <span className="hidden sm:inline">|</span>
              <span>470 St Kilda Road, Melbourne VIC 3004</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nearby Suburbs Section */}
      {nearbySuburbs.length > 0 && (
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-2xl md:text-3xl font-bold mb-8 text-center uppercase tracking-wide"
              >
                Cyber Security Services in Nearby Suburbs
              </motion.h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {nearbySuburbs.map((suburb, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <Link
                      href={`/locations/${suburb.slug}`}
                      className="block p-6 bg-card rounded-2xl border border-border hover:border-primary transition-colors"
                    >
                      <h3 className="font-display font-bold mb-1 uppercase tracking-wide">{suburb.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{suburb.postcode}</p>
                      <span className="text-sm text-primary font-semibold inline-flex items-center gap-2">
                        Cyber Security Services in {suburb.name} <ArrowRight className="w-3 h-3" />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
