const fs = require('fs');
const path = require('path');

// Files to update and their OG image paths
const updates = [
  {
    file: 'src/app/about/page.tsx',
    ogImage: '/about-og.png',
    searchPattern: /openGraph: \{[^}]+\}/s,
    twitterPattern: /twitter: \{[^}]+\}/s
  },
  {
    file: 'src/app/contact/page.tsx',
    ogImage: '/contact-og.png'
  },
  {
    file: 'src/app/panic-button/page.tsx',
    ogImage: '/panic-button-og.png'
  },
  {
    file: 'src/app/services/page.tsx',
    ogImage: '/services-og.png'
  },
  {
    file: 'src/app/industries/page.tsx',
    ogImage: '/industries-og.png'
  }
];

console.log('\n📝 Updating metadata files...\n');

updates.forEach(({ file, ogImage }) => {
  const filePath = path.join(process.cwd(), file);

  if (!fs.existsSync(filePath)) {
    console.log(`  ⚠️  File not found: ${file}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Add images to openGraph if not present
  if (content.includes('openGraph: {') && !content.includes('images: [')) {
    content = content.replace(
      /(openGraph: \{[^}]+)(,?\s*\},)/s,
      `$1,
    images: [
      {
        url: "${ogImage}",
        width: 1200,
        height: 630,
      },
    ],
  },`
    );
  }

  // Add images to twitter if not present
  if (content.includes('twitter: {') && !content.includes('images: [')) {
    content = content.replace(
      /(twitter: \{[^}]+)(,?\s*\},)/s,
      `$1,
    images: ["${ogImage}"],
  },`
    );
  }

  fs.writeFileSync(filePath, content);
  console.log(`  ✅ Updated: ${file}`);
});

console.log('\n✨ Done!\n');
