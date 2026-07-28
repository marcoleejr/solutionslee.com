# Goal: Reposition Marco Lee as Senior Backend Engineer (sellable)

**Date:** 2026-07-27  
**Owner:** Kimi Code CLI `kimi-code/k3` effort **max** + AgentSwarm if useful  
**Worktree:** `/Users/marcolee/Code/solutionslee-worktrees/senior-backend-20260727`  
**Branch:** `feat/senior-backend-positioning-20260727` → PR into **`main`** (no merge)  
**Package manager:** **pnpm only** (never npm/npx)

---

## Context (last known work, Jul 23–24 2026)

1. LinkedIn rewrite drafts under `~/.hermes/drafts/` — later corrected: **no VML**, last tech employment = **Guatemala.com Lead ended Mar 2026**.
2. solutionslee.com got recruiter polish + premium redesign + selling improvements (on `main` tip `7573872`).
3. Current live positioning is still **Senior Full-Stack**. Marco now wants **Senior Backend Engineer** as the primary sell lane.

---

## Positioning thesis (enforce)

**Primary title:** Senior Backend Engineer  
**Secondary (keep honest, not headline-primary):** product / full-stack delivery capability (he can own FE when needed)  

**Why this works for Marco:**
- Long spine of production systems: Laravel/PHP APIs, MySQL, NestJS, WordPress headless backends, AWS, high-traffic media platforms (5M+ MAU claims already on site — keep only if already present and consistent).
- Tech lead ownership of architecture, migrations, ads/performance, mentoring.
- Independent products with real backends (Turso/SQLite, Next API routes, monetization).

**Do NOT:**
- Invent employers (especially **VML** — forbidden).
- Claim current salaried tech job / “Present” at Guatemala.com.
- Position as ML Engineer / AI Engineer / LangChain-RAG-PyTorch researcher.
- Claim **RAG** as a core skill unless rephrased as **AI-accelerated engineering / agents tooling** (honest: Claude, Codex, Gemini, Grok, CLI agents). Prefer remove bare “RAG” from hero/SEO if used as identity.
- Put Single’s Bar as a peer engineering employer (project OK).
- Invent FAANG, fake metrics, salary in copy.
- Use npm / amend / force-push / Co-Authored-By.

**MUST keywords (backend-first, natural):**
Backend, APIs, REST, Laravel, PHP, Node.js, NestJS, MySQL, PostgreSQL, WordPress headless, AWS, Docker, scalability, architecture, TypeScript, JavaScript, English C1, remote, UTC-6 / CST.

**NICE (secondary, with proof already on site):** React, Next.js, React Native, Ionic, Vercel, AI-assisted delivery.

**Open to titles (LinkedIn + hire CTAs):**
- Senior Backend Engineer
- Backend Engineer
- Senior Software Engineer
- Software Engineer (Backend)
- Lead Backend Engineer / Tech Lead (Backend)
- Full Stack Engineer (secondary only)

---

## Hard truth spine (Experience)

| Role | Company | Dates |
| --- | --- | --- |
| Technology & Development Coordinator / Tech Lead (backend/platform emphasis in bullets) | Guatemala.com | Jun 2020 – **Mar 2026** (**ended**) |
| Full-Stack Developer (emphasize APIs/data/backends in bullets) | Guatemala.com | Sep 2015 – Jun 2020 |
| Founder & Product Engineer (own products) | Independent Products | 2018 – Present |
| Web Developer | XYZ Network Inc | Jan 2014 – Sep 2015 |

Brands under real employers only: Star Media, Hoteles.com, **Autoweb** (never Auto Hotel), Noticias.com, Mundo.com, Orange as **client/project line if true** — not fake FT jobs.

Independent products may remain Present (founder ops). Guatemala.com Lead must NOT say Present.

---

## Deliverable A — solutionslee.com (code, this repo)

Reposition the entire recruiter surface to **Senior Backend Engineer** while remaining honest about full-stack product capability.

### Files likely to touch
- `src/lib/translations.ts` (EN + ES — keep parity)
- `src/app/layout.tsx` (title, description, keywords, JSON-LD jobTitle/knowsAbout)
- `src/app/opengraph-image.tsx`
- `src/components/AsciiIntro.tsx` (hardcoded title string if any)
- `src/app/sections/Skills.tsx` — **Backend & APIs first**; AI label honest (no fake RAG identity)
- `src/app/sections/Hero.tsx` / Experience / CaseStudy / WhyHireMe / Contact / Projects only if copy wiring needs it
- `README.md` one-line identity if it still says Full-Stack primary
- `STATUS.md` summary of this PR

### Copy direction (EN-first)
- Hero title → **Senior Backend Engineer**
- Stack line → backend-first e.g. `Laravel · NestJS · Node · MySQL/Postgres · AWS` (+ light product/FE secondary if space)
- Tagline/bio → systems, APIs, data, scale, architecture ownership; FE as supporting skill not identity
- Experience bullets → lead with APIs, data models, infra, migrations, performance, reliability, mentoring backend/platform work
- Case study → keep Guatemala.com scale story but **backend/platform architecture** angle (headless WP + NestJS APIs + AWS)
- Skills order: Backend first, then Infra, then Frontend, Mobile, Applied AI (tooling)
- Contact / Why hire me → open to **senior backend / platform** remote roles (US-hours)
- SEO/OG/JSON-LD aligned
- ES translations updated to match (Ingeniero Backend Senior / similar natural ES)

### QA gates (required before PR claim)
1. `pnpm lint`
2. `pnpm build`
3. `pnpm start` + Playwright or equivalent desktop 1440 + mobile 390 screenshots under `docs/swarm/qa/` (hero + experience + skills + contact)
4. Grep hygiene:
   - no `VML`
   - no Guatemala.com `Present` / `Empresa Actual`
   - Lead period still ends **Mar 2026**
   - no bare inflated ML/RAG identity
5. Commit normal messages, push branch, open PR → **main**
6. Write `docs/swarm/RESULTS.md` with what changed + gates + PR URL

### Out of scope
- Redesigning visual system from scratch
- Real photo replacement unless already present
- Deploy/merge to production (Marco merges)
- Editing LinkedIn live UI from this repo (see Deliverable B — draft package only unless browser auth already available)

---

## Deliverable B — LinkedIn copy package (files)

Write to **both**:
1. `docs/swarm/linkedin-senior-backend-copy.json` (structured)
2. `~/.hermes/drafts/linkedin-senior-backend-20260727.json` (same content)
3. `docs/swarm/linkedin-senior-backend-copy.md` (human copy-paste EN)

### Required sections
1. **Headline** ≤220 chars — Senior Backend primary + Laravel/Node/APIs + scale + C1/CST  
2. **About** — 3 short paragraphs, backend-led, honest AI-accelerated delivery, no VML, open to US remote senior backend  
3. **Experience** edits — only real roles above; 3–5 accomplishment bullets each; backend/platform first; mark new metrics `[ESTIMATED]` if inventing numbers (prefer keep existing 5M+ only if already used consistently)  
4. **Skills pin order** — backend-first  
5. **Open to Work titles** — backend-heavy list above  
6. **Delete/hide list** — junior/expired certs, garbage projects  
7. **Apply notes** for live editor: About → Headline → Experience end dates/bullets → skills → Open to Work  
8. **Honesty checklist**

Do **not** add VML. Do **not** claim current Guatemala.com employment.

---

## Effort / process

- Model: `kimi-code/k3`, thinking effort **max**
- Prefer small coherent commits over one giant mess
- If swarm: 1 audit writer + 1 implementer is enough; avoid burning quota
- If blocked on LinkedIn live login: ship draft package + site PR; note blocker

## Done definition

- [ ] Site identity is Senior Backend Engineer EN+ES+SEO+OG+AsciiIntro
- [ ] Skills/backend-first; no fake ML/RAG identity
- [ ] Experience truth: GT.com Lead ended Mar 2026; no VML
- [ ] `pnpm lint` + `pnpm build` green (parent will re-run)
- [ ] QA screens in `docs/swarm/qa/`
- [ ] LinkedIn JSON+MD drafts written to paths above
- [ ] PR open to main with clean commits
- [ ] `docs/swarm/RESULTS.md`
