const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const locations = [
  { slug: 'melbourne-cbd', title: 'Cyber Security Melbourne CBD', subtitle: 'ADL99 | Trusted Protection for CBD Businesses' },
  { slug: 'southbank', title: 'Cyber Security Southbank', subtitle: 'ADL99 | Enterprise-Grade Security' },
  { slug: 'docklands', title: 'Cyber Security Docklands', subtitle: 'ADL99 | Protect Your Business' },
  { slug: 'south-yarra', title: 'Cyber Security South Yarra', subtitle: 'ADL99 | Expert Protection' },
  { slug: 'toorak', title: 'Cyber Security Toorak', subtitle: 'ADL99 | Premium Business Security' },
  { slug: 'st-kilda', title: 'Cyber Security St Kilda', subtitle: 'ADL99 | Local Business Protection' },
  { slug: 'brighton', title: 'Cyber Security Brighton', subtitle: 'ADL99 | Professional Services Security' },
  { slug: 'richmond', title: 'Cyber Security Richmond', subtitle: 'ADL99 | Small Business Protection' },
  { slug: 'hawthorn', title: 'Cyber Security Hawthorn', subtitle: 'ADL99 | Professional Practice Security' },
  { slug: 'malvern', title: 'Cyber Security Malvern', subtitle: 'ADL99 | Trusted Local Protection' },
  { slug: 'camberwell', title: 'Cyber Security Camberwell', subtitle: 'ADL99 | Burke Road Professional Services' },
  { slug: 'prahran', title: 'Cyber Security Prahran', subtitle: 'ADL99 | Chapel Street Business Protection' },
  { slug: 'east-melbourne', title: 'Cyber Security East Melbourne', subtitle: 'ADL99 | Healthcare & Government Security' },
  { slug: 'south-melbourne', title: 'Cyber Security South Melbourne', subtitle: 'ADL99 | Tech & Manufacturing Security' },
  { slug: 'port-melbourne', title: 'Cyber Security Port Melbourne', subtitle: 'ADL99 | Logistics & Maritime Security' },
  { slug: 'fitzroy', title: 'Cyber Security Fitzroy', subtitle: 'ADL99 | Creative & Hospitality Security' },
  { slug: 'albert-park', title: 'Cyber Security Albert Park', subtitle: 'ADL99 | Professional Practice Protection' },
  { slug: 'kew', title: 'Cyber Security Kew', subtitle: 'ADL99 | Medical & Financial Services' },
  { slug: 'carlton', title: 'Cyber Security Carlton', subtitle: 'ADL99 | Education & Research Security' },
  { slug: 'armadale', title: 'Cyber Security Armadale', subtitle: 'ADL99 | Retail & Fashion Protection' }
];

async function generateLocationOGImage(location) {
  const outputPath = path.join(process.cwd(), 'public', 'locations', `${location.slug}-og.png`);

  // Ensure locations directory exists
  const locationsDir = path.join(process.cwd(), 'public', 'locations');
  if (!fs.existsSync(locationsDir)) {
    fs.mkdirSync(locationsDir, { recursive: true });
  }

  // Escape XML entities
  const escapeXml = (unsafe) => {
    return unsafe.replace(/[<>&'"]/g, (c) => {
      switch (c) {
        case '<': return '&lt;';
        case '>': return '&gt;';
        case '&': return '&amp;';
        case '\'': return '&apos;';
        case '"': return '&quot;';
      }
    });
  };

  // Create gradient background (1200x630)
  const svgBackground = `
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0f172a;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1e40af;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#grad1)"/>

      <!-- Title -->
      <text x="80" y="280" font-family="Arial, sans-serif" font-size="64" font-weight="bold" fill="#ffffff">
        ${escapeXml(location.title)}
      </text>

      <!-- Subtitle -->
      <text x="80" y="350" font-family="Arial, sans-serif" font-size="32" fill="#94a3b8">
        ${escapeXml(location.subtitle)}
      </text>

      <!-- Decorative elements -->
      <circle cx="1050" cy="150" r="80" fill="#1e40af" opacity="0.3"/>
      <circle cx="1120" cy="500" r="60" fill="#3b82f6" opacity="0.2"/>
    </svg>
  `;

  try {
    // Load logo
    const logoPath = path.join(process.cwd(), 'public', 'ADL99-LOGO.jpg');
    const logoBuffer = await sharp(logoPath)
      .resize(180, 60, { fit: 'inside', withoutEnlargement: true })
      .png()
      .toBuffer();

    // Create OG image
    await sharp(Buffer.from(svgBackground))
      .composite([
        {
          input: logoBuffer,
          top: 480,
          left: 80
        }
      ])
      .png({
        quality: 90,
        compressionLevel: 9
      })
      .toFile(outputPath);

    const stats = fs.statSync(outputPath);
    const fileSizeKB = Math.round(stats.size / 1024);
    console.log(`✅ Created ${location.slug}-og.png (${fileSizeKB}KB)`);

  } catch (error) {
    console.error(`❌ Error creating OG image for ${location.slug}:`, error);
  }
}

async function generateAllLocationOGImages() {
  console.log('🎨 Generating location OG images...\n');

  for (const location of locations) {
    await generateLocationOGImage(location);
  }

  console.log('\n✨ All location OG images generated!');
}

generateAllLocationOGImages();
