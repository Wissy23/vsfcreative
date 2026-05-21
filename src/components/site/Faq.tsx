import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionLabel } from "./SectionLabel";

const faqs = [
  {
    q: "How fast can you deliver?",
    a: "Four weeks standard. Need it faster? Talk to us — we've done rush projects before.",
  },
  {
    q: "Do I need to write the script?",
    a: "No. We write it. You just need to explain your product to us like you would to a friend.",
  },
  {
    q: "What if I hate the first draft?",
    a: "Won't happen — because you approve the storyboard first. But you still get 2 rounds of revisions.",
  },
  {
    q: "Can you make it feel like our brand?",
    a: "Yes. We build around your colors, fonts, and tone. If you don't have a brand yet, we'll guide you.",
  },
  {
    q: "Is this only for SaaS?",
    a: "Mostly. If you have a digital product that needs to be explained visually, we're the right fit.",
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