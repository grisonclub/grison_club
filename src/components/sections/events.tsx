import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const events = [
  {
    title: 'Campagne de Reboisement National',
    date: '15 Août 2024',
    description: 'Rejoignez-nous pour planter 10 000 arbres à travers le pays et lutter contre la déforestation.',
    imageId: 'event-reforestation',
  },
  {
    title: 'Séminaire sur l\'Entrepreneuriat Jeune',
    date: '25 Septembre 2024',
    description: 'Un séminaire inspirant avec des leaders pour outiller les jeunes entrepreneurs guinéens.',
    imageId: 'event-seminar',
  },
  {
    title: 'Atelier de Codage pour Débutants',
    date: '10-12 Octobre 2024',
    description: 'Initiez-vous au monde de la programmation avec nos experts. Aucune expérience requise !',
    imageId: 'event-workshop',
  },
  {
    title: 'Festival Culturel de Conakry',
    date: '18 Novembre 2024',
    description: 'Célébration de la diversité culturelle guinéenne avec musique, danse et artisanat.',
    imageId: 'culture-pillar',
  },
];

export default function Events() {
  return (
    <section id="events" className="w-full py-16 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Actualités & Événements</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Rejoignez nos actions</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Découvrez nos derniers événements, campagnes et actualités. Impliquez-vous et faites partie du changement.
            </p>
          </div>
        </div>
        <div className="relative mt-12">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {events.map((event, index) => {
                const imageData = PlaceHolderImages.find(img => img.id === event.imageId);
                return (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="overflow-hidden h-full flex flex-col">
                        <div className="relative aspect-video">
                          <Image
                             src={imageData?.imageUrl || ''}
                             alt={imageData?.description || event.title}
                             data-ai-hint={imageData?.imageHint}
                             fill
                             className="object-cover"
                          />
                           <Badge className="absolute top-3 right-3" variant="secondary">{event.date}</Badge>
                        </div>
                        <CardContent className="p-6 flex-1 flex flex-col justify-between">
                          <div>
                            <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                            <p className="text-sm text-muted-foreground">{event.description}</p>
                          </div>
                          <Button variant="link" className="p-0 h-auto self-start mt-4">
                            En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
