import { ArrowUpRight, Linkedin, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-24 md:py-32">
      <div className="container-editorial">
        <div className="relative overflow-hidden rounded-3xl border border-border-strong bg-surface grain p-10 md:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 -right-40 h-[420px] w-[420px] rounded-full opacity-40 blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, color-mix(in oklab, var(--accent) 45%, transparent), transparent)",
            }}
          />

          <div className="relative grid gap-10 md:grid-cols-12 items-center">
            <div className="md:col-span-8">
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Get in touch
              </div>

              <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-balance">
                Let's build something meaningful.
              </h2>

              <p className="mt-5 max-w-xl text-muted-foreground text-pretty">
                Whether you're hiring a frontend engineer, looking to build a
                website or web application for your business, or simply want to
                connect, I'd love to hear about what you're working on.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:elvismichael888@gmail.com"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
                >
                  <Mail className="size-4" />
                  Email Me
                </a>

                <a
                  href="https://linkedin.com/in/elvis-micha-el"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-3 text-sm font-medium hover:bg-background/40 transition-colors"
                >
                  <Linkedin className="size-4" />
                  LinkedIn
                </a>

                <a
                  href="/Anene-Elvis-Ekene-Resume.pdf"
                  className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-3 text-sm font-medium hover:bg-background/40 transition-colors"
                >
                  Résumé
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>

            <div className="md:col-span-4 md:justify-self-end">
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="pulse-dot" aria-hidden />
                  Open to Frontend Software Engineering opportunities
                </li>

                <li>Available for freelance websites & web applications</li>

                <li>Based in Osun State, Nigeria · Working remotely</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}