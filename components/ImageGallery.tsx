"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  images: string[];
  title: string;
}

export default function ImageGallery({ images, title }: Props) {
  const [lightbox, setLightbox] = useState<string | null>(null);

  if (images.length === 0) {
    return (
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-5">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="aspect-video rounded-xl border border-dashed border-bg-border bg-bg-card flex flex-col items-center justify-center gap-2"
            >
              <p className="font-mono text-text-muted text-xs">Add images to:</p>
              <p className="font-mono text-accent-cyan/60 text-xs">
                public/images/{"{project-slug}"}/photo.jpg
              </p>
              <p className="font-mono text-text-muted text-xs">
                then reference them in data/projects.ts
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold text-text-primary mb-5">Gallery</h2>

      <div className={`grid gap-4 ${images.length === 1 ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setLightbox(src)}
            className="block w-full aspect-video relative rounded-xl overflow-hidden border border-bg-border bg-bg-card hover:border-accent-cyan/40 transition-colors group"
          >
            <Image
              src={src}
              alt={`${title} — image ${i + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh]">
            <Image
              src={lightbox}
              alt="Enlarged view"
              width={1200}
              height={800}
              className="object-contain w-full h-full rounded-lg"
            />
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-3 right-3 text-white/60 hover:text-white font-mono text-sm bg-black/40 px-3 py-1 rounded"
            >
              close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
