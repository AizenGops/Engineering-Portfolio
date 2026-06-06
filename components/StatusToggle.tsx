"use client";

import { useState, useEffect } from "react";
import { ProjectStatus } from "@/data/projects";

const statusConfig: Record<ProjectStatus, { label: string; className: string }> = {
  completed: {
    label: "Completed",
    className: "text-accent-green bg-accent-green/10 border-accent-green/30 hover:bg-accent-green/20",
  },
  "in-progress": {
    label: "In Progress",
    className: "text-accent-amber bg-accent-amber/10 border-accent-amber/30 hover:bg-accent-amber/20",
  },
  pending: {
    label: "Pending",
    className: "text-text-secondary bg-white/5 border-white/10 hover:bg-white/10",
  },
};

interface Props {
  slug: string;
  status: ProjectStatus;
  onChange?: (status: ProjectStatus) => void;
  className?: string;
}

const editingEnabled = process.env.NEXT_PUBLIC_ENABLE_EDITING === "true";

export default function StatusToggle({ slug, status, onChange, className = "" }: Props) {
  const [current, setCurrent] = useState<ProjectStatus>(status);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    setCurrent(status);
  }, [status]);
  const config = statusConfig[current];

  if (!editingEnabled) {
    return (
      <span
        className={`text-xs font-medium px-2.5 py-1 rounded-full border ${config.className} ${className}`}
      >
        {config.label}
      </span>
    );
  }

  async function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (pending) return;

    const next: ProjectStatus = current === "completed" ? "in-progress" : "completed";
    setCurrent(next);
    onChange?.(next);
    setPending(true);

    try {
      await fetch("/api/status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, status: next }),
      });
    } finally {
      setPending(false);
    }
  }

  return (
    <button
      onClick={handleClick}
      title="Click to toggle status"
      className={`text-xs font-medium px-2.5 py-1 rounded-full border transition-colors cursor-pointer ${config.className} ${className}`}
    >
      {config.label}
    </button>
  );
}
