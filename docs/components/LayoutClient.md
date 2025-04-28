# LayoutClient Component

## Description

`LayoutClient` is a **Client Component** responsible for rendering the main application layout structure, including the persistent `Header` and `Sidebar`, and managing shared layout state like sidebar collapse status. It wraps the page content (`children`).

This component is rendered by the root `RootLayout` (Server Component) to separate server-side concerns (like metadata) from client-side interactivity.

## Props

| Prop     | Type              | Description                         | Default |
| :------- | :---------------- | :---------------------------------- | :------ |
| children | `React.ReactNode` | The page content to render within the layout. |         |

## State

- `isSidebarCollapsed` (boolean): Tracks whether the sidebar is currently collapsed or expanded. Initialized to `false`.

## Usage

Rendered within `src/app/layout.tsx` to wrap the main application content.

```tsx
// src/app/layout.tsx
import LayoutClient from "@/components/layout-client";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <LayoutClient>{children}</LayoutClient>
    </html>
  );
}
```

It renders the `Header`, `Sidebar`, and `ChatInput`, passing necessary state (`isSidebarCollapsed`) and callbacks (`onToggleSidebar`) to them. 