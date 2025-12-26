import Image from 'next/image';

const historyMilestones = [
  {
    period: '2017',
    title: 'La Fondation',
    description: 'Né au Complexe Scolaire Ahmadou Dieng, le club visait à maîtriser l\'art de la parole en public.',
    imageUrl: 'https://picsum.photos/seed/foundation/600/400',
    hint: 'students planning'
  },
  {
    period: '2017-2018',
    title: 'Les Débuts & l\'Identité',
    description: 'D\'abord "Club d\'Études Albert Camus", le nom a évolué pour devenir "Grison Club", symbolisant la maturité et l\'engagement.',
    imageUrl: 'https://picsum.photos/seed/identity/600/400',
    hint: 'old book'
  },
  {
    period: '2018',
    title: 'Premières Compétitions',
    description: 'Lancement des premiers débats inter-classes pour renforcer l\'esprit critique et la confiance en soi.',
    imageUrl: 'https://picsum.photos/seed/competition/600/400',
    hint: 'public speaking'
  },
  {
    period: '2022',
    title: 'Impact National',
    description: 'Co-organisation de la Semaine Nationale du Mérite Scolaire (SENAMSCO), affirmant sa présence nationale.',
    imageUrl: 'https://picsum.photos/seed/national/600/400',
    hint: 'award ceremony'
  },
  {
    period: 'Aujourd\'hui',
    title: 'Diversification',
    description: 'Extension des actions à l\'environnement, la santé et le développement communautaire.',
    imageUrl: 'https://picsum.photos/seed/today/600/400',
    hint: 'community service'
  },
  {
    period: 'Idéal',
    title: 'Une Mission Continue',
    description: 'Poursuite de l\'idéal de former des citoyens conscients, responsables et engagés pour l\'avenir.',
    imageUrl: 'https://picsum.photos/seed/mission/600/400',
    hint: 'group silhouette sunset'
  },
];

export default function HistoirePage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      <section className="py-16 sm:py-24 text-center bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            L'Histoire du Grison Club
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-5xl mx-auto">
            Le Grison Club est né le 08 novembre 2017 au sein du Complexe Scolaire Ahmadou Dieng, à l’initiative de trois <span className="text-primary font-semibold">jeunes élèves visionnaires</span> : Mohamed Chérif Sow, Abdourahmane Barry et Djan Sow. Animés par une même <span className="text-primary font-semibold">passion</span> pour l’éducation, la culture et l’expression citoyenne, ils ont décidé de créer un cadre d’apprentissage et d’échange destiné à renforcer les <span className="text-primary font-semibold">compétences intellectuelles et sociales</span> des élèves.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Le Grison Club à Travers le Temps</h3>
                <p className="text-slate-500 dark:text-slate-400 mt-2">Cliquez sur les cartes pour explorer les étapes clés de notre parcours.</p>
            </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {historyMilestones.map((milestone) => (
              <div key={milestone.title} className="group cursor-pointer">
                 <div className="overflow-hidden rounded-2xl mb-4 shadow-lg group-hover:shadow-2xl transition-shadow">
                  <Image
                    src={milestone.imageUrl}
                    alt={milestone.title}
                    width={600}
                    height={400}
                    data-ai-hint={milestone.hint}
                    className="w-full aspect-[3/2] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-primary font-semibold text-sm">{milestone.period}</p>
                <h4 className="text-lg font-bold text-slate-800 dark:text-white mt-1">{milestone.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
