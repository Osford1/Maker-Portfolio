"use client";

import { useMemo, useState } from "react";
import { Project } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

const uniq = (items: string[]) => Array.from(new Set(items)).sort();

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [tag, setTag] = useState("All");
  const [tool, setTool] = useState("All");
  const [year, setYear] = useState("All");
  const [category, setCategory] = useState("All");

  const tags = useMemo(() => ["All", ...uniq(projects.flatMap((p) => p.tags))], [projects]);
  const tools = useMemo(() => ["All", ...uniq(projects.flatMap((p) => p.tools))], [projects]);
  const years = useMemo(() => ["All", ...uniq(projects.map((p) => p.year))], [projects]);
  const categories = useMemo(() => ["All", ...uniq(projects.map((p) => p.category))], [projects]);

  const filtered = projects.filter((project) => {
    const tagOk = tag === "All" || project.tags.includes(tag);
    const toolOk = tool === "All" || project.tools.includes(tool);
    const yearOk = year === "All" || project.year === year;
    const categoryOk = category === "All" || project.category === category;
    return tagOk && toolOk && yearOk && categoryOk;
  });

  return (
    <div className="flex flex-col gap-6">
      <div className="card p-4 grid gap-4 md:grid-cols-4">
        <label className="text-sm font-semibold">
          Tag
          <select
            className="mt-2 w-full border-2 border-border rounded-lg p-2 bg-white"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          >
            {tags.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm font-semibold">
          Tool
          <select
            className="mt-2 w-full border-2 border-border rounded-lg p-2 bg-white"
            value={tool}
            onChange={(e) => setTool(e.target.value)}
          >
            {tools.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm font-semibold">
          Year
          <select
            className="mt-2 w-full border-2 border-border rounded-lg p-2 bg-white"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm font-semibold">
          Category
          <select
            className="mt-2 w-full border-2 border-border rounded-lg p-2 bg-white"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-sm subtle">No projects match the selected filters.</p>
      )}
    </div>
  );
}
