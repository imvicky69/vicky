"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { portfolioConfig } from "@/config/portfolio";

function subscribeTheme(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  window.addEventListener("storage", callback);
  return () => {
    observer.disconnect();
    window.removeEventListener("storage", callback);
  };
}

function getThemeSnapshot(): boolean {
  if (typeof window === "undefined") return true;
  return !document.documentElement.classList.contains("light");
}

function getServerSnapshot(): boolean {
  return true;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isDark = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getServerSnapshot);

  const githubContact = portfolioConfig.contacts.find((c) => c.type === "github");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-200 ${
        scrolled
          ? "border-[#1F1F23] bg-[#050505]/90 backdrop-blur-md"
          : "border-[#1F1F23]/80 bg-[#050505]/75 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        {/* Brand: X / Vicky */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 transition-opacity hover:opacity-90"
          aria-label={`${portfolioConfig.personal.name} (${portfolioConfig.personal.alias}) Homepage`}
        >
          <div className="relative flex h-6 w-6 items-center justify-center overflow-hidden rounded-md border border-[#1F1F23] bg-[#0B0B0D] p-0.5 transition-colors group-hover:border-[#3B82F6]/50">
            <Image
              src="/logo.png"
              alt="X logo"
              width={20}
              height={20}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-medium text-sm tracking-tight text-[#F5F5F5]">
              {portfolioConfig.personal.name}
            </span>
            <span className="font-mono text-xs text-[#A1A1AA]">
              / {portfolioConfig.personal.alias.toLowerCase()}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden items-center gap-7 md:flex">
          {portfolioConfig.navigation.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-[#A1A1AA] transition-colors hover:text-[#F5F5F5]"
            >
              {link.name}
            </Link>
          ))}

          <span className="h-4 w-px bg-[#1F1F23]" aria-hidden="true" />

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#1F1F23] bg-[#0B0B0D] text-[#A1A1AA] transition-colors hover:text-[#F5F5F5] hover:border-[#3B82F6]/40"
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            title={isDark ? "Switch to light theme" : "Switch to dark theme"}
          >
            {!isDark ? (
              <svg
                className="h-4 w-4 fill-none stroke-current"
                viewBox="0 0 24 24"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg
                className="h-4 w-4 fill-none stroke-current"
                viewBox="0 0 24 24"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </button>

          {/* GitHub Icon Link */}
          {githubContact && (
            <a
              href={githubContact.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${portfolioConfig.personal.name}'s GitHub Profile`}
              className="text-[#A1A1AA] transition-colors hover:text-[#F5F5F5]"
            >
              <svg
                className="h-4 w-4 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
            </a>
          )}
        </nav>

        {/* Mobile Controls: Theme Toggle + Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1F1F23] bg-[#0B0B0D] text-[#A1A1AA] transition-colors hover:text-[#F5F5F5]"
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
          >
            {!isDark ? (
              <svg
                className="h-4 w-4 fill-none stroke-current"
                viewBox="0 0 24 24"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg
                className="h-4 w-4 fill-none stroke-current"
                viewBox="0 0 24 24"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </button>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1F1F23] bg-[#0B0B0D] text-[#A1A1AA] transition-colors hover:text-[#F5F5F5]"
            aria-expanded={isOpen}
            aria-label="Toggle Navigation Menu"
          >
            <span className="sr-only">Toggle navigation</span>
            {isOpen ? (
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="border-b border-[#1F1F23] bg-[#050505] px-6 py-5 md:hidden">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-4">
            {portfolioConfig.navigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-[#A1A1AA] transition-colors hover:text-[#F5F5F5]"
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-2 pt-4 border-t border-[#1F1F23] flex items-center justify-between">
              <span className="font-mono text-xs text-[#A1A1AA]">
                STATUS: {portfolioConfig.personal.status}
              </span>
              {githubContact && (
                <a
                  href={githubContact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-[#3B82F6] hover:underline"
                >
                  GitHub ↗
                </a>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
