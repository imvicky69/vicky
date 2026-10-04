"use client";

import { useState } from "react";

const TOPICS = [
  "New Product Build",
  "Web Platform / App",
  "Mobile / Flutter App",
  "Technical Consulting",
  "General Inquiry",
];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState(TOPICS[0]);
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Xweet Studio Inquiry] ${topic} - ${name || "Project"}`);
    const body = encodeURIComponent(
      `Hello Xweet,\n\nName: ${name}\nContact: ${email}\nTopic: ${topic}\n\nProject / Inquiry Details:\n${message}\n\nSent from xweet.in/contact`
    );
    window.location.href = `mailto:contact@xweet.in?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleCopyDraft = () => {
    const text = `To: contact@xweet.in\nSubject: [Xweet Studio Inquiry] ${topic} - ${name || "Project"}\n\nName: ${name}\nContact: ${email}\nTopic: ${topic}\n\nDetails:\n${message}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="rounded-2xl border border-[#1F1F23] bg-[#0B0B0D] p-6 sm:p-10">
      <div className="space-y-2 border-b border-[#1F1F23] pb-6">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#2563EB] animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-wider text-[#2563EB]">
            Direct Project Inquiry
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#F5F5F5]">
          Send a project brief or message
        </h2>
        <p className="text-xs sm:text-sm text-[#A1A1AA]">
          Fill in the details below. It formats directly into an email to{" "}
          <span className="font-mono text-[#F5F5F5]">contact@xweet.in</span>.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        {/* Name & Email row */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block font-mono text-xs uppercase tracking-wider text-[#F5F5F5]"
            >
              Your Name / Team <span className="text-[#2563EB]">*</span>
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Alex Chen"
              className="w-full rounded-xl border border-[#1F1F23] bg-[#050505] px-4 py-3 font-sans text-sm text-[#F5F5F5] placeholder-[#71717A] outline-none transition-colors focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block font-mono text-xs uppercase tracking-wider text-[#F5F5F5]"
            >
              Email Address <span className="text-[#2563EB]">*</span>
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="alex@domain.com"
              className="w-full rounded-xl border border-[#1F1F23] bg-[#050505] px-4 py-3 font-sans text-sm text-[#F5F5F5] placeholder-[#71717A] outline-none transition-colors focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
            />
          </div>
        </div>

        {/* Topic Pills */}
        <div className="space-y-2.5">
          <label className="block font-mono text-xs uppercase tracking-wider text-[#F5F5F5]">
            Topic / Service
          </label>
          <div className="flex flex-wrap gap-2">
            {TOPICS.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setTopic(item)}
                className={`rounded-lg border px-3 py-1.5 font-mono text-xs transition-colors ${
                  topic === item
                    ? "border-[#2563EB] bg-[#2563EB]/15 text-[#2563EB]"
                    : "border-[#1F1F23] bg-[#050505] text-[#A1A1AA] hover:text-[#F5F5F5] hover:border-[#1F1F23]/80"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label
            htmlFor="message"
            className="block font-mono text-xs uppercase tracking-wider text-[#F5F5F5]"
          >
            Project Scope / Message <span className="text-[#2563EB]">*</span>
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us what you're looking to build, any existing wireframes or specs, timeline expectations, and constraints..."
            className="w-full rounded-xl border border-[#1F1F23] bg-[#050505] p-4 font-sans text-sm text-[#F5F5F5] placeholder-[#71717A] outline-none transition-colors focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
          />
        </div>

        {/* Form Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
          <div className="flex items-center gap-3">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg bg-[#2563EB] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1D4ED8]"
            >
              Open in Email Client ↗
            </button>
            <button
              type="button"
              onClick={handleCopyDraft}
              className="inline-flex items-center justify-center rounded-lg border border-[#1F1F23] bg-[#050505] px-4 py-3 font-mono text-xs text-[#A1A1AA] transition-colors hover:border-[#2563EB]/50 hover:text-[#F5F5F5]"
            >
              {copied ? "Copied to Clipboard!" : "Copy Draft Text"}
            </button>
          </div>

          <span className="font-mono text-xs text-[#71717A]">
            Direct email: contact@xweet.in
          </span>
        </div>

        {submitted && (
          <div className="rounded-xl border border-[#2563EB]/40 bg-[#2563EB]/10 p-4 font-mono text-xs text-[#2563EB]">
            Email draft generated. If your client didn&apos;t open automatically, use the &ldquo;Copy Draft Text&rdquo; button above to send it directly to contact@xweet.in.
          </div>
        )}
      </form>
    </div>
  );
}
