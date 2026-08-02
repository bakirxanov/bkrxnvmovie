import CatalogGrid from "@/components/CatalogGrid";
import { getBaseUrl } from "@/lib/getBaseUrl";
import type { Movie } from "@/types/movie";

// Server Component that fetches the cartoons list from our own API route.
async function getCartoons(): Promise<Movie[]> {
  const res = await fetch(`${getBaseUrl()}/api/cartoons`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch cartoons");
  }

  return res.json();
}

export default async function CartoonsPage() {
  const cartoons = await getCartoons();

  return (
    <div className="container">
      <h1 className="page-title">Multfilmlar</h1>
      <CatalogGrid items={cartoons} category="cartoons" emptyLabel="Hozircha multfilmlar mavjud emas." />
    </div>
  );
}
