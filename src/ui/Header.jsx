import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import SearchForm from './SearchForm';
import {
  HiBars2,
  HiBars3,
  HiListBullet,
  HiMiniListBullet,
  HiOutlineShoppingBag,
  HiOutlineUser,
  HiOutlineXMark,
  HiUser,
} from 'react-icons/hi2';
import { useState } from 'react';

function Header() {
  const [showSideBar, setShowSideBar] = useState(true);
  const [showSubNav, setShowSubNav] = useState(false);
  return (
    <header className="top: 0 bg-white-50/80 fixed left-0 z-20 flex h-[60px] w-full items-center justify-between border-b border-gray-100 bg-white/80 px-4 backdrop-blur-[10px] md:gap-[4rem]">
      <div className="flex items-center gap-3">
        <button onClick={() => setShowSideBar(true)}>
          <HiBars3 className="size-6 md:hidden" />
        </button>
        <Logo />
        {showSideBar && (
          <div
            onClick={() => setShowSideBar(false)}
            className={`absolute ${showSideBar ? '' : 'hidden'} left-0 top-0 h-screen w-full bg-gray-950/50 backdrop-blur-[2px] md:hidden`}
          ></div>
        )}

        <nav
          className={`${!showSideBar ? 'translate-x-[-1000px]' : 'translate-x-0'} absolute left-0 top-0 z-10 h-screen w-[300px] bg-white py-3 transition-all duration-300 ease-in-out md:relative md:h-full md:translate-x-0 md:overflow-visible md:bg-transparent md:p-0`}
        >
          <ul className="flex flex-col gap-2 text-gray-900 md:flex-row md:justify-between">
            <li className="border-b border-b-gray-200 p-2 px-4 hover:text-blue-600 md:border-none">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="border-b border-b-gray-200 p-2 px-4 hover:text-blue-600 md:border-none">
              <NavLink to="/collections">Collections</NavLink>
            </li>
            <li className="border-b border-b-gray-200 p-2 px-4 hover:text-blue-600 md:border-none">
              <NavLink to="/categories">Categories</NavLink>
            </li>
            <li className="border-b border-b-gray-200 p-2 px-4 hover:text-blue-600 md:border-none">
              <NavLink to="/products">Products</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex justify-end">
        <SearchForm />
        <button className="ransition-all rounded-full px-2 duration-500 hover:bg-gray-100">
          <HiOutlineUser className="size-6" />
        </button>
        <div className="ransition-all flex items-center gap-1 rounded-full px-4 duration-500 hover:bg-gray-100">
          <button className="">
            <HiOutlineShoppingBag className="size-6" />
          </button>
          <span className="font-semibold text-gray-800">0</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
