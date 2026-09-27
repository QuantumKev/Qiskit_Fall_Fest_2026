import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/content/event";
import { PAGES } from "@/content/onboarding";

export const dynamic = "force-static";

const paths = [
  "/",
  ...PAGES.map((page) => page.href),
  "/handbook/",
  "/facilitator/",
  "/catalog/",
  "/support/",
  "/glossary/",
  "/register/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [...new Set(paths)].map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.6,
  }));
}
