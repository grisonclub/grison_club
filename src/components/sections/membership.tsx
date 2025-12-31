'use client';

import { Button } from '@/components/ui/button';
import { Handshake, PlusCircle } from 'lucide-react';

export default function Membership() {
  return (
    <section id="adhesion" className="py-16 bg-amber-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <Handshake className="text-primary" size={56} strokeWidth={1.5} />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Prêt·e à faire <span className="text-primary">partie de l&apos;action</span> ?
        </h2>
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8 text-lg">
          Que vous soyez un leader dans l&apos;âme ou un passionné cherchant à faire la différence, il y a une place pour vous.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-slate-800 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600 text-white px-8 py-3 rounded-full font-bold text-lg">
            Rejoindre un Club
          </Button>
          <Button size="lg" variant="default" className="bg-primary hover:bg-emerald-500 text-white px-8 py-3 rounded-full font-bold text-lg">
            <PlusCircle size={20} className="mr-2" />
            Créer un Club
          </Button>
        </div>
      </div>
    </section>
  );
}
