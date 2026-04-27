'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, CheckCircle2, AlertTriangle, Search, Lightbulb, Briefcase, BookOpen, MapPin, Award, TrendingUp, Clock, Phone, Mail, Users, Target, Database, Settings, Zap, FileText } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ServiceContactForm from "@/components/ServiceContactForm";

const introChallenges = [
  {
    icon: Target,
    title: "Threat Concentration Across Industries",
    description: "Melbourne's mix of legal, financial, healthcare, manufacturing, retail, and research sectors makes the city a priority target for ransomware operators, business email compromise crews, and nation-state actors targeting research and IP."
  },
  {
    icon: FileText,
    title: "Compliance Pressure on Every Sector",
    description: "Essential Eight, APRA CPS 234, ISO 27001, NIST CSF, PCI DSS, the Australian Privacy Act, and TPB obligations now apply across most Melbourne industries — and customers, insurers, and supply chains expect evidence."
  },
  {
    icon: Users,
    title: "Limited In-House Security Capability",
    description: "Most Melbourne SMBs run on generalist IT support without a dedicated security function. Without a CISO, security strategy, vendor risk, and board reporting fall through the cracks."
  },
  {
    icon: Database,
    title: "Cloud, Hybrid Work & Identity Risk",
    description: "Microsoft 365, Google Workspace, hybrid work, and BYOD mean Melbourne businesses are defending an identity perimeter — not a network perimeter. Misconfigured cloud tenants and weak MFA are now the most common breach vectors."
  },
];

const allServices = [
  {
    title: "Cyber Maturity Assessments",
    description: "Benchmark your security posture against the ASD Essential Eight, ISO 27001, and NIST CSF — with a prioritised roadmap, not a 200-page report.",
    icon: Search,
    href: "/services/cyber-maturity-assessments"
  },
  {
    title: "Technical Advisory Services",
    description: "Vendor-agnostic advice on security strategy, architecture, identity, cloud, and tooling — so Melbourne businesses invest in what actually works.",
    icon: Lightbulb,
    href: "/services/technical-advisory"
  },
  {
    title: "Engineering Support",
    description: "Hands-on implementation of your security stack — Microsoft 365 hardening, SIEM tuning, identity controls, and OT/IT engineering.",
    icon: Settings,
    href: "/services/engineering-support"
  },
  {
    title: "Cyber Awareness Training",
    description: "Tailored phishing simulations and awareness programs built around the real scams hitting Melbourne inboxes — not 2019 stock content.",
    icon: BookOpen,
    href: "/services/cyber-awareness-training"
  },
  {
    title: "vCISO Services",
    description: "Virtual Chief Information Security Officer leadership — board reporting, security strategy, and program governance for Melbourne businesses without a full-time CISO.",
    icon: Shield,
    href: "/services/vciso"
  },
  {
    title: "Urgent Incident Response",
    description: "24/7 emergency cyber incident response for ransomware, business email compromise, data breaches, and active attacks across Melbourne.",
    icon: AlertTriangle,
    href: "/cyber-security-urgent-help",
    badge: "24/7 Available"
  },
];

const whyAdl99Points = [
  {
    icon: MapPin,
    title: "Melbourne-Based, Not Offshore",
    description: "Headquartered at 470 St Kilda Road. Our consultants live and work in Melbourne — no overseas teams, no offshore data, no time-zone gaps when you need help."
  },
  {
    icon: CheckCircle2,
    title: "Fixed-Price, No Lock-In",
    description: "Transparent fixed-scope engagements with no surprise bills and no multi-year lock-ins. We earn your continued business by delivering results."
  },
  {
    icon: Award,
    title: "Vendor-Agnostic Advice",
    description: "We don't take vendor commissions or referral kickbacks. Recommendations are based on what fits your environment — not what pays us margin."
  },
  {
    icon: TrendingUp,
    title: "Practical Security, Plain English",
    description: "We translate cyber security into language your board, your operations team, and your frontline staff can actually act on."
  },
];

const localExpertisePoints = [
  {
    icon: Zap,
    title: "Rapid On-Site Response",
    description: "When incidents require hands-on support, our team can be on site at your Melbourne office quickly — wherever you're located across Greater Melbourne."
  },
  {
    icon: Shield,
    title: "Australian Data Sovereignty",
    description: "Your data stays in Australia. No offshore teams, no overseas data centres, no surprise jurisdictional issues."
  },
  {
    icon: Users,
    title: "Face-to-Face Consultations",
    description: "Meet with our consultants at your office, ours, or somewhere in between. Real conversations, not just ticketing systems."
  },
];

const industries = [
  {
    title: "Law Firms & Legal Practices",
    description: "Client confidentiality, legal professional privilege, and trust account protection for Melbourne law firms across the CBD, William Street, and the inner suburbs.",
    link: "/industries/law-firms"
  },
  {
    title: "Health Clinics & Medical Practices",
    description: "Australian Privacy Act compliance, electronic health record protection, and connected medical device security for Melbourne clinics and allied health groups.",
    link: "/industries/health-clinics"
  },
  {
    title: "Accounting & Financial Services",
    description: "TPB cyber security obligations, Privacy Act compliance, and ATO-linked system protection for Melbourne accounting practices and financial advisers.",
    link: "/industries/accounting"
  },
  {
    title: "Manufacturing & Engineering",
    description: "OT/IT convergence security, ransomware resilience, and DISP readiness for Melbourne manufacturers across Dandenong, Port Melbourne, and Tullamarine.",
    link: "/industries/manufacturing"
  },
];

const threats = [
  {
    title: "Ransomware & Data Extortion",
    description: "Melbourne businesses are routinely hit by ransomware operators using double-extortion tactics — encrypting systems and threatening to publish stolen data. Legal, healthcare, and manufacturing organisations are particularly targeted because of operational sensitivity and willingness to pay to restore business continuity."
  },
  {
    title: "Business Email Compromise (BEC)",
    description: "BEC attacks impersonate suppliers, executives, or banking partners to redirect payments. Melbourne professional services firms — legal, accounting, financial advisory — see weekly BEC attempts, with average losses well into six figures per successful attack."
  },
  {
    title: "Cloud & Identity Compromise",
    description: "Most Melbourne breaches now start with a compromised Microsoft 365 or Google Workspace account. Weak MFA, phishing-resistant authentication gaps, and misconfigured cloud tenants give attackers persistent access without ever touching your network."
  },
];

const faqs = [
  {
    question: "What cyber security services does ADL99 provide in Melbourne?",
    answer: "ADL99 provides the full cyber security lifecycle for Melbourne businesses: cyber maturity assessments, virtual CISO (vCISO), technical advisory, engineering support, cyber awareness training, and 24/7 urgent incident response. We work with organisations across Greater Melbourne — from CBD to inner suburbs to growth corridors.",
  },
  {
    question: "How much does cyber security cost for a Melbourne business?",
    answer: "Pricing depends on scope and business size. Cyber maturity assessments for Melbourne SMBs are fixed-scope engagements typically starting in the low five figures. vCISO retainers scale to organisation size. Incident response is engagement-based. We always provide transparent fixed-scope quotes — never open-ended billing.",
  },
  {
    question: "Does my Melbourne business need to comply with the Essential Eight?",
    answer: "The Essential Eight is mandatory for federal government agencies and increasingly required by cyber insurers, enterprise customers, and government supply chains. Most Melbourne businesses we work with target Maturity Level 1 or 2 as a practical baseline — our cyber maturity assessment benchmarks where you currently sit and maps out how to lift it.",
  },
  {
    question: "What should I do if my Melbourne business gets hit by ransomware?",
    answer: "Don't pay any ransom, don't shut systems down before forensic preservation, and don't communicate publicly until you understand the scope. Contact our urgent incident response team — we provide remote triage within hours and on-site response across Greater Melbourne where required.",
  },
  {
    question: "Where is ADL99 located in Melbourne?",
    answer: "ADL99 is headquartered at 470 St Kilda Road, Melbourne VIC 3004 — minutes from the CBD, Southbank, South Yarra, and the St Kilda Road corporate corridor. We deliver services across Greater Melbourne both on-site and remotely.",
  },
];

const suburbsTier1 = [
  { name: "Southbank", postcode: "3006", slug: "southbank" },
  { name: "Docklands", postcode: "3008", slug: "docklands" },
  { name: "East Melbourne", postcode: "3002", slug: "east-melbourne" },
  { name: "Carlton", postcode: "3053", slug: "carlton" },
  { name: "Fitzroy", postcode: "3065", slug: "fitzroy" },
];

const suburbsTier2 = [
  { name: "South Yarra", postcode: "3141", slug: "south-yarra" },
  { name: "Toorak", postcode: "3142", slug: "toorak" },
  { name: "St Kilda", postcode: "3182", slug: "st-kilda" },
  { name: "Brighton", postcode: "3186", slug: "brighton" },
  { name: "Albert Park", postcode: "3206", slug: "albert-park" },
  { name: "Port Melbourne", postcode: "3207", slug: "port-melbourne" },
  { name: "South Melbourne", postcode: "3205", slug: "south-melbourne" },
];

const suburbsTier3 = [
  { name: "Richmond", postcode: "3121", slug: "richmond" },
  { name: "Hawthorn", postcode: "3122", slug: "hawthorn" },
  { name: "Camberwell", postcode: "3124", slug: "camberwell" },
  { name: "Kew", postcode: "3101", slug: "kew" },
  { name: "Malvern", postcode: "3144", slug: "malvern" },
  { name: "Prahran", postcode: "3181", slug: "prahran" },
];

export default function MelbournePageClient() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0">
                <Shield className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
              </div>
              <h1 className="text-lg md:text-xl font-medium text-primary-foreground/80 uppercase tracking-wide">
                Cyber Security St Kilda
              </h1>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 uppercase tracking-wide">
              Cyber Security That Defends Every Corner of Melbourne
            </h2>
            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-6 md:p-8 mb-8">
              <p className="text-primary-foreground/90 text-base md:text-lg leading-relaxed">
                Comprehensive cyber security services for Melbourne's businesses — from CBD law firms and Southbank corporates to suburban clinics, growth-corridor manufacturers, and tech startups across Greater Melbourne.
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
                <Link href="/cyber-security-urgent-help">Experiencing an Incident?</Link>
              </Button>
            </div>
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Essential Eight Aligned</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>NIST Framework</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>ISO 27001</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Australian-Owned</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Challenges We Solve */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              CHALLENGES WE SOLVE
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Cyber Security Services for Melbourne Businesses
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Melbourne is home to over 200,000 businesses spread across one of the most diverse business landscapes in Australia — corporate towers in the CBD, professional services across the inner suburbs, manufacturing in growth corridors like Dandenong and Tullamarine, healthcare across every postcode, and a fast-growing tech sector centred on Cremorne, Richmond, and the inner east. Each of these business communities faces a different threat profile, and yet most share the same underlying gap: cyber security capability that hasn't kept pace with how the business actually operates today. ADL99 is a Melbourne-based cyber security company headquartered at 470 St Kilda Road, providing cyber security services to businesses across Greater Melbourne. As a trusted cyber security provider, we deliver practical cyber security solutions — from Essential Eight maturity uplift and ISO 27001 readiness to vCISO leadership, technical advisory, and 24/7 incident response.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {introChallenges.map((challenge, index) => {
              const Icon = challenge.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors"
                >
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">{challenge.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{challenge.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 2: Our Services */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              OUR SERVICES
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Cyber Security Services in Melbourne
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive cyber security solutions tailored for businesses across Greater Melbourne and Victoria.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {allServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all hover:shadow-lg group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <Icon className="w-10 h-10 text-primary" />
                    {service.badge && (
                      <span className="text-xs px-2 py-1 rounded-full bg-primary text-primary-foreground font-medium">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                  <Link
                    href={service.href}
                    className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Learn more →
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Why Choose Us */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              WHY CHOOSE US
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              ADL99 — Melbourne's Trusted Cyber Security Company
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Melbourne businesses need cyber security partners who understand local context — Victorian compliance, the threat patterns affecting Australian organisations, and the realities of operating across a metropolitan area as varied as ours. ADL99 delivers enterprise-grade protection scaled for Melbourne SMBs and corporates alike.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
            {whyAdl99Points.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors"
                >
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">{point.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{point.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-lg text-muted-foreground italic max-w-3xl mx-auto">
              Melbourne businesses hold more valuable data than most realise. Let ADL99 show you where the blind spots are.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Local Expertise */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              LOCAL EXPERTISE
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Melbourne-Based Cyber Security Specialists
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Headquartered at 470 St Kilda Road, we serve businesses across Greater Melbourne — from the inner-city corporate corridor to suburban professional precincts and the manufacturing belt. Our local presence means faster response times, face-to-face consultations, and consultants who already understand Australian compliance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {localExpertisePoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-colors"
                >
                  <Icon className="w-10 h-10 text-primary mb-4 mx-auto" />
                  <h3 className="text-xl font-bold mb-3">{point.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{point.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Button variant="default" size="lg" asChild>
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Image Section: Melbourne Office */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/banner-images/services.webp"
                alt="ADL99 Melbourne Office - Cyber Security Specialists at 470 St Kilda Road"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end">
                <div className="p-8 md:p-12 text-primary-foreground">
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
                    470 St Kilda Road, Melbourne
                  </h3>
                  <p className="text-primary-foreground/90 text-lg">
                    Local team, local expertise — protecting Melbourne businesses since day one
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Industries */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              INDUSTRIES WE SERVE
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Industries We Protect Across Melbourne
            </h2>
            <p className="text-muted-foreground text-lg">
              Specialised cyber security solutions tailored for Melbourne's key industries — each with its own threat profile, regulatory landscape, and operational realities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all hover:shadow-lg group"
              >
                <h3 className="text-xl font-bold mb-3">{industry.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{industry.description}</p>
                <Link
                  href={industry.link}
                  className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Learn more →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Threat Intelligence */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              THREAT INTELLIGENCE
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Cyber Threats Facing Melbourne Businesses
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Melbourne businesses face the full spectrum of modern cyber attacks — from financially motivated ransomware crews to nation-state campaigns targeting research, defence supply chains, and critical infrastructure. The Australian Cyber Security Centre reports a cybercrime incident every six minutes nationally, with Victoria consistently among the most-targeted states.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {threats.map((threat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors"
              >
                <h3 className="text-xl font-bold mb-3">{threat.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{threat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section: Cybersecurity Protection */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-center"
          >
            <div>
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Protecting Melbourne Businesses 24/7
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                From ransomware attacks to business email compromise, Melbourne businesses face evolving cyber threats every day. Our team provides round-the-clock monitoring, rapid incident response, and proactive threat intelligence to keep your business secure.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span className="text-muted-foreground">24/7 emergency incident response across Greater Melbourne</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span className="text-muted-foreground">Proactive threat monitoring and detection</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span className="text-muted-foreground">Rapid on-site support when you need it most</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/banner-images/services.webp"
                alt="Melbourne Cyber Security Protection - 24/7 Incident Response"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 7: Trust Badges */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-4">
              TRUSTED PARTNER
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Melbourne's Trusted Cyber Security Provider
            </h2>
            <p className="text-primary-foreground/90 text-lg">
              Australian-owned, Melbourne-based cyber security expertise you can rely on.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <CheckCircle2 className="w-16 h-16 mx-auto mb-4 text-primary-foreground" />
              <h3 className="text-2xl font-bold mb-2">ACSC Aligned</h3>
              <p className="text-primary-foreground/80">Essential Eight compliant</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <MapPin className="w-16 h-16 mx-auto mb-4 text-primary-foreground" />
              <h3 className="text-2xl font-bold mb-2">Australian-Owned</h3>
              <p className="text-primary-foreground/80">Local expertise, local support</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <AlertTriangle className="w-16 h-16 mx-auto mb-4 text-primary-foreground" />
              <h3 className="text-2xl font-bold mb-2">24/7 Response</h3>
              <p className="text-primary-foreground/80">Emergency support when you need it</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 8: FAQs */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Cyber Security FAQs for Melbourne Businesses
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <h3 className="text-lg font-bold pr-4">{faq.question}</h3>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Section 9: Final CTA */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Get Cyber Security Services for Your Melbourne Business Today
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Talk to ADL99's Melbourne cyber security team. Book a free consultation or call us for immediate support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button variant="default" size="lg" asChild>
                <Link href="/contact">Book Free Consultation</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:0370673373">
                  <Phone className="w-4 h-4 mr-2" />
                  03 7067 3373
                </a>
              </Button>
            </div>

            <div className="space-y-2 text-muted-foreground">
              <p className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@adl99.com.au" className="hover:text-primary transition-colors">
                  info@adl99.com.au
                </a>
              </p>
              <p className="flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>470 St Kilda Road, Melbourne VIC 3004</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 10: Suburb Directory */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Cyber Security Services Across Melbourne's Suburbs
            </h2>
            <p className="text-muted-foreground text-lg">
              ADL99 serves businesses across the entire Greater Melbourne metropolitan area. Explore our suburb-specific cyber security services pages to see how we support businesses in your local area:
            </p>
          </motion.div>

          {/* Tier 1: CBD/Inner Melbourne */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">CBD & Inner Melbourne</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
              {suburbsTier1.map((suburb, index) => (
                <Link
                  key={index}
                  href={`/locations/${suburb.slug}`}
                  className="bg-card border border-border rounded-xl p-4 hover:border-primary/50 hover:shadow-lg transition-all text-center group"
                >
                  <div className="font-bold mb-1 group-hover:text-primary transition-colors">{suburb.name}</div>
                  <div className="text-sm text-muted-foreground">{suburb.postcode}</div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Tier 2: Inner South & Bayside */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Inner South & Bayside</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-7 gap-4 max-w-6xl mx-auto">
              {suburbsTier2.map((suburb, index) => (
                <Link
                  key={index}
                  href={`/locations/${suburb.slug}`}
                  className="bg-card border border-border rounded-xl p-4 hover:border-primary/50 hover:shadow-lg transition-all text-center group"
                >
                  <div className="font-bold mb-1 group-hover:text-primary transition-colors">{suburb.name}</div>
                  <div className="text-sm text-muted-foreground">{suburb.postcode}</div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Tier 3: Inner East */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Inner East</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
              {suburbsTier3.map((suburb, index) => (
                <Link
                  key={index}
                  href={`/locations/${suburb.slug}`}
                  className="bg-card border border-border rounded-xl p-4 hover:border-primary/50 hover:shadow-lg transition-all text-center group"
                >
                  <div className="font-bold mb-1 group-hover:text-primary transition-colors">{suburb.name}</div>
                  <div className="text-sm text-muted-foreground">{suburb.postcode}</div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Closing Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-lg text-muted-foreground mb-4">
              Can't see your suburb? We serve all of Greater Melbourne and Victoria — both remote and on-site.
            </p>
            <Link href="/contact" className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1">
              Contact us to discuss cyber security services for your location →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ServiceContactForm
        serviceName="cyber security services for your Melbourne business"
        benefits={[
          "Free 30-minute cyber security consultation",
          "Expert Melbourne-based team",
          "Tailored recommendations for your business",
          "No obligation, transparent pricing"
        ]}
      />
    </div>
  );
}
