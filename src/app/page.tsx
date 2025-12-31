import About from '@/components/sections/about';
import Clubs from '@/components/sections/clubs';
import Events from '@/components/sections/events';
import Hero from '@/components/sections/hero';
import SocialFeed from '@/components/sections/social-feed';
import Stats from '@/components/sections/stats';
import Membership from '@/components/sections/membership';
import HistoryTimeline from '@/components/sections/history-timeline';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <HistoryTimeline />
      <Clubs />
      <SocialFeed />
      <Events />
      <Contact />
      <Membership />
    </>
  );
}
