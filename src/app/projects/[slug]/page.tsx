import Link from "next/link";
import { notFound } from "next/navigation";
import Gallery from "@/components/Gallery";
import VideoGallery from "@/components/VideoGallery";
import { getProjectBySlug, getProjects } from "@/lib/projects";

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return notFound();

  return (
    <div className="main-container py-12">
      <Link href="/projects" className="text-sm font-semibold hover:underline">
        ? Back to projects
      </Link>

      <div className="card p-8 mt-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="badge">{project.category}</span>
          <span className="text-xs font-semibold border border-border px-2 py-1 rounded-full">
            {project.year}
          </span>
        </div>
        <h1 className="hero-title mt-4">{project.title}</h1>
        <p className="text-lg subtle mt-3 max-w-3xl">{project.summary}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="badge">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-6 mt-8 lg:grid-cols-[2fr,1fr]">
        <div className="grid gap-6">
          <section className="card p-6">
            <h2 className="section-title">Overview</h2>
            <p className="mt-3 text-sm leading-relaxed">{project.sections.overview}</p>
          </section>
          <section className="card p-6">
            <h2 className="section-title">Build</h2>
            <p className="mt-3 text-sm leading-relaxed">{project.sections.build}</p>
          </section>
          <section className="card p-6">
            <h2 className="section-title">Design</h2>
            <p className="mt-3 text-sm leading-relaxed">{project.sections.design}</p>
          </section>
        </div>

        <aside className="card p-6 h-fit">
          <h3 className="section-title">Project Facts</h3>
          <div className="mt-4 text-sm">
            <p className="font-semibold">Roles</p>
            <ul className="mt-2 list-disc list-inside subtle">
              {project.roles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          </div>
          <div className="mt-4 text-sm">
            <p className="font-semibold">Tools</p>
            <ul className="mt-2 list-disc list-inside subtle">
              {project.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
          {project.links.length > 0 && (
            <div className="mt-4 text-sm">
              <p className="font-semibold">Links</p>
              <ul className="mt-2 list-disc list-inside">
                {project.links.map((link) => (
                  <li key={link.url}>
                    <a className="hover:underline" href={link.url} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>

      <section className="mt-8 card p-6">
        <h2 className="section-title">Photos</h2>
        <div className="mt-4">
          <Gallery images={project.media.images} />
        </div>
      </section>

      <section className="mt-8 card p-6">
        <h2 className="section-title">Videos</h2>
        <div className="mt-4">
          <VideoGallery videos={project.media.videos} />
        </div>
      </section>

      <section className="mt-8 card p-6">
        <h2 className="section-title">Results</h2>
        <p className="mt-3 text-sm leading-relaxed">{project.sections.results}</p>
      </section>

      <section className="mt-8 card p-6">
        <h2 className="section-title">Future Work</h2>
        <p className="mt-3 text-sm leading-relaxed">{project.sections.futureWork}</p>
      </section>
    </div>
  );
}
