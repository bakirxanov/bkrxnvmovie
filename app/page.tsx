import Link from "next/link";
import HeroSwiper from "@/components/HeroSwiper";
import MovieCard from "@/components/MovieCard";
import { getAllMovies } from "@/lib/data/movies";

function FilmIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <rect x="2.5" y="4" width="19" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M2.5 8.5h19M2.5 15.5h19" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7.5 4v4.5M7.5 15.5V20M16.5 4v4.5M16.5 15.5V20" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function TvIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 21h8M12 18v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function CartoonIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="9" cy="10" r="1.1" fill="currentColor" />
      <circle cx="15" cy="10" r="1.1" fill="currentColor" />
      <path
        d="M8.5 14.5c1 1.2 2.2 1.8 3.5 1.8s2.5-.6 3.5-1.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
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

// Home page is a plain Server Component: it reads the in-memory movie
// "database" directly (no self-fetch over HTTP), so it always renders the
// same on localhost and once deployed.
export default function HomePage() {
  const movies = getAllMovies();
  const heroSlides = movies.slice(0, 5);
  const featured = movies.slice(0, 5);

  return (
    <>
      {/* Big, auto-sliding banner right under the navbar */}
      <HeroSwiper slides={heroSlides} category="movies" />

      <section className="quick-categories container">
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
          <h2 className="page-title">So&apos;nggi qo&apos;shilgan kinolar</h2>

          <Link href="/movies" className="section-link">
            Barchasini ko&apos;rish →
          </Link>
        </div>

        {featured.length === 0 ? (
          <p style={{ textAlign: "center", padding: "40px" }}>
            Hozircha kinolar mavjud emas.
          </p>
        ) : (
          <div className="movie-grid">
            {featured.map((movie) => (
              <MovieCard key={movie.id} movie={movie} category="movies" />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
