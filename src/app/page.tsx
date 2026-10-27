import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Parcours from "@/components/Parcours";
import FooterCTA from "@/components/FooterCTA";

export default function Accueil() {
  return (
    <main>
      <Hero />
      <Services />
      <Parcours />
      <FooterCTA />
    </main>
  );
}