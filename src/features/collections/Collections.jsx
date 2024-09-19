import Button from '../../ui/Button';
import CtaSection from '../../ui/CtaSection';
import HeroSection from '../../ui/HeroSection';
import RecentCollections from './RecentCollections';
import SectionColletions from './SectionColletions';

function Collections() {
  return (
    <main>
      <HeroSection>
        <div className="mx-auto my-0 flex h-screen max-w-[80rem] flex-col items-center justify-center px-[1rem]">
          <h3 className="mb-4 text-center text-5xl font-semibold text-gray-950 lg:text-6xl">
            Find our greatest collections and get inspired
          </h3>
          <p className="mb-6 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            corrupti numquam, reiciendis, magni suscipit laudantium, tempore
            excepturi labore consectetur molestias eaque? Dignissimos itaque
            minima officia nihil vel quibusdam eaque fugit!
          </p>
          <Button type="primary">Start browsing your collections</Button>
        </div>
      </HeroSection>
      <RecentCollections />
      <SectionColletions />
      <CtaSection />
    </main>
  );
}

export default Collections;
