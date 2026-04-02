const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function optimizeOGImage(imagePath, outputPath) {
  const originalStats = fs.statSync(imagePath);
  console.log(`\nOptimizing: ${path.basename(imagePath)}`);
  console.log(`Original size: ${Math.round(originalStats.size / 1024)}KB`);

  // Try JPEG first for better compression (WhatsApp prefers JPEG anyway)
  const jpegPath = outputPath.replace('.png', '-temp.jpg');

  await sharp(imagePath)
    .jpeg({
      quality: 85,
      progressive: true,
      mozjpeg: true
    })
    .toFile(jpegPath);

  const jpegStats = fs.statSync(jpegPath);
  console.log(`JPEG version: ${Math.round(jpegStats.size / 1024)}KB`);

  // Convert back to PNG with aggressive optimization
  await sharp(jpegPath)
    .png({
      quality: 85,
      compressionLevel: 9,
      palette: true,
      colors: 256, // Limit to 256 colors for smaller size
      effort: 10 // Maximum compression effort
    })
    .toFile(outputPath);

  // Clean up temp JPEG
  fs.unlinkSync(jpegPath);

  const newStats = fs.statSync(outputPath);
  console.log(`Final PNG size: ${Math.round(newStats.size / 1024)}KB`);
  console.log(`Savings: ${Math.round((originalStats.size - newStats.size) / 1024)}KB (${Math.round((1 - newStats.size / originalStats.size) * 100)}%)`);
}

async function main() {
  console.log('\n🎨 Optimizing OG images for WhatsApp compatibility...\n');
  console.log('WhatsApp works best with images under 300KB\n');

  const imagesToOptimize = [
    {
      input: 'public/opengraph-image.png',
      output: 'public/opengraph-image-optimized.png'
    },
    {
      input: 'public/about-og.png',
      output: 'public/about-og-optimized.png'
    }
  ];

  for (const img of imagesToOptimize) {
    await optimizeOGImage(img.input, img.output);
  }

  console.log('\n✅ Optimization complete!');
  console.log('\nNow replacing original files with optimized versions...\n');

  // Replace original files
  fs.renameSync('public/opengraph-image-optimized.png', 'public/opengraph-image.png');
  fs.renameSync('public/about-og-optimized.png', 'public/about-og.png');

  console.log('✅ Files replaced successfully!\n');
}

main();
