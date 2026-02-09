import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t-2 border-border mt-16">
      <div className="main-container py-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold">Teo Yu Dong Maker Portfolio</p>
          <p className="text-sm subtle">Mechatronics, robotics, and fabrication projects.</p>
        </div>
        <div className="flex items-center gap-4 text-sm font-semibold">
          <Link href="/projects" className="hover:underline">Projects</Link>
          <Link href="/work" className="hover:underline">Work</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
