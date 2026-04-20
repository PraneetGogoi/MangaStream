"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import { MOCK_ANIME, Anime } from "@/data/mockAnime";
import { AnimeCard } from "@/components/AnimeCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ThemeSlice } from "@/components/ThemeSlice";
import { Search, Zap } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

// Dynamic imports for heavy components
const TrailerModal = dynamic(() => import("@/components/TrailerModal").then(mod => mod.TrailerModal));
const LandingPage = dynamic(() => import("@/components/LandingPage").then(mod => mod.LandingPage));
const MangaReader = dynamic(() => import("@/components/MangaReader").then(mod => mod.MangaReader));

export default function Home() {
  const [showLanding, setShowLanding] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedAnime, setSelectedAnime] = useState<Anime | null>(null);
  const [selectedMangaAnime, setSelectedMangaAnime] = useState<Anime | null>(null);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");
  const [selectedVideoLabel, setSelectedVideoLabel] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const [isSlicing, setIsSlicing] = useState(false);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 200);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const handleOpenVideo = useCallback((anime: Anime, url: string, label: string) => {
    setSelectedAnime(anime);
    setSelectedVideoUrl(url);
    setSelectedVideoLabel(label);
  }, []);

  const handleOpenManga = useCallback((anime: Anime) => {
    setSelectedMangaAnime(anime);
  }, []);

  const filteredAnime = useMemo(() => {
    if (!debouncedSearch) return MOCK_ANIME;
    return MOCK_ANIME.filter(
      (anime) =>
        anime.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        anime.categories.some((cat: string) =>
          cat.toLowerCase().includes(debouncedSearch.toLowerCase())
        )
    );
  }, [debouncedSearch]);

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
            {/* Manga Style Header */}
            <header className="fixed top-0 left-0 right-0 z-40 bg-manga-paper border-b-[6px] border-manga-ink p-4 transition-colors duration-300">
              <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                  <div className="bg-manga-ink p-2 rounded-sm rotate-[-5deg] transition-colors duration-300">
                    <Zap className="text-manga-paper fill-manga-paper w-8 h-8 transition-colors duration-300" />
                  </div>
                  <h1 className="text-3xl font-black uppercase tracking-tighter italic scale-y-110">
                    Manga<span className="bg-manga-ink text-manga-paper px-2 ml-1 transition-colors duration-300">Stream</span>
                  </h1>
                </div>

                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <motion.div 
                    className="relative w-full sm:w-80"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-manga-ink z-10 opacity-50" />
                    <motion.input
                      type="text"
                      placeholder="SEARCH FOR MASTERPIECES..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      whileFocus={{ 
                        scale: 1.01,
                        boxShadow: "var(--manga-shadow)",
                        x: 4,
                      }}
                      className="w-full bg-manga-paper border-[4px] border-manga-ink rounded-lg py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-0 shadow-[4px_4px_0px_0px_var(--manga-shadow-color)] placeholder:text-manga-ink/40 font-bold uppercase relative z-0 transition-all cursor-text"
                    />
                  </motion.div>
                </div>
              </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 pt-40">
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

              {filteredAnime.length === 0 ? (
                <div className="text-center py-20 border-[4px] border-dashed border-manga-ink rounded-xl">
                  <p className="text-manga-ink text-3xl font-black uppercase">Result: EMPTY PANEL!</p>
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
