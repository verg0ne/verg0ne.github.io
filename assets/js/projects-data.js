/**
 * PROJECTS DATA
 * ─────────────────────────────────────────────────────────
 * Add your game projects here. Each object represents one project.
 * The `id` field is used for the URL: project.html?id=your-id
 *
 * thumbnail  → shown on the main grid (gif or image)
 * images     → gallery on the project detail page
 * links      → type can be: "play" | "code" | "video" | "store"
 */

const PROJECTS = [
  {
    id: "project-alpha",
    title: "PROJECT ALPHA",
    subtitle: "SURVIVAL HORROR",
    year: "2024",
    engine: "UNREAL ENGINE 5",
    tags: ["3D", "Horror", "Solo Dev", "UE5"],
    thumbnail: "assets/images/placeholder-thumb.svg",   // ← replace with your gif/image
    images: [
      "assets/images/placeholder-1.svg",               // ← replace with your screenshots
      "assets/images/placeholder-2.svg",
      "assets/images/placeholder-3.svg",
    ],
    shortDesc: "A first-person survival horror experience set in an abandoned research facility on the edge of known space. Survive. Understand. Escape.",
    fullDesc: `
      <p>PROJECT ALPHA drops the player into the remnants of HELIX Station — a once-thriving research facility now silent and overtaken by something that should not exist.</p>
      <p>Built solo over 10 months, the game uses a custom AI behavior system driven by environmental audio cues. Light and sound become your most critical survival tools.</p>
      <h3>// CORE SYSTEMS</h3>
      <ul>
        <li>Dynamic AI driven by audio propagation simulation</li>
        <li>Adaptive tension soundtrack using reactive audio layers</li>
        <li>Inventory management with degrading equipment</li>
        <li>Multiple narrative endings based on player choices</li>
        <li>Fully volumetric lighting and fog system</li>
      </ul>
      <h3>// DEVELOPMENT NOTES</h3>
      <p>This was my first solo full-scope project in UE5, and pushed me deep into Lumen, Nanite, and behavior tree design. The AI still haunts me.</p>
    `,
    links: [
      { label: "PLAY ON ITCH.IO", url: "https://itch.io", type: "play" },
      { label: "VIEW SOURCE", url: "https://github.com", type: "code" },
    ],
  },
  {
    id: "neon-drift",
    title: "NEON DRIFT",
    subtitle: "ARCADE RACING",
    year: "2023",
    engine: "UNITY 2022",
    tags: ["3D", "Racing", "Arcade", "Unity"],
    thumbnail: "assets/images/placeholder-thumb.svg",
    images: [
      "assets/images/placeholder-1.svg",
      "assets/images/placeholder-2.svg",
    ],
    shortDesc: "High-speed arcade racing through a procedurally generated cyberpunk city. No brakes. Only momentum.",
    fullDesc: `
      <p>NEON DRIFT is a momentum-based arcade racer where the city itself is your opponent. Tracks are generated from a tile-based system that adapts difficulty in real time based on player performance.</p>
      <p>The game features a hand-tuned vehicle physics model built from scratch — no Rigidbody shortcuts. Every drift, boost, and near-miss was crafted frame by frame.</p>
      <h3>// CORE SYSTEMS</h3>
      <ul>
        <li>Custom vehicle physics — wheel friction, weight transfer, drift states</li>
        <li>Procedural track generation with biome variety</li>
        <li>Combo-based scoring with time dilation on perfect lines</li>
        <li>Online leaderboards and ghost racing</li>
      </ul>
    `,
    links: [
      { label: "PLAY ON ITCH.IO", url: "https://itch.io", type: "play" },
      { label: "WATCH TRAILER", url: "https://youtube.com", type: "video" },
      { label: "VIEW SOURCE", url: "https://github.com", type: "code" },
    ],
  },
  {
    id: "echoes",
    title: "ECHOES",
    subtitle: "NARRATIVE PUZZLE",
    year: "2023",
    engine: "GODOT 4",
    tags: ["2D", "Narrative", "Puzzle", "Jam Game"],
    thumbnail: "assets/images/placeholder-thumb.svg",
    images: [
      "assets/images/placeholder-1.svg",
      "assets/images/placeholder-2.svg",
    ],
    shortDesc: "A 48-hour game jam entry. You are a signal bouncing through broken memories, reassembling what was lost. Winner — Best Narrative, Global Game Jam 2023.",
    fullDesc: `
      <p>ECHOES was built in 48 hours for Global Game Jam 2023 around the theme "Roots". The result: a short narrative puzzle experience told through fragmented audio logs and environmental clues.</p>
      <p>Playing as an electromagnetic echo, you traverse corrupted memory spaces, reconstructing the final moments of a lost signal. Each solved puzzle reveals another fragment of truth.</p>
      <h3>// AWARDS</h3>
      <ul>
        <li>🏆 Best Narrative — Global Game Jam 2023</li>
        <li>🎖 Honorable Mention — Best Art Direction</li>
      </ul>
      <h3>// CORE SYSTEMS</h3>
      <ul>
        <li>Signal-based movement on a directed graph</li>
        <li>Procedural audio degradation based on memory integrity</li>
        <li>Branching environmental storytelling</li>
      </ul>
    `,
    links: [
      { label: "PLAY ON ITCH.IO", url: "https://itch.io", type: "play" },
      { label: "JAM PAGE", url: "https://globalgamejam.org", type: "store" },
    ],
  },
];

// Contact links – add/remove/change as needed
const CONTACTS = [
  { label: "GITHUB",     url: "https://github.com/MatteoVergari",      icon: "github",    handle: "@MatteoVergari" },
  { label: "ITCH.IO",    url: "https://itch.io",                        icon: "itchio",    handle: "matteo.vergari" },
  { label: "ARTSTATION", url: "https://artstation.com",                 icon: "artstation",handle: "matteovergari" },
  { label: "LINKEDIN",   url: "https://linkedin.com",                   icon: "linkedin",  handle: "Matteo Vergari" },
  { label: "TWITTER/X",  url: "https://x.com",                         icon: "twitter",   handle: "@MatteoVergari" },
  { label: "EMAIL",      url: "mailto:matteo.vergari@gmail.com",        icon: "email",     handle: "matteo.vergari@gmail.com" },
  { label: "YOUTUBE",    url: "https://youtube.com",                    icon: "youtube",   handle: "Matteo Vergari Dev" },
  { label: "DISCORD",    url: "https://discord.gg/",                    icon: "discord",   handle: "matteovergari" },
];
