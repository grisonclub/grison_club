import Image from 'next/image';
import AboutTabs from '@/components/layout/about-tabs';

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="bg-slate-900 text-white pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">À Propos du Grison Club</h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Découvrez notre histoire, nos valeurs fondamentales et l'équipe qui porte notre vision.
          </p>
        </div>
      </section>
      
      <nav className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
          <div className="container mx-auto px-4 flex justify-center">
              <AboutTabs />
          </div>
      </nav>
      
      <div className="bg-slate-50 dark:bg-slate-950">
        {children}
      </div>
    </>
  );
}
