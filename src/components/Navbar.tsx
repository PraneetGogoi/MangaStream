"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Zap, LogIn, LogOut, Bookmark, UserCircle, Settings, Search, PlusCircle } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [searchTerm, setSearchTerm] = useState(searchParams.get("s") || "");

  // Update search in URL
  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (searchTerm) {
        params.set("s", searchTerm);
      } else {
        params.delete("s");
      }
      
      // Only push if on home page or if search was active
      if (pathname === "/" || params.get("s")) {
        router.push(pathname + "?" + params.toString());
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, pathname, router, searchParams]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-manga-paper border-b-[6px] border-manga-ink p-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
          <div className="bg-manga-ink p-2 rounded-sm rotate-[-5deg] group-hover:rotate-0 transition-all duration-300">
            <Zap className="text-manga-paper fill-manga-paper w-8 h-8 transition-colors duration-300" />
          </div>
          <h1 className="hidden md:block text-3xl font-black uppercase tracking-tighter italic scale-y-110">
            Manga<span className="bg-manga-ink text-manga-paper px-2 ml-1 transition-colors duration-300">Stream</span>
          </h1>
        </Link>

        {/* Global Search Bar */}
        <div className="flex-1 max-w-xl mx-4">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-manga-ink z-10 opacity-50 group-focus-within:opacity-100 transition-opacity" />
            <motion.input
              type="text"
              placeholder="SEARCH THE ANNALS..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              whileFocus={{ 
                scale: 1.01,
                boxShadow: "var(--manga-shadow)",
                x: 4,
              }}
              className="w-full bg-manga-paper/50 border-[4px] border-manga-ink rounded-lg py-2 pl-12 pr-4 text-sm focus:outline-none focus:ring-0 shadow-[4px_4px_0px_0px_var(--manga-shadow-color)] placeholder:text-manga-ink/40 font-bold uppercase relative z-0 transition-all cursor-text backdrop-blur-sm"
            />
          </div>
        </div>

        {/* Global Navigation Links */}
        <div className="flex items-center gap-4 sm:gap-6 flex-shrink-0">
          <AnimatePresence mode="wait">
            {session ? (
              <motion.div 
                key="logged-in"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 sm:gap-6"
              >
                {/* Watchlist Link */}
                <Link 
                  href="/watchlist"
                  className={`flex items-center gap-2 font-black uppercase italic text-sm group ${pathname === '/watchlist' ? 'text-red-500' : ''}`}
                >
                  <Bookmark className={`w-5 h-5 group-hover:fill-current transition-all ${pathname === '/watchlist' ? 'fill-current' : ''}`} />
                  <span className="hidden lg:inline">Watchlist</span>
                </Link>

                {/* Admin Link (Conditional) */}
                {(session.user as any).role === 'admin' && (
                  <Link 
                    href="/admin"
                    className={`flex items-center gap-2 bg-blue-500 text-white px-3 py-1.5 border-4 border-manga-ink font-black uppercase italic text-xs group shadow-[4px_4px_0px_0px_var(--manga-shadow-color)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all ${pathname === '/admin' ? 'bg-manga-ink' : ''}`}
                  >
                    <PlusCircle className="w-5 h-5 group-hover:rotate-90 transition-all" />
                    <span className="hidden md:inline">Vault Control</span>
                  </Link>
                )}

                {/* User Profile / Logout */}
                <div className="flex items-center gap-3">
                  <Link 
                    href="/account"
                    className="flex items-center gap-4 bg-manga-ink text-manga-paper px-4 py-2 border-2 border-manga-ink transition-all hover:bg-red-500 hover:border-red-500 group shadow-[4px_4px_0px_0px_var(--manga-shadow-color)]"
                  >
                    <Settings className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                    <div className="flex flex-col">
                      <span className="hidden lg:inline font-black uppercase italic text-[10px] tracking-widest leading-none opacity-50">Profile Terminal</span>
                      <span className="hidden lg:inline font-black uppercase italic text-xs tracking-widest">{session.user?.name}</span>
                    </div>
                    {/* User Avatar with Hover Effect */}
                    <div className="w-8 h-8 rounded-full bg-manga-paper border-2 border-manga-ink overflow-hidden flex-shrink-0 ml-1">
                      {(session.user as any).profileImage ? (
                        <img 
                          src={(session.user as any).profileImage} 
                          alt="" 
                          className="w-full h-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-manga-paper">
                          <UserCircle className="w-5 h-5 text-manga-ink" />
                        </div>
                      )}
                    </div>
                  </Link>
                  <button 
                    onClick={() => signOut()}
                    className="bg-manga-paper border-4 border-manga-ink p-2 text-manga-ink hover:bg-manga-ink hover:text-manga-paper transition-all"
                  >
                    <LogOut className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="logged-out"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-4"
              >
                <Link 
                  href="/login"
                  className="flex items-center gap-2 bg-manga-ink text-manga-paper px-6 py-2 border-4 border-manga-ink font-black uppercase italic text-sm hover:bg-manga-paper hover:text-manga-ink transition-all"
                >
                  <LogIn className="w-5 h-5" />
                  Sign In
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};
