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
import { CheckCircle, DollarSign, UserPlus } from 'lucide-react';

const formSchema = z.object({
  fullName: z.string().min(3, 'Le nom complet est requis.'),
  email: z.string().email('Adresse e-mail invalide.'),
  phone: z.string().min(9, 'Numéro de téléphone invalide.'),
  clubInterest: z.string().optional(),
});

export default function Membership() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      clubInterest: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: 'Pré-adhésion réussie !',
      description: 'Merci pour votre intérêt. Nous examinerons votre demande et vous contacterons bientôt.',
    });
    form.reset();
  }

  return (
    <section id="membership" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Adhésion</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Rejoignez notre famille</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Devenir membre du Grison Club, c'est s'engager activement pour un avenir meilleur. Suivez ces étapes simples pour nous rejoindre.
            </p>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Processus d'adhésion</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl">1</div>
                  <div>
                    <h4 className="font-semibold text-lg">Soumettre une demande</h4>
                    <p className="text-muted-foreground">Remplissez le formulaire de pré-adhésion avec vos informations. C'est la première étape pour nous faire part de votre intérêt.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl">2</div>
                  <div>
                    <h4 className="font-semibold text-lg">Validation par le comité</h4>
                    <p className="text-muted-foreground">Notre comité d'adhésion examinera votre profil. Nous vous contacterons pour un bref entretien afin de mieux vous connaître.</p>
                  </div>
                </li>
                 <li className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl">3</div>
                  <div>
                    <h4 className="font-semibold text-lg">Confirmation & Paiement</h4>
                    <p className="text-muted-foreground">Une fois votre demande validée, vous serez invité à régler les frais d'adhésion pour finaliser votre inscription.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
                <h3 className="text-2xl font-bold mb-4">Frais & Cotisation</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">Frais d'adhésion</CardTitle>
                            <UserPlus className="h-4 w-4 text-muted-foreground"/>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">50,000 GNF</div>
                            <p className="text-xs text-muted-foreground">Paiement unique à l'inscription</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">Cotisation Annuelle</CardTitle>
                            <DollarSign className="h-4 w-4 text-muted-foreground"/>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">200,000 GNF</div>
                            <p className="text-xs text-muted-foreground">Renouvelable chaque année</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
          </div>
          <div>
            <Card className="p-6 sm:p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl">Formulaire de Pré-adhésion</CardTitle>
                <CardDescription>Commencez votre aventure avec nous ici.</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nom complet</FormLabel>
                          <FormControl>
                            <Input placeholder="Ex: Moussa Camara" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Adresse e-mail</FormLabel>
                          <FormControl>
                            <Input placeholder="votre.email@exemple.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Téléphone</FormLabel>
                          <FormControl>
                            <Input placeholder="+224 XX XXX XXX" {...field} />
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
                          <FormLabel>Club d'intérêt (Optionnel)</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Sélectionnez un club" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="medecins">Grison Médecins</SelectItem>
                              <SelectItem value="avocats">Grison Avocats</SelectItem>
                              <SelectItem value="youth">Grison Youth</SelectItem>
                              <SelectItem value="ingenieurs">Grison Ingénieurs</SelectItem>
                              <SelectItem value="autre">Autre</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" size="lg" className="w-full mt-6" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
                      Soumettre ma demande
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
