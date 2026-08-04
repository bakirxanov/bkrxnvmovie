import MovieCard from "@/components/MovieCard";
import { getAllMovies } from "@/lib/data/movies";
import { getAllSerials } from "@/lib/data/serials";
import { getAllCartoons } from "@/lib/data/cartoons";
import { getAllPremieres } from "@/lib/data/premieres";
import type { CatalogItem } from "@/types/movie";

interface CategoryResult {
  category: string;
  label: string;
  items: CatalogItem[];
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = (q ?? "").trim();

  const source: CategoryResult[] = [
    { category: "movies", label: "Kinolar", items: getAllMovies() },
    { category: "serials", label: "Seriallar", items: getAllSerials() },
    { category: "cartoons", label: "Multfilmlar", items: getAllCartoons() },
    { category: "premieres", label: "Premyeralar", items: getAllPremieres() },
  ];

  const lowerQuery = query.toLowerCase();
  const results = source
    .map((group) => ({
      ...group,
      items: group.items.filter((item) => item.title.toLowerCase().includes(lowerQuery)),
    }))
    .filter((group) => group.items.length > 0);

  const totalCount = results.reduce((sum, group) => sum + group.items.length, 0);

  return (
    <div className="container">
      <h1 className="page-title">
        {query ? `"${query}" bo'yicha qidiruv natijalari` : "Qidiruv"}
      </h1>

      {query.length === 0 ? (
        <p className="empty-state">Qidirish uchun yuqoridagi qidiruv maydonidan foydalaning.</p>
      ) : totalCount === 0 ? (
        <p className="empty-state">
          &quot;{query}&quot; bo&apos;yicha hech narsa topilmadi. Boshqa kalit so&apos;z bilan
          qidirib ko&apos;ring.
        </p>
      ) : (
        <>
          <p className="results-count">{totalCount} ta natija topildi</p>
          {results.map((group) => (
            <section key={group.category} className="search-group">
              <h2 className="details-subheading">{group.label}</h2>
              <div className="movie-grid">
                {group.items.map((item) => (
                  <MovieCard key={item.id} movie={item} category={group.category} />
                ))}
              </div>
            </section>
          ))}
        </>
      )}
    </div>
  );
}
