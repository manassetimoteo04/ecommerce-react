import Button from './Button';
import HeroImage from './HeroImage';

function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-cyan-50 to-blue-50 pt-[80px]">
      <div className="mx-auto my-0 flex max-w-[80rem] flex-col items-center gap-8 md:grid md:grid-cols-[1.5fr_1fr] md:gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div className="px-[1rem]">
          <h3 className="mb-4 text-5xl font-semibold text-gray-950 lg:text-6xl">
            Summer styles are finally here
          </h3>
          <p className="mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            corrupti numquam, reiciendis, magni suscipit laudantium, tempore
            excepturi labore consectetur molestias eaque? Dignissimos itaque
            minima officia nihil vel quibusdam eaque fugit!
          </p>
          <Button type="primary">Shop collection</Button>
        </div>
        <div className="mt-[1rem] md:mt-0">
          <HeroImage />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
