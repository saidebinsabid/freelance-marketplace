import React from "react";

const CardGrid = ({ tasksCount, myTasksCount, totalBudget, nextDeadline }) => {
  const cards = [
    {
      title: "Total Budget of My Tasks",
      value: `$${totalBudget}`,
      bg: "from-yellow-300 to-yellow-600",
      icon: "💰",
    },
    {
      title: "Next Task Deadline",
      value: nextDeadline || "N/A",
      bg: "from-blue-400 to-blue-600",
      icon: "⏳",
    },
    {
      title: "Total Tasks",
      value: tasksCount,
      bg: "from-indigo-500 to-purple-600",
      icon: "📋",
    },
    {
      title: "My Posted Tasks",
      value: myTasksCount,
      bg: "from-sky-400 to-sky-600",
      icon: "📝",
    },
  ];

  return (
    <div className="w-full mx-auto p-6 grid grid-cols-1 gap-4 rounded-xl sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
      {cards.map(({ title, value, bg, icon }, i) => (
        <div
          key={i}
          className={`
            flex flex-col justify-center items-start p-8 rounded-3xl 
            bg-gradient-to-br ${bg} 
            dark:from-gray-700 dark:via-gray-700 dark:to-gray-600 
            text-white shadow-lg hover:shadow-2xl 
            transition-shadow duration-300 border border-white/25
            ${i === 0 || i === 1 ? "lg:col-span-2" : ""}
          `}
        >
          <div className="text-5xl mb-4">{icon}</div>
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-5xl font-extrabold tracking-tight">{value}</p>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
