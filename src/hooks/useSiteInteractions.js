import { useEffect } from 'react';

/**
 * Ported near-verbatim from the original public/js/site.js (vanilla DOM interactions:
 * product dropdown, scroll-reveal, count-up, FAQ accordion, pathway tabs, join-network role
 * switch, form validate+submit, resource filter/search, cursor-following hero cards, header
 * scroll glass). Re-run after each route's DOM is committed, with all document/window
 * listeners it installs torn down on cleanup so navigating away and back does not stack
 * duplicate handlers. The mobile menu itself is owned by React state in Header.jsx.
 */
export default function useSiteInteractions(deps) {
  useEffect(() => {
    const cleanups = [];
    const on = (target, type, handler, opts) => {
      target.addEventListener(type, handler, opts);
      cleanups.push(() => target.removeEventListener(type, handler, opts));
    };

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---------- Header glass on scroll ---------- */
    const siteHeader = document.querySelector('.site-header');
    if (siteHeader) {
      const syncHeader = function () {
        siteHeader.classList.toggle('scrolled', window.scrollY > 24);
      };
      on(window, 'scroll', syncHeader, { passive: true });
      syncHeader();
    }

    /* ---------- Products dropdown ---------- */
    document.querySelectorAll('[data-drop]').forEach(function (drop) {
      const toggle = drop.querySelector('.drop-toggle');
      const panel = drop.querySelector('.drop-panel');
      if (!toggle || !panel) return;
      let hideTimer = null;
      function setOpen(open) {
        clearTimeout(hideTimer);
        panel.classList.toggle('open', open);
        toggle.setAttribute('aria-expanded', String(open));
      }
      let hoverOpened = false;
      on(toggle, 'click', function () {
        if (hoverOpened) { hoverOpened = false; setOpen(true); return; }
        setOpen(!panel.classList.contains('open'));
      });
      on(drop, 'mouseenter', function () {
        if (!panel.classList.contains('open')) hoverOpened = true;
        setOpen(true);
      });
      on(drop, 'mouseleave', function () {
        hoverOpened = false;
        hideTimer = setTimeout(function () { setOpen(false); }, 180);
      });
      on(drop, 'focusout', function (e) {
        if (!drop.contains(e.relatedTarget)) setOpen(false);
      });
      on(document, 'click', function (e) {
        if (!drop.contains(e.target)) setOpen(false);
      });
      on(document, 'keydown', function (e) {
        if (e.key === 'Escape') setOpen(false);
      });
    });

    /* ---------- Reveal on scroll ---------- */
    const revealables = document.querySelectorAll('.reveal, [data-stagger]');
    let io;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealables.forEach(function (el) { el.classList.add('in'); });
    } else {
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.14, rootMargin: '0px 0px -6% 0px' });
      revealables.forEach(function (el) { io.observe(el); });
      cleanups.push(() => io.disconnect());
    }

    /* ---------- SVG line draw ---------- */
    document.querySelectorAll('.drawline').forEach(function (path) {
      if (typeof path.getTotalLength === 'function') {
        try { path.style.setProperty('--len', path.getTotalLength()); } catch (e) { /* non-path */ }
      }
    });

    /* ---------- Count-up numbers ---------- */
    const counters = document.querySelectorAll('[data-count]');
    function animateCount(el) {
      const target = parseFloat(el.getAttribute('data-count'));
      const suffix = el.getAttribute('data-suffix') || '';
      const dur = 1600;
      let t0 = null;
      function frame(t) {
        if (!t0) t0 = t;
        const p = Math.min((t - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = Math.round(target * eased);
        el.textContent = val.toLocaleString('en-IN') + suffix;
        if (p < 1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    }
    let cio;
    if (counters.length) {
      if (reduceMotion || !('IntersectionObserver' in window)) {
        counters.forEach(function (el) {
          el.textContent = parseFloat(el.getAttribute('data-count')).toLocaleString('en-IN') + (el.getAttribute('data-suffix') || '');
        });
      } else {
        cio = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              animateCount(entry.target);
              cio.unobserve(entry.target);
            }
          });
        }, { threshold: 0.5 });
        counters.forEach(function (el) { cio.observe(el); });
        cleanups.push(() => cio.disconnect());
      }
    }

    /* ---------- FAQ smooth open ---------- */
    document.querySelectorAll('.faq details').forEach(function (d) {
      const content = d.querySelector('.fa');
      const summary = d.querySelector('summary');
      if (!content || !summary || reduceMotion) return;
      on(summary, 'click', function (e) {
        e.preventDefault();
        if (d.hasAttribute('open')) {
          const h = content.offsetHeight;
          content.animate([{ height: h + 'px', opacity: 1 }, { height: '0px', opacity: 0 }], { duration: 260, easing: 'ease' })
            .onfinish = function () { d.removeAttribute('open'); };
        } else {
          d.setAttribute('open', '');
          const target = content.offsetHeight;
          content.animate([{ height: '0px', opacity: 0 }, { height: target + 'px', opacity: 1 }], { duration: 320, easing: 'cubic-bezier(.22,1,.36,1)' });
        }
      });
    });

    /* ---------- Connected pathway tabs ---------- */
    document.querySelectorAll('[data-pathway-tabs]').forEach(function (wrap) {
      const tabs = Array.prototype.slice.call(wrap.querySelectorAll('[data-pathway-tab]'));
      const panels = Array.prototype.slice.call(wrap.querySelectorAll('[role="tabpanel"]'));
      const scrollTrack = wrap.closest('[data-pathway-scroll]');
      let scrollFrame = 0;
      let scrollIndex = -1;
      function activate(tab, moveFocus) {
        const activeIndex = tabs.indexOf(tab);
        tabs.forEach(function (item, index) {
          const active = item === tab;
          item.classList.toggle('is-active', active);
          item.classList.toggle('is-passed', index < activeIndex);
          item.setAttribute('aria-selected', String(active));
          item.setAttribute('tabindex', active ? '0' : '-1');
        });
        panels.forEach(function (panel) {
          panel.hidden = panel.id !== tab.getAttribute('aria-controls');
        });
        if (moveFocus) tab.focus();
      }
      function scrollToTab(index) {
        if (!scrollTrack || window.innerWidth <= 900) return;
        const trackTop = window.scrollY + scrollTrack.getBoundingClientRect().top;
        const range = Math.max(0, scrollTrack.offsetHeight - window.innerHeight);
        const progress = tabs.length > 1 ? index / (tabs.length - 1) : 0;
        window.scrollTo({
          top: trackTop + range * progress,
          behavior: reduceMotion ? 'auto' : 'smooth',
        });
      }
      function syncScrollTabs() {
        scrollFrame = 0;
        if (!scrollTrack || window.innerWidth <= 900) return;
        const rect = scrollTrack.getBoundingClientRect();
        const range = Math.max(1, scrollTrack.offsetHeight - window.innerHeight);
        const progress = Math.max(0, Math.min(1, -rect.top / range));
        const nextIndex = Math.min(tabs.length - 1, Math.floor(progress * tabs.length));
        if (nextIndex !== scrollIndex) {
          scrollIndex = nextIndex;
          activate(tabs[nextIndex], false);
        }
      }
      function queueScrollSync() {
        if (!scrollFrame) scrollFrame = window.requestAnimationFrame(syncScrollTabs);
      }
      tabs.forEach(function (tab, index) {
        on(tab, 'click', function () {
          activate(tab, false);
          scrollToTab(index);
        });
        on(tab, 'keydown', function (e) {
          let next = null;
          if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = tabs[(index + 1) % tabs.length];
          if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = tabs[(index - 1 + tabs.length) % tabs.length];
          if (e.key === 'Home') next = tabs[0];
          if (e.key === 'End') next = tabs[tabs.length - 1];
          if (next) {
            e.preventDefault();
            activate(next, true);
            scrollToTab(tabs.indexOf(next));
          }
        });
      });
      if (scrollTrack) {
        on(window, 'scroll', queueScrollSync, { passive: true });
        on(window, 'resize', queueScrollSync);
        syncScrollTabs();
      }
    });

    /* ---------- Conditional form sections (Join Network) ---------- */
    const roleSelect = document.querySelector('[data-role-switch]');
    if (roleSelect) {
      const sections = document.querySelectorAll('[data-role-section]');
      function syncRole() {
        const v = roleSelect.value;
        sections.forEach(function (sec) {
          const roles = sec.getAttribute('data-role-section').split(',');
          const show = roles.indexOf(v) !== -1;
          sec.hidden = !show;
          sec.querySelectorAll('input,select,textarea').forEach(function (inp) { inp.disabled = !show; });
        });
      }
      on(roleSelect, 'change', syncRole);
      syncRole();
    }

    /* ---------- Form validation + simulated submit ---------- */
    document.querySelectorAll('form[data-validate]').forEach(function (form) {
      function validateField(field) {
        const wrap = field.closest('.field, .check');
        if (!wrap) return true;
        const ok = field.checkValidity();
        wrap.classList.toggle('invalid', !ok);
        return ok;
      }
      form.querySelectorAll('input, select, textarea').forEach(function (f) {
        on(f, 'blur', function () { validateField(f); });
        on(f, 'input', function () {
          const wrap = f.closest('.field, .check');
          if (wrap && wrap.classList.contains('invalid') && f.checkValidity()) wrap.classList.remove('invalid');
        });
      });
      on(form, 'submit', function (e) {
        e.preventDefault();
        const hp = form.querySelector('input[name="company_website_hp"]');
        if (hp && hp.value) return;
        let allOk = true;
        let firstBad = null;
        form.querySelectorAll('input:not([disabled]), select:not([disabled]), textarea:not([disabled])').forEach(function (f) {
          if (!validateField(f) && allOk === true) { allOk = false; firstBad = f; }
          else if (!f.checkValidity()) { allOk = false; }
        });
        if (!allOk) {
          if (firstBad) firstBad.focus({ preventScroll: false });
          return;
        }
        const btn = form.querySelector('[type="submit"]');
        if (btn) { btn.disabled = true; btn.textContent = 'Sending'; btn.style.opacity = .7; }
        /* Simulated submit — wire to your backend / CRM endpoint here. */
        setTimeout(function () {
          const success = form.parentElement.querySelector('.form-success');
          if (success) {
            form.hidden = true;
            success.hidden = false;
            success.setAttribute('tabindex', '-1');
            success.focus();
            success.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
          }
        }, 900);
      });
    });

    /* ---------- Resource topic filter ---------- */
    const filterWrap = document.querySelector('[data-filter-chips]');
    if (filterWrap) {
      const tiles = document.querySelectorAll('[data-topic-tile]');
      on(filterWrap, 'click', function (e) {
        const b = e.target.closest('button[data-aud]');
        if (!b) return;
        filterWrap.querySelectorAll('button').forEach(function (x) {
          x.setAttribute('aria-pressed', String(x === b));
        });
        const v = b.getAttribute('data-aud');
        tiles.forEach(function (t) {
          const auds = (t.getAttribute('data-topic-tile') || '').split(',');
          t.style.display = (v === 'all' || auds.indexOf(v) !== -1) ? '' : 'none';
        });
      });
    }

    /* ---------- Resource search ---------- */
    const searchInput = document.querySelector('[data-search]');
    if (searchInput) {
      const searchables = document.querySelectorAll('[data-searchable]');
      const emptyNote = document.querySelector('[data-search-empty]');
      on(searchInput, 'input', function () {
        const q = searchInput.value.trim().toLowerCase();
        let shown = 0;
        searchables.forEach(function (el) {
          const hit = !q || el.textContent.toLowerCase().indexOf(q) !== -1;
          el.style.display = hit ? '' : 'none';
          if (hit) shown++;
        });
        if (emptyNote) emptyNote.hidden = shown !== 0;
      });
    }

    /* ---------- Cursor-following hero pathway cards ---------- */
    const heroPanel = document.querySelector('.hero-home .hero-panel');
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (heroPanel && finePointer) {
      const heroTargets = heroPanel.querySelectorAll('[data-hero-hover]');
      const heroCards = {};
      heroPanel.querySelectorAll('[data-hero-card]').forEach(function (card) {
        heroCards[card.getAttribute('data-hero-card')] = card;
      });
      let activeHeroCard = null;
      let heroHideTimer = null;

      function hideHeroCard(card) {
        if (!card) return;
        card.classList.remove('is-visible');
        card.setAttribute('aria-hidden', 'true');
        card.setAttribute('tabindex', '-1');
        if (activeHeroCard === card) {
          heroPanel.classList.remove(
            'is-hovering-parent',
            'is-hovering-doctor',
            'is-hovering-parent-ui',
            'is-hovering-doctor-ui',
            'is-pressing-parent-ui',
            'is-pressing-doctor-ui'
          );
          activeHeroCard = null;
        }
      }

      function placeHeroCard(card, event) {
        const panelRect = heroPanel.getBoundingClientRect();
        const cardRect = card.getBoundingClientRect();
        const offset = 22;
        const edge = 12;
        const cursorX = event.clientX - panelRect.left;
        const cursorY = event.clientY - panelRect.top;
        let x = cursorX + offset;
        let y = cursorY + offset;

        if (x + cardRect.width > panelRect.width - edge) x = cursorX - cardRect.width - offset;
        if (y + cardRect.height > panelRect.height - edge) y = cursorY - cardRect.height - offset;

        x = Math.max(edge, Math.min(x, panelRect.width - cardRect.width - edge));
        y = Math.max(edge, Math.min(y, panelRect.height - cardRect.height - edge));
        card.style.left = x + 'px';
        card.style.top = y + 'px';
      }

      function showHeroCard(key, event, target) {
        clearTimeout(heroHideTimer);
        const card = heroCards[key];
        if (!card) return;
        if (activeHeroCard && activeHeroCard !== card) hideHeroCard(activeHeroCard);
        activeHeroCard = card;
        heroPanel.classList.toggle('is-hovering-parent', key === 'parent');
        heroPanel.classList.toggle('is-hovering-doctor', key === 'doctor');
        heroPanel.classList.toggle('is-hovering-parent-ui', !!target && target.classList.contains('hero-hover-target--parent-ui'));
        heroPanel.classList.toggle('is-hovering-doctor-ui', !!target && target.classList.contains('hero-hover-target--doctor-ui'));
        placeHeroCard(card, event);
        card.classList.add('is-visible');
        card.setAttribute('aria-hidden', 'false');
        card.setAttribute('tabindex', '0');
      }

      function queueHeroCardHide(card) {
        clearTimeout(heroHideTimer);
        heroHideTimer = setTimeout(function () { hideHeroCard(card); }, 110);
      }

      heroTargets.forEach(function (target) {
        const key = target.getAttribute('data-hero-hover');
        on(target, 'pointerenter', function (event) { showHeroCard(key, event, target); });
        on(target, 'pointermove', function (event) {
          if (activeHeroCard === heroCards[key]) placeHeroCard(activeHeroCard, event);
        });
        on(target, 'pointerdown', function () {
          heroPanel.classList.toggle('is-pressing-parent-ui', target.classList.contains('hero-hover-target--parent-ui'));
          heroPanel.classList.toggle('is-pressing-doctor-ui', target.classList.contains('hero-hover-target--doctor-ui'));
        });
        function clearHeroPress() {
          heroPanel.classList.remove('is-pressing-parent-ui', 'is-pressing-doctor-ui');
        }
        on(target, 'pointerup', clearHeroPress);
        on(target, 'pointercancel', clearHeroPress);
        on(target, 'pointerleave', function () {
          clearHeroPress();
          queueHeroCardHide(heroCards[key]);
        });
      });

      Object.keys(heroCards).forEach(function (key) {
        const card = heroCards[key];
        on(card, 'pointerenter', function () { clearTimeout(heroHideTimer); });
        on(card, 'pointerleave', function () { queueHeroCardHide(card); });
        on(card, 'focus', function () { clearTimeout(heroHideTimer); });
        on(card, 'blur', function () { queueHeroCardHide(card); });
      });

      on(heroPanel, 'pointerleave', function () { queueHeroCardHide(activeHeroCard); });
      on(window, 'resize', function () { hideHeroCard(activeHeroCard); }, { passive: true });
      on(window, 'scroll', function () { hideHeroCard(activeHeroCard); }, { passive: true });
    }

    /* ---------- Current year ---------- */
    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });

    return () => { cleanups.forEach((fn) => fn()); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
