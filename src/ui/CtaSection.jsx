import Button from './Button';

function CtaSection() {
  return (
    <section
      class="relative mt-[6rem]"
      style={{ backgroundImage: "url('images/home-page-02-edition-01.jpg')" }}
    >
      <div className="mx-auto my-0 min-h-[25rem] max-w-[80rem]">
        <div className="absolute left-0 top-0 h-full w-full bg-opacity-75 bg-gradient-to-b from-white/75 to-white"></div>
        <div className="absolute left-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center gap-5 px-2">
          <h3 className="text-center text-2xl font-bold text-gray-950 lg:text-6xl">
            What are you looking for?
          </h3>
          <p className="max-w-[30rem] text-center">
            Most of our products are limited releases that won't come back. Get
            your favorite items while they're in stock.
          </p>
          <Button type="secondary">Get access to our one-time sale</Button>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
