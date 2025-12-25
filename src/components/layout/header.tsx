'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, Heart, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { Logo } from '../logo';

const navLinks = [
  { href: '/a-propos/histoire', label: 'À propos' },
  { href: '/#clubs', label: 'Clubs' },
  { href: '/#actualites', label: 'Actualités' },
  { href: '/#adhesion', label: 'Adhésion' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith('/#')) {
      // It's an anchor link, but we might not be on the home page.
      // First, navigate to home page if we are not there.
      if (window.location.pathname !== '/') {
        window.location.href = `/${href.substring(1)}`;
        return;
      }
      
      const id = href.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white shadow-lg py-2 dark:bg-slate-900/80 dark:backdrop-blur-sm'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => window.scrollTo(0, 0)}
        >
          <Logo className="h-10 w-auto" />
          <span
            className={cn(
              'text-2xl font-bold tracking-tight',
              isScrolled
                ? 'text-slate-900 dark:text-white'
                : 'text-white'
            )}
          >
            Grison<span className="text-primary">Club</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith('/#')) {
                  e.preventDefault();
                  handleNavClick(link.href);
                }
              }}
              className={cn(
                'font-medium transition-colors hover:text-primary',
                isScrolled
                  ? 'text-slate-600 dark:text-slate-300'
                  : 'text-slate-200'
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg hover:shadow-emerald-500/30">
            <Heart size={18} className="mr-2" />
            Faire un Don
          </Button>
        </nav>

        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  isScrolled
                    ? 'text-slate-900 dark:text-white'
                    : 'text-white',
                  'hover:bg-white/10'
                )}
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </Button>
            </SheetTrigger>
            <SheetContent
              side="top"
              className="bg-white dark:bg-slate-900 py-4"
            >
              <div className="flex flex-col items-center gap-4">
                {navLinks.map(link => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      onClick={(e) => {
                          if (link.href.startsWith('/#')) {
                              e.preventDefault();
                              handleNavClick(link.href);
                          } else {
                              setIsMenuOpen(false);
                          }
                      }}
                      className="text-slate-600 dark:text-slate-300 font-medium text-lg py-2"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
                <Button className="bg-primary text-white px-8 py-3 rounded-full font-bold mt-2">
                  Faire un Don
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
