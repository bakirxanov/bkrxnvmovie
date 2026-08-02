import MovieCard from "@/components/MovieCard";
import { getBaseUrl } from "@/lib/getBaseUrl";
import type { Movie } from "@/types/movie";

interface CategoryResult {
  category: string;
  label: string;
  items: Movie[];
}

async function getCategory(path: string): Promise<Movie[]> {
  const res = await fetch(`${getBaseUrl()}/api/${path}`, { cache: "no-store" });
  if (!res.ok) return [];
  return res.json();
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = (q ?? "").trim();

  const [movies, serials, cartoons, premieres] = await Promise.all([
    getCategory("movies"),
    getCategory("serials"),
    getCategory("cartoons"),
    getCategory("premieres"),
  ]);

  const source: CategoryResult[] = [
    { category: "movies", label: "Kinolar", items: movies },
    { category: "serials", label: "Seriallar", items: serials },
    { category: "cartoons", label: "Multfilmlar", items: cartoons },
    { category: "premieres", label: "Premyeralar", items: premieres },
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
