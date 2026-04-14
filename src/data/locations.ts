export interface LocationData {
  name: string;
  postcode: string;
  heroTitle: string;
  heroSubtext: string;
  seoTitle: string;
  seoDescription: string;
  introH2: string;
  introSubtext: string;
  introChallenges: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  servicesH2: string;
  servicesIntro: string;
  services: Array<{
    h3: string;
    title: string;
    description: string;
  }>;
  whyAdl99H2: string;
  whyAdl99Intro: string;
  whyAdl99Points: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  whyAdl99Cta: string;
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
  faqsH2: string;
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

export const locationsData: Record<string, LocationData> = {
  "melbourne-cbd": {
    name: "Melbourne CBD",
    postcode: "3000",
    heroTitle: "Protect What Matters Most",
    heroSubtext: "Trusted cyber security services for Melbourne CBD businesses — from cyber maturity assessments to 24/7 incident response.",
    seoTitle: "Cyber Security Melbourne CBD | ADL99",
    seoDescription: "Trusted cybersecurity services for Melbourne CBD businesses. Cyber maturity assessments, vCISO, incident response & Essential Eight compliance. Talk to ADL99 today.",
    introH2: "Cyber Security Services in Melbourne CBD",
    introSubtext: "Melbourne's CBD hosts Australia's densest concentration of professional services firms, corporate headquarters, and government offices. With over 480,000 workers managing sensitive data daily, CBD businesses face sophisticated cyber threats. ADL99 delivers solutions that protect what matters most.",
    introChallenges: [
      {
        icon: "Shield",
        title: "High-Value Target Protection",
        description: "CBD businesses manage vast volumes of sensitive client data, financial records, and intellectual property — making them prime targets for business email compromise, ransomware, and credential theft."
      },
      {
        icon: "FileText",
        title: "Complex Regulatory Compliance",
        description: "Navigate APRA CPS 234, Australian Privacy Act, and industry-specific regulations with confidence. We ensure your cybersecurity posture meets all compliance obligations."
      },
      {
        icon: "Users",
        title: "Distributed Workforce Security",
        description: "Hybrid workforces and remote access create expanded attack surfaces. We secure your organization across office, home, and mobile environments."
      },
      {
        icon: "Link",
        title: "Supply Chain Risk Management",
        description: "Interconnected supply chains extend your attack surface far beyond office walls. We help you identify, assess, and mitigate third-party security risks."
      }
    ],
    servicesH2: "Melbourne CBD Cyber Security Solutions — What We Deliver",
    servicesIntro: "ADL99 provides comprehensive cyber security solutions tailored for Melbourne CBD's corporate and professional services community.",
    services: [
      {
        h3: "Cyber Maturity Assessments for CBD Organisations",
        title: "Cyber Maturity Assessments",
        description: "Comprehensive evaluation of your security posture against Essential Eight, NIST, and ISO 27001 frameworks. Identify gaps, prioritise remediation, and build a clear roadmap to cyber resilience."
      },
      {
        h3: "Virtual CISO Services for Melbourne CBD",
        title: "Virtual CISO (vCISO)",
        description: "Executive-level cybersecurity leadership without the full-time cost. Our vCISOs provide strategic oversight, board reporting, and security program management tailored for CBD organisations."
      },
      {
        h3: "Essential Eight Compliance & Gap Analysis",
        title: "Essential Eight Compliance",
        description: "Achieve and maintain Essential Eight compliance with our gap analysis, implementation support, and ongoing monitoring services — critical for CBD firms working with government or regulated industries."
      }
    ],
    whyAdl99H2: "Why ADL99 Is Melbourne CBD's Trusted Cyber Security Company",
    whyAdl99Intro: "ADL99 is an Australian-owned cybersecurity consultancy based in Melbourne. We're not a managed IT provider dabbling in security — we're security specialists who live and breathe cyber risk every day. Our team holds industry certifications across offensive and defensive security, and we've responded to incidents affecting CBD law firms, accounting practices, financial services firms, and government offices.",
    whyAdl99Points: [
      {
        icon: "MapPin",
        title: "Local Expertise",
        description: "We understand Australian compliance obligations (APRA CPS 234, Privacy Act, Notifiable Data Breaches) and the threat landscape facing Melbourne businesses."
      },
      {
        icon: "Award",
        title: "Framework-Aligned",
        description: "Our services map to Essential Eight, NIST Cybersecurity Framework, and ISO 27001 — giving CBD organisations a single partner for all compliance needs."
      },
      {
        icon: "TrendingUp",
        title: "Scalable Delivery",
        description: "Whether you're a 10-person boutique firm or a 500-employee corporate office, our cyber security solutions scale to your size and risk profile."
      },
      {
        icon: "Clock",
        title: "24/7 Response Capability",
        description: "Cyber incidents don't respect business hours. Neither do we. Our emergency response team is available around the clock."
      }
    ],
    whyAdl99Cta: "Your CBD office is a high-value target. Let ADL99 assess your cyber maturity before attackers find the gaps.",
    industriesH2: "Industries We Protect in Melbourne CBD",
    industries: [
      {
        h3: "Cyber Security for Law Firms in Melbourne CBD",
        title: "Law Firms",
        description: "Protect client privilege and sensitive case files with tailored security for legal practices. From conflict-of-interest walls to privileged communications protection.",
        link: "/industries/law-firms"
      },
      {
        h3: "Cyber Security for Accounting Firms in Melbourne CBD",
        title: "Accounting & Financial Services",
        description: "Secure sensitive financial data and client records with comprehensive security frameworks designed for accounting practices and financial advisory firms.",
        link: "/industries/financial-services"
      },
      {
        h3: "Cyber Security for Professional Services in Melbourne CBD",
        title: "Professional Services",
        description: "Protect consulting firms, recruitment agencies, and advisory practices with tailored security solutions for knowledge-based businesses.",
        link: "/industries/professional-services"
      },
      {
        h3: "Cyber Security for Government Contractors in Melbourne CBD",
        title: "Government Contractors",
        description: "Meet stringent security requirements for government contracts with Essential Eight compliance, PSPF adherence, and ongoing monitoring.",
        link: "/industries/government"
      }
    ],
    threatsH2: "Cyber Threats Facing Melbourne CBD Businesses in 2026",
    threatsIntro: "CBD organisations face targeted attacks due to their high-value data and interconnected business ecosystems. Understanding these threats is the first step toward effective defense.",
    threats: [
      {
        h3: "Business Email Compromise (BEC) Attacks in Melbourne CBD",
        title: "Business Email Compromise (BEC)",
        description: "Attackers impersonate executives or trusted partners to authorize fraudulent payments or data transfers. CBD firms handling large financial transactions are prime targets. Average BEC loss in Australia: $64,000 per incident."
      },
      {
        h3: "Ransomware Targeting CBD Organisations",
        title: "Ransomware",
        description: "Cybercriminals encrypt critical systems and demand ransom payments. CBD law firms and accounting practices face double-extortion — encrypted systems plus threatened data leaks that breach client confidentiality."
      },
      {
        h3: "Supply Chain Attacks Affecting CBD Businesses",
        title: "Supply Chain Attacks",
        description: "Attackers compromise trusted vendors or software providers to gain access to downstream targets. CBD organisations with extensive vendor networks face elevated risk."
      }
    ],
    faqsH2: "Cyber Security FAQs for Melbourne CBD Businesses",
    faqs: [
      {
        question: "What cyber security services does ADL99 provide in Melbourne CBD?",
        answer: "ADL99 provides cyber maturity assessments, Virtual CISO (vCISO) services, Essential Eight compliance gap analysis, incident response, penetration testing, security awareness training, and ongoing security monitoring. We tailor our services to CBD businesses of all sizes."
      },
      {
        question: "How much does cyber security cost for a Melbourne CBD business?",
        answer: "Costs vary based on your organisation size, industry, and risk profile. A cyber maturity assessment typically starts from $5,000. Virtual CISO services range from $3,000-$8,000/month depending on scope. We provide transparent fixed-price quotes with no hidden fees. Contact us for a tailored proposal."
      },
      {
        question: "Is ADL99 based in Melbourne CBD?",
        answer: "ADL99 is based at 470 St Kilda Road, Melbourne VIC 3004 — minutes from the CBD. Our local presence means faster response times, face-to-face consultations, and deep understanding of Melbourne's business landscape and regulatory environment."
      },
      {
        question: "What should I do if my CBD business is hit by a cyber attack?",
        answer: "1) Disconnect affected systems from the network (but don't power them off — this destroys forensic evidence). 2) Contact ADL99's emergency incident response team on 03 7067 3373. 3) Preserve logs and evidence. 4) Do NOT pay any ransom before consulting with response professionals. 5) Notify your cyber insurer if you have coverage."
      },
      {
        question: "Does ADL99 provide cyber security for small Melbourne CBD businesses?",
        answer: "Yes. ADL99 works with CBD businesses of all sizes, from solo practitioners to 500+ employee organisations. Our cyber security services are scalable — we right-size our approach to your risk profile and budget, ensuring even small CBD firms get enterprise-grade protection without enterprise pricing."
      }
    ],
    nearbySuburbs: [
      { name: "Southbank", postcode: "3006", slug: "southbank" },
      { name: "Docklands", postcode: "3008", slug: "docklands" },
      { name: "East Melbourne", postcode: "3002", slug: "east-melbourne" },
      { name: "Carlton", postcode: "3053", slug: "carlton" }
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
    introSubtext: "Southbank's skyline tells a story of ambition — corporate towers alongside creative studios, media offices, and hospitality venues. This diverse business landscape creates unique security challenges. ADL99 delivers practical, scalable cyber security that matches your industry and risk profile.",
    introChallenges: [
      {
        icon: "Target",
        title: "Mid-Size Business Targeting",
        description: "Cybercriminals exploit the assumption that 'only big companies get hacked.' Southbank's mid-size businesses hold valuable data but often lack dedicated security teams — making them prime targets."
      },
      {
        icon: "Database",
        title: "Diverse Attack Surfaces",
        description: "From cloud-dependent startups to POS systems in hospitality venues to sensitive IP in media production — each industry brings unique vulnerabilities that require specialized protection."
      },
      {
        icon: "Cloud",
        title: "Cloud Security Gaps",
        description: "Southbank businesses run on SaaS platforms like Microsoft 365, AWS, and Adobe Cloud. Misconfigurations and weak access controls create easy entry points for attackers."
      },
      {
        icon: "CreditCard",
        title: "Payment Security Compliance",
        description: "Hospitality venues handle credit card data daily. PCI DSS compliance and POS system security are critical to prevent card data breaches and maintain customer trust."
      }
    ],
    servicesH2: "Southbank Cyber Security Solutions — Full-Spectrum Protection",
    servicesIntro: "ADL99 delivers comprehensive cyber security solutions designed for Southbank's unique mix of creative, corporate, and hospitality businesses.",
    services: [
      {
        h3: "Cyber Maturity Assessments for Southbank Businesses",
        title: "Cyber Maturity Assessments",
        description: "Understand where your Southbank business stands against Australian cyber security standards. Our assessments identify vulnerabilities across cloud, network, and application layers with actionable remediation roadmaps."
      },
      {
        h3: "Cloud Security for Southbank SaaS-Dependent Businesses",
        title: "Cloud Security Reviews",
        description: "Secure your Microsoft 365, Google Workspace, AWS, or Azure environment with configuration reviews, access control audits, and multi-factor authentication implementation."
      },
      {
        h3: "Essential Eight Implementation",
        title: "Essential Eight Implementation",
        description: "Build cyber resilience with Australia's baseline security framework. Our Essential Eight implementation services help Southbank businesses achieve compliance and reduce cyber risk by 85%."
      }
    ],
    whyAdl99H2: "ADL99 — Your Local Southbank Cyber Security Company",
    whyAdl99Intro: "ADL99 is Melbourne's trusted cyber security provider for businesses that demand more than checkbox compliance. We're Australian-owned, Melbourne-based, and deeply familiar with the challenges Southbank's diverse business community faces — from securing cloud-native startups to protecting hospitality POS systems to hardening legacy corporate infrastructure.",
    whyAdl99Points: [
      {
        icon: "Layers",
        title: "Industry Versatility",
        description: "We've protected Southbank media companies, hospitality venues, tech startups, and corporate offices — we understand your sector's unique risks."
      },
      {
        icon: "CloudCog",
        title: "Cloud Security Expertise",
        description: "Southbank's businesses run on SaaS platforms. We secure Microsoft 365, Google Workspace, AWS, and Azure environments with configuration reviews and access controls."
      },
      {
        icon: "Zap",
        title: "Rapid Response",
        description: "Located in St Kilda Road, we're minutes from Southbank with 24/7 emergency incident response capability."
      },
      {
        icon: "DollarSign",
        title: "Transparent Pricing",
        description: "Fixed-price engagements with no surprise bills. Cyber security should be predictable, not a budget black hole."
      }
    ],
    whyAdl99Cta: "Operating from Southbank? ADL99 delivers enterprise-grade cybersecurity scaled for your business.",
    industriesH2: "Industries We Protect in Southbank",
    industries: [
      {
        h3: "Cyber Security for Media & Creative Studios",
        title: "Media & Creative Studios",
        description: "Protect intellectual property, production assets, and client campaigns with tailored security for Southbank's creative sector. From Adobe Cloud security to FTP hardening.",
        link: "/services"
      },
      {
        h3: "Cyber Security for Hospitality & Entertainment Venues",
        title: "Hospitality & Entertainment",
        description: "Secure POS systems, protect customer payment data, and achieve PCI DSS compliance for Southbank's restaurants, bars, and entertainment venues.",
        link: "/services"
      },
      {
        h3: "Cyber Security for Tech Startups in Southbank",
        title: "Tech Startups",
        description: "Build security into your product from day one. We help Southbank startups implement secure development practices, cloud security, and investor-ready security frameworks.",
        link: "/services"
      },
      {
        h3: "Cyber Security for Corporate Offices in Southbank",
        title: "Corporate Offices",
        description: "Protect enterprise infrastructure, secure remote work, and maintain compliance for Southbank's corporate tenants. Scalable solutions for growing organisations.",
        link: "/services"
      }
    ],
    threatsH2: "Cyber Security Threats Targeting Southbank Businesses",
    threatsIntro: "Southbank's diverse business ecosystem faces unique threats — from cloud misconfigurations to POS malware. Here's what we're seeing.",
    threats: [
      {
        h3: "Cloud Misconfigurations Affecting Southbank Businesses",
        title: "Cloud Misconfigurations",
        description: "Improperly configured Microsoft 365, AWS, or Google Workspace environments expose sensitive data to the internet. We regularly see publicly accessible SharePoint sites, misconfigured S3 buckets, and weak access controls in Southbank businesses."
      },
      {
        h3: "POS Malware Targeting Southbank Hospitality Venues",
        title: "POS System Malware",
        description: "Point-of-sale malware steals customer credit card data during transactions. Southbank's hospitality venues face targeted attacks designed to bypass PCI DSS controls and exfiltrate payment data."
      },
      {
        h3: "Intellectual Property Theft from Southbank Creative Firms",
        title: "Intellectual Property Theft",
        description: "Media companies and creative studios hold valuable intellectual property — unreleased content, client campaigns, and proprietary designs. Attackers target weak file transfer protocols and unsecured collaboration tools."
      }
    ],
    faqsH2: "Cyber Security FAQs for Southbank Businesses",
    faqs: [
      {
        question: "What cyber security services does ADL99 offer in Southbank?",
        answer: "ADL99 provides cyber maturity assessments, cloud security reviews (Microsoft 365, AWS, Google Workspace), PCI DSS compliance for hospitality, Essential Eight implementation, incident response, and Virtual CISO services. We tailor our approach to Southbank's diverse business landscape."
      },
      {
        question: "How close is ADL99 to Southbank?",
        answer: "ADL99's office is located at 470 St Kilda Road, Melbourne VIC 3004 — less than 2km from Southbank. We can be on-site for incident response or consultations within minutes. Our proximity means we understand the local business ecosystem and can provide rapid support when needed."
      },
      {
        question: "Does ADL99 help with PCI DSS compliance for Southbank hospitality venues?",
        answer: "Yes. ADL99 helps Southbank restaurants, bars, and entertainment venues achieve and maintain PCI DSS compliance. We assess your POS systems, implement required security controls, conduct vulnerability scans, and provide ongoing monitoring to protect customer payment data."
      },
      {
        question: "What should I do if my Southbank business gets hit by ransomware?",
        answer: "DO NOT pay the ransom immediately. Contact ADL99's incident response team on 03 7067 3373. We'll assess the situation, contain the threat, and determine if data recovery is possible without payment. Paying ransomware groups funds criminal activity and doesn't guarantee data recovery."
      },
      {
        question: "Does ADL99 work with Southbank creative agencies and studios?",
        answer: "Yes. ADL99 has extensive experience securing creative and media businesses. We understand the unique challenges: large file transfers, cloud collaboration tools, freelancer access management, and intellectual property protection. Our cyber security services are tailored for creative workflows."
      }
    ],
    nearbySuburbs: [
      { name: "Melbourne CBD", postcode: "3000", slug: "melbourne-cbd" },
      { name: "Docklands", postcode: "3008", slug: "docklands" },
      { name: "South Melbourne", postcode: "3205", slug: "south-melbourne" },
      { name: "Port Melbourne", postcode: "3207", slug: "port-melbourne" }
    ]
  },
  "docklands": {
    name: "Docklands",
    postcode: "3008",
    heroTitle: "Confidence Starts with Cyber Resilience",
    heroSubtext: "Enterprise-grade cyber security services for Docklands' corporate waterfront — protecting banking, fintech, and regulated industries.",
    seoTitle: "Cyber Security Docklands Melbourne | ADL99",
    seoDescription: "Cybersecurity for Docklands businesses. ADL99 provides cyber maturity assessments, vCISO, penetration testing & compliance for Melbourne's corporate waterfront.",
    introH2: "Cyber Security Services for Docklands Businesses",
    introSubtext: "Docklands is Melbourne's modern corporate waterfront — home to major banking headquarters, technology firms, and media companies. The precinct's heavy reliance on cloud infrastructure, distributed workforces, and interconnected office networks creates complex attack surfaces. Financial services firms here face strict regulatory obligations under APRA CPS 234 and the Australian Privacy Act, making compliance-aligned cyber security services not optional but essential.",
    introChallenges: [
      {
        icon: "FileCheck",
        title: "Regulatory Compliance Pressure",
        description: "Docklands' financial services firms face strict APRA CPS 234, Privacy Act, and industry regulations. Non-compliance risks fines, reputational damage, and loss of operating licenses."
      },
      {
        icon: "Target",
        title: "Advanced Persistent Threats",
        description: "Corporate headquarters and financial institutions attract sophisticated threat actors seeking financial data, trade secrets, and customer information."
      },
      {
        icon: "Network",
        title: "Interconnected Networks",
        description: "Docklands' modern office towers share infrastructure and connectivity. One compromised tenant can create risk for neighboring organizations through network proximity."
      },
      {
        icon: "Cloud",
        title: "Cloud & Hybrid Complexity",
        description: "Distributed workforces, cloud applications, and hybrid infrastructure expand attack surfaces beyond traditional network perimeters."
      }
    ],
    servicesH2: "Docklands Cyber Security Solutions — Enterprise-Grade Protection",
    servicesIntro: "ADL99 is the cyber security company Docklands' regulated industries trust. Our cyber security solutions are purpose-built for compliance-heavy environments.",
    services: [
      {
        h3: "Cyber Maturity Assessments for Corporate Offices",
        title: "Cyber Maturity Assessments",
        description: "Comprehensive evaluation of security posture across Essential Eight, NIST, and ISO 27001 frameworks. Map current state, identify gaps, and build compliance roadmaps for Docklands' regulated firms."
      },
      {
        h3: "vCISO Services for Regulated Industries",
        title: "Virtual CISO for Regulated Industries",
        description: "Executive-level security leadership for APRA-regulated firms, fintech companies, and corporate headquarters. Board reporting, risk governance, and compliance oversight."
      },
      {
        h3: "APRA CPS 234 & Essential Eight Compliance",
        title: "APRA CPS 234 Compliance",
        description: "Gap analysis, remediation roadmaps, and ongoing compliance monitoring for Docklands financial services firms. Achieve and maintain APRA CPS 234 requirements with confidence."
      }
    ],
    whyAdl99H2: "ADL99 — The Cyber Security Company Docklands Trusts",
    whyAdl99Intro: "ADL99 delivers cyber security services built for Docklands' compliance-heavy corporate environment. We understand APRA CPS 234, Essential Eight, and the regulatory landscape facing financial services and corporate headquarters. Our team has secured banking infrastructure, fintech platforms, and corporate networks across Melbourne's premium business districts.",
    whyAdl99Points: [
      {
        icon: "Shield",
        title: "Regulatory Expertise",
        description: "Deep knowledge of APRA CPS 234, Privacy Act, and Essential Eight requirements. We speak the language of compliance and deliver audit-ready documentation."
      },
      {
        icon: "Building",
        title: "Enterprise Experience",
        description: "We've secured corporate headquarters, banking infrastructure, and regulated firms across Docklands and Melbourne CBD. We understand enterprise complexity."
      },
      {
        icon: "Clock",
        title: "24/7 Incident Response",
        description: "Cyber incidents don't respect business hours. Our emergency response team provides round-the-clock support with digital forensics capability."
      },
      {
        icon: "Award",
        title: "Framework-Aligned",
        description: "Services mapped to Essential Eight, NIST, and ISO 27001. One partner for all compliance needs."
      }
    ],
    whyAdl99Cta: "Docklands businesses face regulatory scrutiny and sophisticated threats. ADL99 helps you meet both head-on.",
    industriesH2: "Industries We Protect in Docklands",
    industries: [
      {
        h3: "Cyber Security for Banking & Financial Services",
        title: "Banking & Financial Services",
        description: "APRA CPS 234 compliance, security architecture reviews, and incident response for Docklands' banking and financial services sector.",
        link: "/industries/financial-services"
      },
      {
        h3: "Cyber Security for Technology Companies",
        title: "Technology Companies",
        description: "Secure product development, cloud security, and scalable security frameworks for Docklands tech firms and fintech companies.",
        link: "/industries/technology"
      },
      {
        h3: "Cyber Security for Media & Communications",
        title: "Media & Communications",
        description: "Protect broadcast infrastructure, digital assets, and intellectual property for media companies in Melbourne's corporate waterfront.",
        link: "/services"
      },
      {
        h3: "Cyber Security for Corporate Headquarters",
        title: "Corporate Headquarters",
        description: "Enterprise security architecture, governance frameworks, and board-level reporting for Docklands corporate tenants.",
        link: "/services"
      }
    ],
    threatsH2: "Cyber Threats Targeting Docklands' Corporate Precinct",
    threatsIntro: "Docklands' concentration of financial services and corporate headquarters attracts sophisticated threat actors and regulatory scrutiny.",
    threats: [
      {
        h3: "Regulatory Non-Compliance Risks (APRA CPS 234)",
        title: "Regulatory Non-Compliance Risks",
        description: "Financial services firms face strict APRA CPS 234 obligations. Non-compliance risks enforcement actions, reputational damage, and operational restrictions. APRA expects material cyber incidents reported within 72 hours."
      },
      {
        h3: "Advanced Persistent Threats Targeting Financial Data",
        title: "Advanced Persistent Threats (APTs)",
        description: "Nation-state actors and organized crime groups target Docklands financial institutions for customer data, transaction records, and trade secrets. APTs use sophisticated techniques to maintain long-term network access."
      },
      {
        h3: "Supply Chain Attacks on Interconnected Office Networks",
        title: "Supply Chain Attacks",
        description: "Docklands' corporate tenants share building infrastructure and vendor relationships. Compromised suppliers or neighboring tenants can create lateral movement opportunities for attackers."
      }
    ],
    faqsH2: "Cyber Security FAQs for Docklands Businesses",
    faqs: [
      {
        question: "What is APRA CPS 234 and does it apply to my Docklands business?",
        answer: "APRA CPS 234 is the information security standard for APRA-regulated entities (banks, insurers, superannuation funds). It requires board oversight, security capabilities, incident response, and third-party risk management. If your Docklands business is APRA-regulated, compliance is mandatory. ADL99 helps firms achieve and maintain CPS 234 requirements."
      },
      {
        question: "How much does cyber security cost for a Docklands corporate office?",
        answer: "Costs depend on your organization size, regulatory obligations, and risk profile. Cyber maturity assessments start from $8,000. Virtual CISO services for regulated firms range from $5,000-$12,000/month. APRA CPS 234 gap analysis typically $12,000-$25,000. We provide fixed-price proposals with transparent scoping."
      },
      {
        question: "Does ADL99 provide on-site support in Docklands?",
        answer: "Yes. ADL99 is based at 470 St Kilda Road, minutes from Docklands. We provide on-site consultations, incident response, and security assessments. Our local presence means faster response times and face-to-face board presentations when required."
      },
      {
        question: "What should Docklands businesses do after a cyber incident?",
        answer: "1) Activate your incident response plan. 2) Contact ADL99's emergency team on 03 7067 3373. 3) Preserve evidence and logs. 4) Notify APRA within 72 hours if you're a regulated entity. 5) Engage legal counsel for breach notification obligations under Privacy Act. 6) Document timeline and actions for post-incident review."
      },
      {
        question: "Can ADL99 help with Essential Eight compliance?",
        answer: "Yes. Essential Eight is Australia's baseline security framework. ADL99 conducts gap assessments, provides remediation roadmaps, and supports implementation to Maturity Level 1, 2, or 3. We align Essential Eight with APRA CPS 234 requirements for Docklands financial services firms."
      }
    ],
    nearbySuburbs: [
      { name: "Melbourne CBD", postcode: "3000", slug: "melbourne-cbd" },
      { name: "Southbank", postcode: "3006", slug: "southbank" },
      { name: "South Melbourne", postcode: "3205", slug: "south-melbourne" },
      { name: "Port Melbourne", postcode: "3207", slug: "port-melbourne" }
    ]
  },
  "south-yarra": {
    name: "South Yarra",
    postcode: "3141",
    heroTitle: "Security That Matches Your Standards",
    heroSubtext: "Trusted cyber security services for South Yarra's boutique professional practices — protecting what matters most.",
    seoTitle: "Cyber Security South Yarra Melbourne | ADL99",
    seoDescription: "Cybersecurity for South Yarra's boutique firms and professionals. ADL99 provides cyber maturity assessments, vCISO & compliance-ready protection. Get in touch.",
    introH2: "Cyber Security Services for South Yarra Businesses",
    introSubtext: "South Yarra's reputation for sophistication extends beyond Chapel Street's boutiques. The suburb hosts a concentration of boutique law firms, specialist medical practices, financial advisors, and high-net-worth individuals — each holding sensitive personal and financial data that cybercriminals actively seek. A single breach at a wealth management firm or medical practice here can expose hundreds of clients and trigger mandatory reporting under the Notifiable Data Breaches scheme. As a cyber security company trusted by South Yarra's professional community, ADL99 delivers cyber security services scaled for boutique firms — from cyber maturity assessments that identify your specific vulnerabilities to vCISO leadership that gives your practice access to strategic security guidance without a full-time hire.",
    introChallenges: [
      {
        icon: "Target",
        title: "High-Value Client Data Protection",
        description: "Boutique practices manage sensitive data for high-net-worth clients. A breach exposes not just data but professional reputation built over decades."
      },
      {
        icon: "FileWarning",
        title: "Notifiable Data Breach Obligations",
        description: "Medical and legal practices face mandatory breach notification under Australian Privacy Act. Non-compliance brings OAIC enforcement and reputational damage."
      },
      {
        icon: "Mail",
        title: "Spear Phishing Targeting",
        description: "Cybercriminals research South Yarra professionals and craft personalized attacks exploiting trust relationships with high-value clients."
      },
      {
        icon: "Users",
        title: "Small Team Vulnerabilities",
        description: "Boutique firms lack dedicated IT/security staff. Every team member becomes a potential entry point without proper training and controls."
      }
    ],
    servicesH2: "South Yarra Cyber Security Solutions — Tailored for Boutique Firms",
    servicesIntro: "ADL99 delivers cyber security services designed for South Yarra's boutique professional practices — enterprise-grade protection without enterprise complexity.",
    services: [
      {
        h3: "Cyber Maturity Assessments for Boutique Practices",
        title: "Cyber Maturity Assessments",
        description: "Tailored security assessments for boutique law, medical, and financial practices. Identify vulnerabilities, assess Privacy Act compliance, and build practical remediation roadmaps."
      },
      {
        h3: "vCISO — Outsourced Security Leadership",
        title: "Virtual CISO Services",
        description: "Strategic security leadership for boutique practices without the cost of a full-time hire. Board reporting, risk governance, and compliance oversight scaled for small professional firms."
      },
      {
        h3: "Essential Eight & Privacy Act Compliance",
        title: "Compliance Services",
        description: "Achieve Australian Privacy Act compliance and Essential Eight baseline security. Protect client data and avoid OAIC enforcement actions."
      }
    ],
    whyAdl99H2: "Why South Yarra Professionals Choose ADL99 as Their Cyber Security Company",
    whyAdl99Intro: "South Yarra's boutique practices demand security providers who understand professional obligations, client confidentiality, and regulatory compliance. ADL99 delivers cyber security services built for trust-based businesses where reputation is everything.",
    whyAdl99Points: [
      {
        icon: "Scale",
        title: "Professional Services Expertise",
        description: "Deep experience securing boutique law firms, medical practices, and wealth advisors. We understand professional privilege and client confidentiality requirements."
      },
      {
        icon: "Shield",
        title: "Privacy Act Compliance",
        description: "Expert guidance on Australian Privacy Principles, Notifiable Data Breaches scheme, and OAIC obligations for professional practices."
      },
      {
        icon: "DollarSign",
        title: "Scaled for Boutique Firms",
        description: "Enterprise-grade security without enterprise pricing. Our services scale to boutique practice budgets while maintaining high-calibre protection."
      },
      {
        icon: "Award",
        title: "Discretion & Professionalism",
        description: "We operate with the same discretion you extend to your clients. Confidential engagements, minimal disruption to practice operations."
      }
    ],
    whyAdl99Cta: "Your clients trust you with their most sensitive information. ADL99 helps you protect that trust.",
    industriesH2: "Industries We Protect in South Yarra",
    industries: [
      {
        h3: "Cyber Security for Boutique Law Firms",
        title: "Boutique Law Firms",
        description: "Protect client privilege, case files, and confidential communications. Security designed for legal professional privilege and regulatory obligations.",
        link: "/industries/law-firms"
      },
      {
        h3: "Cyber Security for Medical Specialists",
        title: "Medical Specialists",
        description: "Secure patient records, My Health Records integration, and practice management systems. Compliance with Privacy Act and health data regulations.",
        link: "/industries/healthcare"
      },
      {
        h3: "Cyber Security for Wealth Management Firms",
        title: "Wealth Management",
        description: "Protect high-net-worth client financial data, investment strategies, and confidential wealth planning. Security for AFSL holders.",
        link: "/industries/financial-services"
      },
      {
        h3: "Cyber Security for Boutique Retail",
        title: "Boutique Retail",
        description: "PCI DSS compliance, customer data protection, and e-commerce security for South Yarra's premium retail sector.",
        link: "/services"
      }
    ],
    threatsH2: "Cyber Threats Targeting South Yarra's Professional Community",
    threatsIntro: "South Yarra's concentration of wealth and professional services attracts sophisticated cyber threats targeting high-value data and client trust.",
    threats: [
      {
        h3: "Spear Phishing Targeting High-Net-Worth Clients",
        title: "Spear Phishing Attacks",
        description: "Cybercriminals research South Yarra professionals and craft personalized emails impersonating clients, partners, or trusted contacts. These attacks exploit professional trust to steal credentials or authorize fraudulent transactions."
      },
      {
        h3: "Data Breaches in Medical & Legal Practices",
        title: "Professional Practice Data Breaches",
        description: "Medical and legal practices hold highly sensitive personal information. Breaches trigger Notifiable Data Breaches obligations, OAIC investigations, professional indemnity claims, and irreparable reputation damage."
      },
      {
        h3: "Notifiable Data Breach Obligations for South Yarra Firms",
        title: "Privacy Act Compliance Failures",
        description: "Australian Privacy Act requires practices to notify affected individuals and OAIC of eligible data breaches. Non-compliance brings enforcement actions and damages trust with clients who expect the highest confidentiality."
      }
    ],
    faqsH2: "Cyber Security FAQs for South Yarra Businesses",
    faqs: [
      {
        question: "What cyber security services does ADL99 provide for South Yarra professionals?",
        answer: "ADL99 provides cyber maturity assessments, Virtual CISO services, Privacy Act compliance reviews, Essential Eight implementation, staff awareness training, incident response, and penetration testing. We specialize in boutique law firms, medical practices, and wealth management firms."
      },
      {
        question: "How much does cyber security cost for a South Yarra boutique practice?",
        answer: "Cyber maturity assessments for boutique practices start from $4,500. Virtual CISO services range from $2,500-$6,000/month depending on practice size. Privacy Act compliance reviews typically $3,000-$7,000. We provide fixed-price proposals tailored to boutique practice budgets."
      },
      {
        question: "What is a Notifiable Data Breach and when do I need to report one?",
        answer: "Under the Privacy Act's Notifiable Data Breaches scheme, you must notify affected individuals and OAIC if a data breach is likely to result in serious harm. This includes unauthorized access to patient records, client files, or financial data. You have 30 days to assess and notify. ADL99 provides breach response and notification support."
      },
      {
        question: "Does ADL99 understand professional privilege and client confidentiality?",
        answer: "Yes. ADL99 has extensive experience with legal professional privilege, medical confidentiality, and wealth management discretion. Our security assessments and incident response work within professional privilege frameworks. We sign confidentiality agreements and operate with the same discretion you extend to clients."
      },
      {
        question: "Can a boutique practice afford a Virtual CISO?",
        answer: "Yes. ADL99's vCISO services are specifically designed for boutique practices. You get executive-level security leadership scaled to your practice size — from a few hours per month for compliance oversight to ongoing strategic guidance. Far more affordable than a full-time CISO hire."
      }
    ],
    nearbySuburbs: [
      { name: "Toorak", postcode: "3142", slug: "toorak" },
      { name: "Prahran", postcode: "3181", slug: "prahran" },
      { name: "Richmond", postcode: "3121", slug: "richmond" },
      { name: "Melbourne CBD", postcode: "3000", slug: "melbourne-cbd" }
    ]
  },
  "toorak": {
    name: "Toorak",
    postcode: "3142",
    heroTitle: "Discreet Protection for High-Value Targets",
    heroSubtext: "High-calibre cyber security services for Toorak's business owners, private offices, and wealth advisors.",
    seoTitle: "Cyber Security Toorak Melbourne | ADL99",
    seoDescription: "Tailored cybersecurity for Toorak's business owners and private offices. ADL99 delivers discreet, high-calibre cyber protection, vCISO & incident response.",
    introH2: "Cyber Security Services for Toorak Businesses & Private Offices",
    introSubtext: "Toorak is synonymous with wealth, influence, and discretion. Business owners, executives, and family offices operating here manage significant assets and sensitive information — making them prime targets for spear phishing, business email compromise, and identity theft. Unlike mass-market attacks, threats targeting Toorak's professionals are often highly personalised, using publicly available information to craft convincing social engineering campaigns. ADL99 is the cyber security company Toorak's high-value professionals trust for discreet, high-calibre protection.",
    introChallenges: [
      {
        icon: "Eye",
        title: "High-Profile Targeting",
        description: "Toorak professionals are researched targets. Attackers use public information to craft personalized spear phishing and social engineering attacks."
      },
      {
        icon: "DollarSign",
        title: "High-Value Fraud Risk",
        description: "Business email compromise targeting wire transfers, property settlements, and investment transactions. Average BEC loss in Australia: $64,000."
      },
      {
        icon: "UserX",
        title: "Identity Theft & Privacy",
        description: "High-net-worth individuals face identity theft, doxxing, and privacy violations. Personal and professional digital footprints require active protection."
      }
    ],
    servicesH2: "Toorak Cyber Security Solutions — Discreet, High-Calibre Protection",
    servicesIntro: "ADL99 delivers cyber security services designed for Toorak's unique threat landscape — where attacks are targeted, stakes are high, and discretion is paramount.",
    services: [
      {
        h3: "Cyber Maturity Assessments for Private Offices",
        title: "Executive Threat Assessments",
        description: "Comprehensive security assessments for family offices, private offices, and high-net-worth individuals. Evaluate personal and professional digital footprints."
      },
      {
        h3: "vCISO for Family Offices & Executives",
        title: "Virtual CISO for Family Offices",
        description: "Strategic security leadership for family offices managing complex wealth structures. Governance frameworks and vendor risk management."
      },
      {
        h3: "Security Engineering & Network Hardening",
        title: "Executive Security Hardening",
        description: "Network security, endpoint protection, and secure communications for executive residences and private offices."
      }
    ],
    whyAdl99H2: "ADL99 — The Cyber Security Company Toorak's Business Owners Trust",
    whyAdl99Intro: "Toorak demands discretion, expertise, and results. ADL99 delivers cyber security services with the professionalism and confidentiality that Melbourne's most prestigious suburb expects.",
    whyAdl99Points: [
      {
        icon: "Shield",
        title: "Executive Protection Experience",
        description: "We've secured family offices, private equity firms, and high-net-worth individuals across Melbourne."
      },
      {
        icon: "Lock",
        title: "Absolute Discretion",
        description: "Confidential engagements, NDAs as standard, and minimal footprint. We operate with complete discretion."
      },
      {
        icon: "Clock",
        title: "24/7 Executive Response",
        description: "Dedicated incident response for high-profile breaches, identity theft, and business email compromise."
      },
      {
        icon: "Award",
        title: "Trusted Advisor Network",
        description: "We work seamlessly with your existing legal, accounting, and wealth advisory teams."
      }
    ],
    whyAdl99Cta: "High-profile individuals need high-calibre protection. ADL99 delivers cybersecurity with the discretion Toorak demands.",
    industriesH2: "Who We Protect in Toorak",
    industries: [
      {
        h3: "Cyber Security for Private & Family Offices",
        title: "Private & Family Offices",
        description: "Comprehensive security for family offices managing trusts, investments, and multi-generational wealth.",
        link: "/services"
      },
      {
        h3: "Cyber Security for Wealth Advisors",
        title: "Wealth Advisors",
        description: "Security for AFSL holders, financial planners, and wealth managers serving high-net-worth clients.",
        link: "/industries/financial-services"
      },
      {
        h3: "Cyber Security for Private School Administration",
        title: "Private Education",
        description: "Secure student data, staff records, and parent communications for Toorak's private schools.",
        link: "/services"
      },
      {
        h3: "Cyber Security for Executive Residences",
        title: "Executive Residences",
        description: "Home office security, personal device protection, and network hardening for executives.",
        link: "/services"
      }
    ],
    threatsH2: "Cyber Threats Targeting Toorak's High-Value Professionals",
    threatsIntro: "Toorak's concentration of wealth attracts sophisticated, targeted attacks that exploit personal information and professional trust.",
    threats: [
      {
        h3: "Targeted Spear Phishing & CEO Fraud",
        title: "Spear Phishing & CEO Fraud",
        description: "Attackers research Toorak business owners to craft personalized emails. CEO fraud targets wire transfers by impersonating executives or trusted advisors."
      },
      {
        h3: "Identity Theft Targeting High-Net-Worth Individuals",
        title: "Identity Theft & Doxxing",
        description: "High-net-worth individuals face targeted identity theft, account takeovers, and doxxing. Personal information is weaponized for fraud or harassment."
      },
      {
        h3: "Business Email Compromise in Private Offices",
        title: "Business Email Compromise",
        description: "Email account takeovers targeting property transactions, investment transfers, and family office operations."
      }
    ],
    faqsH2: "Cyber Security FAQs for Toorak Businesses",
    faqs: [
      {
        question: "What makes Toorak professionals attractive targets for cybercriminals?",
        answer: "Toorak's concentration of wealth and business ownership makes residents high-value targets. Cybercriminals research individuals using public records, LinkedIn, property databases, and social media to craft personalized attacks targeting high-value transactions."
      },
      {
        question: "How does ADL99 ensure discretion for Toorak clients?",
        answer: "ADL99 operates under strict confidentiality agreements as standard. We use encrypted communications, conduct assessments during non-business hours if required, and maintain minimal on-site presence. Our team understands the importance of discretion for high-profile individuals."
      },
      {
        question: "What is CEO fraud and how can I prevent it?",
        answer: "CEO fraud occurs when attackers impersonate executives to authorize fraudulent payments. Prevention requires: multi-factor authentication on all email accounts, verification procedures for wire transfers (phone call to known number), and staff training to recognize impersonation."
      },
      {
        question: "Does ADL99 work with family offices?",
        answer: "Yes. ADL99 provides Virtual CISO services, security architecture, and compliance support for family offices across Melbourne. We understand protecting multi-generational wealth, securing trusted advisor access, and maintaining privacy."
      }
    ],
    nearbySuburbs: [
      { name: "South Yarra", postcode: "3141", slug: "south-yarra" },
      { name: "Malvern", postcode: "3144", slug: "malvern" },
      { name: "Prahran", postcode: "3181", slug: "prahran" },
      { name: "Brighton", postcode: "3186", slug: "brighton" }
    ]
  },
  "st-kilda": {
    name: "St Kilda",
    postcode: "3182",
    heroTitle: "Bayside Business, Bulletproof Security",
    heroSubtext: "Comprehensive cyber security services for St Kilda's diverse business community — from hospitality to creative agencies.",
    seoTitle: "Cyber Security St Kilda Melbourne | ADL99",
    seoDescription: "Cybersecurity services for St Kilda businesses. ADL99 provides cyber maturity assessments, Essential Eight compliance & incident response for Melbourne's bayside.",
    introH2: "Cyber Security Services for St Kilda Businesses",
    introSubtext: "St Kilda's eclectic business community — from Fitzroy Street's creative agencies to Acland Street's hospitality venues and the professional services firms along Carlisle Street — shares a common vulnerability: underinvestment in cybersecurity. Many St Kilda businesses rely on cloud tools, process card payments, and manage customer databases without the security controls to match. ADL99 provides cyber security services designed for St Kilda's small and medium businesses. As a cyber security company that understands bayside business, we deliver practical cyber security solutions — from Essential Eight compliance and POS security to staff awareness training and rapid incident response.",
    introChallenges: [
      {
        icon: "Store",
        title: "Hospitality POS Vulnerabilities",
        description: "Restaurants, bars, and cafes process thousands of card transactions daily. POS systems are prime targets for malware designed to steal payment data."
      },
      {
        icon: "Cloud",
        title: "Cloud & SaaS Dependency",
        description: "Creative agencies and small businesses run entirely on cloud platforms. Misconfigurations and weak access controls create easy entry points."
      },
      {
        icon: "Users",
        title: "Small Team Security Gaps",
        description: "SMEs lack dedicated IT security staff. Every team member needs training to recognize phishing, social engineering, and fraud attempts."
      },
      {
        icon: "CreditCard",
        title: "PCI DSS Compliance",
        description: "Any business processing credit cards must comply with PCI DSS. Non-compliance risks fines, card brand sanctions, and liability for breaches."
      }
    ],
    servicesH2: "St Kilda Cyber Security Solutions — Comprehensive Business Protection",
    servicesIntro: "ADL99 delivers cyber security services tailored for St Kilda's vibrant small business community — practical protection without enterprise complexity.",
    services: [
      {
        h3: "Cyber Maturity Assessments for SMEs",
        title: "Cyber Maturity Assessments",
        description: "Baseline security assessments for small and medium businesses. Identify vulnerabilities, prioritize fixes, and build practical security roadmaps scaled to SME budgets."
      },
      {
        h3: "vCISO — Security Leadership Without the Salary",
        title: "Virtual CISO Services",
        description: "Part-time security leadership for growing St Kilda businesses. Strategic guidance, compliance support, and vendor management without full-time hire costs."
      },
      {
        h3: "Essential Eight Compliance for Small Business",
        title: "Essential Eight for SMEs",
        description: "Implement Australia's baseline security framework. Protect against 85% of cyber threats with Essential Eight Maturity Level 1 or 2 compliance."
      }
    ],
    whyAdl99H2: "ADL99 — St Kilda's Trusted Cyber Security Company",
    whyAdl99Intro: "St Kilda's businesses need security providers who understand small business constraints — limited budgets, small teams, and cloud-first operations. ADL99 delivers enterprise-grade protection scaled for bayside SMEs.",
    whyAdl99Points: [
      {
        icon: "Briefcase",
        title: "SME Specialists",
        description: "We've secured St Kilda hospitality venues, creative agencies, and professional services. We understand small business challenges and budgets."
      },
      {
        icon: "DollarSign",
        title: "Fixed-Price Clarity",
        description: "Transparent fixed-price engagements. No surprise bills or scope creep. Cybersecurity should be predictable and affordable for SMEs."
      },
      {
        icon: "Zap",
        title: "Rapid Deployment",
        description: "Located on St Kilda Road, we're minutes away. Fast response for incidents, on-site visits when needed, and deep local market knowledge."
      },
      {
        icon: "Shield",
        title: "Practical Security",
        description: "We don't over-engineer solutions. Our recommendations are practical, achievable, and prioritized by actual risk to your business."
      }
    ],
    whyAdl99Cta: "St Kilda businesses hold more valuable data than they realise. Let ADL99 show you where your blind spots are.",
    industriesH2: "Industries We Protect in St Kilda",
    industries: [
      {
        h3: "Cyber Security for Hospitality & Restaurants",
        title: "Hospitality & Restaurants",
        description: "POS security, PCI DSS compliance, and customer data protection for St Kilda's restaurants, bars, and cafes.",
        link: "/services"
      },
      {
        h3: "Cyber Security for Creative Agencies",
        title: "Creative Agencies",
        description: "Secure cloud collaboration, intellectual property protection, and client data security for design studios and marketing agencies.",
        link: "/services"
      },
      {
        h3: "Cyber Security for Professional Services",
        title: "Professional Services",
        description: "Privacy Act compliance, cloud security, and client data protection for accounting, legal, and consulting firms.",
        link: "/services"
      },
      {
        h3: "Cyber Security for Retail & E-Commerce",
        title: "Retail & E-Commerce",
        description: "E-commerce security, payment processing protection, and customer data security for St Kilda retailers.",
        link: "/services"
      }
    ],
    threatsH2: "Cyber Security Risks Facing St Kilda Businesses",
    threatsIntro: "St Kilda's small businesses face targeted attacks designed to exploit common SME vulnerabilities — from POS malware to cloud misconfigurations.",
    threats: [
      {
        h3: "POS System Breaches & Card Data Theft",
        title: "POS Malware & Card Skimming",
        description: "Point-of-sale malware captures card data during transactions. St Kilda hospitality venues face targeted POS attacks designed to evade detection and exfiltrate payment data to criminal infrastructure."
      },
      {
        h3: "Phishing Targeting Small Business Owners",
        title: "Phishing & Business Email Compromise",
        description: "Small businesses receive targeted phishing emails impersonating suppliers, banks, or the ATO. These attacks steal credentials, redirect payments, or install ransomware on business systems."
      },
      {
        h3: "Cloud & SaaS Misconfiguration Risks",
        title: "Cloud Security Gaps",
        description: "Many St Kilda businesses use Microsoft 365, Google Workspace, or Adobe Cloud without proper security configuration. Weak passwords, no multi-factor authentication, and publicly accessible file shares expose sensitive data."
      }
    ],
    faqsH2: "Cyber Security FAQs for St Kilda Businesses",
    faqs: [
      {
        question: "What cyber security services does ADL99 provide in St Kilda?",
        answer: "ADL99 provides cyber maturity assessments, Virtual CISO services, Essential Eight implementation, POS and PCI DSS security for hospitality, cloud security reviews (Microsoft 365, Google Workspace), staff awareness training, and incident response. We specialize in small and medium businesses."
      },
      {
        question: "How much does cyber security cost for a St Kilda small business?",
        answer: "Cyber maturity assessments for small businesses start from $3,500. Virtual CISO services range from $2,000-$5,000/month depending on business size. Essential Eight implementation typically $5,000-$15,000 depending on current maturity. We provide transparent fixed-price proposals."
      },
      {
        question: "Does my St Kilda cafe need PCI DSS compliance?",
        answer: "Yes. Any business that processes, stores, or transmits credit card data must comply with PCI DSS (Payment Card Industry Data Security Standard). This includes cafes, restaurants, bars, and retail stores. Non-compliance risks fines from card brands and liability for breaches. ADL99 helps St Kilda hospitality venues achieve and maintain PCI DSS compliance."
      },
      {
        question: "What should I do if my St Kilda business gets hit by ransomware?",
        answer: "DO NOT pay the ransom immediately. Contact ADL99's incident response team on 03 7067 3373. Disconnect affected systems (don't power off — this destroys evidence). We'll assess if data recovery is possible without payment. Paying ransomware funds criminals and doesn't guarantee data recovery."
      },
      {
        question: "How close is ADL99 to St Kilda?",
        answer: "ADL99's office is at 470 St Kilda Road, Melbourne VIC 3004 — less than 2km from St Kilda. We can be on-site within minutes for incident response or consultations. Our proximity means we understand the local business community and can provide rapid support."
      }
    ],
    nearbySuburbs: [
      { name: "South Yarra", postcode: "3141", slug: "south-yarra" },
      { name: "Prahran", postcode: "3181", slug: "prahran" },
      { name: "Brighton", postcode: "3186", slug: "brighton" },
      { name: "Albert Park", postcode: "3206", slug: "albert-park" }
    ]
  },
  "brighton": {
    name: "Brighton",
    postcode: "3186",
    heroTitle: "Trusted Protection for Brighton's Professionals",
    heroSubtext: "Cyber security services for Brighton's medical practices, dental clinics, financial planners, and professional services.",
    seoTitle: "Cyber Security Brighton Melbourne | ADL99",
    seoDescription: "Cybersecurity for Brighton's professional practices and businesses. ADL99 delivers cyber assessments, vCISO & Essential Eight compliance for Melbourne's bayside.",
    introH2: "Cyber Security Services for Brighton Businesses",
    introSubtext: "Brighton's leafy streets and established professional community belie a growing cyber risk. Medical practices, dental clinics, accounting firms, and financial planners along Church Street and Bay Street hold large volumes of personal health information, financial records, and client data — all subject to strict obligations under the Australian Privacy Act and the Notifiable Data Breaches scheme. ADL99 delivers cyber security services purpose-built for Brighton's healthcare and financial practices. As a cyber security provider trusted by Melbourne's bayside professionals, we help Brighton businesses move from reactive IT support to proactive cyber security solutions — including Essential Eight compliance, penetration testing, and vCISO leadership.",
    introChallenges: [
      {
        icon: "HeartPulse",
        title: "Health Data Protection",
        description: "Medical and dental practices hold sensitive patient health information. My Health Records Act and Privacy Act obligations create strict security and breach notification requirements."
      },
      {
        icon: "AlertCircle",
        title: "Ransomware Targeting Healthcare",
        description: "Healthcare practices are prime ransomware targets. Encrypted patient management systems halt operations and threaten patient care continuity."
      },
      {
        icon: "DollarSign",
        title: "Financial Transaction Fraud",
        description: "Real estate agencies and financial planners handle large transactions. Invoice fraud and settlement interception cause devastating financial losses."
      },
      {
        icon: "FileText",
        title: "Compliance Complexity",
        description: "Brighton professionals navigate multiple regulatory frameworks: Privacy Act, My Health Records Act, Tax Practitioners Board requirements, and AFSL obligations."
      }
    ],
    servicesH2: "Brighton Cyber Security Solutions — Protecting Professional Practices",
    servicesIntro: "ADL99 delivers cyber security services tailored for Brighton's healthcare and professional services community — compliance-focused protection that understands your obligations.",
    services: [
      {
        h3: "Cyber Maturity Assessments for Healthcare Practices",
        title: "Healthcare Security Assessments",
        description: "Tailored assessments for medical, dental, and allied health practices. Evaluate My Health Records security, practice management systems, and Privacy Act compliance."
      },
      {
        h3: "vCISO for Medical & Financial Firms",
        title: "Virtual CISO Services",
        description: "Part-time security leadership for Brighton professional practices. Compliance oversight, risk management, and strategic security guidance without full-time costs."
      },
      {
        h3: "Essential Eight & Australian Privacy Act Compliance",
        title: "Compliance Services",
        description: "Achieve Essential Eight baseline security and Privacy Act compliance. Protect patient and client data while meeting regulatory obligations."
      }
    ],
    whyAdl99H2: "Why Brighton Professionals Choose ADL99 as Their Cyber Security Provider",
    whyAdl99Intro: "Brighton's professional practices demand security providers who understand healthcare confidentiality, professional obligations, and regulatory compliance. ADL99 delivers specialized cyber security services for trust-based professions.",
    whyAdl99Points: [
      {
        icon: "Activity",
        title: "Healthcare Expertise",
        description: "Deep experience securing medical practices, dental clinics, and allied health providers. We understand My Health Records Act, practice management security, and patient data protection."
      },
      {
        icon: "Scale",
        title: "Privacy Act Specialists",
        description: "Expert guidance on Notifiable Data Breaches scheme, Australian Privacy Principles, and OAIC obligations for professional practices."
      },
      {
        icon: "MapPin",
        title: "Bayside Presence",
        description: "Located on St Kilda Road, we're minutes from Brighton. Local knowledge, fast response times, and face-to-face consultations when you need them."
      },
      {
        icon: "Award",
        title: "Professional Discretion",
        description: "We understand patient confidentiality and professional privilege. Confidential engagements with minimal disruption to practice operations."
      }
    ],
    whyAdl99Cta: "Brighton's professional community deserves cybersecurity that's as established as its reputation. Talk to ADL99.",
    industriesH2: "Industries We Protect in Brighton",
    industries: [
      {
        h3: "Cyber Security for Medical Practices",
        title: "Medical Practices",
        description: "Secure patient records, My Health Records integration, practice management systems, and telehealth platforms. Privacy Act and My Health Records Act compliance.",
        link: "/industries/healthcare"
      },
      {
        h3: "Cyber Security for Dental Clinics",
        title: "Dental Clinics",
        description: "Protect patient health information, digital imaging systems, and practice management software. My Health Records Act compliance for dental practices.",
        link: "/industries/healthcare"
      },
      {
        h3: "Cyber Security for Financial Planners",
        title: "Financial Planners",
        description: "Secure client financial data, investment strategies, and confidential wealth planning. AFSL compliance and cyber insurance requirements.",
        link: "/industries/financial-services"
      },
      {
        h3: "Cyber Security for Real Estate Agencies",
        title: "Real Estate Agencies",
        description: "Protect against invoice fraud, settlement interception, and customer database breaches. Secure property transaction workflows.",
        link: "/services"
      }
    ],
    threatsH2: "Cyber Threats Targeting Brighton's Professional Community",
    threatsIntro: "Brighton's concentration of healthcare and professional services attracts targeted attacks exploiting trust relationships and high-value transactions.",
    threats: [
      {
        h3: "Health Data Breaches & My Health Records Act Obligations",
        title: "Healthcare Data Breaches",
        description: "Unauthorized access to patient records triggers Notifiable Data Breaches obligations, OAIC investigations, and potential fines. My Health Records Act creates additional security obligations for participating practices."
      },
      {
        h3: "Invoice Fraud Targeting Real Estate Settlements",
        title: "Invoice & Settlement Fraud",
        description: "Cybercriminals intercept real estate settlement emails and substitute fraudulent bank details. Buyers transfer deposits to criminal accounts, causing devastating losses for agencies and clients."
      },
      {
        h3: "Ransomware Attacks on Practice Management Systems",
        title: "Ransomware Targeting Healthcare",
        description: "Ransomware attacks encrypt practice management systems, halting appointments, accessing patient records, and threatening practice viability. Healthcare is the most-targeted sector for ransomware in Australia."
      }
    ],
    faqsH2: "Cyber Security FAQs for Brighton Businesses",
    faqs: [
      {
        question: "What are my obligations under the My Health Records Act?",
        answer: "Healthcare providers participating in My Health Records must implement appropriate security measures to protect patient information. This includes access controls, audit logging, staff training, and incident response. Breaches must be reported to the My Health Records System Operator. ADL99 helps Brighton practices meet My Health Records Act security obligations."
      },
      {
        question: "How much does cyber security cost for a Brighton medical practice?",
        answer: "Healthcare security assessments start from $4,000. Virtual CISO services for medical practices range from $2,500-$6,000/month. Privacy Act compliance reviews typically $3,500-$7,000. Essential Eight implementation $6,000-$18,000 depending on practice size. We provide fixed-price proposals."
      },
      {
        question: "What is invoice fraud and how can real estate agencies prevent it?",
        answer: "Invoice fraud occurs when criminals intercept settlement emails and substitute fraudulent bank details. Prevention requires: verbal verification of all bank details changes (phone call to known number), encrypted email for sensitive financial information, staff training to recognize email compromise, and client education on verification procedures."
      },
      {
        question: "Does ADL99 understand healthcare confidentiality requirements?",
        answer: "Yes. ADL99 has extensive experience with healthcare privacy, My Health Records Act, and patient confidentiality. Our security assessments work within clinical confidentiality frameworks. We sign confidentiality agreements and understand the professional obligations of Brighton's healthcare providers."
      },
      {
        question: "What should Brighton practices do after a ransomware attack?",
        answer: "1) DO NOT pay the ransom immediately. 2) Contact ADL99 on 03 7067 3373. 3) Disconnect affected systems (don't power off). 4) Activate business continuity plans for patient care. 5) Notify OAIC if patient data is compromised. 6) Contact cyber insurer if you have coverage. We'll assess recovery options and contain the attack."
      }
    ],
    nearbySuburbs: [
      { name: "St Kilda", postcode: "3182", slug: "st-kilda" },
      { name: "Toorak", postcode: "3142", slug: "toorak" },
      { name: "Malvern", postcode: "3144", slug: "malvern" },
      { name: "South Yarra", postcode: "3141", slug: "south-yarra" }
    ]
  },
  "richmond": {
    name: "Richmond",
    postcode: "3121",
    heroTitle: "Move Fast Without Breaking Security",
    heroSubtext: "Cyber security services for Richmond's tech startups, digital agencies, and fast-moving businesses.",
    seoTitle: "Cyber Security Richmond Melbourne | ADL99",
    seoDescription: "Cybersecurity for Richmond's tech and creative businesses. ADL99 provides cyber maturity assessments, penetration testing & incident response in inner Melbourne.",
    introH2: "Cyber Security Services for Richmond Businesses",
    introSubtext: "Richmond has evolved into one of Melbourne's most dynamic business districts, with Bridge Road and Church Street hosting a mix of tech startups, digital agencies, e-commerce brands, and creative studios alongside established manufacturing operations. These businesses move fast and rely heavily on SaaS platforms, cloud storage, and remote collaboration tools — often outpacing their security maturity. ADL99 is the cyber security company Richmond's tech and creative businesses choose for agile, scalable protection. Our cyber security services are designed for fast-moving teams — from application-level penetration testing and SaaS security reviews to vCISO leadership that grows with your business.",
    introChallenges: [
      {
        icon: "Rocket",
        title: "Fast Growth Outpacing Security",
        description: "Startups and scaling businesses prioritize product development and customer acquisition. Security often becomes an afterthought until investors or customers demand it."
      },
      {
        icon: "Cloud",
        title: "SaaS & Cloud Dependency",
        description: "Richmond businesses run entirely on cloud platforms — GitHub, AWS, Google Workspace, Slack, Figma. Each platform creates potential security gaps if misconfigured."
      },
      {
        icon: "Code",
        title: "Intellectual Property Risk",
        description: "Tech companies and agencies hold valuable IP — proprietary code, client campaigns, product designs. Weak development security and collaboration tools expose IP to theft."
      },
      {
        icon: "Network",
        title: "Supply Chain Complexity",
        description: "Digital businesses integrate with dozens of third-party services and APIs. Each integration expands the attack surface and creates supply chain risk."
      }
    ],
    servicesH2: "Richmond Cyber Security Solutions — Built for Fast-Moving Businesses",
    servicesIntro: "ADL99 delivers cyber security services designed for Richmond's tech and creative sector — agile protection that doesn't slow down innovation.",
    services: [
      {
        h3: "Cyber Maturity Assessments for Startups & SMEs",
        title: "Startup Security Assessments",
        description: "Rapid security assessments for scaling tech companies. Identify vulnerabilities in cloud infrastructure, development practices, and SaaS platforms. Build investor-ready security frameworks."
      },
      {
        h3: "vCISO for Scaling Tech Companies",
        title: "Virtual CISO for Startups",
        description: "Part-time security leadership for growing tech companies. Strategic guidance on secure development, vendor risk, investor security requirements, and compliance frameworks."
      },
      {
        h3: "Application Security & Penetration Testing",
        title: "AppSec & Penetration Testing",
        description: "Security testing for web applications, APIs, and cloud infrastructure. Identify vulnerabilities before attackers do. Secure code reviews and threat modeling."
      }
    ],
    whyAdl99H2: "ADL99 — The Cyber Security Company for Richmond's Tech & Creative Hub",
    whyAdl99Intro: "Richmond's fast-moving businesses need security providers who understand startup constraints, cloud-native architecture, and agile development. ADL99 delivers practical security that enables growth.",
    whyAdl99Points: [
      {
        icon: "Zap",
        title: "Startup Experience",
        description: "We've secured Richmond tech startups, digital agencies, and e-commerce brands. We understand rapid growth, limited budgets, and investor requirements."
      },
      {
        icon: "Cloud",
        title: "Cloud-Native Expertise",
        description: "Deep expertise in AWS, Azure, Google Cloud, and modern SaaS platforms. We secure the tools Richmond businesses actually use."
      },
      {
        icon: "TrendingUp",
        title: "Scalable Engagement",
        description: "Security services that scale with your business — from seed stage baseline security to Series A investor requirements to enterprise customer demands."
      },
      {
        icon: "Award",
        title: "Agile Delivery",
        description: "We work at startup speed. Fast assessments, rapid deployment, and continuous improvement aligned to your development cycles."
      }
    ],
    whyAdl99Cta: "Richmond businesses innovate fast. ADL99 ensures your cybersecurity keeps pace.",
    industriesH2: "Industries We Protect in Richmond",
    industries: [
      {
        h3: "Cyber Security for Tech Startups",
        title: "Tech Startups",
        description: "Secure development practices, cloud security, investor-ready frameworks, and scalable security for scaling tech companies.",
        link: "/industries/technology"
      },
      {
        h3: "Cyber Security for Digital Agencies",
        title: "Digital Agencies",
        description: "Protect client data, secure collaboration tools, and defend against IP theft targeting marketing and design agencies.",
        link: "/services"
      },
      {
        h3: "Cyber Security for E-Commerce Brands",
        title: "E-Commerce",
        description: "E-commerce platform security, PCI DSS compliance, customer data protection, and fraud prevention for online retailers.",
        link: "/services"
      },
      {
        h3: "Cyber Security for Manufacturing",
        title: "Manufacturing",
        description: "OT/IT security for Richmond manufacturers. Protect industrial control systems, supply chain, and intellectual property.",
        link: "/industries/manufacturing"
      }
    ],
    threatsH2: "Cyber Threats Facing Richmond's Digital-First Businesses",
    threatsIntro: "Richmond's tech and creative businesses face threats targeting cloud infrastructure, development pipelines, and valuable intellectual property.",
    threats: [
      {
        h3: "SaaS Platform Vulnerabilities & Misconfigurations",
        title: "SaaS & Cloud Misconfigurations",
        description: "Improperly configured AWS S3 buckets, public GitHub repositories, weak Google Workspace access controls, and unprotected APIs expose sensitive data and code to the internet."
      },
      {
        h3: "IP Theft Targeting Startups & Agencies",
        title: "Intellectual Property Theft",
        description: "Competitors and nation-state actors target Richmond tech companies for source code, product roadmaps, and client work. Weak development security and file-sharing practices enable IP theft."
      },
      {
        h3: "Supply Chain Attacks Through Third-Party Integrations",
        title: "Supply Chain Attacks",
        description: "Modern applications integrate dozens of third-party services via APIs. Compromised dependencies, npm packages, or vendor platforms create backdoors into Richmond businesses."
      }
    ],
    faqsH2: "Cyber Security FAQs for Richmond Businesses",
    faqs: [
      {
        question: "What cyber security do Richmond startups actually need?",
        answer: "Start with: 1) Multi-factor authentication on all accounts, 2) Encrypted devices and data, 3) Regular backups, 4) Basic access controls, 5) Secure development practices. As you scale, add: penetration testing, vCISO guidance, compliance frameworks (SOC 2, ISO 27001), and security monitoring. ADL99 builds investor-ready security from day one."
      },
      {
        question: "How much does cyber security cost for a Richmond tech startup?",
        answer: "Baseline security assessments start from $3,000. Virtual CISO services for startups range from $2,000-$5,000/month. Penetration testing $4,000-$12,000 depending on application complexity. We provide transparent pricing and scale services to startup budgets and growth stages."
      },
      {
        question: "Do investors care about cybersecurity?",
        answer: "Yes. Series A and beyond investors increasingly require security due diligence. They assess: data protection practices, compliance readiness, incident response capability, and security culture. Strong security demonstrates operational maturity and reduces acquisition risk. ADL99 helps Richmond startups meet investor security requirements."
      },
      {
        question: "What is secure development and why does it matter?",
        answer: "Secure development integrates security into software creation — threat modeling, secure coding practices, code reviews, dependency scanning, and security testing. It's cheaper to build security in than bolt it on later. Richmond tech companies with secure development practices ship faster, attract enterprise customers, and reduce breach risk."
      },
      {
        question: "How close is ADL99 to Richmond?",
        answer: "ADL99 is based at 470 St Kilda Road, approximately 15 minutes from Richmond. We provide on-site consultations, security assessments, and incident response for Richmond tech companies. Our team understands Melbourne's startup ecosystem and works at startup speed."
      }
    ],
    nearbySuburbs: [
      { name: "Melbourne CBD", postcode: "3000", slug: "melbourne-cbd" },
      { name: "South Yarra", postcode: "3141", slug: "south-yarra" },
      { name: "Fitzroy", postcode: "3065", slug: "fitzroy" },
      { name: "Hawthorn", postcode: "3122", slug: "hawthorn" }
    ]
  },
  "hawthorn": {
    name: "Hawthorn",
    postcode: "3122",
    heroTitle: "Your Practice. Your Patients. Protected.",
    heroSubtext: "Cyber security services for Hawthorn's professional services corridor along Glenferrie Road.",
    seoTitle: "Cyber Security Hawthorn Melbourne | ADL99",
    seoDescription: "Cybersecurity for Hawthorn businesses. ADL99 delivers cyber maturity assessments, vCISO & Essential Eight compliance for Melbourne's eastern professional hub.",
    introH2: "Cyber Security Services for Hawthorn Businesses",
    introSubtext: "Hawthorn's Glenferrie Road precinct anchors one of Melbourne's most established professional services corridors. Accounting firms, legal practices, allied health providers, and financial advisors serve a client base that expects discretion and data security. With Swinburne University nearby, the suburb also attracts tech-forward businesses. ADL99 is Hawthorn's trusted cyber security company, delivering cyber security services that bridge the gap between legacy infrastructure and modern threat landscapes. Our cyber security solutions include legacy system hardening, Essential Eight gap analysis, and vCISO leadership for practices that need strategic security guidance without a full-time hire.",
    introChallenges: [
      {
        icon: "HardDrive",
        title: "Legacy System Vulnerabilities",
        description: "Established Hawthorn practices often run older practice management systems and server infrastructure. Legacy systems lack modern security controls and create significant risk."
      },
      {
        icon: "FileText",
        title: "Tax Season Targeting",
        description: "Hawthorn accounting firms face intense targeting during tax season. Attackers seek tax file numbers, financial records, and client credentials for fraud and identity theft."
      },
      {
        icon: "Users",
        title: "Small Practice Resources",
        description: "Professional practices lack dedicated IT security staff. Partners juggle client work and practice management with limited time for security oversight."
      },
      {
        icon: "Scale",
        title: "Regulatory Obligations",
        description: "Tax Practitioners Board, Privacy Act, and professional indemnity requirements create compliance complexity for Hawthorn professional services."
      }
    ],
    servicesH2: "Hawthorn Cyber Security Solutions — Professional-Grade Protection",
    servicesIntro: "ADL99 delivers cyber security services tailored for Hawthorn's established professional services — practical protection for practices with legacy infrastructure.",
    services: [
      {
        h3: "Cyber Maturity Assessments for Professional Practices",
        title: "Practice Security Assessments",
        description: "Comprehensive assessments for accounting, legal, and allied health practices. Evaluate legacy systems, Privacy Act compliance, and practice management security."
      },
      {
        h3: "vCISO for Accounting & Legal Firms",
        title: "Virtual CISO Services",
        description: "Part-time security leadership for professional practices. Compliance oversight, risk management, and strategic security guidance scaled for small partnerships."
      },
      {
        h3: "Essential Eight Gap Analysis & Remediation",
        title: "Essential Eight Implementation",
        description: "Achieve Essential Eight baseline security for professional practices. Gap analysis, remediation roadmaps, and implementation support for Maturity Level 1 or 2."
      }
    ],
    whyAdl99H2: "ADL99 — Hawthorn's Trusted Cyber Security Company",
    whyAdl99Intro: "Hawthorn's professional community demands security providers who understand established practices, legacy infrastructure, and professional obligations. ADL99 delivers practical cyber security services for Glenferrie Road's professional corridor.",
    whyAdl99Points: [
      {
        icon: "Briefcase",
        title: "Professional Services Expertise",
        description: "Deep experience securing accounting firms, legal practices, and allied health providers. We understand professional obligations and practice workflows."
      },
      {
        icon: "Server",
        title: "Legacy System Experience",
        description: "We specialize in securing older practice management systems and on-premise infrastructure. Practical hardening for systems that can't be easily replaced."
      },
      {
        icon: "FileCheck",
        title: "TPB & Compliance Knowledge",
        description: "Expert guidance on Tax Practitioners Board obligations, Privacy Act compliance, and professional indemnity requirements for Hawthorn practices."
      },
      {
        icon: "MapPin",
        title: "Eastern Suburbs Presence",
        description: "Based in St Kilda Road with deep knowledge of Melbourne's eastern professional services market. Fast response and local understanding."
      }
    ],
    whyAdl99Cta: "Hawthorn's professionals are trusted with sensitive data daily. ADL99 helps ensure that trust is never broken.",
    industriesH2: "Industries We Protect in Hawthorn",
    industries: [
      {
        h3: "Cyber Security for Accounting Firms",
        title: "Accounting Firms",
        description: "Tax Practitioners Board compliance, client data protection, and secure tax season operations for Hawthorn accounting practices.",
        link: "/industries/financial-services"
      },
      {
        h3: "Cyber Security for Legal Practices",
        title: "Legal Practices",
        description: "Legal professional privilege protection, client confidentiality, and secure case management for Hawthorn legal firms.",
        link: "/industries/law-firms"
      },
      {
        h3: "Cyber Security for Allied Health Providers",
        title: "Allied Health",
        description: "Patient data security, My Health Records compliance, and Privacy Act obligations for physiotherapy, psychology, and allied health practices.",
        link: "/industries/healthcare"
      },
      {
        h3: "Cyber Security for Financial Advisors",
        title: "Financial Advisors",
        description: "AFSL compliance, client financial data protection, and secure wealth planning for Hawthorn financial advisory practices.",
        link: "/industries/financial-services"
      }
    ],
    threatsH2: "Cyber Threats Targeting Hawthorn's Professional Corridor",
    threatsIntro: "Hawthorn's established professional practices face targeted attacks exploiting legacy systems, tax season timing, and professional trust.",
    threats: [
      {
        h3: "Ransomware Targeting Accounting & Tax Data",
        title: "Ransomware & Tax Season Attacks",
        description: "Accounting firms face intense ransomware targeting during tax season. Encrypted tax data and client files halt operations at the worst possible time. Attackers demand higher ransoms knowing time pressure on practices."
      },
      {
        h3: "Phishing Campaigns Against Legal Practices",
        title: "Legal Practice Phishing",
        description: "Law firms receive sophisticated phishing emails impersonating courts, clients, or opposing counsel. These attacks steal credentials, compromise client privilege, and enable trust account fraud."
      },
      {
        h3: "Legacy System Vulnerabilities in Established Firms",
        title: "Legacy System Exploitation",
        description: "Older practice management systems and on-premise servers lack modern security controls. Unpatched vulnerabilities, outdated operating systems, and weak authentication create easy targets for attackers."
      }
    ],
    faqsH2: "Cyber Security FAQs for Hawthorn Businesses",
    faqs: [
      {
        question: "What are Tax Practitioners Board cyber security obligations?",
        answer: "TPB Code of Professional Conduct requires tax practitioners to take reasonable care to ensure information is protected. This includes: secure storage of tax file numbers and client data, protection against unauthorized access, secure communication methods, and incident response procedures. ADL99 helps Hawthorn accounting firms meet TPB obligations."
      },
      {
        question: "Can ADL99 secure older practice management systems?",
        answer: "Yes. Many Hawthorn practices run legacy software that can't be easily replaced due to cost or workflow dependencies. ADL99 provides practical hardening for older systems: network segmentation, access controls, enhanced logging, backup verification, and compensating controls to reduce risk while maintaining functionality."
      },
      {
        question: "What should Hawthorn practices do about tax season cyber threats?",
        answer: "1) Increase email security and phishing awareness before tax season. 2) Verify all backup integrity. 3) Enable multi-factor authentication on all systems. 4) Review access controls and disable unused accounts. 5) Brief staff on common tax season scams. 6) Have incident response plan ready. ADL99 provides pre-tax-season security readiness reviews."
      },
      {
        question: "How much does cyber security cost for a Hawthorn professional practice?",
        answer: "Cyber maturity assessments for professional practices start from $4,000. Virtual CISO services range from $2,500-$6,000/month. Essential Eight implementation typically $6,000-$16,000 depending on practice size and current maturity. We provide fixed-price proposals tailored to professional practice budgets."
      }
    ],
    nearbySuburbs: [
      { name: "Richmond", postcode: "3121", slug: "richmond" },
      { name: "Camberwell", postcode: "3124", slug: "camberwell" },
      { name: "Kew", postcode: "3101", slug: "kew" },
      { name: "Melbourne CBD", postcode: "3000", slug: "melbourne-cbd" }
    ]
  },
  "malvern": {
    name: "Malvern",
    postcode: "3144",
    heroTitle: "Prestige Demands Protection",
    heroSubtext: "Cyber security services for Malvern's specialist practices and professional firms in Stonnington's prestigious inner east.",
    seoTitle: "Cyber Security Malvern Melbourne | ADL99",
    seoDescription: "Cybersecurity for Malvern businesses. ADL99 delivers tailored cyber assessments, vCISO services & compliance support for Melbourne's prestigious inner east.",
    introH2: "Cyber Security Services for Malvern Businesses",
    introSubtext: "Malvern sits within the City of Stonnington — Melbourne's wealthiest local government area. The suburb's professional services firms, specialist medical practices, and boutique retailers serve an affluent client base that expects the highest standards of privacy and data protection. ADL99 is Malvern's trusted cyber security company, providing cyber security services that match the prestige of the suburb's business community. Our cyber security solutions are tailored for compliance-conscious professionals — from Australian Privacy Act alignment and Essential Eight compliance programs to vCISO leadership and 24/7 incident response.",
    introChallenges: [
      {
        icon: "Crown",
        title: "High Expectations & Reputation Risk",
        description: "Malvern businesses serve affluent clients who expect premium service and absolute discretion. A single data breach can destroy reputation built over generations."
      },
      {
        icon: "Target",
        title: "Targeted High-Value Attacks",
        description: "Malvern's concentration of wealth and professional services attracts sophisticated attackers targeting high-value client data and financial transactions."
      },
      {
        icon: "FileWarning",
        title: "Privacy Act Compliance",
        description: "Medical specialists, financial advisors, and legal practices face strict Privacy Act obligations. Notifiable Data Breaches scheme creates mandatory reporting requirements."
      },
      {
        icon: "Building2",
        title: "Boutique Practice Constraints",
        description: "Specialist practices deliver premium service with small teams. Limited IT resources and tight budgets make enterprise-grade security seem out of reach."
      }
    ],
    servicesH2: "Malvern Cyber Security Solutions — Tailored for Stonnington's Professionals",
    servicesIntro: "ADL99 delivers cyber security services scaled for Malvern's boutique professional practices — enterprise-grade protection without enterprise complexity.",
    services: [
      {
        h3: "Cyber Maturity Assessments for Specialist Practices",
        title: "Specialist Practice Assessments",
        description: "Tailored security assessments for medical specialists, wealth advisors, and boutique professional firms. Privacy Act compliance evaluation and practical remediation roadmaps."
      },
      {
        h3: "vCISO — Strategic Security Without Full-Time Cost",
        title: "Virtual CISO Services",
        description: "Part-time security leadership for Malvern's boutique practices. Strategic guidance, compliance oversight, and risk management scaled to specialist practice needs."
      },
      {
        h3: "Essential Eight Compliance Programs",
        title: "Essential Eight Compliance",
        description: "Achieve Australian baseline security standards with Essential Eight Maturity Level 1 or 2. Protect client data and demonstrate security maturity to insurers and regulators."
      }
    ],
    whyAdl99H2: "ADL99 — Malvern's Trusted Cyber Security Company",
    whyAdl99Intro: "Malvern's professional community demands security providers who understand prestige, discretion, and compliance. ADL99 delivers cyber security services that match Stonnington's standards.",
    whyAdl99Points: [
      {
        icon: "Award",
        title: "Prestige Practice Experience",
        description: "We've secured Malvern's specialist medical practices, wealth advisors, and boutique professional firms. We understand prestige business requirements."
      },
      {
        icon: "Shield",
        title: "Privacy Act Specialists",
        description: "Expert guidance on Australian Privacy Principles, Notifiable Data Breaches scheme, and compliance obligations for specialist practices."
      },
      {
        icon: "Clock",
        title: "24/7 Response Capability",
        description: "Incidents don't respect business hours. Our emergency response team provides round-the-clock support when you need it most."
      },
      {
        icon: "Lock",
        title: "Professional Discretion",
        description: "Confidential engagements, minimal disruption, and absolute discretion. We operate with the same professionalism you extend to your clients."
      }
    ],
    whyAdl99Cta: "Malvern's professionals operate to the highest standards. Your cybersecurity should too. Talk to ADL99.",
    industriesH2: "Industries We Protect in Malvern",
    industries: [
      {
        h3: "Cyber Security for Specialist Medical Practices",
        title: "Specialist Medical",
        description: "Secure patient records, specialist referral networks, and My Health Records integration. Compliance with Privacy Act and My Health Records Act.",
        link: "/industries/healthcare"
      },
      {
        h3: "Cyber Security for Professional Services Firms",
        title: "Professional Services",
        description: "Client confidentiality, data protection, and compliance support for Malvern's accounting, legal, and consulting firms.",
        link: "/services"
      },
      {
        h3: "Cyber Security for Boutique Retail",
        title: "Boutique Retail",
        description: "PCI DSS compliance, customer data protection, and e-commerce security for Malvern's premium retail sector.",
        link: "/services"
      },
      {
        h3: "Cyber Security for Education Providers",
        title: "Education Providers",
        description: "Student data protection, staff record security, and Privacy Act compliance for Malvern's private education sector.",
        link: "/services"
      }
    ],
    threatsH2: "Cyber Threats Facing Malvern's Business Community",
    threatsIntro: "Malvern's affluence and professional concentration attract targeted attacks exploiting trust relationships and high-value data.",
    threats: [
      {
        h3: "Targeted Attacks on High-Value Client Data",
        title: "High-Value Data Targeting",
        description: "Medical specialists and wealth advisors hold highly sensitive personal health and financial information. Attackers target Malvern practices specifically for this premium data used in identity theft and fraud."
      },
      {
        h3: "Business Email Compromise in Professional Services",
        title: "Business Email Compromise",
        description: "Email account takeovers targeting invoice payments, settlements, and financial transactions. Malvern practices face sophisticated BEC attacks exploiting professional trust relationships."
      },
      {
        h3: "Compliance Gaps Under the Australian Privacy Act",
        title: "Privacy Act Non-Compliance",
        description: "Medical and professional practices must comply with Australian Privacy Principles and Notifiable Data Breaches scheme. Gaps in security create compliance failures, OAIC investigations, and reputational damage."
      }
    ],
    faqsH2: "Cyber Security FAQs for Malvern Businesses",
    faqs: [
      {
        question: "What cyber security do Malvern specialist practices need?",
        answer: "Specialist practices require: 1) Privacy Act compliance (Australian Privacy Principles, Notifiable Data Breaches), 2) Patient/client data security, 3) Secure practice management systems, 4) Staff awareness training, 5) Incident response capability, 6) Regular security assessments. ADL99 provides complete security programs for Malvern specialist practices."
      },
      {
        question: "How much does cyber security cost for a Malvern specialist practice?",
        answer: "Security assessments for specialist practices start from $4,500. Virtual CISO services range from $2,500-$6,500/month depending on practice complexity. Privacy Act compliance reviews typically $3,500-$7,500. We provide fixed-price proposals tailored to specialist practice budgets and requirements."
      },
      {
        question: "Does ADL99 understand medical specialist confidentiality?",
        answer: "Yes. ADL99 has extensive experience with medical specialist practices, patient confidentiality, and My Health Records Act obligations. Our security assessments work within clinical confidentiality frameworks. We sign confidentiality agreements and understand the professional obligations of Malvern's specialist medical community."
      },
      {
        question: "What is the Notifiable Data Breaches scheme?",
        answer: "Under the Privacy Act, organizations must notify affected individuals and OAIC when a data breach is likely to result in serious harm. This includes unauthorized access to patient records, financial data, or personal information. You have 30 days to assess and notify. ADL99 provides breach response and notification support for Malvern practices."
      }
    ],
    nearbySuburbs: [
      { name: "Toorak", postcode: "3142", slug: "toorak" },
      { name: "Brighton", postcode: "3186", slug: "brighton" },
      { name: "Camberwell", postcode: "3124", slug: "camberwell" },
      { name: "Prahran", postcode: "3181", slug: "prahran" }
    ]
  }
};

/**
 * Get location data by slug
 */
export function getLocationBySlug(slug: string): LocationData | null {
  return locationsData[slug] || null;
}

/**
 * Get all location slugs
 */
export function getAllLocationSlugs(): string[] {
  return Object.keys(locationsData);
}

/**
 * Check if a location exists
 */
export function locationExists(slug: string): boolean {
  return slug in locationsData;
}
