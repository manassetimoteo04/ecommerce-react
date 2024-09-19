import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./features/home/Home";
import Products from "./features/products/Products";
import Men from "./features/men/Men";
import Women from "./features/women/Women";
import Checkout from "./features/checkout/Checkout";
import Cart from "./features/cart/Cart";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/products/:productId", element: <Products /> },
      { path: "/men", element: <Men /> },
      { path: "/women", element: <Women /> },
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <Checkout /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
