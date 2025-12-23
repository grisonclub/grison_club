'use client';

import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Progress } from '@/components/ui/progress';

const timelineData = [
  {
    year: '2021',
    title: 'Fondation & Vision',
    description: 'Le Grison Club est officiellement créé par un groupe de jeunes leaders visionnaires avec l\'ambition de catalyser un changement positif en Guinée.',
  },
  {
    year: '2022',
    title: 'Premières Actions',
    description: 'Lancement des premières campagnes de terrain, incluant des sessions de sensibilisation dans les écoles et des opérations de reboisement.',
  },
  {
    year: '2023',
    title: 'Expansion des Clubs',
    description: 'Création de nouvelles branches comme le "Grison English Club" et "Amazone Grison Club" pour diversifier nos actions.',
  },
  {
    year: '2024',
    title: 'Partenariats Stratégiques',
    description: 'Établissement de partenariats clés avec des organisations locales et internationales pour renforcer nos programmes.',
  },
  {
    year: 'Avenir',
    title: 'Vision 2030',
    description: 'Définition de notre feuille de route "Vision 2030" axée sur l\'innovation sociale et le leadership des jeunes.',
  },
];

export default function HistoryTimeline() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [progress, setProgress] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = (api: CarouselApi) => {
      setCurrent(api.selectedScrollSnap());
      const newProgress = (api.selectedScrollSnap() / (timelineData.length - 1)) * 100;
      setProgress(newProgress);
    };

    api.on('select', onSelect);
    api.on('reInit', onSelect);

    // Initial set
    onSelect(api);

    return () => {
      api.off('select', onSelect);
      api.off('reInit', onSelect);
    };
  }, [api]);

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Notre Parcours</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Les grandes étapes de notre histoire</h3>
           <p className="text-slate-600 dark:text-slate-400 mt-2 max-w-2xl mx-auto">
            Découvrez l'évolution de notre engagement, de la vision initiale à nos ambitions futures.
          </p>
        </div>

        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <div className="relative mb-8 px-10 md:px-16">
            <div className="flex justify-between">
              {timelineData.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center w-full relative">
                  <div className={`font-bold text-sm ${index === current ? 'text-primary' : 'text-slate-500 dark:text-slate-400'}`}>{item.year}</div>
                  <div className={`text-xs ${index === current ? 'text-slate-800 dark:text-slate-200' : 'text-slate-400'}`}>{item.title}</div>
                </div>
              ))}
            </div>
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-300 dark:bg-slate-700 mt-2.5">
                <Progress value={progress} className="h-0.5 bg-primary" />
            </div>
             <div className="flex justify-between absolute top-1/2 w-full mt-2.5">
                {timelineData.map((_, index) => (
                    <div key={index} className="flex justify-center w-full">
                         <div className={`w-3 h-3 rounded-full ${index <= current ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-600'} transition-colors`}></div>
                    </div>
                ))}
            </div>
          </div>
          
          <CarouselContent className="-ml-4">
            {timelineData.map((item, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg h-full border border-transparent hover:border-primary/50 transition-colors">
                    <h4 className="font-bold text-lg mb-2 text-slate-800 dark:text-white">{item.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
