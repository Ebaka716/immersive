# Header Component

## Description

The `Header` component displays the fixed top navigation bar of the application. It includes the application title and a button to toggle the sidebar's collapsed state.

## Props

| Prop                | Type         | Description                                     | Default |
| :------------------ | :----------- | :---------------------------------------------- | :------ |
| `isSidebarCollapsed` | `boolean`    | Current collapsed state of the sidebar.        |         |
| `onToggleSidebar`    | `() => void` | Callback function to toggle the sidebar state. |         |

## Usage

Rendered within `LayoutClient`.

```tsx
// src/components/layout-client.tsx
import Header from "@/components/header";

// ...
<Header isSidebarCollapsed={isSidebarCollapsed} onToggleSidebar={toggleSidebar} />
// ...
```

## Dependencies

- `@/components/ui/button` (shadcn/ui)
- `lucide-react` (for icons `PanelLeftClose`, `PanelRightClose`) 