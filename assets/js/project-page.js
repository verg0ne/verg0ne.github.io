/* ═══════════════════════════════════════════════════════════
   PROJECT-PAGE.JS — Individual project detail renderer
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  const LINK_SVG = {
    play:  `<svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d="M8 5v14l11-7z"/></svg>`,
    code:  `<svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>`,
    video: `<svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>`,
    store: `<svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d="M19 6H17C17 3.24 14.76 1 12 1S7 3.24 7 6H5C3.9 6 3 6.9 3 8V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V8C21 6.9 20.1 6 19 6ZM12 3C13.65 3 15 4.35 15 6H9C9 4.35 10.35 3 12 3ZM19 20H5V8H19V20Z"/></svg>`,
  };

  function getId() {
    return new URLSearchParams(window.location.search).get('id');
  }

  function render() {
    const container = document.getElementById('projContainer');
    if (!container || typeof PROJECTS === 'undefined') return;

    const id = getId();
    const p  = PROJECTS.find(x => x.id === id);

    if (!p) { renderNotFound(container); return; }

    document.title = `${p.title} // MATTEO VERGARI`;

    const tagsHtml = p.tags.map(t => `<span class="tag">${t}</span>`).join('');
    const linksHtml = (p.links || []).map(l => `
      <a href="${l.url}" target="_blank" rel="noopener noreferrer"
         class="btn btn-o btn-sm">
        ${LINK_SVG[l.type] || ''}${l.label}
      </a>
    `).join('');

    /* ── VIDEO / HERO MEDIA ── */
    let heroMedia = '';
    if (p.videoId) {
      heroMedia = `
        <div class="gallery-video-wrap">
          <iframe
            src="https://www.youtube-nocookie.com/embed/${p.videoId}?rel=0&modestbranding=1"
            allowfullscreen loading="lazy" title="${p.title} — trailer"
          ></iframe>
        </div>`;
    } else if (p.videoFile) {
      heroMedia = `
        <div class="gallery-video-wrap">
          <video controls preload="metadata" poster="${p.heroImage || p.thumbnail}">
            <source src="${p.videoFile}">
          </video>
        </div>`;
    } else if (p.heroImage || (p.images && p.images[0])) {
      const src = p.heroImage || p.images[0];
      heroMedia = `<img class="gallery-hero-img" src="${src}" alt="${p.title}" data-full="${src}">`;
    }

    /* ── GALLERY IMAGES (skip first if used as hero) ── */
    const galleryImages = (p.images || []).slice(p.heroImage ? 0 : 1);
    const galleryHtml = galleryImages.length ? `
      <div class="gallery-grid">
        ${galleryImages.map((img, i) => `
          <div class="gallery-cell" data-full="${img}">
            <img src="${img}" alt="${p.title} screenshot ${i + 1}" loading="lazy"
              onerror="this.parentElement.style.display='none'">
          </div>
        `).join('')}
      </div>
    ` : '';

    /* ── SIDEBAR ── */
    const sidebarHtml = `
      <div class="sblock"><div class="sblock-label">// Engine</div><div class="sblock-val">${p.engine}</div></div>
      <div class="sblock"><div class="sblock-label">// Team</div><div class="sblock-val">${p.teamSize}</div></div>
      ${p.duration ? `<div class="sblock"><div class="sblock-label">// Duration</div><div class="sblock-val">${p.duration}</div></div>` : ''}
      <div class="sblock">
        <div class="sblock-label">// Tags</div>
        <div class="pcard-tags" style="margin-top:10px">${tagsHtml}</div>
      </div>
      ${linksHtml ? `<div class="sblock"><div class="sblock-label">// Links</div><div class="proj-links">${linksHtml}</div></div>` : ''}
    `;

    /* ── NEXT PROJECT ── */
    const idx  = PROJECTS.findIndex(x => x.id === id);
    const next = PROJECTS[(idx + 1) % PROJECTS.length];
    const nextHtml = PROJECTS.length > 1 ? `
      <div class="next-proj">
        <span class="next-proj-label">Next Project</span>
        <a href="project.html?id=${next.id}" class="btn btn-y">${next.title} →</a>
      </div>
    ` : '';

    const badge = p.badge === 'nda'
      ? `<span class="pcard-badge badge-nda" style="position:static;margin-left:4px">NDA</span>`
      : p.badge === 'wip'
      ? `<span class="pcard-badge badge-wip" style="position:static;margin-left:4px">WIP</span>`
      : '';

    container.innerHTML = `
      <!-- HERO -->
      <div class="proj-hero">
        <img class="proj-hero-media" src="${p.heroImage || p.thumbnail}"
          alt="${p.title}" onerror="this.style.display='none'">
        <div class="proj-hero-overlay"></div>
        <div class="proj-hero-content">
          <a href="index.html" class="proj-back">All Projects</a>
          <h1 class="proj-title" data-text="${p.title}">${p.title}</h1>
          <div class="proj-meta">
            <span class="pcard-engine">${p.engine}</span>
            <span class="pcard-divider" style="width:1px;height:10px;background:var(--border);display:inline-block"></span>
            <span class="pcard-team">${p.teamSize}</span>
            ${p.duration ? `<span class="pcard-divider" style="width:1px;height:10px;background:var(--border);display:inline-block"></span><span class="pcard-duration">${p.duration}</span>` : ''}
            ${badge}
            ${tagsHtml}
          </div>
        </div>
      </div>

      <!-- BODY -->
      <div class="proj-body">
        <div class="proj-content rv">
          ${heroMedia ? `<div class="gallery-wrap" style="padding:0 0 32px">${heroMedia}</div>` : ''}
          ${p.fullDesc || `<p>${p.shortDesc}</p>`}
        </div>
        <aside class="proj-sidebar rv" style="transition-delay:0.1s">
          ${sidebarHtml}
        </aside>
      </div>

      <!-- GALLERY -->
      ${galleryHtml ? `
        <div class="gallery-wrap rv">
          <div class="gallery-label">// Screenshots</div>
          ${galleryHtml}
        </div>
      ` : ''}

      ${nextHtml}
    `;

    /* observe reveals */
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.06 });
    container.querySelectorAll('.rv').forEach(el => io.observe(el));

    initLightbox(container);
  }

  function renderNotFound(container) {
    document.title = '404 // MATTEO VERGARI';
    container.innerHTML = `
      <div class="not-found">
        <div class="not-found-code">404</div>
        <div class="not-found-msg">Project Not Found</div>
        <a href="index.html" class="btn btn-o" style="margin-top:24px">← Back to Portfolio</a>
      </div>
    `;
  }

  /* ── LIGHTBOX ──────────────────────────────────────── */
  function initLightbox(scope) {
    const lb  = document.createElement('div');
    lb.className = 'lightbox';
    lb.innerHTML = `<div class="lb-close">[ ESC / CLOSE ]</div><img src="" alt="Full image">`;
    document.body.appendChild(lb);

    const img = lb.querySelector('img');
    const cls = lb.querySelector('.lb-close');

    const imgs = scope.querySelectorAll('.gallery-cell, .gallery-hero-img');
    imgs.forEach(el => {
      el.addEventListener('click', () => {
        img.src = el.dataset.full || el.querySelector('img')?.src || el.src || '';
        lb.classList.add('on');
      });
    });

    const close = () => lb.classList.remove('on');
    cls.addEventListener('click', close);
    lb.addEventListener('click', e => { if (e.target === lb) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  }

  /* ── INIT ─────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', render);

})();
