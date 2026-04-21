"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { registerUser } from "../actions";
import Link from "next/link";
import { Zap, ArrowRight, UserPlus } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const result = await registerUser(formData);

    if (result?.error) {
      setError(result.error);
      setIsLoading(false);
    } else {
      router.push("/login?registered=true");
    }
  }

  return (
    <div className="min-h-screen bg-manga-paper flex items-center justify-center p-4 selection:bg-manga-ink selection:text-manga-paper transition-colors duration-300">
      <div className="absolute inset-0 halftone opacity-10 pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        className="w-full max-w-md bg-manga-paper border-[8px] border-manga-ink p-8 sm:p-12 shadow-[20px_20px_0px_0px_var(--manga-shadow-color)] relative z-10 transition-colors duration-300"
      >
        <div className="flex items-center gap-4 mb-12">
          <div className="bg-manga-ink p-2 rotate-[-5deg] transition-colors">
            <UserPlus className="text-manga-paper w-8 h-8 transition-colors" />
          </div>
          <h1 className="text-4xl font-black uppercase tracking-tighter italic leading-none">
            Join <br /> 
            <span className="bg-manga-ink text-manga-paper px-2 transition-colors">The stream</span>
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest opacity-40">Personnel Name</label>
            <div className="relative group">
              <input 
                name="username"
                type="text" 
                required
                className="w-full bg-transparent border-b-4 border-manga-ink text-2xl font-black uppercase italic py-2 focus:outline-none focus:border-opacity-100 placeholder:opacity-20 transition-all"
                placeholder="USERNAME..."
              />
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-manga-ink"
                initial={{ width: 0 }}
                whileFocus={{ width: "100%" }}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest opacity-40">Secure Access Code</label>
            <div className="relative group">
              <input 
                name="password"
                type="password" 
                required
                className="w-full bg-transparent border-b-4 border-manga-ink text-2xl font-black uppercase italic py-2 focus:outline-none focus:border-opacity-100 placeholder:opacity-20 transition-all"
                placeholder="PASSWORD..."
              />
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-manga-ink"
                initial={{ width: 0 }}
                whileFocus={{ width: "100%" }}
              />
            </div>
          </div>

          {error && (
            <motion.div 
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="bg-black text-white p-4 border-l-[8px] border-white text-sm font-black uppercase italic"
            >
              Error: {error}
            </motion.div>
          )}

          <div className="pt-6">
            <motion.button 
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              disabled={isLoading}
              className="w-full py-5 bg-manga-ink text-manga-paper border-[4px] border-manga-ink text-2xl font-black uppercase italic relative overflow-hidden group transition-colors"
            >
              <div className="absolute inset-0 bg-manga-paper translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              <span className="relative z-10 group-hover:text-manga-ink transition-colors flex items-center justify-center gap-3">
                {isLoading ? "INITIALIZING..." : "ENGAGE"}
                <ArrowRight className={`w-8 h-8 ${isLoading ? 'animate-pulse' : ''}`} />
              </span>
            </motion.button>
          </div>
        </form>

        <div className="mt-12 pt-8 border-t-4 border-manga-ink/10 flex flex-col items-center gap-4">
          <p className="text-xs font-black uppercase opacity-40 tracking-widest leading-none">Already Enlisted?</p>
          <Link 
            href="/login"
            className="text-lg font-black uppercase italic hover:underline decoration-4 underline-offset-4"
          >
            Sign In To Database
          </Link>
        </div>
      </motion.div>

      {/* Background Anime Panels Decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-[0.03] z-0">
          <div className="absolute top-10 left-10 w-96 h-96 border-8 border-manga-ink rotate-[-10deg]" />
          <div className="absolute bottom-10 right-10 w-96 h-96 border-8 border-manga-ink rotate-[15deg]" />
      </div>
    </div>
  );
}
