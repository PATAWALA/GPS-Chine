"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [ouvert, setOuvert] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        {/* Logo + nom */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-sm font-bold text-white">
            GP
          </div>
          <div className="leading-tight">
            <p className="text-sm font-bold text-ink">Grace Patricia</p>
            <p className="text-[11px] text-muted">Services Chine 🇨🇳</p>
          </div>
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/achat" className="text-sm font-medium text-ink hover:text-brand">
            Achat en Chine
          </Link>
          <Link href="/bourses" className="text-sm font-medium text-ink hover:text-brand">
            Bourses d'études
          </Link>
          <a
            href="https://wa.me/22900000000"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-700"
          >
            WhatsApp
          </a>
        </nav>

        {/* Bouton mobile : WhatsApp direct */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="https://wa.me/22900000000"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-green-600 px-3 py-2 text-xs font-semibold text-white"
          >
            WhatsApp
          </a>
          <button
            onClick={() => setOuvert(!ouvert)}
            aria-label="Menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 text-ink"
          >
            {ouvert ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Menu mobile déroulant */}
      {ouvert && (
        <nav className="border-t border-slate-200 bg-white px-4 py-3 md:hidden">
          <Link
            href="/achat"
            onClick={() => setOuvert(false)}
            className="block rounded-lg px-3 py-3 text-sm font-medium text-ink hover:bg-slate-50"
          >
            Achat en Chine
          </Link>
          <Link
            href="/bourses"
            onClick={() => setOuvert(false)}
            className="block rounded-lg px-3 py-3 text-sm font-medium text-ink hover:bg-slate-50"
          >
            Bourses d'études
          </Link>
        </nav>
      )}
    </header>
  );
}-m '89dyea$
