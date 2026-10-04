import Image from "next/image";
import Link from "next/link";
import { portfolioConfig } from "@/config/portfolio";

export default function Footer() {
  const { studio, projects, contacts } = portfolioConfig;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1F1F23] bg-[#050505] py-16 sm:py-20 text-[#A1A1AA]">
      <div className="mx-auto max-w-5xl px-6">
        {/* Top Grid: Brand & Structured Columns */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 pb-14 border-b border-[#1F1F23]">
          {/* Brand Info */}
          <div className="space-y-4 lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <div className="relative flex h-7 w-7 items-center justify-center overflow-hidden rounded-md border border-[#1F1F23] bg-[#0B0B0D] p-1">
                <Image
                  src="/logo.png"
                  alt="Xweet Logo"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
              <span className="text-base font-semibold tracking-tight text-[#F5F5F5]">
                {studio.name}
              </span>
              <span className="rounded border border-[#1F1F23] bg-[#0B0B0D] px-1.5 py-0.5 font-mono text-[10px] uppercase text-[#A1A1AA]">
                Studio
              </span>
            </div>

            <p className="text-sm leading-relaxed text-[#A1A1AA] max-w-sm">
              {studio.subheadline}
            </p>

            <div className="pt-2 font-mono text-xs text-[#71717A]">
              <span>Driven by {studio.builderName}</span>
              <span className="mx-2">·</span>
              <span>{studio.location}</span>
            </div>
          </div>

          {/* Column: Products */}
          <div className="space-y-3 lg:col-span-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#F5F5F5] block">
              Products
            </span>
            <ul className="space-y-2 text-xs">
              {projects.map((project) => (
                <li key={project.id}>
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between text-[#A1A1AA] transition-colors hover:text-[#F5F5F5]"
                    >
                      <span>{project.title}</span>
                      <span className="font-mono text-[10px] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">
                        ↗
                      </span>
                    </a>
                  ) : (
                    <a
                      href={`#${project.id}`}
                      className="text-[#A1A1AA] transition-colors hover:text-[#F5F5F5]"
                    >
                      {project.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column: Studio */}
          <div className="space-y-3 lg:col-span-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#F5F5F5] block">
              Studio
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/#products" className="text-[#A1A1AA] transition-colors hover:text-[#F5F5F5]">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/#lab" className="text-[#A1A1AA] transition-colors hover:text-[#F5F5F5]">
                  Lab &amp; Tools
                </Link>
              </li>
              <li>
                <Link href="/#philosophy" className="text-[#A1A1AA] transition-colors hover:text-[#F5F5F5]">
                  Philosophy
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-[#A1A1AA] transition-colors hover:text-[#F5F5F5]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#technologies" className="text-[#A1A1AA] transition-colors hover:text-[#F5F5F5]">
                  Stack
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#A1A1AA] transition-colors hover:text-[#F5F5F5]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Connect */}
          <div className="space-y-3 lg:col-span-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#F5F5F5] block">
              Connect
            </span>
            <ul className="space-y-2 text-xs">
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <a
                    href={contact.href}
                    target={contact.type === "email" ? undefined : "_blank"}
                    rel={contact.type === "email" ? undefined : "noopener noreferrer"}
                    className="text-[#A1A1AA] transition-colors hover:text-[#F5F5F5]"
                  >
                    {contact.label} {contact.type !== "email" && "↗"}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 text-xs font-mono sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[#71717A]">
            <span>&copy; {currentYear} {studio.name}. All rights reserved.</span>
            <span>xweet.in</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[#71717A]">Crafted with restraint.</span>
            <a
              href="#main-content"
              className="text-[#A1A1AA] transition-colors hover:text-[#F5F5F5]"
              aria-label="Back to top"
            >
              Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
