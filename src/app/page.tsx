import About from '@/components/sections/about';
import Clubs from '@/components/sections/clubs';
import Events from '@/components/sections/events';
import Hero from '@/components/sections/hero';
import Membership from '@/components/sections/membership';
import Stats from '@/components/sections/stats';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Clubs />
      <Events />
      <Membership />
    </>
  );
}
