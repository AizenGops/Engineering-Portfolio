import { contact } from "@/data/content";

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-text-primary mb-4">{contact.heading}</h1>
        <p className="text-text-secondary text-lg max-w-xl">{contact.intro}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact methods */}
        <div className="space-y-4">
          <h2 className="text-sm font-mono text-text-muted uppercase tracking-widest mb-6">
            Get In Touch
          </h2>
          {contact.methods.map(({ label, value, href, description }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-start gap-4 p-5 rounded-xl border border-bg-border bg-bg-card card-hover group block"
            >
              <div className="w-px self-stretch bg-accent-cyan/30 group-hover:bg-accent-cyan/60 transition-colors flex-shrink-0" />
              <div>
                <p className="text-xs text-text-muted font-mono uppercase tracking-wide mb-0.5">
                  {label}
                </p>
                <p className="text-text-primary text-sm font-medium mb-1">{value}</p>
                <p className="text-text-secondary text-xs">{description}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Availability */}
        <div>
          <h2 className="text-sm font-mono text-text-muted uppercase tracking-widest mb-6">
            Available For
          </h2>
          <div className="rounded-xl border border-bg-border bg-bg-card p-6">
            <ul className="space-y-3">
              {contact.availability.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-green flex-shrink-0" />
                  <span className="text-text-secondary text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-5 border-t border-bg-border">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                <span className="text-xs text-text-muted">{contact.availabilityStatus}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
