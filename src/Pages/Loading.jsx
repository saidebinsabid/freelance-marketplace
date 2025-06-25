import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900 bg-opacity-80">
      <span className="loading loading-dots loading-xl"></span>
    </div>
  );
};

export default Loading;
