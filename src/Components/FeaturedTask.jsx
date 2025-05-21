import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { FaAnglesRight } from "react-icons/fa6";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import LatestTaskCard from "./LatestTaskCard";
const FeaturedTask = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="w-11/12 mx-auto my-24">
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <h1 className="text-5xl font-bold">Our Latest Deadline Tasks</h1>
          <p className="text-gray-700">
            Explore the latest urgent tasks and hire trusted freelancers who
            deliver fast and skilled results.
          </p>
        </div>

        <div className="flex items-center gap-2 text-lg font-semibold">
          <span className="bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
            <Link to="/browseTask">Browse All</Link>
          </span>
          <FaAnglesRight className="text-indigo-500" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {tasks.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center p-8 bg-white rounded-lg shadow-sm">
            <MdOutlineAssignmentTurnedIn className="text-5xl text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold text-gray-600 mb-2">
              No Tasks Added Yet
            </h2>
            <p className="text-sm text-gray-500">
              Start by posting a task to connect with top freelancers!
            </p>
          </div>
        ) : (
          tasks
            .slice(0, 6)
            .map((task) => (
              <LatestTaskCard key={task._id} task={task}></LatestTaskCard>
            ))
        )}
      </div>
    </div>
  );
};

export default FeaturedTask;
