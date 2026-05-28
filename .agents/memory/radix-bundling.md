---
name: Radix UI bundling strategy for Vite SPA
description: How to exclude Radix UI from the initial bundle for a React SPA
---

By default, adding Radix packages to `manualChunks.vendor-ui` forces them into the initial bundle even if only lazy-loaded pages use them. Remove them from manualChunks entirely.

**Why:** Vite/Rollup auto-splits dependencies into shared chunks per the pages that import them. Without explicit manualChunks, Radix only loads when the user navigates to a page that needs it. Saved ~32KB gzip on homepage initial load (vendor-ui: 71KB eliminated).

**How to apply:**
- Remove `@radix-ui/*` from manualChunks in vite.config.ts
- Remove unused wrapper components from App.tsx (TooltipProvider, Radix Toaster) that force Radix into the eagerly-loaded bundle
- Verify no eagerly-rendered component (Header, Footer, main page) uses any Radix primitive

**Note:** Remaining Radix packages end up in auto-named shared chunks bundled with the lazy pages that need them.
