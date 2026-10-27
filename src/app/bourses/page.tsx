"use client";

import Link from "next/link";
import { offres } from "@/lib/offres";

const champs = [
  { name: "nom", label: "Nom", type: "text" },
  { name: "nationalite", label: "Nationalité", type: "text" },
  { name: "age", label: "Âge", type: "number" },
  { name: "diplome", label: "Diplôme le plus élevé", type: "text" },
  { name: "moyenne", label: "Moyenne du diplôme", type: "text" },
  { name: "niveau", label: "Niveau d'études", type: "text" },
  { name: "filiere", label: "Filière (liste 3 branches)", type: "text" },
  { name: "hsk", label: "Niveau HSK", type: "text" },
  { name: "langue", label: "Préférence linguistique", type: "text" },
  { name: "emplacement", label: "Emplacement actuel", type: "text" },
];

export default function BoursesPage() {
  const offre = offres.find((o) => o.id === "bourses")!;

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-xl">
        <Link href="/" className="text-sm text-brand hover:underline">
          ← Retour
        </Link>

        <h1 className="mt-4 text-3xl font-bold text-ink">{offre.titre}</h1>
        <p className="mt-2 text-muted">{offre.sousTitre}</p>

        <div className="mt-8 space-y-4 rounded-xl border border-slate-200 bg-white p-6">
          {champs.map((c) => (
            <div key={c.name}>
              <label className="block text-sm font-medium text-ink">
                {c.label}
              </label>
              <input
                type={c.type}
                name={c.name}
                className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
              />
            </div>
          ))}
        </div>

        <a
          href={offre.whatsappGroupe}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 block rounded-lg bg-green-600 py-3 text-center font-semibold text-white transition hover:bg-green-700"
        >
          Rejoindre le groupe Bourses WhatsApp
        </a>

        <p className="mt-4 text-center text-xs text-muted">
          Inscription : 120 $ / 72 000 fr. Paiement avant démarrage de la procédure.
        </p>
      </div>
    </main>
  );
}