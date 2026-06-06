import { site, footer } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-bg-border mt-24">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-text-muted tracking-wide">
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="text-xs text-text-muted">{footer.tagline}</p>
      </div>
    </footer>
  );
}
