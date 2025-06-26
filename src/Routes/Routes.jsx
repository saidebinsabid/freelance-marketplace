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
import DashboardLayout from "../Layouts/DashBoardLayout";
import BrowseTaskDashboard from "../Pages/DashBoardPages/BrowseTaskDashboard";
import DashboardHomeWrapper from "../Pages/DashBoardPages/DashboardHomeWrapper";
import MyTaskDashboard from "../Pages/DashBoardPages/MyTaskDashboard";
import AddTaskDashboard from "../Pages/DashBoardPages/AddTaskDashboard";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
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
        path: "/about",
        element: <About></About>,
      },
       {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/browseTask",
element: <BrowseTask></BrowseTask>,
      },
      {
        path: "/taskDetail/:id",
        hydrateFallbackElement: <Loading></Loading>,
        loader: ({ params }) =>
          fetch(
            `https://freelance-marketplace-server-xi.vercel.app/tasks/${params.id}`
          ),
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
  path: "/dashboard",
  element: <DashboardLayout />,
  children: [
    {
      index: true,
      element: <DashboardHomeWrapper></DashboardHomeWrapper>,
    },
    {
      path: "/dashboard/browseTask",
      element: <BrowseTaskDashboard />,
    },
    {
      path: "addTask",
      element: <AddTaskDashboard></AddTaskDashboard>,
    },
    {
      path: "myTask",
      element: <MyTaskDashboard></MyTaskDashboard>,
    },
  ],
},
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
