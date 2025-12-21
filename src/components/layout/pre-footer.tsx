'use client';

import { ArrowUp } from 'lucide-react';

export default function PreFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center text-center gap-8 py-10 border-b border-t border-slate-700/50">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wider max-w-2xl">
            Former, <span className="text-primary">Inspirer</span>, <span className="text-primary">Agir</span> pour Demain
          </h2>
          <button
            onClick={scrollToTop}
            aria-label="Retourner en haut de la page"
            className="w-14 h-14 rounded-full border-2 border-slate-500 text-slate-400 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all flex-shrink-0"
          >
            <ArrowUp size={28} />
          </button>
        </div>
      </div>
    </div>
  );
}
