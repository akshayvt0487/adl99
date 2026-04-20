"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { getIcon } from "@/lib/icon-map";
import GravityForm from "@/components/GravityForm";

interface ContactItem {
  icon: string;
  title: string;
  description: string;
  detail?: string;
}

interface WhatToExpectItem {
  item: string;
}

interface ContactPageClientProps {
  heroTitle: string;
  heroDescription: string;
  emergencyBannerText: string;
  contactItems: ContactItem[];
  whatToExpectTitle: string;
  whatToExpect: WhatToExpectItem[];
  formTitle: string;
}

export default function ContactPageClient({
  heroTitle,
  heroDescription,
  emergencyBannerText,
  contactItems,
  whatToExpectTitle,
  whatToExpect,
  formTitle,
}: ContactPageClientProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/banner-images/contact.webp"
            alt="Contact ADL99"
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

      {/* Emergency Banner */}
      <section className="bg-accent py-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <AlertTriangle className="w-6 h-6 text-accent-foreground" />
            <p className="text-accent-foreground font-semibold">
              {emergencyBannerText}
            </p>
            <Button variant="secondary" size="sm" asChild>
              <Link href="/cyber-security-urgent-help">URGENT HELP</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl font-bold text-foreground mb-8 uppercase tracking-wide">
                Get in Touch
              </h2>

              <div className="space-y-6 mb-10">
                {contactItems.map((item, index) => {
                  const IconComponent = getIcon(item.icon);
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-bold text-foreground uppercase tracking-wide">
                          {item.title}
                        </h3>
                        <div
                          className="text-foreground"
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        />
                        {item.detail && (
                          <div
                            className="text-sm text-muted-foreground"
                            dangerouslySetInnerHTML={{ __html: item.detail }}
                          />
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                className="bg-secondary/50 rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="font-display text-lg font-bold text-foreground mb-4 uppercase tracking-wide">
                  {whatToExpectTitle}
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  {whatToExpect.map((step, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    >
                      <span className="text-primary font-bold">{index + 1}.</span>
                      {step.item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6 uppercase tracking-wide">
                  {formTitle}
                </h2>

                <GravityForm
                  formId={2}
                  submitButtonClassName="w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
