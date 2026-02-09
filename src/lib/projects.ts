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
  return parsed.projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getProjects().find((project) => project.slug === slug);
}
