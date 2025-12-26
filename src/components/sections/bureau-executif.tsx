
import Image from 'next/image';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const executiveMembers = [
  {
    name: 'Alpha Diallo',
    role: 'Président Fondateur',
    imageUrl: 'https://picsum.photos/seed/Alpha/400/400',
    social: { facebook: '#', twitter: '#', linkedin: '#' },
    hint: 'man portrait',
    bio: 'Leader visionnaire, il a fondé le Grison Club avec la passion de former la prochaine génération de leaders.'
  },
  {
    name: 'Mariama Barry',
    role: 'Vice-Présidente',
    imageUrl: 'https://picsum.photos/seed/Mariama/400/400',
    social: { facebook: '#', twitter: '#', linkedin: '#' },
    hint: 'woman portrait',
    bio: 'Engagée pour l\'autonomisation des femmes, elle supervise les programmes sociaux et l\'expansion des clubs.'
  },
  {
    name: 'Moussa Camara',
    role: 'Secrétaire Général',
    imageUrl: 'https://picsum.photos/seed/Moussa/400/400',
    social: { facebook: '#', twitter: '#', linkedin: '#' },
    hint: 'man suit',
    bio: 'Organisateur méticuleux, il assure la bonne gouvernance et la gestion administrative de l\'association.'
  },
  {
    name: 'Aïssatou Sow',
    role: 'Trésorière Générale',
    imageUrl: 'https://picsum.photos/seed/Aissatou/400/400',
    social: { facebook: '#', twitter: '#', linkedin: '#' },
    hint: 'woman professional',
    bio: 'Gardienne de la santé financière du club, elle gère les fonds avec rigueur et transparence.'
  },
  {
    name: 'Idrissa Keita',
    role: 'Responsable Éducation',
    imageUrl: 'https://picsum.photos/seed/Idrissa/400/400',
    social: { facebook: '#', twitter: '#', linkedin: '#' },
    hint: 'male teacher',
    bio: 'Dédié à l\'éducation, il développe des programmes de formation pour impacter la jeunesse guinéenne.'
  },
  {
    name: 'Fatoumata Kaba',
    role: 'Responsable Culture',
    imageUrl: 'https://picsum.photos/seed/Fatoumata/400/400',
    social: { facebook: '#', twitter: '#', linkedin: '#' },
    hint: 'female artist',
    bio: 'Passionnée par les arts, elle promeut la richesse culturelle de la Guinée à travers divers événements.'
  },
  {
    name: 'Abdoulaye Touré',
    role: 'Responsable Environnement',
    imageUrl: 'https://picsum.photos/seed/Abdoulaye/400/400',
    social: { facebook: '#', twitter: '#', linkedin: '#' },
    hint: 'male activist',
    bio: 'Militant écologiste, il mène les initiatives de reboisement et de sensibilisation à l\'environnement.'
  },
  {
    name: 'Oumou Diallo',
    role: 'Coordinatrice des Clubs',
    imageUrl: 'https://picsum.photos/seed/Oumou/400/400',
    social: { facebook: '#', twitter: '#', linkedin: '#' },
    hint: 'female community manager',
    bio: 'Elle assure la liaison et la synergie entre toutes les branches affiliées du Grison Club sur le terrain.'
  },
];

const boardMembers = [
    {
      name: 'Dr. Thierno Diallo',
      role: 'Président du CA',
      imageUrl: 'https://picsum.photos/seed/Thierno/400/400',
      hint: 'senior man suit',
      bio: 'Expert en développement international, il apporte une vision stratégique pour guider l\'organisation.'
    },
    {
      name: 'Hawa Kante',
      role: 'Vice-Présidente du CA',
      imageUrl: 'https://picsum.photos/seed/Hawa/400/400',
      hint: 'senior woman professional',
      bio: 'Spécialiste en droit des affaires, elle veille à la conformité et à la bonne gouvernance de l\'association.'
    },
    {
      name: 'Sékou Condé',
      role: 'Conseiller',
      imageUrl: 'https://picsum.photos/seed/Sekou/400/400',
      hint: 'wise man portrait',
      bio: 'Ancien ministre de l\'Éducation, il partage sa sagesse et son expérience pour orienter les programmes.'
    },
]

const XLogo = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="18px"
      height="18px"
      fill="currentColor"
    >
      <path d="M 5.9199219 6 L 20.580078 25.044922 L 6.2304688 44 L 9.4101562 44 L 21.986328 27.525391 L 31.986328 44 L 44 44 L 28.681641 24.232422 L 42.171875 6 L 38.992188 6 L 27.232422 21.693359 L 17.933594 6 L 5.9199219 6 z M 11.181641 8 L 16.599609 8 L 40.240234 42 L 34.822266 42 L 11.181641 8 z" />
    </svg>
  );

const TeamMemberCard = ({ member }: { member: typeof executiveMembers[0] }) => (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden text-center group">
        <div className="pt-8">
            <Image
                src={member.imageUrl}
                alt={`Portrait de ${member.name}`}
                width={144}
                height={144}
                data-ai-hint={member.hint}
                className="w-36 h-36 object-cover rounded-full mx-auto border-4 border-white dark:border-slate-700 shadow-md"
            />
        </div>
        <div className="p-6">
        <h4 className="text-xl font-bold text-slate-900 dark:text-white">{member.name}</h4>
        <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-5 min-h-[60px]">{member.bio}</p>
        <div className="flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a href={member.social.facebook} className="w-9 h-9 flex items-center justify-center rounded-md border border-slate-200 dark:border-slate-700 text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-colors"><Facebook size={18} /></a>
            <a href={member.social.twitter} className="w-9 h-9 flex items-center justify-center rounded-md border border-slate-200 dark:border-slate-700 text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-colors"><XLogo /></a>
            <a href={member.social.linkedin} className="w-9 h-9 flex items-center justify-center rounded-md border border-slate-200 dark:border-slate-700 text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-colors"><Linkedin size={18} /></a>
        </div>
        </div>
    </div>
)

export default function Bureau() {
  return (
    <div className="container mx-auto px-4">
        
        {/* Bureau Exécutif */}
        <div className="mb-20">
            <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white">Le Bureau Exécutif</h3>
                <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-xl mx-auto">L'équipe opérationnelle qui pilote les projets et anime la vie de l'association au quotidien.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {executiveMembers.map((member) => (
                    <TeamMemberCard key={member.name} member={member} />
                ))}
            </div>
        </div>

        {/* Conseil d'Administration */}
        <div>
            <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white">Le Conseil d'Administration</h3>
                <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-xl mx-auto">Les garants de la vision stratégique, de l'éthique et de la pérennité du Grison Club.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {boardMembers.map((member) => (
                    <TeamMemberCard key={member.name} member={{...member, social: { facebook: '#', twitter: '#', linkedin: '#' }}} />
                ))}
            </div>
        </div>

    </div>
  );
}
