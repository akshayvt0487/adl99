"use client"

import { motion } from "framer-motion";
import { Scale, Heart, Calculator, ShoppingCart, Factory, FlaskConical, LucideIcon } from "lucide-react";
import Link from "next/link";
import { WPIndustry } from "@/lib/wordpress";
import { getIcon } from "@/lib/icon-map";

// Default industries data (for fallback)
const defaultIndustriesData: Record<string, { description: string; challenges: string[] }> = {
  'law-firms': {
    description: "Specialized cybersecurity solutions for legal practices, ensuring client confidentiality and regulatory compliance.",
    challenges: ["Client confidentiality requirements", "Legal privilege protection", "Regulatory compliance", "Data breach prevention"],
  },
  'health-clinics': {
    description: "HIPAA-compliant cybersecurity assessments and solutions designed specifically for healthcare providers.",
    challenges: ["Patient privacy protection", "HIPAA compliance", "Medical device security", "Electronic health records"],
  },
  'accounting': {
    description: "Safeguarding financial records and client information from cyber threats and fraud.",
    challenges: ["Financial data protection", "Client confidentiality", "Regulatory compliance", "Secure document management"],
  },
  'retail': {
    description: "Securing point-of-sale systems, customer data, and supply chain operations.",
    challenges: ["POS system security", "Customer data protection", "Payment processing", "Supply chain security"],
  },
  'manufacturing': {
    description: "Protecting operational technology, industrial control systems, and intellectual property.",
    challenges: ["OT/ICS security", "IP protection", "IT/OT convergence", "Legacy system security"],
  },
  'research': {
    description: "Specialized solutions ensuring research data protection and IP security.",
    challenges: ["IP protection strategies", "Research data security", "Collaboration security", "Export control compliance"],
  },
};

// Icon name mapping for fallback
const defaultIndustryIcons: Record<string, string> = {
  'law-firms': 'Scale',
  'health-clinics': 'Heart',
  'accounting': 'Calculator',
  'retail': 'ShoppingCart',
  'manufacturing': 'Factory',
  'research': 'FlaskConical',
};

// Default industries list (used when WordPress fails)
const defaultIndustries = [
  { icon: Scale, title: "Law Firms", slug: "law-firms", ...defaultIndustriesData['law-firms'] },
  { icon: Heart, title: "Health Clinics", slug: "health-clinics", ...defaultIndustriesData['health-clinics'] },
  { icon: Calculator, title: "Accounting Practices", slug: "accounting", ...defaultIndustriesData['accounting'] },
  { icon: ShoppingCart, title: "Retail Chains", slug: "retail", ...defaultIndustriesData['retail'] },
  { icon: Factory, title: "Small Manufacturers", slug: "manufacturing", ...defaultIndustriesData['manufacturing'] },
  { icon: FlaskConical, title: "Research & Innovation", slug: "research", ...defaultIndustriesData['research'] },
];

interface IndustriesProps {
  data?: WPIndustry[] | null;
  isLoading?: boolean;
  sectionTitle?: string;
  sectionDescription?: string;
}

const Industries = ({ data, sectionTitle, sectionDescription }: IndustriesProps) => {
  // Get fallback data for an industry by slug
  const getFallback = (slug: string) => defaultIndustriesData[slug];

  // Get description from WP or fallback
  const getIndustryDescription = (slug: string, wpDescription?: string, wpExcerpt?: string) => {
    if (wpDescription && wpDescription.trim()) return wpDescription;
    if (wpExcerpt && wpExcerpt.trim()) return wpExcerpt.replace(/<[^>]*>/g, '');
    return getFallback(slug)?.description || '';
  };

  // Filter out test entries and map with fallback support
  const validWpIndustries = data?.filter(i => 
    i.slug !== 'test' && i.title && i.title.toLowerCase() !== 'test'
  ) || [];

  const industries = validWpIndustries.length > 0
    ? validWpIndustries.map((industry) => {
        const fallback = getFallback(industry.slug);
        const fallbackIcon = defaultIndustryIcons[industry.slug];
        return {
          icon: getIcon(industry.industryFields?.icon || fallbackIcon || 'Building') as LucideIcon,
          title: industry.title,
          slug: industry.slug,
          description: getIndustryDescription(industry.slug, industry.industryFields?.shortDescription, industry.excerpt),
          challenges: industry.industryFields?.challenges?.map(c => c.title) || fallback?.challenges || [],
        };
      })
    : defaultIndustries;

  return (
    <section id="industries" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 uppercase tracking-wide">
            {sectionTitle || "Cybersecurity Solutions by Industry"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {sectionDescription || "From initial assessments to ongoing support, we provide end-to-end cybersecurity solutions tailored to your organization's unique needs."}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <Link key={industry.title} href={`/industries/${industry.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300 h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2 uppercase tracking-wide">
                    {industry.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {industry.description}
                  </p>
                  {industry.challenges.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-foreground">Key Challenges:</p>
                      <ul className="space-y-1">
                        {industry.challenges.slice(0, 4).map((challenge) => (
                          <li key={challenge} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
