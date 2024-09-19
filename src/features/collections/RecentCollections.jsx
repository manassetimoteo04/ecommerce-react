import { Link } from 'react-router-dom';
import SectionHeader from '../../ui/SectionHeader';
import { HiArrowRight } from 'react-icons/hi2';

function RecentCollections() {
  return (
    <section className="m-[8rem_auto] max-w-[80rem] px-[2rem]">
      <SectionHeader>
        <h3 className="font-bold text-gray-950 md:text-2xl">New Collections</h3>
      </SectionHeader>
      <div className="grid overflow-hidden rounded-xl sm:grid-cols-2">
        <div className="relative">
          <img
            src="/images/category-page-01-image-card-06.jpg"
            alt=""
            className="w-full"
          />
          <div className="absolute bottom-0 left-0 flex h-full w-full flex-col justify-end bg-black/50 p-[2rem]">
            <p className="text-xl font-semibold text-white">Collection</p>
            <Link
              to=""
              className="flex items-center gap-2 text-gray-300 hover:text-white"
            >
              See collection <HiArrowRight />
            </Link>
          </div>
        </div>
        <div className="relative">
          <img
            src="/images/category-page-01-image-card-05.jpg"
            alt=""
            className="w-full"
          />
          <div className="absolute bottom-0 left-0 flex h-full w-full flex-col justify-end bg-black/50 p-[2rem]">
            <p className="text-xl font-semibold text-white">Collection</p>
            <Link
              to=""
              className="flex items-center gap-2 text-gray-300 hover:text-white"
            >
              See collection <HiArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecentCollections;
