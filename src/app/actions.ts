"use server";

import { promises as fs } from "fs";
import path from "path";
import { demandeSchema } from "@/lib/schema";

const FICHIER = path.join(process.cwd(), "data", "demandes.json");

export type EtatFormulaire =
  | { succes: false; erreurs: Record<string, string[]> }
  | { succes: true }
  | null;

export async function soumettreDemande(
  _etatPrecedent: EtatFormulaire,
  formData: FormData
): Promise<EtatFormulaire> {
  const brut = {
    nom: formData.get("nom"),
    whatsapp: formData.get("whatsapp"),
    typeBesoin: formData.get("typeBesoin"),
    categorie: formData.get("categorie"),
    message: formData.get("message") || undefined,
  };

  const validation = demandeSchema.safeParse(brut);

  if (!validation.success) {
    return {
      succes: false,
      erreurs: validation.error.flatten().fieldErrors,
    };
  }

  const demande = {
    ...validation.data,
    date: new Date().toISOString(),
  };

  // Lecture + écriture dans le fichier JSON
  let existantes: unknown[] = [];
  try {
    const contenu = await fs.readFile(FICHIER, "utf-8");
    existantes = JSON.parse(contenu);
  } catch {
    existantes = [];
  }

  existantes.push(demande);
  await fs.mkdir(path.dirname(FICHIER), { recursive: true });
  await fs.writeFile(FICHIER, JSON.stringify(existantes, null, 2), "utf-8");

  // Affichage console pour la démo en direct
  console.log("\n📥 NOUVELLE DEMANDE REÇUE :");
  console.log(demande);
  console.log(`Total : ${existantes.length} demandes\n`);

  return { succes: true };
}