import Link from "next/link";

export default function FooterCTA() {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto max-w-4xl px-6 py-16 text-center md:py-20">
        <h2 className="text-3xl font-bold md:text-4xl">
          Prêt à lancer votre projet ?
        </h2>
        <p className="mt-3 text-white/70">
          Décrivez votre besoin en 30 secondes. Nous revenons vers vous sous 24h.
        </p>
        <Link
          href="/devis"
          className="mt-8 inline-block rounded-lg bg-accent px-8 py-3 font-semibold text-ink transition hover:brightness-110"
        >
          Réserver mon projet
        </Link>
        <p className="mt-8 text-sm text-white/50">
          GPS Chine · 17 000 abonnés · Réponse via WhatsApp
        </p>
      </div>
    </section>
  );
}