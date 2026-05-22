import { motion } from "framer-motion";
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
          MOTION DESIGN FOR SAAS & AI FOUNDERS
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-8 font-display text-5xl sm:text-7xl lg:text-[7.5rem] leading-[0.95] tracking-tight text-foreground max-w-5xl"
        >
          Your product is great.
          <br />
          <span className="text-muted-foreground">Nobody gets it yet.</span>
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed"
        >
          Most founders lose users in the first 10 seconds. We fix that with
          motion design videos built to convert — not just impress.
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
            Watch a Demo Reel
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-border bg-transparent px-7 py-3.5 text-sm font-medium text-foreground hover:bg-card transition"
          >
            Get a Free Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}