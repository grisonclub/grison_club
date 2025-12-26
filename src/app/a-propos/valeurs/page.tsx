'use client';

import { useState, useTransition } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Award, BookOpen, Flag, Handshake, Leaf, Scale, UsersRound, Library, Speech, Heart, Target, Eye, BrainCircuit, Loader2 } from 'lucide-react';
import {
  summarizeClubPillars,
  SummarizeClubPillarsInput,
  SummarizeClubPillarsOutput,
} from '@/ai/flows/summarize-club-pillars';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const educationPillarImage = PlaceHolderImages.find(p => p.id === 'education-pillar');
const culturePillarImage = PlaceHolderImages.find(p => p.id === 'culture-pillar');
const environmentPillarImage = PlaceHolderImages.find(p => p.id === 'environment-pillar');

const pillars = [
  {
    title: 'Éducation',
    description: 'Former des leaders éclairés et responsables pour l’avenir de la Guinée. Nous organisons des concours académiques, des séminaires et des programmes de développement du leadership pour renforcer les capacités de la jeunesse.',
    image: educationPillarImage?.imageUrl,
    hint: educationPillarImage?.imageHint,
  },
  {
    title: 'Culture',
    description: 'Valoriser le riche patrimoine guinéen et encourager l’expression citoyenne. Nos activités incluent des débats, des concours de lecture et la promotion des arts et traditions locales pour renforcer le dialogue interculturel.',
    image: culturePillarImage?.imageUrl,
    hint: culturePillarImage?.imageHint,
  },
  {
    title: 'Environnement',
    description: 'Agir concrètement pour la protection de notre planète. À travers des campagnes de reboisement, des actions d’assainissement et des programmes de sensibilisation, nous mobilisons les communautés pour un avenir durable.',
    image: environmentPillarImage?.imageUrl,
    hint: environmentPillarImage?.imageHint,
  },
];

const values = [
    { icon: <Flag size={28} />, title: "Engagement citoyen", text: "Agir avec responsabilité et dévouement pour l’intérêt général." },
    { icon: <BookOpen size={28} />, title: "Éducation et leadership", text: "Former des leaders éclairés et responsables." },
    { icon: <Handshake size={28} />, title: "Solidarité et bénévolat", text: "Servir les communautés avec humanité et altruisme." },
    { icon: <Scale size={28} />, title: "Intégrité et éthique", text: "Promouvoir la bonne gouvernance et la transparence." },
    { icon: <UsersRound size={28} />, title: "Respect de la diversité", text: "Valoriser les cultures et encourager le dialogue." },
    { icon: <Leaf size={28} />, title: "Protection de l’environnement", text: "Agir pour préserver notre planète." },
];

const actions = [
    { icon: <Library size={28} />, title: "Éducation et formation", text: "Concours académiques, séminaires, conférences, actions de sensibilisation et programmes de développement du leadership." },
    { icon: <Speech size={28} />, title: "Culture et expression citoyenne", text: "Débats, concours de lecture et d’épellation, valorisation des cultures locales et nationales." },
    { icon: <Leaf size={28} />, title: "Environnement", text: "Campagnes de reboisement, actions d’assainissement et sensibilisation écologique." },
    { icon: <Heart size={28} />, title: "Action sociale et humanitaire", text: "Soutien aux personnes vulnérables, projets communautaires à impact durable." },
    { icon: <Award size={28} />, title: "Engagement civique", text: "Promotion de la citoyenneté, de la bonne gouvernance et du dialogue constructif." },
];

const Section = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <section className={`py-16 sm:py-24 ${className}`}>
        <div className="container mx-auto px-4">
            {children}
        </div>
    </section>
);

const SectionTitle = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <h2 className={cn("text-3xl md:text-4xl font-bold text-slate-900 dark:text-white text-center", className)}>
        {children}
    </h2>
);

export default function ValeursPage() {
    const [hoveredPillar, setHoveredPillar] = useState(0);
    const [isPending, startTransition] = useTransition();
    const [summary, setSummary] = useState<SummarizeClubPillarsOutput | null>(null);

    const handleSummarize = () => {
        const input: SummarizeClubPillarsInput = {
            educationDescription: pillars[0].description,
            cultureDescription: pillars[1].description,
            environmentDescription: pillars[2].description,
        };
        startTransition(async () => {
            const result = await summarizeClubPillars(input);
            setSummary(result);
        });
    };

  return (
    <div className="bg-white dark:bg-slate-950">
        <Section className="bg-slate-50 dark:bg-slate-900/50">
            <div className="text-center max-w-4xl mx-auto">
                <SectionTitle className="mb-4">
                    Une organisation <span className="text-primary">engagée</span> au service des communautés
                </SectionTitle>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    Le Grison Club est une organisation caritative, apolitique et à but non lucratif, engagée dans le développement communautaire et la promotion d’une citoyenneté active et responsable. Guidés par la solidarité, l’intégrité et le leadership, nous œuvrons pour un impact durable.
                </p>
            </div>
        </Section>
        
        <Section>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div className="text-left">
                    <div className="inline-flex items-center gap-3 mb-4">
                        <Target size={24} className="text-primary" />
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Notre Mission</h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-lg">
                        Former, inspirer et accompagner une génération de citoyens engagés, capables d’agir concrètement pour le bien-être social, culturel et environnemental. Nous encourageons l’épanouissement personnel, le leadership responsable et la participation active.
                    </p>
                </div>

                 <div className="text-left">
                    <div className="inline-flex items-center gap-3 mb-4">
                        <Eye size={24} className="text-primary" />
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Notre Vision</h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-lg">
                        Devenir un acteur de référence du service communautaire en Guinée et à l’international, en bâtissant un réseau de clubs solidaires unis par une vision de transformation sociale, de coopération et de développement durable.
                    </p>
                </div>
            </div>
        </Section>
        
        <Section className="bg-slate-900 text-white">
            <div className="text-center mb-16">
                <SectionTitle>
                    Nos 3 Piliers d'Action
                </SectionTitle>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto mt-4">
                    Notre engagement repose sur trois piliers fondamentaux qui guident toutes nos initiatives pour un impact maximal.
                </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-1 h-[500px] rounded-2xl overflow-hidden border border-slate-700">
                {pillars.map((pillar, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => setHoveredPillar(index)}
                        className={cn(
                            "relative overflow-hidden cursor-pointer p-8 flex flex-col justify-end text-white transition-all duration-700 ease-in-out",
                            hoveredPillar === index ? "w-full" : "w-1/2 md:w-full",
                            index === 0 && 'md:w-full',
                            index === 1 && 'md:w-full',
                            index === 2 && 'md:w-full'
                        )}
                        style={{
                           flexGrow: hoveredPillar === index ? 2 : 1,
                        }}
                    >
                        <Image
                            src={pillar.image || ''}
                            alt={pillar.title}
                            fill
                            data-ai-hint={pillar.hint}
                            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold mb-2">{pillar.title}</h3>
                            <div className={cn(
                                "transition-all duration-500 ease-in-out overflow-hidden",
                                hoveredPillar === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                            )}>
                                <p className="text-slate-200">{pillar.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                 <Button onClick={handleSummarize} disabled={isPending} variant="secondary" size="lg" className="bg-white/10 hover:bg-white/20 text-white">
                    {isPending ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Analyse en cours...
                        </>
                    ) : (
                         <>
                            <BrainCircuit className="mr-2" /> Résumer avec l'IA
                        </>
                    )}
                </Button>

                {summary && !isPending && (
                     <Alert className="mt-8 text-left max-w-3xl mx-auto bg-slate-800 border-slate-700 text-white">
                        <BrainCircuit className="h-4 w-4 !text-primary" />
                        <AlertTitle className="font-bold">Synthèse par l'IA</AlertTitle>
                        <AlertDescription className="text-slate-300">
                           {summary.summary}
                        </AlertDescription>
                    </Alert>
                )}
            </div>
        </Section>
        
        <Section>
            <SectionTitle className="mb-12">Nos Valeurs Fondamentales</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {values.map((value, index) => (
                    <div key={index} className="flex items-start gap-5">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                            {value.icon}
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-800 dark:text-white mb-1 text-xl">{value.title}</h4>
                            <p className="text-slate-500 dark:text-slate-400">{value.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>

         <Section className="bg-slate-50 dark:bg-slate-900/50">
            <SectionTitle className="mb-12">Nos Domaines d’Action</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {actions.slice(0, 3).map((action, index) => (
                     <div key={index} className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 text-center transition-all shadow-sm hover:shadow-lg hover:border-primary/30">
                        <div className="inline-block p-4 rounded-full bg-primary/10 text-primary mb-5">
                            {action.icon}
                        </div>
                        <h4 className="font-bold text-slate-800 dark:text-white mb-2 text-lg">{action.title}</h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{action.text}</p>
                    </div>
                ))}
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
                 {actions.slice(3).map((action, index) => (
                     <div key={index} className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 text-center transition-all shadow-sm hover:shadow-lg hover:border-primary/30">
                        <div className="inline-block p-4 rounded-full bg-primary/10 text-primary mb-5">
                            {action.icon}
                        </div>
                        <h4 className="font-bold text-slate-800 dark:text-white mb-2 text-lg">{action.title}</h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{action.text}</p>
                    </div>
                ))}
            </div>
        </Section>
    </div>
  );
}
