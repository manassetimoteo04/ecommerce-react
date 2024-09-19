import SectionHeader from '../../ui/SectionHeader';
import CollectionBox from './CollectionBox';

function SectionColletions() {
  return (
    <section className="m-[0_auto] max-w-[80rem] px-[2rem]">
      <SectionHeader>
        <h3 className="font-bold text-gray-950 md:text-2xl">All Collections</h3>
      </SectionHeader>
      <div className="grid grid-cols-3 gap-[3rem]">
        <CollectionBox img={1} />
        <CollectionBox img={2} />
        <CollectionBox img={3} />
      </div>
    </section>
  );
}

export default SectionColletions;
