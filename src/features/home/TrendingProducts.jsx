import { HiOutlineArrowRight } from 'react-icons/hi2';
import SectionHeader from '../../ui/SectionHeader';
import Button from '../../ui/Button';
import ProductBox from '../../ui/ProductBox';

function TrendingProducts() {
  return (
    <section className="mx-auto my-0 max-w-[80rem] px-[2rem]">
      <SectionHeader>
        <h3 className="font-bold text-gray-950 md:text-2xl">
          Trending Products
        </h3>
        <Button type="tertiary">
          Browse all <HiOutlineArrowRight />
        </Button>
      </SectionHeader>

      <div className="xxs:grid-cols-1 xs:grid-cols-2 grid w-full grid-cols-1 gap-[2rem] overflow-auto md:grid-cols-3 lg:grid-cols-4">
        <ProductBox img={1} />
        <ProductBox img={2} />
        <ProductBox img={3} />
        <ProductBox img={4} />
      </div>
    </section>
  );
}

export default TrendingProducts;
