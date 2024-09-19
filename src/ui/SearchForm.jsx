import { useState } from 'react';
import { HiOutlineMagnifyingGlass, HiOutlineXMark } from 'react-icons/hi2';
function SearchForm() {
  const [showForm, setShowForm] = useState(true);
  const [query, setQuery] = useState('');
  return (
    <form
      className={`left-0 flex h-10 items-center justify-center rounded-full px-3 py-1.5 transition-all duration-500 hover:bg-gray-100 ${showForm ? 'w-full bg-gray-100 sm:w-[15rem]' : 'w-10'}`}
    >
      <input
        type="text"
        placeholder="Search products"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full bg-transparent focus:outline-none"
      />
      {showForm && query ? (
        <button
          className=""
          onClick={(e) => {
            e.preventDefault();
            setQuery('');
          }}
        >
          <HiOutlineXMark className="size-6" />
        </button>
      ) : (
        <button
          className=""
          onClick={(e) => {
            e.preventDefault();
            setShowForm((s) => !s);
          }}
        >
          <HiOutlineMagnifyingGlass className="size-6" />
        </button>
      )}
    </form>
  );
}

export default SearchForm;
