import { Award, Target, Users, BookOpen } from 'lucide-react';

function Valeurs() {
    return (
        <section className="py-16 sm:py-24 bg-white dark:bg-slate-950">
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
    );
}

export default function ValeursPage() {
    return <Valeurs />;
}
