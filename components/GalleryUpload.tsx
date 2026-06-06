"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const editingEnabled = process.env.NEXT_PUBLIC_ENABLE_EDITING === "true";

interface Props {
  slug: string;
  initialImages: string[];
}

export default function GalleryUpload({ slug, initialImages }: Props) {
  const [images, setImages] = useState<string[]>(initialImages);
  const [uploading, setUploading] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFiles(files: FileList | null) {
    if (!files || files.length === 0) return;
    setUploading(true);

    const uploaded: string[] = [];
    for (const file of Array.from(files)) {
      const form = new FormData();
      form.append("file", file);
      form.append("slug", slug);
      const res = await fetch("/api/upload", { method: "POST", body: form });
      if (res.ok) {
        const data = await res.json();
        uploaded.push(data.path);
      }
    }

    setImages((prev) => [...prev, ...uploaded]);
    setUploading(false);
  }

  async function removeImage(imgPath: string) {
    const res = await fetch("/api/upload", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug, path: imgPath }),
    });
    if (res.ok) setImages((prev) => prev.filter((p) => p !== imgPath));
  }

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold text-text-primary">Gallery</h2>
        <span className="text-xs text-text-muted font-mono">
          {images.length} image{images.length !== 1 ? "s" : ""}
        </span>
      </div>

      {editingEnabled && (
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
      )}

      {!editingEnabled && images.length === 0 && (
        <p className="text-sm text-text-muted">No images added for this project yet.</p>
      )}

      {(editingEnabled || images.length > 0) && (
      <div className={`grid gap-4 ${
        images.length === 0
          ? "grid-cols-1"
          : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      }`}>
        {/* Existing images */}
        {images.map((src) => (
          <div key={src} className="relative group aspect-video rounded-xl overflow-hidden border border-bg-border bg-bg-card">
            <button onClick={() => setLightbox(src)} className="block w-full h-full">
              <Image
                src={src}
                alt=""
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </button>
            {/* Delete overlay */}
            {editingEnabled && (
              <button
                onClick={() => removeImage(src)}
                className="absolute top-2 right-2 w-7 h-7 rounded bg-black/60 text-white/70 hover:text-white hover:bg-black/80 transition-all opacity-0 group-hover:opacity-100 text-xs font-mono flex items-center justify-center"
                title="Remove image"
              >
                ×
              </button>
            )}
          </div>
        ))}

        {/* Upload card */}
        {editingEnabled && (
          <button
            onClick={() => inputRef.current?.click()}
            disabled={uploading}
            className="aspect-video rounded-xl border-2 border-dashed border-bg-border hover:border-accent-cyan/50 bg-bg-card hover:bg-accent-cyan/5 transition-all flex flex-col items-center justify-center gap-2 group disabled:opacity-50"
          >
            {uploading ? (
              <span className="font-mono text-xs text-text-muted animate-pulse">uploading...</span>
            ) : (
              <>
                <span className="text-3xl font-light text-text-muted group-hover:text-accent-cyan transition-colors leading-none">+</span>
                <span className="font-mono text-xs text-text-muted group-hover:text-accent-cyan transition-colors">
                  add image{images.length > 0 ? "s" : ""}
                </span>
              </>
            )}
          </button>
        )}
      </div>
      )}

      {/* Lightbox */}

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          {/* X close button — fixed to top-right of screen */}
          <button
            onClick={() => setLightbox(null)}
            className="fixed top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 flex items-center justify-center transition-all z-10"
            title="Close"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1l12 12M13 1L1 13" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </button>

          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox}
              alt="Enlarged view"
              width={1200}
              height={800}
              className="object-contain w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
