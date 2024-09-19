import { HiArrowRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

function CollectionBox({ img }) {
  return (
    <div className="">
      <img
        src={`images/home-page-02-edition-0${img}.jpg`}
        alt=""
        className="h-auto w-full rounded-lg"
      />
      <div className="mt-[1rem]">
        <div className="mt-[1rem] flex items-center justify-between">
          <p className="text-md font-semibold text-gray-950">Collection Name</p>
          <Link className="flex items-center gap-2 hover:text-blue-600">
            See collection <HiArrowRight />
          </Link>
        </div>

        <p className="mt-[1rem]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
          optio consectetur officia.{' '}
        </p>
      </div>
    </div>
  );
}

export default CollectionBox;
