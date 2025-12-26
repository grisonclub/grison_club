'use client';

import { useState, useEffect, useRef } from 'react';

const historyMilestones = [
  {
    period: '2017',
    title: 'La Fondation',
    description: 'C’est au Complexe Scolaire Ahmadou Dieng que le club voit le jour, porté par l’initiative de trois jeunes élèves — Mohamed Chérif Sow, Abdourahmane Barry et Djan Sow — ont posé les bases d’un club dédié à l’expression orale et à la confiance en soi.',
  },
  {
    period: '2017-2018',
    title: 'Les Débuts & l\'Identité',
    description: 'D\'abord "Club d\'Études Albert Camus", le nom a évolué pour devenir "Grison Club", symbolisant la maturité et l\'engagement.',
  },
  {
    period: '2018',
    title: 'Premières Compétitions',
    description: 'Lancement des premiers débats inter-classes pour renforcer l\'esprit critique et la confiance en soi. Un moment fondateur.',
  },
  {
    period: '2020',
    title: 'Solidarité face à la Pandémie',
    description: 'En pleine crise sanitaire, le Grison Club a mené une campagne de sensibilisation sur la COVID-19 et a effectué des dons, en collaboration avec l\'ONG ADEPE pour soutenir les communautés.',
  },
  {
    period: '2022',
    title: 'Impact National',
    description: 'Co-organisation de la Semaine Nationale du Mérite Scolaire (SENAMSCO), affirmant sa présence nationale et son influence grandissante.',
  },
  {
    period: 'Aujourd\'hui',
    title: 'Diversification des Actions',
    description: 'Extension des actions à l\'environnement, la santé et le développement communautaire, fidèle à sa mission de service.',
  },
  {
    period: 'Idéal',
    title: 'Une Mission Continue',
    description: 'Poursuite de l\'idéal de former des citoyens conscients, responsables et engagés pour l\'avenir de leurs communautés.',
  },
];


export default function HistoryTimeline() {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const timelineRef = useRef<HTMLDivElement>(null);
  
    const handleScroll = () => {
      const timeline = timelineRef.current;
      if (timeline) {
        const { top, height } = timeline.getBoundingClientRect();
        const windowHeight = window.innerHeight;
  
        // Calculate the visible portion of the timeline
        const visibleStart = Math.max(0, -top);
        const visibleEnd = Math.min(height, windowHeight - top);
  
        if (visibleEnd > visibleStart) {
          const totalVisible = visibleEnd - visibleStart;
          const percentage = Math.min(100, (visibleStart + totalVisible) / height * 100);
          
          // Let's refine the percentage calculation to start from the top of the element when it enters the viewport
          const elementTopInView = Math.max(0, windowHeight - top);
          const scrollPastElement = Math.min(elementTopInView, height);
          const newPercentage = (scrollPastElement / height) * 100;
          
          // More accurate calculation
          const timelineTop = timeline.offsetTop;
          const timelineHeight = timeline.offsetHeight;
          const scrollY = window.scrollY;
          
          const startPoint = timelineTop - windowHeight + 300; // start a bit later
          const endPoint = timelineTop + timelineHeight - windowHeight;

          if (scrollY > startPoint) {
            const progress = (scrollY - startPoint) / (timelineHeight - 300);
            setScrollPercentage(Math.min(100, progress * 100));
          } else {
            setScrollPercentage(0);
          }
        }
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <div ref={timelineRef} className="relative wrap overflow-hidden p-10 h-full">
                    <div className="absolute border-opacity-20 border-slate-300 dark:border-slate-700 h-full border" style={{ left: '50%' }}></div>
                    <div className="absolute bg-primary h-full border-2 border-primary" style={{ left: '50%', height: `${scrollPercentage}%` }}></div>
                    
                    {historyMilestones.map((milestone, index) => (
                    <div key={milestone.title} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse left-timeline' : 'right-timeline'}`}>
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-12 h-12 rounded-full">
                            <h1 className="mx-auto font-black text-lg text-white">{index + 1}</h1>
                        </div>
                        <div className="order-1 bg-slate-50 dark:bg-slate-800 rounded-2xl shadow-xl w-5/12 px-6 py-8 transform transition-all duration-500 hover:scale-105">
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
    );
}
