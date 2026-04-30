// ============================================================
//  CIVICDESK — MAIN JS
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  injectContent();
  initNav();
  initScrollAnimations();
  initSmoothScroll();
});

// ── CONTENT INJECTION ─────────────────────────────────────
function injectContent() {
  const cfg = SITE_CONFIG;

  // Hero
  setHTML("hero-headline", cfg.hero.headline);
  setHTML("hero-sub", cfg.hero.subheadline);
  setAttr("hero-cta", "href", cfg.hero.ctaLink);
  setHTML("hero-cta", cfg.hero.ctaText);
  setAttr("hero-cta2", "href", cfg.hero.secondaryCtaLink);
  setHTML("hero-cta2", cfg.hero.secondaryCtaText);

  // Services
  const servicesGrid = document.getElementById("services-grid");
  if (servicesGrid) {
    servicesGrid.innerHTML = cfg.services.map(s => `
      <div class="service-card reveal">
        <div class="service-icon">${s.icon}</div>
        <h3>${s.title}</h3>
        <p>${s.description}</p>
        <ul class="service-features">
          ${s.features.map(f => `<li>${f}</li>`).join("")}
        </ul>
        <a href="${cfg.hero.ctaLink}" class="btn btn-outline">${s.cta}</a>
      </div>
    `).join("");
  }

  // Steps
  const stepsEl = document.getElementById("steps-list");
  if (stepsEl) {
    stepsEl.innerHTML = cfg.steps.map(s => `
      <div class="step reveal">
        <div class="step-number">${s.number}</div>
        <div class="step-body">
          <h3>${s.title}</h3>
          <p>${s.description}</p>
        </div>
      </div>
    `).join("");
  }

  // Benefits
  const benefitsEl = document.getElementById("benefits-grid");
  if (benefitsEl) {
    benefitsEl.innerHTML = cfg.benefits.map(b => `
      <div class="benefit-card reveal">
        <div class="benefit-icon">${b.icon}</div>
        <h3>${b.title}</h3>
        <p>${b.description}</p>
      </div>
    `).join("");
  }

  // Testimonials
  const testimonialsEl = document.getElementById("testimonials-grid");
  if (testimonialsEl) {
    testimonialsEl.innerHTML = cfg.testimonials.map(t => `
      <div class="testimonial-card reveal">
        <blockquote>"${t.quote}"</blockquote>
        <div class="testimonial-author">
          <strong>${t.name}</strong>
          <span>${t.role}</span>
        </div>
      </div>
    `).join("");
  }

  // Contact links
  const waLinks = document.querySelectorAll(".whatsapp-link");
  waLinks.forEach(el => {
    el.href = `https://wa.me/${cfg.contact.whatsapp.replace(/\D/g, "")}`;
    if (el.textContent.includes("WhatsApp")) el.textContent = `WhatsApp: ${cfg.contact.whatsappDisplay}`;
  });
  const emailLinks = document.querySelectorAll(".email-link");
  emailLinks.forEach(el => { el.href = `mailto:${cfg.contact.email}`; el.textContent = cfg.contact.email; });

  // CTA banner
  setAttr("cta-btn", "href", cfg.hero.ctaLink);
  setHTML("footer-tagline", cfg.footer.tagline);
  setHTML("footer-copy", cfg.footer.copyright);
}

function setHTML(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}
function setAttr(id, attr, val) {
  const el = document.getElementById(id);
  if (el) el.setAttribute(attr, val);
}

// ── NAVIGATION ───────────────────────────────────────────
function initNav() {
  const nav = document.getElementById("main-nav");
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");

  // Sticky shadow on scroll
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 40);
  });

  // Mobile hamburger
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
      toggle.innerHTML = open ? "✕" : "☰";
    });

    // Close on link click
    menu.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        menu.classList.remove("open");
        toggle.innerHTML = "☰";
      });
    });
  }
}

// ── SCROLL ANIMATIONS ────────────────────────────────────
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("revealed");
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

// ── SMOOTH SCROLL ────────────────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const target = document.querySelector(a.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}
