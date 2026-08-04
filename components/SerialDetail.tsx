"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Serial } from "@/types/movie";

interface SerialDetailProps {
  serial: Serial;
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

// Renders a serial's details page: hero banner, info block, then an
// interactive season / episode picker driving a single <video> player.
// The whole seasons -> episodes structure comes from one API response
// (GET /api/serials/:id), so switching episodes here never needs a
// separate network request.
export default function SerialDetail({ serial }: SerialDetailProps) {
  const [seasonIndex, setSeasonIndex] = useState(0);
  const [episodeIndex, setEpisodeIndex] = useState(0);

  const season = serial.seasons[seasonIndex];
  const episode = season?.episodes[episodeIndex];

  const totalEpisodes = useMemo(
    () => serial.seasons.reduce((sum, s) => sum + s.episodes.length, 0),
    [serial.seasons]
  );

  function selectSeason(index: number) {
    setSeasonIndex(index);
    setEpisodeIndex(0);
  }

  return (
    <>
      {/* Hero banner — one large image about this title, right under the navbar */}
      <div className="details-hero">
        <img src={serial.poster} alt="" aria-hidden="true" className="details-hero-img" />
        <div className="details-hero-overlay" />
        <div className="details-hero-content container">
          <Link href="/serials" className="back-link">
            <BackArrow /> Seriallarga qaytish
          </Link>
          <span className="details-hero-genre">{serial.genre}</span>
          <h1>{serial.title || "Nomsiz"}</h1>
          <div className="details-hero-meta">
            <span className="meta-pill meta-pill-rating">
              <StarIcon /> {serial.rating.toFixed(1)}
            </span>
            <span className="meta-pill">{serial.year}</span>
            <span className="meta-pill">{serial.country}</span>
            <span className="meta-pill">
              {serial.seasons.length} fasl · {totalEpisodes} qism
            </span>
          </div>
        </div>
      </div>

      {/* Below the hero: poster card, full info, and the episode picker + player */}
      <div className="container details-body">
        <div className="details-wrapper">
          <div className="details-poster-frame">
            <img src={serial.poster} alt={serial.title} className="details-poster" />
          </div>

          <div className="details-info">
            <dl className="details-facts">
              <div>
                <dt>Janr</dt>
                <dd>{serial.genre}</dd>
              </div>
              <div>
                <dt>Rejissyor</dt>
                <dd>{serial.director}</dd>
              </div>
              <div>
                <dt>Davlat</dt>
                <dd>{serial.country}</dd>
              </div>
              <div>
                <dt>Yil</dt>
                <dd>{serial.year}</dd>
              </div>
              <div>
                <dt>Fasllar</dt>
                <dd>{serial.seasons.length} ta</dd>
              </div>
              <div>
                <dt>Reyting</dt>
                <dd>{serial.rating.toFixed(1)} / 10</dd>
              </div>
            </dl>

            <h2 className="details-subheading">Qisqacha mazmuni</h2>
            <p className="details-description">{serial.description}</p>
          </div>
        </div>

        <h2 className="details-subheading video-heading">
          <PlayIcon /> Tomosha qilish
        </h2>

        {serial.seasons.length > 1 && (
          <div className="season-tabs" role="tablist" aria-label="Fasllar">
            {serial.seasons.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={i === seasonIndex}
                className={`season-tab${i === seasonIndex ? " season-tab-active" : ""}`}
                onClick={() => selectSeason(i)}
              >
                {s.title}
              </button>
            ))}
          </div>
        )}

        <div className="episode-list">
          {season?.episodes.map((ep, i) => (
            <button
              key={ep.id}
              type="button"
              className={`episode-chip${i === episodeIndex ? " episode-chip-active" : ""}`}
              onClick={() => setEpisodeIndex(i)}
            >
              <PlayIcon /> {ep.title}
              <span className="episode-chip-duration">{formatDuration(ep.duration)}</span>
            </button>
          ))}
        </div>

        {episode && (
          <div className="video-frame">
            {/* key forces the <video> element to remount when the episode
                changes, so the browser reliably loads the new src */}
            <video key={episode.id} className="video-player" controls src={episode.video}>
              Kechirasiz, brauzeringiz video formatini qo&apos;llab-quvvatlamaydi.
            </video>
          </div>
        )}
      </div>
    </>
  );
}
