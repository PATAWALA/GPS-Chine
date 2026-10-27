const services = [
  {
    titre: "Visite d'usine",
    description:
      "Nous nous déplaçons sur place pour vérifier votre fournisseur, la production et les conditions réelles.",
    icone: "🏭",
  },
  {
    titre: "Contrôle qualité",
    description:
      "Inspection avant expédition, photos et rapport détaillé pour éviter les mauvaises surprises.",
    icone: "🔍",
  },
  {
    titre: "Achat & Logistique",
    description:
      "Sourcing, négociation, regroupement de colis et expédition vers votre pays.",
    icone: "📦",
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-ink md:text-4xl">
          Ce que nous faisons pour vous
        </h2>
        <p className="mt-3 text-muted">
          Trois services, un seul interlocuteur en Chine.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.titre}
            className="rounded-xl border border-slate-200 bg-white p-6 transition hover:border-brand hover:shadow-lg"
          >
            <div className="text-3xl">{service.icone}</div>
            <h3 className="mt-4 text-xl font-semibold text-ink">
              {service.titre}
            </h3>
            <p className="mt-2 text-sm text-muted">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}