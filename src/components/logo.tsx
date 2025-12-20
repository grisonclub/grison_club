import Image from 'next/image';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Image
      src="/images/logo.svg"
      alt="Grison Club Logo"
      width={40}
      height={40}
      className={cn(className)}
    />
  );
}
