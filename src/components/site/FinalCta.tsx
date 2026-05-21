import { motion } from "framer-motion";

export function FinalCta() {
  return (
    <section id="contact" className="relative py-32 lg:py-48 border-t border-border overflow-hidden">
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.63 0.20 274 / 0.25), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-6 lg:px-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05]"
        >
          Stop losing people at{" "}
          <span className="text-muted-foreground italic">"let me explain."</span>
        </motion.h2>
        <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto">
          One video. One clear message. Book a call and let's build it.
        </p>
        <div className="mt-12">
          <a
            href="mailto:hello@vsfcreative.com"
            className="inline-flex items-center rounded-full bg-accent px-10 py-5 text-base font-medium text-accent-foreground hover:opacity-90 transition"
          >
            Book a Free Call
          </a>
        </div>
        <p className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">
          No agency fluff · No retainers · Just great work
        </p>
      </div>
    </section>
  );
}