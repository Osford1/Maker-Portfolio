import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-border bg-paper/90 backdrop-blur">
      <div className="main-container flex items-center justify-between py-4">
        <Link href="/" className="font-bold text-lg tracking-tight">
          Teo Yu Dong Maker Portfolio
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:underline">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/contact" className="btn hidden sm:inline-flex">
            Contact
          </Link>
          <Link href="/projects" className="btn-outline inline-flex md:hidden">
            Projects
          </Link>
        </div>
      </div>
    </header>
  );
}
