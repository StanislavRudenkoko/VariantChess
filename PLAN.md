# VariantChess Development Plan

## Milestone 1 — Project foundation
- Initialize monorepo or workspaces (web + api), set up ESLint/Prettier/TS strict.
- Configure Vite + React + TypeScript + Tailwind v4 on the web app.
- Add basic layout and style pipeline check (`npm run build` for CSS).
- Set up GitHub Actions for lint/test/build on PRs.

## Milestone 2 — Core chess & variant engine (client-first)
- Integrate chess.js for move legality and game state.
- Implement custom variant layer in TypeScript:
  - Fog of war (hidden opponent pieces outside vision).
  - Duck chess (place duck, block squares).
  - Crazyhouse (drops from captured pieces).
  - Spells/items (inventory with simple effects).
- Create board UI with dnd-kit drag/drop and variant indicators.
- Add local-vs-local play mode to validate rules without backend.
- Unit tests for variant logic (Vitest).

## Milestone 3 — Backend API and real-time play
- Stand up Node + Express/Fastify (TypeScript) with REST for users/profiles/auth stub.
- Implement WebSocket (ws) service for matchmaking and live games.
- Design game session model and events (join, start, move, variant tick, resign, draw).
- Add simple matchmaking queue; optional Redis for presence/queues if needed.
- Persist users/games in Postgres via Prisma migrations.
- Server-side validation of moves/variant effects.

## Milestone 4 — Frontend integration with backend
- Wire react-query for data fetching and WebSocket hooks for live updates.
- Lobby UI: list/join/create games, show opponent status.
- In-game UI: timers, move list, variant countdown, inventory/spells panel.
- Handle reconnect/resume flow and basic error toasts.

## Milestone 5 — Polish and UX
- Responsive layout and light theming with Tailwind.
- Add onboarding/help overlays explaining each variant.
- Accessibility passes: focus states, keyboard move support, ARIA on board/controls.
- Analytics/logging hooks (optional) and minimal settings (sound, highlight, theme).

## Milestone 6 — Testing and quality gates
- Unit tests: variant rules, timers, inventory effects.
- Integration tests: game flow happy path, variant transitions.
- E2E: Playwright happy path (matchmaking → play → variant swap → game end).
- Linting/formatting in CI; pre-commit hooks via lint-staged.

## Milestone 7 — Deployment and demos
- Dockerfile for API; deploy API to Fly.io/Render/Railway.
- Deploy web to Vercel/Netlify; configure env vars for API/WebSocket URL.
- Seed script for demo users and sample games.
- Write short demo script and screenshots/gif for the README.

## Stretch ideas (optional)
- Ratings/elo, leaderboards, and player profiles.
- Time controls (blitz/rapid) and increment support.
- Spectator mode and live game list.
- Additional variants or custom variant builder.

