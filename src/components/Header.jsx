"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { name } = siteConfig;
  const { links } = siteConfig.nav;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/85 backdrop-blur-md border-b border-slate-800 light:bg-white/90 light:border-slate-200">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#inicio"
          className="text-xl font-bold tracking-tight text-white light:text-slate-900"
        >
          {name}
        </a>

        <div className="flex items-center gap-2 md:gap-4">
          <ThemeToggle />

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-slate-300 hover:text-green-300 transition-colors light:text-slate-600 light:hover:text-green-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-slate-300 light:text-slate-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="md:hidden bg-slate-900 border-b border-slate-800 px-6 pb-4 space-y-3 light:bg-slate-100 light:border-slate-200">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block text-sm text-slate-300 hover:text-green-300 transition-colors light:text-slate-600 light:hover:text-green-700"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
