#!/usr/bin/env node
/**
 * WordPress Content Migration Script
 * Pushes content from wordpress-content-data.ts to WordPress CMS
 */

const readline = require('readline');

// WordPress REST API configuration
const WP_REST_URL = 'https://cms.adl99.com.au/wp-json';

// Service data (from wordpress-content-data.ts)
const servicesData = [
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
        { item: "Cyber incident simulation tabletop exercises" },
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
        { question: "What is a cyber incident simulation tabletop exercise?", answer: "A tabletop exercise is a facilitated discussion where your team works through a realistic cyber incident scenario—such as a ransomware attack, data breach, or business email compromise. We guide your staff through decision-making under pressure, testing your incident response plan, communication protocols, and recovery procedures. These exercises identify gaps in your response capabilities before a real incident occurs, ensuring your team knows exactly what to do when it matters most." },
      ],
    },
  },
];

// Helper to get credentials from user
async function getCredentials() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question('WordPress Username: ', (username) => {
      rl.question('WordPress Application Password: ', (password) => {
        rl.close();
        resolve({ username, password });
      });
    });
  });
}

// Find existing post by slug
async function findBySlug(endpoint, slug, credentials) {
  const encoded = Buffer.from(`${credentials.username}:${credentials.password}`).toString('base64');

  try {
    const response = await fetch(`${WP_REST_URL}${endpoint}?slug=${slug}`, {
      headers: {
        'Authorization': `Basic ${encoded}`,
      },
    });

    if (!response.ok) {
      return null;
    }

    const results = await response.json();
    return results.length > 0 ? results[0] : null;
  } catch (error) {
    console.error('Error finding post:', error.message);
    return null;
  }
}

// Update service in WordPress
async function updateService(service, credentials) {
  const encoded = Buffer.from(`${credentials.username}:${credentials.password}`).toString('base64');

  console.log(`\nUpdating service: ${service.title}...`);

  // Try to find existing service
  let existing = await findBySlug('/wp/v2/services', service.slug, credentials);
  let endpoint = '/wp/v2/services';

  if (!existing) {
    console.log('Service not found with plural endpoint, trying singular...');
    existing = await findBySlug('/wp/v2/service', service.slug, credentials);
    if (existing) endpoint = '/wp/v2/service';
  }

  if (!existing) {
    console.error(`❌ Service "${service.title}" not found in WordPress`);
    return false;
  }

  console.log(`Found existing service with ID: ${existing.id}`);

  const data = {
    title: service.title,
    slug: service.slug,
    content: service.content,
    excerpt: service.excerpt,
    status: 'publish',
    acf: service.acf,
  };

  try {
    const response = await fetch(`${WP_REST_URL}${endpoint}/${existing.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${encoded}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: response.statusText }));
      console.error(`❌ Failed to update: ${error.message}`);
      return false;
    }

    const result = await response.json();
    console.log(`✅ Successfully updated service (ID: ${result.id})`);
    return true;
  } catch (error) {
    console.error(`❌ Error updating service: ${error.message}`);
    return false;
  }
}

// Main function
async function main() {
  console.log('=== WordPress Content Migration ===\n');
  console.log('This will update the Cyber Awareness Training service in WordPress.\n');

  const credentials = await getCredentials();

  console.log('\nStarting migration...');

  let successCount = 0;
  for (const service of servicesData) {
    const success = await updateService(service, credentials);
    if (success) successCount++;
  }

  console.log('\n=== Migration Complete ===');
  console.log(`Successfully updated ${successCount} of ${servicesData.length} services`);
}

main().catch(console.error);
