export interface ContactLink {
  id: string;
  label: string;
  href: string;
  type: "email" | "github" | "twitter" | "instagram" | "linkedin" | "external";
  isPrimary?: boolean;
  username?: string;
}

export interface FeaturedProduct {
  id: string;
  number: string;
  title: string;
  logo: string;
  domain?: string;
  category: string;
  status: string;
  tagline: string;
  whatIsIt: string;
  whyBuilt: string;
  whatBuilt: string;
  tech: string[];
  highlights?: string[];
  liveUrl?: string;
  codeUrl?: string;
}

export interface ExperimentItem {
  name: string;
  desc: string;
  tech: string;
  status: string;
  link: string;
}

export interface TechStackGroup {
  category: string;
  description: string;
  skills: string[];
}

export interface PhilosophyStep {
  number: string;
  step: string;
  title: string;
  description: string;
}

export interface PortfolioConfig {
  studio: {
    name: string;
    alias: string;
    tagline: string;
    subheadline: string;
    role: string;
    status: string;
    bio: string;
    location: string;
    domain: string;
    siteUrl: string;
    builderName: string;
    builderRole: string;
    builderBio: string;
  };
  // Backwards compatibility for components referencing personal
  personal: {
    name: string;
    alias: string;
    role: string;
    status: string;
    tagline: string;
    bio: string;
    location: string;
    domain: string;
    siteUrl: string;
  };
  navigation: {
    name: string;
    href: string;
  }[];
  contacts: ContactLink[];
  projects: FeaturedProduct[];
  experiments: ExperimentItem[];
  philosophy: PhilosophyStep[];
  techStack: TechStackGroup[];
}

export const portfolioConfig: PortfolioConfig = {
  studio: {
    name: "Xweet",
    alias: "Xweet",
    tagline: "I build things worth using.",
    subheadline:
      "Independent software, products and experiments — built, shipped and continuously improved.",
    role: "Independent Software & Product Studio",
    status: "INDEPENDENT STUDIO · SHIPPING & ITERATING",
    bio: "Xweet is an independent software studio building privacy-conscious applications, high-performance web platforms, and purposeful digital utilities.",
    location: "India (UTC +5:30)",
    domain: "xweet.in",
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://xweet.in",
    builderName: "Vicky Raja",
    builderRole: "Founder & Lead Developer",
    builderBio:
      "Xweet is driven by Vicky Raja, an independent software developer and product builder who enjoys creating useful, privacy-conscious and thoughtfully designed software. Every product is conceived, designed, and shipped directly with focus on speed, privacy, and craftsmanship.",
  },

  personal: {
    name: "Xweet",
    alias: "Xweet",
    role: "Independent Software & Product Studio",
    status: "INDEPENDENT STUDIO · SHIPPING & ITERATING",
    tagline: "I build things worth using.",
    bio: "Independent software, products and experiments — built, shipped and continuously improved.",
    location: "India (UTC +5:30)",
    domain: "xweet.in",
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://xweet.in",
  },

  navigation: [
    { name: "Products", href: "/#products" },
    { name: "Lab", href: "/#lab" },
    { name: "Philosophy", href: "/#philosophy" },
    { name: "About", href: "/about" },
    { name: "Technologies", href: "/#technologies" },
    { name: "Open Source", href: "/#opensource" },
    { name: "Contact", href: "/contact" },
  ],

  // Centralized CRUD for all contact buttons and social links across the site
  contacts: [
    {
      id: "email",
      label: "Work with Xweet",
      href: "mailto:contact@xweet.in",
      type: "email",
      isPrimary: true,
      username: "contact@xweet.in",
    },
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/imvicky69",
      type: "github",
      username: "imvicky69",
    },
    {
      id: "twitter",
      label: "X / Twitter",
      href: "https://x.com",
      type: "twitter",
      username: "@xweet",
    },
    {
      id: "instagram",
      label: "Instagram",
      href: "https://instagram.com/xweet_69",
      type: "instagram",
      username: "@xweet_69",
    },
  ],

  projects: [
    {
      id: "infyn",
      number: "01",
      title: "Infyn",
      logo: "/infyn-logo.png",
      domain: "infyn.software",
      category: "PRODUCT ECOSYSTEM · PRIVACY & IN-BROWSER TOOLS",
      status: "LIVE ECOSYSTEM",
      tagline: "100% free, private, in-browser utilities running locally with zero cloud uploads.",
      whatIsIt:
        "Infyn is an independent, privacy-first software suite providing essential everyday utilities—AI background removal, batch image compression, PDF tools, and client encryption—running 100% locally in your browser.",
      whyBuilt:
        "Everyday consumer web tools enforce artificial signups, rate limits, and monetize personal files on cloud servers. Infyn was engineered so that file processing never leaves the user's machine.",
      whatBuilt:
        "Engineered client-side WebAssembly and Web Crypto pipelines, zero-log services, offline-capable progressive web architecture, and an ultra-fast interface with zero tracking.",
      tech: ["Next.js", "TypeScript", "WebAssembly", "Web Crypto API", "Tailwind CSS"],
      highlights: [
        "100% client-side local browser execution",
        "Zero cloud uploads, telemetry, or user profiling",
        "Edge-cached offline progressive web app",
      ],
      liveUrl: "https://infyn.software",
      codeUrl: "https://github.com",
    },
    {
      id: "smileypdf",
      number: "02",
      title: "Smiley PDF",
      logo: "/smiley.png",
      domain: "smiley.xweet.in",
      category: "ANDROID APP · PRODUCTIVITY & BIOMETRICS",
      status: "CLOSED BETA · PLAY STORE",
      tagline: "Fast, private & zero-bloat PDF reader for Android with 120 FPS rendering.",
      whatIsIt:
        "Smiley PDF is an ultra-clean, high-performance, air-gapped PDF viewer for Android. It delivers 120 FPS hardware-accelerated document reading, category folders, and 100% on-device privacy.",
      whyBuilt:
        "Mainstream mobile PDF readers are bloated with invasive ads, cloud paywalls, sluggish rendering, and battery drain. Smiley PDF restores reading speed, biometric privacy, and total local file ownership.",
      whatBuilt:
        "Native 120 FPS rendering engine, biometric Private Vault (fingerprint & PIN lock), real-time in-document text search, continuous reading state restoration, and OLED pure black dark mode.",
      tech: ["Flutter", "Android", "Dart", "Biometrics", "Native Rendering"],
      highlights: [
        "Native 120 FPS hardware-accelerated engine",
        "Biometric Private Vault & category folders",
        "100% air-gapped on-device privacy (zero telemetry)",
      ],
      liveUrl: "https://smiley.xweet.in",
      codeUrl: "https://github.com",
    },
    {
      id: "indivio",
      number: "03",
      title: "Indivio",
      logo: "/indivio-logo.png",
      domain: "indivio.xweet.in",
      category: "HYPERLOCAL PLATFORM · FOOD & REAL-TIME LOGISTICS",
      status: "LIVE PLATFORM",
      tagline: "Hyperlocal food delivery platform with 30-minute delivery and live GPS tracking.",
      whatIsIt:
        "Indivio is a full-stack hyperlocal food ordering and delivery ecosystem operating in Nirmali, Bihar, connecting top local restaurants and dhabas with customers for fast 30-minute doorstep delivery.",
      whyBuilt:
        "Tier-3 and rural towns lack modern food delivery infrastructure. Indivio was built to solve the real-world logistics of hyperlocal ordering, route dispatching, and low-bandwidth state synchronization.",
      whatBuilt:
        "Full-stack responsive customer ordering client, merchant console, real-time courier GPS routing over WebSockets, V-Coins loyalty mechanics, and resilient database syncing.",
      tech: ["Next.js", "React", "TypeScript", "Node.js", "WebSockets", "PostgreSQL", "Tailwind CSS"],
      highlights: [
        "30-minute express hyperlocal delivery pipeline",
        "Real-time courier GPS tracking over WebSockets",
        "Full-stack merchant & dispatch systems",
      ],
      liveUrl: "https://indivio.xweet.in",
      codeUrl: "https://github.com",
    },
    {
      id: "infyn-dl",
      number: "04",
      title: "Infyn DL",
      logo: "/infyn-logo.png",
      domain: "infyn.software/dl",
      category: "DESKTOP & WEB APP · MULTIMEDIA",
      status: "ACTIVE PRODUCTION",
      tagline: "Distraction-free, high-fidelity audio player and streaming application.",
      whatIsIt:
        "A dedicated audio player built within the Infyn ecosystem, focused on pristine local playback, offline caching, and responsive media controls without algorithm clutter.",
      whyBuilt:
        "Mainstream music players are weighed down by heavy RAM usage, invasive tracking pixels, and feed distractions. Infyn DL restores the joy of listening with instantaneous launch times and zero clutter.",
      whatBuilt:
        "A custom audio streaming pipeline with local SQLite index caching, waveform rendering, seamless playlist queue management, and keyboard-first shortcut controls.",
      tech: ["React", "TypeScript", "Electron", "Web Audio API", "Node.js"],
      highlights: [
        "Instantaneous sub-100ms cold start time",
        "Hardware-accelerated waveform visualizer",
        "Offline SQLite local index caching",
      ],
      liveUrl: "https://infyn.software",
      codeUrl: "https://github.com",
    },
    {
      id: "lele",
      number: "05",
      title: "Lele",
      logo: "/indivio-logo.png",
      domain: "Case Study / App",
      category: "MOBILE & WEB APP · LOGISTICS & REAL-TIME",
      status: "CASE STUDY & PROTOTYPE",
      tagline: "On-demand delivery client with real-time tracking and zero-friction checkout.",
      whatIsIt:
        "A comprehensive food delivery product case study and prototype, demonstrating end-to-end user journeys from restaurant discovery to real-time dispatch tracking.",
      whyBuilt:
        "To tackle the intricate engineering hurdles of multi-tenant cart states, live geospatial routing, and complex dispatch state machines.",
      whatBuilt:
        "Designed the full ordering interface, simulated courier dispatch WebSockets, optimistic cart updates, and an intuitive checkout system.",
      tech: ["Flutter", "React Native", "TypeScript", "Node.js", "WebSockets", "REST APIs"],
      highlights: [
        "Real-time courier trajectory over WebSockets",
        "Optimistic cart mutations & multi-vendor logic",
        "Cross-platform responsive design system",
      ],
      codeUrl: "https://github.com",
    },
  ],

  experiments: [
    {
      name: "CLI QuickForge",
      desc: "Fast terminal scaffolding tool for Next.js microservices, containerization, and dev configs.",
      tech: "Rust / Node.js",
      status: "CLI TOOL",
      link: "https://github.com/imvicky69",
    },
    {
      name: "AudioSpectrum",
      desc: "Canvas-driven real-time frequency visualizer with 60fps smoothing and FFT analysis.",
      tech: "TypeScript / Canvas",
      status: "EXPERIMENT",
      link: "https://github.com/imvicky69",
    },
    {
      name: "LocalCipher Vault",
      desc: "In-browser zero-knowledge file encryption using Web Cryptography API and AES-GCM.",
      tech: "Web Crypto / React",
      status: "SECURITY UTILITY",
      link: "https://github.com/imvicky69",
    },
    {
      name: "Markdown Flow",
      desc: "Distraction-free live markdown editor with vim navigation shortcuts and local persistence.",
      tech: "Next.js / Tailwind",
      status: "WRITING TOOL",
      link: "https://github.com/imvicky69",
    },
    {
      name: "GeoPing Tracer",
      desc: "Sub-second network latency benchmark testing against global CDN edge points.",
      tech: "Go / Edge Workers",
      status: "NETWORK EXPERIMENT",
      link: "https://github.com/imvicky69",
    },
    {
      name: "Dotfiles & Scripts",
      desc: "Developer terminal, tmux, and editor workflows for rapid development and repeatable setups.",
      tech: "Shell / Lua",
      status: "WORKFLOW",
      link: "https://github.com/imvicky69",
    },
  ],

  philosophy: [
    {
      number: "01",
      step: "THINK",
      title: "First Principles",
      description:
        "Strip problems down to foundational requirements before picking dependencies or frameworks. Question default assumptions, eliminate synthetic complexity, and solve real user friction.",
    },
    {
      number: "02",
      step: "BUILD",
      title: "Clean Craftsmanship",
      description:
        "Build with strict type contracts, minimal bundle weight, and native platform capabilities. Avoid unnecessary abstractions and respect user device resources.",
    },
    {
      number: "03",
      step: "SHIP",
      title: "Production Reality",
      description:
        "Software only delivers value when real people can run it. Ship early, stress-test in production environments, and eliminate speculative theorizing.",
    },
    {
      number: "04",
      step: "LEARN",
      title: "Observe Constraints",
      description:
        "Measure actual latency, performance bottlenecks, and real failure modes. Learn from authentic usage without relying on invasive surveillance telemetry.",
    },
    {
      number: "05",
      step: "REPEAT",
      title: "Iterate Ruthlessly",
      description:
        "Refactor aggressively, remove dead weight, and channel architectural discoveries directly into subsequent product iterations.",
    },
  ],

  techStack: [
    {
      category: "Frontend & Interfaces",
      description: "Building responsive, accessible, and high-framerate interfaces",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5 & Modern CSS", "Web Audio API"],
    },
    {
      category: "Mobile & Cross-Platform",
      description: "Native and cross-platform apps for mobile and desktop",
      skills: ["Flutter", "React Native", "Electron"],
    },
    {
      category: "Backend & Systems",
      description: "Engineering scalable APIs, real-time protocols, and secure data layers",
      skills: ["Node.js", "Express", "REST APIs", "PostgreSQL", "SQLite", "WebSockets", "Web Crypto API"],
    },
    {
      category: "Languages & Core",
      description: "Core programming languages for production systems & tooling",
      skills: ["TypeScript", "JavaScript", "Python", "Dart", "SQL", "Rust"],
    },
    {
      category: "Tooling & Infrastructure",
      description: "Daily development environment, containerization, and deployment",
      skills: ["Git & GitHub", "Docker", "Linux", "Vercel", "Turbopack", "Figma"],
    },
  ],
};
