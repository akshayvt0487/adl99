"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import logo from "@/assets/adl99-logo.png";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-200px)] flex items-center justify-center px-6 py-16 bg-background">
        <div className="max-w-2xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src={logo}
              alt="ADL99"
              width={120}
              height={104}
              className="h-26 w-auto"
              priority
            />
          </div>

          {/* 404 */}
          <h1 className="text-7xl md:text-8xl font-bold text-foreground mb-4">
            404
          </h1>

          {/* Message */}
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Access Denied: Page Not Found
          </h2>

          <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-md mx-auto">
            This page is more secure than your average endpoint — it doesn't even exist.
          </p>

          <p className="text-sm text-muted-foreground mb-10 max-w-lg mx-auto">
            Unlike a real cyber threat, this 404 error is harmless. But if you're experiencing a real security incident, our team is available 24/7 to help you respond.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild>
              <Link href="/">Return Home</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Contact Support</Link>
            </Button>
          </div>

          {/* Quick Links */}
          <div className="border-t pt-8">
            <p className="text-sm text-muted-foreground mb-4">
              Popular pages:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/services" className="text-primary hover:underline">
                Our Services
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/cyber-security-urgent-help" className="text-primary hover:underline">
                Urgent Help
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/locations" className="text-primary hover:underline">
                Locations
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/blog" className="text-primary hover:underline">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
