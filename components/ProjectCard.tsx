import Link from "next/link";
import { Project, categoryMeta } from "@/data/projects";

const statusConfig = {
  completed: { label: "Completed", className: "text-accent-green bg-accent-green/10 border-accent-green/30" },
  "in-progress": { label: "In Progress", className: "text-accent-amber bg-accent-amber/10 border-accent-amber/30" },
  pending: { label: "Pending", className: "text-text-secondary bg-white/5 border-white/10" },
};

export default function ProjectCard({ project }: { project: Project }) {
  const meta = categoryMeta[project.category];
  const status = statusConfig[project.status];

  return (
    <Link href={`/projects/${project.slug}`} className="block">
      <article className="h-full card-hover rounded-xl border border-bg-border bg-bg-card p-6 flex flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <span
            className={`inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full border ${meta.color} bg-current/5`}
          >
            {meta.label}
          </span>
          <span
            className={`text-xs font-medium px-2.5 py-1 rounded-full border ${status.className}`}
          >
            {status.label}
          </span>
        </div>

        <div className="flex-1">
          <h3 className="text-base font-semibold text-text-primary mb-2 leading-snug">
            {project.title}
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed line-clamp-3">
            {project.summary}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-bg-border">
          {project.tools.slice(0, 4).map((tool) => (
            <span
              key={tool}
              className="font-mono text-xs text-text-muted bg-white/5 px-2 py-0.5 rounded"
            >
              {tool}
            </span>
          ))}
          {project.tools.length > 4 && (
            <span className="font-mono text-xs text-text-muted px-2 py-0.5">
              +{project.tools.length - 4}
            </span>
          )}
        </div>
      </article>
    </Link>
  );
}
