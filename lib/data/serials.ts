import type { Episode, Season, Serial } from "@/types/movie";

// "Database" for the Serials category. Unlike Movies/Cartoons/Premieres
// (which each have ONE video), a serial has MANY parts. So instead of a
// single `video` field, every serial embeds its own seasons -> episodes
// list. This is the "API ichida API": GET /api/serials/:id doesn't just
// return the title's info, it returns the whole nested video structure
// together with it, ready to render an episode picker + player.
//
// Swap the `video` URLs below with your own files later — the season /
// episode SHAPE is what matters, the sample links are just placeholders.

function buildSeasons(videoUrls: string[][], seasonLabelPrefix = "fasl", episodeLabelPrefix = "qism"): Season[] {
  let episodeIdCounter = 1;
  return videoUrls.map((seasonVideos, seasonIndex) => {
    const episodes: Episode[] = seasonVideos.map((video, episodeIndex) => ({
      id: episodeIdCounter++,
      title: `${episodeIndex + 1}-${episodeLabelPrefix}`,
      video,
      duration: 20 + ((episodeIndex * 7 + seasonIndex * 3) % 25),
    }));

    return {
      id: seasonIndex + 1,
      title: `${seasonIndex + 1}-${seasonLabelPrefix}`,
      episodes,
    };
  });
}

export const serials: Serial[] = [
  {
    id: 1,
    title: "G'alati hodisalar",
    poster: "https://m.media-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_.jpg",
    country: "AQSH",
    year: 2016,
    genre: "Fantastik, Jangari, Sarguzasht",
    director: "Meredith Lund",
    rating: 7.1,
    description:
      "Qamoqdan qochishga jazm qilgan qahramonlar guruhi har bir qadamda yangi xavf bilan to'qnash keladi. Har bir seriya ularni ozodlikka bir qadam yaqinlashtiradi yoki butunlay yo'q qiladi.",
    seasons: buildSeasons([
      [
        "https://c.uzbeklar.biz/film6/ajabtovur/1qism.mp4",
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      ],
      [
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      ],
    ]),
  },
  {
    id: 2,
    title: "Yo'l hayajoni",
    poster: "https://picsum.photos/seed/serial2/400/600",
    country: "AQSH",
    year: 2015,
    genre: "Sarguzasht, Vestern",
    director: "Meredith Lund",
    rating: 6.8,
    description:
      "Do'stlar guruhi Amerika qit'asi bo'ylab uzoq safarga chiqadi. Yo'l davomida ular kutilmagan uchrashuvlar, sinovlar va do'stlikni mustahkamlaydigan lahzalarga duch kelishadi.",
    seasons: buildSeasons([
      [
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        "https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
        "https://storage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
      ],
    ]),
  },
  {
    id: 3,
    title: "Asabiylashish nuqtasi",
    poster: "https://picsum.photos/seed/serial3/400/600",
    country: "Buyuk Britaniya",
    year: 2015,
    genre: "Triller, Drama",
    director: "Meredith Lund",
    rating: 7.5,
    description:
      "Bosim ostida qolgan bosh qahramon o'z hayotini qayta qurishga majbur bo'ladi. Har bir bo'lim uning ichki kurashini va atrofdagilar bilan murakkab munosabatlarini ochib beradi.",
    seasons: buildSeasons([
      [
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      ],
      [
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      ],
    ]),
  },
  {
    id: 4,
    title: "Ko'cha va bepul yo'l sinovi",
    poster: "https://picsum.photos/seed/serial4/400/600",
    country: "Yaponiya",
    year: 2014,
    genre: "Sarguzasht",
    director: "Ishida Kenji",
    rating: 6.5,
    description:
      "Tajribali sinovchilar jamoasi eng og'ir yo'l sharoitlarida chidamlilik va mahoratni sinab ko'radi. Har bir epizod yangi geografiya va yangi qiyinchiliklarni taqdim etadi.",
    seasons: buildSeasons([
      [
        "https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
        "https://storage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
      ],
    ]),
  },
  {
    id: 5,
    title: "Nemis muhandisligi",
    poster: "https://picsum.photos/seed/serial5/400/600",
    country: "Germaniya",
    year: 2014,
    genre: "Hujjatli, Texnika",
    director: "Lena Hoffmann",
    rating: 6.2,
    description:
      "Nemis avtomobilsozlik san'atining ichki oshxonasi — muhandislar, dizaynerlar va sinovchilarning kundalik ishi haqida hujjatli hikoya.",
    seasons: buildSeasons([
      [
        "https://storage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
        "https://storage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
      ],
    ]),
  },
];

export function getAllSerials(): Serial[] {
  return serials;
}

export function getSerialById(id: number): Serial | undefined {
  return serials.find((s) => s.id === id);
}
