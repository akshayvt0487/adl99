# WhatsApp OG Image Cache Issue - How to Fix

## The Problem
WhatsApp is showing the old OG image because it has cached the previous preview. Even though we've updated:
- ✅ All OG images with the new ADL99 logo
- ✅ Changed URLs to absolute paths (https://www.adl99.com.au/opengraph-image.png)
- ✅ Verified the new image is live and accessible

WhatsApp won't automatically refresh the cache.

## Solutions

### Option 1: Force WhatsApp to Refresh Cache (Recommended)

**Method A: Use Facebook's Sharing Debugger** (Works for WhatsApp too since WhatsApp uses Facebook's scraper)

1. Go to https://developers.facebook.com/tools/debug/
2. Enter your URL: `https://www.adl99.com.au`
3. Click **"Debug"**
4. Click **"Scrape Again"** button
5. Wait for it to fetch the new image
6. Verify the new image appears in the preview

**Method B: Add a Query Parameter (Quick Test)**

Share the link with a query parameter to bypass cache:
```
https://www.adl99.com.au/?v=2
```

This forces WhatsApp to treat it as a new URL and fetch fresh metadata.

### Option 2: Clear WhatsApp Cache on Your Device

**On Android:**
1. Go to Settings → Apps → WhatsApp
2. Tap "Storage"
3. Tap "Clear Cache" (NOT Clear Data)
4. Reopen WhatsApp and try sharing again

**On iPhone:**
1. Delete WhatsApp conversation where you shared the old link
2. Force close WhatsApp (swipe up from app switcher)
3. Reopen WhatsApp
4. Share the link in a new conversation

### Option 3: Wait for Natural Cache Expiry

WhatsApp typically refreshes cached previews after:
- 7-30 days (varies)
- Not recommended if you need immediate results

## Verification Steps

After trying any solution above:

1. **Test in a new WhatsApp conversation**
2. Share the link: `https://www.adl99.com.au`
3. The preview should now show:
   - ADL99 logo in the image
   - Title: "Cybersecurity Services for Australian Businesses | ADL99"
   - Description: "ADL99 is Melbourne's trusted cybersecurity partner..."

## Technical Verification

You can verify the OG tags are correct by running:

```bash
curl -s https://www.adl99.com.au/ | grep -o '<meta[^>]*og:image[^>]*>'
```

Expected output:
```html
<meta property="og:image" content="https://www.adl99.com.au/opengraph-image.png"/>
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="630"/>
<meta property="og:image:alt" content="ADL99 Cybersecurity - Melbourne's Trusted Cybersecurity Partner"/>
```

## Common Issues

### Image Still Not Showing After Cache Clear

1. **Check Image Size**: WhatsApp requires minimum 200x200px (we have 1200x630 ✅)
2. **Check Image Format**: Must be JPG or PNG (we have PNG ✅)
3. **Check File Size**: Should be under 8MB (we have 778KB ✅)
4. **Check HTTPS**: Must be served over HTTPS (we have ✅)
5. **Check Image Accessible**: Visit https://www.adl99.com.au/opengraph-image.png directly

### Different Image on Different Platforms

Each platform caches independently:
- **WhatsApp**: Uses Facebook's scraper, can be refreshed via Facebook Debugger
- **LinkedIn**: Use LinkedIn Post Inspector (https://www.linkedin.com/post-inspector/)
- **Twitter**: Use Twitter Card Validator (https://cards-dev.twitter.com/validator)
- **Telegram**: Usually refreshes automatically after a few hours

## Best Practice for Future Updates

When updating OG images in the future:

1. Update the image file
2. Deploy to production
3. **Immediately** refresh cache on all platforms:
   - Facebook/WhatsApp: https://developers.facebook.com/tools/debug/
   - LinkedIn: https://www.linkedin.com/post-inspector/
   - Twitter: https://cards-dev.twitter.com/validator

This prevents users from seeing old cached previews.

## Current Status

✅ **All Technical Requirements Met:**
- Absolute URL: `https://www.adl99.com.au/opengraph-image.png`
- Image accessible: Returns 200 OK
- Correct dimensions: 1200x630px
- Proper metadata tags in HTML
- New ADL99 logo visible in the image file

❓ **Action Required:**
- Use Facebook Sharing Debugger to force cache refresh
- OR share with query parameter `?v=2` to test
- OR clear WhatsApp cache on device

---

**Last Updated:** 2026-04-02
**Issue:** WhatsApp showing cached old OG image
**Root Cause:** WhatsApp/Facebook aggressive link preview caching
**Solution:** Force cache refresh using Facebook Sharing Debugger
