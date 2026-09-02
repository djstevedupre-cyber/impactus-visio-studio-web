import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.impactusvisio.com/sitemap.xml",
    host: "https://www.impactusvisio.com",
  };
}