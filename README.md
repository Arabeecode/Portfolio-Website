# Arafat Alabi — Portfolio Website

A modern, responsive, single-page portfolio for an AI/ML Engineer, built with plain HTML, CSS, and JavaScript.

## Run locally

No build step required. Just open `index.html` in any modern browser, or serve the folder:

```bash
# Python
python -m http.server 8000

# Then visit http://localhost:8000
```

## Customize content

All content (name, bio, skills, projects, experience, blog, links) lives in **`data.js`** (`PORTFOLIO_DATA`). Edit that single file to update the site. Styling lives in `styles.css`, behavior in `script.js`.

## Deploy for free

### Vercel
1. Push this folder to a GitHub repo.
2. Go to https://vercel.com → "New Project" → import the repo.
3. Framework preset: **Other** (static). Output directory: `/` (root). Deploy.

### Netlify
1. Push to GitHub (or drag-and-drop the folder at https://app.netlify.com/drop).
2. Build command: (none). Publish directory: `/` (root). Deploy.

## Features
- Dark mode by default with light/dark toggle (persisted).
- Animated neural-network particle background in the hero.
- Typing effect in the hero headline.
- Fade-in-on-scroll reveals, hover effects on cards.
- Fully responsive, mobile-first, accessible (skip link, ARIA, keyboard nav, good contrast).
- SEO: title, meta description, Open Graph / Twitter tags.

## Notes
- The contact form opens the visitor's email client via `mailto:` (no backend required). To use a form backend (Formspree, Netlify Forms), replace the submit handler in `script.js`.
- Profile photo: replace `assets/profile.jpg`.
