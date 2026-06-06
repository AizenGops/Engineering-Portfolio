"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/data/content";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-bg-border bg-bg-primary/80 backdrop-blur-md">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-sm font-medium text-accent-cyan tracking-widest uppercase hover:opacity-80 transition-opacity"
        >
          {nav.brand}<span className="text-text-secondary">{nav.brandSuffix}</span>
        </Link>

        <ul className="flex items-center gap-1">
          {navLinks.map(({ href, label }) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`px-4 py-2 rounded text-sm font-medium transition-all duration-200 ${
                    active
                      ? "text-accent-cyan bg-accent-cyan/10"
                      : "text-text-secondary hover:text-text-primary hover:bg-white/5"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
