export interface ContactLink {
  id: string;
  label: string;
  href: string;
  type: "email" | "github" | "twitter" | "instagram" | "linkedin" | "external";
  isPrimary?: boolean;
  username?: string;
}

export interface FeaturedProject {
  id: string;
  number: string;
  title: string;
  domain?: string;
  category: string;
  status: string;
  tagline: string;
  whatIsIt: string;
  whyBuilt: string;
  whatBuilt: string;
  tech: string[];
  liveUrl?: string;
  codeUrl?: string;
}

export interface ExperimentItem {
  name: string;
  desc: string;
  tech: string;
  link: string;
}

export interface TechStackGroup {
  category: string;
  description: string;
  skills: string[];
}

export interface PortfolioConfig {
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
  projects: FeaturedProject[];
  experiments: ExperimentItem[];
  philosophy: {
    number: string;
    title: string;
    description: string;
  }[];
  techStack: TechStackGroup[];
}

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Vicky Raja",
    alias: "Xweet",
    role: "Software Developer & Product Builder",
    status: "CURRENTLY BUILDING & LEARNING",
    tagline: "I build things worth using.",
    bio: "I don't just learn technology. I turn ideas into real shipped software — from privacy-focused ecosystems and web platforms to media tools and open-source utilities.",
    location: "India (UTC +5:30)",
    domain: "imvicky.vercel.app",
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://imvicky.vercel.app",
  },

  navigation: [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Experiments", href: "#experiments" },
    { name: "Contact", href: "#contact" },
  ],

  // Centralized CRUD for all contact buttons and social links across the site
  contacts: [
    {
      id: "email",
      label: "Get in touch (Email)",
      href: "mailto:vikky@indivio.in",
      type: "email",
      isPrimary: true,
      username: "contact@imvicky.vercel.app",
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
      domain: "infyn.software",
      category: "PRODUCT ECOSYSTEM · PRIVACY",
      status: "SHIPPED & LIVE",
      tagline: "A privacy-first software ecosystem engineered for sovereign personal computing.",
      whatIsIt:
        "Infyn is a privacy-focused software and product ecosystem created to provide essential digital tools without intrusive tracking, telemetry, or vendor lock-in.",
      whyBuilt:
        "Modern cloud services monetize user telemetry and collect excessive personal data. Infyn was born out of a desire to build clean, self-reliant tools where data privacy is an uncompromised default.",
      whatBuilt:
        "Engineered an integrated suite of client-side encrypted web tools, zero-log services, and ultra-lightweight interface architecture designed for speed and security.",
      tech: ["Next.js", "TypeScript", "Node.js", "Web Crypto API", "Tailwind CSS"],
      liveUrl: "https://infyn.software",
      codeUrl: "https://github.com",
    },
    {
      id: "infyn-dl",
      number: "02",
      title: "Infyn DL",
      domain: "infyn.software/dl",
      category: "DESKTOP & WEB APP · MULTIMEDIA",
      status: "ACTIVE PRODUCTION",
      tagline: "Distraction-free, high-fidelity audio player and streaming application.",
      whatIsIt:
        "A dedicated audio player built within the Infyn ecosystem, focused on pristine local playback, offline caching, and responsive media controls.",
      whyBuilt:
        "Mainstream music players are weighed down by heavy RAM usage, tracking pixels, and clutter. Infyn DL restores the joy of listening with instantaneous launch times and zero clutter.",
      whatBuilt:
        "A custom audio streaming pipeline with local SQLite index caching, waveform rendering, seamless playlist queue management, and keyboard-first shortcut controls.",
      tech: ["React", "TypeScript", "Electron", "Web Audio API", "Node.js"],
      liveUrl: "https://infyn.software",
      codeUrl: "https://github.com",
    },
    {
      id: "indivio",
      number: "03",
      title: "Indivio",
      domain: "indivio.in",
      category: "WEB PLATFORM · COLLABORATION",
      status: "LIVE PLATFORM",
      tagline: "Modern web platform built for high-performance creative workflows.",
      whatIsIt:
        "Indivio is a digital platform built to give creators and teams a unified environment for managing assets, publishing digital experiences, and organizing workflows.",
      whyBuilt:
        "To replace disjointed productivity stacks with a single, blazingly fast interface that prioritizes flow state and minimal cognitive overhead.",
      whatBuilt:
        "Full-stack web architecture featuring sub-100ms page transitions, resilient database syncing, real-time collaboration events, and responsive interface layouts.",
      tech: ["Next.js", "React", "TypeScript", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "https://indivio.in",
      codeUrl: "https://github.com",
    },
    {
      id: "lele",
      number: "04",
      title: "Lele",
      domain: "Case Study",
      category: "MOBILE & WEB APP · LOGISTICS",
      status: "CASE STUDY",
      tagline: "On-demand food delivery client with real-time tracking and zero-friction checkout.",
      whatIsIt:
        "A comprehensive food delivery product case study, demonstrating end-to-end user journeys from restaurant discovery to real-time dispatch tracking.",
      whyBuilt:
        "To tackle the intricate engineering hurdles of multi-tenant cart states, live geospatial routing, and complex dispatch state machines.",
      whatBuilt:
        "Designed the full ordering interface, simulated courier dispatch websockets, optimistic cart updates, and an intuitive checkout system.",
      tech: ["React Native", "TypeScript", "Node.js", "WebSockets", "REST APIs"],
      codeUrl: "https://github.com",
    },
  ],

  experiments: [
    {
      name: "CLI QuickForge",
      desc: "Fast terminal scaffolding tool for Next.js microservices and dev configs.",
      tech: "Rust / Node.js",
      link: "https://github.com",
    },
    {
      name: "AudioSpectrum",
      desc: "Canvas-driven real-time frequency visualizer with 60fps smoothing.",
      tech: "TypeScript / Canvas",
      link: "https://github.com",
    },
    {
      name: "LocalCipher Vault",
      desc: "In-browser zero-knowledge file encryption using Web Cryptography API.",
      tech: "Web Crypto / React",
      link: "https://github.com",
    },
    {
      name: "Markdown Flow",
      desc: "Distraction-free live markdown editor with vim navigation shortcuts.",
      tech: "Next.js / Tailwind",
      link: "https://github.com",
    },
    {
      name: "GeoPing Tracer",
      desc: "Sub-second network latency benchmark testing against global CDN edge points.",
      tech: "Go / Edge Workers",
      link: "https://github.com",
    },
    {
      name: "Dotfiles & Scripts",
      desc: "Personal terminal, tmux, and editor workflows for rapid development.",
      tech: "Shell / Lua",
      link: "https://github.com",
    },
  ],

  philosophy: [
    {
      number: "01. FIRST PRINCIPLES",
      title: "Understand the Core",
      description: "Strip problems down to foundational requirements before picking dependencies.",
    },
    {
      number: "02. RESTRAINT",
      title: "Clean & Minimal",
      description: "Avoid unnecessary bloat, complex abstractions, and superficial animations.",
    },
    {
      number: "03. SHIP TO PROD",
      title: "Live Is What Matters",
      description: "Software only provides real value when tested in production environments.",
    },
    {
      number: "04. CONTINUOUS LOOP",
      title: "Evolve Fast",
      description: "Analyze bottlenecks, refactor cleanly, and apply learnings directly to the next build.",
    },
  ],

  techStack: [
    {
      category: "Frontend",
      description: "Building responsive, accessible, and fast interfaces",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5 & Modern CSS", "Web Audio API"],
    },
    {
      category: "Backend & Systems",
      description: "Engineering scalable APIs and robust data layers",
      skills: ["Node.js", "Express", "REST APIs", "PostgreSQL", "SQLite", "WebSockets"],
    },
    {
      category: "Languages",
      description: "Core programming languages for production & scripts",
      skills: ["TypeScript", "JavaScript", "Python", "Dart", "SQL"],
    },
    {
      category: "Tools & Workflow",
      description: "Daily development environment and deployment tools",
      skills: ["Git & GitHub", "Docker", "Linux", "Vercel", "Turbopack", "Figma"],
    },
  ],
};
