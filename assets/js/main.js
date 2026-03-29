/* ═══════════════════════════════════════════════════════════
   MAIN.JS — Portfolio core interactions
   Performance-focused: no continuous loops except cursor RAF
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── SVG ICON LIBRARY ────────────────────────────────── */
  const SVG = {
    github:     `<svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`,
    artstation: `<svg viewBox="0 0 24 24"><path d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 0 0 2.164 1.333h13.457l-2.792-4.838H0zm24 .025c0-.484-.143-.935-.388-1.314L15.728 2.728a2.424 2.424 0 0 0-2.164-1.333H9.419L21.598 22.54l1.92-3.325c.378-.637.482-.919.482-1.467zm-11.129-3.462L7.428 4.858l-5.444 9.428h10.887z"/></svg>`,
    linkedin:   `<svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
    discord:    `<svg viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.001.018.01.035.022.046a19.94 19.94 0 0 0 5.993 3.029.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.029.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>`,
    email:      `<svg viewBox="0 0 24 24"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.909 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>`,
    play:       `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`,
    code:       `<svg viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>`,
    video:      `<svg viewBox="0 0 24 24"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>`,
    store:      `<svg viewBox="0 0 24 24"><path d="M19 6H17C17 3.24 14.76 1 12 1S7 3.24 7 6H5C3.9 6 3 6.9 3 8V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V8C21 6.9 20.1 6 19 6ZM12 3C13.65 3 15 4.35 15 6H9C9 4.35 10.35 3 12 3ZM19 20H5V8H19V20Z"/></svg>`,
  };

  /* ── LOADER ──────────────────────────────────────────── */
  function initLoader() {
    const el = document.getElementById('loader');
    if (!el) return;
    setTimeout(() => el.classList.add('out'), 1200);
  }

  /* ── CURSOR ──────────────────────────────────────────── */
  function initCursor() {
    const dot  = document.createElement('div'); dot.className = 'cur-dot';
    const ring = document.createElement('div'); ring.className = 'cur-ring';
    document.body.append(dot, ring);

    let mx = -200, my = -200, rx = -200, ry = -200;
    let raf = null;

    const LERP = 0.13;

    function tick() {
      rx += (mx - rx) * LERP;
      ry += (my - ry) * LERP;
      dot.style.cssText  = `left:${mx}px;top:${my}px`;
      ring.style.cssText = `left:${rx}px;top:${ry}px`;
      raf = requestAnimationFrame(tick);
    }

    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; }, { passive: true });
    document.addEventListener('mouseleave', () => { mx = -200; my = -200; });

    const SEL = 'a,button,.pcard,.citem,.sidebar-btn,.btn,.gallery-cell,.lb-close,.proj-back';
    document.addEventListener('mouseover', e => { if (e.target.closest(SEL)) document.body.classList.add('hov'); });
    document.addEventListener('mouseout',  e => { if (e.target.closest(SEL)) document.body.classList.remove('hov'); });

    tick();
  }

  /* ── STICKY NAV ──────────────────────────────────────── */
  function initNav() {
    const nav = document.querySelector('.nav');
    if (!nav) return;
    const onScroll = () => {
      nav.classList.toggle('stuck', window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ── SCROLL REVEALS ──────────────────────────────────── */
  function initReveals() {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.rv, .rv-st').forEach(el => io.observe(el));
  }

  /* ── SIDEBAR PANELS ──────────────────────────────────── */
  function initSidebar() {
    const btns = document.querySelectorAll('.sidebar-btn');
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const isOpen = btn.classList.contains('open');
        btns.forEach(b => b.classList.remove('open'));
        if (!isOpen) btn.classList.add('open');
      });
    });
    document.addEventListener('click', e => {
      if (!e.target.closest('.sidebar-btn')) {
        btns.forEach(b => b.classList.remove('open'));
      }
    });
  }

  /* ── BUILD SIDEBAR HTML ──────────────────────────────── */
  function buildSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;

    function buildPanel(data, label) {
      const entries = data.map(e => `
        <div class="panel-entry">
          <div class="panel-entry-title">${e.title}</div>
          <div class="panel-entry-place">${e.place}</div>
          <div class="panel-entry-date">${e.date}</div>
          ${e.desc ? `<div class="panel-entry-desc">${e.desc}</div>` : ''}
        </div>
      `).join('');

      return `
        <div class="sidebar-btn" role="button" tabindex="0" aria-label="${label}">
          <div class="sidebar-tab">${label}</div>
          <div class="sidebar-panel">
            <div class="panel-label">// ${label}</div>
            ${entries}
          </div>
        </div>
      `;
    }

    sidebar.innerHTML =
      buildPanel(typeof EDUCATION  !== 'undefined' ? EDUCATION  : [], 'Education') +
      buildPanel(typeof EXPERIENCE !== 'undefined' ? EXPERIENCE : [], 'Experience');

    // keyboard support
    sidebar.querySelectorAll('.sidebar-btn').forEach(btn => {
      btn.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); btn.click(); }
      });
    });
  }

  /* ── RENDER MAJOR PROJECTS ───────────────────────────── */
  function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid || typeof PROJECTS === 'undefined') return;

    grid.innerHTML = PROJECTS.map((p, i) => {
      const hasVideo = p.videoId || p.videoFile;
      const badge = p.badge === 'nda'
        ? `<span class="pcard-badge badge-nda">NDA</span>`
        : p.badge === 'wip'
        ? `<span class="pcard-badge badge-wip">WIP</span>`
        : '';
      const playIcon = hasVideo
        ? `<div class="pcard-play-icon"><div class="play-circle">${SVG.play}</div></div>`
        : '';

      const tagsHtml = p.tags.map(t => `<span class="tag">${t}</span>`).join('');
      const num = String(i + 1).padStart(2, '0');

      return `
        <a class="pcard rv" href="project.html?id=${p.id}"
           style="transition-delay:${i * 0.06}s" role="listitem">
          <div class="pcard-thumb">
            <img src="${p.thumbnail}" alt="${p.title}" loading="lazy"
              onerror="this.style.opacity='.15'">
            <div class="pcard-hex"></div>
            <div class="pcard-fade"></div>
            ${badge}
            ${playIcon}
            <div class="pcard-c tl"></div>
            <div class="pcard-c br"></div>
          </div>
          <div class="pcard-body">
            <div class="pcard-num">${num}</div>
            <div class="pcard-meta">
              <span class="pcard-engine">${p.engine}</span>
              <span class="pcard-divider"></span>
              <span class="pcard-team">${p.teamSize}</span>
              ${p.duration ? `<span class="pcard-divider"></span><span class="pcard-duration">${p.duration}</span>` : ''}
            </div>
            <h3 class="pcard-title">${p.title}</h3>
            <p class="pcard-desc">${p.shortDesc}</p>
            <div class="pcard-tags">${tagsHtml}</div>
            <div class="pcard-cta">View Project</div>
          </div>
        </a>
      `;
    }).join('');

    observeReveal(grid.querySelectorAll('.rv'));
  }

  /* ── RENDER MINOR PROJECTS ───────────────────────────── */
  function renderMinorProjects() {
    const wrap = document.getElementById('minorProjectsWrap');
    if (!wrap || typeof MINOR_PROJECTS === 'undefined') return;

    wrap.innerHTML = MINOR_PROJECTS.map(group => `
      <div class="minor-group rv">
        <div class="minor-engine-label">${group.engine}</div>
        <div class="minor-list">
          ${group.items.map(item => `
            <div class="minor-item">
              <span class="minor-item-title">${item.title}</span>
              <span class="minor-item-team">${item.teamSize}</span>
              ${item.duration ? `<span class="minor-item-time">${item.duration}</span>` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');

    observeReveal(wrap.querySelectorAll('.rv'));
  }

  /* ── RENDER CONTACTS ─────────────────────────────────── */
  function renderContacts() {
    const grid = document.querySelector('.contacts-grid');
    if (!grid || typeof CONTACTS === 'undefined') return;

    grid.innerHTML = CONTACTS.map(c => `
      <a class="citem rv" href="${c.url}"
         target="${c.url.startsWith('mailto') ? '_self' : '_blank'}"
         rel="noopener noreferrer">
        <div class="citem-icon">${SVG[c.icon] || SVG.email}</div>
        <div class="citem-label">${c.label}</div>
        <div class="citem-handle">${c.handle}</div>
        <span class="citem-arrow">↗</span>
      </a>
    `).join('');

    observeReveal(grid.querySelectorAll('.rv'));
  }

  /* ── OBSERVER HELPER ─────────────────────────────────── */
  function observeReveal(els) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.06, rootMargin: '0px 0px -30px 0px' });
    els.forEach(el => io.observe(el));
  }

  /* ── FOOTER YEAR ─────────────────────────────────────── */
  function updateYear() {
    const el = document.getElementById('year');
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ── INIT ────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initCursor();
    initNav();
    buildSidebar();
    initSidebar();
    initReveals();
    renderProjects();
    renderMinorProjects();
    renderContacts();
    updateYear();
  });

})();
