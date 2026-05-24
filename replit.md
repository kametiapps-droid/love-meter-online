# Love Calculator

A multi-page React + Vite love compatibility app with tools including a love calculator, zodiac compatibility checker, love quiz, daily horoscope, name generators, and a blog.

## Run & Operate

- `npm run dev` — start the dev server (port 5000)
- `npm run build` — production build (outputs to `dist/`)
- `npm run preview` — preview the production build locally
- `npm run lint` — lint the codebase
- `npm run test` — run tests with Vitest

## Stack

- React 18, TypeScript, Vite 5
- Tailwind CSS 3 + shadcn/ui (Radix UI primitives)
- React Router v6
- TanStack Query v5
- React Hook Form + Zod validation
- Vitest + Testing Library

## Where things live

- `src/` — all React source code and components
- `public/` — static assets (images, icons, sitemap, robots.txt)
- `blog/` — static HTML blog pages
- `*.html` — individual multi-page entry points (love-calculator.html, zodiac-compatibility.html, etc.)
- `vercel.json` — Vercel deployment config with rewrites, redirects, and cache headers
- `vite.config.ts` — Vite config (port 5000, host 0.0.0.0 for Replit)

## Deployment (Vercel)

The project is configured for Vercel deployment out of the box:
- `vercel.json` contains all rewrites, redirects, security headers, and cache rules
- Build command: `npm run build`
- Output directory: `dist`
- No environment variables required for the frontend

## User preferences

- Clean project structure — no monorepo scaffolding
- Vercel as the deployment target
