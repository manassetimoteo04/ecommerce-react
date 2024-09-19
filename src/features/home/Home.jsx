import HeroSection from '../../ui/HeroSection';
import SectionByCategory from './SectionByCategory';
import TrendingProducts from './TrendingProducts';

function Home() {
  return (
    <main>
      <HeroSection />
      <SectionByCategory />
      <TrendingProducts />
    </main>
  );
}

export default Home;
