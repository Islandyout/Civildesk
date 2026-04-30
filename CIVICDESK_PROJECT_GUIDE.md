# CIVICDESK — Claude Project Build Guide

---

## 📌 Project Description

**CivicDesk** is a professional business registration service website for the Jamaican market. It assists individuals and entrepreneurs in registering small companies and large businesses through **C.O.J (Companies of Jamaica)**. CivicDesk removes the burden and confusion of the registration process by guiding clients from start to finish — from initial enquiry to approved registration.

**Core Value Proposition:**
> "We see the value in our clients' time — time they could be using to grow their business. We understand it can be daunting to open a business for the first time, so we walk hand in hand with our clients from the crawl to the sprint."

---

## 🎯 Project Goals

1. **Convert visitors into booked clients** — every page element drives toward a booking CTA.
2. **Build trust** — professional tone, social proof, clear process steps.
3. **Enable self-management** — owner can edit site content and toggle a maintenance mode while editing; public sees a "Under Maintenance" page during edits.
4. **Accept service bookings** — clients can book/request a service directly from the site.
5. **Host on GitHub Pages** — static site, no paid server required.
6. **Mobile-first, fast-loading** — optimized for Jamaican mobile users on varying connection speeds.

---

## 🏗️ Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Structure | Semantic HTML5 | SEO, accessibility, GitHub Pages compatible |
| Styling | CSS3 + CSS Variables | No build step, fast, maintainable |
| Interactivity | Vanilla JS | Zero dependencies, fast load |
| Booking | Calendly embed OR Formspree form | Free tier, no backend needed |
| Hosting | GitHub Pages | Free, version-controlled |
| CMS / Editing | JSON config file OR simple HTML edits | Owner edits `content.js` or HTML, toggles `maintenance.js` flag |
| Fonts | Google Fonts (preconnect) | Fast, distinctive typography |

---

## 📁 File Structure

```
civicdesk/
├── index.html              # Main landing page
├── maintenance.html        # Shown to public when MAINTENANCE_MODE = true
├── booking.html            # Booking/enquiry page
├── about.html              # About CivicDesk (optional expansion)
├── css/
│   ├── style.css           # Main styles
│   └── maintenance.css     # Maintenance page styles
├── js/
│   ├── config.js           # ⚙️ EDIT THIS — site content & maintenance toggle
│   ├── main.js             # Page interactions, animations
│   └── router.js           # Checks maintenance flag, redirects if needed
├── assets/
│   ├── logo.svg            # CivicDesk logo
│   └── images/             # Hero image, team photos, icons
└── README.md               # Deployment instructions
```

---

## ⚙️ Maintenance Mode System

**How it works:**
- In `js/config.js`, there is a single variable: `const MAINTENANCE_MODE = false;`
- `router.js` runs on every page load. If `MAINTENANCE_MODE = true`, it redirects all visitors to `maintenance.html`.
- The **owner** (you) accesses the real site by appending `?admin=true` to the URL: `https://yoursite.github.io?admin=true`
- When you are done editing, set `MAINTENANCE_MODE = false` and push to GitHub.

**To enable maintenance mode:**
1. Open `js/config.js`
2. Change `MAINTENANCE_MODE = false` to `MAINTENANCE_MODE = true`
3. Commit and push to GitHub → site instantly shows maintenance page to all visitors.

---

## 🌐 Website Sections (index.html)

### 1. Navigation Bar
- Logo (CivicDesk)
- Nav links: Services | How It Works | Why Us | Book Now
- Sticky on scroll, mobile hamburger menu

### 2. Hero Section
- **Headline:** "Your Business, Officially Registered. Stress-Free."
- **Subheadline:** "We handle your C.O.J company registration so you can focus on building — not paperwork."
- **CTA Button:** "Book a Free Consultation"
- Background: dark, authoritative, with subtle texture or gradient

### 3. Services Section
Two cards:
- **Small Company Registration** — Sole trader, small business, partnerships
- **Large Business Registration** — Limited liability companies, corporate entities

Each card: Icon + Title + Short description + "Learn More / Book" CTA

### 4. How It Works (3-Step Process)
1. **Book a Consultation** — Tell us about your business
2. **We Handle the Paperwork** — Documents, filing, C.O.J submission
3. **You Get Registered** — Receive your certificate, start operating legally

### 5. Why CivicDesk (Benefit Blocks)
- ✅ Save Time — Focus on your business, not bureaucracy
- ✅ Expert Guidance — We know C.O.J requirements inside out
- ✅ Transparent Process — No surprises, no hidden fees
- ✅ Personal Support — We walk with you every step

### 6. Social Proof
- Testimonials (2–3 client quotes — add real ones when available)
- Trust badges: "Registered through C.O.J" | "100% Jamaican-owned service"

### 7. CTA Banner
- "Ready to Make It Official?"
- "Start your registration today — book your free consultation."
- Button: "Book Now"

### 8. Footer
- CivicDesk logo + tagline
- Quick links
- Contact: email, WhatsApp link
- © 2025 CivicDesk. All rights reserved.

---

## 📅 Booking System

**Option A (Recommended — Free):** Calendly
- Create free account at calendly.com
- Set available hours for consultations
- Embed the Calendly widget on `booking.html`
- Paste your Calendly URL into `js/config.js`

**Option B:** Formspree contact/enquiry form
- Create free account at formspree.io
- Embed form on `booking.html`
- Submissions go to your email

---

## ✏️ How to Edit Site Content

All editable text lives in **`js/config.js`**. Format:

```javascript
const SITE_CONFIG = {
  MAINTENANCE_MODE: false,
  hero: {
    headline: "Your Business, Officially Registered. Stress-Free.",
    subheadline: "We handle your C.O.J registration so you can focus on building.",
    ctaText: "Book a Free Consultation",
    ctaLink: "#booking"
  },
  contact: {
    email: "hello@civicdesk.com",
    whatsapp: "+1876XXXXXXX",
    calendlyUrl: "https://calendly.com/civicdesk"
  },
  services: [
    {
      title: "Small Company Registration",
      description: "Perfect for sole traders, small businesses, and partnerships.",
      icon: "🏪"
    },
    {
      title: "Large Business Registration",
      description: "Limited liability companies and full corporate entities.",
      icon: "🏢"
    }
  ]
}
```

Editing this file = editing the whole site. Push to GitHub to publish.

---

## 🚀 GitHub Pages Deployment

1. Create a GitHub account (free) at github.com
2. Create a new repository named: `civicdesk` (or `civicdesk.github.io` for root URL)
3. Upload all project files
4. Go to **Settings → Pages → Source → main branch → / (root)**
5. GitHub gives you a free URL: `https://yourusername.github.io/civicdesk`
6. Optional: Connect a custom domain (e.g. civicdesk.com) in Pages settings

---

## 🎨 Brand Identity

| Element | Value |
|---|---|
| **Brand Name** | CivicDesk |
| **Tagline** | "From Crawl to Sprint." |
| **Primary Color** | Deep navy or forest green (authority + trust) |
| **Accent Color** | Gold or warm amber (Jamaican palette nod) |
| **Typography** | Strong serif display + clean sans-serif body |
| **Tone** | Professional, warm, approachable, empowering |
| **Market** | Jamaican entrepreneurs, first-time business owners |

---

## 📋 Custom Instructions for Claude (paste into Project Instructions)

```
You are the full-stack developer and designer for CivicDesk — a Jamaican business registration service website hosted on GitHub Pages.

CONTEXT:
- Business: CivicDesk helps clients register small and large businesses through C.O.J (Companies of Jamaica)
- Stack: Pure HTML, CSS, Vanilla JS — no build tools, no frameworks, GitHub Pages compatible
- All site content is controlled via js/config.js (including MAINTENANCE_MODE toggle)
- Booking is handled via Calendly embed or Formspree form
- Owner edits config.js to update content and toggle maintenance mode

CODING RULES:
- Always write semantic HTML5
- CSS must use variables defined in :root
- JS must be vanilla, no dependencies
- All files must work when opened directly (no local server required)
- Mobile-first responsive design
- Optimize for fast load: minimize requests, use system fonts as fallback, lazy-load images

DESIGN RULES:
- Brand: Professional, warm, Jamaican entrepreneurial spirit
- Colors: Deep navy/forest green primary, gold accent
- Typography: Strong display font + clean body font (Google Fonts via preconnect)
- Every section must have a clear CTA
- No Lorem Ipsum — use real CivicDesk copy at all times

MAINTENANCE MODE:
- Controlled by MAINTENANCE_MODE boolean in js/config.js
- router.js redirects all visitors to maintenance.html when true
- Admin bypass: append ?admin=true to URL

When given a task, always specify which file you are editing/creating, provide complete file contents (no partial snippets unless asked), and note any dependencies between files.
```

---

## 📊 Success Metrics

- Visitor clicks "Book Now" CTA → measures conversion rate
- Booking form completions / Calendly appointments booked
- Page load time under 2 seconds on mobile
- Zero layout breaks on screens 320px–1440px wide

---

## 🔮 Future Expansion (Phase 2)

- Blog/Resources section: "What you need to register a business in Jamaica"
- Client portal: track registration status
- Payment integration (accept deposit online)
- WhatsApp chat widget (free via wa.me link)
- Google Analytics integration

---

*Last updated: 2026 | Project: CivicDesk | Stack: HTML/CSS/JS | Host: GitHub Pages*
