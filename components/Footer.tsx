import { site, footer } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-bg-border mt-24">
      <div className="max-w-6xl mx-auto px-6 py-8 space-y-4">
        {footer.note && (
          <p className="text-xs text-text-muted/80 italic text-center sm:text-left">
            {footer.note}
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-text-muted tracking-wide">
            © {new Date().getFullYear()} {site.name}
          </p>
          <p className="text-xs text-text-muted">{footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
