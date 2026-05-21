import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

type Project = {
  name: string;
  tag: string;
  gradient: string;
};

const projects: Project[] = [
  { name: "Linearflow — Product Demo", tag: "Product Demo", gradient: "from-indigo-500/40 via-purple-500/20 to-transparent" },
  { name: "Northstar Launch Film", tag: "Launch Video", gradient: "from-sky-500/40 via-blue-500/20 to-transparent" },
  { name: "Cohort — Series A Reel", tag: "Investor Deck Reel", gradient: "from-fuchsia-500/40 via-pink-500/20 to-transparent" },
  { name: "Pilot CRM — Feature Spotlight", tag: "Product Demo", gradient: "from-emerald-500/40 via-teal-500/20 to-transparent" },
  { name: "Glyph Studio — Brand Film", tag: "Launch Video", gradient: "from-orange-500/40 via-rose-500/20 to-transparent" },
  { name: "Forma — Investor Reel", tag: "Investor Deck Reel", gradient: "from-violet-500/40 via-indigo-500/20 to-transparent" },
];

export function Work() {
  return (
    <section id="work" className="relative py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel>Proof</SectionLabel>
        <div className="mt-6 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2 className="font-display text-4xl sm:text-6xl tracking-tight max-w-2xl">
            Videos that move product
          </h2>
          <p className="max-w-md text-muted-foreground">
            A few things we've shipped for founders who refused to settle for
            screen recordings.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const offset = index % 2 === 0 ? "md:-translate-y-12" : "md:translate-y-12";
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative ${offset}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-card border border-border">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
        {/* animated faux UI elements */}
        <div className="absolute inset-8 rounded-lg border border-white/10 backdrop-blur-sm" />
        <div className="absolute top-12 left-12 right-12 h-2 rounded-full bg-white/10 overflow-hidden">
          <motion.div
            className="h-full bg-accent"
            initial={{ width: "20%" }}
            whileInView={{ width: "85%" }}
            viewport={{ once: false }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
        </div>
        <div className="absolute bottom-12 left-12 flex gap-2">
          {[0,1,2].map((d) => (
            <motion.div
              key={d}
              className="h-8 w-8 rounded-md bg-white/10"
              animate={{ opacity: [0.3, 0.9, 0.3] }}
              transition={{ duration: 2, delay: d * 0.3, repeat: Infinity }}
            />
          ))}
        </div>

        {/* tag */}
        <span className="absolute top-4 left-4 z-10 inline-flex items-center rounded-full bg-background/70 backdrop-blur px-3 py-1 text-xs text-foreground border border-border">
          {project.tag}
        </span>

        {/* hover overlay */}
        <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-500" />
      </div>
      <div className="mt-4 overflow-hidden">
        <h3 className="font-display text-xl translate-y-0 group-hover:-translate-y-1 transition-transform duration-500">
          {project.name}
        </h3>
      </div>
    </motion.div>
  );
}