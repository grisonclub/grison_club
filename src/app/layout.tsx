import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import PreFooter from '@/components/layout/pre-footer';
import ConstructionBanner from '@/components/layout/construction-banner';

export const metadata: Metadata = {
  title: 'Grison Club - Former, Inspirer, Agir',
  description: 'Rejoignez le mouvement Grison Club pour une transformation sociale durable à travers l\'éducation, la culture et la protection de notre environnement.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          'min-h-screen bg-slate-50 text-slate-800 antialiased font-sans',
          'dark:bg-slate-950 dark:text-slate-200'
        )}
      >
        <ConstructionBanner />
        <Header />
        <div className="relative flex min-h-dvh flex-col">
          <main className="flex-1">{children}</main>
          <PreFooter />
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
