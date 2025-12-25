import { Users } from 'lucide-react';

export default function AlumnisPage() {
  return (
    <div className="py-16 sm:py-24">
        <div className="container mx-auto px-4 text-center">
            <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
                <Users className="text-primary" size={40} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Nos Alumnis
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Cette section est en cours de construction. Bientôt, vous découvrirez ici les parcours inspirants de nos anciens membres et l'impact qu'ils ont dans le monde.
            </p>
        </div>
    </div>
  );
}
