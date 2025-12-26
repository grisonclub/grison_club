
import HistoryTimeline from '@/components/sections/history-timeline-client';

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

      <HistoryTimeline />
    </div>
  );
}
