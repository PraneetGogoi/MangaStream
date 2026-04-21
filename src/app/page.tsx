"use client";

import { useState, useMemo, useEffect, useCallback, Suspense } from "react";
import dynamic from "next/dynamic";
import { Anime } from "@/data/mockAnime";
import { getAllAnime } from "./actions";
import { AnimeCard } from "@/components/AnimeCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ThemeSlice } from "@/components/ThemeSlice";
import { AnimatePresence, motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

// Dynamic imports for heavy components
const TrailerModal = dynamic(() => import("@/components/TrailerModal").then(mod => mod.TrailerModal));
const LandingPage = dynamic(() => import("@/components/LandingPage").then(mod => mod.LandingPage));
const MangaReader = dynamic(() => import("@/components/MangaReader").then(mod => mod.MangaReader));

function HomeContent() {
  const [showLanding, setShowLanding] = useState(true);
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("s") || "";
  
  const [selectedAnime, setSelectedAnime] = useState<Anime | null>(null);
  const [selectedMangaAnime, setSelectedMangaAnime] = useState<Anime | null>(null);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");
  const [selectedVideoLabel, setSelectedVideoLabel] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [animeData, setAnimeData] = useState<Anime[]>([]);
  const [isSlicing, setIsSlicing] = useState(false);

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Fetch anime data from MongoDB
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllAnime();
        setAnimeData(data);
      } catch (error) {
        console.error("Failed to fetch anime data:", error);
      }
    };
    fetchData();
  }, []);

  const toggleTheme = () => {
    setIsSlicing(true);
    
    // Sync theme change with the "Impact" moment of the slash
    setTimeout(() => {
      const newMode = !isDarkMode;
      setIsDarkMode(newMode);
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }, 300);

    // Reset slicing state after animation completes
    setTimeout(() => {
      setIsSlicing(false);
    }, 800);
  };

  const handleOpenVideo = useCallback((anime: Anime, url: string, label: string) => {
    setSelectedAnime(anime);
    setSelectedVideoUrl(url);
    setSelectedVideoLabel(label);
  }, []);

  const handleOpenManga = useCallback((anime: Anime) => {
    setSelectedMangaAnime(anime);
  }, []);

  const filteredAnime = useMemo(() => {
    if (!searchTerm) return animeData;
    return animeData.filter(
      (anime) =>
        anime.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        anime.categories.some((cat: string) =>
          cat.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
  }, [searchTerm, animeData]);

  return (
    <div className="min-h-screen bg-manga-paper text-manga-ink selection:bg-manga-ink selection:text-manga-paper pb-20 relative manga-background-texture transition-colors duration-300">
      <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <ThemeSlice isActive={isSlicing} />
      
      <AnimatePresence mode="wait">
        {showLanding ? (
          <LandingPage key="landing" onEnter={() => setShowLanding(false)} />
        ) : (
          <motion.div
            key="main-site"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 pt-32 sm:pt-40">
              <div className="mb-16 relative">
                <div className="absolute -top-10 -left-6 opacity-10 pointer-events-none text-8xl font-black uppercase italic text-manga-ink">
                  Chapter 01
                </div>
                <h2 className="text-6xl sm:text-8xl font-black mb-6 tracking-tighter uppercase italic">
                  DISCOVER <br />
                  <span className="bg-manga-ink text-manga-paper px-4 inline-block transform rotate-[2deg] transition-colors duration-300">YOUR NEXT ANIME</span>
                </h2>
                <p className="text-xl max-w-2xl font-bold leading-relaxed border-l-[6px] border-manga-ink pl-6 transition-colors duration-300">
                  HOVER OVER THE PANELS TO UNLOCK THE ANIME. <br />
                  CLICK TO EXPERIENCE THE ACTION IN MOTION.
                </p>
              </div>

              {filteredAnime.length === 0 && animeData.length > 0 ? (
                <div className="text-center py-20 border-[4px] border-dashed border-manga-ink rounded-xl">
                  <p className="text-manga-ink text-3xl font-black uppercase">Result: EMPTY PANEL!</p>
                </div>
              ) : animeData.length === 0 ? (
                 <div className="text-center py-20 border-[4px] border-dashed border-manga-ink rounded-xl">
                  <p className="text-manga-ink text-3xl font-black uppercase animate-pulse">LOADING ARCHIVES...</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
                  {filteredAnime.map((anime) => (
                    <AnimeCard
                      key={anime.id}
                      anime={anime}
                      onOpenVideo={handleOpenVideo}
                      onOpenManga={handleOpenManga}
                    />
                  ))}
                </div>
              )}
            </main>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {selectedAnime && (
          <TrailerModal
            key={`modal-${selectedAnime.id}-${selectedVideoUrl}`}
            anime={selectedAnime}
            videoUrl={selectedVideoUrl}
            videoLabel={selectedVideoLabel}
            onClose={() => setSelectedAnime(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {selectedMangaAnime && (
          <MangaReader
            key={`manga-${selectedMangaAnime.id}`}
            anime={selectedMangaAnime}
            onClose={() => setSelectedMangaAnime(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
