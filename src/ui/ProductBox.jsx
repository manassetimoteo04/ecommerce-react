function ProductBox({ img }) {
  return (
    <div className="">
      <img
        src={`images/home-page-01-category-0${img}.jpg`}
        className="w-full"
        alt=""
      />
      <div className="content flex flex-col gap-[0.1rem] py-[1rem]">
        <p className="text-md text-gray-600">Product Name</p>
        <p className="text-sm">Category</p>
        <p className="font-semibold text-gray-700">$ 234,00</p>
      </div>
    </div>
  );
}

export default ProductBox;
