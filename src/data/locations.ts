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
  },
  "camberwell": {
    name: "Camberwell",
    postcode: "3124",
    heroTitle: "Protecting Camberwell's Most Trusted Firms",
    heroSubtext: "Expert cyber security for Camberwell's professional corridor. ADL99 protects accountants, solicitors, and medical practices on Burke Road with tailored compliance and threat protection.",
    seoTitle: "Cyber Security Camberwell (3124) | Burke Road Professional Services - ADL99",
    seoDescription: "Cyber security for Camberwell (3124) professional services. Protect accountants, solicitors & medical practices from conveyancing fraud, ransomware & data breaches. ADL99 delivers compliance-focused security.",
    introH2: "Cyber Security Services for Accountants, Solicitors & Medical Practices in Camberwell",
    introSubtext: "Camberwell's Burke Road professional corridor hosts one of Melbourne's densest concentrations of accountants, solicitors, financial planners, and medical practices. These firms manage sensitive client data, financial records, and health information — making them prime targets for conveyancing fraud, ransomware, and business email compromise. ADL99 delivers cyber security that protects client trust.",
    introChallenges: [
      {
        icon: "AlertTriangle",
        title: "Conveyancing Fraud & Payment Redirection",
        description: "Burke Road conveyancers are targeted by email interception attacks. Attackers impersonate solicitors to redirect settlement payments. Multi-million dollar losses occur when firms lack email security and payment verification protocols."
      },
      {
        icon: "Database",
        title: "Client Data Breach Exposure",
        description: "Accountants hold tax file numbers, financial records, and client credentials. Medical practices store sensitive health information. A single breach triggers Privacy Act notification obligations and destroys decades of client trust."
      },
      {
        icon: "Lock",
        title: "Practice Management System Vulnerabilities",
        description: "MYOB, Xero, Medical Director, and Best Practice software are targeted by ransomware. Outdated versions, weak passwords, and poor access controls create entry points that encrypt entire client databases."
      },
      {
        icon: "FileText",
        title: "Professional Compliance Gaps",
        description: "Tax Practitioners Board cyber security obligations, Privacy Act requirements, and professional indemnity conditions demand documented security controls. Many Camberwell firms lack the policies, training, and technical measures required."
      }
    ],
    servicesH2: "Cyber Security Solutions for Camberwell Professional Services",
    servicesIntro: "ADL99 delivers compliance-focused cyber security tailored for Camberwell's accountants, solicitors, and medical practices.",
    services: [
      {
        h3: "Conveyancing Fraud Prevention for Camberwell Solicitors",
        title: "Conveyancing Fraud Prevention",
        description: "Multi-factor authentication, payment verification protocols, and email security to prevent settlement redirection scams. Protect your conveyancing clients from multi-million dollar fraud."
      },
      {
        h3: "Privacy Act Compliance for Camberwell Practices",
        title: "Privacy Act & NDB Compliance",
        description: "Privacy impact assessments, breach notification procedures, and Australian Privacy Principles compliance for firms holding sensitive client data. Meet Tax Practitioners Board and professional indemnity requirements."
      },
      {
        h3: "Practice Management System Security",
        title: "Practice Management Security Hardening",
        description: "Secure MYOB, Xero, Medical Director, and Best Practice systems. Implement access controls, patch management, and backup solutions to protect client databases from ransomware."
      },
      {
        h3: "vCISO for Camberwell Professional Services",
        title: "Virtual CISO Services",
        description: "Part-time security leadership for professional practices. Strategic guidance on compliance, risk management, and security program development without full-time CISO costs."
      },
      {
        h3: "Cyber Awareness Training for Burke Road Firms",
        title: "Staff Cyber Awareness Training",
        description: "Training tailored for professional services staff. Recognize conveyancing fraud, phishing emails, and social engineering attacks. Build a human defense layer."
      },
      {
        h3: "Incident Response for Professional Practices",
        title: "Emergency Cyber Incident Response",
        description: "24/7 rapid response to ransomware, data breaches, and cyber incidents. Minimize practice disruption, meet notification obligations, and restore operations."
      }
    ],
    whyAdl99H2: "Why Camberwell Firms Choose ADL99 as Their Cyber Security Provider",
    whyAdl99Intro: "As a cyber security provider that understands the compliance pressures facing Burke Road's firms, we provide practical cyber security solutions.",
    whyAdl99Points: [
      {
        icon: "MapPin",
        title: "Local Melbourne Expertise",
        description: "Based in Melbourne with deep understanding of Camberwell's professional services landscape. We speak your language and understand your business."
      },
      {
        icon: "Award",
        title: "Compliance-Focused Approach",
        description: "Specializing in regulated industries. We ensure your security measures meet Privacy Act, TPB, and industry-specific requirements."
      },
      {
        icon: "Clock",
        title: "Rapid Response Capability",
        description: "24/7 incident response with Melbourne-based team. When threats emerge, we're ready to act immediately."
      },
      {
        icon: "DollarSign",
        title: "Transparent Fixed Pricing",
        description: "No surprises. Clear, fixed-price engagements that fit your practice's budget. Enterprise security at SME prices."
      }
    ],
    whyAdl99Cta: "Camberwell's professional community deserves cybersecurity as reliable as their reputation. Talk to ADL99.",
    industriesH2: "Industries We Protect in Camberwell",
    industries: [
      {
        h3: "Legal Services",
        title: "Cyber Security for Solicitors & Conveyancers",
        description: "Protect client confidentiality and prevent conveyancing fraud. Secure document management and communication systems.",
        link: "/industries/law-firms"
      },
      {
        h3: "Accounting",
        title: "Cyber Security for Accounting Practices",
        description: "Safeguard financial records and tax information. Meet TPB cyber security obligations.",
        link: "/industries/accounting"
      },
      {
        h3: "Healthcare",
        title: "Cyber Security for Medical Clinics",
        description: "Protect patient records and meet My Health Records Act requirements. HIPAA-aligned security for Australian practices.",
        link: "/industries/health-clinics"
      },
      {
        h3: "Financial Planning",
        title: "Cyber Security for Financial Planning Firms",
        description: "Secure client portfolios and financial data. Meet ASIC and AUSTRAC compliance requirements.",
        link: "/industries/financial-services"
      }
    ],
    threatsH2: "Cyber Security Risks for Camberwell's Professional Services",
    threatsIntro: "Camberwell's professional services firms face sophisticated, targeted threats designed to exploit trust relationships and valuable client data.",
    threats: [
      {
        h3: "Conveyancing Fraud",
        title: "Conveyancing Fraud & Email Interception",
        description: "Attackers intercept property settlement communications and redirect payments to fraudulent accounts. Millions lost annually across Australia through BEC attacks targeting conveyancers."
      },
      {
        h3: "Data Theft",
        title: "Data Theft Targeting Client Financial Records",
        description: "Tax records, financial statements, and investment portfolios are prime targets. Stolen data is sold on dark web markets or used for identity theft."
      },
      {
        h3: "Ransomware",
        title: "Ransomware in Practice Management Software",
        description: "Ransomware encrypts client databases, bringing practices to a standstill. Attackers demand ransoms knowing practices can't operate without access to records."
      }
    ],
    faqsH2: "Cyber Security FAQs for Camberwell Businesses",
    faqs: [
      {
        question: "How can conveyancing firms prevent payment redirection fraud?",
        answer: "Implement multi-factor authentication, verify payment changes via phone (not email), use secure client portals, and train staff on BEC warning signs. ADL99 provides conveyancing-specific security assessments and email security solutions."
      },
      {
        question: "What cyber security obligations do accountants have under TPB regulations?",
        answer: "Tax Practitioners Board members must protect client tax information with reasonable security measures. This includes secure storage, access controls, encryption, and incident response plans. ADL99 helps accounting firms meet TPB cyber security obligations."
      },
      {
        question: "Do small practices really need a vCISO?",
        answer: "Yes. Small practices face the same threats as large firms but lack dedicated security expertise. A vCISO provides strategic guidance, compliance support, and incident coordination — without the $200k+ salary. ADL99's vCISO services start at a fraction of full-time costs."
      },
      {
        question: "What should I do if my practice experiences a data breach?",
        answer: "Immediately contact ADL99's incident response team. We'll contain the breach, assess impact, and guide you through Privacy Act notification obligations. Under the NDB scheme, you may need to notify OAIC and affected clients within 30 days."
      }
    ],
    nearbySuburbs: [
      { name: "Hawthorn", postcode: "3122", slug: "hawthorn" },
      { name: "Malvern", postcode: "3144", slug: "malvern" },
      { name: "Richmond", postcode: "3121", slug: "richmond" },
      { name: "Prahran", postcode: "3181", slug: "prahran" }
    ]
  },
  "prahran": {
    name: "Prahran",
    postcode: "3181",
    heroTitle: "Cyber Security for Prahran's Chapel Street Retail & Hospitality",
    heroSubtext: "Protect Prahran retail, hospitality & creative businesses from payment fraud and customer data breaches. ADL99 delivers PCI compliance and cyber security for Chapel Street.",
    seoTitle: "Cyber Security Prahran (3181) | Chapel Street Retail & Hospitality - ADL99",
    seoDescription: "Cyber security for Prahran (3181) retail, hospitality & creative businesses. PCI DSS compliance, POS security, payment fraud prevention on Chapel Street. Call ADL99.",
    introH2: "Cyber Security for Retail, Hospitality & Creative Businesses in Prahran",
    introSubtext: "Prahran's Chapel Street corridor hosts hundreds of retail stores, restaurants, bars, and creative agencies processing thousands of daily card transactions. Payment fraud, customer data breaches, and PCI compliance failures destroy business reputations overnight. ADL99 secures Prahran businesses with payment security and Privacy Act compliance.",
    introChallenges: [
      {
        icon: "CreditCard",
        title: "Payment Card Fraud",
        description: "Retail and hospitality businesses are prime targets for payment card skimming and point-of-sale malware that steals customer card data."
      },
      {
        icon: "Database",
        title: "Customer Data Breaches",
        description: "Businesses collecting customer information for marketing or loyalty programs must protect this data under Privacy Act obligations or face regulatory penalties."
      },
      {
        icon: "Globe",
        title: "Website Security",
        description: "E-commerce sites and booking platforms are constantly attacked. Vulnerabilities can lead to customer data theft, defacement, or business disruption."
      },
      {
        icon: "Lock",
        title: "Ransomware Attacks",
        description: "Small businesses are increasingly targeted by ransomware. Attackers encrypt business data and demand payment, knowing many lack proper backups."
      }
    ],
    servicesH2: "Comprehensive Cyber Security Services for Prahran",
    servicesIntro: "ADL99 delivers tailored cyber security solutions to protect Prahran's retail, hospitality, and creative businesses.",
    services: [
      {
        h3: "Cyber Maturity Assessments for Prahran Businesses",
        title: "Cyber Maturity Assessments",
        description: "Evaluate your security posture against industry standards and identify gaps before attackers do. We provide actionable roadmaps for Prahran businesses."
      },
      {
        h3: "Payment Security for Retail & Hospitality",
        title: "Payment Security Solutions",
        description: "Protect customer payment data with PCI DSS compliant solutions. Secure your point-of-sale systems and payment processing infrastructure."
      },
      {
        h3: "Privacy Compliance for Prahran Businesses",
        title: "Privacy Act Compliance",
        description: "Navigate Privacy Act obligations with confidence. We help you implement privacy-compliant security and prepare for potential data breaches."
      },
      {
        h3: "Incident Response for Prahran",
        title: "24/7 Incident Response",
        description: "When cyber incidents strike, every minute counts. Our emergency response team is available around the clock to contain and remediate threats."
      },
      {
        h3: "Security Awareness Training",
        title: "Staff Security Training",
        description: "Train your team to recognize phishing, social engineering, and payment fraud attempts. Human awareness is your first line of defense."
      },
      {
        h3: "Backup & Recovery Solutions",
        title: "Backup & Disaster Recovery",
        description: "Implement robust backup solutions to protect against ransomware and data loss. We ensure your business can recover quickly from any incident."
      }
    ],
    whyAdl99H2: "Why Prahran Businesses Trust ADL99",
    whyAdl99Intro: "We understand the unique security needs of Prahran's diverse business community. From Chapel Street retailers to creative agencies, we provide practical, affordable cyber security.",
    whyAdl99Points: [
      {
        icon: "MapPin",
        title: "Local Expertise",
        description: "Local expertise with national capabilities. We understand Prahran's unique business environment."
      },
      {
        icon: "ShoppingBag",
        title: "Industry Specialists",
        description: "Retail and hospitality security specialists with deep understanding of your sector's threats."
      },
      {
        icon: "Shield",
        title: "Compliance Guidance",
        description: "Privacy Act compliance guidance to ensure you meet all regulatory obligations."
      },
      {
        icon: "Clock",
        title: "24/7 Support",
        description: "24/7 incident response and support when you need it most."
      }
    ],
    whyAdl99Cta: "Contact ADL99 for a free cyber security consultation tailored to your Prahran business.",
    industriesH2: "Industries We Protect in Prahran",
    industries: [
      {
        h3: "Cyber Security for Retail in Prahran",
        title: "Retail & E-Commerce",
        description: "Retailers handle sensitive payment card data and customer information. Breaches destroy trust and trigger regulatory investigations. We protect your customer data, secure payment systems, and ensure compliance with payment card industry standards.",
        link: "/industries/retail"
      },
      {
        h3: "Cyber Security for Hospitality in Prahran",
        title: "Hospitality & Food Services",
        description: "Restaurants, cafes, and venues collect customer data through booking systems and loyalty programs. Point-of-sale systems are targeted by malware. We secure your payment infrastructure, protect customer databases, and implement backup solutions.",
        link: "/industries/hospitality"
      },
      {
        h3: "Cyber Security for Creative Agencies in Prahran",
        title: "Creative Agencies",
        description: "Design studios and creative agencies hold valuable client IP and confidential campaign materials. Data theft or ransomware can devastate agency operations. We protect your creative assets, secure client communications, and implement access controls.",
        link: "/industries/professional-services"
      },
      {
        h3: "Cyber Security for Wellness Businesses in Prahran",
        title: "Health & Wellness",
        description: "Gyms, yoga studios, and wellness clinics collect health and personal information. Privacy breaches trigger mandatory reporting under the NDB scheme. We implement privacy-compliant security, secure member databases, and provide breach response planning.",
        link: "/industries/healthcare"
      }
    ],
    threatsH2: "Cyber Threats Facing Prahran Businesses",
    threatsIntro: "Common cyber threats targeting Prahran businesses include:",
    threats: [
      {
        h3: "Payment Fraud",
        title: "Point-of-Sale Malware and Card Skimming",
        description: "Attackers target retail and hospitality POS systems to steal payment card data. Malware silently captures card details during transactions, leading to customer fraud and regulatory investigations."
      },
      {
        h3: "Data Breaches",
        title: "Customer Database Theft",
        description: "Businesses with customer databases (for marketing, bookings, loyalty programs) are targeted for data theft. Breaches trigger Privacy Act notification obligations and damage customer trust."
      },
      {
        h3: "Ransomware",
        title: "Business Disruption Through Encryption",
        description: "Ransomware attacks encrypt business-critical systems — from POS to booking platforms — bringing operations to a halt. Attackers demand payment knowing businesses can't afford extended downtime."
      }
    ],
    faqsH2: "Cyber Security FAQs for Prahran Businesses",
    faqs: [
      {
        question: "How can retail businesses protect customer payment card data?",
        answer: "Implement PCI DSS compliant payment processing, use encrypted payment terminals, segment your payment network, and never store full card numbers. ADL99 provides PCI compliance assessments and payment security solutions for Prahran retailers."
      },
      {
        question: "What are my obligations if my business experiences a customer data breach?",
        answer: "Under the Notifiable Data Breaches scheme, you must assess if the breach is likely to cause serious harm. If so, notify the OAIC and affected individuals as soon as practicable. ADL99 provides breach response and notification support."
      },
      {
        question: "Do small hospitality businesses really need cyber security?",
        answer: "Absolutely. Cafes and restaurants handle payment cards and customer bookings daily. A POS malware infection or ransomware attack can shut down operations and destroy customer trust. Basic security is essential and affordable with ADL99."
      },
      {
        question: "How can creative agencies protect client intellectual property?",
        answer: "Implement access controls, encrypt sensitive files, use secure file sharing platforms, and back up data regularly. ADL99 helps agencies protect client IP with practical security solutions and confidentiality controls."
      }
    ],
    nearbySuburbs: [
      { name: "South Yarra", postcode: "3141", slug: "south-yarra" },
      { name: "Windsor", postcode: "3181", slug: "windsor" },
      { name: "Camberwell", postcode: "3124", slug: "camberwell" },
      { name: "Armadale", postcode: "3143", slug: "armadale" }
    ]
  },
  "east-melbourne": {
    name: "East Melbourne",
    postcode: "3002",
    heroTitle: "Cyber Security Services in East Melbourne",
    heroSubtext: "Protect your business with expert cyber security solutions in East Melbourne. From healthcare to government contractors — we deliver tailored security for high-trust industries.",
    seoTitle: "Cyber Security East Melbourne (3002) | Healthcare & Government IT Security - ADL99",
    seoDescription: "Cyber security services in East Melbourne (3002). Protect healthcare, government & professional services from cyber threats. HIPAA, Essential Eight compliance. Call ADL99.",
    introH2: "Cyber Security for East Melbourne's High-Trust Sectors",
    introSubtext: "East Melbourne's proximity to Parliament, hospitals, and government offices creates a concentration of high-trust, high-value organizations. These businesses face sophisticated threats requiring specialized security expertise.",
    introChallenges: [
      {
        icon: "FileText",
        title: "Regulatory Compliance",
        description: "Healthcare providers and government contractors must meet strict regulatory requirements including Privacy Act, My Health Records Act, and Essential Eight maturity targets."
      },
      {
        icon: "Shield",
        title: "Protected Health Information",
        description: "Medical practices handle highly sensitive patient records. Breaches trigger mandatory OAIC notification and can result in significant reputational damage and penalties."
      },
      {
        icon: "Users",
        title: "Government Contractor Security",
        description: "Organizations working with government agencies must demonstrate Essential Eight compliance and meet PSPF security requirements to maintain contracts."
      },
      {
        icon: "AlertTriangle",
        title: "Targeted Attacks",
        description: "High-profile organizations in East Melbourne are targeted by sophisticated threat actors seeking sensitive government or healthcare data."
      }
    ],
    servicesH2: "Cyber Security Services for East Melbourne Organizations",
    servicesIntro: "ADL99 specializes in protecting high-trust organizations with comprehensive, compliance-focused cyber security solutions.",
    services: [
      {
        h3: "Healthcare Cyber Security in East Melbourne",
        title: "Healthcare Compliance & Security",
        description: "Protect patient records with Privacy Act and My Health Records Act compliant security. We secure medical practice management systems, implement access controls, and ensure breach notification readiness."
      },
      {
        h3: "Essential Eight Compliance for Government Contractors",
        title: "Essential Eight Implementation",
        description: "Meet government security requirements with Essential Eight maturity assessments and implementation support. We guide you from current state to target maturity level."
      },
      {
        h3: "vCISO Services for East Melbourne",
        title: "Virtual CISO Services",
        description: "Executive-level security leadership without full-time costs. Our vCISOs provide strategic oversight, board reporting, and compliance management for healthcare and government sectors."
      },
      {
        h3: "Penetration Testing & Security Assessments",
        title: "Security Testing & Validation",
        description: "Identify vulnerabilities before attackers do. We conduct comprehensive penetration testing and security assessments aligned with your regulatory requirements."
      },
      {
        h3: "Incident Response for Critical Infrastructure",
        title: "24/7 Incident Response",
        description: "Healthcare and government organizations can't afford downtime. Our incident response team provides rapid containment and remediation when security incidents occur."
      },
      {
        h3: "Security Awareness Training",
        title: "Compliance Training Programs",
        description: "Train staff on privacy obligations, security best practices, and threat awareness. We deliver tailored training for healthcare and government environments."
      }
    ],
    whyAdl99H2: "Why East Melbourne Organizations Choose ADL99",
    whyAdl99Intro: "We understand the unique security and compliance challenges facing healthcare providers and government contractors in East Melbourne.",
    whyAdl99Points: [
      {
        icon: "Award",
        title: "Compliance Specialists",
        description: "Deep expertise in healthcare privacy regulations, Essential Eight, and government security frameworks."
      },
      {
        icon: "Shield",
        title: "High-Trust Security",
        description: "Specialized security solutions for organizations handling sensitive government and healthcare data."
      },
      {
        icon: "FileCheck",
        title: "Audit Support",
        description: "We support your compliance audits with comprehensive documentation and evidence of security controls."
      },
      {
        icon: "Clock",
        title: "Rapid Response",
        description: "24/7 incident response capability to minimize downtime and meet breach notification timelines."
      }
    ],
    whyAdl99Cta: "Protect your high-trust organization with ADL99's specialized cyber security services. Contact us for a compliance-focused security assessment.",
    industriesH2: "Industries We Protect in East Melbourne",
    industries: [
      {
        h3: "Cyber Security for Healthcare in East Melbourne",
        title: "Healthcare & Medical Practices",
        description: "Medical clinics, specialist practices, and allied health providers handle sensitive patient records requiring robust privacy and security controls. We implement healthcare-specific security solutions that meet Privacy Act and My Health Records Act requirements.",
        link: "/industries/healthcare"
      },
      {
        h3: "Cyber Security for Government Contractors in East Melbourne",
        title: "Government Contractors & Consultants",
        description: "Organizations working with government agencies must demonstrate Essential Eight compliance and meet stringent security requirements. We provide gap assessments, implementation support, and ongoing compliance monitoring.",
        link: "/industries/government"
      },
      {
        h3: "Cyber Security for Professional Services in East Melbourne",
        title: "Professional Services",
        description: "Consulting firms, advisory practices, and professional services organizations require robust security to protect client confidentiality and intellectual property. We deliver tailored security solutions for knowledge-based businesses.",
        link: "/industries/professional-services"
      },
      {
        h3: "Cyber Security for Education in East Melbourne",
        title: "Education & Training Organizations",
        description: "Educational institutions handle student records and personal information requiring privacy protection. We implement security controls that protect student data and meet educational sector compliance requirements.",
        link: "/industries/education"
      }
    ],
    threatsH2: "Cyber Threats Targeting East Melbourne Organizations",
    threatsIntro: "High-trust organizations in East Melbourne face targeted attacks from sophisticated threat actors:",
    threats: [
      {
        h3: "Healthcare Data Breaches",
        title: "Theft of Protected Health Information",
        description: "Medical records are valuable on the dark web. Attackers target healthcare providers to steal patient data for identity fraud or ransom. Breaches trigger mandatory OAIC notification and significant penalties."
      },
      {
        h3: "Government Data Theft",
        title: "Espionage and Sensitive Data Exfiltration",
        description: "Government contractors hold sensitive policy documents and confidential information. State-sponsored and criminal threat actors target these organizations to steal classified or sensitive data."
      },
      {
        h3: "Ransomware",
        title: "Healthcare Ransomware Attacks",
        description: "Healthcare providers are prime ransomware targets due to critical service delivery requirements. Encrypted patient management systems force practices offline, and attackers know hospitals can't afford extended downtime."
      }
    ],
    faqsH2: "Cyber Security FAQs for East Melbourne Businesses",
    faqs: [
      {
        question: "What cyber security requirements apply to medical practices in East Melbourne?",
        answer: "Medical practices must comply with the Privacy Act 1988, Australian Privacy Principles, and My Health Records Act if registered. This includes implementing reasonable security measures, conducting privacy impact assessments, and having breach notification procedures. ADL99 provides healthcare-specific security assessments and compliance support."
      },
      {
        question: "What Essential Eight maturity level do government contractors need?",
        answer: "Requirements vary by agency and contract sensitivity. Many government contracts now require Maturity Level 2 or 3. ADL99 conducts Essential Eight gap assessments, provides implementation roadmaps, and supports your journey to target maturity levels."
      },
      {
        question: "What should a medical practice do if patient records are breached?",
        answer: "1) Contain the breach immediately. 2) Contact ADL99's incident response team. 3) Assess if the breach is likely to cause serious harm. 4) If so, notify OAIC and affected patients as soon as practicable (typically within 30 days). 5) Document all response actions. ADL99 provides healthcare breach response and OAIC notification support."
      },
      {
        question: "How much does healthcare cyber security compliance cost?",
        answer: "A comprehensive privacy and security assessment for a small medical practice typically starts from $5,000. Implementation costs depend on current security posture and target compliance level. ADL99 provides transparent fixed-price quotes tailored to healthcare organizations."
      }
    ],
    nearbySuburbs: [
      { name: "Melbourne CBD", postcode: "3000", slug: "melbourne-cbd" },
      { name: "Fitzroy", postcode: "3065", slug: "fitzroy" },
      { name: "Richmond", postcode: "3121", slug: "richmond" },
      { name: "Carlton", postcode: "3053", slug: "carlton" }
    ]
  },
  "south-melbourne": {
    name: "South Melbourne",
    postcode: "3205",
    heroTitle: "Cyber Security Services in South Melbourne",
    heroSubtext: "Protect your South Melbourne business with tailored cyber security solutions. From tech startups to manufacturing — we secure diverse businesses across the precinct.",
    seoTitle: "Cyber Security South Melbourne (3205) | Tech & Manufacturing IT Security - ADL99",
    seoDescription: "Cyber security services in South Melbourne (3205). Protect tech startups, manufacturing & professional businesses from cyber threats. Essential Eight, vCISO, incident response. Call ADL99.",
    introH2: "Cyber Security for South Melbourne's Growing Business Hub",
    introSubtext: "South Melbourne's transformation into a thriving business precinct brings together tech startups, creative agencies, and established manufacturing firms. This diversity creates unique cyber security challenges requiring flexible, scalable solutions.",
    introChallenges: [
      {
        icon: "Zap",
        title: "Startup Security Constraints",
        description: "Tech startups face budget constraints but handle sensitive IP and customer data. Balancing security investment with growth is critical."
      },
      {
        icon: "Factory",
        title: "Manufacturing OT Security",
        description: "Manufacturing businesses increasingly connect operational technology to IT networks, creating new attack surfaces and operational risks."
      },
      {
        icon: "Code",
        title: "Intellectual Property Protection",
        description: "Tech companies and design agencies hold valuable source code, designs, and client IP. Data theft can destroy competitive advantage."
      },
      {
        icon: "Cloud",
        title: "Cloud Security",
        description: "Businesses migrating to cloud services face new security challenges including misconfiguration, inadequate access controls, and shared responsibility confusion."
      }
    ],
    servicesH2: "Cyber Security Solutions for South Melbourne Businesses",
    servicesIntro: "ADL99 delivers scalable, cost-effective cyber security for South Melbourne's diverse business community.",
    services: [
      {
        h3: "Startup Cyber Security in South Melbourne",
        title: "Startup Security Programs",
        description: "Build security into your startup from day one. We provide cost-effective security foundations that scale with your growth and satisfy investor due diligence requirements."
      },
      {
        h3: "Manufacturing Cyber Security",
        title: "OT/IT Security for Manufacturing",
        description: "Secure your operational technology and production systems. We protect manufacturing businesses from ransomware, production disruption, and supply chain attacks."
      },
      {
        h3: "IP Protection for Tech Companies",
        title: "Intellectual Property Protection",
        description: "Protect your source code, product designs, and competitive advantage. We implement access controls, encryption, and monitoring to prevent IP theft."
      },
      {
        h3: "Cloud Security Assessments",
        title: "Cloud Security & Migration",
        description: "Secure your cloud infrastructure on AWS, Azure, or Google Cloud. We assess configurations, implement security controls, and ensure shared responsibility compliance."
      },
      {
        h3: "vCISO for Growing Businesses",
        title: "Virtual CISO Services",
        description: "Get strategic security leadership without full-time CISO costs. Perfect for growing businesses needing executive-level security guidance."
      },
      {
        h3: "Security Awareness Training",
        title: "Staff Security Training",
        description: "Train your team to recognize threats and follow security best practices. Human awareness is critical for startups with limited technical controls."
      }
    ],
    whyAdl99H2: "Why South Melbourne Businesses Choose ADL99",
    whyAdl99Intro: "We understand the unique challenges facing South Melbourne's mix of innovative startups and established businesses.",
    whyAdl99Points: [
      {
        icon: "TrendingUp",
        title: "Scalable Solutions",
        description: "Security solutions that grow with your business, from startup to enterprise."
      },
      {
        icon: "DollarSign",
        title: "Cost-Effective",
        description: "Enterprise-grade security at startup-friendly pricing. We right-size solutions to your risk and budget."
      },
      {
        icon: "Cpu",
        title: "Tech Expertise",
        description: "Deep understanding of tech stacks, cloud platforms, and modern development practices."
      },
      {
        icon: "Clock",
        title: "Rapid Response",
        description: "24/7 incident response when business-critical systems are under attack."
      }
    ],
    whyAdl99Cta: "Protect your South Melbourne business with scalable, cost-effective cyber security. Contact ADL99 for a free consultation.",
    industriesH2: "Industries We Protect in South Melbourne",
    industries: [
      {
        h3: "Cyber Security for Tech Startups in South Melbourne",
        title: "Tech Startups & SaaS",
        description: "Protect your product, customer data, and investor confidence with security programs designed for fast-growing tech companies. From secure SDLC to SOC 2 compliance, we support your security maturity journey.",
        link: "/industries/technology"
      },
      {
        h3: "Cyber Security for Manufacturing in South Melbourne",
        title: "Manufacturing & Industrial",
        description: "Secure production systems, protect operational technology, and defend against ransomware that targets manufacturing. We understand the unique challenges of OT/IT convergence.",
        link: "/industries/manufacturing"
      },
      {
        h3: "Cyber Security for Creative Agencies in South Melbourne",
        title: "Creative & Design Agencies",
        description: "Protect client IP, secure creative assets, and implement access controls for agencies handling confidential campaigns and brand materials.",
        link: "/industries/professional-services"
      },
      {
        h3: "Cyber Security for Professional Services in South Melbourne",
        title: "Professional Services",
        description: "Consulting firms, advisory practices, and professional services require robust client confidentiality and data protection. We deliver tailored security solutions.",
        link: "/industries/professional-services"
      }
    ],
    threatsH2: "Cyber Threats Facing South Melbourne Businesses",
    threatsIntro: "South Melbourne businesses face evolving threats targeting their valuable data and operations:",
    threats: [
      {
        h3: "IP Theft",
        title: "Intellectual Property and Source Code Theft",
        description: "Tech companies and design agencies are targeted for IP theft. Attackers steal source code, product designs, and client materials to sell to competitors or use for their own advantage."
      },
      {
        h3: "Ransomware",
        title: "Manufacturing Ransomware Attacks",
        description: "Ransomware targeting manufacturing systems can halt production for days or weeks. Attackers know manufacturers can't afford extended downtime and are likely to pay ransoms."
      },
      {
        h3: "Supply Chain Attacks",
        title: "Tech Supply Chain Compromise",
        description: "Software supply chain attacks compromise development tools, dependencies, or build systems to inject malicious code into products. These attacks are increasingly sophisticated and difficult to detect."
      }
    ],
    faqsH2: "Cyber Security FAQs for South Melbourne Businesses",
    faqs: [
      {
        question: "What cyber security should a startup implement from day one?",
        answer: "Start with: 1) Multi-factor authentication on all accounts. 2) Encrypted laptops and secure password management. 3) Cloud security baseline (proper IAM and encryption). 4) Basic security awareness training. 5) Documented incident response plan. ADL99 provides startup security foundations packages starting from $3,000."
      },
      {
        question: "How do we protect our source code and intellectual property?",
        answer: "Implement: 1) Access controls and least privilege. 2) Code repository security (private repos, branch protection). 3) Data loss prevention monitoring. 4) Employee agreements covering IP ownership. 5) Encryption for sensitive data at rest. ADL99 provides IP protection assessments and implementation for tech companies."
      },
      {
        question: "What security do investors expect during due diligence?",
        answer: "Investors typically look for: security policies and procedures, access controls, encryption of sensitive data, security awareness training, incident response plans, and cloud security configurations. ADL99 helps startups prepare for security due diligence and implement investor-ready security programs."
      },
      {
        question: "How can manufacturers secure operational technology systems?",
        answer: "OT security requires: 1) Network segmentation between IT and OT. 2) Asset inventory of all connected devices. 3) Patch management for OT systems. 4) Access controls and monitoring. 5) Offline backups of critical configurations. ADL99 specializes in manufacturing OT/IT security."
      }
    ],
    nearbySuburbs: [
      { name: "Melbourne CBD", postcode: "3000", slug: "melbourne-cbd" },
      { name: "Port Melbourne", postcode: "3207", slug: "port-melbourne" },
      { name: "Southbank", postcode: "3006", slug: "southbank" },
      { name: "Albert Park", postcode: "3206", slug: "albert-park" }
    ]
  },
  "port-melbourne": {
    name: "Port Melbourne",
    postcode: "3207",
    heroTitle: "Cyber Security Services in Port Melbourne",
    heroSubtext: "Protect your Port Melbourne business with comprehensive cyber security solutions. From logistics to maritime services — we secure businesses in Melbourne's working port precinct.",
    seoTitle: "Cyber Security Port Melbourne (3207) | Logistics & Maritime IT Security - ADL99",
    seoDescription: "Cyber security services in Port Melbourne (3207). Protect logistics, maritime, warehousing & distribution businesses from cyber threats. Supply chain security, Essential Eight. Call ADL99.",
    introH2: "Cyber Security for Port Melbourne's Logistics & Maritime Sector",
    introSubtext: "Port Melbourne's unique concentration of logistics, warehousing, maritime services, and distribution centers faces distinct cyber security challenges. Supply chain attacks and operational disruption threats require specialized security expertise.",
    introChallenges: [
      {
        icon: "Truck",
        title: "Supply Chain Vulnerabilities",
        description: "Logistics and distribution businesses are critical links in supply chains. Cyber attacks can disrupt operations across entire networks of customers and partners."
      },
      {
        icon: "Anchor",
        title: "Maritime System Security",
        description: "Port operations and maritime services increasingly rely on connected systems. GPS spoofing, vessel tracking manipulation, and cargo management attacks pose operational risks."
      },
      {
        icon: "Package",
        title: "Warehouse Management Systems",
        description: "Modern warehouses rely on interconnected WMS, robotics, and inventory systems. Ransomware or system compromise can halt distribution operations."
      },
      {
        icon: "Network",
        title: "Third-Party Integration Risks",
        description: "Logistics businesses integrate with numerous customers, suppliers, and partners. Each connection expands the attack surface and introduces third-party risk."
      }
    ],
    servicesH2: "Cyber Security Solutions for Port Melbourne Businesses",
    servicesIntro: "ADL99 delivers specialized cyber security for logistics, maritime, and distribution businesses in Port Melbourne.",
    services: [
      {
        h3: "Supply Chain Cyber Security",
        title: "Supply Chain Security",
        description: "Protect your supply chain operations from cyber attacks. We secure logistics systems, implement third-party risk management, and ensure operational resilience."
      },
      {
        h3: "OT Security for Warehouses",
        title: "Warehouse & OT Security",
        description: "Secure warehouse management systems, robotics, and operational technology. We protect distribution operations from ransomware and operational disruption."
      },
      {
        h3: "Maritime Cyber Security",
        title: "Maritime & Port Security",
        description: "Protect vessel tracking, cargo management, and port operations systems. We implement maritime-specific security controls and monitoring."
      },
      {
        h3: "Third-Party Risk Management",
        title: "Vendor & Partner Security",
        description: "Assess and manage cyber risks from customers, suppliers, and logistics partners. We help you secure your extended enterprise."
      },
      {
        h3: "Incident Response for Logistics",
        title: "24/7 Incident Response",
        description: "Logistics operations can't afford extended downtime. Our incident response team provides rapid containment and recovery when cyber incidents strike."
      },
      {
        h3: "Essential Eight for Logistics",
        title: "Essential Eight Compliance",
        description: "Implement Essential Eight security controls to protect critical logistics infrastructure and meet customer security requirements."
      }
    ],
    whyAdl99H2: "Why Port Melbourne Logistics Businesses Choose ADL99",
    whyAdl99Intro: "We understand the operational imperatives and unique security challenges facing logistics and maritime businesses in Port Melbourne.",
    whyAdl99Points: [
      {
        icon: "Shield",
        title: "OT/IT Expertise",
        description: "Specialized expertise in securing operational technology and logistics systems critical to your business."
      },
      {
        icon: "Network",
        title: "Supply Chain Focus",
        description: "Deep understanding of supply chain security risks and third-party management."
      },
      {
        icon: "Clock",
        title: "Minimal Disruption",
        description: "We implement security controls with minimal operational disruption to keep your logistics flowing."
      },
      {
        icon: "Headphones",
        title: "24/7 Support",
        description: "Around-the-clock incident response for businesses that operate beyond standard business hours."
      }
    ],
    whyAdl99Cta: "Protect your Port Melbourne logistics operations with specialized cyber security. Contact ADL99 for a supply chain security assessment.",
    industriesH2: "Industries We Protect in Port Melbourne",
    industries: [
      {
        h3: "Cyber Security for Logistics in Port Melbourne",
        title: "Logistics & Freight Forwarding",
        description: "Protect freight operations, customs systems, and logistics management platforms from cyber threats. We secure the systems that keep goods moving.",
        link: "/industries/logistics"
      },
      {
        h3: "Cyber Security for Warehousing in Port Melbourne",
        title: "Warehousing & Distribution",
        description: "Secure warehouse management systems, inventory platforms, and distribution operations. We protect against ransomware and operational disruption.",
        link: "/industries/manufacturing"
      },
      {
        h3: "Cyber Security for Maritime in Port Melbourne",
        title: "Maritime & Port Services",
        description: "Protect vessel tracking, cargo management, and port operations systems from GPS spoofing, data manipulation, and operational attacks.",
        link: "/industries/maritime"
      },
      {
        h3: "Cyber Security for Manufacturing in Port Melbourne",
        title: "Manufacturing & Production",
        description: "Secure production systems and operational technology for manufacturers. We protect against threats targeting industrial control systems.",
        link: "/industries/manufacturing"
      }
    ],
    threatsH2: "Cyber Threats Targeting Port Melbourne Businesses",
    threatsIntro: "Logistics and maritime businesses in Port Melbourne face threats designed to disrupt operations and compromise supply chains:",
    threats: [
      {
        h3: "Ransomware",
        title: "Logistics Ransomware Attacks",
        description: "Ransomware targeting logistics and warehouse systems can halt distribution operations. Attackers know logistics businesses face severe customer penalties for delays and are likely to pay ransoms."
      },
      {
        h3: "Supply Chain Attacks",
        title: "Third-Party Compromise",
        description: "Attackers compromise logistics providers to gain access to customer systems and data. Port Melbourne businesses are targeted as entry points into larger supply chains."
      },
      {
        h3: "GPS Spoofing",
        title: "Maritime Navigation Attacks",
        description: "GPS spoofing and AIS manipulation can misdirect vessels or create false tracking data. These attacks pose safety risks and enable cargo theft or customs evasion."
      }
    ],
    faqsH2: "Cyber Security FAQs for Port Melbourne Businesses",
    faqs: [
      {
        question: "What cyber security risks do logistics companies face?",
        answer: "Key risks include: ransomware targeting WMS and logistics platforms, supply chain attacks compromising customer/supplier integrations, data breaches exposing shipment data, and operational disruption from system compromise. ADL99 provides logistics-specific security assessments and protection."
      },
      {
        question: "How do we secure warehouse management systems from ransomware?",
        answer: "Implement network segmentation to isolate WMS, deploy endpoint protection, maintain offline backups, restrict administrative access, and monitor for suspicious activity. ADL99 specializes in warehouse OT/IT security and ransomware protection."
      },
      {
        question: "What security do logistics customers expect from their providers?",
        answer: "Customers increasingly require security attestations, Essential Eight compliance evidence, and third-party security assessments. Many require cyber insurance and documented incident response plans. ADL99 helps logistics businesses meet customer security requirements."
      },
      {
        question: "Should we notify customers if we experience a cyber incident?",
        answer: "If customer data or operations are impacted, prompt notification maintains trust and may be contractually required. Assess contractual notification obligations and potential Privacy Act NDB requirements. ADL99 provides incident response and customer notification support."
      }
    ],
    nearbySuburbs: [
      { name: "South Melbourne", postcode: "3205", slug: "south-melbourne" },
      { name: "Melbourne CBD", postcode: "3000", slug: "melbourne-cbd" },
      { name: "Southbank", postcode: "3006", slug: "southbank" },
      { name: "Albert Park", postcode: "3206", slug: "albert-park" }
    ]
  },
  "fitzroy": {
    name: "Fitzroy",
    postcode: "3065",
    heroTitle: "Cyber Security Services in Fitzroy",
    heroSubtext: "Protect your Fitzroy business with tailored cyber security solutions. From creative studios to hospitality venues — we secure Melbourne's most vibrant creative precinct.",
    seoTitle: "Cyber Security Fitzroy (3065) | Creative & Hospitality IT Security - ADL99",
    seoDescription: "Cyber security services in Fitzroy (3065). Protect creative agencies, bars, restaurants & retail businesses from cyber threats. Affordable security for local businesses. Call ADL99.",
    introH2: "Cyber Security for Fitzroy's Creative & Hospitality Scene",
    introSubtext: "Fitzroy's unique blend of creative agencies, independent retailers, bars, and restaurants creates a vibrant business community with diverse cyber security needs. From protecting client IP to securing payment systems, local businesses face real threats.",
    introChallenges: [
      {
        icon: "Palette",
        title: "Creative IP Protection",
        description: "Design studios, advertising agencies, and creative businesses hold valuable client intellectual property and confidential campaign materials that must be protected."
      },
      {
        icon: "CreditCard",
        title: "Payment Security",
        description: "Bars, restaurants, and retail shops process thousands of payment card transactions. POS systems are prime targets for malware and skimming attacks."
      },
      {
        icon: "Users",
        title: "Small Business Resources",
        description: "Many Fitzroy businesses are small operations with limited IT resources and budgets, making cost-effective security essential."
      },
      {
        icon: "Wifi",
        title: "Public Wi-Fi Risks",
        description: "Venues offering customer Wi-Fi need to segment networks properly to prevent attackers from accessing business systems through guest networks."
      }
    ],
    servicesH2: "Cyber Security Solutions for Fitzroy Businesses",
    servicesIntro: "ADL99 provides practical, affordable cyber security solutions tailored for Fitzroy's creative and hospitality businesses.",
    services: [
      {
        h3: "Creative Agency Cyber Security",
        title: "IP Protection for Creative Businesses",
        description: "Protect client campaigns, designs, and creative assets with access controls, secure file sharing, and confidentiality measures tailored for agencies."
      },
      {
        h3: "Payment Security for Hospitality",
        title: "POS & Payment Security",
        description: "Secure point-of-sale systems and payment processing to protect customer card data and meet PCI compliance requirements."
      },
      {
        h3: "Small Business Security Foundations",
        title: "Essential Security for Small Businesses",
        description: "Cost-effective security foundations including multi-factor authentication, backup solutions, and basic threat protection for budget-conscious businesses."
      },
      {
        h3: "Network Security for Venues",
        title: "Venue Network Security",
        description: "Segment public Wi-Fi from business networks, secure booking systems, and protect customer databases for bars, restaurants, and venues."
      },
      {
        h3: "Incident Response",
        title: "Rapid Incident Response",
        description: "When ransomware or security incidents strike, our team provides rapid containment and recovery to minimize business disruption."
      },
      {
        h3: "Security Training",
        title: "Staff Awareness Training",
        description: "Train your team to recognize phishing emails, social engineering, and payment fraud attempts relevant to your industry."
      }
    ],
    whyAdl99H2: "Why Fitzroy Businesses Choose ADL99",
    whyAdl99Intro: "We understand the unique culture and constraints of Fitzroy's independent business community.",
    whyAdl99Points: [
      {
        icon: "DollarSign",
        title: "Affordable Pricing",
        description: "Enterprise-grade security at prices small businesses can afford. We right-size solutions to your budget."
      },
      {
        icon: "Zap",
        title: "Quick Implementation",
        description: "Fast deployment with minimal business disruption. We understand you can't afford extended downtime."
      },
      {
        icon: "Users",
        title: "Local Understanding",
        description: "We understand Fitzroy's creative and hospitality culture and the specific threats facing local businesses."
      },
      {
        icon: "Headphones",
        title: "Responsive Support",
        description: "Fast, friendly support when you need help. No corporate runaround or endless hold times."
      }
    ],
    whyAdl99Cta: "Protect your Fitzroy business without breaking the bank. Contact ADL99 for affordable cyber security solutions.",
    industriesH2: "Industries We Protect in Fitzroy",
    industries: [
      {
        h3: "Cyber Security for Creative Agencies in Fitzroy",
        title: "Creative & Design Agencies",
        description: "Protect client IP, creative assets, and confidential campaign materials. We secure agencies against data theft and ransomware.",
        link: "/industries/professional-services"
      },
      {
        h3: "Cyber Security for Hospitality in Fitzroy",
        title: "Bars, Restaurants & Cafes",
        description: "Secure payment systems, booking platforms, and customer databases. We protect hospitality businesses from payment fraud and data breaches.",
        link: "/industries/hospitality"
      },
      {
        h3: "Cyber Security for Retail in Fitzroy",
        title: "Independent Retail",
        description: "Protect customer payment data and secure e-commerce platforms for boutique retailers and specialty shops.",
        link: "/industries/retail"
      },
      {
        h3: "Cyber Security for Professional Services in Fitzroy",
        title: "Professional Services",
        description: "Protect consulting firms, marketing agencies, and professional practices with tailored security solutions.",
        link: "/industries/professional-services"
      }
    ],
    threatsH2: "Cyber Threats Facing Fitzroy Businesses",
    threatsIntro: "Small businesses in Fitzroy face increasing cyber threats:",
    threats: [
      {
        h3: "Payment Fraud",
        title: "POS Malware and Card Skimming",
        description: "Bars and restaurants are targeted by POS malware that steals payment card data during transactions. Small venues often lack security monitoring to detect these attacks."
      },
      {
        h3: "Ransomware",
        title: "Small Business Ransomware",
        description: "Attackers increasingly target small businesses with ransomware, knowing many lack backups and IT expertise. Ransoms typically range from $5,000 to $50,000."
      },
      {
        h3: "BEC Attacks",
        title: "Invoice and Payment Fraud",
        description: "Business email compromise attacks target creative agencies and professional services with fraudulent invoices or payment redirection schemes."
      }
    ],
    faqsH2: "Cyber Security FAQs for Fitzroy Businesses",
    faqs: [
      {
        question: "How much does cyber security cost for a small Fitzroy business?",
        answer: "Basic security foundations start from $2,000-$3,000 for initial setup, with ongoing managed security from $500/month. We provide transparent pricing and right-size solutions to your budget. ADL99 offers fixed-price packages for small businesses."
      },
      {
        question: "Do small bars and cafes really need cyber security?",
        answer: "Yes. If you process payment cards or collect customer data (bookings, loyalty programs), you're a target. A POS malware infection or data breach can result in regulatory fines, customer lawsuits, and reputational damage far exceeding security costs."
      },
      {
        question: "How can creative agencies protect client intellectual property?",
        answer: "Implement access controls so only relevant staff access client work, use encrypted file sharing platforms, back up data regularly, and have staff sign confidentiality agreements. ADL99 provides IP protection assessments for creative agencies."
      },
      {
        question: "What should I do if my business is hit by ransomware?",
        answer: "1) Don't pay immediately. 2) Disconnect infected systems. 3) Contact ADL99's incident response team immediately. 4) Preserve evidence. 5) Check if backups are available. Many ransomware attacks can be recovered without paying. ADL99 provides emergency ransomware response."
      }
    ],
    nearbySuburbs: [
      { name: "Carlton", postcode: "3053", slug: "carlton" },
      { name: "Collingwood", postcode: "3066", slug: "collingwood" },
      { name: "Richmond", postcode: "3121", slug: "richmond" },
      { name: "East Melbourne", postcode: "3002", slug: "east-melbourne" }
    ]
  },
  "albert-park": {
    name: "Albert Park",
    postcode: "3206",
    heroTitle: "Cyber Security Services in Albert Park",
    heroSubtext: "Protect your Albert Park business with professional cyber security solutions. From healthcare to professional services — we secure businesses across this prestigious bayside suburb.",
    seoTitle: "Cyber Security Albert Park (3206) | Healthcare & Professional Services IT Security - ADL99",
    seoDescription: "Cyber security services in Albert Park (3206). Protect medical practices, professional services & small businesses from cyber threats. Privacy compliance, Essential Eight. Call ADL99.",
    introH2: "Cyber Security for Albert Park's Professional Community",
    introSubtext: "Albert Park's concentration of medical practices, professional services firms, and established businesses creates a high-trust business environment. These organizations handle sensitive client and patient data requiring robust security and privacy compliance.",
    introChallenges: [
      {
        icon: "Heart",
        title: "Healthcare Privacy Compliance",
        description: "Medical practices and allied health providers must protect patient records under Privacy Act and My Health Records Act obligations, with mandatory breach notification requirements."
      },
      {
        icon: "Briefcase",
        title: "Professional Practice Security",
        description: "Accounting firms, law practices, and consultancies handle confidential client information requiring robust access controls and confidentiality protection."
      },
      {
        icon: "FileText",
        title: "Regulatory Requirements",
        description: "Professional service firms face industry-specific compliance obligations including Tax Practitioners Board rules, legal privilege protection, and client confidentiality requirements."
      },
      {
        icon: "Target",
        title: "High-Value Targets",
        description: "Established practices with valuable client data and financial resources are prime targets for business email compromise and ransomware attacks."
      }
    ],
    servicesH2: "Cyber Security Solutions for Albert Park Businesses",
    servicesIntro: "ADL99 provides compliance-focused cyber security solutions for Albert Park's healthcare and professional services community.",
    services: [
      {
        h3: "Healthcare Cyber Security in Albert Park",
        title: "Medical Practice Security",
        description: "Protect patient records with Privacy Act compliant security. Secure practice management systems, implement access controls, and prepare for breach notification obligations."
      },
      {
        h3: "Professional Services Security",
        title: "Confidentiality & Client Protection",
        description: "Protect client confidentiality with tailored security for accounting, legal, and consulting practices. We implement access controls and privilege protection measures."
      },
      {
        h3: "Privacy Compliance",
        title: "Privacy Act & NDB Compliance",
        description: "Navigate Privacy Act obligations and Notifiable Data Breaches scheme requirements with confidence. We provide compliance assessments and breach response planning."
      },
      {
        h3: "vCISO Services",
        title: "Virtual CISO for Practices",
        description: "Executive-level security guidance without full-time costs. Perfect for professional practices needing strategic security oversight."
      },
      {
        h3: "Cyber Maturity Assessments",
        title: "Security Posture Assessments",
        description: "Evaluate your security against industry standards and regulatory requirements. Identify gaps and build actionable remediation roadmaps."
      },
      {
        h3: "Incident Response",
        title: "Breach Response & Notification",
        description: "Expert incident response including containment, forensics, OAIC notification support, and patient/client communication guidance."
      }
    ],
    whyAdl99H2: "Why Albert Park Practices Choose ADL99",
    whyAdl99Intro: "We understand the privacy and compliance challenges facing healthcare and professional service providers in Albert Park.",
    whyAdl99Points: [
      {
        icon: "Award",
        title: "Compliance Expertise",
        description: "Deep understanding of healthcare privacy regulations, TPB requirements, and professional practice compliance obligations."
      },
      {
        icon: "Shield",
        title: "Trusted Advisors",
        description: "We understand the trust your clients and patients place in you. Our security solutions protect that trust."
      },
      {
        icon: "FileCheck",
        title: "Documentation",
        description: "Comprehensive security documentation to demonstrate compliance during audits and regulatory inquiries."
      },
      {
        icon: "Clock",
        title: "Responsive Support",
        description: "Fast, professional support when you need assistance. We understand practice operations can't wait."
      }
    ],
    whyAdl99Cta: "Protect your Albert Park practice with compliance-focused cyber security. Contact ADL99 for a free privacy and security assessment.",
    industriesH2: "Industries We Protect in Albert Park",
    industries: [
      {
        h3: "Cyber Security for Medical Practices in Albert Park",
        title: "Healthcare & Medical Practices",
        description: "Protect patient records, secure practice management systems, and meet Privacy Act obligations. We specialize in healthcare cyber security and privacy compliance.",
        link: "/industries/healthcare"
      },
      {
        h3: "Cyber Security for Accounting Firms in Albert Park",
        title: "Accounting & Financial Services",
        description: "Secure client financial data, meet TPB cyber security obligations, and protect against tax fraud. We understand accounting practice requirements.",
        link: "/industries/financial-services"
      },
      {
        h3: "Cyber Security for Law Firms in Albert Park",
        title: "Legal Practices",
        description: "Protect legal privilege, secure case files, and implement conflict walls. We provide legal-specific security solutions.",
        link: "/industries/law-firms"
      },
      {
        h3: "Cyber Security for Professional Services in Albert Park",
        title: "Professional Services",
        description: "Consulting firms, advisory practices, and professional services require robust client confidentiality protection. We deliver tailored solutions.",
        link: "/industries/professional-services"
      }
    ],
    threatsH2: "Cyber Threats Facing Albert Park Businesses",
    threatsIntro: "Professional practices in Albert Park face sophisticated threats targeting their valuable data:",
    threats: [
      {
        h3: "Healthcare Data Breaches",
        title: "Patient Record Theft",
        description: "Medical practices are targeted for patient data theft. Breaches trigger mandatory OAIC notification and can result in significant regulatory penalties and reputation damage."
      },
      {
        h3: "BEC Attacks",
        title: "Business Email Compromise",
        description: "Professional practices handling large financial transactions are targeted by BEC attacks. Attackers impersonate partners or clients to redirect payments or steal sensitive data."
      },
      {
        h3: "Ransomware",
        title: "Practice Ransomware Attacks",
        description: "Ransomware attacks encrypt patient records and client files, bringing practices to a standstill. Attackers demand payment knowing practices can't operate without data access."
      }
    ],
    faqsH2: "Cyber Security FAQs for Albert Park Businesses",
    faqs: [
      {
        question: "What are my privacy obligations as a medical practice in Albert Park?",
        answer: "Medical practices must comply with the Privacy Act 1988, Australian Privacy Principles, and My Health Records Act if registered. This includes implementing reasonable security measures, conducting privacy impact assessments, staff training, and having breach notification procedures. ADL99 provides healthcare privacy compliance assessments."
      },
      {
        question: "What should I do if patient records are breached?",
        answer: "1) Contain the breach immediately. 2) Contact ADL99's healthcare incident response team. 3) Assess if breach is likely to cause serious harm. 4) Notify OAIC and affected patients within 30 days if required. 5) Document all response actions. ADL99 provides healthcare breach response and OAIC notification support."
      },
      {
        question: "What cyber security do accounting practices need under TPB requirements?",
        answer: "Tax Practitioners Board members must implement reasonable security measures to protect client tax information. This includes access controls, encryption, secure storage, staff training, and incident response plans. ADL99 helps accounting firms meet TPB cyber security obligations."
      },
      {
        question: "How much does healthcare cyber security cost?",
        answer: "A comprehensive privacy and security assessment for a small medical practice typically starts from $4,000-$6,000. Implementation costs vary based on current security posture. ADL99 provides transparent fixed-price quotes for healthcare cyber security."
      }
    ],
    nearbySuburbs: [
      { name: "South Melbourne", postcode: "3205", slug: "south-melbourne" },
      { name: "Port Melbourne", postcode: "3207", slug: "port-melbourne" },
      { name: "Middle Park", postcode: "3206", slug: "middle-park" },
      { name: "St Kilda", postcode: "3182", slug: "st-kilda" }
    ]
  },
  "kew": {
    name: "Kew",
    postcode: "3101",
    heroTitle: "Cyber Security Services in Kew",
    heroSubtext: "Protect your Kew business with expert cyber security solutions. From healthcare to financial services — we secure businesses across Melbourne's established eastern suburb.",
    seoTitle: "Cyber Security Kew (3101) | Healthcare, Finance & Professional Services IT Security - ADL99",
    seoDescription: "Cyber security services in Kew (3101). Protect medical practices, financial advisors & professional services from cyber threats. Privacy compliance, ransomware protection. Call ADL99.",
    introH2: "Cyber Security for Kew's Established Professional Community",
    introSubtext: "Kew's concentration of medical specialists, financial advisors, and established professional practices creates a high-value target environment. These businesses handle sensitive personal, health, and financial data requiring comprehensive security and compliance.",
    introChallenges: [
      {
        icon: "Heart",
        title: "Specialist Medical Security",
        description: "Medical specialists and allied health providers handle highly sensitive patient information. Privacy breaches trigger mandatory reporting and significant penalties."
      },
      {
        icon: "DollarSign",
        title: "Financial Services Compliance",
        description: "Financial advisors and wealth managers must protect client financial data and meet ASIC/APRA regulatory requirements including cyber resilience obligations."
      },
      {
        icon: "Users",
        title: "High Net Worth Targeting",
        description: "Kew's demographics make local practices prime targets for sophisticated attacks seeking high-value client data and financial fraud opportunities."
      },
      {
        icon: "Building",
        title: "Established Practice Protection",
        description: "Long-established practices have built reputation and trust over decades. Cyber incidents can destroy this trust overnight."
      }
    ],
    servicesH2: "Cyber Security Solutions for Kew Businesses",
    servicesIntro: "ADL99 delivers premium cyber security solutions tailored for Kew's healthcare, financial services, and professional practice community.",
    services: [
      {
        h3: "Medical Specialist Cyber Security",
        title: "Healthcare Practice Security",
        description: "Protect patient records with comprehensive Privacy Act and My Health Records Act compliance. Secure specialist practice management systems and implement robust access controls."
      },
      {
        h3: "Financial Services Security",
        title: "Wealth Management & Advisory Security",
        description: "Protect client portfolios, financial plans, and personal wealth data. We implement security controls meeting ASIC/APRA cyber resilience requirements."
      },
      {
        h3: "Professional Practice vCISO",
        title: "Virtual CISO Services",
        description: "Executive-level security leadership for professional practices. Strategic oversight, board reporting, and compliance management without full-time costs."
      },
      {
        h3: "Privacy & Compliance",
        title: "Regulatory Compliance",
        description: "Navigate Privacy Act, My Health Records Act, APRA CPS 234, and industry-specific compliance requirements with expert guidance."
      },
      {
        h3: "Cyber Insurance Support",
        title: "Cyber Insurance & Risk Management",
        description: "Meet cyber insurance requirements and support policy applications with comprehensive security assessments and control implementation."
      },
      {
        h3: "Executive Protection",
        title: "Executive & Partner Security",
        description: "Protect practice partners and executives from targeted phishing, credential theft, and personal device compromise with VIP security measures."
      }
    ],
    whyAdl99H2: "Why Kew Practices Trust ADL99",
    whyAdl99Intro: "We understand the high-trust environment and regulatory complexity facing Kew's established professional practices.",
    whyAdl99Points: [
      {
        icon: "Award",
        title: "Premium Service",
        description: "White-glove service delivery matching the professional standards your clients expect from your practice."
      },
      {
        icon: "Shield",
        title: "Multi-Sector Expertise",
        description: "Deep expertise across healthcare, financial services, and professional practice security and compliance."
      },
      {
        icon: "Lock",
        title: "Discretion",
        description: "We understand client confidentiality is paramount. All security assessments and incident response are handled with utmost discretion."
      },
      {
        icon: "Headphones",
        title: "Partner-Level Support",
        description: "Direct access to senior security consultants who understand your practice and regulatory environment."
      }
    ],
    whyAdl99Cta: "Protect your Kew practice with premium cyber security services. Contact ADL99 for a confidential security consultation.",
    industriesH2: "Industries We Protect in Kew",
    industries: [
      {
        h3: "Cyber Security for Medical Specialists in Kew",
        title: "Medical Specialists & Allied Health",
        description: "Protect specialist patient records, secure medical imaging systems, and meet healthcare privacy compliance. We specialize in specialist practice security.",
        link: "/industries/healthcare"
      },
      {
        h3: "Cyber Security for Financial Advisors in Kew",
        title: "Financial Planning & Wealth Management",
        description: "Secure client portfolios and personal financial data. Meet ASIC/APRA cyber resilience requirements and protect against financial fraud.",
        link: "/industries/financial-services"
      },
      {
        h3: "Cyber Security for Accountants in Kew",
        title: "Accounting & Tax Services",
        description: "Protect client financial records, meet TPB cyber security obligations, and secure tax information with accounting-specific security solutions.",
        link: "/industries/financial-services"
      },
      {
        h3: "Cyber Security for Legal Practices in Kew",
        title: "Legal Practices",
        description: "Protect legal privilege, secure confidential case files, and implement ethical walls. We deliver legal-specific cyber security.",
        link: "/industries/law-firms"
      }
    ],
    threatsH2: "Cyber Threats Targeting Kew Businesses",
    threatsIntro: "High-value practices in Kew face sophisticated, targeted cyber threats:",
    threats: [
      {
        h3: "Targeted Phishing",
        title: "Spear Phishing Against Partners",
        description: "Practice partners and senior professionals are targeted with personalized phishing attacks designed to steal credentials or trick them into authorizing fraudulent payments."
      },
      {
        h3: "Financial Fraud",
        title: "Investment Redirection Fraud",
        description: "Financial advisors are targeted by attackers who compromise email accounts to redirect client investments or intercept payment instructions. Losses can exceed millions."
      },
      {
        h3: "Healthcare Ransomware",
        title: "Medical Practice Ransomware",
        description: "Medical specialists are targeted by ransomware knowing patient care depends on immediate data access. Encrypted patient management systems force practices to pay or turn patients away."
      }
    ],
    faqsH2: "Cyber Security FAQs for Kew Businesses",
    faqs: [
      {
        question: "What cyber security requirements apply to financial advisors in Kew?",
        answer: "Financial advisors must comply with Privacy Act requirements and ASIC/APRA cyber resilience expectations. This includes information security policies, access controls, incident response plans, and regular security assessments. Larger firms may face APRA CPS 234 requirements. ADL99 provides financial services compliance assessments."
      },
      {
        question: "How can medical specialists protect patient records?",
        answer: "Implement: 1) Encrypted practice management systems. 2) Multi-factor authentication. 3) Role-based access controls. 4) Regular backups. 5) Staff privacy training. 6) Incident response procedures. 7) Breach notification plans. ADL99 specializes in medical specialist practice security."
      },
      {
        question: "What cyber insurance do Kew practices need?",
        answer: "Professional practices should consider cyber insurance covering: data breach notification costs, business interruption, ransomware payments (where legal), legal fees, and regulatory fines. Policies typically require baseline security controls. ADL99 helps practices meet cyber insurance requirements."
      },
      {
        question: "How do we protect against investment redirection fraud?",
        answer: "Implement multi-factor authentication, verify payment changes via phone (not email), use secure client portals for instructions, implement dual authorization for large transactions, and train staff on BEC warning signs. ADL99 provides financial advisor-specific security training."
      }
    ],
    nearbySuburbs: [
      { name: "Hawthorn", postcode: "3122", slug: "hawthorn" },
      { name: "Camberwell", postcode: "3124", slug: "camberwell" },
      { name: "Richmond", postcode: "3121", slug: "richmond" },
      { name: "Kew East", postcode: "3102", slug: "kew-east" }
    ]
  },
  "carlton": {
    name: "Carlton",
    postcode: "3053",
    heroTitle: "Cyber Security Services in Carlton",
    heroSubtext: "Protect your Carlton business with tailored cyber security solutions. From university research to hospitality — we secure businesses in Melbourne's knowledge precinct.",
    seoTitle: "Cyber Security Carlton (3053) | Research, Education & Hospitality IT Security - ADL99",
    seoDescription: "Cyber security services in Carlton (3053). Protect research organizations, education providers, hospitality & retail businesses from cyber threats. Affordable security. Call ADL99.",
    introH2: "Cyber Security for Carlton's Knowledge & Hospitality Precinct",
    introSubtext: "Carlton's unique blend of university-affiliated businesses, research organizations, hospitality venues, and independent retailers creates diverse cyber security challenges. From protecting research IP to securing student data, businesses face real threats.",
    introChallenges: [
      {
        icon: "GraduationCap",
        title: "Research IP Protection",
        description: "Research organizations and university spin-offs handle valuable intellectual property and confidential research data that must be protected from theft and espionage."
      },
      {
        icon: "Users",
        title: "Student Data Privacy",
        description: "Education providers and student services businesses collect personal information requiring Privacy Act compliance and protection from data breaches."
      },
      {
        icon: "Utensils",
        title: "Hospitality Payment Security",
        description: "Carlton's thriving restaurant and cafe scene processes thousands of daily transactions. POS systems are targeted by payment fraud and malware."
      },
      {
        icon: "ShoppingBag",
        title: "Retail Customer Data",
        description: "Independent retailers and bookshops collect customer information for online sales and loyalty programs, creating privacy obligations."
      }
    ],
    servicesH2: "Cyber Security Solutions for Carlton Businesses",
    servicesIntro: "ADL99 provides practical cyber security solutions for Carlton's diverse business community, from research organizations to hospitality venues.",
    services: [
      {
        h3: "Research & IP Security",
        title: "Research IP Protection",
        description: "Protect research data, intellectual property, and confidential findings. We secure research organizations against IP theft and espionage."
      },
      {
        h3: "Education Sector Security",
        title: "Education Provider Security",
        description: "Protect student records, meet Privacy Act obligations, and secure learning management systems for training providers and education services."
      },
      {
        h3: "Hospitality Cyber Security",
        title: "POS & Payment Security",
        description: "Secure point-of-sale systems and payment processing for restaurants, cafes, and bars. Protect customer payment data and meet PCI compliance."
      },
      {
        h3: "Small Business Foundations",
        title: "Essential Security for SMEs",
        description: "Cost-effective security foundations for small retailers and service businesses. Multi-factor authentication, backups, and basic threat protection."
      },
      {
        h3: "Privacy Compliance",
        title: "Privacy Act Compliance",
        description: "Navigate Privacy Act obligations for businesses collecting customer or student data. Breach notification planning and compliance support."
      },
      {
        h3: "Incident Response",
        title: "Rapid Response & Recovery",
        description: "Fast incident response when ransomware or security incidents strike. Minimize business disruption and support recovery."
      }
    ],
    whyAdl99H2: "Why Carlton Businesses Choose ADL99",
    whyAdl99Intro: "We understand Carlton's unique mix of knowledge economy businesses and local services.",
    whyAdl99Points: [
      {
        icon: "Award",
        title: "Research Expertise",
        description: "Understanding of research IP protection and academic collaboration security requirements."
      },
      {
        icon: "DollarSign",
        title: "Affordable Solutions",
        description: "Cost-effective security for small businesses and startups without compromising protection quality."
      },
      {
        icon: "Users",
        title: "Local Focus",
        description: "We understand Carlton's business community and the specific threats facing local organizations."
      },
      {
        icon: "Zap",
        title: "Fast Implementation",
        description: "Quick deployment with minimal disruption to business operations or research activities."
      }
    ],
    whyAdl99Cta: "Protect your Carlton business with practical, affordable cyber security. Contact ADL99 for a free security consultation.",
    industriesH2: "Industries We Protect in Carlton",
    industries: [
      {
        h3: "Cyber Security for Research Organizations in Carlton",
        title: "Research & Development",
        description: "Protect research IP, secure confidential findings, and implement access controls for research organizations and university spin-offs.",
        link: "/industries/research"
      },
      {
        h3: "Cyber Security for Education in Carlton",
        title: "Education & Training",
        description: "Secure student records, protect learning management systems, and meet Privacy Act obligations for education providers and training organizations.",
        link: "/industries/education"
      },
      {
        h3: "Cyber Security for Hospitality in Carlton",
        title: "Restaurants, Cafes & Bars",
        description: "Secure payment systems, protect booking platforms, and safeguard customer data for Carlton's vibrant hospitality scene.",
        link: "/industries/hospitality"
      },
      {
        h3: "Cyber Security for Retail in Carlton",
        title: "Independent Retail",
        description: "Protect customer payment data, secure e-commerce platforms, and implement privacy controls for independent retailers.",
        link: "/industries/retail"
      }
    ],
    threatsH2: "Cyber Threats Facing Carlton Businesses",
    threatsIntro: "Carlton businesses face diverse cyber threats targeting their operations and data:",
    threats: [
      {
        h3: "IP Theft",
        title: "Research and IP Espionage",
        description: "Research organizations are targeted by state-sponsored actors and corporate espionage seeking to steal valuable intellectual property and research findings."
      },
      {
        h3: "Ransomware",
        title: "Small Business Ransomware",
        description: "Cafes, retailers, and small service businesses are increasingly targeted by ransomware. Many lack backups and IT expertise, making them vulnerable to extended disruption."
      },
      {
        h3: "Payment Fraud",
        title: "POS Malware and Skimming",
        description: "Hospitality venues are targeted by POS malware that steals payment card data during transactions, leading to customer fraud and regulatory investigations."
      }
    ],
    faqsH2: "Cyber Security FAQs for Carlton Businesses",
    faqs: [
      {
        question: "How can research organizations protect intellectual property?",
        answer: "Implement: 1) Access controls limiting IP access to authorized researchers. 2) Encrypted storage and transmission. 3) Data loss prevention monitoring. 4) Secure collaboration platforms. 5) NDAs and IP ownership agreements. 6) Regular security audits. ADL99 provides research IP protection assessments."
      },
      {
        question: "What privacy obligations apply to education providers?",
        answer: "Education providers must comply with the Privacy Act 1988 and Australian Privacy Principles when collecting student data. This includes implementing reasonable security measures, limiting data collection, and having breach notification procedures. ADL99 provides education sector privacy compliance support."
      },
      {
        question: "Do small cafes and restaurants really need cyber security?",
        answer: "Yes. POS malware infections can lead to customer card fraud, regulatory fines, and payment card industry penalties. A single breach can cost tens of thousands in fines and remediation. Basic security is essential and affordable with ADL99."
      },
      {
        question: "How much does cyber security cost for a small Carlton business?",
        answer: "Basic security foundations start from $2,000-$3,000 for initial setup. Ongoing managed security from $400-$600/month for small businesses. We provide transparent fixed-price packages. ADL99 right-sizes solutions to your budget and risk profile."
      }
    ],
    nearbySuburbs: [
      { name: "Melbourne CBD", postcode: "3000", slug: "melbourne-cbd" },
      { name: "Fitzroy", postcode: "3065", slug: "fitzroy" },
      { name: "Parkville", postcode: "3052", slug: "parkville" },
      { name: "East Melbourne", postcode: "3002", slug: "east-melbourne" }
    ]
  },
  "armadale": {
    name: "Armadale",
    postcode: "3143",
    heroTitle: "Cyber Security Services in Armadale",
    heroSubtext: "Protect your Armadale business with professional cyber security solutions. From boutique retail to professional services — we secure businesses in Melbourne's prestigious shopping precinct.",
    seoTitle: "Cyber Security Armadale (3143) | Retail, Fashion & Professional Services IT Security - ADL99",
    seoDescription: "Cyber security services in Armadale (3143). Protect boutique retail, fashion, professional services & small businesses from cyber threats. PCI compliance, privacy protection. Call ADL99.",
    introH2: "Cyber Security for Armadale's Premium Retail & Professional Hub",
    introSubtext: "Armadale's High Street precinct combines luxury retail, boutique fashion, professional services, and hospitality venues. These businesses handle high-value transactions and customer data requiring robust payment security and privacy compliance.",
    introChallenges: [
      {
        icon: "ShoppingBag",
        title: "Luxury Retail Security",
        description: "High-end retail and boutique fashion stores process premium transactions and collect detailed customer profiles. Payment security and customer data protection are critical."
      },
      {
        icon: "CreditCard",
        title: "PCI Compliance",
        description: "Retailers accepting card payments must meet Payment Card Industry Data Security Standard (PCI DSS) requirements to avoid fines and liability for card fraud."
      },
      {
        icon: "Users",
        title: "Customer Privacy",
        description: "Businesses collecting customer data for marketing, personal shopping services, and loyalty programs must comply with Privacy Act obligations."
      },
      {
        icon: "Store",
        title: "Boutique Business Constraints",
        description: "Small, owner-operated businesses often lack dedicated IT staff but face the same threats as larger retailers, requiring cost-effective security solutions."
      }
    ],
    servicesH2: "Cyber Security Solutions for Armadale Businesses",
    servicesIntro: "ADL99 provides tailored cyber security solutions for Armadale's retail, fashion, and professional services community.",
    services: [
      {
        h3: "Retail Cyber Security",
        title: "Payment & POS Security",
        description: "Secure point-of-sale systems and payment processing. Achieve PCI DSS compliance and protect customer payment card data from fraud and theft."
      },
      {
        h3: "E-Commerce Security",
        title: "Online Store Security",
        description: "Secure e-commerce platforms, protect customer accounts, and implement payment security for online retail operations."
      },
      {
        h3: "Customer Data Protection",
        title: "Privacy Compliance",
        description: "Navigate Privacy Act obligations for businesses collecting customer data. Implement secure CRM systems and breach notification procedures."
      },
      {
        h3: "Professional Services Security",
        title: "Professional Practice Protection",
        description: "Protect client confidentiality and sensitive business data for accounting, legal, and professional service firms in the precinct."
      },
      {
        h3: "Small Business Packages",
        title: "Boutique Business Security",
        description: "Cost-effective security foundations for small, owner-operated businesses. Essential protection without enterprise complexity or pricing."
      },
      {
        h3: "Incident Response",
        title: "Rapid Incident Response",
        description: "Fast response when cyber incidents occur. Minimize disruption and support recovery for time-sensitive retail operations."
      }
    ],
    whyAdl99H2: "Why Armadale Businesses Choose ADL99",
    whyAdl99Intro: "We understand the unique needs of Armadale's premium retail and professional services community.",
    whyAdl99Points: [
      {
        icon: "Award",
        title: "Retail Expertise",
        description: "Specialized experience securing boutique retail, fashion, and luxury goods businesses."
      },
      {
        icon: "Shield",
        title: "PCI Compliance",
        description: "Expert guidance achieving and maintaining PCI DSS compliance for card payment processing."
      },
      {
        icon: "DollarSign",
        title: "Right-Sized Solutions",
        description: "Security solutions scaled appropriately for boutique businesses without unnecessary complexity."
      },
      {
        icon: "Headphones",
        title: "Personalized Service",
        description: "Direct access to security consultants who understand your business and respond quickly when needed."
      }
    ],
    whyAdl99Cta: "Protect your Armadale business with professional cyber security. Contact ADL99 for a free retail security assessment.",
    industriesH2: "Industries We Protect in Armadale",
    industries: [
      {
        h3: "Cyber Security for Retail in Armadale",
        title: "Boutique Retail & Fashion",
        description: "Protect customer payment data, secure POS systems, and achieve PCI compliance for boutique retailers and fashion businesses on High Street.",
        link: "/industries/retail"
      },
      {
        h3: "Cyber Security for Professional Services in Armadale",
        title: "Professional Services",
        description: "Secure client data and confidential information for accounting, legal, and consulting practices serving Armadale's business community.",
        link: "/industries/professional-services"
      },
      {
        h3: "Cyber Security for Hospitality in Armadale",
        title: "Cafes & Restaurants",
        description: "Protect payment systems, secure booking platforms, and safeguard customer data for Armadale's dining establishments.",
        link: "/industries/hospitality"
      },
      {
        h3: "Cyber Security for Beauty & Wellness in Armadale",
        title: "Beauty & Personal Services",
        description: "Secure client records, protect payment systems, and implement privacy controls for salons, spas, and personal service businesses.",
        link: "/industries/healthcare"
      }
    ],
    threatsH2: "Cyber Threats Facing Armadale Businesses",
    threatsIntro: "Retail and service businesses in Armadale face targeted cyber threats:",
    threats: [
      {
        h3: "Payment Fraud",
        title: "POS Malware and Card Skimming",
        description: "Retail and hospitality POS systems are targeted by malware designed to steal payment card data. Breaches can result in PCI fines, card replacement costs, and customer lawsuits."
      },
      {
        h3: "E-Commerce Attacks",
        title: "Online Store Compromise",
        description: "E-commerce platforms are targeted for customer account takeover, payment card theft, and fraudulent transactions. Magecart-style attacks inject malicious code into checkout pages."
      },
      {
        h3: "Ransomware",
        title: "Retail Ransomware",
        description: "Small retailers are increasingly targeted by ransomware. Encrypted POS systems and inventory databases force businesses offline during critical trading periods."
      }
    ],
    faqsH2: "Cyber Security FAQs for Armadale Businesses",
    faqs: [
      {
        question: "What is PCI DSS and do I need to comply?",
        answer: "PCI DSS (Payment Card Industry Data Security Standard) is a security standard for businesses that accept card payments. All businesses accepting cards must comply, with requirements varying by transaction volume. Non-compliance can result in fines and liability for card fraud. ADL99 provides PCI compliance assessments for Armadale retailers."
      },
      {
        question: "How can boutique retailers protect customer payment data?",
        answer: "Use PCI-compliant payment terminals, never store full card numbers, implement network segmentation, use encrypted processing, maintain security patches, and conduct regular security assessments. ADL99 specializes in boutique retail payment security."
      },
      {
        question: "What are my privacy obligations if I collect customer data?",
        answer: "Under the Privacy Act, you must: implement reasonable security, only collect necessary data, inform customers how data is used, protect data from unauthorized access, and notify OAIC and affected customers if a breach occurs. ADL99 provides retail privacy compliance support."
      },
      {
        question: "How much does retail cyber security cost?",
        answer: "PCI compliance assessment and basic security implementation typically starts from $3,000-$5,000 for small retailers. Ongoing security monitoring and support from $400/month. ADL99 provides transparent fixed-price packages for retail businesses."
      }
    ],
    nearbySuburbs: [
      { name: "Malvern", postcode: "3144", slug: "malvern" },
      { name: "Prahran", postcode: "3181", slug: "prahran" },
      { name: "Toorak", postcode: "3142", slug: "toorak" },
      { name: "Camberwell", postcode: "3124", slug: "camberwell" }
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
