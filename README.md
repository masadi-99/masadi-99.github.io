# masadi-99.github.io — Mohammad Asadi's personal site

A custom, single-page static site. No build step, no framework — just `index.html`,
`styles.css`, and `app.js`. It's designed to be the one authoritative, highly
*findable* hub for everything about Mohammad Asadi (papers, press, awards, links),
with site-wide instant search and rich SEO / structured data so search engines and
AI models can assemble a complete, correct profile.

## Files
- `index.html` — all content (kept in HTML, not JS-rendered, so it's crawlable).
- `styles.css` — the design system.
- `app.js` — site-wide search (⌘K / Ctrl-K or `/`) + small interactions.
- `robots.txt`, `sitemap.xml`, `.nojekyll` — crawling / GitHub Pages config.

## Deploy to GitHub Pages
1. Create a public repo named **`masadi-99.github.io`** (must match the username).
2. Put the contents of this folder at the repo root.
3. Push to `main`. In **Settings → Pages**, set Source = `main` / root.
4. Live at **https://masadi-99.github.io/** within a minute or two.

```bash
cd website
git init && git add -A && git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/masadi-99/masadi-99.github.io.git
git push -u origin main
```

## Still to do (see research/mohammad-asadi-dossier.md → "Open questions")
- Add a real photo + a custom `assets/og-image.png` (1200×630) for link previews.
- Confirm a few facts: Sharif degree/dates, EPFL & Samsung titles/dates, fellowship
  cohort years, peer-review status of MIRAGE/MARCUS, whether to list the 2021 paper.
- Optional: add a CV PDF, an ORCID, and a custom domain (CNAME).
