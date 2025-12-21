'use client';

import { ArrowUp } from 'lucide-react';

export default function PreFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-8 border-b border-t border-slate-700/50">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wider">
            Former, Inspirer, Agir pour Demain
          </h2>
          <button
            onClick={scrollToTop}
            aria-label="Retourner en haut de la page"
            className="w-12 h-12 rounded-full border-2 border-slate-500 text-slate-400 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all"
          >
            <ArrowUp size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
