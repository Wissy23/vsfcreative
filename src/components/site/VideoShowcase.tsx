import { motion } from "framer-motion";
import { Play } from "lucide-react";

// --- Configuration ---
// Option 1: Self-hosted or direct video file
// Set VIDEO_SRC to a .mp4, .webm, etc. path or URL.
// Example: VIDEO_SRC = "/showreel.mp4" or "https://cdn.example.com/reel.mp4"
const VIDEO_SRC = ""; // <-- leave empty to use embed fallback

// Option 2: YouTube / Vimeo / Loom embed link
// Paste the full embed URL here (e.g., https://www.youtube.com/embed/VIDEO_ID)
const EMBED_URL = ""; // <-- paste embed URL here if not using VIDEO_SRC
// ---------------------

export function VideoShowcase() {
  const hasVideo = VIDEO_SRC.trim().length > 0;
  const hasEmbed = EMBED_URL.trim().length > 0;

  return (
    <section id="video" className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-sm shadow-2xl shadow-accent/5"
      >
        {/* 16:9 wrapper */}
        <div className="relative aspect-video w-full">
          {hasVideo ? (
            <video
              className="absolute inset-0 h-full w-full object-cover"
              controls
              poster=""
              preload="metadata"
            >
              <source src={VIDEO_SRC} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : hasEmbed ? (
            <iframe
              src={EMBED_URL}
              title="Showreel"
              className="absolute inset-0 h-full w-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            /* Placeholder state */
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-card/80 text-muted-foreground">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border bg-background/50">
                <Play className="h-6 w-6 text-foreground" />
              </div>
              <p className="text-sm">
                Add a video in{" "}
                <code className="rounded bg-border px-1.5 py-0.5 text-xs text-foreground">
                  VideoShowcase.tsx
                </code>
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
