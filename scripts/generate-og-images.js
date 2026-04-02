const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

// Configuration for each page
const pages = [
  {
    name: 'homepage',
    bgImage: 'hero-team.jpg',
    outputPath: 'public/opengraph-image.png',
    title: 'Stop Worrying About\nCyber Threats',
    subtitle: 'Melbourne\'s trusted cybersecurity partner — protecting Australian businesses',
    badges: ['Melbourne, Victoria', '24/7 Emergency Response']
  },
  {
    name: 'about',
    bgImage: 'og-images/about.webp',
    outputPath: 'public/about-og.png',
    title: 'About ADL99',
    subtitle: 'Melbourne-based cybersecurity experts protecting Australian businesses',
    badges: ['470 St Kilda Road, Melbourne']
  },
  {
    name: 'contact',
    bgImage: 'og-images/contact.webp',
    outputPath: 'public/contact-og.png',
    title: 'Get in Touch',
    subtitle: 'ADL99\'s Melbourne team is here to help — Free 30-minute consultation',
    badges: ['Free Consultation', 'Melbourne Based']
  },
  {
    name: 'panic-button',
    bgImage: 'og-images/panic-button.webp',
    outputPath: 'public/panic-button-og.png',
    title: 'Emergency Incident\nResponse',
    subtitle: 'Melbourne\'s 24/7 cyber emergency response team — Under 15-minute callback',
    badges: ['24/7 Available', 'Rapid Response']
  },
  {
    name: 'services',
    bgImage: 'og-images/services.webp',
    outputPath: 'public/services-og.png',
    title: 'Cybersecurity Services',
    subtitle: 'Melbourne-based ADL99 provides practical cybersecurity services for Australian businesses',
    badges: ['vCISO Services', 'Cyber Maturity Assessment', 'Cyber Awareness Training']
  },
  {
    name: 'industries',
    bgImage: 'og-images/services.webp',
    outputPath: 'public/industries-og.png',
    title: 'Industries We Serve',
    subtitle: 'Industry-specific cybersecurity solutions in Melbourne & across Australia',
    badges: ['Healthcare', 'Law Firms', 'Accounting', 'Manufacturing', 'Retail', 'Research']
  },
  // Services
  {
    name: 'cyber-maturity',
    bgImage: 'og-images/services_cyber-maturity.webp',
    outputPath: 'public/services/cyber-maturity-og.png',
    title: 'Cyber Maturity\nAssessment',
    subtitle: 'Comprehensive security assessments against NIST, ISO 27001 & Essential Eight',
    badges: ['NIST Framework', 'ISO 27001', 'Essential Eight', 'Melbourne Based']
  },
  {
    name: 'vciso',
    bgImage: 'og-images/services_vciso.webp',
    outputPath: 'public/services/vciso-og.png',
    title: 'Virtual CISO Services',
    subtitle: 'Executive security leadership without the executive price tag',
    badges: ['Strategic Oversight', 'Board Reporting', 'Governance', 'Melbourne Based']
  },
  {
    name: 'cyber-awareness',
    bgImage: 'og-images/services_cyber-awareness.webp',
    outputPath: 'public/services/cyber-awareness-og.png',
    title: 'Build a Human Firewall',
    subtitle: 'Cyber awareness training for Melbourne businesses & Australian workplaces',
    badges: ['Phishing Simulations', 'Interactive Workshops', 'Staff Training']
  },
  {
    name: 'technical-advisory',
    bgImage: 'og-images/services_technical-advisory.webp',
    outputPath: 'public/services/technical-advisory-og.png',
    title: 'Expert Security Guidance',
    subtitle: 'Navigate complex cybersecurity decisions with Melbourne\'s experienced advisors',
    badges: ['Architecture Reviews', 'Policy Development', 'Compliance']
  },
  {
    name: 'engineering-support',
    bgImage: 'og-images/services_engineering-support.webp',
    outputPath: 'public/services/engineering-support-og.png',
    title: 'Technical Security\nImplementation',
    subtitle: 'Hands-on cybersecurity engineering from Melbourne\'s expert team',
    badges: ['Network Defence', 'Cloud Security', 'SIEM Deployment']
  },
  // Industries
  {
    name: 'law-firms',
    bgImage: 'og-images/Law Firms.webp',
    outputPath: 'public/industries/law-firms-og.png',
    title: 'Cybersecurity for\nAustralian Law Firms',
    subtitle: 'Protecting attorney-client privilege from boutique practices to major partnerships',
    badges: ['Client Confidentiality', 'Privacy Act Compliance', 'Melbourne Based']
  },
  {
    name: 'health-clinics',
    bgImage: 'og-images/Health Clinics.webp',
    outputPath: 'public/industries/health-clinics-og.png',
    title: 'Cybersecurity for\nAustralian Health Clinics',
    subtitle: 'Privacy Act-compliant security for medical practices & allied health providers',
    badges: ['Patient Data Protection', 'Privacy Act Compliance']
  },
  {
    name: 'accounting',
    bgImage: 'og-images/Accounting.webp',
    outputPath: 'public/industries/accounting-og.png',
    title: 'Cybersecurity for\nAccounting Practices',
    subtitle: 'Protect client financial data and meet TPB & Privacy Act compliance',
    badges: ['Financial Data Security', 'TPB Compliance', 'Melbourne Based']
  },
  {
    name: 'retail',
    bgImage: 'og-images/Retail.webp',
    outputPath: 'public/industries/retail-og.png',
    title: 'Cybersecurity for\nRetail Chains',
    subtitle: 'Secure your POS systems and achieve PCI DSS compliance',
    badges: ['POS Security', 'PCI DSS Compliance', 'Melbourne Based']
  },
  {
    name: 'manufacturing',
    bgImage: 'og-images/Manufacturing.webp',
    outputPath: 'public/industries/manufacturing-og.png',
    title: 'Cybersecurity for\nManufacturing',
    subtitle: 'Specialist OT/IT cybersecurity for Australian manufacturers',
    badges: ['OT/IT Security', 'ICS Protection', 'IP Protection']
  },
  {
    name: 'research',
    bgImage: 'og-images/Research.webp',
    outputPath: 'public/industries/research-og.png',
    title: 'Cybersecurity for\nResearch Organisations',
    subtitle: 'Defend research IP from nation-state threats & meet DISP requirements',
    badges: ['IP Protection', 'DISP Compliance', 'Export Control']
  }
];

// Escape XML special characters
function escapeXML(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Create SVG text overlay (logo will be composited separately)
function createSVG(config) {
  const { title, subtitle, badges } = config;

  // Escape all text for XML
  const escapedTitle = escapeXML(title);
  const escapedSubtitle = escapeXML(subtitle);
  const escapedBadges = badges.map(b => escapeXML(b));

  // Calculate badge positions
  let badgeY = 550;
  const badgesSVG = escapedBadges.map((badge, index) => {
    const x = 80 + (index * 240);
    if (x > 1000) return ''; // Skip if too many badges

    return `
      <rect x="${x}" y="${badgeY}" width="${badges[index].length * 12 + 30}" height="40" rx="8" fill="rgba(59, 130, 246, 0.2)"/>
      <text x="${x + 15}" y="${badgeY + 27}" font-family="Arial, sans-serif" font-size="20" font-weight="600" fill="white">${badge}</text>
    `;
  }).join('');

  return `
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="overlay" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:rgb(15,23,42);stop-opacity:0.95" />
          <stop offset="50%" style="stop-color:rgb(15,23,42);stop-opacity:0.85" />
          <stop offset="100%" style="stop-color:rgb(15,23,42);stop-opacity:0.60" />
        </linearGradient>
      </defs>

      <!-- Dark overlay -->
      <rect width="1200" height="630" fill="url(#overlay)"/>

      <!-- Logo will be composited separately as image -->
      <!-- Placeholder space for 200px wide logo at x=80, y=80 -->

      <!-- Main title -->
      ${escapedTitle.split('\n').map((line, i) => `
        <text x="80" y="${280 + (i * 80)}" font-family="Arial, sans-serif" font-size="72" font-weight="bold" fill="white" letter-spacing="-1">${line}</text>
      `).join('')}

      <!-- Subtitle -->
      <text x="80" y="${escapedTitle.includes('\n') ? 470 : 390}" font-family="Arial, sans-serif" font-size="32" fill="#cbd5e1" style="word-spacing: -2px">
        ${escapedSubtitle.length > 85 ? escapedSubtitle.substring(0, 82) + '...' : escapedSubtitle}
      </text>

      <!-- Badges -->
      ${badgesSVG}
    </svg>
  `;
}

async function generateOGImage(config) {
  const { name, bgImage, outputPath } = config;

  console.log(`Generating: ${name}...`);

  try {
    // Ensure output directory exists
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Load background image
    const bgPath = path.join(process.cwd(), 'public', bgImage);

    if (!fs.existsSync(bgPath)) {
      console.error(`  ❌ Background image not found: ${bgPath}`);
      return;
    }

    // Load and prepare ADL99 logo
    const logoPath = path.join(process.cwd(), 'public', 'ADL99-LOGO.jpg');
    if (!fs.existsSync(logoPath)) {
      console.error(`  ❌ Logo not found: ${logoPath}`);
      return;
    }

    // Resize logo to fit in header area (max 200px wide, maintain aspect ratio)
    const logoBuffer = await sharp(logoPath)
      .resize(200, 60, { fit: 'inside', withoutEnlargement: true })
      .png()
      .toBuffer();

    // Create SVG overlay
    const svgOverlay = Buffer.from(createSVG(config));

    // Composite background + SVG overlay + logo
    await sharp(bgPath)
      .resize(1200, 630, { fit: 'cover', position: 'center' })
      .composite([
        {
          input: svgOverlay,
          top: 0,
          left: 0
        },
        {
          input: logoBuffer,
          top: 80,
          left: 80
        }
      ])
      .png()
      .toFile(outputPath);

    console.log(`  ✅ Created: ${outputPath}`);
  } catch (error) {
    console.error(`  ❌ Error generating ${name}:`, error.message);
  }
}

async function main() {
  console.log('\n🎨 Generating OG Images...\n');

  for (const config of pages) {
    await generateOGImage(config);
  }

  console.log('\n✨ Done! Generated', pages.length, 'OG images.\n');
}

main();
