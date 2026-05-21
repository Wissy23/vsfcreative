import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Work } from "@/components/site/Work";
import { Process } from "@/components/site/Process";
import { Pricing } from "@/components/site/Pricing";
import { Faq } from "@/components/site/Faq";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "VSF Creative — SaaS Motion Design Studio" },
      {
        name: "description",
        content:
          "We turn SaaS products into motion design videos that convert. Book a free strategy call.",
      },
      { property: "og:title", content: "VSF Creative — SaaS Motion Design Studio" },
      {
        property: "og:description",
        content:
          "We turn SaaS products into motion design videos that convert. Book a free strategy call.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground grain-overlay">
      <Nav />
      <main>
        <Hero />
        <Work />
        <Process />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
