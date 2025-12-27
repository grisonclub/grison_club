import { BookCopy } from 'lucide-react';

export default function ResourcesPage() {
  return (
    <main>
      <section className="bg-slate-900 text-white pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Ressources</h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Documents, guides et outils utiles pour nos membres et le public.
          </p>
        </div>
      </section>
      
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 text-center">
            <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
                <BookCopy className="text-primary" size={40} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Section en construction
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Nous préparons cette section pour vous fournir des ressources précieuses. Revenez bientôt pour découvrir des documents utiles, des guides pratiques et bien plus encore !
            </p>
        </div>
      </section>
    </main>
  );
}
