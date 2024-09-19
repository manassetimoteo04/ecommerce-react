import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="text-gray-500 relative">
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;
