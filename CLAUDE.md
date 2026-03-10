# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
npm run dev      # Start local dev server at http://localhost:3000
npm run build    # Build for production
npm run lint     # Run ESLint
npm start        # Start production server
```

No test suite is configured.

## Architecture

**Next.js 15 App Router** personal website deployed on Vercel, with Cloudflare for DNS.

### Content pattern
Pages are written in **MDX** (`.mdx` files treated as pages via `next.config.ts`). MDX components are customized in `mdx-components.tsx` and `components/mdx.tsx`. This lets content pages use React components inline.

### Key routes
- `/` → `app/page.mdx` — home/bio
- `/experiments` → `app/experiments/page.tsx` — grid of prototypes (data defined inline in the file)
- `/research` → `app/research/page.mdx` — freelance portfolio

### Component conventions
- Server components by default; add `"use client"` only when state/interactivity is needed (see `Collapsible.tsx`, `ExperimentsGrid.tsx`)
- `components/` holds reusable UI: `Button`, `Header`, `Footer`, `SocialLinks`, `Collapsible`
- Styling is Tailwind utility classes throughout; global CSS variables for colors are in `styles/globals.css`

### Adding experiments
Experiments are defined as a plain array of objects in `app/experiments/page.tsx`. Each entry needs: `title`, `href` (external link), `problem`, `solution`.

### Styling notes
- Background color: `#FAF9F6` (light beige), set in `app/layout.tsx`
- Max content width: `max-w-5xl`
- Typography plugin configured in `tailwind.config.ts` with custom `h1`, `h3`, and `hr` overrides
- Path alias `@/*` maps to the repo root
