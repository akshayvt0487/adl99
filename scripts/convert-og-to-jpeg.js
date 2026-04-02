const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function convertToJPEG(pngPath, jpegPath) {
  const originalStats = fs.statSync(pngPath);
  console.log(`\nConverting: ${path.basename(pngPath)}`);
  console.log(`Original PNG size: ${Math.round(originalStats.size / 1024)}KB`);

  await sharp(pngPath)
    .jpeg({
      quality: 90,
      progressive: true,
      mozjpeg: true
    })
    .toFile(jpegPath);

  const newStats = fs.statSync(jpegPath);
  console.log(`New JPEG size: ${Math.round(newStats.size / 1024)}KB`);
  console.log(`Savings: ${Math.round((originalStats.size - newStats.size) / 1024)}KB (${Math.round((1 - newStats.size / originalStats.size) * 100)}%)`);
}

async function main() {
  console.log('\n🎨 Converting OG images to JPEG for better WhatsApp compatibility...\n');
  console.log('WhatsApp handles JPEG better than PNG and achieves smaller file sizes\n');

  await convertToJPEG('public/opengraph-image.png', 'public/opengraph-image.jpg');
  await convertToJPEG('public/about-og.png', 'public/about-og.jpg');

  console.log('\n✅ Conversion complete!');
  console.log('\nNote: You need to update metadata to reference .jpg instead of .png\n');
}

main();
