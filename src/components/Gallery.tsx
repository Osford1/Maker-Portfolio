"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type GalleryImage = {
  src: string;
  thumb: string;
  alt: string;
};

export default function Gallery({ images }: { images: GalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setActiveIndex(null);
      if (activeIndex === null) return;
      if (e.key === "ArrowRight") setActiveIndex((idx) => (idx === null ? 0 : (idx + 1) % images.length));
      if (e.key === "ArrowLeft") setActiveIndex((idx) => (idx === null ? 0 : (idx - 1 + images.length) % images.length));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, images.length]);

  if (!images.length) {
    return <p className="text-sm subtle">No photos yet.</p>;
  }

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, index) => (
          <button
            key={img.src}
            className="card overflow-hidden text-left"
            onClick={() => setActiveIndex(index)}
          >
            <div className="relative h-48 w-full">
              <Image
                src={img.thumb}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6">
          <div className="max-w-4xl w-full">
            <div className="flex items-center justify-between mb-3 text-white text-sm">
              <span>
                {activeIndex + 1} / {images.length}
              </span>
              <div className="flex gap-2">
                <button className="btn-outline text-white border-white" onClick={() => setActiveIndex((activeIndex - 1 + images.length) % images.length)}>
                  Prev
                </button>
                <button className="btn-outline text-white border-white" onClick={() => setActiveIndex((activeIndex + 1) % images.length)}>
                  Next
                </button>
                <button className="btn text-black" onClick={() => setActiveIndex(null)}>
                  Close
                </button>
              </div>
            </div>
            <div className="relative w-full h-[70vh] bg-black">
              <Image
                src={images[activeIndex].src}
                alt={images[activeIndex].alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
