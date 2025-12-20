'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Jeunes en action"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center text-white mt-16">
        <div className="inline-block px-4 py-1.5 rounded-full border border-emerald-400/30 bg-emerald-900/30 backdrop-blur-sm text-emerald-300 font-semibold mb-6">
          Association à but non lucratif • Guinée
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
          Former, Inspirer, <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
            Agir pour Demain
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Rejoignez le mouvement Grison Club pour une transformation sociale durable à travers l'éducation, la culture et la protection de notre environnement.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Button onClick={() => scrollToSection('adhesion')} size="lg" className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-emerald-500/40">
            Devenir Membre <ChevronRight size={20} className="ml-2" />
          </Button>
          <Button onClick={() => scrollToSection('clubs')} variant="outline" size="lg" className="w-full md:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all">
            Découvrir nos Clubs
          </Button>
        </div>
      </div>
    </section>
  );
}
