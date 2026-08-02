import Link from "next/link";
import type { Movie } from "@/types/movie";

interface MovieDetailProps {
  movie: Movie;
  backHref: string;
  backLabel: string;
}

function BackArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M19 12H5M11 6l-6 6 6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2.5l2.9 6.3 6.9.7-5.2 4.7 1.5 6.8L12 17.6 5.9 21l1.5-6.8-5.2-4.7 6.9-.7L12 2.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7v5l3.2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 5v14l12-7L7 5Z" fill="currentColor" />
    </svg>
  );
}

// Turns a duration in minutes into a "1s 42d" style Uzbek label.
function formatDuration(minutes: number): string {
  if (minutes >= 60) {
    const hours = Math.floor(minutes / 60);
    const rest = minutes % 60;
    return rest > 0 ? `${hours}s ${rest}d` : `${hours}s`;
  }
  return `${minutes} daqiqa`;
}

// Renders the full details page for a single title: a hero banner directly
// under the navbar, then a poster + info block, and the video player below.
export default function MovieDetail({ movie, backHref, backLabel }: MovieDetailProps) {
  return (
    <>
      {/* Hero banner — one large image about this title, right under the navbar */}
      <div className="details-hero">
        <img src={movie.poster} alt="" aria-hidden="true" className="details-hero-img" />
        <div className="details-hero-overlay" />
        <div className="details-hero-content container">
          <Link href={backHref} className="back-link">
            <BackArrow /> {backLabel}
          </Link>
          <span className="details-hero-genre">{movie.genre}</span>
          <h1>{movie.title || "Nomsiz"}</h1>
          <div className="details-hero-meta">
            <span className="meta-pill meta-pill-rating">
              <StarIcon /> {movie.rating.toFixed(1)}
            </span>
            <span className="meta-pill">{movie.year}</span>
            <span className="meta-pill">{movie.country}</span>
            <span className="meta-pill">
              <ClockIcon /> {formatDuration(movie.duration)}
            </span>
          </div>
        </div>
      </div>

      {/* Below the hero: poster card, full info, and the video player */}
      <div className="container details-body">
        <div className="details-wrapper">
          <div className="details-poster-frame">
            <img src={movie.poster} alt={movie.title} className="details-poster" />
          </div>

          <div className="details-info">
            <dl className="details-facts">
              <div>
                <dt>Janr</dt>
                <dd>{movie.genre}</dd>
              </div>
              <div>
                <dt>Rejissyor</dt>
                <dd>{movie.director}</dd>
              </div>
              <div>
                <dt>Davlat</dt>
                <dd>{movie.country}</dd>
              </div>
              <div>
                <dt>Yil</dt>
                <dd>{movie.year}</dd>
              </div>
              <div>
                <dt>Davomiyligi</dt>
                <dd>{formatDuration(movie.duration)}</dd>
              </div>
              <div>
                <dt>Reyting</dt>
                <dd>{movie.rating.toFixed(1)} / 10</dd>
              </div>
            </dl>

            <h2 className="details-subheading">Qisqacha mazmuni</h2>
            <p className="details-description">{movie.description}</p>
          </div>
        </div>

        <h2 className="details-subheading video-heading">
          <PlayIcon /> Tomosha qilish
        </h2>
        <div className="video-frame">
          <video className="video-player" controls src={movie.video}>
            Kechirasiz, brauzeringiz video formatini qo'llab-quvvatlamaydi.
          </video>
        </div>
      </div>
    </>
  );
}
