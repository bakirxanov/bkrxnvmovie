import { notFound } from "next/navigation";
import MovieDetail from "@/components/MovieDetail";
import { getBaseUrl } from "@/lib/getBaseUrl";
import type { Movie } from "@/types/movie";

async function getPremiere(id: string): Promise<Movie | undefined> {
  const res = await fetch(`${getBaseUrl()}/api/premieres`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch premieres");
  }

  const premieres: Movie[] = await res.json();
  return premieres.find((p) => p.id === Number(id));
}

export default async function PremiereDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const premiere = await getPremiere(id);

  if (!premiere) {
    notFound();
  }

  return <MovieDetail movie={premiere} backHref="/premieres" backLabel="Premyeralarga qaytish" />;
}
