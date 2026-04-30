"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, Home, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary/95 to-primary/90 flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

      <div className="relative z-10 max-w-3xl mx-auto text-center text-primary-foreground">
        {/* Shield Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-2xl bg-primary-foreground/10 flex items-center justify-center">
            <Shield className="w-10 h-10 text-primary-foreground" />
          </div>
        </div>

        {/* 404 Heading */}
        <h1 className="font-display text-8xl md:text-9xl font-bold mb-4 tracking-tight">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Page Not Found
        </h2>

        <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button variant="accent" size="lg" asChild>
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            asChild
          >
            <Link href="/contact">
              <Phone className="w-4 h-4 mr-2" />
              Contact Us
            </Link>
          </Button>
        </div>

        {/* Quick Links */}
        <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-8">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link
              href="/services"
              className="text-primary-foreground/90 hover:text-primary-foreground hover:underline transition-colors"
            >
              Our Services
            </Link>
            <Link
              href="/industries"
              className="text-primary-foreground/90 hover:text-primary-foreground hover:underline transition-colors"
            >
              Industries We Serve
            </Link>
            <Link
              href="/locations"
              className="text-primary-foreground/90 hover:text-primary-foreground hover:underline transition-colors"
            >
              Locations
            </Link>
            <Link
              href="/blog"
              className="text-primary-foreground/90 hover:text-primary-foreground hover:underline transition-colors"
            >
              Blog & Resources
            </Link>
            <Link
              href="/about"
              className="text-primary-foreground/90 hover:text-primary-foreground hover:underline transition-colors"
            >
              About ADL99
            </Link>
            <Link
              href="/cyber-security-urgent-help"
              className="text-primary-foreground/90 hover:text-primary-foreground hover:underline transition-colors"
            >
              Urgent Help
            </Link>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-8 text-sm text-primary-foreground/70">
          <p>Need immediate assistance?</p>
          <Link
            href="/cyber-security-urgent-help"
            className="text-primary-foreground font-semibold hover:underline"
          >
            24/7 Incident Response Available
          </Link>
        </div>
      </div>
    </div>
  );
}
