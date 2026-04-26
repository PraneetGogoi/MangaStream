"use client";

export const dynamic = "force-dynamic";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, SortAsc, Star, Sparkles, ChevronDown, Loader2 } from "lucide-react";
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
  const [loadingMore, setLoadingMore] = useState(false);
  const [query, setQuery] = useState("");
  const [type, setType] = useState("anime");
  const [sortBy, setSortBy] = useState("popularity");
  const [genre, setGenre] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  const LIMIT = 20;
  const GENRES = ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Mystery", "Romance", "Sci-Fi", "Slice of Life", "Supernatural", "Horror", "Sports", "Psychological", "Thriller"];

  // Reset and fresh-fetch when filters change
  useEffect(() => {
    setItems([]);
    setPage(1);
    setHasMore(true);
    fetchItems(1, true);
  }, [query, type, sortBy, genre]);

  const fetchItems = useCallback(async (pageNum: number, reset = false) => {
    if (reset) setLoading(true);
    else setLoadingMore(true);

    try {
      const res = await fetch(
        `/api/discovery/search?type=${type}&q=${query}&sortBy=${sortBy}&genre=${genre}&page=${pageNum}&limit=${LIMIT}`
      );
      const data = await res.json();
      const newItems: DiscoveryItem[] = data.items || [];

      setTotalCount(data.total || 0);
      setHasMore(pageNum < (data.pages || 1));

      if (reset) {
        setItems(newItems);
      } else {
        setItems(prev => [...prev, ...newItems]);
      }
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }, [type, query, sortBy, genre]);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchItems(nextPage, false);
  };

  const handleTypeSwitch = (newType: string) => {
    setType(newType);
    setItems([]);
    setPage(1);
  };

  return (
    <div className="min-h-screen bg-manga-paper text-manga-ink manga-background-texture pt-32 pb-20 px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 relative">
          <div className="absolute -top-12 -left-6 opacity-10 pointer-events-none text-8xl font-black uppercase italic select-none">
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
                UPDATED UP TO 2026.{" "}
                {totalCount > 0 && (
                  <span className="opacity-50">{totalCount.toLocaleString()} entries found.</span>
                )}
              </p>
            </div>

            <div className="flex bg-manga-ink/5 border-[4px] border-manga-ink p-1 rounded-lg">
              <button
                onClick={() => handleTypeSwitch("anime")}
                className={cn(
                  "px-8 py-2 font-black uppercase italic text-sm transition-all",
                  type === "anime" ? "bg-manga-ink text-manga-paper shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]" : "hover:bg-manga-ink/10"
                )}
              >
                Anime
              </button>
              <button
                onClick={() => handleTypeSwitch("manga")}
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
            <Filter className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 opacity-40 pointer-events-none" />
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
            <SortAsc className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 opacity-40 pointer-events-none" />
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

        {/* Results count bar */}
        {!loading && items.length > 0 && (
          <div className="flex items-center justify-between mb-8 border-b-4 border-manga-ink pb-4">
            <p className="font-black uppercase italic text-sm opacity-50">
              Showing <span className="text-manga-ink opacity-100">{items.length}</span> of <span className="text-manga-ink opacity-100">{totalCount.toLocaleString()}</span> {type} titles
            </p>
            <div className="w-4 h-4 bg-manga-ink rotate-45" />
          </div>
        )}

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
                  transition={{ delay: Math.min(idx * 0.02, 0.3) }}
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
                    {item.score > 0 && (
                      <div className="absolute bottom-4 right-4 bg-manga-paper border-2 border-manga-ink px-2 py-1 flex items-center gap-1">
                        <Star size={14} className="fill-manga-ink" />
                        <span className="font-black text-sm">{item.score}</span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 space-y-3 bg-manga-paper">
                    <h3 className="font-black uppercase italic text-lg leading-tight line-clamp-2">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {item.genres?.slice(0, 2).map(g => (
                        <span key={g} className="text-[10px] font-black uppercase tracking-widest bg-manga-ink/5 px-2 py-0.5 border border-manga-ink/20">
                          {g}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 border-[4px] border-manga-ink opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity rounded-2xl" />
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>

        {/* Load More */}
        {!loading && hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-20 flex flex-col items-center gap-4"
          >
            <p className="font-black uppercase italic text-sm opacity-40">
              {items.length} of {totalCount.toLocaleString()} loaded
            </p>
            {/* Progress bar */}
            <div className="w-full max-w-md h-2 bg-manga-ink/10 border-2 border-manga-ink overflow-hidden">
              <motion.div
                className="h-full bg-manga-ink"
                initial={{ width: 0 }}
                animate={{ width: `${(items.length / totalCount) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <motion.button
              onClick={handleLoadMore}
              disabled={loadingMore}
              whileHover={{ y: -6, shadow: "none" }}
              whileTap={{ scale: 0.97 }}
              className="mt-4 flex items-center gap-4 px-16 py-6 bg-manga-ink text-manga-paper border-[6px] border-manga-ink font-black text-2xl uppercase italic shadow-[12px_12px_0px_0px_var(--manga-shadow-color)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all disabled:opacity-60 disabled:cursor-not-allowed group"
            >
              {loadingMore ? (
                <>
                  <Loader2 className="animate-spin" size={28} />
                  Loading...
                </>
              ) : (
                <>
                  <ChevronDown size={28} className="group-hover:translate-y-1 transition-transform" />
                  Load More {type === "anime" ? "Anime" : "Manga"}
                </>
              )}
            </motion.button>
          </motion.div>
        )}

        {/* All loaded indicator */}
        {!loading && !hasMore && items.length > 0 && (
          <div className="mt-20 text-center border-t-4 border-dashed border-manga-ink pt-12">
            <p className="font-black uppercase italic text-2xl opacity-30">
              — End of Archive: All {totalCount.toLocaleString()} entries loaded —
            </p>
          </div>
        )}

        {/* No results */}
        {!loading && items.length === 0 && (
          <div className="py-32 text-center">
            <p className="font-black uppercase italic text-4xl opacity-20 mb-4">No Results Found</p>
            <p className="font-bold uppercase text-sm opacity-30">Try a different search term or genre filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}
