import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Produits from "@/components/Produits";
import FooterCTA from "@/components/FooterCTA";

export default function Accueil() {
  return (
    <main>
      <Hero />
      <Services />
      <Produits />
      <FooterCTA />
    </main>
  );
}