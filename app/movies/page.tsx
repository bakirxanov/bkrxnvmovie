import CatalogGrid from "@/components/CatalogGrid";
import { getAllMovies } from "@/lib/data/movies";

// Server Component: reads the in-memory "database" directly. No network
// round-trip to our own API is needed for internal rendering, which keeps
// this fast and avoids the classic "fetch to localhost fails in
// production" bug when this project deploys somewhere other than
// localhost:3000 (e.g. Vercel).
export default function MoviesPage() {
  const movies = getAllMovies();

  return (
    <div className="container">
      <h1 className="page-title">Kinolar</h1>
      <CatalogGrid items={movies} category="movies" emptyLabel="Hozircha kinolar mavjud emas." />
    </div>
  );
}
