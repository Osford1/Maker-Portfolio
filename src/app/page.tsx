import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { getProjects } from "@/lib/projects";

export default function HomePage() {
  const projects = getProjects();
  const featured = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <div>
      <section className="main-container pt-12 pb-10">
        <div className="card p-8 md:p-12">
          <p className="badge w-fit">Maker Portfolio</p>
          <h1 className="hero-title mt-4">Teo Yu Dong Maker Portfolio</h1>
          <p className="mt-4 text-lg subtle max-w-2xl">
            3rd year Mechatronics undergraduate at The University of Melbourne. I design,
            build, and iterate on robotics systems and fabrication projects — from custom
            gearboxes to CNC machining and additive manufacturing.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/projects" className="btn">Explore Projects</Link>
            <Link href="/contact" className="btn-outline">Contact</Link>
          </div>
        </div>
      </section>

      <section className="main-container py-10">
        <div className="flex items-center justify-between">
          <h2 className="section-title">Featured Projects</h2>
          <Link href="/projects" className="text-sm font-semibold hover:underline">
            View all
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="main-container py-10">
        <div className="card p-8 grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="section-title">Focus Areas</h3>
            <p className="text-sm subtle mt-2">
              Robotics systems, motion control, humanoid mechanisms, and precision manufacturing.
            </p>
          </div>
          <div className="md:col-span-2 grid gap-4 sm:grid-cols-2">
            {[
              "Advanced robotics projects with custom transmissions",
              "Humanoid modules designed for expansion",
              "Mobile robotics for sensing and autonomy",
              "Manufacturing workflows from CAD to physical parts",
            ].map((item) => (
              <div key={item} className="card p-4">
                <p className="text-sm font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
