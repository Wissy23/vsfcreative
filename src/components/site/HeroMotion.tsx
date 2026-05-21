import { motion } from "framer-motion";

// Abstract looping motion graphic: morphing geometric shapes evoking a UI being built.
export function HeroMotion() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Radial accent glow */}
      <div
        className="absolute -top-1/3 left-1/2 -translate-x-1/2 w-[120%] aspect-square rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, oklch(0.63 0.20 274 / 0.8), transparent 60%)",
        }}
      />
      {/* Faint grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />

      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <linearGradient id="stroke" x1="0" x2="1">
            <stop offset="0" stopColor="#5B6EF5" stopOpacity="0.9" />
            <stop offset="1" stopColor="#5B6EF5" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Morphing rectangle stack — like UI panels assembling */}
        {[0, 1, 2, 3].map((i) => (
          <motion.rect
            key={i}
            x={200 + i * 60}
            y={180 + i * 40}
            width={520 - i * 60}
            height={360 - i * 40}
            rx={14}
            fill="none"
            stroke="url(#stroke)"
            strokeWidth="1"
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: [0, 0.6, 0.3, 0.6],
              y: [40, 0, -10, 0],
            }}
            transition={{
              duration: 8,
              delay: i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Pulsing dot */}
        <motion.circle
          cx="900"
          cy="220"
          r="6"
          fill="#5B6EF5"
          animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.4, 1] }}
          transition={{ duration: 2.4, repeat: Infinity }}
        />

        {/* Rotating square */}
        <motion.g
          style={{ transformOrigin: "950px 560px" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        >
          <rect
            x="900"
            y="510"
            width="100"
            height="100"
            fill="none"
            stroke="#5B6EF5"
            strokeOpacity="0.5"
            strokeWidth="1"
          />
        </motion.g>

        {/* Drawing line */}
        <motion.line
          x1="120"
          y1="700"
          x2="1080"
          y2="700"
          stroke="#5B6EF5"
          strokeOpacity="0.4"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}