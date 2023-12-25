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
import TaskList from "../Pages/TaskList";
import ErrorPage from "../Pages/ErrorPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
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
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: "/dashboard/task",
            element:<PrivetRoute><CreateTask></CreateTask></PrivetRoute>
        },
        {
            path: "/dashboard/tasklist",
            element:<PrivetRoute><TaskList></TaskList></PrivetRoute>,
            loader :()=> fetch('https://y-ashy-delta.vercel.app/tasks')
        }
      ]
    },
  ]);

export default router;