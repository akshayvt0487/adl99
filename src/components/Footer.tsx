"use client";

import { Facebook, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import adl99Logo from "@/assets/adl99-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 pb-24 md:pb-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src={adl99Logo}
                alt="ADL99 - Advance Defense Layer"
                width={74}
                height={64}
                className="h-16 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-background/70 mb-4">
            Professional cybersecurity solutions protecting Australian businesses from evolving cyber threats.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://facebook.com/adl99cybersecurity" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5 text-background" />
              </a>
              <a 
                href="https://www.linkedin.com/company/adl99/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-background" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-semibold mb-4">Services</h2>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link href="/services/cyber-maturity-assessments" className="hover:text-background hover:underline transition-colors">Cyber Maturity Assessments</Link></li>
              <li><Link href="/services/technical-advisory" className="hover:text-background hover:underline transition-colors">Technical Advisory Services</Link></li>
              <li><Link href="/services/engineering-support" className="hover:text-background hover:underline transition-colors">Engineering Support</Link></li>
              <li><Link href="/services/cyber-awareness-training" className="hover:text-background hover:underline transition-colors">Cyber Awareness Training</Link></li>
              <li><Link href="/services/vciso" className="hover:text-background hover:underline transition-colors">vCISO Services</Link></li>
              <li><Link href="/cyber-security-urgent-help" className="hover:text-background hover:underline transition-colors">Urgent Help</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-4">Industries</h2>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link href="/industries/law-firms" className="hover:text-background hover:underline transition-colors">Law Firms</Link></li>
              <li><Link href="/industries/health-clinics" className="hover:text-background hover:underline transition-colors">Health Clinics</Link></li>
              <li><Link href="/industries/accounting" className="hover:text-background hover:underline transition-colors">Accounting Practices</Link></li>
              <li><Link href="/industries/retail" className="hover:text-background hover:underline transition-colors">Retail Chains</Link></li>
              <li><Link href="/industries/manufacturing" className="hover:text-background hover:underline transition-colors">Small Manufacturers</Link></li>
              <li><Link href="/industries/research" className="hover:text-background hover:underline transition-colors">Research & Innovation</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-4">Contact</h2>
            <ul className="space-y-2 text-sm text-background/70">
              <li>470 St Kilda Road</li>
              <li>Melbourne VIC 3004</li>
              <li className="pt-2">
                <a href="tel:0370673373" className="hover:text-background transition-colors">03 7067 3373</a>
              </li>
              <li><a href="mailto:info@adl99.com.au" className="hover:text-background transition-colors">info@adl99.com.au</a></li>
              <li><Link href="/contact" className="hover:text-background transition-colors">Contact Us</Link></li>
              <li><Link href="/about" className="hover:text-background transition-colors">About Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center items-center w-full">
          <p className="text-xs text-background/50 mb-4 max-w-6xl">
            While every effort is made to ensure the accuracy of the information on this website, ADL99 makes no guarantees regarding its completeness or correctness. We recommend contacting ADL99 directly for a customised review specific to your requirements.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} ADL99 Cyber Security. All rights reserved.
            </p>
            <a
              href="https://www.dsigns.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/dsigns-logo-white.png"
                alt="Website by DSIGNS"
                width={80}
                height={24}
                loading="lazy"
                className="h-6"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
