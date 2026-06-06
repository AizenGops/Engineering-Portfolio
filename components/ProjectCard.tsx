"use client";

import Link from "next/link";
import { Project, categoryMeta, ProjectStatus } from "@/data/projects";
import StatusToggle from "@/components/StatusToggle";

interface Props {
  project: Project;
  onStatusChange?: (slug: string, status: ProjectStatus) => void;
}

export default function ProjectCard({ project, onStatusChange }: Props) {
  const meta = categoryMeta[project.category];

  return (
    <Link href={`/projects/${project.slug}`} className="block">
      <article className="h-full card-hover rounded-xl border border-bg-border bg-bg-card p-6 flex flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <span
            className={`inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full border ${meta.color} bg-current/5`}
          >
            {meta.label}
          </span>
          <StatusToggle
            slug={project.slug}
            status={project.status}
            onChange={(status) => onStatusChange?.(project.slug, status)}
          />
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
