// All website content for WordPress migration
// This data mirrors exactly what's displayed on the React frontend
// Field names match ACF field definitions in wordpress/acf-page-fields-registration.php

export interface ServiceData {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  acf: {
    icon: string;
    shortDescription: string;
    isAccent?: boolean;
    heroHeadline?: string;
    heroSubheadline?: string;
    benefits: Array<{ icon: string; title: string; description: string }>;
    painPoints: Array<{ icon: string; title: string; description: string }>;
    rightForYou?: Array<{ item: string }>;
    whatsIncluded?: Array<{ item: string }>;
    formBenefits?: Array<{ benefit: string }>;
    faqs: Array<{ question: string; answer: string }>;
  };
}

export interface IndustryData {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  acf: {
    icon: string;
    shortDescription: string;
    heroHeadline: string;
    heroSubheadline: string;
    heroDescription?: string;
    challenges: Array<{ icon: string; title: string; description: string; impact?: string }>;
    solutions: Array<{ icon?: string; title: string; description: string }>;
    statistics: Array<{ value: string; label: string; source: string }>;
    painPoints: Array<{ icon: string; title: string; description: string }>;
    faqs: Array<{ question: string; answer: string }>;
    whyChooseUs?: Array<{ item: string }>;
  };
}

export interface PageData {
  title: string;
  slug: string;
  content: string;
  acf: Record<string, unknown>;
}

// ============ SERVICES DATA ============
// ACF Fields: icon, shortDescription, isAccent, benefits[], painPoints[], faqs[]

export const servicesData: ServiceData[] = [
  {
    title: "Urgent Help",
    slug: "urgent-help",
    excerpt: "When disaster strikes, we're your emergency response team. Our rapid-response unit provides immediate incident response, breach containment, and crisis management.",
    content: `<p>Need immediate help with a cyber incident? Our emergency response team is available 24/7 to help you contain breaches, minimize damage, and recover quickly.</p>
<p>We understand that every minute counts during a cyber attack. Our rapid-response experts will guide you through the crisis with clear, actionable steps.</p>`,
    acf: {
      icon: "AlertTriangle",
      shortDescription: "When disaster strikes, we're your emergency response team. Our rapid-response unit provides immediate incident response, breach containment, and crisis management.",
      isAccent: true,
      heroHeadline: "Emergency Incident Response",
      heroSubheadline: "If you're experiencing a cyber attack or security breach, we're here to help immediately.",
      benefits: [
        { icon: "Clock", title: "24/7 Availability", description: "Our emergency response team is always on call" },
        { icon: "Zap", title: "Rapid Response", description: "We begin containment within hours of contact" },
        { icon: "Shield", title: "Expert Guidance", description: "Experienced incident responders guide you through the crisis" },
      ],
      painPoints: [
        { icon: "AlertCircle", title: "Active Breach", description: "Currently experiencing unauthorised access or data theft" },
        { icon: "Lock", title: "Ransomware", description: "Files encrypted and ransom demanded" },
        { icon: "Mail", title: "Compromised Email", description: "Business email compromise or phishing attack" },
      ],
      faqs: [
        { question: "How quickly can you respond?", answer: "We aim to begin incident response within hours of your call. For active incidents, time is critical." },
        { question: "What should I do right now?", answer: "Don't turn off systems unless data is actively being destroyed. Document what you see. Call us immediately." },
      ],
    },
  },
  {
    title: "Cyber Maturity Assessments",
    slug: "cyber-maturity-assessments",
    excerpt: "Know exactly where you stand—and where you need to go.",
    content: `<p>Our Cyber Maturity Assessment provides a comprehensive evaluation of your organization's security capabilities, helping you understand where you stand and what steps to take next.</p>
<p>We benchmark your security practices against frameworks like NIST, ISO 27001, and the Australian Essential Eight, giving you a clear roadmap for improvement.</p>`,
    acf: {
      icon: "Search",
      shortDescription: "We evaluate your organization's current cybersecurity posture against industry standards and best practices, identifying strengths, weaknesses, and actionable areas for improvement.",
      heroHeadline: "Know Where You Stand",
      heroSubheadline: "Comprehensive security assessments that give you a clear roadmap for improvement.",
      benefits: [
        { icon: "CheckCircle", title: "Clear Security Baseline", description: "Understand your current security posture with detailed benchmarking" },
        { icon: "Target", title: "Prioritized Recommendations", description: "Get actionable steps ranked by risk and impact" },
        { icon: "FileText", title: "Compliance Alignment", description: "Ensure alignment with industry frameworks and regulations" },
      ],
      painPoints: [
        { icon: "AlertCircle", title: "Unknown Vulnerabilities", description: "Not knowing where your security gaps are" },
        { icon: "Clock", title: "Compliance Deadlines", description: "Struggling to meet regulatory requirements" },
        { icon: "DollarSign", title: "Budget Allocation", description: "Difficulty prioritizing security investments" },
      ],
      rightForYou: [
        { item: "You need to understand your current security posture" },
        { item: "You're preparing for compliance audits" },
        { item: "You want to prioritize security investments" },
        { item: "You're concerned about unknown vulnerabilities" },
      ],
      whatsIncluded: [
        { item: "Comprehensive security assessment" },
        { item: "Gap analysis against industry frameworks" },
        { item: "Prioritized remediation roadmap" },
        { item: "Executive summary report" },
        { item: "Detailed technical findings" },
      ],
      formBenefits: [
        { benefit: "Free 30-minute consultation" },
        { benefit: "No-obligation assessment quote" },
        { benefit: "Clear timeline and deliverables" },
      ],
      faqs: [
        { question: "How long does an assessment take?", answer: "Typically 2-4 weeks depending on organization size and complexity." },
        { question: "What frameworks do you assess against?", answer: "We benchmark against NIST, ISO 27001, Essential Eight, and industry-specific standards." },
        { question: "Will this disrupt our operations?", answer: "No, assessments are designed to be minimally invasive to daily operations." },
      ],
    },
  },
  {
    title: "Technical Advisory Services",
    slug: "technical-advisory",
    excerpt: "Expert guidance to navigate complex security decisions with confidence.",
    content: `<p>Make informed cybersecurity decisions with expert guidance. Our Technical Advisory Services provide strategic insights on architecture, risk management, and compliance.</p>
<p>Whether you're evaluating new security technologies, developing policies, or navigating regulatory requirements, our advisors bring clarity to complex decisions.</p>`,
    acf: {
      icon: "Lightbulb",
      shortDescription: "Our experts provide strategic guidance on cybersecurity architecture, risk management, compliance, and emerging threats to help you make informed decisions.",
      heroHeadline: "Expert Security Guidance",
      heroSubheadline: "Navigate complex security decisions with confidence.",
      benefits: [
        { icon: "Brain", title: "Expert Insights", description: "Access to seasoned cybersecurity professionals" },
        { icon: "Compass", title: "Strategic Direction", description: "Clear guidance on security investments and priorities" },
        { icon: "Scale", title: "Risk-Based Decisions", description: "Make informed choices based on your risk profile" },
      ],
      painPoints: [
        { icon: "HelpCircle", title: "Complex Decisions", description: "Unsure which security technologies to invest in" },
        { icon: "FileText", title: "Policy Development", description: "Need help creating security policies and procedures" },
        { icon: "AlertCircle", title: "Emerging Threats", description: "Struggling to keep up with evolving threat landscape" },
      ],
      rightForYou: [
        { item: "You need expert guidance on security architecture" },
        { item: "You're evaluating new security technologies" },
        { item: "You need help developing security policies" },
        { item: "You want to understand emerging threats" },
      ],
      whatsIncluded: [
        { item: "Expert consultation sessions" },
        { item: "Technology evaluation and recommendations" },
        { item: "Policy and procedure development" },
        { item: "Risk assessment and prioritization" },
        { item: "Ongoing advisory support" },
      ],
      formBenefits: [
        { benefit: "Access to senior security experts" },
        { benefit: "Flexible engagement models" },
        { benefit: "Strategic insights tailored to your business" },
      ],
      faqs: [
        { question: "What topics do you advise on?", answer: "Architecture, risk management, compliance, vendor selection, and emerging threats." },
        { question: "How is advisory different from assessment?", answer: "Advisory is ongoing strategic guidance, while assessment is a point-in-time evaluation." },
      ],
    },
  },
  {
    title: "Engineering Support",
    slug: "engineering-support",
    excerpt: "Hands-on expertise to implement and optimise your security infrastructure.",
    content: `<p>Get hands-on technical expertise for your security infrastructure. Our engineers help implement, configure, and optimise security technologies across your environment.</p>
<p>From network defense and endpoint protection to cloud security and SIEM deployment, we ensure your security tools work effectively together.</p>`,
    acf: {
      icon: "Shield",
      shortDescription: "We deliver hands-on technical support for implementing and optimizing security technologies, including network defense, endpoint protection, and cloud security.",
      heroHeadline: "Technical Security Implementation",
      heroSubheadline: "Hands-on expertise to implement and optimise your security infrastructure.",
      benefits: [
        { icon: "Wrench", title: "Hands-On Implementation", description: "Expert deployment and configuration of security tools" },
        { icon: "Zap", title: "Optimised Performance", description: "Ensure your security stack works at peak efficiency" },
        { icon: "Layers", title: "Integrated Defense", description: "Coordinated security across all your systems" },
      ],
      painPoints: [
        { icon: "Settings", title: "Complex Deployments", description: "Struggling to implement security technologies" },
        { icon: "AlertCircle", title: "Misconfigured Tools", description: "Security tools not working as expected" },
        { icon: "Layers", title: "Integration Issues", description: "Difficulty getting systems to work together" },
      ],
      rightForYou: [
        { item: "You need help implementing security technologies" },
        { item: "Your security tools aren't working as expected" },
        { item: "You want to optimise your security stack" },
        { item: "You need integration support" },
      ],
      whatsIncluded: [
        { item: "Security tool deployment and configuration" },
        { item: "Integration and optimization services" },
        { item: "Performance tuning and monitoring setup" },
        { item: "Documentation and knowledge transfer" },
        { item: "Ongoing technical support" },
      ],
      formBenefits: [
        { benefit: "Experienced security engineers" },
        { benefit: "Vendor-agnostic approach" },
        { benefit: "Project-based or ongoing support" },
      ],
      faqs: [
        { question: "What technologies do you support?", answer: "Firewalls, endpoint protection, SIEM, cloud security, identity management, and more." },
        { question: "Do you provide ongoing support?", answer: "Yes, we offer both project-based and ongoing managed support options." },
      ],
    },
  },
  {
    title: "Cyber Awareness Training",
    slug: "cyber-awareness-training",
    excerpt: "Turn your biggest vulnerability into your strongest defence.",
    content: `<p>Your employees are your first line of defense. Our Cyber Awareness Training transforms your team from a security vulnerability into a security asset.</p>
<p>Through engaging, practical training sessions, we teach your staff to recognize threats, respond appropriately, and maintain secure practices in their daily work.</p>`,
    acf: {
      icon: "BookOpen",
      shortDescription: "We design and deliver tailored training programs to educate employees on cyber risks, safe online practices, phishing prevention, and incident response.",
      heroHeadline: "Build a Human Firewall",
      heroSubheadline: "Turn your biggest vulnerability into your strongest defence.",
      benefits: [
        { icon: "Users", title: "Human Firewall", description: "Transform employees into security-conscious team members" },
        { icon: "Mail", title: "Phishing Resistance", description: "Dramatically reduce successful phishing attacks" },
        { icon: "AlertTriangle", title: "Incident Awareness", description: "Staff know how to respond when something goes wrong" },
      ],
      painPoints: [
        { icon: "UserX", title: "Human Error", description: "95% of breaches involve human error" },
        { icon: "Mail", title: "Phishing Attacks", description: "Employees falling for social engineering" },
        { icon: "HelpCircle", title: "Lack of Awareness", description: "Staff don't know security best practices" },
      ],
      rightForYou: [
        { item: "Your employees handle sensitive data" },
        { item: "You've experienced phishing attempts" },
        { item: "Staff aren't aware of security best practices" },
        { item: "You want to reduce human error risks" },
      ],
      whatsIncluded: [
        { item: "Customised training programs" },
        { item: "Phishing simulation campaigns" },
        { item: "Interactive workshops" },
        { item: "Ongoing awareness materials" },
        { item: "Training effectiveness reporting" },
      ],
      formBenefits: [
        { benefit: "Engaging, practical training" },
        { benefit: "Customised to your industry" },
        { benefit: "Measurable results" },
      ],
      faqs: [
        { question: "How long are training sessions?", answer: "Sessions range from 1-hour awareness talks to full-day workshops depending on depth required." },
        { question: "Can training be customised for our industry?", answer: "Absolutely. We tailor content to your industry's specific threats and compliance requirements." },
        { question: "Do you offer phishing simulations?", answer: "Yes, we provide realistic phishing simulations to test and reinforce training." },
      ],
    },
  },
  {
    title: "vCISO Services",
    slug: "vciso",
    excerpt: "Executive security leadership without the executive price tag.",
    content: `<p>Access senior cybersecurity leadership without the executive salary. Our Virtual CISO service provides strategic security oversight, governance, and program management tailored to your organization's needs.</p>
<p>Our vCISOs become an extension of your leadership team, providing board-level reporting, vendor management, and security strategy development.</p>`,
    acf: {
      icon: "Briefcase",
      shortDescription: "Get executive-level cybersecurity leadership without the full-time cost. Our Virtual CISOs provide strategic oversight, governance, and security program management.",
      heroHeadline: "Executive Security Leadership",
      heroSubheadline: "Executive security leadership without the executive price tag.",
      benefits: [
        { icon: "DollarSign", title: "Cost-Effective Leadership", description: "Executive expertise at a fraction of full-time cost" },
        { icon: "BarChart", title: "Strategic Oversight", description: "Long-term security planning and governance" },
        { icon: "Users", title: "Board Communication", description: "Clear security reporting for leadership and board" },
      ],
      painPoints: [
        { icon: "DollarSign", title: "Full-Time CISO Cost", description: "Can't justify $300K+ for a full-time security executive" },
        { icon: "BarChart", title: "Lack of Strategy", description: "No long-term security roadmap or governance" },
        { icon: "MessageSquare", title: "Board Questions", description: "Struggling to communicate security to leadership" },
      ],
      rightForYou: [
        { item: "You need executive security leadership" },
        { item: "A full-time CISO isn't cost-effective" },
        { item: "You need board-level security reporting" },
        { item: "You want strategic security planning" },
      ],
      whatsIncluded: [
        { item: "Strategic security program management" },
        { item: "Board and executive reporting" },
        { item: "Vendor management and evaluation" },
        { item: "Policy and governance development" },
        { item: "Regulatory compliance oversight" },
      ],
      formBenefits: [
        { benefit: "Flexible engagement levels" },
        { benefit: "Senior security expertise" },
        { benefit: "Board-ready reporting" },
      ],
      faqs: [
        { question: "How much time does a vCISO dedicate to us?", answer: "Engagement levels vary from a few hours per week to several days per month based on your needs." },
        { question: "Will the vCISO attend board meetings?", answer: "Yes, our vCISOs can present to boards and provide executive-level security reporting." },
        { question: "How does pricing work?", answer: "We offer flexible retainer arrangements based on the level of involvement required." },
      ],
    },
  },
];

// ============ INDUSTRIES DATA ============
// Full content from static industry pages

export const industriesData: IndustryData[] = [
  {
    title: "Cybersecurity for Australian Law Firms",
    slug: "law-firms",
    excerpt: "Protecting attorney-client privilege in the digital age.",
    content: `<p>Law firms handle some of the most sensitive information imaginable—client communications, case strategies, financial records, and privileged documents. This makes legal practices prime targets for cybercriminals.</p>
<p>ADL99 understands the unique challenges facing law firms. We help you protect client confidentiality, maintain legal privilege, and meet your ethical obligations while defending against increasingly sophisticated cyber threats.</p>`,
    acf: {
      icon: "Scale",
      shortDescription: "Specialized cybersecurity solutions for legal practices, ensuring client confidentiality and regulatory compliance.",
      heroHeadline: "Melbourne Law Firms Need Specialised Cyber Protection—Here's Why",
      heroSubheadline: "Legal practices hold privileged communications, case files, and confidential client information that cybercriminals actively target. One breach can destroy decades of trust and expose you to malpractice claims.",
      heroDescription: "ADL99 protects law firms across Melbourne and Australia with security solutions built specifically for legal practice management software, document systems, and email platforms. We understand bar association obligations, attorney-client privilege, and the unique threats facing legal professionals.",
      statistics: [
        { value: "29%", label: "of law firms experienced a security breach in 2023", source: "ABA Legal Technology Survey" },
        { value: "$4.47M", label: "average cost of a data breach in professional services", source: "IBM Security Report 2023" },
        { value: "76%", label: "of cyber attacks on law firms start with phishing emails", source: "Verizon DBIR 2023" },
        { value: "92%", label: "of Australian law firms handle sensitive client data digitally", source: "Law Council of Australia" },
      ],
      challenges: [
        { icon: "FileText", title: "Client Confidentiality at Risk", description: "Legal documents contain highly sensitive information. A single breach can expose privileged communications, settlement details, and confidential client matters—destroying trust built over years.", impact: "Breaches can lead to malpractice claims and regulatory sanctions" },
        { icon: "Lock", title: "Attorney-Client Privilege Threats", description: "Digital systems create multiple access points to privileged information. Without proper controls, this fundamental legal protection becomes vulnerable to compromise.", impact: "Compromised privilege can invalidate case strategies and evidence" },
        { icon: "Users", title: "Complex Compliance Requirements", description: "Law firms must navigate bar association rules, privacy laws, and client-specific security requirements—often simultaneously across multiple jurisdictions.", impact: "Non-compliance can result in disciplinary action and lost clients" },
        { icon: "Shield", title: "Targeted Ransomware Attacks", description: "Cybercriminals specifically target law firms knowing they hold valuable data and are under pressure to maintain operations. Firms pay an average of $1.27M in ransom.", impact: "Downtime costs law firms $700+ per hour in lost billable time" },
      ],
      painPoints: [
        { icon: "DollarSign", title: "Concerned About Cost?", description: "We understand legal practices operate on tight margins. Our solutions are scaled to your firm's size—from sole practitioners to large partnerships. Most firms see ROI within 6 months through reduced insurance premiums and avoided incidents." },
        { icon: "Clock", title: "Worried About Disruption?", description: "Billable hours are your livelihood. Our implementation process is designed around your workflow, with most security measures deployed outside business hours. We minimise disruption while maximising protection." },
        { icon: "AlertTriangle", title: "Think You're Too Small to Be Targeted?", description: "Small and mid-size firms are actually preferred targets—they often have valuable data but fewer defences. 43% of cyber attacks target businesses with fewer than 50 employees." },
      ],
      solutions: [
        { title: "Email Security & Phishing Protection", description: "Advanced filtering that blocks 99.9% of malicious emails before they reach your inbox. Includes impersonation detection for client communication." },
        { title: "Secure Document Management", description: "Encrypted file storage and sharing that maintains privilege while enabling collaboration with clients and co-counsel." },
        { title: "Access Control & Audit Logging", description: "Matter-level permissions ensure staff only access relevant files. Complete audit trails for compliance and evidence integrity." },
        { title: "Incident Response Planning", description: "Pre-planned protocols so you know exactly what to do if an incident occurs. Minimises damage and meets notification requirements." },
        { title: "Staff Security Training", description: "Practical training tailored for legal professionals. Learn to spot phishing, handle sensitive data, and maintain security without slowing down." },
        { title: "Compliance Gap Assessment", description: "Thorough review against bar association requirements, privacy laws, and client security expectations. Clear remediation roadmap." },
      ],
      faqs: [
        { question: "How quickly can you implement security measures for our firm?", answer: "Most firms are fully protected within 2-4 weeks. We prioritise critical protections like email security and access controls first, then build out comprehensive coverage. Emergency implementations for firms facing active threats can be completed in 48-72 hours." },
        { question: "Will cybersecurity measures slow down our daily operations?", answer: "Modern security is designed to be invisible. Single sign-on actually speeds up access to systems. Our solutions integrate with your existing practice management software—no extra steps or passwords to remember." },
        { question: "What happens if we experience a breach despite protections?", answer: "Our incident response service provides immediate support. We'll contain the threat, preserve evidence, assist with regulatory notifications, and guide communication with affected clients. Most importantly, we'll help you recover quickly and strengthen defences." },
        { question: "How do you ensure our client data remains confidential?", answer: "We operate under strict NDAs and never access client files without explicit permission. Our team holds security clearances and professional certifications. All our systems are encrypted and access-controlled." },
        { question: "Can you help us meet client security questionnaire requirements?", answer: "Absolutely. Many corporate clients now require law firms to demonstrate security standards. We help you complete security questionnaires accurately and implement any required controls to win and retain clients." },
      ],
      whyChooseUs: [
        { item: "Protect attorney-client privilege with matter-level access controls and audit trails" },
        { item: "Meet corporate client security questionnaire requirements to win and retain business" },
        { item: "Integrate seamlessly with practice management software without disrupting billable hours" },
        { item: "Navigate bar association rules, Privacy Act obligations, and jurisdictional requirements" },
        { item: "Respond within 48-72 hours for firms facing active threats or data breaches" },
      ],
    },
  },
  {
    title: "Cybersecurity for Australian Health Clinics",
    slug: "health-clinics",
    excerpt: "Protecting patient data while you protect patient health.",
    content: `<p>Healthcare providers are custodians of highly sensitive patient information. From medical records to payment details, health clinics must protect data while maintaining the accessibility needed for quality patient care.</p>
<p>ADL99 provides healthcare-specific cybersecurity solutions that balance security with operational efficiency, helping you meet privacy regulations while keeping your focus on patient outcomes.</p>`,
    acf: {
      icon: "Heart",
      shortDescription: "HIPAA-compliant cybersecurity assessments and solutions designed specifically for healthcare providers.",
      heroHeadline: "Australian Health Clinics Face Unique Privacy and Security Obligations",
      heroSubheadline: "Medical practices handle sensitive patient records, Medicare details, and health information worth 10x more than credit card data on the dark web. Healthcare is the #1 ransomware target—and attackers know you can't afford downtime.",
      heroDescription: "ADL99 delivers healthcare-specific cybersecurity that protects patient data, secures practice management systems, and ensures Australian Privacy Act compliance. We work with Best Practice, Medical Director, and all major clinical software platforms used across Melbourne and regional Victoria.",
      statistics: [
        { value: "13%", label: "of Australian healthcare breaches result in identity theft", source: "OAIC Notifiable Data Breaches Report" },
        { value: "$10.9M", label: "average cost of a healthcare data breach globally", source: "IBM Security Report 2023" },
        { value: "89%", label: "of healthcare organisations experienced a cyber attack in past year", source: "Ponemon Institute 2023" },
        { value: "58%", label: "of healthcare breaches involve insider threats", source: "Verizon DBIR 2023" },
      ],
      challenges: [
        { icon: "Shield", title: "Patient Data Under Constant Threat", description: "Medical records contain comprehensive personal information—Medicare numbers, health conditions, family history. This data is worth 10x more than credit card details on the dark web.", impact: "A single patient record sells for $250+ on the dark web" },
        { icon: "FileText", title: "Australian Privacy Act Compliance", description: "Healthcare providers must meet stringent requirements under the Privacy Act 1988 and Australian Privacy Principles. Non-compliance can result in significant penalties and mandatory breach notifications.", impact: "Penalties up to $2.22M for serious privacy breaches" },
        { icon: "Monitor", title: "Connected Medical Device Risks", description: "From diagnostic equipment to patient monitors, connected devices expand your attack surface. Many medical devices run outdated software that can't be easily patched.", impact: "70% of medical devices run unsupported operating systems" },
        { icon: "Lock", title: "Ransomware Targeting Healthcare", description: "Healthcare is the #1 ransomware target. Attackers know clinics can't afford downtime—patient care depends on system access. This pressure makes healthcare providers more likely to pay.", impact: "Average healthcare ransomware payment: $1.27M" },
      ],
      painPoints: [
        { icon: "DollarSign", title: "Tight Operating Budgets?", description: "We understand healthcare margins are slim. Our solutions scale to your practice size, and we prioritise high-impact protections first. Most clinics see cyber insurance savings that offset our fees within the first year." },
        { icon: "Clock", title: "Can't Afford System Downtime?", description: "Patient care comes first—always. Our implementations are scheduled around your operations, often completed outside clinic hours. We ensure zero disruption to appointments and patient services." },
        { icon: "Users", title: "Staff Already Overwhelmed?", description: "Your team is focused on patient care, not IT. Our training is practical and brief—15-minute modules that fit between appointments. We make security second nature, not a burden." },
      ],
      solutions: [
        { title: "Privacy Act Compliance Assessment", description: "Comprehensive review against Australian Privacy Principles with clear gap analysis and remediation roadmap." },
        { title: "Medical Device Security Audit", description: "Identify vulnerabilities in connected equipment, implement network segmentation, and establish monitoring protocols." },
        { title: "Electronic Health Record Protection", description: "Secure your practice management system with encryption, access controls, and comprehensive audit logging." },
        { title: "Patient Data Encryption", description: "End-to-end encryption for data at rest and in transit—protecting information from theft even if systems are breached." },
        { title: "Telehealth Security", description: "Secure video consultations and remote patient monitoring that meet privacy requirements and protect sensitive conversations." },
        { title: "Incident Response Planning", description: "Pre-planned protocols for breach response, including mandatory notification procedures under the Notifiable Data Breaches scheme." },
      ],
      faqs: [
        { question: "How do you ensure security measures don't interfere with patient care?", answer: "Patient care is paramount. We design security that's invisible to clinical workflows. Single sign-on speeds up access, mobile device management keeps your team connected, and all implementations are scheduled outside patient hours. We test thoroughly before going live." },
        { question: "What are our obligations under the Notifiable Data Breaches scheme?", answer: "If you experience a data breach likely to cause serious harm, you must notify affected individuals and the OAIC. We help you establish processes to detect breaches quickly, assess their severity, and meet notification requirements within the mandatory timeframes." },
        { question: "Can you help secure our telehealth platform?", answer: "Absolutely. We review your telehealth solution's security, ensure it meets privacy requirements, and implement additional protections like waiting rooms, session encryption, and secure file sharing for pathology results and referrals." },
        { question: "How do you handle security for visiting practitioners?", answer: "We implement role-based access that gives visiting doctors appropriate access to relevant patient records only. All access is logged, and temporary credentials are automatically revoked after their visiting period ends." },
        { question: "What about securing our practice management software?", answer: "We work with all major Australian practice management systems including Best Practice, Medical Director, and Genie. We implement vendor-recommended security settings, ensure proper backup configurations, and add additional monitoring layers." },
      ],
      whyChooseUs: [
        { item: "Secure Best Practice, Medical Director, Genie, and all major clinical software platforms" },
        { item: "Implement security outside clinic hours to ensure zero disruption to patient appointments" },
        { item: "Meet Privacy Act 1988, Notifiable Data Breaches scheme, and ethical approval requirements" },
        { item: "Audit and segment connected medical devices to protect legacy diagnostic equipment" },
        { item: "Deploy 15-minute security training modules that fit between patient consultations" },
      ],
    },
  },
  {
    title: "Cybersecurity for Accounting Practices",
    slug: "accounting",
    excerpt: "Safeguarding financial records and client information from cyber threats.",
    content: `<p>Accounting firms are treasure troves of financial data—tax returns, financial statements, banking details, and personal identification information. Cybercriminals know this, making accountants frequent targets.</p>
<p>ADL99 helps accounting practices implement robust security measures that protect client financial data, meet professional obligations, and defend against business email compromise and other common attack vectors.</p>`,
    acf: {
      icon: "Calculator",
      shortDescription: "Safeguarding financial records and client information from cyber threats and fraud.",
      heroHeadline: "Why Accounting Firms Are Prime Targets for Business Email Compromise",
      heroSubheadline: "Tax returns, financial statements, banking credentials—accounting practices hold everything cybercriminals need for identity theft and fraud. During tax season, your team faces heightened phishing attacks when they're most vulnerable.",
      heroDescription: "ADL99 secures accounting firms with protections designed for Xero, MYOB, and other platforms you rely on daily. We implement email security, client portal encryption, and backup systems that protect your practice while meeting Tax Practitioners Board and APES 110 obligations.",
      statistics: [
        { value: "60%", label: "of accounting firms experienced a cyber attack in the past year", source: "Journal of Accountancy, 2023" },
        { value: "$4.5M", label: "average cost of a data breach in financial services", source: "IBM Cost of Data Breach Report, 2023" },
        { value: "90%", label: "of breaches in financial services involve phishing", source: "Verizon DBIR, 2023" },
        { value: "43%", label: "of cyber attacks target small and medium businesses", source: "ACSC Annual Cyber Threat Report, 2023" },
      ],
      challenges: [
        { icon: "FileText", title: "Tax Season Vulnerability", description: "During peak tax periods, staff are under pressure and more susceptible to phishing attacks. Cybercriminals know this and ramp up their efforts during these high-stress times." },
        { icon: "Lock", title: "Client Financial Data at Risk", description: "You hold sensitive financial records including tax returns, bank details, and identity documents. A breach could expose your clients to identity theft and financial fraud." },
        { icon: "Users", title: "Third-Party Software Risks", description: "Accounting firms rely on multiple software platforms for bookkeeping, payroll, and tax preparation. Each integration point is a potential vulnerability." },
        { icon: "Shield", title: "Professional Liability Exposure", description: "Data breaches can result in professional negligence claims, regulatory fines, and loss of your practising certificate. The reputational damage can be career-ending." },
      ],
      painPoints: [
        { icon: "DollarSign", title: "Budget Concerns?", description: "We understand small practices operate on tight margins. Our solutions are scaled to your firm's size, and we prioritise high-impact protections first." },
        { icon: "Clock", title: "Too Busy During Tax Season?", description: "We implement enhanced monitoring and refresher training before the rush begins, so your team can focus on clients while security runs in the background." },
        { icon: "HelpCircle", title: "Unsure Where to Start?", description: "Our free consultation will identify your most critical security gaps and provide a clear, prioritised action plan." },
      ],
      solutions: [
        { title: "Financial Data Encryption", description: "Military-grade encryption for all client financial records at rest and in transit" },
        { title: "Secure Client Portals", description: "Encrypted document exchange platforms that replace risky email attachments" },
        { title: "Tax Season Security Protocols", description: "Enhanced monitoring and staff training during high-risk periods" },
        { title: "Multi-Factor Authentication", description: "Mandatory MFA on all accounting software and client access points" },
        { title: "Phishing Simulation Training", description: "Regular testing to build staff resilience against social engineering" },
        { title: "Vendor Risk Assessment", description: "Security evaluation of all third-party software and cloud services" },
        { title: "Backup and Disaster Recovery", description: "Automated backups with rapid recovery to maintain business continuity" },
        { title: "Compliance Documentation", description: "Evidence of due diligence for TPB, APES 110, and Privacy Act requirements" },
      ],
      faqs: [
        { question: "Is cybersecurity really necessary for a small accounting practice?", answer: "Absolutely. In fact, small practices are increasingly targeted because cybercriminals know they often have weaker defences than large firms. With 43% of cyber attacks targeting small businesses, and the average breach costing over $4 million, the question isn't whether you can afford security—it's whether you can afford not to have it." },
        { question: "How do I protect client data during tax season when we're so busy?", answer: "Tax season requires proactive preparation, not reactive measures. We implement enhanced monitoring, refresher training for staff on phishing red flags, and automated security controls that work without adding to your workload." },
        { question: "What are my legal obligations around client data protection?", answer: "Australian accounting practices must comply with the Privacy Act 1988, the Notifiable Data Breaches scheme, and professional standards like APES 110. The Tax Practitioners Board also has expectations around information security." },
        { question: "How long does it take to implement proper cybersecurity?", answer: "Most accounting practices can implement foundational security measures within 2-4 weeks, with minimal disruption to daily operations. We prioritise changes that provide immediate protection." },
        { question: "What happens if we do experience a breach despite having security?", answer: "No security is 100% effective, which is why incident response planning is crucial. We help you prepare with documented response procedures, communication templates, and regulatory notification processes." },
        { question: "How do I know which accounting software is secure?", answer: "We conduct vendor security assessments to evaluate the platforms you use or are considering. This includes reviewing their security certifications, data handling practices, and track record." },
      ],
      whyChooseUs: [
        { item: "Protect Xero, MYOB, and tax software with MFA, encryption, and backup systems" },
        { item: "Deploy enhanced phishing protection before peak tax season when threats spike" },
        { item: "Document security controls for TPB audits, APES 110 compliance, and professional indemnity" },
        { item: "Replace risky email attachments with encrypted client portals for tax documents" },
        { item: "Implement within 2-4 weeks with minimal disruption to client deadlines and workflows" },
      ],
    },
  },
  {
    title: "Cybersecurity for Retail Chains",
    slug: "retail",
    excerpt: "Securing point-of-sale systems, customer data, and supply chain operations.",
    content: `<p>Retail businesses face unique cybersecurity challenges—from protecting point-of-sale systems and payment card data to securing e-commerce platforms and supply chain communications.</p>
<p>ADL99 helps retail chains build comprehensive security programs that protect customer trust, ensure PCI-DSS compliance, and defend against the evolving threats targeting the retail sector.</p>`,
    acf: {
      icon: "ShoppingCart",
      shortDescription: "Securing point-of-sale systems, customer data, and supply chain operations.",
      heroHeadline: "Retail Cyber Attacks Cost Melbourne Businesses $3.28M on Average",
      heroSubheadline: "Point-of-sale malware, payment card breaches, and ransomware attacks shut down stores and destroy customer trust overnight. Multi-location retailers face exponentially higher risk—one compromised store can expose your entire network.",
      heroDescription: "ADL99 protects retail chains with PCI DSS-compliant solutions for payment terminals, centralized security across multiple locations, and e-commerce platform hardening. From independent retailers to national chains, we secure the systems that keep Melbourne's retail sector running.",
      statistics: [
        { value: "24%", label: "of all data breaches occur in the retail sector", source: "Verizon DBIR, 2023" },
        { value: "$3.28M", label: "average cost of a retail data breach", source: "IBM Cost of Data Breach Report, 2023" },
        { value: "34%", label: "of Australian retailers experienced a cyber incident", source: "ACSC Annual Threat Report, 2023" },
        { value: "70%", label: "of attacks exploit weak vendor security", source: "Ponemon Institute, 2023" },
      ],
      challenges: [
        { icon: "CreditCard", title: "Payment Card Vulnerabilities", description: "Every card transaction is a potential entry point for attackers. POS malware, card skimmers, and payment processor breaches can expose thousands of customer payment details in a single incident." },
        { icon: "Store", title: "Multi-Location Complexity", description: "Managing security across multiple stores, each with their own networks, staff, and systems, creates significant blind spots. One compromised location can become a gateway to your entire network." },
        { icon: "Package", title: "E-commerce Attack Surface", description: "Online stores face constant threats from web application attacks, credential stuffing, and bot-driven fraud. The shift to omnichannel retail has dramatically expanded your attack surface." },
        { icon: "Truck", title: "Supply Chain Risks", description: "Your security is only as strong as your weakest vendor. Third-party integrations for inventory, logistics, and payment processing each introduce potential vulnerabilities into your environment." },
      ],
      painPoints: [
        { icon: "DollarSign", title: "PCI Compliance Overwhelming?", description: "We simplify PCI DSS compliance with clear gap assessments and prioritised remediation plans that won't break the bank." },
        { icon: "Store", title: "Too Many Locations to Manage?", description: "Centralised security management allows you to monitor and manage security across all locations from a single dashboard." },
        { icon: "AlertTriangle", title: "Worried About Customer Trust?", description: "A data breach can destroy customer loyalty built over years. We help you protect the trust your customers place in you." },
      ],
      solutions: [
        { title: "PCI DSS Compliance", description: "Full compliance support for Payment Card Industry Data Security Standards" },
        { title: "POS System Hardening", description: "Secure configuration of point-of-sale terminals and payment infrastructure" },
        { title: "Network Segmentation", description: "Isolate payment systems from other network traffic to limit breach impact" },
        { title: "E-commerce Security", description: "Web application firewalls, bot protection, and fraud detection for online stores" },
        { title: "Supply Chain Risk Assessment", description: "Evaluate and monitor the security posture of key vendors and partners" },
        { title: "Multi-Location Management", description: "Centralised security monitoring and policy enforcement across all stores" },
      ],
      faqs: [
        { question: "How do you help with PCI DSS compliance?", answer: "We provide comprehensive PCI compliance support, from initial gap assessment through remediation to annual compliance validation. We help you understand the requirements, implement necessary controls, and maintain compliance year-round." },
        { question: "Can you secure our e-commerce platform?", answer: "Yes, we implement web application firewalls, bot protection, and fraud detection for online stores. We also review your e-commerce platform's security configuration and recommend improvements." },
        { question: "How do you manage security across multiple locations?", answer: "We implement centralised security management that gives you visibility across all locations. This includes standardised security policies, remote monitoring, and automated threat detection." },
      ],
      whyChooseUs: [
        { item: "Achieve PCI DSS compliance for payment terminals and card processing infrastructure" },
        { item: "Monitor and manage security across multiple store locations from centralized dashboard" },
        { item: "Protect e-commerce platforms with web application firewalls, bot detection, and fraud prevention" },
        { item: "Segment payment networks to isolate POS systems and limit breach exposure" },
        { item: "Assess third-party vendors for supply chain risks in inventory, logistics, and payment systems" },
      ],
    },
  },
  {
    title: "Cybersecurity for Manufacturing",
    slug: "manufacturing",
    excerpt: "Protecting operational technology and intellectual property from cyber threats.",
    content: `<p>Modern manufacturing relies on connected systems—from industrial control systems to supply chain platforms. This connectivity brings efficiency but also exposes critical operations to cyber threats.</p>
<p>ADL99 helps manufacturers protect operational technology, intellectual property, and supply chain communications from the growing threats targeting the industrial sector.</p>`,
    acf: {
      icon: "Factory",
      shortDescription: "Protecting operational technology and intellectual property from cyber threats.",
      heroHeadline: "Manufacturing Cyber Attacks Have Increased 2.5x Since 2020",
      heroSubheadline: "Ransomware that shuts down production lines. Industrial espionage stealing designs and trade secrets. Supply chain attacks disrupting just-in-time operations. Australian manufacturers face sophisticated threats targeting both IT systems and operational technology.",
      heroDescription: "ADL99 specializes in OT/IT convergence security for Melbourne's manufacturing sector. We protect SCADA systems, PLCs, and legacy industrial equipment without requiring production downtime, while securing intellectual property and supply chain communications that keep your competitive edge.",
      statistics: [
        { value: "61%", label: "of manufacturing companies experienced a cyber attack", source: "IBM X-Force Threat Intelligence, 2023" },
        { value: "$4.24M", label: "average cost of a manufacturing data breach", source: "IBM Cost of Data Breach Report, 2023" },
        { value: "36%", label: "of industrial control systems are vulnerable", source: "Dragos Industrial Security Report, 2023" },
        { value: "2.5x", label: "increase in attacks on manufacturing since 2020", source: "ACSC Annual Threat Report, 2023" },
      ],
      challenges: [
        { icon: "Cpu", title: "OT/IT Convergence Risks", description: "Connecting operational technology to corporate networks creates new attack paths. Legacy industrial systems weren't designed for internet connectivity and often lack basic security controls." },
        { icon: "FileText", title: "Intellectual Property Theft", description: "Manufacturing designs, processes, and trade secrets are prime targets for industrial espionage. Competitors and nation-states actively seek to steal competitive advantages." },
        { icon: "Truck", title: "Supply Chain Vulnerabilities", description: "Just-in-time manufacturing depends on connected suppliers. A cyber attack on a key supplier can halt your production as effectively as an attack on your own systems." },
        { icon: "AlertTriangle", title: "Ransomware Production Halt", description: "Ransomware attacks on manufacturing increased 2.5x since 2020. Every hour of production downtime costs money—attackers know you're under pressure to pay." },
      ],
      painPoints: [
        { icon: "Settings", title: "Legacy Systems Can't Be Updated?", description: "We work with your existing OT systems, implementing network-level protections that secure legacy equipment without requiring updates to production systems." },
        { icon: "Clock", title: "Can't Afford Production Downtime?", description: "All security implementations are planned around your production schedule. We work during maintenance windows and test thoroughly before going live." },
        { icon: "DollarSign", title: "Security Seems Too Expensive?", description: "A single ransomware attack can cost millions in downtime and recovery. Our security investments are scaled to your risk profile and typically pay for themselves in avoided incidents." },
      ],
      solutions: [
        { title: "OT/IT Network Segmentation", description: "Isolate operational technology from corporate networks while maintaining necessary data flows" },
        { title: "Industrial Control System Security", description: "Specialised protections for PLCs, SCADA, and other industrial systems" },
        { title: "Intellectual Property Protection", description: "Data loss prevention and access controls for sensitive designs and trade secrets" },
        { title: "Supply Chain Security Assessment", description: "Evaluate and monitor the security posture of critical suppliers" },
        { title: "Incident Response for OT", description: "Specialised response procedures that prioritise production continuity" },
        { title: "Security Awareness for Manufacturing", description: "Training tailored to manufacturing environments and OT-specific threats" },
      ],
      faqs: [
        { question: "Can you secure our legacy industrial control systems?", answer: "Yes, we specialise in securing legacy OT systems. We implement network-level protections that don't require updates to production equipment, including network segmentation, monitoring, and access controls." },
        { question: "How do you protect our intellectual property?", answer: "We implement data loss prevention, access controls, and monitoring to protect sensitive designs and trade secrets. This includes controls on file sharing, USB devices, and network traffic analysis." },
        { question: "What if a cyber attack affects our production?", answer: "Our incident response procedures are designed for manufacturing environments. We prioritise production continuity while containing threats and preserving evidence for investigation." },
      ],
      whyChooseUs: [
        { item: "Secure SCADA, PLCs, and legacy industrial equipment without production downtime" },
        { item: "Segment OT networks from corporate IT while maintaining essential data flows" },
        { item: "Protect CAD files, manufacturing processes, and trade secrets from industrial espionage" },
        { item: "Work during scheduled maintenance windows to avoid disrupting production schedules" },
        { item: "Prioritize production continuity in incident response procedures for ransomware attacks" },
      ],
    },
  },
  {
    title: "Cybersecurity for Research Organisations",
    slug: "research",
    excerpt: "Protecting intellectual property and research data from targeted attacks.",
    content: `<p>Research organisations are prime targets for cyber espionage. Whether you're developing new technologies, conducting clinical trials, or pursuing commercially valuable innovations, your data is under threat.</p>
<p>ADL99 helps research institutions balance the open collaboration essential to research with the security needed to protect intellectual property, comply with funder requirements, and defend against nation-state threats.</p>`,
    acf: {
      icon: "Beaker",
      shortDescription: "Protecting intellectual property and research data from targeted attacks.",
      heroHeadline: "Nation-State Attacks on Australian Research Have Tripled Since 2020",
      heroSubheadline: "Foreign intelligence services systematically target university research, biotechnology innovations, and defence-related projects. $2.1 billion in intellectual property is stolen annually from Australian research institutions—often by adversaries with unlimited resources and patience.",
      heroDescription: "ADL99 protects research organisations with security tailored for collaborative environments. We balance open scientific exchange with IP protection, meet Defence Industry Security Program requirements, navigate export controls, and defend against sophisticated nation-state threats targeting Melbourne's world-class research sector.",
      statistics: [
        { value: "78%", label: "of universities experienced significant cyber attacks", source: "Australian Universities Cyber Survey, 2023" },
        { value: "$2.1B", label: "estimated annual IP theft from Australian research", source: "Parliamentary Joint Committee on Intelligence, 2023" },
        { value: "45%", label: "of research institutions lack formal cybersecurity programs", source: "CAUDIT Security Survey, 2023" },
        { value: "3x", label: "increase in nation-state attacks on research since 2020", source: "ACSC Annual Threat Report, 2023" },
      ],
      challenges: [
        { icon: "Shield", title: "Nation-State Targeting", description: "Foreign intelligence services actively target Australian research in areas like defence, biotechnology, and quantum computing. These sophisticated adversaries have significant resources and patience." },
        { icon: "Lock", title: "Balancing Openness and Security", description: "Research thrives on collaboration and open exchange. But this openness creates security challenges when working with international partners or publishing findings that may have dual-use applications." },
        { icon: "FileText", title: "Funder Security Requirements", description: "Defence-related and sensitive research increasingly comes with security requirements. Failure to meet these requirements can mean lost funding and damaged reputations." },
        { icon: "Users", title: "Transient Researcher Population", description: "Research teams change frequently as students and postdocs move on. Each departure is a potential data leak, and each arrival is a new access management challenge." },
      ],
      painPoints: [
        { icon: "Users", title: "Too Many Researchers to Manage?", description: "We implement identity and access management that scales with your research population. Automated onboarding and offboarding ensure appropriate access throughout employment lifecycle." },
        { icon: "Globe", title: "International Collaboration Concerns?", description: "We help you balance collaboration with security. Secure data sharing platforms, export control compliance, and risk assessments for international partnerships." },
        { icon: "FileText", title: "Funder Requirements Confusing?", description: "We translate security requirements into practical controls. From DISP to NIST, we help you meet funder expectations without disrupting research." },
      ],
      solutions: [
        { title: "Research Data Classification", description: "Identify and categorise research data by sensitivity, applying appropriate protections" },
        { title: "Secure Collaboration Platforms", description: "Enable safe data sharing with research partners while maintaining control and audit trails" },
        { title: "Identity and Access Management", description: "Scalable access controls that handle transient researcher populations" },
        { title: "Export Control Compliance", description: "Ensure compliance with DTCA and other export control requirements" },
        { title: "Nation-State Threat Protection", description: "Defences designed for sophisticated adversaries targeting intellectual property" },
        { title: "Funder Security Compliance", description: "Meet DISP, NIST, and other funder-specific security requirements" },
      ],
      faqs: [
        { question: "How do we balance open research collaboration with security?", answer: "Security and collaboration aren't mutually exclusive—they require thoughtful design. We help you implement tiered access controls that allow open sharing of appropriate data while protecting sensitive IP. Secure collaboration platforms enable work with partners while maintaining audit trails." },
        { question: "What are our obligations under export control laws?", answer: "Australia's Defence Trade Controls Act regulates technology with military or dual-use applications. If your research involves controlled technology, you may need permits for international collaboration or publication. We help you assess whether your research falls under export controls and implement required security measures." },
        { question: "How do we protect against nation-state cyber espionage?", answer: "Nation-state actors are sophisticated and persistent, but basic security hygiene stops many attacks. We focus on protecting high-value targets: securing research data storage, implementing strong authentication, monitoring for unusual access patterns, and training researchers to recognise social engineering." },
        { question: "What security measures do research funders require?", answer: "Requirements vary by funder and research type. The ARC and NHMRC have general data management expectations, while defence-related grants have specific security requirements. International funders may require compliance with their country's standards." },
        { question: "How do we secure research involving human subjects data?", answer: "Human research data requires compliance with the Privacy Act, ethical approval conditions, and often specific funder requirements. We implement de-identification where appropriate, secure storage with access controls, encrypted transmission for data sharing, and retention/destruction policies." },
        { question: "Can you help with security for international research partnerships?", answer: "Yes—international partnerships require careful security planning. We assess the security posture of partner institutions, implement appropriate data sharing controls, ensure compliance with relevant export controls and data sovereignty requirements, and establish incident response procedures that work across jurisdictions." },
      ],
      whyChooseUs: [
        { item: "Balance open scientific collaboration with IP protection using tiered access controls" },
        { item: "Navigate Defence Trade Controls Act requirements for dual-use research applications" },
        { item: "Meet DISP, NIST, ARC, and NHMRC security requirements for funded research projects" },
        { item: "Defend against nation-state espionage targeting biotechnology, defence, and quantum research" },
        { item: "Automate researcher onboarding/offboarding to manage transient student and postdoc populations" },
      ],
    },
  },
];

// ============ PAGES DATA ============
// Field names match ACF definitions in wordpress/acf-page-fields-registration.php

export const pagesData: PageData[] = [
  {
    title: "Home",
    slug: "home",
    content: "",
    acf: {
      heroSection: {
        headline: "Stop Worrying About Cyber Threats",
        headlineHighlight: "Get Peace of Mind",
        subheadline: "Feeling overwhelmed by cybersecurity? We simplify protection for Australian businesses, so you can focus on what you do best.",
        ctaText: "Speak With A Cyber Expert",
        ctaLink: "/contact",
        tagline: "ASSESS | DEFEND | LEVERAGE",
      },
      benefits: [
        { icon: "ShieldCheck", title: "Avoid Costly Breaches", description: "Protect your business from expensive security incidents" },
        { icon: "ShieldCheck", title: "Protect Client Data", description: "Keep your customers' information safe and secure" },
        { icon: "ShieldCheck", title: "Meet Compliance", description: "Stay compliant with industry regulations" },
      ],
      statsSection: {
        sectionTitle: "Don't Let Your Business Become Another Statistic",
        sectionDescription: "The threat landscape is evolving rapidly in Australia, but most attacks are preventable with the right security strategy.",
        stats: [
          { value: "38%", label: "Increase in Cyber Attacks", sublabel: "In the past year alone" },
          { value: "68%", label: "Of Businesses Experienced Attacks", sublabel: "In the last 12 months" },
          { value: "$4.88M", label: "Average Cost of a Data Breach", sublabel: "According to IBM Security" },
          { value: "83%", label: "Could Have Been Prevented", sublabel: "With proper security measures" },
        ],
        source: "Sources: Australian Cyber Security Centre (ACSC), IBM Security, Cybersecurity Ventures",
      },
      servicesSection: {
        sectionTitle: "Comprehensive Cyber Protection",
        sectionDescription: "From assessments to ongoing support, we offer a full range of cybersecurity services tailored to your needs.",
      },
      industriesSection: {
        sectionTitle: "Industries We Protect",
        sectionDescription: "Specialised security solutions for the sectors that need it most.",
      },
      processSection: {
        sectionTitle: "Your Path to Complete Protection",
        sectionDescription: "Getting started with professional cybersecurity protection is simple. Here's how we work together to secure your business.",
        steps: [
          { number: "1", title: "Get In Touch", description: "Schedule your free 30-minute consultation. We'll discuss your business, current security posture, and specific concerns—no pressure, just expert guidance." },
          { number: "2", title: "We Assess & Defend", description: "Our team conducts a comprehensive security assessment, identifies vulnerabilities, and implements robust protection measures tailored to your business needs." },
          { number: "3", title: "Peace of Mind", description: "With ongoing monitoring and support, you can focus on growing your business while we keep your digital assets safe and secure." },
        ],
      },
    },
  },
  {
    title: "About",
    slug: "about",
    content: "",
    acf: {
      heroTitle: "About ADL99",
      heroDescription: "A new force in Australian cybersecurity, dedicated to protecting businesses of all sizes from evolving digital threats.",
      missionStatement: "Our Mission",
      missionDescription: "At ADL99, we believe every Australian business deserves enterprise-grade cybersecurity protection. We're here to demystify cybersecurity and make it accessible, practical, and effective for organizations of all sizes.\n\nFounded with a passion for protecting businesses from cyber threats, ADL99 brings together experienced security professionals who understand the unique challenges facing Australian organizations today.",
      australianOwnedTitle: "Australian Owned",
      australianOwnedDescription: "Proudly serving Australian businesses",
      valuesTitle: "Our Values",
      valuesDescription: "The principles that guide everything we do at ADL99.",
      values: [
        { icon: "Shield", title: "Integrity", description: "We operate with complete transparency and honesty in all our client relationships." },
        { icon: "Target", title: "Excellence", description: "We deliver the highest quality cybersecurity solutions tailored to your needs." },
        { icon: "Users", title: "Partnership", description: "We work alongside you as trusted advisors, not just service providers." },
        { icon: "Clock", title: "Responsiveness", description: "When you need us, we're there. Our team is ready to respond quickly." },
      ],
      stats: [
        { value: "Fast", label: "Response Times" },
        { value: "100%", label: "Client Focused" },
        { value: "AU", label: "Based in Australia" },
      ],
      approachTitle: "Our Approach",
      approachDescription: "Our methodology is built on three pillars that guide everything we do.",
      approachItems: [
        { title: "Assess", description: "We start by understanding your current security posture, identifying vulnerabilities, and evaluating risks specific to your business and industry." },
        { title: "Defend", description: "We implement robust security controls and defenses tailored to your needs, protecting your assets from current and emerging threats." },
        { title: "Leverage", description: "We help you turn security into a business advantage, building trust with clients and partners while enabling secure growth and innovation." },
      ],
      ctaTitle: "Let's Work Together",
      ctaDescription: "Ready to strengthen your cybersecurity posture? We're here to help.",
      ctaButtonText: "Get in Touch",
      ctaButtonLink: "/contact",
    },
  },
  {
    title: "Contact",
    slug: "contact",
    content: "",
    acf: {
      heroTitle: "Contact Us",
      heroDescription: "Have questions about your cybersecurity needs? We're here to help. Reach out for a free consultation.",
      emergencyBannerText: "Experiencing a cyber incident? Get immediate help",
      contactItems: [
        { icon: "Mail", title: "Email Us", description: "info@adl99.com.au", detail: "We'll respond within 24 hours" },
        { icon: "MapPin", title: "Location", description: "470 St Kilda Road", detail: "Melbourne VIC 3004" },
        { icon: "Clock", title: "Business Hours", description: "Mon - Fri: 9am - 5pm AEST", detail: "Emergency support available" },
      ],
      whatToExpectTitle: "What to Expect",
      whatToExpect: [
        { item: "We'll review your inquiry and assess your needs" },
        { item: "A security expert will reach out within 24 hours" },
        { item: "We'll schedule a free 30-minute consultation" },
        { item: "Receive a tailored proposal for your security needs" },
      ],
      formTitle: "Send Us a Message",
      contactInfo: {
        email: "info@adl99.com.au",
        phone: "03 7067 3373",
        address: "470 St Kilda Rd, Melbourne VIC 3004",
        businessHours: "Mon - Fri: 9am - 5pm AEST",
      },
    },
  },
  {
    title: "Services",
    slug: "services",
    content: "",
    acf: {
      heroTitle: "Cybersecurity Services That Actually Protect Your Business",
      heroDescription: "Stop worrying about cyber threats and start focusing on what you do best—running your business.",
      heroSubDescription: "We provide practical, no-nonsense cybersecurity solutions tailored for Australian businesses. No jargon, no fear-mongering—just effective protection that works for your budget and your business.",
      painPoints: [
        { icon: "Target", title: "Feeling Like a Sitting Target?", description: "Cyber attacks on Australian businesses increased 23% last year. Without proper defences, your business data, customer information, and reputation are at risk every single day." },
        { icon: "TrendingDown", title: "Worried About Business Disruption?", description: "A single ransomware attack can shut down operations for weeks. The average cost of downtime for Australian SMBs is $8,000 per hour—not including reputational damage." },
        { icon: "Users", title: "Unsure If Your Team Is Your Weakest Link?", description: "91% of cyber attacks start with a phishing email. Even well-meaning employees can accidentally expose your business to devastating breaches." },
        { icon: "Clock", title: "Too Busy to Think About Security?", description: "You're focused on running your business, not becoming a cybersecurity expert. But ignoring security doesn't make the threats go away—it just makes you more vulnerable." },
        { icon: "DollarSign", title: "Concerned About the Cost?", description: "Enterprise security solutions are expensive and complex. But the cost of a breach far exceeds the investment in prevention. We offer scalable solutions for every budget." },
        { icon: "HelpCircle", title: "Not Sure Where to Start?", description: "The cybersecurity landscape is overwhelming—endless acronyms, frameworks, and solutions. You need a trusted guide who speaks your language, not technical jargon." },
      ],
      faqs: [
        { question: "How do I know which services I need?", answer: "We start every engagement with a free 30-minute consultation to understand your business, current security posture, and specific concerns. Based on this conversation, we recommend a tailored approach—whether that's a single service or a comprehensive security program. There's no pressure and no obligation." },
        { question: "How much does cybersecurity actually cost?", answer: "Costs vary based on your business size, complexity, and needs. We offer flexible engagement models—from one-off assessments to ongoing managed services. Most importantly, we help you prioritise investments where they'll have the biggest impact. A free consultation will give you a clear understanding of costs before any commitment." },
        { question: "We're a small business—are we really a target?", answer: "Absolutely. In fact, 43% of cyber attacks target small businesses precisely because attackers know they often have weaker defences. Small businesses are attractive targets because they often have valuable data but limited security resources. The good news is that effective protection doesn't require enterprise budgets." },
        { question: "How long does it take to see results?", answer: "Some improvements are immediate—we can often identify and address critical vulnerabilities within the first week. A comprehensive security assessment typically takes 2-4 weeks, with ongoing improvements rolling out over subsequent months. We focus on quick wins first while building longer-term resilience." },
        { question: "Will this disrupt our business operations?", answer: "We design our engagements to minimise disruption. Assessments and advisory work happen alongside your normal operations. Any technical changes are planned, communicated, and implemented during agreed timeframes. Our goal is to protect your business, not interrupt it." },
      ],
      contactFormTitle: "Ready to Protect Your Business?",
      contactFormDescription: "Take the first step towards comprehensive cybersecurity. Schedule your free consultation and let's discuss how we can help protect your business.",
      contactFormBenefits: [
        { benefit: "Free 30-minute consultation" },
        { benefit: "No-obligation security assessment" },
        { benefit: "Tailored recommendations for your business" },
        { benefit: "Clear pricing with no hidden costs" },
      ],
    },
  },
  {
    title: "Industries",
    slug: "industries",
    content: "",
    acf: {
      heroTitle: "Industries We Serve",
      heroDescription: "Every industry faces unique cybersecurity challenges. We deliver tailored solutions that address your specific risks and compliance requirements.",
      heroSubDescription: "From legal practices to healthcare providers, we understand the regulatory landscape and operational realities of your industry.",
      introTitle: "Industry-Specific Expertise",
      introDescription: "We don't believe in one-size-fits-all security. Each industry has unique compliance requirements, threat profiles, and operational constraints. Our solutions are designed with your specific context in mind.",
      ctaTitle: "Don't See Your Industry?",
      ctaDescription: "We work with businesses across all sectors. Contact us to discuss how we can address your unique cybersecurity challenges.",
    },
  },
  {
    title: "Panic Button",
    slug: "panic-button",
    content: "",
    acf: {
      heroTitle: "Emergency Incident Response",
      heroDescription: "If you're experiencing a cyber attack or security breach, fill out this form immediately. Our response team is ready to help contain and resolve the threat.",
      emergencyBannerText: "Urgent Help - Emergency Cyber Response",
      infoCards: [
        { 
          icon: "AlertTriangle", 
          title: "Urgent Help", 
          value: "Ready to Help",
          description: "Emergency cyber response",
          items: []
        },
        { 
          icon: "Clock", 
          title: "Response Time", 
          value: "Under 15 Minutes",
          description: "Average callback time",
          items: []
        },
        { 
          icon: "Shield", 
          title: "What We Do", 
          value: "",
          description: "Our incident response team provides:",
          items: [
            { item: "Immediate threat containment" },
            { item: "Evidence preservation" },
            { item: "System recovery support" },
            { item: "Incident documentation" },
            { item: "Post-incident analysis" },
          ]
        },
      ],
      formTitle: "Report an Incident",
      incidentTypes: [
        { type: "Ransomware Attack" },
        { type: "Data Breach" },
        { type: "Phishing/Social Engineering" },
        { type: "Unauthorised Access" },
        { type: "Malware Infection" },
        { type: "DDoS Attack" },
        { type: "Insider Threat" },
        { type: "Unknown/Other" },
      ],
      importantNotice: "Do not shut down affected systems unless instructed. Preserve all evidence and avoid making changes to compromised systems. Our team will guide you through the proper response procedures.",
    },
  },
];

// ============ SITE SETTINGS DATA ============
// ACF Options page fields

export const siteSettingsData = {
  siteName: "ADL99",
  siteDescription: "Cyber Security Solutions | Advance Defense Layer",
  phone: "03 7067 3373",
  email: "info@adl99.com.au",
  address: "470 St Kilda Rd, Melbourne VIC 3004",
  businessHours: "Mon - Fri: 9am - 5pm AEST",
  socialLinks: {
    facebook: "https://www.facebook.com/adl99/",
    linkedin: "https://www.linkedin.com/company/adl99/",
  },
};
