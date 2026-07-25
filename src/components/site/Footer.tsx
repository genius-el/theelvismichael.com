import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="hairline-top mt-32">
      <div className="container-editorial py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-2 text-sm font-medium">
              <span aria-hidden className="inline-block h-2 w-2 rounded-full bg-accent" />
              Elvis Ekene
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground text-pretty">
              Frontend Software Engineer building thoughtful digital products for
              engineering teams, startups and organizations.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Explore</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#work" className="hover:text-accent transition-colors">Work</a></li>
              <li><a href="#philosophy" className="hover:text-accent transition-colors">Philosophy</a></li>
              <li><a href="#experience" className="hover:text-accent transition-colors">Experience</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Elsewhere</div>
            <ul className="mt-4 flex flex-wrap gap-2">
              <FooterIcon href="mailto:elvismichael888@gmail.com" label="Email">
                <Mail className="size-4" />
              </FooterIcon>
              <FooterIcon href="https://github.com/genius-el" target="_blank"
                rel="noopener noreferrer" label="GitHub">
                <Github className="size-4" />
              </FooterIcon>
              <FooterIcon href="https://linkedin.com/in/elvismichael" target="_blank"
                rel="noopener noreferrer"  label="LinkedIn">
                <Linkedin className="size-4" />
              </FooterIcon>
              <FooterIcon href="https://twitter.com/elviz_michael" target="_blank"
                rel="noopener noreferrer"  label="Twitter">
                <Twitter className="size-4" />
              </FooterIcon>
            </ul>
            <p className="mt-6 text-xs text-muted-foreground">
              theelvismichael.com — a media home in progress.
            </p>
          </div>
        </div>

        <div className="hairline-top mt-12 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Designed and engineered by Anene Elvis Ekene.</div>
          <div>Available for select frontend engineering work.</div>
        </div>
      </div>
    </footer>
  );
}

function FooterIcon({
  href,
  label,
  target,
  rel,
  children,
}: {
  href: string;
  label: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <a
        href={href}
        target={target}
        rel={rel}
        aria-label={label}
        className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-border-strong transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {children}
      </a>
    </li>
  );
}
