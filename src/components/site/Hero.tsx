import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { HeroMotion } from "./HeroMotion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <HeroMotion />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 py-32">
        <motion.div
          custom={0}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground"
        >
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          ✦ Motion Design for SaaS & AI Founders
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-8 font-display text-5xl sm:text-7xl lg:text-[7.5rem] leading-[0.95] tracking-tight text-foreground max-w-5xl text-slate-50"
        >
          <span className="text-muted-foreground">Premium Explainer Videos for SaaS and AI Founders</span>
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed"
        >
          We produce premium explainer videos that show your product in action, so users get it and sign up
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a
            href="#work"
            className="inline-flex items-center rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background hover:opacity-90 transition"
          >
            See Our Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-border bg-transparent px-7 py-3.5 text-sm font-medium text-foreground hover:bg-card transition"
          >
            Start a Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}