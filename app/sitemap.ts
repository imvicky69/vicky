import type { MetadataRoute } from "next";
import { portfolioConfig } from "@/config/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = portfolioConfig.personal.siteUrl;

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...portfolioConfig.navigation.map((nav) => ({
      url: `${siteUrl}/${nav.href}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
