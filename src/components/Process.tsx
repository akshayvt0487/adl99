"use client"

import { motion } from "framer-motion";
import { WPProcessSection } from "@/lib/wordpress";

// Default steps (fallback)
const defaultSteps = [
  {
    number: "1",
    title: "Get In Touch",
    description: "Schedule your free 30-minute consultation. We'll discuss your business, current security posture, and specific concerns—no pressure, just expert guidance.",
  },
  {
    number: "2",
    title: "We Assess & Defend",
    description: "Our team conducts a comprehensive security assessment, identifies vulnerabilities, and implements robust protection measures tailored to your business needs.",
  },
  {
    number: "3",
    title: "Peace of Mind",
    description: "With ongoing monitoring and support, you can focus on growing your business while we keep your digital assets safe and secure.",
  },
];

const defaultSection = {
  sectionTitle: "Your Path to Complete Protection",
  sectionDescription: "Getting started with professional cybersecurity protection is simple. Here's how we work together to secure your business.",
};

interface ProcessProps {
  data?: WPProcessSection | null;
  isLoading?: boolean;
}

const Process = ({ data }: ProcessProps) => {
  // Check if steps have actual content (not just null values)
  const hasValidSteps = data?.steps?.some(step => step.title && step.description);
  const steps = hasValidSteps ? data!.steps : defaultSteps;
  const sectionTitle = data?.sectionTitle || defaultSection.sectionTitle;
  const sectionDescription = data?.sectionDescription || defaultSection.sectionDescription;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 uppercase tracking-wide">
            {sectionTitle}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {sectionDescription}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative text-center"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-border" />
              )}
              
              <div className="relative z-10 w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                {step.number}
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3 uppercase tracking-wide">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
