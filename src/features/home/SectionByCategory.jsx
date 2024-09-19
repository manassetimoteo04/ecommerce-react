import { HiOutlineArrowDownRight, HiOutlineArrowRight } from 'react-icons/hi2';
import Button from '../../ui/Button';
import ShopByCategoryGrid from './ShopByCategoryGrid';
import SectionHeader from '../../ui/SectionHeader';

function SectionByCategory() {
  return (
    <section className="mx-auto my-0 max-w-[80rem] px-[2rem] py-[12rem]">
      <SectionHeader>
        <h3 className="font-bold text-gray-950 md:text-2xl">
          Shop by Category
        </h3>
        <Button type="tertiary">
          Browse all <HiOutlineArrowRight />
        </Button>
      </SectionHeader>
      <ShopByCategoryGrid />
    </section>
  );
}

export default SectionByCategory;
