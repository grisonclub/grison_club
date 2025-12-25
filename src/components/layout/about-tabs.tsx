'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const tabs = [
  { name: 'Nos dirigeants', href: '/a-propos/bureau' },
  { name: 'Qui sommes nous', href: '/a-propos/valeurs' },
  { name: 'Notre Histoire', href: '/a-propos/histoire' },
  { name: 'Nos Alumnis', href: '/a-propos/alumnis' },
];

export default function AboutTabs() {
  const pathname = usePathname();

  return (
    <div className="flex items-center space-x-8 -mb-px">
      {tabs.map((tab) => (
        <Link
          key={tab.name}
          href={tab.href}
          className={cn(
            'py-4 px-1 inline-flex items-center gap-2 text-sm font-medium whitespace-nowrap',
            pathname === tab.href
              ? 'border-b-2 border-amber-500 text-amber-500'
              : 'border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
          )}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
}
