import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import WhatsAppFlottant from "@/components/WhatsAppFlottant";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Grace Patricia Services Chine — Achat et bourses",
  description:
    "Achat en Chine, bourses d'études, visite d'usine et contrôle qualité. Réservez en 30 secondes via WhatsApp.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="antialiased">
        <Header />
        {children}
        <WhatsAppFlottant />
      </body>
    </html>
  );
}