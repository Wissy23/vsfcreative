import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

const steps = [
  {
    n: "01",
    title: "Diagnose",
    body: "We get obsessive about your product. What it does, who it's for, where people drop off. We leave this call with a clear creative direction.",
  },
  {
    n: "02",
    title: "Blueprint",
    body: "Script written for clarity and conversion. Storyboard built scene by scene. You approve before we animate a single frame.",
  },
  {
    n: "03",
    title: "Build",
    body: "Animation, UI motion, sound design, music — all done in-house. No outsourcing. No handoffs. Just one focused team shipping your video.",
  },
  {
    n: "04",
    title: "Launch Ready",
    body: "Final cuts in every ratio. 16:9, 9:16, 1:1. Captions available. Source files yours to keep.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-32 lg:py-40 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel>The Method</SectionLabel>
        <h2 className="mt-6 font-display text-4xl sm:text-6xl tracking-tight max-w-3xl">
          How we go from idea to impact
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl">
          No 4-week fluff. A focused process built to ship.
        </p>

        {/* Desktop horizontal timeline */}
        <div className="mt-20 hidden lg:block relative">
          <div className="absolute top-6 left-0 right-0 h-px bg-border" />
          <div className="grid grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="relative"
              >
                <div className="relative">
                  <div className="h-3 w-3 rounded-full bg-accent ring-8 ring-background relative -top-[1px]" />
                </div>
                <div className="mt-8 text-xs uppercase tracking-widest text-muted-foreground">
                  Step {s.n}
                </div>
                <h3 className="mt-3 font-display text-2xl">{s.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {s.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="mt-16 lg:hidden relative">
          <div className="absolute top-0 bottom-0 left-[7px] w-px bg-border" />
          <div className="space-y-12">
            {steps.map((s) => (
              <div key={s.n} className="relative pl-10">
                <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-accent ring-4 ring-background" />
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Step {s.n}
                </div>
                <h3 className="mt-2 font-display text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}