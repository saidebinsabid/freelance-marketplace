import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { FaIdCardAlt } from "react-icons/fa";
import { GiHeartWings } from "react-icons/gi";

const TaskDetails = () => {
  const {
    _id,
    title,
    taskCategory,
    description,
    deadline,
    budget,
    name,
    bidsCount: initialBidsCount,
    postedDate,
  } = useLoaderData();

  const [bidsCount, setBidsCount] = useState(initialBidsCount || 0);

  const handleBidClick = async () => {
    const newCount = bidsCount + 1;
    setBidsCount(newCount);

    try {
      const res = await fetch(`http://localhost:3000/update-bid-count/${_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bidsCount: newCount }),
      });

      if (!res.ok) {
        console.error("Failed to update bid count");
      }
    } catch (error) {
      console.error("Error updating bid count:", error);
    }
  };


  const categoryData = {
    "Web Development": {
      requirements:
        "Experience with React, Node.js, REST APIs, and responsive design.",
      skills: ["React", "Node.js", "JavaScript", "CSS", "API Integration"],
    },
    "Content Writing": {
      requirements:
        "Strong grammar, SEO knowledge, and content research skills.",
      skills: ["SEO", "Research", "Copywriting", "Blogging", "Editing"],
    },
    "UI/UX Design": {
      requirements:
        "Proficient in Figma, wireframing, user research, and prototyping.",
      skills: [
        "Figma",
        "Wireframes",
        "User Research",
        "Prototyping",
        "Adobe XD",
      ],
    },
    "Digital Marketing": {
      requirements:
        "Experience with social media campaigns, Google Ads, and analytics.",
      skills: [
        "Google Ads",
        "Facebook Ads",
        "SEO",
        "Content Strategy",
        "Analytics",
      ],
    },
  };


  const { requirements, skills } = categoryData[taskCategory] || {
    requirements: "Relevant experience required.",
    skills: ["Communication", "Time Management"],
  };

  return (
    <div className="w-11/12 mx-auto py-24">
     
      <div className="bg-gradient-to-r from-[#1e1b4b] to-[#312e81] text-white p-6 rounded-lg shadow-xl flex items-center gap-6 justify-between">
        <div className="flex items-center gap-4">
          <FaIdCardAlt size={40} className="text-white" />
          <div>
            <h1 className="text-2xl font-bold">Posted By</h1>
            <p className="text-lg text-gray-200">{name}</p>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold flex items-center gap-2 justify-center">
            <GiHeartWings size={30} className="text-yellow-300 animate-pulse" />
            {bidsCount} {bidsCount === 1 ? "Bid" : "Bids"}
          </h2>
          <p className="text-sm italic text-gray-300">on this task</p>
        </div>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
        {/* Left: Job Info */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-lg p-6 shadow">
            <h1 className="text-3xl font-bold text-indigo-600 dark:text-indigo-300 mb-2">
              {title}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              {description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-slate-700 p-4 rounded-lg border border-gray-200 dark:border-slate-600">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-300">
                📂 Category
              </span>
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                {taskCategory}
              </h2>
            </div>
            <div className="bg-gray-50 dark:bg-slate-700 p-4 rounded-lg border border-gray-200 dark:border-slate-600">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-300">
                💰 Budget
              </span>
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                ${budget}
              </h2>
            </div>
            <div className="bg-gray-50 dark:bg-slate-700 p-4 rounded-lg border border-gray-200 dark:border-slate-600">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-300">
                ⏳ Deadline
              </span>
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                {deadline}
              </h2>
            </div>
            <div className="bg-gray-50 dark:bg-slate-700 p-4 rounded-lg border border-gray-200 dark:border-slate-600">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-300">
                📝 Requirements
              </span>
              <h2 className="text-base text-gray-800 dark:text-white">
                {requirements}
              </h2>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-[#1e1b4b] to-[#312e81] dark:from-slate-900 dark:to-slate-800 text-white p-6 rounded-lg shadow-xl space-y-6 h-fit">
          <div>
            <h3 className="text-xl font-bold mb-3">Task Summary</h3>
            <div className="space-y-2 text-gray-300">
              <p>
                <span className="font-semibold text-white">Category:</span>{" "}
                {taskCategory}
              </p>
              <p>
                <span className="font-semibold text-white">Deadline:</span>{" "}
                {deadline}
              </p>
              <p>
                <span className="font-semibold text-white">Budget:</span> $
                {budget}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-white/20">
            <h3 className="text-lg font-semibold text-white mb-1">
              Client Reputation
            </h3>
            <p className="text-sm text-gray-300">★ ★ ★ ★ ☆ (22 reviews)</p>
          </div>

          <div className="pt-4 border-t border-white/20">
            <h3 className="text-lg font-semibold text-white mb-1">Posted On</h3>
            <p className="text-sm text-gray-300">
              {postedDate
                ? new Date(postedDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })
                : "Date not available"}
            </p>
          </div>

          <div className="pt-4 border-t border-white/20">
            <h3 className="text-lg font-semibold text-white mb-2">
              Skills Required
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((tag, i) => (
                <span
                  key={i}
                  className="bg-white/10 px-3 py-1 text-sm rounded-full text-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-6">
            <button
              onClick={handleBidClick}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-lg transition"
            >
              Apply for This Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
