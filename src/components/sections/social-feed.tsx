'use client';

import Script from 'next/script';

export default function SocialFeed() {
  return (
    <section id="actualites" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Actualités
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Découvrez nos dernières activités et nos campagnes directement depuis notre page Facebook.
          </p>
        </div>
        
        <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
        <div className="elfsight-app-5f5f9af2-48da-4506-8367-a4f91c5aec97" data-elfsight-app-lazy></div>
      </div>
    </section>
  );
}
