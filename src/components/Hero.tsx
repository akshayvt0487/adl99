"use client"

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-team.jpg";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { WPHeroSection } from "@/lib/wordpress";

const taglineWords = ["ASSESS", "DEFEND", "LEVERAGE"];

// Default hero content (fallback)
const defaultHero = {
  headline: "Stop Worrying About Cyber Threats.",
  headlineHighlight: "Get Peace of Mind.",
  subheadline: "Feeling overwhelmed by cybersecurity? ADL99 is Melbourne's trusted cybersecurity partner — simplifying protection for Australian businesses so you can focus on what you do best.",
  ctaText: "Speak With A Cyber Expert",
  ctaLink: "/contact",
};

interface HeroProps {
  data?: WPHeroSection | null;
  isLoading?: boolean;
}

const Hero = ({ data }: HeroProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Use WordPress data or fallback to defaults
  const hero = {
    headline: data?.headline || defaultHero.headline,
    headlineHighlight: data?.headlineHighlight || defaultHero.headlineHighlight,
    subheadline: data?.subheadline || defaultHero.subheadline,
    ctaText: data?.ctaText || defaultHero.ctaText,
    ctaLink: data?.ctaLink || defaultHero.ctaLink,
    backgroundImage: data?.backgroundImage?.node?.sourceUrl || heroImage,
  };

  // Parse tagline words from WordPress or use defaults
  const words = data?.tagline 
    ? data.tagline.split('|').map(w => w.trim()).filter(Boolean)
    : taglineWords;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={hero.backgroundImage}
          alt="Cybersecurity team collaborating"
          width={1920}
          height={1080}
          priority
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
      </div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10 pt-8 pb-28 md:pb-32">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-[1.1] mb-8 md:mb-12 uppercase tracking-wide"
          >
            {hero.headline}
            <br />
            <span className="text-[#00D4FF] mt-2 block">{hero.headlineHighlight}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/80 mb-8 md:mb-10"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href={hero.ctaLink}>
              <Button
                variant="accent"
                size="lg"
                className="text-base md:text-lg px-8 py-6 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {hero.ctaText}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ASSESS | DEFEND | LEVERAGE Full Width Strip */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary/90 backdrop-blur-sm py-4 md:py-6 border-t border-primary-foreground/10 z-10">
        {/* Desktop: Horizontal */}
        <h2 className="hidden md:block font-display text-xl lg:text-2xl xl:text-3xl font-semibold tracking-[0.25em] lg:tracking-[0.3em] text-primary-foreground text-center uppercase">
          {words.map((word, index) => (
            <span key={word}>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
              >
                {word}
              </motion.span>
              {index < words.length - 1 && (
                <span className="text-primary-foreground/40 mx-3 lg:mx-5">|</span>
              )}
            </span>
          ))}
        </h2>

        {/* Mobile: One word at a time with slow transition */}
        <div className="md:hidden flex items-center justify-center h-8">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentWordIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="font-display text-xl font-semibold tracking-[0.25em] text-primary-foreground uppercase"
            >
              {words[currentWordIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Hero;
