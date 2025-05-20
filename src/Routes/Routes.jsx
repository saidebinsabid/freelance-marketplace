import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddTask from "../Pages/AddTask";
import PrivateRoute from "../Provider/PrivateRoutes";
import BrowseTask from "../Pages/BrowseTask";
import MyTask from "../Pages/MyTask";
import ErrorPage from "../Pages/ErrorPage";
import Loading from "../Pages/Loading";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/browseTask",
        loader: () => fetch("http://localhost:3000/tasks"),
        hydrateFallbackElement: <Loading></Loading>,
        element: <BrowseTask></BrowseTask>,
      },
      {
        path: "/addTask",
        element: (
          <PrivateRoute>
            <AddTask></AddTask>
          </PrivateRoute>
        ),
      },
      {
        path: "/myTask",
        element: (
          <PrivateRoute>
            <MyTask></MyTask>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: '/*',
    element: <ErrorPage></ErrorPage>
  }
]);

export default router;
