import { NextResponse } from "next/server";
import type { Movie } from "@/types/movie";

// "Database" for the Premieres category. Plain array, no real database.
const premieres: Movie[] = [
  {
    id: 1,
    title: "Sintel: Rejissyor versiyasi",
    poster: "https://picsum.photos/seed/premiere1/400/600",
    country: "Niderlandiya",
    year: 2026,
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    genre: "Fantastika, Drama",
    director: "Colin Levy",
    duration: 15,
    rating: 8.2,
    description:
      "Yosh qiz Sintel yo'qolgan ajdaho do'stini qidirib, xavf-xatarga to'la olamni kezadi. Ushbu rejissyor versiyasida yangi sahnalar qo'shilgan.",
  },
  {
    id: 2,
    title: "Po'lat ko'z yoshlari: Kengaytirilgan",
    poster: "https://picsum.photos/seed/premiere2/400/600",
    country: "Niderlandiya",
    year: 2026,
    video:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    genre: "Fantastika, Jangari",
    director: "Ian Hubert",
    duration: 16,
    rating: 6.6,
    description:
      "Robotlar armiyasiga qarshi kurashayotgan olimlar va jangchilarning hikoyasi — bu safar qo'shimcha sahnalar bilan kengaytirilgan nashrda.",
  },
  {
    id: 3,
    title: "Katta olov: Premyera kechasi",
    poster: "https://picsum.photos/seed/premiere3/400/600",
    country: "AQSH",
    year: 2026,
    video:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    genre: "Jangari, Sarguzasht",
    director: "Meredith Lund",
    duration: 19,
    rating: 6.3,
    description:
      "Bir guruh o'tchechaklar mutaxassisi eng xavfli operatsiyalarini premyera kechasida birinchi marta tomoshabinlarga taqdim etadi.",
  },
];

// GET /api/premieres -> returns the full list of premieres as JSON
export async function GET() {
  return NextResponse.json(premieres);
}
