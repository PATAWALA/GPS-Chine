export type Produit = {
  id: string;
  categorie: string;
  destination: string;
  image: string;
  description?: string;
};

export const produits: Produit[] = [
  {
    id: "cosmetique",
    categorie: "Cosmétiques",
    destination: "Côte d'Ivoire",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
    description: "Palettes maquillage, soins visage",
  },
  {
    id: "electronique",
    categorie: "Électronique",
    destination: "Sénégal",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80",
    description: "Accessoires téléphone, écouteurs",
  },
  {
    id: "textile",
    categorie: "Textile",
    destination: "Bénin",
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=80",
    description: "Pagnes, prêt-à-porter",
  },
  {
    id: "auto",
    categorie: "Pièces auto",
    destination: "Cameroun",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
    description: "Filtres, phares, pièces moteur",
  },
  {
    id: "emballage",
    categorie: "Emballage",
    destination: "Togo",
    image:
      "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=800&q=80",
    description: "Sachets, cartons personnalisés",
  },
  {
    id: "maison",
    categorie: "Maison",
    destination: "Mali",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    description: "Ustensiles, décoration",
  },
];