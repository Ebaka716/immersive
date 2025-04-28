# Sidebar Component

## Description

The `Sidebar` component displays the persistent left-hand navigation area. It includes primary actions like "New Search" and "History", and a footer area with a "Settings" button. It adapts its width and content visibility based on its collapsed state.

## Props

| Prop          | Type      | Description                                     | Default |
| :------------ | :-------- | :---------------------------------------------- | :------ |
| `isCollapsed` | `boolean` | Whether the sidebar should render in its collapsed state. |         |

## Usage

Rendered within `LayoutClient`.

```tsx
// src/components/layout-client.tsx
import Sidebar from "@/components/sidebar";

// ...
<Sidebar isCollapsed={isSidebarCollapsed} />
// ...
```

## Appearance

- **Expanded**: Width `w-64` (16rem), shows icons and text labels for buttons.
- **Collapsed**: Width `w-16` (4rem), shows only icons for buttons (labels available via `sr-only` for accessibility).

## Dependencies

- `@/components/ui/button` (shadcn/ui)
- `lucide-react` (for icons `PlusSquare`, `History`, `Settings`)
- `@/lib/utils` (for `cn` utility) 