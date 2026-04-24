import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Shield, Users, Zap, FileText, CheckCircle2, AlertTriangle, Search, Briefcase, BookOpen, Lightbulb, MapPin, Award, TrendingUp, Clock, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Cybersecurity Services Melbourne | ADL99 — Melbourne's Trusted Cyber Security Partner",
  description: "ADL99 delivers expert cybersecurity services to Melbourne businesses. From cyber maturity assessments to 24/7 incident response — protect your data, meet compliance, and get peace of mind. Book a free consultation.",
  keywords: [
    "cybersecurity Melbourne",
    "cyber security Melbourne",
    "cybersecurity company Melbourne",
    "managed cybersecurity Melbourne",
    "IT security Melbourne",
    "penetration testing Melbourne",
    "vCISO Melbourne",
    "Essential 8 compliance Melbourne",
    "incident response Melbourne",
    "cybersecurity for small business Melbourne",
  ],
  alternates: {
    canonical: "https://www.adl99.com.au/locations/melbourne",
  },
  openGraph: {
    title: "Cybersecurity Services Melbourne | ADL99",
    description: "Melbourne's trusted cybersecurity partner. Expert assessments, vCISO services, incident response & awareness training for Australian businesses.",
    url: "https://www.adl99.com.au/locations/melbourne",
    siteName: "ADL99",
    locale: "en_AU",
    type: "website",
  },
};

const structuredData = {
  localBusiness: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ADL99 Cybersecurity Melbourne",
    description:
      "Melbourne-based cybersecurity firm providing assessments, vCISO services, incident response, and awareness training for Australian businesses.",
    url: "https://www.adl99.com.au/locations/melbourne",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Melbourne",
      addressRegion: "VIC",
      addressCountry: "AU",
    },
    areaServed: [
      "Melbourne CBD",
      "Richmond",
      "South Melbourne",
      "St Kilda",
      "Docklands",
      "Southbank",
      "Carlton",
      "Fitzroy",
      "Collingwood",
      "Hawthorn",
      "Toorak",
      "Dandenong",
      "Clayton",
      "Footscray",
      "Sunshine",
      "Brunswick",
    ],
    serviceType: [
      "Cybersecurity Assessment",
      "vCISO Services",
      "Incident Response",
      "Cyber Awareness Training",
      "Penetration Testing",
      "Essential 8 Compliance",
    ],
    priceRange: "$$",
  },
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.adl99.com.au",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Locations",
        item: "https://www.adl99.com.au/locations",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Melbourne",
        item: "https://www.adl99.com.au/locations/melbourne",
      },
    ],
  },
  faqPage: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much do cybersecurity services cost for Melbourne businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cybersecurity costs vary significantly depending on your business size, risk profile, and scope of work. For Melbourne SMBs, a cyber maturity assessment typically starts from a few thousand dollars and gives you a clear picture of your exposure. Ongoing advisory or vCISO services are structured as monthly retainers — often comparable to a fraction of what a single breach would cost. ADL99 provides transparent, fixed-scope pricing with no hidden fees. Book a free consultation to receive a scoping estimate tailored to your business.",
        },
      },
      {
        "@type": "Question",
        name: "Does my Melbourne business need the Essential Eight?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Essential Eight is the Australian Signals Directorate's baseline cybersecurity mitigation framework, and while it's mandatory only for Commonwealth entities, it has become the de facto standard for risk management across Australian businesses of all sizes. Melbourne businesses in regulated industries (finance, health, legal) are increasingly expected to demonstrate Essential Eight maturity by clients, partners, and cyber insurers. ADL99 helps you assess your current maturity level and build a practical roadmap to improve it.",
        },
      },
      {
        "@type": "Question",
        name: "What should I do if my Melbourne business has been hacked?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you suspect an active breach: isolate affected systems from the network immediately, do not power off devices (preserves forensic evidence), and contact ADL99's emergency response line. We provide immediate remote incident response for Melbourne businesses — breach containment, forensic triage, and recovery planning. You should also notify the Office of the Australian Information Commissioner (OAIC) if personal data has been exposed, as required under the Notifiable Data Breaches scheme.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a cybersecurity assessment take for a Melbourne business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For a typical Melbourne SMB (10–100 employees), a cyber maturity assessment takes between 3 and 10 business days depending on scope and complexity. The process includes a discovery session, documentation review, technical interviews, and delivery of a prioritised findings report with actionable recommendations. Larger or more complex organisations may require a longer engagement.",
        },
      },
      {
        "@type": "Question",
        name: "What industries in Melbourne are most targeted by cybercriminals?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Based on ACSC reporting and ADL99's experience, the most heavily targeted sectors in Melbourne are: professional services (law firms and accounting practices) for their access to client financial and legal data; healthcare for patient records; retail and hospitality for payment card data; and financial services for direct access to funds. However, no industry is immune — Melbourne SMBs are targeted precisely because they often have less mature defences than large enterprises.",
        },
      },
      {
        "@type": "Question",
        name: "Does ADL99 work with Melbourne businesses remotely or on-site?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Both. Most ADL99 engagements are conducted remotely, which keeps costs lower and allows us to work efficiently. For incident response, on-site forensic work, or sensitive executive briefings, our Melbourne-based team can attend in person. We cover all of Greater Melbourne and regional Victoria.",
        },
      },
    ],
  },
};

const stats = [
  { value: "1 in 6", label: "Australian businesses hit by cybercrime last year" },
  { value: "$4.88M", label: "Average cost of a data breach in Australia" },
  { value: "38%", label: "Rise in cyber attacks in the past 12 months" },
  { value: "87%", label: "Of breaches involve a human element (phishing, credential theft)" },
];

const services = [
  {
    title: "Cyber Maturity Assessment",
    description:
      "Know exactly where your business stands against the Essential Eight and ASD frameworks. ADL99 benchmarks your current security posture, identifies your real risk exposure, and gives you a clear, prioritised roadmap — not a 200-page report no one reads.",
    link: "/services/cyber-maturity-assessments",
    icon: Search,
  },
  {
    title: "Virtual CISO (vCISO)",
    description:
      "Melbourne businesses with 10–200 employees rarely need a full-time CISO — but they do need executive-level security leadership. ADL99's vCISO service gives you strategic oversight, board reporting, and security program governance at a fraction of the cost.",
    link: "/services/vciso",
    icon: Lightbulb,
  },
  {
    title: "Cyber Awareness Training",
    description:
      "Your people are your biggest vulnerability — and your strongest defence. ADL99 runs tailored phishing simulations and awareness programs built around the real threats hitting Melbourne businesses right now, not generic slide decks from 2019.",
    link: "/services/cyber-awareness-training",
    icon: BookOpen,
  },
  {
    title: "Emergency Incident Response",
    description:
      "If your business is under attack right now, ADL99 provides immediate remote incident response and breach containment for Melbourne organisations. Don't wait — every minute a breach is active, the damage grows.",
    link: "/cyber-security-urgent-help",
    icon: AlertTriangle,
    badge: "🚨 24/7 Emergency Line Available",
  },
  {
    title: "Technical Advisory",
    description:
      "Navigate the crowded cybersecurity vendor landscape with confidence. ADL99 provides vendor-agnostic guidance on security tools, architecture decisions, and infrastructure choices — so Melbourne businesses invest in what actually works for their environment.",
    link: "/services/technical-advisory",
    icon: Shield,
  },
  {
    title: "Security Engineering Support",
    description:
      "Buying security tools is easy. Making them work together is hard. ADL99's engineering team implements, configures, and manages your security stack — ensuring your investments actually protect you, not just tick compliance boxes.",
    link: "/services/engineering-support",
    icon: Briefcase,
  },
];

const industries = [
  {
    title: "Law Firms Melbourne",
    description:
      "Client confidentiality, legal professional privilege, and regulatory compliance make Melbourne law firms a prime target. ADL99 understands the unique obligations of legal practices.",
    link: "/industries/law-firms",
  },
  {
    title: "Health Clinics Melbourne",
    description:
      "Patient data is the most valuable data on the dark web. Melbourne health clinics must meet Australian Privacy Act obligations and manage connected device risks.",
    link: "/industries/health-clinics",
  },
  {
    title: "Accounting Practices Melbourne",
    description:
      "Tax season creates a concentrated window of vulnerability. ADL99 helps Melbourne accounting firms protect ATO-linked systems and client financial data.",
    link: "/industries/accounting",
  },
  {
    title: "Retail Chains Melbourne",
    description:
      "Multi-location retail operations face POS vulnerabilities, supply chain risks, and e-commerce attack surfaces.",
    link: "/industries/retail",
  },
  {
    title: "Manufacturing Melbourne",
    description:
      "Melbourne's manufacturing corridor faces OT/IT convergence risks and ransomware attacks that can halt production lines.",
    link: "/industries/manufacturing",
  },
  {
    title: "Research Organisations Melbourne",
    description:
      "Melbourne's university and research sector is increasingly targeted by nation-state actors seeking IP.",
    link: "/industries/research",
  },
];

const coverageAreas = [
  "Melbourne CBD",
  "Docklands",
  "Southbank",
  "St Kilda",
  "South Yarra",
  "Toorak",
  "Richmond",
  "Collingwood",
  "Fitzroy",
  "Carlton",
  "Brunswick",
  "Footscray",
  "Sunshine",
  "Williamstown",
  "Port Melbourne",
  "South Melbourne",
  "Hawthorn",
  "Camberwell",
  "Glen Waverley",
  "Clayton",
  "Dandenong",
  "Frankston",
  "Ringwood",
  "Box Hill",
  "Essendon",
  "Moonee Ponds",
  "Tullamarine",
  "Craigieburn",
  "Epping",
  "Bundoora",
];

const faqs = [
  {
    question: "How much do cybersecurity services cost for Melbourne businesses?",
    answer:
      "Cybersecurity costs vary significantly depending on your business size, risk profile, and scope of work. For Melbourne SMBs, a cyber maturity assessment typically starts from a few thousand dollars and gives you a clear picture of your exposure. Ongoing advisory or vCISO services are structured as monthly retainers — often comparable to a fraction of what a single breach would cost. ADL99 provides transparent, fixed-scope pricing with no hidden fees. Book a free consultation to receive a scoping estimate tailored to your business.",
  },
  {
    question: "Does my Melbourne business need the Essential Eight?",
    answer:
      "The Essential Eight is the Australian Signals Directorate's baseline cybersecurity mitigation framework, and while it's mandatory only for Commonwealth entities, it has become the de facto standard for risk management across Australian businesses of all sizes. Melbourne businesses in regulated industries (finance, health, legal) are increasingly expected to demonstrate Essential Eight maturity by clients, partners, and cyber insurers. ADL99 helps you assess your current maturity level and build a practical roadmap to improve it.",
  },
  {
    question: "What should I do if my Melbourne business has been hacked?",
    answer:
      "If you suspect an active breach: isolate affected systems from the network immediately, do not power off devices (preserves forensic evidence), and contact ADL99's emergency response line. We provide immediate remote incident response for Melbourne businesses — breach containment, forensic triage, and recovery planning. You should also notify the Office of the Australian Information Commissioner (OAIC) if personal data has been exposed, as required under the Notifiable Data Breaches scheme.",
  },
  {
    question: "How long does a cybersecurity assessment take for a Melbourne business?",
    answer:
      "For a typical Melbourne SMB (10–100 employees), a cyber maturity assessment takes between 3 and 10 business days depending on scope and complexity. The process includes a discovery session, documentation review, technical interviews, and delivery of a prioritised findings report with actionable recommendations. Larger or more complex organisations may require a longer engagement.",
  },
  {
    question: "What industries in Melbourne are most targeted by cybercriminals?",
    answer:
      "Based on ACSC reporting and ADL99's experience, the most heavily targeted sectors in Melbourne are: professional services (law firms and accounting practices) for their access to client financial and legal data; healthcare for patient records; retail and hospitality for payment card data; and financial services for direct access to funds. However, no industry is immune — Melbourne SMBs are targeted precisely because they often have less mature defences than large enterprises.",
  },
  {
    question: "Does ADL99 work with Melbourne businesses remotely or on-site?",
    answer:
      "Both. Most ADL99 engagements are conducted remotely, which keeps costs lower and allows us to work efficiently. For incident response, on-site forensic work, or sensitive executive briefings, our Melbourne-based team can attend in person. We cover all of Greater Melbourne and regional Victoria.",
  },
];

export default function MelbournePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }}
      />

      {/* Breadcrumb */}
      <nav className="container mx-auto px-6 pt-24 pb-4" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/locations" className="hover:text-foreground">
              Locations
            </Link>
          </li>
          <li>/</li>
          <li className="text-foreground">Melbourne</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 uppercase tracking-wide">
            Melbourne&apos;s Cybersecurity Partner — Protecting Businesses Across the City
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            ADL99 is based in Melbourne. We know the local threat landscape, the industries being
            targeted, and what it takes to build real cyber resilience for Victorian businesses —
            without the jargon.
          </p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Melbourne is home to over 200,000 businesses — a thriving hub of financial services,
            legal practices, healthcare providers, and a rapidly growing tech startup ecosystem. This
            concentration of high-value targets makes the city a prime hunting ground for
            cybercriminals. Most Melbourne SMBs operate with fewer than 50 employees, no dedicated
            security staff, and rely heavily on Microsoft 365. This creates a perfect storm:
            sophisticated threat actors targeting businesses without the resources to defend
            themselves properly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button variant="default" size="lg" asChild>
              <Link href="/contact">Book a Free Melbourne Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-border">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span>Melbourne-Based Team</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span>No Lock-In Contracts</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span>Response Within 2 Business Hours</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span>Vendor-Agnostic Advice</span>
            </div>
          </div>
        </div>
      </section>

      {/* Threat Landscape Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8 uppercase tracking-wide">
            The Melbourne Cyber Threat Reality in 2026
          </h2>

          <div className="max-w-4xl space-y-6 text-lg text-muted-foreground leading-relaxed mb-12">
            <p>
              Melbourne's position as Victoria's economic engine makes it a high-value target for
              cybercriminals. The Australian Cyber Security Centre reports a cybercrime incident
              every 6 minutes across Australia, with Melbourne businesses bearing a disproportionate
              share of attacks due to the city's concentration of financial services, legal
              practices, and healthcare providers.
            </p>

            <p>
              The industries most heavily targeted in Melbourne are the same ones that form the
              backbone of the city's professional services economy: law firms handling
              confidential client matters, accounting practices managing tax data and financial
              records, healthcare clinics storing patient information, retail chains processing
              payment card transactions, and financial services firms with direct access to funds.
              Each of these sectors represents a core ADL99 industry vertical, and each faces
              distinct compliance obligations under the Australian Privacy Act and the Notifiable
              Data Breaches scheme.
            </p>

            <p>
              The reality for Melbourne SMBs is stark. Most operate with fewer than 50 employees,
              have no dedicated security staff, and run their operations on Microsoft 365 and a
              handful of cloud applications. This makes them disproportionately vulnerable to
              phishing attacks, Business Email Compromise (BEC), and ransomware. Attackers know
              that small businesses often lack the security maturity of large enterprises while
              still holding valuable data. The 2023–2030 Australian Cyber Security Strategy and the
              Essential Eight Maturity Model create compliance expectations that many Melbourne
              businesses struggle to navigate without expert guidance.
            </p>

            <p>
              The financial stakes are severe. The average cost of a data breach in Australia now
              exceeds $4.88 million according to IBM Security — far beyond what most Melbourne SMBs
              could absorb without existential damage to the business. For many, a single breach
              means closure. Cyber insurance can mitigate some of the cost, but insurers are
              increasingly requiring evidence of Essential Eight maturity before underwriting
              policies.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 uppercase tracking-wide text-center">
            Cybersecurity Services Tailored for Melbourne Businesses
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto text-center">
            ADL99 doesn't sell products — we deliver outcomes. Each service below is described in
            terms of what Melbourne businesses gain, not just what it is.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 hover:border-primary transition-colors relative"
                >
                  {service.badge && (
                    <div className="absolute top-4 right-4 text-xs bg-accent/20 text-accent px-2 py-1 rounded">
                      {service.badge}
                    </div>
                  )}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 uppercase tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href={service.link}
                    className="text-primary hover:text-primary/80 font-semibold inline-flex items-center"
                  >
                    Learn More →
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 uppercase tracking-wide text-center">
            Cyber Security for Melbourne&apos;s Key Industries
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto text-center">
            Melbourne's economy is diverse and cybersecurity isn't one-size-fits-all. A law firm's
            risks are different from a healthcare clinic's risks, which are different from a retail
            chain's risks.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary transition-colors"
              >
                <h3 className="font-display text-lg font-bold text-foreground mb-3 uppercase tracking-wide">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {industry.description}
                </p>
                <Link
                  href={industry.link}
                  className="text-primary hover:text-primary/80 font-semibold inline-flex items-center text-sm"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why ADL99 Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12 uppercase tracking-wide text-center">
            Why Melbourne Businesses Trust ADL99
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3 uppercase tracking-wide">
                Local Team, Local Knowledge
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                ADL99 isn't an overseas company with an Australian phone number. We're a
                Melbourne-based team that understands Victorian compliance requirements, local
                business culture, and the specific threat vectors targeting this city.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3 uppercase tracking-wide">
                No Hidden Vendor Commissions
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We don't get kickbacks from security vendors. Our recommendations are based
                entirely on what's right for your business — not what earns us margin.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3 uppercase tracking-wide">
                Cybersecurity You Can Actually Understand
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We explain what's happening, why it matters, and what to do — in language your
                board, your staff, and your operations team can act on. No meaningless acronym
                soup.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3 uppercase tracking-wide">
                Earn Your Trust Every Engagement
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We don't chain Melbourne businesses into multi-year contracts. We earn continued
                partnerships by delivering outcomes. If we're not adding value, you should be free
                to say so.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Areas Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 uppercase tracking-wide text-center">
            Serving Businesses Across Greater Melbourne
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto text-center">
            ADL99 serves businesses across the entire Greater Melbourne metropolitan area, including
            the CBD and all major business districts.
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {coverageAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg px-4 py-2 text-sm text-muted-foreground"
                >
                  {area}
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-muted-foreground mt-8">
              Can&apos;t see your suburb? We serve all of Victoria. Remote and on-site engagements
              available.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12 uppercase tracking-wide text-center">
            Getting Started is Simple
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3 uppercase tracking-wide">
                Book a Free Consultation
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A 30-minute call with a Melbourne cybersecurity expert. No sales pitch, no pressure
                — just an honest conversation about your current posture and your biggest concerns.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3 uppercase tracking-wide">
                We Assess Your Exposure
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our team identifies your real risk profile against the Australian threat landscape.
                You'll leave with a clear picture of where you're vulnerable and what to do about
                it.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3 uppercase tracking-wide">
                Stay Protected
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether it's a one-off assessment or ongoing strategic support, ADL99 adapts to
                your business as your needs evolve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12 uppercase tracking-wide text-center">
            Frequently Asked Questions About Cybersecurity in Melbourne
          </h2>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6"
                >
                  <AccordionTrigger className="text-left font-display text-foreground hover:no-underline py-5">
                    <h3 className="text-base md:text-lg">{faq.question}</h3>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 uppercase tracking-wide">
            Ready to Protect Your Melbourne Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Cybersecurity is not a problem you can defer until next quarter. The threat landscape
            doesn't take breaks, and neither do the criminal organisations targeting Melbourne
            businesses. Whether you're starting from zero or looking to mature an existing security
            program, ADL99 gives you clarity, confidence, and a partner who's genuinely in your
            corner.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button variant="default" size="lg" asChild>
              <Link href="/contact">Book Your Free Melbourne Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/cyber-security-urgent-help">
                Or call us for an urgent cyber incident
              </Link>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            No lock-in contracts · Melbourne-based team · Response within 2 business hours
          </p>
        </div>
      </section>

      {/* Internal Links Footer */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8 uppercase tracking-wide text-center">
            Explore More from ADL99
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div>
              <h3 className="font-semibold text-foreground mb-4">Our Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/services/cyber-maturity-assessments"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Cyber Maturity Assessments
                  </Link>
                </li>
                <li>
                  <Link href="/services/vciso" className="text-muted-foreground hover:text-primary">
                    vCISO Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/cyber-awareness-training"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Cyber Awareness Training
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/engineering-support"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Engineering Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/technical-advisory"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Technical Advisory
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cyber-security-urgent-help"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Emergency Response
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Industries We Serve</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/industries/law-firms"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Cybersecurity for Law Firms
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/health-clinics"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Cybersecurity for Health Clinics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/accounting"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Cybersecurity for Accounting Practices
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/retail"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Cybersecurity for Retail
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/manufacturing"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Cybersecurity for Manufacturing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/research"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Cybersecurity for Research Organisations
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-primary">
                    Blog & Insights
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/essential-8-cyber-security"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Essential Eight Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/cyber-security-checklist-australian-smbs"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Cyber Security Checklist for Australian SMBs
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-primary">
                    Free Consultation
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-primary">
                    Contact ADL99
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
