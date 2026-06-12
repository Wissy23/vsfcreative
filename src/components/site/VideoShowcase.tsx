import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Player from "@vimeo/player";

// --- Configuration ---
const EMBED_URL = "https://player.vimeo.com/video/1200763047?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1&controls=0&title=0&byline=0&portrait=0";
// ---------------------

export function VideoShowcase() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<Player | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!iframeRef.current) return;
    const player = new Player(iframeRef.current);
    playerRef.current = player;

    player.on("play", () => setIsPlaying(true));
    player.on("pause", () => setIsPlaying(false));
    player.on("ended", () => setIsPlaying(false));
    player.on("volumechange", ({ volume }: { volume: number }) => {
      player.getMuted().then((m) => setIsMuted(m || volume === 0));
    });
    player.ready().then(() => setIsReady(true));

    return () => {
      player.destroy().catch(() => {});
      playerRef.current = null;
    };
  }, []);

  const toggle = async () => {
    const player = playerRef.current;
    if (!player) return;
    try {
      if (isPlaying) {
        await player.pause();
      } else {
        await player.play();
      }
    } catch {
      // ignore
    }
  };

  const toggleMute = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const player = playerRef.current;
    if (!player) return;
    try {
      const next = !isMuted;
      await player.setMuted(next);
      if (!next) await player.setVolume(1);
      setIsMuted(next);
    } catch {
      // ignore
    }
  };

  return (
    <section id="video" className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-sm shadow-2xl shadow-accent/5"
      >
        {/* 16:9 wrapper */}
        <div className="relative aspect-video w-full">
          <iframe
            ref={iframeRef}
            src={EMBED_URL}
            title="Showreel"
            className="absolute inset-0 h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          {isReady && (
            <>
              <button
              type="button"
              onClick={toggle}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              className="absolute inset-0 flex items-center justify-center bg-transparent transition-colors hover:bg-background/20 focus:outline-none"
            >
              <span
                className={`flex h-16 w-16 items-center justify-center rounded-full bg-black/40 backdrop-blur-xl border border-white/30 text-white shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-opacity duration-300 ${
                  isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
                }`}
              >
                {isPlaying ? (
                  <Pause className="h-6 w-6" />
                ) : (
                  <Play className="h-6 w-6 translate-x-0.5" />
                )}
              </span>
              </button>
              <button
                type="button"
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute video" : "Mute video"}
                className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-black/40 backdrop-blur-xl border border-white/30 text-white shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-opacity duration-300 focus:outline-none"
              >
                {isMuted ? (
                  <VolumeX className="h-5 w-5" />
                ) : (
                  <Volume2 className="h-5 w-5" />
                )}
              </button>
            </>
          )}
        </div>
      </motion.div>
    </section>
  );
}

