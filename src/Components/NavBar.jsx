import { Link } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../Pages/Loading";
import { NavLink } from "react-router";

const NavBar = () => {
  const { user, logoutUser, loading } = useContext(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="w-11/12 mx-auto flex justify-between items-center">
        <div className="navbar-start">
          <div className="flex justify-center items-center gap-2 bg-white py-4">
            {/* Logo SVG */}
            <svg
              className="w-8 h-8"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              fill="none"
            >
              <defs>
                <linearGradient
                  id="aesthetic-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#6366F1" /> {/* Indigo */}
                  <stop offset="100%" stopColor="#06B6D4" /> {/* Cyan */}
                </linearGradient>
              </defs>
              <rect
                x="3"
                y="1"
                width="7"
                height="12"
                stroke="url(#aesthetic-gradient)"
              />
              <rect
                x="3"
                y="17"
                width="7"
                height="6"
                stroke="url(#aesthetic-gradient)"
              />
              <rect
                x="14"
                y="1"
                width="7"
                height="6"
                stroke="url(#aesthetic-gradient)"
              />
              <rect
                x="14"
                y="11"
                width="7"
                height="12"
                stroke="url(#aesthetic-gradient)"
              />
            </svg>

            {/* Brand Name */}
            <Link to="/" className="text-2xl font-semibold text-gray-900">
              Kaj<span className="text-indigo-500">Kori</span>.com
            </Link>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 gap-8">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-black border-b-2"
                    : "text-gray-500"
                }
              >
                Home
              </NavLink>
            </li>

            {user && (
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold text-black border-b-2"
                      : "text-gray-500"
                  }
                >
                  Add Task
                </NavLink>{" "}
              </li>
            )}
          </ul>
        </div>
        {/* Avatar for desktop */}
        <div className="hidden lg:flex navbar-end gap-6">
          {user ? (
            <>
              <div className="relative group">
                <div className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full bg-slate-400">
                    <img
                      className="p-1 rounded-full object-contain"
                      src={
                        user?.photoURL ||
                        "https://img.freepik.com/free-vector/smiling-young-man-glasses_1308-174702.jpg?ga=GA1.1.342230302.1735884929&semt=ais_hybrid&w=740"
                      }
                      alt="user avatar"
                    />
                  </div>
                </div>

                {/* Hover Area Bridge */}
                <div className="absolute top-full right-0 w-40 h-6 group-hover:block hidden"></div>

                {/* Dropdown Menu */}
                <div className="absolute right-0 mt-2 hidden group-hover:block z-10 bg-base-100 shadow-lg rounded-md w-52 p-4">
                  <p className="font-medium text-sm mb-2">
                    👤 {user?.displayName || "User"}
                  </p>
                  <button
                    onClick={logoutUser}
                    className="w-full bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 text-sm"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link
                to="/auth/login"
                className="relative inline-flex items-center justify-center px-8 py-2 text-lg font-medium tracking-tight text-white bg-slate-800 rounded-md group"
              >
                <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-slate-400 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white rounded-md"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-slate-600 rounded-md opacity-0 group-hover:opacity-100"></span>
                <span className="relative text-black transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
                  Login
                </span>
              </Link>

              <Link
                to="/auth/register"
                className="relative px-5 py-2 font-medium text-white group"
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-gradient-to-r from-blue-500 to-blue-600 group-hover:from-blue-600 group-hover:to-blue-700 group-hover:skew-x-12"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-blue-700 group-hover:bg-blue-500 group-hover:-skew-x-12"></span>
                <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-blue-600 -rotate-12"></span>
                <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-blue-400 -rotate-12"></span>
                <span className="relative">Register</span>
              </Link>
            </>
          )}
        </div>

        <div className="flex lg:hidden navbar-end relative">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full object-contain bg-slate-400">
                  <img
                    className="p-1 rounded-full object-contain"
                    src={
                      user?.photoURL ||
                      "https://img.freepik.com/free-vector/smiling-young-man-glasses_1308-174702.jpg?ga=GA1.1.342230302.1735884929&semt=ais_hybrid&w=740"
                    }
                    alt="user avatar"
                  />
                </div>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content absolute right-0 mt-3.5 w-40 bg-base-100 rounded-box p-2 shadow z-10"
              >
                <li>
                  <Link to="/bills">Add Task</Link>
                </li>
                <li>
                  <button
                    onClick={async () => {
                      await logoutUser();
                      window.location.href = "/";
                    }}
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost">
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
                  <Link to="/bills">Bills Page</Link>
                </li>
                <li>
                  <Link to="/auth/login">Login</Link>
                </li>
                <li>
                  <Link to="/auth/register">Register</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
