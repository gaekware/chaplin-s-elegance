import FilmGrain from '@/components/FilmGrain';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import MusicSchedule from '@/components/MusicSchedule';
import MenuHighlight from '@/components/MenuHighlight';
import Gallery from '@/components/Gallery';
import PrivateEvents from '@/components/PrivateEvents';
import LocationMap from '@/components/LocationMap';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="bg-background">
      <FilmGrain />
      <Hero />
      <About />
      <Experience />
      <MusicSchedule />
      <MenuHighlight />
      <Gallery />
      <PrivateEvents />
      <LocationMap />
      <Footer />
    </main>
  );
};

export default Index;
