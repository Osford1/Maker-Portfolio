import Link from "next/link";

export default function NotFound() {
  return (
    <div className="main-container py-20">
      <div className="card p-10">
        <h1 className="hero-title">Page not found</h1>
        <p className="mt-4 text-sm subtle">
          The page you are looking for doesn’t exist yet.
        </p>
        <Link href="/" className="btn mt-6 inline-flex">Back home</Link>
      </div>
    </div>
  );
}
