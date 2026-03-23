"use client";

import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle } from "lucide-react";
import { getIcon } from "@/lib/icon-map";
import GravityForm from "@/components/GravityForm";

interface InfoCardItem {
  item: string;
}

interface InfoCard {
  icon: string;
  title: string;
  value?: string;
  description: string;
  items?: InfoCardItem[];
}

interface PanicButtonPageClientProps {
  heroTitle: string;
  heroDescription: string;
  emergencyBannerText: string;
  infoCards: InfoCard[];
  formTitle: string;
  importantNotice: string;
}

export default function PanicButtonPageClient({
  heroTitle,
  heroDescription,
  emergencyBannerText,
  infoCards,
  formTitle,
  importantNotice,
}: PanicButtonPageClientProps) {
  return (
    <>
      {/* Emergency Banner */}
      <section className="bg-accent py-4">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-3 text-accent-foreground">
            <AlertTriangle className="w-6 h-6 animate-pulse" />
            <span className="font-display font-bold uppercase tracking-wide">
              {emergencyBannerText}
            </span>
            <AlertTriangle className="w-6 h-6 animate-pulse" />
          </div>
        </div>
      </section>

      <main className="py-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-6">
              <AlertTriangle className="w-10 h-10 text-accent" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 uppercase tracking-wide">
              {heroTitle}
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {heroDescription}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Quick Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-1 space-y-4"
            >
              {infoCards.map((card, index) => {
                const IconComponent = getIcon(card.icon);
                const isAccent = index === 0;

                return (
                  <div
                    key={card.title}
                    className={`rounded-xl p-6 ${
                      isAccent
                        ? "bg-accent/5 border border-accent/20"
                        : "bg-card border border-border"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        isAccent ? "bg-accent/10" : "bg-primary/10"
                      }`}>
                        <IconComponent className={`w-5 h-5 ${isAccent ? "text-accent" : "text-primary"}`} />
                      </div>
                      <h3 className="font-display font-bold uppercase tracking-wide">{card.title}</h3>
                    </div>
                    {card.value && (
                      <p className="text-2xl font-bold text-foreground mb-1">{card.value}</p>
                    )}
                    <div
                      className="text-sm text-muted-foreground"
                      dangerouslySetInnerHTML={{ __html: card.description }}
                    />
                    {card.items && card.items.length > 0 && (
                      <ul className="space-y-2 text-sm text-muted-foreground mt-3">
                        {card.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-primary" />
                            {item.item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </motion.div>

            {/* Emergency Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-card border border-border rounded-2xl p-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6 uppercase tracking-wide">
                  {formTitle}
                </h2>

                {/* Important Notice */}
                <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Important:</strong> {importantNotice}
                  </p>
                </div>

                {/* Gravity Form - Form ID 3 */}
                <GravityForm
                  formId={3}
                  submitButtonClassName="w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}
