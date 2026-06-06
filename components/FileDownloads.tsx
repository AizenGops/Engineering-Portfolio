import { ProjectFile } from "@/data/projects";

export default function FileDownloads({ files }: { files: ProjectFile[] }) {
  if (files.length === 0) return null;

  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold text-text-primary mb-5">Downloads</h2>
      <div className="space-y-3">
        {files.map(({ label, path, description }) => (
          <a
            key={path}
            href={path}
            download
            className="flex items-center justify-between gap-4 p-4 rounded-xl border border-bg-border bg-bg-card hover:border-accent-cyan/40 hover:bg-accent-cyan/5 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-px h-8 bg-accent-cyan/30 group-hover:bg-accent-cyan/60 transition-colors" />
              <div>
                <p className="text-sm font-medium text-text-primary">{label}</p>
                {description && (
                  <p className="text-xs text-text-secondary mt-0.5">{description}</p>
                )}
              </div>
            </div>
            <span className="font-mono text-xs text-text-muted group-hover:text-accent-cyan transition-colors flex-shrink-0">
              download →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
