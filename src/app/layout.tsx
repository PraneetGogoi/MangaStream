import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/CustomCursor";
import { MangaLoader } from "@/components/MangaLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MangaStream - Discover Masterpieces",
  description: "Experience anime in a whole new manga-inspired dimension.",
};

import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased cursor-none`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col cursor-none overflow-x-hidden bg-manga-paper text-manga-ink transition-colors duration-300">
        <Script
          id="theme-initialize"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark")document.documentElement.classList.add("dark")}catch(e){}})()`,
          }}
        />
        <MangaLoader />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
