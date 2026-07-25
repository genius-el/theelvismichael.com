import { SectionHeader } from "./SectionHeader";

const timeline = [
  {
    period: "2023",
    title: "Discovering Software Engineering",
    body:
      "Began my software engineering journey by learning HTML, CSS, and JavaScript through structured courses, tutorials, and consistent practice. This period was dedicated to building strong frontend fundamentals and understanding how modern websites are designed and developed.",
  },
  {
    period: "Nov 2024 — Present",
    title: "Professional Experience",
    company: "Beloved Infotech Global Ltd.",
    body:
      "Joined Beloved Infotech Global Ltd. through the National Youth Service Corps (NYSC) as a Frontend Web Developer & Technical Instructor. Contributed to frontend development, software testing, user training, and educational software projects. In November 2025, I transitioned into a full-time Frontend Web Developer & Technical Instructor, continuing to contribute to software development while mentoring over 100 students and guiding the deployment of more than 10 live websites.",
  },
  {
    period: "2025 — Present",
    title: "Building Real Products",
    body:
      "Made a deliberate shift from learning through tutorials to learning by building. Started with responsive websites using HTML and CSS before progressing into JavaScript-powered web applications. Through projects like Habitual, WeatherNow, QuizNow, and Ploutos, I gained practical experience with DOM manipulation, Local Storage, Fetch API, asynchronous JavaScript, search and filtering, analytics dashboards, dark mode, file uploads, drag-and-drop interactions, and responsive user interface design.",
  },
  {
    period: "Now",
    title: "The Next Chapter",
    body:
      "Currently expanding my frontend engineering toolkit by learning React, TypeScript, and modern frontend architecture while continuing to build increasingly sophisticated software products and preparing to contribute to high-performing engineering teams.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-24 md:py-32">
      <div className="container-editorial">
        <SectionHeader
          eyebrow="Engineering Journey"
          title={<>Learning. Building. Shipping. Growing.</>}
          description="Every stage of my journey has strengthened the engineer I'm becoming—from learning the fundamentals, to contributing professionally, to building products that solve real problems."
        />

        <ol className="mt-16 relative border-l border-border pl-6 md:pl-10 space-y-14">
          {timeline.map((item) => (
            <li key={item.period} className="relative">
              <span
                aria-hidden
                className="absolute -left-[27px] md:-left-[43px] top-2 inline-block size-2.5 rounded-full bg-background border border-border-strong"
              />

              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                {item.period}
              </div>

              <h3 className="mt-2 text-xl md:text-2xl font-medium tracking-tight">
                {item.title}
              </h3>

              {item.company && (
                <div className="mt-1 text-sm text-muted-foreground">
                  {item.company}
                </div>
              )}

              <p className="mt-4 max-w-2xl text-muted-foreground text-pretty">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}