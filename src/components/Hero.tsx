import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-brand to-brand-dark text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-sm font-medium">
            🇨🇳 GPS Chine · 17 000 abonnés
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
            Votre projet en Chine,
            <br />
            <span className="text-accent">réservé en 30 secondes.</span>
          </h1>

          <p className="mt-5 text-lg text-white/90">
            Visite d'usine, contrôle qualité, achat et logistique.
            Décrivez votre besoin, on s'occupe du reste.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/devis"
              className="rounded-lg bg-accent px-6 py-3 text-center font-semibold text-ink transition hover:brightness-110"
            >
              Réserver mon projet
            </Link>
            <a
              href="#services"
              className="rounded-lg border border-white/30 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10"
            >
              Voir les services
            </a>
          </div>

          <p className="mt-4 text-sm text-white/70">
            Sans engagement · Réponse sous 24h via WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
}