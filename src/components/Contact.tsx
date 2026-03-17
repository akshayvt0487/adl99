"use client"

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import GravityForm from "@/components/GravityForm";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        {/* Header and Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wide">
            Get Your Free Security Assessment
          </h2>
          <p className="text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Take the first step towards protecting your business. Schedule your free 30-minute consultation with our cybersecurity experts.
          </p>

          {/* Contact Info Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="flex items-center gap-3 bg-primary-foreground/5 rounded-xl px-4 py-4">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left min-w-0">
                <p className="text-xs text-primary-foreground/60">Call us</p>
                <a href="tel:0370673373" className="font-semibold text-sm hover:underline">03 7067 3373</a>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-primary-foreground/5 rounded-xl px-4 py-4">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left min-w-0">
                <p className="text-xs text-primary-foreground/60">Email us</p>
                <a href="mailto:info@adl99.com.au" className="font-semibold text-sm break-all hover:underline">info@adl99.com.au</a>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-primary-foreground/5 rounded-xl px-4 py-4">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-left min-w-0">
                <p className="text-xs text-primary-foreground/60">Location</p>
                <p className="font-semibold text-sm">470 St Kilda Rd, Melbourne VIC 3004</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-primary-foreground/5 rounded-xl px-4 py-4">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-left min-w-0">
                <p className="text-xs text-primary-foreground/60">Hours</p>
                <p className="font-semibold text-sm">Mon - Fri: 9am - 5pm</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Full Width Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-card text-card-foreground rounded-2xl p-8 md:p-10 max-w-5xl mx-auto"
        >
          <h3 className="font-display text-xl font-bold mb-6 text-center uppercase tracking-wide">Request a Consultation</h3>
          <GravityForm 
            formId={2} 
            submitButtonClassName="w-full sm:w-auto px-12"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
