import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { label: "Work", id: "work" },
  { label: "Philosophy", id: "philosophy" },
  { label: "Experience", id: "experience" },
  { label: "About", id: "about" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-editorial flex h-16 items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm font-medium tracking-tight"
          aria-label="Anene Elvis Ekene — Home"
        >
          <span
            aria-hidden
            className="inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_var(--accent)]"
          />
          <span className="text-foreground">Anene Elvis Ekene</span>
          {/* <span className="text-muted-foreground hidden sm:inline">— Frontend Engineer</span> */}
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.label}
              to="/"
              hash={l.id}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/"
          hash="contact"
          className="inline-flex items-center gap-1.5 rounded-full border border-border-strong bg-surface-elevated/60 px-4 py-2 text-sm font-medium text-foreground transition-all hover:bg-surface-elevated hover:border-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Get in touch
        </Link>
      </div>
    </header>
  );
}
