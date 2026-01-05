export interface Boss {
  id: number;
  nom: string;
  prenom: string | null;
  acte: number;
  faiblesse: string;
  sortFetiche: string;
  imageUrl: string;
  lieux: string;
  difficulte: number;
  stats: {
    force: number;
    endurance: number;
    dexterite: number;
    intelligence: number;
    charisme: number;
    magie?: number; // optionnel car certains boss n'ont pas de magie
  };
}

const bosses: Boss[] = [
  // Acte 1
  {
    id: 3,
    nom: "Dror Ragzlin",
    prenom: null,
    acte: 1,
    faiblesse: "Groupes de gobelins + embuscade",
    sortFetiche: "Hurlement de guerre & météo rouge",
    imageUrl: "images/Dror Ragzlin.webp",
    lieux: "images/Dror Ragzlin location.webp",
    difficulte: 6,
    stats: { force: 18, endurance: 16, dexterite: 12, intelligence: 10, charisme: 8 },
  },
  {
    id: 4,
    nom: "Kagha",
    prenom: null,
    acte: 1,
    faiblesse: "Manipulation et appui divin limité",
    sortFetiche: "Invocation esprit elfe & pluie d’araignées",
    imageUrl: "images/kagha_npcs_bg3_wiki_guide_150px.jpg",
    lieux: "images/InvestigateKagha-HiddenChestMap.webp",
    difficulte: 6,
    stats: { force: 12, endurance: 14, dexterite: 13, intelligence: 16, charisme: 12, magie: 15 },
  },
  {
    id: 1,
    nom: "Ethel",
    prenom: "Auntie",
    acte: 1,
    faiblesse: "Feu magique & coups de zone",
    sortFetiche: "Charm Personne",
    imageUrl: "images/ethel.avif",
    lieux: "images/1719659-tunnels1-article_m-1.jpg",
    difficulte: 7,
    stats: { force: 14, endurance: 12, dexterite: 10, intelligence: 16, charisme: 15, magie: 18 },
  },
  {
    id: 2,
    nom: "Minthara",
    prenom: null,
    acte: 1,
    faiblesse: "Furtivité ou diplomatie alternative",
    sortFetiche: "Assaut de drow & poison némétique",
    imageUrl: "images/667px-Minthara_SteamCard.jpg",
    lieux: "images/Minthara-location.jpg",
    difficulte: 7,
    stats: { force: 16, endurance: 14, dexterite: 15, intelligence: 12, charisme: 13 },
  },

  // Acte 2
  {
    id: 15,
    nom: "Ch’r’ai Tska’an",
    prenom: null,
    acte: 2,
    faiblesse: "Tactique de masse & interruption",
    sortFetiche: "Barrage de flèches spectrales & raid éclair",
    imageUrl: "images/chrai_tskaan.png",
    lieux: "images/chrai_lieu.jpg",
    difficulte: 8,
    stats: { force: 15, endurance: 14, dexterite: 16, intelligence: 13, charisme: 14 },
  },
  {
    id: 5,
    nom: "Balthazar",
    prenom: null,
    acte: 2,
    faiblesse: "Silence ou coup rapide",
    sortFetiche: "Nuée toxique & Rayon de Maladie",
    imageUrl: "images/balthazar.png",
    lieux: "images/balthazar_lieu.jpg",
    difficulte: 8,
    stats: { force: 15, endurance: 17, dexterite: 14, intelligence: 13, charisme: 14, magie: 16 },
  },
  {
    id: 14,
    nom: "Fist Marcus",
    prenom: null,
    acte: 2,
    faiblesse: "Corps à corps rapide & faibles dégâts magiques",
    sortFetiche: "Poing trembleur & uppercut de pierre",
    imageUrl: "images/fist_marcus.png",
    lieux: "images/fist_marcus_lieu.jpg",
    difficulte: 7,
    stats: { force: 18, endurance: 16, dexterite: 17, intelligence: 10, charisme: 12 },
  },
  {
    id: 6,
    nom: "Ketheric",
    prenom: "Thorm",
    acte: 2,
    faiblesse: "Lumière sacrée + affaiblissement des protections",
    sortFetiche: "Lame de Frontières",
    imageUrl: "images/ketheric_thorm.png",
    lieux: "images/ketheric_lieu.jpg",
    difficulte: 9,
    stats: { force: 16, endurance: 15, dexterite: 13, intelligence: 14, charisme: 12, magie: 17 },
  },

  // Acte 3
  {
    id: 10,
    nom: "Raphael",
    prenom: null,
    acte: 3,
    faiblesse: "Manipulation et terrain inversé",
    sortFetiche: "Deal infernal / Rétribution diabolique",
    imageUrl: "images/raphael.png",
    lieux: "images/raphael_lieu.jpg",
    difficulte: 8,
    stats: { force: 14, endurance: 15, dexterite: 12, intelligence: 16, charisme: 14, magie: 15 },
  },
  {
    id: 7,
    nom: "Gortash",
    prenom: "Enver",
    acte: 3,
    faiblesse: "Sorts anti-magie & zone instable",
    sortFetiche: "Invocation d’Illithid",
    imageUrl: "images/enver_gortash.png",
    lieux: "images/gortash_lieu.jpg",
    difficulte: 8,
    stats: { force: 17, endurance: 16, dexterite: 12, intelligence: 13, charisme: 14, magie: 16 },
  },
  {
    id: 8,
    nom: "Orin",
    prenom: "The Red",
    acte: 3,
    faiblesse: "Duo + miroir & timing",
    sortFetiche: "Éruption divine de Bhaal",
    imageUrl: "images/orin_red.png",
    lieux: "images/orin_lieu.jpg",
    difficulte: 9,
    stats: { force: 15, endurance: 15, dexterite: 16, intelligence: 12, charisme: 14 },
  },
  {
    id: 12,
    nom: "Lorroakan",
    prenom: null,
    acte: 3,
    faiblesse: "Invocation de l’ombre & contrôle mental",
    sortFetiche: "Flamme de l’ombre & onde astrale",
    imageUrl: "images/lorroakan.png",
    lieux: "images/lorroakan_lieu.jpg",
    difficulte: 9,
    stats: { force: 16, endurance: 14, dexterite: 13, intelligence: 17, charisme: 12, magie: 16 },
  },
  {
    id: 11,
    nom: "Ansur",
    prenom: null,
    acte: 3,
    faiblesse: "Anti-dragon matériel magique + feu",
    sortFetiche: "Souffle de dragon & vol ancestral",
    imageUrl: "images/ansur.png",
    lieux: "images/ansur_lieu.jpg",
    difficulte: 10,
    stats: { force: 19, endurance: 18, dexterite: 14, intelligence: 15, charisme: 13, magie: 17 },
  },
  {
    id: 9,
    nom: "Sarevok",
    prenom: "Anchev",
    acte: 3,
    faiblesse: "Classe mixte tank + dégâts & timing",
    sortFetiche: "Montée de Bhaal & épée de sang",
    imageUrl: "images/sarevok.png",
    lieux: "images/sarevok_lieu.jpg",
    difficulte: 9,
    stats: { force: 18, endurance: 18, dexterite: 14, intelligence: 12, charisme: 13 },
  },
  {
    id: 13,
    nom: "Mother Superior",
    prenom: null,
    acte: 3,
    faiblesse: "Divin + terrain clos",
    sortFetiche: "Châtiment sacré & cri spirituel",
    imageUrl: "images/mother_superior.png",
    lieux: "images/mother_superior_lieu.jpg",
    difficulte: 8,
    stats: { force: 14, endurance: 15, dexterite: 12, intelligence: 16, charisme: 15, magie: 17 },
  },
];

export default bosses;