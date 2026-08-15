# Cubee-Inspired Rebuild Plan — bhanusfdcv2.0

## Goal
Rebuild the portfolio using the Cubee brand system (nature × technology × precision) while preserving all existing content, SEO, and functionality.

---

## 1. Design Tokens

Lock these in `src/index.css` via Tailwind v4 `@theme`:

| Role | HEX | Usage |
|------|-----|-------|
| Background / Light | `#F2F6F2` | Primary light bg |
| Primary Dark | `#0B2515` | Darkest surfaces / dark mode bg |
| Primary Green | `#17532F` | Primary brand, headings, nav |
| Secondary Green | `#BACBA6` | Secondary surfaces, borders |
| Accent / Energy | `#C7F071` | CTAs, active states, highlights, metrics |
| Olive | `#75914B` | Supporting accents |
| Muted Green | `#7F9880` | Disabled / subtle |
| Text Dark | `#526358` | Body text, supporting copy |

**Typography:** Be Vietnam Pro (Google Fonts) — single family for headlines + body + UI. Weights: 400, 500, 600, 700.

**Visual language:** Modular geometry, cube/hexagonal motifs, thin borders, subtle noise texture, strong negative space, clean confident headings.

---

## 2. Theme Architecture

- **Dark mode default** (matches current site behavior) using `#0B2515` bg, `#F2F6F2` text.
- **Light mode** using `#F2F6F2` bg, `#0B2515` text.
- Accent `#C7F071` used sparingly: CTAs, active nav states, key metrics, hover rings.
- Add subtle CSS noise texture overlay for premium feel.

---

## 3. Component Redesign

Replace all `src/components/` with Cubee-inspired versions:

| Component | Change |
|-----------|--------|
| `Navbar` | Minimal, bottom-border separator, Be Vietnam Pro, accent hover states, mobile drawer with hexagonal icon |
| `Footer` | 4-column grid, `#17532F` bg, `#C7F071` social icons, clean links |
| `BlogCard` | Bento card, thin `#BACBA6` border, no heavy shadows, subtle hover lift |
| `Layout` | Add noise texture wrapper, reading progress in accent color |
| `ChatBot` | Rounded hexagonal motif in header, sage borders, lime CTA buttons |
| `CookieConsent` | Minimal bar, `#0B2515` bg, `#C7F071` accept button |

---

## 4. Page Redesign

Preserve routing and data. Update `src/pages/`:

| Page | Key Changes |
|------|-------------|
| `Home` | Hero with large Be Vietnam Pro headline, geometric cube motif background, stats in bento grid, featured cards with thin borders |
| `About` | Skills as hexagonal grid, timeline with geometric connectors |
| `Certifications` | **Remove 3D flip cards**. Replace with clean bento grid, accent border on hover, cert icons in sage circles |
| `Portfolio` | Filter tabs with underline accent, project cards with subtle border + hover state |
| `Training` | Course cards with progress indicators in `#C7F071` |
| `Blog` | Minimal list/grid, category pills with sage bg |
| `Contact` | Clean form, `#17532F` submit button, `#C7F071` focus rings |
| `Interview` | Q&A cards with geometric left-border accent |

---

## 5. Visual Motifs

- **Hexagonal/cube geometry:** Use as section dividers, card corner accents, loading states.
- **Grid system:** 8px base grid, consistent gaps.
- **Borders:** `1px solid #BACBA6` at 20% opacity on dark, full on light.
- **Shadows:** None (or very subtle). Use borders and background contrast instead.
- **Animations:** Smooth fade + slide on scroll, no bouncy effects.

---

## 6. Technical Changes

| Item | Action |
|------|--------|
| `src/index.css` | Replace Material Design tokens with Cubee tokens in `@theme` block |
| Fonts | Swap Plus Jakarta Sans + Inter + Fira Code for Be Vietnam Pro only |
| `tailwind.config.js` | Not needed (Tailwind v4 CSS-first). Update `@theme` only. |
| `index.html` | Update Google Fonts link to Be Vietnam Pro |
| Images | Preserve all existing `public/assets/` |
| Data files | No changes to `src/data/*` |
| Routing | No changes to `App.jsx` routes |

---

## 7. Accessibility & Performance

- Maintain skip-to-content, focus-visible, ARIA labels.
- WCAG AA contrast: verify `#C7F071` on `#0B2515` meets 4.5:1 for text (use for large text / UI only).
- Core Web Vitals: keep LCP < 2.5s, minimize font swap with `font-display: swap`.
- Preserve existing SEO: meta tags, schema.org, GTM, GA4, sitemap.

---

## 8. Rollout

1. Update `src/index.css` design tokens.
2. Rebuild components one-by-one (Navbar → Footer → Cards → Pages).
3. Run `npm run lint` after each component batch.
4. Visual QA in both light + dark modes.
5. Update `README.md` with new design direction.

---

## 9. Validation

- `npm run lint` passes.
- `npm run build` succeeds.
- All 16 routes render without errors.
- SEO meta tags unchanged.
- ChatBot + AI Chat modal functional.
- Visual review: Cubee aesthetic (nature × tech × precision) achieved.
