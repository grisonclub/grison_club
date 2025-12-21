'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { GraduationCap, Leaf, Palette, CheckCircle, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function About() {
  const [activeTab, setActiveTab] = useState('vision');

  return (
    <section id="a-propos" className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Vision Grison Club"
                width={1000}
                height={1000}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Qui sommes-nous</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Un catalyseur de changement positif</h3>
            
            <div className="flex gap-4 border-b border-slate-200 dark:border-slate-700 mb-6">
              <button 
                onClick={() => setActiveTab('vision')}
                className={`pb-3 text-lg font-medium transition-colors ${activeTab === 'vision' ? 'text-primary border-b-2 border-primary' : 'text-slate-400'}`}
              >
                Notre Vision
              </button>
              <button 
                onClick={() => setActiveTab('mission')}
                className={`pb-3 text-lg font-medium transition-colors ${activeTab === 'mission' ? 'text-primary border-b-2 border-primary' : 'text-slate-400'}`}
              >
                Nos Piliers
              </button>
            </div>

            {activeTab === 'vision' ? (
              <div className="animate-fade-in">
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-lg">
                  Le Grison Club aspire à bâtir une société plus juste et éclairée. Nous croyons que la jeunesse est le moteur d'une transformation sociale profonde. Notre approche est communautaire, apolitique et résolument tournée vers l'avenir.
                </p>
                <ul className="space-y-3">
                  {['Transformation Sociale', 'Engagement Communautaire', 'Excellence & Intégrité'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-700 dark:text-slate-200 font-medium">
                      <CheckCircle className="text-primary" size={20} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4 animate-fade-in">
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl flex items-start gap-4 border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg text-blue-600 dark:text-blue-300"><GraduationCap size={24}/></div>
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-white">Éducation</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Promouvoir l'accès au savoir et la formation professionnelle.</p>
                  </div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl flex items-start gap-4 border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow">
                  <div className="bg-orange-100 dark:bg-orange-900/50 p-3 rounded-lg text-orange-600 dark:text-orange-300"><Palette size={24}/></div>
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-white">Culture</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Valoriser notre patrimoine et encourager la création artistique.</p>
                  </div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl flex items-start gap-4 border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow">
                  <div className="bg-green-100 dark:bg-green-900/50 p-3 rounded-lg text-green-600 dark:text-green-300"><Leaf size={24}/></div>
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-white">Environnement</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Actions concrètes pour le reboisement et l'assainissement.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
