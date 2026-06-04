const nav = ["Work", "Process", "Pricing", "FAQ"];
const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/odehwisdom" },
  { name: "X", href: "https://x.com/odeh_wisdom" },
  { name: "Instagram", href: "https://www.instagram.com/w1sdom_am" },
];

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
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition"
            >
              {s.name}
            </a>
          ))}
          </div>
        </div>

        <h2
          aria-label="VSF Creative"
          className="font-display leading-[0.85] tracking-[-0.04em] text-foreground font-medium text-center whitespace-nowrap"
          style={{ fontSize: "clamp(3rem, 16vw, 16rem)" }}
        >
          VSF <span className="font-accent">Creative</span>
        </h2>

        <div className="mt-8 pt-6 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
          <span>© 2025 VSF Creative</span>
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}