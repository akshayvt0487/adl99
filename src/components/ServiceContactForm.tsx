"use client"

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import GravityForm from "@/components/GravityForm";

interface ServiceContactFormProps {
  serviceName: string;
  benefits: string[];
}

const ServiceContactForm = ({ serviceName, benefits }: ServiceContactFormProps) => {
  return (
    <section id="contact-form" className="py-20 bg-primary scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6 uppercase tracking-wide">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-6">
              Book your free consultation to discuss {serviceName.toLowerCase()}. 
              No obligation, no pressure—just a conversation about your needs.
            </p>
            <ul className="space-y-4 mb-8">
              {benefits.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-primary-foreground/80">{item}</span>
                </motion.li>
              ))}
            </ul>
            <p className="text-primary-foreground/60 text-sm">
              Response within 24 hours • No spam • Your information stays confidential
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8"
          >
            <GravityForm 
              formId={1} 
              submitButtonClassName="w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceContactForm;
