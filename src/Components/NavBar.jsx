import { Link, useLocation } from "react-router";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../Pages/Loading";
import { NavLink } from "react-router";
import { RiUserFollowFill } from "react-icons/ri";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

const NavBar = () => {
  const { user, logoutUser, loading } = useContext(AuthContext);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const defaultAvatar =
    "https://img.freepik.com/free-vector/smiling-young-man-glasses_1308-174702.jpg";
  useEffect(() => {
    const handleScroll = () => {
      // If page scrolled more than 50px vertically, set scrolled to true
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div
      className={`navbar fixed top-0 left-0 right-0 z-50 text-white transition-colors shadow-sm duration-300 ${
        isHomePage
          ? scrolled
            ? "bg-gradient-to-r from-[#1e1b4b] to-[#312e81] dark:from-slate-900 dark:to-slate-800"
            : "bg-transparent dark:bg-transparent"
          : "bg-gradient-to-r from-[#1e1b4b] to-[#312e81] dark:from-slate-900 dark:to-slate-800"
      }`}
    >
      <div className="w-11/12 mx-auto flex justify-between items-center">
        <div className="navbar-start">
          <Logo></Logo>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 gap-8">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-indigo-300 dark:text-indigo-700 border-b-2"
                    : "text-white dark:text-gray-200"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/browseTask"
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-indigo-300 dark:text-indigo-700 border-b-2"
                    : "text-white dark:text-gray-200"
                }
              >
                Browse Task
              </NavLink>
            </li>

            <li>
              <Link
                to={user ? "/addTask" : "/auth/login"}
                state={!user ? { from: "/addTask" } : undefined}
                className={`${
                  location.pathname === "/addTask"
                    ? "font-semibold text-indigo-300 dark:text-indigo-700 border-b-2"
                    : "text-white dark:text-gray-200"
                }`}
              >
                Add Task
              </Link>
            </li>

            {user && (
              <>
                <li>
                  <NavLink
                    to="/myTask"
                    className={({ isActive }) =>
                      isActive
                        ? "font-semibold text-indigo-300 dark:text-indigo-700 border-b-2"
                        : "text-white dark:text-gray-200"
                    }
                  >
                    My Posted Task
                  </NavLink>{" "}
                </li>
                <li>
                  <NavLink
                    to="/dashboard"
                    >
                     Dashboard
                  </NavLink>{" "}
                </li>
              </>
            )}
          </ul>
        </div>
        {/* Avatar for desktop */}
        <div className="hidden lg:flex navbar-end gap-6">
          {user ? (
            <>
              <div className="relative flex items-center gap-4">
                <ThemeToggle />
                <div className="relative group">
                  <div className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 h-10 rounded-full bg-slate-400 overflow-hidden">
                      <img
                        className="p-1 rounded-full object-contain"
                        src={user?.photoURL ? user.photoURL : defaultAvatar}
                        alt={user?.displayName || "User Avatar"}
                      />
                    </div>
                  </div>

                  {/* Hover Area Bridge */}
                  <div className="absolute top-full right-0 w-40 h-6 group-hover:block hidden"></div>

                  {/* Dropdown Menu */}
                  <div className="absolute right-0 mt-2 hidden group-hover:block z-10 bg-base-100 shadow-lg rounded-md w-52 p-4">
                    <p className="font-medium text-sm mb-2 flex gap-2 items-center text-indigo-500">
                      <RiUserFollowFill /> {user?.displayName || "User"}
                    </p>
                    <button
                      onClick={logoutUser}
                      className="w-full bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 text-sm"
                    >
                      Log Out
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <ThemeToggle></ThemeToggle>
              <Link
                to="/auth/login"
                className="relative inline-flex items-center justify-center px-8 py-2 text-lg font-medium tracking-tight text-white bg-indigo-800 rounded-md group"
              >
                <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-indigo-400 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white rounded-md"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-indigo-600 rounded-md opacity-0 group-hover:opacity-100"></span>
                <span className="relative text-black transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
                  Login
                </span>
              </Link>

              <Link
                to="/auth/register"
                className="relative px-5 py-2 font-medium text-white group"
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-gradient-to-r from-indigo-500 to-indigo-600 group-hover:from-indigo-600 group-hover:to-indigo-700 group-hover:skew-x-12"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-indigo-700 group-hover:bg-indigo-500 group-hover:-skew-x-12"></span>
                <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-indigo-600 -rotate-12"></span>
                <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-indigo-400 -rotate-12"></span>
                <span className="relative">Register</span>
              </Link>
            </>
          )}
        </div>

        <div className="flex lg:hidden navbar-end relative">
          {user ? (
            <div className="relative flex items-center">
              <ThemeToggle />

              <div className="relative group ml-6">
                <div className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 h-10 rounded-full bg-slate-400 overflow-hidden">
                    <img
                      className="p-1 rounded-full object-contain"
                      src={user?.photoURL ? user.photoURL : defaultAvatar}
                      alt={user?.displayName || "User Avatar"}
                    />
                  </div>
                </div>

                <ul className="absolute right-0 mt-3.5 w-40 bg-base-100 rounded-box p-2 space-y-2 shadow z-10 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                  <p className="font-medium text-sm flex gap-2 items-center text-indigo-500">
                    <RiUserFollowFill /> {user?.displayName || "User"}
                  </p>

                  <li className="text-center text-indigo-500">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="text-center text-indigo-500">
                    <Link to="/browseTask">Browse Task</Link>
                  </li>
                  <li className="text-center text-indigo-500">
                    <Link to="/addTask">Add Task</Link>
                  </li>
                  <li className="text-center text-indigo-500">
                    <Link to="/myTask">My Posted Task</Link>
                  </li>
                  <li>
                    <button
                      onClick={logoutUser}
                      className="w-full bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 text-sm"
                    >
                      Log Out
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <ThemeToggle />

              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost hover:dark:bg-gray-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>

                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content absolute right-0 mt-3.5 w-40 bg-base-100 rounded-box p-2 shadow z-10"
                >
                  <li>
                    <Link className="text-black" to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="text-black" to="/browseTask">
                      Browser Task
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-black"
                      to={user ? "/addTask" : "/auth/login"}
                      state={!user ? { from: "/addTask" } : undefined}
                    >
                      Add Task
                    </Link>
                  </li>
                  <li>
                    <Link className="text-black" to="/auth/login">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link className="text-black" to="/auth/register">
                      Register
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
