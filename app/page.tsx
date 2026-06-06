import Link from "next/link";
import { projects } from "@/data/projects";
import { hero, stats, disciplines, featuredCount } from "@/data/content";
import ProjectCard from "@/components/ProjectCard";
import { getStatusOverrides, withEffectiveStatus, sortByStatus } from "@/lib/projectStatus";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const overrides = await getStatusOverrides();
  const featuredProjects = sortByStatus(withEffectiveStatus(projects, overrides)).slice(0, featuredCount);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-grid-pattern bg-grid opacity-60"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-primary" />

        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <p className="font-mono text-accent-cyan text-sm tracking-widest uppercase mb-6 animate-fade-in">
              {hero.eyebrow}
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up">
              <span className="text-text-primary">{hero.firstName}</span>
              <br />
              <span className="text-gradient-cyan">{hero.lastName}</span>
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed mb-10 max-w-2xl animate-slide-up">
              {hero.tagline}
            </p>

            <div className="flex flex-wrap gap-4 animate-slide-up">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-cyan text-bg-primary font-semibold text-sm hover:bg-accent-cyan/90 transition-colors"
              >
                {hero.ctaPrimary}
                <span>→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-bg-border text-text-primary font-semibold text-sm hover:border-accent-cyan/50 hover:bg-accent-cyan/5 transition-all"
              >
                {hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-bg-border bg-bg-secondary">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-4xl font-bold text-gradient-cyan mb-1">{value}</p>
              <p className="text-sm text-text-secondary">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Disciplines */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-3">
            What I Work On
          </h2>
          <p className="text-text-secondary max-w-xl">
            Engineering work spanning four disciplines — each with hands-on
            project experience from design through to implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {disciplines.map(({ title, desc, accent, label }) => (
            <div
              key={title}
              className={`rounded-xl border bg-bg-card p-6 transition-all duration-300 ${accent}`}
            >
              <h3 className={`font-semibold mb-3 ${label}`}>{title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-text-primary mb-3">
              Featured Projects
            </h2>
            <p className="text-text-secondary">A selection of recent work.</p>
          </div>
          <Link
            href="/projects"
            className="text-sm text-accent-cyan hover:underline underline-offset-4 font-medium"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
