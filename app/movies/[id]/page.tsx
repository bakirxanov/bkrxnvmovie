import { notFound } from "next/navigation";
import MovieDetail from "@/components/MovieDetail";
import { getBaseUrl } from "@/lib/getBaseUrl";
import type { Movie } from "@/types/movie";

// Fetch the full movies list, then find the one matching the id.
// (Simple approach: no single-item API endpoint needed since the dataset is small.)
async function getMovie(id: string): Promise<Movie | undefined> {
  const res = await fetch(`${getBaseUrl()}/api/movies`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }

  const movies: Movie[] = await res.json();
  return movies.find((m) => m.id === Number(id));
}

// In Next.js 15, `params` is a Promise and must be awaited.
export default async function MovieDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const movie = await getMovie(id);

  if (!movie) {
    notFound();
  }

  return <MovieDetail movie={movie} backHref="/movies" backLabel="Kinolarga qaytish" />;
}
