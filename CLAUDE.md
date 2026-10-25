# CLAUDE.md — Lateset

Claude Code loads this file every session. Shared instructions live in the files imported below,
so every agent (not just Claude) follows the same rules.

<!-- Imports resolve relative to this file: AGENTS.md and DESIGN.md sit next to it at the repo root. -->
@AGENTS.md
@DESIGN.md

## Claude-specific notes

- Use the Figma MCP tools to read the design file before building UI. Prefer a frame link with a
  `node-id` so you read exactly the screen or component being discussed.
- If Figma says you don't have edit access, tell me which Figma account you're connected as —
  don't keep retrying.
- Ask before creating a new component, token, or pattern. Propose the smallest option that reuses
  what exists.
- When you change a token or component in code, tell me which Figma variable or component is its
  twin and needs the matching update (see "What's in the repo" in `AGENTS.md`).
- When you edit `DESIGN.md`, `AGENTS.md` or this file, remind me to paste the change back to the
  Design.md page in Figma.
- Keep changes small and show me the diff summary when you finish.
