import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router";
import { FaChartPie, FaPlusCircle, FaTasks, FaSignOutAlt } from "react-icons/fa";

import Logo from "../Components/Logo";
import ThemeToggle from "../Components/ThemeToggle";
import { AuthContext } from "../Provider/AuthProvider";

const DashboardLayout = () => {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <div className="drawer lg:drawer-open dark:bg-gray-900">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Top Header */}
        <div className="w-full flex justify-between items-center px-4 py-4 bg-gray-100 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-square btn-ghost lg:hidden text-gray-700 dark:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>

          <h2 className="text-xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100">
            Dashboard
          </h2>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="avatar">
              <div className="w-10 rounded-full ring ring-indigo-500 dark:ring-indigo-400 ring-offset-gray-100 dark:ring-offset-gray-900 ring-offset-2">
                <img
                  src={user?.photoURL || "https://i.ibb.co/0jqHpnp/default-avatar.png"}
                  alt="User Avatar"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Page Content */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu bg-gradient-to-r from-[#1e1b4b] to-[#312e81] text-white dark:from-slate-900 dark:to-slate-800 min-h-full w-80 p-4 space-y-2">
          <Logo />

          <li>
  <NavLink to="/dashboard" end className="flex items-center gap-2">
    <FaChartPie /> Overview
  </NavLink>
</li>
          <li>
            <NavLink to="/dashboard/browseTask" className="flex items-center gap-2">
              <FaTasks /> Browse Task
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addTask" className="flex items-center gap-2">
              <FaPlusCircle /> Add Task
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myTask" className="flex items-center gap-2">
              <FaTasks /> My Posted Task
            </NavLink>
          </li>
          <div className="mt-auto pt-6 border-t border-white/30">
            <li>
              <button onClick={logoutUser} className="flex items-center gap-2 text-red-400">
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
