import React from "react";
import { useLoaderData } from "react-router";
import TaskCard from "../Components/TaskCard";
import { Typewriter } from "react-simple-typewriter";

const BrowseTask = () => {
  const tasks = useLoaderData();
  return (
    <div>
      <h1 className="text-5xl font-bold pt-8 text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-sm">
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
      <div className="w-11/12 mx-auto my-24 space-y-8">
        {tasks.map((task) => (
          <TaskCard key={task._id} task={task}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default BrowseTask;
