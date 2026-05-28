# Shriya Gupta — Backend Engineer Portfolio

A premium, dark "Systems" themed developer portfolio that presents backend
engineering work as a high-end product site. Built with React, Vite, Tailwind CSS,
and Framer Motion, featuring live animated architecture diagrams, scroll-reveal
motion, and case-study storytelling.

**Live sections:** Hero (animated system topology) · Stats · About · Case Studies
· Skills · Experience · Education & Recognition · Contact.

---

## Tech stack

| Layer       | Tooling                                   |
| ----------- | ----------------------------------------- |
| Framework   | React 18                                  |
| Build tool  | Vite 5                                     |
| Styling     | Tailwind CSS 3 (custom theme)             |
| Animation   | Framer Motion 11                          |
| Icons       | lucide-react                              |
| Diagrams    | Hand-authored animated SVG                |

---

## Getting started

Requires **Node.js 18+** and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Create a production build (outputs to ./dist)
npm run build

# 4. Preview the production build locally
npm run preview
```

---

## Editing content

**All text lives in one file** — you do not need to touch the components:

```
src/data/content.js
```

It contains the profile, tagline, stats, case studies, skills, experience,
education, achievements, and navigation. Edit the strings there and the site
updates automatically.

---

## Project structure

```
Portfolio/
├── index.html              # HTML shell, meta tags, fonts
├── package.json
├── vite.config.js
├── tailwind.config.js      # Design tokens: colors, fonts, animations
├── postcss.config.js
└── src/
    ├── main.jsx            # React entry
    ├── App.jsx             # Section composition + scroll progress
    ├── index.css           # Global styles, utilities, components layer
    ├── data/
    │   └── content.js      # ← Single source of truth for all content
    └── components/
        ├── Backdrop.jsx            # Ambient grid + glow background
        ├── Navbar.jsx              # Scroll-aware nav + mobile menu
        ├── Hero.jsx                # Headline + live console panel
        ├── ArchitectureDiagram.jsx # Animated hero system topology
        ├── MiniDiagram.jsx         # Per-case-study SVG diagrams
        ├── Stats.jsx               # Count-up metrics
        ├── About.jsx               # Story + principles
        ├── CaseStudies.jsx         # Featured work
        ├── Skills.jsx              # Grouped tech arsenal
        ├── Experience.jsx          # Timeline
        ├── Education.jsx           # Degrees + achievements
        ├── Contact.jsx             # CTA + contact channels
        ├── Footer.jsx
        └── Reveal.jsx              # Scroll-reveal animation helper
```

---

## Deployment

Run `npm run build` and deploy the generated `dist/` folder to any static host.
See **Deployment steps** below (Netlify, Vercel, or GitHub Pages).

---

## License

Personal portfolio © Shriya Gupta. All rights reserved.
