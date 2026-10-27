import Link from "next/link";

export default function MerciPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-md text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-3xl">
          ✅
        </div>
        <h1 className="mt-6 text-3xl font-bold text-ink">
          Demande reçue !
        </h1>
        <p className="mt-3 text-muted">
          Nous revenons vers vous sous 24h via WhatsApp pour discuter de votre
          projet.
        </p>

        <div className="mt-8 space-y-3">
          <a
            href="https://wa.me/22900000000"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            Discuter maintenant sur WhatsApp
          </a>
          <Link
            href="/"
            className="block rounded-lg border border-slate-300 py-3 font-semibold text-ink transition hover:bg-slate-100"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </main>
  );
}