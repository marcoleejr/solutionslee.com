# solutionslee.com — Marco Lee's Portfolio

Personal portfolio of Marco Lee, Senior Full-Stack Engineer. A fast, bilingual (EN/ES), single-page site built to convert recruiters and clients: terminal-style ASCII intro, animated hero with live stat counters, experience timeline, featured products, and a clear contact CTA.

## Stack

- [Next.js](https://nextjs.org) (App Router) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) for animations (respects `prefers-reduced-motion`)
- [next-themes](https://github.com/pacocoursey/next-themes) for dark/light mode
- [react-github-calendar](https://github.com/grubersjoe/react-github-calendar) for the contributions graph

## Features

- **Bilingual** — English-first with an ES/EN toggle, persisted in `localStorage`
- **Dark/light theme** — system-aware, no hydration flicker
- **Sticky navbar** — with scroll progress bar and section anchors
- **Animated hero** — availability badge, count-up stats, decorative dot grid + accent glow
- **Experience timeline** — vertical rail with per-role tech tags
- **SEO** — Open Graph image generated at build time (`next/og`), JSON-LD `Person` schema, sitemap, robots, canonical
- **Anti-spam email** — address is base64-obfuscated and only decoded client-side

## Development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
pnpm build
pnpm start
```

## Project structure

```
src/
├── app/
│   ├── layout.tsx            # Metadata, JSON-LD, fonts, providers
│   ├── page.tsx              # Section composition
│   ├── opengraph-image.tsx   # OG image generated with next/og
│   ├── robots.ts / sitemap.ts
│   └── sections/             # Hero, Experience, Projects, Skills, Contact, Footer…
├── components/               # Navbar, AsciiIntro, toggles, counters…
└── lib/                      # Translations (EN/ES), language context, email helper
```
