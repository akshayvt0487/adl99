"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { WPBenefit } from "@/lib/wordpress";
import shieldCheckIcon from "@/assets/shield-check-white.png";

// Default benefits (fallback)
const defaultBenefits = [
  { title: "Avoid Costly Breaches", description: "", icon: "shield-check" },
  { title: "Protect Client Data", description: "", icon: "shield-check" },
  { title: "Meet Compliance", description: "", icon: "shield-check" },
];

interface BenefitsStripProps {
  data?: WPBenefit[] | null;
  isLoading?: boolean;
}

const BenefitsStrip = ({ data, isLoading }: BenefitsStripProps) => {
  // Check if benefits have actual content (not just null values)
  const hasValidBenefits = data?.some(benefit => benefit.title);
  const benefits = hasValidBenefits ? data! : defaultBenefits;

  return (
    <section className="py-6 bg-primary">
      <div className="container mx-auto px-6">
        {/* Desktop: horizontal layout */}
        <div className="hidden md:flex flex-wrap justify-center items-center gap-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-3"
            >
              <Image src={shieldCheckIcon} alt="Shield" width={28} height={35} className="w-7 h-auto object-contain" />
              <span className="font-display font-semibold text-primary-foreground uppercase tracking-wider text-base">
                {benefit.title}
              </span>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile: vertical stacked layout with separators */}
        <div className="flex md:hidden justify-center">
          <div className="flex flex-col items-start gap-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  <Image src={shieldCheckIcon} alt="Shield" width={24} height={30} className="w-6 h-auto object-contain" />
                  <span className="font-display font-semibold text-primary-foreground uppercase tracking-wider text-sm">
                    {benefit.title}
                  </span>
                </div>
                {index < benefits.length - 1 && (
                  <div className="w-full h-px bg-primary-foreground/20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsStrip;