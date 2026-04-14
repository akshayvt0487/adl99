import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { MapPin, Building2, Users, Shield } from "lucide-react";
import Link from "next/link";
import { getAllLocationSlugs, getLocationBySlug } from "@/data/locations";

export const metadata: Metadata = {
  title: "Melbourne Cybersecurity Services by Location | ADL99",
  description: "ADL99 provides expert cybersecurity services across Melbourne. Find tailored cyber security solutions for your suburb — from Melbourne CBD to Brighton, Toorak, Richmond, and beyond.",
  openGraph: {
    title: "Melbourne Cybersecurity Services by Location | ADL99",
    description: "ADL99 provides expert cybersecurity services across Melbourne. Find tailored cyber security solutions for your suburb.",
    type: "website",
  },
};

export default function LocationsPage() {
  const locationSlugs = getAllLocationSlugs();
  const locations = locationSlugs.map((slug) => ({
    slug,
    data: getLocationBySlug(slug)!,
  }));

  // Organize locations by tier
  const tier1 = locations.filter((loc) =>
    ["melbourne-cbd", "southbank", "docklands"].includes(loc.slug)
  );
  const tier2 = locations.filter((loc) =>
    ["south-yarra", "toorak", "st-kilda", "brighton", "richmond"].includes(loc.slug)
  );
  const tier3 = locations.filter((loc) =>
    ["hawthorn", "malvern", "camberwell", "prahran", "east-melbourne"].includes(loc.slug)
  );

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="border-b border-border bg-muted/30">
          <div className="container mx-auto px-6 py-4">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Locations", href: "/locations" },
              ]}
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" />
                <span>Melbourne-Wide Coverage</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Cybersecurity Services Across Melbourne
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                ADL99 delivers expert cyber security services across Melbourne's business districts.
                From CBD corporate headquarters to bayside professional practices — we protect what matters most.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-card border border-border rounded-xl p-6">
                  <Building2 className="w-8 h-8 text-primary mb-3 mx-auto" />
                  <div className="text-3xl font-bold text-foreground mb-1">10+</div>
                  <div className="text-sm text-muted-foreground">Melbourne Locations</div>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <Users className="w-8 h-8 text-primary mb-3 mx-auto" />
                  <div className="text-3xl font-bold text-foreground mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Businesses Protected</div>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <Shield className="w-8 h-8 text-primary mb-3 mx-auto" />
                  <div className="text-3xl font-bold text-foreground mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Incident Response</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            {/* Tier 1 */}
            {tier1.length > 0 && (
              <div className="mb-16">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                    CBD & Inner Business Core
                  </h2>
                  <p className="text-muted-foreground max-w-2xl">
                    Enterprise-grade cybersecurity for Melbourne's corporate headquarters, financial services, and high-density business precincts.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tier1.map(({ slug, data }) => (
                    <Link
                      key={slug}
                      href={`/locations/${slug}`}
                      className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <MapPin className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                              {data.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">{data.postcode}</p>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {data.heroSubtext}
                      </p>
                      <div className="flex items-center text-sm text-primary font-medium group-hover:gap-2 transition-all">
                        <span>View Services</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Tier 2 */}
            {tier2.length > 0 && (
              <div className="mb-16">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                    Affluent Inner Suburbs
                  </h2>
                  <p className="text-muted-foreground max-w-2xl">
                    Specialized cybersecurity for boutique professional practices, medical specialists, and high-net-worth individuals.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tier2.map(({ slug, data }) => (
                    <Link
                      key={slug}
                      href={`/locations/${slug}`}
                      className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <MapPin className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                              {data.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">{data.postcode}</p>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {data.heroSubtext}
                      </p>
                      <div className="flex items-center text-sm text-primary font-medium group-hover:gap-2 transition-all">
                        <span>View Services</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Tier 3 */}
            {tier3.length > 0 && (
              <div>
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                    Professional & Commercial Hubs
                  </h2>
                  <p className="text-muted-foreground max-w-2xl">
                    Practical cybersecurity for established professional services, accounting firms, legal practices, and eastern suburbs businesses.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tier3.map(({ slug, data }) => (
                    <Link
                      key={slug}
                      href={`/locations/${slug}`}
                      className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <MapPin className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                              {data.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">{data.postcode}</p>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {data.heroSubtext}
                      </p>
                      <div className="flex items-center text-sm text-primary font-medium group-hover:gap-2 transition-all">
                        <span>View Services</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Can't Find Your Location?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                ADL99 serves businesses across all Melbourne suburbs. Contact us to discuss cybersecurity services for your location.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/panic-button"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-destructive text-destructive-foreground font-medium hover:bg-destructive/90 transition-colors"
                >
                  <Shield className="w-4 h-4" />
                  Urgent Help
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
