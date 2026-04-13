import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import LocationPageClient from "./LocationPageClient";

interface LocationPageProps {
  params: Promise<{ slug: string }>;
}

// Location data structure
interface LocationData {
  name: string;
  postcode: string;
  heroTitle: string;
  heroSubtext: string;
  seoTitle: string;
  seoDescription: string;
  introH2: string;
  introContent: string;
  servicesH2: string;
  servicesIntro: string;
  services: Array<{
    h3: string;
    title: string;
    description: string;
  }>;
  whyAdl99H2: string;
  whyAdl99Content: string;
  industriesH2: string;
  industries: Array<{
    h3: string;
    title: string;
    description: string;
    link: string;
  }>;
  threatsH2: string;
  threatsIntro: string;
  threats: Array<{
    h3: string;
    title: string;
    description: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  nearbySuburbs: Array<{
    name: string;
    postcode: string;
    slug: string;
  }>;
}

// Location database
const locationsData: Record<string, LocationData> = {
  "melbourne-cbd": {
    name: "Melbourne CBD",
    postcode: "3000",
    heroTitle: "Protect What Matters Most",
    heroSubtext: "Trusted cyber security services for Melbourne CBD businesses — from cyber maturity assessments to 24/7 incident response.",
    seoTitle: "Cyber Security Melbourne CBD | ADL99",
    seoDescription: "Trusted cybersecurity services for Melbourne CBD businesses. Cyber maturity assessments, vCISO, incident response & Essential Eight compliance. Talk to ADL99 today.",
    introH2: "Cyber Security Services in Melbourne CBD",
    introContent: `
      <h2>Cyber Security Services in Melbourne CBD</h2>
      <p>Melbourne's CBD is home to Australia's densest concentration of professional services firms, corporate headquarters, and government offices. With over 480,000 workers commuting into the Hoddle Grid daily, CBD businesses manage vast volumes of sensitive client data, financial records, and intellectual property — making them prime targets for sophisticated cyber threats including business email compromise, ransomware, and credential theft.</p>
      <p>As a specialist <strong>cyber security company</strong> serving Melbourne CBD, ADL99 understands that CBD organisations face unique challenges: complex regulatory obligations under APRA CPS 234 and the Australian Privacy Act, distributed hybrid workforces, and interconnected supply chains that expand the attack surface far beyond the office walls. Our <strong>cyber security services</strong> are built to address these realities — from Essential Eight compliance and cyber maturity assessments to 24/7 incident response and virtual CISO leadership.</p>
      <p>Whether your office is on Collins Street, Spring Street, or anywhere within the Hoddle Grid, ADL99 delivers <strong>cyber security solutions</strong> that protect what matters most: your client relationships, your reputation, and your regulatory standing.</p>
    `,
    servicesH2: "Melbourne CBD Cyber Security Services — What We Deliver",
    servicesIntro: "ADL99 provides comprehensive cyber security solutions tailored for Melbourne CBD's corporate and professional services community.",
    services: [
      {
        h3: "Cyber Maturity Assessments for CBD Organisations",
        title: "Cyber Maturity Assessments",
        description: "Comprehensive evaluation of your security posture against Essential Eight, NIST, and ISO 27001 frameworks. Identify gaps, prioritise remediation, and build a clear roadmap to cyber resilience."
      },
      {
        h3: "vCISO Services — Virtual Security Leadership",
        title: "vCISO Services",
        description: "Strategic cybersecurity leadership without the full-time cost. Our virtual CISOs provide board-level reporting, policy development, and ongoing security governance for CBD organisations."
      },
      {
        h3: "Technical Advisory & Cyber Engineering",
        title: "Technical Advisory & Engineering",
        description: "Expert guidance on security architecture, cloud security, and infrastructure hardening. Our engineers deploy and optimise your defenses across network, endpoint, and cloud environments."
      },
      {
        h3: "Cyber Awareness Training for Melbourne Teams",
        title: "Cyber Awareness Training",
        description: "Transform your staff from security liability to first line of defense. Practical, engaging training programs with simulated phishing campaigns tailored for Melbourne CBD workforces."
      },
      {
        h3: "Emergency Incident Response — 24/7 Support",
        title: "24/7 Incident Response",
        description: "Rapid response when threats strike. Our emergency incident response team provides containment, eradication, recovery, and forensic analysis to get your CBD business back online fast."
      },
      {
        h3: "Essential Eight Compliance & Gap Analysis",
        title: "Essential Eight Compliance",
        description: "Achieve and maintain Essential Eight compliance with our gap analysis, implementation support, and ongoing monitoring services — critical for CBD firms working with government or regulated industries."
      }
    ],
    whyAdl99H2: "Why ADL99 Is Melbourne CBD's Trusted Cyber Security Company",
    whyAdl99Content: `
      <h2>Why ADL99 Is Melbourne CBD's Trusted Cyber Security Company</h2>
      <p>ADL99 is an Australian-owned cybersecurity consultancy based in Melbourne. We're not a managed IT provider dabbling in security — we're security specialists who live and breathe cyber risk every day. Our team holds industry certifications across offensive and defensive security, and we've responded to incidents affecting CBD law firms, accounting practices, financial services firms, and government offices.</p>
      <p>What sets ADL99 apart as Melbourne CBD's <strong>cyber security provider</strong>?</p>
      <ul>
        <li><strong>Local expertise:</strong> We understand Australian compliance obligations (APRA CPS 234, Privacy Act, Notifiable Data Breaches) and the threat landscape facing Melbourne businesses.</li>
        <li><strong>Framework-aligned:</strong> Our services map to Essential Eight, NIST Cybersecurity Framework, and ISO 27001 — giving CBD organisations a single partner for all compliance needs.</li>
        <li><strong>Scalable delivery:</strong> Whether you're a 10-person boutique firm or a 500-employee corporate office, our cyber security solutions scale to your size and risk profile.</li>
        <li><strong>24/7 response capability:</strong> Cyber incidents don't respect business hours. Neither do we.</li>
      </ul>
      <p>Your CBD office is a high-value target. Let ADL99 assess your cyber maturity before attackers find the gaps.</p>
    `,
    industriesH2: "Industries We Protect in Melbourne CBD",
    industries: [
      {
        h3: "Cyber Security for Law Firms in Melbourne CBD",
        title: "Law Firms",
        description: "Protect client privilege and sensitive case files with tailored security for legal practices. From conflict-of-interest walls to privileged communications protection.",
        link: "/industries/law-firms"
      },
      {
        h3: "Cyber Security for Accounting Firms",
        title: "Accounting Firms",
        description: "Safeguard client financial data and meet TPB obligations with comprehensive security for accounting practices. Tax season phishing protection and client data encryption.",
        link: "/industries/accounting"
      },
      {
        h3: "Cyber Security for Financial Services",
        title: "Financial Services",
        description: "APRA CPS 234 compliance, fraud prevention, and regulatory-aligned security for Melbourne's financial services firms. From wealth managers to fintech startups.",
        link: "/industries/accounting"
      },
      {
        h3: "Cyber Security for Government Offices",
        title: "Government Offices",
        description: "Essential Eight compliance, security clearance-aligned practices, and PSPF-compliant security for government agencies and contractors in Melbourne's Parliamentary precinct.",
        link: "/services"
      }
    ],
    threatsH2: "Cyber Threats Facing Melbourne CBD Businesses in 2026",
    threatsIntro: "Melbourne CBD organisations face a constantly evolving threat landscape. Here are the top cyber threats targeting CBD businesses right now:",
    threats: [
      {
        h3: "Business Email Compromise Targeting CBD Firms",
        title: "Business Email Compromise (BEC)",
        description: "Sophisticated email fraud targeting CBD professionals. Attackers impersonate executives, clients, or suppliers to redirect payments or steal sensitive data. CBD law firms and accounting practices are prime targets due to high-value transactions and client trust relationships."
      },
      {
        h3: "Ransomware Attacks on Professional Services",
        title: "Ransomware Attacks",
        description: "Ransomware groups specifically target professional services firms, knowing that downtime costs tens of thousands per hour and client data exposure triggers mandatory breach notification. CBD firms often pay ransoms to avoid reputational damage and OAIC reporting."
      },
      {
        h3: "Credential Theft & Phishing Campaigns",
        title: "Credential Theft & Phishing",
        description: "Mass and targeted phishing campaigns harvest CBD workers' credentials for cloud platforms, email systems, and practice management software. Once inside, attackers pivot laterally to access high-value client data and intellectual property."
      }
    ],
    faqs: [
      {
        question: "What is the Essential Eight framework and do Melbourne CBD businesses need it?",
        answer: "The Essential Eight is the Australian Cyber Security Centre's prioritised mitigation strategies to protect against cyber threats. While not legally mandated for most private sector businesses, it's the de facto standard for government contractors and increasingly expected by cyber insurers. CBD firms working with government or seeking cyber insurance should implement Essential Eight."
      },
      {
        question: "How much does cyber security cost for a Melbourne CBD business?",
        answer: "Cyber security costs depend on your organisation's size, complexity, and risk profile. A cyber maturity assessment starts from $3,500. vCISO services typically range from $2,000-$8,000 per month depending on engagement level. ADL99 provides transparent, fixed-price quotes with no hidden fees."
      },
      {
        question: "What should a CBD business do immediately after a cyber incident?",
        answer: "1) Disconnect affected systems from the network (but don't power them off — this destroys forensic evidence). 2) Contact ADL99's emergency incident response team on 03 7067 3373. 3) Preserve logs and evidence. 4) Do NOT pay any ransom before consulting with response professionals. 5) Notify your cyber insurer if you have coverage."
      },
      {
        question: "Does ADL99 provide cyber security for small Melbourne CBD businesses?",
        answer: "Yes. ADL99 works with CBD businesses of all sizes, from solo practitioners to 500+ employee organisations. Our cyber security services are scalable — we right-size our approach to your risk profile and budget, ensuring even small CBD firms get enterprise-grade protection without enterprise pricing."
      }
    ],
    nearbySuburbs: [
      { name: "Southbank", postcode: "3006", slug: "southbank" }
    ]
  },
  "southbank": {
    name: "Southbank",
    postcode: "3006",
    heroTitle: "Your Business Deserves More Than a Firewall",
    heroSubtext: "Comprehensive cyber security services for Southbank businesses — from startups to corporate towers.",
    seoTitle: "Cyber Security Southbank Melbourne | ADL99",
    seoDescription: "Cybersecurity services for Southbank businesses. From corporate towers to creative studios — ADL99 delivers cyber maturity assessments, vCISO & incident response.",
    introH2: "Cyber Security Services for Southbank Businesses",
    introContent: `
      <h2>Cyber Security Services for Southbank Businesses</h2>
      <p>Southbank's skyline tells a story of ambition — corporate towers alongside creative studios, media offices, and hospitality venues. This mix of industries means diverse attack surfaces: cloud-dependent startups, POS systems in restaurants, and sensitive IP in media production. Cybercriminals exploit the assumption that "only big companies get hacked." In reality, Southbank's mid-size businesses are frequently targeted because they hold valuable data but often lack dedicated security teams.</p>
      <p>ADL99 delivers <strong>cyber security services</strong> tailored to Southbank's diverse business community. As a specialist <strong>cyber security company</strong> based in Melbourne, we provide everything from penetration testing and vulnerability assessments to vCISO leadership and Essential Eight compliance — giving Southbank businesses access to enterprise-grade <strong>cyber security solutions</strong> without the enterprise price tag.</p>
      <p>From the arts precinct to the Crown entertainment complex to the Eureka Tower's corporate offices, ADL99 protects Southbank's businesses with practical, scalable cyber security that matches your industry and risk profile.</p>
    `,
    servicesH2: "Southbank Cyber Security Solutions — Full-Spectrum Protection",
    servicesIntro: "ADL99 delivers comprehensive cyber security solutions designed for Southbank's unique mix of creative, corporate, and hospitality businesses.",
    services: [
      {
        h3: "Cyber Maturity Assessments for Southbank Businesses",
        title: "Cyber Maturity Assessments",
        description: "Understand where your Southbank business stands against Australian cyber security standards. Our assessments identify vulnerabilities across cloud, network, and application layers with actionable remediation roadmaps."
      },
      {
        h3: "vCISO — Strategic Security Leadership",
        title: "vCISO Services",
        description: "Get executive-level security leadership without the full-time salary. Our virtual CISOs provide policy development, vendor risk management, and board-ready reporting for growing Southbank businesses."
      },
      {
        h3: "Penetration Testing & Vulnerability Assessments",
        title: "Penetration Testing",
        description: "Ethical hacking to find vulnerabilities before attackers do. We test web applications, APIs, cloud infrastructure, and internal networks — critical for Southbank's tech-forward businesses."
      },
      {
        h3: "Cyber Awareness Training Programs",
        title: "Cyber Awareness Training",
        description: "Transform your team into your first line of defense. Practical training with simulated phishing campaigns tailored for Southbank's creative and hospitality workforces."
      },
      {
        h3: "Emergency Incident Response",
        title: "Emergency Incident Response",
        description: "24/7 rapid response when cyber incidents strike. Containment, eradication, recovery, and forensic analysis to minimise downtime and protect your Southbank business reputation."
      },
      {
        h3: "Essential Eight Implementation",
        title: "Essential Eight Implementation",
        description: "Build cyber resilience with Australia's baseline security framework. Our Essential Eight implementation services help Southbank businesses achieve compliance and reduce cyber risk by 85%."
      }
    ],
    whyAdl99H2: "ADL99 — Your Local Southbank Cyber Security Company",
    whyAdl99Content: `
      <h2>ADL99 — Your Local Southbank Cyber Security Company</h2>
      <p>ADL99 is Melbourne's trusted <strong>cyber security provider</strong> for businesses that demand more than checkbox compliance. We're Australian-owned, Melbourne-based, and deeply familiar with the challenges Southbank's diverse business community faces — from securing cloud-native startups to protecting hospitality POS systems to hardening legacy corporate infrastructure.</p>
      <p>Why Southbank businesses choose ADL99:</p>
      <ul>
        <li><strong>Industry versatility:</strong> We've protected Southbank media companies, hospitality venues, tech startups, and corporate offices — we understand your sector's unique risks.</li>
        <li><strong>Cloud security expertise:</strong> Southbank's businesses run on SaaS platforms. We secure Microsoft 365, Google Workspace, AWS, and Azure environments with configuration reviews and access controls.</li>
        <li><strong>Rapid response:</strong> Located in St Kilda Road, we're minutes from Southbank with 24/7 emergency incident response capability.</li>
        <li><strong>Transparent pricing:</strong> Fixed-price engagements with no surprise bills. Cyber security should be predictable, not a budget black hole.</li>
      </ul>
      <p>Operating from Southbank? ADL99 delivers enterprise-grade cybersecurity scaled for your business.</p>
    `,
    industriesH2: "Industries We Protect in Southbank",
    industries: [
      {
        h3: "Cyber Security for Media & Creative Studios",
        title: "Media & Creative Studios",
        description: "Protect intellectual property, production assets, and client campaigns with tailored security for Southbank's creative sector. From Adobe Cloud security to FTP hardening.",
        link: "/services"
      },
      {
        h3: "Cyber Security for Hospitality Venues",
        title: "Hospitality Venues",
        description: "PCI DSS compliance, POS system security, and customer data protection for Southbank's restaurants, bars, and entertainment venues. Prevent card data breaches and maintain guest trust.",
        link: "/services"
      },
      {
        h3: "Cyber Security for Corporate Offices",
        title: "Corporate Offices",
        description: "Comprehensive security for Southbank's corporate tower tenants. From Essential Eight compliance to incident response planning and security awareness training.",
        link: "/services"
      },
      {
        h3: "Cyber Security for Tech Startups",
        title: "Tech Startups",
        description: "Scalable security for growing Southbank tech companies. SaaS security, application penetration testing, and vCISO services that grow with your business.",
        link: "/services"
      }
    ],
    threatsH2: "Cyber Security Threats Targeting Southbank Businesses",
    threatsIntro: "Southbank's diverse business landscape attracts equally diverse cyber threats. Here's what Southbank businesses are facing in 2026:",
    threats: [
      {
        h3: "POS & Payment System Breaches in Hospitality",
        title: "POS & Payment System Breaches",
        description: "Southbank's hospitality venues process thousands of card transactions daily. POS system compromises can expose customer card data, trigger PCI DSS breach investigations, and destroy venue reputations. Attackers target outdated POS software and weak payment networks."
      },
      {
        h3: "Cloud Security Risks for Southbank Startups",
        title: "Cloud Security Risks",
        description: "Southbank's tech startups run entirely in the cloud, often with insufficient access controls, no multi-factor authentication, and misconfigured storage buckets. A single compromised credential can expose entire customer databases or intellectual property."
      },
      {
        h3: "Social Engineering Attacks on Creative Teams",
        title: "Social Engineering Attacks",
        description: "Media and creative teams in Southbank are targeted with sophisticated phishing campaigns posing as clients, collaborators, or project briefs. Attackers steal login credentials, intercept file transfers, or deploy ransomware to extort payments and lock production assets."
      }
    ],
    faqs: [
      {
        question: "What is PCI DSS and do Southbank hospitality venues need it?",
        answer: "PCI DSS (Payment Card Industry Data Security Standard) is a set of requirements for any business that accepts card payments. If your Southbank venue processes credit or debit cards, you must comply with PCI DSS. Non-compliance can result in fines from card networks and liability for fraudulent transactions. ADL99 helps Southbank venues achieve and maintain PCI DSS compliance."
      },
      {
        question: "How can Southbank startups afford cybersecurity?",
        answer: "Cybersecurity doesn't require enterprise budgets. ADL99's vCISO services start from $2,000/month, giving startups strategic security leadership at a fraction of full-time CISO costs. We also offer penetration testing, SaaS security reviews, and Essential Eight assessments scaled for startup budgets."
      },
      {
        question: "What should a Southbank business do after a ransomware attack?",
        answer: "DO NOT pay the ransom immediately. Contact ADL99's incident response team on 03 7067 3373. We'll assess the situation, contain the threat, and determine if data recovery is possible without payment. Paying ransomware groups funds criminal activity and doesn't guarantee data recovery."
      },
      {
        question: "Does ADL99 work with Southbank creative agencies and studios?",
        answer: "Yes. ADL99 has extensive experience securing creative and media businesses. We understand the unique challenges: large file transfers, cloud collaboration tools, freelancer access management, and intellectual property protection. Our cyber security services are tailored for creative workflows."
      }
    ],
    nearbySuburbs: [
      { name: "Melbourne CBD", postcode: "3000", slug: "melbourne-cbd" }
    ]
  }
};

// Generate static params
export async function generateStaticParams() {
  return Object.keys(locationsData).map((slug) => ({
    slug,
  }));
}

// Generate metadata
export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = locationsData[slug];

  if (!location) {
    return {
      title: "Location Not Found | ADL99",
      description: "The requested location could not be found.",
    };
  }

  return {
    title: location.seoTitle,
    description: location.seoDescription,
    alternates: {
      canonical: `https://www.adl99.com.au/locations/${slug}`,
    },
    openGraph: {
      title: location.seoTitle,
      description: location.seoDescription,
      type: "website",
      url: `https://www.adl99.com.au/locations/${slug}`,
      images: [
        {
          url: `https://www.adl99.com.au/locations/${slug}-og.png`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: location.seoTitle,
      description: location.seoDescription,
      images: [`https://www.adl99.com.au/locations/${slug}-og.png`],
    },
  };
}

// Server component
export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = locationsData[slug];

  if (!location) {
    notFound();
  }

  // JSON-LD structured data
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": `ADL99 Cybersecurity - ${location.name}`,
    "description": location.seoDescription,
    "url": `https://www.adl99.com.au/locations/${slug}`,
    "areaServed": {
      "@type": "City",
      "name": location.name,
      "addressRegion": "VIC",
      "addressCountry": "AU"
    },
    "priceRange": "$$",
    "telephone": "+61370673373",
    "email": "info@adl99.com.au"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": location.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.adl99.com.au"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Locations",
        "item": "https://www.adl99.com.au/locations"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": location.name,
        "item": `https://www.adl99.com.au/locations/${slug}`
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />
      <Breadcrumb items={[{ label: "Locations", href: "/locations" }, { label: location.name }]} />

      <LocationPageClient
        locationName={location.name}
        heroTitle={location.heroTitle}
        heroSubtext={location.heroSubtext}
        introContent={location.introContent}
        servicesIntro={location.servicesIntro}
        services={location.services.map(s => ({ title: s.title, description: s.description }))}
        whyAdl99Content={location.whyAdl99Content}
        industries={location.industries}
        threatsIntro={location.threatsIntro}
        threats={location.threats.map(t => ({ title: t.title, description: t.description }))}
        faqs={location.faqs}
        nearbySuburbs={location.nearbySuburbs}
      />

      <Footer />
    </div>
  );
}
