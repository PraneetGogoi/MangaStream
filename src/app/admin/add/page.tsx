"use client";

import { useState } from "react";
import { upsertAnime, upsertCharacters } from "../../actions";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, X, Save, AlertTriangle, ShieldCheck, 
  Link as LinkIcon, Image as ImageIcon, Music, 
  CheckCircle2, ArrowLeft, Zap, Sparkles, UserPlus, Users
} from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ForgeAnimePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  // Dynamic Form States
  const [formOpenings, setFormOpenings] = useState<{ title: string; url: string }[]>([{ title: "OPENING 1", url: "" }]);
  const [formPreviews, setFormPreviews] = useState<string[]>([""]);
  const [hasArchive, setHasArchive] = useState(false);
  const [formCharacters, setFormCharacters] = useState<any[]>([]);

  // Authentication & Authorization Check
  if (status === "loading") return null;
  if (status === "unauthenticated" || (session && (session.user as any).role !== "admin")) {
    router.push("/login");
    return null;
  }

  // Dynamic Logic
  const addOpening = () => setFormOpenings(prev => [...prev, { title: `OPENING ${prev.length + 1}`, url: "" }]);
  const removeOpening = (index: number) => setFormOpenings(prev => prev.filter((_, i) => i !== index));
  const updateOpening = (index: number, field: 'title' | 'url', value: string) => {
    setFormOpenings(prev => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
  };

  const addPreview = () => setFormPreviews(prev => [...prev, ""]);
  const removePreview = (index: number) => setFormPreviews(prev => prev.filter((_, i) => i !== index));
  const updatePreview = (index: number, value: string) => {
    setFormPreviews(prev => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  };

  const addCharacter = () => setFormCharacters(prev => [...prev, {
    name: "",
    role: "Personnel",
    image: "",
    description: "",
    bio: "",
    abilities: [],
    affiliation: "",
    status: "Active",
    origin: ""
  }]);
  const removeCharacter = (index: number) => setFormCharacters(prev => prev.filter((_, i) => i !== index));
  const updateCharacter = (index: number, field: string, value: any) => {
    setFormCharacters(prev => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
  };

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    
    const categories = (formData.get("categories") as string).split(",").map(c => c.trim()).filter(c => c);
    const animeId = formData.get("id")?.toString() || "";

    const animeData = {
      id: animeId,
      title: formData.get("title")?.toString() || "",
      description: formData.get("description")?.toString() || "",
      posterImage: formData.get("posterImage")?.toString() || "",
      trailerUrl: formData.get("trailerUrl")?.toString() || "",
      categories,
      openings: formOpenings.filter(op => op.url && op.url.trim() !== ""),
      previews: formPreviews.filter(p => p && p.trim() !== ""),
      hasArchive: hasArchive || formCharacters.length > 0, // Auto-enable if characters added
    };

    // 1. Commit Anime Artifact
    const animeResult = await upsertAnime(animeData);
    
    if (animeResult.success) {
      // 2. Commit Personnel Registry
      const charResult = await upsertCharacters(animeId, formCharacters);
      
      if (charResult.success) {
        setMessage({ type: 'success', text: "ANIME & PERSONNEL FORGED SUCCESSFULLY. REDIRECTING..." });
        setTimeout(() => router.push("/admin"), 2000);
      } else {
        setMessage({ type: 'error', text: `ANIME FORGED, BUT REGISTRY FAILED: ${charResult.error}` });
      }
    } else {
      setMessage({ type: 'error', text: animeResult.error || "FORGE FAILED. CHECK SYSTEM LOGS." });
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-manga-paper text-manga-ink pb-20 selection:bg-manga-ink selection:text-manga-paper transition-colors duration-300 relative overflow-x-hidden">
      <div className="absolute inset-0 halftone opacity-5 pointer-events-none" />

      {/* Header Section */}
      <header className="fixed top-0 inset-x-0 bg-manga-paper/80 backdrop-blur-md border-b-[6px] border-manga-ink z-[100] px-4 md:px-8 py-6 flex items-center justify-between">
        <Link 
          href="/admin"
          className="flex items-center gap-3 font-black uppercase italic group"
        >
          <div className="bg-manga-ink p-2 group-hover:-translate-x-1 transition-transform">
            <ArrowLeft className="text-manga-paper w-6 h-6" />
          </div>
          <span>Back to Vault</span>
        </Link>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-xs font-black uppercase opacity-40">
            <ShieldCheck className="w-4 h-4" />
            Clearance Level: Admin
          </div>
          <div className="h-8 w-[4px] bg-manga-ink hidden md:block" />
          <h1 className="text-2xl font-black uppercase italic tracking-tighter">Forge Entry</h1>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 pt-32 md:pt-40">
        <div className="mb-12 relative">
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="absolute -top-16 -left-10 text-[120px] font-black uppercase italic text-manga-ink opacity-5 select-none pointer-events-none whitespace-nowrap"
          >
            CREATE NEW
          </motion.div>
          <div className="flex items-center gap-6 mb-4">
               <div className="bg-manga-ink p-4 rotate-[-3deg] shadow-[8px_8px_0px_0px_var(--manga-shadow-color)]">
                    <Zap className="text-manga-paper w-12 h-12" />
               </div>
               <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
                Vault <span className="bg-manga-ink text-manga-paper px-4">Forgery</span>
               </h2>
          </div>
          <p className="text-xl font-bold border-l-[6px] border-manga-ink pl-6 uppercase max-w-2xl italic tracking-tight">
            Input the narrative metadata to forge a new artifact in the discovery network.
          </p>
        </div>

        <AnimatePresence>
          {message && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className={`mb-12 p-8 border-[8px] border-manga-ink font-black uppercase italic text-2xl flex items-center justify-between ${
                message.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
              } shadow-[16px_16px_0px_0px_var(--manga-shadow-color)]`}
            >
              <div className="flex items-center gap-6">
                <AlertTriangle className="w-10 h-10" />
                {message.text}
              </div>
              <button onClick={() => setMessage(null)}><X className="w-8 h-8" /></button>
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSave} className="space-y-20">
          {/* Identity Section */}
          <section className="relative">
            <div className="bg-manga-ink text-manga-paper px-6 py-2 inline-block font-black uppercase italic text-xl mb-8 skew-x-[-10deg]">
              Section 01: Core Identity
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-manga-paper border-[6px] border-manga-ink p-8 shadow-[16px_16px_0px_0px_var(--manga-shadow-color)] relative">
                <div className="space-y-8">
                    <div>
                        <label className="block text-xs font-black uppercase tracking-widest opacity-40 mb-3 underline decoration-4 decoration-manga-ink/20">Designation (ID Code)</label>
                        <input 
                        name="id" 
                        required 
                        className="w-full bg-transparent border-b-6 border-manga-ink text-4xl font-black uppercase italic py-3 focus:outline-none focus:border-red-500 transition-all font-geist-sans"
                        placeholder="e.g. death-note"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-black uppercase tracking-widest opacity-40 mb-3 underline decoration-4 decoration-manga-ink/20">Official Title</label>
                        <input 
                        name="title" 
                        required 
                        className="w-full bg-transparent border-b-6 border-manga-ink text-4xl font-black uppercase italic py-3 focus:outline-none focus:border-red-500 transition-all font-geist-sans"
                        placeholder="ANIME TITLE..."
                        />
                    </div>
                </div>

                <div className="space-y-8">
                    <div>
                        <label className="block text-xs font-black uppercase tracking-widest opacity-40 mb-3 underline decoration-4 decoration-manga-ink/20">Classifications (Tags)</label>
                        <input 
                        name="categories" 
                        required 
                        className="w-full bg-transparent border-b-6 border-manga-ink text-2xl font-black uppercase italic py-3 focus:outline-none focus:border-red-500 transition-all font-geist-sans"
                        placeholder="ACTION, DRAMA, MYSTERY..."
                        />
                        <p className="mt-2 text-[10px] font-bold uppercase opacity-30 italic">Separate with commas</p>
                    </div>
                    
                    <motion.div 
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setHasArchive(!hasArchive)}
                        className="flex items-center gap-6 cursor-pointer group mt-4 p-4 border-4 border-dashed border-manga-ink/20 hover:border-manga-ink hover:bg-manga-ink/5 transition-all"
                    >
                        <div className={`w-12 h-12 border-[6px] border-manga-ink flex items-center justify-center transition-colors ${hasArchive ? 'bg-manga-ink text-manga-paper' : 'bg-transparent'}`}>
                        {hasArchive && <CheckCircle2 className="w-8 h-8" />}
                        </div>
                        <div>
                            <span className="font-black uppercase italic text-2xl tracking-tighter block leading-none">Character Archive</span>
                            <span className="text-[10px] font-bold uppercase opacity-40">Enable character metadata terminal access</span>
                        </div>
                    </motion.div>
                </div>
            </div>
          </section>

          {/* Narrative & Visuals */}
          <section className="relative">
             <div className="bg-manga-ink text-manga-paper px-6 py-2 inline-block font-black uppercase italic text-xl mb-8 skew-x-[-10deg]">
              Section 02: Narrative & Visuals
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-manga-paper border-[6px] border-manga-ink p-8 shadow-[16px_16px_0px_0px_var(--manga-shadow-color)] relative">
                <div className="md:col-span-2">
                    <label className="block text-xs font-black uppercase tracking-widest opacity-40 mb-3 underline decoration-4 decoration-manga-ink/20">Narrative Synopsis</label>
                    <textarea 
                    name="description" 
                    required 
                    rows={4}
                    className="w-full bg-manga-ink/5 border-4 border-manga-ink p-6 text-xl font-bold focus:outline-none focus:bg-manga-paper transition-all font-geist-sans uppercase resize-none leading-snug"
                    placeholder="THE STORY UNFOLDS AS..."
                    />
                </div>

                <div>
                    <label className="block text-xs font-black uppercase tracking-widest opacity-40 mb-3 underline decoration-4 decoration-manga-ink/20">Poster Source (URL)</label>
                    <div className="flex gap-4">
                        <div className="bg-manga-ink p-4 self-start">
                            <ImageIcon className="text-manga-paper w-8 h-8" />
                        </div>
                        <input 
                            name="posterImage" 
                            required 
                            className="w-full bg-transparent border-b-6 border-manga-ink text-xl font-bold py-3 focus:outline-none transition-all font-geist-sans"
                            placeholder="https://..."
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-black uppercase tracking-widest opacity-40 mb-3 underline decoration-4 decoration-manga-ink/20">Primary Transmission (YouTube URL)</label>
                    <div className="flex gap-4">
                        <div className="bg-manga-ink p-4 self-start">
                            <Zap className="text-manga-paper w-8 h-8" />
                        </div>
                        <input 
                            name="trailerUrl" 
                            required 
                            className="w-full bg-transparent border-b-6 border-manga-ink text-xl font-bold py-3 focus:outline-none transition-all font-geist-sans"
                            placeholder="https://youtube.com/watch?v=..."
                        />
                    </div>
                </div>
            </div>
          </section>

          {/* Media Sections Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
             {/* Openings */}
             <section className="space-y-8">
                <div className="flex items-center justify-between border-b-6 border-manga-ink pb-4">
                    <h3 className="text-3xl font-black uppercase italic flex items-center gap-4">
                        <Music className="w-10 h-10" /> Opening Themes
                    </h3>
                    <motion.button 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        type="button" 
                        onClick={addOpening}
                        className="bg-manga-ink text-manga-paper p-3 shadow-[4px_4px_0px_0px_var(--manga-shadow-color)]"
                    >
                        <Plus className="w-6 h-6" />
                    </motion.button>
                </div>

                <div className="space-y-6">
                    <AnimatePresence initial={false}>
                        {formOpenings.map((op, idx) => (
                            <motion.div 
                                key={`op-${idx}`}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: 20, opacity: 0 }}
                                className="bg-manga-paper border-[6px] border-manga-ink p-6 shadow-[10px_10px_0px_0px_var(--manga-shadow-color)] relative group"
                            >
                                <button 
                                    type="button" 
                                    onClick={() => removeOpening(idx)}
                                    className="absolute -top-4 -right-4 bg-red-500 text-white p-2 border-4 border-manga-ink shadow-[4px_4px_0px_0px_var(--manga-shadow-color)] opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                                <div className="space-y-4">
                                    <input 
                                        value={op.title}
                                        onChange={(e) => updateOpening(idx, 'title', e.target.value.toUpperCase())}
                                        className="w-full bg-transparent border-b-4 border-manga-ink/30 font-black text-2xl uppercase italic p-1 focus:border-manga-ink outline-none transition-colors"
                                        placeholder="THEME TITLE (e.g. GURENGE)"
                                    />
                                    <input 
                                        value={op.url}
                                        onChange={(e) => updateOpening(idx, 'url', e.target.value)}
                                        className="w-full bg-transparent border-b-4 border-manga-ink/30 font-bold text-sm italic p-1 focus:border-manga-ink outline-none transition-colors"
                                        placeholder="YOUTUBE SOURCE URL"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
             </section>

              {/* Gallery */}
             <section className="space-y-8">
                <div className="flex items-center justify-between border-b-6 border-manga-ink pb-4">
                    <h3 className="text-3xl font-black uppercase italic flex items-center gap-4">
                        <ImageIcon className="w-10 h-10" /> Preview Gallery
                    </h3>
                    <motion.button 
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        type="button" 
                        onClick={addPreview}
                        className="bg-manga-ink text-manga-paper p-3 shadow-[4px_4px_0px_0px_var(--manga-shadow-color)]"
                    >
                        <Plus className="w-6 h-6" />
                    </motion.button>
                </div>

                <div className="space-y-6">
                    <AnimatePresence initial={false}>
                        {formPreviews.map((url, idx) => (
                            <motion.div 
                                key={`prev-${idx}`}
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -20, opacity: 0 }}
                                className="bg-manga-paper border-[6px] border-manga-ink p-4 flex gap-6 items-center shadow-[10px_10px_0px_0px_var(--manga-shadow-color)] group"
                            >
                                <div className="w-20 h-20 bg-manga-ink flex-shrink-0 relative overflow-hidden border-2 border-manga-ink">
                                    {url ? (
                                        <img src={url} alt="" className="w-full h-full object-cover grayscale" />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <ImageIcon className="text-manga-paper/20 w-8 h-8" />
                                        </div>
                                    )}
                                </div>
                                <div className="flex-1">
                                    <input 
                                        value={url}
                                        onChange={(e) => updatePreview(idx, e.target.value)}
                                        className="w-full bg-transparent border-b-4 border-manga-ink/30 font-bold text-sm italic py-2 focus:border-manga-ink outline-none transition-colors"
                                        placeholder="ARTIFACT SOURCE (IMAGE URL)"
                                    />
                                </div>
                                <button 
                                    type="button" 
                                    onClick={() => removePreview(idx)}
                                    className="text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <X className="w-8 h-8" />
                                </button>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
             </section>
          </div>

          {/* Personnel Registry Section */}
          <section className="relative mt-20 pt-20 border-t-[10px] border-manga-ink">
                <div className="absolute -top-12 left-10 bg-manga-ink text-manga-paper px-8 py-3 font-black uppercase italic text-2xl skew-x-[-15deg] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
                    Section 03: Personnel Registry
                </div>

                <div className="flex items-center justify-between mb-12">
                   <div className="flex items-center gap-6">
                        <div className="bg-manga-ink p-4 rotate-[5deg] shadow-[8px_8px_0px_0px_var(--manga-shadow-color)]">
                            <Users className="text-manga-paper w-12 h-12" />
                        </div>
                        <div>
                            <h3 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">Personnel <span className="bg-manga-ink text-manga-paper px-2">Archive</span></h3>
                            <p className="text-xs font-black uppercase opacity-40 tracking-[0.2em] mt-1">Archive individual identity data for the discovery terminal.</p>
                        </div>
                   </div>
                   <motion.button 
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        whileTap={{ scale: 0.95 }}
                        type="button" 
                        onClick={addCharacter}
                        className="bg-manga-ink text-manga-paper px-6 py-3 font-black uppercase italic flex items-center gap-3 shadow-[8px_8px_0px_0px_var(--manga-shadow-color)]"
                    >
                        <UserPlus className="w-6 h-6" />
                        New Entry
                    </motion.button>
                </div>

                {formCharacters.length === 0 ? (
                    <div className="py-20 text-center border-[6px] border-dashed border-manga-ink/10 bg-manga-ink/[0.02]">
                        <div className="w-20 h-20 border-4 border-manga-ink/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Users className="w-10 h-10 opacity-10" />
                        </div>
                        <p className="text-2xl font-black uppercase italic opacity-20 tracking-tighter">Personnel Registry is Empty.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-12">
                        <AnimatePresence initial={false}>
                            {formCharacters.map((char, idx) => (
                                <motion.div 
                                    key={`char-${idx}`}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 50 }}
                                    className="bg-manga-paper border-[6px] border-manga-ink p-8 shadow-[16px_16px_0px_0px_var(--manga-shadow-color)] relative group"
                                >
                                    <button 
                                        type="button" 
                                        onClick={() => removeCharacter(idx)}
                                        className="absolute -top-4 -right-4 bg-red-500 text-white p-3 border-4 border-manga-ink shadow-[4px_4px_0px_0px_var(--manga-shadow-color)] z-20 hover:scale-110 transition-transform"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>

                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                                        {/* Character Photo Input */}
                                        <div className="lg:col-span-3 space-y-4">
                                            <div className="aspect-[3/4] bg-manga-ink border-[6px] border-manga-ink relative overflow-hidden group/photo shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
                                                {char.image ? (
                                                    <img src={char.image} alt={char.name} className="w-full h-full object-cover grayscale group-hover/photo:grayscale-0 transition-all duration-500" />
                                                ) : (
                                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                                                        <ImageIcon className="text-manga-paper/20 w-12 h-12 mb-4" />
                                                        <p className="text-[10px] font-black uppercase text-manga-paper/40">Visual Source Needed</p>
                                                    </div>
                                                )}
                                                <div className="absolute bottom-0 inset-x-0 bg-manga-ink p-2 text-center text-[10px] font-black uppercase text-manga-paper tracking-widest translate-y-full group-hover/photo:translate-y-0 transition-transform">
                                                    Biometric Link
                                                </div>
                                            </div>
                                            <input 
                                                value={char.image}
                                                onChange={(e) => updateCharacter(idx, 'image', e.target.value)}
                                                className="w-full bg-gray-50 border-b-4 border-manga-ink p-2 text-xs font-bold italic focus:bg-white outline-none"
                                                placeholder="PHOTO URL..."
                                            />
                                        </div>

                                        {/* Character Intel Input */}
                                        <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-6">
                                                <div>
                                                    <label className="block text-[10px] font-black uppercase opacity-40 mb-2">Personnel Designation (Name)</label>
                                                    <input 
                                                        value={char.name}
                                                        onChange={(e) => updateCharacter(idx, 'name', e.target.value.toUpperCase())}
                                                        className="w-full bg-transparent border-b-4 border-manga-ink text-3xl font-black italic p-1 focus:outline-none placeholder:opacity-20"
                                                        placeholder="FULL NAME..."
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-[10px] font-black uppercase opacity-40 mb-2">Role / Class</label>
                                                    <input 
                                                        value={char.role}
                                                        onChange={(e) => updateCharacter(idx, 'role', e.target.value)}
                                                        className="w-full bg-transparent border-b-4 border-manga-ink text-xl font-bold p-1 focus:outline-none placeholder:opacity-20"
                                                        placeholder="e.g. PROTAGONIST / SOLDIER"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-[10px] font-black uppercase opacity-40 mb-2">Operational Status</label>
                                                    <select 
                                                        value={char.status}
                                                        onChange={(e) => updateCharacter(idx, 'status', e.target.value)}
                                                        className="w-full bg-manga-ink text-manga-paper font-black uppercase italic p-2 border-b-4 border-manga-ink outline-none cursor-pointer"
                                                    >
                                                        <option value="Active">Operational (Active)</option>
                                                        <option value="Deceased">Terminated (Deceased)</option>
                                                        <option value="Unknown">Status Unknown</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="space-y-6">
                                                <div>
                                                    <label className="block text-[10px] font-black uppercase opacity-40 mb-2">Intel Brief (Short Intro)</label>
                                                    <textarea 
                                                        value={char.description}
                                                        onChange={(e) => updateCharacter(idx, 'description', e.target.value)}
                                                        rows={2}
                                                        className="w-full bg-gray-50 border-4 border-manga-ink p-4 font-bold text-sm focus:bg-white outline-none resize-none uppercase"
                                                        placeholder="SUMMARY OF RECORDS..."
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-[10px] font-black uppercase opacity-40 mb-2">Full Narrative History (Biography)</label>
                                                    <textarea 
                                                        value={char.bio}
                                                        onChange={(e) => updateCharacter(idx, 'bio', e.target.value)}
                                                        rows={4}
                                                        className="w-full bg-gray-50 border-4 border-manga-ink p-4 font-bold text-sm focus:bg-white outline-none resize-none uppercase"
                                                        placeholder="EXTENDED BIOGRAPHY..."
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                )}
          </section>

          {/* Submit Footer */}
          <div className="pt-20 pb-40">
                <motion.button 
                    whileHover={{ scale: 1.02, y: -10 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    className="w-full py-10 bg-manga-ink text-manga-paper border-[8px] border-manga-ink text-6xl font-black uppercase italic shadow-[30px_30px_0px_0px_var(--manga-shadow-glow)] hover:shadow-none transition-all flex items-center justify-center gap-8 group disabled:opacity-50"
                >
                    {isSubmitting ? (
                        <div className="w-20 h-20 border-8 border-manga-paper border-t-transparent rounded-full animate-spin" />
                    ) : (
                        <>
                            <Save className="w-16 h-16 group-hover:scale-125 transition-transform" />
                            COMMIT TO VAULT
                        </>
                    )}
                </motion.button>
          </div>
        </form>
      </main>

      {/* Background Decorative Sparkles */}
      <div className="fixed bottom-10 left-10 pointer-events-none opacity-20">
            <Sparkles className="w-20 h-20 text-manga-ink animate-pulse" />
      </div>
    </div>
  );
}
