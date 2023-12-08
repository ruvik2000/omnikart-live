import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://illustrious-bunny-e932ea.netlify.app/sitemap.xml",
  };
}
