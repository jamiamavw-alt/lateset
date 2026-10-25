# AGENTS.md — Lateset

Instructions for AI coding agents working in this repo. Humans: this is also a good onboarding doc.

## Project

Lateset is a glass-style music app for live DJ sets and on-demand listening.
The design system lives in Figma and is described in `DESIGN.md`.

- Figma file: https://www.figma.com/design/l0XOAUabplpYlhWLINg0m7/Agentic-Design-Systems
- Design intent and rules: `DESIGN.md` (read it before any UI work)

## What's in the repo

Every file has a twin in the Figma file. Change one side, update its twin.

| In the repo | Twin in Figma | Kept in sync by |
|---|---|---|
| `tokens/tokens.css` | Variables (142) | Each variable's code syntax is its CSS name |
| `src/components/*.tsx` | Components (19) | The `Code:` line in each component description |
| `src/screens/` | Page Mocks | Screens built only from components and tokens |
| `DESIGN.md` · `AGENTS.md` · `CLAUDE.md` | Design.md page | Same text; edit the repo, paste back to Figma |
| `README.md` → Challenges | Challenges page | Same ten challenges, same order |

## Setup and commands

> TODO (humans): there is no `package.json` yet. Replace these with the real scripts once it exists.
> Agents: if a script below isn't in `package.json`, say so. Don't guess an alternative.

```bash
npm install        # install dependencies
npm run dev        # start the dev server
npm test           # run tests
npm run lint       # lint + format check
```

## Before any UI work

1. Read `DESIGN.md`. Its MUST / MUST NOT rules are hard constraints.
2. If the Figma MCP is connected, read the relevant frame or component from the Figma file
   (variables, component descriptions, screens) instead of guessing from screenshots.
3. Find an existing component in `src/components` before creating a new one. Its file name comes
   from the `Code:` line in the Figma component description.

## Code conventions for UI

- **Tokens only.** Colors, spacing, radius, blur, shadows and durations come from the CSS variables
  in `tokens/tokens.css`. Never hard-code a hex value or pixel number that has a token.
- **Token names.** Use the exact CSS name from `tokens/tokens.css`; it is the Figma variable's WEB
  code syntax. The CSS names are shorter than the Figma paths, so never derive them by swapping `/`
  for `-`. Common ones:

  | Figma variable | CSS |
  |---|---|
  | `color/text/primary` | `var(--color-ink)` |
  | `color/text/secondary` | `var(--color-ink-muted)` |
  | `color/text/on-accent` | `var(--color-on-accent)` |
  | `color/accent/default` | `var(--color-accent)` |
  | `color/status/live` | `var(--color-live)` |
  | `color/status/on-air` | `var(--color-on-air)` |
  | `color/surface/control` | `var(--color-control)` |
  | `glass/fill/default` | `var(--glass-fill)` |
  | `glass/stroke/default` | `var(--glass-stroke)` |
  | `blur/glass/md` | `var(--glass-blur-md)` |
  | `spacing/6` | `var(--spacing-6)` |
  | `radius/card` | `var(--radius-card)` |

  If the name you need isn't in the file, stop and ask. Don't invent one.
- **Semantic tokens in UI.** Use `color/*`, `glass/*`, `radius/*` (not `radius/scale/*`) and `size/*`
  tokens. Never bind a primitive like `pink/600`, so a theme switch (Pink / Purple) recolors everything.
- **Spacing follows the Tailwind scale** (1 step = 4px). If you use Tailwind, `spacing/4` = `p-4`.
- **Fonts:** Syne 800 for display only (titles, cover art, initials). Manrope for everything else.
  Times use `font-variant-numeric: tabular-nums`.
- **Glass:** every glass surface uses the full recipe for its level, all from tokens: fill
  (`glass/fill/*`), 1px stroke (`glass/stroke/default`, or `glass/stroke/strong` for elevated),
  backdrop blur (`blur/glass/*`), shadow, and the inner highlight (`glass/highlight`). The Figma
  effect styles `Glass/Card`, `Glass/Subtle`, `Glass/Raised` and `Glass/Elevated` show which pieces
  go together. Never apply only part of it, and never nest glass inside glass.
- **Semantics:** real `<button>`, `<a href>`, `<input type="range">`. Tabs use
  `aria-current="page"`; toggles use `aria-pressed`. Icon-only buttons need an `aria-label` that
  names the action and subject ("Tune in to Zara Bloom").
- **Motion:** use the `motion/duration/*` and `motion/easing/*` tokens; wrap loops in
  `@media (prefers-reduced-motion: no-preference)`.

## Definition of done (UI changes)

- [ ] Uses existing components and tokens only (or the new component is documented in Figma and `DESIGN.md` §5)
- [ ] Passes the accessibility contract in `DESIGN.md` §8
- [ ] Avoids every anti-pattern in `DESIGN.md` §9
- [ ] Works at 375, 390 and 430pt widths and at 200% text size
- [ ] Tests and lint pass

## When unsure

If a design decision isn't covered by `DESIGN.md`, or two rules conflict, stop and ask the human.
Don't invent a new color, token, component, or pattern.
