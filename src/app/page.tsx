import About from '@/components/sections/about';
import Clubs from '@/components/sections/clubs';
import Contact from '@/components/sections/contact';
import Events from '@/components/sections/events';
import Hero from '@/components/sections/hero';
import Membership from '@/components/sections/membership';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Clubs />
      <Membership />
      <Events />
      <Contact />
    </>
  );
}
