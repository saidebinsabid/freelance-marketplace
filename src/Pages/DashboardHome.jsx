// src/Pages/DashboardPages/DashboardHome.jsx
import React from "react";
import { useContext } from "react";
import Lottie from "lottie-react";
import animationData from "../assets/dashboard.json";
import { AuthContext } from "../Provider/AuthProvider";
import CardGrid from "../Components/CardGrid";

const DashboardHome = ({ tasks = [], myTasks = [], totalBudget = 0, latestDeadline = null }) => {
  const { user } = useContext(AuthContext);

  return (
    <>
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 p-4 bg-gray-100 dark:bg-gray-800">
        <div className="space-y-2">
          <h1 className="text-2xl md:text-4xl font-semibold text-gray-900 dark:text-gray-100">
            Welcome back, {user?.displayName || "User"}!
          </h1>
          <p className="text-gray-700 dark:text-gray-300 max-w-md">
            Take a look at your task overview, and stay organized with{" "}
            <span className="font-bold">Kaj<span className="font-bold text-indigo-600 dark:text-indigo-400">
              Kori
            </span>.com</span>
            .
          </p>
        </div>
        <div className="w-48 md:w-40">
          <Lottie animationData={animationData} loop />
        </div>
      </div>

      {/* Cards */}
      <CardGrid
        tasksCount={tasks.length}
        myTasksCount={myTasks.length}
        totalBudget={totalBudget}
        nextDeadline={latestDeadline ? latestDeadline.toLocaleDateString() : null}
      />
    </>
  );
};

export default DashboardHome;
