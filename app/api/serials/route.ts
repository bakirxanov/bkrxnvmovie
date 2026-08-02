import { NextResponse } from "next/server";
import type { Movie } from "@/types/movie";

// "Database" for the Serials category. Plain array, no real database.
const serials: Movie[] = [
  {
    id: 1,
    title: "Katta qochish",
    poster: "https://picsum.photos/seed/serial1/400/600",
    country: "AQSH",
    year: 2015,
    video:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    genre: "Jangari, Drama",
    director: "Meredith Lund",
    duration: 46,
    rating: 7.1,
    description:
      "Qamoqdan qochishga jazm qilgan qahramonlar guruhi har bir qadamda yangi xavf bilan to'qnash keladi. Har bir seriya ularni ozodlikka bir qadam yaqinlashtiradi yoki butunlay yo'q qiladi.",
  },
  {
    id: 2,
    title: "Yo'l hayajoni",
    poster: "https://picsum.photos/seed/serial2/400/600",
    country: "AQSH",
    year: 2015,
    video:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    genre: "Sarguzasht, Vestern",
    director: "Meredith Lund",
    duration: 41,
    rating: 6.8,
    description:
      "Do'stlar guruhi Amerika qit'asi bo'ylab uzoq safarga chiqadi. Yo'l davomida ular kutilmagan uchrashuvlar, sinovlar va do'stlikni mustahkamlaydigan lahzalarga duch kelishadi.",
  },
  {
    id: 3,
    title: "Asabiylashish nuqtasi",
    poster: "https://picsum.photos/seed/serial3/400/600",
    country: "Buyuk Britaniya",
    year: 2015,
    video:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    genre: "Triller, Drama",
    director: "Meredith Lund",
    duration: 44,
    rating: 7.5,
    description:
      "Bosim ostida qolgan bosh qahramon o'z hayotini qayta qurishga majbur bo'ladi. Har bir bo'lim uning ichki kurashini va atrofdagilar bilan murakkab munosabatlarini ochib beradi.",
  },
  {
    id: 4,
    title: "Ko'cha va bepul yo'l sinovi",
    poster: "https://picsum.photos/seed/serial4/400/600",
    country: "Yaponiya",
    year: 2014,
    video:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    genre: "Sarguzasht",
    director: "Ishida Kenji",
    duration: 38,
    rating: 6.5,
    description:
      "Tajribali sinovchilar jamoasi eng og'ir yo'l sharoitlarida chidamlilik va mahoratni sinab ko'radi. Har bir epizod yangi geografiya va yangi qiyinchiliklarni taqdim etadi.",
  },
  {
    id: 5,
    title: "Nemis muhandisligi",
    poster: "https://picsum.photos/seed/serial5/400/600",
    country: "Germaniya",
    year: 2014,
    video:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    genre: "Hujjatli, Texnika",
    director: "Lena Hoffmann",
    duration: 35,
    rating: 6.2,
    description:
      "Nemis avtomobilsozlik san'atining ichki oshxonasi — muhandislar, dizaynerlar va sinovchilarning kundalik ishi haqida hujjatli hikoya.",
  },
];

// GET /api/serials -> returns the full list of serials as JSON
export async function GET() {
  return NextResponse.json(serials);
}
