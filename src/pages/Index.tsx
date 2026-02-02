import FilmGrain from '@/components/FilmGrain';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import MenuHighlight from '@/components/MenuHighlight';
import Gallery from '@/components/Gallery';
import PrivateEvents from '@/components/PrivateEvents';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="bg-background">
      <FilmGrain />
      <Hero />
      <About />
      <Experience />
      <MenuHighlight />
      <Gallery />
      <PrivateEvents />
      <Footer />
    </main>
  );
};

export default Index;
