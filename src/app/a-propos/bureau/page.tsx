
import Bureau from '@/components/sections/bureau-executif';

export default function BureauPage() {
    return (
        <div className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900">
            <div className="container mx-auto px-4 text-center mb-16">
                 <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                    Notre Gouvernance
                </h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    Découvrez les visages qui portent la vision du Grison Club. Une équipe de leaders passionnés et engagés au service de notre mission commune.
                </p>
            </div>
            <Bureau />
        </div>
    );
}
