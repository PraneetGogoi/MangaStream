"use client";

import { useState, useEffect, useCallback } from "react";
import { getUserWatchlist, updateWatchlistStatus } from "../actions";
import { Anime } from "@/data/mockAnime";
import { AnimeCard } from "@/components/AnimeCard";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bookmark, Ghost, ArrowLeft, Clock, Play, 
  CheckCircle2, Layers, Zap, ChevronRight,
  ShieldCheck
} from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";

const TrailerModal = dynamic(() => import("@/components/TrailerModal").then(mod => mod.TrailerModal));
const MangaReader = dynamic(() => import("@/components/MangaReader").then(mod => mod.MangaReader));

type WatchlistStatus = "All" | "Queued Artifact" | "Active Transmission" | "Synchronized";

export default function WatchlistPage() {
  const [activeTab, setActiveTab] = useState<WatchlistStatus>("All");
  const [animeData, setAnimeData] = useState<(Anime & { watchlistStatus: string })[]>([]);
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

  const handleStatusChange = async (animeId: string, newStatus: any) => {
    const result = await updateWatchlistStatus(animeId, newStatus);
    if (result.success) {
      setAnimeData(prev => prev.map(item => 
        item.id === animeId ? { ...item, watchlistStatus: newStatus } : item
      ));
    }
  };

  const handleOpenVideo = useCallback((anime: Anime, url: string, label: string) => {
    setSelectedAnime(anime);
    setSelectedVideoUrl(url);
    setSelectedVideoLabel(label);
  }, []);

  const handleOpenManga = useCallback((anime: Anime) => {
    setSelectedMangaAnime(anime);
  }, []);

  const filteredData = activeTab === "All" 
    ? animeData 
    : animeData.filter(item => item.watchlistStatus === activeTab);

  return (
    <div className="min-h-screen bg-manga-paper text-manga-ink selection:bg-manga-ink selection:text-manga-paper pb-40 relative transition-colors duration-300">
      <div className="absolute inset-0 halftone opacity-5 pointer-events-none" />

      <main className="max-w-7xl mx-auto px-4 pt-32">
        {/* Header Section */}
        <div className="mb-16 relative">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 mb-12 bg-manga-ink text-manga-paper px-6 py-3 font-black uppercase italic text-sm hover:translate-x-2 transition-all shadow-[8px_8px_0px_0px_var(--manga-shadow-color)] group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Return to Discovery Terminal
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div className="flex items-center gap-8">
                <div className="bg-manga-ink p-6 rotate-[-5deg] shadow-[12px_12px_0px_0px_var(--manga-shadow-color)]">
                    <Bookmark className="text-manga-paper w-16 h-16 fill-current" />
                </div>
                <div>
                    <div className="text-xs font-black uppercase opacity-40 tracking-[0.3em] mb-2 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4" /> Personnel Access Granted
                    </div>
                    <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-none">
                        Private <br />
                        <span className="bg-manga-ink text-manga-paper px-4 inline-block transform rotate-[2deg]">Vault</span>
                    </h2>
                </div>
            </div>
            
            <div className="bg-white border-4 border-manga-ink p-4 shadow-[8px_8px_0px_0px_var(--manga-shadow-color)]">
                <div className="text-[10px] font-black uppercase opacity-40 mb-1">Total Artifacts</div>
                <div className="text-4xl font-black italic">{animeData.length}</div>
            </div>
          </div>
        </div>

        {/* Pipeline Tabs */}
        <div className="flex flex-wrap items-end gap-2 mb-16 border-b-[6px] border-manga-ink relative">
            {[
                { label: "All Fragments", value: "All", icon: Layers },
                { label: "Queued Artifacts", value: "Queued Artifact", icon: Clock },
                { label: "Active Transmissions", value: "Active Transmission", icon: Play },
                { label: "Synchronized", value: "Synchronized", icon: CheckCircle2 }
            ].map((tab) => (
                <button
                    key={tab.value}
                    onClick={() => setActiveTab(tab.value as WatchlistStatus)}
                    className={`px-6 py-4 flex items-center gap-3 font-black uppercase italic text-sm transition-all relative top-[6px] ${
                        activeTab === tab.value 
                        ? 'bg-manga-ink text-manga-paper -translate-y-2' 
                        : 'bg-white text-manga-ink hover:bg-manga-ink/5 border-x-4 border-t-4 border-manga-ink'
                    }`}
                >
                    <tab.icon className={`w-5 h-5 ${activeTab === tab.value ? 'animate-pulse' : ''}`} />
                    {tab.label}
                    {activeTab === tab.value && (
                        <div className="absolute -bottom-2 inset-x-0 h-2 bg-manga-ink" />
                    )}
                </button>
            ))}
        </div>

        {/* Content Area */}
        {isLoading ? (
          <div className="text-center py-40 bg-manga-ink/[0.02] border-[6px] border-dashed border-manga-ink/10">
             <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center justify-center gap-4"
            >
              <Zap className="w-12 h-12 text-manga-ink animate-pulse" />
              <div className="text-5xl font-black uppercase italic tracking-tighter">Syncing Vault...</div>
            </motion.div>
          </div>
        ) : filteredData.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-40 border-[8px] border-manga-ink bg-white shadow-[20px_20px_0px_0px_var(--manga-shadow-color)]"
          >
            <Ghost className="w-24 h-24 mx-auto mb-8 opacity-10" />
            <h3 className="text-4xl font-black uppercase italic mb-4">Fragment Missing</h3>
            <p className="text-xl font-bold opacity-40 uppercase tracking-widest mb-12">No artifacts found in this sector of the pipeline.</p>
            {activeTab !== "All" && (
                <button 
                    onClick={() => setActiveTab("All")}
                    className="px-8 py-4 border-4 border-manga-ink font-black uppercase italic hover:bg-manga-ink hover:text-manga-paper transition-all"
                >
                    Scan All Sectors
                </button>
            )}
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-20">
            <AnimatePresence mode="popLayout">
                {filteredData.map((anime) => (
                    <motion.div
                        layout
                        key={anime.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex flex-col group"
                    >
                        <div className="flex-1 relative">
                            <div className="absolute -top-4 -left-4 z-20 bg-manga-ink text-manga-paper px-3 py-1 font-black text-[10px] uppercase italic skew-x-[-10deg]">
                                {anime.watchlistStatus}
                            </div>
                            <AnimeCard
                                anime={anime}
                                onOpenVideo={handleOpenVideo}
                                onOpenManga={handleOpenManga}
                            />
                        </div>
                        
                        {/* Status Controller */}
                        <div className="mt-6 flex items-center gap-2">
                            <div className="bg-manga-ink p-2">
                                <Zap className="text-manga-paper w-4 h-4" />
                            </div>
                            <select 
                                value={anime.watchlistStatus}
                                onChange={(e) => handleStatusChange(anime.id, e.target.value)}
                                className="flex-1 bg-transparent border-b-4 border-manga-ink font-black uppercase italic text-xs py-2 focus:outline-none cursor-pointer hover:bg-manga-ink/5 transition-colors"
                            >
                                <option value="Queued Artifact">Queued Artifact</option>
                                <option value="Active Transmission">Active Transmission</option>
                                <option value="Synchronized">Synchronized</option>
                            </select>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
          </div>
        )}
      </main>

      {/* Modals */}
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
