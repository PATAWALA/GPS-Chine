"use client";

import { useActionState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { soumettreDemande, type EtatFormulaire } from "../actions";

export default function DevisPage() {
  const router = useRouter();
  const [etat, formAction, enCours] = useActionState<EtatFormulaire, FormData>(
    soumettreDemande,
    null
  );

  useEffect(() => {
    if (etat?.succes) {
      router.push("/merci");
    }
  }, [etat, router]);

  const erreurs = etat && !etat.succes ? etat.erreurs : {};

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-xl">
        <Link href="/" className="text-sm text-brand hover:underline">
          ← Retour
        </Link>

        <h1 className="mt-4 text-3xl font-bold text-ink">
          Réservez votre projet
        </h1>
        <p className="mt-2 text-muted">
          30 secondes suffisent. Nous vous répondons sous 24h via WhatsApp.
        </p>

        <form action={formAction} className="mt-8 space-y-5">
          <div>
            <label className="block text-sm font-medium text-ink">
              Nom complet *
            </label>
            <input
              name="nom"
              type="text"
              className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
            />
            {erreurs.nom && (
              <p className="mt-1 text-sm text-red-600">{erreurs.nom[0]}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-ink">
              Numéro WhatsApp *
            </label>
            <input
              name="whatsapp"
              type="tel"
              placeholder="+229 XX XX XX XX"
              className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
            />
            {erreurs.whatsapp && (
              <p className="mt-1 text-sm text-red-600">{erreurs.whatsapp[0]}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-ink">
              Type de besoin *
            </label>
            <select
              name="typeBesoin"
              className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
            >
              <option value="">— Choisir —</option>
              <option value="achat">Achat / Sourcing</option>
              <option value="visite-usine">Visite d'usine</option>
              <option value="controle-qualite">Contrôle qualité</option>
              <option value="logistique">Logistique / Expédition</option>
            </select>
            {erreurs.typeBesoin && (
              <p className="mt-1 text-sm text-red-600">{erreurs.typeBesoin[0]}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-ink">
              Catégorie de produit *
            </label>
            <input
              name="categorie"
              type="text"
              placeholder="Ex. cosmétiques, pièces auto…"
              className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
            />
            {erreurs.categorie && (
              <p className="mt-1 text-sm text-red-600">{erreurs.categorie[0]}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-ink">
              Message (optionnel)
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="Quantité, budget, délais…"
              className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
            />
          </div>

          <button
            type="submit"
            disabled={enCours}
            className="w-full rounded-lg bg-brand py-3 font-semibold text-white transition hover:bg-brand-dark disabled:opacity-60"
          >
            {enCours ? "Envoi en cours…" : "Envoyer ma demande"}
          </button>

          <p className="text-center text-xs text-muted">
            Sans engagement · Réponse sous 24h
          </p>
        </form>
      </div>
    </main>
  );
}