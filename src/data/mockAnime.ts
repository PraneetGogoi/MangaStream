import { Character, Anime } from "./types";
export type { Character, Anime };

import { demonSlayerCharacters } from "./characters/demon-slayer";
import { attackOnTitanCharacters } from "./characters/attack-on-titan";
import { jujutsuKaisenCharacters } from "./characters/jujutsu-kaisen";
import { cyberpunkEdgerunnersCharacters } from "./characters/cyberpunk-edgerunners";
import { onePieceCharacters } from "./characters/one-piece";
import { fmaCharacters } from "./characters/fma";
import { deathNoteCharacters } from "./characters/death-note";
import { hunterXHunterCharacters as hxhCharacters } from "./characters/hunter-x-hunter";
import { narutoCharacters } from "./characters/naruto";
import { dbzCharacters } from "./characters/dbz";
import { evangelionCharacters } from "./characters/evangelion";
import { jojoCharacters } from "./characters/jojo";
import { bleachCharacters } from "./characters/bleach";
import { chainsawManCharacters } from "./characters/chainsaw-man";
import { spyXFamilyCharacters } from "./characters/spy-x-family";
import { blueLockCharacters } from "./characters/blue-lock";
import { cowboyBebopCharacters } from "./characters/cowboy-bebop";
import { haikyuCharacters } from "./characters/haikyu";
import { codeGeassCharacters } from "./characters/code-geass";
import { monsterCharacters } from "./characters/monster";


export const MOCK_ANIME: Anime[] = [
  {
    id: "a1",
    title: "Demon Slayer: Kimetsu no Yaiba",
    description: "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon.",
    categories: ["Action", "Supernatural"],
    posterImage: "/assets/demon-slayer/ren.jpg",
    trailerUrl: "https://www.youtube.com/embed/VQGCKyvzIM4?autoplay=1&mute=1",
    openings: [
      {
        title: "Opening 1",
        url: "https://www.youtube.com/embed/pmanD_s7G3U?autoplay=1&mute=1"
      },
      {
        title: "Opening 2",
        url: "https://www.youtube.com/embed/st4wcpjZeQQ?autoplay=1&mute=1"
      },
      {
        title: "Opening 3",
        url: "https://www.youtube.com/embed/OWBCIRhly4U?autoplay=1&mute=1"
      },
      {
        title: "Opening 4",
        url: "https://www.youtube.com/embed/I-a8Ma0f1GA?autoplay=1&mute=1"
      }
    ],
    previews: [
      "/assets/demon-slayer/2.jpg",
      "/assets/demon-slayer/3.jpg",
      "/assets/demon-slayer/unnamed-3.png",
    ],
    mangaChapters: [
      {
        id: "c1",
        title: "Chapter 01: Cruelty",
        pages: [
          "/assets/demon-slayer/1.jpg",
          "/assets/demon-slayer/2.jpg",
          "/assets/demon-slayer/3.jpg",
        ]
      }
    ],
    characters: [
      {
        name: "Tanjiro Kamado",
        role: "Main Protagonist / Demon Slayer",
        description: "A kindhearted boy who became a Demon Slayer to save his sister Nezuko.",
        image: "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/0/07/Tanjiro_Kamado_Anime.png",
        bio: "Tanjiro Kamado is a young man who joins the Demon Slayer Corps to find a cure to turn his sister, Nezuko Kamado, back into a human. He is known for having a naturally kind and empathetic soul, often feeling sadness for the demons he slays. Tanjiro utilizes the Water Breathing style taught to him by Sakonji Urokodaki, but later discovers he is a practitioner of the Hinokami Kagura, a sun-based breathing technique passed down through his family for generations.",
        abilities: ["Sun Breathing", "Water Breathing", "Enhanced Smell", "Recovery Breathing"],
        affiliation: "Demon Slayer Corps",
        status: "Active",
        origin: "Mount Kumotori"
      },
      {
        name: "Nezuko Kamado",
        role: "Demon / Sister of Tanjiro",
        description: "Tanjiro's younger sister who was turned into a demon.",
        image: "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/a/ae/Nezuko_Anime.png",
        bio: "Nezuko Kamado is the younger sister of Tanjiro Kamado and a former human. After her family was slaughtered by Muzan Kibutsuji, she was transformed into a demon. Despite her state, she retains her human feelings and refuses to harm humans, protected by a hypnotic suggestion and her own strong will. Nezuko possesses immense strength and regenerative abilities, and can utilize her Blood Demon Art: Exploding Blood to assist Tanjiro in battle.",
        abilities: ["Blood Demon Art: Exploding Blood", "Size Manipulation", "Immense Strength", "Sunlight Resistance"],
        affiliation: "Kamado Family / Demon Slayer Corps Support",
        status: "Active",
        origin: "Mount Kumotori"
      },
      {
        name: "Zenitsu Agatsuma",
        role: "Demon Slayer / Thunder Breather",
        description: "A talented but cowardly Demon Slayer who masters the Thunder Breathing technique.",
        image: "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/b/ba/Zenitsu_Anime.png",
        bio: "Zenitsu Agatsuma is a Demon Slayer in the Demon Slayer Corps. He is a traveling companion of Tanjiro Kamado and one of the main protagonists of Demon Slayer: Kimetsu no Yaiba. Zenitsu's most defining trait is his cowardice; he often claims he doesn't have long to live due to his dangerous job. However, when he falls asleep or passes out from fear, his true strength awakens, allowing him to perform the Thunder Breathing First Form: Thunderclap and Flash with god-like speed.",
        abilities: ["Thunder Breathing", "Extreme Hearing", "Godspeed", "Thunderclap and Flash"],
        affiliation: "Demon Slayer Corps",
        status: "Active",
        origin: "Mount Kurama"
      },
      {
        name: "Inosuke Hashibira",
        role: "Demon Slayer / Beast Breather",
        description: "A young man who was raised by boars, who wears a boar mask and uses 'Beast Breathing'.",
        image: "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/1/11/Inosuke_Anime.png",
        bio: "Raised by wild boars in the mountains, Inosuke developed a unique, self-taught breathing style known as Beast Breathing. He is incredibly proud and always seeks to prove his strength by challenging others to combat. His dual Nichirin blades are uniquely chipped to mimic the tearing of a beast's fangs. Beneath his boar mask lies a surprisingly feminine face, a contrast to his aggressive and muscular build.",
        abilities: ["Beast Breathing", "Extrasensory Touch", "Extreme Flexibility", "Dual Wielding"],
        affiliation: "Demon Slayer Corps",
        status: "Active",
        origin: "Mount Okutama"
      },
      {
        name: "Shinobu Kocho",
        role: "Insect Hashira",
        description: "The Insect Hashira. She uses poison to slay demons since she lacks the strength to decapitate them.",
        image: "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/d/df/Shinobu_Anime.png",
        bio: "Shinobu Kocho is the Insect Hashira of the Demon Slayer Corps and a master of chemical warfare. Despite her small stature and lack of physical strength to decapitate demons, she compensated by developing a unique fighting style using a stinger-like Nichirin blade. She is a brilliant pharmacist who creates lethal wisteria-based poisons to eliminate her targets. Beneath her constantly smiling and calm facade lies a deep-seated, righteous fury against the demons who killed her older sister, Kanae.",
        abilities: ["Insect Breathing", "Wisteria Poison Mastery", "Superhuman Agility", "Medical Expertise"],
        affiliation: "Demon Slayer Corps (Hashira)",
        status: "KIA",
        origin: "Tokyo-fu"
      },
      {
        name: "Kyojuro Rengoku",
        role: "Flame Hashira",
        description: "The Flame Hashira. A man of unwavering optimism and fiery spirit.",
        image: "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/d/d4/Kyojuro_Anime.png",
        bio: "Kyojuro Rengoku was the Flame Hashira, a man whose spirit burned as brightly as his techniques. He was defined by his unwavering optimism and a profound sense of duty to protect the weak, a value instilled in him by his mother. Kyojuro was a master of the Flame Breathing style, passed down through the Rengoku family for generations. His heroic stand against the Upper Rank Three demon, Akaza, during the Mugen Train incident served as a legendary inspiration for the entire Demon Slayer Corps.",
        abilities: ["Flame Breathing", "Indomitable Will", "Superhuman Strength", "Advanced Mark"],
        affiliation: "Demon Slayer Corps (Hashira)",
        status: "KIA",
        origin: "Tokyo-fu"
      },
      {
        name: "Giyu Tomioka",
        role: "Water Hashira",
        description: "The Water Hashira. Stoic and reserved, he was the first Hashira Tanjiro encountered.",
        image: "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/1/1a/Giyu_Anime.png",
        bio: "Giyu Tomioka is the Water Hashira and the one who spared Nezuko's life, setting Tanjiro on his path as a slayer. He is a man of few words, often socially withdrawn and plagued by survivor's guilt from his final selection exam. Giyu is a consummate master of Water Breathing, even developing his own unique Eleventh Form: Dead Calm. His stoic exterior masks a deeply compassionate heart and an absolute dedication to the preservation of human life and the Corps' mission.",
        abilities: ["Water Breathing (Mastery)", "Eleventh Form: Dead Calm", "Enhanced Observation", "Demon Slayer Mark"],
        affiliation: "Demon Slayer Corps (Hashira)",
        status: "Active",
        origin: "Nogata, Tokyo-fu"
      },
      {
        name: "Tengen Uzui",
        role: "Sound Hashira",
        description: "The Sound Hashira. A flamboyant former shinobi who values his wives above all else.",
        image: "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/c/c8/Tengen_Anime.png",
        bio: "Tengen Uzui, the Sound Hashira, is a man of 'flamboyant' tastes and high energy who defined the term 'flashy'. A former shinobi, he abandoned his cold ninja upbringing for a more spectacular life, carrying heavy double-cleaver Nichirin blades. He utilizes Sound Breathing, which incorporates sound-based combat and explosive beads to overwhelm demons with sensory overload. During the Entertainment District battle, he showed incredible resilience and tactical genius, eventually retiring as a veteran after a brutal victory alongside Tanjiro's team.",
        abilities: ["Sound Breathing", "Shinobi Sensory Training", "Explosive Beads", "Musical Score Technique"],
        affiliation: "Demon Slayer Corps (Hashira/Retired)",
        status: "Active (Retired)",
        origin: "Unknown Shinobi Village"
      },
      {
        name: "Mitsuri Kanroji",
        role: "Love Hashira",
        description: "The Love Hashira. A woman of immense physical strength hidden beneath a warm and affectionate personality.",
        image: "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/e/ef/Mitsuri_Anime.png",
        bio: "Mitsuri Kanroji is the Love Hashira, known for her unique physical composition which makes her muscles eight times denser than a normal human's. She joined the Demon Slayer Corps to find a husband who could accept her strength and eccentricities, eventually finding a family in the slayers. Mitsuri utilizes Love Breathing, a custom style derived from Flame Breathing, and a whip-like Nichirin sword that allows for incredibly fast and flexible attacks. Her radiant personality and deep compassion make her a vital pillar of support for her fellow slayers.",
        abilities: ["Love Breathing", "Superhuman Muscle Density", "Whip-Sword Mastery", "Demon Slayer Mark"],
        affiliation: "Demon Slayer Corps (Hashira)",
        status: "KIA",
        origin: "Azabu, Tokyo-fu"
      },
      {
        name: "Muichiro Tokito",
        role: "Mist Hashira",
        description: "The Mist Hashira. A young prodigy who achieved Hashira status in just two months.",
        image: "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/1/14/Muichiro_Anime.png",
        bio: "Muichiro Tokito is the Mist Hashira and a direct descendant of the first Sun Breather. He is a genius who became a Hashira within only two months of picking up a sword, a feat nearly unheard of in the Corps. Initially presented as airheaded and often lost in thought, Muichiro’s true nature was suppressed by the trauma of his past. After regaining his memories during the Swordsmith Village arc, he demonstrated incredible mastery over Mist Breathing and a resolve as sharp as his blade, eventually unlocking the Transparent World.",
        abilities: ["Mist Breathing", "Seventh Form: Obscuring Clouds", "Transparent World", "Demon Slayer Mark"],
        affiliation: "Demon Slayer Corps (Hashira)",
        status: "KIA",
        origin: "Unknown Mountain Region"
      },
      {
        name: "Gyomei Himejima",
        role: "Stone Hashira",
        description: "The Stone Hashira. The blind giant who is widely considered the strongest of the current Hashira.",
        image: "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/b/b3/Gyomei_Anime.png",
        bio: "Gyomei Himejima is the Stone Hashira and the most physically imposing member of the Demon Slayer Corps. Despite being blind, his other senses are heightened to a level of near-supernatural perception through 'Echoes'. He utilizes an enormous spiked ball and axe on a chain, a unique combination that requires immense strength to master. Gyomei is a deeply philosophical and compassionate man, often seen praying for his comrades and even the demons he slays, embodying the stoic and unbreakable spirit of a mountain.",
        abilities: ["Stone Breathing", "Superhuman Strength", "Transparent World", "Enhanced Hearing"],
        affiliation: "Demon Slayer Corps (Hashira)",
        status: "KIA",
        origin: "Mount Hinode"
      },
      {
        name: "Sanemi Shinazugawa",
        role: "Wind Hashira",
        description: "The Wind Hashira. A fierce and aggressive warrior who bears many scars from countless battles.",
        image: "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/0/05/Sanemi_Anime.png",
        bio: "Sanemi Shinazugawa is the Wind Hashira, characterized by his volatile temper and his absolute hatred for demons. His body is covered in scars from years of fighting without any concern for his own safety. Sanemi possesses 'Marechi' blood, which is incredibly intoxicating and disorienting to demons, a trait he uses to his advantage in combat. His aggressive Wind Breathing style is as relentless as a storm, and beneath his abrasive exterior lies a man who has sacrificed everything to protect his younger brother, Genya.",
        abilities: ["Wind Breathing", "Marechi Blood Poisoning", "Superhuman Speed", "Demon Slayer Mark"],
        affiliation: "Demon Slayer Corps (Hashira)",
        status: "Active",
        origin: "Kyoto-fu"
      },
      {
        name: "Obanai Iguro",
        role: "Serpent Hashira",
        description: "The Serpent Hashira. A disciplined and mysterious warrior who fights alongside his pet snake, Kaburamaru.",
        image: "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/b/b2/Obanai_Anime.png",
        bio: "Obanai Iguro is the Serpent Hashira, known for his strict adherence to the rules of the Corp and his mysterious past. He wears bandages over his mouth to hide a childhood wound and is always seen with his companion snake, Kaburamaru, who helps him perceive his surroundings and fight with absolute precision. Obanai utilizes Serpent Breathing and a uniquely curved Nichirin blade, allowing for slithering, unpredictable attacks. His devotion to the Corps is rivaled only by his secret affection for the Love Hashira, Mitsuri Kanroji.",
        abilities: ["Serpent Breathing", "Kaburamaru Synergy", "Master Tactician", "Demon Slayer Mark"],
        affiliation: "Demon Slayer Corps (Hashira)",
        status: "KIA",
        origin: "Hachijo Island"
      },
      {
        name: "Kanao Tsuyuri",
        role: "Demon Slayer / Flower Breather",
        description: "The adopted daughter of the Kocho sisters and a highly talented Flower Breathing user.",
        image: "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/6/6d/Kanao_Anime.png",
        bio: "Kanao Tsuyuri is a Demon Slayer and the 'Tsuguko' of the Insect Hashira, Shinobu Kocho. Rescued from a life of poverty and abuse, she initially struggled with showing emotion or making decisions on her own. Through her training and her bond with Tanjiro, Kanao eventually learned to follow her heart and find her own path. Her mastery over Flower Breathing and her extraordinary visual perception make her one of the most promising young slayers in the Corps, eventually unlocking the legendary Scarlet Spider Lily technique.",
        abilities: ["Flower Breathing", "Equinoctial Vermilion Eye", "Superhuman Visual Perception", "Advanced Mark"],
        affiliation: "Demon Slayer Corps (Tsuguko)",
        status: "Active",
        origin: "Unknown Slum, Tokyo-fu"
      },
      {
        name: "Muzan Kibutsuji",
        role: "The Demon King / Progenitor",
        description: "The first of his kind and the creator of all other demons in the world.",
        image: "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/a/ab/Muzan_Anime.png",
        bio: "Muzan Kibutsuji is the primary antagonist and the source of all demonic suffering in the world. Having lived for over a thousand years, he is obsessed with achieving absolute immortality and conquering the sun. Muzan is a cold, narcissistic, and terrifyingly powerful entity who can change his appearance at will. He controls his demons through a biological link and his own blood, punishing any failure with absolute finality. His pursuit of the Blue Spider Lily and his vendetta against the Kamado family have shaped the history of the Demon Slayer Corps.",
        abilities: ["Biokinesis (Shapeshifting)", "Demon Progenitor Blood", "Near-Infinite Regeneration", "Tentacle Manipulation"],
        affiliation: "Twelve Kizuki (Leader)",
        status: "KIA",
        origin: "Heian Era Japan"
      },
      {
        name: "Akaza",
        role: "Upper Moon Three",
        description: "A martial arts master who values strength and honors his formidable opponents.",
        image: "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/b/b6/Akaza_Anime.png",
        bio: "Akaza is the holder of the Upper Rank Three position in the Twelve Kizuki. A martial arts fanatic who abandoned his humanity to achieve the peak of strength, he primarily utilizes his bare hands in combat. His Blood Demon Art, Compass Needle, allows him to sense an opponent's 'battle spirit' and predict their every move with flawless precision. Despite being a demon, Akaza possesses a unique sense of honor, often offering his strongest opponents the chance to become demons themselves to continue their growth together.",
        abilities: ["Blood Demon Art: Compass Needle", "Destructive Death Mastery", "Martial Arts Expertise", "High-Speed Combat"],
        affiliation: "Twelve Kizuki (Upper Rank Three)",
        status: "KIA",
        origin: "Edo Period Japan"
      },
      {
        name: "Doma",
        role: "Upper Moon Two",
        description: "A charismatic and remorseless demon who uses ice-based Blood Demon Arts.",
        image: "https://static.wikia.nocookie.net/kimemois-no-yaiba/images/3/30/Douma_Anime.png",
        bio: "Doma is the Upper Rank Two demon and the leader of the Eternal Paradise Faith cult. Characterized by his perpetual smile and friendly demeanor, he is actually completely devoid of human emotion or empathy. Doma utilizes ice-based Blood Demon Arts that can freeze the very air his opponents breathe, making him a nightmare for any breathing style user. His history is deeply entwined with the deaths of several individuals close to the main cast, making him one of the most loathed and dangerous enemies in the series.",
        abilities: ["Blood Demon Art: Cryokinesis", "Barren Hanging Garden", "Crystalline Child", "Enhanced Biological Durability"],
        affiliation: "Twelve Kizuki (Upper Rank Two)",
        status: "KIA",
        origin: "Late Edo / Early Meiji Japan"
      },
      {
        name: "Kokushibo",
        role: "Upper Moon One",
        description: "The strongest of the Twelve Kizuki and a master of the Moon Breathing style.",
        image: "https://static.wikia.nocookie.net/kimemet-no-yaiba/images/d/df/Kokushibo_Anime.png",
        bio: "Kokushibo is the pinnacle of the Twelve Kizuki, holding the Upper Rank One position for over four centuries. A former Demon Slayer from the Sengoku era, he is the elder brother of the legendary Yoriichi Tsugikuni. He utilizes Moon Breathing, a style characterized by Crescent Moon blades that can change size and shape rapidly. With six eyes that grant him supernatural perception, Kokushibo represents the terrifying union of a master swordsman's skill and a demon's absolute power, driven by an eternal envy of his brother's genius.",
        abilities: ["Moon Breathing", "Transparent World", "Biological Blade Manipulation", "Demon Slayer Mark (Permanent)"],
        affiliation: "Twelve Kizuki (Upper Rank One)",
        status: "KIA",
        origin: "Sengoku Era Japan"
      },
      {
        name: "Genya Shinazugawa",
        role: "Demon Slayer / Demon Eater",
        description: "The younger brother of the Wind Hashira who possesses a unique ability to gain demon powers.",
        image: "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/9/9f/Genya_Anime.png",
        bio: "Genya Shinazugawa is a Demon Slayer and the younger brother of Sanemi Shinazugawa. Unable to use Breathing Styles, Genya compensates through his unique physiology that allows him to temporarily gain demonic traits and abilities by consuming the flesh of demons. He fights using a western-style double-barreled shotgun loaded with Nichirin bullets and a short sword. His arc is one of the series' most moving, focusing on his desperate desire for his brother's acknowledgment and his growth from a hostile loner to a selfless hero.",
        abilities: ["Repetitive Action", "Demon Consumption (Temporary)", "Nichirin Firearm Mastery", "Superhuman Resilience"],
        affiliation: "Demon Slayer Corps",
        status: "KIA",
        origin: "Unknown Region"
      },
      {
        name: "Yoriichi Tsugikuni",
        role: "Legendary Slayer / First Sun Breather",
        description: "The strongest Demon Slayer in history and the creator of the original Sun Breathing style.",
        image: "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/2/22/Yoriichi_Anime.png",
        bio: "Yoriichi Tsugikuni is the legendary figure from the Sengoku Era who nearly killed Muzan Kibutsuji. Born with the Demon Slayer Mark and the 'Transparent World' ability, he was a being of singular talent who revolutionized combat against demons by creating Sun Breathing. Known for his profound humility and his deep sense of tragedy, Yoriichi's existence was a divine-like anomaly that Muzan spent centuries trying to erase from history. His legacy survives through the Hanafuda earrings and the Hinokami Kagura passed down through the Kamado family.",
        abilities: ["Sun Breathing (Original)", "Transparent World (Permanent)", "Selfless State", "Innate Demon Slayer Mark"],
        affiliation: "First Demon Slayers (Sengoku Era)",
        status: "KIA (Natural Causes)",
        origin: "Tsugikuni Clan Estate"
      },
      {
        name: "Tamayo",
        role: "Demon Physician / Ally",
        description: "A skilled physician and a demon who broke free from Muzan's control to help humanity.",
        image: "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/a/a2/Tamayo_Anime.png",
        bio: "Tamayo is a demon who spent centuries looking for a way to destroy Muzan Kibutsuji after he tricked her into killing her own family. A brilliant physician, she modified her own body to survive on minimal human blood and developed Blood Demon Arts focused on illusions and truth-telling. Her collaboration with Tanjiro and Shinobu Kocho was vital in developing a cure for demonism and a poison capable of weakening Muzan to a human level, proving that even a demon can possess a heart dedicated to redemption and life.",
        abilities: ["Blood Demon Art: Blood Bewitchment", "Advanced Pharmaceutical Science", "Anti-Demon Poison Development", "Demon Cure Research"],
        affiliation: "Independent / Demon Slayer Corps Ally",
        status: "KIA",
        origin: "Unknown Region"
      },
      {
        name: "Yushiro",
        role: "Demon / Tamayo's Assistant",
        description: "A demon created by Tamayo who possesses unique sensory and illusionary powers.",
        image: "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/6/64/Yushiro_Anime.png",
        bio: "Yushiro was a terminally ill human who chose to become a demon under Tamayo's care to survive. He is fiercely loyal—often aggressively so—to Tamayo, whom he views with absolute adoration and devotion. His Blood Demon Art, 'Blind Spell', allows him to manipulate perception, hide structures, and share visual data between allies. Though he initially viewed Tanjiro with suspicion, his contributions during the final battles were instrumental in coordinating the slayers' attacks and providing the necessary support to overcome the Twelve Kizuki.",
        abilities: ["Blood Demon Art: Blind Spell", "Paper Talismans (Visual Sharing)", "Invisibility / Camouflage", "High-Precision Perception"],
        affiliation: "Independent / Demon Slayer Corps Ally",
        status: "Active",
        origin: "Unknown Region"
      },
      {
        name: "Hantengu",
        role: "Upper Moon Four",
        description: "A multifaceted demon whose cowardice manifests as several powerful, emotion-based clones.",
        image: "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/b/b8/Hantengu_Anime.png",
        bio: "Hantengu was the holder of the Upper Rank Four position, a demon characterized by an extreme, hypocritical sense of victimhood. When threatened, he manifested his 'emotions' as separate, powerful entities—Sekido (Anger), Karaku (Relaxation), Aizetsu (Sorrow), and Urogi (Joy)—which eventual merge into the terrifying Zohakuten (Hatred). This unique ability makes him incredibly difficult to defeat, as his true, tiny body remains hidden while his clones unleash elemental devastation on his behalf.",
        abilities: ["Blood Demon Art: Emotional Manifestation", "Cloning / Division", "Zohakuten Fusion", "Size Alteration"],
        affiliation: "Twelve Kizuki (Upper Rank Four)",
        status: "KIA",
        origin: "Unknown Region"
      },
      {
        name: "Gyokko",
        role: "Upper Moon Five",
        description: "A grotesque demon obsessed with 'art' who resides within various porcelain pots.",
        image: "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/e/e0/Gyokko_Anime.png",
        bio: "Gyokko was the Upper Rank Five demon, a narcissistic entity who viewed his horrific acts of violence as high art. His body was composed of multiple disjointed limbs and eyes, usually emerging from one of his many teleporting pots. His Blood Demon Arts revolved around aquatic themes, allowing him to trap opponents in water basins or summon poisonous fish. Gyokko’s arrogance and his desire to be acknowledged as a supreme artist led to one of the series' most visually striking battles against the Mist Hashira.",
        abilities: ["Blood Demon Art: Porcelain Pot Manipulation", "Aquatic Summons", "Teleportation (Between Pots)", "Molting Transformation"],
        affiliation: "Twelve Kizuki (Upper Rank Five)",
        status: "KIA",
        origin: "Unknown Fishing Village"
      },
      {
        name: "Gyutaro",
        role: "Upper Moon Six",
        description: "The true holder of Upper Rank Six, a sickly but lethal demon who fights with poisoned sickles.",
        image: "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/a/af/Gyutaro_Anime.png",
        bio: "Gyutaro was the elder brother of Daki and the primary strength behind their shared Upper Rank Six position. Born into the lowest depths of the Entertainment District, his life was defined by ugliness and starvation, fueling a deep resentment toward anything beautiful or fortunate. He utilized Blood Manipulation to create lethal, blood-infused sickles that could deliver a fast-acting poison. His bond with his sister was absolute, a tragic partnership born from a lifetime of shared suffering and a refusal to be separated even in death.",
        abilities: ["Blood Demon Art: Flying Blood Sickles", "Blood Manipulation", "Lethal Poison Secretion", "Shared Life-Link (with Daki)"],
        affiliation: "Twelve Kizuki (Upper Rank Six)",
        status: "KIA",
        origin: "Yoshiwara Entertainment District, Tokyo-fu"
      },
      {
        name: "Daki",
        role: "Upper Moon Six",
        description: "Gyutaro's sister and a beautiful but cruel demon who uses living sashes as weapons.",
        image: "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/7/77/Daki_Anime.png",
        bio: "Daki, originally known as Ume, shared the Upper Rank Six position with her brother, Gyutaro. She operated as an Oiran in the Entertainment District, utilizing her supernatural beauty to lure and consume victims. Her Blood Demon Art allowed her to manipulate her Obi sashes as sharp, sentient weapons that could also serve as storage for her victims. While she was arrogant and temperamental, her power was deeply tied to her brother's presence, representing a twisted version of familial love that endured through their transformation into monsters.",
        abilities: ["Blood Demon Art: Obi Sash Manipulation", "Detachable Limb Sentience", "Superhuman Beauty / Infiltration", "Shared Life-Link (with Gyutaro)"],
        affiliation: "Twelve Kizuki (Upper Rank Six)",
        status: "KIA",
        origin: "Yoshiwara Entertainment District, Tokyo-fu"
      },
      {
        name: "Kaigaku",
        role: "Upper Moon Six / Traitor",
        description: "A former Demon Slayer and Zenitsu's senior who betrayed the Corps for demonic power.",
        image: "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/a/ab/Kaigaku_Anime.png",
        bio: "Kaigaku was a high-ranking student of the former Thunder Hashira and Zenitsu's senior. Driven by an absolute cowardice and a refusal to accept death, he chose to become a demon after being defeated by Kokushibo. He eventually rose to the rank of Upper Rank Six, utilizing a demon-enhanced version of Thunder Breathing. His betrayal is the personal shadow that Zenitsu had eventually to confront, representing the dark path of those who value their own survival above all honor and brotherhood.",
        abilities: ["Demonized Thunder Breathing", "Black Lightning Manipulation", "Enhanced Durability", "Master Swordsmanship"],
        affiliation: "Twelve Kizuki (Upper Rank Six) / Former Demon Slayer Corps",
        status: "KIA",
        origin: "Unknown Region"
      },
      {
        name: "Nakime",
        role: "Upper Moon Four / Biwa Demon",
        description: "The mysterious demon who controls the Infinite Castle through her Biwa playing.",
        image: "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/5/5e/Nakime_Anime.png",
        bio: "Nakime was originally a low-rank demon who served as Muzan's 'receptionist', but she eventually rose to Upper Rank Four due to her indispensable ability to manipulate the Infinite Castle. By playing her Biwa, she could instantly rearrange the architecture of the sprawling, extra-dimensional fortress, teleporting allies and enemies at will. Her single-eyed form and constant composure hide a powerful sensory ability, making her the tactical backbone of Muzan's forces during the final confrontation.",
        abilities: ["Blood Demon Art: Infinite Castle Manipulation", "Space Teleportation", "Ocular Remote Surveillance", "Structural Rearrangement"],
        affiliation: "Twelve Kizuki (Upper Rank Four)",
        status: "KIA",
        origin: "Unknown Region"
      }
    ],
  },
  {
    id: "a7",
    title: "Attack on Titan",
    description: "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
    categories: ["Action", "Drama"],
    posterImage: "/assets/attack-on-titan/4.jpg",
    trailerUrl: "https://www.youtube.com/embed/MGRm4IzK1SQ?autoplay=1&mute=1",
    openings: [
      {
        title: "Opening 1",
        url: "https://www.youtube.com/embed/OBqw818mQ1E?autoplay=1&mute=1"
      },
      {
        title: "Opening 2",
        url: "https://www.youtube.com/embed/vy63u2hKoPE?autoplay=1&mute=1"
      },
      {
        title: "Opening 3",
        url: "https://www.youtube.com/embed/8OkpRK2_gVs?autoplay=1&mute=1"
      }
    ],
    previews: [
      "/assets/attack-on-titan/1.jpg",
      "/assets/attack-on-titan/2.jpg",
      "/assets/attack-on-titan/3.jpg",
    ],
    characters: [
      {
        name: "Eren Jaeger",
        role: "The Usurper / Attack Titan",
        description: "A former member of the Scout Regiment who chose a path of total destruction.",
        image: "https://static.wikia.nocookie.net/shingekinokyojin/images/e/ef/Eren_Jaeger_%28Anime%29_character_image.png",
        bio: "Eren Jaeger is the complex protagonist of Attack on Titan. Driven by a childhood desire for freedom after witnessing his mother's death, Eren joined the Scout Regiment to eradicate the Titans. However, upon discovering the truth of the world, his goal shifted toward an extreme path of survival for his people. As the holder of the Attack, Founding, and War Hammer Titans, Eren initiated the Rumbling, a global-scale cataclysm, cementing his legacy as one of the most tragic and divisive figures in history.",
        abilities: ["Founding Titan Mastery", "Attack Titan Transformation", "War Hammer Titan Abilities", "Omni-directional Mobility (ODM) Gear Expert"],
        affiliation: "Scout Regiment (Special Operations Squad) / Yeagerists",
        status: "Deceased (KIA)",
        origin: "Shiganshina District, Wall Maria"
      },
      {
        name: "Mikasa Ackerman",
        role: "Humanity's Strongest / Scout Regiment",
        description: "The ultimate protector who balances immense strength with tragic devotion.",
        image: "https://static.wikia.nocookie.net/shingekinokyojin/images/7/7f/Mikasa_Ackerman_%28Anime%29_character_image.png",
        bio: "Mikasa Ackerman is a formidable soldier of the Scout Regiment and the last of the Ackerman bloodline on Paradis. Following the death of her parents, she was taken in by the Jaegers, developing a deep, unwavering bond with Eren. Her physical prowess is legendary, second only to Captain Levi. Throughout the war, Mikasa struggled with her duty to humanity and her love for Eren, eventually being forced to make the most painful decision in history to stop the Rumbling and save the world.",
        abilities: ["Ackerman Awakening (Enhanced Combat)", "ODM Gear Master", "Dual Blade Specialist", "Exceptional Tactical Reflexes"],
        affiliation: "Scout Regiment (Special Operations Squad)",
        status: "Active",
        origin: "Shiganshina District, Wall Maria"
      },
      {
        name: "Levi Ackerman",
        role: "Captain / Special Operations Squad",
        description: "Humanity's strongest soldier. Captain of the Special Operations Squad.",
        image: "https://static.wikia.nocookie.net/shingekinokyojin/images/9/94/Levi_Ackerman_%28Anime%29_character_image.png",
        bio: "Levi Ackerman is humanity's strongest soldier. Born in the Underground, he was raised by Kenny the Ripper and learned the art of survival and combat at a young age. As Captain of the Special Operations Squad within the Scout Regiment, he is known for his clinical cleanliness, blunt personality, and extraordinary skill with Omni-directional Mobility Gear. His tactical genius and physical prowess make him a living weapon against the Titans, capable of taking down even the most formidable Shifters.",
        abilities: ["Precision ODM Gear Execution", "Ackerman Bloodline (Awakened Instincts)", "Signature Spin Attack", "Tactical Command Mastery"],
        affiliation: "Scout Regiment (Special Operations Squad Leader)",
        status: "Active (Retired / Injured)",
        origin: "The Underground, Mitras"
      },
      {
        name: "Armin Arlert",
        role: "Strategist / Colossal Titan",
        description: "A childhood friend of Eren and Mikasa. A genius strategist.",
        image: "https://static.wikia.nocookie.net/shingekinokyojin/images/0/01/Armin_Arlert_%28Anime%29_character_image.png",
        bio: "Armin Arlert is the intellectual heart of the main trio. While initially lacking physical strength, his strategic mind has saved his comrades on countless occasions. He eventually inherits the Colossal Titan, carrying the weight of the previous owner's memories. Armin's curiosity about the outside world, specifically the ocean, fueled his desire to join the Scouts and find the truth behind the Wall. As the 15th Commander of the Scout Regiment, he led the effort to negotiate peace in the post-Rumbling world.",
        abilities: ["Colossal Titan Transformation", "Strategic Intelligence Mastery", "ODM Gear Proficiency", "Diplomatic Negotiation"],
        affiliation: "Scout Regiment (15th Commander)",
        status: "Active",
        origin: "Shiganshina District, Wall Maria"
      },
      {
        name: "Hange Zoë",
        role: "Commander / Researcher",
        description: "A high-ranking member of the Scout Regiment and a brilliant, eccentric scientist.",
        image: "https://static.wikia.nocookie.net/shingekinokyojin/images/e/e0/Hange_Zo%C3%AB_%28Anime%29_character_image.png",
        bio: "Hange Zoë was a veteran scout and the 14th Commander of the Scout Regiment. Known for an eccentric and frantic energy, Hange was obsessed with Titan research, often putting themselves in danger to conduct experiments. Despite their apparent madness, Hange was a deeply empathetic and brilliant leader who valued human life and the pursuit of knowledge. They played a vital role in unlocking the secrets of the basement and developing Thunder Spears, eventually sacrificing themselves to give their allies time to escape the Rumbling.",
        abilities: ["Genius-Level Titan Research", "Thunder Spear Engineering", "Expert ODM Gear Mastery", "Masterful Strategic Leadership"],
        affiliation: "Scout Regiment (14th Commander)",
        status: "Deceased (KIA)",
        origin: "Inside the Walls"
      },
      {
        name: "Erwin Smith",
        role: "Commander / The Gambler",
        description: "The 13th Commander of the Scout Regiment who led humanity through its darkest hour.",
        image: "https://static.wikia.nocookie.net/shingekinokyojin/images/1/1d/Erwin_Smith_%28Anime%29_character_image.png",
        bio: "Erwin Smith was the visionary 13th Commander of the Scout Regiment. A complex and calculated leader, he was willing to sacrifice anything—including his own humanity and those of his subordinates—to uncover the truth about the world. Erwin’s tactical genius was unmatched, but he was haunted by the dream of proving his father's theories right. His final charge against the Beast Titan remains the ultimate testament to his resolve, choosing the survival of humanity over his own personal desires.",
        abilities: ["Strategic Genius", "Charismatic Military Leadership", "Long-Range Scout Formation Development", "Indomitable Resolve"],
        affiliation: "Scout Regiment (13th Commander)",
        status: "Deceased (KIA)",
        origin: "Inside the Walls"
      },
      {
        name: "Reiner Braun",
        role: "Warrior / Armored Titan",
        description: "A soldier from Marley who infiltrated Paradis, torn between his duty and his guilt.",
        image: "https://static.wikia.nocookie.net/shingekinokyojin/images/6/69/Reiner_Braun_%28Anime%29_character_image.png",
        bio: "Reiner Braun is a tormented soul who served as the Armored Titan for Marley. Sent to Paradis alongside Bertholdt and Annie, he struggled with the dual identity of a Marleyan 'Warrior' and a Paradis 'Soldier'. This internal conflict caused his mind to fracture, resulting in a complex character arc defined by deep-seated guilt and a longing for redemption. Despite his role in the deaths of thousands, Reiner eventually fought to protect the world, demonstrating the heavy cost of indoctrination and war.",
        abilities: ["Armored Titan Transformation", "Hardened Skin Generation", "Expert Hand-to-Hand Combat", "Marleyan Military Training"],
        affiliation: "Marleyan Military (Warrior Unit) / Allied Forces",
        status: "Active (Retired)",
        origin: "Liberio Internment Zone, Marley"
      },
      {
        name: "Bertholdt Hoover",
        role: "Warrior / Colossal Titan",
        description: "The quiet and skilled holder of the Colossal Titan who sought to return home.",
        image: "https://static.wikia.nocookie.net/shingekinokyojin/images/7/7b/Bertholdt_Hoover_%28Anime%29_character_image.png",
        bio: "Bertholdt Hoover was the first holder of the Colossal Titan encountered by humanity. Characterized by his quiet, reserved nature and immense physical height, he was a highly capable soldier who followed Reiner’s lead. Despite his immense power, Bertholdt was a reluctant warrior who lamented the cruelty of their world. His eventual death at the hands of the Scouts marked the end of an era and the transfer of the Colossal Titan's power to Armin Arlert.",
        abilities: ["Colossal Titan Transformation", "Steam Emission & Explosion Control", "Exceptional Marksmanship", "Marleyan Special Ops Training"],
        affiliation: "Marleyan Military (Warrior Unit)",
        status: "Deceased (KIA)",
        origin: "Liberio Internment Zone, Marley"
      },
      {
        name: "Annie Leonhart",
        role: "Warrior / Female Titan",
        description: "A stoic and deadly fighter who specialized in martial arts and urban infiltration.",
        image: "https://static.wikia.nocookie.net/shingekinokyojin/images/e/ef/Annie_Leonhart_%28Anime%29_character_image.png",
        bio: "Annie Leonhart is a Graduate of the 104th Training Corps and the holder of the Female Titan. Known for her stoic demeanor and exceptional hand-to-hand combat skills, she was one of Marley's most effective infiltrators. Annie’s primary motivation was to return home to her father, a goal that drove her to make ruthless decisions. After being crystallized for years, her return to the battlefield provided a vital perspective on the complexity of the Marleyan-Eldian conflict.",
        abilities: ["Female Titan Transformation", "Selective Hardening Technique", "Titan Scream (Titan Attraction)", "Advanced Muay Thai & Grappling Mastery"],
        affiliation: "Marleyan Military (Warrior Unit) / Allied Forces",
        status: "Active",
        origin: "Liberio Internment Zone, Marley"
      },
      {
        name: "Zeke Yeager",
        role: "Warchief / Beast Titan",
        description: "Eren's half-brother and the mastermind behind the Yeagerist movement's early philosophy.",
        image: "https://static.wikia.nocookie.net/shingekinokyojin/images/e/e3/Zeke_Yeager_%28Anime%29_character_image.png",
        bio: "Zeke Yeager was the son of Grisha Yeager and Dina Fritz, making him a member of the royal bloodline. As Marley’s Warchief and the holder of the Beast Titan, he initially appeared as a terrifying enemy. However, his true goal was the 'Euthanization Plan'—a radical solution to end the suffering caused by the Titans' existence. Zeke was a clinical and highly intelligent strategist who viewed life through a nihilistic lens. He was eventually decapitated by Levi Ackerman during the Battle of Heaven and Earth.",
        abilities: ["Beast Titan Transformation", "Long-Range Projectile Volley Mastery", "Titan Creation & Control (via Royal Fluid)", "Exceptional Strategic Intellect"],
        affiliation: "Marleyan Military (Warrior Warchief) / Yeagerists",
        status: "Deceased (KIA)",
        origin: "Liberio Internment Zone, Marley"
      },
      {
        name: "Historia Reiss",
        role: "Queen of the Walls / Scout",
        description: "The illegitimate child of the royal family who reclaimed her identity and the throne.",
        image: "https://static.wikia.nocookie.net/shingekinokyojin/images/1/1f/Historia_Reiss_%28Anime%29_character_image.png",
        bio: "Historia Reiss, originally known as Christa Lenz, is the Queen of the Walls. Initially hiding behind a sweet and selfless persona, she eventually reclaimed her true name and identity through her bond with Ymir. Historia’s decision to defy her father and take the throne marked a turning point for Paradis, transitioning from a puppet monarchy to a nation that chose its own destiny. As Queen, she dedicated herself to the welfare of orphans and the disenfranchised, embodying a true leader's compassion.",
        abilities: ["Royal Bloodline Authority", "ODM Gear Proficiency", "Political Leadership", "Diplomatic Governance"],
        affiliation: "Royal Family of the Walls / Scout Regiment",
        status: "Active (Queen)",
        origin: "Reiss Estate, Wall Sheena"
      },
      {
        name: "Jean Kirstein",
        role: "Leader / Scout Regiment",
        description: "A grounded and honest soldier who grew into a reliable leader of the 104th.",
        image: "https://static.wikia.nocookie.net/shingekinokyojin/images/4/4b/Jean_Kirstein_%28Anime%29_character_image.png",
        bio: "Jean Kirstein started as a cynical cadet who sought a safe life in the Military Police, but the death of his friend Marco and his experiences with the Titans led him to join the Scouts. Jean is characterized by his blunt honesty and his ability to see the world as it truly is, making him a vital leader during the war. He balances his desire for safety with a deep-seated sense of duty to his fallen comrades and the future of humanity.",
        abilities: ["Exceptional ODM Gear Maneuverability", "Tactical Command Mastery", "Dual Blade Specialist", "Rifle Marksmanship"],
        affiliation: "Scout Regiment (Squad Leader) / Allied Forces",
        status: "Active",
        origin: "Trost District, Wall Rose"
      },
      {
        name: "Sasha Blouse",
        role: "Marksman / Scout Regiment",
        description: "The beloved 'Potato Girl' whose hunger for life was matched by her incredible skill.",
        image: "https://static.wikia.nocookie.net/shingekinokyojin/images/2/22/Sasha_Blouse_%28Anime%29_character_image.png",
        bio: "Sasha Blouse was a hunter from the Dauper District with a legendary appetite. Initially comic relief, she proved herself to be an expert marksman and an invaluable member of the Scout Regiment. Her instincts, honed by a childhood of hunting, saved her life and those of her comrades on multiple occasions. Sasha’s death was a profound tragedy for the group, representing the loss of innocence and the enduring kindness that can exist even in a world of endless war.",
        abilities: ["Master Marksmanship (Bow & Rifle)", "Enhanced Sensory Perception", "Hunter's Intuition", "ODM Gear Proficiency"],
        affiliation: "Scout Regiment",
        status: "Deceased (KIA)",
        origin: "Dauper District, Wall Rose"
      },
      {
        name: "Connie Springer",
        role: "Soldier / Scout Regiment",
        description: "The optimistic heart of the 104th who endured unthinkable personal tragedy.",
        image: "https://static.wikia.nocookie.net/shingekinokyojin/images/c/c1/Connie_Springer_%28Anime%29_character_image.png",
        bio: "Connie Springer is a loyal and often optimistic member of the Scout Regiment from Ragako Village. His journey was marked by personal tragedy, most notably the transformation of his entire village and family into Titans. Despite these horrors, Connie remained a steadfast ally to his friends, providing emotional support and reliable combat skills. His growth from a simple cadet to a veteran soldier represents the resilience of the human spirit in the face of despair.",
        abilities: ["High Maneuverability ODM Gear Mastery", "Rapid Strike Combat", "Dual Blade Proficiency", "Tactical Support"],
        affiliation: "Scout Regiment / Allied Forces",
        status: "Active",
        origin: "Ragako Village, Wall Rose"
      },
      {
        name: "Gabi Braun",
        role: "Warrior Candidate / Marksman",
        description: "A determined Marleyan candidate who learned the painful truth about the 'devils' of Paradis.",
        image: "https://static.wikia.nocookie.net/shingekinokyojin/images/b/bc/Gabi_Braun_character_image.png",
        bio: "Gabi Braun is a fiercely patriotic Marleyan warrior candidate and the cousin of Reiner Braun. Initially driven by a blind hatred for the 'devils' of Paradis, her worldview was shattered after she spent time among the very people she sought to destroy. Gabi is an incredibly talented marksman, responsible for several key moves in the series. Her character arc serves as a powerful exploration of the cycle of hatred and the possibility of reconciliation through understanding and shared trauma.",
        abilities: ["Legendary Marksmanship (Anti-Titan Rifle)", "Marleyan Military Candidate Training", "Guerilla Tactics Mastery", "Survival Instincts"],
        affiliation: "Marleyan Military (Warrior Candidate) / Allied Forces",
        status: "Active",
        origin: "Liberio Internment Zone, Marley"
      }
    ],
  },
  {
    id: "a3",
    title: "Jujutsu Kaisen",
    description: "A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman's school to be able to locate the demon's other body parts and thus exorcise himself.",
    categories: ["Action", "Supernatural"],
    posterImage: "/assets/jujutsu-kaisen/1.jpg",
    trailerUrl: "https://www.youtube.com/embed/MPfZhgLiK6w?autoplay=1&mute=1",
    openings: [
      {
        title: "Opening 1: Kaikai Kitan",
        url: "https://www.youtube.com/embed/1tk1pqwrOys?autoplay=1&mute=1"
      },
      {
        title: "Opening 2: VIVID VICE",
        url: "https://www.youtube.com/embed/5yb2N3pnztU?autoplay=1&mute=1"
      },
      {
        title: "Opening 3: SPECIALZ",
        url: "https://www.youtube.com/embed/Xr032EhUDPw?autoplay=1&mute=1"
      }
    ],
    previews: [
      "/assets/jujutsu-kaisen/2.jpg",
      "/assets/jujutsu-kaisen/3.jpg",
      "/assets/jujutsu-kaisen/4.jpg",
    ],
    mangaChapters: [
      {
        id: "jjk-c1",
        title: "Chapter 01: Sukuna",
        pages: [
          "/assets/jujutsu-kaisen/1.jpg",
          "/assets/jujutsu-kaisen/2.jpg",
          "/assets/jujutsu-kaisen/3.jpg",
        ]
      }
    ],
    characters: [
      {
        name: "Yuji Itadori",
        role: "The Vessel / Sukuna's Host",
        description: "A kind-hearted boy with monstrous strength who became the vessel for the King of Curses.",
        image: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/4/4b/Yuji_Itadori_Anime.png",
        bio: "Yuji Itadori is a first-year student at Tokyo Jujutsu High who was thrust into the world of sorcery after swallowing a cursed finger of Ryomen Sukuna. Possessing superhuman physical strength even before becoming a sorcerer, Yuji's most remarkable quality is his indomitable will and his philosophy of ensuring people have a 'proper death'. Despite the burden of hosting the King of Curses, Yuji remains dedicated to protecting his friends and finding a way to exorcise Sukuna forever.",
        abilities: ["Divergent Fist", "Black Flash", "Simple Domain", "Superhuman Strength"],
        affiliation: "Tokyo Jujutsu High",
        status: "Active",
        origin: "Sendai, Miyagi"
      },
      {
        name: "Satoru Gojo",
        role: "The Honored One / Strongest Sorcerer",
        description: "The pillar of the jujutsu world who possesses the Six Eyes and Limitless.",
        image: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/b/ba/Satoru_Gojo_Anime.png",
        bio: "Satoru Gojo is widely considered the strongest jujutsu sorcerer in existence. As a member of the Gojo family, he inherited both the Limitless technique and the Six Eyes, a combination that has not appeared in centuries. His mere existence balances the power of the world, acting as a massive deterrent for disaster-level curses. Gojo is lighthearted and often playful, but beneath his blindfold lies a man who carries the weight of the entire jujutsu world, striving to foster a new generation of sorcerers who can stand as his equals. His power is so absolute that his very presence changed the structure of the world upon his birth.",
        abilities: ["Limitless", "Six Eyes", "Unlimited Void (Domain Expansion)", "Hollow Purple"],
        affiliation: "Tokyo Jujutsu High / Gojo Clan",
        status: "Classified",
        origin: "Kyoto"
      },
      {
        name: "Megumi Fushiguro",
        role: "Student / Shadow User",
        description: "A first-year student at Tokyo Jujutsu High. He uses the Ten Shadows Technique.",
        image: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/7/7b/Megumi_Fushiguro_Anime.png",
        bio: "Megumi Fushiguro is a descendant of the Zenin clan and a first-year student at Tokyo Jujutsu High. Unlike many sorcerers, Megumi is stoic and pragmatic, focusing on the cold reality of exorcising curses. His Ten Shadows Technique allows him to summon powerful Shikigami from his shadow, including the Divine Dogs and the terrifying Mahoraga. He possesses immense untapped potential that even the King of Curses, Sukuna, has taken a keen interest in, leading to a destiny entwined with the most dangerous forces in the jujutsu world.",
        abilities: ["Ten Shadows Technique", "Chimera Shadow Garden (Domain Expansion)", "Mahoraga Summoning", "Shadow Manipulation"],
        affiliation: "Tokyo Jujutsu High / Zenin Clan",
        status: "Active",
        origin: "Saitama"
      },
      {
        name: "Nobara Kugisaki",
        role: "Student / Straw Doll User",
        description: "A first-year student known for her confidence and deadly Straw Doll Technique.",
        image: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/b/bd/Nobara_Kugisaki_Anime.png",
        bio: "Nobara Kugisaki is a first-year student from the countryside who moved to Tokyo to find a life of excitement and authenticity. She is fiercely confident and refuses to be defined by others' expectations, valuing her own beauty and strength equally. Her combat style involves using a hammer and nails infused with cursed energy. Through her Straw Doll Technique, she can deal damage to opponents remotely by establishing a link through their discarded body parts, making her a deadly specialist whose resilience and grit are unmatched.",
        abilities: ["Straw Doll Technique", "Resonance", "Hairpin", "Black Flash"],
        affiliation: "Tokyo Jujutsu High",
        status: "Unknown",
        origin: "Tohoku"
      },
      {
        name: "Suguru Geto",
        role: "Special Grade Curse User / Former Sage",
        description: "Gojo's former best friend who sought to create a world only for sorcerers.",
        image: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/3/30/Suguru_Geto_Anime.png",
        bio: "Suguru Geto was one of the only four Special Grade sorcerers and the closest friend of Satoru Gojo during their youth. Driven by the trauma of his experiences as a sorcerer, he eventually developed a profound hatred for non-sorcerers, whom he termed 'monkeys'. His Cursed Spirit Manipulation allowed him to swallow and control thousands of curses, making him a one-man army. His descent into villainy remains the greatest tragedy of Gojo's life, and his philosophy of a sorcerer-only world continues to echo through the darkest corners of the jujutsu society.",
        abilities: ["Cursed Spirit Manipulation", "Maximum: Uzumaki", "Expert Martial Artist"],
        affiliation: "The Geto Sect (Leader)",
        status: "Deceased (Vessel Occupied)",
        origin: "Kyoto"
      },
      {
        name: "Kento Nanami",
        role: "Grade 1 Sorcerer / Salaryman Shaman",
        description: "A disciplined sorcerer who views jujutsu as just another day at the office.",
        image: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/b/b2/Kento_Nanami_Anime.png",
        bio: "Kento Nanami is a Grade 1 sorcerer who briefly left the jujutsu world to work as a salaryman before returning to help his peers. He operates with a professional, deadline-driven efficiency and holds a deep disdain for the chaotic nature of sorcery. His Ratio Technique allows him to forcibly create weak points on his targets at a 7:3 ratio, resulting in devastating critical hits. Despite his stern exterior, Nanami is a deeply caring mentor to Yuji Itadori, embodying the concept of an adult who takes responsibility for the safety and growth of the next generation."
      },
      {
        name: "Maki Zenin",
        role: "Second-Year Student / Weapon Master",
        description: "A sorcerer born without cursed energy who excels through pure physical prowess.",
        image: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/6/60/Maki_Zenin_Anime.png",
        bio: "Maki Zenin is a second-year student at Tokyo Jujutsu High who was ostracized by the prestigious Zenin clan due to her lack of cursed energy. However, she possesses a Heavenly Restriction that grants her superhuman physical strength, speed, and mastery over specialized cursed tools. Her goal is to become a high-ranking sorcerer to spite the family that rejected her. Maki's determination and tactical brilliance make her one of the most respected fighters in the series, eventually reaching a level of power that challenges the very foundations of the Zenin clan."
      },
      {
        name: "Toge Inumaki",
        role: "Second-Year Student / Cursed Speech",
        description: "A sorcerer who communicates through rice ball ingredients to avoid cursing others.",
        image: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/4/47/Toge_Inumaki_Anime.png",
        bio: "Toge Inumaki is a descendant of the Inumaki family, a lineage of sorcerers who possess the Cursed Speech technique. This ability allows him to infuse his words with cursed energy, forcing anything that hears him to follow his commands. To prevent accidentally cursing his friends, Toge limits his vocabulary to the names of rice ball fillings (like 'Salmon' or 'Kelp'). While powerful, the technique places an immense strain on his throat, requiring him to use it with extreme caution and strategy during high-stakes battles."
      },
      {
        name: "Panda",
        role: "Second-Year Student / Mutated Corpse",
        description: "A talking panda who is actually a complex cursed corpse with three cores.",
        image: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/0/07/Panda_Anime.png",
        bio: "Panda is an Abrupt Mutated Cursed Corpse created by Principal Masamichi Yaga. While he looks like a giant panda, he possesses a human-level consciousness and emotion. Panda contains three distinct 'cores' within his body—Panda, Gorilla, and a mysterious third sister—each representing a different personality and combat style. This unique structure allows him to switch between forms as needed, making him a versatile and resilient fighter who views himself not as a puppet, but as a living being with his own destiny."
      },
      {
        name: "Aoi Todo",
        role: "Third-Year Student / Physical Powerhouse",
        description: "An eccentric Special Grade 1 sorcerer from Kyoto who value brotherly bonds.",
        image: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/b/bd/Aoi_Todo_Anime.png",
        bio: "Aoi Todo is a physically imposing sorcerer from Kyoto Jujutsu High with a deep obsession with the idol Takada-chan. He possesses an incredible IQ and a unique philosophy on friendship, often asking opponents what their 'type' of woman is to gauge their character. His Boogie Woogie technique allows him to swap the positions of anything with cursed energy by simply clapping his hands. Todo developed a profound 'brotherly' bond with Yuji Itadori, acting as a vital mentor in teaching Yuji how to truly harness his potential in the midst of battle."
      },
      {
        name: "Mahito",
        role: "Special Grade Curse / Human Hatred",
        description: "A high-level curse born from human-to-human hatred and malice.",
        image: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/9/91/Mahito_Anime.png",
        bio: "Mahito is a Special Grade cursed spirit born from the negative emotions humans harbor against one another. He is a primary antagonist who views human lives as nothing more than playthings for his experimentation. His Idle Transfiguration technique allows him to reshape souls through touch, which in turn reshapes the physical body of his victims. Mahito is childlike, curious, and utterly remorseless, reflecting the worst aspects of humanity while constantly evolving his own soul to reach higher levels of destructive perfection."
      },
      {
        name: "Choso",
        role: "Death Painting / Blood Manipulator",
        description: "The eldest of the nine Cursed Womb: Death Paintings who deeply loves his brothers.",
        image: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/7/77/Choso_Anime.png",
        bio: "Choso is the eldest of the Death Painting Wombs, a hybrid existence between a curse and a human. He was created by Noritoshi Kamo (Kenjaku) and possesses the Blood Manipulation technique of the Kamo clan. Choso's character is defined by his intense love for his brothers, Kechizu and Eso, and his desire to protect them at all costs. After the events at Shibuya, his arc takes a profound turn as he discovers a mysterious connection to Yuji Itadori, leading him to rethink his place in the conflict between sorcerers and curses."
      },
      {
        name: "Jogo",
        role: "Special Grade Curse / Earth & Fire",
        description: "A disaster-level curse born from human fear of fire and volcanoes.",
        image: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/2/27/Jogo_Anime.png",
        bio: "Jogo is a Special Grade cursed spirit who represents the fear humans have of natural disasters, specifically fire and earth. He is incredibly proud and believes that curses are the 'true' humans because they are born from raw, honest emotions. His combat style is devastatingly explosive, capable of incinerating entire cities with his domain expansion, Coffin of the Iron Mountain. Despite his high power level, Jogo often found himself outmatched by the likes of Gojo and Sukuna, serving as a benchmark for the extreme power scaling in the series."
      },
      {
        name: "Hanami",
        role: "Special Grade Curse / Nature's Wrath",
        description: "A curse born from the fear and mistreatment of the natural world.",
        image: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/4/47/Hanami_Anime.png",
        bio: "Hanami is a Special Grade cursed spirit born from the collective fear of nature's destruction at the hands of humanity. Hanami communicates through a unique language perceived directly in the mind and possesses the ability to manipulate plant life. Unlike some other curses, Hanami's goal is to protect the planet by eliminating humans, whom Hanami views as an invasive species. Hanami's durability and mastery over the environment make Hanami a formidable opponent who prefers to fight with a calm, stoic intensity until forced to unleash nature's ultimate wrath."
      },
      {
        name: "Ryomen Sukuna",
        role: "Antagonist / King of Curses",
        description: "The undisputed King of Curses. A disaster-level entity residing within Yuji Itadori.",
        image: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/b/b2/Sukuna_Anime.png",
        bio: "Ryomen Sukuna is the primary antagonist of Jujutsu Kaisen and the strongest curse in history. Once a human sorcerer from a thousand years ago, he was so powerful that twenty fingers were required to seal his soul. After Yuji Itadori consumed one of these curse-grade objects, Sukuna was reincarnated within him. He is cruel, arrogant, and possesses overwhelming power, utilizing 'Dismantle' and 'Cleave' to incinerate and slice everything in his path. Sukuna values nothing but his own entertainment and power, waiting within Yuji for the perfect moment to reclaim his absolute reign over the jujutsu world."
      },
      {
        name: "Yuta Okkotsu",
        role: "Special Grade Sorcerer",
        description: "A student who was haunted by his childhood friend's spirit, now a powerful warrior.",
        image: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/c/c2/Yuta_Okkotsu_Anime.png",
        bio: "Yuta Okkotsu is one of only four Special Grade sorcerers. He originally came to Jujutsu High because he was haunted by Rika, the vengeful spirit of his childhood friend. Over time, Yuta learned to control the immense cursed energy Rika provided, turning his curse into a source of power. He is known for his ability to copy others' techniques and has a seemingly bottomless well of cursed energy, making him dangerous even to Special Grade curses. After training overseas, Yuta returned as a matured warrior with a resolve as sharp as his blade."
      },
      {
        name: "Toji Fushiguro",
        role: "The Sorcerer Killer / Zero Cursed Energy",
        description: "Megumi's father, a man with no cursed energy who brought the jujutsu world to its knees.",
        image: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/7/7f/Toji_Fushiguro_Anime.png",
        bio: "Toji Fushiguro, born into the Zenin clan, was an anomaly born with zero cursed energy due to a Heavenly Restriction. In exchange, he possessed superhuman physical prowess and five heightened senses that allowed him to see and battle curses. Known as the 'Sorcerer Killer', Toji specialized in hunting down high-level sorcerers using his vast arsenal of specialized cursed tools. His battle with Satoru Gojo remains one of the most significant events in history, demonstrating that a man with nothing could challenge the heavens themselves."
      },
      {
        name: "Yuki Tsukumo",
        role: "Special Grade Sorcerer / Researcher",
        description: "A Special Grade sorcerer who travels the world researching how to rid it of cursed spirits.",
        image: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/2/2a/Yuki_Tsukumo_Anime.png",
        bio: "Yuki Tsukumo is one of the world's few Special Grade sorcerers, known for her independent nature and her refusal to take on traditional missions for the jujutsu high-ups. She is a visionary researcher who believes that the true solution to cursed spirits lies in changing the fundamental nature of humanity. Her technique, Star Rage, allows her to add virtual mass to herself and her shikigami, Garuda, granting her overwhelming destructive force. Yuki is a free spirit who seeks to break the cycle of tragedy that defines personal sacrifice in the sorcery world."
      },
      {
        name: "Kenjaku",
        role: "Ancient Sorcerer / The Architect",
        description: "A thousand-year-old entity who inhabits bodies to orchestrate the evolution of mankind.",
        image: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/a/a2/Pseudo-Geto_Anime.png",
        bio: "Kenjaku is an ancient and malevolent sorcerer who has survived for over a millennium by transplanting his brain into different vessels. Throughout history, he has operated from the shadows, engineering grand schemes to merge humanity with Tengen and force a new era of evolution. By inhabiting the body of Suguru Geto, he gained access to Cursed Spirit Manipulation, utilizing it to seal Satoru Gojo and initiate the Culling Game. Kenjaku is a patient and clinical mastermind whose curiosity about the potential of cursed energy threatens to consume the entire world."
      },
      {
        name: "Hana Kurusu (Angel)",
        role: "The Angel / Exterminator",
        description: "A sorcerer who coexists with an ancient entity seeking to destroy Sukuna.",
        image: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/1/1e/Hana_Kurusu_Anime.png",
        bio: "Hana Kurusu is a sorcerer from the 'Gilded Age' who serves as the vessel for an ancient being known only as Angel. Her philosophy is centered on the eradication of 'The Disgraced One' (Sukuna) and all other reincarnated sorcerers who disrupt the natural order. Her technique, Jacob's Ladder, possesses the unique ability to nullify any and all cursed techniques and seals, including the barrier of Prison Realm. Hana represents a divine-like intervention in the chaotic world of jujutsu, though her deep emotional connection to those around her often tests her resolve to carry out her mission."
      },
      {
        name: "Kokichi Muta (Mechamaru)",
        role: "Second-Year Student / Puppet Master",
        description: "A sorcerer with a fragile body who controls powerful robot puppets via Heavenly Restriction.",
        image: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/d/da/Mechamaru_Anime.png",
        bio: "Kokichi Muta was born with a severe Heavenly Restriction that left his body incredibly fragile and in constant pain, but granted him immense cursed energy and the ability to control puppets across vast distances. Operating primarily through Ultimate Mechamaru, he acted as a key member of Kyoto Jujutsu High. His desire for a normal body led him into a dangerous pact with the enemies of jujutsu high, showing the lengths a person will go to reclaim their humanity. Despite his tragic circumstances, his tactical mind and colossal technological weaponry made him a formidable guardian of his friends."
      },
      {
        name: "Mai Zenin",
        role: "Second-Year Student / Construction User",
        description: "Maki's twin sister who uses cursed energy to create physical objects from nothing.",
        image: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/d/df/Mai_Zenin_Anime.png",
        bio: "Mai Zenin is a second-year student at Kyoto Jujutsu High and the twin sister of Maki. Unlike Maki, Mai possesses cursed energy but lacks the resolve to be a sorcerer, having been forced into the life by the Zenin clan's expectations. Her Construction technique allows her to create matter from scratch—an incredibly taxing ability that significantly drains her energy. Her character is defined by a deep-seated resentment toward Maki for leaving her behind, but beneath her cold exterior lies a tragic bond that eventually leads to a pivotal moment of self-sacrifice and growth for them both."
      },
      {
        name: "Kasumi Miwa",
        role: "Second-Year Student / New Shadow Style",
        description: "A kind-hearted and humble student from Kyoto who uses sword-based jujutsu.",
        image: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/4/4c/Kasumi_Miwa_Anime.png",
        bio: "Kasumi Miwa is a second-year student at Kyoto Jujutsu High who entered the world of sorcery to support her family financially. She describes herself as 'useless' compared to her peers, but she is a dedicated user of the New Shadow Style, which allows her to create a simple domain for instantaneous counter-attacks. Miwa is the heart of the Kyoto team, often serving as the relatable, grounding influence in a world of monsters and eccentrics. Her resolve is tested in the face of overwhelming loss, proving that even a 'normal' person can find the strength to face the darkness."
      },
      {
        name: "Noritoshi Kamo",
        role: "Third-Year Student / Blood Manipulator",
        description: "The heir to the Kamo clan who masters the art of Blood Manipulation.",
        image: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/3/30/Noritoshi_Kamo_Anime.png",
        bio: "Noritoshi Kamo is a third-year student and the acting heir of the prestigious Kamo clan. He is a master of Blood Manipulation, a technique that allows him to control his own blood for various offensive and defensive purposes, such as Flowing Red Scale. Noritoshi was raised under strict family standards and carries the heavy burden of restoring his clan's honor. His initially cold and traditional outlook softens after his encounters with Yuji Itadori and Megumi Fushiguro, leading him to question the rigid hierarchies of the jujutsu world and find his own path as a leader."
      },
      {
        name: "Naoya Zenin",
        role: "Elite Sorcerer / The Projectionist",
        description: "The arrogant and gifted son of Naobito Zenin who believes in his own absolute superiority.",
        image: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/b/b2/Naoya_Zenin_Anime.png",
        bio: "Naoya Zenin was the head of the Zenin clan's elite unit, the 'Hei', and a master of Projection Sorcery. Arrogant, misogynistic, and obsessed with status, Naoya viewed himself as the true successor to the clan's legacy. His technique allowed him to track movement at 24 frames per second, making him one of the fastest sorcerers in history. His character serves as a dark mirror to the Zenin clan's traditional rot, eventually meeting his match in the form of the very individual he looked down upon the most, leading to a transformation that reflects his own inner ugliness."
      },
      {
        name: "Uraume",
        role: "Sukuna's Servant / Frost Master",
        description: "A loyal and mysterious sorcerer from the past who serves Ryomen Sukuna.",
        image: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/6/69/Uraume_Anime.png",
        bio: "Uraume is a sorcerer from a thousand years ago who has faithfully served Ryomen Sukuna across the centuries. Possessing the rare Ice Formation technique, Uraume can generate and manipulate vast amounts of frost and ice with a precision that can freeze even Special Grade sorcerers in their tracks. Uraume is characterized by an absolute, unwavering devotion to Sukuna and a cold, clinical efficiency in carrying out his orders. As the architect of Sukuna's return and his most trusted follower, Uraume plays a vital role in ensuring the King of Curses' absolute reign over the modern era."
      }
    ],
  },
  {
    id: "a4",
    title: "Cyberpunk: Edgerunners",
    description: "A Street Kid trying to survive in a technology and body modification-obsessed city of the future. Having everything to lose, he chooses to stay alive by becoming an Edgerunner.",
    categories: ["Action", "Sci-Fi"],
    posterImage: "/assets/cyberpunk-edgerunner/1.jpg",
    trailerUrl: "https://www.youtube.com/embed/JtqIas3bYhg?autoplay=1&mute=1",
    openings: [
      { title: "Opening: This Fire", url: "https://www.youtube.com/embed/KvMY1uzSC1E?autoplay=1&mute=1" }
    ],
    previews: [
      "/assets/cyberpunk-edgerunner/2.jpg",
      "/assets/cyberpunk-edgerunner/3.png",
      "/assets/cyberpunk-edgerunner/4.jpg",
    ],
    characters: [
      {
        name: "David Martinez",
        role: "The Edgerunner / Chrome Junkie",
        description: "A street kid turned mercenary who installed a military-grade Sandevistan.",
        image: "https://static.wikia.nocookie.net/cyberpunk/images/a/ad/David_Martinez_Edgerunners_profile.png",
        bio: "David Martinez is a street kid from Santo Domingo who became a mercenary after the tragic death of his mother. Driven by a desire to reach the top of Arasaka Tower and live out the dreams of those he lost, David pushed his body to its limits by installing high-grade cybernetics, most notably the 'Sandevistan' which allows him to move at superhuman speeds. His journey is a visceral exploration of the cost of fame and survival in Night City, eventually leading him to the brink of cyberpsychosis.",
        abilities: ["Military-Grade Sandevistan", "Projectile Launch System", "Cyberskeleton", "Expert Brawler"],
        affiliation: "Maine's Crew / Edgerunners",
        status: "KIA",
        origin: "Santo Domingo, Night City"
      },
      {
        name: "Lucy",
        role: "Netrunner / Moon Dreamer",
        description: "A talented netrunner who seeks to escape the reality of Night City.",
        image: "https://static.wikia.nocookie.net/cyberpunk/images/1/14/Lucy_Edgerunners_profile.png",
        bio: "Lucy is a highly skilled netrunner with a mysterious past involving Arasaka's deep-dive experiments. She is reserved and cynical about Night City, harboring a secret dream of traveling to the Moon. After meeting David, she becomes his emotional anchor and protector, using her incredible hacking skills to navigate the dangerous digital landscape of the 2077 era while trying to keep him from falling too deep into the mercenary lifestyle.",
        abilities: ["Monowire Combat", "Advanced Netrunning", "Deep-Dive Specialization", "ICE Breaking"],
        affiliation: "Maine's Crew / Arasaka (Former)",
        status: "Active (Off-World)",
        origin: "Arasaka Secret Facility"
      },
      {
        name: "Rebecca",
        role: "The Duo / Trigger Happy Solo",
        description: "A chaotic mercenary who delivers massive firepower with oversized weapons.",
        image: "https://static.wikia.nocookie.net/cyberpunk/images/9/90/Rebecca_Edgerunners_profile.png",
        bio: "Rebecca is a diminutive but terrifyingly effective Solo within Maine's crew. Known for her emerald green hair and oversized, high-recoil weapons, she is the primary fire support for the team. Rebecca is fiercely loyal and surprisingly protective of David, despite her manic and often violent tendencies. She embodies the 'live fast, die loud' philosophy of Night City, making her one of the most memorable and beloved characters in the Edgerunners saga.",
        abilities: ["Heavy Weapons Mastery", "Enhanced Strength Arms", "Dual Guts Shotguns", "Berserk Combat Style"],
        affiliation: "Maine's Crew / Edgerunners",
        status: "KIA",
        origin: "Watson, Night City"
      },
      {
        name: "Maine",
        role: "Crew Leader / Heavy Hitter",
        description: "The veteran leader of the merc crew who took David in under his wing.",
        image: "https://static.wikia.nocookie.net/cyberpunk/images/b/b3/Maine_Edgerunners_profile.png",
        bio: "Maine is the massive, chrome-heavy leader of a crew of mercenaries operating out of Santo Domingo. A veteran of the streets, he possesses a strong sense of leadership and a surprisingly paternal instinct toward David. However, Maine's dependence on high-grade combat cyberware eventually pushes him toward the inevitable fate of an Edgerunner: cyberpsychosis. His downfall serves as a grim warning to David and the rest of the crew about the physical and mental cost of chasing the top in Night City.",
        abilities: ["Gorilla Arms", "Projectile Launcher", "Heavy Chrome Build", "Tactical Command"],
        affiliation: "Maine's Crew (Leader)",
        status: "KIA",
        origin: "Night City"
      },
      {
        name: "Dorio",
        role: "Second-in-Command / Muscle",
        description: "Maine's partner and the crew's level-headed brawler.",
        image: "https://static.wikia.nocookie.net/cyberpunk/images/1/1e/Dorio_Edgerunners_profile.png",
        bio: "Dorio is Maine's second-in-command and his loyal partner both in and out of combat. She is a powerhouse on the field, utilizing her muscular build and cybernetic enhancements to provide frontline support. Unlike the more volatile members of the crew, Dorio is often the voice of reason. Her devotion to Maine and the crew ultimately leads her into the heart of the conflict that consumes them all.",
        abilities: ["Gorilla Arms", "Subdermal Armor", "Enhanced Combat Reflexes", "Tactical Support"],
        affiliation: "Maine's Crew",
        status: "KIA",
        origin: "Night City"
      },
      {
        name: "Kiwi",
        role: "Veteran Netrunner / Icebreaker",
        description: "The crew's experienced and emotionally detached hacker.",
        image: "https://static.wikia.nocookie.net/cyberpunk/images/d/d4/Kiwi_Edgerunners_profile.png",
        bio: "Kiwi is the veteran netrunner of the crew, characterized by her detachable lower jaw and her cold, analytical approach to the job. She is Lucy's mentor and a master of the digital void, capable of bypassing the most advanced Arasaka ICE. Kiwi operates on a philosophy of pragmatism over sentimentality. Her complex allegiances and self-preservation instincts highlight the treacherous nature of the mercenary life.",
        abilities: ["Cyberdeck Mastery", "Advanced Quickhacking", "Neural Link (Detachable Jaw Interface)", "ICE Breaking Proficiency"],
        affiliation: "Maine's Crew / Faraday (Contractor)",
        status: "KIA",
        origin: "Night City"
      },
      {
        name: "Falco",
        role: "Getaway Driver",
        description: "A cool-headed driver with a custom ride and a penchant for survival.",
        image: "https://static.wikia.nocookie.net/cyberpunk/images/a/ab/Falco_Edgerunners_profile.png",
        bio: "Falco is the crew's getaway driver, known for his signature mustache and his exceptional skills behind the wheel of his customized van. While he may not be as 'chromed-out' as the Solos, his role is vital for the team's insertion and extraction. Falco is a reliable professional who remains calm under fire, eventually becoming one of the few survivors who carries the memory of the crew forward.",
        abilities: ["Master Driving Skills", "Vehicle Customization", "Cool Under Pressure", "Combat Support (Small Arms)"],
        affiliation: "Maine's Crew / Independent",
        status: "Active",
        origin: "Night City"
      },
      {
        name: "Pilar",
        role: "Techie / Chaotic Brother",
        description: "Rebecca's eccentric brother who specializes in tech and long-reaching cyber-arms.",
        image: "https://static.wikia.nocookie.net/cyberpunk/images/1/1a/Pilar_Edgerunners_profile.png",
        bio: "Pilar was Rebecca's older brother and the crew's designated techie. He was characterized by his long, spindly cyber-arms and his boisterous sense of humor. Despite his eccentricities, Pilar was a highly skilled engineer who maintained the crew's hardware. His sudden and tragic death at the hands of a cyberpsycho served as the catalyst that first exposed David to the raw cruelty of Night City.",
        abilities: ["Long-Reach Cyber-Arms", "Technical Engineering", "Weapon Maintenance", "Guerilla Tactics"],
        affiliation: "Maine's Crew",
        status: "KIA",
        origin: "Watson, Night City"
      },
      {
        name: "Faraday",
        role: "Fixer / Puppeteer",
        description: "A high-level fixer with four eyes who negotiates between the mercs and the corporations.",
        image: "https://static.wikia.nocookie.net/cyberpunk/images/8/87/Faraday_Edgerunners_profile.png",
        bio: "Faraday was a powerful fixer who operated with clinical efficiency in Night City. With his signature four cybernetic eyes and calm demeanor, he manipulated Edgerunners as expendable tools to suit his corporate clients. Faraday’s pursuit of power and greed eventually led he and the crew into a lethal confrontation with Arasaka's elite forces.",
        abilities: ["High-Level Fixer Connections", "Quad-Optic Cybernetic Array", "Strategic Manipulation", "Corporate Intelligence"],
        affiliation: "Independent / Militech (Contractor) / Arasaka (Contractor)",
        status: "KIA",
        origin: "Night City"
      },
      {
        name: "Adam Smasher",
        role: "The Legend / Full Borg Solo",
        description: "Arasaka's ultimate weapon and a terrifying legend in Night City.",
        image: "https://static.wikia.nocookie.net/cyberpunk/images/b/ba/Adam_Smasher_CP2077.png",
        bio: "Adam Smasher is a legendary Solo who has replaced nearly 100% of his human body with military-grade cybernetics. Serving as Arasaka’s personal executioner, he is a being of absolute carnage who views humans as 'meat'. Smasher is the final obstacle in David’s path, representing the unreachable, monstrous peak of the Edgerunner lifestyle.",
        abilities: ["Full-Body Cybernetic Conversion", "Sandevistan (Legendary Grade)", "Heavy Ordnance Integration", "Indestructible Frame"],
        affiliation: "Arasaka (Head of Security)",
        status: "Active",
        origin: "Night City"
      },
      {
        name: "Gloria Martinez",
        role: "Emergency Technician / Mother",
        description: "David's mother who worked tireless shifts to give her son a better future.",
        image: "https://static.wikia.nocookie.net/cyberpunk/images/0/0e/Gloria_Martinez_Edgerunners_profile.png",
        bio: "Gloria Martinez was an underpaid Emergency Medical Technician who scavenged cyberware from crime scenes to pay for David’s tuition at the Arasaka Academy. Her life was defined by self-sacrifice and a desperate hope that her son would one day climb to the top of Arasaka Tower legitimately. Her sudden death in a random street accident was the spark that ignited David’s transformation into an Edgerunner.",
        abilities: ["Emergency Medical Logistics", "Salvage Operations", "Resource Management", "Night City Survival"],
        affiliation: "Night City Fire Department (NCFD) / EMS",
        status: "Deceased (Accidental)",
        origin: "Santo Domingo, Night City"
      },
      {
        name: "Jimmy Kurosaki",
        role: "XBD Director",
        description: "A high-end 'tuner' and director of extreme Brain-Dances.",
        image: "https://static.wikia.nocookie.net/cyberpunk/images/1/1d/Jimmy_Kurosaki_Edgerunners_profile.png",
        bio: "Jimmy Kurosaki was a specialist in the creation of 'XBDs'—extreme, often illegal Brain-Dances that allowed users to experience visceral sensations. With his customized Sandevistan and surgical precision, he was a key figure in the underground tech scene. His encounter with David demonstrated the psychological depth of BD addiction and the thin line between reality and the artificial high of the digital world.",
        abilities: ["High-End XBD Tuning", "Neural Oscillation Manipulation", "Custom Sandevistan Mastery", "Surgical Precision"],
        affiliation: "Independent / Underground XBD Market",
        status: "KIA",
        origin: "Night City"
      },
      {
        name: "The Ripperdoc (Doc)",
        role: "Black Market Surgeon",
        description: "The cynical ripperdoc who handles David's cyberware installations.",
        image: "https://static.wikia.nocookie.net/cyberpunk/images/7/77/Ripperdoc_Edgerunners_profile.png",
        bio: "Operating out of a dimly lit clinic in Santo Domingo, the Ripperdoc was responsible for installing David’s military-grade Sandevistan. Cynical and weary, he provided David with the tools for his ascent while repeatedly warning him about the neurological toll. He functioned as a dark mentor figure who profited from the very path he knew would lead to David’s destruction.",
        abilities: ["Expert Cyberware Installation", "Neural Health Monitoring", "Black Market Logistics", "Surgical Augmentation"],
        affiliation: "Independent (Santo Domingo Clinic)",
        status: "Active",
        origin: "Santo Domingo, Night City"
      },
      {
        name: "Katsuo Tanaka",
        role: "Academy Student / Arasaka Legacy",
        description: "A wealthy student at the Arasaka Academy and David's early rival.",
        image: "https://static.wikia.nocookie.net/cyberpunk/images/e/e0/Katsuo_Tanaka_Edgerunners_profile.png",
        bio: "Katsuo Tanaka was the privileged son of a high-ranking Arasaka executive. Arrogant and cruel, he frequently bullied David for his lower-class background. Katsuo represented the elitism of the corporate world that Gloria desperately wanted David to join, and his father’s death became a major turning point for the crew.",
        abilities: ["Corporate Education", "Neural Link Interface", "Unarmed Combat (Basic)", "Social Manipulation"],
        affiliation: "Arasaka Academy",
        status: "Active",
        origin: "Night City"
      },
      {
        name: "Sasha Yakovleva",
        role: "Prequel Netrunner",
        description: "A former member of Maine's crew who sought the truth about BioTechnica.",
        image: "https://static.wikia.nocookie.net/cyberpunk/images/9/9f/Sasha_Yakovleva_Edgerunners_profile.png",
        bio: "Sasha Yakovleva was Maine's netrunner prior to Lucy and Kiwi. Her story details her infiltration of a BioTechnica facility to uncover the corporation’s role in her mother’s illness. Sasha was a compassionate and driven mercenary whose sacrifice set the tone for the Edgerunners' universe, demonstrating that in Night City, the search for the truth often comes with a lethal price tag.",
        abilities: ["Exceptional Netrunning", "Data Extraction Specialist", "Infiltration Tactics", "Neural Overload Resilience"],
        affiliation: "Maine's Crew",
        status: "KIA",
        origin: "Night City"
      },
      {
        name: "Julio",
        role: "The Hopeful Merc",
        description: "A young, eager mercenary who met a tragic end shortly after joining the crew.",
        image: "https://static.wikia.nocookie.net/cyberpunk/images/c/c5/Julio_Edgerunners.png",
        bio: "Julio was a short-lived member of Maine's crew who was eager to prove his worth in the world of high-stakes mercenary work. His character serves as a stark reminder of the high mortality rate for those who enter the lifestyle without necessary experience. His sudden death during a mission highlights the cold reality of Night City.",
        abilities: ["Basic Marksmanship", "Eager Technical Support", "Standard Military Augments", "Infiltration (Basic)"],
        affiliation: "Maine's Crew (Junior)",
        status: "KIA",
        origin: "Night City"
      },
      {
        name: "Tanaka Senior",
        role: "Arasaka Executive",
        description: "Katsuo's father and a high-ranking official targeted by Maine's crew.",
        image: "https://static.wikia.nocookie.net/cyberpunk/images/3/30/Tanaka_Edgerunners.png",
        bio: "Tanaka Senior was a top-level Arasaka executive involved in the company's most secretive projects, including the 'Cyberskeleton'. He was a cold and calculating corporate figure whose kidnapping became the central mission that ultimately fractured Maine's crew and drew Arasaka's lethal attention.",
        abilities: ["High-Level Corporate Clearance", "Neural Data Encryption", "Strategic Management", "Advanced Personal ICE"],
        affiliation: "Arasaka",
        status: "KIA",
        origin: "Night City"
      },
      {
        name: "Kate",
        role: "Faraday's Assistant",
        description: "The stoic and professional assistant to the fixer Faraday.",
        image: "https://static.wikia.nocookie.net/cyberpunk/images/a/a2/Kate_Edgerunners.png",
        bio: "Kate was Faraday's personal assistant, handling the logistics of his complex negotiations. She was characterized by her absolute professionalism and ability to navigate both corporate and mercenary worlds. While she remained in the background, her presence ensured that Faraday's schemes ran with lethal precision.",
        abilities: ["Administrative Logistics Mastery", "Corporate Protocol Proficiency", "Information Management", "Tactical Coordination"],
        affiliation: "Faraday (Direct Support)",
        status: "KIA",
        origin: "Night City"
      }
    ],
  },
  {
    id: "one-piece",
    title: "One Piece",
    description: "Monkey D. Luffy refuses to let anyone or anything stand in the way of his quest to become the king of all pirates. With a course charted for the treacherous waters of the Grand Line and beyond, this is one captain who'll never give up until he's claimed the greatest treasure on Earth: the Legendary One Piece!",
    categories: ["Action", "Adventure", "Fantasy"],
    posterImage: "/assets/one-piece/1.jpg",
    trailerUrl: "https://www.youtube.com/embed/lgAwlnGLTUg?autoplay=1&mute=1",
    openings: [
      {
        title: "Opening 1",
        url: "https://www.youtube.com/embed/YoeP9w5UIlg?autoplay=1&mute=1"
      },
      {
        title: "Opening 2",
        url: "https://www.youtube.com/embed/5aPf1c6eg58?autoplay=1&mute=1"
      },
      {
        title: "Opening 3",
        url: "https://www.youtube.com/embed/Oo52vQyAR6w?autoplay=1&mute=1"
      },
      {
        title: "Opening 4",
        url: "https://www.youtube.com/embed/hBi9wavp2w4?autoplay=1&mute=1"
      },
      {
        title: "Opening 5",
        url: "https://www.youtube.com/embed/EP3FLYhE7Nc?autoplay=1&mute=1"
      },
      {
        title: "Opening 6",
        url: "https://www.youtube.com/embed/kmEHSsRAIJs?autoplay=1&mute=1"
      },
      {
        title: "Opening 7",
        url: "https://www.youtube.com/embed/M340RGHsIO8?autoplay=1&mute=1"
      },
      {
        title: "Opening 8",
        url: "https://www.youtube.com/embed/JqUWua4MrIM?autoplay=1&mute=1"
      }
    ],
    previews: [
      "/assets/one-piece/2.jpg",
      "/assets/one-piece/3.jpg",
      "/assets/one-piece/4.jpg",
    ],
    characters: [
      {
        name: "Monkey D. Luffy",
        role: "Captain / Sun God Nika",
        description: "The man who seeks absolute freedom and the title of Pirate King.",
        image: "https://static.wikia.nocookie.net/onepiece/images/a/af/Monkey_D._Luffy_Anime_Post_Timeskip_Infobox.png",
        bio: "Monkey D. Luffy is the captain of the Straw Hat Pirates and a man of boundless ambition and joy. After consuming the Gomu Gomu no Mi (revealed to be the Hito Hito no Mi, Model: Nika), he gained a body of rubber with near-limitless potential. Luffy's journey through the Grand Line is fueled by his desire for absolute freedom and his unwavering loyalty to his friends. His ability to turn enemies into allies and his revolutionary spirit have propelled him to the rank of Emperor, sparking a new era of piracy across the world.",
        abilities: ["Hito Hito no Mi, Model: Nika", "Advanced Conqueror's Haki", "Gear 5", "Gum-Gum Awakening"],
        affiliation: "Straw Hat Pirates / Four Emperors",
        status: "Active",
        origin: "Foosha Village, East Blue"
      },
      {
        name: "Roronoa Zoro",
        role: "Combatant / King of Hell",
        description: "The master of the Three-Sword Style who vowed to become the world's greatest.",
        image: "https://static.wikia.nocookie.net/onepiece/images/5/52/Roronoa_Zoro_Anime_Post_Timeskip_Infobox.png",
        bio: "Roronoa Zoro was the first member to join Luffy's crew, a former pirate hunter who vowed to become the world's greatest swordsman to honor a childhood promise. Zoro's loyalty is absolute, often serving as the crew's stern moral anchor. Wielding three legendary swords, including the cursed Enma, he has developed a unique Santoryu style while mastering the use of Haki. His physical discipline and tolerance for pain are legendary, having overcome countless overwhelming odds to stand as one of the most feared warriors on the seas.",
        abilities: ["Three-Sword Style (Santoryu)", "Advanced Armament Haki", "Nine-Sword Style (Asura)", "Enma Mastery"],
        affiliation: "Straw Hat Pirates",
        status: "Active",
        origin: "Shimotsuki Village, East Blue"
      },
      {
        name: "Nami",
        role: "Navigator / Cat Burglar",
        description: "The navigator of the Straw Hat Pirates. A master cartographer.",
        image: "https://static.wikia.nocookie.net/onepiece/images/8/83/Nami_Anime_Post_Timeskip_Infobox.png",
        bio: "Nami is the highly intelligent navigator of the Straw Hat Pirates. Originally a thief who hated pirates, she joined Luffy's crew after he liberated her home village from Arlong's control. Her dream is to draw a map of the entire world. In combat, she uses the Clima-Tact, a specialized staff that allows her to manipulate the local weather, conjuring lightning strikes and dense fog to overwhelm her enemies.",
        abilities: ["Clima-Tact Mastery", "Meteorological Expertise", "Zeus (Soul Homie)", "Navigation Mastery"],
        affiliation: "Straw Hat Pirates",
        status: "Active",
        origin: "Cocoyasi Village, East Blue"
      },
      {
        name: "Sanji",
        role: "Chef / Black Leg",
        description: "The cook of the Straw Hat Pirates. A master of martial arts using only his legs.",
        image: "https://static.wikia.nocookie.net/onepiece/images/4/43/Sanji_Anime_Post_Timeskip_Infobox.png",
        bio: "Sanji is the suave, chivalrous chef of the Straw Hats. Trained by 'Red Leg' Zeff, Sanji fights using only his legs to keep his hands clean for cooking. He aims to find the All Blue, a legendary sea where the fish from all four oceans gather. His 'Diable Jambe' technique allows him to heat his legs to extreme temperatures, delivering devastating, fiery kicks to any opponent who threatens his friends or crew.",
        abilities: ["Black Leg Style", "Diable Jambe", "Ifrit Jambe", "Advanced Observation Haki"],
        affiliation: "Straw Hat Pirates",
        status: "Active",
        origin: "Germa Kingdom, North Blue"
      },
      {
        name: "Jinbe",
        role: "Helmsman / First Son of the Sea",
        description: "A powerful Fish-Man who was a former Warlord of the Sea.",
        image: "https://static.wikia.nocookie.net/onepiece/images/2/22/Jinbe_Anime_Post_Timeskip_Infobox.png",
        bio: "Jinbe is the calm and honorable helmsman of the Straw Hat Pirates. A former captain of the Sun Pirates and a Warlord of the Sea, Jinbe is a master of Fish-Man Karate. He possesses incredible physical strength and a deep sense of duty. His ability to manipulate water as a weapon makes him a terrifying threat on land and virtually invincible in the ocean.",
        abilities: ["Fish-Man Karate", "Vagabond Drill", "Ocean Current Shoulder Throw", "Fish-man Jujutsu"],
        affiliation: "Straw Hat Pirates / Former Sun Pirates",
        status: "Active",
        origin: "Fish-Man Island"
      },
      {
        name: "Shanks",
        role: "Emperor / Red-Haired",
        description: "The captain of the Red-Haired Pirates and one of the Four Emperors.",
        image: "https://static.wikia.nocookie.net/onepiece/images/1/14/Shanks_Anime_Infobox.png",
        bio: "Shanks is the enigmatic leader of the Red-Haired Pirates and the man who inspired Luffy to become a pirate. Despite losing an arm, he remains one of the most powerful individuals in the world, holding the title of Emperor of the Sea. His Mastery of Haki, specifically Conqueror's Haki, is so advanced it can cause physical damage to his surroundings just by his mere presence.",
        abilities: ["Divine Departure", "Advanced Conqueror's Haki", "Observation Killing", "Master Swordsmanship"],
        affiliation: "Red-Haired Pirates / Four Emperors",
        status: "Active",
        origin: "West Blue"
      },
      {
        name: "Usopp",
        role: "Sniper / God Usopp",
        description: "The crew's master sniper and a legendary storyteller who seeks to become a brave warrior of the sea.",
        image: "https://static.wikia.nocookie.net/onepiece/images/3/35/Usopp_Anime_Post_Timeskip_Infobox.png",
        bio: "Usopp is the sniper of the Straw Hat Pirates and a former captain of the Usopp Pirates. Known for his tactical ingenuity and his skill with his signature slingshot, the Kuro Kabuto, he creates various 'Pop Greens'—seeds that rapidly grow into dangerous botanical weapons. While initially characterized by his cowardice and tall tales, Usopp's journey is one of immense courage, eventually earning him the title of 'God Usopp' after his pivotal actions in Dressrosa.",
        abilities: ["Pop Green Mastery", "Observed Haki", "Tactical Engineering", "Sharpshooting"],
        affiliation: "Straw Hat Pirates",
        status: "Active",
        origin: "Syrup Village, East Blue"
      },
      {
        name: "Tony Tony Chopper",
        role: "Doctor / Cotton Candy Lover",
        description: "A reindeer who ate the Human-Human fruit and became the crew's brilliant physician.",
        image: "https://static.wikia.nocookie.net/onepiece/images/a/af/Tony_Tony_Chopper_Anime_Post_Timeskip_Infobox.png",
        bio: "Chopper is the doctor of the Straw Hat Pirates and a reindeer who gained human intelligence after eating the Hito Hito no Mi. Trained by Dr. Kureha, he is a medical genius capable of treating almost any ailment. His unique creation, the Rumble Ball, allows him to transform into various 'Points'—enhancing his speed, strength, and defensive capabilities. His ultimate form, Monster Point, turns him into a towering behemoth of absolute destruction.",
        abilities: ["Hito Hito no Mi", "Medical Mastery", "Monster Point", "Rumble Ball Transformation"],
        affiliation: "Straw Hat Pirates",
        status: "Active",
        origin: "Drum Island, Grand Line"
      },
      {
        name: "Nico Robin",
        role: "Archaeologist / Devil Child",
        description: "A scholar who can read the ancient Poneglyphs and seeks to uncover the world's true history.",
        image: "https://static.wikia.nocookie.net/onepiece/images/f/f0/Nico_Robin_Anime_Post_Timeskip_Infobox.png",
        bio: "Nico Robin is the archaeologist of the Straw Hat Pirates and the only person in the world capable of reading the Poneglyphs. After a lifetime of being hunted by the World Government for her knowledge of the Void Century, she found a home with Luffy's crew. Her Hana Hana no Mi allows her to bloom parts of her body like flowers on any surface, granting her incredible versatility in both combat and information gathering.",
        abilities: ["Hana Hana no Mi", "Poneglyph Linguistics", "Demonio Fleur", "Clandestine Intelligence"],
        affiliation: "Straw Hat Pirates",
        status: "Active",
        origin: "Ohara, West Blue"
      },
      {
        name: "Franky",
        role: "Shipwright / Iron Man",
        description: "The cyborg shipwright who built the Thousand Sunny and thrives on 'Super' energy.",
        image: "https://static.wikia.nocookie.net/onepiece/images/d/d7/Franky_Anime_Post_Timeskip_Infobox.png",
        bio: "Franky is the flamboyant cyborg shipwright of the Straw Hat Pirates. After surviving a devastating accident, he rebuilt his entire body using cutting-edge scrap-metal technology and cola-fueled energy. Franky is a master engineer who views the Thousand Sunny as his masterpiece. In battle, he utilizes his 'Franky Shogun' mecha and a vast array of integrated weaponry, always accompanied by his signature 'Super!' catchphrase.",
        abilities: ["Cyborg Enhancement", "Radical Beam", "Franky Shogun", "Shipwright Engineering"],
        affiliation: "Straw Hat Pirates / Franky Family",
        status: "Active",
        origin: "Water 7, Grand Line"
      },
      {
        name: "Brook",
        role: "Musician / Soul King",
        description: "A living skeleton who possesses the power to manipulate souls through music.",
        image: "https://static.wikia.nocookie.net/onepiece/images/7/70/Brook_Anime_Post_Timeskip_Infobox.png",
        bio: "Brook is the musician and resident skeleton of the Straw Hat Pirates. A former member of the Rumbar Pirates, he returned to life after his soul found his skeletal remains thanks to the Yomi Yomi no Mi. Brook is a master swordsman who uses his cane-sword, Soul Solid, alongside his soul-chilling music to freeze and stun his enemies. His promise to reunite with the whale Laboon is the emotional anchor of his journey.",
        abilities: ["Yomi Yomi no Mi", "Soul Solid Mastery", "Hanauta Sancho: Yahazu Giri", "Musical Combat"],
        affiliation: "Straw Hat Pirates / Rumbar Pirates",
        status: "Active",
        origin: "West Blue"
      },
      {
        name: "Gol D. Roger",
        role: "Pirate King",
        description: "The legendary man who conquered the Grand Line and initiated the Great Pirate Era.",
        image: "https://static.wikia.nocookie.net/onepiece/images/a/a2/Gol_D._Roger_Anime_Infobox.png",
        bio: "Gol D. Roger was the Pirate King and the only man to ever complete the journey across the Grand Line. His execution and final words about his treasure, the One Piece, sparked the Great Pirate Era. Roger was a man of absolute charisma and power, possessing Haki that could rival any force in nature. His legacy continues to shape the world, as pirates from every corner of the globe seek to reach Laugh Tale and follow in his footsteps.",
        abilities: ["Supreme Conqueror's Haki", "Kamkusari (Divine Departure)", "Voice of All Things", "Master Swordsmanship"],
        affiliation: "Roger Pirates",
        status: "KIA",
        origin: "Loguetown, East Blue"
      },
      {
        name: "Edward Newgate (Whitebeard)",
        role: "Emperor / Strongest Man",
        description: "The legendary captain who valued family above all else and shook the world with his vibrations.",
        image: "https://static.wikia.nocookie.net/onepiece/images/a/a0/Edward_Newgate_Anime_Infobox.png",
        bio: "Edward Newgate, famously known as Whitebeard, was the captain of the Whitebeard Pirates and 'The Strongest Man in the World'. He possessed the Gura Gura no Mi, which allowed him to create devastating earthquakes and tsunamis. Unlike other pirates, Whitebeard’s true goal was his 'family'—his crew. His death at Marineford and his final declaration that 'the One Piece is real!' signaled the end of an era and the start of a new, more chaotic world.",
        abilities: ["Gura Gura no Mi", "Murakumogiri Mastery", "Absolute Armament Haki", "Internal Vibration Shockwaves"],
        affiliation: "Whitebeard Pirates / Four Emperors",
        status: "KIA",
        origin: "Sphinx, Grand Line"
      },
      {
        name: "Kaido",
        role: "Emperor / Strongest Creature",
        description: "The absolute tyrant of Wano who possesses the power to transform into an Eastern Dragon.",
        image: "https://static.wikia.nocookie.net/onepiece/images/a/a3/Kaido_Anime_Infobox.png",
        bio: "Kaido of the Beasts was one of the Four Emperors and the supreme commander of the Beast Pirates. Known as 'The Strongest Creature', he was nearly indestructible and possessed the Uo Uo no Mi, Model: Seiryu, granting him the ability to transform into a massive dragon. Kaido sought to initiate the greatest war the world had ever seen, ruling over Wano with an iron fist until his eventual confrontation with Monkey D. Luffy.",
        abilities: ["Uo Uo no Mi, Model: Seiryu", "Raigun Hakke (Thunder Bagua)", "Bolo Breath", "Near-Indestructibility"],
        affiliation: "Beast Pirates / Four Emperors",
        status: "KIA / Unknown",
        origin: "Vodka Kingdom"
      },
      {
        name: "Charlotte Linlin (Big Mom)",
        role: "Emperor / Iron Balloon",
        description: "The matriarch of Totto Land who can manipulate souls and control the weather.",
        image: "https://static.wikia.nocookie.net/onepiece/images/e/e0/Charlotte_Linlin_Anime_Infobox.png",
        bio: "Charlotte Linlin, known as Big Mom, was the queen of Totto Land and the captain of the Big Mom Pirates. She possessed the Soru Soru no Mi, allowing her to extract and manipulate souls into 'Homies', such as Zeus and Prometheus. Driven by her uncontrollable hunger and her dream of creating a utopia for all races, she was a terrifying force of nature whose power was matched only by her erratic and unpredictable personality.",
        abilities: ["Soru Soru no Mi", "Maser Saber", "Soul Pocus", "Ikoku Sovereignty"],
        affiliation: "Big Mom Pirates / Four Emperors",
        status: "KIA / Unknown",
        origin: "Whole Cake Island"
      },
      {
        name: "Marshall D. Teach (Blackbeard)",
        role: "Emperor / Darkness Alchemist",
        description: "The only man to ever possess two Devil Fruit powers simultaneously.",
        image: "https://static.wikia.nocookie.net/onepiece/images/5/52/Marshall_D._Teach_Anime_Post_Timeskip_Infobox.png",
        bio: "Marshall D. Teach, known as Blackbeard, is the most opportunistic and dangerous pirate in the modern era. After betraying the Whitebeard Pirates, he acquired the Yami Yami no Mi (Darkness) and eventually the Gura Gura no Mi (Tremor). He believes in destiny and the dreams of pirates, utilizing his dual powers to sow chaos and rise to the status of Emperor, becoming a primary rival to Luffy in the race for the One Piece.",
        abilities: ["Yami Yami no Mi", "Gura Gura no Mi", "Dual Power Integration", "Strategic Betrayal"],
        affiliation: "Blackbeard Pirates / Four Emperors",
        status: "Active",
        origin: "Grand Line"
      },
      {
        name: "Donquixote Doflamingo",
        role: "Warlord / Heavenly Yaksha",
        description: "A former Celestial Dragon who ruled Dressrosa as a puppet master from the shadows.",
        image: "https://static.wikia.nocookie.net/onepiece/images/0/09/Donquixote_Doflamingo_Anime_Infobox.png",
        bio: "Donquixote Doflamingo was a Warlord of the Sea and the king of Dressrosa. A man of absolute cruelty and charisma, he utilized the Ito Ito no Mi to manipulate people and objects like puppets. His goal was to tear down the world built by the Celestial Dragons, orchestrating the global underworld from the shadows. His eventual defeat at the hands of Luffy and Law disrupted the balance of power across the entire Grand Line.",
        abilities: ["Ito Ito no Mi (Awakened)", "God Thread", "Torikago (Birdcage)", "Master Manipulator"],
        affiliation: "Donquixote Pirates / Former Warlords",
        status: "Incarcerated (Impel Down)",
        origin: "Mary Geoise"
      },
      {
        name: "Dracule Mihawk",
        role: "World's Greatest Swordsman",
        description: "The stoic master of the black blade Yoru and Zoro's ultimate rival.",
        image: "https://static.wikia.nocookie.net/onepiece/images/a/ab/Dracule_Mihawk_Anime_Post_Timeskip_Infobox.png",
        bio: "Dracule Mihawk is the 'World's Greatest Swordsman' and a former Warlord of the Sea. Wielding one of the 12 Supreme Grade swords, the black blade Yoru, he is a man of unmatched skill and focus. Mihawk lives a solitary life, seeking an opponent worthy of challenging his absolute status. He served as Zoro's mentor during the time-skip, testing the young swordsman's resolve and preparing him for the trials of the New World.",
        abilities: ["Yoru (Black Blade)", "Supreme Grade Swordsmanship", "Advanced Observation Haki", "Tactical Pre-emption"],
        affiliation: "Cross Guild / Former Warlords",
        status: "Active",
        origin: "Grand Line"
      },
      {
        name: "Portgas D. Ace",
        role: "Commander / Fire Fist",
        description: "Luffy's sworn brother and the son of Gol D. Roger who wielded the power of fire.",
        image: "https://static.wikia.nocookie.net/onepiece/images/d/d3/Portgas_D._Ace_Anime_Infobox.png",
        bio: "Portgas D. Ace was the commander of the Whitebeard Pirates' Second Division and Luffy's older brother. Possessing the Mera Mera no Mi, he was a powerful logia-user known as 'Fire Fist Ace'. His quest to hunt down Blackbeard eventually led to the legendary Battle of Marineford. Ace’s sacrifice to protect Luffy remains one of the most tragic and defining moments in the series, leaving a legacy of fire that Luffy continues to carry.",
        abilities: ["Mera Mera no Mi", "Fire Fist (Hiken)", "Enkai: Hibashira", "Conqueror's Haki"],
        affiliation: "Whitebeard Pirates / Roger bloodline",
        status: "KIA",
        origin: "Baterilla, South Blue"
      },
      {
        name: "Sabo",
        role: "Revolutionary Army Chief of Staff",
        description: "The Flame Emperor and the sworn brother of Luffy and Ace.",
        image: "https://static.wikia.nocookie.net/onepiece/images/9/91/Sabo_Anime_Infobox.png",
        bio: "Sabo is the second-in-command of the Revolutionary Army and the sworn brother of Luffy and Ace. After regaining his memories following Ace's death, he inherited the Mera Mera no Mi power. Known as the 'Flame Emperor', Sabo is a master of hand-to-hand combat and Ryusoken. He dedicated his life to overthrowing the corrupt World Government, acting as a crucial ally to Luffy and a symbol of hope for oppressed nations everywhere.",
        abilities: ["Mera Mera no Mi", "Ryusoken Mastery", "Dragon Claw", "Haki-Infused Combat"],
        affiliation: "Revolutionary Army",
        status: "Active",
        origin: "Goa Kingdom, East Blue"
      },
      {
        name: "Trafalgar D. Water Law",
        role: "Captain / Surgeon of Death",
        description: "The strategist of the Heart Pirates who possesses the ultimate medical Devil Fruit.",
        image: "https://static.wikia.nocookie.net/onepiece/images/4/4c/Trafalgar_D._Water_Law_Anime_Post_Timeskip_Infobox.png",
        bio: "Trafalgar Law is the captain of the Heart Pirates and a master surgeon. He possesses the Ope Ope no Mi, which allows him to create 'Rooms' where he has absolute control over everything within, including the ability to perform 'Eternal Youth Surgery'. Law formed a pivotal alliance with Luffy to take down Doflamingo and Kaido, becoming a key player in the Worst Generation and a seeker of the truth behind the 'D' initial.",
        abilities: ["Ope Ope no Mi (Awakened)", "K-Room", "Shock Wille", "Strategic Medical Surgery"],
        affiliation: "Heart Pirates / Worst Generation",
        status: "Active",
        origin: "Flevance, North Blue"
      },
      {
        name: "Eustass Kid",
        role: "Captain / Magnetism Master",
        description: "A volatile rival to Luffy who can manipulate magnetic forces.",
        image: "https://static.wikia.nocookie.net/onepiece/images/f/f6/Eustass_Kid_Anime_Post_Timeskip_Infobox.png",
        bio: "Eustass 'Captain' Kid is the leader of the Kid Pirates and a prominent member of the Worst Generation. He possesses the Jiki Jiki no Mi, allowing him to manipulate magnetism to attract and repel metal objects, often constructing massive robotic arms for combat. Known for his aggressive temper and refusal to back down from any challenge, Kid played a vital role in the defeat of Big Mom, cementing his status as one of the new era's most dangerous pirates.",
        abilities: ["Jiki Jiki no Mi (Awakened)", "Damned Punk", "Assign", "Punk Rotten"],
        affiliation: "Kid Pirates / Worst Generation",
        status: "Unknown",
        origin: "South Blue"
      },
      {
        name: "Boa Hancock",
        role: "Pirate Empress / Snake Princess",
        description: "The captain of the Kuja Pirates and the most beautiful woman in the world.",
        image: "https://static.wikia.nocookie.net/onepiece/images/4/4e/Boa_Hancock_Anime_Post_Timeskip_Infobox.png",
        bio: "Boa Hancock is the Empress of Amazon Lily and the only woman who ever held a Warlord of the Sea position. She possesses the Mero Mero no Mi, which can turn anyone who harbors even a hint of lust for her into stone. Despite her initially cold and arrogant exterior, she developed a deep and often comical love for Luffy, repeatedly risking her life and status to assist him on his journey.",
        abilities: ["Mero Mero no Mi", "Slave Arrow", "Perfume Femur", "Conqueror's Haki"],
        affiliation: "Kuja Pirates / Former Warlords",
        status: "Active",
        origin: "Amazon Lily, Grand Line"
      },
      {
        name: "Monkey D. Garp",
        role: "Vice Admiral / Hero of the Marines",
        description: "Luffy's grandfather and a legendary marine who once cornered Gol D. Roger.",
        image: "https://static.wikia.nocookie.net/onepiece/images/f/f1/Monkey_D._Garp_Anime_Post_Timeskip_Infobox.png",
        bio: "Monkey D. Garp is a Vice Admiral of the Marine Headquarters and the 'Hero of the Marines'. He is known for his immense physical strength and his mastery of Haki, often delivering 'Fists of Love' to his grandson. Garp is a man of complex loyalties, torn between his duty as a Marine and his love for his family of outlaws. His legendary battles against Roger and Rocks D. Xebec have cemented him as one of the strongest men to ever live.",
        abilities: ["Galaxy Impact", "Fist of Love", "Master Armament Haki", "Extreme Physical Strength"],
        affiliation: "Marine Headquarters (Vice Admiral)",
        status: "Unknown",
        origin: "Goa Kingdom, East Blue"
      },
      {
        name: "Monkey D. Dragon",
        role: "Supreme Commander / World's Worst Criminal",
        description: "The leader of the Revolutionary Army and Luffy's enigmatic father.",
        image: "https://static.wikia.nocookie.net/onepiece/images/b/b3/Monkey_D._Dragon_Anime_Infobox.png",
        bio: "Monkey D. Dragon is the Supreme Commander of the Revolutionary Army and the most wanted man in the world. As the leader of a global movement to overthrow the Celestial Dragons, he operates from the shadows, directing a massive network of cells and allies. While his true power remains a mystery, his influence is felt across the Grand Line, as he seeks to liberate humanity from the corruption of the World Government and the Celestial Dragons.",
        abilities: ["Strategic Command", "Unknown Natural Force Manipulation", "Extreme Haki Mastery", "Revolutionary Tactics"],
        affiliation: "Revolutionary Army (Leader)",
        status: "Active",
        origin: "Goa Kingdom, East Blue"
      },
      {
        name: "Buggy the Clown",
        role: "Emperor / Genius Jester",
        description: "The former Roger Pirate whose sheer luck and charisma led him to the peak of piracy.",
        image: "https://static.wikia.nocookie.net/onepiece/images/a/a2/Buggy_Anime_Post_Timeskip_Infobox.png",
        bio: "Buggy the Clown is arguably the luckiest man in the history of the sea. A former apprentice on the Oro Jackson and the leader of the Buggy Pirates, he possesses the Bara Bara no Mi, which allows him to split his body into multiple levitating parts. Through a series of misunderstandings, coincidences, and his role in the Marineford war, he rose to become a Warlord and eventually one of the Four Emperors, leading the powerful Cross Guild alongside Mihawk and Crocodile.",
        abilities: ["Bara Bara no Mi", "Buggy Ball", "Extreme Survival Instinct", "Inadvertent Charisma"],
        affiliation: "Cross Guild / Buggy Pirates / Emperors",
        status: "Active",
        origin: "Grand Line"
      },
      {
        name: "Yamato",
        role: "Guardian Deity / Daughter of Kaido",
        description: "The self-proclaimed Kozuki Oden who defied her father to protect Wano.",
        image: "https://static.wikia.nocookie.net/onepiece/images/0/01/Yamato_Anime_Infobox.png",
        bio: "Yamato is the daughter of the Emperor Kaido, but she has spent most of her life rebelling against him. After witnessing the execution of Kozuki Oden and finding his journal, she chose to inherit his name and his dream of opening Wano's borders. Yamato possesses the Inu Inu no Mi, Model: Okuchi no Makami, allowing her to transform into a powerful wolf-god. Her absolute resolve and physical strength make her one of the most powerful allies Luffy has ever encountered.",
        abilities: ["Inu Inu no Mi, Model: Okuchi no Makami", "Raimei Hakke", "Advanced Conqueror's Haki", "Okuchi no Makami Breath"],
        affiliation: "Kozuki Family (Ally)",
        status: "Active",
        origin: "Vodka Kingdom"
      },
      {
        name: "Kozuki Oden",
        role: "Shogun Tier / Legendary Samurai",
        description: "The former Daimyo of Kuri who traveled with both Whitebeard and Gol D. Roger.",
        image: "https://static.wikia.nocookie.net/onepiece/images/2/29/Kozuki_Oden_Anime_Infobox.png",
        bio: "Kozuki Oden was the charismatic and incredibly powerful Daimyo of Kuri in Wano Country. Known for his wild spirit and immense strength, he left Wano to travel the seas, serving as a commander for Whitebeard and eventually helping Gol D. Roger reach Laugh Tale. Oden wielded the legendary swords Enma and Ame no Habakiri, becoming the only man to ever scar Kaido. His public execution and his final words sparked the resistance that would eventually reclaim Wano twenty years later.",
        abilities: ["Togen Totsuka", "Advanced Conqueror's Haki", "Two-Sword Style Mastery", "Voice of All Things"],
        affiliation: "Kozuki Family / Roger Pirates / Whitebeard Pirates",
        status: "KIA",
        origin: "Flower Capital, Wano"
      },
      {
        name: "Kin'emon",
        role: "Leader of the Akazaya Nine / Fox-Fire",
        description: "The primary retainer of the Kozuki family who led the 20-year resistance.",
        image: "https://static.wikia.nocookie.net/onepiece/images/5/52/Kin%27emon_Anime_Post_Timeskip_Infobox.png",
        bio: "Kin'emon is the leader of the Akazaya Nine and a loyal retainer to the Kozuki family. A master of the Fox-Fire Style, he can cut through flames and create clothes using the Fuku Fuku no Mi. Kin'emon traveled twenty years into the future with Momonosuke to find allies and reclaim Wano. His tactical mind and unwavering loyalty to Oden's legacy were the backbone of the Ninja-Pirate-Mink-Samurai Alliance.",
        abilities: ["Fox-Fire Style", "Fuku Fuku no Mi", "Advanced Armament Haki", "Tactical Leadership"],
        affiliation: "Akazaya Nine / Kozuki Family",
        status: "Active",
        origin: "Kuri, Wano"
      },
      {
        name: "Momonosuke",
        role: "Shogun of Wano / Son of Oden",
        description: "The legitimate heir to the Kozuki shogunate who learned to lead through adversity.",
        image: "https://static.wikia.nocookie.net/onepiece/images/3/30/Kozuki_Momonosuke_Anime_Post_Timeskip_Infobox.png",
        bio: "Kozuki Momonosuke is the son of Kozuki Oden and the rightful Shogun of Wano Country. For much of his journey, he was a frightened child who had traveled through time, but under the guidance of Luffy and his retainers, he found the courage to lead. After consuming a prehistoric artificial Devil Fruit, he gained the power to transform into a massive pink dragon. Momonosuke eventually chose to age himself into an adult to protect Wano, embodying the strength and spirit of his father.",
        abilities: ["Artificial Uo Uo no Mi", "Flame Clouds (Homuragumo)", "Bolo Breath", "Voice of All Things"],
        affiliation: "Kozuki Family (Shogun)",
        status: "Active",
        origin: "Flower Capital, Wano"
      },
      {
        name: "Carrot",
        role: "Leader of the Minks / Sulong Form",
        description: "A rabbit mink from Zou who possesses incredible agility and electrical powers.",
        image: "https://static.wikia.nocookie.net/onepiece/images/e/e6/Carrot_Anime_Infobox.png",
        bio: "Carrot is a member of the Inuarashi Musketeer Squad and a close friend of the Straw Hat Pirates. As a mink, she can utilize 'Electro' to generate biological electricity and can transform into her 'Sulong' form under the full moon, granting her near-supernatural speed and power. Her journey from a curious stowaway to a determined warrior and eventually the leader of the Mokomo Dukedom represents the enduring spirit of her people and their bond with the Kozuki family.",
        abilities: ["Electro Mastery", "Sulong Transformation", "Lunar Agility", "Claw-Based Combat"],
        affiliation: "Mokomo Dukedom (Leader) / Ninja-Pirate Alliance",
        status: "Active",
        origin: "Zou, Grand Line"
      },
      {
        name: "Rob Lucci",
        role: "CP0 Elite / Murder Machine",
        description: "The strongest member of CP9 and later a high-ranking agent of CP0.",
        image: "https://static.wikia.nocookie.net/onepiece/images/7/7b/Rob_Lucci_Anime_Post_Timeskip_Infobox.png",
        bio: "Rob Lucci is a cold-blooded assassin for the World Government and a master of Rokushiki. Consuming the Neko Neko no Mi, Model: Leopard, he can transform into a lethal physical powerhouse. Lucci views himself as a weapon for 'Dark Justice', believing that anyone who stands in the way of the World Government must be eliminated. His battles with Luffy are legendary, pushing both men to their absolute physical limits in a clash of ideology and pure combat prowess.",
        abilities: ["Neko Neko no Mi, Model: Leopard (Awakened)", "Rokushiki Mastery", "Rokuogan", "Advanced Armament Haki"],
        affiliation: "CP0 / World Government",
        status: "Active",
        origin: "Grand Line"
      },
      {
        name: "Sir Crocodile",
        role: "Former Warlord / Desert King",
        description: "The mastermind behind Baroque Works who rules the desert with the power of sand.",
        image: "https://static.wikia.nocookie.net/onepiece/images/6/63/Crocodile_Anime_Post_Timeskip_Infobox.png",
        bio: "Sir Crocodile is the former president of the criminal organization Baroque Works and a former Warlord of the Sea. He possesses the Suna Suna no Mi, allowing him to create and manipulate sand, and even dehydrate his enemies with a touch. While he once sought the ancient weapon Pluton, he later re-emerged as a vital, albeit cynical, player in the New World, eventually founding the Cross Guild alongside Buggy and Mihawk.",
        abilities: ["Suna Suna no Mi", "Desert Girasole", "Dehydration Touch", "Tactical Malice"],
        affiliation: "Cross Guild / Former Baroque Works",
        status: "Active",
        origin: "Grand Line"
      },
      {
        name: "Enel",
        role: "God of Skypiea / Lightning Master",
        description: "The former ruler of Skypiea who possesses the ultimate elemental power.",
        image: "https://static.wikia.nocookie.net/onepiece/images/d/da/Enel_Anime_Infobox.png",
        bio: "Enel was the tyrannical 'God' of Skypiea who possessed the Goro Goro no Mi, granting him absolute control over lightning. He considered himself a divine being, using his 'Mantra' (Observation Haki) to monitor and punish the residents of the sky island. Enel's ultimate goal was to reach 'Fairy Vearth' (the Moon), a journey he eventually completed after his defeat at the hands of Luffy, who was his only natural enemy as a rubber man.",
        abilities: ["Goro Goro no Mi", "El Thor", "Advanced Observation Haki (Mantra)", "200,000,000 Volt Amaru"],
        affiliation: "God's Army (Skypiea)",
        status: "Active (Off-World)",
        origin: "Birka, Sky Island"
      },
      {
        name: "Gecko Moria",
        role: "Former Warlord / Shadow Stealer",
        description: "The master of Thriller Bark who creates zombie armies by stealing shadows.",
        image: "https://static.wikia.nocookie.net/onepiece/images/0/05/Gecko_Moria_Anime_Infobox.png",
        bio: "Gecko Moria is the former captain of the Thriller Bark and a former Warlord of the Sea. Using the Kage Kage no Mi, he can extract the shadows of living beings and plant them into corpses to create loyal zombie soldiers. After losing his original crew to Kaido, Moria became obsessed with creating an army of subordinates who could never be killed, leading to his eventual downfall when his arrogance and reliance on others were tested by the Straw Hat Pirates.",
        abilities: ["Kage Kage no Mi", "Shadow Asgard", "Brick Bat", "Shadow Manipulation"],
        affiliation: "Thriller Bark Pirates / Former Warlords",
        status: "Unknown",
        origin: "West Blue"
      },
      {
        name: "Smoker",
        role: "Vice Admiral / The White Hunter",
        description: "A disciplined Marine whose sense of justice often puts him at odds with the status quo.",
        image: "https://static.wikia.nocookie.net/onepiece/images/9/93/Smoker_Anime_Post_Timeskip_Infobox.png",
        bio: "Smoker, known as 'The White Hunter', is a high-ranking Marine who has pursued Luffy since Loguetown. He possesses the Moku Moku no Mi, allowing him to transform his body into smoke. While a dedicated Marine, Smoker is defined by his own personal code of honor and justice, often cooperating with pirates when the situation demands it. His pragmatism and his relationship with his subordinate Tashigi represent a more complex, human side of the World Government's military might.",
        abilities: ["Moku Moku no Mi", "White Out", "Jitte Mastery (Seastone-tipped)", "Advanced Armament Haki"],
        affiliation: "G-5 Marine Base (Vice Admiral)",
        status: "Active",
        origin: "Grand Line"
      },
      {
        name: "Tashigi",
        role: "Captain / Sword Enthusiast",
        description: "A dedicated Marine whose goal is to reclaim all legendary swords from pirates.",
        image: "https://static.wikia.nocookie.net/onepiece/images/f/f0/Tashigi_Anime_Post_Timeskip_Infobox.png",
        bio: "Tashigi is a Captain in the Marines and Smoker's most trusted subordinate. She is a master of swordsmanship and has a deep encyclopedic knowledge of Meito (famous blades). Tashigi is driven by the desire to reclaim all legendary swords from those she deems unworthy—namely pirates. Her character arc focuses on her growth in confidence and her realization that the lines between 'good' and 'evil' in the world of piracy and justice are often blurred.",
        abilities: ["Expert Swordsmanship", "Meito Identification", "Armament Haki", "Soru (Speed Technique)"],
        affiliation: "G-5 Marine Base (Captain)",
        status: "Active",
        origin: "Grand Line"
      },
      {
        name: "X Drake",
        role: "Worst Generation / undercover Marine",
        description: "A former Marine turned pirate who can transform into a prehistoric Allosaurus.",
        image: "https://static.wikia.nocookie.net/onepiece/images/a/a2/X_Drake_Anime_Post_Timeskip_Infobox.png",
        bio: "X Drake is the captain of the Drake Pirates and a member of the Worst Generation. He possesses the Ryu Ryu no Mi, Model: Allosaurus, granting him immense prehistoric strength. While ostensibly a pirate and a former high-ranking member of the Beast Pirates, Drake is secretly a member of the Marines' covert 'SWORD' unit. His role as a double agent in Wano was crucial in leaking information and eventually assisting the alliance in their battle against Kaido.",
        abilities: ["Ryu Ryu no Mi, Model: Allosaurus", "Dual Weapon Mastery (Mace & Saber)", "Advanced Armament Haki", "Prehistoric Strength"],
        affiliation: "SWORD (Marine Covert Unit) / Worst Generation",
        status: "Active",
        origin: "North Blue"
      },
      {
        name: "Jewelry Bonney",
        role: "Worst Generation / Age Manipulator",
        description: "A gluttonous pirate with a mysterious past tied to the World Government.",
        image: "https://static.wikia.nocookie.net/onepiece/images/f/f7/Jewelry_Bonney_Anime_Post_Timeskip_Infobox.png",
        bio: "Jewelry Bonney, known as the 'Big Eater', is the captain of the Bonney Pirates and a member of the Worst Generation. She possesses an unnamed Devil Fruit that allow her to manipulate the physical age of herself and others. Bonney’s past is deeply entwined with the Revolutionary Army and the World Government's topmost secrets, specifically regarding her relationship with Bartholomew Kuma. Her presence in the New World signal a major shift in the global search for the truth behind the Celestial Dragons.",
        abilities: ["Age-Age Fruit Power", "Distorted Future", "Near-Infinite Appetite", "Tactical Escape"],
        affiliation: "Bonney Pirates / Worst Generation",
        status: "Active",
        origin: "Sorbet Kingdom, South Blue"
      },
      {
        name: "Basil Hawkins",
        role: "Worst Generation / Fortune Teller",
        description: "A cold and calculated pirate who uses tarot cards and voodoo to determine his actions.",
        image: "https://static.wikia.nocookie.net/onepiece/images/a/a2/Basil_Hawkins_Anime_Post_Timeskip_Infobox.png",
        bio: "Basil Hawkins, the 'Magician', is the captain of the Hawkins Pirates and a member of the Worst Generation. He possesses the Wara Wara no Mi, which allows him to create straw-based dolls and redirect damage taken by his own body to others. Hawkins is defined by his absolute reliance on destiny and his tarot cards, which he uses to calculate the 'survival rate' of every encounter. His pragmatic but fatalistic approach led him to align with Kaido, choosing the highest probability of survival over any personal honor.",
        abilities: ["Wara Wara no Mi", "Fortune Telling (Tarot)", "Goma no Sora", "Damage Redirection"],
        affiliation: "Hawkins Pirates / Former Beast Pirates Ally",
        status: "KIA / Unknown",
        origin: "North Blue"
      },
      {
        name: "Urouge",
        role: "Worst Generation / Mad Monk",
        description: "A colossal pirate from a sky island who thrives on the pain he receives in battle.",
        image: "https://static.wikia.nocookie.net/onepiece/images/e/ef/Urouge_Anime_Infobox.png",
        bio: "Urouge, known as the 'Mad Monk', is the captain of the Fallen Monk Pirates and a member of the Worst Generation. He is a massive individual from a sky island who possesses an unnamed Devil Fruit that converts physical damage taken into raw physical strength and muscle mass. Despite his intimidating power, Urouge is often seen with a calm, stoic smile, viewing the chaos of the New World with a sense of religious-like detachment. He is notable for being one of the first members of his generation to defeat an executive of an Emperor.",
        abilities: ["Damage-to-Strength Conversion", "Kama Mastery", "Superhuman Physical Bulk", "Sky Island Resilience"],
        affiliation: "Fallen Monk Pirates / Worst Generation",
        status: "Active",
        origin: "Sky Island"
      },
      {
        name: "Killer",
        role: "Worst Generation / Mass Massacre Soldier",
        description: "The loyal right-hand man of Eustass Kid who fights with dual scythe-like blades.",
        image: "https://static.wikia.nocookie.net/onepiece/images/1/1d/Killer_Anime_Post_Timeskip_Infobox.png",
        bio: "Killer is the combatant of the Kid Pirates and a member of the Worst Generation. Unlike most members of his generation, he is not a captain, but his skill and loyalty to Kid are undeniable. In combat, he uses 'Punishers', a pair of spinning, scythe-like blades mounted on his arms. After being forced to consume a defective SMILE fruit in Wano, Killer lost his ability to show any emotion other than laughter, but his resolve to protect his captain and return their crew to glory never wavered.",
        abilities: ["Punisher Mastery (Spinning Blades)", "Sonic Warp", "Advanced Agility", "Armament Haki"],
        affiliation: "Kid Pirates / Worst Generation",
        status: "Unknown",
        origin: "South Blue"
      },
      {
        name: "Capone Bege",
        role: "Worst Generation / Human Fortress",
        description: "A former mafia boss who turned his own body into a literal armed fortress.",
        image: "https://static.wikia.nocookie.net/onepiece/images/1/1a/Capone_Bege_Anime_Post_Timeskip_Infobox.png",
        bio: "Capone 'Gang' Bege is the captain of the Fire Tank Pirates and a member of the Worst Generation. He possesses the Shiro Shiro no Mi, which transforms his body into a living fortress where his entire crew, horses, and cannons can reside in miniature. Bege is a tactical genius and a master of political maneuvering, having successfully infiltrated Big Mom's crew with the intention of an assassination. His devotion to his family and his pragmatic sense of honor make him a unique and formidable player in the New World.",
        abilities: ["Shiro Shiro no Mi", "Big Father", "In-Body Arsenal", "Tactical Ambush"],
        affiliation: "Fire Tank Pirates / Worst Generation",
        status: "Active",
        origin: "West Blue"
      },
      {
        name: "Akainu (Sakazuki)",
        role: "Fleet Admiral / Absolute Justice",
        description: "The ruthless leader of the Marines whose power is literally that of molten magma.",
        image: "https://static.wikia.nocookie.net/onepiece/images/d/d4/Sakazuki_Anime_Post_Timeskip_Infobox.png",
        bio: "Sakazuki, better known by his alias Akainu, is the current Fleet Admiral of the Marines. He is an absolute hardliner who believes in 'Thorough Justice', which entails the total eradication of any and all opposition to the World Government. He possesses the Magu Magu no Mi, granting him the power of magma—giving him the highest offensive power among Devil Fruits. His actions at the Battle of Marineford, including the death of Ace, cemented him as one of the most hated and terrifying figures in the world.",
        abilities: ["Magu Magu no Mi", "Great Eruption", "Hellhound (Meigo)", "Highest Offensive Power"],
        affiliation: "Marine Headquarters (Fleet Admiral)",
        status: "Active",
        origin: "North Blue"
      },
      {
        name: "Aokiji (Kuzan)",
        role: "Former Admiral / Lazy Justice",
        description: "A master of frost who left the Marines to follow his own sense of justice.",
        image: "https://static.wikia.nocookie.net/onepiece/images/a/a2/Kuzan_Anime_Post_Timeskip_Infobox.png",
        bio: "Kuzan, known formerly as Admiral Aokiji, is a master of the Hie Hie no Mi, allowing him to freeze the very ocean itself. Driven by his belief in 'Lazy Justice', he was often seen as the more approachable and reasonable of the Admirals. After a ten-day duel with Akainu for the position of Fleet Admiral, he left the Marines, eventually surfacing in the New World as an affiliate of the Blackbeard Pirates. His departure signal a major ideological shift within the World Government's military hierarchy.",
        abilities: ["Hie Hie no Mi", "Ice Age", "Ice Saber", "Global Freezing"],
        affiliation: "Blackbeard Pirates (Affiliate) / Former Marines",
        status: "Active",
        origin: "South Blue"
      },
      {
        name: "Kizaru (Borsalino)",
        role: "Admiral / Unclear Justice",
        description: "The fastest man in the Navy who moves and attacks at the speed of light.",
        image: "https://static.wikia.nocookie.net/onepiece/images/4/4b/Borsalino_Anime_Post_Timeskip_Infobox.png",
        bio: "Borsalino, known as Admiral Kizaru, is a master of the Pika Pika no Mi, which allow him to produce and transform into light. Despite his laid-back and often absent-minded demeanor, he is a terrifyingly powerful combatant who can deliver light-speed kicks and laser beams. His philosophy of 'Unclear Justice' makes him an unpredictable enforcer, carrying out the orders of the World Government with a clinical efficiency that masks his own true thoughts and motivations.",
        abilities: ["Pika Pika no Mi", "Yasakani no Magatama", "Amano Murakumo", "Light-Speed Kicks"],
        affiliation: "Marine Headquarters (Admiral)",
        status: "Active",
        origin: "North Blue"
      },
      {
        name: "Fujitora (Issho)",
        role: "Admiral / Blind Justice",
        description: "The powerful blind Admiral who can manipulate gravity and drop meteors.",
        image: "https://static.wikia.nocookie.net/onepiece/images/a/ab/Issho_Anime_Infobox.png",
        bio: "Issho, known as Admiral Fujitora, is a blind Marine who possesses the Zushi Zushi no Mi, allowing him absolute control over gravity. Unlike many of his peers, he is motivated by a deep moral compass and is an vocal critic of the Warlord system. Fujitora blinded himself because of the horrors he had seen in the world, choosing instead to see the truth through his actions. His presence in the Marines represents a quiet, dignified push for genuine reform from within one of the world's most rigid organizations.",
        abilities: ["Zushi Zushi no Mi", "Gravitational Manipulation", "Meteor Strike", "Advanced Observation Haki"],
        affiliation: "Marine Headquarters (Admiral)",
        status: "Active",
        origin: "Grand Line"
      }
    ],
  },
  {
    id: "5114",
    title: "Fullmetal Alchemist: Brotherhood",
    description: "The foundation of alchemy is based on the law of equivalent exchange. After losing their mother, brothers Edward and Alphonse Elric attempt to bring her back, but the cost is high. Now they search for the Philosopher's Stone.",
    categories: ["Action", "Adventure", "Drama", "Fantasy"],
    posterImage: "/assets/full-metal-alchemist/1.jpg",
    trailerUrl: "https://www.youtube.com/embed/-GoNo0DGroU?autoplay=1&mute=1",
    openings: [
      {
        title: "Opening 1",
        url: "https://www.youtube.com/embed/elyXcwunIYA?autoplay=1&mute=1"
      }
    ],
    previews: [
      "/assets/full-metal-alchemist/2.jpg",
      "/assets/full-metal-alchemist/3.jpg",
      "/assets/full-metal-alchemist/4.jpg",
    ],
    characters: [
      {
        name: "Edward Elric",
        role: "Fullmetal Alchemist / Protagonist",
        description: "The youngest State Alchemist who seeks to restore his and his brother's bodies.",
        image: "https://static.wikia.nocookie.net/fma/images/e/e5/EdwardElricExport.png",
        bio: "Edward Elric, the Fullmetal Alchemist, is a prodigy who became a State Alchemist at age 12. After a failed attempt to bring his mother back to life cost him his arm and leg, and his brother Alphonse his entire body, Edward's life became a journey of atonement. Despite his short stature and quick temper, he possesses a brilliant scientific mind and a heart of gold, eventually choosing the paths of humanity over the shortcuts offered by alchemy.",
        abilities: ["Prodigious Alchemy (No Circle Required)", "Mechanical Engineering Proficiency", "Exceptional Martial Arts", "Advanced Deconstruction Combat"],
        affiliation: "Amestrian State Military (State Alchemist)",
        status: "Active (Retired Alchemist)",
        origin: "Resembool, Amestris"
      },
      {
        name: "Alphonse Elric",
        role: "The Soul in the Armor",
        description: "Edward's younger brother whose soul is bound to a giant suit of armor.",
        image: "https://static.wikia.nocookie.net/fma/images/2/2f/AlphonseElricExport.png",
        bio: "Alphonse Elric is the gentle soul of the Elric brothers. After losing his physical body in a transmutation ritual, Edward bound his soul to a suit of armor. Alphonse is a master of martial arts and eventually develops the ability to perform alchemy without a circle. Despite his intimidating metallic appearance, he is the kinder, more thoughtful of the two, often serving as the moral compass for Edward while they seek to reclaim what they lost.",
        abilities: ["Soul-Bonded Combat Prowess", "Alchemy (No Circle Required)", "Master Martial Artist", "Indestructible Metallic Frame"],
        affiliation: "Independent",
        status: "Active (Body Restored)",
        origin: "Resembool, Amestris"
      },
      {
        name: "Roy Mustang",
        role: "The Flame Alchemist / Colonel",
        description: "A hero of the Ishval Civil War who aims to become the leader of Amestris.",
        image: "https://static.wikia.nocookie.net/fma/images/5/5e/RoyMustangExport.png",
        bio: "Colonel Roy Mustang is a State Alchemist whose mastery of flame alchemy makes him one of the most powerful military officers in Amestris. Driven by a desire to reform the corruption in the military and repent for his actions in the Ishval Civil War, he aims to reach the position of Fuhrer. Beneath his arrogant facade lies a brilliant strategist and a fiercely loyal leader who will go to any lengths to protect his subordinates.",
        abilities: ["Flame Alchemy (Ignition Cloth Gloves)", "Precision Oxygen Manipulation", "Master Military Strategist", "Strategic Leadership"],
        affiliation: "Amestrian State Military (Fuhrer Candidate)",
        status: "Active",
        origin: "Central City, Amestris"
      },
      {
        name: "Riza Hawkeye",
        role: "The Hawk's Eye / First Lieutenant",
        description: "Roy Mustang's most trusted subordinate and a legendary marksman.",
        image: "https://static.wikia.nocookie.net/fma/images/b/b3/RizaHawkeyeExport.png",
        bio: "First Lieutenant Riza Hawkeye is the anchor of the Mustang unit. A legendary sniper known for her absolute precision and calm demeanor, she carries the burden of the secrets behind flame alchemy on her back. She acts as both a protector and a moral check for Roy Mustang, having made a pact to shoot him if he ever strays from the path of righteousness. Her discipline and dedication make her one of the most respected soldiers in the Amestrian military.",
        abilities: ["Master Marksman (The Hawk's Eye)", "Advanced Firearm Proficiency", "Exceptional Tactical Support", "Unwavering Discipline"],
        affiliation: "Amestrian State Military (Mustang Unit)",
        status: "Active",
        origin: "Amestris"
      },
      {
        name: "Maes Hughes",
        role: "Lieutenant Colonel / Intelligence",
        description: "The cheerful and devoted father who served as the heart of military intelligence.",
        image: "https://static.wikia.nocookie.net/fma/images/4/4b/MaesHughesExport.png",
        bio: "Maes Hughes was a Lieutenant Colonel in military intelligence and Roy Mustang's closest friend. Characterized by his boundless energy and obsessive devotion to his wife Gracia and daughter Elicia, Hughes was also a brilliant investigator. He was the first to uncover the horrifying truth about the nationwide transmutation circle, leading to his tragic assassination. His death became the primary catalyst for the unit's investigation into the heart of Central's conspiracy.",
        abilities: ["Expert Information Gathering", "Precision Push-Knife Combat", "Genius Investigative Deduction", "High-Level Intelligence Network"],
        affiliation: "Amestrian State Military (Intelligence)",
        status: "KIA",
        origin: "Central City, Amestris"
      },
      {
        name: "Alex Louis Armstrong",
        role: "The Strong Arm Alchemist",
        description: "A physically powerful alchemist who combines raw strength with artistic alchemy.",
        image: "https://static.wikia.nocookie.net/fma/images/d/df/AlexLouisArmstrongExport.png",
        bio: "Major Alex Louis Armstrong is the Strong Arm Alchemist, known for his massive physique and his family's 'artistic' alchemical techniques passed down through generations. Despite his intimidating size and emotional outbursts, Armstrong is a man of deep compassion who struggled with the atrocities of the Ishval Civil War. He uses spiked gauntlets to transmute earth and stone with a flurry of powerful strikes, specializing in defensive structures and projectiles.",
        abilities: ["Strong Arm Alchemy (Kinetic Transmutation)", "Superhuman Physical Strength", "Earth & Stone Manipulation", "Artistic Sculpting Mastery"],
        affiliation: "Amestrian State Military Major",
        status: "Active",
        origin: "Amestris (Armstrong Estate)"
      },
      {
        name: "Maria Ross",
        role: "Lieutenant / Local Command",
        description: "A dedicated and loyal officer who was framed for a high-profile assassination.",
        image: "https://static.wikia.nocookie.net/fma/images/1/1d/MariaRossExport.png",
        bio: "Lieutenant Maria Ross is a disciplined and professional soldier who initially served as a bodyguard for the Elric brothers in Central. Her career was upended when she was framed for the murder of Maes Hughes by the Homunculi. Forced into hiding after a staged execution by Roy Mustang, she eventually returned to provide vital support during the counter-offensive in Central, demonstrating her unwavering loyalty to the truth and her fellow soldiers.",
        abilities: ["Standard Firearm Proficiency", "Advanced Military Protocol", "Operational Logistics", "Tactical Combat Support"],
        affiliation: "Amestrian State Military (Mustang Support)",
        status: "Active",
        origin: "Amestris"
      },
      {
        name: "Scar",
        role: "Vigilante / Ishvalan Survivor",
        description: "An Ishvalan survivor who uses alchemy to deconstruct and destroy the State Alchemists.",
        image: "https://static.wikia.nocookie.net/fma/images/6/6f/ScarExport.png",
        bio: "Scar is a nameless survivor of the Ishvalan Civil War, driven by a deep-seated hatred for the State Alchemists. Utilizing a unique form of alchemy that only performs the 'deconstruction' stage, he acts as a vigilante. His journey is one of profound conflict, as he balances his desire for vengeance with the teachings of his faith. After discovering the true architects of his nation's suffering, Scar eventually chooses to use his right arm of deconstruction and left arm of reconstruction to protect the world, becoming a symbol of Ishvalan resilience.",
        abilities: ["Deconstruction Alchemy (Right Arm)", "Reconstruction Alchemy (Left Arm)", "Superhuman Physical Agility", "Master Hand-to-Hand Combat"],
        affiliation: "Ishvalan Survivors / Anti-State Military (Formerly)",
        status: "Active (Helping Rebuild Ishval)",
        origin: "Ishval"
      },
      {
        name: "King Bradley",
        role: "Fuhrer / Wrath",
        description: "The leader of Amestris and a terrifyingly skilled swordsman with the 'Ultimate Eye'.",
        image: "https://static.wikia.nocookie.net/fma/images/7/72/KingBradleyExport.png",
        bio: "King Bradley is the Fuhrer of Amestris and the leader of its military. Despite his elderly appearance, he is secretly the Homunculus Wrath. Possessing the 'Ultimate Eye' which grants him superhuman perception and precognitive combat abilities, Bradley is arguably the most dangerous physical threat in the world. His life is defined by absolute discipline and a cold, lethal efficiency, having been raised from birth to be the ultimate ruler for the Homunculi's grand design.",
        abilities: ["The Ultimate Eye (Precognitive Sight)", "Master Dual-Wield Swordsmanship", "Superhuman Speed & Reflexes", "Expert Military Tactics"],
        affiliation: "Amestrian State Military (Fuhrer) / Homunculi",
        status: "Deceased (Died of Fatigue/Wounds)",
        origin: "Central City, Amestris (Human-Based Homunculus)"
      },
      {
        name: "Father",
        role: "The Dwarf in the Flask / The First Homunculus",
        description: "The progenitor of the Homunculi who seeks to become a god-like being.",
        image: "https://static.wikia.nocookie.net/fma/images/2/25/Father_Anime.png",
        bio: "Father is the primary antagonist of the series, originally a shadow-like entity created in the ancient nation of Cselkcess. After orchestrating the nation's genocide to gain a human form and immortality, he created the Seven Homunculi to purge himself of human emotions. His goal is to reach beyond the Gate and 'grasp the sun', becoming a god by absorbing the entity known as Truth. He possesses absolute control over alchemy, capable of transmuting without movement and suppressing the alchemical abilities of others.",
        abilities: ["Absolute Alchemy (No Movement Required)", "Alchemical Suppression", "Energy Projection", "Soul Manipulation & Absorption"],
        affiliation: "Creator of the Homunculi",
        status: "Erased from Existence",
        origin: "Cselkcess (The Dwarf in the Flask)"
      },
      {
        name: "Pride",
        role: "First Homunculus / Selim Bradley",
        description: "The most powerful of the Homunculi, hidden behind the facade of the Fuhrer's son.",
        image: "https://static.wikia.nocookie.net/fma/images/3/30/Pride_Anime.png",
        bio: "Pride is the first and most powerful Homunculus created by Father. He assumes the identity of Selim Bradley, the innocent young son of Fuhrer King Bradley. Pride's true form is a multi-eyed shadow that inhabits the tunnels beneath Amestris. He can manipulate shadows as lethal blades, consume other beings to gain their abilities, and possesses a level of arrogance that rivals his creator. His reliance on light and shadows makes him vulnerable in absolute darkness or blinding brightness, but his tactical genius makes him nearly unstoppable.",
        abilities: ["Shadow Manipulation & Consumption", "Enhanced Sensory Perception", "Ability Absorption", "Biological Immortality (Homunculus)"],
        affiliation: "Homunculi (First Born)",
        status: "Active (Reverted to Infant Form)",
        origin: "Father's Pride"
      },
      {
        name: "Envy",
        role: "The Shapeshifting Homunculus",
        description: "A sadistic homunculus who can transform into any human or creature.",
        image: "https://static.wikia.nocookie.net/fma/images/4/41/EnvyExport.png",
        bio: "Envy is the Homunculus of Jealousy, possessing a cruel and mocking personality. They possess the ability to shapeshift into any human form with perfect accuracy, including their voice and mannerisms. Envy's true form is a massive, multi-limbed beast composed of the souls of the Cselkcess citizens. They take great pleasure in inciting human conflict, having been the one to trigger the Ishval Civil War. Beneath their arrogance lies a deep-seated resentment of humanity's resilience and capacity for connection.",
        abilities: ["Perfect Shapeshifting", "True Form Transformation (Titan)", "Soul-Powered Regeneration", "Infiltration & Sabotage"],
        affiliation: "Homunculi",
        status: "Deceased (Committed Suicide)",
        origin: "Father's Envy"
      },
      {
        name: "Lust",
        role: "The Ultimate Spear",
        description: "A lethal and manipulative homunculus who can extend her fingers into blades.",
        image: "https://static.wikia.nocookie.net/fma/images/1/1a/LustExport.png",
        bio: "Lust is the Homunculus of Desire and the second of Father's creations. Despite her name, she is a cold and efficient killer who often coordinates the Homunculi's various plots across Amestris. Her primary weapon is her 'Ultimate Spear'—fingers that can extend into blades capable of cutting through any known material. Lust possesses a cynical view of human nature, considering them beneath the Homunculi, though she was eventually incinerated by Roy Mustang in one of the most intense battles of the series.",
        abilities: ["The Ultimate Spear (Blade Extension)", "Advanced Regeneration", "Strategic Manipulation", "Enhanced Agility"],
        affiliation: "Homunculi",
        status: "Deceased (Incinerated by Mustang)",
        origin: "Father's Lust"
      },
      {
        name: "Gluttony",
        role: "The Voracious Homunculus",
        description: "A simple-minded being with an insatiable hunger and a portal to a void.",
        image: "https://static.wikia.nocookie.net/fma/images/d/df/GluttonyExport.png",
        bio: "Gluttony is the Homunculus of Hunger, appearing as a simple, childlike being who wants to eat everything he sees. He is a failed attempt by Father to create a Gate of Truth, possessing a literal vacuum in his stomach that leads to an infinite dimension of darkness and sludge. When Gluttony's 'stomach' opens, he can consume vast areas or even entire people, trapping them in a void between worlds. He is often seen in the company of Lust, whom he views with a strange, loyal affection.",
        abilities: ["Infinite Consumption", "False Gate of Truth (Void Portal)", "Superhuman Sense of Smell", "Animalistic Combat Reflexes"],
        affiliation: "Homunculi",
        status: "Deceased (Consumed by Pride)",
        origin: "Father's Gluttony"
      },
      {
        name: "Sloth",
        role: "The Indolent Homunculus",
        description: "A mountain of muscle tasked with digging the massive transmutation circle.",
        image: "https://static.wikia.nocookie.net/fma/images/c/c5/SlothExport.png",
        bio: "Sloth is the Homunculus of Indolence, a massive, slow-moving behemoth whose only desire is to finish his work and rest. He was tasked with digging the massive underground tunnels required for the nationwide transmutation circle across Amestris. Despite his constant complaints about 'bother', Sloth possesses terrifying physical strength and is capable of moving at speeds the human eye cannot track when he puts in the effort. His simple-minded dedication to his task made him a formidable obstacle in the North.",
        abilities: ["Unmatched Physical Strength", "Infinite Speed (Super-Sonic Dash)", "Durable Armored HIDE", "Fast-Tunneling capability"],
        affiliation: "Homunculi",
        status: "Deceased (Died of Soul Exhaustion)",
        origin: "Father's Sloth"
      },
      {
        name: "Greed",
        role: "The Ultimate Shield (Original)",
        description: "The rogue homunculus who wanted everything, including human connection.",
        image: "https://static.wikia.nocookie.net/fma/images/a/a2/GreedExport.png",
        bio: "Greed is the Homunculus of Avarice and the only one to initially rebel against Father. He possesses the 'Ultimate Shield'—the ability to rearrange the carbon in his body into a diamond-hard armor. Greed left the other Homunculi, seeking to build his own empire and find 'everything' he desired. While he claimed to be selfish, he valued his subordinates and friends as his 'possessions', refusing to let them be harmed. His original form was eventually captured and recycled by Father, leading to his later rebirth in Ling Yao's body.",
        abilities: ["The Ultimate Shield (Carbon Hardening)", "Rapid Regeneration", "Street Combat Mastery", "Enhanced Physical Fortitude"],
        affiliation: "Devil's Nest (Formerly) / Homunculi",
        status: "Processed (Souls Recycled)",
        origin: "Father's Greed"
      },
      {
        name: "Winry Rockbell",
        role: "Engineer / Automail Mechanic",
        description: "The brilliant mechanic who keeps the Elric brothers' physical frames operational.",
        image: "https://static.wikia.nocookie.net/fma/images/c/c2/WinryRockbellExport.png",
        bio: "Winry Rockbell is a talented automail engineer and the childhood friend of Edward and Alphonse Elric. Following in the footsteps of her parents and grandmother, she became a master of prosthetic mechanics, specifically caring for Edward's complex limb replacements. Winry serves as the emotional anchor for the brothers, providing them with a home to return to and a constant reminder of the humanity they are trying to reclaim. Her spirit and technical genius are just as vital to their success as any alchemy.",
        abilities: ["Master Automail Engineering", "Surgical Support Proficiency", "Mechanical Diagnostics", "High-Precision Metal Crafting"],
        affiliation: "Rockbell Automail / Independent",
        status: "Active",
        origin: "Resembool, Amestris"
      },
      {
        name: "Ling Yao",
        role: "Prince / Host of Greed",
        description: "The twelfth prince of Xing who seeks the secret of immortality.",
        image: "https://static.wikia.nocookie.net/fma/images/8/8e/LingYaoExport.png",
        bio: "Ling Yao is a prince from the faraway Xing Empire who came to Amestris to find the secret of immortality. Highly skilled in martial arts and possessing a keen sense for sensing 'chi', Ling is a master of political maneuvering. His ambition led him to willingly become the host for the Homunculus Greed. This unique duality created a complex alliance where Ling's regal ambition and Greed's absolute avarice coalesced into a formidably powerful and unpredictable ally, eventually leading him to the throne of Xing.",
        abilities: ["Master Martial Arts (Xingese Style)", "Pressure Point Combat", "Host of Greed (Ultimate Shield)", "Chi Sensing & Tactical Agility"],
        affiliation: "Xing Empire (Prince) / Yao Clan",
        status: "Active (Emperor of Xing)",
        origin: "Xing"
      },
      {
        name: "Lan Fan",
        role: "Bodyguard / Automail Warrior",
        description: "Ling Yao's fiercely loyal bodyguard who sacrificed her arm for his safety.",
        image: "https://static.wikia.nocookie.net/fma/images/d/df/LanFanExport.png",
        bio: "Lan Fan is a member of the guardian clan serving the Yao family of Xing. She is a highly skilled ninja and martial artist, possessing an unwavering loyalty to Prince Ling. After losing her left arm in a battle against Wrath, she underwent a grueling recovery to obtain a combat-ready automail replacement. Lan Fan operates with lethal speed and efficiency, using smoke bombs and concealed weaponry to protect her prince from the shadows.",
        abilities: ["Advanced Stealth & Infiltration", "Chi Sensing Mastery", "Combat Automail Proficiency", "Xingese Hidden Weaponry"],
        affiliation: "Xing Empire / Yao Clan (Bodyguard)",
        status: "Active",
        origin: "Xing"
      },
      {
        name: "Fu",
        role: "Bodyguard / Veteran Warrior",
        description: "Lan Fan's grandfather and a seasoned warrior of the Yao family.",
        image: "https://static.wikia.nocookie.net/fma/images/2/27/FuExport.png",
        bio: "Fu was the senior bodyguard of Prince Ling and the grandfather of Lan Fan. A veteran of countless battles, he possessed a level of combat wisdom and Chi sensing that surpassed even the most elite soldiers. Fu was a master of explosives and varied weaponry, leading the search for immortality with clinical professionalism. He eventually sacrificed his life in a desperate attempt to bring down Fuhrer King Bradley, demonstrating the absolute selflessness of the Yao clan's service.",
        abilities: ["Master Chi Sensing", "Advanced Explosives & Trap-Setting", "Veteran Martial Arts Mastery", "Tactical Survival Expertise"],
        affiliation: "Xing Empire / Yao Clan (Bodyguard)",
        status: "KIA",
        origin: "Xing"
      },
      {
        name: "May Chang",
        role: "Princess / Alkahestry Master",
        description: "A young princess of Xing who uses Alkahestry for medical and combat purposes.",
        image: "https://static.wikia.nocookie.net/fma/images/b/bc/MayChangExport.png",
        bio: "May Chang is the seventeenth princess of Xing, representing the impoverished Chang clan. She travels with her small panda companion, Xiao-Mei, searching for the secret of immortality to elevate her family's status. May is a master of Alkahestry, a form of alchemy focused on the flow of 'chi' and medical healing. Her abilities allow her to transmute from a distance using throwing daggers as conduits, making her a versatile support and long-range combatant.",
        abilities: ["Alkahestry (Chi-Based Transmutation)", "Long-Distance Transmutation", "Expert Medical Healing", "High-Speed Gymnastic Combat"],
        affiliation: "Xing Empire (Princess) / Chang Clan",
        status: "Active",
        origin: "Xing"
      },
      {
        name: "Olivier Mira Armstrong",
        role: "Major General / Northern Command",
        description: "The 'Northern Wall of Briggs' known for her icy resolve and absolute leadership.",
        image: "https://static.wikia.nocookie.net/fma/images/0/07/OlivierArmstrongExport.png",
        bio: "Major General Olivier Mira Armstrong is the commanding officer of Fort Briggs, the northernmost stronghold of Amestris. Known for her 'survival of the fittest' philosophy, she transformed the Briggs soldiers into the most disciplined unit in the military. Olivier possesses a cold, calculating mind and absolute confidence, often clashing with the corruption in Central. She is a master of the saber and tactical warfare, refusing to use alchemy and instead relying on the raw strength and loyalty of her men.",
        abilities: ["Absolute Command Authority", "Master Saber Combat", "Expert Cold-Climate Warfare", "Fortress Defense Stratagem"],
        affiliation: "Amestrian State Military (General)",
        status: "Active",
        origin: "Amestris (Armstrong Estate)"
      },
      {
        name: "Van Hohenheim",
        role: "Sage / The Philosopher of the West",
        description: "The father of the Elric brothers and a living Philosopher's Stone.",
        image: "https://static.wikia.nocookie.net/fma/images/1/14/VanHohenheimExport.png",
        bio: "Van Hohenheim was originally a slave in the ancient nation of Cselkcess, where he was used as the catalyst for the creation of the first Homunculus. Forced into becoming a living Philosopher's Stone containing over half a million souls, he spent centuries wandering the world, preparing for the final confrontation with Father. Hohenheim is a master of alchemy who doesn't require circles or movement, capable of complex feats that mirror Father's power. His life is a tragic journey of redemption and a desire to return to the humanity he lost.",
        abilities: ["Living Philosopher's Stone (Dual Souls)", "Infinite Alchemical Energy", "Spontaneous Transmutation", "Internal Mental Combat Domain"],
        affiliation: "Independent / The Elric Family",
        status: "Deceased (Died of Soul Depletion)",
        origin: "Cselkcess"
      },
      {
        name: "Izumi Curtis",
        role: "Master Alchemist / Mentor",
        description: "The Elric brothers' teacher who values physical strength as much as alchemical knowledge.",
        image: "https://static.wikia.nocookie.net/fma/images/e/ed/IzumiCurtisExport.png",
        bio: "Izumi Curtis is a master alchemist who lives in Dublith with her husband Sig. She is the woman responsible for training Edward and Alphonse in both martial arts and alchemical theory. Having attempted human transmutation to bring back her stillborn child, she lost internal organs, leaving her with chronic health issues but also the ability to perform alchemy without a circle. Izumi is a fierce and uncompromising teacher who deeply loves the brothers, identifying herself simply as a 'housewife' while possessing world-class alchemical power.",
        abilities: ["Master Alchemy (No Circle Required)", "Exceptional Martial Arts Proficiency", "Internal Organ Compensation", "Survivalist Expertise"],
        affiliation: "Curtis Meat Shop / Independent",
        status: "Active",
        origin: "Amestris"
      },
      {
        name: "Solf J. Kimblee",
        role: "Crimson Lotus Alchemist",
        description: "A psychopathic state alchemist who specializes in explosions and absolute chaos.",
        image: "https://static.wikia.nocookie.net/fma/images/0/07/SolfJKimbleeExport.png",
        bio: "Solf J. Kimblee, the Crimson Lotus Alchemist, is an expert in explosive alchemy. He is a gentlemanly but utterly cold-blooded killer who views the world through a lens of survival of the fittest. During the Ishval Civil War, he used a Philosopher's Stone to amplify his explosions, relishing the sound of destruction. Kimblee's philosophy is rooted in the belief that those with the power to act should do so without hesitation, making him one of the most dangerous and unpredictable wildcards in the series.",
        abilities: ["Explosive Alchemy (Dual Circles)", "Philosopher's Stone Amplification", "Strategic Infiltration", "Lethal Combat Agility"],
        affiliation: "Amestrian State Military (State Alchemist)",
        status: "Deceased (Consumed by Pride)",
        origin: "Amestris"
      },
      {
        name: "Tim Marcoh",
        role: "The Crystal Alchemist",
        description: "The leading researcher of the Philosopher's Stone who seeks to atone for his creations.",
        image: "https://static.wikia.nocookie.net/fma/images/5/5e/TimMarcohExport.png",
        bio: "Dr. Tim Marcoh was the chief researcher of the Amestrian military's Philosopher's Stone project. Haunted by the millions of lives lost in his research, he went into hiding as a country doctor. Marcoh possesses unique alchemical knowledge that allows him to deconstruct Philosopher's Stones, a skill that became vital in the fight against the Homunculi. His journey is one of deep regret and a desperate attempt to use his scientific knowledge to heal the wounds he helped inflict on the world.",
        abilities: ["Philosopher's Stone Deconstruction", "Advanced Biological Alchemy", "High-Level Medical Research", "Information Encryption Mastery"],
        affiliation: "Amestrian Military (Formerly) / Resistance",
        status: "Active (Helping Rebuild Ishval)",
        origin: "Amestris"
      },
      {
        name: "Buccaneer",
        role: "Captain / Briggs Garrison",
        description: "A massive officer of the Briggs mountain stronghold with a unique combat automail.",
        image: "https://static.wikia.nocookie.net/fma/images/6/6d/BuccaneerExport.png",
        bio: "Captain Buccaneer was a key officer under Major General Olivier Armstrong at Fort Briggs. A mountain of a man with a fierce but surprisingly jovial personality, he was a master of cold-weather warfare. Buccaneer utilized specialized 'Crocodile' automail—a chainsaw-like arm that allowed him to tear through armored opponents and fortifications. He played a heroic role in the defense of Central, refusing to fall even after receiving mortal wounds until his mission was accomplished.",
        abilities: ["'Crocodile' Combat Automail (Chainsaw)", "Superhuman Physical Force", "Heavy Weaponry Proficiency", "Expert Arctic Survival"],
        affiliation: "Amestrian State Military (Briggs)",
        status: "KIA",
        origin: "Amestris"
      },
      {
        name: "Miles",
        role: "Major / Briggs Adjutant",
        description: "Olivier Armstrong's loyal adjutant and an officer of Ishvalan descent.",
        image: "https://static.wikia.nocookie.net/fma/images/0/07/MilesExport.png",
        bio: "Major Miles served as the primary assistant to General Olivier Armstrong at Briggs. As an officer of mixed heritage, including Ishvalan blood, he chose to remain in the military to prove that Ishvalans could be loyal and competent citizens. Miles is a man of exceptional discipline and intelligence, serving as a bridge between the military and the Ishvalan refugees. His dedication to General Armstrong's philosophy of strength through unity made him a cornerstone of the Briggs command structure.",
        abilities: ["Expert Cold-Weather Logistics", "Advanced Firearm Proficiency", "Strategic Operational Planning", "Diplomatic Negotiation"],
        affiliation: "Amestrian State Military (Briggs)",
        status: "Active",
        origin: "Amestris (Mixed Heritage)"
      },
      {
        name: "Pinako Rockbell",
        role: "Automail Engineer / Grandmother",
        description: "The 'Great Mother of Resembool' and Winry's grandmother who mentored the Elric brothers.",
        image: "https://static.wikia.nocookie.net/fma/images/6/6f/PinakoRockbellExport.png",
        bio: "Pinako Rockbell is a legendary automail engineer and the proprietor of Rockbell Automail in Resembool. After the Elric brothers lost their mother and subsequently their bodies, Pinako became their surrogate grandmother and caretaker. She is a tough, cigar-smoking woman with decades of experience in prosthetic mechanics, having survived the Ishval Civil War. Pinako remains the bedrock of the Resembool community, providing technical expertise and emotional support to the next generation of engineers and alchemists.",
        abilities: ["Master Automail Engineering", "Surgical Medicine", "Resembool Regional Logistics", "Survivalist Expertise"],
        affiliation: "Rockbell Automail / Independent",
        status: "Active",
        origin: "Resembool, Amestris"
      },
      {
        name: "Trisha Elric",
        role: "Mother / Foundational Inspiration",
        description: "The mother of Edward and Alphonse, whose death triggered their alchemical journey.",
        image: "https://static.wikia.nocookie.net/fma/images/2/2a/TrishaElricExport.png",
        bio: "Trisha Elric was the wife of Van Hohenheim and the mother of Edward and Alphonse Elric. A woman of extraordinary kindness and patience, she raised her sons alone after Hohenheim left to prepare for his confrontation with Father. Her untimely death from an illness led her sons to commit the ultimate alchemical taboo—human transmutation. Though she never performed alchemy herself, her legacy is the driving force behind the brothers' quest for redemption and their unwavering belief in human connection.",
        abilities: ["Exceptional Empathy", "Homemaking Proficiency", "Resilient Spirit", "Foundational Moral Guidance"],
        affiliation: "The Elric Family",
        status: "Deceased (Natural Causes)",
        origin: "Resembool, Amestris"
      },
      {
        name: "Sig Curtis",
        role: "Butcher / Husband of Izumi",
        description: "A mountain of a man and the fiercely protective husband of Izumi Curtis.",
        image: "https://static.wikia.nocookie.net/fma/images/8/87/SigCurtisExport.png",
        bio: "Sig Curtis is the husband of master alchemist Izumi Curtis and a co-owner of the Curtis Meat Shop in Dublith. Despite his intimidating physical stature and immense strength, he is a gentle soul who is completely devoted to his wife and her health. Sig possesses physical power that rivals even Major Armstrong, and he played a crucial role in providing support to the Elric brothers and the resistance during the final battle in Central. He is the physical anchor for Izumi's alchemical brilliance.",
        abilities: ["Peak Physical Strength Mastery", "Expert Butchery & Anatomy", "Heavy Combat Support", "Dedicated Life Support"],
        affiliation: "Curtis Meat Shop / Independent",
        status: "Active",
        origin: "Dublith, Amestris"
      },
      {
        name: "Shou Tucker",
        role: "The Sewing-Life Alchemist",
        description: "A state alchemist known for his research into bio-transmutation and chimeras.",
        image: "https://static.wikia.nocookie.net/fma/images/d/d4/ShouTuckerExport.png",
        bio: "Shou Tucker gained fame as the first alchemist to create a chimera capable of human speech, which earned him his State Alchemist certification. However, it was later revealed that his 'breakthrough' was achieved by transmuting his own wife, and later his daughter Nina, with animals. Tucker represents the darkest side of alchemical pursuit, where ethics are sacrificed for scientific recognition. His actions remain one of the most haunting reminders of the weight of alchemical power and the loss of humanity.",
        abilities: ["Biological Alchemy (Chimera Research)", "DNA-Based Transmutation", "Advanced Bio-Logistics", "Manipulative Psychological Profile"],
        affiliation: "Amestrian State Military (State Alchemist)",
        status: "Deceased (Executed by Scar)",
        origin: "East City, Amestris"
      },
      {
        name: "Nina Tucker / Alexander",
        role: "Human-Animal Chimera",
        description: "The tragic result of her father's obsesive research into speech-capable chimeras.",
        image: "https://static.wikia.nocookie.net/fma/images/7/77/NinaAlexanderExport.png",
        bio: "Nina Tucker was the innocent daughter of Shou Tucker, who spent her days playing with her large dog, Alexander. In a horrific act of alchemical desperation, her father transmuted Nina and Alexander together to create a talking chimera to maintain his State Alchemist license. As a chimera, she possessed the ability to speak but lived in constant agony and confusion. Her tragic existence was eventually ended by Scar out of mercy, serving as a permanent scar on the consciences of Edward and Alphonse.",
        abilities: ["Human-Animal Speech Synthesis", "Biological Duality", "Heightened Animalistic Senses", "Tragic Resilience"],
        affiliation: "Tucker Estate (Subject)",
        status: "Deceased (Mercy Kill by Scar)",
        origin: "East City, Amestris"
      },
      {
        name: "Heinkel",
        role: "Lion Chimera / Bodyguard",
        description: "A former state military asset turned rogue, possessing the traits of a lion.",
        image: "https://static.wikia.nocookie.net/fma/images/d/d4/HeinkelExport.png",
        bio: "Heinkel was one of the chimeras created by the Amestrian military and assigned to work under Solf J. Kimblee. Possessing the DNA of a lion, he can transform into a humanoid feline with enhanced strength, speed, and nocturnal vision. After being discarded by Kimblee, Heinkel joined forces with Edward Elric and Alphonse, becoming a loyal and dangerous ally. Despite his predatory nature, he possesses a strong sense of honor and was instrumental in the final battles against the Homunculi.",
        abilities: ["Lion Physiology Transformation", "Advanced Nocturnal Vision", "Superhuman Strength & Agility", "Tracking & Predatory Instincts"],
        affiliation: "Resistance / The Elric Group",
        status: "Active (Employed by the Yao Clan)",
        origin: "Amestris (Chimeric Experiment)"
      },
      {
        name: "Darius",
        role: "Gorilla Chimera / Bodyguard",
        description: "A powerful chimera with gorilla DNA who values loyalty above all else.",
        image: "https://static.wikia.nocookie.net/fma/images/3/30/DariusExport.png",
        bio: "Darius is a chimera whose body has been infused with gorilla DNA, granting him immense physical power and durability. Originally a subordinate of Kimblee alongside Heinkel, he rebelled against his master's callousness and allied himself with Edward Elric. Darius is a straightforward and dependable warrior who uses his brute force to protect his companions. Following the series' conclusion, he and Heinkel found a new purpose serving as bodyguards for the Yao clan in Xing.",
        abilities: ["Gorilla Physiology Transformation", "Unmatched Physical Force", "High Durability & Endurance", "Heavy Hand-to-Hand Combat Mastery"],
        affiliation: "Resistance / The Elric Group",
        status: "Active (Employed by the Yao Clan)",
        origin: "Amestris (Chimeric Experiment)"
      },
      {
        name: "Zampano",
        role: "Wild Boar Chimera / Scout",
        description: "A chimera infused with wild boar DNA, capable of launching lethal quills.",
        image: "https://static.wikia.nocookie.net/fma/images/5/5e/ZampanoExport.png",
        bio: "Zampano is a member of the secondary chimeric unit originally tasked with capturing Scar. Possessing the traits of a wild boar, he can manifest sharp quills from his back and launch them with high velocity. Though he initially betrayed the Elrics out of a desire to return to his human form, he ultimately chose the path of redemption. Zampano is a skilled scout and tactical combatant who, along with Jerso, eventually traveled to Xing to seek a cure for their condition via Alkahestry.",
        abilities: ["Boar Physiology (Quill Launching)", "Enhanced Piercing Damage", "Rugged Physicality", "Tactical Scouting"],
        affiliation: "Resistance / The Elric Group",
        status: "Active (Searching for a Cure)",
        origin: "Amestris (Chimeric Experiment)"
      },
      {
        name: "Jerso",
        role: "Frog Chimera / Range Combatant",
        description: "A chimera with frog DNA who uses projectile mucus and agile movement.",
        image: "https://static.wikia.nocookie.net/fma/images/2/27/JersoExport.png",
        bio: "Jerso is a chimera infused with frog DNA, allowing him to launch sticky, projectile mucus from his mouth and perform incredible feats of jumping. Like Zampano, he was initially an antagonist seeking to appease the military to regain his humanity. However, he turned against Central after witnessing the Homunculi's cruelty. Jerso possesses a dry wit and strategic mind, focusing on long-range support and crowd control. He remains a close ally of the Elrics while searching for an alchemical solution to his chimeric state.",
        abilities: ["Frog Physiology (Mucus Projectiles)", "High-Velocity Adhesive Secretions", "Superhuman Jump Height", "Long-Range Tactical Support"],
        affiliation: "Resistance / The Elric Group",
        status: "Active (Searching for a Cure)",
        origin: "Amestris (Chimeric Experiment)"
      },
      {
        name: "Yoki",
        role: "Former Landowner / Servant",
        description: "A disgraced former official who became a reluctant but loyal ally of the Elrics.",
        image: "https://static.wikia.nocookie.net/fma/images/6/6f/YokiExport.png",
        bio: "Yoki was once a corrupt landowner in the town of Youswell before being swindled out of his position by Edward Elric. After a period of wandering in poverty, he became the self-appointed servant and driver for Scar, and eventually the Elric group. While appearing cowardly and incompetent, Yoki demonstrated surprising bravery during the Promised Day, using his knowledge of the military's bureaucracy and minor tactical diversions to aid the resistance. His redemption is a testament to the influence of the brothers even on the most unlikely of allies.",
        abilities: ["Bureaucratic Knowledge", "Master Professional Driving", "Distraction Tactics", "Survivalist Resourcefulness"],
        affiliation: "The Elric Group / Youswell Official (Formerly)",
        status: "Active",
        origin: "Youswell, Amestris"
      },
      {
        name: "Barry the Chopper",
        role: "Serial Killer / Number 66",
        description: "A soul-bound suit of armor and a former serial killer who became a strange ally.",
        image: "https://static.wikia.nocookie.net/fma/images/2/2f/BarryTheChopperExport.png",
        bio: "Barry the Chopper was a notorious serial killer in Central whose soul was bound to a suit of armor by the military to serve as a guard in Laboratory 5. Unlike Alphonse, Barry revels in his metallic form and his bloody past. However, after encountering the Elrics and falling 'in love' with Riza Hawkeye, he became a valuable source of information about the military's experiments. Barry is a chaotic and murderous wildcard who ultimately played a role in exposing the Homunculi's inner workings before meeting his end at the hands of his own physical body.",
        abilities: ["Soul-Bonded Combat (Immunity to Pain)", "Expert Dual-Blade Combat Mastery", "Psychological Warfare", "Enhanced Metal Durability"],
        affiliation: "Central Laboratory 5 (Guard) / Independent",
        status: "Deceased (Soul Disintegrated)",
        origin: "Central City, Amestris"
      },
      {
        name: "Martel",
        role: "Snake Chimera / Veteran",
        description: "A member of the Devil's Nest who can contort her body within Alphonse's armor.",
        image: "https://static.wikia.nocookie.net/fma/images/c/ca/MartelExport.png",
        bio: "Martel was an Ishval Civil War veteran who was transformed into a snake chimera by the military. She became a loyal member of the original Greed's group at the Devil's Nest. Her chimeric traits allow her to stretch and contort her limbs with serpentine flexibility, even allowing her to hide inside Alphonse's armored body. Her tragic death inside the armor at the hands of King Bradley served as a catalyst for Alphonse's recovery of his lost memories and his deepened resolve to stop the Homunculi.",
        abilities: ["Snake Physiology (Body Contortion)", "Advanced Infiltration Mastery", "Enhanced Flexibility & Reach", "Guerrilla Warfare Expertise"],
        affiliation: "Devil's Nest / Ishval Civil War Veteran",
        status: "KIA",
        origin: "Amestris (Chimeric Experiment)"
      },
      {
        name: "Bido",
        role: "Lizard Chimera / Scout",
        description: "Greed's loyal scout who can climb absolute surfaces.",
        image: "https://static.wikia.nocookie.net/fma/images/d/df/BidoExport.png",
        bio: "Bido was a lizard chimera and one of the few survivors of the military's raid on Greed's shop. He possesses the ability to climb walls and a prehensile tail, making him an excellent scout for the original Devil's Nest group. Bido's loyalty to Greed was absolute, even after the Homunculus was recycled. Tragically, he was killed by the second Greed (Ling Yao), whose lack of memories led him to strike down his former friend—an event that ultimately triggered Greed's internal rebellion against Father.",
        abilities: ["Lizard Physiology (Wall-Climbing)", "Prehensile Tail Combat", "Advanced Camouflage & Stealth", "Scouting & Surveillance"],
        affiliation: "Devil's Nest / Yao Clan (Briefly)",
        status: "KIA",
        origin: "Amestris (Chimeric Experiment)"
      },
      {
        name: "Sheska",
        role: "The Bookstore Bookworm",
        description: "A woman with a photographic memory who reconstructed the Elrics' lost data.",
        image: "https://static.wikia.nocookie.net/fma/images/4/41/SheskaExport.png",
        bio: "Sheska is a researcher who was fired from the National Central Library for reading through her shift. She possesses a perfect photographic memory, capable of recalling every word of any book she has ever read. When the Elrics' research data was destroyed in a fire, Sheska was able to reconstruct Tim Marcoh's complex alchemical notes from memory. She later worked with Maes Hughes and Winry, using her unique talent to uncover technical discrepancies in the military's records and provide vital clues about the Homunculi's history.",
        abilities: ["Perfect Photographic Memory", "Advanced Research & Data Analysis", "Information Reconstruction", "Library Logistics Mastery"],
        affiliation: "Independent / Mustang Unit (Support)",
        status: "Active",
        origin: "Central City, Amestris"
      },
      {
        name: "Dr. Knox",
        role: "Medical Doctor / Forensic Expert",
        description: "A cynical former military doctor who specializes in forensics and trauma.",
        image: "https://static.wikia.nocookie.net/fma/images/d/df/DrKnoxExport.png",
        bio: "Dr. Knox is a former military surgeon who worked alongside Roy Mustang during the Ishval Civil War. Haunted by the horrors they were forced to commit, he left the military to practice medicine in Central's underground. Knox is a brilliant forensic expert and surgeon who provided critical medical care to Mustang's team and the Elrics during their various confrontations. Despite his gruff and cynical exterior, he remains a dedicated physician who understands the weight of human life better than most.",
        abilities: ["Master Surgical Medicine", "Advanced Forensic Pathology", "Emergency Trauma Surgery", "Amestrian Military Anatomy Mastery"],
        affiliation: "Independent (Underground Doctor)",
        status: "Active",
        origin: "Central City, Amestris"
      },
    ],
  },
  {
    id: "1535",
    title: "Death Note",
    description: "Light Yagami finds the Death Note, a notebook dropped by a rogue death god. Any human whose name is written in the notebook dies, and now Light vows to use this power to rid the world of evil.",
    categories: ["Mystery", "Psychological", "Supernatural", "Thriller"],
    posterImage: "/assets/death-note/1.jpg",
    trailerUrl: "https://www.youtube.com/embed/NlJZ-YgAt-c?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1", url: "https://www.youtube.com/embed/Bt3D3Ca9nww?autoplay=1&mute=1" }
    ],
    previews: [
      "/assets/death-note/2.jpg",
      "/assets/death-note/3.jpg",
      "/assets/death-note/4.jpg",
    ],
    mangaChapters: [
      {
        id: "dn-c1",
        title: "Chapter 01: Boredom",
        pages: [
          "/assets/death-note/1.jpg",
          "/assets/death-note/2.jpg",
          "/assets/death-note/3.jpg",
        ]
      },
      {
        id: "dn-c2",
        title: "Chapter 02: Letter",
        pages: [
          "/assets/death-note/4.jpg",
          "/assets/death-note/1.jpg",
        ]
      }
    ],
    characters: [
      {
        name: "Light Yagami",
        role: "Kira / God of the New World",
        description: "A brilliant student who finds the Death Note and vows to rid the world of evil.",
        image: "https://static.wikia.nocookie.net/deathnote/images/5/54/Light_Yagami_Anime.png",
        bio: "Light Yagami is a genius high school student who discovered the Death Note, a supernatural ledger dropped by the Shinigami Ryuk. Driven by a radical sense of justice and an immense ego, he adopted the persona 'Kira' to eradicate criminals and create a utopian world where he reigns as a god. Light is a master of psychological manipulation and strategy, capable of outmaneuvering entire police task forces while maintaining a facade of perfect moral rectitude. His journey is a chilling descent into megalomania as he sacrifices everything—and everyone—to achieve his vision."
      },
      {
        name: "L Lawliet",
        role: "World's Greatest Detective",
        description: "The enigmatic detective who takes on the task of capturing the serial killer known as Kira.",
        image: "https://static.wikia.nocookie.net/deathnote/images/6/6d/L_Lawliet_Anime.png",
        bio: "L Lawliet and is the world's premier detective, a mysterious figure who has solved cases the world thought impossible. Known for his peculiar habits, disheveled appearance, and constant sugar consumption, L possesses a 100% deduction rate. He operates behind the scenes through his assistant Watari, eventually revealing himself to the Kira Task Force to lead the search for the god-like serial killer. L views the investigation as a high-stakes game of chess, using unconventional and often morally grey tactics to corner his target."
      },
      {
        name: "Ryuk",
        role: "Shinigami / Observer",
        description: "A bored Shinigami who dropped his Death Note into the human world for entertainment.",
        image: "https://static.wikia.nocookie.net/deathnote/images/c/c5/Ryuk_Anime.png",
        bio: "Ryuk is a God of Death who, out of pure boredom, triggered the events of the series by dropping a second Death Note into the human world. He follows Light Yagami not as an ally, but as a neutral observer seeking entertainment. Ryuk is characterized by his love for human apples and his detachment from human morality, often finding the desperate struggles of mortals to be nothing more than a fascinating game. He represents the cold, inevitable nature of the Death Note, waiting for the moment he must finally fulfill his pact with Light."
      },
      {
        name: "Misa Amane",
        role: "Second Kira / Idol",
        description: "A famous idol who becomes obsessed with Kira and possesses the Shinigami Eyes.",
        image: "https://static.wikia.nocookie.net/deathnote/images/b/bc/Misa_Amane_Anime.png",
        bio: "Misa Amane is a popular model and actress who became the Second Kira after acquiring her own Death Note. Traumatized by the murder of her parents, she became fanatically devoted to Kira for avenging them. Misa possesses the 'Shinigami Eyes', allowing her to see any person's name and lifespan at the cost of half her own life. Though she often appears flighty and impulsive, her absolute devotion to Light Yagami makes her one of the most dangerous and unpredictable tools in his arsenal."
      },
      {
        name: "Near",
        role: "N / L's Successor",
        description: "A young genius from Wammy's House who leads the SPK to capture Kira.",
        image: "https://static.wikia.nocookie.net/deathnote/images/f/f7/Near_Anime.png",
        bio: "Near, born Nate River, is the primary successor to L and the head of the Special Provision for Kira (SPK). Raised at Wammy's House, he is a stoic and highly analytical prodigy who views everything through the lens of puzzles and games. While he lacks L's experience and social reach, Near's ability to remain emotionally detached from the case allows him to maintain a perfect logical track. He eventually pieces together the clues left by his predecessor to systematically dismantle Light Yagami's God complex."
      }
    ],
  },
  {
    id: "11061",
    title: "Hunter x Hunter (2011)",
    description: "Gon Freecss discovers that his father is a world-renowned Hunter. To find him, Gon must become a Hunter himself, passing a dangerous exam and exploring an unknown world.",
    categories: ["Action", "Adventure", "Fantasy"],
    posterImage: "/assets/hunter-x-hunter/1.jpg",
    trailerUrl: "https://www.youtube.com/embed/uq7IKfjViIw?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: Departure!", url: "https://www.youtube.com/embed/2v7S4U-aL0M?autoplay=1&mute=1" }
    ],
    previews: [
      "/assets/hunter-x-hunter/2.jpg",
      "/assets/hunter-x-hunter/3.jpg",
      "/assets/hunter-x-hunter/4.jpg",
    ],
    characters: [
      {
        name: "Gon Freecss",
        role: "Pro Rookie Hunter",
        description: "A young boy who seeks his father, the legendary Hunter Ging Freecss.",
        image: "https://static.wikia.nocookie.net/hunterxhunter/images/c/c4/Gon_Freecss_Part_II.png",
        bio: "Gon Freecss is an athletic, rustic, and friendly boy who is searching for his father, Ging. Raised on Whale Island, Gon possesses a keen sense of smell and sight, along with a deep connection to nature. His journey to become a Hunter is defined by his simplicity, honesty, and an occasionally frightening level of determination. As an Enhancer, his Nen abilities are straightforward but devastating, most notably his signature 'Jajanken'. Gon's moral compass is unique, often leading him to befriend dangerous individuals while pushing himself to extreme, self-destructive lengths to achieve his goals.",
        abilities: ["Jajanken (Enhancement / Emission / Transmutation)", "Exceptional Sensory Perception", "Advanced Stamina", "Instinctive Combat Mastery"],
        affiliation: "Hunter Association (Pro Hunter)",
        status: "Active (Powerless)",
        origin: "Whale Island"
      },
      {
        name: "Killua Zoldyck",
        role: "Assassin / Godspeed Hunter",
        description: "Gon's best friend and a prodigy from the infamous Zoldyck family.",
        image: "https://static.wikia.nocookie.net/hunterxhunter/images/c/ca/Killua_Zoldyck_Part_II.png",
        bio: "Killua Zoldyck is the heir to the world-renowned Zoldyck family of assassins. Despite his upbringing, Killua chose to walk his own path, finding a true friend and purpose in Gon. He is a genius in combat and strategy, utilizing electricity-based Nen abilities like 'Godspeed' which allows him to move and react at superhuman speeds. Killua's character arc is a poignant journey from a cold-hearted killer to a loyal friend and protective brother, constantly struggling to overcome the mental shackles placed on him by his family.",
        abilities: ["Godspeed (Transmutation)", "Narukami (Lightning Bolt)", "Whirlwind & Thunderbolt", "Assassin Techniques (Rhythym Echo, Claws)"],
        affiliation: "Hunter Association / Zoldyck Family (Formerly)",
        status: "Active",
        origin: "Kukuroo Mountain, Republic of Padokea"
      },
      {
        name: "Kurapika",
        role: "Hunter / Last of the Kurta",
        description: "The sole survivor of the Kurta Clan who seeks vengeance against the Phantom Troupe.",
        image: "https://static.wikia.nocookie.net/hunterxhunter/images/9/96/Kurapika_Part_II.png",
        bio: "Kurapika is the last of the Kurta Clan, a people known for their 'Scarlet Eyes'. Driven by a thirst for vengeance after the Phantom Troupe slaughtered his clan, Kurapika has dedicated his life to recovering his people's stolen eyes. He utilizes Conjuration Nen to create specialized chains, including 'Emperor Time' which allows him to use all Nen types at 100% efficiency. His intellect and tactical brilliance make him a terrifyingly effective hunter.",
        abilities: ["Conjured Chains (Holy, Dowsing, Chain Jail, Judgment)", "Emperor Time (Specialization)", "Scarlet Eyes Power Boost", "Master Strategist"],
        affiliation: "Hunter Association / Nostrade Family / Zodiacs (Rat)",
        status: "Active",
        origin: "Kurta Clan Village"
      },
      {
        name: "Leorio Paradinight",
        role: "Medical Student / Hunter",
        description: "A loyal friend who aims to become a doctor to help those in need.",
        image: "https://static.wikia.nocookie.net/hunterxhunter/images/f/f0/Leorio_Paradinight_Part_II.png",
        bio: "Leorio Paradinight vowed to become a doctor and provide free aid to those in need after losing a childhood friend to a treatable disease. He joined the Hunter Exam to fund his education. While he may lack the raw combat potential of his friends, Leorio's absolute loyalty and grounded perspective make him the emotional heart of the group. His Emission-based Nen abilities reflect his straightforward and punchy personality.",
        abilities: ["Warp Punch (Emission)", "Ultrasound Detection", "Expert Medical Knowledge", "Negotiation & Charisma"],
        affiliation: "Hunter Association / Medical Academy / Zodiacs (Boar)",
        status: "Active",
        origin: "Unknown"
      },
      {
        name: "Hisoka Morow",
        role: "Enigmatic Magician / Floor Master",
        description: "A master of deception and Bungee Gum who lives for the thrill of battle.",
        image: "https://static.wikia.nocookie.net/hunterxhunter/images/3/3d/Hisoka_Morow_Part_II.png",
        bio: "Hisoka Morow is a whimsical and self-serving magician who seeks out powerful opponents to satisfy his bloodlust. He viewed Gon and Killua as 'unripe fruit' with immense potential. Hisoka's 'Bungee Gum'—which possesses properties of both rubber and gum—is a deceptively simple but incredibly versatile Nen ability. He thrives in chaos and deception, always playing his own game.",
        abilities: ["Bungee Gum (Transmutation)", "Texture Surprise (Conjuration)", "Master Card Thrower", "Exceptional Stealth & Deception"],
        affiliation: "Phantom Troupe (#4 - Faked) / Independent",
        status: "Active",
        origin: "Unknown"
      },
      {
        name: "Chrollo Lucilfer",
        role: "Leader of the Phantom Troupe",
        description: "A calm and brilliant strategist who leads the infamous Spider.",
        image: "https://static.wikia.nocookie.net/hunterxhunter/images/d/df/Chrollo_Lucilfer.png",
        bio: "Chrollo Lucilfer is the founder and leader of the Phantom Troupe. He is a cold, intelligent, and highly capable individual who views his troupe as a family, yet remains detached enough to accept its members' deaths if the group survives. His Hatsu, 'Skill Hunter', allows him to steal the Nen abilities of others and store them in a book called the 'Bandit's Secret'.",
        abilities: ["Bandit's Secret (Specialization)", "Nen Ability Theft", "Double Face Mastery", "Genius Strategic Leadership"],
        affiliation: "Phantom Troupe (Leader / #0)",
        status: "Active",
        origin: "Meteor City"
      },
      {
        name: "Isaac Netero",
        role: "12th Hunter Association Chairman",
        description: "The former strongest Nen user in the world and master of the 100-Type Guanyin Bodhisattva.",
        image: "https://static.wikia.nocookie.net/hunterxhunter/images/7/7e/Isaac_Netero.png",
        bio: "Isaac Netero was the 12th Chairman of the Hunter Association. Widely considered the strongest Nen user in his prime, Netero spent years in isolation perfecting a single punch, eventually achieving speeds that surpassed sound. His '100-Type Guanyin Bodhisattva' is a manifestation of his immense aura and gratitude. Even in his old age, Netero remained a formidable warrior who sought a challenge worthy of his status.",
        abilities: ["100-Type Guanyin Bodhisattva (Emission / Enhancement)", "Superhuman Speed & Reflexes", "Expert Hand-to-Hand Combat", "Indomitable Will"],
        affiliation: "Hunter Association (Chairman)",
        status: "Deceased (KIA)",
        origin: "Unknown"
      },
      {
        name: "Meruem",
        role: "The Chimera Ant King",
        description: "The ultimate peak of evolution who struggled between his ant nature and human empathy.",
        image: "https://static.wikia.nocookie.net/hunterxhunter/images/0/05/Meruem.png",
        bio: "Meruem was the most powerful offspring of the Chimera Ant Queen. Born with a sense of absolute superiority, he initially viewed humans as livestock. However, through his games with the Gungi master Komugi, Meruem began to question his own nature. His arc is a profound exploration of evolution, leadership, and the duality of the soul, as he transitioned from a ruthless conqueror to a being who sought to coexist.",
        abilities: ["Aura Synthesis (Specialization / Absorption)", "Photon Manipulation", "Unmatched Physical Prowess", "Genius Intellectual Evolution"],
        affiliation: "Chimera Ants (King)",
        status: "Deceased (Died of Poisoning)",
        origin: "NGL (Neo-Green Life)"
      },
      {
        name: "Neferpitou",
        role: "Chimera Ant Royal Guard / #1",
        description: "A cat-like Chimera Ant of immense power and terrifying bloodlust.",
        image: "https://static.wikia.nocookie.net/hunterxhunter/images/a/a2/Neferpitou_Part_II.png",
        bio: "Neferpitou was the first of the Chimera Ant King's three Royal Guards. Characterized by cat-like features and a playful yet lethal personality, Pitou possessed a massive En that could cover miles. Their Nen ability, 'Doctor Blythe', allowed for advanced surgical repair, while 'Terpsichora' pushed their body beyond physical limits for combat. Pitou was fiercely loyal to Meruem, eventually sacrificing themselves to ensure the King's safety during the palace invasion.",
        abilities: ["Terpsichora (Specialization / Manipulation)", "Doctor Blythe (Conjuration)", "Massive En (Aura Detection)", "Supernatural Physical Agility"],
        affiliation: "Chimera Ant Royal Guard",
        status: "Deceased (KIA)",
        origin: "NGL (Neo-Green Life)"
      },
      {
        name: "Shiapouf",
        role: "Chimera Ant Royal Guard / #2",
        description: "The intellectual and dramatic strategist of the Royal Guard.",
        image: "https://static.wikia.nocookie.net/hunterxhunter/images/e/ea/Shiapouf_Part_II.png",
        bio: "Shiapouf was the second member of the Royal Guard, possessing butterfly-like wings and a theatrical, often obsessive devotion to the King's 'perfection'. He was the most manipulative of the Guard, utilizing his 'Beelzebub' ability to divide his body into miniature clones and 'Spiritual Message' to read the emotions of others through his scales. Pouf's primary goal was to preserve Meruem's status as a supreme ruler, even if it meant defying the King's personal desires.",
        abilities: ["Beelzebub (Manipulation)", "Spiritual Message (Manipulation / Transmutation)", "Winged Flight", "Advanced Strategic Deduction"],
        affiliation: "Chimera Ant Royal Guard",
        status: "Deceased (Died of Poisoning)",
        origin: "NGL (Neo-Green Life)"
      },
      {
        name: "Menthuthuyoupi",
        role: "Chimera Ant Royal Guard / #3",
        description: "A titan of raw power and the only Guard with no human DNA.",
        image: "https://static.wikia.nocookie.net/hunterxhunter/images/6/66/Menthuthuyoupi_Part_II.png",
        bio: "Menthuthuyoupi was the youngest member of the Royal Guard and the only one formed solely from Magical Beast DNA. Initially straightforward and focused only on combat, Youpi underwent significant growth during the palace invasion, learning to respect his human opponents. His ability to shapeshift and manifest dozens of limbs and eyes made him a chaotic force on the battlefield, eventually evolving into his 'Centaur' form to maximize his destructive output.",
        abilities: ["Metamorphosis (Enhancement / Conjuration)", "Rage Incarnate (Explosive Aura Release)", "Centaur Transformation", "Immeasurable Physical Resilience"],
        affiliation: "Chimera Ant Royal Guard",
        status: "Deceased (Died of Poisoning)",
        origin: "NGL (Neo-Green Life)"
      },
      {
        name: "Ging Freecss",
        role: "Double-Star Hunter / Zodiac",
        description: "Gon's elusive father and one of the world's top five Nen users.",
        image: "https://static.wikia.nocookie.net/hunterxhunter/images/5/52/Ging_Freecss_Part_II.png",
        bio: "Ging Freecss is a world-renowned Double-Star Ruins Hunter and the primary motivation for Gon's journey. A man of immense intellect and eccentric personality, Ging is a member of the Zodiac Twelve, codename 'Boar'. He is notorious for his elusive nature and his philosophy of enjoying the 'little detours' in life. Ging possesses an incredible talent for mimicking any strike-type Nen ability he has been hit by, a testament to his genius-level aura mastery. He played a pivotal role in the creation of Greed Island and remains one of the most influential and mysterious figures in the Hunter Association.",
        abilities: ["Generic Strike Mimicry", "Genius-Level Nen Proficiency", "Exceptional Strategic Intellect", "Deep Knowledge of Ancient Lore"],
        affiliation: "Hunter Association / Zodiac Twelve (Former - Boar)",
        status: "Active",
        origin: "Whale Island"
      },
      {
        name: "Silva Zoldyck",
        role: "Head of the Zoldyck Family",
        description: "Killua's father and a legendary assassin of immense physical power.",
        image: "https://static.wikia.nocookie.net/hunterxhunter/images/2/23/Silva_Zoldyck_Part_II.png",
        bio: "Silva Zoldyck is the current head of the infamous Zoldyck family. A silent and imposing figure, he possesses immeasurable physical strength and an immunity to all known poisons and electrical discharges. Silva is a master of Transmutation Nen, capable of manifesting devastating orbs of raw aura. He is a pragmatic leader who deeply values the family's traditions and legacy, often taking personal interest in Killua's development to ensure the Zoldyck name remains the most feared in the world of assassination.",
        abilities: ["Explosive Aura Orbs (Transmutation)", "Indestructible Physique", "Poison & Electricity Immunity", "Advanced Assassin Combat"],
        affiliation: "Zoldyck Family (Head)",
        status: "Active",
        origin: "Kukuroo Mountain, Republic of Padokea"
      },
      {
        name: "Zeno Zoldyck",
        role: "Assassin Emeritus",
        description: "Killua's grandfather and a master of Dragon-based Nen techniques.",
        image: "https://static.wikia.nocookie.net/hunterxhunter/images/f/f6/Zeno_Zoldyck_Part_II.png",
        bio: "Zeno Zoldyck is the retired head of the Zoldyck family and a legendary assassin known for his 'A Kill a Day' philosophy. Despite his advanced age, Zeno remains one of the most lethal Nen users in existence. He specializes in Transmutation, shaping his aura into dragons for both transportation and devastating area-of-effect attacks. Zeno is a man of high professional ethics, often seen as a calm and calculating contrast to his family's more volatile members. His experience and aura control allow him to strike from miles away with pin-point accuracy.",
        abilities: ["Dragon Head (Transmutation)", "Dragon Lance & Dragon Dive", "High-Range En (300m+)", "Master Tactical Analysis"],
        affiliation: "Zoldyck Family",
        status: "Active",
        origin: "Kukuroo Mountain, Republic of Padokea"
      },
      {
        name: "Illumi Zoldyck",
        role: "Assassin / Manipulator",
        description: "Killua's manipulative older brother who uses needles to control others.",
        image: "https://static.wikia.nocookie.net/hunterxhunter/images/8/82/Illumi_Zoldyck_Part_II.png",
        bio: "Illumi Zoldyck is the eldest child of Silva and Kikyo Zoldyck. He possesses a cold, emotionless demeanor and a twisted, overprotective love for Killua. As a master Manipulator, Illumi uses Nen-infused needles to alter his appearance, control the behavior of others, or even turn them into 'Needle People'—braindead puppets that serve his will. Illumi's obsession with controlling his family's fate makes him one of the most unsettling and dangerous figures in the series, often collaborating with Hisoka for their own mutually beneficial goals.",
        abilities: ["Needle Manipulation", "Body Alteration (Disguise)", "Needle People Creation", "Enhanced Assassin Stealth"],
        affiliation: "Zoldyck Family / Hunter Association (Gittarackur)",
        status: "Active",
        origin: "Kukuroo Mountain, Republic of Padokea"
      },
      {
        name: "Alluka Zoldyck",
        role: "The Wish-Granting Child",
        description: "Killua's younger sister who hosts the mysterious entity Nanika.",
        image: "https://static.wikia.nocookie.net/hunterxhunter/images/8/87/Alluka_Zoldyck_Part_II.png",
        bio: "Alluka Zoldyck is the second youngest child of the Zoldyck family. She is the host of 'Nanika', a mysterious entity from the Dark Continent capable of granting any wish once three of Alluka's requests are fulfilled. However, the greater the wish, the more horrifying the subsequent requests become, often leading to large-scale loss of life. Only Killua can command Nanika to grant wishes without conditions, a power that made Alluka both the most dangerous and the most coveted member of the family. Her bond with Killua is the only thing that keeps her humanity intact.",
        abilities: ["Wish Granting (Specialization / Dark Continent Power)", "Nanika Possession", "Universal Reality Alteration", "Conditional Life/Death Control"],
        affiliation: "Zoldyck Family (Isolated) / Killua's Ward",
        status: "Active",
        origin: "Kukuroo Mountain, Republic of Padokea"
      },
      {
        name: "Biscuit Krueger",
        role: "Double-Star Treasure Hunter / Mentor",
        description: "A master of Shingen-ryu kung fu who trained Gon and Killua.",
        image: "https://static.wikia.nocookie.net/hunterxhunter/images/b/b3/Biscuit_Krueger_Part_II.png",
        bio: "Biscuit Krueger, also known as Bisky, is a legendary Double-Star Treasure Hunter and a master of the Shingen-ryu school of kung fu. Despite appearing as a delicate young girl, she is actually a 57-year-old woman with a massive, muscular true form that she hides to maintain her aesthetic preferences. Bisky served as a crucial mentor to Gon and Killua during the Greed Island arc, refining their Nen fundamentals with brutal efficiency. Her Hatsu, 'Magical Esthetician', allows her to conjure a massage therapist who can restore vitality and even handle complex skin care, a reflection of her desire for eternal youth.",
        abilities: ["Magical Esthetician (Conjuration / Transmutation)", "Piano Massage (Fatigue Recovery)", "True Form Transformation (Enhancement)", "Mastery of All Nen Fundamentals"],
        affiliation: "Hunter Association / Shingen-ryu Kung Fu",
        status: "Active",
        origin: "Unknown"
      },
      {
        name: "Kite",
        role: "Contract Hunter",
        description: "Ging's former apprentice and a skilled user of Crazy Slots.",
        image: "https://static.wikia.nocookie.net/hunterxhunter/images/c/c9/Kite_Part_II.png",
        bio: "Kite was a Double-Star Contract Hunter and the man who first told Gon about his father, Ging. He was a dedicated researcher of biological diversity and a formidable warrior. Kite's Nen ability, 'Crazy Slots', allowed him to conjure a sentient clown that would randomly select one of nine weapons, ranging from a scythe to a carbine. Regardless of the weapon, Kite was required to use it before it would disappear. His tragic death at the hands of Neferpitou served as the psychological breaking point for Gon, leading to the series' most intense confrontation.",
        abilities: ["Crazy Slots (Conjuration)", "Sentient Weapon Randomization", "Expert Biological Research", "Master Swordsmanship"],
        affiliation: "Hunter Association / Kite's Research Team",
        status: "Deceased (Reborn as a Chimera Ant)",
        origin: "Unknown"
      },
      {
        name: "Knuckle Bine",
        role: "Beast Hunter / UMA Specialist",
        description: "A tough-looking but soft-hearted Hunter who specializes in Nen-based debt.",
        image: "https://static.wikia.nocookie.net/hunterxhunter/images/c/c1/Knuckle_Bine_Part_II.png",
        bio: "Knuckle Bine is an apprentice to Morel and a participant in the Chimera Ant extermination mission. Despite his delinquent appearance and aggressive combat style, he is a deeply compassionate man who often helps stray animals. His unique ability, 'A.P.R. (All-or-Nothing)', allows him to lend aura to his opponents through physical strikes. The debt then accrues interest over time, eventually forcing the opponent into 'Zetsu' (Nen bankruptcy) once the debt exceeds their remaining aura capacity. Knuckle's combat style is a perfect blend of high-speed mathematics and raw endurance.",
        abilities: ["A.P.R. / Hakoware (Emission / Manipulation)", "Aura Interest Accrual", "Superior Stamina & Physical Speed", "Exceptional Animal Empathy"],
        affiliation: "Hunter Association / Morel's Team",
        status: "Active",
        origin: "Unknown"
      },
      {
        name: "Shoot McMahon",
        role: "UMA Hunter",
        description: "Knuckle's partner who overcomes his crippling anxiety through battle.",
        image: "https://static.wikia.nocookie.net/hunterxhunter/images/d/df/Shoot_McMahon_Part_II.png",
        bio: "Shoot McMahon is a UMA Hunter and a key member of the Chimera Ant extermination squad. He was initially characterized by a severe lack of confidence and overwhelming fear, often hesitating to take risks in combat. However, during the palace invasion, Shoot found the courage to push past his limits, demonstrating incredible aerial maneuverability. His ability, 'Hotel Rafflesia', allows him to shrink and store parts of his opponent's body (or their entire being) inside a floating cage after dealing sufficient damage, requiring him to maintain a state of intense focus.",
        abilities: ["Hotel Rafflesia (Conjuration / Manipulation)", "Floating Hands Control", "Aerial Combat Mastery", "Strategic Tactical Placement"],
        affiliation: "Hunter Association / Morel's Team",
        status: "Active",
        origin: "Unknown"
      },
      {
        name: "Morel Mackernasey",
        role: "Sea Hunter / Strategic Leader",
        description: "A veteran Hunter who uses his giant pipe to manipulate smoke.",
        image: "https://static.wikia.nocookie.net/hunterxhunter/images/c/c7/Morel_Mackernasey_Part_II.png",
        bio: "Morel Mackernasey is a veteran Sea Hunter and a foundational figure in the Hunter Association's leadership. Known for his immense lung capacity and calm tactical mind, Morel is a master of smoke manipulation. By exhaling through his signature giant pipe, he can create 'Deep Purple'—an army of smoke soldiers that can be programmed to perform complex tasks. Morel prides himself on his ability to win battles of attrition, often outlasting opponents through superior aura management and psychological warfare. He served as the primary strategist during the assault on East Gorteau.",
        abilities: ["Deep Purple (Manipulation / Transmutation)", "Smoke Warriors & Jail", "Superhuman Lung Capacity", "Expert Strategic Planning"],
        affiliation: "Hunter Association / Chimera Ant Extermination Team",
        status: "Active",
        origin: "Unknown"
      },
      {
        name: "Knov",
        role: "Hunter / Infiltration Specialist",
        description: "A highly professional Hunter who uses alternate dimensions for logistics.",
        image: "https://static.wikia.nocookie.net/hunterxhunter/images/f/f0/Knov_Part_II.png",
        bio: "Knov is a seasoned Hunter and a close associate of Chairman Netero. He is a man of clinical professionalism, specializing in infiltration and logistics. His Nen ability, 'Hide and Seek (4th-Dimensional Mansion)', allows him to create portals to a multi-room dimension where he can store equipment or transport allies safely across long distances. Knov's contribution to the Chimera Ant mission was vital for the team's mobility, though the overwhelming pressure of seeing the Royal Guard's aura caused him to suffer a severe mental breakdown, demonstrating the psychological horrors of high-level Nen combat.",
        abilities: ["Hide and Seek (Conjuration / Emission)", "4th-Dimensional Mansion", "Scream (Portal-Based Assassination)", "Advanced Long-Distance Teleportation"],
        affiliation: "Hunter Association / Chimera Ant Extermination Team",
        status: "Active (Retired from Frontline)",
        origin: "Unknown"
      },
      {
        name: "Palm Siberia",
        role: "Beast Hunter / Chimera Ant Hybrid",
        description: "Knov's apprentice who underwent a terrifying transformation.",
        image: "https://static.wikia.nocookie.net/hunterxhunter/images/b/be/Palm_Siberia_Part_II.png",
        bio: "Palm Siberia was initially Knov's erratic and obsessive apprentice, possessing a unique precognitive ability called 'Wink Blue'. After being captured and experimented on by the Chimera Ants, she was reborn as an ant-human hybrid. This transformation stabilized her psyche and enhanced her combat potential, allowing her to manifest 'Black Widow'—a suit of armor made from her own fast-growing hair. Palm's dual nature as a former Hunter and a Chimera Ant makes her a unique bridge between the two species, combining her original loyalty with newfound physical power.",
        abilities: ["Wink Blue (Specialization)", "Black Widow (Enhancement)", "Hair-Based Armor & Manipulation", "Advanced Aura Sensing"],
        affiliation: "Hunter Association / Kite's Research Team (Formerly)",
        status: "Active (Chimera Ant Hybrid)",
        origin: "Unknown"
      },
      {
        name: "Feitan Portor",
        role: "Phantom Troupe #2 / Interrogator",
        description: "The Troupe's ruthless interrogator with a lethal sun-based ability.",
        image: "https://static.wikia.nocookie.net/hunterxhunter/images/e/ed/Feitan_Portor_Part_II.png",
        bio: "Feitan Portor is a core member of the Phantom Troupe and its primary interrogator. He is a small, soft-spoken individual who speaks in broken sentences when agitated, but possesses a terrifying capacity for cruelty. Feitan is a master of Transmutation and Emission, with his signature ability 'Pain Packer'. This allows him to transmute the pain he has received into a miniature sun called 'Rising Sun', which incinerates everything in a wide radius. His speed and swordsmanship are among the best in the Troupe, making him a lethal threat in both individual duels and large-scale massacres.",
        abilities: ["Pain Packer (Transmutation / Emission)", "Rising Sun (Heat Radiation)", "High-Speed Swordsmanship", "Master of Psychological Torture"],
        affiliation: "Phantom Troupe (#2)",
        status: "Active",
        origin: "Meteor City"
      },
      {
        name: "Phinks Magcub",
        role: "Phantom Troupe #5 / Combatant",
        description: "A physically powerful combatant who uses a rotating arm technique.",
        image: "https://static.wikia.nocookie.net/hunterxhunter/images/1/1a/Phinks_Magcub_Part_II.png",
        bio: "Phinks Magcub is one of the most physically imposing members of the Phantom Troupe. He is a straightforward and often hot-tempered warrior who values the Troupe's unity and loyalty above all else. Phinks is an Enhancer whose primary ability, 'Ripper Cyclotron', allows him to increase the power of his punches by rotating his arm in a clockwise direction. The more rotations he performs, the more devastating the impact, capable of shattering heavy armor and overwhelming most Nen-based defenses. He frequently partners with Feitan, providing the raw physical force for the Troupe's frontlines.",
        abilities: ["Ripper Cyclotron (Enhancement)", "Arm Rotation Power Scaling", "Superhuman Physical Strength", "Master Hand-to-Hand Combat"],
        affiliation: "Phantom Troupe (#5)",
        status: "Active",
        origin: "Meteor City"
      },
      {
        name: "Machi Komacine",
        role: "Phantom Troupe #3 / Support",
        description: "A cold and intuitive member who uses Nen-infused threads.",
        image: "https://static.wikia.nocookie.net/hunterxhunter/images/6/65/Machi_Komacine_Part_II.png",
        bio: "Machi Komacine is one of the original members of the Phantom Troupe from Meteor City. She is a stoic and highly intuitive individual, often relying on her 'hunches' which Chrollo deeply trusts. Machi is a Transmuter who shapes her aura into incredibly thin, durable, and versatile threads. These 'Nen Stiches' can be used for everything from strangling opponents and controlling people like puppets to surgically reattaching severed limbs with perfect precision. Despite her cold exterior, she is fiercely loyal to the Troupe and its leader, often acting as a silent protector of its members.",
        abilities: ["Nen Stitches (Transmutation)", "Thread Manipulation & Trapping", "Master Surgical Repair", "Exceptional Intuition & Speed"],
        affiliation: "Phantom Troupe (#3)",
        status: "Active",
        origin: "Meteor City"
      },
      {
        name: "Uvogin",
        role: "Phantom Troupe #11 / Vanguard",
        description: "The strongest member of the Troupe in terms of raw physical power.",
        image: "https://static.wikia.nocookie.net/hunterxhunter/images/1/14/Uvogin_Part_II.png",
        bio: "Uvogin was the physically strongest member of the Phantom Troupe and its primary vanguard. He was a pure Enhancer who lived for the thrill of battle, finding joy in overwhelming his opponents with raw strength. His goal was to make his fist as powerful as a nuclear warhead, an ambition reflected in his 'Big Bang Impact'—a punch infused with a massive amount of aura. Uvogin was practically immune to standard weaponry and possessed a roar that could rupture the eardrums of those nearby. He died with a smile on his face, refusing to betray the location of his fellow Troupe members to Kurapika.",
        abilities: ["Big Bang Impact (Enhancement)", "Sonic Roar (Emission)", "Indestructible Physical Frame", "Master of Raw Aura Release"],
        affiliation: "Phantom Troupe (#11)",
        status: "Deceased (KIA)",
        origin: "Meteor City"
      },
      {
        name: "Pakunoda",
        role: "Phantom Troupe #9 / Intelligence",
        description: "An original member whose ability allows for memory extraction.",
        image: "https://static.wikia.nocookie.net/hunterxhunter/images/4/41/Pakunoda_Part_II.png",
        bio: "Pakunoda was one of the founding members of the Phantom Troupe and played a vital role as its intelligence gatherer. She was a tall, sophisticated woman with a calm demeanor and absolute loyalty to Chrollo. Her Nen ability allowed her to read the memories of anyone she touched by asking them a specific question. She could also manifest these memories as 'Memory Bombs'—Nen bullets that, when fired into the minds of her fellow Troupe members, would share the gathered information. Pakunoda eventually sacrificed her life to convey the truth about Kurapika and Chrollo's situation to the other Spiders.",
        abilities: ["Psychometry (Specialization)", "Memory Bomb Extraction & Sharing", "Advanced Interrogation", "Expert Firearms Proficiency"],
        affiliation: "Phantom Troupe (#9)",
        status: "Deceased (Died of Judgment Chain)",
        origin: "Meteor City"
      },
    ],
  },
  {
    id: "20",
    title: "Naruto",
    description: "Naruto Uzumaki seeks recognition from his peers and dreams of becoming the Hokage. Deep inside him is the power of a Nine-Tailed Fox, which he must learn to harness.",
    categories: ["Action", "Adventure", "Fantasy"],
    posterImage: "/assets/naruto/1.jpg",
    trailerUrl: "https://www.youtube.com/embed/-G9BqkgZXRA?autoplay=1&mute=1",
    openings: [
      { title: "Opening 4: GO!!!", url: "https://www.youtube.com/embed/pDq52tU53iQ?autoplay=1&mute=1" },
      { title: "Opening 16: Silhouette", url: "https://www.youtube.com/embed/XpYYBEdxUms?autoplay=1&mute=1" }
    ],
    previews: [
      "/assets/naruto/2.jpg",
      "/assets/naruto/3.jpg",
      "/assets/naruto/4.jpg",
    ],
    characters: [
      {
        name: "Naruto Uzumaki",
        role: "7th Hokage / Jinchuriki",
        description: "The boy who once carried a demon, now a hero who carries the world's hopes.",
        image: "https://static.wikia.nocookie.net/naruto/images/0/09/Naruto_Uzumaki.png",
        bio: "Naruto Uzumaki is the primary protagonist of the Naruto series. Born with the Nine-Tailed Fox sealed within him, he was shunned by the villagers of Konoha for most of his youth. Despite this, Naruto's unbreakable spirit and dream of becoming Hokage led him to form deep bonds and eventually earn the respect of the entire world. His journey is defined by the 'Will of Fire' and his unique ability to understand and reach the hearts of even his greatest enemies. As the Seventh Hokage, he stands as a symbol of unity and peace for the shinobi world."
      },
      {
        name: "Sasuke Uchiha",
        role: "Rival / Shadow Hokage",
        description: "The last surviving Uchiha who found redemption in the shadows.",
        image: "https://static.wikia.nocookie.net/naruto/images/2/21/Sasuke_Uchiha.png",
        bio: "Sasuke Uchiha is the sole survivor of the Uchiha clan massacre. Driven by a consumed desire for vengeance against his brother Itachi, he chose a path of darkness and power. After learning the truth of his brother's sacrifice and being redeemed by his lifelong rival Naruto, Sasuke chose to protect the village from the shadows. As the 'Supporting Kage', he travels the world investigating threats that the light of the village cannot reach, utilizing his Rinnegan and Sharingan to ensure the peace Naruto built remains secure."
      },
      {
        name: "Sakura Haruno",
        role: "Medical Ninja / Team 7",
        description: "A kunoichi of incredible strength and medical expertise who bridged the gap between legends.",
        image: "https://static.wikia.nocookie.net/naruto/images/6/64/Sakura_Haruno.png",
        bio: "Sakura Haruno is a member of Team 7 and a student of the Fifth Hokage, Tsunade. While initially overshadowed by Naruto and Sasuke, Sakura developed into one of the world's greatest medical ninjas and a powerhouse in her own right. Her mastery over chakra control allows her to deliver devastating physical blows and perform high-level regenerative ninjutsu. She is the emotional glue of Team 7, having survived the pain of her teammates' departures to become a legendary hero and the head of Konoha's medical department."
      },
      {
        name: "Kakashi Hatake",
        role: "The Copy Ninja / 6th Hokage",
        description: "The legendary mentor whose eye has seen a thousand jutsu and a lifetime of tragedy.",
        image: "https://static.wikia.nocookie.net/naruto/images/2/27/Kakashi_Hatake.png",
        bio: "Kakashi Hatake is the leader of Team 7 and the Sixth Hokage. Known as the 'Copy Ninja' for his mastery of over a thousand techniques via his Sharingan, Kakashi is a combat genius with a calm and detached exterior. Beneath his mask lies a man who has lost almost everyone he ever loved, yet remains dedicated to the safety of the village and the growth of his students. He embodies the essence of a true shinobi—quietly competent, fiercely loyal, and always prepared for the worst."
      },
      {
        name: "Itachi Uchiha",
        role: "The Martyr / Rogue Ninja",
        description: "A man who slaughtered his own clan to save the world from a greater catastrophe.",
        image: "https://static.wikia.nocookie.net/naruto/images/b/bb/Itachi_Uchiha.png",
        bio: "Itachi Uchiha is arguably the most tragic figure in shinobi history. A prodigy who loved his village and his brother Sasuke above all else, he was forced to choose between his clan and the survival of the world. Choosing the latter, he massacred the Uchiha to prevent a civil war, branding himself a traitor and joining the Akatsuki to monitor them from within. His entire life was a series of sacrifices made in the shadows, ensuring that Sasuke would stay alive and eventually become the hero Konoha needed."
      },
      {
        name: "Gaara",
        role: "5th Kazekage",
        description: "The former monster of the sand who became its greatest protector.",
        image: "https://static.wikia.nocookie.net/naruto/images/0/0f/Gaara.png",
        bio: "Gaara is the Fifth Kazekage of Sunagakure. Once a cold-blooded killer who viewed his own existence as a curse, he was changed by his encounter with Naruto, who shared a similar burden as a jinchuriki. Gaara's transformation from a source of terror to a beloved leader is one of the most remarkable redemption arcs in the series. He absolute defense and mastery over sand make him a formidable warrior, but his true strength lies in his dedication to his village and his fellow Kage."
      },
      {
        name: "Jiraiya",
        role: "The Toad Sage / Legendary Sanin",
        description: "The eccentric mentor who traveled the world seeking the child of prophecy.",
        image: "https://static.wikia.nocookie.net/naruto/images/1/1e/Jiraiya.png",
        bio: "Jiraiya was one of the Legendary Sannin and the mentor to some of history's most powerful shinobi, including Naruto and the Fourth Hokage. A master of toad-based senjutsu and a world-renowned author, he spent his life traveling to uncover the secrets of the world and find the individual who would bring peace. Despite his perverted antics, Jiraiya was a man of immense depth and wisdom, whose final sacrifice ensured that Naruto would have the knowledge needed to defeat Pain and save the village."
      },
      {
        name: "Orochimaru",
        role: "The Snake Sannin / Immortal Seeker",
        description: "A man who abandoned his humanity in the pursuit of absolute knowledge and immortality.",
        image: "https://static.wikia.nocookie.net/naruto/images/1/16/Orochimaru.png",
        bio: "Orochimaru is one of the Legendary Sannin whose obsession with mortality led him down a dark path of forbidden experimentation. Seeking to master every jutsu in existence, he developed techniques for body switching and immortality. He is a master of manipulation and snake-based combat, having served as a primary antagonist for much of the series. However, his eventual shift toward a more observational role in the later years reflects a complex character who views the world as his personal laboratory."
      },
      {
        name: "Hinata Hyūga",
        role: "The Byakugan Princess",
        description: "A shy heiress who found her strength through unwavering devotion and the 'Will of Fire'.",
        image: "https://static.wikia.nocookie.net/naruto/images/9/97/Hinata_Hyuga.png",
        bio: "Hinata Hyūga is the former heiress of the Hyūga clan. Initially perceived as too weak for leadership, she found inspiration in Naruto's 'Never Give Up' attitude. Her journey is one of quiet but immense courage, developing her Gentle Fist style and eventually standing against the most powerful threats to protect those she loves. Her unshakable bond with Naruto eventually led to them building a family together, with Hinata serving as a pillar of strength and kindness for the next generation."
      },
      {
        name: "Pain (Nagato)",
        role: "Leader of Akatsuki / God",
        description: "The seeker of peace through absolute pain and destruction.",
        image: "https://static.wikia.nocookie.net/naruto/images/e/e0/Pain.png",
        bio: "Pain (Nagato) was the titular leader of the Akatsuki and the wielder of the Rinnegan. Driven by the trauma of war and the loss of his friend Yahiko, Nagato aimed to bring peace to the world by inflicting so much pain that humanity would be forced to stop fighting. Controlling the Six Paths of Pain from the shadows, he decimated Konoha before being reached by Naruto's empathy. His final act of resurrection showed a man who had never truly lost his desire for a peaceful world, just the path to reach it."
      }
    ],
  },
  {
    id: "cowboy-bebop",
    title: "Cowboy Bebop",
    description: "The Bebop crew is just trying to make a buck. This motley lot of intergalactic loners teams up to track down fugitives and turn them in for cold hard cash.",
    categories: ["Action", "Adventure", "Sci-Fi"],
    posterImage: "/assets/cowboy-bebop/1.jpg",
    trailerUrl: "https://www.youtube.com/embed/OhNwckCLzis?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: Tank!", url: "https://www.youtube.com/embed/RIW_Kx6XoG8?autoplay=1&mute=1" }
    ],
    previews: [
      "/assets/cowboy-bebop/2.jpg",
      "/assets/cowboy-bebop/3.jpg",
      "/assets/cowboy-bebop/4.jpg",
    ],
    characters: cowboyBebopCharacters,
  },
  {
    id: "dragon-ball-z",
    title: "Dragon Ball Z",
    description: "Five years after the events of Dragon Ball, Goku is now a young adult and father to his son Gohan. New threats emerge from space, revealing Goku's true heritage.",
    categories: ["Action", "Adventure", "Fantasy"],
    posterImage: "/assets/dragon-ball-z/1.jpg",
    trailerUrl: "https://www.youtube.com/embed/sxufB6DxXk0?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: Cha-La Head-Cha-La", url: "https://www.youtube.com/embed/GHnfX1Rm39w?autoplay=1&mute=1" }
    ],
    previews: [
      "/assets/dragon-ball-z/2.jpg",
      "/assets/dragon-ball-z/3.jpg",
      "/assets/dragon-ball-z/4.jpg",
    ],
    characters: [
      {
        name: "Son Goku",
        role: "Saiyan Legend / Earth's Protector",
        description: "The central hero of the series. A Saiyan born on Earth who constantly pushes his limits.",
        image: "https://static.wikia.nocookie.net/dragonball/images/5/5b/Goku_Lineart.png",
        bio: "Son Goku, born Kakarot, is the primary protagonist of the Dragon Ball saga. Originally sent to Earth to conquer it, a childhood head injury changed his nature from aggressive to kind-hearted. Goku is a martial arts prodigy whose life is defined by the pursuit of strength and the protection of his adopted home. From the legendary first transformation into a Super Saiyan on Namek to mastering the powers of the gods, Goku's journey is the cornerstone of modern shonen, embodying pure-hearted determination and an unbreakable spirit.",
        abilities: ["Kamehameha", "Spirit Bomb", "Instant Transmission", "Kaio-ken", "Super Saiyan Levels (1-3)"],
        affiliation: "Z-Fighters",
        status: "Active",
        origin: "Planet Vegeta"
      },
      {
        name: "Vegeta",
        role: "Saiyan Prince / Redemption Warrior",
        description: "The proud prince of the Saiyan race. Initially a villain, he becomes Goku's greatest rival.",
        image: "https://static.wikia.nocookie.net/dragonball/images/c/c2/Vegeta_Lineart.png",
        bio: "Vegeta is the Prince of the fallen Saiyan race. Initially arriving on Earth as a ruthless conqueror, his rivalry with Goku eventually led him down the path of redemption. Vegeta's character arc is defined by his struggle to balance his immense Saiyan pride with his developing love for his family and his sense of duty as a protector of Earth. He is a tactician of the highest order, often utilizing cold logic and overwhelming force to overcome his enemies, while constantly striving to surpass Goku's power.",
        abilities: ["Galick Gun", "Big Bang Attack", "Final Flash", "Lucora Gun", "Super Saiyan Levels (1-2)"],
        affiliation: "Z-Fighters / Saiyan Royal Family",
        status: "Active",
        origin: "Planet Vegeta"
      },
      {
        name: "Son Gohan",
        role: "The Scholar Warrior / Ultimate Potential",
        description: "Goku's eldest son who possess hidden potential that surpasses his father.",
        image: "https://static.wikia.nocookie.net/dragonball/images/3/3b/Gohan_Lineart.png",
        bio: "Son Gohan is the first hybrid Saiyan-human and the eldest son of Goku. Unlike his father, Gohan does not enjoy fighting for its own sake, preferring a life of peace and academic pursuit. However, when pushed to the limit, he can tap into a well of hidden potential that often surpasses even the strongest fighters in the universe. His crowning moment came during the Cell Games, where he was the first to achieve Super Saiyan 2, obliterating the biological menace Cell with a legendary one-handed Kamehameha.",
        abilities: ["Masenko", "Kamehameha", "Ultimate Form", "High-Speed Combat", "Super Saiyan 2"],
        affiliation: "Z-Fighters",
        status: "Active",
        origin: "Earth"
      },
      {
        name: "Frieza",
        role: "Galactic Emperor / The Golden Tyrant",
        description: "The cruel emperor responsible for the destruction of Planet Vegeta.",
        image: "https://static.wikia.nocookie.net/dragonball/images/c/cc/Frieza_Lineart.png",
        bio: "Frieza is the undisputed emperor of the Seventh Universe and the most feared tyrant in the galaxy. He is responsible for the extinction of the Saiyan race, an act he committed out of fear of the legendary Super Saiyan. Frieza is characterized by his extreme arrogance, refined speech, and utter lack of empathy. His battle with Goku on Planet Namek is the longest in anime history, showcasing his terrifying ability to transform and his absolute refusal to accept defeat.",
        abilities: ["Death Beam", "Death Ball", "Telekinesis", "Bio-Suit Transformations", "Survive in Vacuum"],
        affiliation: "Frieza Force (Lead)",
        status: "Deceased (KIA) / Reincarnated",
        origin: "Unknown (Frieza Race Home World)"
      },
      {
        name: "Future Trunks",
        role: "The Survivor / Hope from the Future",
        description: "The son of Vegeta who traveled back in time to prevent the android apocalypse.",
        image: "https://static.wikia.nocookie.net/dragonball/images/5/5e/Trunks_Future_Lineart.png",
        bio: "Trunks is the hybrid son of Vegeta and Bulma from an alternate, apocalyptic future. Raised in a world ravaged by the Androids, he traveled back in time to provide Goku with the medicine that would save his life and warn the Z-Fighters of the coming threat. Carrying a broadsword and the weight of a dying timeline, Trunks is a pragmatic and determined warrior who lacks the often reckless pride of his father, making him one of the most reliable and beloved heroes in the series.",
        abilities: ["Burning Attack", "Shining Sword Attack", "Masenko", "Finish Buster", "Super Saiyan"],
        affiliation: "Z-Fighters / Capsule Corp",
        status: "Active (Future Timeline)",
        origin: "Earth (Future)"
      },
      {
        name: "Piccolo",
        role: "Namekian Master / Sage Warrior",
        description: "The former Demon King who became Earth's wisest protector and Gohan's mentor.",
        image: "https://static.wikia.nocookie.net/dragonball/images/d/d3/Piccolo_Lineart.png",
        bio: "Piccolo is the Namekian reincarnation of the Demon King Piccolo. Initially Goku's greatest rival, he underwent a profound transformation through his bond with Son Gohan, whom he raised and trained. Piccolo is the strategic heart of the Z-Fighters, possessing a brilliant tactical mind and unique Namekian abilities like regeneration and limb extension. His fusion with Nail and later Kami restored his full potential, making him a pillar of wisdom and strength who often serves as the last line of defense.",
        abilities: ["Special Beam Cannon", "Hellzone Grenade", "Light Grenade", "Regeneration", "Great Namekian Form"],
        affiliation: "Z-Fighters / Namekian Race",
        status: "Active",
        origin: "Namek / Earth"
      },
      {
        name: "Krillin",
        role: "Earth's Bravest / Martial Arts Master",
        description: "Goku's lifelong best friend and arguably the strongest human in the universe.",
        image: "https://static.wikia.nocookie.net/dragonball/images/8/87/Krillin_Lineart_Z.png",
        bio: "Krillin started as Goku's rival at the Turtle School under Master Roshi, but quickly became his most trusted companion. Despite being frequently outmatched by extraterrestrial threats, Krillin's courage never wavered. He is a master of technique, having invented the devastating Destructo Disc. Throughout the series, he has participated in every major conflict, demonstrating that a human's spirit can stand tall even amongst gods and monsters. His eventual marriage to Android 18 and his role as a father have grounded him as the series' most relatable hero.",
        abilities: ["Destructo Disc", "Solar Flare", "Kamehameha", "Scatter Kamehameha", "Diffusion Blast"],
        affiliation: "Z-Fighters / Turtle School",
        status: "Active",
        origin: "Earth"
      },
      {
        name: "Cell",
        role: "The Perfect Being / Biological Terror",
        description: "The ultimate lifeform created by Dr. Gero, containing the DNA of the greatest fighters.",
        image: "https://static.wikia.nocookie.net/dragonball/images/e/e5/Cell_Perfect_Lineart.png",
        bio: "Cell is the pinnacle of Dr. Gero's genetic engineering—a bio-android designed to be the perfect warrior. Composed of cells from Goku, Vegeta, Piccolo, and Frieza, he possesses the best traits of each, including Saiyan battle lust and Namekian regeneration. His quest for perfection involved absorbing Androids 17 and 18, leading to his ultimate form. Cell is defined by his sophisticated arrogance and his desire to see his perfection acknowledged, only to be undone by the latent power of Gohan.",
        abilities: ["Perfect Kamehameha", "Solar Kamehameha", "Special Beam Cannon", "Regeneration", "Energy Absorption"],
        affiliation: "Red Ribbon Army (Android)",
        status: "Deceased (KIA)",
        origin: "Earth (Laboratory)"
      },
      {
        name: "Majin Buu",
        role: "Ancient Chaos / The Pink Menace",
        description: "A creature of pure magic and destruction who has existed since time immemorial.",
        image: "https://static.wikia.nocookie.net/dragonball/images/7/7b/Majin_Buu_Good_Lineart.png",
        bio: "Majin Buu is a force of primordial chaos summoned by the wizard Bibidi. Capable of near-instant regeneration, transmuting enemies into candy, and absorbing other beings to gain their power, Buu is the most unpredictable threat the Z-Fighters ever faced. His various forms—from the childlike Fat Buu to the sociopathic Super Buu and the purely evil Kid Buu—represent different facets of his magical nature. His eventual redemption through his friendship with Mr. Satan allowed his 'Good' half to remain on Earth as a powerful ally.",
        abilities: ["Candy Beam", "Innocent Cannon", "Regeneration", "Absorption", "Body Manipulation"],
        affiliation: "Z-Fighters (Good Buu) / Independent",
        status: "Active (Good Buu) / Reincarnated (Uub)",
        origin: "Unknown (Primordial Entity)"
      },
      {
        name: "Android 18",
        role: "Cyborg Protector / Lethal Beauty",
        description: "A former delinquency turned cyborg who became a member of the Z-Fighters.",
        image: "https://static.wikia.nocookie.net/dragonball/images/c/c8/Android_18_Lineart.png",
        bio: "Android 18, originally a human girl named Lazuli, was kidnapped and enhanced by Dr. Gero to destroy Goku. Possessing infinite energy and a cold, efficient fighting style, she initially terrorized the future. However, her encounter with Krillin on the main timeline led her to reconsider her purpose. She eventually joined the Z-Fighters, marrying Krillin and becoming a protective mother to their daughter, Marron. 18 remains one of the few fighters who can keep pace with the Saiyans.",
        abilities: ["Infinite Energy Supply", "Energy Barrier", "Destructo Disc", "High-Speed Combat"],
        affiliation: "Z-Fighters / Former Red Ribbon Army",
        status: "Active",
        origin: "Earth"
      },
      {
        name: "Android 17",
        role: "Wildlife Ranger / Unlimited Energy",
        description: "The cool-headed cyborg and twin brother of 18 who fights for the preservation of life.",
        image: "https://static.wikia.nocookie.net/dragonball/images/5/50/Android_17_Lineart.png",
        bio: "Android 17, born Lapis, share the same origin as his sister, 18. After the fall of Cell, 17 chose a path of solitude, becoming a wildlife ranger on a remote island. This life of protecting nature honed his skills and allowed him to master his infinite energy reserves. No longer driven by Gero's programming, he has become a pragmatist who values results over flair. His return during the Tournament of Power showcased his incredible growth and strategic brilliance.",
        abilities: ["Infinite Energy Supply", "Android Barrier", "Photon Flash", "Strategic Combat"],
        affiliation: "Z-Fighters / Former Red Ribbon Army",
        status: "Active",
        origin: "Earth"
      },
      {
        name: "Bulma",
        role: "Scientific Genius / The Catalyst",
        description: "The brilliant heiress of Capsule Corp who discovered the Dragon Balls and changed history.",
        image: "https://static.wikia.nocookie.net/dragonball/images/a/a2/Bulma_Lineart_Z.png",
        bio: "Bulma is the daughter of Dr. Brief and the technical genius behind almost every major advancement in the series. She is the one who first met Goku while searching for the Dragon Balls, effectively starting the entire saga. From inventing the Dragon Radar to building a Time Machine, her intellect has saved the world just as many times as any warrior's fist. As the wife of Vegeta, she provides the grounding influence that allowed the Saiyan Prince to find peace on Earth.",
        abilities: ["Genius-Level Intellect", "Dragon Radar Invention", "Time Machine Engineering", "Capsule Technology Mastery"],
        affiliation: "Capsule Corp / Z-Fighters",
        status: "Active",
        origin: "Earth"
      },
      {
        name: "Yamcha",
        role: "The Lone Wolf / Brave Challenger",
        description: "A former desert bandit who became one of Goku's first allies and a Z-Fighter.",
        image: "https://static.wikia.nocookie.net/dragonball/images/3/36/Yamcha_Lineart_Z.png",
        bio: "Yamcha started as a desert bandit, but after meeting Goku and Bulma, he transitioned into a dedicated martial artist and hero. Known for his 'Wolf Fang Fist' and later the 'Spirit Ball', Yamcha was a key member of the original Z-Fighters. Though he was eventually surpassed by extraterrestrial threats, his willingness to stand on the front lines against the likes of the Saiyans and the Androids speaks to his character. In his later years, he balanced his martial arts with a professional baseball career.",
        abilities: ["Wolf Fang Fist", "Spirit Ball", "Kamehameha", "High-Speed Combat"],
        affiliation: "Z-Fighters / Turtle School",
        status: "Active",
        origin: "Earth"
      },
      {
        name: "Tien Shinhan",
        role: "Master of the Crane / Disciplined Warrior",
        description: "A disciplined martial artist who seeks the peak of human strength.",
        image: "https://static.wikia.nocookie.net/dragonball/images/4/4b/Tien_Lineart_Z.png",
        bio: "Tien Shinhan was a top student of the Crane School who initially served as a rival to Goku. His battle at the 22nd World Martial Arts Tournament redefined the series' combat standards. Tien is a man of extreme discipline, having dedicated his life to training alongside his companion Chiaotzu. His 'Tri-Beam' (Kikoho) is one of the most powerful and dangerous techniques in martial arts history, capable of holding back even Semi-Perfect Cell through sheer willpower.",
        abilities: ["Tri-Beam (Kikoho)", "Dodompa", "Solar Flare", "Multi-Form Technique", "Four Witches Technique"],
        affiliation: "Z-Fighters / Crane School",
        status: "Active",
        origin: "Earth"
      },
      {
        name: "Broly (Z)",
        role: "Legendary Super Saiyan / Unstoppable Force",
        description: "The Saiyan of legend whose power is as limitless as his rage.",
        image: "https://static.wikia.nocookie.net/dragonball/images/6/6f/Broly_Z_Lineart.png",
        bio: "The Broly of the original films is a terrifying abnormality of the Saiyan race. Born with a power level of 10,000, he survived the destruction of Planet Vegeta only to be consumed by his own overflowing energy and a deep-seated hatred for Goku. As the 'Legendary Super Saiyan', he is a hulking behemoth of pure destruction who grows stronger the longer he fights. His presence represents a primal, unchecked version of Saiyan power that requires the combined strength of every hero to quell.",
        abilities: ["Gigantic Meteor", "Eraser Cannon", "Blaster Shell", "Legendary Super Saiyan Transformation"],
        affiliation: "Saiyan Army / Independent",
        status: "Deceased (KIA)",
        origin: "Planet Vegeta"
      },
      {
        name: "Master Roshi",
        role: "Turtle Hermit / Grandmaster",
        description: "The legendary teacher of Goku and Krillin, and the inventor of the Kamehameha.",
        image: "https://static.wikia.nocookie.net/dragonball/images/8/87/Master_Roshi_Lineart.png",
        bio: "Master Roshi, also known as the Turtle Hermit, is one of the most significant figures in martial arts history. Having lived for centuries, he possesses a wealth of knowledge and techniques, most notably the Kamehameha wave. Despite his eccentric behavior, Roshi is a man of profound wisdom and tactical brilliance. He laid the foundation for Goku and Krillin's growth, teaching them not just how to fight, but how to live with discipline and honor. His return to the world stage in later years proved that even an old master still has incredible power.",
        abilities: ["Kamehameha", "Mafuba (Evil Containment Wave)", "Afterimage Technique", "Drunken Fist Mastery", "Max Power Form"],
        affiliation: "Turtle School (Founder)",
        status: "Active",
        origin: "Earth"
      },
      {
        name: "Chiaotzu",
        role: "Psychic Warrior / Team Crane",
        description: "Tien's loyal companion with unique psychic abilities and an unbreakable bond.",
        image: "https://static.wikia.nocookie.net/dragonball/images/e/ea/Chiaotzu_Lineart_Z.png",
        bio: "Chiaotzu is a small martial artist who possesses remarkable psychic powers. A former student of the Crane School, he is the inseparable companion of Tien Shinhan. While he often lacks the raw physical power of the other Z-Fighters, his mastery over telekinesis and other mental techniques has proven vital in moments of crisis. His most defining moment was his self-sacrifice against Nappa, a desperate act of loyalty that solidified his place as a hero who will give everything for his friends.",
        abilities: ["Psychic Bind", "Telekinesis", "Dodompa", "Self-Destruction"],
        affiliation: "Z-Fighters / Crane School",
        status: "Active",
        origin: "Earth"
      },
      {
        name: "Raditz",
        role: "Saiyan Invader / Goku's Brother",
        description: "The ruthless Saiyan warrior who revealed Goku's true heritage to the world.",
        image: "https://static.wikia.nocookie.net/dragonball/images/d/df/Raditz_Lineart.png",
        bio: "Raditz was the first Saiyan to arrive on Earth during the Z era, shocking the world by revealing himself as Goku's older brother. Cold, arrogant, and dismissive of anything he deemed weak, Raditz represented the first true cosmic threat to Earth. His arrival forced Goku and Piccolo into an unprecedented alliance, leading to the series' first major sacrifice. Though his time was short, Raditz served as the catalyst that changed the scale of the Dragon Ball universe forever.",
        abilities: ["Double Sunday", "Saturday Crush", "High-Speed Combat", "Ki Manipulation"],
        affiliation: "Frieza Force / Saiyan Army",
        status: "Deceased (KIA)",
        origin: "Planet Vegeta"
      },
      {
        name: "Nappa",
        role: "Saiyan General / Brute Force",
        description: "Vegeta's massive comrade who decimated the Z-Fighters upon arrival.",
        image: "https://static.wikia.nocookie.net/dragonball/images/2/23/Nappa_Lineart.png",
        bio: "Nappa was an elite Saiyan general and the companion of Prince Vegeta during their initial invasion of Earth. A mountain of muscle and raw power, he was responsible for the deaths of several Z-Fighters, demonstrating the terrifying gap in strength between Earth's defenders and the Saiyan race. Nappa is characterized by his ruthless delight in destruction and his absolute subservience to Vegeta. His defeat at the hands of the newly revived Goku marked the turning point in the battle for Earth.",
        abilities: ["Giant Storm", "Bomber DX", "Arm Breaker", "Elite Saiyan Strength"],
        affiliation: "Frieza Force / Saiyan Army",
        status: "Deceased (KIA)",
        origin: "Planet Vegeta"
      },
      {
        name: "Bardock",
        role: "Saiyan Revolutionary / Father of Legends",
        description: "The low-class Saiyan warrior who was the first to stand against Frieza's tyranny.",
        image: "https://static.wikia.nocookie.net/dragonball/images/f/f6/Bardock_Lineart.png",
        bio: "Bardock was a low-class Saiyan warrior and the biological father of Goku. Gifted with the ability to see the future, he witnessed the imminent destruction of his race at the hands of Frieza. Defying the Emperor's legions single-handedly, he made an desperate final stand to change the fate of Planet Vegeta. While he failed to save his world, his rebellion planted the seeds for Frieza's eventual downfall and ensured his son's survival. Bardock remains a symbol of Saiyan resilience and the tragic history from which Earth's greatest protector was born.",
        abilities: ["Final Spirit Cannon", "Tyrant Lancer", "Future Sight", "Oozaru Transformation"],
        affiliation: "Saiyan Army / Independent",
        status: "KIA",
        origin: "Planet Vegeta"
      },
      {
        name: "Dr. Gero (Android 20)",
        role: "Red Ribbon Scientist / Machine Master",
        description: "The vengeful genius behind the Androids and the scourge of the Red Ribbon Army.",
        image: "https://static.wikia.nocookie.net/dragonball/images/6/6e/Dr_Gero_Lineart.png",
        bio: "Dr. Gero was the brilliant but megalomaniacal lead scientist of the Red Ribbon Army. Obsessed with vengeance against Goku for destroying the organization, he spent decades creating the Androids and perfecting his own mechanical body. As Android 20, he possessed the ability to absorb energy through his palms, a technique designed to neutralize the Z-Fighters' most powerful attacks. His legacy of hate birthed the most dangerous technological threats the world has ever known.",
        abilities: ["Energy Absorption", "Genius-Level Intellect", "Cybernetic Enhancement", "Eye Laser"],
        affiliation: "Red Ribbon Army",
        status: "Deceased (KIA)",
        origin: "Earth"
      },
      {
        name: "Captain Ginyu",
        role: "Ginyu Force Leader / Body Swapper",
        description: "The flamboyant and terrifyingly powerful leader of Frieza's elite task force.",
        image: "https://static.wikia.nocookie.net/dragonball/images/7/77/Captain_Ginyu_Lineart.png",
        bio: "Captain Ginyu is the leader of the Ginyu Force, Frieza's premier elite unit. Known for his elaborate group poses and his unwavering loyalty, Ginyu is a warrior of immense power. His most dangerous ability is 'Body Change', allowing him to swap souls with any opponent. He views himself as a connoisseur of strength and style, leading his squad with a unique blend of combat excellence and performance art. His arrival on Namek pushed Goku and his allies to their absolute limits.",
        abilities: ["Body Change", "Milky Cannon", "Ginyu Force Pose Mastery", "High-Level Ki Control"],
        affiliation: "Frieza Force (Ginyu Force)",
        status: "Deceased (KIA) / Reincarnated",
        origin: "Unknown"
      },
      {
        name: "Zarbon",
        role: "Elite General / Monstrous Beauty",
        description: "Frieza's right-hand man who hides a terrifying power beneath a handsome facade.",
        image: "https://static.wikia.nocookie.net/dragonball/images/c/c5/Zarbon_Lineart.png",
        bio: "Zarbon is one of Frieza's top generals and most trusted advisors. Possessing a vanity that matches his lethal skill, he takes great pride in his beauty. However, when pushed to the edge, he can undergo a monstrous transformation that dramatically increases his physical strength at the cost of his looks. This duality makes him one of the most dangerous members of Frieza's inner circle, representing the cold elegance of the empire and the brutal violence beneath.",
        abilities: ["Monster Transformation", "Elegant Blaster", "Ruthless Strike", "Elite Ki Detection"],
        affiliation: "Frieza Force (General)",
        status: "Deceased (KIA)",
        origin: "Unknown"
      },
      {
        name: "Dodoria",
        role: "Brutal Enforcer / General of Frieza",
        description: "The ruthless and heavy-handed enforcer of the Galactic Emperor.",
        image: "https://static.wikia.nocookie.net/dragonball/images/a/a2/Dodoria_Lineart.png",
        bio: "Dodoria is a high-ranking member of Frieza's elite guard and serves as one of the Emperor's primary enforcers. Characterized by his massive, spike-covered frame, he relies on brute force and overwhelming aggression to crush any resistance. He played a key role in the genocide of the Namekian people, carrying out Frieza's orders with savage efficiency. His defeat at the hands of Vegeta on Namek was a significant milestone, marking the beginning of the Saiyan Prince's rebellion.",
        abilities: ["Dodoria Beam", "Dodoria Headbutt", "Crushing Force", "Energy Wave Mastery"],
        affiliation: "Frieza Force (General)",
        status: "Deceased (KIA)",
        origin: "Unknown"
      },
      {
        name: "Son Goten",
        role: "Next Generation Champion / Gifted Youth",
        description: "Goku's youngest son who mastered the Super Saiyan form at an record-breaking age.",
        image: "https://static.wikia.nocookie.net/dragonball/images/4/4b/Son_Goten_Lineart.png",
        bio: "Son Goten is the second son of Goku and Chi-Chi, born after the Cell Games. A near-spitting image of his father as a child, Goten possesses an innate talent for martial arts that allowed him to achieve the Super Saiyan transformation before he even reached double digits. Often found training with his best friend Trunks, he brings a level of youthful energy and optimism to the Z-Fighters. Despite his age, his participation in the battle against Majin Buu—particularly through fusion—proved that the future of Earth's protection is in capable hands.",
        abilities: ["Kamehameha", "Assault Flare", "Fusion Dance (Gotenks)", "Super Saiyan"],
        affiliation: "Z-Fighters",
        status: "Active",
        origin: "Earth"
      }
    ],
  },
  {
    id: "evangelion",
    title: "Neon Genesis Evangelion",
    description: "In 2015, the world stands on the brink of destruction. Humanity's last hope lies in the hands of NERV, a special agency under the UN, and their Evangelions.",
    categories: ["Psychological", "Sci-Fi", "Mecha"],
    posterImage: "/assets/neon-genesis-evangelion/1.jpg",
    trailerUrl: "https://www.youtube.com/embed/nU21rCWkuJw?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: A Cruel Angel's Thesis", url: "https://www.youtube.com/embed/o6wtDPVkKqI?autoplay=1&mute=1" }
    ],
    previews: [
      "/assets/neon-genesis-evangelion/2.jpg",
      "/assets/neon-genesis-evangelion/3.jpg",
      "/assets/neon-genesis-evangelion/4.jpg",
    ],
    characters: [
      {
        name: "Shinji Ikari",
        role: "The Third Child / Eva Unit-01 Pilot",
        description: "The reluctant savior of humanity whose soul is the key to Instrumentality.",
        image: "https://static.wikia.nocookie.net/evangelion/images/3/36/Shinji_Ikari.png",
        bio: "Shinji Ikari is the Third Child and the designated pilot of Evangelion Unit-01. Estranged from his father, Gendo Ikari, Shinji is summoned to Tokyo-3 to pilot the massive bio-machine against the Angels. His journey is defined by deep existential dread, a search for validation, and a struggle with the 'Hedgehog's Dilemma'. Despite his fragility, Shinji's synchronization with Unit-01 allows him to tap into god-like power, often at the cost of his own mental stability.",
        abilities: ["High Synchronization (Unit-01)", "Berserk Protocol", "Progressive Knife Mastery", "Absolute Terror Field Expansion"],
        affiliation: "NERV (Tactical Division)",
        status: "Active (Operational)",
        origin: "Kyoto / Tokyo-3"
      },
      {
        name: "Rei Ayanami",
        role: "The First Child / Eva Unit-00 Pilot",
        description: "An enigmatic enigma; a clone with the soul of an Angel and the face of a memory.",
        image: "https://static.wikia.nocookie.net/evangelion/images/a/ae/Rei_Ayanami_Infobox.png",
        bio: "Rei Ayanami is the First Child and pilot of the prototype Unit-00. Quiet, emotionless, and intensely loyal to Gendo Ikari, her origins are kept secret from all of NERV. She is a clone created from the genetic material of Yui Ikari and the soul of the second Angel, Lilith. Rei's existence is a cycle of replacement, but her growing bond with Shinji leads her to question her purpose and the nature of her own artificial soul.",
        abilities: ["A.T. Field Mastery", "Lance of Longinus Delivery", "Self-Sacrifice Protocol", "Telepathic Resonance"],
        affiliation: "NERV (Technical Division)",
        status: "Operational (Clone Series)",
        origin: "NERV Geofront (Artificial)"
      },
      {
        name: "Asuka Langley Soryu",
        role: "The Second Child / Eva Unit-02 Pilot",
        description: "A brilliant, aggressive prodigy whose fierce pride masks a shattered heart.",
        image: "https://static.wikia.nocookie.net/evangelion/images/e/e6/Asuka_Langley_Soryu.png",
        bio: "Asuka Langley Soryu is the Second Child and the ace pilot of Unit-02. Born in Germany, she was trained specifically for combat from a young age and possesses a university degree at fourteen. Asuka is defined by her fierce competitiveness and her need to be the best to validate her own existence. Her outward arrogance serves as a shield against the trauma of her mother's insanity and suicide, which eventually leads to a crushing mental breakdown when her sync rates fail.",
        abilities: ["Precision Combat Tactics", "Aerial Infiltration", "Dual Progressive Blades", "High Sync Resilience"],
        affiliation: "NERV (Germany / Tokyo-3)",
        status: "Active (Operational)",
        origin: "Germany"
      },
      {
        name: "Misato Katsuragi",
        role: "Operations Director / Tactical Commander",
        description: "The brilliant strategist of NERV and a woman haunted by the Second Impact.",
        image: "https://static.wikia.nocookie.net/evangelion/images/2/23/Misato_Katsuragi.png",
        bio: "Misato Katsuragi is the Head of Tactical Operations at NERV and the guardian of Shinji and Asuka. A survivor of the Second Impact in Antarctica, she bears both a physical scar and the psychological weight of her father's sacrifice. Misato is a genius military mind who specializes in unconventional tactics to defeat the Angels. While she appears cheerful and messy at home, she is driven by a singular, cold determination to avenge her father and stop the Third Impact.",
        abilities: ["Strategic Planning", "Field Command", "Combat Intelligence", "Advanced Firearms Proficiency"],
        affiliation: "NERV (Operations)",
        status: "Active (Operational)",
        origin: "Antarctica / Tokyo-3"
      },
      {
        name: "Gendo Ikari",
        role: "Supreme Commander of NERV",
        description: "The cold, ruthless architect of the Human Instrumentality Project.",
        image: "https://static.wikia.nocookie.net/evangelion/images/3/30/Gendo_Ikari.png",
        bio: "Gendo Ikari is the Supreme Commander of NERV and Shinji's estranged father. He is cold, manipulative, and entirely focused on his ultimate goal: initiating the Third Impact to reunite with his late wife, Yui. Gendo views everyone—including his son and the Eva pilots—as mere tools for his grand design. His absolute secrecy and willingness to defy SEELE make him the series' most complex and terrifying strategist.",
        abilities: ["Total Strategic Control", "Psychological Manipulation", "Advanced Information Access", "Instrumentality Orchestration"],
        affiliation: "NERV (Management) / SEELE",
        status: "Active (Supreme Command)",
        origin: "Kyoto, Japan"
      },
      {
        name: "Ritsuko Akagi",
        role: "Chief Scientist / Technical Head",
        description: "The pragmatic brain of NERV and developer of the MAGI supercomputers.",
        image: "https://static.wikia.nocookie.net/evangelion/images/e/eb/Ritsuko_Akagi.png",
        bio: "Ritsuko Akagi is the Head of the Technical Division and the developer of the Evangelions. She followed in her mother Naoko's footsteps, eventually taking over the maintenance of the MAGI systems. Ritsuko is a cold realist who understands the technical horrors of the Evas more than anyone. Her world is built on logic and science, but her personal life is entangled in a destructive rivalry with her mother's memory and a secret affair with Gendo.",
        abilities: ["Bio-Machine Engineering", "MAGI Maintenance", "Data Analysis", "Genetic Reconstruction"],
        affiliation: "NERV (Technical)",
        status: "Active",
        origin: "Tokyo-3"
      },
      {
        name: "Kaworu Nagisa",
        role: "The Fifth Child / The 17th Angel",
        description: "The Angel of Free Will who brought humanity the message of love and death.",
        image: "https://static.wikia.nocookie.net/evangelion/images/3/34/Kaworu_Nagisa.png",
        bio: "Kaworu Nagisa is the Fifth Child, sent by SEELE to replace Asuka. He is quickly revealed to be the 17th Angel, Tabris. Unlike the other Angels, Kaworu displays a profound and immediate affection for Shinji Ikari, representing the first time Shinji feels truly understood. Kaworu possesses god-like abilities but chooses to let Shinji kill him, believing that humanity—the Lilin—deserve the future more than the Angels.",
        abilities: ["Absolute A.T. Field", "Telekinesis", "Eva Synchronization Control", "Levitation"],
        affiliation: "SEELE / NERV",
        status: "Deceased",
        origin: "SEELE (Artificial)"
      },
      {
        name: "Toji Suzuhara",
        role: "The Fourth Child / Eva Unit-03 Pilot",
        description: "A loyal friend and athlete who was dragged into the nightmare of the Second Impact.",
        image: "https://static.wikia.nocookie.net/evangelion/images/4/4e/Toji_Suzuhara.png",
        bio: "Toji is Shinji's classmate and close friend. Initially hostile to Shinji due to his sister getting injured in an Eva battle, Toji eventually becomes one of Shinji's strongest supporters. He is eventually chosen as the Fourth Child to pilot Unit-03. His piloting career is tragically short, as his unit is infested by the Angel Bardiel, leading to its destruction by Unit-01's Dummy Plug system, a traumatic event that shatters the school group's dynamic.",
        abilities: ["Combat Resilience", "High Athleticism", "Basic Eva Piloting", "Moral Support"],
        affiliation: "NERV (Pilot Candidate)",
        status: "Incapacitated",
        origin: "Osaka / Tokyo-3"
      },
      {
        name: "Kensuke Aida",
        role: "Data Collector / Military Otaku",
        description: "A military enthusiast who observers the apocalypse from his camera lens.",
        image: "https://static.wikia.nocookie.net/evangelion/images/0/05/Kensuke_Aida.png",
        bio: "Kensuke is Shinji and Toji's classmate, known for his obsession with military technology and his constant filming of battles. He desperately wants to be an Eva pilot to escape his mundane life, unaware of the trauma it entails. Kensuke serves as a bridge for Shinji to the 'normal' world, often providing technical context for the NERV operations they witness from afar.",
        abilities: ["Information Gathering", "Military Tech Expertise", "Field Surveillance", "Survival Knowledge"],
        affiliation: "Civillian (Pilot Candidate)",
        status: "Active",
        origin: "Tokyo-3"
      },
      {
        name: "Hikari Horaki",
        role: "Class Representative",
        description: "The bridge between the pilots and regular life; a nurturing soul in a collapsing world.",
        image: "https://static.wikia.nocookie.net/evangelion/images/3/3a/Hikari_Horaki.png",
        bio: "Hikari is the class representative of Class 2-A and a close friend to Asuka. She is a responsible, nurturing girl who takes care of her younger sisters and secretly harbors feelings for Toji Suzuhara. In a world of psychological trauma and bio-warfare, Hikari represents the innocence and normalcy that Shinji and the other pilots are fighting to protect, though even her life is touched by the encroaching tragedy.",
        abilities: ["Social Coordination", "Domestic Management", "Emotional Support", "Crisis Leadership"],
        affiliation: "Civillian",
        status: "Active",
        origin: "Tokyo-3"
      },
      {
        name: "Ryoji Kaji",
        role: "Special Inspector / Triple Agent",
        description: "The charming gardener who unearthed the truth beneath NERV.",
        image: "https://static.wikia.nocookie.net/evangelion/images/5/52/Ryoji_Kaji.png",
        bio: "Ryoji Kaji is a special investigator for NERV and a former lover of Misato Katsuragi. He is a triple agent, playing SEELE, NERV, and the Japanese government against each other to find the 'truth' behind the Second Impact and the Angels. Kaji is a mentor figure to Shinji, teaching him about the complexities of adults and the value of truth. He ultimately sacrifices his life to provide Misato with the final pieces of the puzzle.",
        abilities: ["Espionage Mastery", "Information Discovery", "Social Manipulation", "Botany (Watermelon Cultivation)"],
        affiliation: "NERV / SEELE / Government",
        status: "Deceased",
        origin: "Japan / Germany"
      },
      {
        name: "Maya Ibuki",
        role: "First Lieutenant / Technical Operator",
        description: "The idealistic heart of the technical department.",
        image: "https://static.wikia.nocookie.net/evangelion/images/0/08/Maya_Ibuki.png",
        bio: "Maya Ibuki is a bridge technician at NERV who works closely under Ritsuko Akagi. She is skilled, professional, and often disturbed by the ethical implications of NERV's work (such as the Dummy Plug system). Maya represents the human side of the NERV tech team, struggling to maintain her idealism while managing the data of the apocalypse.",
        abilities: ["Electronic Warfare", "Data Monitoring", "System Troubleshooting", "High-Stress Coordination"],
        affiliation: "NERV (Technical)",
        status: "Active",
        origin: "Tokyo-3"
      },
      {
        name: "Makoto Hyuga",
        role: "First Lieutenant / Operations Operator",
        description: "The reliable operator and loyal assistant to Commander Katsuragi.",
        image: "https://static.wikia.nocookie.net/evangelion/images/4/4c/Makoto_Hyuga.png",
        bio: "Makoto Hyuga is one of the three main computer technicians at NERV HQ. He is exceptionally loyal to Misato Katsuragi, even harboring unrequited feelings for her. Hyuga is known for his cool-headedness and his ability to handle critical operations data under the pressure of Angel attacks. He is a key part of the 'bridge trio' that keeps NERV operational.",
        abilities: ["Strategic Calculation", "Communications Management", "Tactical Support", "High-Speed Data Entry"],
        affiliation: "NERV (Operations)",
        status: "Active",
        origin: "Tokyo-3"
      },
      {
        name: "Shigeru Aoba",
        role: "First Lieutenant / Communications Operator",
        description: "The stoic operator with a signature rock-star silhouette.",
        image: "https://static.wikia.nocookie.net/evangelion/images/f/f6/Shigeru_Aoba.png",
        bio: "Shigeru Aoba is the third member of the bridge trio at NERV. He is often the most stoic and pragmatic of the three, maintaining communications and sensor readouts during combat. In his downtime, he is a lover of rock music and is often seen with his guitar, providing a brief glimpse into the personal lives of the adults who manage the Eva operations.",
        abilities: ["Communication Logistics", "Sensor Array Management", "Technical Support", "Operational Stoicism"],
        affiliation: "NERV (Communications)",
        status: "Active",
        origin: "Tokyo-3"
      },
      {
        name: "Kozo Fuyutsuki",
        role: "Vice-Commander of NERV",
        description: "The conscience of Gendo Ikari and the silent witness to the truth.",
        image: "https://static.wikia.nocookie.net/evangelion/images/b/bc/Kozo_Fuyutsuki.png",
        bio: "Kozo Fuyutsuki is the Vice-Commander of NERV and Gendo's right-hand man. A former professor at Kyoto University, he was once Gendo's teacher and a colleague of Yui Ikari. He joined NERV to keep Gendo's madness in check and to see the fulfillment of Yui's work. Fuyutsuki is one of the few who understands the full extent of the Human Instrumentality Project and serves as the bridge between NERV command and the pilots.",
        abilities: ["Diplomatic Intelligence", "Historical Perspective", "Organizational Oversight", "Advanced Technical Wisdom"],
        affiliation: "NERV (High Command)",
        status: "Active",
        origin: "Kyoto, Japan"
      },
      {
        name: "Yui Ikari",
        role: "Unit-01 Source Soul / Lead Scientist",
        description: "The mother project; her soul remains the shield of her son.",
        image: "https://static.wikia.nocookie.net/evangelion/images/1/1b/Yui_Ikari.png",
        bio: "Yui Ikari was a brilliant bio-engineer and the wife of Gendo Ikari. During a synchronization experiment with Unit-01, she allowed her physical form to be absorbed into the machine, becoming its 'heart'. Her disappearance is the catalyst for the entire series, driving Gendo's obsession and providing Shinji with a protective, albeit horrific, guardian. Yui's plan was for her son to survive the apocalypse, no matter the cost.",
        abilities: ["Unit-01 Core Dominance", "Maternal Resonance", "Advanced Bio-Machine Theory", "Soul Preservation"],
        affiliation: "Gehirn / Evangelion Core",
        status: "Integrated (Unit-01 Core)",
        origin: "Japan (Deceased Physical)"
      },
      {
        name: "Pen Pen",
        role: "Warm-Water Penguin / Roommate",
        description: "The most stable resident of Misato's apartment.",
        image: "https://static.wikia.nocookie.net/evangelion/images/c/c5/Pen_Pen.png",
        bio: "Pen Pen is a genetically modified warm-water penguin that lives in Misato Katsuragi's apartment. He was rescued from a laboratory and now serves as a mascot and constant companion to the household. Pen Pen is surprisingly intelligent, possessing his own custom refrigerator and a keen awareness of the emotional tensions in the apartment. He is the only character who seems to handle the apocalypse with relative ease.",
        abilities: ["Thermal Adaptation", "Social Intuition", "Apartment Security", "Extreme Cuteness"],
        affiliation: "Katsuragi Household",
        status: "Active",
        origin: "NERV Lab"
      },
      {
        name: "Mari Illustrious Makinami",
        role: "Provisional Pilot / Unit-05 & 08",
        description: "The wild card of the Evangelion program who thrives in the chaos of battle.",
        image: "https://static.wikia.nocookie.net/evangelion/images/a/a2/Mari_Illustrious_Makinami.png",
        bio: "Mari is a pilot introduced in the Rebuild series who operates for a mysterious third party before joining Wille. Unlike the other pilots, Mari seems to genuinely enjoy piloting and possesses a dark, aggressive combat style. She is enigmatic about her past and her true motivations, but her ability to unlock the 'Beast Mode' of the Evangelions makes her one of the most dangerous and unpredictable pilots in the world.",
        abilities: ["Eva Beast Mode Activation", "Infiltration Tactics", "High Combat Agility", "Multi-Unit Mastery"],
        affiliation: "Wille / IPEA",
        status: "Active (Operational)",
        origin: "England / Unknown"
      },
      {
        name: "Keel Lorenz",
        role: "SEELE Chairman / Cyborg Mastermind",
        description: "The ancient orchestrator of human extinction.",
        image: "https://static.wikia.nocookie.net/evangelion/images/4/4b/Keel_Lorenz.png",
        bio: "Keel Lorenz is the chairman of the mysterious organization SEELE and the leader of the Human Instrumentality Committee. He is an old man who has replaced much of his body with mechanical parts. Keel believes that humanity's current form is a failure and that the Third Impact is necessary to dissolve all individual souls into a single, unified consciousness. He is the ultimate power behind NERV, guiding civilization toward its inevitable end.",
        abilities: ["Global Influence", "Dead Sea Scrolls Interpretation", "Tactical Omniscience", "Cybernetic Longevity"],
        affiliation: "SEELE (Committee 01)",
        status: "Active (Command)",
        origin: "Germany / Global"
      },
      {
        name: "Naoko Akagi",
        role: "MAGI Developer / Head Scientist",
        description: "The tragic genius who divided her soul into three computers.",
        image: "https://static.wikia.nocookie.net/evangelion/images/f/f6/Naoko_Akagi.png",
        bio: "Naoko Akagi was Ritsuko's mother and the original lead scientist at Gehirn. She developed the MAGI supercomputer system, embedding her own personality as a woman, a scientist, and a mother into the three separate nodes. Her tragic obsession with Gendo Ikari and her professional rivalry with Rei Ayanami led to a horrific double suicide/murder, casting a long shadow over her daughter's life and the binary logic that NERV relies on.",
        abilities: ["Bort Biological Computer Theory", "Artificial Intelligence Design", "System Architecture", "Neuro-Pattern Mapping"],
        affiliation: "Gehirn",
        status: "Deceased",
        origin: "Tokyo-3"
      }
    ],
  },
  {
    id: "code-geass",
    title: "Code Geass",
    description: "In the year 2017, seven years after the war, Japan's resistance groups continue to fight. Lelouch Lamperouge, an exiled Britannian prince, gains the power of Geass.",
    categories: ["Action", "Drama", "Mecha", "Sci-Fi"],
    posterImage: "/assets/code-geass/1.jpg",
    trailerUrl: "https://www.youtube.com/embed/v-AGjx0N24U?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: COLORS", url: "https://www.youtube.com/embed/cZ7zQbM32cg?autoplay=1&mute=1" }
    ],
    previews: [
      "/assets/code-geass/2.jpg",
      "/assets/code-geass/3.jpg",
      "/assets/code-geass/4.jpg",
    ],
    characters: codeGeassCharacters,
  },
  {
    id: "haikyu",
    title: "Haikyu!!",
    description: "Shoyo Hinata, at a young age, became enamored with volleyball. Despite his short height, he's determined to follow in the footsteps of the 'Little Giant'.",
    categories: ["Sports", "Comedy", "Drama"],
    posterImage: "/assets/haikyu/1.jpg",
    trailerUrl: "https://www.youtube.com/embed/JOGp2c7-cKc?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: Imagination", url: "https://www.youtube.com/embed/2---3zWfUC0?autoplay=1&mute=1" }
    ],
    previews: [
      "/assets/haikyu/2.jpg",
      "/assets/haikyu/3.jpg",
      "/assets/haikyu/4.jpg",
    ],
    characters: haikyuCharacters,
  },
  {
    id: "monster",
    title: "Monster",
    description: "Dr. Kenzo Tenma is a brilliant neurosurgeon whose perspective changes when he saves a young boy's life instead of the mayor's. Years later, he discovers the boy has become a monster.",
    categories: ["Mystery", "Psychological", "Thriller"],
    posterImage: "/assets/monster/1.jpg",
    trailerUrl: "https://www.youtube.com/embed/9aS-EgdAq6U?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: Grain", url: "https://www.youtube.com/embed/m0n7W940zWI?autoplay=1&mute=1" }
    ],
    previews: [
      "/assets/monster/2.jpg",
      "/assets/monster/3.jpg",
      "/assets/monster/4.jpg",
    ],
    characters: monsterCharacters,
  },
  {
    id: "jojo",
    title: "JoJo's Bizarre Adventure",
    description: "The story of the Joestar family, who are possessed with intense psychic strength, and the adventures each member encounters throughout their lives.",
    categories: ["Action", "Adventure", "Supernatural"],
    posterImage: "/assets/jojo-bizarre/1.jpg",
    trailerUrl: "https://www.youtube.com/embed/k4mcxk8IZ2Y?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: Sono Chi No Sadame", url: "https://www.youtube.com/embed/RordBk3Ztk4?autoplay=1&mute=1" }
    ],
    previews: [
      "/assets/jojo-bizarre/2.jpg",
      "/assets/jojo-bizarre/3.jpg",
      "/assets/jojo-bizarre/4.jpg",
    ],
    characters: [
      {
        name: "Jotaro Kujo",
        role: "Stardust Crusader / Star Platinum",
        description: "The most iconic JoJo. A tough individual who discovers his 'Stand', Star Platinum.",
        image: "https://static.wikia.nocookie.net/jojo/images/a/a2/Jotaro_SC_Infobox_Anime.png",
        bio: "Jotaro Kujo is the protagonist of Stardust Crusaders and arguably the most recognizable figure in the JoJo saga. Initially appearing as a delinquent, Jotaro's rough exterior hides a heart of gold and a sharp tactical mind. His Stand, Star Platinum, is known for its legendary strength, speed, and precision. During his journey to Egypt to save his mother from DIO, Jotaro discovered the ultimate ability: Star Platinum: The World, allowing him to stop time itself.",
        abilities: ["Star Platinum: The World (Time Stop)", "ORA ORA ORA Barrage", "Enhanced Precision", "Unbreakable Resolve"],
        affiliation: "Joestar Group",
        status: "Active",
        origin: "Japan"
      },
      {
        name: "Giorno Giovanna",
        role: "Gang-Star / Gold Experience",
        description: "The son of DIO who aims to reform the Italian mafia using his life-giving Stand.",
        image: "https://static.wikia.nocookie.net/jojo/images/e/e5/Giorno_Giovanna_Anime.png",
        bio: "Giorno Giovanna is the protagonist of Golden Wind. As the biological son of DIO (possessing Jonathan Joestar's body), he carries both the ambition of the Brandos and the justice of the Joestars. His Stand, Gold Experience, can imbue inanimate objects with life, transforming them into animals or plants. Giorno's resolve is absolute; he seeks to become a 'Gang-Star' to rid the streets of drugs and bring order to the Passione organization.",
        abilities: ["Life Dispenser", "Gold Experience Requiem", "Healing/Flesh Growth", "Recursive Punch"],
        affiliation: "Passione (Team Bucciarati)",
        status: "Active",
        origin: "Italy"
      },
      {
        name: "Bruno Bucciarati",
        role: "Squad Leader / Sticky Fingers",
        description: "The moral compass of the team. He uses Sticky Fingers to create functional zippers.",
        image: "https://static.wikia.nocookie.net/jjba/images/4/4c/Bruno_Bucciarati.png",
        bio: "Bruno Bucciarati is the leader of a squad within Passione. He is a man of deep integrity who deeply cares for the people of Naples. His Stand, Sticky Fingers, allows him to create zippers on any surface, including the human body, for movement or hidden storage. Bucciarati's leadership is what unifies the team, and his willingness to sacrifice himself for his ideals makes him one of the most respected figures in the series.",
        abilities: ["Zipper Portals", "Body Detachment", "Stealth Maneuvers", "Sticky Fingers Barrage"],
        affiliation: "Passione (Team Bucciarati)",
        status: "Active",
        origin: "Naples, Italy"
      },
      {
        name: "Guido Mista",
        role: "Marksman / Sex Pistols",
        description: "An expert gunman who uses six sentient bullets to redirect his shots.",
        image: "https://static.wikia.nocookie.net/jjba/images/8/8b/Guido_Mista.png",
        bio: "Guido Mista is the resident marksman and a man of high superstition (specifically regarding the number 4). His Stand, Sex Pistols, consists of six tiny entities that live within his revolver. They can 'kick' bullets mid-flight, allowing Mista to perform impossible trick shots that defy physics. He is laid-back but incredibly deadly when the pressure is on.",
        abilities: ["Precision Marksmanship", "Bullet Redirection", "Sex Pistols Synergy", "Tactical Reloading"],
        affiliation: "Passione (Team Bucciarati)",
        status: "Active",
        origin: "Italy"
      },
      {
        name: "Diavolo",
        role: "The Boss / King Crimson",
        description: "The mysterious leader of Passione. He uses King Crimson to erase time.",
        image: "https://static.wikia.nocookie.net/jjba/images/f/f7/Diavolo.png",
        bio: "Diavolo is the enigmatic Boss of Passione, whose primary goal is to maintain absolute anonymity by erasing his own past. He possesses a split personality, with his alter-ego Doppio serving as his innocent face. His Stand, King Crimson, has the terrifying ability to 'erase' up to ten seconds of time and see into the future with Epitaph, making him a nearly invincible opponent who can skip over any disadvantage.",
        abilities: ["Time Erasure", "Epitaph (Future Sight)", "Physical Intangibility (During Skip)", "Absolute Anonymity"],
        affiliation: "Passione (Leader)",
        status: "Incapacitated (Infinite Death Loop)",
        origin: "Sardinia, Italy"
      },
      {
        name: "Jonathan Joestar",
        role: "The First JoJo / Hamon",
        description: "The spark that started the bloodline. A true gentleman and master of Hamon.",
        image: "https://static.wikia.nocookie.net/jojo/images/1/1e/Jonathan_Joestar_Profile_Anime.png",
        bio: "Jonathan Joestar is the noble progenitor of the Joestar lineage. Born into a wealthy British family, his life was forever changed by the arrival of his foster brother, Dio Brando. Jonathan's journey took him from a sheltered youth to a master of Hamon (The Ripple), fueled by his unwavering resolve to stop Dio's vampiric reign. His heroic sacrifice atop a burning ship solidified the eternal struggle between the Joestars and the Brandos.",
        abilities: ["Sunlight Yellow Overdrive", "Scarlet Overdrive", "Hamon Mastery", "Indomitable Spirit"],
        affiliation: "Joestar Family",
        status: "Deceased",
        origin: "England, 1888"
      },
      {
        name: "Dio Brando",
        role: "The Vampire / Stone Mask",
        description: "A man who rejected his humanity to seek godhood and dominance.",
        image: "https://static.wikia.nocookie.net/jojo/images/8/87/Dio_Brando_Infobox_Anime.png",
        bio: "Dio Brando is the ultimate secondary protagonist and antagonist of Phantom Blood. Driven by a childhood of poverty and resentment, he infiltrated the Joestar household with the intent to steal their fortune. Upon discovering the power of the Stone Mask, he transformed into a nearly immortal vampire. Dio's charisma, cruelty, and absolute ambition make him a terrifying force whose shadow looms over the world for over a century.",
        abilities: ["Vampiric Immortality", "Space Ripper Stingy Eyes", "Vaporization Freezing", "Superhuman Strength"],
        affiliation: "Brando Bloodline",
        status: "Deceased (Vampire Form)",
        origin: "England, 1888"
      },
      {
        name: "Robert E.O. Speedwagon",
        role: "The Loyal Ally / Speedwagon Foundation",
        description: "A former thug turned absolute ally and founder of the Speedwagon Foundation.",
        image: "https://static.wikia.nocookie.net/jojo/images/0/05/Speedwagon_Anime.png",
        bio: "Robert E.O. Speedwagon started his life on Ogre Street, but his encounter with Jonathan Joestar changed him forever. Recognized for his keen ability to 'smell' the personality of others, he dedicated his life and fortune to supporting the Joestars. He founded the Speedwagon Foundation, an organization that provides technological and medical support to the Joestars across generations, even long after his death.",
        abilities: ["Sharp-Dressed Street Smarts", "Ogre Street Blade Hat", "Tactical Commentary", "Financial Empire Leadership"],
        affiliation: "Speedwagon Foundation",
        status: "Deceased (Old Age)",
        origin: "London, England"
      },
      {
        name: "Joseph Joestar",
        role: "The Predictor / Hamon",
        description: "The most cunning and unpredictable JoJo. A brilliant strategist who uses every trick.",
        image: "https://static.wikia.nocookie.net/jojo/images/b/b5/Joseph_Joestar_Infobox.png",
        bio: "Joseph Joestar is the protagonist of Battle Tendency and the grandson of Jonathan. Unlike his grandfather, Joseph is a trickster who relies on psychological warfare and environment rather than just raw Hamon power. His signature move—predicting his opponent's next line—is a testament to his tactical brilliance. He successfully defeated the Pillar Men, ancient gods of darkness, saving humanity through sheer wit and luck.",
        abilities: ["Hamon Clacker Volley", "Your Next Line Is...", "Tactical Retreat", "Hermit Purple (Later)"],
        affiliation: "Joestar Family",
        status: "Active (Part 4)",
        origin: "New York / Great Britain"
      },
      {
        name: "Caesar Anthonio Zeppeli",
        role: "The Bubble Master / Hamon",
        description: "A proud Italian Hamon user who fought to restore the honor of the Zeppeli name.",
        image: "https://static.wikia.nocookie.net/jojo/images/6/6f/Caesar_Infobox_Anime.png",
        bio: "Caesar Zeppeli is the grandson of Will A. Zeppeli and Joseph's rival turned best friend. Trained under Lisa Lisa in Venice, Caesar's Hamon style is fluid and creative, utilizing soap bubbles concentrated with Ripple energy. His final battle against Wamuu remains one of the most tragic and heroic moments in the series, as he sacrificed himself to provide Joseph with the antidote needed to continue the fight.",
        abilities: ["Bubble Launcher", "Bubble Cutter", "Hamon Concentration", "Noble Sacrifice"],
        affiliation: "Hamon Warriors",
        status: "Deceased",
        origin: "Venice, Italy"
      },
      {
        name: "Kars",
        role: "Ultimate Life Form / Pillar Man",
        description: "The creator of the Stone Mask and the zenith of all biological life.",
        image: "https://static.wikia.nocookie.net/jojo/images/9/91/Kars_Infobox_Anime.png",
        bio: "Kars is the leader of the Pillar Men and the arch-villain of Battle Tendency. For millennia, he sought to overcome the sun, which led him to create the Stone Mask. Upon combining the Red Stone of Aja with the mask, he transcended to the Ultimate Life Form—a being with the DNA of every living thing and the ability to withstand sunlight. He was finally defeated by being exhaled into space, where he eventually stopped thinking.",
        abilities: ["Light Mode (Blades)", "Biological Reconstruction", "Ultimate Hamon Mastery", "Absolute Regeneration"],
        affiliation: "Pillar Men",
        status: "Incapacitated (FROZEN IN SPACE)",
        origin: "Ancient Underground"
      },
      {
        name: "Lisa Lisa",
        role: "Hamon Master / Mentor",
        description: "The mysterious and powerful Hamon teacher of Joseph and Caesar.",
        image: "https://static.wikia.nocookie.net/jojo/images/e/e0/Lisa_Lisa_Anime.png",
        bio: "Lisa Lisa (Elizabeth Joestar) is the biological mother of Joseph and a grandmaster of Hamon. Living on Air Supplena Island, she trained both Joseph and Caesar to face the Pillar Men. Her Hamom style is elegant and lethal, often channeled through her specially made conductive muffler. Despite her cold exterior, she carries the burden of the Joestar tragedy and the duty to protect the Red Stone of Aja.",
        abilities: ["Snake Muffler Hamon", "Ripple Mastery", "Strategic Intelligence", "Ageless Appearance"],
        affiliation: "Hamon Warriors",
        status: "Retired",
        origin: "Italy / England"
      },
      {
        name: "Muhammad Avdol",
        role: "Fortune Teller / Magician's Red",
        description: "The group's moral anchor and fire-wielding guardian of the Stardust Crusaders.",
        image: "https://static.wikia.nocookie.net/jojo/images/f/f6/Avdol_Anime.png",
        bio: "Muhammad Avdol is an Egyptian fortune teller and a close friend of Joseph Joestar. As one of the first Stand users known to the group, his Stand 'Magician's Red' provides devastating offensive power and sensory utility. Avdol is disciplined, knowledgeable, and fiercely loyal, twice sacrificing his safety to protect his comrades. His presence in the team was vital for navigating the dangers of the journey to Cairo.",
        abilities: ["Crossfire Hurricane", "Red Bind", "Fire Manipulation", "Fortune Telling"],
        affiliation: "Stardust Crusaders",
        status: "Deceased",
        origin: "Cairo, Egypt"
      },
      {
        name: "Noriaki Kakyoin",
        role: "Tactical Hero / Hierophant Green",
        description: "A lonely soul who found true friendship in his journey to defeat DIO.",
        image: "https://static.wikia.nocookie.net/jojo/images/2/25/Kakyoin_Anime_Infobox.png",
        bio: "Noriaki Kakyoin was initially an agent of DIO, controlled by a flesh bud. After being saved by Jotaro, he joined the Stardust Crusaders to atone. His Stand, Hierophant Green, is long-ranged and versatile, specializing in unraveling and precision. Kakyoin was the one who finally decrypted the secret of DIO's Stand, a discovery that cost him his life but ultimately allowed Jotaro to emerge victorious.",
        abilities: ["Emerald Splash", "Hierophant Barrier", "Body Control", "Strategic Analysis"],
        affiliation: "Stardust Crusaders",
        status: "Deceased",
        origin: "Japan"
      },
      {
        name: "Jean Pierre Polnareff",
        role: "Noble Swordsman / Silver Chariot",
        description: "A Frenchman driven by chivalry and a quest for vengeance.",
        image: "https://static.wikia.nocookie.net/jojo/images/3/36/Jean_Pierre_Polnareff_Anime.png",
        bio: "Polnareff joined the Stardust Crusaders to track down the man who murdered his sister. Armed with Silver Chariot, a Stand of incredible speed and blade-work, he is a primary frontline fighter. Though often seen as comic relief, Polnareff is a warrior of immense conviction. He survived the encounter with DIO and later returned in Golden Wind as a key figure in the struggle against Diavolo.",
        abilities: ["Sword Precision", "Armored Speed", "Afterimage Creation", "Rapier Barrage"],
        affiliation: "Stardust Crusaders",
        status: "Active (Ghost Spirit)",
        origin: "France"
      },
      {
        name: "Iggy",
        role: "The Sand Spirit / The Fool",
        description: "A Boston Terrier with a bad attitude and a Stand of pure sand.",
        image: "https://static.wikia.nocookie.net/jojo/images/d/df/Iggy_Anime.png",
        bio: "Iggy is a Stand-using dog who was recruited by the Speedwagon Foundation. Initially wanting nothing to do with the mission to defeat DIO, his encounter with Pet Shop forced him to realize his own warrior spirit. His Stand, The Fool, is a shape-shifting mass of sand that can block any attack and fly. His final act of bravery protected Polnareff, proving that even a single stray dog can have the heart of a hero.",
        abilities: ["Sand Shapeshifting", "Aerial Gliding", "Sand Clones", "Enhanced Senses"],
        affiliation: "Stardust Crusaders",
        status: "Deceased",
        origin: "New York, USA"
      },
      {
        name: "DIO",
        role: "Eternal Villain / The World",
        description: "The ultimate evil of the Joestar bloodline, master of the World.",
        image: "https://static.wikia.nocookie.net/jojo/images/f/f6/DIO_Anime.png",
        bio: "After spending a century at the bottom of the ocean, DIO returned by stealing Jonathan Joestar's body. Armed with 'The World', a Stand capable of stopping time, he established a global empire of Stand users to ensure his ultimate dominance. DIO represents the absolute corruption of power and the legacy of the Stone Mask, serving as the final wall the Stardust Crusaders must overcome in Cairo.",
        abilities: ["The World (Time Stop)", "MUDA MUDA Barrage", "High-Intensity Regeneration", "Vampiric Influence"],
        affiliation: "DIO's Empire",
        status: "Deceased",
        origin: "England / Egypt"
      },
      {
        name: "Josuke Higashikata",
        role: "Shining Spirit / Crazy Diamond",
        description: "The kind-hearted JoJo of Morioh with the power to heal and restore.",
        image: "https://static.wikia.nocookie.net/jojo/images/4/4e/Josuke_Higashikata_Anime.png",
        bio: "Josuke is the teenage protagonist of Diamond Is Unbreakable and the illegitimate son of Joseph Joestar. Armed with Crazy Diamond, his Stand can fix anything it touches—except for his own wounds or death. Josuke is fiercely protective of his town, Morioh, and his friends. He manages to find a balance between high-school life and tracking down serial killers, all while maintaining the most iconic hair in the series.",
        abilities: ["Restoration (Healing/Repair)", "Dora Dora Barrage", "Environmental Reassembly", "Billion-Watt Punch"],
        affiliation: "Morioh Stand Users",
        status: "Active",
        origin: "Morioh, Japan"
      },
      {
        name: "Yoshikage Kira",
        role: "The Quiet Killer / Killer Queen",
        description: "A serial killer who just wanted a quiet life, shadowed by a deadly Stand.",
        image: "https://static.wikia.nocookie.net/jojo/images/c/c5/Yoshikage_Kira_AnimeP4.png",
        bio: "Yoshikage Kira is the chilling antagonist of Part 4. He is a normal salaryman by day and a serial killer of women with beautiful hands by night. His Stand, Killer Queen, can turn anything it touches into a bomb, allowing him to erase all evidence of his crimes. His obsession with his 'quiet life' makes him one of the most uniquely motivated and terrifying villains in the franchise.",
        abilities: ["Killer Queen (First Bomb)", "Sheer Heart Attack", "Bites the Dust", "Explosive Touch"],
        affiliation: "Independent",
        status: "Deceased",
        origin: "Morioh, Japan"
      },
      {
        name: "Okuyasu Nijimura",
        role: "Spatial Eraser / The Hand",
        description: "A simple-minded friend with one of the most powerful Stands in existence.",
        image: "https://static.wikia.nocookie.net/jojo/images/a/a9/Okuyasu_Nijimura_Anime.png",
        bio: "Okuyasu is Josuke's best friend and a fellow Morioh resident. Though he often calls himself 'not very smart', his Stand 'The Hand' is absolutely terrifying. It can scrape away the very fabric of space with its right hand, effectively erasing anything from existence or pulling objects instantly toward him. Okuyasu's loyalty to Josuke and his growth into a hero define his journey in Part 4.",
        abilities: ["Space Erasure", "Spatial Teleportation", "Close-Range Combat", "The Hand Strike"],
        affiliation: "Morioh Stand Users",
        status: "Active",
        origin: "Morioh, Japan"
      },
      {
        name: "Rohan Kishibe",
        role: "Manga Creator / Heaven's Door",
        description: "An eccentric manga artist who values reality above all else.",
        image: "https://static.wikia.nocookie.net/jojo/images/2/2a/Rohan_Kishibe_Anime.png",
        bio: "Rohan Kishibe is a world-famous manga artist living in Morioh. His Stand, Heaven's Door, can turn people into 'books', allowing him to read their lives and write new commands into their souls. Rohan is driven by an obsession with finding new experiences to draw, leading him to investigate the supernatural mysteries of Morioh alongside Josuke and the others, often despite his own arrogance.",
        abilities: ["Memory Reading", "Behavioral Rewriting", "Information Extraction", "Artistic Mastery"],
        affiliation: "Independent / Morioh Group",
        status: "Active",
        origin: "Morioh, Japan"
      },
      {
        name: "Jolyne Cujoh",
        role: "Thread of Hope / Stone Free",
        description: "Jotaro's daughter, fighting for survival in a high-security prison.",
        image: "https://static.wikia.nocookie.net/jojo/images/b/b3/Jolyne_SO_Infobox_Anime.png",
        bio: "Jolyne is the protagonist of Stone Ocean and the only female JoJo. Framed for a crime she didn't commit, she is sent to Green Dolphin Street Prison, where she awakens her Stand, Stone Free. Jolyne's journey is one of growth from a resentful daughter to a warrior whose resolve rivals even Jotaro's. Her ability to unravel her body into string allows for incredible mobility and combat creativity.",
        abilities: ["String Manipulation", "Stone Free Punching", "Mobile Webs/Nets", "Wound Stitching"],
        affiliation: "Joestar Family",
        status: "Deceased (Legacy Cycle)",
        origin: "Florida, USA"
      },
      {
        name: "Enrico Pucci",
        role: "The Priest / Whitesnake",
        description: "A servant of DIO obsessed with achieving 'Heaven' through fate.",
        image: "https://static.wikia.nocookie.net/jojo/images/d/df/Enrico_Pucci_Anime.png",
        bio: "Father Enrico Pucci is the main antagonist of Stone Ocean and DIO's most devoted disciple. Pucci believes that man's greatest suffering is fear of the unknown, and seeks to use the Joestar bloodline to unlock a universal 'Heaven' where everyone knows their fate. His Stand, Whitesnake, can steal Stands and memories as discs, evolving eventually into Made in Heaven—a Stand that can accelerate time itself.",
        abilities: ["Whitesnake (Disc Stealing)", "C-Moon (Gravity)", "Made in Heaven (Time Acceleration)", "Strategic Ambush"],
        affiliation: "DIO's Legacy",
        status: "Incapacitated",
        origin: "Florida, USA"
      },
      {
        name: "Ermes Costello",
        role: "Sticker Sage / Kiss",
        description: "Jolyne's closest inmate ally, seeking revenge for her sister.",
        image: "https://static.wikia.nocookie.net/jojo/images/4/4e/Ermes_Costello_Anime.png",
        bio: "Ermes is a tough inmate at Green Dolphin Street Prison who intentionally got arrested to track down her sister's killer. Her Stand, Kiss, can place stickers on objects to duplicate them perfectly. When the sticker is removed, the objects slam back together, causing massive physical damage to anything in between. Ermes provides the street-smarts and unwavering loyalty Jolyne needs to survive the prison's horrors.",
        abilities: ["Object Duplication", "Explosive Reconstruction", "Expert Combat Instincts", "Sticker Traps"],
        affiliation: "Jolyne's Group",
        status: "Deceased (Legacy Cycle)",
        origin: "Florida, USA"
      },
      {
        name: "Narciso Anasui",
        role: "Reconstructionist / Diver Down",
        description: "A brilliant but obsessed individual with the power to rearrange matter.",
        image: "https://static.wikia.nocookie.net/jojo/images/0/07/Anasui_Anime.png",
        bio: "Narciso Anasui is an inmate who fell deeply, almost psychopathically, in love with Jolyne Cujoh. His Stand, Diver Down, can phase into any solid object or person to store energy or rearrange their internal structure from within. Though his motivations are purely selfish, his contribution to the fight against Pucci is undeniable, as he is willing to dismantle his own body and soul to protect Jolyne.",
        abilities: ["Internal Phasing", "Structural Rearranging", "Delayed Energy Strike", "Anatomical Manipulation"],
        affiliation: "Jolyne's Group",
        status: "Deceased (Legacy Cycle)",
        origin: "Florida, USA"
      },
      {
        name: "Narancia Ghirga",
        role: "Passione Ops / Aerosmith",
        description: "A loyal warrior who wields a miniature fighter plane to scan the battlefield.",
        image: "https://static.wikia.nocookie.net/jojo/images/d/d9/Narancia_Ghirga_Anime.png",
        bio: "Narancia Ghirga is a key member of Bucciarati's squad. Despite his rough upbringing and lack of formal education, he is a fierce and loyal fighter with a surprising tactical awareness. His Stand, Aerosmith, is a miniature airplane that can fire machine guns and drop soul-tracking bombs. Its most vital feature is a CO2 radar that allows Narancia to track any living thing by their breath, making him the squad's ultimate scout and mobile assault unit.",
        abilities: ["Aerosmith Machine Guns", "CO2 Tracking Radar", "Bombardment Strikes", "Enhanced Tactical Scouting"],
        affiliation: "Passione (Team Bucciarati)",
        status: "Deceased",
        origin: "Naples, Italy"
      },
      {
        name: "Leone Abbacchio",
        role: "Investigation Lead / Moody Blues",
        description: "The cynical former cop who can replay the past with absolute precision.",
        image: "https://static.wikia.nocookie.net/jojo/images/6/6f/Leone_Abbacchio_Anime.png",
        bio: "Leone Abbacchio is the senior member of Bucciarati's team and a former police officer disillusioned by corruption. He is cold, distrustful of strangers (especially Giorno), and intensely loyal to Bucciarati. His Stand, Moody Blues, allows him to chronologically 'replay' past events at a specific location. While not a frontline combat Stand, its ability to uncover hidden truths and track movements makes it the most valuable intelligence asset in the squad's history.",
        abilities: ["Chronological Replay", "Physical Replication", "Forensic Data Discovery", "High-Fidelity Tracking"],
        affiliation: "Passione (Team Bucciarati)",
        status: "Deceased",
        origin: "Naples, Italy"
      },
      {
        name: "Pannacotta Fugo",
        role: "Enforcer / Purple Haze",
        description: "A brilliant mind possessed by a Stand that embodies his own self-destructive rage.",
        image: "https://static.wikia.nocookie.net/jojo/images/e/e0/Pannacotta_Fugo_Anime.png",
        bio: "Pannacotta Fugo is a child prodigy with an IQ over 150 and a volatile temper. His Stand, Purple Haze, is one of the most dangerous entities in Passione—a biological weapon that releases a flesh-eating virus from capsules on its hands. The virus is so lethal and indiscriminate that Fugo himself fears its power. Despite his brilliance, Fugo's internal struggles lead him to leave the team when they choose to defy the Boss, a decision that haunts his legacy.",
        abilities: ["Viral Dissolution", "Lethal C-Grade Virus", "Psychological Combat Tactics", "Short-Range Explosive Power"],
        affiliation: "Passione (Team Bucciarati)",
        status: "Unknown (Operational)",
        origin: "Italy"
      },
      {
        name: "Trish Una",
        role: "Legacy Guardian / Spice Girl",
        description: "The daughter of the Boss, whose resolve awakened a Stand that defies logic.",
        image: "https://static.wikia.nocookie.net/jojo/images/6/67/Trish_Una_Anime.png",
        bio: "Trish Una is the secret daughter of Diavolo and the catalyst for the entire Golden Wind saga. Initially a sheltered girl forced into protection, she eventually finds her own strength and awakens her Stand, Spice Girl. Her ability allows her to 'soften' any object, giving it the properties of indestructible rubber. Trish's growth from a protected asset to a frontline warrior is essential for the team's survival against the world's most dangerous assassins.",
        abilities: ["Material Softening", "Indestructible Rubber Barriers", "Close-Range Melee Combat", "Stand Elasticity"],
        affiliation: "Passione (Team Bucciarati)",
        status: "Active",
        origin: "Italy"
      },
      {
        name: "Risotto Nero",
        role: "Assassin Leader / Metallica",
        description: "The cold, magnetic leader of La Squadra who manipulates the very iron in your blood.",
        image: "https://static.wikia.nocookie.net/jojo/images/7/7e/Risotto_Nero_Anime.png",
        bio: "Risotto Nero is the leader of La Squadra di Esecuzione, an elite team of assassins seeking to overthrow Diavolo. He is a master of stealth and psychological warfare. His Stand, Metallica, resides within his blood and grants him control over iron through magnetism. He can manifest needles and razor blades directly inside an opponent's body or coat himself in iron dust to become invisible. His singular focus and terrifying efficiency make him one of the most feared men in Italy.",
        abilities: ["Iron Manipulation (Magnetism)", "Internal Needle Manifestation", "Light-Refracting Invisibility", "Oxygen Deprivation Tactics"],
        affiliation: "La Squadra di Esecuzione",
        status: "Deceased",
        origin: "Sicily, Italy"
      },
      {
        name: "Ghiaccio",
        role: "La Squadra Enforcer / White Album",
        description: "A man of explosive temper who wields the absolute zero of the frozen world.",
        image: "https://static.wikia.nocookie.net/jojo/images/d/df/Ghiaccio_Anime.png",
        bio: "Ghiaccio is an impulsive and aggressive member of La Squadra who is obsessed with semantic precision. His Stand, White Album, is a wearable suit that allows him to flash-freeze his surroundings, reaching temperatures near absolute zero. He can create ice armor so hard it deflects bullets and skates at high speeds across any frozen surface. His 'Gently Weeps' ability allows him to freeze the very air into shields, creating a nearly impenetrable defense.",
        abilities: ["Absolute Zero Freezing", "Cyro-Armor (White Album)", "High-Speed Ice Skating", "Gently Weeps (Atmospheric Freezing)"],
        affiliation: "La Squadra di Esecuzione",
        status: "Deceased",
        origin: "Italy"
      },
      {
        name: "Weather Report",
        role: "Atmospheric Master / Weather Report",
        description: "A mysterious amnesiac who can command the very forces of nature.",
        image: "https://static.wikia.nocookie.net/jojo/images/f/f6/Weather_Report_Anime.png",
        bio: "Weather Report is an inmate at Green Dolphin Street Prison who has lost all his memories. Despite his quiet demeanor, his Stand is one of the most powerful in existence, allowing him to manipulate the atmosphere at will. He can create localized storms, manipulate oxygen levels, and even evoke bizarre phenomena like raining poisonous frogs. His suppressed ability, Heavy Weather, can turn entire populations into snails through subliminal light refraction.",
        abilities: ["Atmospheric Manipulation", "Localized Storm Control", "Heavy Weather (Subliminal Snails)", "Air Pressure Mastery"],
        affiliation: "Jolyne's Group",
        status: "Deceased (Legacy Cycle)",
        origin: "Florida, USA"
      },
      {
        name: "Foo Fighters",
        role: "Plankton Colony / F.F.",
        description: "A sentient colony of plankton that gained a soul and a purpose.",
        image: "https://static.wikia.nocookie.net/jojo/images/a/ae/Foo_Fighters_Anime.png",
        bio: "Foo Fighters (or F.F.) is a unique entity—a Stand that is also its own user. Created by Pucci to guard the Stand discs in prison, F.F. is a colony of sentient plankton. After being befriended by Jolyne, it took over a human corpse to experience life as a person. F.F. can manipulate its plankton body for combat, heal wounds with water, and fire plankton shells. Its journey is a profound exploration of identity and the value of intellect and friendship.",
        abilities: ["Plankton Manipulation", "Biological Healing", "Colony-Based Regeneration", "Plankton Shell Fire"],
        affiliation: "Jolyne's Group",
        status: "Deceased",
        origin: "Green Dolphin Street Prison"
      },
      {
        name: "Hol Horse",
        role: "Mercenary / The Emperor",
        description: "The charming but cowardly gunman who never works alone.",
        image: "https://static.wikia.nocookie.net/jojo/images/d/d7/Hol_Horse_Anime.png",
        bio: "Hol Horse is a mercenary Stand user hired by DIO to kill the Stardust Crusaders. His Stand, The Emperor, is a futuristic revolver that allows him to control the trajectory of his bullets with absolute precision, even curving them around obstacles. He follows a philosophy of never being the leader, instead seeking powerful partners (like J. Geil) to handle the frontlines. Despite his cowardice, his Stand is incredibly lethal, and he remains one of the few recurring antagonists to survive the series.",
        abilities: ["Trajectory Control", "Infinite Ammo (manifested)", "Unpredictable Marksmanship", "Strategic Cooperation"],
        affiliation: "DIO's Mercenaries",
        status: "Active (Retired)",
        origin: "Unknown"
      },
      {
        name: "Rudol von Stroheim",
        role: "German Major / Cyborg Tech",
        description: "A fanatical soldier who sacrificed his humanity for the glory of technology.",
        image: "https://static.wikia.nocookie.net/jojo/images/e/ef/Stroheim_Anime.png",
        bio: "Rudol von Stroheim is a high-ranking German officer during the Battle Tendency arc. After being partially destroyed by Santana, he was reconstructed into a powerful cyborg. Equipped with advanced technology like an abdominal machine gun and an ultraviolet beam in his eye, he became a vital ally for Joseph Joestar against the Pillar Men. His unwavering patriotism and belief in 'German science' make him one of the most bombastic and memorable allies in the early Joestar history.",
        abilities: ["Abdominal Machine Gun", "UV Eye Beam", "Cybernetic Strength", "Projectile Rocket Hands"],
        affiliation: "German Military",
        status: "Deceased (Battle of Stalingrad)",
        origin: "Germany"
      }
    ],
  },
  {
    id: "bleach-tybw",
    title: "Bleach: Thousand-Year Blood War",
    description: "The peace is suddenly broken when warning sirens wail through the Soul Society. Residents are disappearing without a trace and nobody knows who's behind it.",
    categories: ["Action", "Adventure", "Supernatural"],
    posterImage: "/assets/bleach/1.jpg",
    trailerUrl: "https://www.youtube.com/embed/e8YBesRKq_U?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: Scar", url: "https://www.youtube.com/embed/vO8Zf9WlK8s?autoplay=1&mute=1" }
    ],
    previews: [
      "/assets/bleach/2.jpg",
      "/assets/bleach/3.jpg",
      "/assets/bleach/4.jpg",
    ],
    characters: [
      {
        name: "Ichigo Kurosaki",
        role: "Substitute Shinigami / True Zangetsu",
        description: "The savior of the Soul Society who must face his own heritage.",
        image: "https://static.wikia.nocookie.net/bleach/images/c/c4/Ichigo_Kurosaki_TYBW_Anime.png",
        bio: "Ichigo Kurosaki is the Substitute Soul Reaper who has repeatedly saved both the world of the living and the Soul Society. In the Thousand-Year Blood War, Ichigo discovers the truth of his lineage—that he is a hybrid of Shinigami, Quincy, and Hollow powers. This realization allows him to forge his 'True Zangetsu', dual blades representing the balance of his complex existence. His resolve and transcendent power are the final hope against the Quincy extinction of the Soul Society."
      },
      {
        name: "Rukia Kuchiki",
        role: "Captain of Squad 13 / Hakka no Togame",
        description: "The Soul Reaper who started it all. She has finally mastered the absolute zero.",
        image: "https://static.wikia.nocookie.net/bleach/images/6/6b/Rukia_Kuchiki_TYBW_Anime.png",
        bio: "Rukia Kuchiki is the captain of the 13th Division and the woman who first gave Ichigo his Shinigami powers. Throughout her journey, she has grown from a powerless exile to a master of her Zanpakuto, Sode no Shirayuki. In the TYBW arc, she reveals her Bankai, Hakka no Togame, which allows her to reach the temperature of absolute zero, instantly freezing everything in her path in a beautiful but deadly display of power."
      },
      {
        name: "Yhwach",
        role: "The Almighty / Father of Quincies",
        description: "The primary antagonist who seeks to merge all worlds by erasing the concept of death.",
        image: "https://static.wikia.nocookie.net/bleach/images/3/36/Yhwach_TYBW_Anime.png",
        bio: "Yhwach is the Emperor of the Wandenreich and the son of the Soul King. As the father of all Quincy, he can bestow fragments of his soul upon others. His primary ability, 'The Almighty', allows him to see all possible futures and alter them to his advantage, making him an omnipotent threat to the cycle of rebirth. His singular goal is to dissolve the boundaries between life and death, creating a world where no one has to fear passing away."
      },
      {
        name: "Shunsui Kyoraku",
        role: "Captain-Commander",
        description: "The leader of the Gotei 13 during its darkest hour.",
        image: "https://static.wikia.nocookie.net/bleach/images/9/9f/Shunsui_Anime_Infobox.png",
        bio: "Shunsui Kyoraku is the laid-back yet deeply responsible Captain-Commander of the Gotei 13. Following the death of Yamamoto, Shunsui was chosen to lead the Soul Society through the Quincy invasion. He utilizes a dual-blade Zanpakuto, Katen Kyokotsu, which forces opponents into 'children's games' with lethal consequences. His Bankai, Katen Kyokotsu: Karamatsu Shinju, is a haunting masterpiece of spiritual pressure that drains the life of everyone caught in its area."
      },
      {
        name: "Kenpachi Zaraki",
        role: "The Beast / Captain of Squad 11",
        description: "A man who lives only for the thrill of the fight.",
        image: "https://static.wikia.nocookie.net/bleach/images/3/36/Kenpachi_Zaraki_TYBW_Anime.png",
        bio: "Kenpachi Zaraki is the most ferocious warrior in the Soul Society. For centuries, he fought with a mental limiter, unaware of the name of his own sword. During the war, he finally hears the call of 'Nozarashi' and unlocks its true form. His physical strength is so immense it can cleave through the very fabric of space, and his thirst for battle makes him an unstoppable force of nature that even the Quincy fear."
      },
      {
        name: "Mayuri Kurotsuchi",
        role: "Mad Scientist / Captain of Squad 12",
        description: "The man who turns the battlefield into a laboratory.",
        image: "https://static.wikia.nocookie.net/bleach/images/7/77/Mayuri_Anime_Infobox.png",
        bio: "Mayuri Kurotsuchi is the brilliant and ruthless scientist behind the Gotei 13's technological edge. He views combat as a series of experiments, often preparing counters for his enemies' abilities before even meeting them. His interventions during the TYBW arc were critical in resurrecting fallen allies and taking down elite Sternritters. His Bankai, Konjiki Ashisogi Jizo: Matai Fukuin Shotai, is a biological nightmare that creates newborn poisons tailored to his current opponent."
      },
      {
        name: "Genryusai Shigekuni Yamamoto",
        role: "Captain-Commander / Squad 1",
        description: "The eldest and most powerful soul reaper, wielding a blade of absolute cremation.",
        image: "https://static.wikia.nocookie.net/bleach/images/7/77/Yamamoto_TYBW_Anime.png",
        bio: "Yamamoto is the founder of the Gotei 13 and its commander for over a millennium. His Bankai, Zanka no Tachi, manifests the entirety of his flames into a single, charred blade. It possesses four distinct techniques representing the cardinal directions: East (Absolute Erasure), West (15 Million Degree Armor), South (Army of the Dead), and North (Focused Incineration). He represents the absolute history and power of the Shinigami, standing as the ultimate wall against the Quincy invasion.",
        abilities: ["Zanka no Tachi: Higashi", "Zanka no Tachi: Nishi", "Zanka no Tachi: Minami", "Zanka no Tachi: Kita"],
        affiliation: "Gotei 13 (High Command)",
        status: "Deceased",
        origin: "Soul Society"
      },
      {
        name: "Uryu Ishida",
        role: "The Antithesis / Schrift A",
        description: "Yhwach's successor who carries the pride of the Quincy and a hidden agenda.",
        image: "https://static.wikia.nocookie.net/bleach/images/c/c3/Uryu_Ishida_TYBW_Anime.png",
        bio: "Uryu Ishida is a survivor of the Quincy genocide who joins the Wandenreich as Yhwach's chosen successor. Bestowed with the Schrift 'A' – The Antithesis, he possesses the power to choose two points and completely reverse any events that have occurred between them. This allows him to instantaneously transfer his own injuries to his opponent. While seemingly allied with the enemy, Uryu's true loyalty remains a dangerous variable in the war for the Soul Society.",
        abilities: ["The Antithesis (Event Reversal)", "Heilig Bogen", "Licht Regen", "Hirenkyaku Mastery"],
        affiliation: "Wandenreich / Sternritter",
        status: "Active",
        origin: "World of the Living"
      },
      {
        name: "Jugram Haschwalth",
        role: "The Balance / Schrift B",
        description: "The Grandmaster of the Sternritter and Yhwach's other half.",
        image: "https://static.wikia.nocookie.net/bleach/images/6/64/Haschwalth_TYBW_Anime.png",
        bio: "Jugram Haschwalth is the advisor to the Emperor and the second-in-command of the Wandenreich. His Schrift 'B' – The Balance, allows him to manipulate the luck of those in his vicinity, redirecting any 'misfortune' (damage) he suffers back onto his enemy as 'bad luck'. At night, he shares the power of The Almighty with Yhwach. His cold, clinical approach to judgment makes him one of the most efficient and terrifying combatants in the Quincy army.",
        abilities: ["The Balance (Fortune Manipulation)", "Freund Schild", "The Almighty (Shared)", "Reishi Execution"],
        affiliation: "Wandenreich / Grandmaster",
        status: "Deceased",
        origin: "Wandenreich"
      },
      {
        name: "Retsu Unohana",
        role: "The First Kenpachi / Squad 4",
        description: "The Soul Society's greatest healer who hides a bloodthirsty past.",
        image: "https://static.wikia.nocookie.net/bleach/images/2/23/Retsu_Unohana_TYBW_Anime.png",
        bio: "Captain Unohana is known for her serene demeanor as the head of the medical division. However, she is secretly Yachiru Unohana, the first woman to ever hold the title of Kenpachi and the most prolific murderer in Soul Society history. During the TYBW, she reveals her true nature to Zaraki, using her Bankai, Minazuki, to engage in an endless cycle of slaughter and healing to unlock his full potential. Her legacy is one of absolute combat and supreme sacrifice.",
        abilities: ["Minazuki (Blood/Corrosive Bankai)", "Kenpachi Mastery", "Master Healer (Kido)", "Unrivaled Swordsmanship"],
        affiliation: "Gotei 13 (Squad 4)",
        status: "Deceased",
        origin: "Soul Society"
      },
      {
        name: "Byakuya Kuchiki",
        role: "Squad 6 Captain / Senbonzakura",
        description: "A noble who transcended his limits through Royal Guard training.",
        image: "https://static.wikia.nocookie.net/bleach/images/0/07/Byakuya_Kuchiki_TYBW_Anime.png",
        bio: "After a near-fatal defeat at the hands of As Nodt, Byakuya was taken to the Royal Palace for specialized training. He returned with a deeper understanding of his Zanpakuto, Senbonzakura Kageyoshi. No longer relying just on the volume of blades, he now controls each individual petal with lethal precision. His new technique, Ikka Senjinka, compresses all his blades into a single, massive strike. Byakuya has evolved from a rigid aristocrat into the Soul Society's most refined and resilient defender.",
        abilities: ["Senbonzakura Kageyoshi", "Ikka Senjinka", "Gokei Mastery", "Enhanced Shunpo"],
        affiliation: "Gotei 13 (Squad 6)",
        status: "Active",
        origin: "Soul Society"
      },
      {
        name: "Toshiro Hitsugaya",
        role: "Squad 10 Captain / Mature Bankai",
        description: "The prodigy who has finally reached the full maturity of his ice.",
        image: "https://static.wikia.nocookie.net/bleach/images/b/b8/Hitsugaya_Adult_TYBW.png",
        bio: "Hitsugaya is the youngest captain in history, and during the TYBW, he reveals the true form of Daiguren Hyorinmaru. When all the ice petals behind him vanish, his body ages into a mature form capable of wielding his full power. In this state, he can flash-freeze any matter or energy instantly, effectively negating the abilities of his opponents. His ice no longer just freezes; it stops the very function of anything it touches, making him the supreme master of the elements.",
        abilities: ["Shikai Hyoketsu (Four Worlds Freeze)", "Atmospheric Ice Control", "Matter Negation", "Absolute Zero Flash-Freeze"],
        affiliation: "Gotei 13 (Squad 10)",
        status: "Active",
        origin: "Soul Society"
      },
      {
        name: "Kisuke Urahara",
        role: "Master Strategist / Former Capt.",
        description: "The man who prepares for every possible end of the world.",
        image: "https://static.wikia.nocookie.net/bleach/images/a/a2/Urahara_Anime_Infobox.png",
        bio: "Kisuke Urahara is the brains of the group, a former captain who was exiled for his radical experiments. During the war, he finally unseals his Bankai, Kannonbiraki Benihime Aratame. This allows him to 'restructure' anything within its reach, from healing his own eyes to physically modifying his arm for more power. Urahara's combat style is entirely focused on contingency; he doesn't just fight with his heart—he solves the battle like a lethal puzzle.",
        abilities: ["Restructuring Bankai", "Advanced Kido Master", "Tactical Omniscience", "Portable Gigai Tech"],
        affiliation: "Kurosaki Group / Former Gotei",
        status: "Active",
        origin: "Tokyo / Soul Society"
      },
      {
        name: "Ichibe Hyosube",
        role: "Leader of Squad Zero / Monk",
        description: "The guardian of the Soul King and the man who names all things.",
        image: "https://static.wikia.nocookie.net/bleach/images/2/25/Ichibe_TYBW_Anime.png",
        bio: "Ichibe is the leader of the Royal Guard and the oldest Soul Reaper. He is the one who named everything in the Soul Society, from Zanpakuto to the very concept of Bankai. His Shikai, Ichimonji, uses ink to erase the names (and thus the powers) of his enemies. His Bankai, Shirafude Ichimonji, can then 'rename' his opponents, stripping them of their divinity and reducing them to the power level of things as weak as 'Black Ants'. He is the ultimate gatekeeper of the afterlife.",
        abilities: ["Ichimonji (Erase Name)", "Shirafude Ichimonji (Rename)", "Blackness Aura Control", "1000-Ri Palm Strike"],
        affiliation: "Royal Guard (Squad Zero)",
        status: "Transcendent",
        origin: "Royal Palace"
      },
      {
        name: "Yoruichi Shihoin",
        role: "Thunder God / Former Capt.",
        description: "The Flash Goddess who embodies the raw speed of lightning.",
        image: "https://static.wikia.nocookie.net/bleach/images/6/66/Yoruichi_Anime_Infobox.png",
        bio: "Yoruichi is the former captain of Squad 2 and the master of Shunpo. In the TYBW, she demonstrates her ultimate Shunkō form: Raiju Senkei: Shunryu Kokubyo Senki. In this state, she takes on cat-like characteristics and her spiritual pressure changes 48 times per second, making it impossible for anyone to map or resist her energy. She is the physical pinnacle of Shinigami combat, moving at speeds that blur the line between science and divinity.",
        abilities: ["Shunko: Raijin Senkei", "Beast Form (God of Thunder)", "Ultimate Shunpo", "Hand-to-Hand Mastery"],
        affiliation: "Kurosaki Group / Noble Houses",
        status: "Active",
        origin: "Soul Society"
      },
      {
        name: "Renji Abarai",
        role: "Lieutenant / True Zabimaru",
        description: "The snake who finally achieved his true dragon's form.",
        image: "https://static.wikia.nocookie.net/bleach/images/8/87/Renji_Abarai_TYBW_Anime.png",
        bio: "Renji spent centuries using an incomplete Bankai. After training with the Royal Guard, he learned the true name of his blade: Soo Zabimaru. This new form is more compact and efficient, combining the raw power of Hihio (the bone arm) and the lethal strike of Orochi (the blade). Renji has finally bridged the gap between a lieutenant and a captain-level warrior, becoming a powerhouse capable of taking down elite Sternritters single-handedly.",
        abilities: ["Soo Zabimaru (Twin King)", "Hihio Bone Arm", "Zaga Teppo (Snake Fangs Cannon)", "Extreme Physical Durability"],
        affiliation: "Gotei 13 (Squad 6)",
        status: "Active",
        origin: "Soul Society"
      },
      {
        name: "Bazz-B",
        role: "The Heat / Schrift H",
        description: "A hot-headed Quincy who channels the destructive power of flame.",
        image: "https://static.wikia.nocookie.net/bleach/images/9/91/Bazz-B_TYBW_Anime.png",
        bio: "Bazz-B is a high-ranking Sternritter with the Schrift 'H' – The Heat. He can generate and manipulate fire through his fingers, with each additional finger increasing the density and heat of the blast. His Burner Finger techniques are powerful enough to offset Yamamoto's flames and easily melt through high-density Reishi. Driven by a childhood vendetta against Yhwach alongside Haschwalth, Bazz-B is one of the most aggressive and combat-oriented members of the Wandenreich.",
        abilities: ["Burner Finger 1-4", "Burning Full Fingers", "Reishi Manipulation", "Extreme Pyrokinesis"],
        affiliation: "Wandenreich / Sternritter",
        status: "Deceased",
        origin: "Wandenreich"
      },
      {
        name: "As Nödt",
        role: "The Fear / Schrift F",
        description: "The embodiment of psychological terror who kills with your own fright.",
        image: "https://static.wikia.nocookie.net/bleach/images/4/44/As_Nodt_TYBW_Anime.png",
        bio: "As Nodt is a Sternritter who uses thorns to inject his targets with a supernatural, paralyzing fear. His Schrift 'F' – The Fear, bypasses logic and targets the instinctual terror within all living things. His Vollstandig, Tatarforas, transforms him into a horrific being whose very sight induces fear directly into the brain's optic nerves. He nearly killed Byakuya Kuchiki by forcing him to witness his own decay, proving that even a noble's pride can be broken by terror.",
        abilities: ["Supernatural Fear Induction", "Fear Thorns", "Tatarforas (Vollstandig)", "Mental Breakdown Scenarios"],
        affiliation: "Wandenreich / Sternritter",
        status: "Deceased",
        origin: "Wandenreich"
      },
      {
        name: "Quilge Opie",
        role: "The Jail / Schrift J",
        description: "The executive hunter who traps souls in an inescapable cage.",
        image: "https://static.wikia.nocookie.net/bleach/images/6/64/Quilge_Opie_TYBW_Anime.png",
        bio: "Quilge Opie is the leader of the First Jagdarmee and the first major Quincy threat encountered in Hueco Mundo. His Schrift 'J' – The Jail, allows him to create cages of Reishi that are physically impossible to break from the inside. He can also absorb enormous amounts of energy through Sklaverei, even absorbing the bodies of Ayon to increase his own power. He is the ultimate containment expert, tasked with neutralizing threats like Ichigo before they can reach the war.",
        abilities: ["The Jail (Holy Cage)", "Sklaverei (Reishi Absorption)", "Biskiel (Vollstandig)", "Ransotengai"],
        affiliation: "Wandenreich / Jagdarmee",
        status: "Deceased",
        origin: "Wandenreich"
      },
      {
        name: "Gremmy Thoumeaux",
        role: "The Visionary / Schrift V",
        description: "A boy-like entity who can turn imagination into reality.",
        image: "https://static.wikia.nocookie.net/bleach/images/4/45/Gremmy_Thoumeaux_Anime.png",
        bio: "Gremmy is arguably the most powerful Sternritter due to his Schrift 'V' – The Visionary. Anything he imagines becomes an absolute reality. He has turned bones into cookies, created meteorites from thin air, and even manifested his own life from a brain in a jar. During his battle with Kenpachi Zaraki, he attempted to imagine a power greater than the Captain's, leading to his own body's self-destruction when his mind could not contain the concept. He is a god-like threat limited only by his own sanity.",
        abilities: ["Reality Warping", "Molecular Rearranging", "Meteor Summons", "Self-Cloning (Power Multiplier)"],
        affiliation: "Wandenreich / Sternritter",
        status: "Deceased",
        origin: "Wandenreich"
      },
      {
        name: "Bambietta Basterbine",
        role: "The Explode / Schrift E",
        description: "A ruthless leader who turns the very world into a detonator.",
        image: "https://static.wikia.nocookie.net/bleach/images/d/df/Bambietta_Basterbine_Anime.png",
        bio: "Bambietta is the leader of the female Sternritter (The Bambies). Her Schrift 'E' – The Explode, allows her to turn any object touched by her Reishi into a bomb. Because her target *becomes* the explosive, her attacks are nearly impossible to deflect or block tradicionalmente. She is sadistic and unpredictable, often killing her own subordinates when she is in a bad mood, making her a chaotic and terrifying presence on any battlefield.",
        abilities: ["Omnidirectional Bombardment", "Reishi Explosion Induction", "Bielakiel (Vollstandig)", "Explosive Energy Orbs"],
        affiliation: "Wandenreich / Sternritter",
        status: "Zombie (Integrated)",
        origin: "Wandenreich"
      },
      {
        name: "Sosuke Aizen",
        role: "The Prisoner / Transcendent",
        description: "The ultimate traitor who waits in the shadows of the deep prison.",
        image: "https://static.wikia.nocookie.net/bleach/images/c/c5/Aizen_TYBW_Anime.png",
        bio: "Sosuke Aizen remains bound in Muken, the deepest level of the Soul Society's prison. Despite his imprisonment, his spiritual pressure has continued to grow, reaching a level where he can shoot down the Soul Palace by merely flexing his power. During the war, he is temporarily released by Shunsui to assist against Yhwach. Even bound to his chair, his Kyoka Suigetsu (Absolute Hypnosis) remains the only power capable of deceiving Yhwach's 'Almighty', proving Aizen is still the Soul Society's greatest wildcard.",
        abilities: ["Kyoka Suigetsu (Absolute Hypnosis)", "Transcendent Reiatsu", "Hado #90: Kurohitsugi", "Infinite Evolution"],
        affiliation: "Independent",
        status: "Transcendent (Prisoner)",
        origin: "Soul Society"
      },
      {
        name: "Sajin Komamura",
        role: "Vengeful Wolf / Squad 7",
        description: "A man who gave up his heart to become a beast of vengeance.",
        image: "https://static.wikia.nocookie.net/bleach/images/1/1a/Komamura_TYBW_Anime.png",
        bio: "Desperate for revenge after the death of Yamamoto, Komamura underwent a forbidden transformation by ripping out his own heart. This granted him the 'Human Transformation' technique, giving him temporary immortality and a human appearance. His Bankai evolved into Kokujo Tengen Myoo: Dangai Joue—a giant of pure armorless energy that cannot be killed. However, the price for this power was his permanent transformation into a mindless dog, a tragic end for a once-noble captain.",
        abilities: ["Dangai Joue (Immortality)", "Human Transformation Tech", "Giant Manifestation", "Absolute Physical Strikes"],
        affiliation: "Gotei 13 (Squad 7)",
        status: "Retired (Beast Form)",
        origin: "Soul Society"
      },
      {
        name: "Mask De Masculine",
        role: "The Warrior / Schrift S",
        description: "A wrestler-like Quincy who draws strength from his fan's cheers.",
        image: "https://static.wikia.nocookie.net/bleach/images/c/c1/Mask_De_Masculine_Anime.png",
        bio: "Mask De Masculine is a Sternritter obsessed with the 'hero' persona. His Schrift 'S' – The Star/Warrior, allows him to grow exponentially stronger whenever his fan, James, cheers for him. He can heal from lethal injuries and increase his physical mass to monumental proportions simply through the power of popularity. His 'Star Flash' is a highly concentrated beam of Reishi that can obliterate buildings, making him a brute force threat that overwhelmed multiple captains at once.",
        abilities: ["Popularity-Based Strength", "Regenerative Cheering", "Star Flash Beam", "Superslam Physicality"],
        affiliation: "Wandenreich / Sternritter",
        status: "Deceased",
        origin: "Wandenreich"
      },
      {
        name: "Orihime Inoue",
        role: "Healer / Event Refusal",
        description: "The girl with the power to deny the very facts of reality.",
        image: "https://static.wikia.nocookie.net/bleach/images/a/a2/Orihime_Inoue_TYBW_Anime.png",
        bio: "Orihime is Ichigo's longtime friend whose power, Shun Shun Rikka, has evolved into something far beyond traditional healing. She specializes in 'event refusal', allowing her to erase damage, repair objects, and create shields that can withstand even the attacks of Yhwach. During the TYBW, her role is vital as she protects Ichigo during the final confrontation and restores those who have been completely obliterated by Quincy energy. Her kindness is her ultimate shield.",
        abilities: ["Soten Kisshun (Event Refusal)", "Santen Kesshun (Shield)", "Reality Reconstruction", "High-Level Spiritual Shielding"],
        affiliation: "Kurosaki Group",
        status: "Active",
        origin: "World of the Living"
      },
      {
        name: "Yasutora Sado (Chad)",
        role: "The Giant / Fullbringer",
        description: "The silent giant whose fists carry the weight of his resolve.",
        image: "https://static.wikia.nocookie.net/bleach/images/6/6f/Sado_TYBW_Anime.png",
        bio: "Chad is a Fullbringer whose powers manifest as armor on his arms. His right arm, 'Brazo Derecho de Gigante', is for defense, while his left arm, 'Brazo Izquierdo del Diablo', is for offense. Throughout the TYBW, Chad serves as the frontline muscle for the group, clearing physical obstacles and fighting off waves of Soldat so Ichigo can advance. His physical strength is unmatched among humans, and his loyalty to Ichigo is the foundation of his power.",
        abilities: ["Brazo Izquierdo del Diablo", "Brazo Derecho de Gigante", "La Muerte (Death Blow)", "El Directo Strike"],
        affiliation: "Kurosaki Group",
        status: "Active",
        origin: "World of the Living"
      }
    ],
  },
  {
    id: "chainsaw-man",
    title: "Chainsaw Man",
    description: "Denji is a teenage boy living with a Chainsaw Devil named Pochita. Due to the debt his father left behind, he has been living a rock-bottom life while repaying his debt by harvesting devil corpses.",
    categories: ["Action", "Comedy", "Drama", "Horror", "Supernatural"],
    posterImage: "/assets/chainsaw-man/1.jpg",
    trailerUrl: "https://www.youtube.com/embed/dvL8hZ-V01Y?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: Kick Back", url: "https://www.youtube.com/embed/dFlDRhvM4L0?autoplay=1&mute=1" }
    ],
    previews: [
      "/assets/chainsaw-man/2.jpg",
      "/assets/chainsaw-man/3.jpg",
      "/assets/chainsaw-man/4.jpg",
    ],
    characters: [
      {
        name: "Denji",
        role: "High Public Safety Hunter / Chainsaw",
        description: "A boy who merged with Poachita to become the ultimate demon-slaying weapon.",
        image: "https://static.wikia.nocookie.net/chainsaw-man/images/3/3d/Denji_Anime.png",
        bio: "Denji is a young man who was left with a massive debt after his father's death. Living in extreme poverty, he worked as a Devil Hunter with his chainsaw-devil dog, Pochita. After being betrayed and killed by his employers, Pochita merged with Denji, bringing him back to life as 'Chainsaw Man'. Now a member of the Public Safety Devil Hunters, Denji is driven by simple desires—good food, a place to sleep, and the hope of finding love—all while possessing a terrifying power that threatens the very balance of the demon world."
      },
      {
        name: "Makima",
        role: "Control Devil / Public Safety",
        description: "The high-ranking devil hunter who views the world through a lens of absolute authority.",
        image: "https://static.wikia.nocookie.net/chainsaw-man/images/d/df/Makima_Anime.png",
        bio: "Makima is a high-ranking Public Safety Devil Hunter who took Denji in after his transformation. She is a woman of extreme intelligence and an enigmatic presence, often appearing cold and manipulative. As the 'Control Devil', her power extends over any being she deems inferior to herself, allowing her to bend the wills of humans and devils alike. Her ultimate goal remains a mystery, shrouded in a philosophy of creating a world without suffering, even if it requires absolute subjugation."
      },
      {
        name: "Power",
        role: "Blood Fiend / Team Denji",
        description: "A chaotic fiend whose love for cats is only surpassed by her narcissistic tendencies.",
        image: "https://static.wikia.nocookie.net/chainsaw-man/images/d/d4/Power_Anime.png",
        bio: "Power is a Blood Fiend and a Public Safety Devil Hunter who was assigned to work with Denji. She is famously narcissistic, often claiming credit for others' successes and viewing herself as superior to everyone. Despite her chaotic and often violent nature, she developed a deep bond with her cat, Meowy, and eventually with Denji and Aki. Her ability to manipulate her own blood into weapons makes her a deadly and unpredictable fighter on the battlefield."
      },
      {
        name: "Aki Hayakawa",
        role: "Devil Hunter / Moral Anchor",
        description: "A man driven by vengeance who found a surrogate family in the chaos of his duty.",
        image: "https://static.wikia.nocookie.net/chainsaw-man/images/7/7b/Aki_Hayakawa_Anime.png",
        bio: "Aki Hayakawa is a dedicated Public Safety Devil Hunter who is driven by a desire for revenge after the Gun Devil killed his family. He is a serious and disciplined man who initially viewed Denji and Power as burdens, but eventually grew to see them as a surrogate family. Aki's contracts with the Fox Devil and the Curse Devil grant him immense power at a high personal cost, reflecting his willingness to sacrifice everything to achieve his goals and protect those he cares about.",
        abilities: ["Fox Devil Contract", "Curse Devil Sword", "Future Devil Eye", "Extreme Culpability"],
        affiliation: "Public Safety (Special Division 4)",
        status: "Active (Operational)",
        origin: "Hokkaido / Tokyo"
      },
      {
        name: "Kobeni Higashiyama",
        role: "Devil Hunter / High Agility",
        description: "A nervous warrior who possesses surprising lethality when pushed to the edge.",
        image: "https://static.wikia.nocookie.net/chainsaw-man/images/3/37/Kobeni_Anime.png",
        bio: "Kobeni Higashiyama is a Public Safety Devil Hunter who joined the organization out of financial necessity. Characterized by her extreme anxiety and tendency to panic, she nonetheless possesses superhuman reflexes and combat skills that defy her cowardice. Kobeni has a contract with a secret Devil that grants her incredible agility, allowing her to survive encounters that would kill most veteran hunters. Her constant struggle between her desire for a normal life and the horrors of her job makes her one of the most relatable and resilient members of Division 4.",
        abilities: ["Superhuman Reflexes", "Expert Knife Prowess", "Extreme Agility", "Secret Devil Contract"],
        affiliation: "Public Safety (Special Division 4)",
        status: "Retired",
        origin: "Tokyo"
      },
      {
        name: "Himeno",
        role: "Veteran Hunter / Ghost Contract",
        description: "A seasoned hunter who gave everything to protect her partner and the world.",
        image: "https://static.wikia.nocookie.net/chainsaw-man/images/f/f6/Himeno_Anime.png",
        bio: "Himeno was a veteran Public Safety Devil Hunter and Aki's first partner/mentor. Known for her easy-going personality and her habit of smoking, she carried the weight of having lost many partners before him. She possessed a contract with the Ghost Devil, to which she had sacrificed her right eye in exchange for using one of its invisible, powerful arms. Himeno's ultimate sacrifice during the Katana Man arc remains a pivotal moment, proving her absolute devotion to Aki and her duties.",
        abilities: ["Ghost Devil Invisibility", "Intangible Strikes", "Strategic Scouting", "Extreme Loyalty"],
        affiliation: "Public Safety (Special Division 4)",
        status: "Deceased",
        origin: "Tokyo"
      },
      {
        name: "Kishibe",
        role: "Strongest Hunter / Captain",
        description: "The cynical, alcoholic veteran who trained the next generation of survivors.",
        image: "https://static.wikia.nocookie.net/chainsaw-man/images/e/ef/Kishibe_Anime.png",
        bio: "Kishibe is considered the strongest Devil Hunter in Public Safety. A grizzled veteran who has lost almost all his teammates over the years, he has developed a nihilistic outlook masked by constant drinking. He holds contracts with the Claw, Knife, and Needle Devils, though the specifics of his sacrifices are unknown. Kishibe was responsible for training Denji and Power, pushing them far past their limits to ensure they could survive the coming chaos. His primary loyalty is to humanity, often leading him to operate in the shadows against his own superiors.",
        abilities: ["Claw/Knife/Needle Contracts", "Master Hand-to-Hand Combat", "Tactical Genius", "Extreme Durability"],
        affiliation: "Public Safety (Special Division 1)",
        status: "Active",
        origin: "Tokyo"
      },
      {
        name: "Angel Devil",
        role: "Humanoid Devil / Lifespan Eater",
        description: "A lazy, beautiful devil whose touch steals the very time people have left.",
        image: "https://static.wikia.nocookie.net/chainsaw-man/images/0/07/Angel_Devil_Anime.png",
        bio: "The Angel Devil is a unique humanoid Devil who embodies the fear of angels. Unlike most devils, he harbors no particular ill-will toward humans but is forced to be a hunter to avoid execution. His primary ability allows him to absorb the lifespan of anyone who makes physical contact with him, which he can then convert into powerful weapons of light. Often seen as apathetic and lazy, he eventually forms a complex bond with Aki, highlighting the tragic nature of a being whose very existence is a threat to those he cares about.",
        abilities: ["Lifespan Absorption", "Light Weapon Synthesis", "Wings (Flight)", "Innate Resistance"],
        affiliation: "Public Safety (Special Division 4)",
        status: "Deceased",
        origin: "Hell / Community Island"
      },
      {
        name: "Beam",
        role: "Shark Fiend / Follower",
        description: "The eccentric shark-man whose loyalty to the Chainsaw is absolute.",
        image: "https://static.wikia.nocookie.net/chainsaw-man/images/6/61/Beam_Anime.png",
        bio: "Beam is the Shark Fiend and an incredibly loyal follower of Denji (whom he refers to as 'Lord Chainsaw'). Highly energetic and often acting on instinct, Beam possesses the unique ability to 'swim' through solid surfaces like floors and walls as if they were water. He is a fierce combatant who can transform into a more monstrous shark-form to devastate his enemies. His knowledge of Pochita's true past suggests he was a follower of the original Chainsaw Man in Hell.",
        abilities: ["Solid Surface Swimming", "Full Shark Transformation", "Enhanced Senses", "Chainsaw Lore Knowledge"],
        affiliation: "Public Safety (Special Division 4)",
        status: "Deceased",
        origin: "Hell"
      },
      {
        name: "Princi",
        role: "Spider Devil / Infiltration",
        description: "A polite, multi-legged devil serving under Makima's absolute command.",
        image: "https://static.wikia.nocookie.net/chainsaw-man/images/8/87/Spider_Devil_Anime.png",
        bio: "Princi is the Spider Devil, appearing as a young woman with eight sharp spider-legs emerging from her torso. She is remarkably polite and obedient, serving as a specialized operative for Makima. Her primary utility is the ability to submerge into the ground and re-emerge anywhere, effectively acting as a living portal for Makima's teleportation needs. While less overtly violent than other devils in her squad, her lethal precision makes her a terrifying assassin.",
        abilities: ["Dimensional Submergence", "Space Manipulation", "Sharp Appendage Combat", "Extreme Stealth"],
        affiliation: "Public Safety (Special Division 4)",
        status: "Deceased",
        origin: "Hell"
      },
      {
        name: "Galgali",
        role: "Violence Fiend / Martial Artist",
        description: "A surprisingly peaceful fiend who wears a mask to restrain his overwhelming power.",
        image: "https://static.wikia.nocookie.net/chainsaw-man/images/c/c5/Violence_Fiend_Anime.png",
        bio: "Galgali is the Violence Fiend, a being so powerful that he must wear a gas mask that constantly pumps poison into his system to keep his strength manageable. Despite his name, Galgali is one of the kindest members of Division 4, often buying food for his teammates and preferring conversation over combat. When his mask is removed, his physical form expands, and he becomes an unstoppable force of raw, unbridled martial power.",
        abilities: ["Unrestrained Physical Strength", "Limb Shapeshifting", "Master Martial Arts", "Enhanced Durability"],
        affiliation: "Public Safety (Special Division 4)",
        status: "Deceased",
        origin: "Hell"
      },
      {
        name: "Reze",
        role: "Bomb Devil Hybrid",
        description: "A charismatic operative from the Soviet Union with the power of high explosives.",
        image: "https://static.wikia.nocookie.net/chainsaw-man/images/7/77/Reze_Profile.png",
        bio: "Reze, also known as the Bomb Devil Hybrid, was a Soviet assassin sent to Tokyo to acquire Denji's heart. Posing as a kind cafe worker, she quickly won Denji's affection before revealing her true, lethal nature. By pulling a pin in her neck, she can transform into a being with the power to generate massive explosions from her skin. Reze is a master manipulator and a tragic figure, torn between her duty to her country and her fleeting desire for a normal life with Denji.",
        abilities: ["Explosion Generation", "Detachable Bomb Limbs", "Aerial Propulsion", "Regeneration (Hybrid)"],
        affiliation: "Soviet Union / Public Safety (Controlled)",
        status: "Incapacitated (Controlled)",
        origin: "Soviet Union"
      },
      {
        name: "Quanxi",
        role: "Crossbow Hybrid / First Hunter",
        description: "The legendary first devil hunter, leading a harem of lethal fiends.",
        image: "https://static.wikia.nocookie.net/chainsaw-man/images/f/fe/Quanxi_Profile.png",
        bio: "Quanxi is a legendary Devil Hunter from China, often referred to as the 'First Devil Hunter'. She is an incredibly skilled combatant, capable of moving at speeds that blur the human eye. As the Crossbow Hybrid, she can transform her head into a mass of crossbows and bows, firing dozens of arrows simultaneously with lethal precision. Quanxi values her fiend harem above all else, often accepting contracts only to provide for their safety and happiness.",
        abilities: ["Extreme Speed Combat", "Massive Projectile Barrage", "Hybrid Regeneration", "Master Hand-to-Hand"],
        affiliation: "China (Independent)",
        status: "Incapacitated (Controlled)",
        origin: "China"
      },
      {
        name: "Katana Man",
        role: "Katana Devil Hybrid",
        description: "The grandson of a debt collector seeking vengeance through bladed fury.",
        image: "https://static.wikia.nocookie.net/chainsaw-man/images/e/ef/Katana_Man_Anime.png",
        bio: "Katana Man (also known as Samurai Sword) is a hybrid created by the Yakuza using the heart of the Katana Devil. He blames Denji for the death of his grandfather and seeks absolute revenge. His transformation grants him katanas emerging from his head and arms, alongside an incredible dash ability that allows him to strike targets before they can even perceive his movement. He is one of Denji's most persistent and personal rivals.",
        abilities: ["High-Speed Iai Slash", "Hybrid Regeneration", "Superhuman Reflexes", "Bladed Limb Combat"],
        affiliation: "Yakuza / Gun Devil Associate",
        status: "Active (In Custody)",
        origin: "Tokyo"
      },
      {
        name: "Akane Sawatari",
        role: "Private Hunter / Snake Contractor",
        description: "The mysterious puppet master behind the Gun Devil's Tokyo operations.",
        image: "https://static.wikia.nocookie.net/chainsaw-man/images/b/b3/Akane_Sawatari_Anime.png",
        bio: "Akane Sawatari was a former private Devil Hunter who orchestrated the assassination attempts on Special Division 4. She held a powerful contract with the Snake Devil, allowing her to summon its massive form to swallow enemies whole or regurgitate previously swallowed devils to fight for her. Her calm, calculating demeanor made her a dangerous mastermind, though she was ultimately a pawn in a much larger game played by Makima and the Gun Devil.",
        abilities: ["Snake Devil Summoning", "Regurgitated Combatant Control", "Tactical Orchestration", "Infiltration"],
        affiliation: "Gun Devil Associate",
        status: "Deceased",
        origin: "Tokyo"
      },
      {
        name: "Hirofumi Yoshida",
        role: "Private Hunter / Octopus Contract",
        description: "The enigmatic and highly competent hunter with a mastery over the deep.",
        image: "https://static.wikia.nocookie.net/chainsaw-man/images/9/91/Hirofumi_Yoshida_Profile.png",
        bio: "Hirofumi Yoshida is a private Devil Hunter hired to protect Denji during the International Assassins arc. He possesses a contract with the Octopus Devil, which he uses with remarkable efficiency for both offense and defense. Yoshida is calm, professional, and seemingly always steps ahead of his opponents. Despite his youthful appearance, he is skilled enough to engage even the likes of Kishibe and Quanxi, making him one of the most mysterious and capable 'normal' humans in the series.",
        abilities: ["Octopus Tentacle Combat", "Ink Cloud Concealment", "Aerial Maneuvering", "Strategic Information Access"],
        affiliation: "Public Safety (Outsourced)",
        status: "Active",
        origin: "Tokyo"
      },
      {
        name: "Pochita",
        role: "The Chainsaw Devil",
        description: "The Hero of Hell whose name is feared by all of demonkind.",
        image: "https://static.wikia.nocookie.net/chainsaw-man/images/0/05/Pochita_Anime.png",
        bio: "Pochita is the true form of the Chainsaw Devil, once known as the 'Hero of Hell'. In his prime, he possessed the unique and terrifying ability to erase the existence of any devil he consumed, removing their name and the fear they represent from human consciousness entirely. After a near-fatal battle, he took the form of a small, orange dog-like creature and befriended Denji. His eventual merging with Denji's heart is what granted the boy his powers and set off the global struggle for his heart.",
        abilities: ["Existence Erasure", "Infinite Motorized Chainsaws", "Extreme Regeneration", "Indomitable Will"],
        affiliation: "Denji's Heart / Hell",
        status: "Active (Integrated)",
        origin: "Hell"
      },
      {
        name: "Cosmo",
        role: "Cosmos Fiend",
        description: "A fiend whose singular word 'Halloween' contains the knowledge of the universe.",
        image: "https://static.wikia.nocookie.net/chainsaw-man/images/2/29/Cosmo_Profile.png",
        bio: "Cosmo is the Cosmos Fiend and a member of Quanxi's harem. Despite her seemingly vacant expression and her repetitive use of the word 'Halloween', she possesses a terrifying power. Her ability can force a target's consciousness into a vast library containing all the knowledge in the universe. Once inside, the target is overwhelmed by information until they can only think of the word 'Halloween', essentially rendering their mind useless for eternity.",
        abilities: ["Total Information Overload", "Mental Library Manifestation", "Interdimensional Perception", "Concept Possession"],
        affiliation: "Quanxi's Group",
        status: "Deceased",
        origin: "Hell"
      },
      {
        name: "Santa Claus",
        role: "The Master Assassin / Doll Devil",
        description: "The collective consciousness of a thousand puppets, seeking immortality.",
        image: "https://static.wikia.nocookie.net/chainsaw-man/images/4/4e/Santa_Claus_Profile.png",
        bio: "Santa Claus is not a single person, but a collective identity used by a master assassin with a deep contract with the Doll Devil. By turning people into mindless dolls, 'Santa' can expand their consciousness and influence across the globe. Their ultimate goal was to kill the Chainsaw Devil to gain a portion of Hell's power. Santa is a master of the 'perfect contract', sacrificing lives they've stolen to manifest dark, primal magic from the depths of Hell.",
        abilities: ["Mass Doll Creation", "Contractual Life Sacrifice", "Perfect Puppet Control", "Darkness Empowerment"],
        affiliation: "Independent (Germany)",
        status: "Deceased / Erased",
        origin: "Global (Germany Hub)"
      },
      {
        name: "Barem Bridge",
        role: "Flamethrower Hybrid",
        description: "The fanatical zealot of the Chainsaw Man Church, wielding white phosphorus.",
        image: "https://static.wikia.nocookie.net/chainsaw-man/images/e/e0/Barem_Bridge_Profile.png",
        bio: "Barem Bridge is a fanatical hybrid who can transform into the Flamethrower Devil. A key member of the Chainsaw Man Church, he believes that true peace can only be achieved through the chaotic cleansing of the world. His transformation manifests as flamethrowers on his head and arms, capable of firing intense jets of fire that can incinerate entire street blocks. He is a dangerous extremist who views the original Chainsaw Man as a messianic figure.",
        abilities: ["Intense Fire Emission", "Flamethrower Limbs", "Hybrid Regeneration", "Fanatical Influence"],
        affiliation: "Chainsaw Man Church / Makima's Squad",
        status: "Active",
        origin: "Tokyo"
      },
      {
        name: "Miri Sugo",
        role: "Longsword Hybrid",
        description: "A young hybrid searching for a place to belong in a world of monsters.",
        image: "https://static.wikia.nocookie.net/chainsaw-man/images/3/3d/Miri_Sugo_Profile.png",
        bio: "Miri Sugo is a teenager who can transform into the Longsword Devil. Originally one of the many hybrids controlled by Makima, he later joined the Chainsaw Man Church in an attempt to find purpose. His transformation grants him elongated blades for arms and a spiked head, allowing for a mix of defensive parrying and rapid offensive strikes. Miri is less fanatical than Barem, often appearing conflicted about his role in the group's darker plans.",
        abilities: ["Longsword Arm Combat", "High-Speed Parrying", "Hybrid Regeneration", "Agile Bladeship"],
        affiliation: "Chainsaw Man Church",
        status: "Active",
        origin: "Tokyo"
      },
      {
        name: "Spear Hybrid",
        role: "Spear Devil / Tactical Sniper",
        description: "A distance-focused hybrid capable of manifesting lethal projectiles.",
        image: "https://static.wikia.nocookie.net/chainsaw-man/images/c/c5/Spear_Hybrid_Profile.png",
        bio: "The Spear Hybrid is a calm and professional operative who can transform into the Spear Devil. His combat style focuses on mid-to-long-range engagements, manifesting multiple spears from his body that he can throw with enough force to penetrate standard devil armor. Like the other hybrids, his origins are largely unknown, but he served as a core part of Makima's special unit before the final confrontation with Denji.",
        abilities: ["Spear Manifestation", "Projectile Precision", "Mid-Range Combat Control", "Hybrid Regeneration"],
        affiliation: "Makima's Special Unit",
        status: "In Custody",
        origin: "Unknown"
      },
      {
        name: "Whip Hybrid",
        role: "Whip Devil / Crowd Control",
        description: "The ancient hybrid whose lashes can level buildings.",
        image: "https://static.wikia.nocookie.net/chainsaw-man/images/a/a2/Whip_Hybrid_Profile.png",
        bio: "The Whip Hybrid is an energetic and seemingly youthful woman who is actually among the oldest hybrids in existence. Her transformation into the Whip Devil grants her long, flexible lashes for arms that can strike with incredible speed and destructive power. She excels at crowd control and multi-target engagement, using her whips to create lethal zones of effect that are difficult for even the most agile hunters to navigate.",
        abilities: ["Sonic Whip Lashes", "Multi-Target Engagement", "Extended Reach Combat", "Hybrid Regeneration"],
        affiliation: "Makima's Special Unit",
        status: "In Custody",
        origin: "Unknown"
      },
      {
        name: "Darkness Devil",
        role: "Primal Fear",
        description: "The embodiment of the first fear ever felt by living things.",
        image: "https://static.wikia.nocookie.net/chainsaw-man/images/b/ba/Darkness_Devil_Full.png",
        bio: "The Darkness Devil is a Primal Fear, a being so ancient and powerful that it has never once experienced death. Residing in the deepest corners of Hell, its very presence causes the immediate, gruesome dismemberment of anyone nearby. Its form is incomprehensible, a mass of severed limbs and faces that mocks human anatomy. The Darkness Devil is a force of nature rather than a character, representing the absolute apex of fear that even high-ranking devils like Makima dread to encounter.",
        abilities: ["Instantaneous Dismemberment", "Darkness Manifestation", "Universal Fear Induction", "Immortality"],
        affiliation: "Hell (Primal)",
        status: "Active (Hell)",
        origin: "Hell"
      }
    ],
  },
  {
    id: "spy-x-family",
    title: "Spy x Family",
    description: "A spy on an undercover mission gets married and adopts a child as part of his cover. His wife and daughter have secrets of their own, and all three must strive to keep together.",
    categories: ["Action", "Comedy"],
    posterImage: "/assets/spy-x-family/1.jpg",
    trailerUrl: "https://www.youtube.com/embed/ofXigq9aIpo?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: Mixed Nuts", url: "https://www.youtube.com/embed/U_rWZK_8vUY?autoplay=1&mute=1" }
    ],
    previews: [
      "/assets/spy-x-family/2.jpg",
      "/assets/spy-x-family/3.jpg",
      "/assets/spy-x-family/4.jpg",
    ],
    characters: [
      {
        name: "Loid Forger",
        role: "The Spy / Twilight",
        description: "An elite spy for Westalis who excels at going undercover and adapting to any persona.",
        image: "https://static.wikia.nocookie.net/spy-x-family/images/d/d9/Loid_Forger_Anime.png",
        bio: "Loid Forger, code-named 'Twilight', is a master spy for WISE. To maintain peace between Ostania and Westalis, he is assigned Operation Strix, requiring him to create a fake family. Loid is cold, methodical, and possesses exceptional skills in combat and intelligence, but he slowly finds himself genuinely caring for his fabricated family, struggling to balance his mission with his emerging parental instincts.",
        abilities: ["Master of Disguise", "Tactical Genius", "Expert Marksmanship", "Hand-to-Hand Combat Mastery"],
        affiliation: "WISE (Westalis Intelligence Services)",
        status: "Active",
        origin: "Unknown (Westalis)"
      },
      {
        name: "Yor Forger",
        role: "The Assassin / Thorn Princess",
        description: "A professional assassin who agrees to a marriage of convenience to maintain her cover.",
        image: "https://static.wikia.nocookie.net/spy-x-family/images/1/15/Yor_Forger_Anime.png",
        bio: "Yor Forger is a high-level assassin working for the Garden, known as the 'Thorn Princess'. While she appears to be a naive and airheaded office worker, she possesses superhuman strength and lethal precision. She agrees to marry Loid to escape suspicion as a single woman in her thirties, unaware of his true identity. Yor is fiercely protective of Anya and views her role in the family as a way to find a semblance of normalcy.",
        abilities: ["Superhuman Strength", "Lethal Blade Mastery", "Extreme Agility", "Enhanced Reflexes"],
        affiliation: "Garden (Assassin Organization)",
        status: "Active",
        origin: "Nileberg, Ostania"
      },
      {
        name: "Anya Forger",
        role: "The Telepath / Subject 007",
        description: "A young girl with the ability to read minds, seeking a permanent family.",
        image: "https://static.wikia.nocookie.net/spy-x-family/images/0/07/Anya_Forger_Anime.png",
        bio: "Anya Forger is a young girl with the secret power of telepathy, gained through unauthorized experiments. She was adopted by Loid from an orphanage and is the only person who knows the true identities of both her parents. Anya uses her powers to help her father's mission and keep her family together, though her childlike misunderstandings often lead to chaotic results at Eden Academy.",
        abilities: ["Telepathy (Mind Reading)", "Strategic Influence", "Enhanced Empathy", "Bond Synergy"],
        affiliation: "Eden Academy (Student)",
        status: "Active",
        origin: "Experimental Lab"
      },
      {
        name: "Bond Forger",
        role: "Family Dog / Subject 8",
        description: "A large, fluffy dog with the ability to see glimpses into the future.",
        image: "https://static.wikia.nocookie.net/spy-x-family/images/9/9f/Bond_Forger_Anime.png",
        bio: "Bond is the Forger family's Great Pyrenees, gifted with precognitive abilities. Like Anya, he was a subject of unethical experiments (Project Apple). He can see short glimpses of the future, which he often shares with Anya through her telepathy to prevent disasters. Bond is a loyal, gentle giant who quickly became an indispensable member of the household and Anya's best friend.",
        abilities: ["Precognition (Future Sight)", "Enhanced Tracking", "Anya Telepathic Link", "Superhuman Loyalty"],
        affiliation: "Forger Family",
        status: "Active",
        origin: "Project Apple Lab"
      },
      {
        name: "Yuri Briar",
        role: "State Security Service / Brother",
        description: "Yor's younger brother and a high-ranking officer in the Ostanian SSS.",
        image: "https://static.wikia.nocookie.net/spy-x-family/images/1/10/Yuri_Briar_Anime.png",
        bio: "Yuri Briar is Yor's younger brother who works for the Ostanian State Security Service (SSS). He is fiercely protective of his sister and despises Loid, whom he views as unworthy of her. Yuri is highly skilled in interrogation and surveillance, hiding his secret life from Yor just as she hides hers from him. His intense devotion to his sister often crosses into obsession, making him a dangerous adversary for Westalis spies.",
        abilities: ["Interrogation Mastery", "Hand-to-Hand Combat", "Surveillance Expertise", "Extreme Physical Endurance"],
        affiliation: "State Security Service (SSS)",
        status: "Active",
        origin: "Nileberg, Ostania"
      },
      {
        name: "Franky Franklin",
        role: "Informant / Inventor",
        description: "A skilled informant and Loid's primary support in Ostanian field operations.",
        image: "https://static.wikia.nocookie.net/spy-x-family/images/4/41/Franky_Franklin_Anime_.png",
        bio: "Franky Franklin is an informant for WISE and Loid Forger's closest ally in the field. He operates a tobacco shop in Berlint as a front for his intelligence work. Franky provides Loid with information, gadgets, and logistical support. Despite his constant complaints and desire for a girlfriend, Franky is a brilliant inventor and a loyal friend who would do anything to support Operation Strix.",
        abilities: ["Information Gathering", "Advanced Gadgetry", "Document Forgery", "Expert Infiltration Support"],
        affiliation: "WISE (Support Network)",
        status: "Active",
        origin: "Westalis"
      },
      {
        name: "Sylvia Sherwood",
        role: "The Handler / WISE Spymaster",
        description: "The high-ranking spymaster at WISE who oversees Operation Strix.",
        image: "https://static.wikia.nocookie.net/spy-x-family/images/b/b5/Sylvia_Sherwood_Anime.png",
        bio: "Sylvia Sherwood, known as 'The Handler' or 'Fullmetal Lady', is Loid's direct superior at WISE. She is a stern, highly intelligent, and professional officer who manages Westalis's espionage network in Ostania. Having lost her own family to the horrors of war, her primary motivation is to maintain the fragile peace between the two nations. She is a formidable strategist who commands respect from all her agents.",
        abilities: ["Strategic Command", "Espionage Mastery", "Diplomatic Intelligence", "Political Maneuvering"],
        affiliation: "WISE (Management)",
        status: "Active",
        origin: "Westalis"
      },
      {
        name: "Fiona Frost",
        role: "WISE Spy / Nightfall",
        description: "A cold and highly calculated WISE agent who works alongside Twilight.",
        image: "https://static.wikia.nocookie.net/spy-x-family/images/c/c2/Fiona_Frost_Anime.png",
        bio: "Fiona Frost, code-named 'Nightfall', is a WISE agent and Twilight's former apprentice. She maintains a completely emotionless facade at all times, though she is secretly and intensely in love with Loid. Fiona believes she is the ideal partner for him and seeks to replace Yor in Operation Strix. She is a consummate professional who can perform any task with mechanical precision and absolute focus.",
        abilities: ["Total Emotional Suppression", "High-Precision Espionage", "Advanced Combat Tactics", "Infiltration Specialist"],
        affiliation: "WISE (Field Agent)",
        status: "Active",
        origin: "Westalis"
      },
      {
        name: "Damian Desmond",
        role: "The Target / Second Son",
        description: "The younger son of Donovan Desmond and Anya's classmate at Eden Academy.",
        image: "https://static.wikia.nocookie.net/spy-x-family/images/6/60/Damian_Desmond_Anime.png",
        bio: "Damian Desmond is the younger son of the chairman of the National Unity Party, Loid's primary target. He is a prideful and initially arrogant student at Eden Academy who seeks the approval of his cold and distant father. His relationship with Anya is a mix of mutual rivalry and a budding, unacknowledged crush. Despite his status, Damian is a hardworking student who feels the immense pressure of his family name.",
        abilities: ["Scholastic Excellence", "Peer Leadership", "Social Influence", "Elite Upbringing Instincts"],
        affiliation: "Desmond Family / Eden Academy",
        status: "Active",
        origin: "Berlint, Ostania"
      },
      {
        name: "Henry Henderson",
        role: "History Teacher / Housemaster",
        description: "A senior teacher at Eden Academy who prizes 'Elegance' above all else.",
        image: "https://static.wikia.nocookie.net/spy-x-family/images/3/36/Henry_Henderson_Anime.png",
        bio: "Henry Henderson is a history teacher and housemaster at Eden Academy. He is defined by his obsession with 'Elegance' and expects all students to conduct themselves with absolute poise and honor. Though strict, he is a deeply honorable man who cares for his students' growth. He was the first at the academy to recognize the potential—and the 'elegance'—of the Forger family during their chaotic admission interview.",
        abilities: ["Educational Mastery", "Elegance Valuation", "High-Level Etiquette", "Expert Historical Knowledge"],
        affiliation: "Eden Academy (Cecile Hall)",
        status: "Active",
        origin: "Ostania"
      }
    ],
  },
  {
    id: "blue-lock",
    title: "Blue Lock",
    description: "After a disastrous defeat at the 2018 World Cup, Japan's team struggles to regroup. But what's missing? An absolute Ace Striker, who can guide them to the win.",
    categories: ["Action", "Sports"],
    posterImage: "/assets/blue-lock/1.jpg",
    trailerUrl: "https://www.youtube.com/embed/IVsII3dLbWc?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: Chaos ga Kiwamaru", url: "https://www.youtube.com/embed/MGRm4IzK1SQ?autoplay=1&mute=1" }
    ],
    previews: [
      "/assets/blue-lock/2.jpg",
      "/assets/blue-lock/3.jpg",
      "/assets/blue-lock/4.jpg",
    ],
    characters: blueLockCharacters,
  },
  {
    id: "vinland-saga",
    title: "Vinland Saga",
    description: "Thorfinn, son of one of the Vikings' greatest warriors, is among the finest fighters in the merry band of mercenaries run by the crafty Askeladd.",
    categories: ["Action", "Adventure", "Drama"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101348-8UR7r9MNVpz2.jpg",
    trailerUrl: "https://www.youtube.com/embed/pahdCwHJjaU?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: Mukanjyo", url: "https://www.youtube.com/embed/fWAbz5OHe3M?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/101348-MhlCoeqnODso.jpg"],
  },
  {
    id: "no-game-no-life",
    title: "No Game No Life",
    description: "Sora and Shiro are legendary shut-in gamer siblings. One day, they are summoned to a world where everything is decided by games.",
    categories: ["Adventure", "Comedy", "Fantasy", "Ecchi"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx19815-8UR7r9MNVpz2.jpg",
    trailerUrl: "https://www.youtube.com/embed/ETQUp-Omp-A?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: This Game", url: "https://www.youtube.com/embed/CaksNInHshg?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/19815-MhlCoeqnODso.jpg"],
  },
  {
    id: "re-zero",
    title: "Re:ZERO -Starting Life in Another World-",
    description: "Subaru Natsuki is suddenly transported to another world. He discovers he can return from death to a certain point in time, allowing him to change his fate.",
    categories: ["Action", "Adventure", "Drama", "Fantasy", "Psychological"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21355-8UR7r9MNVpz2.jpg",
    trailerUrl: "https://www.youtube.com/embed/vFfXjuVA1Jk?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: Redo", url: "https://www.youtube.com/embed/0Vwwr3VGsYg?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/21355-MhlCoeqnODso.jpg"],
  },
  {
    id: "mob-psycho",
    title: "Mob Psycho 100",
    description: "Shigeo 'Mob' Kageyama is a powerful esper who tries to suppress his emotions. He navigates middle school while dealing with supernatural threats.",
    categories: ["Action", "Comedy", "Supernatural"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21507-6YUSbh2m0N1p.jpg",
    trailerUrl: "https://www.youtube.com/embed/mV39saBlBLI?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: 99", url: "https://www.youtube.com/embed/vTvKn-S6S8w?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/21507-Qx8bGsLXUgLo.jpg"],
  },
  {
    id: "your-name",
    title: "Kimi no Na wa.",
    description: "Mitsuha and Taki are two strangers who suddenly start swapping bodies, forging a bond that transcends space and time.",
    categories: ["Drama", "Romance", "Supernatural"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21511-8UR7r9MNVpz2.jpg",
    trailerUrl: "https://www.youtube.com/embed/NooIc3dMncc?autoplay=1&mute=1",
    openings: [
      { title: "Zenzenzense", url: "https://www.youtube.com/embed/Z0o9eXQ9w64?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/21511-MhlCoeqnODso.jpg"],
  },
  {
    id: "silent-voice",
    title: "A Silent Voice",
    description: "Shouya Ishida seeks redemption for bullying a deaf girl, Shouko Nishimiya, in elementary school, leading to a moving story of friendship.",
    categories: ["Drama", "Slice of Life"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20954-8UR7r9MNVpz2.jpg",
    trailerUrl: "https://www.youtube.com/embed/nfK6UgLra7g?autoplay=1&mute=1",
    openings: [
      { title: "Koi wo Shita no wa", url: "https://www.youtube.com/embed/nfK6UgLra7g?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/20954-MhlCoeqnODso.jpg"],
  },
  {
    id: "fruits-basket",
    title: "Fruits Basket (2019)",
    description: "Tohru Honda discovers the secret of the Soma family: they turn into animals of the Chinese Zodiac when hugged by the opposite sex.",
    categories: ["Comedy", "Drama", "Romance", "Supernatural"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx106719-XmqW39aQ9o7O.jpg",
    trailerUrl: "https://www.youtube.com/embed/x1Z1-S90M0E?autoplay=1&mute=1",
    openings: [
      { title: "Theme: Again", url: "https://www.youtube.com/embed/x1Z1-S90M0E?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/106719-7lfSSPoMmwr2.jpg"],
  },
  {
    id: "21087-opm",
    title: "One Punch Man",
    description: "Saitama is a hero for fun who can defeat any opponent with just one punch, but he's always looking for a challenge that never comes.",
    categories: ["Action", "Comedy", "Sci-Fi", "Supernatural"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21087-97UR7r9MNVpz.jpg",
    trailerUrl: "https://www.youtube.com/embed/Poo5lqoWSGw?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: The Hero!!", url: "https://www.youtube.com/embed/atxYe-nOa9w?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/21087-MhlCoeqnODso.jpg"],
  },
  {
    id: "steins-gate",
    title: "Steins;Gate",
    description: "Rintarou Okabe is a self-proclaimed 'Mad Scientist' who accidentally discovers a way to send text messages to the past, triggering a chain of events that threatens to alter the future and cause unforgivable tragedy.",
    categories: ["Sci-Fi", "Thriller", "Psychological", "Drama"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx9253-8UR7r9MNVpz2.jpg",
    trailerUrl: "https://www.youtube.com/embed/gaOip_UvO_Y?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: Hacking to the Gate", url: "https://www.youtube.com/embed/gaOip_UvO_Y?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/9253-MhlCoeqnODso.jpg"],
  },
  {
    id: "violet-evergarden",
    title: "Violet Evergarden",
    description: "Violet Evergarden, a young female ex-child soldier, seeks the meaning of 'I Love You' as she works as an 'Auto Memory Doll', writing letters that connect the hearts of people in a post-war world.",
    categories: ["Drama", "Masterpiece", "Slice of Life", "Fantasy"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21827-8UR7r9MNVpz2.jpg",
    trailerUrl: "https://www.youtube.com/embed/g5xWqjFglsk?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: Sincerely", url: "https://www.youtube.com/embed/g5xWqjFglsk?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/21827-8Y3fs8S9S8pS.jpg"],
  },
  {
    id: "tokyo-ghoul",
    title: "Tokyo Ghoul",
    description: "Ken Kaneki's life changes forever after a date with a mysterious woman leads to a horrific accident, transforming him into a half-ghoul who must navigate a world of flesh-eating monsters and hidden societies.",
    categories: ["Action", "Horror", "Psychological", "Supernatural"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20605-8UR7r9MNVpz2.jpg",
    trailerUrl: "https://www.youtube.com/embed/o6O6aYshq28?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: Unravel", url: "https://www.youtube.com/embed/uMeR2W19wNE?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/20605-MhlCoeqnODso.jpg"],
  },
  {
    id: "mha",
    title: "My Hero Academia",
    description: "In a world where 80% of the population has superpowered 'Quirks', Izuku Midoriya was born without one. But a chance encounter with the world's greatest hero changes his destiny forever.",
    categories: ["Action", "Adventure", "Comedy", "Super-Power"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21459-C6pe1zd3hJu3.jpg",
    trailerUrl: "https://www.youtube.com/embed/EPV6T_M6E3U?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: The Day", url: "https://www.youtube.com/embed/EPV6T_M6E3U?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/21459-MhlCoeqnODso.jpg"],
  },
  {
    id: "your-lie-in-april",
    title: "Your Lie in April",
    description: "A piano prodigy who lost his ability to hear the sound of his own playing after his mother's death has his world turned vibrant again by a free-spirited and eccentric violinist.",
    categories: ["Drama", "Music", "Romance", "Slice of Life"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20665-8UR7r9MNVpz2.jpg",
    trailerUrl: "https://www.youtube.com/embed/vFfXjuVA1Jk?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: Hikaru Nara", url: "https://www.youtube.com/embed/nfK6UgLra7g?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/20665-MhlCoeqnODso.jpg"],
  },
  {
    id: "parasyte-maxim",
    title: "Parasyte -the maxim-",
    description: "Hostile alien parasites descend on Earth, taking over human brains to feed. Shinichi Izumi manages to keep his brain intact, forming a symbiotic relationship with a parasite that occupies his right hand.",
    categories: ["Action", "Horror", "Psychological", "Sci-Fi"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20623-8UR7r9MNVpz2.jpg",
    trailerUrl: "https://www.youtube.com/embed/vFfXjuVA1Jk?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: Let Me Hear", url: "https://www.youtube.com/embed/Z0o9eXQ9w64?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/20623-MhlCoeqnODso.jpg"],
  },
  {
    id: "dr-stone",
    title: "Dr. Stone",
    description: "Thousands of years after civilization was turned to stone, a genius boy named Senku Ishigami wakes up and vows to rebuild the world from scratch using the power of science.",
    categories: ["Adventure", "Sci-Fi", "Comedy"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-8UR7r9MNVpz2.jpg",
    trailerUrl: "https://www.youtube.com/embed/vFfXjuVA1Jk?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: Good Morning World!", url: "https://www.youtube.com/embed/vFfXjuVA1Jk?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/105333-MhlCoeqnODso.jpg"],
  },
  {
    id: "black-clover",
    title: "Black Clover",
    description: "In a world where magic is everything, Asta is born with nothing. But a 5-leaf clover grimoire and a sword that can negate magic itself might just make him the Wizard King.",
    categories: ["Action", "Adventure", "Fantasy", "Shonen"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx97940-C6pe1zd3hJu3.jpg",
    trailerUrl: "https://www.youtube.com/embed/eXmByU_Wkpk?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: Haruka Mirai", url: "https://www.youtube.com/embed/8-W75bBivnQ?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/97940-C6pe1zd3hJu3.jpg"],
  },
  {
    id: "fate-ubw",
    title: "Fate/Stay Night: Unlimited Blade Works",
    description: "Emiya Shirou is thrust into the Holy Grail War, a battle royale between seven mages and their heroic spirits. Together with his servant Saber, he must fight for a wish that can change history.",
    categories: ["Action", "Fantasy", "Supernatural", "Epic"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx19603-8UR7r9MNVpz2.jpg",
    trailerUrl: "https://www.youtube.com/embed/hB2v7S4U-aL0M?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: Brave Shine", url: "https://www.youtube.com/embed/Bt3D3Ca9nww?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/19603-8Y3fs8S9S8pS.jpg"],
  },
  {
    id: "psycho-pass",
    title: "Psycho-Pass",
    description: "In a future where a system can measure a person's mental state and criminal intent, Enforcers and Inspectors hunt down those who possess a darkened Psycho-Pass.",
    categories: ["Action", "Sci-Fi", "Psychological", "Police"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx13601-8UR7r9MNVpz2.jpg",
    trailerUrl: "https://www.youtube.com/embed/NRI_8PUXxyw?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: Abnormalize", url: "https://www.youtube.com/embed/NRI_8PUXxyw?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/13601-MhlCoeqnODso.jpg"],
  },
  {
    id: "gintama",
    title: "Gintama",
    description: "In an era where aliens have invaded Edo-period Japan, a samurai with a heart of gold and a perennially empty stomach takes on any odd job to survive, often with chaotic and hilarious results.",
    categories: ["Action", "Comedy", "Sci-Fi", "Samurai"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx918-lawi4n97caB1.jpg",
    trailerUrl: "https://www.youtube.com/embed/9XGZl2D-Z-8?autoplay=1&mute=1",
    openings: [
      { title: "Opening 13: Sakura Mitsutsuki", url: "https://www.youtube.com/embed/8-W75bBivnQ?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/918-MhlCoeqnODso.jpg"],
  },
  {
    id: "shield-hero",
    title: "The Rising of the Shield Hero",
    description: "Naofumi Iwatani is summoned to another world as the Shield Hero. Betrayed and left penniless, he must rise from the shadows to protect a world that hates him.",
    categories: ["Action", "Adventure", "Fantasy", "Isekai"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx99263-XmqW39aQ9o7O.jpg",
    trailerUrl: "https://www.youtube.com/embed/vFfXjuVA1Jk?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: RISE", url: "https://www.youtube.com/embed/vFfXjuVA1Jk?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/99263-MhlCoeqnODso.jpg"],
  },
  {
    id: "mushoku-tensei",
    title: "Mushoku Tensei: Jobless Reincarnation",
    description: "A 34-year-old NEET is reincarnated into a world of magic as Rudeus Greyrat. Armed with his knowledge of his past life and a new resolve, he vows to truly succeed in this new world.",
    categories: ["Adventure", "Fantasy", "Isekai", "Drama"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108465-XmqW39aQ9o7O.jpg",
    trailerUrl: "https://www.youtube.com/embed/x1Z1-S90M0E?autoplay=1&mute=1",
    openings: [
      { title: "Opening: Tabibito no Uta", url: "https://www.youtube.com/embed/x1Z1-S90M0E?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/108465-MhlCoeqnODso.jpg"],
  },
  {
    id: "fire-force",
    title: "Fire Force",
    description: "In a world where people spontaneously combust into living infernos, the Special Fire Force is the city's only hope. Shinra Kusakabe joins the force to uncover the truth behind the flames.",
    categories: ["Action", "Supernatural", "Sci-Fi", "Shonen"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105399-XmqW39aQ9o7O.jpg",
    trailerUrl: "https://www.youtube.com/embed/vFfXjuVA1Jk?autoplay=1&mute=1",
    openings: [
      { title: "Opening 1: Inferno", url: "https://www.youtube.com/embed/vFfXjuVA1Jk?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/105399-MhlCoeqnODso.jpg"],
  },
  {
    id: "made-in-abyss",
    title: "Made in Abyss",
    description: "Riko and her robot friend Reg descend into the 'Abyss', a giant hole in the earth full of mysterious relics and dangerous creatures, in search of Riko's mother.",
    categories: ["Adventure", "Mystery", "Fantasy", "Drama"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx97986-C6pe1zd3hJu3.jpg",
    trailerUrl: "https://www.youtube.com/embed/gaOip_UvO_Y?autoplay=1&mute=1",
    openings: [
      { title: "Opening: Deep in Abyss", url: "https://www.youtube.com/embed/gaOip_UvO_Y?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/97986-MhlCoeqnODso.jpg"],
  },
  {
    id: "gurren-lagann",
    title: "Tengen Toppa Gurren Lagann",
    description: "Simon and Kamina live in a subterranean village until they find a mysterious drill that changes the fate of humanity and the universe itself. Who the hell do you think we are?!",
    categories: ["Action", "Adventure", "Mecha", "Sci-Fi"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx2001-lawi4n97caB1.jpg",
    trailerUrl: "https://www.youtube.com/embed/NRI_8PUXxyw?autoplay=1&mute=1",
    openings: [
      { title: "Opening: Sorairo Days", url: "https://www.youtube.com/embed/NRI_8PUXxyw?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/2001-MhlCoeqnODso.jpg"],
  },
  {
    id: "kill-la-kill",
    title: "Kill la Kill",
    description: "Ryuko Matoi arrives at Honnouji Academy search for her father's killer, armed with a giant half of a pair of scissors and a sentient sailor suit that grants her immense power.",
    categories: ["Action", "Comedy", "Super-Power", "Ecchi"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx18671-8UR7r9MNVpz2.jpg",
    trailerUrl: "https://www.youtube.com/embed/NRI_8PUXxyw?autoplay=1&mute=1",
    openings: [
      { title: "Opening: Sirius", url: "https://www.youtube.com/embed/NRI_8PUXxyw?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/18671-MhlCoeqnODso.jpg"],
  },
  {
    id: "overlord",
    title: "Overlord",
    description: "A lonely gamer stays logged into his favorite MMO as it shuts down, only to find himself transported into a real fantasy world as his skeletal avatar, the Sorcerer King Ainz Ooal Gown.",
    categories: ["Action", "Fantasy", "Isekai", "Supernatural"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20832-awA0mB1pAwZ.jpg",
    trailerUrl: "https://www.youtube.com/embed/atxYe-nOa9w?autoplay=1&mute=1",
    openings: [
      { title: "Opening: Clattanoia", url: "https://www.youtube.com/embed/atxYe-nOa9w?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/20832-MhlCoeqnODso.jpg"],
  },
  {
    id: "erased",
    title: "Erased",
    description: "Satoru Fujinuma possesses an ability called 'Revival' that sends him back in time to prevent tragedies. After being framed for a crime, he is sent 18 years back to stop a serial kidnapper.",
    categories: ["Mystery", "Psychological", "Supernatural", "Thriller"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21234-8UR7r9MNVpz2.jpg",
    trailerUrl: "https://www.youtube.com/embed/vFfXjuVA1Jk?autoplay=1&mute=1",
    openings: [
      { title: "Opening: Re:Re:", url: "https://www.youtube.com/embed/vFfXjuVA1Jk?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/21234-MhlCoeqnODso.jpg"],
  },
  {
    id: "death-parade",
    title: "Death Parade",
    description: "After death, humans arrive at Quindecim, a bar in the afterlife where they must play high-stakes games to determine the fate of their souls: reincarnation or the eternal void.",
    categories: ["Psychological", "Drama", "Supernatural", "Mystery"],
    posterImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20842-z77uS8vA6fS8.jpg",
    trailerUrl: "https://www.youtube.com/embed/z77uS8vA6fS8?autoplay=1&mute=1",
    openings: [
      { title: "Opening: Flyers", url: "https://www.youtube.com/embed/z77uS8vA6fS8?autoplay=1&mute=1" }
    ],
    previews: ["https://s4.anilist.co/file/anilistcdn/media/anime/banner/20842-MhlCoeqnODso.jpg"],
  }
];
