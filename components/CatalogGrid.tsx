"use client";

import { useMemo, useState } from "react";
import MovieCard from "@/components/MovieCard";
import type { CatalogItem } from "@/types/movie";

interface CatalogGridProps {
  items: CatalogItem[];
  category: string; // e.g. "movies", "serials", "cartoons", "premieres"
  emptyLabel: string;
}

function SearchIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="M20 20L16.5 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Extracts unique, sorted option lists for the filter dropdowns from the
// dataset itself, so the filters always match what's actually available.
function uniqueSorted(values: (string | number)[]): (string | number)[] {
  return Array.from(new Set(values)).sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));
}

export default function CatalogGrid({ items, category, emptyLabel }: CatalogGridProps) {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("all");
  const [country, setCountry] = useState("all");
  const [year, setYear] = useState("all");
  const [sort, setSort] = useState("default");

  const genres = useMemo(
    () => uniqueSorted(items.map((m) => m.genre.split(",")[0].trim())),
    [items]
  );
  const countries = useMemo(() => uniqueSorted(items.map((m) => m.country)), [items]);
  const years = useMemo(() => uniqueSorted(items.map((m) => m.year)).reverse(), [items]);

  const filtered = useMemo(() => {
    let result = items.filter((m) => {
      const matchesQuery =
        query.trim().length === 0 ||
        m.title.toLowerCase().includes(query.trim().toLowerCase());
      const matchesGenre = genre === "all" || m.genre.split(",")[0].trim() === genre;
      const matchesCountry = country === "all" || m.country === country;
      const matchesYear = year === "all" || String(m.year) === year;
      return matchesQuery && matchesGenre && matchesCountry && matchesYear;
    });

    if (sort === "year-desc") {
      result = [...result].sort((a, b) => b.year - a.year);
    } else if (sort === "year-asc") {
      result = [...result].sort((a, b) => a.year - b.year);
    } else if (sort === "rating-desc") {
      result = [...result].sort((a, b) => b.rating - a.rating);
    } else if (sort === "title-asc") {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [items, query, genre, country, year, sort]);

  const hasActiveFilters =
    query.trim().length > 0 || genre !== "all" || country !== "all" || year !== "all";

  function resetFilters() {
    setQuery("");
    setGenre("all");
    setCountry("all");
    setYear("all");
    setSort("default");
  }

  return (
    <div>
      <div className="filter-bar">
        <div className="filter-search">
          <SearchIcon />
          <input
            type="search"
            placeholder="Nomi bo'yicha qidirish..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Qidiruv"
          />
        </div>

        <select value={genre} onChange={(e) => setGenre(e.target.value)} aria-label="Janr">
          <option value="all">Barcha janrlar</option>
          {genres.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>

        <select value={country} onChange={(e) => setCountry(e.target.value)} aria-label="Davlat">
          <option value="all">Barcha davlatlar</option>
          {countries.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <select value={year} onChange={(e) => setYear(e.target.value)} aria-label="Yil">
          <option value="all">Barcha yillar</option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>

        <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Saralash">
          <option value="default">Saralash: standart</option>
          <option value="year-desc">Yil: yangidan eskiga</option>
          <option value="year-asc">Yil: eskidan yangiga</option>
          <option value="rating-desc">Reyting: yuqoridan</option>
          <option value="title-asc">Nomi: A-Z</option>
        </select>

        {hasActiveFilters && (
          <button type="button" className="filter-reset" onClick={resetFilters}>
            Tozalash
          </button>
        )}
      </div>

      <p className="results-count">
        {filtered.length} ta natija topildi
      </p>

      {filtered.length === 0 ? (
        <p className="empty-state">{emptyLabel}</p>
      ) : (
        <div className="movie-grid">
          {filtered.map((item) => (
            <MovieCard key={item.id} movie={item} category={category} />
          ))}
        </div>
      )}
    </div>
  );
}
