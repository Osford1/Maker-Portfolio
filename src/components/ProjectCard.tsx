import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const cover = project.media.images[0];
  return (
    <Link href={`/projects/${project.slug}`} className="card block overflow-hidden group">
      <div className="relative h-44 w-full bg-paper">
        {cover ? (
          <Image
            src={cover.thumb || cover.src}
            alt={cover.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-sm subtle">
            No image yet
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-semibold text-lg">{project.title}</h3>
          <span className="text-xs font-semibold border border-border px-2 py-1 rounded-full">
            {project.year}
          </span>
        </div>
        <p className="text-sm subtle mt-2">{project.summary}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="badge">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
