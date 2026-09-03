# Cohera Health — Website

Marketing website for Cohera Health, built on the Cohera Health Design System and the
“Website Copy — Launch Draft 2026” content system in Notion.

## Stack

React + Vite single-page application, client-side routed with React Router. Original visual
design, CSS, and interaction behavior are preserved from the site's earlier static-generator
version — this is a technology migration, not a redesign.

- React 18
- Vite 6 (dev server + production bundling)
- React Router 6 (client-side routing across all pages)
- `public/css/site.css` — the original hand-authored stylesheet, linked directly in `index.html`
  and untouched by Vite's build pipeline, so styling stays byte-for-byte identical

No CSS framework, state-management library, or UI kit is used beyond the three packages above.

## Getting started

```bash
npm install       # install dependencies
npm run dev       # start the Vite dev server (http://localhost:5173)
npm run build     # production build → dist/
npm run preview   # serve the production build locally (http://localhost:4173)
```

## Project structure

```
index.html               Vite entry HTML — shared <head> (fonts, icon font, site.css, meta tags)
vite.config.js           Vite config (React plugin)
vercel.json              SPA rewrite rule (all paths → index.html) for Vercel deployment
public/                  Static assets, served as-is at the site root
  assets/                Images, illustrations, hero art, logos
  css/site.css            The original site stylesheet (unmodified)
  fonts/                  Geist variable font
  vendor/tabler/          Tabler icon font (used for all inline icons)
  favicon.svg, og.png, robots.txt, sitemap.xml
src/
  main.jsx               React entry point
  App.jsx                Route table (React Router)
  index.css              Intentionally empty — see Styling below
  components/
    Layout.jsx            Page shell: skip link, Header, <main>, Footer; runs site-wide interactions
    Header.jsx             Site header: pill nav, products mega-menu, mobile hamburger + drawer
    Footer.jsx              Site footer: nav columns, social links, legal line
    Brand.jsx               Logo / mark SVG components
    Icon.jsx                Tabler icon-font wrapper used throughout the site
  hooks/
    useSiteInteractions.js  Mobile menu, dropdown, scroll-reveal, count-up, FAQ accordion,
                             pathway tabs, form validation/submit, resource filter/search,
                             cursor-following hero cards, header scroll effect
    usePageMeta.js           Sets per-route <title>, meta description, canonical URL, Open
                             Graph/Twitter tags, and JSON-LD structured data
  pages/                  One component per route (see Routes below)
```

## Styling

All visual styling lives in `public/css/site.css`, linked directly from `index.html`. It is
served as a static file and is **not** imported through Vite/PostCSS, so it is never
transformed, minified-differently, or otherwise altered by the build — this keeps the design
pixel-identical to the pre-migration site. `src/index.css` exists to match a conventional
Vite/React project layout but is intentionally empty.

## Routes

Defined in `src/App.jsx`, each backed by its own component in `src/pages/`:

| Route | Component |
|---|---|
| `/` | `Home` |
| `/products/` | `Products` |
| `/products/cohera-screen/` | `ProductScreen` |
| `/products/cohera-assess/` | `ProductAssess` |
| `/products/cohera-therapy/` | `ProductTherapy` |
| `/products/cohera-care/` | `ProductCare` |
| `/for-clinicians/` | `ForClinicians` |
| `/for-families/` | `ForFamilies` |
| `/evidence/` | `Evidence` |
| `/resources/` | `Resources` |
| `/company/` | `Company` |
| `/trust/` | `Trust` |
| `/contact/` | `Contact` |
| `/request-demo/` | `RequestDemo` |
| `/join-network/` | `JoinNetwork` |
| any other path | `NotFound` (404) |

Since this is a client-rendered SPA, direct navigation to a nested route (e.g. refreshing on
`/trust/`) requires the host to fall back to `index.html` — see Deployment below.

## Deployment (Vercel)

`vercel.json` at the project root rewrites every path to `/index.html` so React Router can
handle routing client-side:

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

Vercel auto-detects the Vite framework preset (build command `npm run build`, output directory
`dist`). No further configuration is required — connect the repo, or run `vercel --prod` /
`vercel` from the project root.

## Design system

Tokens (colors, type, radii, shadows, glass, gradients) come from the Cohera Health Design
System Figma extraction. Geist loads via Google Fonts; Tabler Icons is self-hosted under
`public/vendor/tabler/`.

## Before go-live checklist

- [ ] Wire the four forms (contact, demo, join network, care early access) to a backend or CRM
      endpoint — see the “Simulated submit” block in `src/hooks/useSiteInteractions.js`
- [ ] Confirm contact channels (hello@ / partnerships@ emails, hours, response time) — currently placeholders
- [ ] Confirm ecosystem relationship wording and any logo permissions (Evidence + Company pages)
- [ ] Replace social link placeholders in the footer with live profiles
- [ ] Verify claim-status badges still match the release plan at publication
- [ ] Update `SITE_URL` in `src/hooks/usePageMeta.js` if the production domain differs from cohera.health
