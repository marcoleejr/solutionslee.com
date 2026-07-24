# Recruiter polish — solutionslee.com

Branch: `feat/recruiter-polish-20260724-0225`
Date: 2026-07-24

## Changes
- EN-first senior positioning (default `lang=en`, metadata EN)
- Hero: Senior Full-Stack Engineer + Laravel/React/WP/Applied AI
- Experience aligned to LinkedIn truth:
  - Guatemala.com Tech Lead Jun 2020–Mar 2026
  - Guatemala.com Full-Stack Sep 2015–Jun 2020
  - Independent products 2018–Present
  - XYZ Network Jan 2014–Sep 2015
- Removed stale "Empresa Actual 2023—Presente" and bar co-owner as peer job
- Projects: calcufast, gaminglab, singlesbar, agente-ia
- Skills: Laravel, RN/Ionic, WP headless, Nest, AI agents/RAG, AWS
- Fixed React hydration #418 (AsciiIntro + GitHub calendar mount gates, theme provider)

## Browser QA (Playwright)
- `pnpm build` green
- `next start :3013`
- Desktop + mobile PASS assertions:
  - Senior Full-Stack title
  - no Empresa Actual / 2023 Presente job
  - calcufast.com + gaminglab.dev links
  - GT.com Jun 2020–Mar 2026
  - no Co-Owner/Copropietario job
  - no hydration 418
- Screens: `/tmp/browser-qa/solutionslee/home-desktop.png`, `home-desktop-experience.png`, `home-mobile.png`

## Out of scope
- Full redesign / new photo
- Real-time GH contribution count accuracy
