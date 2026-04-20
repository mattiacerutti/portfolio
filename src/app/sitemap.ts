import type {MetadataRoute} from "next";
import {PROJECTS} from "@/data/projects";
import {absoluteUrl} from "@/lib/seo";

export const dynamic = "force-static";

const STATIC_PATHS = ["/", "/projects", "/work"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const paths = [...STATIC_PATHS, ...PROJECTS.map((project) => `/projects/${project.id}`)];

  return paths.map((pathname) => ({
    url: absoluteUrl(pathname),
    lastModified,
    changeFrequency: pathname === "/" ? "weekly" : "monthly",
    priority: pathname === "/" ? 1 : 0.8,
  }));
}
