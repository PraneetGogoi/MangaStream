import { Character, Anime } from "./types";
export type { Character, Anime };




export const MOCK_ANIME: Anime[] = [
  {
    id: "demon-slayer",
    title: "Demon Slayer: Kimetsu no Yaiba",
    description: "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon.",
    categories: ["Action", "Supernatural"],
    posterImage: "/assets/demon-slayer/ren.jpg",
    trailerUrl: "https://www.youtube.com/embed/VQGCKyvzIM4?autoplay=1&mute=1",
    openings: [
      {
        title: "Opening 1",
        url: "https://www.youtube.com/embed/pmanD_s7G3U?autoplay=1&mute=1"
      },
      {
        title: "Opening 2",
        url: "https://www.youtube.com/embed/st4wcpjZeQQ?autoplay=1&mute=1"
      },
      {
        title: "Opening 3",
        url: "https://www.youtube.com/embed/OWBCIRhly4U?autoplay=1&mute=1"
      },
      {
        title: "Opening 4",
        url: "https://www.youtube.com/embed/I-a8Ma0f1GA?autoplay=1&mute=1"
      }
    ],
    previews: [
      "/assets/demon-slayer/2.jpg",
      "/assets/demon-slayer/3.jpg",
      "/assets/demon-slayer/unnamed-3.png",
    ],
    mangaChapters: [
      {
        id: "c1",
        title: "Chapter 01: Cruelty",
        pages: [
          "/assets/demon-slayer/1.jpg",
          "/assets/demon-slayer/2.jpg",
          "/assets/demon-slayer/3.jpg",
        ]
      }
    ],
    hasArchive: true,
  },
  {
    id: "attack-on-titan",
    title: "Attack on Titan",
    description: "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
    categories: ["Action", "Drama"],
    posterImage: "/assets/attack-on-titan/4.jpg",
    trailerUrl: "https://www.youtube.com/embed/MGRm4IzK1SQ?autoplay=1&mute=1",
    openings: [
      {
        title: "Opening 1",
        url: "https://www.youtube.com/embed/OBqw818mQ1E?autoplay=1&mute=1"
      },
      {
        title: "Opening 2",
        url: "https://www.youtube.com/embed/vy63u2hKoPE?autoplay=1&mute=1"
      },
      {
        title: "Opening 3",
        url: "https://www.youtube.com/embed/8OkpRK2_gVs?autoplay=1&mute=1"
      }
    ],
    previews: [
      "/assets/attack-on-titan/1.jpg",
      "/assets/attack-on-titan/2.jpg",
      "/assets/attack-on-titan/3.jpg",
    ],
    hasArchive: true,
  },
  {
    id: "jujutsu-kaisen",
    title: "Jujutsu Kaisen",
    description: "A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman's school to be able to locate the demon's other body parts and thus exorcise himself.",
    categories: ["Action", "Supernatural"],
    posterImage: "/assets/jujutsu-kaisen/1.jpg",
    trailerUrl: "https://www.youtube.com/embed/MPfZhgLiK6w?autoplay=1&mute=1",
    openings: [
      {
        title: "Opening 1: Kaikai Kitan",
        url: "https://www.youtube.com/embed/1tk1pqwrOys?autoplay=1&mute=1"
      },
      {
        title: "Opening 2: VIVID VICE",
        url: "https://www.youtube.com/embed/5yb2N3pnztU?autoplay=1&mute=1"
      },
      {
        title: "Opening 3: SPECIALZ",
        url: "https://www.youtube.com/embed/Xr032EhUDPw?autoplay=1&mute=1"
      }
    ],
    previews: [
      "/assets/jujutsu-kaisen/2.jpg",
      "/assets/jujutsu-kaisen/3.jpg",
      "/assets/jujutsu-kaisen/4.jpg",
    ],
    mangaChapters: [
      {
        id: "jjk-c1",
        title: "Chapter 01: Sukuna",
        pages: [
          "/assets/jujutsu-kaisen/1.jpg",
          "/assets/jujutsu-kaisen/2.jpg",
          "/assets/jujutsu-kaisen/3.jpg",
        ]
      }
    ],
    hasArchive: true,
  },
  {
    id: "cyberpunk-edgerunners",
    title: "Cyberpunk: Edgerunners",
    description: "A Street Kid trying to survive in a technology and body modification-obsessed city of the future. Having everything to lose, he chooses to stay alive by becoming an Edgerunner.",
    categories: ["Action", "Sci-Fi"],
    posterImage: "/assets/cyberpunk-edgerunner/1.jpg",
    trailerUrl: "https://www.youtube.com/embed/JtqIas3bYhg?autoplay=1&mute=1",
    openings: [
      { title: "Opening: This Fire", url: "https://www.youtube.com/embed/KvMY1uzSC1E?autoplay=1&mute=1" }
    ],
    previews: [
      "/assets/cyberpunk-edgerunner/2.jpg",
      "/assets/cyberpunk-edgerunner/3.png",
      "/assets/cyberpunk-edgerunner/4.jpg",
    ],
    hasArchive: true,
  },
  {
    id: "one-piece",
    title: "One Piece",
    description: "Monkey D. Luffy refuses to let anyone or anything stand in the way of his quest to become the king of all pirates. With a course charted for the treacherous waters of the Grand Line and beyond, this is one captain who'll never give up until he's claimed the greatest treasure on Earth: the Legendary One Piece!",
    categories: ["Action", "Adventure", "Fantasy"],
    posterImage: "/assets/one-piece/1.jpg",
    trailerUrl: "https://www.youtube.com/embed/lgAwlnGLTUg?autoplay=1&mute=1",
    openings: [
      {
        title: "Opening 1",
        url: "https://www.youtube.com/embed/YoeP9w5UIlg?autoplay=1&mute=1"
      },
      {
        title: "Opening 2",
        url: "https://www.youtube.com/embed/5aPf1c6eg58?autoplay=1&mute=1"
      },
      {
        title: "Opening 3",
        url: "https://www.youtube.com/embed/Oo52vQyAR6w?autoplay=1&mute=1"
      },
      {
        title: "Opening 4",
        url: "https://www.youtube.com/embed/hBi9wavp2w4?autoplay=1&mute=1"
      },
      {
        title: "Opening 5",
        url: "https://www.youtube.com/embed/EP3FLYhE7Nc?autoplay=1&mute=1"
      },
      {
        title: "Opening 6",
        url: "https://www.youtube.com/embed/kmEHSsRAIJs?autoplay=1&mute=1"
      },
      {
        title: "Opening 7",
        url: "https://www.youtube.com/embed/M340RGHsIO8?autoplay=1&mute=1"
      },
      {
        title: "Opening 8",
        url: "https://www.youtube.com/embed/JqUWua4MrIM?autoplay=1&mute=1"
      }
    ],
    previews: [
      "/assets/one-piece/2.jpg",
      "/assets/one-piece/3.jpg",
      "/assets/one-piece/4.jpg",
    ],
    hasArchive: true,
  },
  {
    id: "fma",
    title: "Fullmetal Alchemist: Brotherhood",
    description: "The foundation of alchemy is based on the law of equivalent exchange. After losing their mother, brothers Edward and Alphonse Elric attempt to bring her back, but the cost is high. Now they search for the Philosopher's Stone.",
    categories: ["Action", "Adventure", "Drama", "Fantasy"],
    posterImage: "/assets/full-metal-alchemist/1.jpg",
    trailerUrl: "https://www.youtube.com/embed/-GoNo0DGroU?autoplay=1&mute=1",
    openings: [
      {
        title: "Opening 1",
        url: "https://www.youtube.com/embed/elyXcwunIYA?autoplay=1&mute=1"
      }
    ],
    previews: [
      "/assets/full-metal-alchemist/2.jpg",
      "/assets/full-metal-alchemist/3.jpg",
      "/assets/full-metal-alchemist/4.jpg",
    ],
    hasArchive: true,
  },
  {
    id: "death-note",
    title: "Death Note",
    description: "Light Yagami finds the Death Note, a notebook dropped by a rogue death god. Any human whose name is written in the notebook dies, and now Light vows to use this power to rid the world of evil.",
    categories: ["Mystery", "Psychological", "Supernatural", "Thriller"],
    posterImage: "/assets/death-note/1.jpg",
    trailerUrl: "https://www.youtube.com/embed/NlJZ-YgAt-c?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1", url: "https://www.youtube.com/embed/Bt3D3Ca9nww?autoplay=1&mute=1" }
    ],
    previews: [
      "/assets/death-note/2.jpg",
      "/assets/death-note/3.jpg",
      "/assets/death-note/4.jpg",
    ],
    mangaChapters: [
      {
        id: "dn-c1",
        title: "Chapter 01: Boredom",
        pages: [
          "/assets/death-note/1.jpg",
          "/assets/death-note/2.jpg",
          "/assets/death-note/3.jpg",
        ]
      },
      {
        id: "dn-c2",
        title: "Chapter 02: Letter",
        pages: [
          "/assets/death-note/4.jpg",
          "/assets/death-note/1.jpg",
        ]
      }
    ],
    hasArchive: true,
  },
  {
    id: "hunter-x-hunter",
    title: "Hunter x Hunter (2011)",
    description: "Gon Freecss discovers that his father is a world-renowned Hunter. To find him, Gon must become a Hunter himself, passing a dangerous exam and exploring an unknown world.",
    categories: ["Action", "Adventure", "Fantasy"],
    posterImage: "/assets/hunter-x-hunter/1.jpg",
    trailerUrl: "https://www.youtube.com/embed/uq7IKfjViIw?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: Departure!", url: "https://www.youtube.com/embed/2v7S4U-aL0M?autoplay=1&mute=1" }
    ],
    previews: [
      "/assets/hunter-x-hunter/2.jpg",
      "/assets/hunter-x-hunter/3.jpg",
      "/assets/hunter-x-hunter/4.jpg",
    ],
    hasArchive: true,
  },
  {
    id: "naruto",
    title: "Naruto",
    description: "Naruto Uzumaki seeks recognition from his peers and dreams of becoming the Hokage. Deep inside him is the power of a Nine-Tailed Fox, which he must learn to harness.",
    categories: ["Action", "Adventure", "Fantasy"],
    posterImage: "/assets/naruto/1.jpg",
    trailerUrl: "https://www.youtube.com/embed/-G9BqkgZXRA?autoplay=1&mute=1",
    openings: [
      { title: "Opening 4: GO!!!", url: "https://www.youtube.com/embed/pDq52tU53iQ?autoplay=1&mute=1" },
      { title: "Opening 16: Silhouette", url: "https://www.youtube.com/embed/XpYYBEdxUms?autoplay=1&mute=1" }
    ],
    previews: [
      "/assets/naruto/2.jpg",
      "/assets/naruto/3.jpg",
      "/assets/naruto/4.jpg",
    ],
    hasArchive: true,
  },
  {
    id: "cowboy-bebop",
    title: "Cowboy Bebop",
    description: "The Bebop crew is just trying to make a buck. This motley lot of intergalactic loners teams up to track down fugitives and turn them in for cold hard cash.",
    categories: ["Action", "Adventure", "Sci-Fi"],
    posterImage: "/assets/cowboy-bebop/1.jpg",
    trailerUrl: "https://www.youtube.com/embed/OhNwckCLzis?autoplay=1&mute=1",
    openings: [
      { title: "Opening: The Real Folk Blues", url: "https://www.youtube.com/embed/0hfOyOBHIq4?autoplay=1&mute=1" }
    ],
    previews: [
      "/assets/cowboy-bebop/2.jpg",
      "/assets/cowboy-bebop/3.jpg",
      "/assets/cowboy-bebop/4.jpg",
    ],
    hasArchive: true,
  },
  {
    id: "dbz",
    title: "Dragon Ball Z",
    description: "Five years after the events of Dragon Ball, Goku is now a young adult and father to his son Gohan. New threats emerge from space, revealing Goku's true heritage.",
    categories: ["Action", "Adventure", "Fantasy"],
    posterImage: "/assets/dragon-ball-z/1.jpg",
    trailerUrl: "https://www.youtube.com/embed/sxufB6DxXk0?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: Cha-La Head-Cha-La", url: "https://www.youtube.com/embed/GHnfX1Rm39w?autoplay=1&mute=1" },
      { title: "Opening 2: We Gotta Power", url: "https://www.youtube.com/embed/pYnLO7MVKno?autoplay=1&mute=1" },
      { title: "Opening 3: Dan Dan Kokoro Hikareteru", url: "https://www.youtube.com/embed/R4vjJrGeh1c?autoplay=1&mute=1" }
    ],
    previews: [
      "/assets/dragon-ball-z/2.jpg",
      "/assets/dragon-ball-z/3.jpg",
      "/assets/dragon-ball-z/4.jpg",
    ],
    hasArchive: true,
  },
  {
    id: "evangelion",
    title: "Neon Genesis Evangelion",
    description: "In 2015, the world stands on the brink of destruction. Humanity's last hope lies in the hands of NERV, a special agency under the UN, and their Evangelions.",
    categories: ["Psychological", "Sci-Fi", "Mecha"],
    posterImage: "/assets/neon-genesis-evangelion/1.jpg",
    trailerUrl: "https://www.youtube.com/embed/nU21rCWkuJw?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: A Cruel Angel's Thesis", url: "https://www.youtube.com/embed/o6wtDPVkKqI?autoplay=1&mute=1" }
    ],
    previews: [
      "/assets/neon-genesis-evangelion/2.jpg",
      "/assets/neon-genesis-evangelion/3.jpg",
      "/assets/neon-genesis-evangelion/4.jpg",
    ],
    hasArchive: true,
  },
  {
    id: "code-geass",
    title: "Code Geass",
    description: "In the year 2017, seven years after the war, Japan's resistance groups continue to fight. Lelouch Lamperouge, an exiled Britannian prince, gains the power of Geass.",
    categories: ["Action", "Drama", "Mecha", "Sci-Fi"],
    posterImage: "/assets/code-geass/1.jpg",
    trailerUrl: "https://www.youtube.com/embed/v-AGjx0N24U?autoplay=1&mute=1",
    openings: [
      { title: "Opening: Colors (FLOW)", url: "https://www.youtube.com/embed/G8CFuZ9MseQ?autoplay=1&mute=1" }
    ],
    previews: [
      "/assets/code-geass/2.jpg",
      "/assets/code-geass/3.jpg",
      "/assets/code-geass/4.jpg",
    ],
    hasArchive: true,
  },
  {
    id: "haikyu",
    title: "Haikyu!!",
    description: "Shoyo Hinata, at a young age, became enamored with volleyball. Despite his short height, he's determined to follow in the footsteps of the 'Little Giant'.",
    categories: ["Sports", "Comedy", "Drama"],
    posterImage: "/assets/haikyu/1.jpg",
    trailerUrl: "https://www.youtube.com/embed/JOGp2c7-cKc?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: Imagination", url: "https://www.youtube.com/embed/2---3zWfUC0?autoplay=1&mute=1" }
    ],
    previews: [
      "/assets/haikyu/2.jpg",
      "/assets/haikyu/3.jpg",
      "/assets/haikyu/4.jpg",
    ],
    hasArchive: true,
  },
  {
    id: "monster",
    title: "Monster",
    description: "Dr. Kenzo Tenma is a brilliant neurosurgeon whose perspective changes when he saves a young boy's life instead of the mayor's. Years later, he discovers the boy has become a monster.",
    categories: ["Mystery", "Psychological", "Thriller"],
    posterImage: "/assets/monster/1.jpg",
    trailerUrl: "https://www.youtube.com/embed/9aS-EgdAq6U?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: Grain", url: "https://www.youtube.com/embed/m0n7W940zWI?autoplay=1&mute=1" }
    ],
    previews: [
      "/assets/monster/2.jpg",
      "/assets/monster/3.jpg",
      "/assets/monster/4.jpg",
    ],
    hasArchive: true,
  },
  {
    id: "jojo",
    title: "JoJo's Bizarre Adventure",
    description: "The story of the Joestar family, who are possessed with intense psychic strength, and the adventures each member encounters throughout their lives.",
    categories: ["Action", "Adventure", "Supernatural"],
    posterImage: "/assets/jojo-bizarre/1.jpg",
    trailerUrl: "https://www.youtube.com/embed/k4mcxk8IZ2Y?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: Sono Chi no Kioku", url: "https://www.youtube.com/embed/dOQWNEv4_6U?autoplay=1&mute=1" },
      { title: "Opening 2: Bloody Stream", url: "https://www.youtube.com/embed/PcuTPjgMiXw?autoplay=1&mute=1" }
    ],
    previews: [
      "/assets/jojo-bizarre/2.jpg",
      "/assets/jojo-bizarre/3.jpg",
      "/assets/jojo-bizarre/4.jpg",
    ],
    hasArchive: true,
  },
  {
    id: "bleach",
    title: "Bleach: Thousand-Year Blood War",
    description: "The peace is suddenly broken when warning sirens wail through the Soul Society. Residents are disappearing without a trace and nobody knows who's behind it.",
    categories: ["Action", "Adventure", "Supernatural"],
    posterImage: "/assets/bleach/1.jpg",
    trailerUrl: "https://www.youtube.com/embed/e8YBesRKq_U?autoplay=1&mute=1",
    openings: [
      { title: "Opening: STARS (w.o.d.)", url: "https://www.youtube.com/embed/FsKuu-0RUcM?autoplay=1&mute=1" }
    ],
    previews: [
      "/assets/bleach/2.jpg",
      "/assets/bleach/3.jpg",
      "/assets/bleach/4.jpg",
    ],
    hasArchive: true,
  },
  {
    id: "chainsaw-man",
    title: "Chainsaw Man",
    description: "Denji is a teenage boy living with a Chainsaw Devil named Pochita. Due to the debt his father left behind, he has been living a rock-bottom life while repaying his debt by harvesting devil corpses.",
    categories: ["Action", "Comedy", "Drama", "Horror", "Supernatural"],
    posterImage: "/assets/chainsaw-man/1.jpg",
    trailerUrl: "https://www.youtube.com/embed/j9sSzNmB5po?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: Kick Back", url: "https://www.youtube.com/embed/dFlDRhvM4L0?autoplay=1&mute=1" }
    ],
    previews: [
      "/assets/chainsaw-man/2.jpg",
      "/assets/chainsaw-man/3.jpg",
      "/assets/chainsaw-man/4.jpg",
    ],
    hasArchive: true,
  },
  {
    id: "spy-x-family",
    title: "Spy x Family",
    description: "A spy on an undercover mission gets married and adopts a child as part of his cover. His wife and daughter have secrets of their own, and all three must strive to keep together.",
    categories: ["Action", "Comedy"],
    posterImage: "/assets/spy-x-family/1.jpg",
    trailerUrl: "https://www.youtube.com/embed/ofXigq9aIpo?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: Mixed Nuts", url: "https://www.youtube.com/embed/U_rWZK_8vUY?autoplay=1&mute=1" }
    ],
    previews: [
      "/assets/spy-x-family/2.jpg",
      "/assets/spy-x-family/3.jpg",
      "/assets/spy-x-family/4.jpg",
    ],
    hasArchive: true,
  },
  {
    id: "blue-lock",
    title: "Blue Lock",
    description: "After a disastrous defeat at the 2018 World Cup, Japan's team struggles to regroup. But what's missing? An absolute Ace Striker, who can guide them to the win.",
    categories: ["Action", "Sports"],
    posterImage: "/assets/blue-lock/1.jpg",
    trailerUrl: "https://www.youtube.com/embed/IVsII3dLbWc?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: Chaos ga Kiwamaru", url: "https://www.youtube.com/embed/MGRm4IzK1SQ?autoplay=1&mute=1" }
    ],
    previews: [
      "/assets/blue-lock/2.jpg",
      "/assets/blue-lock/3.jpg",
      "/assets/blue-lock/4.jpg",
    ],
    hasArchive: true,
  },
  {
    id: "vinland-saga",
    title: "Vinland Saga",
    description: "Thorfinn, son of one of the Vikings' greatest warriors, is among the finest fighters in the merry band of mercenaries run by the crafty Askeladd.",
    categories: ["Action", "Adventure", "Drama"],
    posterImage: "/assets/vinland-saga/1.jpg",
    trailerUrl: "https://www.youtube.com/embed/pahdCwHJjaU?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: Mukanjyo", url: "https://www.youtube.com/embed/fWAbz5OHe3M?autoplay=1&mute=1" },
      { title: "Opening 2: River", url: "https://www.youtube.com/embed/l5wAdQ-UkWY?autoplay=1&mute=1" }
    ],
    previews: [
      "/assets/vinland-saga/2.jpg",
      "/assets/vinland-saga/3.jpg",
      "/assets/vinland-saga/4.jpg",
    ],
    hasArchive: true,
  },
  {
    id: "no-game-no-life",
    title: "No Game No Life",
    description: "Sora and Shiro are legendary shut-in gamer siblings. One day, they are summoned to a world where everything is decided by games.",
    categories: ["Adventure", "Comedy", "Fantasy", "Ecchi"],
    posterImage: "/assets/no-game-no-life/1.jpg",
    trailerUrl: "https://www.youtube.com/embed/ETQUp-Omp-A?autoplay=1&mute=1",
    openings: [
      { title: "Opening: This Game", url: "https://www.youtube.com/embed/8p4e0URzGyE?autoplay=1&mute=1" }
    ],
    previews: [
      "/assets/no-game-no-life/2.jpg",
      "/assets/no-game-no-life/3.jpg",
      "/assets/no-game-no-life/4.jpg",
    ],
  },
  {
    id: "re-zero",
    title: "Re:ZERO -Starting Life in Another World-",
    description: "Subaru Natsuki is suddenly transported to another world. He discovers he can return from death to a certain point in time, allowing him to change his fate.",
    categories: ["Action", "Adventure", "Drama", "Fantasy", "Psychological"],
    posterImage: "/assets/re-zero/1.jpg",
    trailerUrl: "https://www.youtube.com/embed/vFfXjuVA1Jk?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: Redo", url: "https://www.youtube.com/embed/zoqqPshRCuQ?autoplay=1&mute=1" }
    ],
    previews: [
      "/assets/re-zero/2.jpg",
      "/assets/re-zero/3.jpg",
      "/assets/re-zero/4.jpg",
    ],
  },
  {
    id: "mob-psycho",
    title: "Mob Psycho 100",
    description: "Shigeo 'Mob' Kageyama is a powerful esper who tries to suppress his emotions. He navigates middle school while dealing with supernatural threats.",
    categories: ["Action", "Comedy", "Supernatural"],
    posterImage: "/assets/mob psycho 100/1.jpg",
    trailerUrl: "https://www.youtube.com/embed/mV39saBlBLI?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1", url: "https://www.youtube.com/embed/FuKhBIoVuSg?autoplay=1&mute=1" }
    ],
    previews: [
      "/assets/mob psycho 100/2.jpg",
      "/assets/mob psycho 100/3.jpg",
      "/assets/mob psycho 100/4.jpg"
    ],
    hasArchive: true,
  },
  {
    id: "your-name",
    title: "Kimi no Na wa.",
    description: "Mitsuha and Taki are two strangers who suddenly start swapping bodies, forging a bond that transcends space and time.",
    categories: ["Drama", "Romance", "Supernatural"],
    posterImage: "/assets/kimi no na wa/1.jpg",
    trailerUrl: "https://www.youtube.com/embed/NooIc3dMncc?autoplay=1&mute=1",
    openings: [
      { title: "Zenzenzense", url: "https://www.youtube.com/embed/Z0o9eXQ9w64?autoplay=1&mute=1" }
    ],
    previews: [
      "/assets/kimi no na wa/2.jpg",
      "/assets/kimi no na wa/3.jpg",
      "/assets/kimi no na wa/4.jpg"
    ],
  },
  {
    id: "silent-voice",
    title: "A Silent Voice",
    description: "Shouya Ishida seeks redemption for bullying a deaf girl, Shouko Nishimiya, in elementary school, leading to a moving story of friendship.",
    categories: ["Drama", "Slice of Life"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20954-8UR7r9MNVpz2.jpg",
    trailerUrl: "https://www.youtube.com/embed/nfK6UgLra7g?autoplay=1&mute=1",
    openings: [
      { title: "Koi wo Shita no wa", url: "https://www.youtube.com/embed/nfK6UgLra7g?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/20954-MhlCoeqnODso.jpg"],
  },
  {
    id: "fruits-basket",
    title: "Fruits Basket (2019)",
    description: "Tohru Honda discovers the secret of the Soma family: they turn into animals of the Chinese Zodiac when hugged by the opposite sex.",
    categories: ["Comedy", "Drama", "Romance", "Supernatural"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx106719-XmqW39aQ9o7O.jpg",
    trailerUrl: "https://www.youtube.com/embed/x1Z1-S90M0E?autoplay=1&mute=1",
    openings: [
      { title: "Theme: Again", url: "https://www.youtube.com/embed/x1Z1-S90M0E?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/106719-7lfSSPoMmwr2.jpg"],
  },
  {
    id: "21087-opm",
    title: "One Punch Man",
    description: "Saitama is a hero for fun who can defeat any opponent with just one punch, but he's always looking for a challenge that never comes.",
    categories: ["Action", "Comedy", "Sci-Fi", "Supernatural"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21087-97UR7r9MNVpz.jpg",
    trailerUrl: "https://www.youtube.com/embed/Poo5lqoWSGw?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: The Hero!!", url: "https://www.youtube.com/embed/atxYe-nOa9w?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/21087-MhlCoeqnODso.jpg"],
  },
  {
    id: "steins-gate",
    title: "Steins;Gate",
    description: "Rintarou Okabe is a self-proclaimed 'Mad Scientist' who accidentally discovers a way to send text messages to the past, triggering a chain of events that threatens to alter the future and cause unforgivable tragedy.",
    categories: ["Sci-Fi", "Thriller", "Psychological", "Drama"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx9253-8UR7r9MNVpz2.jpg",
    trailerUrl: "https://www.youtube.com/embed/gaOip_UvO_Y?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: Hacking to the Gate", url: "https://www.youtube.com/embed/gaOip_UvO_Y?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/9253-MhlCoeqnODso.jpg"],
  },
  {
    id: "violet-evergarden",
    title: "Violet Evergarden",
    description: "Violet Evergarden, a young female ex-child soldier, seeks the meaning of 'I Love You' as she works as an 'Auto Memory Doll', writing letters that connect the hearts of people in a post-war world.",
    categories: ["Drama", "Masterpiece", "Slice of Life", "Fantasy"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21827-8UR7r9MNVpz2.jpg",
    trailerUrl: "https://www.youtube.com/embed/g5xWqjFglsk?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: Sincerely", url: "https://www.youtube.com/embed/g5xWqjFglsk?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/21827-8Y3fs8S9S8pS.jpg"],
  },
  {
    id: "tokyo-ghoul",
    title: "Tokyo Ghoul",
    description: "Ken Kaneki's life changes forever after a date with a mysterious woman leads to a horrific accident, transforming him into a half-ghoul who must navigate a world of flesh-eating monsters and hidden societies.",
    categories: ["Action", "Horror", "Psychological", "Supernatural"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20605-8UR7r9MNVpz2.jpg",
    trailerUrl: "https://www.youtube.com/embed/o6O6aYshq28?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: Unravel", url: "https://www.youtube.com/embed/uMeR2W19wNE?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/20605-MhlCoeqnODso.jpg"],
  },
  {
    id: "mha",
    title: "My Hero Academia",
    description: "In a world where 80% of the population has superpowered 'Quirks', Izuku Midoriya was born without one. But a chance encounter with the world's greatest hero changes his destiny forever.",
    categories: ["Action", "Adventure", "Comedy", "Super-Power"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21459-C6pe1zd3hJu3.jpg",
    trailerUrl: "https://www.youtube.com/embed/EPV6T_M6E3U?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: The Day", url: "https://www.youtube.com/embed/EPV6T_M6E3U?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/21459-MhlCoeqnODso.jpg"],
  },
  {
    id: "your-lie-in-april",
    title: "Your Lie in April",
    description: "A piano prodigy who lost his ability to hear the sound of his own playing after his mother's death has his world turned vibrant again by a free-spirited and eccentric violinist.",
    categories: ["Drama", "Music", "Romance", "Slice of Life"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20665-8UR7r9MNVpz2.jpg",
    trailerUrl: "https://www.youtube.com/embed/vFfXjuVA1Jk?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: Hikaru Nara", url: "https://www.youtube.com/embed/nfK6UgLra7g?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/20665-MhlCoeqnODso.jpg"],
  },
  {
    id: "parasyte-maxim",
    title: "Parasyte -the maxim-",
    description: "Hostile alien parasites descend on Earth, taking over human brains to feed. Shinichi Izumi manages to keep his brain intact, forming a symbiotic relationship with a parasite that occupies his right hand.",
    categories: ["Action", "Horror", "Psychological", "Sci-Fi"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20623-8UR7r9MNVpz2.jpg",
    trailerUrl: "https://www.youtube.com/embed/vFfXjuVA1Jk?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: Let Me Hear", url: "https://www.youtube.com/embed/Z0o9eXQ9w64?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/20623-MhlCoeqnODso.jpg"],
  },
  {
    id: "dr-stone",
    title: "Dr. Stone",
    description: "Thousands of years after civilization was turned to stone, a genius boy named Senku Ishigami wakes up and vows to rebuild the world from scratch using the power of science.",
    categories: ["Adventure", "Sci-Fi", "Comedy"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-8UR7r9MNVpz2.jpg",
    trailerUrl: "https://www.youtube.com/embed/vFfXjuVA1Jk?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: Good Morning World!", url: "https://www.youtube.com/embed/vFfXjuVA1Jk?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/105333-MhlCoeqnODso.jpg"],
  },
  {
    id: "black-clover",
    title: "Black Clover",
    description: "In a world where magic is everything, Asta is born with nothing. But a 5-leaf clover grimoire and a sword that can negate magic itself might just make him the Wizard King.",
    categories: ["Action", "Adventure", "Fantasy", "Shonen"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx97940-C6pe1zd3hJu3.jpg",
    trailerUrl: "https://www.youtube.com/embed/eXmByU_Wkpk?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: Haruka Mirai", url: "https://www.youtube.com/embed/8-W75bBivnQ?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/97940-C6pe1zd3hJu3.jpg"],
  },
  {
    id: "fate-ubw",
    title: "Fate/Stay Night: Unlimited Blade Works",
    description: "Emiya Shirou is thrust into the Holy Grail War, a battle royale between seven mages and their heroic spirits. Together with his servant Saber, he must fight for a wish that can change history.",
    categories: ["Action", "Fantasy", "Supernatural", "Epic"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx19603-8UR7r9MNVpz2.jpg",
    trailerUrl: "https://www.youtube.com/embed/hB2v7S4U-aL0M?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: Brave Shine", url: "https://www.youtube.com/embed/Bt3D3Ca9nww?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/19603-8Y3fs8S9S8pS.jpg"],
  },
  {
    id: "psycho-pass",
    title: "Psycho-Pass",
    description: "In a future where a system can measure a person's mental state and criminal intent, Enforcers and Inspectors hunt down those who possess a darkened Psycho-Pass.",
    categories: ["Action", "Sci-Fi", "Psychological", "Police"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx13601-8UR7r9MNVpz2.jpg",
    trailerUrl: "https://www.youtube.com/embed/NRI_8PUXxyw?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: Abnormalize", url: "https://www.youtube.com/embed/NRI_8PUXxyw?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/13601-MhlCoeqnODso.jpg"],
  },
  {
    id: "gintama",
    title: "Gintama",
    description: "In an era where aliens have invaded Edo-period Japan, a samurai with a heart of gold and a perennially empty stomach takes on any odd job to survive, often with chaotic and hilarious results.",
    categories: ["Action", "Comedy", "Sci-Fi", "Samurai"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx918-lawi4n97caB1.jpg",
    trailerUrl: "https://www.youtube.com/embed/9XGZl2D-Z-8?autoplay=1&mute=1",
    openings: [
      { title: "Opening 13: Sakura Mitsutsuki", url: "https://www.youtube.com/embed/8-W75bBivnQ?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/918-MhlCoeqnODso.jpg"],
  },
  {
    id: "shield-hero",
    title: "The Rising of the Shield Hero",
    description: "Naofumi Iwatani is summoned to another world as the Shield Hero. Betrayed and left penniless, he must rise from the shadows to protect a world that hates him.",
    categories: ["Action", "Adventure", "Fantasy", "Isekai"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx99263-XmqW39aQ9o7O.jpg",
    trailerUrl: "https://www.youtube.com/embed/vFfXjuVA1Jk?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: RISE", url: "https://www.youtube.com/embed/vFfXjuVA1Jk?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/99263-MhlCoeqnODso.jpg"],
  },
  {
    id: "mushoku-tensei",
    title: "Mushoku Tensei: Jobless Reincarnation",
    description: "A 34-year-old NEET is reincarnated into a world of magic as Rudeus Greyrat. Armed with his knowledge of his past life and a new resolve, he vows to truly succeed in this new world.",
    categories: ["Adventure", "Fantasy", "Isekai", "Drama"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108465-XmqW39aQ9o7O.jpg",
    trailerUrl: "https://www.youtube.com/embed/x1Z1-S90M0E?autoplay=1&mute=1",
    openings: [
      { title: "Opening: Tabibito no Uta", url: "https://www.youtube.com/embed/x1Z1-S90M0E?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/108465-MhlCoeqnODso.jpg"],
  },
  {
    id: "fire-force",
    title: "Fire Force",
    description: "In a world where people spontaneously combust into living infernos, the Special Fire Force is the city's only hope. Shinra Kusakabe joins the force to uncover the truth behind the flames.",
    categories: ["Action", "Supernatural", "Sci-Fi", "Shonen"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105399-XmqW39aQ9o7O.jpg",
    trailerUrl: "https://www.youtube.com/embed/vFfXjuVA1Jk?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: Inferno", url: "https://www.youtube.com/embed/vFfXjuVA1Jk?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/105399-MhlCoeqnODso.jpg"],
  },
  {
    id: "made-in-abyss",
    title: "Made in Abyss",
    description: "Riko and her robot friend Reg descend into the 'Abyss', a giant hole in the earth full of mysterious relics and dangerous creatures, in search of Riko's mother.",
    categories: ["Adventure", "Mystery", "Fantasy", "Drama"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx97986-C6pe1zd3hJu3.jpg",
    trailerUrl: "https://www.youtube.com/embed/gaOip_UvO_Y?autoplay=1&mute=1",
    openings: [
      { title: "Opening: Deep in Abyss", url: "https://www.youtube.com/embed/gaOip_UvO_Y?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/97986-MhlCoeqnODso.jpg"],
  },
  {
    id: "gurren-lagann",
    title: "Tengen Toppa Gurren Lagann",
    description: "Simon and Kamina live in a subterranean village until they find a mysterious drill that changes the fate of humanity and the universe itself. Who the hell do you think we are?!",
    categories: ["Action", "Adventure", "Mecha", "Sci-Fi"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx2001-lawi4n97caB1.jpg",
    trailerUrl: "https://www.youtube.com/embed/NRI_8PUXxyw?autoplay=1&mute=1",
    openings: [
      { title: "Opening: Sorairo Days", url: "https://www.youtube.com/embed/NRI_8PUXxyw?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/2001-MhlCoeqnODso.jpg"],
  },
  {
    id: "kill-la-kill",
    title: "Kill la Kill",
    description: "Ryuko Matoi arrives at Honnouji Academy search for her father's killer, armed with a giant half of a pair of scissors and a sentient sailor suit that grants her immense power.",
    categories: ["Action", "Comedy", "Super-Power", "Ecchi"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx18671-8UR7r9MNVpz2.jpg",
    trailerUrl: "https://www.youtube.com/embed/NRI_8PUXxyw?autoplay=1&mute=1",
    openings: [
      { title: "Opening: Sirius", url: "https://www.youtube.com/embed/NRI_8PUXxyw?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/18671-MhlCoeqnODso.jpg"],
  },
  {
    id: "overlord",
    title: "Overlord",
    description: "A lonely gamer stays logged into his favorite MMO as it shuts down, only to find himself transported into a real fantasy world as his skeletal avatar, the Sorcerer King Ainz Ooal Gown.",
    categories: ["Action", "Fantasy", "Isekai", "Supernatural"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20832-awA0mB1pAwZ.jpg",
    trailerUrl: "https://www.youtube.com/embed/atxYe-nOa9w?autoplay=1&mute=1",
    openings: [
      { title: "Opening: Clattanoia", url: "https://www.youtube.com/embed/atxYe-nOa9w?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/20832-MhlCoeqnODso.jpg"],
  },
  {
    id: "erased",
    title: "Erased",
    description: "Satoru Fujinuma possesses an ability called 'Revival' that sends him back in time to prevent tragedies. After being framed for a crime, he is sent 18 years back to stop a serial kidnapper.",
    categories: ["Mystery", "Psychological", "Supernatural", "Thriller"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21234-8UR7r9MNVpz2.jpg",
    trailerUrl: "https://www.youtube.com/embed/vFfXjuVA1Jk?autoplay=1&mute=1",
    openings: [
      { title: "Opening: Re:Re:", url: "https://www.youtube.com/embed/vFfXjuVA1Jk?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/21234-MhlCoeqnODso.jpg"],
  },
  {
    id: "death-parade",
    title: "Death Parade",
    description: "After death, humans arrive at Quindecim, a bar in the afterlife where they must play high-stakes games to determine the fate of their souls: reincarnation or the eternal void.",
    categories: ["Psychological", "Drama", "Supernatural", "Mystery"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20842-z77uS8vA6fS8.jpg",
    trailerUrl: "https://www.youtube.com/embed/z77uS8vA6fS8?autoplay=1&mute=1",
    openings: [
      { title: "Opening: Flyers", url: "https://www.youtube.com/embed/z77uS8vA6fS8?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/20842-MhlCoeqnODso.jpg"],
  }
];
