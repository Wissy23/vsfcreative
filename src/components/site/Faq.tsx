import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionLabel } from "./SectionLabel";

const faqs = [
  {
    q: "How much does it cost?",
    a: "Our pricing is custom — it depends on your goals, video length, and complexity. No fixed price fits everyone, so we tailor it to your specific project. Request a quote and we'll get back to you with a clear number.",
  },
  {
    q: "How fast can you deliver?",
    a: "Most projects are completed in 10 to 14 days from kickoff. The faster you review and approve each stage, the faster we deliver.",
  },
  {
    q: "Do I need to write the script?",
    a: "Not at all. Script writing is fully included. We ask the right questions during the briefing call and craft a clear, conversion-focused script around your product. You just review and approve it.",
  },
  {
    q: "Can you make it feel like our brand?",
    a: "Yes. We build every video around your colors, fonts, tone, and product UI. If you don't have a full brand identity yet, we'll guide you through the visual direction during the briefing stage.",
  },
  {
    q: "Do you offer a free sample?",
    a: "Yes. For serious founders who complete our briefing form, we offer a free 10-second custom sample video — including your logo animation and a quick product demonstration. This way you can see our quality before committing.",
  },
  {
    q: "Is this only for SaaS?",
    a: "Mostly yes. We specialize in SaaS and AI products. If you have a Software or app that needs to be explained clearly and visually, we're the right fit for you.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative py-32 lg:py-40 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl tracking-tight">
            Things founders ask us
          </h2>
        </div>
        <div className="lg:col-span-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-border"
              >
                <AccordionTrigger className="font-display text-lg sm:text-xl py-6 text-left hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}