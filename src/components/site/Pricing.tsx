import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const includes = [
  "Introduction Call & Briefing",
  "Script Development",
  "Style Frames & Storyboard (Figma)",
  "Full Motion Design & Animation",
  "Professional Voiceover",
  "Unlimited Revisions",
  "All Formats — 16:9 · 9:16 · 1:1",
  "Delivered in 10–14 Days",
  "Source Files Included",
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-32 lg:py-40 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
        <SectionLabel>Investment</SectionLabel>
        <h2 className="mt-6 font-display text-4xl sm:text-6xl tracking-tight max-w-3xl mx-auto">
          Simple Pricing. Built Around Your Goals.
        </h2>

        <div className="mt-16 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl bg-card p-10 border border-border w-full max-w-xl"
          >
            <h3 className="font-display text-3xl">Explainer Video</h3>

            <div className="mt-6">
              <div className="font-display text-5xl">Custom Pricing</div>
            </div>

            <p className="mt-6 text-sm text-muted-foreground max-w-md mx-auto">
              Every product is different. We tailor our pricing based on your goals, video length, and complexity — so you only pay for what you actually need.
            </p>

            <ul className="mt-8 space-y-3 text-left max-w-sm mx-auto">
              {includes.map((inc) => (
                <li key={inc} className="flex items-start gap-3 text-sm">
                  <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                  <span className="text-foreground/90">{inc}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-10 inline-flex w-full max-w-sm mx-auto items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium transition bg-accent text-accent-foreground hover:opacity-90"
            >
              Request a Quote
            </a>

            <p className="mt-4 text-xs text-muted-foreground">
              No commitment. No pressure. Just a conversation about your project.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
