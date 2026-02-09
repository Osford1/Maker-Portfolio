import ProjectsGrid from "@/components/ProjectsGrid";
import { getProjects } from "@/lib/projects";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="main-container py-12">
      <div className="card p-8 mb-8">
        <h1 className="section-title">Projects</h1>
        <p className="text-sm subtle mt-2">
          Filter by tag, tool, year, or category to explore the maker portfolio.
        </p>
      </div>
      <ProjectsGrid projects={projects} />
    </div>
  );
}
