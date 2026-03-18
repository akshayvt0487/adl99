"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getIcon } from "@/lib/icon-map";

interface Value {
  icon: string;
  title: string;
  description: string;
}

interface Stat {
  value: string;
  label: string;
}

interface ApproachItem {
  title: string;
  description: string;
}

interface AboutPageClientProps {
  heroTitle: string;
  heroDescription: string;
  missionStatement: string;
  missionDescription: string;
  australianOwnedTitle: string;
  australianOwnedDescription: string;
  valuesTitle: string;
  valuesDescription: string;
  values: Value[];
  stats: Stat[];
  approachTitle: string;
  approachItems: ApproachItem[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  ctaButtonLink: string;
}

export default function AboutPageClient({
  heroTitle,
  heroDescription,
  missionStatement,
  missionDescription,
  australianOwnedTitle,
  australianOwnedDescription,
  valuesTitle,
  valuesDescription,
  values,
  stats,
  approachTitle,
  approachItems,
  ctaTitle,
  ctaDescription,
  ctaButtonText,
  ctaButtonLink,
}: AboutPageClientProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 uppercase tracking-wide">
              {heroTitle}
            </h1>
            <p className="text-lg text-primary-foreground/80">
              {heroDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 uppercase tracking-wide">
                {missionStatement}
              </h2>
              <div
                className="text-muted-foreground text-lg mb-6 leading-relaxed space-y-4 [&>p]:mb-4"
                dangerouslySetInnerHTML={{ __html: missionDescription }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl p-8 border border-border"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold text-foreground uppercase tracking-wide">
                    {australianOwnedTitle}
                  </h2>
                  <p className="text-muted-foreground">{australianOwnedDescription}</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="font-display text-3xl font-bold text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 uppercase tracking-wide">
              {valuesTitle}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {valuesDescription}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = getIcon(value.icon);
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 border border-border text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <IconComponent className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 uppercase tracking-wide">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 uppercase tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {approachTitle}
            </motion.h2>
            <div className="space-y-6 text-left">
              {approachItems.map((approach, index) => (
                <motion.div
                  key={approach.title}
                  className="bg-card rounded-2xl p-6 border border-border"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <h3 className="font-display text-xl font-bold text-primary mb-2 uppercase tracking-wide">
                    {approach.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {approach.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4 uppercase tracking-wide">
              {ctaTitle}
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              {ctaDescription}
            </p>
            <Button variant="accent" size="lg" asChild>
              <Link href={ctaButtonLink}>{ctaButtonText}</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
