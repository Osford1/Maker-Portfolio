import Link from "next/link";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="main-container py-12">
      <div className="card p-8">
        <h1 className="hero-title">Contact</h1>
        <p className="text-sm subtle mt-3">
          Interested in collaboration, feedback, or opportunities? Reach out anytime.
        </p>
        <div className="mt-6 flex flex-col gap-3 text-sm">
          <a className="btn w-fit" href="mailto:osfordteo@gmail.com">
            osfordteo@gmail.com
          </a>
          <Link href="https://github.com/Osford1" className="btn-outline w-fit">
            GitHub: Osford1
          </Link>
        </div>
      </div>
    </div>
  );
}
