# 🏴‍☠️ MangaStream : The Ultimate Anime Vault

![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?style=for-the-badge&logo=vercel)
![Next.js](https://img.shields.io/badge/Next.js%2015-black?style=for-the-badge&logo=next.js)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

A high-fidelity, dynamic, full-stack anime discovery and archival platform. Designed with a brutalist manga-inspired aesthetic, the system provides an immersive experience for tracking, logging, and discovering anime.

### 🌐 **[Click here to view the Live Website](https://manga-stream-thpe.vercel.app/)**

---

## ⚡ Core Features
- **Dynamic Archival Vault**: High-performance database syncing through MongoDB Atlas.
- **Admin Command Terminal**: A secure backend dashboard for High-Level Archivists to forge new anime records, upload preview galleries, and manage character registries.
- **Personnel Registry**: Detailed character archives featuring Base64 image compression directly tied to the central database.
- **Leyline Analytics**: Real-time engagement telemetry tracking watchlist pulses and archive logs.
- **NextAuth Security**: Encrypted Matrix Keys and session handling.
- **Manga Aesthetic**: High-contrast, monochromatic brutalism with interactive micro-animations.

## 🛠️ Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Database**: MongoDB (Mongoose)
- **Authentication**: NextAuth.js
- **Styling**: TailwindCSS & Framer Motion
- **Hosting**: Vercel Serverless

## 🚀 Getting Started Locally

To run the Vault locally on your own machine:

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your `.env.local` file with the following keys:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_SECRET=your_secret_key
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

*Authorized Personnel Only. Stay off the grid.*
