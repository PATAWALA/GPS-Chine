import Hero from "@/components/Hero";
import Perruques from "@/components/Perruques";
import Parcours from "@/components/Parcours";
import Services from "@/components/Services";
import FooterCTA from "@/components/FooterCTA";

export default function Accueil() {
  return (
    <main>
      <Hero />
      <Perruques />
      <Parcours />
      <Services />
      <FooterCTA />
    </main>
  );
}