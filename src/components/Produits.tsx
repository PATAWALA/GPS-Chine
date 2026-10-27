import Image from "next/image";
import Link from "next/link";
import { produits } from "@/lib/produits";

export default function Produits() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-ink md:text-4xl">
            Produits sourcés depuis la Chine
          </h2>
          <p className="mt-3 text-muted">
            Quelques exemples réels de projets livrés.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {produits.map((p) => (
            <Link
              key={p.id}
              href={`/devis?categorie=${encodeURIComponent(p.categorie)}`}
              className="group relative block aspect-square overflow-hidden rounded-xl bg-slate-200"
            >
              <Image
                src={p.image}
                alt={p.categorie}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                <p className="text-sm font-semibold text-white">
                  {p.categorie}
                </p>
                <p className="text-xs text-white/80">→ {p.destination}</p>
                {p.description && (
                  <p className="mt-1 text-[11px] text-white/70">
                    {p.description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/devis"
            className="inline-block rounded-lg bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-dark"
          >
            Demander un devis pour mon produit
          </Link>
        </div>
      </div>
    </section>
  );
}
