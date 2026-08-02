import CatalogGrid from "@/components/CatalogGrid";
import { getBaseUrl } from "@/lib/getBaseUrl";
import type { Movie } from "@/types/movie";

// This is a Server Component, so we can use async/await directly in it.
// It fetches the movies list from our own API route on every request.
async function getMovies(): Promise<Movie[]> {
  const res = await fetch(`${getBaseUrl()}/api/movies`, {
    cache: "no-store", // always get fresh data
  });

  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }

  return res.json();
}

export default async function MoviesPage() {
  const movies = await getMovies();

  return (
    <div className="container">
      <h1 className="page-title">Kinolar</h1>
      <CatalogGrid items={movies} category="movies" emptyLabel="Hozircha kinolar mavjud emas." />
    </div>
  );
}
