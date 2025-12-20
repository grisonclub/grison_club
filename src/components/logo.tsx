import Image from 'next/image';
import { cn } from '@/lib/utils';
import GrisonLogo from '../../image/Logo.png';

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Image
      src={GrisonLogo}
      alt="Grison Club Logo"
      width={40}
      height={40}
      className={cn(className)}
    />
  );
}
