'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Twitter, Facebook, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // This hook ensures the year is only rendered on the client, avoiding hydration mismatches.
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto grid grid-cols-1 gap-12 px-4 py-16 md:grid-cols-4 md:px-6">
        <div className="flex flex-col items-start gap-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <Logo />
            Grison Club
          </Link>
          <p className="text-sm text-muted-foreground">
            Association apolitique et à but non lucratif.
          </p>
          <p className="text-sm text-muted-foreground">
            Siège social : Coyah, République de Guinée.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-3">
          <div>
            <h3 className="font-headline font-semibold tracking-wider">Navigation</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">Qui sommes-nous</Link></li>
              <li><Link href="#clubs" className="text-sm text-muted-foreground hover:text-primary transition-colors">Nos Clubs</Link></li>
              <li><Link href="#membership" className="text-sm text-muted-foreground hover:text-primary transition-colors">Adhésion</Link></li>
              <li><Link href="#events" className="text-sm text-muted-foreground hover:text-primary transition-colors">Actualités</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold tracking-wider">Légal</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Statuts</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Politique de confidentialité</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Termes & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold tracking-wider">Suivez-nous</h3>
            <div className="mt-4 flex space-x-4">
              <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="h-6 w-6" /></a>
              <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors"><Facebook className="h-6 w-6" /></a>
              <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-6 w-6" /></a>
              <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-6 md:px-6">
          <p className="text-sm text-muted-foreground">&copy; {year} Grison Club. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
