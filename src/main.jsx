import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import WishList from './components/WishList/WishList.jsx';
import MainRoot from './components/MainRoot/MainRoot.jsx'; 
import Cart from './components/Cart/Cart.jsx';
import BIllingDetails from './components/BIllingDetails/BIllingDetails.jsx';
import NotFount from './components/NotFount/NotFount.jsx';
import Registration from './components/Registration/Registration.jsx';
import Profile from './components/Profile/Profile.jsx'; 
import Login from './components/Login/Login.jsx';
import ProductDetails from './components/ProductDetails/ProductDetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainRoot,
    children: [
      { index: true, Component: App },
      { path: "wishlist", Component: WishList },
      { path: "cart", Component: Cart },
      { path: "checkout", Component: BIllingDetails },
      { path: "signup", Component: Registration },
      { path: "details/:id", Component: ProductDetails },
      { path: "user", Component: Profile },
      { path: "login", Component: Login },
      { path: "*", Component: NotFount },
      
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
