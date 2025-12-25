import { Award, Target, Users, BookOpen, ShieldCheck, Handshake, BrainCircuit } from 'lucide-react';

function Valeurs() {
    return (
        <section className="py-16 sm:py-24 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Nos Valeurs</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Nos Principes Fondamentaux</h3>
                    <p className="text-slate-600 dark:text-slate-400 mt-4 text-lg">
                        Au cœur de chaque initiative, chaque projet et chaque interaction, se trouvent les valeurs qui nous définissent. Elles sont le socle de notre identité, le moteur de notre engagement et la boussole qui guide notre action collective pour un impact durable.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            icon: <Award size={32} />,
                            title: "Excellence",
                            desc: "Nous visons la plus haute qualité et un impact mesurable dans toutes nos initiatives, en adoptant une démarche d'amélioration continue."
                        },
                        {
                            icon: <ShieldCheck size={32} />,
                            title: "Intégrité",
                            desc: "Nous agissons avec transparence, honnêteté et responsabilité. La confiance de notre communauté est notre bien le plus précieux."
                        },
                        {
                            icon: <Handshake size={32} />,
                            title: "Communauté",
                            desc: "Nous cultivons l'entraide, la solidarité et un leadership collaboratif pour renforcer les liens et atteindre nos objectifs communs."
                        },
                        {
                            icon: <BrainCircuit size={32} />,
                            title: "Savoir",
                            desc: "Nous promouvons l'éducation et la curiosité intellectuelle comme des leviers puissants pour l'émancipation de chacun."
                        }
                    ].map((value) => (
                        <div key={value.title} className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl text-center border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
                            <div className="flex justify-center items-center mb-6 w-20 h-20 rounded-full bg-primary/10 text-primary mx-auto">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{value.title}</h3>
                            <p className="text-slate-500 dark:text-slate-400">{value.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function ValeursPage() {
    return <Valeurs />;
}
