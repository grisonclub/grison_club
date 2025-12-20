'use client';

import { useState, useTransition } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { BookOpen, Leaf, Palette, Wand2, Loader2, Lightbulb } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { summarizeClubPillars } from '@/ai/flows/summarize-club-pillars';
import { cn } from '@/lib/utils';

const pillarData = {
  education: {
    title: 'Éducation',
    icon: BookOpen,
    description: 'Promouvoir l\'excellence académique et le développement des compétences chez les jeunes pour les préparer aux défis de demain.',
    longDescription: 'Notre pilier Éducation vise à outiller la jeunesse guinéenne en offrant des programmes de tutorat, des ateliers de développement professionnel et un accès à des ressources éducatives de qualité. Nous croyons que l\'éducation est la clé pour libérer le potentiel individuel et catalyser le progrès social durable.',
    imageId: 'education-pillar',
  },
  culture: {
    title: 'Culture',
    icon: Palette,
    description: 'Valoriser et promouvoir la richesse de la culture guinéenne comme vecteur de cohésion sociale et d\'identité.',
    longDescription: 'Le pilier Culture s\'engage à célébrer et préserver le patrimoine culturel guinéen. À travers des événements artistiques, des festivals et des échanges interculturels, nous cherchons à renforcer le tissu social, à encourager la créativité et à partager notre diversité culturelle avec le monde.',
    imageId: 'culture-pillar',
  },
  environment: {
    title: 'Environnement',
    icon: Leaf,
    description: 'Sensibiliser et agir pour la protection de l\'environnement et le développement durable en Guinée.',
    longDescription: 'Conscients des enjeux écologiques, notre pilier Environnement mobilise les communautés autour d\'actions concrètes : campagnes de reboisement, initiatives de recyclage et éducation à la durabilité. Notre objectif est de léguer un environnement sain et résilient aux générations futures.',
    imageId: 'environment-pillar',
  },
};

const pillars = Object.values(pillarData);

export default function About() {
  const [summary, setSummary] = useState('');
  const [error, setError] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleSummarize = () => {
    startTransition(async () => {
      setError('');
      setSummary('');
      try {
        const result = await summarizeClubPillars({
          educationDescription: pillarData.education.longDescription,
          cultureDescription: pillarData.culture.longDescription,
          environmentDescription: pillarData.environment.longDescription,
        });
        setSummary(result.summary);
      } catch (e) {
        console.error(e);
        setError('Une erreur est survenue lors de la génération du résumé. Veuillez réessayer.');
      }
    });
  };

  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Qui sommes-nous</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Transformation sociale et service communautaire.</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Le Grison Club est une association de jeunes déterminés à avoir un impact positif en Guinée. Notre vision est de bâtir une société juste et prospère par l'engagement citoyen autour de nos trois piliers fondamentaux.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {pillars.map((pillar) => {
            const imageData = PlaceHolderImages.find(img => img.id === pillar.imageId);
            return (
              <Card key={pillar.title} className="group overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 duration-300 ease-in-out">
                <CardHeader className="p-0">
                  <div className="relative h-48">
                    <Image
                      src={imageData?.imageUrl || ''}
                      alt={imageData?.description || pillar.title}
                      data-ai-hint={imageData?.imageHint}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute bottom-4 left-4">
                      <pillar.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <CardTitle className="text-2xl font-bold">{pillar.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{pillar.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="mt-12 flex flex-col items-center gap-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Besoin d'un résumé ?</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Laissez notre assistant IA vous donner un aperçu rapide de nos piliers. Cliquez sur le bouton pour générer un résumé concis.
              </p>
            </div>
            <Button
              onClick={handleSummarize}
              disabled={isPending}
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Génération en cours...
                </>
              ) : (
                <>
                  <Wand2 className="mr-2 h-4 w-4" />
                  Générer un résumé avec l'IA
                </>
              )}
            </Button>
            
            {summary && !isPending && (
              <Alert className="max-w-3xl bg-secondary/50 border-primary/20">
                <Lightbulb className="h-4 w-4 text-primary" />
                <AlertTitle className="font-bold text-primary">Résumé par l'IA</AlertTitle>
                <AlertDescription className="text-secondary-foreground">{summary}</AlertDescription>
              </Alert>
            )}
            {error && !isPending && (
                <Alert variant="destructive" className="max-w-3xl">
                    <AlertTitle>Erreur</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}
        </div>
      </div>
    </section>
  );
}
