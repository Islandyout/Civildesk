# CivicDesk — Website

Jamaica's trusted business registration service.  
**Stack:** Pure HTML · CSS · Vanilla JS · GitHub Pages

---

## 🚀 Quick Deploy to GitHub Pages

1. Create a GitHub account at [github.com](https://github.com) (free)
2. Click **New Repository** → name it `civicdesk` (or `yourusername.github.io`)
3. Upload all files from this folder
4. Go to **Settings → Pages → Source → Deploy from branch → main → / (root)**
5. Your site is live at `https://yourusername.github.io/civicdesk`

> **Custom domain (optional):** In GitHub Pages settings, add your domain (e.g. `civicdesk.com`) and set up a CNAME record with your domain registrar pointing to `yourusername.github.io`.

---

## ✏️ How to Edit Site Content

All website text, links, and settings live in one file: **`js/config.js`**

Open it in any text editor (Notepad, VS Code, etc.), make your changes, save, and push to GitHub. The site updates automatically.

**Things you can change in `config.js`:**
- Hero headline, subheadline, and button text
- Service descriptions and features
- Process steps
- Benefit cards
- Testimonials
- Contact email and WhatsApp number
- Calendly booking URL
- Maintenance mode toggle

---

## 🔧 Maintenance Mode

**To turn maintenance mode ON** (visitors see the maintenance page):
1. Open `js/config.js`
2. Find: `MAINTENANCE_MODE: false`
3. Change to: `MAINTENANCE_MODE: true`
4. Save and push to GitHub

**To view the real site while maintenance mode is ON:**  
Add `?admin=true` to your URL:  
`https://yourusername.github.io/civicdesk?admin=true`

**To turn maintenance mode OFF** (go live):
1. Change `MAINTENANCE_MODE: true` back to `MAINTENANCE_MODE: false`
2. Save and push to GitHub

---

## 📅 Setting Up Bookings (Formspree — Free)

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form — you'll receive a form ID like `xabcdefg`
3. Open `js/config.js` and replace `YOUR_FORMSPREE_ID` with your real ID
4. Also open `booking.html` and update the form action URL:  
   `action="https://formspree.io/f/YOUR_REAL_ID"`
5. All bookings will now be emailed to your Formspree account email

---

## 📁 File Structure

```
civicdesk/
├── index.html          ← Main landing page
├── booking.html        ← Booking / enquiry page
├── maintenance.html    ← Shown when MAINTENANCE_MODE = true
├── css/
│   └── style.css       ← All styles
├── js/
│   ├── config.js       ← ⚙️ EDIT THIS for all content + maintenance toggle
│   ├── router.js       ← Maintenance redirect logic (don't edit)
│   └── main.js         ← Animations, nav, content injection (don't edit)
└── README.md           ← This file
```

---

## 📞 Support

Built and maintained by CivicDesk.  
Questions? Email: hello@civicdesk.com
