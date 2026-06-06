"use client";

import { ProjectCategory, categoryMeta } from "@/data/projects";

interface Props {
  active: ProjectCategory | "all";
  onChange: (cat: ProjectCategory | "all") => void;
  counts: Record<string, number>;
}

export default function CategoryFilter({ active, onChange, counts }: Props) {
  const all = [
    { id: "all" as const, label: "All Projects", color: "text-text-primary border-text-primary" },
    ...Object.entries(categoryMeta).map(([id, meta]) => ({
      id: id as ProjectCategory,
      label: meta.label,
      color: meta.color,
    })),
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {all.map(({ id, label, color }) => (
        <button
          key={id}
          onClick={() => onChange(id)}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200 ${
            active === id
              ? `${color} bg-current/10 border-current`
              : "text-text-secondary border-bg-border hover:border-text-muted hover:text-text-primary"
          }`}
        >
          {label}
          <span className="font-mono text-xs opacity-60">
            {counts[id] ?? 0}
          </span>
        </button>
      ))}
    </div>
  );
}
