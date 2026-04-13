'use client';

import { Button } from "@/components/ui/button";
import { Shield, CheckCircle2, Phone, Mail } from "lucide-react";
import Link from "next/link";

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
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-background py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              {heroTitle}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {heroSubtext}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" asChild>
                <Link href="/contact">Get Your Free Cyber Assessment</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/panic-button">Emergency Support</Link>
              </Button>
            </div>
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Essential Eight Aligned</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>NIST Framework</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>ISO 27001</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Australian-Owned</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Keyword Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div dangerouslySetInnerHTML={{ __html: introContent }} />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <p className="text-lg text-muted-foreground max-w-3xl">
                {servicesIntro}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why ADL99 Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div dangerouslySetInnerHTML={{ __html: whyAdl99Content }} />
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold mb-3">{industry.title}</h3>
                  <p className="text-muted-foreground mb-4">{industry.description}</p>
                  <Button variant="link" className="p-0" asChild>
                    <Link href={industry.link}>Learn more →</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Threats Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8">{threatsIntro}</p>
            <div className="space-y-6">
              {threats.map((threat, index) => (
                <div key={index} className="border-l-4 border-primary pl-6 py-4">
                  <h3 className="text-xl font-semibold mb-2">{threat.title}</h3>
                  <p className="text-muted-foreground">{threat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {locationName}'s Trusted Cyber Security Provider
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">ACSC Aligned</h3>
                <p className="text-sm text-muted-foreground">
                  Essential Eight compliant
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Australian-Owned</h3>
                <p className="text-sm text-muted-foreground">
                  Local expertise, local support
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">24/7 Response</h3>
                <p className="text-sm text-muted-foreground">
                  Emergency support when you need it
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Cyber Security FAQs for {locationName} Businesses
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b pb-6">
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Cyber Security Services for Your {locationName} Business Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Talk to ADL99's Melbourne cybersecurity team. Book a free consultation or call us for immediate support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Book Free Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <a href="tel:0370673373">
                  <Phone className="mr-2 h-5 w-5" />
                  03 7067 3373
                </a>
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm opacity-90">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@adl99.com.au" className="hover:underline">
                  info@adl99.com.au
                </a>
              </div>
              <span className="hidden sm:inline">|</span>
              <span>470 St Kilda Road, Melbourne VIC 3004</span>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Suburbs Section */}
      {nearbySuburbs.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">
                Cyber Security Services in Nearby Suburbs
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {nearbySuburbs.map((suburb, index) => (
                  <Link
                    key={index}
                    href={`/locations/${suburb.slug}`}
                    className="block p-4 bg-card rounded-lg border hover:border-primary transition-colors"
                  >
                    <h3 className="font-semibold mb-1">{suburb.name}</h3>
                    <p className="text-sm text-muted-foreground">{suburb.postcode}</p>
                    <span className="text-sm text-primary mt-2 inline-block">
                      Cyber Security Services in {suburb.name} →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
