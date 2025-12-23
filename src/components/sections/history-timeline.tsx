'use client';

import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

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
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on('select', onSelect);
    api.on('reInit', onSelect);

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
            <div className="relative px-10 md:px-16">
                 <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-300 dark:bg-slate-700" />
                 <CarouselContent className="-ml-4">
                    {timelineData.map((item, index) => (
                        <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 group">
                             <div className="flex flex-col items-center text-center relative pt-8">
                                <div className="absolute top-1/2 w-full flex justify-center">
                                    <div className={cn("w-3 h-3 rounded-sm bg-slate-300 dark:bg-slate-700 transition-all transform", 
                                    "group-data-[in-view=true]:bg-primary group-data-[in-view=true]:scale-150"
                                    )}></div>
                                </div>
                                <div className={cn("absolute top-0 transition-opacity",
                                    "group-data-[in-view=true]:opacity-100",
                                    "group-data-[in-view=false]:opacity-50"
                                )}>
                                    <p className="font-bold text-sm text-slate-700 dark:text-slate-300">{item.year}</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">{item.title}</p>
                                </div>
                                <div className="pt-8 w-full">
                                    <Card className={cn(
                                        "bg-transparent border-slate-300 dark:border-slate-700 rounded-2xl transition-all",
                                        "group-data-[in-view=true]:bg-white dark:group-data-[in-view=true]:bg-slate-800 group-data-[in-view=true]:border-primary/30 group-data-[in-view=true]:shadow-lg"
                                        )}>
                                        <CardContent className="p-6">
                                            <h4 className="font-bold text-lg mb-2 text-slate-800 dark:text-white">{item.title}</h4>
                                            <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                 </CarouselContent>
            </div>

          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  );
}
