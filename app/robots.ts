import type { MetadataRoute } from "next";
import { portfolioConfig } from "@/config/portfolio";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = portfolioConfig.studio.siteUrl;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
