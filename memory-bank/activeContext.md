# activeContext.md

## Active Context
This file tracks the current work focus, recent changes, next steps, active decisions, important patterns, and project insights.

## Current Work Focus
- Refining core UI layout (Header, Sidebar, Content Area).
- Integrating the floating chat input.
- Preparing for initial commit of layout features.

## Recent Changes
- Implemented collapsible sidebar with state managed in `LayoutClient`.
- Added `Button`, `Input`, `Textarea` components from shadcn.
- Added sidebar buttons (New Search, History, Settings) with icons.
- Implemented a floating, responsive chat input component (`ChatInput`) pinned to the bottom.
- Added conditional positioning to `ChatInput` to account for sidebar state (requires further refinement on small screens).
- Adjusted padding in main content area and on `ChatInput`.
- Added/removed borders and shadows on `ChatInput`.
- Made Send button in `ChatInput` vertically centered with ghost variant.
- Added CSS for hiding scrollbars (requires adding rules to `globals.css`).
- Created initial component documentation structure (`docs/components/`) and added docs for `LayoutClient`, `Header`, `Sidebar`, `ChatInput`.

## Next Steps
1.  Commit current layout features and documentation.
2.  **Revisit and fix `ChatInput`