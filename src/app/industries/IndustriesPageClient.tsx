"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getIcon } from "@/lib/icon-map";

interface Industry {
  icon: string;
  title: string;
  slug: string;
  description: string;
  challenges: string[];
  solutions: string[];
  link: string;
}

interface IndustriesPageClientProps {
  heroTitle: string;
  heroDescription: string;
  introTitle?: string;
  introDescription?: string;
  industries: Industry[];
  ctaTitle: string;
  ctaDescription: string;
}

export default function IndustriesPageClient({
  heroTitle,
  heroDescription,
  introTitle,
  introDescription,
  industries,
  ctaTitle,
  ctaDescription,
}: IndustriesPageClientProps) {
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
            <p className="text-lg text-primary-foreground/80 mb-8">
              {heroDescription}
            </p>
            <Button variant="accent" size="lg" asChild>
              <Link href="/contact">Discuss Your Industry Needs</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      {introTitle && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                {introTitle}
              </h2>
              {introDescription && (
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {introDescription}
                </p>
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-20">
            {industries.map((industry, index) => {
              const IconComponent = getIcon(industry.icon);
              return (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  id={industry.slug}
                  className="scroll-mt-24"
                >
                  <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column */}
                    <motion.div
                      className={index % 2 === 1 ? "lg:order-2" : ""}
                      initial={{ opacity: 0, x: index % 2 === 1 ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <motion.div
                        className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3, type: "spring" }}
                      >
                        <IconComponent className="w-8 h-8 text-primary" />
                      </motion.div>
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 uppercase tracking-wide">
                        {industry.title}
                      </h2>
                      <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                        {industry.description}
                      </p>

                      {industry.challenges.length > 0 && (
                        <motion.div
                          className="bg-secondary/50 rounded-2xl p-6 mb-6"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.4 }}
                        >
                          <h3 className="font-display text-lg font-semibold text-foreground mb-4 uppercase tracking-wide">
                            Key Challenges
                          </h3>
                          <ul className="space-y-2">
                            {industry.challenges.map((challenge, challengeIndex) => (
                              <motion.li
                                key={challenge}
                                className="flex items-center gap-3"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.5 + challengeIndex * 0.05 }}
                              >
                                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                                <span className="text-muted-foreground">{challenge}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                      className={`bg-card rounded-2xl p-8 border border-border ${
                        index % 2 === 1 ? "lg:order-1" : ""
                      }`}
                      initial={{ opacity: 0, x: index % 2 === 1 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      {industry.solutions.length > 0 && (
                        <>
                          <h3 className="font-display text-lg font-semibold text-foreground mb-6 uppercase tracking-wide">
                            Our Solutions
                          </h3>
                          <ul className="space-y-4">
                            {industry.solutions.map((solution, solutionIndex) => (
                              <motion.li
                                key={solution}
                                className="flex items-start gap-3"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.4 + solutionIndex * 0.05 }}
                              >
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">{solution}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </>
                      )}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.7 }}
                      >
                        <Button variant="default" className="mt-8 w-full gap-2" asChild>
                          <Link href={industry.link}>
                            Learn More <ArrowRight className="w-4 h-4" />
                          </Link>
                        </Button>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
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
              <Link href="/contact">Talk to an Expert</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
