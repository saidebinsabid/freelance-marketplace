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
import TaskDetails from "../Pages/TaskDetails";

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
        hydrateFallbackElement: <Loading></Loading>,
        loader: () => fetch("http://localhost:3000/tasks"),
        element: <BrowseTask></BrowseTask>,
      },
      {
        path: "/taskDetail/:id",
        hydrateFallbackElement: <Loading></Loading>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/tasks/${params.id}`),
        element: (
          <PrivateRoute>
            <TaskDetails></TaskDetails>
          </PrivateRoute>
        ),
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
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
