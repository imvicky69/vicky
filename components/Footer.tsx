import Image from "next/image";
import { portfolioConfig } from "@/config/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-[#1F1F23] bg-[#050505] py-14">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 px-6 sm:flex-row sm:items-center">
        {/* Brand & Note */}
        <div className="flex items-center gap-3">
          <div className="relative flex h-6 w-6 items-center justify-center overflow-hidden rounded-md border border-[#1F1F23] bg-[#0B0B0D] p-0.5">
            <Image
              src="/logo.png"
              alt="X Logo"
              width={20}
              height={20}
              className="object-contain"
            />
          </div>
          <div className="space-y-0.5">
            <p className="text-sm font-medium text-[#F5F5F5]">
              &copy; {new Date().getFullYear()} {portfolioConfig.personal.name}{" "}
              <span className="font-mono text-xs text-[#A1A1AA]">
                (@{portfolioConfig.personal.alias.toLowerCase()})
              </span>
            </p>
            <p className="font-mono text-xs text-[#A1A1AA]">
              Built with curiosity &amp; code.
            </p>
          </div>
        </div>

        {/* Links from centralized portfolioConfig */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-[#A1A1AA]">
          {portfolioConfig.contacts.map((contact) => (
            <a
              key={contact.id}
              href={contact.href}
              target={contact.type === "email" ? undefined : "_blank"}
              rel={contact.type === "email" ? undefined : "noopener noreferrer"}
              className="transition-colors hover:text-[#F5F5F5]"
            >
              {contact.label.replace(/\s*\(Email\)/i, "")}
            </a>
          ))}
          <a
            href="#main-content"
            className="font-mono text-xs text-[#A1A1AA] transition-colors hover:text-[#F5F5F5]"
            aria-label="Back to top of page"
          >
            Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
