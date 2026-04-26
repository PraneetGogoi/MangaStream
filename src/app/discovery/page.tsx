"use client";

export const dynamic = "force-dynamic";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, SortAsc, Star, Users, Info } from "lucide-react";
import { useRouter } from "next/navigation";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

interface DiscoveryItem {
  _id: string;
  mal_id: number;
  title: string;
  score: number;
  popularity: number;
  main_picture: string;
  genres: string[];
  synopsis: string;
  type: string;
}

export default function DiscoveryPage() {
  const router = useRouter();
  const [items, setItems] = useState<DiscoveryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [type, setType] = useState("anime");
  const [sort, setSort] = useState("popularity");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/discovery/search?type=${type}&q=${query}&sort=${sort}&page=${page}`);
      const data = await res.json();
      setItems(data.items);
      setTotalPages(data.pages);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchItems();
    }, 500);
    return () => clearTimeout(timer);
  }, [query, type, sort, page]);

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent"
        >
          Encyclopedia
        </motion.h1>
        <p className="text-gray-400 text-lg">Explore over 50,000+ anime and manga titles with AI insights.</p>
      </div>

      {/* Controls */}
      <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row gap-6 items-center">
        <div className="relative flex-1 group w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-pink-500 transition-colors" size={20} />
          <input 
            type="text"
            placeholder="Search titles..."
            className="w-full bg-[#16161e] border border-gray-800 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-pink-500/50 focus:ring-4 focus:ring-pink-500/10 transition-all text-lg"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="flex gap-4 w-full md:w-auto">
          <div className="flex bg-[#16161e] p-1 rounded-xl border border-gray-800">
            {["anime", "manga"].map((t) => (
              <button
                key={t}
                onClick={() => { setType(t); setPage(1); }}
                className={cn(
                  "px-6 py-2 rounded-lg capitalize transition-all",
                  type === t ? "bg-pink-500 text-white shadow-lg shadow-pink-500/20" : "text-gray-400 hover:text-white"
                )}
              >
                {t}
              </button>
            ))}
          </div>

          <select 
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="bg-[#16161e] border border-gray-800 rounded-xl px-4 py-2 text-gray-400 focus:outline-none focus:border-pink-500/50"
          >
            <option value="popularity">Popularity</option>
            <option value="score">Score</option>
            <option value="rank">Rank</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        <AnimatePresence mode="popLayout">
          {loading ? (
            Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="aspect-[2/3] bg-[#16161e] rounded-3xl animate-pulse" />
            ))
          ) : (
            items.map((item, idx) => (
              <motion.div
                key={item._id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => router.push(`/discovery/${type}/${item.mal_id}`)}
                className="group relative bg-[#16161e] rounded-3xl overflow-hidden border border-gray-800 hover:border-pink-500/50 transition-all hover:shadow-2xl hover:shadow-pink-500/10 cursor-pointer"
              >
                <div className="aspect-[2/3] relative overflow-hidden">
                  <img 
                    src={item.main_picture || "/placeholder.jpg"} 
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16161e] via-transparent to-transparent opacity-60" />
                  
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/10">
                    <Star size={14} className="text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-bold">{item.score || "N/A"}</span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2 line-clamp-1 group-hover:text-pink-500 transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {item.genres.slice(0, 2).map((g) => (
                      <span key={g} className="text-[10px] uppercase tracking-wider bg-white/5 border border-white/10 px-2 py-0.5 rounded-md text-gray-400">
                        {g}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-500 text-sm line-clamp-3 leading-relaxed">
                    {item.synopsis}
                  </p>
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>

      {/* Pagination */}
      <div className="max-w-7xl mx-auto mt-16 flex justify-center gap-4">
        <button 
          disabled={page === 1}
          onClick={() => setPage(p => p - 1)}
          className="px-6 py-2 bg-[#16161e] border border-gray-800 rounded-xl disabled:opacity-30"
        >
          Previous
        </button>
        <div className="flex items-center text-gray-400 px-4">
          Page {page} of {totalPages}
        </div>
        <button 
          disabled={page === totalPages}
          onClick={() => setPage(p => p + 1)}
          className="px-6 py-2 bg-[#16161e] border border-gray-800 rounded-xl disabled:opacity-30"
        >
          Next
        </button>
      </div>
    </div>
  );
}
