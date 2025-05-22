import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaClock, FaChartBar } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { GiStarFormation } from "react-icons/gi";
import { useNavigate } from "react-router";
import { useDarkMode } from "../Provider/ThemeContext";

const LatestTaskCard = ({ task }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();

  const { title, taskCategory, deadline = "1-5 Days", budget, _id } = task;

  const categoryImages = {
    "web development": "/Wj.png",
    "ui/ux design": "/Uj.png",
    "digital marketing": "/Dj.png",
    "content writing": "/Cj.png",
  };
  const profileImage = categoryImages[taskCategory?.toLowerCase()];

  const handleSeeDetails = () => {
    if (user) {
      navigate(`/taskDetail/${_id}`);
    } else {
      navigate("/auth/login", { state: { from: `/taskDetail/${_id}` } });
    }
  };

  return (
    <div>
      <div
        className={`relative flex flex-col rounded-xl px-5 py-8 shadow-sm hover:shadow-md transition duration-200 space-y-6 ${
          darkMode
            ? "bg-gray-800"
            : "bg-gradient-to-r from-[#ffffff] via-[#edf0f7] to-[#dee3f5]"
        }`}
      >
        {/* Open Badge */}
        <div className="absolute top-8 right-5 transform -translate-x-1/2">
          <GiStarFormation
            className="text-amber-500 absolute -bottom-2 -right-2 bg-white dark:bg-gray-800 rounded-full text-xs"
            size={30}
          />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="relative">
            <img
              src={profileImage}
              alt="Category Icon"
              className="h-16 w-26 object-cover rounded-lg border"
            />
          </div>
          <h3 className="text-lg font-semibold text-center">{title}</h3>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-around gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1 text-lg dark:text-gray-300">
            <FaClock size={15} /> {deadline}
          </span>

          <p className="text-gray-500 text-lg dark:text-gray-300">${budget}</p>
          <span className="flex items-center gap-1 text-lg dark:text-gray-300">
            <FaChartBar /> Expensive
          </span>
          <button
            onClick={handleSeeDetails}
            className="relative inline-flex items-center justify-center p-4 px-4 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
              See Details
            </span>
            <span className="relative invisible">See Details</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestTaskCard;
