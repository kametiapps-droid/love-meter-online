---
name: Vite 5 async CSS plugin
description: Correct API for a post-processing transformIndexHtml hook in Vite 5
---

In Vite 5, `transformIndexHtml` hooks use `order: 'post'` and `handler()`, NOT the old Vite 4 `enforce: 'post'` + `transform()` API.

**Why:** The API changed between Vite 4 and 5. Using old API causes "Cannot read properties of undefined (reading 'call')" build crash.

**How to apply:**
```ts
{
  name: "async-main-css",
  apply: "build" as const,
  transformIndexHtml: {
    order: "post" as const,
    handler(html: string) {
      return html.replace(...);
    },
  },
}
```
