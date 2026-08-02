// Server Components can't use relative URLs ("/api/movies") with fetch(),
// they need a full absolute URL (e.g. "http://localhost:3000/api/movies").
// This helper builds that base URL.
//
// - In development / production you can set NEXT_PUBLIC_BASE_URL in your
//   .env file (e.g. https://your-domain.com).
// - If it's not set, we fall back to localhost:3000, which works for
//   `npm run dev` and `npm run build && npm start` out of the box.
export function getBaseUrl(): string {
  return process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
}
