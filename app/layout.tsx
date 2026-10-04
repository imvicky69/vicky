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

const { studio, contacts } = portfolioConfig;
const siteUrl = studio.siteUrl;
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
    default: "Xweet — Independent Software & Product Studio",
    template: "%s | Xweet Studio",
  },
  description:
    "Official website for Xweet — an independent software and product studio building things worth using. Home to Infyn, Infyn DL, Indivio, and tools.",
  applicationName: "Xweet Studio",
  authors: [
    { name: "Xweet", url: siteUrl },
    { name: studio.builderName, url: siteUrl },
  ],
  generator: "Next.js",
  keywords: [
    "Xweet",
    "Xweet Studio",
    "xweet.in",
    "Infyn",
    "Infyn software",
    "Infyn DL",
    "Smiley PDF",
    "SmileyPDF",
    "smiley.xweet.in",
    "Indivio",
    "indivio.xweet.in",
    "Lele",
    "independent software studio",
    "product studio",
    "software craftsmanship",
    "privacy-first software",
    "Vicky Raja",
    "Full Stack Developer",
  ],
  creator: "Xweet",
  publisher: "Xweet",
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
    title: "Xweet — Independent Software & Product Studio",
    description: studio.subheadline,
    siteName: "Xweet",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Xweet — Independent Software & Product Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xweet — Independent Software & Product Studio",
    description: studio.subheadline,
    images: ["/logo.png"],
    creator: "@xweet",
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
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Xweet",
        url: siteUrl,
        logo: `${siteUrl}/logo.png`,
        description: studio.subheadline,
        founder: {
          "@type": "Person",
          name: studio.builderName,
          jobTitle: studio.builderRole,
          sameAs: socialUrls,
        },
        sameAs: socialUrls,
        knowsAbout: [
          "Software Development",
          "Web Applications",
          "Next.js",
          "React",
          "TypeScript",
          "Flutter",
          "Node.js",
          "Product Engineering",
          "Privacy-focused Architecture",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Xweet — Independent Software & Product Studio",
        description: "Official website for Xweet — independent software, products and experiments.",
        publisher: {
          "@id": `${siteUrl}/#organization`,
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
          "@id": `${siteUrl}/#organization`,
        },
        description:
          "Privacy-focused software ecosystem built for personal security, seamless utilities, and data sovereignty.",
      },
      {
        "@type": "SoftwareApplication",
        name: "Infyn DL",
        url: "https://infyn.software/dl",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Cross-platform",
        author: {
          "@id": `${siteUrl}/#organization`,
        },
        description:
          "High-fidelity music streaming and audio player application within the Infyn ecosystem.",
      },
      {
        "@type": "SoftwareApplication",
        name: "Smiley PDF",
        url: "https://smiley.xweet.in",
        applicationCategory: "ProductivityApplication",
        operatingSystem: "Android",
        author: {
          "@id": `${siteUrl}/#organization`,
        },
        description:
          "Fast, private & zero-bloat PDF reader for Android with 120 FPS rendering, category folders, and 100% on-device privacy.",
      },
      {
        "@type": "SoftwareApplication",
        name: "Indivio",
        url: "https://indivio.xweet.in",
        applicationCategory: "WebApplication",
        operatingSystem: "Web & Mobile",
        author: {
          "@id": `${siteUrl}/#organization`,
        },
        description:
          "Hyperlocal food delivery platform in Nirmali, Bihar with 30-minute express delivery and live GPS tracking.",
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
