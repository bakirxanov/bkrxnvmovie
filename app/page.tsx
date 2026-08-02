import Link from "next/link";
import MovieCard from "@/components/MovieCard";
import { getBaseUrl } from "@/lib/getBaseUrl";
import type { Movie } from "@/types/movie";

async function getMovies(): Promise<Movie[]> {
  const res = await fetch(`${getBaseUrl()}/api/movies`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch movies");
  return res.json();
}

function FilmIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2.5" y="4" width="19" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M2.5 8.5h19M2.5 15.5h19" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7.5 4v4.5M7.5 15.5V20M16.5 4v4.5M16.5 15.5V20" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function TvIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 21h8M12 18v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function CartoonIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="9" cy="10" r="1.1" fill="currentColor" />
      <circle cx="15" cy="10" r="1.1" fill="currentColor" />
      <path d="M8.5 14.5c1 1.2 2.2 1.8 3.5 1.8s2.5-.6 3.5-1.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2.5c.9 4 2.5 6.4 6.5 7.5-4 1.1-5.6 3.5-6.5 7.5-.9-4-2.5-6.4-6.5-7.5 4-1.1 5.6-3.5 6.5-7.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const CATEGORIES = [
  { href: "/movies", label: "Kinolar", icon: FilmIcon },
  { href: "/serials", label: "Seriallar", icon: TvIcon },
  { href: "/cartoons", label: "Multfilmlar", icon: CartoonIcon },
  { href: "/premieres", label: "Premyeralar", icon: SparkIcon },
];

export default async function HomePage() {
  const movies = await getMovies();
  const featured = movies.slice(0, 5);

  return (
    <>
      <section className="hero">
        <span className="hero-eyebrow">O'zbek tilidagi kino olami</span>
        <h1>BkrxnvMovie bilan har kecha kino kechasi</h1>
        <p>
          Kinolar, seriallar, multfilmlar va premyeralarni bir joydan toping —
          qidiruv va filtrlar bilan xohlagan filmingizni bir zumda toping.
        </p>
        <div className="category-links">
          {CATEGORIES.map(({ href, label, icon: Icon }) => (
            <Link key={href} href={href}>
              <span className="cat-icon">
                <Icon />
              </span>
              {label}
            </Link>
          ))}
        </div>
      </section>

      <section className="container featured-section">
        <div className="section-heading">
          <h2 className="page-title">So'nggi qo'shilgan kinolar</h2>
          <Link href="/movies" className="section-link">
            Barchasini ko'rish →
          </Link>
        </div>
        <div className="movie-grid">
          {featured.map((movie) => (
            <MovieCard key={movie.id} movie={movie} category="movies" />
          ))}
        </div>
      </section>
    </>
  );
}
