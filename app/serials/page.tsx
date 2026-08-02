import CatalogGrid from "@/components/CatalogGrid";
import { getBaseUrl } from "@/lib/getBaseUrl";
import type { Movie } from "@/types/movie";

// Server Component that fetches the serials list from our own API route.
async function getSerials(): Promise<Movie[]> {
  const res = await fetch(`${getBaseUrl()}/api/serials`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch serials");
  }

  return res.json();
}

export default async function SerialsPage() {
  const serials = await getSerials();

  return (
    <div className="container">
      <h1 className="page-title">Seriallar</h1>
      <CatalogGrid items={serials} category="serials" emptyLabel="Hozircha seriallar mavjud emas." />
    </div>
  );
}
