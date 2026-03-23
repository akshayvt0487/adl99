# Vercel Domain Configuration Guide - Fix Google Search Console Redirect Issues

## Problem
Google Search Console shows 2 pages with redirect issues:
- `https://adl99.com.au/` (non-www HTTPS)
- `http://adl99.com.au/` (non-www HTTP)

Both should redirect to the canonical URL: `https://www.adl99.com.au/`

---

## Solution: Configure Vercel Domains Correctly

### Step 1: Access Vercel Domain Settings

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your **adl99-next** project
3. Click **Settings** tab
4. Click **Domains** in the left sidebar

---

### Step 2: Verify Current Domain Setup

You should see both domains listed. Check their current configuration:

#### ✅ Correct Configuration Should Look Like:

```
Primary Domain:
✓ www.adl99.com.au (Production, HTTPS)

Redirects:
→ adl99.com.au (redirects to www.adl99.com.au)
```

#### ❌ If You See This Instead:

```
Primary Domain:
✓ adl99.com.au (Production, HTTPS)

Other Domains:
? www.adl99.com.au
```

**This is WRONG** - You need to fix it!

---

### Step 3: Fix Domain Configuration

#### If www is NOT the primary domain:

1. **Click the ⋮ (three dots)** next to `www.adl99.com.au`
2. Select **"Set as Primary Domain"**
3. Confirm the change

This will automatically:
- Make `www.adl99.com.au` the production domain
- Configure `adl99.com.au` to redirect to `www.adl99.com.au`
- Apply 301 permanent redirects
- Force HTTPS on both domains

#### If www is already primary but redirects aren't working:

1. **Remove the non-www domain:**
   - Click ⋮ next to `adl99.com.au`
   - Select **"Remove"**
   - Confirm removal

2. **Re-add the non-www domain:**
   - Click **"Add Domain"** button
   - Enter: `adl99.com.au`
   - Click **"Add"**
   - Vercel will automatically detect it should redirect to www
   - Select **"Redirect to www.adl99.com.au"** when prompted

---

### Step 4: Verify SSL Certificates

Both domains should have valid SSL certificates:

1. Check for 🔒 lock icon next to each domain
2. If certificate is missing:
   - Click **"Refresh"** or **"Issue Certificate"**
   - Wait 1-2 minutes for certificate provisioning

---

### Step 5: Check DNS Configuration

Ensure your DNS provider (e.g., Namecheap, GoDaddy, Cloudflare) has correct records:

#### Required DNS Records:

**For www.adl99.com.au:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600 (or default)
```

**For adl99.com.au (apex/root domain):**
```
Type: A
Name: @ (or leave blank)
Value: 76.76.21.21
TTL: 3600

Type: AAAA (IPv6)
Name: @ (or leave blank)
Value: 2606:4700:4700::1111
TTL: 3600
```

**Important:** If your DNS provider supports ANAME or ALIAS records, use:
```
Type: ANAME or ALIAS
Name: @ (or leave blank)
Value: cname.vercel-dns.com
TTL: 3600
```

---

### Step 6: Test the Redirects

After configuring, test all variations (wait 5-10 minutes for DNS propagation):

```bash
# Test 1: HTTP non-www → HTTPS www
curl -I http://adl99.com.au
# Expected: 301 → https://www.adl99.com.au/

# Test 2: HTTPS non-www → HTTPS www
curl -I https://adl99.com.au
# Expected: 301 → https://www.adl99.com.au/

# Test 3: HTTP www → HTTPS www
curl -I http://www.adl99.com.au
# Expected: 301 → https://www.adl99.com.au/

# Test 4: HTTPS www (should work directly)
curl -I https://www.adl99.com.au
# Expected: 200 OK (no redirect)
```

Or test in browser:
1. Open incognito/private window
2. Try: `http://adl99.com.au` → should redirect to `https://www.adl99.com.au`
3. Try: `https://adl99.com.au` → should redirect to `https://www.adl99.com.au`
4. Try: `adl99.com.au` → should redirect to `https://www.adl99.com.au`

---

### Step 7: Verify in Google Search Console

After fixing Vercel configuration:

1. Wait 24-48 hours for Google to re-crawl
2. Go to [Google Search Console](https://search.google.com/search-console)
3. Navigate to **Page indexing** → **Page with redirect**
4. Click **"VALIDATE FIX"** button
5. Google will re-crawl the affected URLs

Expected outcome:
- The 2 redirect pages should disappear from the report
- They will move to "Excluded" or "Page indexed" status

---

## Additional Vercel Configuration (Optional but Recommended)

### Enable Automatic Platform Optimization

In your Vercel project:
1. Go to **Settings** → **General**
2. Scroll to **Build & Development Settings**
3. Enable **"Automatically enable optimizations"**

### Configure Edge Network

Vercel automatically uses their edge network, but you can verify:
1. Go to **Settings** → **Domains**
2. Ensure both domains show **"Deployed to Edge Network"**

---

## Troubleshooting

### Issue: Redirects not working after 10 minutes

**Solution:**
1. Clear browser cache completely
2. Test in incognito/private mode
3. Use `curl -I` command to test (bypasses browser cache)
4. Check Vercel deployment logs for errors

### Issue: SSL certificate errors

**Solution:**
1. Remove both domains from Vercel
2. Wait 5 minutes
3. Re-add www domain first (set as primary)
4. Add non-www domain second (set to redirect)
5. Wait for certificates to provision

### Issue: "Domain is not configured correctly"

**Solution:**
1. Check DNS records in your domain provider
2. Ensure nameservers point to your DNS provider (not Vercel)
3. Verify A/AAAA/CNAME records match Step 5 above
4. Wait 24-48 hours for DNS propagation

### Issue: Redirects work but Google still shows issues

**Solution:**
1. Submit sitemap to Google: `https://www.adl99.com.au/sitemap.xml`
2. Use URL Inspection Tool in Search Console
3. Request indexing for the canonical URL
4. Mark the redirect URLs as "Exclude from indexing" in robots.txt

---

## Expected Timeline

| Action | Timeline |
|--------|----------|
| Configure domains in Vercel | 5 minutes |
| DNS propagation | 24-48 hours |
| Vercel deployment with changes | 5-10 minutes |
| Google re-crawl | 3-7 days |
| Search Console validation | 1-2 weeks |

---

## Verification Checklist

- [ ] www.adl99.com.au is set as Primary Domain in Vercel
- [ ] adl99.com.au is set to redirect to www version
- [ ] Both domains have valid SSL certificates (🔒 icon)
- [ ] DNS records configured correctly
- [ ] All 4 redirect tests pass (see Step 6)
- [ ] Middleware deployed (commit d268dce)
- [ ] Sitemap submitted to Google Search Console
- [ ] Validation requested in Search Console

---

## Code Changes Already Deployed

The following code changes have been committed and should be deployed:

1. **Middleware** (`src/middleware.ts`):
   - Forces all traffic to https://www.adl99.com.au
   - Includes cache headers for redirect optimization

2. **Next.js Config** (`next.config.ts`):
   - Fallback redirects for non-www and HTTP
   - 301 permanent redirect status

3. **Layout** (`src/app/layout.tsx`):
   - metadataBase set to https://www.adl99.com.au
   - All canonical URLs use www version

---

## Support Resources

- [Vercel Domain Configuration Docs](https://vercel.com/docs/concepts/projects/domains)
- [Google Search Console Help](https://support.google.com/webmasters/answer/93633)
- [DNS Propagation Checker](https://www.whatsmydns.net/)

---

**Last Updated**: March 23, 2026
**Status**: Code deployed, awaiting Vercel domain configuration
