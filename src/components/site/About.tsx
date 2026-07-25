import portrait from "@/assets/portrait.jpg";
import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 md:py-32 hairline-top">
      <div className="container-editorial">
        <div className="grid gap-16 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5">
            <figure className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-border-strong bg-surface grain">
                <img
                  src={portrait}
                  alt="Portrait of Anene Elvis Ekene"
                  loading="lazy"
                  className="block h-auto w-full object-cover aspect-[4/5]"
                />
              </div>

              <figcaption className="mt-4 text-sm text-muted-foreground italic">
                "I believe the best way to learn software engineering is by building
                products that solve real problems."
              </figcaption>
            </figure>
          </div>

          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="About Me"
              title={
                <>
                  I'm passionate about building software that solves real problems.
                </>
              }
            />

            <div className="mt-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm Anene Elvis Ekene, a Frontend Software Engineer based in Osun
                State, Nigeria. I build responsive websites and interactive web
                applications that help businesses and individuals solve real
                problems through thoughtful, user-focused digital experiences.
              </p>

              <p>
                My journey into software engineering began with curiosity. I spent
                time learning the fundamentals of HTML, CSS, and JavaScript before
                challenging myself to move beyond tutorials and start building real
                products. Every project has pushed me to become a better engineer
                and a better problem solver.
              </p>

              <p>
                Today, I enjoy building applications that combine clean interfaces
                with practical functionality. Whether I'm integrating APIs,
                designing dashboards, implementing search and filtering, or working
                with client-side data, I'm always thinking about how technology can
                make someone's work or daily life a little easier.
              </p>

              <p>
                I'm currently expanding my skills in React, TypeScript, and modern
                frontend engineering while pursuing opportunities to contribute to
                ambitious engineering teams and collaborate with businesses that
                want to build meaningful digital products.
              </p>
            </div>

            <dl className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-8 hairline-top pt-8">
              <MetaItem
                label="Location"
                value="Osun State, Nigeria"
              />

              <MetaItem
                label="Currently Learning"
                value="React & TypeScript"
              />

              <MetaItem
                label="Open To"
                value="Software Engineering Roles & Freelance Projects"
              />
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetaItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </dt>

      <dd className="mt-2 text-sm text-foreground">
        {value}
      </dd>
    </div>
  );
}