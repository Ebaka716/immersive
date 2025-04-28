# techContext.md

## Technical Context
This file covers technologies used, development setup, technical constraints, dependencies, and tool usage patterns.

## Technologies
- Next.js (App Router)
- React
- TypeScript
- shadcn/ui (Component Library)
- Tailwind CSS
- Jest / React Testing Library (Unit Tests)
- Cypress (E2E Tests)
- Vercel (Deployment)

## Development Setup
- Node.js/npm
- `npx create-next-app` for scaffolding.
- `npx shadcn-ui@latest init` for UI library setup.
- Git for version control.

## Constraints
- Must work within the existing `immersive/` directory.
- Use shadcn components preferentially.
- Must build cleanly on Vercel.

## Dependencies
- Managed via `package.json`.

## Tool Usage
- `npm` for package management and scripts.
- `git` for version control (using `feature/`, `fix/`, `doc/`, `chore/` branches).
- Commit hooks for linting, type-checking, building. 