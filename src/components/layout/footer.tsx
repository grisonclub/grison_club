'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Twitter, Facebook, Instagram, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-bold">G</div>
              <span className="text-2xl font-bold text-white">Grison<span className="text-primary">Club</span></span>
            </div>
            <p className="mb-6 max-w-sm">
              Association apolitique et à but non lucratif. Nous formons les leaders de demain pour une Guinée prospère et solidaire.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><Instagram size={18} /></a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Liens Rapides</h4>
            <ul className="space-y-3">
              <li><Link href="#a-propos" className="hover:text-primary transition-colors">Qui sommes-nous</Link></li>
              <li><Link href="#clubs" className="hover:text-primary transition-colors">Nos Clubs</Link></li>
              <li><Link href="#actualites" className="hover:text-primary transition-colors">Événements</Link></li>
              <li><Link href="#adhesion" className="hover:text-primary transition-colors">Adhésion</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-1" />
                <span>Coyah, République de Guinée</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                <span>contact@grisonclub.gn</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                <span>+224 600 00 00 00</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {year} Grison Club. Tous droits réservés.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary">Mentions Légales</a>
            <a href="#" className="hover:text-primary">Politique de Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
