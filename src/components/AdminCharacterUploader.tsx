"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, Loader2, Image as ImageIcon } from "lucide-react";
import { updateCharacterImageInDB } from "@/app/actions";

interface Props {
  characterId: string;
  imageUrl: string;
  characterName: string;
  isAdmin: boolean;
}

export default function AdminCharacterUploader({ characterId, imageUrl, characterName, isAdmin }: Props) {
  const [isUploading, setIsUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(imageUrl);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Client-side size check (10MB)
    if (file.size > 10 * 1024 * 1024) {
      alert("FILE TOO HEAVY. MATRIX LIMIT IS 10MB.");
      return;
    }

    setIsUploading(true);

    const formData = new FormData();
    formData.append("file", file);

    const result = await updateCharacterImageInDB(characterId, formData);
    
    if (result.success && result.url) {
      setPreviewUrl(result.url);
    } else {
      alert(result.error || "IMAGE FORGERY FAILED DUE TO SYSTEM CRASH.");
    }
    
    setIsUploading(false);
  };

  return (
    <div className="relative aspect-[3/4] border-[12px] border-manga-ink shadow-[20px_20px_0px_0px_var(--manga-shadow-color)] group overflow-hidden bg-white">
      {previewUrl ? (
        <Image 
          src={previewUrl} 
          alt={characterName} 
          fill 
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105" 
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-200">
          <ImageIcon className="text-manga-ink opacity-20 w-16 h-16" />
        </div>
      )}
      
      {/* Scanning Line Animation */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
         <div className="w-full h-1 bg-red-500/50 absolute top-0 animate-[scan_3s_linear_infinite]" />
      </div>

      <div className="absolute bottom-4 left-4 bg-manga-ink text-manga-paper px-4 py-2 font-black uppercase italic text-xl -rotate-3 border-2 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] z-20">
        PERSONNEL: ACTIVE
      </div>

      {/* Admin Upload Overlay */}
      {isAdmin && (
        <label className="absolute inset-0 z-30 bg-manga-ink/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
          {isUploading ? (
            <Loader2 className="text-manga-paper w-12 h-12 mb-2 animate-spin" />
          ) : (
            <Camera className="text-manga-paper w-12 h-12 mb-2" />
          )}
          <span className="text-sm font-black uppercase tracking-widest text-manga-paper">
            {isUploading ? "Forging Artifact..." : "Update Portrait"}
          </span>
          <input 
            type="file" 
            className="hidden" 
            accept="image/*"
            onChange={handleUpload}
            disabled={isUploading}
          />
        </label>
      )}
    </div>
  );
}
