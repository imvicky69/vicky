import type { MetadataRoute } from "next";
import { portfolioConfig } from "@/config/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = portfolioConfig.studio.siteUrl;

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
