'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import { Logo } from '../logo';

const XLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    width="18px"
    height="18px"
    fill="currentColor"
  >
    <path d="M 5.9199219 6 L 20.580078 25.044922 L 6.2304688 44 L 9.4101562 44 L 21.986328 27.525391 L 31.986328 44 L 44 44 L 28.681641 24.232422 L 42.171875 6 L 38.992188 6 L 27.232422 21.693359 L 17.933594 6 L 5.9199219 6 z M 11.181641 8 L 16.599609 8 L 40.240234 42 L 34.822266 42 L 11.181641 8 z" />
  </svg>
);

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Logo className="h-8 w-auto" />
              <span className="text-2xl font-bold text-white">
                Grison<span className="text-primary">Club</span>
              </span>
            </div>
            <p className="mb-6 max-w-sm">
              Association apolitique et à but non lucratif. Nous formons les leaders de demain pour un monde prospère et solidaire.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=100079015705619"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://x.com/GrisonClub"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              >
                <XLogo />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Liens Rapides</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/a-propos"
                  className="hover:text-primary transition-colors"
                >
                  Qui sommes-nous
                </Link>
              </li>
              <li>
                <Link
                  href="/#clubs"
                  className="hover:text-primary transition-colors"
                >
                  Nos Clubs
                </Link>
              </li>
              <li>
                <Link
                  href="/#projets"
                  className="hover:text-primary transition-colors"
                >
                  Nos Projets
                </Link>
              </li>
              <li>
                <Link
                  href="/#adhesion"
                  className="hover:text-primary transition-colors"
                >
                  Adhésion
                </Link>
              </li>
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
                <span>grisonclub@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                <span>+224 611 10 52 20</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {year} Grison Club. Tous droits réservés.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary">
              Mentions Légales
            </a>
            <a href="#" className="hover:text-primary">
              Politique de Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
