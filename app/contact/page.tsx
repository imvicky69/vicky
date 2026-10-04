import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { portfolioConfig } from "@/config/portfolio";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Xweet — independent software and product studio. Inquire about custom product builds, software engineering, and technical partnerships.",
};

export default function ContactPage() {
  const { studio, contacts } = portfolioConfig;

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24 space-y-20">
      {/* Top Breadcrumb & Heading */}
      <section aria-label="Contact Header" className="space-y-6 border-b border-[#1F1F23] pb-16">
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
            <span>OPEN FOR SELECT BUILDS</span>
          </div>
        </div>

        <div className="max-w-3xl space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#2563EB] block">
            Get in touch
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-[#F5F5F5] sm:text-6xl sm:leading-[1.1]">
            Have an idea? Let&apos;s build something worth using.
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-[#A1A1AA] pt-2">
            Whether you&apos;re looking to architect a new sovereign product from scratch, build a
            high-performance web platform, or collaborate on focused digital tools, Xweet is open
            for technical discussions and ambitious projects.
          </p>
        </div>

        {/* Quick Snapshot Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#1F1F23]">
          <div>
            <span className="font-mono text-[10px] text-[#A1A1AA] uppercase block">DIRECT EMAIL</span>
            <span className="mt-0.5 font-mono text-xs text-[#F5F5F5] block">contact@xweet.in</span>
          </div>
          <div>
            <span className="font-mono text-[10px] text-[#A1A1AA] uppercase block">RESPONSE WINDOW</span>
            <span className="mt-0.5 font-mono text-xs text-[#2563EB] block">Within 24 Hours</span>
          </div>
          <div>
            <span className="font-mono text-[10px] text-[#A1A1AA] uppercase block">STUDIO LOCATION</span>
            <span className="mt-0.5 font-mono text-xs text-[#F5F5F5] block">{studio.location}</span>
          </div>
          <div>
            <span className="font-mono text-[10px] text-[#A1A1AA] uppercase block">COLLABORATION</span>
            <span className="mt-0.5 font-mono text-xs text-[#F5F5F5] block">Direct with Builder</span>
          </div>
        </div>
      </section>

      {/* Main Grid: Direct Channels & Interactive Form */}
      <section className="grid gap-12 lg:grid-cols-12 items-start">
        {/* Left Column: Direct Channels & Collaboration Values */}
        <div className="space-y-8 lg:col-span-5">
          <div className="space-y-4">
            <span className="font-mono text-xs uppercase tracking-wider text-[#F5F5F5] block">
              Direct Channels
            </span>
            <div className="grid gap-3">
              {contacts.map((contact) => (
                <a
                  key={contact.id}
                  href={contact.href}
                  target={contact.type === "email" ? undefined : "_blank"}
                  rel={contact.type === "email" ? undefined : "noopener noreferrer"}
                  className="group flex items-center justify-between rounded-xl border border-[#1F1F23] bg-[#0B0B0D] p-4 transition-all hover:border-[#2563EB]/50"
                >
                  <div className="space-y-0.5">
                    <span className="text-sm font-medium text-[#F5F5F5] group-hover:text-[#2563EB] transition-colors block">
                      {contact.label}
                    </span>
                    {contact.username && (
                      <span className="font-mono text-xs text-[#A1A1AA] block">
                        {contact.username}
                      </span>
                    )}
                  </div>
                  <span className="font-mono text-xs text-[#A1A1AA] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Working Philosophy Checklist */}
          <div className="rounded-xl border border-[#1F1F23] bg-[#0B0B0D] p-6 space-y-4">
            <span className="font-mono text-xs uppercase tracking-wider text-[#2563EB] block">
              How we collaborate
            </span>
            <ul className="space-y-3 font-mono text-xs text-[#A1A1AA]">
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB] mt-1.5 shrink-0" />
                <span>
                  <strong className="text-[#F5F5F5]">Direct engineering:</strong> Talk directly to the builder without intermediary layers or sales reps.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB] mt-1.5 shrink-0" />
                <span>
                  <strong className="text-[#F5F5F5]">First-principles scope:</strong> Clean architecture and no unnecessary software bloat.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB] mt-1.5 shrink-0" />
                <span>
                  <strong className="text-[#F5F5F5]">Full sovereignty:</strong> You own 100% of your source code, infrastructure, and keys.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
