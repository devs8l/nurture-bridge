import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Logo } from './Brand';
import Icon from './Icon';

const PRODUCTS = {
  clinicians: [
    { href: '/products/cohera-screen/', name: 'Cohera Screen', ic: 'stethoscope', desc: 'Earlier developmental identification in routine pediatric care.' },
    { href: '/products/cohera-assess/', name: 'Cohera Assess', ic: 'clipboard-check', desc: 'Structured assessment and actionable clinical insight.' },
    { href: '/products/cohera-therapy/', name: 'Cohera Therapy', ic: 'heart-handshake', desc: 'Personalized intervention delivery and progress tracking.' },
  ],
  parents: [
    { href: '/products/cohera-care/', name: 'Cohera Care', ic: 'heart', desc: 'Reports, plans, resources, and care-team communication for families.' },
  ],
};

const NAV = [
  { label: 'For Clinicians', href: '/for-clinicians/' },
  { label: 'For Families', href: '/for-families/' },
  { label: 'Evidence', href: '/evidence/' },
  { label: 'Resources', href: '/resources/' },
  { label: 'About Us', href: '/company/' },
];

// Mobile drawer content — same destinations as the desktop nav/dropdown, grouped into cards.
const MOBILE_PRODUCTS = [
  { href: '/products/cohera-screen/', name: 'Cohera Screen', icon: 'stethoscope' },
  { href: '/products/cohera-assess/', name: 'Cohera Assess', icon: 'clipboard-check' },
  { href: '/products/cohera-therapy/', name: 'Cohera Therapy', icon: 'heart-handshake' },
  { href: '/products/cohera-care/', name: 'Cohera Care', icon: 'heart' },
];
const MOBILE_PLATFORM = [
  { href: '/for-clinicians/', name: 'For Clinicians' },
  { href: '/for-families/', name: 'For Families' },
  { href: '/evidence/', name: 'Evidence' },
  { href: '/resources/', name: 'Resources' },
];
const MOBILE_COMPANY = [
  { href: '/company/', name: 'About Us' },
  { href: '/contact/', name: 'Contact Us' },
  { href: '/trust/', name: 'Trust & Privacy' },
];

function ProductCard({ p }) {
  return (
    <a className="d-card" href={p.href} role="menuitem">
      <span className="d-ic"><Icon name={p.ic} size={18} /></span>
      <span className="d-copy">
        <span className="d-name">{p.name}</span>
        <span className="d-desc">{p.desc}</span>
      </span>
    </a>
  );
}

function MobileRow({ href, name, icon }) {
  return (
    <a className="mm-row" href={href}>
      {icon && <span className="mm-row-ic"><Icon name={icon} size={18} /></span>}
      <span className="mm-row-label">{name}</span>
      <Icon name="arrow-up-right" size={15} />
    </a>
  );
}

export default function Header() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const productsActive = pathname.startsWith('/products');
  const [menuOpen, setMenuOpen] = useState(false);
  const burgerRef = useRef(null);
  const firstLinkRef = useRef(null);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? 'hidden' : '';
    if (menuOpen) firstLinkRef.current?.focus();
    return () => { document.documentElement.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1040) {
        setMenuOpen(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    function onKeyDown(e) {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        burgerRef.current?.focus();
      }
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  function closeOnLinkClick(e) {
    if (e.target.closest('a')) setMenuOpen(false);
  }

  return (
    <>
      <header className="site-header">
        <div className="header-bar">
          <a className="brand" href="/" aria-label="Cohera Health home"><Logo height={30} /></a>
          <div className="floating-navbar">
            <nav aria-label="Primary">
              <ul className="pillnav">
                <li className={isHome ? 'is-active' : ''}>
                  <a href="/" aria-current={isHome ? 'page' : undefined}>Home</a>
                </li>
                <li className={productsActive ? 'is-active' : ''} data-drop>
                  <button className="drop-toggle" aria-expanded="false" aria-haspopup="true">
                    Products <Icon name="chevron-down" size={14} />
                  </button>
                  <div className="drop-panel" role="menu" aria-label="Cohera product portfolio">
                    <div className="d-grid">
                      <div className="d-group" role="group" aria-label="For clinicians">
                        <span className="d-group-label" aria-hidden="true">For clinicians</span>
                        {PRODUCTS.clinicians.map((p) => <ProductCard key={p.href} p={p} />)}
                      </div>
                      <div className="d-group" role="group" aria-label="For parents">
                        <span className="d-group-label" aria-hidden="true">For parents</span>
                        {PRODUCTS.parents.map((p) => <ProductCard key={p.href} p={p} />)}
                      </div>
                    </div>
                  </div>
                </li>
                {NAV.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <li key={item.href} className={active ? 'is-active' : ''}>
                      <a href={item.href} aria-current={active ? 'page' : undefined}>{item.label}</a>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="header-actions">
              <a className="btn btn-glass" href="/contact/">Contact Us</a>
              <a className="btn btn-dark" href="/request-demo/">Request a Demo</a>
            </div>
          </div>
          <button
            ref={burgerRef}
            className={`nav-burger${menuOpen ? ' is-open' : ''}`}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? 'x' : 'menu-2'} size={22} />
          </button>
        </div>
      </header>
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} id="mobile-menu">
        <nav aria-label="Mobile" className="mm-sheet" onClick={closeOnLinkClick}>
          <a className="mm-row mm-row--home" href="/" ref={firstLinkRef}>
            <span className="mm-row-label">Home</span>
            <Icon name="arrow-up-right" size={15} />
          </a>

          <div className="mm-card">
            <p className="mm-label">Products</p>
            {MOBILE_PRODUCTS.map((p) => <MobileRow key={p.href} {...p} />)}
          </div>

          <div className="mm-card">
            <p className="mm-label">Platform</p>
            {MOBILE_PLATFORM.map((p) => <MobileRow key={p.href} {...p} />)}
          </div>

          <div className="mm-card">
            <p className="mm-label">Company</p>
            {MOBILE_COMPANY.map((p) => <MobileRow key={p.href} {...p} />)}
          </div>

          <div className="btn-row">
            <a className="btn btn-dark btn-lg" href="/request-demo/">Request a Demo</a>
            <a className="btn btn-glass btn-lg" href="/join-network/">Join Our Network</a>
          </div>
        </nav>
      </div>
    </>
  );
}
