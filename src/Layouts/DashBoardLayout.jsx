import React, { useContext, useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router";
import { FaPlusCircle, FaTasks, FaSignOutAlt } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import Logo from "../Components/Logo";
import ThemeToggle from "../Components/ThemeToggle";
import Lottie from "lottie-react";
import animationData from "../assets/dashboard.json";
import Loading from "../Pages/Loading";
import CardGrid from "../Components/CardGrid";
const DashboardLayout = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://freelance-marketplace-server-xi.vercel.app/tasks")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading></Loading>; // or your loading spinner
  }

  // Filter tasks posted by logged-in user
  const myTasks = tasks.filter((task) => task.email === user?.email);

  // Calculate total budget of user's tasks
  const totalBudget = myTasks.reduce(
    (sum, task) => sum + Number(task.budget),
    0
  );

  // Find nearest deadline among user's tasks
  const latestDeadline = myTasks.length
    ? new Date(Math.min(...myTasks.map((task) => new Date(task.deadline))))
    : null;
  return (
    <div className="drawer lg:drawer-open dark:bg-gray-900">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Top Header */}
        <div className="w-full flex justify-between items-center px-4 py-4 bg-gray-100 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700 transition-colors duration-300">
          {/* Mobile Drawer Button */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-square btn-ghost lg:hidden text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
          >
            {/* svg icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>

          <h2 className="text-xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-300">
            Overview
          </h2>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="avatar">
              <div className="w-10 rounded-full ring ring-indigo-500 dark:ring-indigo-400 ring-offset-gray-100 dark:ring-offset-gray-900 ring-offset-2 transition-colors duration-300">
                <img
                  src={
                    user?.photoURL ||
                    "https://i.ibb.co/0jqHpnp/default-avatar.png"
                  }
                  alt="User Avatar"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 p-4 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
          <div className="space-y-2">
            <h1 className="text-2xl md:text-4xl font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-300">
              Welcome back, {user?.displayName || "User"}!
            </h1>
            <p className="text-gray-700 dark:text-gray-300 max-w-md transition-colors duration-300">
              Take a look at your task overview, and stay organized with{" "}
              <span className="font-bold text-indigo-600 dark:text-indigo-400">
                KajKori.com
              </span>
              .
            </p>
          </div>
          <div className="w-48 md:w-40">
            <Lottie animationData={animationData} loop={true} />
          </div>
        </div>

        {/* Cards Section */}
        <CardGrid
          tasksCount={tasks.length}
          myTasksCount={myTasks.length}
          totalBudget={totalBudget}
          nextDeadline={
            latestDeadline ? latestDeadline.toLocaleDateString() : null
          }
        />

        {/* Dynamic Page Content */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-gradient-to-r from-[#1e1b4b] to-[#312e81] text-white dark:from-slate-900 dark:to-slate-800 min-h-full w-80 p-4 space-y-2">
          <Logo />
          <li>
            <NavLink to="/browseTask" className="flex items-center gap-2">
              <FaTasks /> Browse Task
            </NavLink>
          </li>
          <li>
            <NavLink to="/addTask" className="flex items-center gap-2">
              <FaPlusCircle /> Add Task
            </NavLink>
          </li>
          <li>
            <NavLink to="/myTask" className="flex items-center gap-2">
              <FaTasks /> My Posted Task
            </NavLink>
          </li>
          <div className="mt-auto pt-6 border-t border-white/30">
            <li>
              <button
                onClick={logoutUser}
                className="flex items-center gap-2 text-red-400"
              >
                <FaSignOutAlt /> Logout
              </button>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
