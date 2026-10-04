import Image from "next/image";
import { portfolioConfig } from "@/config/portfolio";

export default function Home() {
  const { studio, projects, experiments, philosophy, techStack, contacts } =
    portfolioConfig;
  const primaryContact = contacts.find((c) => c.isPrimary) || contacts[0];
  const githubContact = contacts.find((c) => c.type === "github");

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      {/* ============================================================ */}
      {/* 1. HERO SECTION */}
      {/* ============================================================ */}
      <section
        aria-label="Hero Introduction"
        className="flex flex-col items-start border-b border-[#1F1F23] pb-24 sm:pb-32"
      >
        {/* Availability & Studio Identity Badge */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1F1F23] bg-[#0B0B0D] px-3.5 py-1 text-xs font-mono text-[#A1A1AA]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB] animate-pulse" />
            <span>{studio.status}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#1F1F23] bg-[#0B0B0D] px-3 py-1 font-mono text-xs text-[#A1A1AA]">
            <Image
              src="/logo.png"
              alt="Xweet mark"
              width={12}
              height={12}
              className="object-contain"
            />
            <span>{studio.name.toUpperCase()} STUDIO</span>
          </div>
        </div>

        {/* Hero Main Headline & Positioning */}
        <div className="mt-8 max-w-3xl space-y-4">
          <p className="font-mono text-xs uppercase tracking-widest text-[#A1A1AA]">
            {studio.name} {"//"} {studio.role}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-[#F5F5F5] sm:text-6xl sm:leading-[1.1] lg:text-7xl">
            {studio.tagline}
          </h1>
          <p className="pt-2 text-lg leading-relaxed text-[#A1A1AA] sm:text-xl sm:leading-relaxed">
            {studio.subheadline}
          </p>
        </div>

        {/* Hero CTAs */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#products"
            className="inline-flex items-center justify-center rounded-lg bg-[#2563EB] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1D4ED8]"
          >
            Explore products ↓
          </a>
          <a
            href={primaryContact ? primaryContact.href : "#contact"}
            className="inline-flex items-center justify-center rounded-lg border border-[#1F1F23] bg-[#0B0B0D] px-6 py-3 text-sm font-medium text-[#F5F5F5] transition-colors hover:border-[#2563EB]/50"
          >
            Work with Xweet →
          </a>
          {githubContact && (
            <a
              href={githubContact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-[#A1A1AA] transition-colors hover:text-[#F5F5F5]"
            >
              GitHub Profile ↗
            </a>
          )}
        </div>

        {/* 4 Minimal Quick Product Redirect Links */}
        <div className="mt-10 flex flex-col gap-3 w-full">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#A1A1AA]">
              Direct Product Access
            </span>
            <span className="font-mono text-[10px] text-[#71717A]">
              Independent Apps ↗
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <a
              href="https://indivio.xweet.in"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 rounded-xl border border-[#1F1F23] bg-[#0B0B0D] p-2.5 transition-all hover:border-[#2563EB]/50 hover:bg-[#0B0B0D]/80"
            >
              <div className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#1F1F23] bg-[#050505] p-1 transition-transform group-hover:scale-105">
                <Image
                  src="/indivio-logo.png"
                  alt="Indivio"
                  width={24}
                  height={24}
                  className="h-full w-full object-contain rounded-full"
                />
              </div>
              <div className="min-w-0 flex-1">
                <span className="block truncate text-xs font-semibold text-[#F5F5F5] group-hover:text-[#2563EB] transition-colors">
                  Indivio
                </span>
                <span className="block truncate font-mono text-[10px] text-[#A1A1AA]">
                  indivio.xweet.in
                </span>
              </div>
              <span className="font-mono text-xs text-[#71717A] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 pr-0.5">
                ↗
              </span>
            </a>

            <a
              href="https://smiley.xweet.in"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 rounded-xl border border-[#1F1F23] bg-[#0B0B0D] p-2.5 transition-all hover:border-[#2563EB]/50 hover:bg-[#0B0B0D]/80"
            >
              <div className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#1F1F23] bg-[#050505] p-1 transition-transform group-hover:scale-105">
                <Image
                  src="/smiley.png"
                  alt="Smiley PDF"
                  width={24}
                  height={24}
                  className="h-full w-full object-contain rounded-full"
                />
              </div>
              <div className="min-w-0 flex-1">
                <span className="block truncate text-xs font-semibold text-[#F5F5F5] group-hover:text-[#2563EB] transition-colors">
                  Smiley PDF
                </span>
                <span className="block truncate font-mono text-[10px] text-[#A1A1AA]">
                  smiley.xweet.in
                </span>
              </div>
              <span className="font-mono text-xs text-[#71717A] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 pr-0.5">
                ↗
              </span>
            </a>

            <a
              href="https://infyn.software"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 rounded-xl border border-[#1F1F23] bg-[#0B0B0D] p-2.5 transition-all hover:border-[#2563EB]/50 hover:bg-[#0B0B0D]/80"
            >
              <div className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#1F1F23] bg-[#050505] p-1 transition-transform group-hover:scale-105">
                <Image
                  src="/infyn-logo.png"
                  alt="Infyn"
                  width={24}
                  height={24}
                  className="h-full w-full object-contain rounded-full"
                />
              </div>
              <div className="min-w-0 flex-1">
                <span className="block truncate text-xs font-semibold text-[#F5F5F5] group-hover:text-[#2563EB] transition-colors">
                  Infyn
                </span>
                <span className="block truncate font-mono text-[10px] text-[#A1A1AA]">
                  infyn.software
                </span>
              </div>
              <span className="font-mono text-xs text-[#71717A] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 pr-0.5">
                ↗
              </span>
            </a>

            <a
              href="https://infyn.software/dl"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 rounded-xl border border-[#1F1F23] bg-[#0B0B0D] p-2.5 transition-all hover:border-[#2563EB]/50 hover:bg-[#0B0B0D]/80"
            >
              <div className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#1F1F23] bg-[#050505] p-1 transition-transform group-hover:scale-105">
                <Image
                  src="/infyn-logo.png"
                  alt="Infyn DL"
                  width={24}
                  height={24}
                  className="h-full w-full object-contain rounded-full"
                />
              </div>
              <div className="min-w-0 flex-1">
                <span className="block truncate text-xs font-semibold text-[#F5F5F5] group-hover:text-[#2563EB] transition-colors">
                  Infyn DL
                </span>
                <span className="block truncate font-mono text-[10px] text-[#A1A1AA]">
                  infyn.software/dl
                </span>
              </div>
              <span className="font-mono text-xs text-[#71717A] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 pr-0.5">
                ↗
              </span>
            </a>
          </div>
        </div>

        {/* Studio Telemetry Row */}
        <div className="mt-16 grid w-full grid-cols-2 gap-4 border-t border-[#1F1F23] pt-8 sm:grid-cols-4">
          <div>
            <span className="font-mono text-xs text-[#A1A1AA] block">CORE ENTITY</span>
            <span className="mt-1 font-mono text-sm font-medium text-[#F5F5F5] block">
              Independent Studio
            </span>
          </div>
          <div>
            <span className="font-mono text-xs text-[#A1A1AA] block">SHIPPED PRODUCTS</span>
            <span className="mt-1 font-mono text-sm font-medium text-[#F5F5F5] block">
              {projects.length} Flagships
            </span>
          </div>
          <div>
            <span className="font-mono text-xs text-[#A1A1AA] block">OPEN LAB</span>
            <span className="mt-1 font-mono text-sm font-medium text-[#F5F5F5] block">
              {experiments.length} Utilities
            </span>
          </div>
          <div>
            <span className="font-mono text-xs text-[#A1A1AA] block">DESIGN PRINCIPLE</span>
            <span className="mt-1 font-mono text-sm font-medium text-[#2563EB] block">
              Privacy &amp; Restraint
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. FEATURED / SHIPPED PRODUCTS */}
      {/* ============================================================ */}
      <section
        id="products"
        aria-labelledby="products-heading"
        className="border-b border-[#1F1F23] py-24 sm:py-32"
      >
        <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-baseline">
          <div>
            <span
              id="products-heading"
              className="font-mono text-xs uppercase tracking-widest text-[#2563EB]"
            >
              01 // Featured Products
            </span>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#F5F5F5] sm:text-3xl">
              Shipped software &amp; active platforms
            </h2>
          </div>
          <span className="font-mono text-xs text-[#A1A1AA]">
            {projects.length} PRODUCTION DEPLOYMENTS
          </span>
        </div>

        <div className="mt-12 space-y-12">
          {projects.map((project) => (
            <article
              key={project.id}
              id={project.id}
              className="group overflow-hidden rounded-2xl border border-[#1F1F23] bg-[#0B0B0D] p-6 sm:p-10 transition-colors hover:border-[#2563EB]/40"
            >
              {/* Product Meta Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1F1F23] pb-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-semibold text-[#2563EB]">
                    {project.number}
                  </span>
                  <span className="h-3 w-px bg-[#1F1F23]" />
                  <span className="font-mono text-xs text-[#A1A1AA]">
                    {project.category}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1F1F23] bg-[#050505] px-2.5 py-0.5 font-mono text-[11px] text-[#A1A1AA]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                    {project.status}
                  </span>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-[#2563EB] hover:underline"
                    >
                      {project.domain} ↗
                    </a>
                  )}
                </div>
              </div>

              {/* Product Main Content with Circular Logo Div */}
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4 sm:gap-5">
                  {project.logo && (
                    <div className="relative flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#1F1F23] bg-[#050505] p-2 transition-transform duration-200 group-hover:scale-105 shadow-sm">
                      <Image
                        src={project.logo}
                        alt={`${project.title} logo`}
                        width={56}
                        height={56}
                        className="h-full w-full object-contain rounded-full"
                      />
                    </div>
                  )}
                  <div className="space-y-1">
                    <h3 className="text-2xl font-semibold tracking-tight text-[#F5F5F5] sm:text-3xl">
                      {project.title}
                    </h3>
                    <p className="text-base font-normal text-[#F5F5F5] sm:text-lg">
                      {project.tagline}
                    </p>
                  </div>
                </div>

                {/* 3-Column Structured Breakdown */}
                <div className="grid gap-6 pt-2 text-sm leading-relaxed text-[#A1A1AA] md:grid-cols-3">
                  <div className="rounded-xl border border-[#1F1F23] bg-[#050505] p-5">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#F5F5F5] block">
                      What it is
                    </span>
                    <p className="mt-2 text-xs leading-relaxed sm:text-sm">
                      {project.whatIsIt}
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#1F1F23] bg-[#050505] p-5">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#F5F5F5] block">
                      Why it was built
                    </span>
                    <p className="mt-2 text-xs leading-relaxed sm:text-sm">
                      {project.whyBuilt}
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#1F1F23] bg-[#050505] p-5">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#F5F5F5] block">
                      What was built
                    </span>
                    <p className="mt-2 text-xs leading-relaxed sm:text-sm">
                      {project.whatBuilt}
                    </p>
                  </div>
                </div>

                {/* Architectural Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="rounded-xl border border-[#1F1F23] bg-[#050505] p-4 sm:p-5">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#2563EB] block mb-2.5">
                      Key Highlights
                    </span>
                    <ul className="grid gap-2.5 sm:grid-cols-3 font-mono text-xs text-[#A1A1AA]">
                      {project.highlights.map((hl, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech tags & Actions */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#1F1F23]">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-[#1F1F23] bg-[#050505] px-2.5 py-1 font-mono text-[11px] text-[#A1A1AA]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-lg bg-[#2563EB] px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-[#1D4ED8]"
                      >
                        Launch {project.title} ↗
                      </a>
                    )}
                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-lg border border-[#1F1F23] bg-[#050505] px-4 py-2 font-mono text-xs text-[#A1A1AA] transition-colors hover:text-[#F5F5F5]"
                      >
                        Source / Notes ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. MORE THINGS I'VE BUILT (LAB / EXPERIMENTS & TOOLS) */}
      {/* ============================================================ */}
      <section
        id="lab"
        aria-labelledby="lab-heading"
        className="border-b border-[#1F1F23] py-24 sm:py-32"
      >
        <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-baseline">
          <div>
            <span
              id="lab-heading"
              className="font-mono text-xs uppercase tracking-widest text-[#2563EB]"
            >
              02 // Lab &amp; Tools
            </span>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#F5F5F5] sm:text-3xl">
              More things I&apos;ve built
            </h2>
          </div>
          <p className="font-mono text-xs text-[#A1A1AA]">
            CLI tools, developer utilities &amp; interface experiments
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {experiments.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-xl border border-[#1F1F23] bg-[#0B0B0D] p-6 transition-all hover:border-[#2563EB]/40"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-1">
                    <span className="inline-block rounded border border-[#1F1F23] bg-[#050505] px-2 py-0.5 font-mono text-[10px] text-[#2563EB]">
                      {item.status}
                    </span>
                    <h3 className="font-medium text-[#F5F5F5] group-hover:text-[#2563EB] transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-[#A1A1AA] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA]">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1F1F23]">
                <span className="font-mono text-[11px] text-[#A1A1AA]">
                  {item.tech}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. BUILD PHILOSOPHY */}
      {/* ============================================================ */}
      <section
        id="philosophy"
        aria-labelledby="philosophy-heading"
        className="border-b border-[#1F1F23] py-24 sm:py-32"
      >
        <span
          id="philosophy-heading"
          className="font-mono text-xs uppercase tracking-widest text-[#2563EB]"
        >
          03 // Build Philosophy
        </span>

        <div className="mt-6 max-w-3xl space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-[#F5F5F5] sm:text-4xl">
            Think → Build → Ship → Learn → Repeat
          </h2>
          <p className="text-base leading-relaxed text-[#A1A1AA] sm:text-lg">
            I don&apos;t build software by relying on speculative theorizing or passive tutorials.
            The only way to build tools that hold value is through first-principles clarity, clean
            craftsmanship, and rapid exposure to real production environments.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {philosophy.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-xl border border-[#1F1F23] bg-[#0B0B0D] p-5 space-y-3"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#2563EB]">{item.number}</span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#A1A1AA]">
                    {item.step}
                  </span>
                </div>
                <h3 className="mt-2 text-sm font-semibold text-[#F5F5F5]">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#A1A1AA]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. ABOUT XWEET */}
      {/* ============================================================ */}
      <section
        id="about"
        aria-labelledby="about-heading"
        className="border-b border-[#1F1F23] py-24 sm:py-32"
      >
        <span
          id="about-heading"
          className="font-mono text-xs uppercase tracking-widest text-[#2563EB]"
        >
          04 // About Xweet
        </span>

        <div className="mt-8 grid gap-12 lg:grid-cols-12">
          <div className="space-y-6 text-base leading-relaxed text-[#A1A1AA] lg:col-span-8">
            <h2 className="text-2xl font-semibold tracking-tight text-[#F5F5F5] sm:text-3xl">
              An independent software &amp; product studio
            </h2>
            <p>
              {studio.bio}
            </p>
            <p>
              {studio.builderBio}
            </p>
            <p>
              Xweet does not operate like a large corporate agency or a bloated SaaS machine. There are no
              vanity metrics, unnecessary abstractions, or hidden tracking scripts. Instead, the focus
              is on software craftsmanship: building fast, sovereign tools where data privacy is the default,
              interfaces are uncluttered, and every release is built to be genuinely useful.
            </p>

            <div className="pt-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#F5F5F5] block">
                Studio Engineering Principles:
              </span>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                <div className="rounded-lg border border-[#1F1F23] bg-[#0B0B0D] p-4">
                  <span className="font-mono text-xs text-[#2563EB] block">01. PRIVACY FIRST</span>
                  <p className="mt-1 text-xs text-[#A1A1AA]">
                    Client-side encryption, zero surveillance, and no telemetry tracking by design.
                  </p>
                </div>
                <div className="rounded-lg border border-[#1F1F23] bg-[#0B0B0D] p-4">
                  <span className="font-mono text-xs text-[#2563EB] block">02. PERFORMANCE</span>
                  <p className="mt-1 text-xs text-[#A1A1AA]">
                    Sub-100ms interactions, lightweight bundles, and respect for machine resources.
                  </p>
                </div>
                <div className="rounded-lg border border-[#1F1F23] bg-[#0B0B0D] p-4">
                  <span className="font-mono text-xs text-[#2563EB] block">03. CRAFTSMANSHIP</span>
                  <p className="mt-1 text-xs text-[#A1A1AA]">
                    End-to-end responsibility from system architecture to interface micro-details.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Studio Snapshot Card */}
          <div className="rounded-xl border border-[#1F1F23] bg-[#0B0B0D] p-6 font-mono text-xs text-[#A1A1AA] space-y-4 lg:col-span-4 h-fit">
            <div className="flex items-center gap-2 text-[#F5F5F5] font-medium border-b border-[#1F1F23] pb-3">
              <Image
                src="/logo.png"
                alt="Xweet Logo"
                width={16}
                height={16}
                className="object-contain"
              />
              <span>STUDIO SNAPSHOT</span>
            </div>
            <div className="space-y-3.5">
              <div>
                <span className="text-[10px] text-[#A1A1AA] block">ENTITY</span>
                <span className="text-[#F5F5F5]">Xweet (Independent Studio)</span>
              </div>
              <div>
                <span className="text-[10px] text-[#A1A1AA] block">BUILDER / FOUNDER</span>
                <span className="text-[#F5F5F5]">{studio.builderName}</span>
              </div>
              <div>
                <span className="text-[10px] text-[#A1A1AA] block">ROLE</span>
                <span className="text-[#F5F5F5]">{studio.builderRole}</span>
              </div>
              <div>
                <span className="text-[10px] text-[#A1A1AA] block">LOCATION</span>
                <span className="text-[#F5F5F5]">{studio.location}</span>
              </div>
              <div>
                <span className="text-[10px] text-[#A1A1AA] block">CORE DOMAIN</span>
                <span className="text-[#2563EB]">{studio.domain}</span>
              </div>
              <div>
                <span className="text-[10px] text-[#A1A1AA] block">PRIMARY OUTPUT</span>
                <span className="text-[#F5F5F5]">Web Apps · Tools · Ecosystems</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. TECHNOLOGIES */}
      {/* ============================================================ */}
      <section
        id="technologies"
        aria-labelledby="tech-heading"
        className="border-b border-[#1F1F23] py-24 sm:py-32"
      >
        <span
          id="tech-heading"
          className="font-mono text-xs uppercase tracking-widest text-[#2563EB]"
        >
          05 // Technologies
        </span>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#F5F5F5] sm:text-3xl">
          Technologies used across projects
        </h2>
        <p className="mt-2 text-sm text-[#A1A1AA]">
          A pragmatic selection of languages, frameworks, and protocols actively used in production.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((group, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-[#1F1F23] bg-[#0B0B0D] p-6 space-y-4"
            >
              <div>
                <h3 className="text-sm font-semibold text-[#F5F5F5]">
                  {group.category}
                </h3>
                <p className="mt-1 text-xs text-[#A1A1AA]">
                  {group.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-[#1F1F23] bg-[#050505] px-2.5 py-1.5 font-mono text-xs text-[#F5F5F5] transition-colors hover:border-[#2563EB]/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. OPEN SOURCE / EXPERIMENTS */}
      {/* ============================================================ */}
      <section
        id="opensource"
        aria-labelledby="oss-heading"
        className="border-b border-[#1F1F23] py-24 sm:py-32"
      >
        <div className="rounded-2xl border border-[#1F1F23] bg-[#0B0B0D] p-8 sm:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3 max-w-xl">
              <span
                id="oss-heading"
                className="font-mono text-xs uppercase tracking-widest text-[#2563EB]"
              >
                06 // Open Source &amp; Code
              </span>
              <h2 className="text-2xl font-semibold tracking-tight text-[#F5F5F5] sm:text-3xl">
                Open source, experiments &amp; shipping in public
              </h2>
              <p className="text-sm leading-relaxed text-[#A1A1AA]">
                GitHub is where the work lives. From core repositories for Infyn and tools to experimental
                code spikes, everything is built transparently with focus on code structure, performance,
                and documentation.
              </p>
            </div>

            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              {githubContact && (
                <a
                  href={githubContact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#2563EB] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1D4ED8]"
                >
                  <span>Explore on GitHub</span>
                  <span className="font-mono text-xs">↗</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. FINAL CTA */}
      {/* ============================================================ */}
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="py-24 sm:py-32"
      >
        <span
          id="contact-heading"
          className="font-mono text-xs uppercase tracking-widest text-[#2563EB]"
        >
          07 // Contact
        </span>

        <div className="mt-8 max-w-2xl space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight text-[#F5F5F5] sm:text-5xl">
            Have an idea? Let&apos;s build something.
          </h2>

          <p className="text-base leading-relaxed text-[#A1A1AA] sm:text-lg">
            Xweet is open to software development work, product builds, full-stack web applications,
            and ambitious technical collaborations. If you have an interesting project or problem
            worth solving, let&apos;s talk.
          </p>

          {/* Centralized contact buttons rendered from config/portfolio.ts */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            {contacts.map((contact) => (
              <a
                key={contact.id}
                href={contact.href}
                target={contact.type === "email" ? undefined : "_blank"}
                rel={contact.type === "email" ? undefined : "noopener noreferrer"}
                className={
                  contact.isPrimary
                    ? "inline-flex items-center justify-center rounded-lg bg-[#2563EB] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1D4ED8]"
                    : "inline-flex items-center justify-center rounded-lg border border-[#1F1F23] bg-[#0B0B0D] px-6 py-3 font-mono text-xs text-[#F5F5F5] transition-colors hover:border-[#2563EB]/50"
                }
              >
                <span>{contact.label}</span>
                {contact.type !== "email" && <span className="ml-1 text-[10px]">↗</span>}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
