import Link from "next/link";
import { offres } from "@/lib/offres";

export default function Parcours() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-ink md:text-4xl">
            Deux façons de travailler avec nous
          </h2>
          <p className="mt-3 text-muted">
            Choisissez votre parcours, on s'occupe du reste.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {offres.map((o) => (
            <div
              key={o.id}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-ink">{o.titre}</h3>
              <p className="mt-3 text-sm text-muted">{o.sousTitre}</p>

              <ol className="mt-6 space-y-3">
                {o.etapes.map((etape, i) => (
                  <li key={i} className="flex gap-3 text-sm text-ink">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand">
                      {i + 1}
                    </span>
                    <span>{etape}</span>
                  </li>
                ))}
              </ol>

              <Link
                href={`/${o.id}`}
                className="mt-8 block rounded-lg bg-brand py-3 text-center font-semibold text-white transition hover:bg-brand-dark"
              >
                {o.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}