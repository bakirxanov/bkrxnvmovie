import { NextResponse } from "next/server";
import type { Movie } from "@/types/movie";

// "Database" for the Cartoons category. Plain array, no real database.
const cartoons: Movie[] = [
  {
    id: 1,
    title: "Katta poygaga jo'nayapmiz",
    poster: "https://picsum.photos/seed/cartoon1/400/600",
    country: "AQSH",
    year: 2014,
    video:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    genre: "Multfilm, Sarguzasht",
    director: "Devid Grin",
    duration: 24,
    rating: 7.0,
    description:
      "Qiziqarli mashinalar guruhi mamlakat bo'ylab beg'ubor poygaga chiqishadi. Har bir bosqichda ularni kulgili va o'rgatuvchi voqealar kutmoqda.",
  },
  {
    id: 2,
    title: "Bir so'mga qanday mashina olsa bo'ladi?",
    poster: "https://picsum.photos/seed/cartoon2/400/600",
    country: "Buyuk Britaniya",
    year: 2014,
    video:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
    genre: "Multfilm, Komediya",
    director: "Emili Klark",
    duration: 22,
    rating: 6.7,
    description:
      "Bolalar uchun mo'ljallangan qiziqarli va o'rgatuvchi seriya, unda kichkina qahramonlar tejamkorlik va tanlov qilishni o'rganadi.",
  },
  {
    id: 3,
    title: "Katta kuchli quyon: Bolalar uchun",
    poster: "https://picsum.photos/seed/cartoon3/400/600",
    country: "AQSH",
    year: 2008,
    video:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    genre: "Multfilm, Oilaviy",
    director: "Sacha Goedegebure",
    duration: 10,
    rating: 7.9,
    description:
      "Mehribon va katta quyon o'rmonda o'ziga xafagarchilik keltirgan uchta shumtaka hayvondan o'ch olish uchun ajoyib reja tuzadi.",
  },
  {
    id: 4,
    title: "Fillar tushi: Oilaviy nashr",
    poster: "https://picsum.photos/seed/cartoon4/400/600",
    country: "Niderlandiya",
    year: 2006,
    video:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    genre: "Multfilm, Fantastika",
    director: "Bassam Kurdali",
    duration: 11,
    rating: 6.9,
    description:
      "Sirli mexanik dunyoda ikki qahramon g'alati va xavfli joylar bo'ylab sayohat qilib, atrofdagi olamning sirlarini ochishga urinadi.",
  },
];

// GET /api/cartoons -> returns the full list of cartoons as JSON
export async function GET() {
  return NextResponse.json(cartoons);
}
