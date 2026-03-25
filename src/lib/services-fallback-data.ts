// SEO-optimized fallback content for service pages
// Based on: ADL99 - SEO - H1 H2 H3 Titles.csv

export interface ServiceFallbackData {
  slug: string;
  heroHeadline: string;
  heroSubheadline: string;
  introTitle?: string; // H2 for intro section
  introContent?: string; // HTML content for intro section
  painPointsTitle: string;
  benefitsTitle: string;
  rightForYouTitle: string;
  faqTitle: string;
  painPoints: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  benefits: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  rightForYou: Array<{ item: string }>;
  whatsIncluded: Array<{ item: string }>;
  formBenefits: Array<{ benefit: string }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const servicesFallbackData: Record<string, ServiceFallbackData> = {
  "cyber-maturity": {
    slug: "cyber-maturity",
    heroHeadline: "Know Where You Stand",
    heroSubheadline: "Melbourne-based cyber maturity assessments that benchmark your security against NIST, ISO 27001, and the Essential Eight — giving you a clear, prioritised roadmap for improvement.",
    introTitle: "Cyber Maturity Assessment Services in Melbourne & Australia",
    introContent: "<p>ADL99 conducts comprehensive cyber maturity assessments for Melbourne businesses and organisations across Australia. We evaluate your current security posture against industry frameworks and deliver a plain-English report with prioritised actions — so you know exactly what to fix, in what order, and why.</p>",
    painPointsTitle: "Cybersecurity Challenges Our Melbourne Assessment Team Solves",
    benefitsTitle: "Benefits of a Cyber Maturity Assessment",
    rightForYouTitle: "Is a Cyber Maturity Assessment Right for Your Business?",
    faqTitle: "Cyber Maturity Assessment FAQ",
    painPoints: [
      {
        icon: "AlertCircle",
        title: "Unknown Vulnerabilities",
        description: "Not knowing where your security gaps are"
      },
      {
        icon: "Clock",
        title: "Compliance Deadlines",
        description: "Struggling to meet regulatory requirements"
      },
      {
        icon: "DollarSign",
        title: "Budget Allocation",
        description: "Difficulty prioritizing security investments"
      }
    ],
    benefits: [
      {
        icon: "CheckCircle",
        title: "Clear Security Baseline",
        description: "Understand your current security posture with detailed benchmarking"
      },
      {
        icon: "Target",
        title: "Prioritized Recommendations",
        description: "Get actionable steps ranked by risk and impact"
      },
      {
        icon: "FileText",
        title: "Compliance Alignment",
        description: "Ensure alignment with industry frameworks and regulations"
      },
      {
        icon: "TrendingUp",
        title: "Measurable Progress",
        description: "Track improvements and demonstrate security maturity over time"
      }
    ],
    rightForYou: [
      { item: "You need to understand your current security posture" },
      { item: "You're preparing for compliance audits" },
      { item: "You want to prioritize security investments" },
      { item: "You're concerned about unknown vulnerabilities" }
    ],
    whatsIncluded: [
      { item: "Comprehensive security assessment" },
      { item: "Gap analysis against industry frameworks" },
      { item: "Prioritized remediation roadmap" },
      { item: "Executive summary report" },
      { item: "Detailed technical findings" }
    ],
    formBenefits: [
      { benefit: "Free 30-minute consultation" },
      { benefit: "No-obligation assessment quote" },
      { benefit: "Clear timeline and deliverables" }
    ],
    faqs: [
      {
        question: "How long does an assessment take?",
        answer: "Typically 2-4 weeks depending on organization size and complexity."
      },
      {
        question: "What frameworks do you assess against?",
        answer: "We benchmark against NIST, ISO 27001, Essential Eight, and industry-specific standards."
      },
      {
        question: "Will this disrupt our operations?",
        answer: "No, assessments are designed to be minimally invasive to daily operations."
      }
    ]
  },

  "technical-advisory": {
    slug: "technical-advisory",
    heroHeadline: "Expert Security Guidance",
    heroSubheadline: "Navigate complex cybersecurity decisions with confidence — backed by Melbourne's experienced security advisors.",
    introTitle: "Cybersecurity Technical Advisory Services in Melbourne & Australia",
    introContent: "<p>ADL99's Melbourne-based security advisors help Australian businesses make informed cybersecurity decisions — from architecture reviews and technology evaluations to policy development and regulatory compliance. We translate complex security requirements into clear, actionable guidance your leadership team can act on.</p>",
    painPointsTitle: "Security Challenges Our Melbourne Advisory Team Addresses",
    benefitsTitle: "Benefits of Cybersecurity Technical Advisory",
    rightForYouTitle: "Is This Right For You?",
    faqTitle: "Cybersecurity Advisory Services FAQ",
    painPoints: [
      {
        icon: "HelpCircle",
        title: "Complex Decisions",
        description: "Unsure which security technologies to invest in"
      },
      {
        icon: "FileText",
        title: "Policy Development",
        description: "Need help creating security policies and procedures"
      },
      {
        icon: "AlertCircle",
        title: "Emerging Threats",
        description: "Struggling to keep up with evolving threat landscape"
      }
    ],
    benefits: [
      {
        icon: "Brain",
        title: "Expert Insights",
        description: "Access to seasoned cybersecurity professionals"
      },
      {
        icon: "Compass",
        title: "Strategic Direction",
        description: "Clear guidance on security investments and priorities"
      },
      {
        icon: "Scale",
        title: "Risk-Based Decisions",
        description: "Make informed choices based on your risk profile"
      },
      {
        icon: "Users",
        title: "Flexible Engagement",
        description: "On-demand expertise without full-time hiring costs"
      }
    ],
    rightForYou: [
      { item: "You need expert guidance on security architecture" },
      { item: "You're evaluating new security technologies" },
      { item: "You need help developing security policies" },
      { item: "You want to understand emerging threats" }
    ],
    whatsIncluded: [
      { item: "Expert consultation sessions" },
      { item: "Technology evaluation and recommendations" },
      { item: "Policy and procedure development" },
      { item: "Risk assessment and prioritization" },
      { item: "Ongoing advisory support" }
    ],
    formBenefits: [
      { benefit: "Access to senior security experts" },
      { benefit: "Flexible engagement models" },
      { benefit: "Strategic insights tailored to your business" }
    ],
    faqs: [
      {
        question: "What topics do you advise on?",
        answer: "Architecture, risk management, compliance, vendor selection, and emerging threats."
      },
      {
        question: "How is advisory different from assessment?",
        answer: "Advisory is ongoing strategic guidance, while assessment is a point-in-time evaluation."
      }
    ]
  },

  "engineering-support": {
    slug: "engineering-support",
    heroHeadline: "Technical Security Implementation",
    heroSubheadline: "Hands-on cybersecurity engineering expertise from ADL99's Melbourne-based team — implementing and optimising your security infrastructure from the ground up.",
    introTitle: "Cybersecurity Engineering & Implementation Support in Melbourne",
    introContent: "<p>ADL99 provides hands-on cybersecurity engineering support for Melbourne businesses and Australian organisations — covering network defence, endpoint protection, cloud security, and SIEM deployment. We implement, configure, and optimise your security stack so it works as one cohesive defence.</p>",
    painPointsTitle: "Security Implementation Challenges We Solve",
    benefitsTitle: "Benefits of Cybersecurity Engineering Support",
    rightForYouTitle: "Is This Right For You?",
    faqTitle: "Cybersecurity Engineering Support FAQ",
    painPoints: [
      {
        icon: "Settings",
        title: "Complex Deployments",
        description: "Struggling to implement security technologies"
      },
      {
        icon: "AlertCircle",
        title: "Misconfigured Tools",
        description: "Security tools not working as expected"
      },
      {
        icon: "Layers",
        title: "Integration Issues",
        description: "Difficulty getting systems to work together"
      }
    ],
    benefits: [
      {
        icon: "Wrench",
        title: "Hands-On Implementation",
        description: "Expert deployment and configuration of security tools"
      },
      {
        icon: "Zap",
        title: "Optimised Performance",
        description: "Ensure your security stack works at peak efficiency"
      },
      {
        icon: "Layers",
        title: "Integrated Defense",
        description: "Coordinated security across all your systems"
      },
      {
        icon: "CheckCircle",
        title: "Proven Expertise",
        description: "Vendor-certified engineers with real-world experience"
      }
    ],
    rightForYou: [
      { item: "You need help implementing security technologies" },
      { item: "Your security tools aren't working as expected" },
      { item: "You want to optimise your security stack" },
      { item: "You need integration support" }
    ],
    whatsIncluded: [
      { item: "Security tool deployment and configuration" },
      { item: "Integration and optimization services" },
      { item: "Performance tuning and monitoring setup" },
      { item: "Documentation and knowledge transfer" },
      { item: "Ongoing technical support" }
    ],
    formBenefits: [
      { benefit: "Experienced security engineers" },
      { benefit: "Vendor-agnostic approach" },
      { benefit: "Project-based or ongoing support" }
    ],
    faqs: [
      {
        question: "What technologies do you support?",
        answer: "Firewalls, endpoint protection, SIEM, cloud security, identity management, and more."
      },
      {
        question: "Do you provide ongoing support?",
        answer: "Yes, we offer both project-based and ongoing managed support options."
      }
    ]
  },

  "cyber-awareness": {
    slug: "cyber-awareness",
    heroHeadline: "Build a Human Firewall",
    heroSubheadline: "Turn your biggest vulnerability into your strongest defence — with cyber awareness training designed for Melbourne businesses and Australian workplaces.",
    introTitle: "Cyber Security Awareness Training for Melbourne & Australian Businesses",
    introContent: "<p>ADL99 delivers tailored cyber awareness training programs for Melbourne teams and Australian organisations — including phishing simulations, interactive workshops, and industry-specific security modules. We make security training practical, engaging, and measurable so your staff become your first line of defence.</p>",
    painPointsTitle: "Why Your Staff Are Your Biggest Cybersecurity Risk",
    benefitsTitle: "Benefits of Cyber Awareness Training",
    rightForYouTitle: "Is This Right For You?",
    faqTitle: "Cyber Awareness Training FAQ",
    painPoints: [
      {
        icon: "UserX",
        title: "Human Error",
        description: "95% of breaches involve human error"
      },
      {
        icon: "Mail",
        title: "Phishing Attacks",
        description: "Employees falling for social engineering"
      },
      {
        icon: "HelpCircle",
        title: "Lack of Awareness",
        description: "Staff don't know security best practices"
      }
    ],
    benefits: [
      {
        icon: "Users",
        title: "Human Firewall",
        description: "Transform employees into security-conscious team members"
      },
      {
        icon: "Mail",
        title: "Phishing Resistance",
        description: "Dramatically reduce successful phishing attacks"
      },
      {
        icon: "AlertTriangle",
        title: "Incident Awareness",
        description: "Staff know how to respond when something goes wrong"
      },
      {
        icon: "TrendingUp",
        title: "Compliance Ready",
        description: "Meet security awareness training requirements for regulations"
      }
    ],
    rightForYou: [
      { item: "Your employees handle sensitive data" },
      { item: "You've experienced phishing attempts" },
      { item: "Staff aren't aware of security best practices" },
      { item: "You want to reduce human error risks" }
    ],
    whatsIncluded: [
      { item: "Customised training programs" },
      { item: "Phishing simulation campaigns" },
      { item: "Interactive workshops" },
      { item: "Ongoing awareness materials" },
      { item: "Training effectiveness reporting" }
    ],
    formBenefits: [
      { benefit: "Engaging, practical training" },
      { benefit: "Customised to your industry" },
      { benefit: "Measurable results" }
    ],
    faqs: [
      {
        question: "How long are training sessions?",
        answer: "Sessions range from 1-hour awareness talks to full-day workshops depending on depth required."
      },
      {
        question: "Can training be customised for our industry?",
        answer: "Absolutely. We tailor content to your industry's specific threats and compliance requirements."
      },
      {
        question: "Do you offer phishing simulations?",
        answer: "Yes, we provide realistic phishing simulations to test and reinforce training."
      }
    ]
  },

  "vciso": {
    slug: "vciso",
    heroHeadline: "Executive Security Leadership",
    heroSubheadline: "Executive-level cybersecurity leadership, without the executive price tag — from ADL99's Melbourne-based virtual CISO team.",
    introTitle: "Virtual CISO (vCISO) Services for Melbourne & Australian Businesses",
    introContent: "<p>ADL99's vCISO service gives Melbourne businesses and Australian organisations access to senior cybersecurity leadership on a flexible, cost-effective basis. Our virtual CISOs provide strategic oversight, board-level reporting, governance, and vendor management — everything a full-time CISO delivers, at a fraction of the cost.</p>",
    painPointsTitle: "Why Melbourne Businesses Need a Virtual CISO",
    benefitsTitle: "Benefits of a Virtual CISO Service",
    rightForYouTitle: "Is a Virtual CISO Right for Your Melbourne Business?",
    faqTitle: "Virtual CISO (vCISO) Services FAQ",
    painPoints: [
      {
        icon: "DollarSign",
        title: "Full-Time CISO Cost",
        description: "Can't justify $300K+ for a full-time security executive"
      },
      {
        icon: "BarChart",
        title: "Lack of Strategy",
        description: "No long-term security roadmap or governance"
      },
      {
        icon: "MessageSquare",
        title: "Board Questions",
        description: "Struggling to communicate security to leadership"
      }
    ],
    benefits: [
      {
        icon: "DollarSign",
        title: "Cost-Effective Leadership",
        description: "Executive expertise at a fraction of full-time cost"
      },
      {
        icon: "BarChart",
        title: "Strategic Oversight",
        description: "Long-term security planning and governance"
      },
      {
        icon: "Users",
        title: "Board Communication",
        description: "Clear security reporting for leadership and board"
      },
      {
        icon: "Shield",
        title: "Program Management",
        description: "End-to-end oversight of your security initiatives"
      }
    ],
    rightForYou: [
      { item: "You need executive security leadership" },
      { item: "A full-time CISO isn't cost-effective" },
      { item: "You need board-level security reporting" },
      { item: "You want strategic security planning" }
    ],
    whatsIncluded: [
      { item: "Strategic security program management" },
      { item: "Board and executive reporting" },
      { item: "Vendor management and evaluation" },
      { item: "Policy and governance development" },
      { item: "Regulatory compliance oversight" }
    ],
    formBenefits: [
      { benefit: "Flexible engagement levels" },
      { benefit: "Senior security expertise" },
      { benefit: "Board-ready reporting" }
    ],
    faqs: [
      {
        question: "How much time does a vCISO dedicate to us?",
        answer: "Engagement levels vary from a few hours per week to several days per month based on your needs."
      },
      {
        question: "Will the vCISO attend board meetings?",
        answer: "Yes, our vCISOs can present to boards and provide executive-level security reporting."
      },
      {
        question: "How does pricing work?",
        answer: "We offer flexible retainer arrangements based on the level of involvement required."
      }
    ]
  }
};
