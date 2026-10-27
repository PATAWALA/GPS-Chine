import Image from "next/image";
import { perruques } from "@/lib/perruques";

export default function Perruques() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
            ⭐ Produit phare
          </span>
          <h2 className="mt-4 text-3xl font-bold text-ink md:text-4xl">
            Perruques commandées depuis la Chine
          </h2>
          <p className="mt-3 text-muted">
            Quelques modèles récents livrés à nos clientes. Commandez le vôtre
            via WhatsApp.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {perruques.map((p) => (
            <div
              key={p.id}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:shadow-lg"
            >
              <div className="relative aspect-square overflow-hidden bg-slate-100">
                <Image
                  src={p.image}
                  alt={p.nom}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-ink md:text-base">
                  {p.nom}
                </h3>
                <p className="mt-1 text-xs text-muted">{p.description}</p>
                <p className="mt-2 text-sm font-semibold text-brand">
                  {p.prixIndicatif}
                </p>
                <a
                  href={`https://wa.me/22900000000?text=${encodeURIComponent(
                    `Bonjour, je suis intéressée par la perruque "${p.nom}". Pouvez-vous me donner plus d'infos ?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 block rounded-lg bg-green-600 py-2 text-center text-xs font-semibold text-white transition hover:bg-green-700"
                >
                  Commander sur WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://chat.whatsapp.com/IvWVvDEJwVv3NvjIxTTzgA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-dark"
          >
            Voir tous les modèles dans le groupe
          </a>
        </div>
      </div>
    </section>
  );
}