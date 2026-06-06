import { notFound } from "next/navigation";
import Link from "next/link";
import { readFile } from "fs/promises";
import path from "path";
import { projects, categoryMeta } from "@/data/projects";
import GalleryUpload from "@/components/GalleryUpload";
import CodeBlock from "@/components/CodeBlock";
import FileDownloads from "@/components/FileDownloads";
import StatusToggle from "@/components/StatusToggle";
import { getStatusOverrides } from "@/lib/projectStatus";

export const dynamic = "force-dynamic";

async function getUploadedImages(slug: string): Promise<string[]> {
  try {
    const uploadsPath = path.join(process.cwd(), "data", "uploads.json");
    const raw = await readFile(uploadsPath, "utf-8");
    const uploads: Record<string, string[]> = JSON.parse(raw);
    return uploads[slug] ?? [];
  } catch {
    return [];
  }
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const uploadedImages = await getUploadedImages(params.slug);
  const allImages = [...(project.images ?? []), ...uploadedImages];

  const overrides = await getStatusOverrides();
  const effectiveStatus = overrides[project.slug] ?? project.status;

  const meta = categoryMeta[project.category];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-text-muted mb-10 font-mono">
        <Link href="/" className="hover:text-accent-cyan transition-colors">home</Link>
        <span>/</span>
        <Link href="/projects" className="hover:text-accent-cyan transition-colors">projects</Link>
        <span>/</span>
        <span className="text-text-secondary">{project.slug}</span>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className={`inline-flex items-center text-xs font-medium px-3 py-1 rounded-full border ${meta.color}`}>
            {meta.label}
          </span>
          <StatusToggle slug={project.slug} status={effectiveStatus} className="px-3 py-1" />
        </div>

        <h1 className="text-4xl font-bold text-text-primary mb-5 leading-tight">
          {project.title}
        </h1>

        <p className="text-xl text-text-secondary leading-relaxed">
          {project.summary}
        </p>
      </header>

      {/* Tools */}
      <section className="mb-12 p-6 rounded-xl border border-bg-border bg-bg-card">
        <h2 className="text-xs font-mono text-text-muted uppercase tracking-widest mb-4">
          Tools & Technologies
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="font-mono text-sm text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20 px-3 py-1.5 rounded"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      {/* Description */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Overview</h2>
        <p className="text-text-secondary leading-relaxed text-base">
          {project.description}
        </p>
      </section>

      {/* Highlights */}
      {project.highlights.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-text-primary mb-5">
            Technical Highlights
          </h2>
          <ul className="space-y-3">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-cyan flex-shrink-0" />
                <span className="text-text-secondary text-sm leading-relaxed">{h}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Image gallery */}
      <GalleryUpload slug={params.slug} initialImages={allImages} />

      {/* Code snippets */}
      {project.codeSnippets && project.codeSnippets.length > 0 && (
        <CodeBlock snippets={project.codeSnippets} />
      )}

      {/* File downloads */}
      {project.files && project.files.length > 0 && (
        <FileDownloads files={project.files} />
      )}

      {/* Learnings */}
      {project.learnings && (
        <section className="mb-12 p-6 rounded-xl border border-accent-amber/20 bg-accent-amber/5">
          <h2 className="text-sm font-mono text-accent-amber uppercase tracking-widest mb-3">
            Key Learnings
          </h2>
          <p className="text-text-secondary leading-relaxed text-sm">
            {project.learnings}
          </p>
        </section>
      )}

      {/* Back */}
      <div className="pt-8 border-t border-bg-border">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-accent-cyan hover:underline underline-offset-4"
        >
          ← Back to all projects
        </Link>
      </div>
    </div>
  );
}
