"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { CatalogItem } from "@/types/movie";

interface HeroSlideItem extends CatalogItem {
  description: string;
}

interface HeroSwiperProps {
  slides: HeroSlideItem[];
  category: string; // link target category, e.g. "movies"
  autoPlayMs?: number;
}

function PlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 5v14l12-7L7 5Z" fill="currentColor" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2.5l2.9 6.3 6.9.7-5.2 4.7 1.5 6.8L12 17.6 5.9 21l1.5-6.8-5.2-4.7 6.9-.7L12 2.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={direction === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"}
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Big, self-sliding hero banner for the home page. Autoplays every
// `autoPlayMs` (default 6s), pauses while the pointer is over it, and
// resets its timer whenever the user manually changes slide so it never
// fights with a click.
export default function HeroSwiper({ slides, category, autoPlayMs = 6000 }: HeroSwiperProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const count = slides.length;

  const goTo = useCallback(
    (next: number) => {
      if (count === 0) return;
      setIndex(((next % count) + count) % count);
    },
    [count]
  );

  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);
  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused || count <= 1) return;

    timerRef.current = setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, autoPlayMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, count, autoPlayMs]);

  if (count === 0) return null;

  return (
    <section
      className="hero-swiper"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Tavsiya etilgan kinolar"
    >
      <div className="hero-swiper-track">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`hero-slide${i === index ? " hero-slide-active" : ""}`}
            aria-hidden={i !== index}
          >
            <img src={slide.poster} alt="" className="hero-slide-bg" />
            <div className="hero-slide-overlay" />
            <div className="hero-slide-content container">
              <span className="hero-slide-eyebrow">Tavsiya etilgan</span>
              <h1 className="hero-slide-title">{slide.title}</h1>
              <div className="hero-slide-meta">
                <span className="meta-pill meta-pill-rating">
                  <StarIcon /> {slide.rating.toFixed(1)}
                </span>
                <span className="meta-pill">{slide.year}</span>
                <span className="meta-pill">{slide.genre}</span>
              </div>
              <p className="hero-slide-description">{slide.description}</p>
              <Link href={`/${category}/${slide.id}`} className="hero-slide-cta">
                <PlayIcon /> Tomosha qilish
              </Link>
            </div>
          </div>
        ))}
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            className="hero-swiper-arrow hero-swiper-arrow-left"
            onClick={goPrev}
            aria-label="Oldingi"
          >
            <ChevronIcon direction="left" />
          </button>
          <button
            type="button"
            className="hero-swiper-arrow hero-swiper-arrow-right"
            onClick={goNext}
            aria-label="Keyingi"
          >
            <ChevronIcon direction="right" />
          </button>

          <div className="hero-swiper-dots" role="tablist" aria-label="Slaydlar">
            {slides.map((slide, i) => (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`${i + 1}-slayd`}
                className={`hero-swiper-dot${i === index ? " hero-swiper-dot-active" : ""}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
