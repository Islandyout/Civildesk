// ============================================================
//  CIVICDESK — SITE CONFIGURATION
//  Edit this file to update content or toggle maintenance mode.
//  After editing, commit and push to GitHub to publish changes.
// ============================================================

const SITE_CONFIG = {

  // ── MAINTENANCE MODE ─────────────────────────────────────
  // Set to true to show maintenance page to all visitors.
  // Access the real site by adding ?admin=true to your URL.
  MAINTENANCE_MODE: false,

  // ── BRAND ────────────────────────────────────────────────
  brand: {
    name: "CivicDesk",
    tagline: "From Crawl to Sprint.",
    description: "Jamaica's trusted business registration service."
  },

  // ── HERO SECTION ─────────────────────────────────────────
  hero: {
    headline: "Your Business,<br>Officially Registered.",
    subheadline: "We handle your C.O.J company registration so you can focus on building — not paperwork. We walk with you from the crawl to the sprint.",
    ctaText: "Book a Free Consultation",
    ctaLink: "booking.html",
    secondaryCtaText: "See Our Services",
    secondaryCtaLink: "#services"
  },

  // ── SERVICES ─────────────────────────────────────────────
  services: [
    {
      icon: "◈",
      title: "Small Company Registration",
      description: "Ideal for sole traders, small businesses, and partnerships. We guide you through every form and filing requirement with C.O.J so your business is legal and protected from day one.",
      features: ["Business name search & reservation", "Documentation preparation", "C.O.J filing & submission", "Certificate follow-up"],
      cta: "Register Small Business"
    },
    {
      icon: "◉",
      title: "Large Business Registration",
      description: "For limited liability companies and full corporate entities. Complex requirements, handled with expertise. We manage the entire process so you can stay focused on strategy.",
      features: ["Company name search & approval", "Articles of incorporation", "Director & shareholder setup", "Compliance documentation"],
      cta: "Register My Company"
    }
  ],

  // ── HOW IT WORKS ─────────────────────────────────────────
  steps: [
    {
      number: "01",
      title: "Book a Consultation",
      description: "Schedule a free consultation. Tell us about your business, your goals, and what type of registration you need."
    },
    {
      number: "02",
      title: "We Handle the Paperwork",
      description: "Our team prepares all documents, handles C.O.J submissions, and manages every requirement on your behalf."
    },
    {
      number: "03",
      title: "You Get Registered",
      description: "Receive your official registration certificate and start operating your business with full legal standing."
    }
  ],

  // ── BENEFITS ─────────────────────────────────────────────
  benefits: [
    {
      icon: "⏱",
      title: "Save Valuable Time",
      description: "Your time is worth more than waiting in queues. We handle the process while you focus on growing your business."
    },
    {
      icon: "🎓",
      title: "Expert Guidance",
      description: "We know C.O.J requirements inside and out. No guesswork, no rejections — just a clean, correct submission."
    },
    {
      icon: "🔍",
      title: "Transparent Process",
      description: "No hidden fees. No surprises. You know exactly what's happening at every stage of your registration."
    },
    {
      icon: "🤝",
      title: "Personal Support",
      description: "We walk hand in hand with every client — from the crawl to the sprint. You're never alone in this."
    }
  ],

  // ── TESTIMONIALS ─────────────────────────────────────────
  testimonials: [
    {
      quote: "CivicDesk made what I thought would be a nightmare into a smooth, stress-free process. My business was registered in no time.",
      name: "Renee T.",
      role: "Small Business Owner, Kingston"
    },
    {
      quote: "I had no idea where to start with incorporating my company. CivicDesk guided me every step of the way. Professional and reliable.",
      name: "Marcus B.",
      role: "Entrepreneur, Montego Bay"
    },
    {
      quote: "Fast, affordable, and they actually answered all my questions. I'll be recommending CivicDesk to every entrepreneur I know.",
      name: "Stacey-Ann M.",
      role: "Founder, Portmore"
    }
  ],

  // ── CONTACT ──────────────────────────────────────────────
  contact: {
    email: "hello@civicdesk.com",
    whatsapp: "+18761234567",          // Replace with real number
    whatsappDisplay: "+1 (876) 123-4567",
    calendlyUrl: "https://calendly.com/civicdesk",  // Replace with real Calendly URL
    formspreeId: "YOUR_FORMSPREE_ID"   // Replace with real Formspree form ID
  },

  // ── FOOTER ───────────────────────────────────────────────
  footer: {
    tagline: "Helping Jamaican entrepreneurs build their future — officially.",
    copyright: "© 2025 CivicDesk. All rights reserved."
  }

};
