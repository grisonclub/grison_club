import Image from 'next/image';
import AboutTabs from '@/components/layout/about-tabs';

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="bg-[#0f2d4e] text-white pt-32 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Histoire et Direction</h1>
          <p className="text-lg text-slate-300 max-w-3xl">
            Découvrez l&apos;histoire du Grison Club, son équipe dirigeante et ses valeurs fondamentales.
          </p>
        </div>
      </section>
      
      <nav className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 sticky top-[80px] z-30">
          <div className="container mx-auto px-4">
              <AboutTabs />
          </div>
      </nav>
      
      <div className="bg-slate-50 dark:bg-slate-900">
        {children}
      </div>
    </>
  );
}
