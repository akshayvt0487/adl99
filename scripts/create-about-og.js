const sharp = require('sharp');
const path = require('path');

async function createAboutOG() {
  const logoPath = path.join(process.cwd(), 'public', 'ADL99-LOGO.jpg');
  const outputPath = path.join(process.cwd(), 'public', 'about-og.png');

  try {
    // Create white background (1200x630)
    const whiteBackground = await sharp({
      create: {
        width: 1200,
        height: 630,
        channels: 3,
        background: { r: 255, g: 255, b: 255 }
      }
    }).png().toBuffer();

    // Load and resize logo to fit nicely in the center
    // Keep aspect ratio, max width 800px, max height 400px
    const logoBuffer = await sharp(logoPath)
      .resize(800, 400, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .png()
      .toBuffer();

    // Get logo dimensions to center it
    const logoMetadata = await sharp(logoBuffer).metadata();
    const logoWidth = logoMetadata.width || 800;
    const logoHeight = logoMetadata.height || 400;

    // Calculate position to center the logo
    const left = Math.floor((1200 - logoWidth) / 2);
    const top = Math.floor((630 - logoHeight) / 2);

    // Composite logo onto white background
    await sharp(whiteBackground)
      .composite([
        {
          input: logoBuffer,
          left: left,
          top: top
        }
      ])
      .png({
        quality: 90,
        compressionLevel: 9
      })
      .toFile(outputPath);

    console.log(`✅ About OG image created: ${outputPath}`);

    // Get file size
    const fs = require('fs');
    const stats = fs.statSync(outputPath);
    const fileSizeKB = Math.round(stats.size / 1024);
    console.log(`📊 File size: ${fileSizeKB}KB`);

  } catch (error) {
    console.error('❌ Error creating about OG image:', error);
    process.exit(1);
  }
}

createAboutOG();
