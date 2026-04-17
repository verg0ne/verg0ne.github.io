/* ═══════════════════════════════════════════════════════════
   PROJECTS-DATA.JS — Single source of truth for all content
   Edit this file to update projects, contacts, education.
   ═══════════════════════════════════════════════════════════

   MEDIA FOLDER STRUCTURE:
   assets/media/
   ├── timeater/
   │   ├── thumb.gif        ← main card image (gif preferred)
   │   ├── hero.jpg         ← full-width hero on detail page
   │   ├── screen-1.jpg
   │   └── screen-2.jpg
   ├── flickers-of-hope/
   │   ├── thumb.gif
   │   ├── hero.jpg
   │   └── screen-1.jpg
   ├── to-bee-or-not-to-bee/
   ├── gnomes-vs-dwarves/
   ├── the-mall/
   ├── dont-panic/
   ├── tdvr/
   ├── project-momentum/
   └── smaller/             ← optional thumbnails for minor projects
       ├── midnight-rider.jpg
       └── ...

   VIDEO SUPPORT:
   - For YouTube: set videoId: "dQw4w9WgXcQ"
   - For local mp4: set videoFile: "assets/media/your-project/trailer.mp4"
   - Card thumbnail will show a play icon if either is set.
*/

/* ── MAJOR PROJECTS ───────────────────────────────────────── */
const PROJECTS = [
  {
    id: "timeater",
    title: "Timeater",
    subtitle: "Metroidvania",
    engine: "Unity 6.0",
    teamSize: "Team of 20+",
    duration: "Ongoing",
    tags: ["Metroidvania", "Gameplay Programmer", "Commercial", "NDA"],
    badge: "nda",            // "nda" | "wip" | "" — shows a badge on card
    thumbnail: "assets/media/timeater/thumb.gif",
    heroImage: "assets/media/timeater/hero.jpg",
    images: [
      "assets/media/timeater/screen-1.jpg",
      "assets/media/timeater/screen-2.jpg",
    ],
    // videoId: "YOUTUBE_ID",        // optional YouTube embed
    // videoFile: "assets/media/timeater/trailer.mp4",  // optional local video
    shortDesc: "Full-scale commercial metroidvania developed at GFCreativeLab. Currently wishlistable on Steam. Working as Gameplay Programmer, code optimizer and designer.",
    fullDesc: `
      <p>Timeater is a full-scale commercial metroidvania currently in development at GFCreativeLab, the studio where I work as a Junior Gameplay Programmer. The game is wishlistable on Steam and is scheduled for release soon.</p>
      <p>My role covers gameplay programming, code optimization, and game design contributions. Further details cannot be disclosed due to NDA.</p>
      <h3>// My Role</h3>
      <ul>
        <li>Gameplay programming across core systems</li>
        <li>Code review and optimization passes</li>
        <li>Design contributions and prototyping</li>
        <li>Collaboration in a professional Agile pipeline</li>
      </ul>
      <h3>// Note</h3>
      <p>Additional details about gameplay systems and visuals are under NDA. Check the Steam page for the latest public information.</p>
    `,
    links: [
      { label: "WISHLIST ON STEAM", url: "https://store.steampowered.com", type: "store" },
    ],
  },
  {
    id: "flickers-of-hope",
    title: "Flickers of Hope",
    subtitle: "Hack & Slash",
    engine: "Unreal Engine 5.5",
    teamSize: "Team of 2",
    duration: "7 months",
    tags: ["Hack & Slash", "UE5", "Thesis Project", "Combat Systems", "Niagara"],
    badge: "",
    thumbnail: "assets/media/flickers-of-hope/thumb.gif",
    heroImage: "assets/media/flickers-of-hope/hero.jpg",
    images: [
      "assets/media/flickers-of-hope/screen-1.jpg",
      "assets/media/flickers-of-hope/screen-2.jpg",
      "assets/media/flickers-of-hope/screen-3.jpg",
    ],
    // videoId: "YOUTUBE_ID",
    shortDesc: "Full Hack & Slash built from scratch as a thesis project — boss fights, deep combo system, traversal mechanics, Niagara FX and juice feedback systems. 7 months of development.",
    fullDesc: `
      <p>Flickers of Hope is my Bachelor's thesis project, developed over 7 months in a team of two using Unreal Engine 5.5. The goal was to build a complete, polished Hack & Slash experience entirely from scratch.</p>
      <p>The project covers the full development pipeline — combat, traversal, boss AI, visual feedback — with a strong focus on game feel and responsiveness.</p>
      <h3>// Systems Built</h3>
      <ul>
        <li>Deep combo system with directional and contextual attacks</li>
        <li>Boss fight framework with multi-phase state machines</li>
        <li>Full traversal system — dashes, air juggles, wall interactions</li>
        <li>Niagara particle systems for all combat feedback</li>
        <li>Screen shake, hitpause, and camera reaction feedback systems</li>
        <li>Enemy AI with behaviour trees and perception components</li>
      </ul>
      <h3>// Technical Highlights</h3>
      <ul>
        <li>Built on top of UE5's Enhanced Input system</li>
        <li>Modular ability component architecture</li>
        <li>Custom animation notifies driving combat logic</li>
        <li>Lumen for real-time global illumination</li>
      </ul>
    `,
    links: [
      { label: "VIEW ON GITHUB", url: "https://github.com/Verg0ne", type: "code" },
    ],
  },
  {
    id: "project-momentum",
    title: "Project Momentum",
    subtitle: "Endless Runner",
    engine: "Unreal Engine 5 / C++",
    teamSize: "Solo",
    duration: "Ongoing",
    tags: ["C++", "UE5", "Procedural", "Endless Runner", "Physics", "Solo"],
    badge: "wip",
    thumbnail: "assets/media/project-momentum/thumb.gif",
    heroImage: "assets/media/project-momentum/hero.jpg",
    images: [
      "assets/media/project-momentum/screen-1.jpg",
      "assets/media/project-momentum/screen-2.jpg",
      "assets/media/project-momentum/screen-3.jpg",
    ],
    // videoId: "YOUTUBE_ID",         ← uncomment and fill in once you have a trailer
    // videoFile: "assets/media/project-momentum/trailer.mp4",
    shortDesc: "Rope-swinging endless runner set inside a gigantic abandoned megastructure. Fully procedurally generated — no two runs are the same. Flip, maneuver tightly, explore.",
    fullDesc: `
      <p>Project Momentum is a solo C++ / Unreal Engine 5 project currently in active development. The game is a rope-swinging endless runner set inside a colossal abandoned megastructure — a sprawling brutalist labyrinth of corridors, shafts, voids and decaying infrastructure that stretches further than any player will ever see in a single run.</p>
      <p>Every run is procedurally generated from modular architectural chunks, meaning the layout, obstacles, hazards and spatial composition are never the same twice. The core loop is about momentum mastery — reading the space ahead, committing to swings, and chaining traversal to build and maintain speed.</p>
      <h3>// Core Gameplay</h3>
      <ul>
        <li>Rope physics — dynamic grapple points, swing arcs, release timing</li>
        <li>Tight spatial maneuvering through narrow corridors and open voids</li>
        <li>Speed and flow as the primary win condition — no health, no lives, just momentum</li>
        <li>Exploration layer — diverging paths, hidden geometry, risk/reward routing</li>
      </ul>
      <h3>// Technical Systems</h3>
      <ul>
        <li>Custom rope simulation in Blueprint — Customized physics, satisfying swing feeling</li>
        <li>Procedural world generation via PCG and HISMs — chunk pooling system for seamless endless world integration</li>
        <li>Seed based point grids for procedural layout and obstacle generation</li>
        <li>Environmental variety system — lighting states, decay levels, hazard density vary per run</li>
        <li>Performance budget management for seamless streaming with no visible seams</li>
      </ul>
      <h3>// Design Direction</h3>
      <p>The megastructure setting is intentionally inspired by art pieces like Blame! and Naissancee. I aimed to recreate the feeling of absolute vastness and lack of human presence in the architecture.</p>
      <p>The main focus of the game is on the movement system, focusing on having a satisfying feeling with a high skill ceiling, rewarding players for tight controls, precise timing and risk taking.</p>
    `,
    links: [
      { label: "WISHLIST ON STEAM SOON", url: "https://store.steampowered.com", type: "store" },
      { label: "FOLLOW ON ITCH.IO SOON", url: "https://itch.io",                type: "play"  },
    ],
  },
  {
    id: "to-bee-or-not-to-bee",
    title: "To Bee or Not to Bee",
    subtitle: "Endless Runner",
    engine: "Unity 6.0",
    teamSize: "Team of 10",
    duration: "3 weeks",
    tags: ["Game Jam", "Endless Runner", "Boid Physics", "Object Pooling"],
    badge: "",
    thumbnail: "assets/media/to-bee-or-not-to-bee/thumb.gif",
    heroImage: "assets/media/to-bee-or-not-to-bee/hero.jpg",
    images: [
      "assets/media/to-bee-or-not-to-bee/screen-1.jpg",
      "assets/media/to-bee-or-not-to-bee/screen-2.jpg",
    ],
    shortDesc: "Game Jam entry developed in a real professional environment. Led a team of 3 programmers implementing boid physics, gameplay powerups, and Object Pooling-based procedural world generation.",
    fullDesc: `
      <p>To Bee or Not to Bee was developed as a Game Jam in a real professional work environment — structured like an industry project with a full team of 10. I led a sub-team of 3 programmers, coordinating alongside artists and designers under a 3-week deadline.</p>
      <h3>// My Contributions</h3>
      <ul>
        <li>Boid-based flocking physics for the bee swarm mechanics</li>
        <li>Endless runner procedural world generation via Object Pooling</li>
        <li>Gameplay powerup system with modular pickup architecture</li>
        <li>Programmer coordination — task division, code reviews, integration</li>
      </ul>
      <h3>// Technical Notes</h3>
      <ul>
        <li>Custom boid simulation with spatial partitioning for performance</li>
        <li>Object Pooling architecture for zero-allocation world generation</li>
        <li>Scriptable Object-driven powerup data pipeline</li>
      </ul>
    `,
    links: [
      { label: "VIEW ON ITCH.IO", url: "https://itch.io", type: "play" },
    ],
  },
  {
    id: "gnomes-vs-dwarves",
    title: "Gnomes vs Dwarves",
    subtitle: "Turn-Based Strategy",
    engine: "Unity 6.0",
    teamSize: "Team of 9",
    duration: "4 weeks",
    tags: ["Game Jam", "TBS", "A* Pathfinding", "AI", "Long Distance"],
    badge: "",
    thumbnail: "assets/media/gnomes-vs-dwarves/thumb.gif",
    heroImage: "assets/media/gnomes-vs-dwarves/hero.jpg",
    images: [
      "assets/media/gnomes-vs-dwarves/screen-1.jpg",
      "assets/media/gnomes-vs-dwarves/screen-2.jpg",
    ],
    shortDesc: "Long-distance Game Jam — sole programmer for a team of 9. Built a complete turn-based strategy game with A* pathfinding AI and upgradeable unit system from scratch in 4 weeks.",
    fullDesc: `
      <p>Gnomes vs Dwarves was a Game Jam conducted fully remotely — I was the only programmer on a team of 9 collaborating across time zones. Over 4 weeks I built the entire game's technical foundation solo.</p>
      <h3>// Systems Built</h3>
      <ul>
        <li>Complete turn-based strategy engine with action point system</li>
        <li>A* pathfinding on a hex/tile grid with dynamic obstacle updates</li>
        <li>AI opponent with threat evaluation and target prioritization</li>
        <li>Upgradeable unit system with stat scaling and unlockable abilities</li>
        <li>Fog of war system with line-of-sight calculations</li>
      </ul>
      <h3>// Notes</h3>
      <p>Working as the sole programmer under remote coordination pressure was a strong test of time management and scope control. Every feature had to be designed for solo maintainability.</p>
    `,
    links: [
      { label: "VIEW ON ITCH.IO", url: "https://itch.io", type: "play" },
    ],
  },
  {
    id: "the-mall",
    title: "The Mall",
    subtitle: "Survival Horror",
    engine: "Unity 6.0",
    teamSize: "Team of 6",
    duration: "Ongoing",
    tags: ["Survival Horror", "Passion Project", "AI", "Save System"],
    badge: "wip",
    thumbnail: "assets/media/the-mall/thumb.gif",
    heroImage: "assets/media/the-mall/hero.jpg",
    images: [
      "assets/media/the-mall/screen-1.jpg",
      "assets/media/the-mall/screen-2.jpg",
    ],
    shortDesc: "Ongoing passion project. Built an ID-based object saving & inspection system and prototyped a survival horror AI follower. Started as a one-week prototype, still in active development.",
    fullDesc: `
      <p>The Mall is an ongoing survival horror passion project built with a small team of 6. What began as a week-long prototype has grown into an active long-term project exploring atmospheric horror design.</p>
      <h3>// My Contributions</h3>
      <ul>
        <li>ID-based persistent object saving system — every interactable has a unique scene-persistent ID</li>
        <li>Inspection system — contextual object examination with rotation, zoom, and annotations</li>
        <li>Survival horror AI follower prototype — companion with emotional state machine</li>
        <li>General gameplay programming and architecture decisions</li>
      </ul>
      <h3>// Ongoing Work</h3>
      <p>The project is actively evolving. Current focus is on refining the AI follower's fear-reactive behaviour and expanding the save system to support full level persistence.</p>
    `,
    links: [],
  },
  {
    id: "dont-panic",
    title: "Don't Panic!",
    subtitle: "Experimental / LLM Integration",
    engine: "Unity 6.0",
    teamSize: "Team of 2",
    duration: "4 weeks",
    tags: ["Experimental", "LLM", "AI", "Object Recognition", "Pathfinding"],
    badge: "",
    thumbnail: "assets/media/dont-panic/thumb.gif",
    heroImage: "assets/media/dont-panic/hero.jpg",
    images: [
      "assets/media/dont-panic/screen-1.jpg",
    ],
    shortDesc: "Experimental integration of LLMs into Unity as core gameplay mechanics — object recognition, text-based instructions, and AI-driven pathfinding based on language model critical thinking.",
    fullDesc: `
      <p>Don't Panic! is an experimental research project exploring Large Language Models as first-class gameplay systems rather than UI overlays. I was the sole programmer on the project, developed over 4 weeks.</p>
      <p>The core concept: the player communicates with an LLM that reasons about the game world, identifies objects via image recognition, and generates pathfinding instructions accordingly.</p>
      <h3>// Technical Implementation</h3>
      <ul>
        <li>LLM API integration within Unity — real-time prompt engineering</li>
        <li>Computer vision pipeline for in-game object recognition</li>
        <li>LLM-generated natural language → parsed movement instructions</li>
        <li>Custom pathfinding layer driven by AI decision output</li>
        <li>Prompt context management to maintain consistent game state</li>
      </ul>
      <h3>// Research Value</h3>
      <p>This project explored whether LLM reasoning could replace traditional gameplay scripting for dynamic problem-solving scenarios. The results were promising — the model demonstrated genuine spatial reasoning when given structured visual context.</p>
    `,
    links: [
      { label: "VIEW SOURCE", url: "https://github.com/Verg0ne", type: "code" },
    ],
  },
  {
    id: "tdvr",
    title: "TDVR",
    subtitle: "VR Tower Defense",
    engine: "Unity VR",
    teamSize: "Solo",
    duration: "3 weeks",
    tags: ["VR", "Tower Defense", "Vehicle Physics", "Ragdoll", "Solo"],
    badge: "",
    thumbnail: "assets/media/tdvr/thumb.gif",
    heroImage: "assets/media/tdvr/hero.jpg",
    images: [
      "assets/media/tdvr/screen-1.jpg",
    ],
    shortDesc: "Solo VR tower defense game built in 3 weeks. Car-based map traversal with full vehicle physics, physics-based VR combat with ragdoll enemies.",
    fullDesc: `
      <p>TDVR is a solo VR tower defense game developed over 3 weeks, combining two genres that rarely meet: the strategic resource loop of a tower defense with the physicality of VR interaction.</p>
      <p>The core traversal hook is a driveable car with full Unity vehicle physics — players navigate the map by driving between tower placement zones, creating a dynamic spatial challenge.</p>
      <h3>// Systems</h3>
      <ul>
        <li>Full Unity vehicle physics — wheel colliders, suspension, drift handling</li>
        <li>VR interaction system — physics-based grabbing, throwing, punching</li>
        <li>Ragdoll enemy physics on death — dynamic destruction feedback</li>
        <li>Tower placement and upgrade loop with resource management</li>
        <li>Wave spawning system with difficulty scaling</li>
      </ul>
      <h3>// VR Design Notes</h3>
      <p>The vehicle-VR combination created interesting design challenges around motion sickness mitigation. Comfort modes and field-of-view vignetting were implemented and tuned iteratively.</p>
    `,
    links: [],
  },
];

/* ── MINOR PROJECTS ───────────────────────────────────────── */
const MINOR_PROJECTS = [
  {
    engine: "Raw C++",
    items: [
      {
        title: "Zork Clone",
        desc: "Clone of the classic text adventure game Zork",
        teamSize: "Solo",
        duration: "5 days",
      },
      {
        title: "NewSnake Clone",
        desc: "Clone of NewSnake — terminal-based snake implementation",
        teamSize: "Solo",
        duration: "5 days",
      },
    ],
  },
  {
    engine: "Unity",
    items: [
      {
        title: "Vampire Survivors Clone",
        desc: "Full clone of Vampire Survivors — waves, upgrades, meta-progression",
        teamSize: "Solo",
        duration: "3 weeks",
      },
      {
        title: "Midnight Rider",
        desc: "Car physics-based endless runner with online leaderboard",
        teamSize: "Solo",
        duration: "2 weeks",
      },
    ],
  },
  {
    engine: "Unreal Engine",
    items: [
      {
        title: "Small RTS",
        desc: "RTS prototype — smooth unit selection, command interface, gameplay loop",
        teamSize: "Solo",
        duration: "3 days",
      },
      {
        title: "Voxel Game",
        desc: "Voxel prototype — mass procedural world generation, modular interaction system",
        teamSize: "Solo",
        duration: "5 days",
      },
    ],
  },
];

/* ── EDUCATION ────────────────────────────────────────────── */
const EDUCATION = [
  {
    title: "Master's in Game Development",
    place: "Futuregames Warsaw",
    date: "2025 — Ongoing",
    desc: "Specialization in game programming — C#, C++, Blueprint, shader programming. Focus on gameplay, traversal and combat systems.",
  },
  {
    title: "Bachelor's in Creative Technologies",
    place: "NABA Milan",
    date: "2021 — 2025",
    desc: "Interdisciplinary degree covering game design, interactive media, and creative software development.",
  },
  {
    title: "Scientific High School Diploma",
    place: "Liceo G. Marconi, Pesaro",
    date: "2016 — 2021",
    desc: "",
  },
];

/* ── WORK EXPERIENCE ──────────────────────────────────────── */
const EXPERIENCE = [
  {
    title: "Gameplay Programmer (Junior)",
    place: "GFCreative Lab",
    date: "2026 — Ongoing",
    desc: "Working on Timeater — a commercial metroidvania. Role covers gameplay programming, code optimization, and design input within an Agile team of 20+.",
  },
  {
    title: "Game Development (4 years)",
    place: "Independent / Academic",
    date: "2021 — 2025",
    desc: "4 years building games across Unity, Unreal Engine, and C++. Specializing in gameplay systems, fast prototyping, and full-pipeline development.",
  },
];

/* ── CONTACTS ─────────────────────────────────────────────── */
const CONTACTS = [
  { label: "GitHub",     handle: "Verg0ne",           url: "https://github.com/Verg0ne",                          icon: "github" },
  { label: "ArtStation", handle: "vergone",            url: "https://www.artstation.com/vergone",                  icon: "artstation" },
  { label: "LinkedIn",   handle: "Matteo Vergari",     url: "https://www.linkedin.com/in/matteo-vergari-15aabb349", icon: "linkedin" },
  { label: "Discord",    handle: "@vergone",           url: "https://discord.com",                                 icon: "discord" },
  { label: "Email",      handle: "matteo.vergari03@gmail.com", url: "mailto:matteo.vergari03@gmail.com",           icon: "email" },
];
