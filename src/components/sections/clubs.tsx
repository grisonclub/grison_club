import { Stethoscope, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Gavel as Scale } from 'lucide-react'; // Using Gavel for Scale icon

const clubs = [
    { title: 'Grison Médecins', icon: <Stethoscope size={32}/>, color: 'bg-red-500', desc: 'Campagnes de santé et prévention.' },
    { title: 'Grison Avocats', icon: <Scale size={32}/>, color: 'bg-indigo-500', desc: 'Aide juridique et droits de l\'homme.' },
    { title: 'Grison Youth', icon: <Users size={32}/>, color: 'bg-yellow-500', desc: 'Leadership et entrepreneuriat jeune.' },
    { title: 'Grison Tech', icon: <CheckCircle size={32}/>, color: 'bg-blue-500', desc: 'Innovation numérique pour le social.' },
];

export default function Clubs() {
  return (
    <section id="clubs" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Branches Affiliées</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Le Grison Club s'organise en branches spécialisées pour maximiser l'impact de chaque profession et passion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clubs.map((club, idx) => (
            <div key={idx} className="group relative bg-slate-800 rounded-2xl p-8 hover:bg-slate-700 transition-all duration-300 border border-slate-700 hover:border-slate-500">
              <div className={`w-14 h-14 ${club.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                {club.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{club.title}</h3>
              <p className="text-slate-400 text-sm mb-6">{club.desc}</p>
              <a href="#" className="inline-flex items-center text-sm font-bold text-white hover:text-primary transition-colors">
                En savoir plus <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
