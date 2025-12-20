import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, HeartHandshake } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  return (
    <section id="hero" className="relative h-[90vh] min-h-[600px] max-h-[1080px] w-full flex items-center justify-center text-white">
      <div className="absolute inset-0">
        <Image
          src={heroImage?.imageUrl || ''}
          alt={heroImage?.description || 'Young people in action'}
          data-ai-hint={heroImage?.imageHint}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      </div>
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tighter text-shadow sm:text-5xl md:text-6xl lg:text-7xl !leading-tight">
            Formé, Inspirer, Agir pour Demain
          </h1>
          <p className="mt-6 text-lg text-gray-200 md:text-xl max-w-2xl mx-auto text-shadow-sm">
            Rejoignez le Grison Club et devenez un acteur du changement pour une Guinée plus forte et plus juste.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }} className="hover:opacity-90 transition-opacity text-lg px-8 py-6">
              <Link href="#membership">
                Devenir Membre <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-white border-gray-300 hover:bg-white/10 hover:text-white transition-colors text-lg px-8 py-6 bg-black/20 backdrop-blur-sm">
              <HeartHandshake className="mr-2" />
              Faire un don
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
