import dbConnect from "./mongoose";
import Anime from "../models/Anime";
import Character from "../models/Character";
import { MOCK_ANIME } from "../data/mockAnime";
import { CharacterRegistry } from "../data/characterRegistry";

export async function migrateData() {
  await dbConnect();
  console.log("Connected to MongoDB for migration...");

  // 1. Clear existing data (optional, but good for a clean sync)
  // await Anime.deleteMany({});
  // await Character.deleteMany({});

  for (const animeData of MOCK_ANIME) {
    console.log(`Migrating anime: ${animeData.title}...`);
    
    // Clean up animeData for Mongo (remove characters if they were embedded)
    const { characters, ...animeBase } = animeData;
    
    // Upsert Anime
    const animeDoc = await Anime.findOneAndUpdate(
      { id: animeData.id },
      { ...animeBase, hasArchive: animeData.hasArchive || !!CharacterRegistry[animeData.id] },
      { upsert: true, new: true }
    );

    // 2. Migrate Characters
    const charLoader = CharacterRegistry[animeData.id];
    if (charLoader) {
      console.log(`  Found characters for ${animeBase.title}. Importing...`);
      const module = await charLoader();
      const charactersArray = Object.values(module).find(val => Array.isArray(val)) as any[];
      
      if (charactersArray) {
        const charDocs = charactersArray.map(char => ({
          ...char,
          animeId: animeData.id
        }));
        
        // Bulk upsert characters
        for (const charDoc of charDocs) {
          await Character.findOneAndUpdate(
            { animeId: charDoc.animeId, name: charDoc.name },
            charDoc,
            { upsert: true }
          );
        }
        console.log(`  Successfully migrated ${charDocs.length} characters.`);
      }
    }
  }

  console.log("Migration completed successfully!");
}
