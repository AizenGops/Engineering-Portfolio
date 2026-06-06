import { about } from "@/data/content";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-16">
        <h1 className="text-4xl font-bold text-text-primary mb-6">{about.heading}</h1>

        <div className="space-y-5 text-text-secondary leading-relaxed text-base max-w-2xl">
          {about.bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Tools */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-text-primary mb-8">Tools & Technologies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {about.tools.map(({ category, items }) => (
            <div key={category} className="rounded-xl border border-bg-border bg-bg-card p-6">
              <h3 className="text-xs font-mono text-accent-cyan uppercase tracking-widest mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-text-secondary bg-white/5 border border-bg-border px-3 py-1 rounded"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-8">Project Timeline</h2>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-bg-border ml-2.5" />
          <div className="space-y-8">
            {about.timeline.map(({ period, title, detail }) => (
              <div key={title} className="flex gap-6 pl-10 relative">
                <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full border-2 border-accent-cyan bg-bg-primary flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                </div>
                <div>
                  <p className="font-mono text-xs text-text-muted mb-1">{period}</p>
                  <h3 className="font-semibold text-text-primary mb-1.5">{title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
