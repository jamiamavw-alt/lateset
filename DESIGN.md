---
system: Lateset Design System
version: 1.0.1
updated: 2026-10-24
figma: https://www.figma.com/design/l0XOAUabplpYlhWLINg0m7/Agentic-Design-Systems
tokens: Figma variables (collections: Primitives, Color, Spacing, Radius, Effects, Motion)
themes: Pink (default) and Purple — modes on the Color collection
code_tokens: CSS custom properties — each Figma variable's WEB code syntax is its CSS name
audience: designers, developers, and AI agents
---

# DESIGN.md — Lateset

> This file is the **intent layer** of the Lateset design system. Figma holds *what* exists
> (tokens, components, screens). This file says *why* it exists, *when* to use each piece, and
> *how to decide* when nothing in the library fits. Agents: read this file before you design or
> write UI code, and treat the rules marked **MUST** as hard constraints.

---

## 1. Product intent

Lateset is a music app for **live DJ sets** and **on-demand listening**.

- People come to answer one question fast: **"Who is playing right now, and is it my kind of music?"**
- The second job is **planning**: when is my favorite DJ on next, and remind me.
- The third job is **listening later**: replay sets I saved.

Every screen should make one of those three jobs faster. If a design choice doesn't help one of
them, it probably doesn't belong.

## 2. Personality

| We are | We are not |
|---|---|
| Calm, airy, late-night | Loud, neon, club-flyer |
| Confident type, quiet surfaces | Decoration everywhere |
| Live and present | Static catalog |
| Friendly and plain-spoken | Slangy or hype-y |

Visual summary: a pale pink wall, frosted white glass, deep berry ink, and one loud typeface (Syne)
used sparingly. A Purple theme swaps the pink ramp for the purple one. Live gets its own hot red-pink (`live/500`) that sits outside both themes.

## 3. Principles (with the reason behind each)

1. **Live is the hero.** Live status always outranks everything else on screen.
   *Why: live sets are the product's reason to exist; recordings are a fallback.*
2. **Live is always labeled.** Live has its own hot red-pink outside both themes, and the LIVE badge, ON AIR badge and live dot always carry it, so color is never the only signal. Genre gradients = DJ identity. Berry (`color/accent/default`) = selected / primary.
   *Why: a reserved color helps people spot live fast; the label makes it accessible.*
3. **Glass shows layers, not style.** More opaque glass = higher in the stack.
   *Why: glass is how people tell content, controls and floating chrome apart.*
4. **One primary action per surface.** One play button per player, one action per card.
   *Why: the app is used one-handed, often in the dark.*
5. **Motion means sound.** Loops run only while audio plays or a set is live.
   *Why: motion is a status signal; idle motion would be noise.*
6. **Accessible by default.** Contrast, labels, 44pt targets and reduced motion are part of "done".

## 4. Decision rules

Use these when the library doesn't directly answer the question. Rules are written as
`IF … THEN …` so agents can apply them literally.

### Color
- Themes are modes on the Color collection (Pink, Purple). **MUST** use semantic tokens so a theme switch recolors everything; **MUST NOT** bind a primitive like `pink/600` directly in UI.
- IF something is happening right now (live, on air) THEN use a LIVE or ON AIR `Badge` or the live dot (`color/status/live` → `live/500`, `color/status/on-air` → `live/700`). **MUST** include the word or the dot; **MUST NOT** use the live red for anything else, or signal live with color alone.
- IF an element identifies a DJ or show THEN its fill is the genre gradient: `color/genre/<genre>` → `color/genre/<genre>-end`, linear, top-left to bottom-right. **MUST** bind both stops to the tokens; **MUST NOT** pick a tile color or gradient by hand. The end stop is two steps lighter than the start and never lighter than pink/400, so white initials stay at 3:1 or better.
- IF text sits on glass THEN use `color/text/primary` or `color/text/secondary`. **MUST NOT** put white text on light glass (contrast ≈ 1.2:1).
- IF text sits on the berry accent, the live red, a genre gradient or a deep gradient THEN use `color/text/on-accent`.
- IF something is selected or primary THEN use `color/accent/default` (berry, pink/700).

### Glass (materials)
- Cards and rows → `Glass/Card` + `glass/fill/default` + `glass/stroke/default`.
- Large player panels → `Glass/Subtle` + `glass/fill/subtle` + `glass/stroke/default`.
- Floating chrome (tab bar) → `Glass/Raised` + `glass/fill/raised`.
- The single most important item on a screen (the on-air slot) → `Glass/Elevated` + `glass/fill/elevated` + `glass/stroke/strong`. **MUST** be at most one per screen.
- Unselected chips and day buttons → `glass/fill/chip`. Small glass controls (bell, settings) → `glass/fill/control`.
- Backdrop blur comes from `blur/glass/sm` (pills, settings), `blur/glass/md` (cards and panels) or `blur/glass/lg` (tab bar). The inner top edge is `glass/highlight`.
- **MUST NOT** put glass inside glass. Inside a glass panel, use flat content or solid controls.
- **MUST** apply the full effect style + fill + stroke together. Fill alone is not glass.

### Typography
- IF it is a screen title, cover-art title, DJ initials or set acronym THEN use Syne ExtraBold (Display/* styles), uppercase, 1–3 words.
- Everything people read as a sentence → Manrope. **MUST NOT** set sentences in Syne.
- Times and durations → `Label/Time` with tabular numbers.
- **MUST NOT** introduce a third typeface.

### Layout & spacing
- Spacing **MUST** come from `spacing/*` (Tailwind scale, 1 step = 4px). Never type a raw number.
- Screen margins: `spacing/6` (24). Card padding: `spacing/3` (12). Section gap: `spacing/5` (20).
- Floating chrome (Tab Bar, Mini Player) sits `spacing/4` (16) from the screen edges, so it reads as a layer above the content. The Mini Player docks `spacing/4` above the Tab Bar.
- Corners **MUST** come from semantic radius tokens (`radius/card`, `radius/pill`, …), not the raw scale.
- Every tappable thing **MUST** be at least `size/touch-min` (44×44).
- Scroll views **MUST** leave 92px of bottom padding so the floating tab bar never covers the last row. (This is the one spacing value with no token yet. Use 92px here only; don't add a token without asking.)

### Actions
- Primary playback → `Play Button` (one per player).
- Live stream control → `Play Button` with **Stop**, never Pause. Live audio cannot be paused and resumed.
- Secondary actions in rows → `Icon Button / Ghost`.
- A toggle that is ON → `Icon Button / Filled` + the filled icon (shape change, not just color).
- Tune in from a card → `Icon Button / Solid` with the Play icon.

### Content
- Name DJs and shows exactly as provided. Initials = first letter of each word, max 2–3 letters.
- Times are local, 12-hour, with AM/PM: `10:00 PM`.
- Listener counts are rounded: `864`, `1.2k`, `24k`.
- Button labels and accessible names say the outcome: "Tune in to Zara Bloom", not "Play".
- Empty states say what to do next: "Nobody is spinning this genre right now. Check the schedule for the next set."

## 5. Component intent

For each component: what it is **for**, when to use it, when **not** to, and the rules that
aren't visible in the drawing. Full specs live in Figma (component descriptions + doc pages).

| Component | Use it for | Don't use it for | Non-obvious rules |
|---|---|---|---|
| **Badge** | Live status: LIVE, ON AIR, live dot | Counts, genres, "NEW", promos | Text is the meaning; never a dot alone |
| **Genre Chip** | Single-select genre filter | Multi-select, tags on cards | Exactly one selected; "All" by default; row scrolls, never wraps |
| **Day Button** | Picking a day on the Schedule | General date input | Opens on today; accessible name = full date |
| **Icon Button** | Secondary and toggle actions | The main play action | 44×44 always; accessible name required |
| **Play Button** | The one primary playback control | Anything that isn't play/pause/stop | Large = live (Stop), Medium = on demand (Pause) |
| **Seek Bar** | Scrubbing on-demand audio | Live streams | Remaining time shown as negative |
| **Live Status** | Replacing the seek bar on live | On-demand audio | Status text is a live region; EQ is decorative |
| **Tab Bar** | The 4 top-level destinations | Actions, filters | Order never changes: Live · Schedule · Replay · Profile |
| **DJ Tile** | DJ identity without photos | Decoration | Genre picks the gradient; hidden from screen readers |
| **Live Card** | A DJ streaming right now | Upcoming or past sets | One action: tune in |
| **Favorite DJ** | A followed DJ in the Profile row | Live list on the home screen | Circle tile + name; LIVE badge only while they're live |
| **Schedule Slot** | A set on the schedule | Live list on the home screen | Only the on-air slot is elevated |
| **Saved Set Row** | A saved past set | Live content | Unsave is undoable until you leave the screen |
| **Album Cover** | Typographic cover art | Photos | One word per line; 8 letters max per line on Deep |
| **Mini Player** | Audio that keeps playing after the full player is minimized or you change tabs | Starting playback | Docked 16px above the Tab Bar on Glass/Raised. Genre tile shows a white equalizer (frozen when paused or reduced motion). Live = LIVE badge + Stop; Replay = Play/Pause. Tap to reopen the full player |
| **History Row** | One thing you listened to, on Replay | Live tune-in | Always replays on demand (seek, skip, pause), even if that DJ is live now. Labeled "Heard live" or "Replay" with the time |

## 6. Screen intent

| Screen | Job | First thing the eye should hit | Must never |
|---|---|---|---|
| Live | "Who's on now?" | The first live card | Bury live cards below promos |
| Schedule | "When is my DJ on?" | Today + the on-air slot | Open on any day but today |
| Live Player | Listen live | The start/stop button | Show a seek bar |
| Replay | "What did I listen to?" — a running history, newest first, grouped by day | The most recent entry | Open the live player; every entry replays on demand. The on-demand player is a sheet that must not look identical to the live player |
| Profile | My DJs and saved sets | Favorite DJs who are live | Mix live and saved in one list |

## 7. Motion intent

- Durations: `motion/duration/fast` 150ms (press) · `base` 250ms (tab pill) · `slow` 400ms (player rise).
- Loops: equalizer `eq` 900ms while audio plays; live dot `pulse` 1600ms while a set is live.
- Easing: `standard` for movement, `emphasized` (slight spring) for things arriving, `exit` for things leaving.
- **MUST** respect `prefers-reduced-motion`: freeze the equalizer, stop the pulse, replace slides with fades. No information may be carried by motion alone.

## 8. Accessibility contract

These are acceptance criteria, not suggestions.

- [ ] Text contrast ≥ 4.5:1 (≥ 3:1 for text 24px+ or 18.5px bold). Deep berry ink (`color/text/primary`) on any glass level passes (11.8:1 on default glass).
- [ ] Touch targets ≥ 44×44.
- [ ] State is never shown by color alone (LIVE has text; toggles change icon shape).
- [ ] Icon-only buttons have accessible names that include the subject.
- [ ] Visible focus ring: 2px `color/text/primary`, 3px offset.
- [ ] Real semantics: `<button>`, `<a href>`, `<input type="range">`; tabs use `aria-current="page"`; toggles use `aria-pressed`.
- [ ] Layout survives 200% text size without clipping.

## 9. Anti-patterns (seen in drafts — don't repeat them)

- White text on light glass because "it looks airy".
- A thick berry border to highlight the current schedule slot (use elevation instead).
- The live red used for anything that isn't live, or a red dot without the LIVE or ON AIR label.
- Glass card inside a glass panel.
- A seek bar on a live stream.
- Hard-coded hex values or pixel numbers instead of tokens.
- Recoloring a DJ tile by hand instead of switching its genre.

## 10. How agents should work with this system

1. **Read first:** this file, then the Figma variables and component descriptions (via the Figma MCP).
2. **Reuse before you create.** Search the library for an existing component; compose from components before drawing anything new.
3. **Tokens only.** Every color, space, radius, blur and duration must reference a token. In code, use the CSS name from the token's code syntax.
4. **When nothing fits:** apply the decision rules in section 4. If two rules conflict, or the rules don't cover it, **stop and ask** instead of inventing a new pattern.
5. **New components** need: a description (purpose, when to use, when not to), variants named `Property=Value`, token-bound properties, and an accessibility note. Then add a row to section 5.
6. **Check before you finish:** run the accessibility contract (section 8) and the anti-patterns list (section 9).

## 11. Machine-readable summary

```yaml
intent:
  primary_job: "Show who is live right now, filtered by taste"
  hero: live_status
color_meaning:
  color/status/live: "happening right now — reserved"
  color/status/on-air: "the current schedule slot — reserved"
  color/genre/*: "DJ identity — gradient start, chosen by genre, never by hand"
  color/genre/*-end: "DJ identity — gradient end (two steps lighter, min pink/400)"
  color/accent/default: "selected / primary"
materials:
  Glass/Subtle: player panels
  Glass/Card: cards and rows
  Glass/Raised: floating chrome
  Glass/Elevated: { use: "single most important item", max_per_screen: 1 }
  rules: [no_glass_on_glass, full_recipe_required]
typography:
  display: { family: Syne, weight: 800, case: upper, max_words: 3, use: [titles, cover_art, initials] }
  ui: { family: Manrope, weights: [500, 600, 700, 800] }
spacing: { scale: tailwind, unit_px: 4, screen_margin: spacing/6, touch_min: 44 }
motion:
  meaning: "sound is happening"
  durations_ms: { fast: 150, base: 250, slow: 400, eq: 900, pulse: 1600 }
  reduced_motion: [freeze_eq, stop_pulse, fade_instead_of_slide]
themes: { modes: [Pink, Purple], default: Pink, live_color: "live/500 #E0123F, same in every theme" }
hard_constraints:
  - no_white_text_on_light_glass
  - live_always_labeled
  - live_red_only_for_live
  - one_primary_action_per_surface
  - live_uses_stop_not_pause
  - no_seek_bar_on_live
  - tokens_only
  - touch_target_min_44
when_unsure: ask_human
```