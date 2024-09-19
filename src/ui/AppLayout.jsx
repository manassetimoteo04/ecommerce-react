import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function AppLayout() {
  return (
    <div className="relative text-gray-500">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
