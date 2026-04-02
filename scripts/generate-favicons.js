const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const { default: pngToIco } = require('png-to-ico');

async function generateFavicons() {
  console.log('\n🎨 Generating favicons from ADL99-LOGO.jpg...\n');

  const logoPath = path.join(process.cwd(), 'public', 'ADL99-LOGO.jpg');

  if (!fs.existsSync(logoPath)) {
    console.error('❌ Logo not found:', logoPath);
    return;
  }

  try {
    // Load the logo
    const logo = sharp(logoPath);
    const metadata = await logo.metadata();

    console.log(`📐 Original logo: ${metadata.width}x${metadata.height}`);

    // Generate favicon.ico (32x32)
    console.log('Generating favicon.ico (32x32)...');
    await logo
      .clone()
      .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png()
      .toFile(path.join(process.cwd(), 'public', 'favicon-32.png'));

    // Generate favicon.png (16x16 for compatibility)
    console.log('Generating favicon.png (16x16)...');
    await logo
      .clone()
      .resize(16, 16, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png()
      .toFile(path.join(process.cwd(), 'public', 'favicon.png'));

    // Generate icon.png (192x192 for PWA)
    console.log('Generating icon.png (192x192)...');
    await logo
      .clone()
      .resize(192, 192, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png()
      .toFile(path.join(process.cwd(), 'public', 'icon.png'));

    // Generate apple-icon.png (180x180)
    console.log('Generating apple-icon.png (180x180)...');
    await logo
      .clone()
      .resize(180, 180, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png()
      .toFile(path.join(process.cwd(), 'public', 'apple-icon.png'));

    // Generate favicon.ico from the 32x32 PNG
    console.log('Generating favicon.ico...');
    const favicon32Path = path.join(process.cwd(), 'public', 'favicon-32.png');
    const icoBuffer = await pngToIco(favicon32Path);
    fs.writeFileSync(path.join(process.cwd(), 'public', 'favicon.ico'), icoBuffer);

    // Clean up temporary favicon-32.png
    fs.unlinkSync(favicon32Path);

    console.log('\n✅ All favicons generated successfully!');
    console.log('Generated files:');
    console.log('  - favicon.ico (32x32)');
    console.log('  - favicon.png (16x16)');
    console.log('  - icon.png (192x192 for PWA)');
    console.log('  - apple-icon.png (180x180 for Apple devices)\n');

  } catch (error) {
    console.error('❌ Error generating favicons:', error.message);
  }
}

generateFavicons();
