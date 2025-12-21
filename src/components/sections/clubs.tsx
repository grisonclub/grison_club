import { Languages, School, Shield, Code } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const clubs = [
    { title: 'Amazone Grison Club', icon: <Shield size={32}/>, color: 'bg-pink-500', desc: 'Défense des droits des filles et des femmes.' },
    { title: 'Grison English Club', icon: <Languages size={32}/>, color: 'bg-blue-500', desc: 'Apprentissage et pratique de l\'anglais.' },
    { title: 'Grison Student Club', icon: <School size={32}/>, color: 'bg-yellow-500', desc: 'Clubs d\'engagement dans les écoles.' },
    { title: 'Grison Tech', icon: <Code size={32}/>, color: 'bg-indigo-500', desc: 'Innovation numérique pour le social.' },
];

export default function Clubs() {
  return (
    <section id="clubs" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Branches Affiliées</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Des clubs distincts, des missions variées, mais une seule vision commune. Chaque branche déploie ses propres actions, convergentes vers un but unique : servir et transformer la société.
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
