"use client"

import { motion } from "framer-motion";
import { WPStatsSection } from "@/lib/wordpress";

// Default stats (fallback)
const defaultStats = [
  { value: "38%", label: "Increase in Cyber Attacks", sublabel: "In the past year alone" },
  { value: "68%", label: "Of Businesses Experienced Attacks", sublabel: "In the last 12 months" },
  { value: "$4.88M", label: "Average Cost of a Data Breach", sublabel: "According to IBM Security" },
  { value: "83%", label: "Could Have Been Prevented", sublabel: "With proper security measures" },
];

const defaultSection = {
  sectionTitle: "The Cyber Threat Landscape Facing Melbourne & Australian Businesses",
  sectionDescription: "The threat landscape is evolving rapidly in Australia, but most attacks are preventable with the right security strategy.",
  source: "Sources: Australian Cyber Security Centre (ACSC), IBM Security, Cybersecurity Ventures",
};

interface StatsProps {
  data?: WPStatsSection | null;
  isLoading?: boolean;
}

const Stats = ({ data }: StatsProps) => {
  // Check if stats have actual content (not just null values)
  const hasValidStats = data?.stats?.some(stat => stat.value && stat.label);
  const stats = hasValidStats ? data!.stats : defaultStats;
  const sectionTitle = data?.sectionTitle || defaultSection.sectionTitle;
  const sectionDescription = data?.sectionDescription || defaultSection.sectionDescription;
  const source = data?.source || defaultSection.source;

  return (
    <section className="py-20 bg-card border-y border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 uppercase tracking-wide">
            {sectionTitle}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {sectionDescription}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <h3 className="font-semibold text-foreground mb-1">
                {stat.label}
              </h3>
              {stat.sublabel && (
                <p className="text-sm text-muted-foreground">
                  {stat.sublabel}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          {source}
        </p>
      </div>
    </section>
  );
};

export default Stats;
