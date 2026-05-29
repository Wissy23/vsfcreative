import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

// --- Video Configuration ---
// Paste YouTube embed URLs for each project below.
// Format: https://www.youtube.com/embed/VIDEO_ID
const PROJECT_VIDEOS: { name: string; tag: string; embedUrl: string }[] = [
  { name: "Linearflow — Product Demo", tag: "Product Demo", embedUrl: "https://player.vimeo.com/video/1196503546?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1" },
  { name: "Northstar Launch Film", tag: "Launch Video", embedUrl: "" },
  { name: "Cohort — Series A Reel", tag: "Investor Deck Reel", embedUrl: "" },
];
// ---------------------------

function VideoBox({
  name,
  tag,
  embedUrl,
  index,
}: {
  name: string;
  tag: string;
  embedUrl: string;
  index: number;
}) {
  const hasEmbed = embedUrl.trim().length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.1,
      }}
      className="group"
    >
      <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-sm shadow-2xl shadow-accent/5">
        {hasEmbed ? (
          <iframe
            src={embedUrl}
            title={name}
            className="absolute inset-0 h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-card/80 text-muted-foreground">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background/50">
              <Play className="h-5 w-5 text-foreground" />
            </div>
            <p className="text-sm">
              Add a video URL in{" "}
              <code className="rounded bg-border px-1.5 py-0.5 text-xs text-foreground">
                Work.tsx
              </code>
            </p>
          </div>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <h3 className="font-display text-lg translate-y-0 group-hover:-translate-y-0.5 transition-transform duration-500">
          {name}
        </h3>
        <span className="inline-flex items-center rounded-full bg-background/70 backdrop-blur px-3 py-1 text-xs text-foreground border border-border">
          {tag}
        </span>
      </div>
    </motion.div>
  );
}

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
            A few things we&apos;ve shipped for founders who refused to settle for
            screen recordings.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
          {PROJECT_VIDEOS.map((p, i) => (
            <VideoBox key={p.name} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
