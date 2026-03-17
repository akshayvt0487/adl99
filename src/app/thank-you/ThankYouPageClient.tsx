"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowLeft, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ThankYouPageClient() {
  return (
    <main className="flex-1 flex items-center justify-center py-20">
      <div className="container max-w-2xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-6"
            >
              <CheckCircle className="w-12 h-12 text-primary" />
            </motion.div>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Thank You!
            </h1>

            <p className="text-xl text-muted-foreground mb-2">
              Your enquiry has been received.
            </p>

            <p className="text-muted-foreground">
              One of our cybersecurity specialists will be in touch within 24 hours.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-card border border-border rounded-lg p-6 mb-8"
          >
            <h2 className="font-display text-lg font-semibold text-foreground mb-4">
              What Happens Next?
            </h2>
            <ul className="text-left space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">1</span>
                <span>Our team reviews your enquiry and assesses your needs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">2</span>
                <span>A specialist contacts you to discuss your requirements</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">3</span>
                <span>We provide tailored recommendations for your business</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Button asChild variant="default" size="lg">
              <Link href="/" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">
                Explore Our Services
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-sm text-muted-foreground"
          >
            <p className="mb-2">Need immediate assistance?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0370673373"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <Phone className="w-4 h-4" />
                03 7067 3373
              </a>
              <a
                href="mailto:info@adl99.com.au"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <Mail className="w-4 h-4" />
                info@adl99.com.au
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
