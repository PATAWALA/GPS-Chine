import { z } from "zod";

export const demandeSchema = z.object({
  nom: z.string().min(2, "Indiquez votre nom"),
  whatsapp: z
    .string()
    .min(8, "Numéro WhatsApp invalide")
    .regex(/^[0-9+\s()-]+$/, "Chiffres et + uniquement"),
  typeBesoin: z.enum(
    ["achat", "visite-usine", "controle-qualite", "logistique"],
    { message: "Choisissez un type de besoin" }
  ),
  categorie: z.string().min(2, "Indiquez la catégorie de produit"),
  message: z.string().optional(),
});

export type Demande = z.infer<typeof demandeSchema>;