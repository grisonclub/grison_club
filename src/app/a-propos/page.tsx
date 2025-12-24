import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Award, Target, Users, BookOpen, ArrowRight } from 'lucide-react';
import placeholderImages from '@/lib/placeholder-images.json';
import Link from 'next/link';
import HistoryTimeline from '@/components/sections/history-timeline';
import BureauExecutif from '@/components/sections/bureau-executif';

const founderImage = placeholderImages.placeholderImages.find(p => p.imageHint === 'youth action');
const aboutHeroImage = placeholderImages.placeholderImages.find(p => p.id === 'event-seminar');
const missionImage = placeholderImages.placeholderImages.find(p => p.imageHint === 'education learning');


export default function AboutPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
            {aboutHeroImage && (
              <Image
                src={aboutHeroImage.imageUrl}
                alt={aboutHeroImage.description}
                fill
                className="object-cover opacity-20"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Notre Histoire, Notre Engagement</h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
                Découvrez les valeurs et les ambitions qui animent le Grison Club dans sa mission pour un avenir meilleur en Guinée et dans le monde.
            </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-950">
          <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                      <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Notre Manifeste</h2>
                      <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Bâtir un Pont vers l'Avenir</h3>
                      <p>
                          Le Grison Club est né d'un constat simple : la jeunesse est la clé de voûte de toute transformation sociale durable. Fondée en 2021, notre association apolitique et à but non lucratif s'est donné pour mission de former, d'inspirer et de mobiliser cette jeunesse pour qu'elle devienne le moteur d'un changement positif.
                      </p>
                      <p>
                          Nous croyons en un monde où chaque jeune a les outils pour réaliser son potentiel, où la culture est un vecteur de dialogue et où l'environnement est préservé pour les générations futures. C'est cette vision qui guide chacune de nos actions.
                      </p>
                      <Button size="lg" asChild className="bg-primary hover:bg-emerald-500 text-white px-8 py-3 rounded-full font-bold text-lg mt-6">
                        <Link href="/#adhesion">Devenir Membre</Link>
                      </Button>
                  </div>
                  <div className="relative h-96 md:h-auto self-stretch">
                    {missionImage && (
                        <Image
                            src={missionImage.imageUrl}
                            alt={missionImage.description}
                            fill
                            className="rounded-2xl shadow-2xl object-cover"
                        />
                    )}
                  </div>
              </div>
          </div>
      </section>
      
      <HistoryTimeline />

      <BureauExecutif />

      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Nos Valeurs</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Nos Principes Fondamentaux</h3>
                <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
                    Ces quatre piliers sont au cœur de chaque action que nous menons. Ils définissent qui nous sommes, guident nos décisions et façonnent notre impact.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 max-w-5xl mx-auto">
                {[
                    {
                        icon: <Award size={24} />,
                        title: "Excellence",
                        desc: "Nous visons la plus haute qualité et un impact significatif dans toutes nos initiatives, en cherchant constamment à nous améliorer."
                    },
                    {
                        icon: <Target size={24} />,
                        title: "Intégrité",
                        desc: "Nous agissons avec une transparence totale, une honnêteté sans faille et une pleine responsabilité envers notre communauté."
                    },
                    {
                        icon: <Users size={24} />,
                        title: "Communauté",
                        desc: "Nous cultivons l'entraide, la solidarité et un leadership collaboratif pour renforcer les liens et atteindre des objectifs communs."
                    },
                    {
                        icon: <BookOpen size={24} />,
                        title: "Savoir",
                        desc: "Nous promouvons l'éducation et l'apprentissage continu comme des leviers puissants pour l'émancipation de chacun."
                    }
                ].map((value) => (
                    <div key={value.title} className="flex items-start gap-6">
                        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                            {value.icon}
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{value.title}</h3>
                            <p className="text-slate-500 dark:text-slate-400">{value.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Prêt à nous rejoindre ?</h2>
                <p className="text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-8">
                    Votre engagement peut faire la différence. Devenez membre et participez activement à nos projets.
                </p>
                <Button size="lg" asChild className="bg-primary hover:bg-emerald-500 text-white px-8 py-3 rounded-full font-bold text-lg">
                    <Link href="/#adhesion">Devenir Membre</Link>
                </Button>
            </div>
        </div>
      </section>
    </>
  );
}
