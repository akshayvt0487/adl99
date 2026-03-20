# SEO CSV Implementation Guide - Complete Update Plan

## Status Overview

Based on analysis of "ADL99 - SEO - H1 H2 H3 Titles.csv", here's the complete implementation status:

### ✅ Already Completed

#### Homepage (adl99.com.au)
- ✅ H1: "Stop Worrying About Cyber Threats. Get Peace of Mind." (NO CHANGE)
- ✅ Hero Subtext: Updated with Melbourne geo-targeting (Line 17 Hero.tsx)
- ✅ NEW H2 Intro Section: "Melbourne's Trusted Cybersecurity Services for Australian Businesses" (IntroSection component)
- ✅ Stats H2: "The Cyber Threat Landscape Facing Melbourne & Australian Businesses" (Stats.tsx line 15)
- ✅ Services H2: Uses "Our Cybersecurity Services" (Services.tsx line 106)
- ✅ FeatureShowcase H2: "Why Melbourne Businesses Choose ADL99 for Cybersecurity" (FeatureShowcase.tsx)
- ✅ Process H2: "How Our Melbourne Cybersecurity Process Works" (Process.tsx line 26)
- ✅ Contact H2: "Book a Free Cybersecurity Consultation in Melbourne" (Contact.tsx line 20)

#### Service Pages - All 5 have intro H2 sections
- ✅ Cyber Maturity: introTitle added
- ✅ Technical Advisory: introTitle added
- ✅ Engineering Support: introTitle added
- ✅ Cyber Awareness: introTitle added
- ✅ vCISO: introTitle added

### 🔄 Needs Updates

#### Homepage Updates Required
- ❌ H3 Services Grid titles need updating:
  - "Urgent Help" → "Emergency Cyber Incident Response" ✅ (Already done in Services.tsx line 40)
  - "vCISO Services" → "Virtual CISO (vCISO) Services" ✅ (Already done in Services.tsx line 45)
  - "Cyber Maturity Assessments" → "Cyber Maturity Assessment & Security Gap Analysis" ✅ (Already done in Services.tsx line 41)

#### Services Page (adl99.com.au/services) - NEEDS WORK
**File**: Need to create `src/app/services/page.tsx` with proper content

**Required Updates**:
1. Hero subtext: Add "Melbourne-based ADL99" and expand ending
2. NEW H2 intro section: "Cybersecurity Services for Melbourne & Australian Businesses"
3. Pain Points H2: "Common Cybersecurity Challenges Facing Melbourne Businesses"
4. Services H2: "Our Cybersecurity Services Explained"
5. FAQ H2: "Cybersecurity Services FAQ — Melbourne Businesses"

#### Individual Service Pages - Section Heading Updates Needed

**All services need section heading updates in services-fallback-data.ts**:

1. **Cyber Maturity** (MOSTLY DONE - verify headings):
   - painPointsTitle: "Cybersecurity Challenges Our Melbourne Assessment Team Solves" ✅
   - benefitsTitle: "Benefits of a Cyber Maturity Assessment" ✅
   - rightForYouTitle: "Is a Cyber Maturity Assessment Right for Your Business?" ✅
   - faqTitle: "Cyber Maturity Assessment FAQ" ✅

2. **Technical Advisory** (NEEDS UPDATE):
   - painPointsTitle: "Security Challenges Our Melbourne Advisory Team Addresses" (Currently generic)
   - benefitsTitle: "Benefits of Cybersecurity Technical Advisory" ✅
   - faqTitle: "Cybersecurity Advisory Services FAQ" ✅

3. **Engineering Support** (NEEDS UPDATE):
   - painPointsTitle: "Security Implementation Challenges We Solve" ✅
   - benefitsTitle: "Benefits of Cybersecurity Engineering Support" ✅
   - faqTitle: "Cybersecurity Engineering Support FAQ" ✅

4. **Cyber Awareness** (NEEDS UPDATE):
   - painPointsTitle: "Why Your Staff Are Your Biggest Cybersecurity Risk" ✅
   - benefitsTitle: "Benefits of Cyber Awareness Training" ✅
   - faqTitle: "Cyber Awareness Training FAQ" ✅

5. **vCISO** (NEEDS UPDATE):
   - painPointsTitle: "Why Melbourne Businesses Need a Virtual CISO" ✅
   - benefitsTitle: "Benefits of a Virtual CISO Service" ✅
   - rightForYouTitle: "Is a Virtual CISO Right for Your Melbourne Business?" ✅
   - faqTitle: "Virtual CISO (vCISO) Services FAQ" ✅

#### Industries Page (adl99.com.au/industries) - NEEDS WORK
**File**: `src/app/industries/page.tsx`

**Required Updates**:
1. Keep H1: "Industries We Serve" (NO CHANGE)
2. NEW H2 intro: "Industry-Specific Cybersecurity Solutions in Melbourne & Across Australia"
3. NEW body copy after H2

#### Individual Industry Pages - ALL NEED WORK
**Files**: `src/app/industries/[slug]/page.tsx` and individual industry page components

**Law Firms** (adl99.com.au/industries/law-firms):
- Hero subtext: Add "ADL99's Melbourne team" and "Melbourne and national partnerships"
- Challenges H2: "Key Cybersecurity Challenges Facing Melbourne & Australian Law Firms"
- H3 updates for compliance and threats
- Solutions H2: "Cybersecurity Solutions for Melbourne & Australian Law Firms"
- FAQ H2: "Law Firm Cybersecurity FAQ"

**Health Clinics** (adl99.com.au/industries/health-clinics):
- Hero subtext: Add "ADL99's Melbourne team", "Privacy Act-compliant", "across Victoria and Australia"
- Challenges H2: "Cybersecurity Challenges Facing Melbourne & Australian Healthcare Providers"
- H3 updates for Privacy Act and IoT
- Solutions H2: "Cybersecurity Solutions for Melbourne Health Clinics & Medical Practices"
- FAQ H2: "Healthcare Cybersecurity FAQ"

**Accounting** (adl99.com.au/industries/accounting):
- Hero subtext: Add "TPB and Privacy Act compliance", "ADL99's Melbourne team"
- NEW H2 intro: "Cybersecurity for Melbourne Accounting Firms & Australian Practices"
- Challenges H2: "Cybersecurity Challenges for Melbourne & Australian Accounting Firms"
- H3: "Why Tax Season Is Peak Cyber Risk for Melbourne Accountants"
- Solutions H2: "Cybersecurity Solutions for Melbourne Accounting Firms"
- FAQ H2: "Accounting Firm Cybersecurity FAQ"

**Retail** (adl99.com.au/industries/retail):
- Hero subtext: Add "ADL99's Melbourne team", "Australian retail businesses", "in-store and online"
- Challenges H2: "Cybersecurity Threats Facing Melbourne & Australian Retailers"
- H3: "POS & Payment Card Security Vulnerabilities in Retail"
- Solutions H2: "Cybersecurity Solutions for Melbourne & Australian Retail Businesses"
- FAQ H2: "Retail Cybersecurity FAQ"

**Manufacturing** (adl99.com.au/industries/manufacturing):
- Hero subtext: Add "ADL99's Melbourne team", "OT/IT cybersecurity", "Australian manufacturers"
- Challenges H2: "Cyber Threats Facing Melbourne & Australian Manufacturers"
- H3: "OT/IT Convergence: Cybersecurity Risks for Melbourne Manufacturers"
- Solutions H2: "Cybersecurity Solutions for Melbourne & Australian Manufacturers"
- FAQ H2: "Manufacturing Cybersecurity FAQ"

**Research** (adl99.com.au/industries/research):
- Hero subtext: Add "ADL99's Melbourne team", "Australian research organisations", DISP compliance
- Challenges H2: "Cybersecurity Challenges for Australian Research Institutions"
- H3: "Nation-State Cyber Threats to Australian Research Organisations"
- H3: "Meeting DISP & Research Funder Security Requirements"
- Solutions H2: "Cybersecurity Solutions for Australian Research Organisations"
- FAQ H2: "Research Organisation Cybersecurity FAQ"

#### About Page (adl99.com.au/about) - NEEDS WORK
**File**: `src/app/about/page.tsx`

**Required Updates**:
1. Hero subtext: Add "Melbourne-based cybersecurity firm" at start
2. Mission H2: "Our Mission: Accessible Cybersecurity for Every Melbourne & Australian Business"
3. Mission body: Add "Melbourne and" before "Australian business" + St Kilda Road reference
4. Approach H2: "Our Cybersecurity Approach: Assess, Defend, Leverage"
5. NEW H2: "Melbourne-Based Cybersecurity Experts Serving Australia"
6. NEW body: Include 470 St Kilda Road address

#### Contact Page (adl99.com.au/contact) - NEEDS WORK
**File**: `src/app/contact/page.tsx`

**Required Updates**:
1. Hero subtext: Add "ADL99's Melbourne team" + "no obligation, no pressure"
2. NEW H2 above form: "Get in Touch With Melbourne's Cybersecurity Experts"
3. Remove generic "Get in Touch" H2

#### Panic Button Page (adl99.com.au/panic-button) - NEEDS WORK
**File**: `src/app/panic-button/page.tsx`

**Required Updates**:
1. H1: Add "— We're Ready Right Now"
2. ADD hero subtext: "ADL99's Melbourne-based emergency response team" + "15-minute callback"
3. NEW H2 above form: "Melbourne Cyber Incident Response — Report Your Emergency"
4. H3 updates:
   - "Urgent Help" → "Melbourne's 24/7 Cyber Emergency Response Team"
   - "Response Time" → "Under 15-Minute Callback Guarantee"
   - "What We Do" → "What Our Incident Response Team Does"

## Implementation Priority

### Phase 1: High-Priority Updates (Do First)
1. ✅ Homepage - COMPLETE
2. ✅ Service page intro sections - COMPLETE
3. ⚠️ Services page (/services) - Needs creation/update
4. ⚠️ About page updates
5. ⚠️ Contact page updates
6. ⚠️ Panic Button page updates

### Phase 2: Medium-Priority Updates
1. Individual industry pages
2. Industries page intro section

### Phase 3: Verification
1. Test all pages
2. Verify all headings match CSV exactly
3. Check internal links work
4. Commit all changes

## Files That Need Modification

### Existing Files to Update
1. `src/lib/services-fallback-data.ts` - Verify all section headings match CSV
2. Need to check/create: `src/app/services/page.tsx`
3. Need to check/create: `src/app/about/page.tsx`
4. Need to check/create: `src/app/contact/page.tsx`
5. Need to check/create: `src/app/panic-button/page.tsx`
6. Need to check/create: `src/app/industries/page.tsx`
7. Individual industry page files (6 files total)

### Components Already Updated
- ✅ src/components/Hero.tsx
- ✅ src/components/IntroSection.tsx
- ✅ src/components/Stats.tsx
- ✅ src/components/Services.tsx
- ✅ src/components/FeatureShowcase.tsx
- ✅ src/components/Process.tsx
- ✅ src/components/Contact.tsx (homepage contact section)
- ✅ src/app/services/[slug]/ServicePageClient.tsx
- ✅ src/app/page.tsx

## Next Steps

1. Verify services-fallback-data.ts headings are exactly correct
2. Locate and update Services page
3. Locate and update About, Contact, Panic Button pages
4. Update Industries pages
5. Final verification and commit

---

**Last Updated**: March 20, 2026
**Status**: Homepage and service page intro sections complete. Remaining pages in progress.
