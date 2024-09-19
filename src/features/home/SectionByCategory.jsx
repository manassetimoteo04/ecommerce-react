import { HiOutlineArrowDownRight, HiOutlineArrowRight } from 'react-icons/hi2';
import Button from '../../ui/Button';
import ShopByCategoryGrid from './ShopByCategoryGrid';

function SectionByCategory() {
  return (
    <section className="mx-auto my-0 max-w-[90rem] px-[2rem] py-[12rem]">
      <header className="mb-[2rem] flex items-center justify-between">
        <h3 className="font-bold text-gray-950 md:text-2xl">
          Shop by Category
        </h3>
        <Button type="tertiary">
          Browse all <HiOutlineArrowRight />
        </Button>
      </header>
      <ShopByCategoryGrid />
    </section>
  );
}

export default SectionByCategory;
