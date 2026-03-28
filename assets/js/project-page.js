/* ─────────────────────────────────────────────────────────
   PROJECT-PAGE.JS — Renders individual project detail page
   ───────────────────────────────────────────────────────── */

(function () {
  "use strict";

  const LINK_TYPE_ICONS = {
    play:  `<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M8 5v14l11-7z"/></svg>`,
    code:  `<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>`,
    video: `<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>`,
    store: `<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M19 6H17C17 3.24 14.76 1 12 1S7 3.24 7 6H5C3.9 6 3 6.9 3 8V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V8C21 6.9 20.1 6 19 6ZM12 3C13.65 3 15 4.35 15 6H9C9 4.35 10.35 3 12 3ZM19 20H5V8H19V20Z"/></svg>`,
  };

  function getProjectId() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
  }

  function renderProject() {
    const id = getProjectId();
    const container = document.getElementById("projectContainer");

    if (!container) return;

    if (!id || typeof PROJECTS === "undefined") {
      renderNotFound(container);
      return;
    }

    const project = PROJECTS.find((p) => p.id === id);

    if (!project) {
      renderNotFound(container);
      return;
    }

    // Update page title
    document.title = `${project.title} // MATTEO VERGARI`;

    // Build HTML
    const heroImg = project.images?.[0] || project.thumbnail;

    const tagsHtml = project.tags
      .map((t) => `<span class="tag">${t}</span>`)
      .join("");

    const linksHtml = (project.links || [])
      .map(
        (l) => `
      <a href="${l.url}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
        <span class="link-icon">${LINK_TYPE_ICONS[l.type] || ""}</span>
        ${l.label}
      </a>`
      )
      .join("");

    const galleryImages = project.images?.length > 1 ? project.images.slice(1) : [];
    const galleryHtml = galleryImages.length
      ? `
      <div class="project-gallery reveal">
        <div class="gallery-label">// SCREENSHOTS &amp; MEDIA</div>
        <div class="gallery-grid">
          ${galleryImages.map((img, i) => `
            <div class="gallery-item" data-full="${img}">
              <img src="${img}" alt="${project.title} screenshot ${i + 1}" loading="lazy"
                onerror="this.parentElement.style.display='none'">
            </div>
          `).join("")}
        </div>
      </div>`
      : "";

    container.innerHTML = `
      <!-- HERO -->
      <div class="project-page-hero">
        <img class="project-hero-img" src="${heroImg}" alt="${project.title}"
          onerror="this.style.display='none'">
        <div class="project-hero-overlay"></div>
        <div class="project-hero-content">
          <a href="index.html" class="project-back">BACK TO PROJECTS</a>
          <h1 class="project-page-title glitch" data-text="${project.title}">${project.title}</h1>
          <div class="project-page-meta">
            <span class="card-year">${project.year}</span>
            <span class="card-engine">${project.engine}</span>
            ${tagsHtml}
          </div>
        </div>
      </div>

      <!-- BODY -->
      <div class="project-body">
        <!-- Main content -->
        <div class="project-content reveal">
          <h3>// ABOUT</h3>
          ${project.fullDesc || `<p>${project.shortDesc}</p>`}
        </div>

        <!-- Sidebar -->
        <aside class="project-sidebar reveal">
          <div class="sidebar-block">
            <div class="sidebar-block-label">// ENGINE</div>
            <div class="sidebar-block-value">${project.engine}</div>
          </div>
          <div class="sidebar-block">
            <div class="sidebar-block-label">// YEAR</div>
            <div class="sidebar-block-value">${project.year}</div>
          </div>
          <div class="sidebar-block">
            <div class="sidebar-block-label">// TAGS</div>
            <div class="card-tags" style="margin-top:10px">${tagsHtml}</div>
          </div>
          ${
            linksHtml
              ? `<div class="sidebar-block">
              <div class="sidebar-block-label">// LINKS</div>
              <div class="project-links" style="margin-top:14px">${linksHtml}</div>
            </div>`
              : ""
          }
        </aside>
      </div>

      <!-- GALLERY -->
      ${galleryHtml}

      <!-- NEXT PROJECT -->
      ${renderNextProject(project)}
    `;

    // Init gallery lightbox
    initLightbox();

    // Scroll reveals
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    container.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  }

  function renderNextProject(current) {
    if (typeof PROJECTS === "undefined" || PROJECTS.length < 2) return "";
    const idx = PROJECTS.findIndex((p) => p.id === current.id);
    const next = PROJECTS[(idx + 1) % PROJECTS.length];

    return `
      <div style="border-top: 1px solid var(--border); padding: 60px 80px; text-align:right;">
        <div class="section-label">// NEXT PROJECT</div>
        <a href="project.html?id=${next.id}" class="btn btn-primary" style="margin-top:20px; display:inline-flex;">
          ${next.title} →
        </a>
      </div>
    `;
  }

  function renderNotFound(container) {
    document.title = "404 // MATTEO VERGARI";
    container.innerHTML = `
      <div class="not-found">
        <div class="not-found-code">404</div>
        <div>PROJECT NOT FOUND</div>
        <a href="index.html" class="btn btn-outline" style="margin-top:20px;">← RETURN TO BASE</a>
      </div>
    `;
  }

  /* ── LIGHTBOX ──────────────────────────────────────── */
  function initLightbox() {
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.innerHTML = `
      <div class="lightbox-close">[ CLOSE ]</div>
      <img src="" alt="Gallery image">
    `;
    document.body.appendChild(lightbox);

    const lbImg = lightbox.querySelector("img");
    const lbClose = lightbox.querySelector(".lightbox-close");

    document.querySelectorAll(".gallery-item").forEach((item) => {
      item.addEventListener("click", () => {
        lbImg.src = item.dataset.full || item.querySelector("img")?.src || "";
        lightbox.classList.add("active");
      });
    });

    lbClose.addEventListener("click", () => lightbox.classList.remove("active"));
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) lightbox.classList.remove("active");
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") lightbox.classList.remove("active");
    });
  }

  /* ── INIT ────────────────────────────────────────────── */
  document.addEventListener("DOMContentLoaded", () => {
    renderProject();
  });
})();
