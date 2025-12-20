'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronRight, MapPin } from 'lucide-react';
import HeaderImage from '../../../image/Image entête.png';


export default function Hero() {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex justify-start overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={HeaderImage}
          alt="Jeunes en action"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-left text-white pt-48">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1.5 rounded-full border border-emerald-400/30 bg-emerald-900/30 backdrop-blur-sm text-emerald-300 font-semibold mb-6">
            Association à but non lucratif • Guinée
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
            Former, Inspirer, <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
              Agir pour Demain
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-xl mb-10 leading-relaxed">
            Rejoignez le mouvement Grison Club pour une transformation sociale durable à travers l'éducation, la culture et la protection de notre environnement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Button onClick={() => scrollToSection('adhesion')} size="lg" className="w-full sm:w-auto bg-primary hover:bg-emerald-500 text-white hover:text-slate-900 px-8 py-3 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-emerald-500/40">
              Devenir Membre <ChevronRight size={20} className="ml-2" />
            </Button>
            <Button onClick={() => scrollToSection('clubs')} variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-full font-bold text-lg transition-all">
              Découvrir nos Clubs
            </Button>
          </div>
          <div className="mt-8">
            <div className="inline-block bg-slate-800/50 backdrop-blur border border-white/10 p-4 rounded-xl">
              <p className="text-xs font-bold text-slate-300 uppercase tracking-wider">Siège Social</p>
              <div className="flex items-center gap-2 text-slate-200 mt-2">
                <MapPin size={16} className="text-primary" />
                <span className="font-medium">Coyah, République de Guinée</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
