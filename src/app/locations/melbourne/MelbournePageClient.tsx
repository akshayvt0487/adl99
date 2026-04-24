'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, CheckCircle2, AlertTriangle, Search, Lightbulb, Briefcase, BookOpen, MapPin, Award, TrendingUp, Clock, Building2, Phone, FileText, CheckCircle, Target } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ServiceContactForm from "@/components/ServiceContactForm";

const allServices = [
  { title: "Cyber Maturity Assessments", description: "Know exactly where your business stands against the Essential Eight and ASD frameworks. ADL99 benchmarks your current security posture, identifies your real risk exposure, and gives you a clear, prioritised roadmap — not a 200-page report no one reads.", icon: Search, href: "/services/cyber-maturity-assessments" },
  { title: "Virtual CISO Services", description: "Melbourne businesses with 10–200 employees rarely need a full-time CISO — but they do need executive-level security leadership. ADL99's vCISO service gives you strategic oversight, board reporting, and security program governance at a fraction of the cost.", icon: Lightbulb, href: "/services/vciso" },
  { title: "Cyber Awareness Training", description: "Your people are your biggest vulnerability — and your strongest defence. ADL99 runs tailored phishing simulations and awareness programs built around the real threats hitting Melbourne businesses right now, not generic slide decks from 2019.", icon: BookOpen, href: "/services/cyber-awareness-training" },
  { title: "Urgent Incident Response", description: "If your business is under attack right now, ADL99 provides immediate remote incident response and breach containment for Melbourne organisations. Don't wait — every minute a breach is active, the damage grows.", icon: AlertTriangle, href: "/cyber-security-urgent-help", badge: "24/7 Available" },
  { title: "Technical Advisory", description: "Navigate the crowded cybersecurity vendor landscape with confidence. ADL99 provides vendor-agnostic guidance on security tools, architecture decisions, and infrastructure choices — so Melbourne businesses invest in what actually works for their environment.", icon: Shield, href: "/services/technical-advisory" },
  { title: "Engineering Support", description: "Buying security tools is easy. Making them work together is hard. ADL99's engineering team implements, configures, and manages your security stack — ensuring your investments actually protect you, not just tick compliance boxes.", icon: Briefcase, href: "/services/engineering-support" },
];

const stats = [
  { value: "1 in 6", label: "Australian businesses hit by cybercrime last year" },
  { value: "$4.88M", label: "Average cost of a data breach in Australia" },
  { value: "38%", label: "Rise in cyber attacks in the past 12 months" },
  { value: "87%", label: "Of breaches involve a human element" },
];

const introChallenges = [
  { icon: "Shield", title: "High-Value Targets", description: "Melbourne's concentration of financial services, legal practices, and healthcare providers makes the city a prime target for sophisticated cybercriminals." },
  { icon: "Users", title: "Resource Constraints", description: "Most Melbourne SMBs operate with fewer than 50 employees and no dedicated security staff, leaving them vulnerable to attacks." },
  { icon: "Target", title: "Compliance Pressure", description: "Australian Privacy Act and Essential Eight requirements create obligations that many Melbourne businesses struggle to navigate." },
  { icon: "Database", title: "Financial Stakes", description: "The average breach cost of $4.88M far exceeds what most Melbourne SMBs can absorb without existential damage." },
];

const whyAdl99Points = [
  { icon: "MapPin", title: "Local Team, Local Knowledge", description: "ADL99 isn't an overseas company with an Australian phone number. We're a Melbourne-based team that understands Victorian compliance requirements, local business culture, and the specific threat vectors targeting this city." },
  { icon: "Award", title: "No Hidden Vendor Commissions", description: "We don't get kickbacks from security vendors. Our recommendations are based entirely on what's right for your business — not what earns us margin." },
  { icon: "TrendingUp", title: "Cybersecurity You Can Actually Understand", description: "We explain what's happening, why it matters, and what to do — in language your board, your staff, and your operations team can act on. No meaningless acronym soup." },
  { icon: "Clock", title: "Earn Your Trust Every Engagement", description: "We don't chain Melbourne businesses into multi-year contracts. We earn continued partnerships by delivering outcomes. If we're not adding value, you should be free to say so." },
];

const industries = [
  { title: "Law Firms Melbourne", description: "Client confidentiality, legal professional privilege, and regulatory compliance make Melbourne law firms a prime target. ADL99 understands the unique obligations of legal practices.", link: "/industries/law-firms" },
  { title: "Health Clinics Melbourne", description: "Patient data is the most valuable data on the dark web. Melbourne health clinics must meet Australian Privacy Act obligations and manage connected device risks.", link: "/industries/health-clinics" },
  { title: "Accounting Practices Melbourne", description: "Tax season creates a concentrated window of vulnerability. ADL99 helps Melbourne accounting firms protect ATO-linked systems and client financial data.", link: "/industries/accounting" },
  { title: "Retail Chains Melbourne", description: "Multi-location retail operations face POS vulnerabilities, supply chain risks, and e-commerce attack surfaces.", link: "/industries/retail" },
  { title: "Manufacturing Melbourne", description: "Melbourne's manufacturing corridor faces OT/IT convergence risks and ransomware attacks that can halt production lines.", link: "/industries/manufacturing" },
  { title: "Research Organisations Melbourne", description: "Melbourne's university and research sector is increasingly targeted by nation-state actors seeking IP.", link: "/industries/research" },
];

const faqs = [
  {
    question: "How much do cybersecurity services cost for Melbourne businesses?",
    answer: "Cybersecurity costs vary significantly depending on your business size, risk profile, and scope of work. For Melbourne SMBs, a cyber maturity assessment typically starts from a few thousand dollars and gives you a clear picture of your exposure. Ongoing advisory or vCISO services are structured as monthly retainers — often comparable to a fraction of what a single breach would cost. ADL99 provides transparent, fixed-scope pricing with no hidden fees.",
    link: { text: "View our services", href: "/services" },
  },
  {
    question: "Does my Melbourne business need the Essential Eight?",
    answer: "The Essential Eight is the Australian Signals Directorate's baseline cybersecurity mitigation framework, and while it's mandatory only for Commonwealth entities, it has become the de facto standard for risk management across Australian businesses of all sizes. Melbourne businesses in regulated industries (finance, health, legal) are increasingly expected to demonstrate Essential Eight maturity by clients, partners, and cyber insurers.",
    link: { text: "Learn about our cyber maturity assessments", href: "/services/cyber-maturity-assessments" },
  },
  {
    question: "What should I do if my Melbourne business has been hacked?",
    answer: "If you suspect an active breach: isolate affected systems from the network immediately, do not power off devices (preserves forensic evidence), and contact ADL99's emergency response line. We provide immediate remote incident response for Melbourne businesses — breach containment, forensic triage, and recovery planning. You should also notify the Office of the Australian Information Commissioner (OAIC) if personal data has been exposed, as required under the Notifiable Data Breaches scheme.",
    link: { text: "Get urgent help now", href: "/cyber-security-urgent-help" },
  },
  {
    question: "How long does a cybersecurity assessment take for a Melbourne business?",
    answer: "For a typical Melbourne SMB (10–100 employees), a cyber maturity assessment takes between 3 and 10 business days depending on scope and complexity. The process includes a discovery session, documentation review, technical interviews, and delivery of a prioritised findings report with actionable recommendations. Larger or more complex organisations may require a longer engagement.",
    link: { text: "Book your assessment", href: "/contact" },
  },
  {
    question: "What industries in Melbourne are most targeted by cybercriminals?",
    answer: "Based on ACSC reporting and ADL99's experience, the most heavily targeted sectors in Melbourne are: professional services (law firms and accounting practices) for their access to client financial and legal data; healthcare for patient records; retail and hospitality for payment card data; and financial services for direct access to funds. However, no industry is immune — Melbourne SMBs are targeted precisely because they often have less mature defences than large enterprises.",
    link: { text: "View industry-specific solutions", href: "/industries" },
  },
  {
    question: "Does ADL99 work with Melbourne businesses remotely or on-site?",
    answer: "Both. Most ADL99 engagements are conducted remotely, which keeps costs lower and allows us to work efficiently. For incident response, on-site forensic work, or sensitive executive briefings, our Melbourne-based team can attend in person. We cover all of Greater Melbourne and regional Victoria.",
    link: { text: "See all locations we serve", href: "/locations" },
  },
];

const coverageAreas = [
  "Melbourne CBD", "Docklands", "Southbank", "St Kilda", "South Yarra", "Toorak",
  "Richmond", "Collingwood", "Fitzroy", "Carlton", "Brunswick", "Footscray",
  "Sunshine", "Williamstown", "Port Melbourne", "South Melbourne", "Hawthorn",
  "Camberwell", "Glen Waverley", "Clayton", "Dandenong", "Frankston",
  "Ringwood", "Box Hill", "Essendon", "Moonee Ponds", "Tullamarine",
  "Craigieburn", "Epping", "Bundoora",
];

const howWeWorkSteps = [
  {
    number: "01",
    icon: Phone,
    title: "Initial Consultation",
    description: "We start with a no-obligation discovery call to understand your business, industry, current security posture, and immediate concerns. This conversation is about listening — not selling."
  },
  {
    number: "02",
    icon: FileText,
    title: "Assessment & Analysis",
    description: "For most Melbourne businesses, we conduct a cyber maturity assessment against the Essential Eight framework. This gives you a clear baseline of where you are and what gaps exist."
  },
  {
    number: "03",
    icon: Target,
    title: "Prioritised Roadmap",
    description: "Not all risks are equal. We deliver a practical, sequenced roadmap that focuses on the highest-impact fixes first — not just the easiest boxes to tick."
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Implementation & Support",
    description: "Whether through advisory, engineering support, or ongoing vCISO services, we stay with you through execution. Cybersecurity isn't a one-time project — it's an ongoing discipline."
  },
];

const essentialEightControls = [
  { name: "Application Control", description: "Prevent execution of unapproved/malicious programs" },
  { name: "Patch Applications", description: "Timely patching of security vulnerabilities in applications" },
  { name: "Configure MS Office Macro Settings", description: "Block macros from the internet and only allow trusted macros" },
  { name: "User Application Hardening", description: "Configure web browsers and PDF viewers to block malicious content" },
  { name: "Restrict Admin Privileges", description: "Prevent users from having unnecessary administrative access" },
  { name: "Patch Operating Systems", description: "Timely patching of security vulnerabilities in OS" },
  { name: "Multi-Factor Authentication", description: "Require additional verification beyond just passwords" },
  { name: "Regular Backups", description: "Maintain and test backups to enable business continuity" },
];

const contactFormBenefits = [
  "Free, no-obligation cyber maturity assessment consultation",
  "Speak directly with Melbourne-based cybersecurity professionals",
  "Transparent, fixed-scope pricing with no hidden fees",
  "Practical roadmap tailored to your business and industry",
  "No lock-in contracts or high-pressure sales tactics",
];

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  Users: Building2,
  Target: AlertTriangle,
  Database: Shield,
};

const whyIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MapPin,
  Award,
  TrendingUp,
  Clock,
};

export default function MelbournePageClient() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/banner-images/services.webp"
            alt="Cybersecurity Services in Melbourne"
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
              Melbourne&apos;s Cybersecurity Partner — Protecting Businesses Across the City
            </h1>
            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-6 md:p-8 mb-8">
              <p className="text-primary-foreground/90 text-base md:text-lg leading-relaxed mb-4">
                ADL99 is based in Melbourne. We know the local threat landscape, the industries being targeted, and what it takes to build real cyber resilience for Victorian businesses — without the jargon.
              </p>
              <p className="text-primary-foreground/90 text-base leading-relaxed">
                Melbourne is home to over 200,000 businesses — a thriving hub of financial services, legal practices, healthcare providers, and a rapidly growing tech startup ecosystem. This concentration of high-value targets makes the city a prime hunting ground for cybercriminals. Read our guide on{" "}
                <Link href="/blog" className="text-accent hover:underline font-semibold">
                  cybersecurity best practices for Australian SMBs
                </Link>
                .
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
            <div className="flex flex-wrap gap-6 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>Melbourne-Based Team</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>No Lock-In Contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>Response Within 2 Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>Vendor-Agnostic</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Threat Landscape / Stats Section */}
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
              The Melbourne Cyber Threat Reality
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 uppercase tracking-wide">
              The Melbourne Cyber Threat Reality in 2026
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
              Melbourne's position as Victoria's economic engine makes it a high-value target for cybercriminals. The Australian Cyber Security Centre reports a cybercrime incident every 6 minutes across Australia.
            </p>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              Learn more{" "}
              <Link href="/about" className="text-primary hover:underline font-medium">
                about ADL99
              </Link>{" "}
              and our mission to protect Australian businesses, or{" "}
              <Link href="/contact" className="text-primary hover:underline font-medium">
                contact us
              </Link>{" "}
              for a free consultation.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Challenge Cards */}
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
                  className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2 uppercase tracking-wide">
                    {challenge.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {challenge.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Visual Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-80 rounded-2xl overflow-hidden order-2 lg:order-1"
            >
              <Image
                src="/banner-images/panic-button.webp"
                alt="Melbourne business cybersecurity protection and incident response"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-destructive/10 text-destructive text-sm font-semibold uppercase tracking-wide mb-4">
                <AlertTriangle className="w-4 h-4 mr-2" />
                The Cost of Inaction
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 uppercase tracking-wide">
                What a Cyber Breach Could Cost Your Melbourne Business
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The average data breach in Australia costs $4.88 million. For Melbourne SMBs, that's not just a financial hit — it's often existential. Beyond direct costs, businesses face:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Regulatory fines under the Privacy Act and Notifiable Data Breaches scheme",
                  "Loss of customer trust and reputational damage that takes years to repair",
                  "Legal liability from compromised client or patient data",
                  "Operational downtime that halts revenue generation",
                  "Increased cyber insurance premiums or loss of coverage entirely"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <p className="text-muted-foreground text-sm">
                Don't wait for a breach to happen. Learn how our{" "}
                <Link href="/services/cyber-maturity-assessments" className="text-primary hover:underline font-medium">
                  cyber maturity assessments
                </Link>{" "}
                can identify vulnerabilities before attackers do, or contact our{" "}
                <Link href="/cyber-security-urgent-help" className="text-destructive hover:underline font-medium">
                  urgent incident response team
                </Link>{" "}
                if you're already under attack.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 uppercase tracking-wide">
              Cybersecurity Services Tailored for Melbourne Businesses
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
              ADL99 doesn't sell products — we deliver outcomes. Each service below is described in terms of what Melbourne businesses gain, not just what it is.
            </p>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              Explore our{" "}
              <Link href="/services" className="text-primary hover:underline font-medium">
                full range of cybersecurity services
              </Link>{" "}
              or read our industry-specific guides for{" "}
              <Link href="/industries/law-firms" className="text-primary hover:underline font-medium">
                law firms
              </Link>
              ,{" "}
              <Link href="/industries/accounting" className="text-primary hover:underline font-medium">
                accounting practices
              </Link>
              , and{" "}
              <Link href="/industries/health-clinics" className="text-primary hover:underline font-medium">
                healthcare providers
              </Link>
              .
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors relative group"
                >
                  {service.badge && (
                    <div className="absolute top-4 right-4 text-xs bg-accent/20 text-accent px-2 py-1 rounded font-semibold">
                      {service.badge}
                    </div>
                  )}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 uppercase tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="text-primary hover:text-primary/80 font-semibold inline-flex items-center text-sm group-hover:gap-2 transition-all"
                  >
                    Learn More
                    <span className="group-hover:translate-x-1 transition-transform ml-1">→</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -ml-48 -mt-48" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wide mb-4">
              Our Process
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 uppercase tracking-wide">
              How We Work With Melbourne Businesses
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
              No jargon, no pressure, no hidden fees. Just a clear, transparent process that puts your business security first.
            </p>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              Whether you need{" "}
              <Link href="/services/vciso" className="text-primary hover:underline font-medium">
                virtual CISO services
              </Link>
              ,{" "}
              <Link href="/services/technical-advisory" className="text-primary hover:underline font-medium">
                technical advisory
              </Link>
              , or{" "}
              <Link href="/services/engineering-support" className="text-primary hover:underline font-medium">
                engineering support
              </Link>
              , we follow the same transparent methodology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {howWeWorkSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-6 relative"
                >
                  <div className="absolute top-4 right-4 text-6xl font-bold text-primary/5">
                    {step.number}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 relative z-10">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2 uppercase tracking-wide relative z-10">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Process Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden border border-border">
              <Image
                src="/banner-images/services_vciso.webp"
                alt="Cybersecurity professionals working with Melbourne businesses"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 uppercase tracking-wide">
              Cyber Security for Melbourne&apos;s Key Industries
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
              Melbourne's economy is diverse and cybersecurity isn't one-size-fits-all. Each industry faces unique risks and compliance requirements.
            </p>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              We've worked extensively with Melbourne's{" "}
              <Link href="/industries/manufacturing" className="text-primary hover:underline font-medium">
                manufacturing sector
              </Link>
              ,{" "}
              <Link href="/industries/retail" className="text-primary hover:underline font-medium">
                retail chains
              </Link>
              , and{" "}
              <Link href="/industries/research" className="text-primary hover:underline font-medium">
                research organisations
              </Link>
              . View all{" "}
              <Link href="/industries" className="text-primary hover:underline font-medium">
                industry-specific solutions
              </Link>
              .
            </p>
          </motion.div>

          {/* Featured Industry Images */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { src: "/banner-images/Law Firms.webp", alt: "Law Firms Cybersecurity", title: "Legal Sector" },
              { src: "/banner-images/Accounting.webp", alt: "Accounting Firms Cybersecurity", title: "Financial Services" },
              { src: "/banner-images/Health Clinics.webp", alt: "Healthcare Cybersecurity", title: "Healthcare" }
            ].map((img, index) => (
              <motion.div
                key={img.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-48 rounded-xl overflow-hidden group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-3 uppercase tracking-wide">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {industry.description}
                </p>
                <Link
                  href={industry.link}
                  className="text-primary hover:text-primary/80 font-semibold inline-flex items-center text-sm group-hover:gap-2 transition-all"
                >
                  Learn More
                  <span className="group-hover:translate-x-1 transition-transform ml-1">→</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Essential Eight Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold uppercase tracking-wide mb-4">
                Essential Eight Compliance
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 uppercase tracking-wide">
                Essential Eight Maturity for Melbourne Businesses
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The Australian Signals Directorate's Essential Eight is the baseline cybersecurity framework for Australian organisations. While only mandatory for government entities, it has become the de facto standard for demonstrating cyber maturity to clients, insurers, and partners.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                ADL99 helps Melbourne businesses assess their current Essential Eight maturity level and build a practical, sequenced roadmap to improve it — without the complexity of enterprise-scale implementations. Our{" "}
                <Link href="/services/cyber-awareness-training" className="text-primary hover:underline font-medium">
                  cyber awareness training
                </Link>{" "}
                programs also help your team understand their role in maintaining compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="default" asChild>
                  <Link href="/services/cyber-maturity-assessments">Learn About Assessments</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">Book Free Consultation</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              {essentialEightControls.map((control, index) => (
                <motion.div
                  key={control.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Shield className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-bold text-foreground mb-1 uppercase tracking-wide">
                        {control.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {control.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Showcase with Images */}
      <section className="py-16 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Cyber Awareness Training */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative h-64 rounded-2xl overflow-hidden group"
            >
              <Image
                src="/banner-images/services_cyber-awareness-training.webp"
                alt="Cyber awareness training for Melbourne businesses"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>

            {/* Cyber Maturity Assessments */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative h-64 rounded-2xl overflow-hidden group"
            >
              <Image
                src="/banner-images/services_cyber-maturity-assessments.webp"
                alt="Cyber maturity assessments for Melbourne organizations"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>

            {/* Technical Advisory */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative h-64 rounded-2xl overflow-hidden group"
            >
              <Image
                src="/banner-images/services_technical-advisory.webp"
                alt="Technical advisory services for Melbourne businesses"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>

            {/* Engineering Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative h-64 rounded-2xl overflow-hidden group"
            >
              <Image
                src="/banner-images/services_engineering-support.webp"
                alt="Engineering support for Melbourne cybersecurity implementations"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why ADL99 Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 uppercase tracking-wide">
              Why Melbourne Businesses Trust ADL99
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {whyAdl99Points.map((point, index) => {
              const IconComponent = whyIconMap[point.icon] || Shield;
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
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
        </div>
      </section>

      {/* Melbourne Business Image Section */}
      <section className="py-12 bg-secondary/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-64 md:h-96 rounded-2xl overflow-hidden"
          >
            <Image
              src="/banner-images/about.webp"
              alt="Melbourne cybersecurity consultation and business protection"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Coverage Areas Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 uppercase tracking-wide">
              Serving Businesses Across Greater Melbourne
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              ADL99 serves businesses across the entire Greater Melbourne metropolitan area, including the CBD and all major business districts.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {coverageAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  className="bg-card border border-border rounded-lg px-4 py-2 text-sm text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors"
                >
                  {area}
                </motion.div>
              ))}
            </div>

            <p className="text-center text-sm text-muted-foreground mb-4">
              Can&apos;t see your suburb? We serve all of Victoria. Remote and on-site engagements available.
            </p>
            <div className="text-center">
              <Link href="/contact" className="text-primary hover:underline font-medium text-sm">
                Contact us to discuss cybersecurity services for your location →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 uppercase tracking-wide">
              Frequently Asked Questions About Cybersecurity in Melbourne
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
                      <h3 className="text-base md:text-lg">{faq.question}</h3>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                      <p className="mb-3">{faq.answer}</p>
                      {faq.link && (
                        <Link
                          href={faq.link.href}
                          className="text-primary hover:underline font-medium text-sm inline-flex items-center gap-1"
                        >
                          {faq.link.text}
                          <span>→</span>
                        </Link>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ServiceContactForm
        serviceName="Cybersecurity Services in Melbourne"
        benefits={contactFormBenefits}
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 uppercase tracking-wide">
              Ready to Protect Your Melbourne Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Cybersecurity is not a problem you can defer until next quarter. The threat landscape doesn't take breaks, and neither do the criminal organisations targeting Melbourne businesses.
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
          </motion.div>
        </div>
      </section>
    </main>
  );
}
