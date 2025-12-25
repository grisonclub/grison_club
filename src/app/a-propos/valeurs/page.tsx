
import { Award, Target, Users, BookOpen, ShieldCheck, Handshake, BrainCircuit, Heart, Eye, Flag, Scale, Leaf, Hand, Library, Microscope, UsersRound, Speech } from 'lucide-react';

const Section = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <div className={`py-12 border-b border-slate-200 dark:border-slate-800 last:border-b-0 ${className}`}>
        {children}
    </div>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6 text-center">
        {children}
    </h3>
);

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 mx-auto">
        {children}
    </div>
);


export default function ValeursPage() {
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

    return (
        <div className="bg-white dark:bg-slate-950 py-16 sm:py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto divide-y divide-slate-200 dark:divide-slate-800">
                    <Section>
                        <div className="prose prose-lg dark:prose-invert max-w-none text-center">
                            <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Une organisation engagée au service des communautés</h3>
                            <p className="lead">
                                Le Grison Club est une organisation caritative, apolitique et à but non lucratif, engagée dans le développement communautaire et la promotion d’une citoyenneté active et responsable.
                            </p>
                            <p>
                                Nous œuvrons pour former, inspirer et mobiliser des jeunes et des citoyens engagés autour de projets éducatifs, culturels, sociaux et environnementaux, afin de contribuer durablement à l’amélioration des conditions de vie au sein de nos communautés.
                            </p>
                             <p>
                                Guidé par des valeurs de solidarité, d’intégrité, d’engagement citoyen et de leadership, le Grison Club se positionne comme un cadre d’action, de réflexion et de service, favorisant l’émergence de leaders conscients, responsables et tournés vers l’intérêt général.
                            </p>
                        </div>
                    </Section>

                    <Section className="text-center bg-slate-50 dark:bg-slate-900 rounded-2xl my-12">
                        <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Notre Devise</h3>
                        <p className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200 italic">
                            « Formé, Inspirer, Agir pour Demain »
                        </p>
                    </Section>
                    
                    <div className="grid md:grid-cols-2 gap-x-12">
                        <Section>
                            <div className="text-center">
                                <IconWrapper><Target size={32} /></IconWrapper>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Notre Mission</h3>
                                <p className="text-slate-600 dark:text-slate-300">
                                    Former, inspirer et accompagner une génération de citoyens engagés, capables d’agir concrètement pour le bien-être social, culturel et environnemental de leurs communautés. Nous encourageons l’épanouissement personnel, le leadership responsable et la participation active de tous.
                                </p>
                            </div>
                        </Section>

                        <Section>
                           <div className="text-center">
                                <IconWrapper><Eye size={32} /></IconWrapper>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Notre Vision</h3>
                                <p className="text-slate-600 dark:text-slate-300">
                                    Devenir un acteur de référence du service communautaire en Guinée et à l’international, en bâtissant un réseau de clubs solidaires unis par une vision de transformation sociale, de coopération et de développement durable.
                                </p>
                            </div>
                        </Section>
                    </div>

                    <Section>
                        <SectionTitle>Nos Valeurs Fondamentales</SectionTitle>
                        <p className="text-slate-600 dark:text-slate-400 mb-12 text-center max-w-2xl mx-auto">Les actions du Grison Club reposent sur des principes forts qui guident chacune de nos initiatives et définissent notre identité.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {values.map((value, index) => (
                                <div key={index} className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 text-center hover:shadow-lg hover:border-primary/50 transition-all">
                                    <div className="inline-block p-3 rounded-full bg-primary/10 text-primary mb-4">
                                        {value.icon}
                                    </div>
                                    <h4 className="font-bold text-slate-800 dark:text-white mb-2 text-lg">{value.title}</h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">{value.text}</p>
                                </div>
                            ))}
                        </div>
                    </Section>
                    
                    <Section>
                        <SectionTitle>Nos Domaines d’Action</SectionTitle>
                        <p className="text-slate-600 dark:text-slate-400 mb-12 text-center max-w-2xl mx-auto">Le Grison Club intervient principalement dans les domaines suivants pour concrétiser sa mission.</p>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            {actions.map((action, index) => (
                                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                    <div className="text-primary mt-1">{action.icon}</div>
                                    <div>
                                        <h4 className="font-semibold text-slate-800 dark:text-white">{action.title}</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm">{action.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Section>
                </div>
            </div>
        </div>
    );
}
