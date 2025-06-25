import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import TaskCard from "../Components/TaskCard";
import { Typewriter } from "react-simple-typewriter";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import Loading from "./Loading";

const BrowseTask = () => {
  const tasks = useLoaderData();

  const [displayTaskCart, setDisplayTaskCart] = useState([]);
  const [viewAll, setViewAll] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      if (viewAll) {
        setDisplayTaskCart(tasks);
      } else {
        setDisplayTaskCart(tasks.slice(0, 3));
      }
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [tasks, viewAll]);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="text-3xl md:text-5xl font-bold pt-32 text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-sm">
        <Typewriter
          words={[
            "Find Tasks That Match Your Hustle..",
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

      <div className="w-11/12 mx-auto space-y-8 pt-18">
        {displayTaskCart.length > 0 ? (
          displayTaskCart.map((task) => <TaskCard key={task._id} task={task} />)
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
            setViewAll((prv) => !prv);
            if (viewAll) window.scrollTo(0, 800);
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

export default BrowseTask;
