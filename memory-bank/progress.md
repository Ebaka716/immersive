# progress.md

## Progress Tracking
This file tracks what works, what's left to build, current status, known issues, and the evolution of project decisions.

## What Works
- Next.js project scaffolded in `immersive/` root.
- shadcn/ui integrated.
- Basic page layout implemented (Header, collapsible Sidebar, Content Area) using `RootLayout` and `LayoutClient` pattern.
- Placeholder buttons added to Sidebar (New Search, History, Settings).
- Floating chat input (`ChatInput`) implemented with responsive width, state handling, and basic styling (shadow, border).
- Memory Bank files initialized and updated.
- Basic component documentation structure created (`docs/components/`) and initial docs written.

## What's Left to Build
- **Fix `ChatInput` positioning overlap with sidebar on smaller breakpoints.**
- Component documentation structure and content (`docs/`).
- Commit hooks (lint, type-check, build).
- Testing setup (Jest, Cypress) and initial tests.
- Vercel readiness checks and configuration (`vercel.json`, CI build check).
- Actual chat/search UI elements within the content area (panes, results, loading states).
- Plugin points for UI variations.
- [ ] **Automate documentation updates** to Memory Bank (per project brief).

## Current Status
- Core layout structure mostly complete, pending commit.
- Chat input implemented but requires positioning refinement.

## Known Issues
- `ChatInput` overlaps the expanded sidebar on smaller screen widths (below `md:` breakpoint) despite attempts at conditional positioning.
- `scrollbar-hide` class requires CSS rules to be added to `globals.css` to function.

## Evolution of Decisions
- Initial plan defined in `projectbrief.md`.
- Decided to separate layout into Server (`RootLayout`) and Client (`LayoutClient`) components to handle metadata and state correctly.
- Shifted `ChatInput` from being part of the main content flow to a `fixed` positioned element relative to the viewport.
- Opted to add shadcn components as needed. 