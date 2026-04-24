"use client";

import { useState, useEffect, useCallback } from "react";
import { getAllAnime, upsertAnime, deleteAnime, getCharactersForAnime, upsertCharacters, uploadArchiveAsset } from "../actions";
import { Anime } from "@/data/mockAnime";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, Plus, Edit, Trash2, X, Save, AlertTriangle, ShieldCheck, Link as LinkIcon, Image as ImageIcon, Music, CheckCircle2, Circle, UserPlus, Users, Upload, HardDrive, FilePlus, Loader2 } from "lucide-react";
import { useSession } from "@/components/AuthProvider";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [animeList, setAnimeList] = useState<Anime[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingAnime, setEditingAnime] = useState<Partial<Anime> | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  // Dynamic Form States
  const [formOpenings, setFormOpenings] = useState<{ title: string; url: string }[]>([]);
  const [formPreviews, setFormPreviews] = useState<string[]>([]);
  const [hasArchive, setHasArchive] = useState(false);
  const [formCharacters, setFormCharacters] = useState<any[]>([]);
  const [isUploading, setIsUploading] = useState<string | null>(null);

  // Authentication & Authorization Check
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    } else if (session && (session.user as any).role !== "admin") {
      router.push("/");
    }
  }, [session, status, router]);

  const fetchAnime = useCallback(async () => {
    setIsLoading(true);
    const data = await getAllAnime();
    setAnimeList(data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (session && (session.user as any).role === "admin") {
      fetchAnime();
    }
  }, [session, fetchAnime]);

  const handleEdit = async (anime: Anime) => {
    setEditingAnime(anime);
    setFormOpenings(anime.openings || []);
    setFormPreviews(anime.previews || []);
    setHasArchive(!!anime.hasArchive);
    
    // Fetch characters for this anime
    const chars = await getCharactersForAnime(anime.id);
    setFormCharacters(chars || []);
    
    setIsFormOpen(true);
  };

  const handleAddNew = () => {
    router.push("/admin/add");
  };

  const handleDelete = async (id: string) => {
    setDeleteConfirmId(id);
  };

  const confirmDelete = async () => {
    if (!deleteConfirmId) return;
    const id = deleteConfirmId;
    setDeleteConfirmId(null);
    const result = await deleteAnime(id);
    if (result.success) {
      setMessage({ type: 'success', text: "Record Expunged Successfully" });
      fetchAnime();
    } else {
      setMessage({ type: 'error', text: result.error || "Expungement Failed" });
    }
  };

  // Dynamic Logic
  const addOpening = () => setFormOpenings([...formOpenings, { title: `OPENING ${formOpenings.length + 1}`, url: "" }]);
  const removeOpening = (index: number) => setFormOpenings(formOpenings.filter((_, i) => i !== index));
  const updateOpening = (index: number, field: 'title' | 'url', value: string) => {
    setFormOpenings(prev => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
  };

  const addPreview = () => setFormPreviews([...formPreviews, ""]);
  const removePreview = (index: number) => setFormPreviews(formPreviews.filter((_, i) => i !== index));
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
    status: "Active"
  }]);
  const removeCharacter = (index: number) => setFormCharacters(prev => prev.filter((_, i) => i !== index));
  const updateCharacter = (index: number, field: string, value: any) => {
    setFormCharacters(prev => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
  };
  
  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>, type: 'poster' | 'preview' | 'character', index?: number) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const uploadKey = index !== undefined ? `${type}-${index}` : type;
    setIsUploading(uploadKey);

    const formData = new FormData();
    formData.append("file", file);

    const result = await uploadArchiveAsset(formData);
    
    if (result.success && result.url) {
        if (type === 'poster') {
            setEditingAnime(prev => ({ ...prev, posterImage: result.url }));
        } else if (type === 'preview' && index !== undefined) {
            updatePreview(index, result.url);
        } else if (type === 'character' && index !== undefined) {
            updateCharacter(index, 'image', result.url);
        }
    } else {
        setMessage({ type: 'error', text: result.error || "Upload Failed" });
    }
    
    setIsUploading(null);
  };

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const categories = (formData.get("categories") as string).split(",").map(c => c.trim()).filter(c => c);
    const animeId = formData.get("id")?.toString() || editingAnime?.id || "";

    const animeData = {
      ...editingAnime,
      id: animeId,
      title: formData.get("title")?.toString() || "",
      description: formData.get("description")?.toString() || "",
      posterImage: formData.get("posterImage")?.toString() || "",
      trailerUrl: formData.get("trailerUrl")?.toString() || "",
      categories,
      openings: formOpenings.filter(op => op.url && op.url.trim() !== ""),
      previews: formPreviews.filter(p => p && p.trim() !== ""),
      hasArchive: hasArchive || formCharacters.length > 0,
    };

    // 1. Commit Anime Artifact
    const animeResult = await upsertAnime(animeData);
    
    if (animeResult.success) {
      // 2. Commit Personnel Registry
      const charResult = await upsertCharacters(animeId, formCharacters);
      
      if (charResult.success) {
        setMessage({ type: 'success', text: `Anime & Personnel Registry ${animeResult.action === 'created' ? 'Forged' : 'Modified'} Successfully` });
        setIsFormOpen(false);
        fetchAnime();
      } else {
        setMessage({ type: 'error', text: `Anime Saved, but Registry Failed: ${charResult.error}` });
      }
    } else {
      setMessage({ type: 'error', text: animeResult.error || "Operation Failed" });
    }
  };

  if (status === "loading" || !session || (session.user as any).role !== "admin") {
    return (
      <div className="min-h-screen bg-manga-paper flex flex-col items-center justify-center p-8">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-8 border-manga-ink border-t-transparent rounded-full mb-8"
        />
        <h1 className="text-4xl font-black uppercase italic animate-pulse">Scanning Authorization...</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-manga-paper text-manga-ink pb-20 selection:bg-manga-ink selection:text-manga-paper transition-colors duration-300 relative">
      <div className="absolute inset-0 halftone opacity-5 pointer-events-none" />

      <main className="max-w-7xl mx-auto px-4 pt-40">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="relative">
            <div className="absolute -top-10 -left-6 opacity-10 pointer-events-none text-8xl font-black uppercase italic text-manga-ink">
              Control
            </div>
            <div className="flex items-center gap-6 mb-4">
              <div className="bg-manga-ink p-3 rotate-[-5deg] shadow-[8px_8px_0px_0px_var(--manga-shadow-color)] transition-colors">
                <ShieldCheck className="text-manga-paper w-10 h-10 transition-colors" />
              </div>
              <h1 className="text-6xl sm:text-7xl font-black uppercase tracking-tighter italic leading-none">
                Vault <br /> 
                <span className="bg-manga-ink text-manga-paper px-4 transition-colors">Commander</span>
              </h1>
            </div>
            <p className="text-xl font-bold border-l-[6px] border-manga-ink pl-6 transition-colors font-geist-sans uppercase">
              HIGH-LEVEL ACCESS GRANTED: {session.user?.name?.toUpperCase()}
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <Link 
              href="/admin/analytics"
              className="group relative flex items-center gap-3 bg-manga-paper border-[4px] border-manga-ink px-6 py-3 font-black uppercase italic shadow-[8px_8px_0px_0px_var(--manga-shadow-color)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-manga-ink/5 group-hover:bg-manga-ink/10 transition-colors" />
              <div className="relative flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500/20 blur-lg animate-pulse" />
                  <Settings className="relative text-manga-ink w-6 h-6 animate-[spin_4s_linear_infinite]" />
                </div>
                <span className="relative text-lg tracking-tighter">Leyline Access</span>
              </div>
            </Link>

            {/* Operational Dashboard Version */}
            <div className="hidden md:block opacity-20 italic font-black uppercase text-sm">
              Operational Dashboard v1.1
            </div>
          </div>
        </div>

        <AnimatePresence>
          {message && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className={`mb-8 p-6 border-[6px] border-manga-ink font-black uppercase italic flex items-center justify-between ${
                message.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
              }`}
            >
              <div className="flex items-center gap-4">
                <AlertTriangle className="w-6 h-6" />
                {message.text}
              </div>
              <button onClick={() => setMessage(null)}><X className="w-6 h-6" /></button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Database Table */}
        <div className="bg-manga-paper border-[8px] border-manga-ink shadow-[24px_24px_0px_0px_var(--manga-shadow-color)] overflow-hidden transition-colors">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-manga-ink text-manga-paper border-b-[6px] border-manga-ink transition-colors">
                  <th className="p-6 font-black uppercase italic text-lg tracking-widest">Designation</th>
                  <th className="p-6 font-black uppercase italic text-lg tracking-widest">ID Code</th>
                  <th className="p-6 font-black uppercase italic text-lg tracking-widest">Archive</th>
                  <th className="p-6 font-black uppercase italic text-lg tracking-widest text-right">Operations</th>
                </tr>
              </thead>
              <tbody className="divide-y-[4px] divide-manga-ink">
                {isLoading ? (
                  <tr>
                    <td colSpan={4} className="p-20 text-center text-2xl font-black uppercase italic animate-pulse">Syncing Database...</td>
                  </tr>
                ) : animeList.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="p-20 text-center text-2xl font-black uppercase italic">The Vault is Depleted.</td>
                  </tr>
                ) : (
                  animeList.map((anime) => (
                    <motion.tr 
                      key={anime.id} 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="hover:bg-manga-ink/5 transition-colors"
                    >
                      <td className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-20 bg-gray-200 border-2 border-manga-ink overflow-hidden flex-shrink-0">
                            <img src={anime.posterImage} alt="" className="w-full h-full object-cover grayscale" />
                          </div>
                          <span className="font-black text-2xl uppercase italic tracking-tighter">{anime.title}</span>
                        </div>
                      </td>
                      <td className="p-6 font-mono font-bold text-lg opacity-40">{anime.id}</td>
                      <td className="p-6">
                         <div className={`w-8 h-8 flex items-center justify-center border-2 border-manga-ink ${anime.hasArchive ? 'bg-manga-ink text-manga-paper' : 'bg-transparent text-manga-ink opacity-20'}`}>
                           {anime.hasArchive ? <CheckCircle2 className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
                         </div>
                      </td>
                      <td className="p-6 text-right">
                        <div className="flex items-center justify-end gap-4">
                          <button 
                            onClick={() => handleEdit(anime)}
                            className="bg-manga-paper border-[4px] border-manga-ink p-3 text-manga-ink hover:bg-manga-ink hover:text-manga-paper transition-all shadow-[4px_4px_0px_0px_var(--manga-shadow-color)] active:shadow-none"
                          >
                            <Edit className="w-6 h-6" />
                          </button>
                          <button 
                            onClick={() => handleDelete(anime.id)}
                            className="bg-red-500 border-[4px] border-manga-ink p-3 text-white hover:bg-black transition-all shadow-[4px_4px_0px_0px_var(--manga-shadow-color)] active:shadow-none"
                          >
                            <Trash2 className="w-6 h-6" />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Forge/Modify Form Modal */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFormOpen(false)}
              className="absolute inset-0 bg-manga-ink/80 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ scale: 0.9, rotate: -2, y: 50, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, rotate: 2, y: 50, opacity: 0 }}
              className="relative w-full max-w-6xl bg-manga-paper border-[12px] border-manga-ink p-8 sm:p-12 shadow-[30px_30px_0px_0px_rgba(0,0,0,0.5)] max-h-[90vh] overflow-y-auto custom-scrollbar transition-colors duration-300"
            >
              <button 
                onClick={() => setIsFormOpen(false)}
                className="absolute top-6 right-6 text-manga-ink hover:rotate-90 transition-transform"
              >
                <X className="w-10 h-10" />
              </button>

              <div className="flex items-center gap-4 mb-12">
                <Settings className={`w-10 h-10 ${editingAnime?.id ? 'animate-spin' : ''}`} />
                <h2 className="text-5xl font-black uppercase italic tracking-tighter">
                  {editingAnime?.id ? "Modify Record" : "Forge Entry"}
                </h2>
              </div>

              <form onSubmit={handleSave} className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Left Column: Core Identity */}
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-black uppercase italic border-b-4 border-manga-ink pb-2 mb-4">Core Identity</h3>
                      <div className="space-y-6">
                        <div>
                          <label className="block text-[10px] font-black uppercase tracking-widest opacity-40 mb-2">Designation Code (ID)</label>
                          <input 
                            name="id" 
                            defaultValue={editingAnime?.id} 
                            required 
                            disabled={!!editingAnime?.id}
                            className="w-full bg-transparent border-b-4 border-manga-ink text-2xl font-black uppercase italic py-2 focus:outline-none transition-all font-geist-sans disabled:opacity-50"
                            placeholder="e.g. death-note"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-black uppercase tracking-widest opacity-40 mb-2">Anime Title</label>
                          <input 
                            name="title" 
                            defaultValue={editingAnime?.title} 
                            required 
                            className="w-full bg-transparent border-b-4 border-manga-ink text-2xl font-black uppercase italic py-2 focus:outline-none transition-all font-geist-sans"
                            placeholder="TITLE..."
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-black uppercase tracking-widest opacity-40 mb-2">Classifications (Comma Separated)</label>
                          <input 
                            name="categories" 
                            defaultValue={editingAnime?.categories?.join(", ")} 
                            required 
                            className="w-full bg-transparent border-b-4 border-manga-ink text-lg font-bold py-2 focus:outline-none transition-all font-geist-sans uppercase"
                            placeholder="ACTION, DRAMA, MYSTERY"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-black uppercase italic border-b-4 border-manga-ink pb-2 mb-4">Synopsis & Visuals</h3>
                      <div className="space-y-6">
                        <div>
                          <label className="block text-[10px] font-black uppercase tracking-widest opacity-40 mb-2">Narrative Arc (Description)</label>
                          <textarea 
                            name="description" 
                            defaultValue={editingAnime?.description} 
                            required 
                            rows={4}
                            className="w-full bg-transparent border-4 border-manga-ink p-4 text-lg font-bold focus:outline-none transition-all font-geist-sans uppercase resize-none"
                            placeholder="THE STORY BEGINS..."
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-black uppercase tracking-widest opacity-40 mb-2">Visual Source (Artifact Upload)</label>
                          <div className="flex gap-4">
                            <div className="bg-manga-ink p-3 self-start">
                              {isUploading === 'poster' ? <Loader2 className="text-manga-paper w-6 h-6 animate-spin" /> : <ImageIcon className="text-manga-paper w-6 h-6" />}
                            </div>
                            <div className="flex-1 space-y-2">
                                <div className="flex items-center gap-4">
                                    <input 
                                        name="posterImage" 
                                        value={editingAnime?.posterImage || ""} 
                                        readOnly
                                        required 
                                        className="flex-1 bg-transparent border-b-2 border-manga-ink/20 text-xs font-bold py-2 focus:outline-none transition-all font-geist-sans opacity-40"
                                        placeholder="No artifact selected..."
                                    />
                                    <label className="cursor-pointer bg-manga-ink text-manga-paper px-4 py-2 font-black text-[10px] uppercase italic border-2 border-manga-ink hover:bg-manga-paper hover:text-manga-ink transition-all flex items-center gap-2">
                                        <Upload className="w-3 h-3" />
                                        {isUploading === 'poster' ? "SCANNING..." : "FORGE IMAGE"}
                                        <input type="file" className="hidden" onChange={(e) => handleUpload(e, 'poster')} accept="image/*" />
                                    </label>
                                </div>
                                {editingAnime?.posterImage && <p className="text-[8px] font-mono opacity-30 truncate">{editingAnime.posterImage}</p>}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <motion.div 
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setHasArchive(!hasArchive)}
                      className="flex items-center gap-4 cursor-pointer group"
                    >
                      <div className={`w-8 h-8 border-[4px] border-manga-ink flex items-center justify-center transition-colors ${hasArchive ? 'bg-manga-ink text-manga-paper' : 'bg-transparent'}`}>
                        {hasArchive && <CheckCircle2 className="w-5 h-5" />}
                      </div>
                      <span className="font-black uppercase italic text-lg tracking-tighter group-hover:underline">Enable Character Archive Terminal</span>
                    </motion.div>
                  </div>

                  {/* Right Column: Dynamic Media */}
                  <div className="space-y-12">
                     {/* Trailers & Openings */}
                     <div className="space-y-6">
                        <h3 className="text-xl font-black uppercase italic border-b-4 border-manga-ink pb-2 flex items-center gap-2">
                          <Music className="w-6 h-6" /> Transmission & Themes
                        </h3>
                        
                        <div>
                          <label className="block text-[10px] font-black uppercase tracking-widest opacity-40 mb-2">Primary Transmission (Trailer URL)</label>
                          <div className="flex gap-4">
                             <div className="bg-manga-ink p-3">
                              <LinkIcon className="text-manga-paper w-6 h-6" />
                            </div>
                            <input 
                              name="trailerUrl" 
                              defaultValue={editingAnime?.trailerUrl} 
                              required 
                              className="w-full bg-transparent border-b-4 border-manga-ink text-lg font-bold py-2 focus:outline-none transition-all font-geist-sans"
                              placeholder="https://youtube.com/..."
                            />
                          </div>
                        </div>

                        {/* Openings Dynamic List */}
                        <div className="space-y-4">
                           <div className="flex items-center justify-between">
                              <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Opening Themes</label>
                              <button 
                                type="button" 
                                onClick={addOpening}
                                className="bg-manga-ink text-manga-paper px-3 py-1 font-black text-[10px] uppercase italic border-2 border-manga-ink hover:bg-manga-paper hover:text-manga-ink transition-all"
                              >
                                + Add Theme
                              </button>
                           </div>
                           <AnimatePresence initial={false}>
                            {formOpenings.map((op, idx) => (
                              <motion.div 
                                key={`op-${idx}`}
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -20, opacity: 0 }}
                                className="flex gap-4 items-start bg-gray-50 p-4 border-2 border-dashed border-manga-ink/30"
                              >
                                <div className="flex-1 space-y-4">
                                  <input 
                                    value={op.title}
                                    onChange={(e) => updateOpening(idx, 'title', e.target.value.toUpperCase())}
                                    className="w-full bg-transparent border-b-2 border-manga-ink font-black text-sm p-1 focus:outline-none"
                                    placeholder="TITLE (e.g. OP 1)"
                                  />
                                  <input 
                                    value={op.url}
                                    onChange={(e) => updateOpening(idx, 'url', e.target.value)}
                                    className="w-full bg-transparent border-b-2 border-manga-ink font-bold text-xs p-1 focus:outline-none"
                                    placeholder="URL (https://...)"
                                  />
                                </div>
                                <button 
                                  type="button" 
                                  onClick={() => removeOpening(idx)}
                                  className="text-red-500 hover:scale-110 transition-transform pt-2"
                                >
                                  <X className="w-5 h-5" />
                                </button>
                              </motion.div>
                            ))}
                           </AnimatePresence>
                        </div>
                     </div>

                     {/* Previews Dynamic List */}
                     <div className="space-y-6">
                        <h3 className="text-xl font-black uppercase italic border-b-4 border-manga-ink pb-2 flex items-center gap-2">
                          <ImageIcon className="w-6 h-6" /> Preview Artifacts
                        </h3>
                        <div className="space-y-4">
                           <div className="flex items-center justify-between">
                              <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Preview Image Gallery</label>
                              <button 
                                type="button" 
                                onClick={addPreview}
                                className="bg-manga-ink text-manga-paper px-3 py-1 font-black text-[10px] uppercase italic border-2 border-manga-ink hover:bg-manga-paper hover:text-manga-ink transition-all"
                              >
                                + Add Artifact
                              </button>
                           </div>
                           <AnimatePresence initial={false}>
                            {formPreviews.map((url, idx) => (
                              <motion.div 
                                key={`prev-${idx}`}
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                className="flex gap-4 items-center"
                              >
                                <div className="bg-manga-ink/5 p-2">
                                  <div className="w-10 h-10 border-2 border-manga-ink overflow-hidden bg-gray-200 flex items-center justify-center">
                                    {isUploading === `preview-${idx}` ? (
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                    ) : url ? (
                                        <img src={url} alt="" className="w-full h-full object-cover grayscale" />
                                    ) : (
                                        <ImageIcon className="w-4 h-4 opacity-20" />
                                    )}
                                  </div>
                                </div>
                                <div className="flex-1 flex items-center gap-4 border-b-2 border-manga-ink/20">
                                    <input 
                                        value={url}
                                        readOnly
                                        className="flex-1 bg-transparent font-bold text-[10px] py-1 focus:outline-none opacity-40"
                                        placeholder="UNIDENTIFIED ARTIFACT"
                                    />
                                    <label className="cursor-pointer text-manga-ink hover:text-blue-500 transition-colors p-1">
                                        <Upload className={`w-4 h-4 ${isUploading === `preview-${idx}` ? 'animate-bounce' : ''}`} />
                                        <input type="file" className="hidden" onChange={(e) => handleUpload(e, 'preview', idx)} accept="image/*" />
                                    </label>
                                </div>
                                <button 
                                  type="button" 
                                  onClick={() => removePreview(idx)}
                                  className="text-manga-ink opacity-40 hover:opacity-100 hover:text-red-500 transition-all"
                                >
                                  <X className="w-5 h-5" />
                                </button>
                              </motion.div>
                            ))}
                           </AnimatePresence>
                        </div>
                     </div>
                  </div>
                </div>

                {/* Personnel Registry Section */}
                <div className="pt-12 border-t-[8px] border-manga-ink">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-4">
                            <Users className="w-8 h-8" />
                            <h3 className="text-3xl font-black uppercase italic italic">Personnel <span className="bg-manga-ink text-manga-paper px-2">Registry</span></h3>
                        </div>
                        <button 
                            type="button" 
                            onClick={addCharacter}
                            className="bg-manga-ink text-manga-paper px-4 py-2 font-black uppercase italic text-sm border-2 border-manga-ink hover:bg-manga-paper hover:text-manga-ink transition-all flex items-center gap-2"
                        >
                            <UserPlus className="w-4 h-4" /> Add Entry
                        </button>
                    </div>

                    {formCharacters.length === 0 ? (
                        <div className="py-12 text-center border-4 border-dashed border-manga-ink/10">
                            <p className="text-lg font-black uppercase italic opacity-20">Registry is Empty.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {formCharacters.map((char, idx) => (
                                <motion.div 
                                    key={`char-${idx}`}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-gray-50 border-4 border-manga-ink p-6 relative group"
                                >
                                    <button 
                                        type="button" 
                                        onClick={() => removeCharacter(idx)}
                                        className="absolute -top-3 -right-3 bg-red-500 text-white p-1 border-2 border-manga-ink shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] z-10"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>

                                    <div className="flex gap-6">
                                        <div className="w-24 h-32 bg-manga-ink flex-shrink-0 border-2 border-manga-ink overflow-hidden relative">
                                            {char.image ? (
                                                <img src={char.image} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center opacity-20"><ImageIcon className="text-manga-paper" /></div>
                                            )}
                                        </div>
                                        <div className="flex-1 space-y-4">
                                            <input 
                                                value={char.name}
                                                onChange={(e) => updateCharacter(idx, 'name', e.target.value.toUpperCase())}
                                                className="w-full bg-transparent border-b-2 border-manga-ink font-black text-lg p-1 focus:outline-none"
                                                placeholder="NAME..."
                                            />
                                            <input 
                                                value={char.role}
                                                onChange={(e) => updateCharacter(idx, 'role', e.target.value)}
                                                className="w-full bg-transparent border-b-2 border-manga-ink font-bold text-xs p-1 focus:outline-none italic"
                                                placeholder="ROLE..."
                                            />
                                            <div className="flex items-center gap-4 border-b-2 border-manga-ink/20 pt-1">
                                                <input 
                                                    value={char.image}
                                                    readOnly
                                                    className="flex-1 bg-transparent font-mono text-[8px] p-1 focus:outline-none opacity-40"
                                                    placeholder="NO IMAGE COMMITTED"
                                                />
                                                <label className="cursor-pointer text-manga-ink hover:text-blue-500 transition-all">
                                                    <Upload className={`w-3 h-3 ${isUploading === `character-${idx}` ? 'animate-bounce' : ''}`} />
                                                    <input type="file" className="hidden" onChange={(e) => handleUpload(e, 'character', idx)} accept="image/*" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 space-y-4">
                                        <textarea 
                                            value={char.description}
                                            onChange={(e) => updateCharacter(idx, 'description', e.target.value)}
                                            rows={2}
                                            className="w-full bg-white border-2 border-manga-ink p-2 text-[10px] font-bold focus:outline-none resize-none uppercase"
                                            placeholder="INTEL BRIEF..."
                                        />
                                        <textarea 
                                            value={char.bio}
                                            onChange={(e) => updateCharacter(idx, 'bio', e.target.value)}
                                            rows={3}
                                            className="w-full bg-white border-2 border-manga-ink p-2 text-[10px] font-bold focus:outline-none resize-none uppercase"
                                            placeholder="FULL BIOGRAPHY..."
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                 </div>

                <div className="pt-12 border-t-[8px] border-manga-ink">
                  <motion.button 
                    whileHover={{ scale: 1.02, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-6 bg-manga-ink text-manga-paper border-[6px] border-manga-ink text-3xl font-black uppercase italic shadow-[12px_12px_0px_0px_var(--manga-shadow-glow)] hover:shadow-none transition-all flex items-center justify-center gap-4 group"
                  >
                    <Save className="w-10 h-10 group-hover:rotate-12 transition-transform" />
                    Commit To Vault
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {deleteConfirmId && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDeleteConfirmId(null)}
              className="absolute inset-0 bg-manga-ink/95 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.9, rotate: 5, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0.9, rotate: -5, opacity: 0 }}
              className="relative w-full max-w-xl bg-manga-paper border-[12px] border-red-600 p-12 shadow-[20px_20px_0px_0px_rgba(0,0,0,0.5)] text-center"
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-red-600 text-white px-6 py-2 font-black uppercase text-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                CRITICAL ALERT
              </div>
              
              <AlertTriangle className="w-24 h-24 text-red-600 mx-auto mb-8 animate-bounce" />
              
              <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-4 leading-none text-red-600">
                INITIATE EXPUNGEMENT?
              </h2>
              
              <p className="text-lg font-bold uppercase opacity-60 leading-tight mb-12">
                You are about to purge this anime fragment from the global library. <br />
                <span className="text-red-600">THIS ACTION IS IRREVERSIBLE.</span>
              </p>

              <div className="flex flex-col gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={confirmDelete}
                  className="w-full py-5 bg-red-600 text-white font-black uppercase italic text-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-none transition-all"
                >
                  Confirm Redaction
                </motion.button>
                <button 
                  onClick={() => setDeleteConfirmId(null)}
                  className="w-full py-3 font-black uppercase italic text-sm opacity-40 hover:opacity-100 transition-opacity"
                >
                  Abort Operation
                </button>
              </div>

              {/* Decorative Redaction Bars */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-red-600/10 -z-10 rotate-45 translate-x-10 -translate-y-10" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating Action Button (FAB) */}
      <motion.button
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        whileHover={{ 
          scale: 1.15, 
          rotate: 90,
          transition: { type: "spring", stiffness: 400, damping: 10 }
        }}
        whileTap={{ scale: 0.85 }}
        onClick={handleAddNew}
        className="fixed bottom-12 right-12 z-[100] w-20 h-20 bg-manga-ink text-manga-paper border-[6px] border-manga-ink shadow-[12px_12px_0px_0px_var(--manga-shadow-color)] hover:shadow-none transition-all flex items-center justify-center cursor-pointer"
      >
        <Plus className="w-12 h-12" />
      </motion.button>
    </div>
  );
}
