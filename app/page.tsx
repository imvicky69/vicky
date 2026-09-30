import Image from "next/image";
import { portfolioConfig } from "@/config/portfolio";

export default function Home() {
  const { personal, projects, experiments, philosophy, techStack, contacts } = portfolioConfig;
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
        {/* Availability & Identity Badge */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1F1F23] bg-[#0B0B0D] px-3.5 py-1 text-xs font-mono text-[#A1A1AA]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
            <span>{personal.status}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#1F1F23] bg-[#0B0B0D] px-3 py-1 font-mono text-xs text-[#A1A1AA]">
            <Image
              src="/logo.png"
              alt="X mark"
              width={12}
              height={12}
              className="object-contain"
            />
            <span>{personal.alias.toUpperCase()}</span>
          </div>
        </div>

        {/* Hero Main Headline */}
        <div className="mt-8 max-w-3xl space-y-4">
          <p className="font-mono text-xs uppercase tracking-widest text-[#A1A1AA]">
            {personal.name} {"//"} {personal.role}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-[#F5F5F5] sm:text-6xl sm:leading-[1.1] lg:text-7xl">
            {personal.tagline}
          </h1>
          <p className="pt-2 text-lg leading-relaxed text-[#A1A1AA] sm:text-xl sm:leading-relaxed">
            {personal.bio}
          </p>
        </div>

        {/* Hero CTAs */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="inline-flex items-center justify-center rounded-lg bg-[#3B82F6] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2563EB]"
          >
            View selected work ↓
          </a>
          {githubContact && (
            <a
              href={githubContact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-[#1F1F23] bg-[#0B0B0D] px-6 py-3 text-sm font-medium text-[#F5F5F5] transition-colors hover:border-[#3B82F6]/50"
            >
              GitHub Profile ↗
            </a>
          )}
          {primaryContact && (
            <a
              href={primaryContact.href}
              className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-[#A1A1AA] transition-colors hover:text-[#F5F5F5]"
            >
              Get in touch
            </a>
          )}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. FEATURED WORK (CLEAN EDITORIAL CASE STUDIES - NO PREVIEWS) */}
      {/* ============================================================ */}
      <section
        id="work"
        aria-labelledby="work-heading"
        className="border-b border-[#1F1F23] py-24 sm:py-32"
      >
        <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-baseline">
          <div>
            <span
              id="work-heading"
              className="font-mono text-xs uppercase tracking-widest text-[#A1A1AA]"
            >
              01 // Selected Work
            </span>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#F5F5F5] sm:text-3xl">
              Shipped products &amp; systems
            </h2>
          </div>
          <span className="font-mono text-xs text-[#A1A1AA]">
            {projects.length} FEATURED PROJECTS
          </span>
        </div>

        <div className="mt-12 space-y-12">
          {projects.map((project) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-2xl border border-[#1F1F23] bg-[#0B0B0D] p-6 sm:p-10 transition-colors hover:border-[#3B82F6]/40"
            >
              {/* Header / Meta bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1F1F23] pb-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-semibold text-[#3B82F6]">
                    {project.number}
                  </span>
                  <span className="h-3 w-px bg-[#1F1F23]" />
                  <span className="font-mono text-xs text-[#A1A1AA]">
                    {project.category}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1F1F23] bg-[#050505] px-2.5 py-0.5 font-mono text-[11px] text-[#A1A1AA]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />
                    {project.status}
                  </span>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-[#3B82F6] hover:underline"
                    >
                      {project.domain} ↗
                    </a>
                  )}
                </div>
              </div>

              {/* Editorial Content */}
              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-[#F5F5F5] sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-base font-normal text-[#F5F5F5]">
                    {project.tagline}
                  </p>
                </div>

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
                      Why I built it
                    </span>
                    <p className="mt-2 text-xs leading-relaxed sm:text-sm">
                      {project.whyBuilt}
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#1F1F23] bg-[#050505] p-5">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#F5F5F5] block">
                      What I built
                    </span>
                    <p className="mt-2 text-xs leading-relaxed sm:text-sm">
                      {project.whatBuilt}
                    </p>
                  </div>
                </div>

                {/* Tech tags & Direct Actions */}
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
                        className="inline-flex items-center justify-center rounded-lg bg-[#3B82F6] px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-[#2563EB]"
                      >
                        Visit {project.domain} ↗
                      </a>
                    )}
                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-lg border border-[#1F1F23] bg-[#050505] px-4 py-2 font-mono text-xs text-[#A1A1AA] transition-colors hover:text-[#F5F5F5]"
                      >
                        View Code ↗
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
      {/* 3. EXPERIMENTS & MORE PROJECTS */}
      {/* ============================================================ */}
      <section
        id="experiments"
        aria-labelledby="experiments-heading"
        className="border-b border-[#1F1F23] py-24 sm:py-32"
      >
        <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-baseline">
          <div>
            <span
              id="experiments-heading"
              className="font-mono text-xs uppercase tracking-widest text-[#A1A1AA]"
            >
              02 // Experiments
            </span>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#F5F5F5] sm:text-3xl">
              More things I&apos;ve built
            </h2>
          </div>
          <p className="font-mono text-xs text-[#A1A1AA]">
            Tools, open-source utilities &amp; prototypes
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {experiments.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-xl border border-[#1F1F23] bg-[#0B0B0D] p-6 transition-all hover:border-[#3B82F6]/40"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-medium text-[#F5F5F5] group-hover:text-[#3B82F6] transition-colors">
                    {item.name}
                  </h3>
                  <span className="font-mono text-xs text-[#A1A1AA] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#A1A1AA]">
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
      {/* 4. "HOW I BUILD" MINDSET SECTION */}
      {/* ============================================================ */}
      <section
        aria-labelledby="philosophy-heading"
        className="border-b border-[#1F1F23] py-24 sm:py-32"
      >
        <span
          id="philosophy-heading"
          className="font-mono text-xs uppercase tracking-widest text-[#A1A1AA]"
        >
          03 // Methodology
        </span>

        <div className="mt-6 max-w-3xl space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-[#F5F5F5] sm:text-4xl">
            Think → Build → Ship → Learn → Repeat
          </h2>
          <p className="text-base leading-relaxed text-[#A1A1AA] sm:text-lg">
            I don&apos;t wait for perfect scenarios or passive tutorials. The only way
            to truly understand software is to architect it, run into real-world constraints,
            fix the breaking points, and deploy it to users.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {philosophy.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-[#1F1F23] bg-[#0B0B0D] p-6 space-y-2"
            >
              <span className="font-mono text-xs text-[#3B82F6]">{item.number}</span>
              <h3 className="text-base font-medium text-[#F5F5F5]">{item.title}</h3>
              <p className="text-xs leading-relaxed text-[#A1A1AA]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. ABOUT SECTION */}
      {/* ============================================================ */}
      <section
        id="about"
        aria-labelledby="about-heading"
        className="border-b border-[#1F1F23] py-24 sm:py-32"
      >
        <span
          id="about-heading"
          className="font-mono text-xs uppercase tracking-widest text-[#A1A1AA]"
        >
          04 // About
        </span>

        <div className="mt-8 grid gap-12 lg:grid-cols-12">
          <div className="space-y-6 text-base leading-relaxed text-[#A1A1AA] lg:col-span-8">
            <p className="text-lg text-[#F5F5F5] font-medium leading-relaxed sm:text-xl">
              I&apos;m {personal.name}, a student developer and product builder known online as{" "}
              <span className="text-[#3B82F6]">{personal.alias}</span>.
            </p>
            <p>
              I like turning ideas into real software. Whether it&apos;s architecting
              privacy-respecting ecosystems like Infyn, building low-latency media players,
              or shipping clean web platforms, I learn by building and shipping.
            </p>
            <p>
              I take inspiration from the technical discipline and visual restraint of modern
              engineering tools like Linear, Raycast, and Vercel. I prefer fast software,
              minimalist design systems, and software that respects the user&apos;s attention and privacy.
            </p>

            <div className="pt-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#F5F5F5]">
                Core focus areas:
              </span>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Product Engineering",
                  "Full-Stack Web",
                  "Privacy-First Architecture",
                  "Open-Source Software",
                  "Developer Utilities",
                  "Performance Tuning",
                ].map((interest) => (
                  <span
                    key={interest}
                    className="rounded-md border border-[#1F1F23] bg-[#0B0B0D] px-3 py-1 font-mono text-xs text-[#A1A1AA]"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-[#1F1F23] bg-[#0B0B0D] p-6 font-mono text-xs text-[#A1A1AA] space-y-4 lg:col-span-4 h-fit">
            <div className="flex items-center gap-2 text-[#F5F5F5] font-medium border-b border-[#1F1F23] pb-3">
              <Image
                src="/logo.png"
                alt="X Logo"
                width={16}
                height={16}
                className="object-contain"
              />
              <span>QUICK SNAPSHOT</span>
            </div>
            <div className="space-y-3">
              <div>
                <span className="text-[10px] text-[#A1A1AA] block">LOCATION</span>
                <span className="text-[#F5F5F5]">{personal.location}</span>
              </div>
              <div>
                <span className="text-[10px] text-[#A1A1AA] block">ROLE</span>
                <span className="text-[#F5F5F5]">{personal.role}</span>
              </div>
              <div>
                <span className="text-[10px] text-[#A1A1AA] block">PRIMARY STACK</span>
                <span className="text-[#F5F5F5]">Next.js / TypeScript / Node</span>
              </div>
              <div>
                <span className="text-[10px] text-[#A1A1AA] block">PORTFOLIO DOMAIN</span>
                <span className="text-[#3B82F6]">{personal.domain}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. TECH STACK */}
      {/* ============================================================ */}
      <section
        id="stack"
        aria-labelledby="stack-heading"
        className="border-b border-[#1F1F23] py-24 sm:py-32"
      >
        <span
          id="stack-heading"
          className="font-mono text-xs uppercase tracking-widest text-[#A1A1AA]"
        >
          05 // Tech Stack
        </span>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#F5F5F5] sm:text-3xl">
          Technologies I build with
        </h2>
        <p className="mt-2 text-sm text-[#A1A1AA]">
          Pragmatic selection of languages, runtimes, and frameworks used in production projects.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {techStack.map((group, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-[#1F1F23] bg-[#0B0B0D] p-6 space-y-4"
            >
              <div>
                <h3 className="text-base font-medium text-[#F5F5F5]">
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
                    className="rounded-md border border-[#1F1F23] bg-[#050505] px-3 py-1.5 font-mono text-xs text-[#F5F5F5] transition-colors hover:border-[#3B82F6]/50"
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
      {/* 7. GITHUB & OPEN SOURCE */}
      {/* ============================================================ */}
      <section
        id="github"
        aria-labelledby="github-heading"
        className="border-b border-[#1F1F23] py-24 sm:py-32"
      >
        <div className="rounded-2xl border border-[#1F1F23] bg-[#0B0B0D] p-8 sm:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3 max-w-xl">
              <span
                id="github-heading"
                className="font-mono text-xs uppercase tracking-widest text-[#3B82F6]"
              >
                06 // Open Source &amp; Code
              </span>
              <h2 className="text-2xl font-semibold tracking-tight text-[#F5F5F5] sm:text-3xl">
                Open source, experiments &amp; shipping in public
              </h2>
              <p className="text-sm leading-relaxed text-[#A1A1AA]">
                GitHub is where the work lives. From core repositories for Infyn and tools to experimental
                code spikes, everything is built transparently with focus on code structure and documentation.
              </p>
            </div>

            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              {githubContact && (
                <a
                  href={githubContact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#3B82F6] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2563EB]"
                >
                  <span>Follow on GitHub</span>
                  <span className="font-mono text-xs">↗</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. CONTACT SECTION (CENTRALIZED CRUD CONTACT BUTTONS) */}
      {/* ============================================================ */}
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="py-24 sm:py-32"
      >
        <span
          id="contact-heading"
          className="font-mono text-xs uppercase tracking-widest text-[#A1A1AA]"
        >
          07 // Contact
        </span>

        <div className="mt-8 max-w-2xl space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight text-[#F5F5F5] sm:text-5xl">
            Have an idea? Let&apos;s build something.
          </h2>

          <p className="text-base leading-relaxed text-[#A1A1AA] sm:text-lg">
            I am open to software development work, product builds, full-stack web applications,
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
                    ? "inline-flex items-center justify-center rounded-lg bg-[#3B82F6] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2563EB]"
                    : "inline-flex items-center justify-center rounded-lg border border-[#1F1F23] bg-[#0B0B0D] px-6 py-3 font-mono text-xs text-[#F5F5F5] transition-colors hover:border-[#3B82F6]/50"
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
