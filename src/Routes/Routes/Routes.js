import { createBrowserRouter } from "react-router-dom";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import AddProduct from "../../Pages/Dashboard/addComplain/AddComplain";
import ActionComplains from "../../Pages/Dashboard/ComplainActions/ComplainActions";
import Login from "../../Pages/Login/Login";
import ErrorPage from "../../Pages/Shared/ErrorPage";
import Signup from "../../Pages/Signup/Signup";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/add-complain",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/dashboard/complain-action",
        element: (
          <PrivateRoute>
            <ActionComplains></ActionComplains>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
