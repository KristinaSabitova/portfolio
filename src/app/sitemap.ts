import type { MetadataRoute } from "next";

export const dynamic = "force-static";
import { config } from "@/data/config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: config.site,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
