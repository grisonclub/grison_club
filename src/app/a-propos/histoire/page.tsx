import Image from 'next/image';

const historyMilestones = [
  {
    period: '2017',
    title: 'La Fondation',
    description: 'Né au Complexe Scolaire Ahmadou Dieng, le club visait à maîtriser l\'art de la parole en public, à l\'initiative de trois jeunes élèves visionnaires : Mohamed Chérif Sow, Abdourahmane Barry et Djan Sow.',
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
    description: 'Lancement des premiers débats inter-classes pour renforcer l\'esprit critique et la confiance en soi. Un moment fondateur.',
    imageUrl: 'https://picsum.photos/seed/competition/600/400',
    hint: 'public speaking'
  },
  {
    period: '2022',
    title: 'Impact National',
    description: 'Co-organisation de la Semaine Nationale du Mérite Scolaire (SENAMSCO), affirmant sa présence nationale et son influence grandissante.',
    imageUrl: 'https://picsum.photos/seed/national/600/400',
    hint: 'award ceremony'
  },
  {
    period: 'Aujourd\'hui',
    title: 'Diversification des Actions',
    description: 'Extension des actions à l\'environnement, la santé et le développement communautaire, fidèle à sa mission de service.',
    imageUrl: 'https://picsum.photos/seed/today/600/400',
    hint: 'community service'
  },
  {
    period: 'Idéal',
    title: 'Une Mission Continue',
    description: 'Poursuite de l\'idéal de former des citoyens conscients, responsables et engagés pour l\'avenir de leurs communautés.',
    imageUrl: 'https://picsum.photos/seed/mission/600/400',
    hint: 'group silhouette sunset'
  },
];

export default function HistoirePage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      <section className="py-16 sm:py-24 text-center bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Notre Histoire
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            De la vision de trois jeunes élèves en 2017 à un mouvement national, découvrez le parcours inspirant du Grison Club, une aventure humaine au service de la communauté.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="relative wrap overflow-hidden p-10 h-full">
            <div className="absolute border-opacity-20 border-slate-700 dark:border-slate-600 h-full border" style={{ left: '50%' }}></div>
            
            {historyMilestones.map((milestone, index) => (
              <div key={milestone.title} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse left-timeline' : 'right-timeline'}`}>
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-12 h-12 rounded-full">
                  <h1 className="mx-auto font-black text-lg text-white">{index + 1}</h1>
                </div>
                <div className="order-1 bg-slate-100 dark:bg-slate-800 rounded-2xl shadow-xl w-5/12 px-6 py-8">
                  <p className="mb-3 text-sm font-semibold text-primary">{milestone.period}</p>
                  <h3 className="mb-3 font-bold text-slate-800 dark:text-white text-xl">{milestone.title}</h3>
                  <p className="text-sm leading-snug tracking-wide text-slate-600 dark:text-slate-400">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </div>
  );
}
