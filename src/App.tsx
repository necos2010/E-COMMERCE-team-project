import React from 'react';
import './App.css';
import Contact from './features/Contact/Contact';
import About from './features/About/About';
import SignUp from './features/SignUp/Signup';
import Home from './features/Home/Home';
import RootLayout from './layouts/RootLayout';
import Karzinka from './page/Karzinka/Karzinka';
import User from './page/User/User';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const App: React.FC = () => {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'contact',
          element: <Contact />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'sign-up',
          element: <SignUp />,
        },
        {
          path: 'karzinka',
          element: <Karzinka/>
        },
        {
          path: 'user',
          element: <User/>
        }
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default App;
