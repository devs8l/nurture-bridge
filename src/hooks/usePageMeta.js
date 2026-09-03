import { useEffect } from 'react';

const SITE_URL = 'https://cohera.health';
const OG_IMAGE = `${SITE_URL}/og.png`;

/** Canonical Organization entity — injected on every page */
export const ORG_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Cohera Health™',
  alternateName: 'Cohera Health',
  legalName: 'NurtureBridge Tech Pvt Ltd',
  url: `${SITE_URL}/`,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/assets/logo-butterfly.svg`,
    width: 60,
    height: 60,
  },
  image: OG_IMAGE,
  description:
    'Connected developmental-care technology for pediatricians, clinicians, therapists, and families—from early identification through assessment and intervention.',
  founder: [
    { '@type': 'Person', name: 'Gayathri Ananth' },
    { '@type': 'Person', name: 'Harshit Pandey' },
    { '@type': 'Person', name: 'Devjeet Choudhury' },
  ],
  knowsAbout: [
    'Child developmental surveillance',
    'Pediatric developmental screening',
    'Developmental assessment',
    'Child therapy coordination',
    'Family developmental care',
    'AI-assisted clinical decision support',
  ],
  sameAs: [],
};

/** WebSite entity — for sitelinks search box eligibility */
const WEBSITE_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: 'Cohera Health™',
  description:
    'Connected developmental-care technology for pediatricians, clinicians, therapists, and families.',
  publisher: { '@id': `${SITE_URL}/#organization` },
};

function setMeta(selector, attr, value) {
  let el = document.head.querySelector(selector);
  if (!el) return;
  el.setAttribute(attr, value);
}

function setOrCreateMeta(attrName, attrValue, content) {
  let el = document.head.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/**
 * Mirrors layout.mjs's renderPage(): sets title/meta/canonical/jsonld per route.
 *
 * @param {object} meta
 * @param {string} meta.title           - Page <title> tag
 * @param {string} meta.description     - Meta description (150-160 chars recommended)
 * @param {string} meta.path            - Route path e.g. '/products/cohera-screen/'
 * @param {boolean} [meta.noindex]      - Adds noindex robots tag when true
 * @param {object[]} [meta.jsonld]      - Additional JSON-LD schema objects for the page
 * @param {string} [meta.ogImage]       - Override OG image URL (defaults to /og.png)
 */
export default function usePageMeta({ title, description, path, noindex, jsonld = [], ogImage }) {
  useEffect(() => {
    const url = path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
    const image = `${SITE_URL}${ogImage || '/og.png'}`;

    // Core meta
    document.title = title;
    setOrCreateMeta('name', 'description', description);
    setMeta('link[rel="canonical"]', 'href', url);

    // Open Graph
    setOrCreateMeta('property', 'og:type', 'website');
    setOrCreateMeta('property', 'og:site_name', 'Cohera Health™');
    setOrCreateMeta('property', 'og:title', title);
    setOrCreateMeta('property', 'og:description', description);
    setOrCreateMeta('property', 'og:url', url);
    setOrCreateMeta('property', 'og:image', image);
    setOrCreateMeta('property', 'og:image:width', '1200');
    setOrCreateMeta('property', 'og:image:height', '630');
    setOrCreateMeta('property', 'og:image:alt', 'Cohera Health™ — Connected developmental care');
    setOrCreateMeta('property', 'og:locale', 'en_US');

    // Twitter Card
    setOrCreateMeta('name', 'twitter:card', 'summary_large_image');
    setOrCreateMeta('name', 'twitter:title', title);
    setOrCreateMeta('name', 'twitter:description', description);
    setOrCreateMeta('name', 'twitter:image', image);
    setOrCreateMeta('name', 'twitter:image:alt', 'Cohera Health™ — Connected developmental care');

    // Crawler control
    let robotsEl = document.head.querySelector('meta[name="robots"]');
    if (noindex) {
      if (!robotsEl) {
        robotsEl = document.createElement('meta');
        robotsEl.setAttribute('name', 'robots');
        document.head.appendChild(robotsEl);
      }
      robotsEl.setAttribute('content', 'noindex,nofollow');
    } else {
      if (!robotsEl) {
        robotsEl = document.createElement('meta');
        robotsEl.setAttribute('name', 'robots');
        document.head.appendChild(robotsEl);
      }
      robotsEl.setAttribute('content', 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1');
    }

    // JSON-LD structured data
    document.querySelectorAll('script[data-page-jsonld]').forEach((el) => el.remove());
    [ORG_JSONLD, WEBSITE_JSONLD, ...jsonld].forEach((obj) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-page-jsonld', 'true');
      script.textContent = JSON.stringify(obj, null, 0);
      document.head.appendChild(script);
    });
  }, [title, description, path, noindex, ogImage, jsonld]);
}
