import { Link } from 'react-router-dom';
import Logo from './Logo';

function Footer() {
  return (
    <footer className="flex flex-col justify-center gap-3 bg-gray-950 px-2 py-[4rem] sm:items-center">
      <Logo />
      <nav>
        <ul className="text-gray-30 flex gap-4 sm:flex-row">
          <li className="hover:text-gray-50">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-gray-50">
            <Link to="/collections">Collections</Link>
          </li>
          <li className="hover:text-gray-50">
            <Link to="/categories">Categories</Link>
          </li>
          <li className="hover:text-gray-50">
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
      <p className="text-gray-700"> © 2024 Ecommerce, All rights reserved.</p>
    </footer>
  );
}

export default Footer;
