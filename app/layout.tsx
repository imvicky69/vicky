import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { portfolioConfig } from "@/config/portfolio";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const { personal, contacts } = portfolioConfig;
const siteUrl = personal.siteUrl;
const socialUrls = contacts
  .filter((c) => c.type !== "email")
  .map((c) => c.href);

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${personal.name} (${personal.alias}) — Developer & Builder`,
    template: `%s | ${personal.name} (${personal.alias})`,
  },
  description: `Personal developer portfolio of ${personal.name} (known online as ${personal.alias}) — ${personal.role}. ${personal.tagline}`,
  applicationName: `${personal.name} Portfolio`,
  authors: [
    { name: personal.name, url: siteUrl },
    { name: personal.alias, url: siteUrl },
  ],
  generator: "Next.js",
  keywords: [
    personal.name,
    `${personal.name} developer`,
    `${personal.name} software developer`,
    `${personal.name} web developer`,
    personal.alias,
    `${personal.alias} developer`,
    `${personal.name} projects`,
    "Infyn",
    "Infyn software",
    "Infyn DL",
    "Indivio",
    "Lele",
    "Developer Portfolio",
    "Software Engineer",
    "Product Builder",
    "Full Stack Developer",
  ],
  creator: `${personal.name} (${personal.alias})`,
  publisher: personal.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: `${personal.name} (${personal.alias}) — Developer & Builder`,
    description: personal.bio,
    siteName: `${personal.name} (${personal.alias}) Portfolio`,
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: `${personal.name} (${personal.alias}) — Developer & Builder`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} (${personal.alias}) — Developer & Builder`,
    description: personal.bio,
    images: ["/logo.png"],
    creator: `@${personal.alias.toLowerCase()}`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: personal.name,
        alternateName: personal.alias,
        jobTitle: personal.role,
        description: personal.bio,
        url: siteUrl,
        image: `${siteUrl}/logo.png`,
        sameAs: socialUrls,
        knowsAbout: [
          "Software Development",
          "Web Applications",
          "Next.js",
          "React",
          "TypeScript",
          "Node.js",
          "Product Engineering",
          "Privacy-focused Architecture",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: `${personal.name} (${personal.alias}) — Portfolio`,
        description: `Official developer portfolio of ${personal.name} (${personal.alias})`,
        publisher: {
          "@id": `${siteUrl}/#person`,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "SoftwareApplication",
        name: "Infyn",
        url: "https://infyn.software",
        applicationCategory: "SecurityApplication",
        operatingSystem: "Web",
        author: {
          "@id": `${siteUrl}/#person`,
        },
        description:
          "Privacy-focused software ecosystem built for personal security, seamless utilities, and data sovereignty.",
      },
      {
        "@type": "SoftwareApplication",
        name: "Infyn DL",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Cross-platform",
        author: {
          "@id": `${siteUrl}/#person`,
        },
        description:
          "High-fidelity music streaming and audio player application within the Infyn ecosystem.",
      },
      {
        "@type": "SoftwareApplication",
        name: "Indivio",
        url: "https://indivio.in",
        applicationCategory: "WebApplication",
        operatingSystem: "Web",
        author: {
          "@id": `${siteUrl}/#person`,
        },
        description:
          "Modern web platform engineered for performance, community engagement, and digital workflows.",
      },
    ],
  };

  const themeScript = `
    (function() {
      try {
        var saved = localStorage.getItem('theme');
        if (saved === 'light') {
          document.documentElement.classList.add('light');
        } else {
          document.documentElement.classList.remove('light');
        }
      } catch (e) {}
    })();
  `;

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} font-sans h-full scroll-smooth`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-[#050505] text-[#F5F5F5] font-sans antialiased selection:bg-[#1F1F23] selection:text-[#F5F5F5]">
        {/* Accessible skip link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:border focus:border-[#1F1F23] focus:bg-[#0B0B0D] focus:px-4 focus:py-2 focus:text-sm focus:text-[#F5F5F5] focus:outline-none"
        >
          Skip to main content
        </a>

        {/* Global Navigation */}
        <Navbar />

        {/* Main Content */}
        <main id="main-content" className="flex-1">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
