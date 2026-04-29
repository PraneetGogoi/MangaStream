"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Zap, LogIn, LogOut, Bookmark, UserCircle, Settings, Search, PlusCircle, Target, Bell, Trash } from "lucide-react";
import { usePulse } from "./PulseProvider";
import { markNotificationRead } from "@/app/actions";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { getAssetPath } from "@/utils/path";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

export const Navbar = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const { notifications, unreadCount, refreshNotifications } = usePulse();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("s") || "");
  const [showNotifications, setShowNotifications] = useState(false);

  // Update search in URL
  useEffect(() => {
    const currentS = searchParams.get("s") || "";
    if (searchTerm === currentS) return;

    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (searchTerm) {
        params.set("s", searchTerm);
      } else {
        params.delete("s");
      }
      
      // If searching, always redirect to home page to show results
      const targetPath = searchTerm ? (pathname.startsWith('/manga') ? '/manga' : '/') : pathname;
      const newUrl = `${targetPath}${params.toString() ? "?" + params.toString() : ""}`;
      router.push(newUrl, { scroll: false });
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm, pathname, router, searchParams]);

  // Sync from URL only on mount or when moving between pages
  useEffect(() => {
    const s = searchParams.get("s") || "";
    setSearchTerm(s);
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-manga-paper border-b-[6px] border-manga-ink p-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
          <div className="bg-manga-ink p-1.5 rounded-sm rotate-[-5deg] group-hover:rotate-0 transition-all duration-300 w-12 h-12 flex items-center justify-center">
            <img 
              src={getAssetPath("/assets/logo.png")} 
              alt="" 
              className="w-full h-full object-contain invert" 
            />
          </div>
          <h1 className="hidden md:block text-3xl font-black uppercase tracking-tighter italic scale-y-110">
            Manga<span className="bg-manga-ink text-manga-paper px-2 ml-1 transition-colors duration-300">Stream</span>
          </h1>
        </Link>

        {/* Library Toggles */}
        <div className="hidden lg:flex items-center bg-manga-ink/5 border-[4px] border-manga-ink p-1 rounded-lg relative">
          <Link 
            href="/"
            className={cn(
              "relative px-6 py-2 font-black uppercase italic text-xs transition-all z-10",
              pathname === '/' ? "text-manga-paper" : "text-manga-ink hover:opacity-70"
            )}
          >
            {pathname === '/' && (
              <motion.div 
                layoutId="nav-pill" 
                className="absolute inset-0 bg-manga-ink shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] z-[-1]"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            Anime
          </Link>
          <Link 
            href="/manga"
            className={cn(
              "relative px-6 py-2 font-black uppercase italic text-xs transition-all z-10",
              pathname === '/manga' ? "text-manga-paper" : "text-manga-ink hover:opacity-70"
            )}
          >
            {pathname === '/manga' && (
              <motion.div 
                layoutId="nav-pill" 
                className="absolute inset-0 bg-manga-ink shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] z-[-1]"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            Manga
          </Link>
          <Link 
            href="/analytics"
            className={cn(
              "relative px-6 py-2 font-black uppercase italic text-xs transition-all z-10",
              pathname === '/analytics' ? "text-manga-paper" : "text-manga-ink hover:opacity-70"
            )}
          >
            {pathname === '/analytics' && (
              <motion.div 
                layoutId="nav-pill" 
                className="absolute inset-0 bg-manga-ink shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] z-[-1]"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            Dashboard
          </Link>
          <Link 
            href="/discovery"
            className={cn(
              "relative px-6 py-2 font-black uppercase italic text-xs transition-all z-10",
              pathname === '/discovery' ? "text-manga-paper" : "text-manga-ink hover:opacity-70"
            )}
          >
            {pathname === '/discovery' && (
              <motion.div 
                layoutId="nav-pill" 
                className="absolute inset-0 bg-manga-ink shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] z-[-1]"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            Encyclopedia
          </Link>
          <Link 
            href="/account"
            className={cn(
              "relative px-6 py-2 font-black uppercase italic text-xs transition-all z-10",
              pathname === '/account' ? "text-manga-paper" : "text-manga-ink hover:opacity-70"
            )}
          >
            {pathname === '/account' && (
              <motion.div 
                layoutId="nav-pill" 
                className="absolute inset-0 bg-manga-ink shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] z-[-1]"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            Account
          </Link>
        </div>

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

                {/* Syndicate Link */}
                <Link 
                  href="/syndicate"
                  className={`flex items-center gap-2 font-black uppercase italic text-sm group ${pathname === '/syndicate' ? 'text-blue-500' : ''}`}
                >
                  <Target className={`w-5 h-5 group-hover:scale-110 transition-all ${pathname === '/syndicate' ? 'text-blue-500' : ''}`} />
                  <span className="hidden lg:inline">Syndicate</span>
                </Link>

                {/* Vault Control Link */}
                <Link 
                  href={(session.user as any).role === 'admin' ? "/admin" : "/vault"}
                  className={`flex items-center gap-2 px-3 py-1.5 border-4 border-manga-ink font-black uppercase italic text-xs group shadow-[4px_4px_0px_0px_var(--manga-shadow-color)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all ${
                    pathname === '/admin' || pathname === '/vault' 
                      ? 'bg-manga-ink text-manga-paper' 
                      : (session.user as any).role === 'admin' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-manga-paper text-manga-ink'
                  }`}
                >
                  <PlusCircle className="w-5 h-5 group-hover:rotate-90 transition-all" />
                  <span className="hidden md:inline">Vault Control</span>
                </Link>

                {/* Pulse Bell / Notifications */}
                <div className="relative">
                  <motion.button 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowNotifications(!showNotifications)}
                    className={`relative p-2 border-4 border-manga-ink transition-all ${unreadCount > 0 ? 'bg-red-500 text-white animate-pulse' : 'bg-manga-paper text-manga-ink hover:bg-manga-ink hover:text-manga-paper'}`}
                  >
                    <Bell className="w-5 h-5" />
                    {unreadCount > 0 && (
                      <span className="absolute -top-3 -right-3 bg-black text-white text-[10px] font-black px-1.5 py-0.5 border-2 border-white">
                        {unreadCount}
                      </span>
                    )}
                  </motion.button>

                  <AnimatePresence>
                    {showNotifications && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute right-0 mt-4 w-80 bg-manga-paper border-4 border-manga-ink p-4 shadow-[12px_12px_0px_0px_var(--manga-shadow-color)] z-[100]"
                      >
                        <h4 className="text-sm font-black uppercase italic border-b-4 border-manga-ink pb-2 mb-4 flex items-center justify-between">
                          Archival Intel
                          <span className="text-[10px] opacity-40 font-bold">SIGNAL v1.0</span>
                        </h4>

                        <div className="space-y-3 max-h-[300px] overflow-y-auto custom-scrollbar">
                          {notifications.length === 0 ? (
                            <div className="py-8 text-center opacity-30 italic font-bold">The Vault is silent...</div>
                          ) : (
                            notifications.map((n) => (
                              <div 
                                key={n._id} 
                                className={`p-3 border-2 border-manga-ink/10 relative group ${!n.read ? 'bg-red-500/5 border-l-4 border-l-red-500' : ''}`}
                              >
                                <div className="flex justify-between items-start gap-2">
                                  <p className="text-[10px] font-black uppercase tracking-tighter leading-tight flex-1">
                                    {n.message}
                                  </p>
                                  {!n.read && (
                                    <button 
                                      onClick={async () => {
                                        await markNotificationRead(n._id);
                                        refreshNotifications();
                                      }}
                                      className="text-red-500 hover:scale-110 transition-all"
                                    >
                                      <Zap className="w-3 h-3 fill-current" />
                                    </button>
                                  )}
                                </div>
                                <div className="flex items-center justify-between mt-2">
                                  <span className="text-[8px] font-mono opacity-40">{new Date(n.createdAt).toLocaleTimeString()}</span>
                                  {n.animeId && (
                                    <Link 
                                      href={`/archive/${n.animeId}`}
                                      onClick={() => setShowNotifications(false)}
                                      className="text-[8px] font-black uppercase italic bg-manga-ink text-manga-paper px-2 py-0.5 hover:bg-red-500 transition-colors"
                                    >
                                      Jump to Archive
                                    </Link>
                                  )}
                                </div>
                              </div>
                            ))
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

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
                          src={getAssetPath((session.user as any).profileImage)} 
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
