"use client";

import { useState, useMemo, useEffect } from "react";
import { projects, ProjectCategory, ProjectStatus, categoryMeta } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import CategoryFilter from "@/components/CategoryFilter";

const statusOrder: Record<ProjectStatus, number> = {
  completed: 0,
  "in-progress": 1,
  pending: 2,
};

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "all">("all");
  const [statusOverrides, setStatusOverrides] = useState<Record<string, ProjectStatus>>({});

  useEffect(() => {
    fetch("/api/status")
      .then((res) => res.json())
      .then((data) => setStatusOverrides(data))
      .catch(() => {});
  }, []);

  const sortedProjects = useMemo(() => {
    const withOverrides = projects.map((p) =>
      statusOverrides[p.slug] ? { ...p, status: statusOverrides[p.slug] } : p
    );
    return [...withOverrides].sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);
  }, [statusOverrides]);

  const filtered = useMemo(
    () =>
      activeCategory === "all"
        ? sortedProjects
        : sortedProjects.filter((p) => p.category === activeCategory),
    [activeCategory, sortedProjects]
  );

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: projects.length };
    for (const cat of Object.keys(categoryMeta)) {
      c[cat] = projects.filter((p) => p.category === cat).length;
    }
    return c;
  }, []);

  function handleStatusChange(slug: string, status: ProjectStatus) {
    setStatusOverrides((prev) => ({ ...prev, [slug]: status }));
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-text-primary mb-4">Projects</h1>
        <p className="text-text-secondary text-lg max-w-2xl">
          Engineering work across electrical machine design, electronics,
          industrial automation, and IoT systems. Some are complete; some
          are actively in progress.
        </p>
      </div>

      <div className="mb-10">
        <CategoryFilter
          active={activeCategory}
          onChange={setActiveCategory}
          counts={counts}
        />
      </div>

      {filtered.length === 0 ? (
        <p className="text-text-muted text-center py-24">No projects in this category yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} onStatusChange={handleStatusChange} />
          ))}
        </div>
      )}
    </div>
  );
}
