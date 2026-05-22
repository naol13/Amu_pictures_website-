# Amu Pictures — Ethiopian Photography & Cinematic Films

A modern web app for **Amu Pictures**, showcasing Ethiopian photography/videography (Habesha weddings, graduations, cultural events, and family stories) with a cinematic, scroll-friendly landing page.

## Features

- Single-page marketing site (Home route)
- Responsive UI built with **React + TypeScript**
- UI components powered by **shadcn/ui**-style primitives (Radix UI)
- Routing with **@tanstack/react-router**
- Data fetching/cache support via **@tanstack/react-query**
- Built for deployment on **Cloudflare Workers** (Wrangler config present)

## Tech Stack

- **React 19**
- **TypeScript**
- **Vite**
- **TanStack Router + Start**
- **TanStack React Query**
- **Tailwind CSS**
- **Cloudflare/Vite plugin** + **Wrangler**

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm (or bun, since `bun.lock` is present)

### Install

```bash
npm install
```

### Run (dev)

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Lint / Format

```bash
npm run lint
npm run format
```

## Project Structure (high level)

- `src/routes/` — TanStack Router routes
  - `src/routes/__root.tsx` — app shell, providers, error/404 handling
  - `src/routes/index.tsx` — the home page composition (Nav, Hero, About, Services, Portfolio, Testimonials, Booking, Footer)
- `src/components/` — UI and site sections
  - `src/components/site/*` — page sections
  - `src/components/ui/*` — reusable UI primitives
- `src/server.ts` / `src/start.ts` — TanStack Start server + middleware (error handling)
- `src/assets/` — images used by the site
- `src/styles.css` — global styles (imported via CSS URL in the app root)

## Deployment (Cloudflare Workers)

This project includes `wrangler.jsonc` and is configured to use Cloudflare-compatible server entry.

Typical flow:

1. Build the app:
   ```bash
   npm run build
   ```
2. Deploy with Wrangler (adjust environment if needed):
   ```bash
   wrangler deploy
   ```

## Notes

- The app uses TanStack Start SSR error wrappers to normalize catastrophic SSR failures into a consistent 500 error page.
- If you add new routes, follow the existing `src/routes/*` pattern.

## License

Add your project license here (or remove this section if not needed).

