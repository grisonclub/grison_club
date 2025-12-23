'use client';

import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const timelineData = [
  {
    year: '2021',
    title: 'Fondation & Vision',
    description: 'Le Grison Club est officiellement créé par un groupe de jeunes leaders visionnaires avec l\'ambition de catalyser un changement positif en Guinée, en se concentrant sur l\'éducation, la culture et l\'environnement.',
  },
  {
    year: '2022',
    title: 'Premières Actions',
    description: 'Lancement des premières campagnes de terrain, incluant des sessions de sensibilisation dans les écoles et des opérations de reboisement, marquant le début de notre impact communautaire.',
  },
  {
    year: '2023',
    title: 'Expansion des Clubs',
    description: 'Création de nouvelles branches affiliées comme le "Grison English Club" et "Amazone Grison Club" pour diversifier nos actions et atteindre un public plus large avec des programmes spécialisés.',
  },
  {
    year: '2024',
    title: 'Partenariats Stratégiques',
    description: 'Établissement de partenariats clés avec des organisations locales et internationales pour renforcer nos programmes et augmenter la portée de nos initiatives de développement durable.',
  },
  {
    year: 'Avenir',
    title: 'Vision 2030',
    description: 'Définition de notre feuille de route "Vision 2030" axée sur l\'innovation sociale, le leadership des jeunes et la consolidation de notre réseau pour un impact durable à l\'échelle nationale.',
  },
];

export default function HistoryTimeline() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on('select', onSelect);
    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  const handleTimelineClick = (index: number) => {
    api?.scrollTo(index);
  };
  
  const scrollPrev = () => {
    api?.scrollPrev();
  };
  
  const scrollNext = () => {
    api?.scrollNext();
  };


  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Notre Parcours</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Les grandes étapes de notre histoire</h3>
        </div>
        
        <div className="relative">
          <div className="flex items-center justify-between mb-8 px-10">
              <div className="absolute left-0 top-1/2 -translate-y-1/2">
                <Button variant="ghost" size="icon" onClick={scrollPrev} disabled={!api?.canScrollPrev()} className="rounded-full h-12 w-12">
                  <ArrowLeft />
                </Button>
              </div>

              <div className="flex-grow items-center justify-center relative hidden md:flex">
                  <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-300 dark:bg-slate-700" />
                  <div className="flex justify-between w-full relative">
                      {timelineData.map((item, index) => (
                          <div key={index} className="z-10 text-center">
                              <button
                                  onClick={() => handleTimelineClick(index)}
                                  className="relative flex flex-col items-center focus:outline-none"
                              >
                                  <div className={cn("w-4 h-4 rounded-full bg-slate-300 dark:bg-slate-700 transition-colors", { 'bg-primary dark:bg-primary': current === index })}></div>
                                  <div className="mt-4 text-center">
                                      <p className={cn("font-bold transition-colors", { 'text-primary': current === index })}>{item.year}</p>
                                      <p className="text-sm text-slate-500 dark:text-slate-400">{item.title}</p>
                                  </div>
                              </button>
                          </div>
                      ))}
                  </div>
              </div>
              
              <div className="absolute right-0 top-1/2 -translate-y-1/2">
                <Button variant="ghost" size="icon" onClick={scrollNext} disabled={!api?.canScrollNext()} className="rounded-full h-12 w-12">
                  <ArrowRight />
                </Button>
              </div>
          </div>


          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {timelineData.map((item, index) => (
                <CarouselItem key={index}>
                    <div className="p-1">
                    <Card className="bg-white dark:bg-slate-800 border-primary/20 shadow-lg">
                        <CardContent className="flex flex-col items-center justify-center p-8 gap-4 text-center">
                          <h4 className="text-2xl font-bold text-primary">{item.title}</h4>
                          <p className="text-slate-600 dark:text-slate-300 max-w-xl mx-auto">{item.description}</p>
                        </CardContent>
                    </Card>
                    </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
