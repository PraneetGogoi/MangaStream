"use client";

export const dynamic = "force-dynamic";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, SortAsc, Star, Users, Info, Zap, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

type DiscoveryItem = {
  _id: string;
  mal_id: number;
  title: string;
  title_english: string;
  main_picture: string;
  type: string;
  score: number;
  scored_by: number;
  status: string;
  genres: string[];
  synopsis: string;
  popularity: number;
  rank: number;
};

export default function DiscoveryPage() {
  const router = useRouter();
  const [items, setItems] = useState<DiscoveryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [type, setType] = useState("anime");
  const [sortBy, setSortBy] = useState("popularity");
  const [genre, setGenre] = useState("");

  const GENRES = ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Mystery", "Romance", "Sci-Fi", "Slice of Life", "Supernatural"];

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/discovery/search?type=${type}&q=${query}&sortBy=${sortBy}&genre=${genre}`);
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setLoading(false);
      }
    };
    const timer = setTimeout(fetchItems, 300);
    return () => clearTimeout(timer);
  }, [query, type, sortBy, genre]);

  return (
    <div className="min-h-screen bg-manga-paper text-manga-ink manga-background-texture pt-32 pb-20 px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 relative">
          <div className="absolute -top-12 -left-6 opacity-10 pointer-events-none text-8xl font-black uppercase italic">
            Archive
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-manga-ink p-2 rotate-[-5deg]">
                  <Sparkles className="text-manga-paper w-8 h-8" />
                </div>
                <h1 className="text-6xl font-black tracking-tighter uppercase italic">Encyclopedia</h1>
              </div>
              <p className="text-xl font-bold border-l-4 border-manga-ink pl-4 max-w-2xl uppercase">
                THE DEFINITIVE DIGITAL ARCHIVE OF ALL KNOWN ANIME AND MANGA DATA. <br />
                UPDATED UP TO 2026.
              </p>
            </div>

            <div className="flex bg-manga-ink/5 border-4 border-manga-ink p-1 rounded-lg">
              <button 
                onClick={() => setType("anime")}
                className={cn(
                  "px-8 py-2 font-black uppercase italic text-sm transition-all",
                  type === "anime" ? "bg-manga-ink text-manga-paper shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]" : "hover:bg-manga-ink/10"
                )}
              >
                Anime
              </button>
              <button 
                onClick={() => setType("manga")}
                className={cn(
                  "px-8 py-2 font-black uppercase italic text-sm transition-all",
                  type === "manga" ? "bg-manga-ink text-manga-paper shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]" : "hover:bg-manga-ink/10"
                )}
              >
                Manga
              </button>
            </div>
          </div>
        </header>

        {/* Filters */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2 relative group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 opacity-40 group-focus-within:opacity-100 transition-opacity" />
            <input 
              type="text"
              placeholder="SEARCH THE ANNALS..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-manga-paper border-[4px] border-manga-ink rounded-xl py-4 pl-16 pr-6 font-black uppercase italic focus:outline-none shadow-[8px_8px_0px_0px_var(--manga-shadow-color)]"
            />
          </div>

          <div className="relative">
            <Filter className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 opacity-40" />
            <select 
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="w-full bg-manga-paper border-[4px] border-manga-ink rounded-xl py-4 pl-16 pr-6 font-black uppercase italic appearance-none focus:outline-none shadow-[8px_8px_0px_0px_var(--manga-shadow-color)]"
            >
              <option value="">All Genres</option>
              {GENRES.map(g => <option key={g} value={g}>{g}</option>)}
            </select>
          </div>

          <div className="relative">
            <SortAsc className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 opacity-40" />
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full bg-manga-paper border-[4px] border-manga-ink rounded-xl py-4 pl-16 pr-6 font-black uppercase italic appearance-none focus:outline-none shadow-[8px_8px_0px_0px_var(--manga-shadow-color)]"
            >
              <option value="popularity">Popularity</option>
              <option value="score">Top Rated</option>
              <option value="rank">Ranking</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
          <AnimatePresence mode="popLayout">
            {loading ? (
              [...Array(8)].map((_, i) => (
                <div key={i} className="aspect-[2/3] bg-manga-ink/5 border-[4px] border-manga-ink rounded-2xl animate-pulse" />
              ))
            ) : (
              items.map((item, idx) => (
                <motion.div
                  key={item._id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: idx * 0.03 }}
                  onClick={() => router.push(`/discovery/${type}/${item.mal_id}`)}
                  className="group relative bg-manga-paper border-[4px] border-manga-ink rounded-2xl overflow-hidden hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_var(--manga-shadow-color)] transition-all cursor-pointer"
                >
                  <div className="aspect-[2/3] relative overflow-hidden border-b-[4px] border-manga-ink">
                    <img 
                      src={item.main_picture} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute top-4 left-4 bg-manga-ink text-manga-paper px-3 py-1 font-black text-xs uppercase italic rotate-[-2deg]">
                      #{item.rank || item.popularity}
                    </div>
                    <div className="absolute bottom-4 right-4 bg-manga-paper border-2 border-manga-ink px-2 py-1 flex items-center gap-1">
                      <Star size={14} className="fill-manga-ink" />
                      <span className="font-black text-sm">{item.score}</span>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-3 bg-manga-paper">
                    <h3 className="font-black uppercase italic text-lg leading-tight line-clamp-2 group-hover:text-manga-ink transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {item.genres.slice(0, 2).map(g => (
                        <span key={g} className="text-[10px] font-black uppercase tracking-widest bg-manga-ink/5 px-2 py-0.5 border border-manga-ink/20">
                          {g}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Impact Overlay */}
                  <div className="absolute inset-0 border-[4px] border-manga-ink opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity" />
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
