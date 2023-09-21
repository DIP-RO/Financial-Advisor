import { createBrowserRouter } from "react-router-dom";
import Admin from "../Components/Admin/Admin";


import AllRooms from "../Components/Dashboard/AllRooms";
import Allusers from "../Components/Dashboard/Allusers";

import User from "../Components/Dashboard/User";
import Home from "../Components/Home/Home";
import LoginPage from "../Components/LoginPage/LoginPage";
import Others from "../Components/Other/Others";
import RegisterPage from "../Components/RegisterPage/RegisterPage";
import VerifyAdmin from "../Components/VerifyAdmin/VerifyAdmin";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import Service from "../Components/Services/Service";
import ServiceDetails from "../Components/Services/ServiceDetails";
import Blog from "../Components/Blogs/Blog";
import Team from"../Components/Team/Team"
import Advisor from "../Components/Advisor/Advisor";
import SRS from "../Components/Team/SRS";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/team",
        element:<Team></Team>
      },
      {
        path: "/advisor",
        element:<Advisor></Advisor>
      },
      {
        path: "/service/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services`) // Fetch the entire JSON file
            .then((response) => response.json())
            .then((data) => data[params.id]), // Access the specific item by ID
        element: <ServiceDetails></ServiceDetails>,
      },

      {
        path: "/service",
        element: <Service></Service>,
      },
      {
        path: "/srs",
        element: <SRS></SRS>,
      },
      
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>,
      },

      {
        path: "/about",
        element: <Others></Others>,
      },
      {
        path: "/verifyAdmin",
        element: <VerifyAdmin></VerifyAdmin>,
      },
      {
        path: "/admin",

        element: <Admin></Admin>,
      },
     
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard/userDetail",
        element: (
          <PrivateRoute>
            <User></User>
          </PrivateRoute>
        ),
      },
     
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <PrivateRoute>
              <Allusers></Allusers>
            </PrivateRoute>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allrooms",
        element: (
          <AdminRoute>
            <PrivateRoute>
              <AllRooms></AllRooms>
            </PrivateRoute>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addroom",
        element: (
          <AdminRoute>
            <PrivateRoute>
             
            </PrivateRoute>
          </AdminRoute>
        ),
      },
    ],
  },
]);
