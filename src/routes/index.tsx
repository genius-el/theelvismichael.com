import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { FeaturedProducts } from "@/components/site/FeaturedProducts";
import { Philosophy } from "@/components/site/Philosophy";
import { Experience } from "@/components/site/Experience";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anene Elvis Ekene — Frontend Software Engineer" },
      {
        name: "description",
        content:
          "Frontend Software Engineer building thoughtful web applications for engineering teams, startups and organizations. Featured work, engineering philosophy, and case studies.",
      },
      { property: "og:title", content: "Anene Elvis Ekene — Frontend Software Engineer" },
      {
        property: "og:description",
        content:
          "Thoughtful software for engineering teams, startups and organizations. Featured products, philosophy and case studies.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "icon", href: "/favicon.ico" },
      { rel: "canonical", href: "/" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Philosophy />
      <Experience />
      <About />
      <Contact />
    </>
  );
}
