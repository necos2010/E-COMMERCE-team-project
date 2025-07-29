import { createBrowserRouter, NavLink, RouterProvider } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home/index";
import Layout from "./components/Layout";
import Packages from "./pages/Packages/Index";
import Modal from "./pages/Home/layout/modal/Modal";
import More from "./pages/more/Index"
import Partners from "./pages/partner/Index";
import Video from "./pages/video/Video";
import AboutUs from "./pages/aboutUs/index"
import PageNotFound from "./pages/pageNotFound";
import AviaTickets from "./pages/aviaTickets/index"
function App() {
  const routes = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "ko'proq/:id",
          element: <More/>
        },
        {
          path: "umra-to'plamlari",
          element: <Packages />,
        },
        {
          path: "umra-to'plamlari/ko'proq/:id",
          element: <More/>
        },
        {
          path: "bizning-hamkorlar",
          element: <Partners/>
        },
        {
          path: "video-sharxlar",
          element: <Video/>
        }, 
        {
          path: "biz-haqimizda",
          element: <AboutUs/>
        },
        {
          path: '*',
          element: <PageNotFound/>
        },
        {
          path: 'avia-chiptalar',
          element: <AviaTickets/>
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
