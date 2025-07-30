import React from "react";
import Contact from "./features/Contact/Index";
import About from "./features/About/Index";
import SignUp from "./features/SignUp/Index";
import Home from "./features/Home/Index";
import RootLayout from "./layouts/RootLayout";
import Karzinka from "./page/Karzinka/Karzinka";
import User from "./page/User/User";
import LogIn from "./features/logIn/Index";
import Wishlist from "./features/wishlist/Wishlist";


import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App: React.FC = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "sign-up",
          element: <SignUp />,
        },
        {
          path: "karzinka",
          element: <Karzinka />,
        },
        {
          path: "user",
          element: <User />,
        },
        {
          path: "/login",
          element: <LogIn />,
        },
        {
          path: "wishlist",
          element: <Wishlist />,
        },
      
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default App;
