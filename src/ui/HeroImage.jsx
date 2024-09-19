function HeroImage() {
  return (
    <div className="xxs:grid-cols-[5rem_5rem_5rem] xxs:grid-rows-[2.5rem_2.5rem_2.5rem_2.5rem_2.5rem] xs:grid-cols-[7.5rem_7.5rem_7.5rem] xs:grid-rows-[3.75rem_3.75rem_3.75rem_3.75rem_3.75rem] grid h-full w-full grid-cols-[4rem_4rem_4rem] grid-rows-[2rem_2rem_2rem_2rem_2rem] items-start gap-4 lg:grid-cols-[10rem_10rem_10rem] lg:grid-rows-[7.5rem_7.5rem_7.5rem_7.5rem_7.5rem]">
      <div className="col-start-1 row-start-3">
        <div className="overflow-hidden rounded-2xl md:h-[10rem] md:w-[7.5rem] lg:h-[15rem] lg:w-[10rem]">
          <img
            src="images/category-page-01-image-card-01.jpg"
            alt=""
            className="w-[120%]"
          />
        </div>
      </div>
      <div className="col-start-2 row-start-2">
        <div className="mb-[1rem] overflow-hidden rounded-2xl md:h-[10rem] md:w-[7.5rem] lg:h-[15rem] lg:w-[10rem]">
          <img
            src="images/category-page-01-image-card-02.jpg"
            alt=""
            className="w-[120%]"
          />
        </div>
        <div className="overflow-hidden rounded-2xl md:h-[10rem] md:w-[7.5rem] lg:h-[15rem] lg:w-[10rem]">
          <img
            src="images/category-page-01-image-card-03.jpg"
            alt=""
            className="w-[120%]"
          />
        </div>
      </div>
      <div className="col-start-3">
        <div className="mb-[1rem] overflow-hidden rounded-2xl md:h-[10rem] md:w-[7.5rem] lg:h-[15rem] lg:w-[10rem]">
          <img
            src="images/category-page-01-image-card-06.jpg"
            alt=""
            className="w-[120%]"
          />
        </div>
        <div className="overflow-hidden rounded-2xl md:h-[10rem] md:w-[7.5rem] lg:h-[15rem] lg:w-[10rem]">
          <img
            src="images/category-page-01-image-card-03.jpg"
            alt=""
            className="w-[120%]"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroImage;
