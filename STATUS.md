# Scroll-reveal flicker fix — solutionslee.com

Branch: `cursor/fix-scroll-reveal-flicker-7702`
Date: 2026-07-25

## Fix
- Replaced all IntersectionObserver-based `whileInView` reveals with CSS
  scroll-driven animations (`animation-timeline: view()`, range `entry 0%`
  → `entry 70%`, 24px slide + fade, `.reveal-up` in globals.css).
- Reveal state is a pure function of scroll position (compositor-driven),
  so the mobile flash/jump (IO callbacks lagging during momentum scroll)
  is impossible by construction. Unsupported browsers/reduced-motion show
  content directly.
- Project card hover lift swapped for border+shadow highlight (the scroll
  animation owns `transform`).
- Audit (Chrome, 390px, instant step-scroll, next-frame sampling): PASS —
  no element ever visible in a hidden state; entry gradient 0 → 0.93 →
  1.00; contact card + footer reach opacity 1.00 at max scroll.

---

# Premium redesign — solutionslee.com (merged in #4)

Branch: `cursor/premium-portfolio-redesign-7702`
Date: 2026-07-24

## Changes
- Sticky glass navbar: scroll-progress bar, gradient ML monogram, section anchors, theme/lang toggles
- Hero: availability badge (pulsing dot), animated count-up stats (12+ yrs, 5M+ users, 4 products, 6 langs), CTA buttons, dot-grid + accent glow background, rotating avatar ring
- Experience: vertical timeline, always-visible descriptions, per-role tech tags
- Projects: gradient monograms, stretched-link cards, hover lift/glow
- Skills: grouped by category (Frontend / Backend / AI / Mobile / Infra) as pill chips
- New Contact CTA section (email copy, LinkedIn, UTC-6 note)
- Footer: real GitHub/LinkedIn logos, back-to-top link
- SEO: metadataBase, canonical, twitter card, JSON-LD Person, build-time OG image (next/og), sitemap.ts, robots.ts
- AsciiIntro: prefers-reduced-motion skip, click-to-skip, tagline reveal
- README rewritten; all new copy translated EN/ES

## Browser QA (Playwright + system Chrome)
- `pnpm lint` + `pnpm build` green (routes: /, /opengraph-image, /robots.txt, /sitemap.xml — all static)
- Desktop 1440px + mobile 390px, dark/light, EN/ES: PASS
- Mobile scrollWidth 390 == viewport (no horizontal overflow)
- No hydration/console errors (only sandbox-blocked GitHub contributions API)

## Out of scope
- Real profile photo
- Real-time GH contribution count accuracy
