import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import AboutUs from './../Pages/AboutUs';
import Dashboard from "../Layout/Dashboard";
import CreateTask from "../Pages/CreateTask";
import Login from "../Pages/Login";


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
            path: "/about",
            element:<AboutUs></AboutUs>
        },
        {
            path: "/login",
            element:<Login></Login>
        }
      ]
    },
    {
      path: "/dashboard",
      element: <Dashboard></Dashboard>,
      children:[
        {
            path: "/dashboard",
            element:<CreateTask></CreateTask>
        }
      ]
    },
  ]);

export default router;