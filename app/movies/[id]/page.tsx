import { notFound } from "next/navigation";
import MovieDetail from "@/components/MovieDetail";
import { getMovieById } from "@/lib/data/movies";

// In Next.js 15, `params` is a Promise and must be awaited.
export default async function MovieDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const movie = getMovieById(Number(id));

  if (!movie) {
    notFound();
  }

  return <MovieDetail movie={movie} backHref="/movies" backLabel="Kinolarga qaytish" />;
}
