import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/env";

// /terms and /privacy are intentionally excluded — draft content marked
// noindex (see robots metadata on those pages) until legal review is done.
const routes = ["", "/clubs", "/golfers", "/advertisers", "/clubs/signup"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
