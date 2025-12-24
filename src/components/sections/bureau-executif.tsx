import Image from 'next/image';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: 'Alpha Diallo',
    role: 'Président Fondateur',
    imageUrl: 'https://picsum.photos/seed/Alpha/400/500',
    social: { facebook: '#', twitter: '#', linkedin: '#' },
    hint: 'man portrait',
  },
  {
    name: 'Mariama Barry',
    role: 'Vice-Présidente',
    imageUrl: 'https://picsum.photos/seed/Mariama/400/500',
    social: { facebook: '#', twitter: '#', linkedin: '#' },
    hint: 'woman portrait',
  },
  {
    name: 'Moussa Camara',
    role: 'Secrétaire Général',
    imageUrl: 'https://picsum.photos/seed/Moussa/400/500',
    social: { facebook: '#', twitter: '#', linkedin: '#' },
    hint: 'man suit',
  },
  {
    name: 'Aïssatou Sow',
    role: 'Trésorière Générale',
    imageUrl: 'https://picsum.photos/seed/Aissatou/400/500',
    social: { facebook: '#', twitter: '#', linkedin: '#' },
    hint: 'woman professional',
  },
  {
    name: 'Ibrahima Kourouma',
    role: 'Chargé de Communication',
    imageUrl: 'https://picsum.photos/seed/Ibrahima/400/500',
    social: { facebook: '#', twitter: '#', linkedin: '#' },
    hint: 'man smiling',
  },
  {
    name: 'Fatoumata Traoré',
    role: 'Coordinatrice de Projets',
    imageUrl: 'https://picsum.photos/seed/Fatoumata/400/500',
    social: { facebook: '#', twitter: '#', linkedin: '#' },
    hint: 'woman smiling',
  },
];

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

export default function BureauExecutif() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Notre Bureau Exécutif</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Les leaders qui portent notre vision</h3>
          <p className="text-slate-600 dark:text-slate-400 mt-2 max-w-2xl mx-auto">
            Une équipe dévouée et passionnée, unie pour l'avancement de notre mission commune.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {teamMembers.map((member) => (
            <div key={member.name} className="relative group overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={member.imageUrl}
                alt={`Portrait de ${member.name}`}
                width={400}
                height={500}
                data-ai-hint={member.hint}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <h4 className="text-lg font-bold">{member.name}</h4>
                <p className="text-sm text-slate-300 mb-3">{member.role}</p>
                <div className="flex items-center gap-3">
                  <a href={member.social.facebook} className="text-slate-400 hover:text-white transition-colors"><Facebook size={16} /></a>
                  <a href={member.social.twitter} className="text-slate-400 hover:text-white transition-colors"><XLogo /></a>
                  <a href={member.social.linkedin} className="text-slate-400 hover:text-white transition-colors"><Linkedin size={16} /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
