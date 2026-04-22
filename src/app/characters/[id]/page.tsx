import { getCharacterById, getAnimeById } from "@/app/actions";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Shield, Zap, Target, Activity, FileText, Globe, Info } from "lucide-react";

export default async function CharacterPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const char = await getCharacterById(id);
  if (!char) notFound();

  const anime = await getAnimeById(char.animeId);

  return (
    <div className="min-h-screen bg-manga-paper text-manga-ink selection:bg-manga-ink selection:text-manga-paper p-4 md:p-8">
      {/* Navigation */}
      <nav className="max-w-6xl mx-auto mb-12 flex items-center justify-between border-b-8 border-manga-ink pb-6">
        <Link 
          href="/" 
          className="flex items-center gap-3 bg-manga-ink text-manga-paper px-6 py-3 font-black uppercase italic hover:translate-x-2 transition-transform shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]"
        >
          <ArrowLeft className="w-6 h-6" />
          BACK TO COMMAND
        </Link>
        <div className="text-right">
          <p className="text-[10px] font-black uppercase opacity-50">Personnel File // Ref: {char._id.toString().slice(-6)}</p>
          <h1 className="text-3xl font-black uppercase italic leading-none">{char.name}</h1>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Col: Portrait & Physicals */}
        <div className="lg:col-span-5 space-y-8">
          <div className="relative aspect-[3/4] border-[12px] border-manga-ink shadow-[20px_20px_0px_0px_var(--manga-shadow-color)] group overflow-hidden bg-white">
            <Image 
              src={char.image} 
              alt={char.name} 
              fill 
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105" 
            />
            
            {/* Scanning Line Animation */}
            <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
               <div className="w-full h-1 bg-red-500/50 absolute top-0 animate-[scan_3s_linear_infinite]" />
            </div>

            <div className="absolute bottom-4 left-4 bg-manga-ink text-manga-paper px-4 py-2 font-black uppercase italic text-xl -rotate-3 border-2 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
              PERSONNEL: ACTIVE
            </div>
          </div>

          {/* Technical Specifications Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 border-4 border-manga-ink bg-manga-ink text-manga-paper">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-red-500" />
                <span className="text-[10px] font-black uppercase">Affiliation</span>
              </div>
              <p className="font-black uppercase italic text-lg leading-tight">{char.affiliation || "UNKNOWN"}</p>
            </div>
            <div className="p-4 border-4 border-manga-ink">
              <div className="flex items-center gap-2 mb-2">
                <Activity className="w-4 h-4 text-manga-ink" />
                <span className="text-[10px] font-black uppercase">Status</span>
              </div>
              <p className="font-black uppercase italic text-lg leading-tight">{char.status || "CONFIDENTIAL"}</p>
            </div>
            <div className="p-4 border-4 border-manga-ink">
              <div className="flex items-center gap-2 mb-2">
                <Globe className="w-4 h-4 text-manga-ink" />
                <span className="text-[10px] font-black uppercase">Origin</span>
              </div>
              <p className="font-black uppercase italic text-lg leading-tight">{char.origin || "REDACTED"}</p>
            </div>
            <div className="p-4 border-4 border-manga-ink bg-manga-ink text-manga-paper">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-yellow-400" />
                <span className="text-[10px] font-black uppercase">Role</span>
              </div>
              <p className="font-black uppercase italic text-lg leading-tight">{char.role}</p>
            </div>
          </div>
        </div>

        {/* Right Col: Tactical Intel & Bio */}
        <div className="lg:col-span-7 space-y-12">
          {/* Synopsis / Description */}
          <section>
            <div className="flex items-center gap-4 mb-6 border-b-4 border-manga-ink pb-2">
              <FileText className="w-8 h-8" />
              <h2 className="text-4xl font-black uppercase italic italic">Tactical Briefing</h2>
            </div>
            <p className="text-xl font-bold leading-relaxed mb-6 uppercase">
              {char.description}
            </p>
            <div className="p-8 bg-manga-ink text-manga-paper border-l-[16px] border-red-600 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.2)]">
              <h3 className="text-red-500 font-black uppercase text-xs mb-4 tracking-widest">// BIOLOGICAL DATA COMMITTED TO VAULT</h3>
              <p className="font-bold leading-relaxed text-sm opacity-90">
                {char.bio}
              </p>
            </div>
          </section>

          {/* Abilities / Specializations */}
          <section>
            <div className="flex items-center gap-4 mb-6 border-b-4 border-manga-ink pb-2">
              <Zap className="w-8 h-8" />
              <h2 className="text-4xl font-black uppercase italic">Signature Abilities</h2>
            </div>
            <div className="flex flex-wrap gap-4">
              {char.abilities?.map((ability: string) => (
                <div 
                  key={ability}
                  className="px-6 py-4 bg-white border-4 border-manga-ink shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                >
                  <span className="font-black uppercase italic text-xl text-manga-ink">{ability}</span>
                </div>
              ))}
              {(!char.abilities || char.abilities.length === 0) && (
                <div className="opacity-30 italic font-bold">No registered abilities in current transmission.</div>
              )}
            </div>
          </section>

          {/* Source Material Sync */}
          <section className="pt-12 border-t-4 border-manga-ink/10">
            <div className="flex items-center gap-3 opacity-50 mb-4">
              <Info className="w-4 h-4" />
              <span className="text-xs font-black uppercase tracking-widest">Source Material Reference</span>
            </div>
            <Link 
              href="/" 
              className="group flex items-center gap-6 p-4 border-4 border-manga-ink hover:bg-manga-ink hover:text-manga-paper transition-all"
            >
              <div className="w-16 h-24 relative overflow-hidden">
                <Image src={anime?.posterImage || ""} alt={anime?.title || ""} fill className="object-cover" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase opacity-50">Originating Series</p>
                <h4 className="text-2xl font-black uppercase italic group-hover:translate-x-2 transition-transform">{anime?.title}</h4>
              </div>
            </Link>
          </section>
        </div>
      </main>

    </div>
  );
}
