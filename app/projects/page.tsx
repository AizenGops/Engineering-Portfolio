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

  const workProjects = useMemo(() => filtered.filter((p) => p.projectType === "work"), [filtered]);
  const partTimeProjects = useMemo(() => filtered.filter((p) => p.projectType === "part-time"), [filtered]);

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
          Projects across motor and alternator design, electronics, industrial automation, and IoT. Some are done, some are still in progress.
        </p>
      </div>

      <div className="mb-12">
        <CategoryFilter
          active={activeCategory}
          onChange={setActiveCategory}
          counts={counts}
        />
      </div>

      {/* Work Projects */}
      {workProjects.length > 0 && (
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-2xl font-bold text-text-primary">Work Projects</h2>
            <span className="font-mono text-xs text-text-muted bg-white/5 border border-bg-border px-2.5 py-1 rounded-full">
              {workProjects.length}
            </span>
          </div>

          {/* Company & team context note */}
          <div className="mb-8 p-4 rounded-lg border border-bg-border bg-bg-card text-sm text-text-secondary leading-relaxed space-y-1.5">
            <p>
              I am currently employed by RS TECH Solutions and the projects listed under work were carried out during my employment in the aforementioned company. RS TECH Solutions is a provider of engineering services in the electrical and industrial automation space and many of the projects documented here under work projects were executed under the RS TECH Solutions banner and in association with Sadisha Investments, both operating under the same principal. So you may see references to both companies in the project descriptions.
            </p>
            <p className="text-red-400 text-xs">
              The work documented here was performed within a team structure. My intention is not to
              claim sole authorship of any deliverable, I was a contributing member of a team on
              each of these engagements, and the descriptions reflect my personal involvement and
              the areas I worked in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {workProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} onStatusChange={handleStatusChange} />
            ))}
          </div>
        </section>
      )}

      {/* Divider between sections */}
      {workProjects.length > 0 && partTimeProjects.length > 0 && (
        <div className="border-t border-bg-border mb-16" />
      )}

      {/* Part-time Projects */}
      {partTimeProjects.length > 0 && (
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-2xl font-bold text-text-primary">Part-time Projects</h2>
            <span className="font-mono text-xs text-text-muted bg-white/5 border border-bg-border px-2.5 py-1 rounded-full">
              {partTimeProjects.length}
            </span>
          </div>

          {/* Part-time context note */}
          <div className="mb-8 p-4 rounded-lg border border-bg-border bg-bg-card text-sm leading-relaxed">
            <p className="text-red-400">
              These are projects I pursue during my own time outside of work driven by personal
              interest, curiosity and a desire to continuously expand my skills beyond what
              day to day employment covers. They reflect areas I am actively exploring or have
              explored independently and represent the self directed side of my engineering
              practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {partTimeProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} onStatusChange={handleStatusChange} />
            ))}
          </div>
        </section>
      )}

      {filtered.length === 0 && (
        <p className="text-text-muted text-center py-24">No projects in this category yet.</p>
      )}
    </div>
  );
}
