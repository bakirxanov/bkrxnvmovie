import CatalogGrid from "@/components/CatalogGrid";
import { getBaseUrl } from "@/lib/getBaseUrl";
import type { Movie } from "@/types/movie";

// Server Component that fetches the premieres list from our own API route.
async function getPremieres(): Promise<Movie[]> {
  const res = await fetch(`${getBaseUrl()}/api/premieres`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch premieres");
  }

  return res.json();
}

export default async function PremieresPage() {
  const premieres = await getPremieres();

  return (
    <div className="container">
      <h1 className="page-title">Premyeralar</h1>
      <CatalogGrid items={premieres} category="premieres" emptyLabel="Hozircha premyeralar mavjud emas." />
    </div>
  );
}
