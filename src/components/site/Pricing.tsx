import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const tiers = [
  {
    name: "Starter",
    price: "$800",
    flat: "flat",
    fit: "First-time demo video, pre-launch founders",
    includes: [
      "45-second video",
      "Script + storyboard",
      "Sound design",
      "2 revision rounds",
      "All export formats",
    ],
    featured: false,
  },
  {
    name: "Growth",
    price: "$1,500",
    flat: "flat",
    fit: "Launch campaigns, investor decks, paid ads",
    includes: [
      "Up to 90-second video",
      "3 creative concepts",
      "Priority turnaround",
      "Full asset pack",
      "Source files included",
    ],
    featured: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-32 lg:py-40 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel>Investment</SectionLabel>
        <h2 className="mt-6 font-display text-4xl sm:text-6xl tracking-tight max-w-3xl">
          One price. No surprises.
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`relative rounded-3xl bg-card p-10 border ${
                t.featured ? "border-accent/50" : "border-border"
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3 right-8 inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                  Most popular
                </div>
              )}
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-3xl">{t.name}</h3>
                <div className="text-right">
                  <div className="font-display text-4xl">{t.price}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                    {t.flat}
                  </div>
                </div>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                <span className="text-foreground/80">Perfect for: </span>
                {t.fit}
              </p>
              <ul className="mt-8 space-y-3">
                {t.includes.map((inc) => (
                  <li key={inc} className="flex items-start gap-3 text-sm">
                    <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span className="text-foreground/90">{inc}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-10 inline-flex w-full items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium transition ${
                  t.featured
                    ? "bg-accent text-accent-foreground hover:opacity-90"
                    : "bg-foreground text-background hover:opacity-90"
                }`}
              >
                Start a Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}