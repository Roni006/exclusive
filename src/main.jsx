import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import WishList from './components/WishList/WishList.jsx';
import MainRoot from './components/MainRoot/MainRoot.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainRoot,
    children: [
      { index: true, Component: App },
      { path: "wishlist", Component: WishList },
      
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
