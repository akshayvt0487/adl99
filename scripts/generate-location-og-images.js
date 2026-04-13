const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const locations = [
  {
    slug: 'melbourne-cbd',
    title: 'Cyber Security Melbourne CBD',
    subtitle: 'ADL99 | Trusted Protection for CBD Businesses'
  },
  {
    slug: 'southbank',
    title: 'Cyber Security Southbank',
    subtitle: 'ADL99 | Enterprise-Grade Security for Your Business'
  }
];

async function generateLocationOGImage(location) {
  const outputPath = path.join(process.cwd(), 'public', 'locations', `${location.slug}-og.png`);

  // Ensure locations directory exists
  const locationsDir = path.join(process.cwd(), 'public', 'locations');
  if (!fs.existsSync(locationsDir)) {
    fs.mkdirSync(locationsDir, { recursive: true });
  }

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
        ${location.title}
      </text>

      <!-- Subtitle -->
      <text x="80" y="350" font-family="Arial, sans-serif" font-size="32" fill="#94a3b8">
        ${location.subtitle}
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
