import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaClock, FaChartBar } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { useNavigate } from "react-router";

const TaskCard = ({ task }) => {
  const { title, taskCategory, deadline, budget } = task;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSeeDetails = () => {
    if (user) {
      navigate(`/taskDetail/${task._id}`);
    } else {
      navigate("/auth/login", { state: { from: `/taskDetail/${task._id}` } });
    }
  };

  const categoryImages = {
    "web development": "/Wj.png",
    "ui/ux design": "/Uj.png",
    "digital marketing": "/Dj.png",
    "content writing": "/Cj.png",
  };
  const profileImage = categoryImages[taskCategory?.toLowerCase()];
  return (
    <div
      className="relative flex flex-col md:flex-row items-center md:items-start justify-between 
bg-gradient-to-r from-[#f7f8fc] via-[#edf0f7] to-[#f7f8fc]
dark:from-gray-700 dark:via-gray-700 dark:to-gray-600
rounded-xl px-5 py-8 shadow-sm hover:shadow-md transition duration-200 
space-y-6 md:space-y-0 md:space-x-6"
    >
      <div className="hidden md:inline absolute md:-bottom-3 md:left-1/2 transform -translate-x-1/2">
        <span className="bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded-full shadow-md">
          Open 🔓
        </span>
      </div>

      <div className="relative">
        <img
          src={profileImage}
          alt="Category Icon"
          className=" h-20 object-cover rounded-lg border"
        />
        <MdVerified
          className="text-green-500 absolute -bottom-2 -right-2 bg-white rounded-full text-xs"
          size={20}
        />
      </div>

      <div className="flex flex-col items-center md:items-start space-y-6 text-center md:text-left">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-300">
          <span className="flex items-center gap-1 text-lg">
            <FaClock size={15} /> {deadline || "1-5 Days"}
          </span>
          <span className="flex items-center gap-1 text-sm">
            <FaChartBar /> Expensive
          </span>
        </div>
      </div>

      <div className="text-center md:text-left space-y-6">
        <p className="text-2xl font-semibold text-gray-800 dark:text-gray-300">${budget}</p>
        <p className="text-sm text-gray-500 italic dark:text-gray-300">Fixed</p>
      </div>

      <div className="my-auto">
        <button
          onClick={handleSeeDetails}
          href="#_"
          className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
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
  );
};

export default TaskCard;
