import type { MetadataRoute } from "next";
import { animals } from "@/lib/animals";
import { site } from "@/lib/site";
import { stories } from "@/lib/stories";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/adopt",
    "/care",
    "/contact",
    "/donate",
    "/foster",
    "/help-an-animal",
    "/how-it-works",
    "/partners",
    "/privacy",
    "/safety",
    "/stories",
    "/terms",
    "/volunteer",
  ];

  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${site.url}${route}`,
      lastModified: now,
      changeFrequency:
        route === "" || route === "/adopt"
          ? ("weekly" as const)
          : ("monthly" as const),
      priority: route === "" ? 1 : route === "/adopt" ? 0.9 : 0.7,
    })),
    ...animals.map((animal) => ({
      url: `${site.url}/adopt/${animal.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...stories.map((story) => ({
      url: `${site.url}/stories/${story.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
