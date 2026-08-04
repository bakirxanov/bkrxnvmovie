import { notFound } from "next/navigation";
import MovieDetail from "@/components/MovieDetail";
import { getPremiereById } from "@/lib/data/premieres";

export default async function PremiereDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const premiere = getPremiereById(Number(id));

  if (!premiere) {
    notFound();
  }

  return <MovieDetail movie={premiere} backHref="/premieres" backLabel="Premyeralarga qaytish" />;
}
