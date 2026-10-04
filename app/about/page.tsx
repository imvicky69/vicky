import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { portfolioConfig } from "@/config/portfolio";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Xweet — an independent software and product studio founded by Vicky Raja. Crafting privacy-conscious software, mobile apps, and high-performance web platforms.",
};

export default function AboutPage() {
  const { studio, projects, techStack } = portfolioConfig;

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24 space-y-24">
      {/* ============================================================ */}
      {/* 1. HERO SECTION */}
      {/* ============================================================ */}
      <section aria-label="About Hero" className="space-y-6 border-b border-[#1F1F23] pb-16">
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/"
            className="font-mono text-xs text-[#A1A1AA] transition-colors hover:text-[#F5F5F5]"
          >
            ← Back to Xweet Studio
          </Link>
          <span className="font-mono text-xs text-[#1F1F23]">/</span>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1F1F23] bg-[#0B0B0D] px-3 py-0.5 text-xs font-mono text-[#A1A1AA]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB] animate-pulse" />
            <span>INDEPENDENT PRODUCT STUDIO</span>
          </div>
        </div>

        <div className="max-w-3xl space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#2563EB] block">
            About Xweet
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-[#F5F5F5] sm:text-6xl sm:leading-[1.1]">
            Independent software, products and experiments — built with restraint.
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-[#A1A1AA] pt-2">
            {studio.bio}
          </p>
        </div>

        {/* Telemetry quick bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#1F1F23]">
          <div>
            <span className="font-mono text-[10px] text-[#A1A1AA] uppercase block">STUDIO MODEL</span>
            <span className="mt-0.5 font-mono text-xs text-[#F5F5F5] block">Independent / Solo Builder</span>
          </div>
          <div>
            <span className="font-mono text-[10px] text-[#A1A1AA] uppercase block">FOUNDER &amp; BUILDER</span>
            <span className="mt-0.5 font-mono text-xs text-[#2563EB] block">{studio.builderName}</span>
          </div>
          <div>
            <span className="font-mono text-[10px] text-[#A1A1AA] uppercase block">STUDIO LOCATION</span>
            <span className="mt-0.5 font-mono text-xs text-[#F5F5F5] block">{studio.location}</span>
          </div>
          <div>
            <span className="font-mono text-[10px] text-[#A1A1AA] uppercase block">CORE DOMAIN</span>
            <span className="mt-0.5 font-mono text-xs text-[#F5F5F5] block">{studio.domain}</span>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. MANIFESTO & THE BUILDER STORY */}
      {/* ============================================================ */}
      <section aria-label="Studio Narrative" className="grid gap-12 lg:grid-cols-12 items-start">
        {/* Left Column: Narrative */}
        <div className="space-y-8 text-base leading-relaxed text-[#A1A1AA] lg:col-span-8">
          <div className="space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#2563EB] block">
              The Mission
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#F5F5F5]">
              Building things worth using in an age of bloatware.
            </h2>
            <p>
              Modern consumer software has largely drifted toward rent-seeking models: bloated
              runtimes, mandatory cloud subscriptions, dark telemetry patterns, and invasive analytics
              that monetize user attention. Everyday utilities that should execute in microseconds
              take seconds to boot and consume gigabytes of memory.
            </p>
            <p>
              Xweet exists as an intentional counterweight to this trend. We operate as an
              independent software and product laboratory dedicated to building fast, sovereign,
              and privacy-respecting software that gets out of the user&apos;s way.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-[#1F1F23]">
            <span className="font-mono text-xs uppercase tracking-widest text-[#2563EB] block">
              Behind the Studio
            </span>
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#F5F5F5]">
              Crafted directly by Vicky Raja
            </h3>
            <p>
              {studio.builderBio}
            </p>
            <p>
              There are no sales reps, account managers, or bloated committees. When you use a
              product shipped by Xweet—or partner with the studio on custom engineering—you work
              directly with the developer who designs the interface, writes the type contracts,
              tunes the database queries, and deploys the infrastructure.
            </p>
          </div>

          {/* Guiding Principles */}
          <div className="space-y-4 pt-4 border-t border-[#1F1F23]">
            <span className="font-mono text-xs uppercase tracking-widest text-[#2563EB] block">
              Core Principles
            </span>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-[#1F1F23] bg-[#0B0B0D] p-5 space-y-2">
                <span className="font-mono text-xs font-semibold text-[#2563EB]">01 // PRIVACY FIRST</span>
                <h4 className="text-sm font-semibold text-[#F5F5F5]">Client-Side &amp; Air-Gapped</h4>
                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  We design tools like Infyn and Smiley PDF so that data remains strictly on your device.
                  Zero telemetry, zero user tracking, and client-side encryption by default.
                </p>
              </div>

              <div className="rounded-xl border border-[#1F1F23] bg-[#0B0B0D] p-5 space-y-2">
                <span className="font-mono text-xs font-semibold text-[#2563EB]">02 // PERFORMANCE</span>
                <h4 className="text-sm font-semibold text-[#F5F5F5]">Sub-100ms &amp; 120 FPS</h4>
                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  Interfaces should be instantaneous. We prioritize native hardware acceleration, small
                  payload footprints, and efficient memory management over heavy external libraries.
                </p>
              </div>

              <div className="rounded-xl border border-[#1F1F23] bg-[#0B0B0D] p-5 space-y-2">
                <span className="font-mono text-xs font-semibold text-[#2563EB]">03 // RESTRAINT</span>
                <h4 className="text-sm font-semibold text-[#F5F5F5]">Minimalist Design</h4>
                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  Avoid decorative clutter and artificial animations. Our design language is typography-first,
                  spacious, and respectful of the user&apos;s cognitive focus.
                </p>
              </div>

              <div className="rounded-xl border border-[#1F1F23] bg-[#0B0B0D] p-5 space-y-2">
                <span className="font-mono text-xs font-semibold text-[#2563EB]">04 // CRAFTSMANSHIP</span>
                <h4 className="text-sm font-semibold text-[#F5F5F5]">Production Reality</h4>
                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  Software only matters when tested under production conditions. We ship early, learn from
                  real-world edge cases, and continuously refactor without fear.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Studio Snapshot Card */}
        <div className="space-y-6 lg:col-span-4">
          <div className="rounded-2xl border border-[#1F1F23] bg-[#0B0B0D] p-6 font-mono text-xs text-[#A1A1AA] space-y-4">
            <div className="flex items-center gap-2.5 text-[#F5F5F5] font-medium border-b border-[#1F1F23] pb-4">
              <div className="relative flex h-6 w-6 items-center justify-center overflow-hidden rounded-md border border-[#1F1F23] bg-[#050505] p-1">
                <Image
                  src="/logo.png"
                  alt="Xweet logo"
                  width={18}
                  height={18}
                  className="object-contain"
                />
              </div>
              <span className="font-sans font-semibold text-sm">XWEET STUDIO</span>
            </div>

            <div className="space-y-3.5">
              <div>
                <span className="text-[10px] text-[#71717A] uppercase block">ORGANIZATION</span>
                <span className="text-[#F5F5F5]">Xweet (Independent Studio)</span>
              </div>
              <div>
                <span className="text-[10px] text-[#71717A] uppercase block">FOUNDER &amp; LEAD</span>
                <span className="text-[#F5F5F5]">{studio.builderName}</span>
              </div>
              <div>
                <span className="text-[10px] text-[#71717A] uppercase block">STUDIO DOMAIN</span>
                <span className="text-[#2563EB]">{studio.domain}</span>
              </div>
              <div>
                <span className="text-[10px] text-[#71717A] uppercase block">HQ &amp; BASE</span>
                <span className="text-[#F5F5F5]">{studio.location}</span>
              </div>
              <div>
                <span className="text-[10px] text-[#71717A] uppercase block">FLAGSHIPS</span>
                <span className="text-[#F5F5F5]">Infyn · Smiley PDF · Indivio</span>
              </div>
              <div>
                <span className="text-[10px] text-[#71717A] uppercase block">CORE FOCUS</span>
                <span className="text-[#F5F5F5]">Privacy · Consumer Apps · High-Speed Web</span>
              </div>
            </div>

            <div className="pt-3 border-t border-[#1F1F23]">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-lg bg-[#2563EB] py-2.5 text-xs font-sans font-medium text-white transition-colors hover:bg-[#1D4ED8]"
              >
                Work with Xweet →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. SHIPPED PRODUCTS OVERVIEW */}
      {/* ============================================================ */}
      <section aria-label="Shipped Products" className="border-t border-[#1F1F23] pt-16 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#2563EB] block">
              Flagship Software
            </span>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-[#F5F5F5] sm:text-3xl">
              Shipped under the Xweet umbrella
            </h2>
          </div>
          <span className="font-mono text-xs text-[#A1A1AA]">
            {projects.length} ACTIVE PRODUCTS
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-xl border border-[#1F1F23] bg-[#0B0B0D] p-6 transition-all hover:border-[#2563EB]/40"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#1F1F23] bg-[#050505] p-2 transition-transform group-hover:scale-105">
                    <Image
                      src={project.logo}
                      alt={`${project.title} logo`}
                      width={44}
                      height={44}
                      className="h-full w-full object-contain rounded-full"
                    />
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full border border-[#1F1F23] bg-[#050505] px-2 py-0.5 font-mono text-[10px] text-[#A1A1AA]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                    {project.status}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-[#F5F5F5] group-hover:text-[#2563EB] transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#A1A1AA]">
                    {project.tagline}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1F1F23] flex items-center justify-between">
                <span className="font-mono text-[10px] text-[#71717A]">
                  {project.domain}
                </span>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-[#2563EB] hover:underline"
                  >
                    Launch ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. TECHNOLOGIES & TOOLKIT */}
      {/* ============================================================ */}
      <section aria-label="Technologies" className="border-t border-[#1F1F23] pt-16 space-y-8">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#2563EB] block">
            Capabilities
          </span>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight text-[#F5F5F5] sm:text-3xl">
            Production technology stack
          </h2>
          <p className="mt-1 text-sm text-[#A1A1AA]">
            Every tool is selected for stability, speed, and minimal external friction.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((group, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-[#1F1F23] bg-[#0B0B0D] p-5 space-y-3"
            >
              <div>
                <h3 className="text-sm font-semibold text-[#F5F5F5]">
                  {group.category}
                </h3>
                <p className="text-xs text-[#A1A1AA] mt-0.5">
                  {group.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-[#1F1F23] bg-[#050505] px-2.5 py-1 font-mono text-[11px] text-[#F5F5F5]"
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
      {/* 5. BOTTOM CTA BANNER */}
      {/* ============================================================ */}
      <section className="rounded-2xl border border-[#1F1F23] bg-[#0B0B0D] p-8 sm:p-12 text-center sm:text-left flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[#2563EB] block">
            Let&apos;s Build
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#F5F5F5]">
            Have an idea? Let&apos;s build something worth using.
          </h2>
          <p className="text-sm text-[#A1A1AA]">
            Xweet is open for select software builds, product collaborations, and technical partnerships.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-[#2563EB] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1D4ED8]"
          >
            Initiate Contact →
          </Link>
          <Link
            href="/#products"
            className="inline-flex items-center justify-center rounded-lg border border-[#1F1F23] bg-[#050505] px-5 py-3 font-mono text-xs text-[#A1A1AA] transition-colors hover:text-[#F5F5F5]"
          >
            View Products ↓
          </Link>
        </div>
      </section>
    </div>
  );
}
