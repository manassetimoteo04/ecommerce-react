import {
  HiOutlineFaceSmile,
  HiOutlineHome,
  HiOutlineLockClosed,
} from 'react-icons/hi2';

function SectionFeature() {
  return (
    <section className="mx-auto my-0 mb-[6rem] mt-[6rem] grid max-w-[80rem] grid-cols-1 gap-6 px-2 sm:grid-cols-1 md:grid-cols-3">
      <div className="grid grid-cols-[3rem_1fr] gap-6">
        <span className="flex h-[3rem] w-[3rem] items-center justify-center rounded-md bg-blue-600 text-2xl">
          <HiOutlineLockClosed className="text-gray-50" />
        </span>
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-gray-950">Security</h4>
          <p>Lorem ipsum dolorsit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="grid grid-cols-[3rem_1fr] gap-6">
        <span className="flex h-[3rem] w-[3rem] items-center justify-center rounded-md bg-blue-600 text-2xl">
          <HiOutlineFaceSmile className="text-gray-50" />
        </span>
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-gray-950">Friendly</h4>
          <p>Lorem ipsum dolorsit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="grid grid-cols-[3rem_1fr] gap-6">
        <span className="flex h-[3rem] w-[3rem] items-center justify-center rounded-md bg-blue-600 text-2xl">
          <HiOutlineHome className="text-gray-50" />
        </span>
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-gray-950">Confort</h4>
          <p>Lorem ipsum dolorsit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </section>
  );
}

export default SectionFeature;
