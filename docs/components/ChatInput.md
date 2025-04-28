# ChatInput Component

## Description

The `ChatInput` component provides a floating text input area pinned to the bottom of the viewport, used for entering chat messages or search queries. It features auto-resizing based on content and includes a send button.

It adjusts its horizontal position and width based on the sidebar's collapsed state.

**Note:** Current implementation has known positioning issues on smaller screen breakpoints when the sidebar is expanded.

## Props

| Prop                | Type      | Description                                      | Default |
| :------------------ | :-------- | :----------------------------------------------- | :------ |
| `isSidebarCollapsed` | `boolean` | Current collapsed state of the sidebar.         |         |
| `className`         | `string`  | Optional additional classes for the wrapper div. |         |

## Usage

Rendered within `LayoutClient`.

```tsx
// src/components/layout-client.tsx
import ChatInput from "@/components/chat-input";

// ...
<ChatInput isSidebarCollapsed={isSidebarCollapsed} />
// ...
```

## Features

- **Floating Design**: Uses `fixed` positioning to stay at the bottom of the viewport.
- **Responsive**: Adapts width and position based on screen size and sidebar state.
- **Auto-Resizing**: Textarea height grows with content (up to `max-h-48`).
- **Send Action**: Includes a send button (`SendHorizontal` icon) and handles Enter key press (without Shift) for submission.
- **Scrollbar Hiding**: Uses `scrollbar-hide` class (requires CSS definition in `globals.css`).

## Dependencies

- `@/components/ui/textarea` (shadcn/ui)
- `@/components/ui/button` (shadcn/ui)
- `lucide-react` (for `SendHorizontal` icon)
- `@/lib/utils` (for `cn` utility) 