import CtaSection from '../../ui/CtaSection';
import HeroSection from '../../ui/HeroSection';
import SectionByCategory from './SectionByCategory';
import SectionFeature from './SectionFeature';
import TrendingProducts from './TrendingProducts';

function Home() {
  return (
    <main>
      <HeroSection />
      <SectionByCategory />
      <TrendingProducts />
      <CtaSection />
      <SectionFeature />
    </main>
  );
}

export default Home;
