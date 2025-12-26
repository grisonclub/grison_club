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
          <div className="prose prose-lg dark:prose-invert max-w-5xl mx-auto text-left">
            <p>
              Le Grison Club est né le 08 novembre 2017 au sein du Complexe Scolaire Ahmadou Dieng, à l’initiative de trois <span className="text-primary font-semibold">jeunes élèves visionnaires</span> : Mohamed Chérif Sow, Abdourahmane Barry et Djan Sow. Animés par une même <span className="text-primary font-semibold">passion</span> pour l’éducation, la culture et l’expression citoyenne, ils ont décidé de créer un cadre d’apprentissage et d’échange destiné à renforcer les <span className="text-primary font-semibold">compétences intellectuelles et sociales</span> des élèves.
            </p>
            <p>
              À sa création, l’association portait le nom de Club d’Études Albert Camus (CEAC). Avec l’évolution de ses ambitions et l’élargissement de ses activités, elle devient par la suite le CEPEC (Club d’Études pour la Promotion de l’Éducation et de la Culture), avant d’adopter définitivement le nom <span className="text-primary font-semibold">Grison Club</span>, symbole de maturité, d’ouverture et d’engagement communautaire.
            </p>
            <p>
              L’objectif initial du club était clair : aider les jeunes à vaincre le trac et à maîtriser <span className="text-primary font-semibold">l’art de la prise de parole en public</span>. Pour atteindre cet objectif, le Grison Club a très tôt mis en place des compétitions de débats entre classes, favorisant l’expression orale, l’esprit critique et la confiance en soi. La première compétition de débat s’est tenue en 2018, marquant le début d’une série d’initiatives éducatives, notamment des compétitions interscolaires, qui ont contribué à renforcer la notoriété et l’impact du club.
            </p>
            <p>
              Au fil des années, le Grison Club a connu une croissance significative grâce à l’adhésion de nouveaux membres partageant les mêmes valeurs. Cette dynamique a permis à l’association d’élargir son champ d’action et de s’impliquer dans des événements d’envergure nationale, notamment en tant que co‑organisateur de la <span className="text-primary font-semibold">Semaine Nationale du Mérite Scolaire (SENAMSCO)</span> en 2022.
            </p>
             <p>
              Fidèle à sa mission de service communautaire, le Grison Club a progressivement diversifié ses domaines d’intervention. En plus de l’éducation et de la culture, l’association s’engage aujourd’hui dans des actions liées à <span className="text-primary font-semibold">l’environnement, à la santé et au développement communautaire</span>, contribuant ainsi à l’amélioration durable des conditions de vie des populations.
            </p>
            <p>
              Depuis sa création, le Grison Club poursuit un même idéal : former des <span className="text-primary font-semibold">citoyens conscients, responsables et engagés</span>, capables d’agir positivement pour leurs communautés et pour l’avenir.
            </p>
          </div>
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
