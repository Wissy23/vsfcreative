const nav = ["Work", "Process", "Pricing", "FAQ"];
const socials = ["LinkedIn", "X", "Instagram"];

export function Footer() {
  return (
    <footer className="border-t border-border pt-16 pb-8 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 pb-12">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {nav.map((n) => (
              <a
                key={n}
                href={`#${n.toLowerCase()}`}
                className="hover:text-foreground transition"
              >
                {n}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {socials.map((s) => (
              <a key={s} href="#" className="hover:text-foreground transition">
                {s}
              </a>
            ))}
          </div>
        </div>

        <h2
          aria-label="VSF Creative"
          className="font-display font-bold leading-[0.85] tracking-[-0.04em] text-foreground lg:text-[16vw] text-8xl"
        >
          VSF Creative
        </h2>

        <div className="mt-8 pt-6 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
          <span>© 2025 VSF Creative</span>
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}