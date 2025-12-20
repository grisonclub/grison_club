'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';


const formSchema = z.object({
  firstName: z.string().min(2, 'Le prénom est requis.'),
  lastName: z.string().min(2, 'Le nom est requis.'),
  email: z.string().email('Adresse e-mail invalide.'),
  clubInterest: z.string(),
  motivation: z.string().min(10, 'Veuillez entrer une courte motivation.'),
});

export default function Membership() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      clubInterest: 'Grison Médecins',
      motivation: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: 'Demande envoyée !',
      description: 'Merci pour votre intérêt. Nous examinerons votre demande et vous contacterons bientôt.',
    });
    form.reset();
  }

  return (
    <section id="adhesion" className="py-20 bg-emerald-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

        <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                <div className="text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Rejoignez la famille Grison</h2>
                    <p className="text-emerald-100 text-lg mb-8 leading-relaxed">
                        Devenir membre, c'est bien plus que payer une cotisation. C'est rejoindre un réseau d'élite engagé pour le développement de la Guinée.
                    </p>
                    
                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center font-bold border border-emerald-600 shrink-0">1</div>
                            <div>
                                <h4 className="font-bold text-xl mb-1">Demande d'adhésion</h4>
                                <p className="text-emerald-200 text-sm">Remplissez le formulaire de pré-adhésion ci-contre.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center font-bold border border-emerald-600 shrink-0">2</div>
                            <div>
                                <h4 className="font-bold text-xl mb-1">Validation & Paiement</h4>
                                <p className="text-emerald-200 text-sm">Après examen du dossier, réglez vos frais d'entrée.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center font-bold border border-emerald-600 shrink-0">3</div>
                            <div>
                                <h4 className="font-bold text-xl mb-1">Intégration</h4>
                                <p className="text-emerald-200 text-sm">Recevez votre carte de membre et rejoignez un club.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                        <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-4">
                            <span>Frais d'adhésion (Unique)</span>
                            <span className="font-bold text-xl text-emerald-300">50 000 GNF</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span>Cotisation Annuelle</span>
                            <span className="font-bold text-xl text-white">200 000 GNF</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-2xl text-slate-800">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Formulaire de Pré-adhésion</h3>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="text-sm font-semibold text-slate-700">Prénom</FormLabel>
                                <FormControl>
                                    <Input placeholder="Votre prénom" {...field} className="bg-slate-50 border-slate-200 focus:border-primary focus:ring-2 focus:ring-emerald-200" />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="text-sm font-semibold text-slate-700">Nom</FormLabel>
                                <FormControl>
                                    <Input placeholder="Votre nom" {...field} className="bg-slate-50 border-slate-200 focus:border-primary focus:ring-2 focus:ring-emerald-200" />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                        </div>
                        <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="text-sm font-semibold text-slate-700">Email</FormLabel>
                            <FormControl>
                                <Input placeholder="exemple@email.com" {...field} className="bg-slate-50 border-slate-200 focus:border-primary focus:ring-2 focus:ring-emerald-200" />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="clubInterest"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="text-sm font-semibold text-slate-700">Club d'intérêt</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                <SelectTrigger className="bg-slate-50 border-slate-200 focus:border-primary focus:ring-2 focus:ring-emerald-200">
                                    <SelectValue placeholder="Sélectionnez un club" />
                                </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="medecins">Grison Médecins</SelectItem>
                                    <SelectItem value="avocats">Grison Avocats</SelectItem>
                                    <SelectItem value="youth">Grison Youth</SelectItem>
                                    <SelectItem value="autre">Autre / Sympathisant</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                         <FormField
                            control={form.control}
                            name="motivation"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="text-sm font-semibold text-slate-700">Motivation (courte)</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Pourquoi souhaitez-vous nous rejoindre ?" {...field} rows={3} className="bg-slate-50 border-slate-200 focus:border-primary focus:ring-2 focus:ring-emerald-200" />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" size="lg" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-xl mt-2">
                           Envoyer ma demande
                        </Button>
                        <p className="text-xs text-center text-slate-400 mt-4">
                            Vos données sont protégées. En cliquant, vous acceptez nos conditions.
                        </p>
                      </form>
                    </Form>
                </div>

            </div>
        </div>
    </section>
  );
}
