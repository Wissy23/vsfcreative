# VSF Creative — One-page site

A single-page, dark, brutally minimal site for a SaaS motion design studio. Conversion-focused, not portfolio-style.

## Stack & setup

- TanStack Start (existing template). Single route: `src/routes/index.tsx` replaces the placeholder.
- Tailwind v4 via `src/styles.css` — add brand tokens (`--background: #080808`, `--card: #101010`, `--accent: #5B6EF5`).
- Fonts: Clash Display (headlines) + Inter (body), loaded from Fontshare/Google via `<link>` in `__root.tsx`.
- Animation: framer-motion (`bun add framer-motion`).
- Icons: lucide-react (already typical).
- Subtle SVG grain texture as a fixed body overlay.

## Sections (single page, anchor nav)

1. **Nav (fixed)** — `VSF Creative` wordmark left; `Work · Process · Pricing · FAQ` + pill `Start a Project` (accent) right. Frosted dark glass (`backdrop-blur` + `bg-background/70`) once scrolled >20px.
2. **Hero (100vh)** — eyebrow tag, huge H1 (`text-7xl/8xl`, tight tracking), body, two CTAs (white primary + ghost). Background visual: animated SVG/Canvas geometric shapes morphing — built with framer-motion, no stock. Text reveals on load (staggered fade-up).
3. **Work** — staggered 2-col masonry (odd cards offset down). Cards: 16:9 thumbnail, top-left category tag chip, project name bottom. Hover: muted video autoplays, title slides up. Use placeholder MP4s (or static gradient previews if no video) — 6 cards.
4. **Process** — horizontal 4-step timeline on desktop (flex with connecting line), vertical stack on mobile. Each step: number, title, body.
5. **Pricing** — two dark cards side-by-side. Starter $800 / Growth $1,500. Both with `Start a Project` CTA. Growth gets a subtle accent border.
6. **FAQ** — shadcn `Accordion` with 5 Q&As verbatim from brief.
7. **Final CTA** — centered, oversized H2, sub, large accent pill `Book a Free Call`, fine-print note.
8. **Footer** — wordmark + section links + social (LinkedIn/X/Instagram) + copyright.

## Design tokens (added to `src/styles.css`)

```
--background: oklch from #080808
--card: oklch from #101010
--accent: oklch from #5B6EF5
--foreground: near-white
--muted-foreground: ~60% white
--border: ~10% white
```

Plus font-family CSS vars: `--font-display` (Clash Display), `--font-sans` (Inter). Map to Tailwind via `@theme inline`.

## Animations

- Hero: stagger fade-up on load (framer-motion).
- Sections: `whileInView` fade-up with viewport `once: true`.
- Work cards: hover triggers `<video>` play + title translate-y.
- Nav: scroll listener toggles frosted state.

## SEO

In route `head()`:
- title: `VSF Creative — SaaS Motion Design Studio`
- description: `We turn SaaS products into motion design videos that convert. Book a free strategy call.`
- og:title / og:description mirror above
- canonical `/`

## Files to create/edit

- `src/routes/index.tsx` — full page composition
- `src/components/site/Nav.tsx`, `Hero.tsx`, `HeroMotion.tsx`, `Work.tsx`, `Process.tsx`, `Pricing.tsx`, `Faq.tsx`, `FinalCta.tsx`, `Footer.tsx`
- `src/styles.css` — tokens, fonts, grain overlay utility
- `src/routes/__root.tsx` — add font `<link>` tags
- `package.json` — add `framer-motion`

## Out of scope (will use placeholders)

- Real client videos — using generated gradient/MP4 placeholders.
- Real social URLs — `#` until provided.
- CMS / form backend — `Start a Project` and `Book a Call` are anchor/`mailto:` placeholders unless you want a form wired to Lovable Cloud.
