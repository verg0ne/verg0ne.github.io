/* ─────────────────────────────────────────────────────────
   MAIN.JS — Portfolio interactions & rendering
   ───────────────────────────────────────────────────────── */

(function () {
  "use strict";

  /* ── NEON COLOR CONTROL ─────────────────────────────── */
  const NEON_PRESETS = [
    { hue: 185, label: "CYAN" },
    { hue: 160, label: "AQUA" },
    { hue: 130, label: "GREEN" },
    { hue: 80,  label: "LIME" },
    { hue: 55,  label: "YELLOW" },
  ];

  let currentHue = parseInt(localStorage.getItem("neon-hue") || "185");

  function applyNeon(hue) {
    document.documentElement.style.setProperty("--neon-hue", hue);
    localStorage.setItem("neon-hue", hue);
    currentHue = hue;
  }

  function initNeonControl() {
    const slider = document.getElementById("neonSlider");
    const presetsEl = document.querySelector(".neon-presets");

    if (slider) {
      slider.value = currentHue;
      slider.addEventListener("input", () => applyNeon(slider.value));
    }

    if (presetsEl) {
      NEON_PRESETS.forEach((p) => {
        const dot = document.createElement("button");
        dot.className = "neon-preset";
        dot.title = p.label;
        dot.style.background = `hsl(${p.hue}, 100%, 55%)`;
        dot.style.boxShadow   = `0 0 6px hsl(${p.hue}, 100%, 55%)`;
        if (Math.abs(p.hue - currentHue) < 10) dot.classList.add("active");
        dot.addEventListener("click", () => {
          applyNeon(p.hue);
          if (slider) slider.value = p.hue;
          document.querySelectorAll(".neon-preset").forEach(d => d.classList.remove("active"));
          dot.classList.add("active");
        });
        presetsEl.appendChild(dot);
      });
    }

    applyNeon(currentHue);
  }

  /* ── CUSTOM CURSOR ──────────────────────────────────── */
  function initCursor() {
    const cursor = document.createElement("div");
    cursor.className = "cursor";
    const ring = document.createElement("div");
    ring.className = "cursor-ring";
    document.body.appendChild(cursor);
    document.body.appendChild(ring);

    let mx = -100, my = -100;
    let rx = -100, ry = -100;

    document.addEventListener("mousemove", (e) => {
      mx = e.clientX;
      my = e.clientY;
    });

    // smooth ring follow
    function animateCursor() {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      cursor.style.left = mx + "px";
      cursor.style.top  = my + "px";
      ring.style.left   = rx + "px";
      ring.style.top    = ry + "px";
      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // hover states
    const hoverEls = "a, button, .project-card, .contact-item, .neon-preset, input[type=range]";
    document.addEventListener("mouseover", (e) => {
      if (e.target.closest(hoverEls)) document.body.classList.add("hovering");
    });
    document.addEventListener("mouseout", (e) => {
      if (e.target.closest(hoverEls)) document.body.classList.remove("hovering");
    });
  }

  /* ── SCROLL EFFECTS ─────────────────────────────────── */
  function initScrollEffects() {
    const nav = document.querySelector(".nav");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 60) nav?.classList.add("scrolled");
      else nav?.classList.remove("scrolled");
    }, { passive: true });

    // Intersection observer for reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".reveal, .reveal-stagger").forEach((el) => {
      observer.observe(el);
    });
  }

  /* ── LOADER ─────────────────────────────────────────── */
  function initLoader() {
    const loader = document.querySelector(".loader");
    if (!loader) return;
    setTimeout(() => loader.classList.add("hidden"), 1400);
  }

  /* ── SVG ICONS ──────────────────────────────────────── */
  const ICONS = {
    github:     `<svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`,
    itchio:     `<svg viewBox="0 0 24 24"><path d="M3.13 1.338C2.08 1.96.02 4.328 0 6.668v1.002c0 1.256.933 2.33 2.25 2.33 1.58 0 2.797-1.3 2.797-2.879 0 1.578 1.182 2.88 2.76 2.88 1.58 0 2.714-1.302 2.714-2.88 0 1.578 1.267 2.88 2.846 2.88h.028c1.579 0 2.846-1.302 2.846-2.88 0 1.578 1.134 2.88 2.712 2.88 1.58 0 2.762-1.302 2.762-2.88 0 1.578 1.216 2.88 2.797 2.88 1.316 0 2.25-1.075 2.25-2.33V6.667c-.02-2.34-2.08-4.707-3.13-5.33C20.09.627 12.293.57 12 .57 11.707.57 3.91.628 3.13 1.338zm8.12 9.744c-.344 0-1.35.015-1.35.015l.001.001a4.3 4.3 0 0 0-.732.102C7.45 11.595 6.5 13.323 6.5 16.394v1.202c0 1.512.233 3.038.872 4.027.64.989 1.875 1.705 3.625 1.705H13c1.75 0 2.986-.716 3.625-1.705.64-.989.872-2.515.872-4.027v-1.202c0-3.071-.95-4.799-2.671-5.194a4.3 4.3 0 0 0-.732-.102s-1.007-.015-1.35-.015h-.494zm-.744 2.985h1.988c.496 0 .816.136 1.052.304.235.168.413.384.543.67.26.571.348 1.358.348 2.043 0 1.297-.125 2.166-.408 2.641-.283.476-.657.626-1.535.626h-1.988c-.878 0-1.252-.15-1.535-.626-.283-.475-.408-1.344-.408-2.641 0-.685.088-1.472.348-2.044.13-.285.308-.501.543-.67.236-.167.556-.303 1.052-.303z"/></svg>`,
    artstation: `<svg viewBox="0 0 24 24"><path d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 0 0 2.164 1.333h13.457l-2.792-4.838H0zm24 .025c0-.484-.143-.935-.388-1.314L15.728 2.728a2.424 2.424 0 0 0-2.164-1.333H9.419L21.598 22.54l1.92-3.325c.378-.637.482-.919.482-1.467zm-11.129-3.462L7.428 4.858l-5.444 9.428h10.887z"/></svg>`,
    linkedin:   `<svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
    twitter:    `<svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.232H2.746l7.73-8.835L1.254 2.25H8.08l4.265 5.638L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>`,
    email:      `<svg viewBox="0 0 24 24"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.909 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>`,
    youtube:    `<svg viewBox="0 0 24 24"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>`,
    discord:    `<svg viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.001.018.01.035.022.046a19.94 19.94 0 0 0 5.993 3.029.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.029.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>`,
    play:       `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`,
    code:       `<svg viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>`,
    video:      `<svg viewBox="0 0 24 24"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>`,
    store:      `<svg viewBox="0 0 24 24"><path d="M19 6H17C17 3.24 14.76 1 12 1S7 3.24 7 6H5C3.9 6 3 6.9 3 8V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V8C21 6.9 20.1 6 19 6ZM12 3C13.65 3 15 4.35 15 6H9C9 4.35 10.35 3 12 3ZM19 20H5V8H19V20Z"/></svg>`,
  };

  /* ── RENDER PROJECT GRID ────────────────────────────── */
  function renderProjects() {
    const grid = document.getElementById("projectsGrid");
    if (!grid || typeof PROJECTS === "undefined") return;

    grid.innerHTML = "";

    PROJECTS.forEach((project, i) => {
      const card = document.createElement("a");
      card.className = "project-card reveal";
      card.href = `project.html?id=${project.id}`;
      card.style.transitionDelay = `${i * 0.08}s`;

      const num = String(i + 1).padStart(2, "0");

      card.innerHTML = `
        <div class="card-media">
          <img
            src="${project.thumbnail}"
            alt="${project.title}"
            loading="lazy"
            onerror="this.style.background='var(--bg-card)'; this.style.opacity='0.4';"
          >
          <div class="card-hex-overlay"></div>
          <div class="card-media-overlay"></div>
          <div class="card-corner-tl"></div>
          <div class="card-corner-br"></div>
        </div>
        <div class="card-body">
          <div class="card-number">${num}</div>
          <div class="card-meta">
            <span class="card-year">${project.year}</span>
            <span class="card-engine">${project.engine}</span>
          </div>
          <h3 class="card-title">${project.title}</h3>
          <div class="card-subtitle">${project.subtitle}</div>
          <p class="card-desc">${project.shortDesc}</p>
          <div class="card-tags">
            ${project.tags.map(t => `<span class="tag">${t}</span>`).join("")}
          </div>
          <div class="card-enter">VIEW PROJECT</div>
        </div>
      `;

      grid.appendChild(card);
    });

    // Re-run observer for new elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    grid.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  }

  /* ── RENDER CONTACTS ────────────────────────────────── */
  function renderContacts() {
    const grid = document.querySelector(".contacts-grid");
    if (!grid || typeof CONTACTS === "undefined") return;

    grid.innerHTML = "";

    CONTACTS.forEach((c, i) => {
      const item = document.createElement("a");
      item.className = "contact-item reveal";
      item.href = c.url;
      item.target = c.url.startsWith("mailto") ? "_self" : "_blank";
      item.rel = "noopener noreferrer";
      item.style.transitionDelay = `${i * 0.05}s`;

      const iconSvg = ICONS[c.icon] || ICONS.email;

      item.innerHTML = `
        <div class="contact-icon">${iconSvg}</div>
        <div class="contact-label">${c.label}</div>
        <div class="contact-handle">${c.handle}</div>
        <span class="contact-arrow">↗</span>
      `;

      grid.appendChild(item);
    });

    // Re-run observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05 }
    );
    grid.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  }

  /* ── UPDATE FOOTER YEAR ─────────────────────────────── */
  function updateYear() {
    const el = document.getElementById("footerYear");
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ── INIT ────────────────────────────────────────────── */
  document.addEventListener("DOMContentLoaded", () => {
    initLoader();
    initCursor();
    initNeonControl();
    initScrollEffects();
    renderProjects();
    renderContacts();
    updateYear();
  });
})();
