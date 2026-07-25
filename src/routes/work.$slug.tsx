import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { getProject, projects, type Project } from "@/data/projects";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Case study not found" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const p = loaderData.project;
    return {
      meta: [
        { title: `${p.name} — Case Study · Elvis Ekene` },
        { name: "description", content: p.description },
        { property: "og:title", content: `${p.name} — Case Study` },
        { property: "og:description", content: p.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/work/${params.slug}` },
        { property: "og:image", content: p.cover },
        { name: "twitter:image", content: p.cover },
      ],
      links: [{ rel: "canonical", href: `/work/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: p.name,
            headline: p.tagline,
            description: p.description,
            author: { "@type": "Person", name: "Anene Elvis Ekene" },
            dateCreated: p.year,
          }),
        },
      ],
    };
  },
  component: CaseStudy,
  notFoundComponent: NotFound,
});

function CaseStudy() {
  const { project: p } = Route.useLoaderData() as { project: Project };
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <article className="pt-32 md:pt-40 pb-24">
      <div className="container-editorial">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-4" />
          Back to work
        </Link>

        <header className="mt-10 max-w-3xl">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
            <span>Case study</span>
            <span aria-hidden className="h-px w-6 bg-border-strong" />
            <span>{p.year}</span>
            <span aria-hidden className="h-px w-6 bg-border-strong" />
            <span>{p.role}</span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.03] tracking-tight text-balance">
            {p.name}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground text-pretty">
            {p.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {p.liveUrl && (
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium"
              >
                Live Demo <ExternalLink className="size-3.5" />
              </a>
            )}
            {p.githubUrl && (
              <a
                href={p.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border-strong px-4 py-2 text-sm font-medium hover:bg-surface transition-colors"
              >
                GitHub <Github className="size-3.5" />
              </a>
            )}
          </div>
        </header>

        <figure className="mt-14 overflow-hidden rounded-3xl border border-border-strong bg-surface">
          <img
            src={p.cover}
            alt={p.coverAlt}
            className="block w-full h-auto object-cover"
          />
        </figure>

        <div className="mt-20 grid gap-16 md:grid-cols-12">
          <aside className="md:col-span-4 md:sticky md:top-28 self-start">
            <dl className="space-y-6 text-sm">
              <MetaRow label="Role" value={p.role} />
              <MetaRow label="Year" value={p.year} />
              <MetaRow
                label="Stack"
                value={
                  <ul className="mt-1 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <li
                        key={s}
                        className="rounded-full border border-border bg-surface px-2.5 py-1 text-[11px] text-muted-foreground"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                }
              />
            </dl>
          </aside>

          <div className="md:col-span-8 space-y-16">
            <Block heading="The problem" body={p.problem} />
            <Block heading="The approach" body={p.solution} />

            <div>
              <SectionEyebrow>Features</SectionEyebrow>
              <ul className="mt-6 grid sm:grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
                {p.features.map((f) => (
                  <li key={f} className="bg-background p-5 text-sm text-foreground">
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-accent/30 bg-surface p-8 md:p-10">
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none opacity-30"
                style={{
                  background:
                    "radial-gradient(120% 80% at 100% 0%, color-mix(in oklab, var(--accent) 25%, transparent), transparent 60%)",
                }}
              />
              <div className="relative">
                <div className="text-xs uppercase tracking-widest text-accent">
                  Engineering note
                </div>
                <h3 className="mt-3 text-2xl md:text-3xl font-medium tracking-tight">
                  {p.engineeringNote.title}
                </h3>
                <p className="mt-5 text-muted-foreground text-pretty leading-relaxed">
                  {p.engineeringNote.body}
                </p>
              </div>
            </div>

            <ListBlock heading="Challenges" items={p.challenges} />
            <ListBlock heading="What I learned" items={p.lessons} />
            <ListBlock heading="Future improvements" items={p.future} />
          </div>
        </div>

        <div className="mt-24 hairline-top pt-10 flex items-center justify-between gap-6 flex-wrap">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-4" /> All work
          </Link>
          <Link
            to="/work/$slug"
            params={{ slug: next.slug }}
            className="group inline-flex items-center gap-2 text-sm font-medium"
          >
            Next: {next.name}
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}

function MetaRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-widest text-muted-foreground">{label}</dt>
      <dd className="mt-2 text-foreground">{value}</dd>
    </div>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs uppercase tracking-widest text-muted-foreground">{children}</div>
  );
}

function Block({ heading, body }: { heading: string; body: string }) {
  return (
    <div>
      <SectionEyebrow>{heading}</SectionEyebrow>
      <p className="mt-4 text-lg md:text-xl text-foreground/90 text-pretty leading-relaxed">
        {body}
      </p>
    </div>
  );
}

function ListBlock({ heading, items }: { heading: string; items: string[] }) {
  return (
    <div>
      <SectionEyebrow>{heading}</SectionEyebrow>
      <ul className="mt-5 space-y-3">
        {items.map((it) => (
          <li key={it} className="flex gap-3 text-muted-foreground text-pretty">
            <span
              aria-hidden
              className="mt-2.5 inline-block size-1 rounded-full bg-accent flex-none"
            />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function NotFound() {
  return (
    <div className="container-editorial pt-40 pb-24 text-center">
      <h1 className="text-3xl font-medium">Case study not found</h1>
      <p className="mt-3 text-muted-foreground">The project you&apos;re looking for doesn&apos;t exist.</p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-1.5 text-sm text-accent"
      >
        <ArrowLeft className="size-4" /> Back to work
      </Link>
    </div>
  );
}
