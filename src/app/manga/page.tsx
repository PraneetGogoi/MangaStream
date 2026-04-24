"use client";

import { useState, useEffect, useCallback, useMemo, Suspense } from "react";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MangaCard } from "@/components/MangaCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ThemeSlice } from "@/components/ThemeSlice";
import { BookOpen, Sparkles, Zap, Search, Download, Terminal } from "lucide-react";
import { searchMangaVault, ingestMangaFromDex, getAllManga } from "../manga-actions";
import { useSession } from "next-auth/react";
import Image from "next/image";

const MangaReader = dynamic(() => import("@/components/MangaReader").then(mod => mod.MangaReader));

function MangaLibraryContent() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("s") || "";
  
  const { data: session } = useSession();
  const [mangaData, setMangaData] = useState<any[]>([]);
  const [selectedManga, setSelectedManga] = useState<any | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSlicing, setIsSlicing] = useState(false);
  const [loading, setLoading] = useState(true);
  
  // Ingestion State
  const [showIngestor, setShowIngestor] = useState(false);
  const [ingestQuery, setIngestQuery] = useState("");
  const [dexResults, setDexResults] = useState<any[]>([]);
  const [isSearchingDex, setIsSearchingDex] = useState(false);
  const [ingestingId, setIngestingId] = useState<string | null>(null);

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Fetch manga data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getAllManga();
        setMangaData(data);
      } catch (error) {
        console.error("Failed to fetch manga data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const toggleTheme = () => {
    setIsSlicing(true);
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
    setTimeout(() => setIsSlicing(false), 800);
  };

  const handleDexSearch = async () => {
    if (!ingestQuery) return;
    setIsSearchingDex(true);
    try {
      const results = await searchMangaVault(ingestQuery);
      setDexResults(results);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSearchingDex(false);
    }
  };

  const handleIngest = async (id: string) => {
    setIngestingId(id);
    try {
      const res = await ingestMangaFromDex(id);
      if (res.success) {
        alert(`Ingested: ${res.manga} with ${res.chaptersCount} chapters!`);
        // Refresh library
        const data = await getAllManga();
        setMangaData(data);
      } else {
        alert(`Error: ${res.error}`);
      }
    } finally {
      setIngestingId(null);
    }
  };

  const filteredManga = useMemo(() => {
    if (!searchTerm) return mangaData;
    return mangaData.filter(
      (m) =>
        m.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.categories.some((cat: string) =>
          cat.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
  }, [searchTerm, mangaData]);

  return (
    <div className="min-h-screen bg-manga-paper text-manga-ink selection:bg-manga-ink selection:text-manga-paper pb-20 relative manga-background-texture transition-colors duration-300">
      <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <ThemeSlice isActive={isSlicing} />

      <main className="max-w-7xl mx-auto px-4 pt-32 sm:pt-40">
        <div className="mb-16 relative">
          <div className="absolute -top-10 -left-6 opacity-10 pointer-events-none text-8xl font-black uppercase italic text-manga-ink">
            Archive 02
          </div>
          <div className="flex items-center gap-6 mb-4">
             <div className="bg-manga-ink p-4 rotate-[-3deg] shadow-[8px_8px_0px_0px_var(--manga-shadow-color)]">
                  <BookOpen className="text-manga-paper w-12 h-12" />
             </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-4">
            <h2 className="text-6xl sm:text-8xl font-black uppercase italic tracking-tighter leading-none">
              MANGA <br />
              <span className="bg-manga-ink text-manga-paper px-4 inline-block transform rotate-[2deg] transition-colors duration-300">VAULT</span>
            </h2>
            
            {session?.user && (session.user as any).role === "admin" && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowIngestor(true)}
                className="bg-red-600 text-white px-6 py-3 font-black uppercase italic text-sm flex items-center gap-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-none transition-all"
              >
                <Terminal className="w-5 h-5" />
                Vault Ingestor
              </motion.button>
            )}
          </div>
          </div>
          <p className="text-xl max-w-2xl font-bold leading-relaxed border-l-[6px] border-manga-ink pl-6 transition-colors duration-300 uppercase italic">
            ACCESS THE SEQUENTIAL ARTIFACTS. <br />
            READ THE NARRATIVE BEFORE IT ANIMATES.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-20 border-[4px] border-dashed border-manga-ink rounded-xl">
            <p className="text-manga-ink text-3xl font-black uppercase animate-pulse">SYNCING WITH VAULT...</p>
          </div>
        ) : filteredManga.length === 0 ? (
          <div className="text-center py-20 border-[4px] border-dashed border-manga-ink rounded-xl">
            <p className="text-manga-ink text-3xl font-black uppercase">Result: EMPTY INK!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
            {filteredManga.map((manga) => (
              <MangaCard
                key={manga.id}
                manga={manga}
                onOpenManga={(m) => setSelectedManga(m)}
              />
            ))}
          </div>
        )}
      </main>

      <AnimatePresence mode="wait">
        {selectedManga && (
          <MangaReader
            key={`manga-${selectedManga.id}`}
            anime={selectedManga} // MangaReader takes 'anime' prop but it's compatible if we pass manga with chapters
            onClose={() => setSelectedManga(null)}
          />
        )}
      </AnimatePresence>

      {/* Ingestor Modal */}
      <AnimatePresence>
        {showIngestor && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-manga-paper/90 backdrop-blur-md"
          >
            <div className="w-full max-w-2xl bg-manga-paper border-[10px] border-manga-ink shadow-[20px_20px_0px_0px_var(--manga-shadow-color)] p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-4xl font-black uppercase italic italic text-manga-ink">Vault Ingestor</h3>
                <button onClick={() => setShowIngestor(false)} className="text-manga-ink hover:scale-110 transition-transform"><Terminal className="w-8 h-8" /></button>
              </div>

              <div className="flex gap-4 mb-8">
                <input 
                  type="text"
                  placeholder="SEARCH THE DEX ARCHIVE..."
                  className="flex-1 bg-transparent border-b-4 border-manga-ink p-4 font-black text-xl uppercase italic focus:outline-none"
                  value={ingestQuery}
                  onChange={(e) => setIngestQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleDexSearch()}
                />
                <button 
                  onClick={handleDexSearch}
                  className="bg-manga-ink text-manga-paper p-4 hover:opacity-80 transition-opacity"
                >
                  <Search className="w-6 h-6" />
                </button>
              </div>

              <div className="max-h-[400px] overflow-y-auto space-y-4 custom-scrollbar">
                {isSearchingDex ? (
                  <p className="text-center font-black animate-pulse">SCANNING SOURCE...</p>
                ) : dexResults.map((m: any) => (
                  <div key={m.id} className="flex gap-4 p-4 border-4 border-manga-ink bg-white/50 group">
                    <div className="w-16 h-24 bg-manga-ink relative flex-shrink-0">
                      {m.coverImage && <Image src={m.coverImage} alt={m.title} fill className="object-cover" unoptimized />}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-black uppercase italic leading-none mb-2">{m.title}</h4>
                      <p className="text-[10px] line-clamp-2 mb-2">{m.description}</p>
                      <button 
                        onClick={() => handleIngest(m.id)}
                        disabled={ingestingId === m.id}
                        className={`px-4 py-1.5 font-black uppercase italic text-xs ${ingestingId === m.id ? 'bg-gray-400' : 'bg-red-600 text-white hover:translate-x-1 transition-all'} flex items-center gap-2`}
                      >
                        <Download className="w-4 h-4" />
                        {ingestingId === m.id ? "ARCHIVING..." : "INGEST TO VAULT"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-10 right-10 pointer-events-none opacity-20">
        <Sparkles className="w-20 h-20 text-manga-ink animate-pulse" />
      </div>
    </div>
  );
}

export default function MangaLibrary() {
  return (
    <Suspense fallback={<div>Loading Vault...</div>}>
      <MangaLibraryContent />
    </Suspense>
  );
}
