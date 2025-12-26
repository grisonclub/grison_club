
import HistoryTimeline from '@/components/sections/history-timeline-client';

export default function HistoirePage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      <section className="py-16 sm:py-24 text-center bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4">
            Notre Histoire
          </h2>
          <p className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              De la vision de trois jeunes élèves en 2017 à un réseau de clubs engagés, découvrez le parcours inspirant du Grison Club, une aventure humaine au service des communautés.          </p>
        </div>
      </section>

      <HistoryTimeline />
    </div>
  );
}
