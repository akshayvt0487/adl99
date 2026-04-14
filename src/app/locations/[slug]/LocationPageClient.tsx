'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle2, Phone, Mail, ArrowRight, HelpCircle, Search, Lightbulb, Briefcase, BookOpen, Building2, AlertTriangle, FileText, Users, Link as LinkIcon, Target, Database, Cloud, CreditCard, MapPin, Award, TrendingUp, Clock, Layers, CloudCog, Zap, DollarSign } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface LocationPageClientProps {
  locationName: string;
  heroTitle: string;
  heroSubtext: string;
  introH2: string;
  introSubtext: string;
  introChallenges: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  servicesIntro: string;
  services: Array<{
    title: string;
    description: string;
  }>;
  whyAdl99H2: string;
  whyAdl99Intro: string;
  whyAdl99Points: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  whyAdl99Cta: string;
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

// Icon mapping for services
const serviceIcons = [Search, Briefcase, Lightbulb, BookOpen, AlertTriangle, Shield];

// Icon mapping for industries
const industryIcons = [Building2, Building2, Building2, Building2];

// Icon mapping for intro challenges
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  FileText,
  Users,
  Link: LinkIcon,
  Target,
  Database,
  Cloud,
  CreditCard,
};

// Icon mapping for Why ADL99 points
const whyAdl99IconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MapPin,
  Award,
  TrendingUp,
  Clock,
  Layers,
  CloudCog,
  Zap,
  DollarSign,
};

export default function LocationPageClient({
  locationName,
  heroTitle,
  heroSubtext,
  introH2,
  introSubtext,
  introChallenges,
  servicesIntro,
  services,
  whyAdl99H2,
  whyAdl99Intro,
  whyAdl99Points,
  whyAdl99Cta,
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

      {/* Security Challenges Section */}
      <section className="py-20 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -ml-48 -mb-48" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold uppercase tracking-wide mb-4">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Challenges We Solve
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 uppercase tracking-wide">
              {introH2}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {introSubtext}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {introChallenges.map((challenge, index) => {
              const IconComponent = iconMap[challenge.icon] || Shield;
              return (
                <motion.div
                  key={challenge.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative bg-card border border-border rounded-2xl p-8 hover:shadow-lg hover:border-accent/30 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                    <IconComponent className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 uppercase tracking-wide">
                    {challenge.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {challenge.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
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
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wide mb-4">
                <Shield className="w-4 h-4 mr-2" />
                Our Services
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 uppercase tracking-wide">
                {locationName} Cyber Security Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {servicesIntro}
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = serviceIcons[index % serviceIcons.length];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-bold mb-3 uppercase tracking-wide">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why ADL99 Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wide mb-4">
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Why Choose Us
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 uppercase tracking-wide">
                {whyAdl99H2}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {whyAdl99Intro}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {whyAdl99Points.map((point, index) => {
                const IconComponent = whyAdl99IconMap[point.icon] || Shield;
                return (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative bg-card border border-border rounded-2xl p-8 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-3 uppercase tracking-wide">
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-br from-accent/5 to-primary/5 border border-accent/20 rounded-2xl p-8"
            >
              <p className="text-lg font-semibold text-foreground">
                {whyAdl99Cta}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold uppercase tracking-wide mb-4">
                <Building2 className="w-4 h-4 mr-2" />
                Industries We Serve
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 uppercase tracking-wide">
                Industries We Protect in {locationName}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Specialized cybersecurity solutions tailored for your industry's unique challenges and compliance requirements.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8">
              {industries.map((industry, index) => {
                const IconComponent = industryIcons[index % industryIcons.length];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card p-8 rounded-2xl border border-border hover:border-accent/40 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-display text-xl font-bold mb-3 uppercase tracking-wide">{industry.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{industry.description}</p>
                    <Button variant="link" className="p-0 text-accent font-semibold gap-2 group-hover:gap-3 transition-all" asChild>
                      <Link href={industry.link}>
                        Learn more <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Threats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold uppercase tracking-wide mb-4">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Threat Intelligence
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 uppercase tracking-wide">
                Cyber Threats Facing {locationName} Businesses
              </h2>
              <p className="text-lg text-muted-foreground">
                {threatsIntro}
              </p>
            </motion.div>
            <div className="space-y-6">
              {threats.map((threat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative bg-card p-8 rounded-2xl border-l-4 border-accent hover:shadow-lg transition-all duration-300 group overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-300" />
                  <div className="relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <AlertTriangle className="w-5 h-5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display text-xl font-bold mb-3 uppercase tracking-wide">{threat.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{threat.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-gradient-to-br from-accent/5 via-primary/5 to-background border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wide mb-4">
              <CheckCircle2 className="w-4 h-4 mr-2" />
              Trusted Partner
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 uppercase tracking-wide">
              {locationName}'s Trusted Cyber Security Provider
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Australian-owned, Melbourne-based cybersecurity expertise you can rely on.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300"
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
                className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300"
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
                className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300"
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
