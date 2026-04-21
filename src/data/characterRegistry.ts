import { Character } from "./types";

export const CharacterRegistry: Record<string, () => Promise<{ [key: string]: Character[] }>> = {
  "demon-slayer": () => import("./characters/demon-slayer"),
  "attack-on-titan": () => import("./characters/attack-on-titan"),
  "jujutsu-kaisen": () => import("./characters/jujutsu-kaisen"),
  "cyberpunk-edgerunners": () => import("./characters/cyberpunk-edgerunners"),
  "one-piece": () => import("./characters/one-piece"),
  "fma": () => import("./characters/fma"),
  "death-note": () => import("./characters/death-note"),
  "hunter-x-hunter": () => import("./characters/hunter-x-hunter"),
  "naruto": () => import("./characters/naruto"),
  "dbz": () => import("./characters/dbz"),
  "evangelion": () => import("./characters/evangelion"),
  "jojo": () => import("./characters/jojo"),
  "bleach": () => import("./characters/bleach"),
  "chainsaw-man": () => import("./characters/chainsaw-man"),
  "spy-x-family": () => import("./characters/spy-x-family"),
  "blue-lock": () => import("./characters/blue-lock"),
  "cowboy-bebop": () => import("./characters/cowboy-bebop"),
  "haikyu": () => import("./characters/haikyu"),
  "code-geass": () => import("./characters/code-geass"),
  "monster": () => import("./characters/monster"),
  "vinland-saga": () => import("./characters/vinland-saga"),
  "mob-psycho": () => import("./characters/mob-psycho"),
};

export async function getCharactersForAnime(id: string): Promise<Character[]> {
  const loader = CharacterRegistry[id];
  if (!loader) return [];
  
  const module = await loader();
  // Find the first array exported from the module
  const characters = Object.values(module).find(val => Array.isArray(val));
  return (characters as Character[]) || [];
}
