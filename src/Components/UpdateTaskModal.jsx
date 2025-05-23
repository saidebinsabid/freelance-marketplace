import React, { useState, useEffect } from "react";

const UpdateTaskModal = ({ show, onClose, task, user, onUpdate }) => {
  const [formData, setFormData] = useState({
    title: "",
    taskCategory: "",
    budget: "",
    deadline: "",
    userName: "",
    userEmail: "",
  });

  useEffect(() => {
    if (task && user) {
      setFormData({
        title: task.title || "",
        taskCategory: task.taskCategory || "",
        budget: task.budget || "",
        deadline: task.deadline || "",
        userName: user.displayName || "",
        userEmail: user.email || "",
      });
    }
  }, [task, user]);

  if (!show) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 p-4"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(0.5px)",
        WebkitBackdropFilter: "blur(4px)",
      }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold mb-4">Update Task</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block mb-1 font-medium" htmlFor="title">
              Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-1 font-medium" htmlFor="taskCategory">
              Category
            </label>
            <select
              id="taskCategory"
              name="taskCategory"
              value={formData.taskCategory}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              <option value="">Select Category</option>
              <option value="web development">Web Development</option>
              <option value="ui/ux design">UI/UX Design</option>
              <option value="digital marketing">Digital Marketing</option>
              <option value="content writing">Content Writing</option>
            </select>
          </div>

          {/* Budget */}
          <div>
            <label className="block mb-1 font-medium" htmlFor="budget">
              Budget ($)
            </label>
            <input
              id="budget"
              name="budget"
              type="number"
              min="0"
              value={formData.budget}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          {/* Deadline */}
          <div>
            <label className="block mb-1 font-medium" htmlFor="deadline">
              Deadline
            </label>
            <input
              id="deadline"
              name="deadline"
              type="date"
              value={formData.deadline}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          {/* User Name (read-only) */}
          <div>
            <label className="block mb-1 font-medium" htmlFor="userName">
              User Name
            </label>
            <input
              id="userName"
              name="userName"
              type="text"
              value={formData.userName}
              readOnly
              className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2 cursor-not-allowed"
            />
          </div>

          {/* User Email (read-only) */}
          <div>
            <label className="block mb-1 font-medium" htmlFor="userEmail">
              User Email
            </label>
            <input
              id="userEmail"
              name="userEmail"
              type="email"
              value={formData.userEmail}
              readOnly
              className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2 cursor-not-allowed"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-sky-600 text-white hover:bg-sky-700"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTaskModal;
