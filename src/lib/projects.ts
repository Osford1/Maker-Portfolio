import fs from "fs";
import path from "path";

export type ProjectMedia = {
  images: { src: string; thumb: string; alt: string }[];
  videos: { src: string; label?: string }[];
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  featured: boolean;
  summary: string;
  roles: string[];
  tools: string[];
  tags: string[];
  links: { label: string; url: string }[];
  sections: {
    overview: string;
    build: string;
    design: string;
    results: string;
    futureWork: string;
  };
  media: ProjectMedia;
};

export function getProjects(): Project[] {
  const dataPath = path.join(process.cwd(), "data", "projects.json");
  const raw = fs.readFileSync(dataPath, "utf8");
  const parsed = JSON.parse(raw) as { projects: Project[] };
  return parsed.projects.map((project, index) => {
    const rawSlug =
      typeof project.slug === "string" && project.slug.trim().length > 0
        ? project.slug
        : typeof project.title === "string" && project.title.trim().length > 0
        ? project.title
        : `project-${index + 1}`;
    const normalized = rawSlug.trim().toLowerCase().replace(/\s+/g, "-");
    return {
      ...project,
      slug: normalized,
    };
  });
}

export function getProjectBySlug(slug?: string): Project | undefined {
  if (!slug) return undefined;
  const normalized = String(slug).trim().toLowerCase();
  return getProjects().find((project) => project.slug === normalized);
}
