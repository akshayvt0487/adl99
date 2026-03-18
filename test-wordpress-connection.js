#!/usr/bin/env node

/**
 * WordPress & Gravity Forms Connection Diagnostic Script
 * Run this to check if your WordPress CMS is properly connected
 */

const fs = require('fs');
const path = require('path');

// Load .env.local file manually
const envPath = path.join(__dirname, '.env.local');
const envVars = {};

if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  envContent.split('\n').forEach(line => {
    const match = line.match(/^([^#=]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      const value = match[2].trim();
      envVars[key] = value;
    }
  });
}

const WP_GRAPHQL_URL = envVars.WP_GRAPHQL_URL || process.env.WP_GRAPHQL_URL;
const WP_REST_URL = envVars.NEXT_PUBLIC_WP_REST_URL || process.env.NEXT_PUBLIC_WP_REST_URL;
const GF_CONSUMER_KEY = envVars.GF_CONSUMER_KEY || process.env.GF_CONSUMER_KEY;
const GF_CONSUMER_SECRET = envVars.GF_CONSUMER_SECRET || process.env.GF_CONSUMER_SECRET;

console.log('\n🔍 WordPress & Gravity Forms Connection Diagnostic\n');
console.log('═══════════════════════════════════════════════════\n');

// Check environment variables
console.log('📋 Environment Variables Check:');
console.log('─────────────────────────────────');
console.log(`WP_GRAPHQL_URL: ${WP_GRAPHQL_URL || '❌ NOT SET'}`);
console.log(`NEXT_PUBLIC_WP_REST_URL: ${WP_REST_URL || '❌ NOT SET'}`);
console.log(`GF_CONSUMER_KEY: ${GF_CONSUMER_KEY ? '✅ Set (' + GF_CONSUMER_KEY.substring(0, 10) + '...)' : '❌ NOT SET'}`);
console.log(`GF_CONSUMER_SECRET: ${GF_CONSUMER_SECRET ? '✅ Set (hidden)' : '❌ NOT SET'}`);
console.log('');

// Test GraphQL connection
async function testGraphQL() {
  if (!WP_GRAPHQL_URL) {
    console.log('⚠️  GraphQL URL not configured, skipping test\n');
    return;
  }

  console.log('🔌 Testing GraphQL Connection:');
  console.log('─────────────────────────────────');
  try {
    const response = await fetch(WP_GRAPHQL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query {
            generalSettings {
              title
              url
            }
          }
        `
      })
    });

    if (!response.ok) {
      console.log(`❌ GraphQL request failed with status: ${response.status}`);
      const text = await response.text();
      console.log(`Response: ${text.substring(0, 200)}...\n`);
      return;
    }

    const data = await response.json();

    if (data.errors) {
      console.log('❌ GraphQL returned errors:');
      console.log(JSON.stringify(data.errors, null, 2));
      console.log('');
      return;
    }

    console.log('✅ GraphQL connection successful!');
    console.log(`   Site Title: ${data.data?.generalSettings?.title || 'N/A'}`);
    console.log(`   Site URL: ${data.data?.generalSettings?.url || 'N/A'}`);
    console.log('');
  } catch (error) {
    console.log(`❌ GraphQL connection error: ${error.message}\n`);
  }
}

// Test REST API connection
async function testRestAPI() {
  if (!WP_REST_URL) {
    console.log('⚠️  REST API URL not configured, skipping test\n');
    return;
  }

  console.log('🔌 Testing REST API Connection:');
  console.log('─────────────────────────────────');
  try {
    const response = await fetch(`${WP_REST_URL}/wp/v2`);

    if (!response.ok) {
      console.log(`❌ REST API request failed with status: ${response.status}\n`);
      return;
    }

    const data = await response.json();
    console.log('✅ REST API connection successful!');
    console.log(`   Available routes: ${Object.keys(data).length}`);
    console.log('');
  } catch (error) {
    console.log(`❌ REST API connection error: ${error.message}\n`);
  }
}

// Test Gravity Forms API
async function testGravityForms() {
  if (!WP_REST_URL || !GF_CONSUMER_KEY || !GF_CONSUMER_SECRET) {
    console.log('🔐 Testing Gravity Forms API:');
    console.log('─────────────────────────────────');
    console.log('❌ Gravity Forms credentials not configured');
    console.log('');
    console.log('ℹ️  To enable Gravity Forms integration:');
    console.log('   1. Log into your WordPress admin at https://cms.adl99.com.au/wp-admin');
    console.log('   2. Go to Forms → Settings → REST API');
    console.log('   3. Create new API keys');
    console.log('   4. Add them to your .env.local file:');
    console.log('      GF_CONSUMER_KEY=your_key_here');
    console.log('      GF_CONSUMER_SECRET=your_secret_here');
    console.log('');
    return;
  }

  console.log('🔐 Testing Gravity Forms API:');
  console.log('─────────────────────────────────');
  try {
    const auth = Buffer.from(`${GF_CONSUMER_KEY}:${GF_CONSUMER_SECRET}`).toString('base64');
    const response = await fetch(`${WP_REST_URL}/gf/v2/forms`, {
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      console.log(`❌ Gravity Forms API request failed with status: ${response.status}`);
      const text = await response.text();
      console.log(`Response: ${text.substring(0, 200)}...\n`);
      return;
    }

    const forms = await response.json();
    console.log('✅ Gravity Forms API connection successful!');
    console.log(`   Forms available: ${forms.length || 0}`);

    if (forms.length > 0) {
      console.log('   Forms:');
      forms.forEach(form => {
        console.log(`     - Form #${form.id}: ${form.title}`);
      });
    }
    console.log('');
  } catch (error) {
    console.log(`❌ Gravity Forms API error: ${error.message}\n`);
  }
}

// Run all tests
async function runDiagnostics() {
  await testGraphQL();
  await testRestAPI();
  await testGravityForms();

  console.log('═══════════════════════════════════════════════════');
  console.log('\n✨ Diagnostics complete!\n');
}

runDiagnostics().catch(console.error);
