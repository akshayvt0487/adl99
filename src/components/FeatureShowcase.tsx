"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
const features = [
  {
    title: "Security Monitoring",
    subtitle: "Always Protected",
    description: "Continuous surveillance of your digital assets",
    gradient: "from-blue-600/90 via-blue-500/80 to-cyan-400/70",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=75&fm=webp",
  },
  {
    title: "Rapid Incident Response",
    subtitle: "Quick Action",
    description: "Immediate threat containment when attacks occur",
    gradient: "from-red-600/90 via-orange-500/80 to-yellow-400/70",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=75&fm=webp",
  },
  {
    title: "Compliance Made Simple",
    subtitle: "Stay Compliant",
    description: "Meet industry standards with confidence",
    gradient: "from-emerald-600/90 via-teal-500/80 to-cyan-400/70",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=75&fm=webp",
  },
];

const FeatureShowcase = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 uppercase tracking-wide">
            Why Businesses Trust Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive approach to cybersecurity keeps your business safe and your mind at ease.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={feature.image}
                alt={feature.title}
                width={600}
                height={400}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${feature.gradient} opacity-90 group-hover:opacity-95 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <span className="font-display text-sm uppercase tracking-[0.2em] mb-2 opacity-80">
                  {feature.subtitle}
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-wide mb-3 transform transition-transform duration-300 group-hover:translate-y-[-5px]">
                  {feature.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed max-w-xs opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full Width Banner Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 relative min-h-[350px] md:h-[400px] overflow-hidden"
      >
        <Image
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1400&q=75&fm=webp"
          alt="Team collaboration"
          width={1400}
          height={400}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70" />
        
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6 py-8">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-primary-foreground uppercase tracking-wide mb-4">
                Ready to Secure Your Future?
              </h2>
              <p className="text-primary-foreground/80 text-base md:text-lg mb-6">
                Partner with ADL99 for expert cybersecurity solutions tailored to your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 sm:px-8 py-3 rounded-lg transition-colors w-full sm:w-auto text-center"
                  >
                    Get Started Today
                  </motion.button>
                </Link>
                <Link href="/services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border border-primary-foreground/30 font-semibold px-6 sm:px-8 py-3 rounded-lg transition-colors w-full sm:w-auto text-center"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FeatureShowcase;
