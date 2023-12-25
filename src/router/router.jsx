import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import AboutUs from './../Pages/AboutUs';
import Dashboard from "../Layout/Dashboard";
import CreateTask from "../Pages/CreateTask";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivetRoute from "./PrivateRoute";


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
        },
        {
            path: "/register",
            element:<Register></Register>
        }
      ]
    },
    {
      path: "/dashboard",
      element: <Dashboard></Dashboard>,
      children:[
        {
            path: "/dashboard",
            element:<PrivetRoute><CreateTask></CreateTask></PrivetRoute>
        }
      ]
    },
  ]);

export default router;