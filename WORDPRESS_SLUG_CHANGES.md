# WordPress Slug Changes Required

## Overview
The following page slugs need to be updated in WordPress to match the new URL structure:

## Changes Required in WordPress

### 1. Cyber Maturity Page
- **Old slug:** `cyber-maturity`
- **New slug:** `cyber-maturity-assessments`
- **Old URL:** `https://www.adl99.com.au/services/cyber-maturity`
- **New URL:** `https://www.adl99.com.au/services/cyber-maturity-assessments`

**Steps:**
1. Log in to WordPress admin
2. Go to Pages > Find "Cyber Maturity" page
3. Edit the page
4. Change the slug from `cyber-maturity` to `cyber-maturity-assessments`
5. Save/Update the page

### 2. Cyber Awareness Training Page
- **Old slug:** `cyber-awareness`
- **New slug:** `cyber-awareness-training`
- **Old URL:** `https://www.adl99.com.au/services/cyber-awareness`
- **New URL:** `https://www.adl99.com.au/services/cyber-awareness-training`

**Steps:**
1. Log in to WordPress admin
2. Go to Pages > Find "Cyber Awareness" page
3. Edit the page
4. Change the slug from `cyber-awareness` to `cyber-awareness-training`
5. Save/Update the page

### 3. Panic Button / Urgent Help Page
- **Old slug:** `panic-button`
- **New slug:** Not a service page anymore - moved to root level as `cyber-security-urgent-help`
- **Old URL:** `https://www.adl99.com.au/panic-button`
- **New URL:** `https://www.adl99.com.au/cyber-security-urgent-help`

**Note:** This page may not need changes in WordPress if it's not stored there. The Next.js app now has a dedicated page at `/cyber-security-urgent-help`.

## Redirects Implemented

The following 301 redirects have been implemented in the Next.js middleware (`src/middleware.ts`):

1. `/services/cyber-maturity` → `/services/cyber-maturity-assessments`
2. `/services/cyber-awareness` → `/services/cyber-awareness-training`
3. `/panic-button` → `/cyber-security-urgent-help`

These redirects ensure:
- No broken links for users or search engines
- Proper SEO value transfer to new URLs
- Permanent redirect status (301)
- Cache headers for performance

## Files Updated in Codebase

### Components
- `src/components/Header.tsx` - Navigation links
- `src/components/Footer.tsx` - Footer links
- `src/components/BlogContent.tsx` - CTA links
- `src/components/Services.tsx` - Service card links
- `src/components/MobileCTA.tsx` - Mobile urgent help button

### Pages
- `src/app/page.tsx` - Homepage intro section links
- `src/app/blog/[slug]/page.tsx` - Blog sidebar links
- `src/app/contact/ContactPageClient.tsx` - Emergency banner link
- `src/app/sitemap.ts` - Sitemap URL
- `src/app/services/page.tsx` - Services listing
- `src/app/services/[slug]/page.tsx` - Service SEO metadata keys
- `src/app/industries/[slug]/IndustryPageClient.tsx` - Industry page links
- `src/app/locations/page.tsx` - Locations page links
- `src/app/locations/[slug]/LocationPageClient.tsx` - Location page links

### Blog Content (Markdown files)
All blog posts in `src/content/blog/` have been updated:
- `essential-8-cyber-security.md`
- `cyber-security-law-firms.md`
- `cyber-security-accountants.md`
- `cyber-security-checklist-australian-smbs.md`

### New Directory Created
- `src/app/cyber-security-urgent-help/` - New urgent help page directory (copied from panic-button)

### Middleware
- `src/middleware.ts` - Added 301 redirects for old slugs

## Verification Checklist

After WordPress changes are made:

- [ ] Verify new WordPress page slugs are correct
- [ ] Test old URLs redirect to new URLs (should return 301)
- [ ] Check all navigation menus work correctly
- [ ] Verify all footer links work
- [ ] Test blog post internal links
- [ ] Check mobile navigation
- [ ] Verify sitemap.xml has updated URLs
- [ ] Test emergency/urgent help button from all pages
- [ ] Check service cards on homepage
- [ ] Verify breadcrumbs update correctly

## SEO Considerations

✅ **Implemented:**
- 301 permanent redirects for all old URLs
- Canonical URLs updated in metadata
- OpenGraph URLs updated
- Sitemap updated with new URLs
- Internal links all point to new URLs

⚠️ **Monitor:**
- Google Search Console for crawl errors
- Analytics for traffic to old/new URLs
- Backlinks from external sites (may need outreach)

## Testing the Redirects

You can test the redirects using curl:

```bash
# Test cyber-maturity redirect
curl -I https://www.adl99.com.au/services/cyber-maturity

# Test cyber-awareness redirect
curl -I https://www.adl99.com.au/services/cyber-awareness

# Test panic-button redirect
curl -I https://www.adl99.com.au/panic-button
```

All should return `HTTP/1.1 301 Moved Permanently` with the new location.

## Notes

- Old `/panic-button` page directory still exists in codebase for compatibility during transition
- WordPress GraphQL queries may need cache clearing after slug changes
- The middleware warning about deprecated "middleware" file can be ignored or the file can be renamed to `proxy.ts` in the future
