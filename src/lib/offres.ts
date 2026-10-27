export type Offre = {
  id: "achat" | "bourses";
  titre: string;
  sousTitre: string;
  etapes: string[];
  whatsappGroupe: string;
  whatsappMessage: string;
  cta: string;
};

export const offres: Offre[] = [
  {
    id: "achat",
    titre: "Acheter en Chine 🇨🇳",
    sousTitre:
      "Envoyez la photo de vos articles, on vérifie les prix sur Alibaba et on lance votre commande.",
    etapes: [
      "Envoyez la photo des articles + quantités",
      "Vérifiez les prix sur alibaba.com",
      "Déposez 20 000 fr (31 € / 36 $) — déduit de votre facture",
      "Recevez votre facture et rejoignez le groupe d'achat",
    ],
    whatsappGroupe: "https://chat.whatsapp.com/IvWVvDEJwVv3NvjIxTTzgA",
    whatsappMessage:
      "Bonjour, je souhaite commander depuis la Chine. Voici les articles :",
    cta: "Commander depuis la Chine",
  },
  {
    id: "bourses",
    titre: "Bourses d'études en Chine 🎓",
    sousTitre:
      "Inscription 120 $ (72 000 fr). Nous montons votre dossier et vous accompagnons jusqu'à l'admission.",
    etapes: [
      "Remplissez le formulaire de candidature",
      "Payez les frais d'inscription (120 $ / 72 000 fr)",
      "Nous préparons votre dossier",
      "Rejoignez le groupe WhatsApp bourses",
    ],
    whatsappGroupe: "https://chat.whatsapp.com/E4Io1YQnIpi3bLeTHOFca9",
    whatsappMessage:
      "Bonjour, je souhaite obtenir une bourse d'études en Chine.",
    cta: "Obtenir ma bourse",
  },
];