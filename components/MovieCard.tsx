import Link from "next/link";
import type { Movie } from "@/types/movie";

interface MovieCardProps {
  movie: Movie;
  category: string; // e.g. "movies", "serials", "cartoons", "premieres"
}

function PlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 5v14l12-7L7 5Z" fill="#ffe38a" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2.5l2.9 6.3 6.9.7-5.2 4.7 1.5 6.8L12 17.6 5.9 21l1.5-6.8-5.2-4.7 6.9-.7L12 2.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

// A single responsive card: poster, title, genre, meta info and a "Watch" button.
// The "Watch" button is a Link to the dynamic details page: /<category>/<id>
export default function MovieCard({ movie, category }: MovieCardProps) {
  return (
    <div className="movie-card">
      {/* Using a plain <img> keeps this beginner-friendly and avoids extra
          Next/Image config for external placeholder image domains. */}
      <div className="movie-card-poster">
        <img src={movie.poster} alt={movie.title} loading="lazy" />
        <span className="rating-badge">
          <StarIcon /> {movie.rating.toFixed(1)}
        </span>
        <div className="play-badge" aria-hidden="true">
          <PlayIcon />
        </div>
      </div>
      <div className="movie-card-body">
        <div className="movie-card-title">{movie.title || "Nomsiz"}</div>
        <div className="movie-card-genre">{movie.genre}</div>
        <div className="movie-card-meta">
          <span>{movie.country}</span>
          <span className="meta-year">{movie.year}</span>
        </div>
        <Link href={`/${category}/${movie.id}`} className="watch-btn">
          <PlayIcon /> Ko'rish
        </Link>
      </div>
    </div>
  );
}
