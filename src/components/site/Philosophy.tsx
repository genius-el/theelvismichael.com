import { Lightbulb, Target, Hammer, TrendingUp } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const principles = [
  {
    icon: Target,
    title: "Solve the right problem",
    body:
      "Every project begins with understanding the real problem before writing code. I believe technology creates value only when it helps people or businesses accomplish something more effectively.",
  },
  {
    icon: Hammer,
    title: "Learn by building",
    body:
      "The projects in this portfolio weren't built to check boxes on a learning roadmap—they were built to solve problems while stretching my engineering skills. Every application teaches me something I carry into the next.",
  },
  {
    icon: TrendingUp,
    title: "Keep improving",
    body:
      "I see software engineering as a continuous journey. Every finished project reveals better ways to design interfaces, organize code, solve problems, and build better user experiences.",
  },
  {
    icon: Lightbulb,
    title: "Build for people",
    body:
      "Whether I'm building a finance dashboard, a productivity app, or a weather application, my goal is the same: create software that feels intuitive, reliable, and genuinely useful to the people using it.",
  },
];

export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="scroll-mt-24 py-24 md:py-32 hairline-top"
    >
      <div className="container-editorial">
        <SectionHeader
          eyebrow="How I work"
          title={<>The principles that guide every product I build.</>}
          description="These ideas influence how I approach problems, build software, and continue growing as an engineer."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="bg-background p-8 md:p-10 transition-colors hover:bg-surface"
            >
              <principle.icon
                className="size-5 text-accent"
                aria-hidden
              />

              <h3 className="mt-6 text-lg font-medium tracking-tight">
                {principle.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                {principle.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}