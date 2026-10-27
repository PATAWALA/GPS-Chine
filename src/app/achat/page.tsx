"use client";

import { useState } from "react";
import Link from "next/link";
import { offres } from "@/lib/offres";

export default function AchatPage() {
  const offre = offres.find((o) => o.id === "achat")!;
  const [quantite, setQuantite] = useState("");
  const [description, setDescription] = useState("");

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-xl">
        <Link href="/" className="text-sm text-brand hover:underline">
          ← Retour
        </Link>

        <h1 className="mt-4 text-3xl font-bold text-ink">{offre.titre}</h1>
        <p className="mt-2 text-muted">{offre.sousTitre}</p>

        <ol className="mt-8 space-y-3">
          {offre.etapes.map((etape, i) => (
            <li key={i} className="flex gap-3 text-sm text-ink">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand">
                {i + 1}
              </span>
              <span>{etape}</span>
            </li>
          ))}
        </ol>

        <div className="mt-8 space-y-4 rounded-xl border border-slate-200 bg-white p-6">
          <div>
            <label className="block text-sm font-medium text-ink">
              Quantités souhaitées
            </label>
            <input
              value={quantite}
              onChange={(e) => setQuantite(e.target.value)}
              placeholder="Ex. 50 sacs, 20 montres…"
              className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-ink">
              Description des articles
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              placeholder="Décrivez les articles, puis envoyez les photos sur WhatsApp."
              className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
            />
          </div>
        </div>

        <a
          href={offre.whatsappGroupe}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 block rounded-lg bg-green-600 py-3 text-center font-semibold text-white transition hover:bg-green-700"
        >
          Rejoindre le groupe d'achat WhatsApp
        </a>

        <p className="mt-4 text-center text-xs text-muted">
          Envoyez ensuite la photo des articles + la capture du dépôt de 20 000 fr.
        </p>
      </div>
    </main>
  );
}