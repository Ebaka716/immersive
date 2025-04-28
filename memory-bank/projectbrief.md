# projectbrief.md

## Foundation Document
This file defines the core requirements and goals of the project. It is the source of truth for project scope.

## Project Name: immersive

## Goals
1. Scaffold a Next.js application inside the existing `immersive/` folder.
2. Integrate the shadcn component library—import only shadcn components unless we explicitly decide to build a new one.
3. Build out a flexible, modular "immersive chat/search" interface inspired by Perplexity's UX:
   - Full-page layout: a fixed Header at top, a persistent Sidebar (using shadcn's Sidebar component) on the left, and a content area on the right.
   - Bottom-pinned chat/search input that spans the width between header and sidebar.
   - Configurable search/chat panes that can be shown, hidden, resized.
   - Plugin points for variations in prompt UI, result cards, loading states.
4. Automate documentation:
   - Generate Markdown docs next to each component under `docs/`.
   - After every major commit, upload updated docs to our "memory bank" (e.g., push to `docs/` and trigger our doc-upload script).
5. Git structure & workflows:
   - Keep root at the `immersive/` folder.
   - Branch naming: `feature/`, `fix/`, `doc/`, `chore/`.
   - Commit hooks to run lint, type-check, and `npm run build`.
6. Vercel readiness:
   - Add production build optimizations (image domains, dynamic imports, caching headers).
   - Verify `vercel.json` config for zero-downtime deploys.
   - Add a CI check to run `vercel build` locally.
7. Testing & QA:
   - Unit tests for each component with Jest/Testing Library.
   - End-to-end smoke tests (e.g., Cypress) for the core chat/search flow.
   - Linting and type-checking enforced before merge.

## Scope
- Interactive, testable "chat + search" UI prototype.
- Focus on front-end structure and component integration.
- Backend functionality is out of scope for this initial phase. 