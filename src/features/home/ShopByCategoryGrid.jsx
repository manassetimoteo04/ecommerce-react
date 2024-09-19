import { HiOutlineArrowRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

function ShopByCategoryGrid() {
  return (
    <div className="grid grid-cols-1 gap-[2rem] md:grid-cols-2">
      <div>
        <div className="relative h-full w-full overflow-hidden rounded-lg bg-black">
          <img
            src="images/home-page-02-edition-01.jpg"
            alt=""
            className="h-full w-full"
          />
          <div className="absolute bottom-0 left-0 z-10 flex h-full w-full items-end bg-black/40 bg-gradient-to-bl p-4 text-white">
            <div>
              <h4 className="font-semibold">New Arrivals</h4>
              <Link to="/" className="flex items-center gap-2">
                Shop now <HiOutlineArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="grid h-full grid-rows-2 gap-[2rem] md:grid-cols-2">
        <div className="relative h-full w-full overflow-hidden rounded-lg bg-gradient-to-b from-transparent to-black/90">
          <img
            src="images/home-page-02-edition-02.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 z-10 flex h-full w-full items-end bg-black/40 bg-gradient-to-bl p-4 text-white">
            <div>
              <h4 className="font-semibold">New Arrivals</h4>
              <Link to="/" className="flex items-center gap-2">
                Shop now <HiOutlineArrowRight />
              </Link>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full overflow-hidden rounded-lg bg-black">
          <img
            src="images/category-page-01-featured-collection.jpg"
            alt=""
            className="h-full w-full"
          />
          <div className="absolute bottom-0 left-0 z-10 flex h-full w-full items-end bg-black/40 bg-gradient-to-bl p-4 text-white">
            <div>
              <h4 className="font-semibold">New Arrivals</h4>
              <Link to="/" className="flex items-center gap-2">
                Shop now <HiOutlineArrowRight />
              </Link>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full overflow-hidden rounded-lg bg-black">
          <img
            src="images/category-page-01-featured-collection.jpg"
            alt=""
            className="h-full w-full"
          />
          <div className="absolute bottom-0 left-0 z-10 flex h-full w-full items-end bg-black/40 bg-gradient-to-bl p-4 text-white">
            <div>
              <h4 className="font-semibold">New Arrivals</h4>
              <Link to="/" className="flex items-center gap-2">
                Shop now <HiOutlineArrowRight />
              </Link>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full overflow-hidden rounded-lg bg-black">
          <img
            src="images/category-page-01-featured-collection.jpg"
            alt=""
            className="h-full w-full"
          />
          <div className="absolute bottom-0 left-0 z-10 flex h-full w-full items-end bg-black/40 bg-gradient-to-bl p-4 text-white">
            <div>
              <h4 className="font-semibold">New Arrivals</h4>
              <Link to="/" className="flex items-center gap-2">
                Shop now <HiOutlineArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopByCategoryGrid;
