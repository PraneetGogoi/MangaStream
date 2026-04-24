"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldAlert, Zap, Flame, Brain, Users, 
  Target, Activity, ChevronRight, ArrowLeft, 
  Sparkle, Radio, Loader2, ShieldCheck,
  UserCheck, LogOut, Layers
} from "lucide-react";
import { useState, useEffect } from "react";
import { useSession } from "@/components/AuthProvider";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getSyndicates, joinSyndicate, leaveSyndicate } from "../actions";

const IconMap: Record<string, any> = {
  ShieldAlert,
  Zap,
  Flame,
  Brain
};

export default function SyndicatePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [syndicates, setSyndicates] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [showTrustNotif, setShowTrustNotif] = useState(false);

  const loadData = async () => {
    const data = await getSyndicates();
    setSyndicates(data);
    setIsLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleJoin = async (slug: string) => {
    if (status === "unauthenticated") {
      router.push("/login");
      return;
    }
    setActionLoading(slug);
    const result = await joinSyndicate(slug);
    if (result.success) {
      setShowTrustNotif(true);
      setTimeout(() => setShowTrustNotif(false), 4000);
      await loadData();
    } else {
      alert(result.error);
    }
    setActionLoading(null);
  };

  const handleLeave = async (slug: string) => {
    setActionLoading(slug);
    const result = await leaveSyndicate(slug);
    if (result.success) {
      await loadData();
    }
    setActionLoading(null);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-manga-paper flex flex-col items-center justify-center p-8">
        <Loader2 className="w-16 h-16 text-manga-ink animate-spin" />
        <h1 className="text-4xl font-black uppercase italic mt-8 animate-pulse">Syncing Syndicates...</h1>
      </div>
    );
  }

  const userId = (session?.user as any)?.id;

  return (
    <div className="min-h-screen bg-manga-paper text-manga-ink selection:bg-manga-ink selection:text-manga-paper pb-40 relative transition-colors duration-300">
      <div className="absolute inset-0 halftone opacity-5 pointer-events-none" />
      
      <main className="max-w-7xl mx-auto px-4 pt-32 md:pt-40">
        {/* Header Section */}
        <div className="mb-20 relative">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 mb-12 bg-manga-ink text-manga-paper px-6 py-3 font-black uppercase italic text-sm hover:translate-x-2 transition-all shadow-[8px_8px_0px_0px_var(--manga-shadow-color)] group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Discovery Hub
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="flex items-center gap-8">
                <div className="bg-manga-ink p-8 rotate-[-4deg] shadow-[16px_16px_0px_0px_var(--manga-shadow-color)]">
                    <Target className="text-manga-paper w-20 h-20" />
                </div>
                <div>
                    <div className="text-[10px] font-black uppercase opacity-40 tracking-[0.4em] mb-3 flex items-center gap-3">
                        <Radio className="w-4 h-4 animate-pulse text-red-500" /> Organizational Terminal Active
                    </div>
                    <h2 className="text-7xl md:text-9xl font-black tracking-tighter uppercase italic leading-none">
                        The <br />
                        <span className="bg-manga-ink text-manga-paper px-6 inline-block transform rotate-[1deg]">Syndicate</span>
                    </h2>
                </div>
            </div>
            
            <div className="max-w-md text-right">
                <p className="text-xl font-bold uppercase italic leading-tight border-r-8 border-manga-ink pr-6">
                    Muster your strength. Join a faction. <br />
                    Aggregate power levels and dominate the global discourse.
                </p>
            </div>
          </div>
        </div>

        {/* Global Stats Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 border-y-[6px] border-manga-ink py-12 relative">
             <div className="absolute top-0 left-0 bg-manga-ink text-manga-paper px-4 py-1 text-[10px] font-black uppercase tracking-widest italic -translate-y-1/2">
                Network Heuristics
             </div>
             <div className="flex flex-col items-center justify-center p-8 border-r-4 border-manga-ink/10">
                <div className="text-6xl font-black italic mb-2">{syndicates.length}</div>
                <div className="text-xs font-black uppercase opacity-40">Active Cells</div>
             </div>
             <div className="flex flex-col items-center justify-center p-8 border-r-4 border-manga-ink/10">
                <div className="text-6xl font-black italic mb-2">
                    {syndicates.reduce((acc, s) => acc + (s.members?.length || 0), 0)}
                </div>
                <div className="text-xs font-black uppercase opacity-40">Registered Agents</div>
             </div>
             <div className="flex flex-col items-center justify-center p-8">
                <div className="text-6xl font-black italic mb-2 text-blue-500">
                    {syndicates.reduce((acc, s) => acc + (s.powerLevel || 0), 0)}
                </div>
                <div className="text-xs font-black uppercase opacity-40">Total Network Power</div>
             </div>
        </div>

        {/* Syndicate Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {syndicates.map((syn) => {
                const isMember = syn.members.some((m: any) => 
                    (typeof m === 'string' ? m : m._id) === userId
                );
                const Icon = IconMap[syn.iconType] || Layers;

                return (
                    <motion.div 
                        key={syn.slug}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="group relative bg-white border-[8px] border-manga-ink p-10 shadow-[24px_24px_0px_0px_var(--manga-shadow-color)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all"
                    >
                        {/* Status Stamp */}
                        {isMember && (
                            <div className="absolute top-0 right-0 p-6 z-20">
                                <div className="bg-manga-ink text-manga-paper px-4 py-1 text-[10px] font-black uppercase italic flex items-center gap-2 rotate-[4deg] shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]">
                                    <ShieldCheck className="w-4 h-4" /> Agent Active
                                </div>
                            </div>
                        )}

                        <div className="flex flex-col md:flex-row gap-10">
                            <div className="flex-shrink-0">
                                <div 
                                    className="w-32 h-32 border-8 border-manga-ink flex items-center justify-center rotate-[-8deg] group-hover:rotate-0 transition-transform duration-500"
                                    style={{ backgroundColor: syn.accentColor }}
                                >
                                    <Icon className="text-manga-paper w-16 h-16" />
                                </div>
                            </div>
                            
                            <div className="flex-1">
                                <div className="text-[10px] font-black uppercase opacity-40 mb-2 tracking-[0.2em]">{syn.genre} FRAGMENT</div>
                                <h3 className="text-4xl font-black uppercase italic tracking-tighter mb-4 leading-none">
                                    {syn.name.split(' ').map((word: string, i: number) => (
                                        <span key={i} className={i === 1 ? "bg-manga-ink text-manga-paper px-2" : ""}>{word} </span>
                                    ))}
                                </h3>
                                <p className="text-sm font-bold uppercase opacity-60 leading-relaxed mb-8">
                                    {syn.description}
                                </p>

                                <div className="grid grid-cols-2 gap-6 mb-8 pt-6 border-t-2 border-manga-ink/10">
                                    <div className="space-y-1">
                                        <div className="text-[10px] font-black uppercase opacity-40">Cell Capacity</div>
                                        <div className="text-2xl font-black italic">{syn.members?.length || 0} AGENTS</div>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="text-[10px] font-black uppercase opacity-40">Power Level</div>
                                        <div className="text-2xl font-black italic text-blue-500">{syn.powerLevel || 0} GW</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    {!isMember ? (
                                        <motion.button 
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => handleJoin(syn.slug)}
                                            disabled={actionLoading === syn.slug}
                                            className="flex-1 py-4 bg-manga-ink text-manga-paper font-black uppercase italic text-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-none transition-all flex items-center justify-center gap-3 group/btn"
                                        >
                                            {actionLoading === syn.slug ? (
                                                <Loader2 className="w-6 h-6 animate-spin" />
                                            ) : (
                                                <>
                                                    <UserCheck className="w-6 h-6 group-hover/btn:rotate-12 transition-transform" />
                                                    Pledge Allegiance
                                                </>
                                            )}
                                        </motion.button>
                                    ) : (
                                        <motion.button 
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => handleLeave(syn.slug)}
                                            disabled={actionLoading === syn.slug}
                                            className="flex-1 py-4 bg-white border-4 border-manga-ink text-manga-ink font-black uppercase italic text-lg hover:bg-red-500 hover:text-white hover:border-red-500 transition-all flex items-center justify-center gap-3 group/btn"
                                        >
                                            {actionLoading === syn.slug ? (
                                                <Loader2 className="w-6 h-6 animate-spin" />
                                            ) : (
                                                <>
                                                    <LogOut className="w-6 h-6 group-hover/btn:-translate-x-1 transition-transform" />
                                                    Sever Connection
                                                </>
                                            )}
                                        </motion.button>
                                    )}
                                    <div className="w-16 h-16 border-4 border-black flex items-center justify-center group-hover:bg-manga-ink transition-colors">
                                        <ChevronRight className="group-hover:text-manga-paper transition-colors" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Flourish */}
                        <div className="absolute -bottom-6 -right-6 halftone opacity-10 w-24 h-24 -z-10 group-hover:rotate-90 transition-transform duration-700" />
                    </motion.div>
                );
            })}
        </div>
      </main>

      {/* Trust Notification Overlay */}
      <AnimatePresence>
        {showTrustNotif && (
            <motion.div 
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                className="fixed bottom-12 right-12 z-[200] bg-manga-ink text-manga-paper p-8 border-[6px] border-white shadow-[12px_12px_0px_0px_rgba(0,0,0,0.5)] flex items-center gap-6"
            >
                <div className="bg-white p-3 rotate-12">
                    <ShieldCheck className="text-manga-ink w-8 h-8" />
                </div>
                <div>
                    <h5 className="text-2xl font-black uppercase italic italic leading-none mb-1">TRUST SYNCHRONIZED</h5>
                    <p className="text-xs font-bold uppercase opacity-60">+5 REPUTATION COMMITTED TO PROFILE</p>
                </div>
            </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Banner */}
      <div className="mt-40 bg-manga-ink text-manga-paper py-20 px-4 overflow-hidden relative">
            <motion.div 
                animate={{ x: [-1000, 1000] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="text-[120px] font-black uppercase italic opacity-5 whitespace-nowrap select-none"
            >
                THE SYNDICATE NETWORK • ACTIVE FRAGMENTS • JOIN THE DISCOURSE • THE SYNDICATE NETWORK
            </motion.div>
            <div className="max-w-7xl mx-auto relative z-10 text-center">
                <Sparkle className="w-12 h-12 mx-auto mb-6 text-blue-400 animate-spin-slow" />
                <h4 className="text-4xl font-black uppercase italic mb-4">Allegiance is Absolute</h4>
                <p className="text-sm font-bold uppercase opacity-60 tracking-[0.2em]">Your fragments contribute to the global power lattice.</p>
            </div>
      </div>
    </div>
  );
}
