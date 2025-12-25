import HistoryTimeline from "@/components/sections/history-timeline";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import placeholderImages from '@/lib/placeholder-images.json';

const missionImage = placeholderImages.placeholderImages.find(p => p.imageHint === 'education learning');

function Manifeste() {
    return (
        <section className="py-16 sm:py-24 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Notre Manifeste</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Bâtir un Pont vers l&apos;Avenir</h3>
                        <p>
                            Le Grison Club est né d&apos;un constat simple : la jeunesse est la clé de voûte de toute transformation sociale durable. Fondée en 2021, notre association apolitique et à but non lucratif s&apos;est donné pour mission de former, d&apos;inspirer et de mobiliser cette jeunesse pour qu&apos;elle devienne le moteur d&apos;un changement positif.
                        </p>
                        <p>
                            Nous croyons en un monde où chaque jeune a les outils pour réaliser son potentiel, où la culture est un vecteur de dialogue et où l&apos;environnement est préservé pour les générations futures. C&apos;est cette vision qui guide chacune de nos actions.
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
    )
}


export default function HistoirePage() {
    return (
        <>
            <Manifeste />
            <HistoryTimeline />
        </>
    );
}
