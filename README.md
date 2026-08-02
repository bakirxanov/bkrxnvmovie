# StreamApp — Next.js 15 Streaming Demo

A beginner-friendly Next.js 15 (App Router + TypeScript) project with four
content categories (Movies, Serials, Cartoons, Premieres), each with its own
page, its own API route, and its own dynamic details page. No database —
data is stored in plain in-memory arrays inside each API route.

## Project structure

```
streaming-app/
├── app/
│   ├── layout.tsx                # Shared header/navigation
│   ├── page.tsx                  # Home page with links to categories
│   ├── globals.css               # Global + responsive styles
│   ├── not-found.tsx             # Custom 404 page
│   ├── movies/
│   │   ├── page.tsx              # Movies list page
│   │   └── [id]/page.tsx         # Movie details page
│   ├── serials/
│   │   ├── page.tsx
│   │   └── [id]/page.tsx
│   ├── cartoons/
│   │   ├── page.tsx
│   │   └── [id]/page.tsx
│   ├── premieres/
│   │   ├── page.tsx
│   │   └── [id]/page.tsx
│   └── api/
│       ├── movies/route.ts       # GET /api/movies
│       ├── serials/route.ts      # GET /api/serials
│       ├── cartoons/route.ts     # GET /api/cartoons
│       └── premieres/route.ts    # GET /api/premieres
├── components/
│   └── MovieCard.tsx             # Reusable responsive card component
├── types/
│   └── movie.ts                  # Shared Movie TypeScript interface
├── lib/
│   └── getBaseUrl.ts             # Builds an absolute URL for server fetch()
├── package.json
├── tsconfig.json
└── next.config.mjs
```

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the dev server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## How it works

- Each category page (e.g. `app/movies/page.tsx`) is a **Server Component**
  that calls `fetch()` on its own API route (e.g. `/api/movies`) using
  `async/await`, then renders a responsive grid of `MovieCard` components.
- Each API route (e.g. `app/api/movies/route.ts`) stores its data in a
  simple TypeScript array and returns it with `NextResponse.json()`.
- Clicking **Watch** on a card links to a dynamic route like
  `/movies/1`, which re-fetches the category's API, finds the matching
  item by `id`, and renders a details page with a large poster, title,
  country, year, and an HTML5 `<video>` player.
- If an `id` doesn't match anything, `notFound()` is called and the
  custom `app/not-found.tsx` page is shown.

## Notes

- Server Components need an **absolute URL** to call `fetch()` on an
  internal API route. `lib/getBaseUrl.ts` provides this, defaulting to
  `http://localhost:3000`. If you deploy this app, set the
  `NEXT_PUBLIC_BASE_URL` environment variable to your real domain.
- Poster images use [picsum.photos](https://picsum.photos) placeholders,
  and videos use publicly available sample `.mp4` files from Google's
  demo video bucket — swap these out for your own content.
- All pages are responsive via a CSS grid (`grid-template-columns:
  repeat(auto-fill, minmax(200px, 1fr))`) that reflows automatically on
  smaller screens.
