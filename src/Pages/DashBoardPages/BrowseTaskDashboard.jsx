import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import TaskCard from "../../Components/TaskCard";
import Loading from "../Loading";

const BrowseTaskDashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewAll, setViewAll] = useState(false);
  const displayedTasks = tasks; 

useEffect(() => {
  setLoading(true);
  const fetchTasks = async () => {
    try {
      const limit = viewAll ? "all" : "6";
      const categoryQuery =
        selectedCategory.toLowerCase() === "all"
          ? ""
          : `&category=${encodeURIComponent(selectedCategory)}`;

      const url = `https://freelance-marketplace-server-xi.vercel.app/tasks?limit=${limit}${categoryQuery}`;
      // console.log("Fetching tasks from URL:", url);

      const response = await fetch(url);
      const data = await response.json();
      // console.log("Received tasks count:", data.length);

      setTasks(data);
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
      setTasks([]);
    } finally {
      setLoading(false);
    }
  };

  fetchTasks();
}, [selectedCategory, viewAll]);



  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <h1 className="text-3xl md:text-5xl font-bold pt-8 text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-sm">
        <Typewriter
          words={[
            "Find New Posted Tasks That Match Your Hustle..",
            "Post, Pick & Get Paid..",
            "Level Up Your Freelance Game..",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={60}
          deleteSpeed={40}
          delaySpeed={5000}
        />
      </h1>

      <div className="w-11/12 mx-auto space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-white dark:bg-gray-800 rounded shadow-sm mt-10 w-11/12 mx-auto">
          <div className="text-gray-700 dark:text-gray-300 font-medium text-base">
            Showing {tasks.length} result{tasks.length !== 1 && "s"}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <label
              htmlFor="category"
              className="text-sm text-gray-600 dark:text-gray-200"
            >
              Filter by Category:
            </label>
            <select
              id="category"
              className="select select-bordered text-sm w-48 dark:bg-gray-700 dark:text-gray-200"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">All Tasks</option>
              <option value="Web Development">Web Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Content Writing">Content Writing</option>
              <option value="Digital Marketing">Digital Marketing</option>
            </select>
          </div>
        </div>

        {displayedTasks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayedTasks.map((task) => (
              <TaskCard key={task._id} task={task} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center mt-8">
            <div className="flex flex-col items-center text-center p-8 px-36 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
              <MdOutlineAssignmentTurnedIn className="text-5xl text-gray-400 dark:text-gray-300 mb-4" />
              <h2 className="text-2xl font-bold text-gray-600 dark:text-gray-300 mb-2">
                No Tasks Added Yet
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                Start by posting a task to connect with top freelancers!
              </p>
            </div>
          </div>
        )}
      </div>

        <div className="flex justify-center pt-18 pb-16">
         <button
 onClick={() => {
  setViewAll((prev) => {
    // console.log("Toggling viewAll from", prev, "to", !prev);
    if (prev) {
      window.scrollTo(0, 800);
    }
    return !prev;
  });
}}
  className="px-6 py-3 bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-500 
     hover:from-purple-500 hover:via-indigo-600 hover:to-blue-500
     text-white font-bold text-lg tracking-wide rounded-full 
     shadow-lg transition-all duration-300
     dark:from-blue-600 dark:via-indigo-700 dark:to-purple-600
     dark:hover:from-purple-600 dark:hover:via-indigo-700 dark:hover:to-blue-600"
>
  {viewAll ? "View Less Task" : "View All Task"}
</button>

        </div>

    </div>
  );
};

export default BrowseTaskDashboard;
