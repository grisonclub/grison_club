import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Gavel, Stethoscope, Users, Wrench } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const clubs = [
  {
    name: 'Grison Médecins',
    description: 'Professionnels de la santé engagés pour l\'accès aux soins.',
    icon: Stethoscope,
    imageId: 'club-medecins',
  },
  {
    name: 'Grison Avocats',
    description: 'Juristes et avocats pour la justice et le droit pour tous.',
    icon: Gavel,
    imageId: 'club-avocats',
  },
  {
    name: 'Grison Youth',
    description: 'La branche jeune, moteur de nos actions sur le terrain.',
    icon: Users,
    imageId: 'club-youth',
  },
  {
    name: 'Grison Ingénieurs',
    description: 'Bâtir l\'avenir de la Guinée avec expertise et innovation.',
    icon: Wrench,
    imageId: 'club-engineers',
  },
];

export default function Clubs() {
  return (
    <section id="clubs" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Nos Clubs</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Un Réseau, Plusieurs Expertises</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Le Grison Club fédère plusieurs branches spécialisées, unissant des professionnels et des jeunes passionnés autour de nos objectifs communs.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-stretch gap-6 py-12 md:grid-cols-2 lg:gap-8 xl:grid-cols-4">
          {clubs.map((club) => {
            const imageData = PlaceHolderImages.find(img => img.id === club.imageId);
            return (
              <Card key={club.name} className="flex flex-col overflow-hidden transition-all hover:shadow-xl hover:-translate-y-2 duration-300 ease-in-out">
                <CardHeader className="p-0">
                  <div className="aspect-[5/3] relative">
                    <Image
                      src={imageData?.imageUrl || ''}
                      alt={imageData?.description || club.name}
                      data-ai-hint={imageData?.imageHint}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <club.icon className="h-8 w-8 text-primary mb-4" />
                    <CardTitle className="text-xl font-bold mb-2">{club.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{club.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
