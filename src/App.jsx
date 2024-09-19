import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Home from './features/home/Home';
import Products from './features/products/Products';
import Collections from './features/collections/Collections';
import Categories from './features/categories/Categories';
import Checkout from './features/checkout/Checkout';
import Cart from './features/cart/Cart';
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/products', element: <Products /> },
      { path: '/products/:productId', element: <Products /> },
      { path: '/collections', element: <Collections /> },
      { path: '/categories', element: <Categories /> },
      { path: '/cart', element: <Cart /> },
      { path: '/checkout', element: <Checkout /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
