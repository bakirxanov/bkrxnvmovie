// Shared "Movie" shape used by Movies, Cartoons and Premieres categories.
// Keeping one type definition avoids repeating the same interface in every file.
export interface Movie {
  id: number;
  title: string;
  poster: string; // URL to the poster image
  country: string;
  year: number;
  video: string; // URL to the .mp4 video file
  genre: string; // e.g. "Jangari, Detektiv"
  director: string;
  duration: number; // daqiqalarda
  rating: number; // 0-10 oralig'ida
  description: string; // qisqacha syujet
}

// A single episode inside a season. This is the "video inside the video"
// piece the Serials category needs, since a serial has many parts.
export interface Episode {
  id: number;
  title: string; // e.g. "1-qism"
  video: string; // URL to this episode's .mp4 file
  duration: number; // daqiqalarda
}

// A season groups episodes together (a serial can have 1..N seasons).
export interface Season {
  id: number;
  title: string; // e.g. "1-fasl"
  episodes: Episode[];
}

// Serials look like a Movie (poster, title, genre, country, year, rating,
// description) but instead of ONE video they embed a nested API-like
// structure: seasons -> episodes -> video. This is what lets
// GET /api/serials/:id return a title together with all of its parts.
export interface Serial {
  id: number;
  title: string;
  poster: string;
  country: string;
  year: number;
  genre: string;
  director: string;
  rating: number;
  description: string;
  seasons: Season[];
}

// Fields every catalog card / filter bar actually needs. Movie and Serial
// both satisfy this, so <MovieCard> and <CatalogGrid> can work with either
// category without caring about the video/seasons differences.
export interface CatalogItem {
  id: number;
  title: string;
  poster: string;
  country: string;
  year: number;
  genre: string;
  rating: number;
}
