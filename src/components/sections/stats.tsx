'use client';

import { Briefcase, Leaf, Users, HeartHandshake } from 'lucide-react';

const stats = [
  {
    icon: <Users size={40} className="text-primary" />,
    value: '500+',
    label: 'Jeunes Formés',
    description: 'Capacités renforcées pour un avenir meilleur.',
  },
  {
    icon: <Leaf size={40} className="text-primary" />,
    value: '200+',
    label: 'Arbres Plantés',
    description: 'Actions concrètes pour notre environnement.',
  },
  {
    icon: <Briefcase size={40} className="text-primary" />,
    value: '1000+',
    label: 'Personnes Sensibilisées',
    description: 'Sensibilisation sur des thèmes variés et essentiels.',
  },
  {
    icon: <HeartHandshake size={40} className="text-primary" />,
    value: 'Orphelinats',
    label: 'Accompagnés',
    description: 'Partage, espoir et soutien aux plus jeunes.',
  },
];

export default function Stats() {
  return (
    <section id="impact" className="bg-slate-900 py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-4">{stat.icon}</div>
              <p className="text-4xl font-extrabold text-white md:text-5xl">
                {stat.value}
              </p>
              <h3 className="mt-2 text-lg font-bold text-white">
                {stat.label}
              </h3>
              <p className="mt-1 text-sm text-slate-400 max-w-xs">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
