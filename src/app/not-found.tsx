"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Home, Search, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-manga-paper flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Background Halftone Distortions */}
      <div className="absolute inset-0 halftone opacity-10 pointer-events-none" />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.1, 0.05],
          rotate: [0, 2, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[400px] font-black uppercase italic text-manga-ink select-none -z-10"
      >
        404
      </motion.div>

      <div className="max-w-3xl w-full text-center relative z-10">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-manga-ink p-12 rotate-[-2deg] shadow-[32px_32px_0px_0px_rgba(0,0,0,0.2)] mb-16 border-[12px] border-white"
        >
          <AlertTriangle className="w-24 h-24 text-red-500 mx-auto mb-8 animate-pulse" />
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-none mb-4">
            ARCHIVE <br />
            <span className="bg-red-600 px-4 inline-block transform rotate-[2deg]">LOST</span>
          </h1>
          <p className="text-xl font-bold text-white uppercase tracking-widest opacity-60">
            THE RECORD YOU ARE SEEKING HAS BEEN REDACTED OR EXPUNGED FROM THE ANNALS.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link 
                href="/"
                className="group flex items-center justify-center gap-4 bg-white border-[8px] border-manga-ink p-6 font-black uppercase italic text-xl shadow-[12px_12px_0px_0px_var(--manga-shadow-color)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all"
            >
                <ArrowLeft className="w-8 h-8 group-hover:-translate-x-2 transition-transform" />
                Return to Hub
            </Link>
            <Link 
                href="/?s="
                className="group flex items-center justify-center gap-4 bg-manga-ink text-white p-6 font-black uppercase italic text-xl shadow-[12px_12px_0px_0px_rgba(0,0,0,0.5)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all"
            >
                <Search className="w-8 h-8 group-hover:scale-110 transition-transform" />
                Search Annals
            </Link>
        </div>

        {/* Ink Splatter Decoration */}
        <div className="mt-20 opacity-20 hidden md:block">
            <div className="text-[10px] font-black uppercase tracking-[0.8em] text-manga-ink">
                SYSTEM INTEGRITY: COMPROMISED • SEC-LVL: 0
            </div>
        </div>
      </div>

      {/* Edge Flourishes */}
      <div className="fixed top-0 left-0 w-20 h-20 border-l-[12px] border-t-[12px] border-manga-ink m-8" />
      <div className="fixed bottom-0 right-0 w-20 h-20 border-r-[12px] border-b-[12px] border-manga-ink m-8" />
    </div>
  );
}
