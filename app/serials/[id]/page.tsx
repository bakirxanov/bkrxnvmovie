import { notFound } from "next/navigation";
import MovieDetail from "@/components/MovieDetail";
import { getBaseUrl } from "@/lib/getBaseUrl";
import type { Movie } from "@/types/movie";

async function getSerial(id: string): Promise<Movie | undefined> {
  const res = await fetch(`${getBaseUrl()}/api/serials`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch serials");
  }

  const serials: Movie[] = await res.json();
  return serials.find((s) => s.id === Number(id));
}

export default async function SerialDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const serial = await getSerial(id);

  if (!serial) {
    notFound();
  }

  return <MovieDetail movie={serial} backHref="/serials" backLabel="Seriallarga qaytish" />;
}
