import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import DashBoard from './../Pages/DashBoard';
import AboutUs from './../Pages/AboutUs';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: "/",
            element:<Home></Home>
        },
        {
            path: "/dashboard",
            element:<DashBoard></DashBoard>
        },
        {
            path: "/about",
            element:<AboutUs></AboutUs>
        }
      ]
    },
  ]);

export default router;