# Google Indexing Recommendations for ADL99

## Current Status
The following pages are "Discovered - currently not indexed" in Google Search Console:
- /about
- /contact
- /industries/accounting
- /industries/law-firms
- /panic-button
- /services
- /services/cyber-maturity
- /services/engineering-support
- /services/technical-advisory

## Why This Happens
"Discovered but not indexed" typically occurs when:
1. **Pages are newly deployed** - Google found them in sitemap but hasn't prioritized crawling yet
2. **Low crawl budget** - New/small sites get crawled less frequently
3. **Lack of external signals** - No backlinks indicating importance
4. **Insufficient internal linking** - Pages aren't strongly connected to indexed content

## ✅ Already Fixed
- [x] No robots.txt blocks on these pages
- [x] No noindex tags present
- [x] Pages properly included in sitemap.xml
- [x] Unique, quality content per page (hero sections differentiated)
- [x] Schema markup properly implemented
- [x] Mobile-friendly and fast loading
- [x] HTTPS working correctly

## 🎯 Immediate Actions (Do These First)

### 1. Request Indexing via Google Search Console
For each unindexed page:
1. Go to Google Search Console
2. Use "URL Inspection" tool
3. Enter the full URL (e.g., `https://www.adl99.com.au/about`)
4. Click "Request Indexing"

**Priority order:**
1. /services (most important - hub page)
2. /industries (second hub page)
3. /about (trust signals)
4. /contact (conversion page)
5. Individual service pages
6. Individual industry pages
7. /panic-button

### 2. Build Internal Links from Homepage
Add contextual links from homepage to these pages:

```typescript
// In Hero section or key content areas:
"Learn more <Link href="/about">about our team</Link>"
"View all <Link href="/services">cybersecurity services</Link>"
"Explore our <Link href="/industries">industry expertise</Link>"
"Need urgent help? Visit our <Link href="/panic-button">panic button</Link>"
```

### 3. Add Breadcrumb Schema to All Pages
Already implemented ✅ - Verify it's working:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [...]
}
</script>
```

## 📈 Medium-Term Actions (Next 2-4 Weeks)

### 4. Cross-Link Related Content
Add contextual internal links between pages:

**From Services page to Industry pages:**
```
"Law firms require specialized security - see our law firm solutions"
"Healthcare providers face unique challenges - explore health clinic security"
```

**From Industry pages to Service pages:**
```
"We offer vCISO services tailored for law firms"
"Our cyber maturity assessments help accounting practices meet TPB requirements"
```

### 5. Create Blog Content Linking to These Pages
Write 3-5 blog posts that naturally link to unindexed pages:
- "5 Cybersecurity Mistakes Law Firms Make" → links to /industries/law-firms
- "Essential Eight Implementation Guide" → links to /services/cyber-maturity
- "When to Call for Emergency Cyber Response" → links to /panic-button

### 6. Add FAQ Schema Where Missing
Expand FAQ sections on service pages to include FAQ schema markup (already implemented on most pages - verify all have it).

## 🚀 Long-Term Actions (Ongoing)

### 7. Build External Backlinks
Priority link acquisition strategies:

**High Priority:**
- Industry association directories (ACS, AISA, Cyber Security Cooperative Research Centre)
- Local business directories (Google Business Profile, True Local, Yellow Pages)
- Partner websites (mention in case studies, guest posts)
- Melbourne business directories

**Medium Priority:**
- Industry-specific publications (legal tech, healthcare IT, manufacturing news)
- Submit to cybersecurity vendor directories
- Speaking engagements → event pages link back
- Webinar partnerships

**Low Priority (but valuable):**
- Answer relevant questions on Reddit, Quora with links
- Contribute to industry forums
- Comment on relevant blog posts

### 8. Improve Page Authority Signals

**Add Trust Indicators:**
- Client testimonials with company names
- Case studies (even anonymized)
- Certifications and accreditations
- Team credentials and experience
- Awards and recognition

**Enhance E-E-A-T Signals:**
- Author bios for team members
- Professional certifications displayed
- Industry affiliations shown
- Published research or white papers

### 9. Monitor and Iterate

**Weekly checks:**
- Google Search Console → Coverage report
- Check for new indexing issues
- Monitor crawl stats

**Monthly reviews:**
- Analyze which pages got indexed
- Review search queries driving traffic
- Adjust content based on GSC data

## 📊 Expected Timeline

- **Week 1-2:** Manual indexing requests processed, some pages indexed
- **Week 3-4:** Internal linking improvements start showing effect
- **Month 2-3:** External backlinks begin improving crawl priority
- **Month 3-6:** Most pages should be indexed if quality is maintained

## ⚠️ Things to Avoid

- ❌ Don't create duplicate content to get pages indexed faster
- ❌ Don't use link farms or paid link schemes
- ❌ Don't stuff keywords unnaturally
- ❌ Don't create thin doorway pages
- ❌ Don't hide content from users but show to bots
- ❌ Don't use aggressive crawl-rate increases (can backfire)

## 🔍 Diagnostic Checklist

If pages remain unindexed after 4-6 weeks, check:

- [ ] Are pages actually loading (test in incognito)?
- [ ] Is content unique (check for accidental duplicates)?
- [ ] Are pages fast enough (&lt;2s LCP)?
- [ ] Is mobile experience good (check Mobile-Friendly Test)?
- [ ] Are there JavaScript errors blocking rendering?
- [ ] Is the sitemap being crawled regularly?
- [ ] Are there any crawl errors in GSC?
- [ ] Is server responding correctly (check 5xx errors)?

## 📞 Support Resources

**Google Search Central:**
- [Understand Google indexing](https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers)
- [Fix discovered not indexed](https://developers.google.com/search/docs/crawling-indexing/remove-information)

**Tools to Use:**
- Google Search Console (primary)
- Screaming Frog SEO Spider (technical audit)
- Ahrefs/SEMrush (backlink monitoring)
- PageSpeed Insights (performance)

## 🎯 Success Metrics

Track these in Google Search Console:
- Number of indexed pages (goal: all 22 pages)
- Average crawl rate (goal: increase from current)
- Number of impressions (goal: 10x within 6 months)
- Average position (goal: top 10 for brand terms)
- Click-through rate (goal: 5%+)

---

**Last Updated:** 2026-04-01
**Status:** Pages awaiting initial indexing after recent content improvements
