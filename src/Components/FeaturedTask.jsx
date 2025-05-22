import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { FaAnglesRight } from "react-icons/fa6";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import LatestTaskCard from "./LatestTaskCard";
const FeaturedTask = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("https://freelance-marketplace-server-one.vercel.app/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="w-11/12 mx-auto my-24">
      <div className="flex justify-between items-center">
        <div className="space-y-2 text-center lg:text-left">
          <h1 className="text-3xl lg:text-5xl font-bold">
            Our Latest Deadline Tasks
          </h1>
          <p className="text-gray-700 dark:text-gray-300">
            Explore the latest urgent tasks and hire trusted freelancers who
            deliver fast and skilled results.
          </p>
        </div>

        <div className="hidden lg:flex items-center gap-2 text-lg font-semibold">
          <span className="bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
            <Link to="/browseTask">Browse All</Link>
          </span>
          <FaAnglesRight className="text-indigo-500" />
        </div>
      </div>

      {tasks.length === 0 ? (
        <div className="flex justify-center mt-8">
          <div className="flex flex-col items-center text-center p-8 px-36 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
            <MdOutlineAssignmentTurnedIn className="text-5xl text-gray-400 dark:text-gray-300 mb-4" />
            <h2 className="text-2xl font-bold text-gray-600 dark:text-gray-300 mb-2">
              No Latest Task
            </h2>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {tasks.slice(0, 6).map((task) => (
            <LatestTaskCard key={task._id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FeaturedTask;
