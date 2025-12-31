
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
import { cn } from '@/lib/utils';

const timelineData = [
  {
    year: '2017',
    title: 'Fondation & Vision',
    description: "C’est au Complexe Scolaire Ahmadou Dieng que le club voit le jour, porté par l’initiative de trois jeunes élèves — Mohamed Chérif Sow, Abdourahmane Barry et Djan Sow — ont posé les bases d’un club dédié à l’expression orale et à la confiance en soi.",
  },
  {
    year: '2018',
    title: 'Premières Compétitions',
    description: 'Lancement de la première compétition de débat, marquant le début d\'une série d\'initiatives éducatives pour renforcer l\'esprit critique et la confiance en soi.',
  },
  {
    year: '2022',
    title: 'Croissance & Impact National',
    description: 'L\'association co-organise la Semaine Nationale du Mérite Scolaire (SENAMSCO), affirmant sa présence sur la scène nationale.',
  },
  {
    year: 'Aujourd\'hui',
    title: 'Diversification des Actions',
    description: 'Fidèle à sa mission, le Grison Club étend ses actions à l\'environnement, la santé et le développement communautaire.',
  },
  {
    year: 'Idéal',
    title: 'Une Mission Continue',
    description: 'Depuis sa création, le club poursuit le même idéal : former des citoyens conscients, responsables et engagés pour leurs communautés.',
  },
];

export default function HistoryTimeline() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = (api: CarouselApi) => {
      setCurrent(api.selectedScrollSnap());
    };
    
    api.on('select', onSelect);
    api.on('reInit', onSelect);

    return () => {
      api.off('select', onSelect);
      api.off('reInit', onSelect);
    };
  }, [api]);

  const progressPercentage = count > 0 ? (current / (count - 1)) * 100 : 0;
  
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Notre Parcours</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Les grandes étapes de notre histoire</h3>
           <p className="text-slate-600 dark:text-slate-400 mt-2 max-w-2xl mx-auto">
            Découvrez l'évolution de notre engagement, de la vision initiale à nos ambitions futures.
          </p>
        </div>

        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <div className="relative mb-8">
              <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-0.5 bg-slate-300 dark:bg-slate-700"></div>
              <div 
                className="absolute top-1/2 -translate-y-1/2 left-0 h-0.5 bg-primary transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              ></div>
          </div>
          
          <CarouselContent className="-ml-4">
            {timelineData.map((item, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="flex flex-col items-center text-center h-full">
                  
                  {/* Year */}
                  <div className="mb-4 pt-4">
                      <span className={cn('font-bold text-lg transition-colors', index === current ? 'text-primary' : 'text-slate-500 dark:text-slate-400')}>
                          {item.year}
                      </span>
                  </div>

                  {/* Timeline Bar and Dot */}
                  <div className="relative w-full flex justify-center items-center h-8">
                      <div className={cn(
                          'absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-background border-2 rounded-sm rotate-45 z-10 transition-colors',
                          index <= current ? 'border-primary' : 'border-slate-300 dark:border-slate-700'
                      )}></div>
                  </div>
                  
                  {/* Card */}
                  <div className="p-1 h-full w-full">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg h-full border border-transparent hover:border-primary/50 transition-colors">
                      <h4 className="font-bold text-lg mb-2 text-slate-800 dark:text-white">{item.title}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
