"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Menu, X, ChevronDown, Shield, FileSearch, Wrench, Users, UserCheck, Scale, Heart, Calculator, ShoppingBag, Factory, FlaskConical, MapPin } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import logo from "@/assets/adl99-logo.png";

const servicesItems = [
  { href: "/services/cyber-maturity", label: "Cyber Maturity Assessments", icon: FileSearch, description: "Evaluate your security posture" },
  { href: "/services/technical-advisory", label: "Technical Advisory Services", icon: Shield, description: "Expert guidance on security strategy" },
  { href: "/services/engineering-support", label: "Engineering Support", icon: Wrench, description: "Hands-on technical implementation" },
  { href: "/services/cyber-awareness", label: "Cyber Awareness Training", icon: Users, description: "Educate your team on security" },
  { href: "/services/vciso", label: "vCISO Services", icon: UserCheck, description: "Virtual Chief Information Security Officer" },
  { href: "/panic-button", label: "Urgent Help", icon: AlertTriangle, description: "Emergency cyber incident response" },
];

const industriesItems = [
  { href: "/industries/law-firms", label: "Law Firms", icon: Scale, description: "Protect client confidentiality" },
  { href: "/industries/health-clinics", label: "Health Clinics", icon: Heart, description: "Secure patient data" },
  { href: "/industries/accounting", label: "Accounting Practices", icon: Calculator, description: "Safeguard financial records" },
  { href: "/industries/retail", label: "Retail Chains", icon: ShoppingBag, description: "Protect customer transactions" },
  { href: "/industries/manufacturing", label: "Small Manufacturers", icon: Factory, description: "Secure operational technology" },
  { href: "/industries/research", label: "Research & Innovation", icon: FlaskConical, description: "Protect intellectual property" },
];

const locationsItems = [
  // Tier 1 - CBD & Inner Business Core
  { href: "/locations/melbourne-cbd", label: "Melbourne CBD", postcode: "3000", tier: "CBD & Inner Business" },
  { href: "/locations/southbank", label: "Southbank", postcode: "3006", tier: "CBD & Inner Business" },
  { href: "/locations/docklands", label: "Docklands", postcode: "3008", tier: "CBD & Inner Business" },

  // Tier 2 - Affluent Inner Suburbs
  { href: "/locations/south-yarra", label: "South Yarra", postcode: "3141", tier: "Inner Suburbs" },
  { href: "/locations/toorak", label: "Toorak", postcode: "3142", tier: "Inner Suburbs" },
  { href: "/locations/st-kilda", label: "St Kilda", postcode: "3182", tier: "Inner Suburbs" },
  { href: "/locations/brighton", label: "Brighton", postcode: "3186", tier: "Inner Suburbs" },
  { href: "/locations/richmond", label: "Richmond", postcode: "3121", tier: "Inner Suburbs" },

  // Tier 3 - Professional & Commercial Hubs
  { href: "/locations/hawthorn", label: "Hawthorn", postcode: "3122", tier: "Commercial Hubs" },
  { href: "/locations/camberwell", label: "Camberwell", postcode: "3124", tier: "Commercial Hubs" },
  { href: "/locations/malvern", label: "Malvern", postcode: "3144", tier: "Commercial Hubs" },
  { href: "/locations/prahran", label: "Prahran", postcode: "3181", tier: "Commercial Hubs" },
  { href: "/locations/east-melbourne", label: "East Melbourne", postcode: "3002", tier: "Commercial Hubs" },

  // Tier 4 - Growth & Emerging Hubs
  { href: "/locations/south-melbourne", label: "South Melbourne", postcode: "3205", tier: "Emerging Hubs" },
  { href: "/locations/port-melbourne", label: "Port Melbourne", postcode: "3207", tier: "Emerging Hubs" },
  { href: "/locations/fitzroy", label: "Fitzroy", postcode: "3065", tier: "Emerging Hubs" },
  { href: "/locations/albert-park", label: "Albert Park", postcode: "3206", tier: "Emerging Hubs" },
  { href: "/locations/kew", label: "Kew", postcode: "3101", tier: "Emerging Hubs" },
  { href: "/locations/carlton", label: "Carlton", postcode: "3053", tier: "Emerging Hubs" },
  { href: "/locations/collingwood", label: "Collingwood", postcode: "3066", tier: "Emerging Hubs" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const simpleNavLinks = [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-6 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center p-2">
          <Image
            src={logo}
            alt="ADL99 Cyber Security"
            width={92}
            height={80}
            className="h-20 w-auto rounded"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              href="/services"
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "services" ? "rotate-180" : ""}`} />
            </Link>

            <AnimatePresence>
              {activeDropdown === "services" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 pt-2 z-50"
                >
                  <div className="bg-card border border-border rounded-xl shadow-xl p-4 w-[480px]">
                    <div className="grid grid-cols-2 gap-2">
                      {servicesItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                        >
                          <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                            <item.icon className="w-4 h-4 text-primary" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-foreground truncate">{item.label}</p>
                            <p className="text-xs text-muted-foreground line-clamp-1">{item.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-border mt-3 pt-3">
                      <Link
                        href="/services"
                        className="text-sm text-primary hover:underline font-medium"
                      >
                        View all services →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Industries Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("industries")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              href="/industries"
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Industries
              <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "industries" ? "rotate-180" : ""}`} />
            </Link>

            <AnimatePresence>
              {activeDropdown === "industries" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 pt-2 z-50"
                >
                  <div className="bg-card border border-border rounded-xl shadow-xl p-4 w-[420px]">
                    <div className="grid grid-cols-2 gap-2">
                      {industriesItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                        >
                          <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                            <item.icon className="w-4 h-4 text-primary" />
                          </div>
                          <p className="text-sm font-medium text-foreground">{item.label}</p>
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-border mt-3 pt-3">
                      <Link
                        href="/industries"
                        className="text-sm text-primary hover:underline font-medium"
                      >
                        View all industries →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Locations Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("locations")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Locations
              <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "locations" ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {activeDropdown === "locations" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 pt-2 z-50"
                >
                  <div className="bg-card border border-border rounded-xl shadow-xl p-4 w-[600px] max-h-[70vh] overflow-y-auto">
                    <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      Melbourne Cybersecurity Services by Location
                    </h3>
                    <div className="grid grid-cols-3 gap-2">
                      {locationsItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-start gap-2 p-2 rounded-lg hover:bg-muted transition-colors group"
                        >
                          <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-foreground truncate">{item.label}</p>
                            <p className="text-xs text-muted-foreground">{item.postcode}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Simple Links */}
          {simpleNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" aria-label="Get a free consultation">
            <Button variant="outline" size="sm" className="hidden sm:inline-flex">
              Free Consultation
            </Button>
          </Link>
          <Link href="/panic-button" aria-label="Get urgent cybersecurity help">
            <Button variant="accent" size="sm" className="gap-2">
              <AlertTriangle className="w-4 h-4" />
              <span className="hidden sm:inline">URGENT HELP</span>
              <span className="sm:hidden">HELP</span>
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-2">
              {/* Services Accordion */}
              <div>
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === "services" ? null : "services")}
                  className="flex items-center justify-between w-full text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === "services" ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileExpanded === "services" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pb-2 flex flex-col gap-1">
                        {servicesItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-sm text-muted-foreground hover:text-foreground py-2 flex items-center gap-2"
                          >
                            <item.icon className="w-4 h-4 text-primary" />
                            {item.label}
                          </Link>
                        ))}
                        <Link
                          href="/services"
                          onClick={() => setIsMenuOpen(false)}
                          className="text-sm text-primary font-medium py-2"
                        >
                          View all services →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Industries Accordion */}
              <div>
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === "industries" ? null : "industries")}
                  className="flex items-center justify-between w-full text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  Industries
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === "industries" ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileExpanded === "industries" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pb-2 flex flex-col gap-1">
                        {industriesItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-sm text-muted-foreground hover:text-foreground py-2 flex items-center gap-2"
                          >
                            <item.icon className="w-4 h-4 text-primary" />
                            {item.label}
                          </Link>
                        ))}
                        <Link
                          href="/industries"
                          onClick={() => setIsMenuOpen(false)}
                          className="text-sm text-primary font-medium py-2"
                        >
                          View all industries →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Locations Accordion */}
              <div>
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === "locations" ? null : "locations")}
                  className="flex items-center justify-between w-full text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  Locations
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === "locations" ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileExpanded === "locations" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pb-2 flex flex-col gap-1 max-h-[300px] overflow-y-auto">
                        {locationsItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-sm text-muted-foreground hover:text-foreground py-2 flex items-center gap-2"
                          >
                            <MapPin className="w-4 h-4 text-primary shrink-0" />
                            <span>{item.label} ({item.postcode})</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Simple Links */}
              {simpleNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}

              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="w-full mt-2">
                <Button variant="outline" size="sm" className="w-full">
                  Free Consultation
                </Button>
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
