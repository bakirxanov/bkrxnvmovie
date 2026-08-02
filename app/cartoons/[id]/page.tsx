import { notFound } from "next/navigation";
import MovieDetail from "@/components/MovieDetail";
import { getBaseUrl } from "@/lib/getBaseUrl";
import type { Movie } from "@/types/movie";

async function getCartoon(id: string): Promise<Movie | undefined> {
  const res = await fetch(`${getBaseUrl()}/api/cartoons`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch cartoons");
  }

  const cartoons: Movie[] = await res.json();
  return cartoons.find((c) => c.id === Number(id));
}

export default async function CartoonDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const cartoon = await getCartoon(id);

  if (!cartoon) {
    notFound();
  }

  return <MovieDetail movie={cartoon} backHref="/cartoons" backLabel="Multfilmlarga qaytish" />;
}
