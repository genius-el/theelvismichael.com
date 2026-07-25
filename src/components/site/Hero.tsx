import { ArrowDown, ArrowUpRight } from "lucide-react";
import portrait from "@/assets/portrait.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28">
      {/* Ambient accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[900px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--accent) 40%, transparent), transparent)",
        }}
      />

      <div className="container-editorial relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-3 py-1.5 text-xs text-muted-foreground">
              <span className="pulse-dot" aria-hidden />
              <span>Currently building</span>
              <span className="text-foreground/80">React Applications</span>
            </div>

            <h1 className="mt-7 text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-medium leading-[1.02] tracking-tight text-balance">
              I design and build web applications that help 
              <span className="text-muted-foreground"> brands and businesses </span>
              solve real problems.
            </h1>

            <p className="mt-7 max-w-xl text-lg text-muted-foreground text-pretty">
              Frontend Software Engineer specializing in responsive interfaces,
              JavaScript applications, and user-focused digital experiences.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                View Featured Products
                <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
              </a>
              <a
                href="/Anene-Elvis-Ekene-Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-transparent px-5 py-3 text-sm font-medium text-foreground hover:bg-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Download Résumé
                <ArrowUpRight className="size-4" />
              </a>
            </div>

            <dl className="mt-14 grid grid-cols-3 max-w-lg gap-6 hairline-top pt-8">
              <Stat label="Products shipped" value="4" />
              <Stat label="Years building" value="3+" />
              {/* <Stat label="Developers mentored" value="100+"/> */}
              <Stat label="Based in" value="Osun State" />
            </dl>
          </div>

          <div className="lg:col-span-5">
            <figure className="relative mx-auto max-w-sm lg:max-w-none">
              <div
                aria-hidden
                className="absolute -inset-x-6 -inset-y-6 rounded-[2rem] bg-gradient-to-b from-accent/10 to-transparent blur-2xl"
              />
              <div className="relative overflow-hidden rounded-2xl border border-border-strong bg-surface grain">
                <img
                  src={portrait}
                  alt="Portrait of Anene Elvis Ekene"
                  width={1200}
                  height={1504}
                  fetchPriority="high"
                  className="block h-auto w-full object-cover aspect-[4/5]"
                />
              </div>
              <figcaption className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                <span>Anene Elvis Ekene</span>
                <span>Osun State · 2026</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-widest text-muted-foreground">{label}</dt>
      <dd className="mt-2 text-2xl font-medium">{value}</dd>
    </div>
  );
}
