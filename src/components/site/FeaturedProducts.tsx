import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { SectionHeader } from "./SectionHeader";

export function FeaturedProducts() {
  return (
    <section id="work" className="scroll-mt-24 py-24 md:py-32">
      <div className="container-editorial">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionHeader
            eyebrow="Selected Work"
            title={
              <>
                Products I've built by solving real-world problems.
              </>
            }
            description="Every project in this portfolio started with a problem worth solving. Building them strengthened my engineering skills while teaching me how thoughtful software creates better user experiences."
          />

          <div className="hidden md:block text-xs uppercase tracking-widest text-muted-foreground">
            Always building.
          </div>
        </div>

        <div className="mt-16 space-y-10">
          {projects.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-surface hover:border-border-strong transition-colors"
            >
              <div
                className={`grid lg:grid-cols-12 gap-0 ${
                  i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
                }`}
              >
                <figure className="relative lg:col-span-7 aspect-[16/10] overflow-hidden bg-background">
                  <div className="p-4 md:p-6 lg:p-8 h-full w-full">
                    <Link
                      to="/work/$slug"
                      params={{ slug: p.slug }}
                      className="block h-full"
                    >
                      <img
                        src={p.cover}
                        alt={p.coverAlt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      />

                      <div
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-t from-surface/60 via-transparent to-transparent"
                      />
                    </Link>
                  </div>
                </figure>

                <div className="lg:col-span-5 p-8 md:p-10 flex flex-col justify-between gap-8">
                  <div>
                    <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
                      <span>{p.year}</span>
                    </div>

                    <p className="mt-5 text-xs uppercase tracking-widest text-accent font-medium">
                      {p.tagline}
                    </p>

                    <h3 className="mt-3 text-2xl md:text-3xl font-medium tracking-tight">
                      {p.name}
                    </h3>

                    <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
                      {p.description}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex flex-wrap items-center gap-3">
                      {p.liveUrl && (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium transition-transform hover:-translate-y-0.5"
                        >
                          View Live Demo
                          <ExternalLink className="size-4" />
                        </a>
                      )}

                      <Link
                        to="/work/$slug"
                        params={{ slug: p.slug }}
                        className="inline-flex items-center gap-2 text-sm font-medium text-foreground"
                      >
                        Read Case Study
                        <ArrowUpRight className="size-4" />
                      </Link>

                      {p.githubUrl && (
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                        >
                          GitHub
                          <Github className="size-4" />
                        </a>
                      )}
                    </div>

                    <div className="border-t border-border pt-6">
                      <p className="text-xs uppercase tracking-widest text-muted-foreground">
                        Engineering Insight
                      </p>

                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {p.lessons[0]}
                      </p>
                    </div>

                    <ul className="flex flex-wrap gap-1.5">
                      {p.stack.map((s) => (
                        <li
                          key={s}
                          className="rounded-full border border-border bg-background/60 px-2.5 py-1 text-[11px] text-muted-foreground"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}