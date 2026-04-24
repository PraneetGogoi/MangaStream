<div align="center">
  <h1>🏴‍☠️ MangaStream <br/> <sub>The Ultimate Anime Archival Vault</sub></h1>
  
  <p>
    <a href="https://manga-stream-thpe.vercel.app/" target="_blank">
      <img src="https://img.shields.io/badge/LIVE%20DEMO-Vercel-black?style=for-the-badge&logo=vercel" alt="Live Demo" />
    </a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/Next.js%2015-black?style=for-the-badge&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
    <img src="https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer" alt="Framer Motion" />
  </p>
</div>

---

## 📖 Overview
**MangaStream** is a high-fidelity, full-stack anime discovery platform built with a striking, high-contrast brutalist aesthetic. It operates as a secure digital "Vault" where high-level archivists can forge anime records, log character personnel, and users can curate their digital libraries in an immersive, tactile environment.

---

## ✨ What Makes MangaStream Unique?

### 🎨 Manga-Inspired Brutalist Design
We rejected modern, soft, rounded web design. MangaStream embraces sharp angles, heavy borders, pure monochrome styling (*Manga Ink & Paper*), and aggressive typography. It feels raw, printed, and alive—simulating the tactile experience of holding a premium manga volume.

### ⚡ Micro-Interaction Engine
Powered by **Framer Motion**, the platform features complex micro-animations: from scanner lines passing over character portraits, to brutalist buttons that tilt in 3D space when hovered, to holographic glitch effects during page transitions.

### 🗄️ Serverless Base64 Image Archival
A major engineering challenge with Vercel's Serverless environment is its read-only filesystem, which breaks traditional image uploads. MangaStream solves this by capturing user uploads (Profile Pictures, Anime Posters, Character Portraits), instantly converting the raw pixel data into highly compressed **Base64 encoded strings**, and injecting them directly into the MongoDB document. This allows for instantaneous image rendering without relying on third-party cloud storage buckets like AWS S3.

### 📡 Real-Time Leyline Analytics & Telemetry
A custom-built analytics engine tracks global user engagement. It aggregates watchlist additions, "Archive Log" reviews, and page views to calculate a dynamic **Engagement Decibel (ED) Score**, automatically generating a trending list of the most sought-after anime artifacts in real-time.

---

## 💻 Technical Stack

### Core Architecture
- **Next.js 15 (App Router)** - React framework utilizing Server Components and Server Actions for a lightning-fast, zero-API backend.
- **React 19** - For building the interactive user interface.
- **TypeScript** - Ensuring strict, end-to-end type safety across the entire application stack.

### Backend & Database
- **MongoDB Atlas** - Cloud database for storing anime metadata, complex user arrays, and Base64 media strings.
- **Mongoose** - ODM for rapid schema modeling, validation, and database interactions.
- **NextAuth.js (v4)** - Highly secure, cookie-based session management and encrypted credential authentication.

### Styling & Interactivity
- **Tailwind CSS** - Utility-first styling mapped to custom brutalist design tokens.
- **Framer Motion** - Production-ready animation library for layout transitions and dynamic UI state changes.
- **Lucide React** - High-quality, consistent SVG iconography.

---

## 🛡️ Platform Capabilities

- **Command Terminal (Admin Panel):** A secure, rank-restricted dashboard for `admin` personnel. Allows for the full CRUD (Create, Read, Update, Delete) management of the global anime database.
- **Personnel Registry:** Every anime entry contains an infinitely expandable sub-document array for archiving characters, complete with physical status, roles, and tactical bios.
- **Dynamic Watchlists:** Users can queue artifacts, track viewing progress, and synchronize their personal library.
- **Digital Palimpsest (Review System):** A community feature where users commit "Archive Logs" (reviews) to specific anime entries, earning "Trust Levels" (reputation points) for their contributions.

---

## 🚀 Getting Started Locally

To run the Vault locally on your own machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/PraneetGogoi/MangaStream.git
   cd MangaStream
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory and add your secure keys:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_SECRET=your_secure_random_string
   ```

4. **Initialize the Server:**
   ```bash
   npm run dev
   ```

5. **Access the Vault:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

> *"Archive the past. Stream the future."* <br/>
> **— The MangaStream Protocol**
