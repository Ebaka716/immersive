# systemPatterns.md

## System Patterns
This file documents system architecture, key technical decisions, design patterns, component relationships, and critical implementation paths.

## Layout Structure
- **RootLayout (`src/app/layout.tsx`)**: Server Component responsible for the root `<html>` and `<body>` structure and exporting global `metadata`. It wraps the application in necessary context providers (if any) and renders `LayoutClient`.
- **LayoutClient (`src/components/layout-client.tsx`)**: Client Component responsible for rendering the main persistent UI elements (Header, Sidebar) and managing shared layout state (e.g., `isSidebarCollapsed`). It receives page `children` and renders them within the appropriate content area.
  - This pattern separates server-only concerns (metadata) from client-side state management and interactions required by the dynamic layout.

## Component Relationships
- `RootLayout` -> `LayoutClient`
- `LayoutClient` -> `Header`, `Sidebar`, `ChatInput`, `{children}` (Page Content)
- `Header` <- `isSidebarCollapsed`, `onToggleSidebar` (from `LayoutClient`)
- `Sidebar` <- `isCollapsed` (from `LayoutClient`)
- `ChatInput` <- `isSidebarCollapsed` (from `LayoutClient`)

## Core UI Patterns
- **Collapsible Sidebar**: State managed in `LayoutClient`, passed down to `Sidebar` (for width/content changes) and `Header` (for toggle button). Main content padding in `LayoutClient` adjusts based on state.
- **Floating Chat Input**: `ChatInput` component uses `fixed` positioning relative to the viewport. It receives sidebar state to conditionally adjust its horizontal position/width to avoid overlapping the sidebar. (Note: Current implementation has issues on smaller breakpoints).

## Key Technical Decisions
- Using Next.js App Router.
- Leveraging shadcn/ui components for base UI elements.
- Using Tailwind CSS for styling.
- Implementing stateful layout logic within a dedicated Client Component (`LayoutClient`).

- [ ] Map remaining component relationships as they are built.
- [ ] Outline critical implementation paths for chat/search features. 