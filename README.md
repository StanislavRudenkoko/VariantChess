# VariantChess

A modern chess platform for playing and combining multiple chess variants.

## Tech stack

- Frontend: Vite + React + TypeScript + Tailwind CSS v4
- State & UX: Zustand for UI/board state, dnd-kit for drag-and-drop
- Game logic: chess.js baseline with custom TypeScript rules for fog of war, duck chess, crazyhouse, and spells/items
- Backend: Node + Express (or Fastify) in TypeScript; REST for profile/auth and WebSocket (ws) for live games and matchmaking
- Data: Postgres + Prisma; Redis optional for presence/queues if desired
- Testing: Vitest + React Testing Library; a few unit tests for variant rules; one Playwright happy-path e2e
- Dev/ops: ESLint + Prettier + TS strict; npm/pnpm workspaces (web + api); Dockerfile for API; deploy web on Vercel/Netlify and API on Fly.io/Render/Railway

## Variant rotation ideas

- Fog of war
- Duck chess
- Crazyhouse
- Spells/items (usable inventory that can persist across variant changes)

## Match flow (draft)

- Find opponent and assign colors randomly (50/50)
- Start the chess game with move counter
- Apply a variant every 3 moves; each lasts until the next event
- Inventory items may persist across variant changes until used
