import type { Movie } from "@/types/movie";

// "Database" for the Movies category.
// It's just a plain array in memory — no real database is used, as requested.
export const movies: Movie[] = [
  {
    id: 1,
    title: "Enola Xolms 3",
    poster:
      "https://preview.redd.it/new-poster-for-enola-holmes-3-starring-millie-bobby-brown-v0-jnhzng9dcw7h1.jpeg?width=640&crop=smart&auto=webp&s=5efc2d809e274c553161aed3c8efb0e15805d2d7",
    country: "AQSH",
    year: 2026,
    video:
      "https://fayllar1.ru/37/kinolar/Enola Holms 3 2026 1080p (asilmedia.net).mp4",
    genre: "Detektiv, Sarguzasht",
    director: "Harry Bradbeer",
    duration: 118,
    rating: 7.4,
    description:
      "Mashhur detektiv Enola Xolms navbatdagi murakkab jinoyatni ochish uchun yana ishga kirishadi. Bu safar u shaxsiy hayoti bilan ish o'rtasida muvozanat saqlashga majbur bo'ladi, ammo aqli va jasorati unga har doimgidek yordam beradi.",
  },
  {
    id: 2,
    title: "Enola Xolms 2",
    poster: "https://m.media-amazon.com/images/I/71OnRNjW2YL._AC_UF1000,1000_QL80_.jpg",
    country: "AQSH",
    year: 2022,
    video:
      "https://fayllar1.ru/23/kinolar/Enola Holms 2 1080p O'zbek tilida (asilmedia.net).mp4",
    genre: "Detektiv, Sarguzasht",
    director: "Harry Bradbeer",
    duration: 129,
    rating: 6.9,
    description:
      "O'z detektivlik agentligini ochgan Enola Xolms birinchi rasmiy ishi — g'oyib bo'lgan yosh ishchi qizni qidirish jarayonida katta fitnaning izidan boradi.",
  },
  {
    id: 3,
    title: "Enola Xolms",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYzE5ODhhODctODk2MS00MTg3LTk2OTYtZmNlYTNjMjY4MjczXkEyXkFqcGc@._V1_.jpg",
    country: "AQSH",
    year: 2020,
    video: "https://fayllar1.ru/11/Enola Xolms 1080p O'zbek tilida (asilmedia.net).mp4",
    genre: "Detektiv, Drama",
    director: "Harry Bradbeer",
    duration: 123,
    rating: 6.6,
    description:
      "Sherlok Xolmsning kichik singlisi Enola, onasi sirli tarzda g'oyib bo'lgach, uni qidirib topish uchun Londonning xavfli ko'chalariga qadam qo'yadi va o'z yo'lini o'zi chizadi.",
  },
  {
    id: 4,
    title: "Qolingdan kelsa tutib ol",
    poster:
      "https://m.media-amazon.com/images/S/pv-target-images/17a625fbef6f828f51484169d633fe6dcd3581285dfe43e4885f6d4563edd3be.jpg",
    country: "AQSH",
    year: 2002,
    video: "https://fayllar1.ru/1-s-x/Ustasi farang 1080p O'zbek tilida (asilmedia.net).mp4",
    genre: "Drama, Jinoyat",
    director: "Steven Spielberg",
    duration: 141,
    rating: 8.1,
    description:
      "Haqiqiy voqealar asosida suratga olingan film — yosh va aqlli firibgar o'zini uchuvchi, shifokor va prokuror sifatida ko'rsatib, uni qo'lga olishga urinayotgan FBR agentidan doim bir qadam oldinda yuradi.",
  },
  {
    id: 5,
    title: "O'rgimchak odam: Yangi kun",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKYgsl0L6RPD68p6plQefqxlunFF_ih9g0ik_04Gy40jPWUX6v1JL9UxR5&s=10",
    country: "AQSH",
    year: 2026,
    video: "https://fayllar1.ru/30/kinolar/O'rgimchak odam - Yangi kun 2026 MHD (asilmedia.net).mp4",
    genre: "Superqahramon, Jangari",
    director: "Jon Watts",
    duration: 132,
    rating: 7.8,
    description:
      "Piter Parker yangi tahdid bilan yuzma-yuz kelib, o'zining eng og'ir sinovidan o'tadi. Shahar uni qahramon sifatida qabul qilishi uchun u avvalo o'zini qayta topishi kerak bo'ladi.",
  },
  {
    id: 6,
    title: "Uoll street bo'rilari",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_FMjpg_UX1000_.jpg",
    country: "Niderlandiya",
    year: 2012,
    video: "https://fayllar1.ru/11/Uoll Strit Bo'risi 360p O'zbek tilida (asilmedia.net).mp4",
    genre: "Fantastika, Jangari",
    director: "Ian Hubert",
    duration: 12,
    rating: 6.4,
    description:
      "Kelajakdagi vayron bo'lgan dunyoda bir guruh olim va jangchilar insoniyatni yo'q qilishga qodir robotlar armiyasiga qarshi so'nggi umidlarini sinab ko'rishadi.",
  },
];

export function getAllMovies(): Movie[] {
  return movies;
}

export function getMovieById(id: number): Movie | undefined {
  return movies.find((m) => m.id === id);
}
