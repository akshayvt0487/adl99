# WordPress Slug Update Instructions

## Step-by-Step Guide to Update Page Slugs in WordPress

### Before You Start

**IMPORTANT:** The Next.js website already has 301 redirects in place, so old URLs will automatically redirect to new URLs. This means you can make these changes without worrying about broken links.

**What you'll need:**
- WordPress admin access
- 5-10 minutes

---

## Change 1: Cyber Maturity Page

### Steps:

1. **Log in to WordPress Admin**
   - Go to: `https://www.adl99.com.au/wp-admin`
   - Enter your credentials

2. **Find the Page**
   - In the left sidebar, click **Pages** → **All Pages**
   - Search for "Cyber Maturity" or look for the page with slug `cyber-maturity`

3. **Edit the Slug**
   - Click **Edit** on the Cyber Maturity page
   - On the right side, find the **Permalink** or **Slug** section
   - If you don't see it, click the **⚙️ (Settings)** icon in the top right
   - Look for **Permalink** or **URL Slug** field
   - Change from: `cyber-maturity`
   - Change to: `cyber-maturity-assessments`

4. **Save**
   - Click **Update** button (top right)
   - You should see a success message

5. **Verify**
   - Click **View Page** to verify the new URL works
   - New URL should be: `https://www.adl99.com.au/services/cyber-maturity-assessments`

---

## Change 2: Cyber Awareness Page

### Steps:

1. **Find the Page**
   - Go to **Pages** → **All Pages**
   - Search for "Cyber Awareness" or look for the page with slug `cyber-awareness`

2. **Edit the Slug**
   - Click **Edit** on the Cyber Awareness page
   - Find the **Permalink** or **Slug** section
   - Change from: `cyber-awareness`
   - Change to: `cyber-awareness-training`

3. **Save**
   - Click **Update** button
   - Verify success message appears

4. **Verify**
   - Click **View Page** to test
   - New URL should be: `https://www.adl99.com.au/services/cyber-awareness-training`

---

## Change 3: Panic Button Page (Optional)

**Note:** This page may not exist in WordPress since it's handled entirely by Next.js. If you find it in WordPress, you can either:

**Option A: Leave it as-is**
- The redirect is already in place in Next.js
- Old URL `/panic-button` will automatically redirect to `/cyber-security-urgent-help`

**Option B: Delete or unpublish it**
- Since the page is now handled by Next.js, you can unpublish the WordPress version
- The Next.js page will handle all traffic

---

## Troubleshooting

### Can't find the Permalink/Slug field?

**In Block Editor (Gutenberg):**
1. Click the **⚙️ Settings** icon (top right)
2. Make sure the **Page** tab is selected (not Block)
3. Scroll down to find **Permalink** section
4. Click to expand and edit the slug

**In Classic Editor:**
1. Look below the title field
2. You should see "Permalink: https://www.adl99.com.au/..."
3. Click **Edit** button next to it
4. Change the slug in the text field
5. Click **OK**

### Page doesn't save or shows error?

- Check if you have the correct permissions (you need Editor or Admin role)
- Try refreshing the page and editing again
- Make sure the new slug doesn't conflict with another page

### Old URL still showing in Google?

- This is normal and will update over time
- The 301 redirects ensure users and search engines are sent to the new URL
- Google will eventually update to show the new URL in search results

---

## After Making Changes

### Clear WordPress Cache (if applicable)

If you're using a caching plugin like WP Super Cache, W3 Total Cache, or WP Rocket:

1. Find the caching plugin in your WordPress admin
2. Click **Clear Cache** or **Purge All Cache**
3. This ensures the new URLs work immediately

### Clear CDN Cache (if applicable)

If you're using Cloudflare or another CDN:

1. Log in to your CDN dashboard
2. Find the **Purge Cache** or **Clear Cache** option
3. Purge all cached files
4. This ensures the redirects work properly

### GraphQL Cache

The Next.js website caches WordPress GraphQL queries for 5 minutes. After making WordPress changes:

- Wait 5-10 minutes for the cache to expire
- OR trigger a rebuild of the Next.js site
- OR the developer can clear the cache manually

---

## Verification Checklist

After making all changes, test the following:

**Old URLs (should redirect to new URLs):**
- [ ] `https://www.adl99.com.au/services/cyber-maturity` → redirects to `cyber-maturity-assessments`
- [ ] `https://www.adl99.com.au/services/cyber-awareness` → redirects to `cyber-awareness-training`
- [ ] `https://www.adl99.com.au/panic-button` → redirects to `cyber-security-urgent-help`

**New URLs (should work directly):**
- [ ] `https://www.adl99.com.au/services/cyber-maturity-assessments` loads correctly
- [ ] `https://www.adl99.com.au/services/cyber-awareness-training` loads correctly
- [ ] `https://www.adl99.com.au/cyber-security-urgent-help` loads correctly

**Navigation:**
- [ ] Header navigation links work
- [ ] Footer links work
- [ ] Blog post internal links work
- [ ] Homepage service links work

---

## Need Help?

If you encounter any issues:

1. **Take a screenshot** of the error or problem
2. **Note the page name** and what you were trying to do
3. **Contact the developer** with this information

The redirects in Next.js will ensure no broken links occur, so there's no rush to make these changes if you encounter issues.

---

## Technical Background (for reference)

**Why these changes?**
- Better SEO: More descriptive, keyword-rich URLs
- Clarity: URLs clearly indicate what the page is about
- Consistency: All service URLs follow the same naming pattern

**What's already done in Next.js:**
- ✅ All internal links updated
- ✅ Navigation menus updated
- ✅ Footer links updated
- ✅ Blog post links updated
- ✅ 301 redirects configured
- ✅ Sitemap updated
- ✅ Metadata updated

**What needs to be done in WordPress:**
- Change page slugs to match new URLs
- Clear cache (if applicable)

That's it! The WordPress changes are the final step to complete the slug migration.
