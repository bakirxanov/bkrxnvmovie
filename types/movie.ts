// Shared "Movie" shape used by every category (movies, serials, cartoons, premieres).
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
