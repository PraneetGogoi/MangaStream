"use client";

import { useState, useEffect, useCallback } from "react";
import { getUserWatchlist } from "../actions";
import { Anime } from "@/data/mockAnime";
import { AnimeCard } from "@/components/AnimeCard";
import { motion, AnimatePresence } from "framer-motion";
import { Bookmark, Ghost, ArrowLeft } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";

const TrailerModal = dynamic(() => import("@/components/TrailerModal").then(mod => mod.TrailerModal));
const MangaReader = dynamic(() => import("@/components/MangaReader").then(mod => mod.MangaReader));

export default function WatchlistPage() {
  const [animeData, setAnimeData] = useState<Anime[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAnime, setSelectedAnime] = useState<Anime | null>(null);
  const [selectedMangaAnime, setSelectedMangaAnime] = useState<Anime | null>(null);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");
  const [selectedVideoLabel, setSelectedVideoLabel] = useState("");

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await getUserWatchlist();
      setAnimeData(data);
    } catch (error) {
      console.error("Failed to fetch watchlist:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleOpenVideo = useCallback((anime: Anime, url: string, label: string) => {
    setSelectedAnime(anime);
    setSelectedVideoUrl(url);
    setSelectedVideoLabel(label);
  }, []);

  const handleOpenManga = useCallback((anime: Anime) => {
    setSelectedMangaAnime(anime);
  }, []);

  return (
    <div className="min-h-screen bg-manga-paper text-manga-ink selection:bg-manga-ink selection:text-manga-paper pb-20 relative manga-background-texture transition-colors duration-300">
      <div className="absolute inset-0 halftone opacity-5 pointer-events-none" />

      <main className="max-w-7xl mx-auto px-4 pt-40">
        <div className="mb-16 relative">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 mb-8 bg-manga-ink text-manga-paper px-4 py-2 font-black uppercase italic text-sm hover:translate-x-2 transition-all shadow-[4px_4px_0px_0px_var(--manga-shadow-color)]"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Library
          </Link>
          
          <div className="flex items-center gap-6 mb-6">
             <div className="bg-red-500 p-4 rotate-[-5deg] border-4 border-manga-ink shadow-[8px_8px_0px_0px_var(--manga-shadow-color)]">
              <Bookmark className="text-white w-12 h-12 fill-current" />
            </div>
            <h2 className="text-6xl sm:text-8xl font-black tracking-tighter uppercase italic">
              Saved <br />
              <span className="bg-manga-ink text-manga-paper px-4 inline-block transform rotate-[2deg] transition-colors duration-300">Sagas</span>
            </h2>
          </div>
          <p className="text-xl max-w-2xl font-bold leading-relaxed border-l-[6px] border-red-500 pl-6 transition-colors duration-300">
            YOUR PERSONAL COLLECTION OF MASTERPIECES. <br />
            STAMPED AND SECURED FOR FUTURE SESSIONS.
          </p>
        </div>

        {isLoading ? (
          <div className="text-center py-20 border-[4px] border-dashed border-manga-ink rounded-xl">
             <motion.p 
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-manga-ink text-3xl font-black uppercase"
            >
              Accessing Vault...
            </motion.p>
          </div>
        ) : animeData.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-32 border-[8px] border-manga-ink bg-manga-paper shadow-[20px_20px_0px_0px_var(--manga-shadow-color)]"
          >
            <Ghost className="w-24 h-24 mx-auto mb-8 opacity-20" />
            <h3 className="text-4xl font-black uppercase italic mb-4">The Vault is Empty</h3>
            <p className="text-xl font-bold opacity-40 uppercase tracking-widest mb-12">No masterpieces have been stamped yet.</p>
            <Link 
              href="/"
              className="px-8 py-4 bg-manga-ink text-manga-paper font-black uppercase italic text-xl hover:scale-110 transition-all inline-block"
            >
              Explore The Library
            </Link>
          </motion.div>
        ) : (
          <motion.div 
            initial="hidden"
            animate="show"
            variants={{
              show: { transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12"
          >
            {animeData.map((anime) => (
              <motion.div
                key={anime.id}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.9 },
                  show: { opacity: 1, y: 0, scale: 1 }
                }}
              >
                <AnimeCard
                  anime={anime}
                  onOpenVideo={handleOpenVideo}
                  onOpenManga={handleOpenManga}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </main>

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
