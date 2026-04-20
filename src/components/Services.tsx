"use client"

import { motion } from "framer-motion";
import { AlertTriangle, Search, Lightbulb, Shield, BookOpen, Briefcase, LucideIcon } from "lucide-react";
import { WPService } from "@/lib/wordpress";
import { getIcon } from "@/lib/icon-map";
import Link from "next/link";

// Default services data (for fallback)
const defaultServicesData: Record<string, { icon: string; description: string; accent?: boolean }> = {
  'urgent-help': {
    icon: 'AlertTriangle',
    description: "When disaster strikes, we're your emergency response team. Our rapid-response unit provides immediate incident response, breach containment, and crisis management.",
    accent: true,
  },
  'cyber-maturity': {
    icon: 'Search',
    description: "We evaluate your organization's current cybersecurity posture against industry standards and best practices, identifying strengths, weaknesses, and actionable areas for improvement.",
  },
  'technical-advisory': {
    icon: 'Lightbulb',
    description: "Our experts provide strategic guidance on cybersecurity architecture, risk management, compliance, and emerging threats to help you make informed decisions.",
  },
  'engineering-support': {
    icon: 'Shield',
    description: "We deliver hands-on technical support for implementing and optimizing security technologies, including network defense, endpoint protection, and cloud security.",
  },
  'cyber-awareness': {
    icon: 'BookOpen',
    description: "We design and deliver tailored training programs to educate employees on cyber risks, safe online practices, phishing prevention, and incident response.",
  },
  'vciso': {
    icon: 'Briefcase',
    description: "Get executive-level cybersecurity leadership without the full-time cost. Our Virtual CISOs provide strategic oversight, governance, and security program management.",
  },
};

// Default services list (used when WordPress fails)
const defaultServices = [
  { icon: AlertTriangle, title: "Emergency Cyber Incident Response", slug: "urgent-help", description: defaultServicesData['urgent-help'].description, accent: true },
  { icon: Search, title: "Cyber Maturity Assessment & Security Gap Analysis", slug: "cyber-maturity", description: defaultServicesData['cyber-maturity'].description },
  { icon: Lightbulb, title: "Technical Advisory Services", slug: "technical-advisory", description: defaultServicesData['technical-advisory'].description },
  { icon: Shield, title: "Engineering Support", slug: "engineering-support", description: defaultServicesData['engineering-support'].description },
  { icon: BookOpen, title: "Cyber Awareness Training", slug: "cyber-awareness", description: defaultServicesData['cyber-awareness'].description },
  { icon: Briefcase, title: "Virtual CISO (vCISO) Services", slug: "vciso", description: defaultServicesData['vciso'].description },
];

interface ServicesProps {
  data?: WPService[] | null;
  isLoading?: boolean;
  sectionTitle?: string;
  sectionDescription?: string;
}

const Services = ({ data, sectionTitle, sectionDescription }: ServicesProps) => {
  // Get fallback data for a service by slug
  const getFallback = (slug: string) => defaultServicesData[slug];

  // Filter out test/incomplete services and merge with fallback descriptions
  const getServiceDescription = (slug: string, wpDescription?: string, wpExcerpt?: string) => {
    if (wpDescription && wpDescription.trim()) return wpDescription;
    if (wpExcerpt && wpExcerpt.trim()) return wpExcerpt.replace(/<[^>]*>/g, ''); // Strip HTML
    return getFallback(slug)?.description || '';
  };

  // Use WordPress data if available and valid, otherwise use defaults
  const validWpServices = data?.filter(s => 
    s.slug !== 'test' && s.title && s.title.toLowerCase() !== 'test'
  ) || [];

  let services = validWpServices.length > 0 
    ? validWpServices.map((service) => {
        const fallback = getFallback(service.slug);
        return {
          icon: getIcon(service.serviceFields?.icon || fallback?.icon || 'Shield') as LucideIcon,
          title: service.title,
          slug: service.slug,
          description: getServiceDescription(service.slug, service.serviceFields?.shortDescription, service.excerpt),
          accent: service.serviceFields?.isAccent || service.slug === 'urgent-help' || fallback?.accent,
        };
      })
    : defaultServices;

  // Always ensure "Urgent Help" is included at the beginning
  if (!services.find(s => s.slug === 'urgent-help')) {
    const urgentHelp = defaultServices.find(s => s.slug === 'urgent-help');
    if (urgentHelp) services = [urgentHelp, ...services];
  } else {
    // Move urgent help to the beginning if it exists
    const withoutUrgent = services.filter(s => s.slug !== 'urgent-help');
    const urgent = services.find(s => s.slug === 'urgent-help');
    if (urgent) services = [urgent, ...withoutUrgent];
  }

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 uppercase tracking-wide">
            {sectionTitle || "Our Cybersecurity Services"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {sectionDescription || "From initial assessments to ongoing support, we provide end-to-end cybersecurity solutions tailored to your organization's unique needs."}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const linkPath = service.slug === 'urgent-help'
              ? '/cyber-security-urgent-help'
              : `/services/${service.slug}`;
            
            return (
              <Link key={service.title} href={linkPath}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`rounded-2xl p-8 border transition-all duration-300 hover:shadow-lg h-full ${
                    service.accent
                      ? "bg-accent/5 border-accent/20 hover:border-accent/40"
                      : "bg-card border-border hover:border-primary/30"
                  }`}
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                    service.accent ? "bg-accent/10" : "bg-primary/10"
                  }`}>
                    <IconComponent className={`w-7 h-7 ${
                      service.accent ? "text-accent" : "text-primary"
                    }`} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 uppercase tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;