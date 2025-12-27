import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import ReboisementImage from '../../../image/Reboisement.jpeg';

const events = [
  { title: 'Campagne de Reboisement', category: 'Environnement', date: '12 Oct 2024', img: ReboisementImage },
  { title: 'Séminaire Leadership', category: 'Éducation', date: '05 Nov 2024', img: 'https://images.unsplash.com/photo-1554936970-ce06538caf54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { title: 'Dons aux Orphelinats', category: 'Social', date: '20 Déc 2024', img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
];

export default function Events() {
  return (
    <section id="projets" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">Nos Projets Récents</h2>
            <p className="text-slate-600 dark:text-slate-400">Suivez nos dernières initiatives et événements marquants.</p>
          </div>
          <Button variant="link" className="hidden md:flex items-center gap-2 text-primary font-bold hover:underline">
            Voir tout <ArrowRight size={20}/>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((news, idx) => (
            <Card key={idx} className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
              <div className="relative h-48 overflow-hidden">
                <Image src={news.img} alt={news.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <Badge className="absolute top-4 left-4 bg-white/90 backdrop-blur text-slate-800">
                    {news.category}
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 text-sm mb-3">
                  <Calendar size={14} /> {news.date}
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-primary transition-colors">{news.title}</h3>
                <Button variant="link" className="p-0 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary">
                  Lire l'article <ChevronRight size={16} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
