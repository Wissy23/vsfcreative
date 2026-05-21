const nav = ["Work", "Process", "Pricing", "FAQ"];
const socials = ["LinkedIn", "X", "Instagram"];

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span className="font-display text-foreground">VSF Creative</span>
          {nav.map((n) => (
            <a key={n} href={`#${n.toLowerCase()}`} className="hover:text-foreground transition">
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
          <span>© 2025 VSF Creative</span>
        </div>
      </div>
    </footer>
  );
}