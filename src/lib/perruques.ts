export type Perruque = {
  id: string;
  nom: string;
  description: string;
  image: string;
  prixIndicatif: string;
};

export const perruques: Perruque[] = [
  {
    id: "lace-frontale",
    nom: "Lace frontale",
    description: "Cheveux naturels, densité 180%, 13x4",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
    prixIndicatif: "À partir de 45 000 fr",
  },
  {
    id: "body-wave",
    nom: "Body wave",
    description: "Longueur 20 pouces, closure 4x4",
    image:
      "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=800&q=80",
    prixIndicatif: "À partir de 38 000 fr",
  },
  {
    id: "bob-court",
    nom: "Bob court",
    description: "Perruque synthétique premium, coloris naturel",
    image:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80",
    prixIndicatif: "À partir de 22 000 fr",
  },
  {
    id: "curly",
    nom: "Curly",
    description: "Boucles serrées, lace 13x6, densité 200%",
    image:
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=800&q=80",
    prixIndicatif: "À partir de 52 000 fr",
  },
  {
    id: "straight-long",
    nom: "Straight long",
    description: "Lisse, 26 pouces, cheveux vierges",
    image:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&q=80",
    prixIndicatif: "À partir de 60 000 fr",
  },
  {
    id: "closure-360",
    nom: "Closure 360",
    description: "Lace 360, finition naturelle, densité 180%",
    image:
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80",
    prixIndicatif: "À partir de 55 000 fr",
  },
];