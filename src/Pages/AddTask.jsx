import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddTask = () => {
  const { user } = useContext(AuthContext);
  const handleAddTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const formdata = new FormData(form);
    const newTaskData = Object.fromEntries(formdata.entries());
    newTaskData.bidsCount = 0;
    newTaskData.postedDate = new Date().toISOString(); 

    fetch("http://localhost:3000/createTask", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTaskData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Task Added Successfully!",
            icon: "success",
            draggable: true,
          });
          form.reset();
        }
      });
  };
  return (
    <div className="w-11/12 mx-auto pb-24">
      <div className="text-center py-8">
        <h1 className="text-3xl md:text-5xl font-bold pb-2">Post Your Task</h1>
        <p className="md:w-3/5 mx-auto pt-6 text-gray-700 dark:text-gray-300">
          Looking for expert help? Describe your task and connect instantly with
          skilled freelancers ready to <br /> get the job done — fast, easy, and
          hassle-free.
        </p>
      </div>
      <form onSubmit={handleAddTask}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Task Title */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 dark:bg-gray-900 dark:border-gray-700">
            <label className="label text-gray-900 dark:text-gray-200">
              TASK TITLE
            </label>
            <input
              type="text"
              name="title"
              className="input w-full dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400"
              placeholder="Describe your job here"
            />
          </fieldset>

          {/* Task Category */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 dark:bg-gray-900 dark:border-gray-700">
            <label
              className="label text-gray-900 dark:text-gray-200"
              htmlFor="taskCategory"
            >
              TASK CATEGORY
            </label>
            <select
              name="taskCategory"
              id="taskCategory"
              className="select w-full dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
              defaultValue=""
            >
              <option value="" disabled>
                Select Task Category
              </option>
              <option value="Web Development">Web Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Content Writing">Content Writing</option>
              <option value="Digital Marketing">Digital Marketing</option>
            </select>
          </fieldset>

          {/* Job Description */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 col-span-1 md:col-span-2 dark:bg-gray-900 dark:border-gray-700">
            <label className="label text-gray-900 dark:text-gray-200">
              JOB DESCRIPTION
            </label>
            <textarea
              name="description"
              className="textarea textarea-bordered w-full min-h-[150px] md:min-h-[200px] dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400"
              placeholder="Write Detail about Task"
            ></textarea>
          </fieldset>

          {/* Deadline */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 dark:bg-gray-900 dark:border-gray-700">
            <label
              className="label text-gray-900 dark:text-gray-200"
              htmlFor="deadline"
            >
              DEADLINE
            </label>
            <input
              type="date"
              name="deadline"
              id="deadline"
              className="input w-full dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
            />
          </fieldset>

          {/* Budget */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 dark:bg-gray-900 dark:border-gray-700">
            <label className="label text-gray-900 dark:text-gray-200">
              BUDGET
            </label>
            <input
              type="number"
              name="budget"
              className="input w-full dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400"
              placeholder="Enter your task budget"
            />
          </fieldset>

          {/* Email */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 dark:bg-gray-900 dark:border-gray-700">
            <label className="label text-gray-900 dark:text-gray-200">
              YOUR EMAIL
            </label>
            <input
              type="email"
              name="email"
              className="input w-full dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
              value={user?.email || ""}
              readOnly
            />
          </fieldset>

          {/* Name */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 dark:bg-gray-900 dark:border-gray-700">
            <label className="label text-gray-900 dark:text-gray-200">
              YOUR NAME
            </label>
            <input
              type="text"
              name="name"
              className="input w-full dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
              value={user?.displayName || ""}
              readOnly
            />
          </fieldset>
        </div>

        <input className="btn w-full mt-8" type="submit" value="Add Task" />
      </form>
    </div>
  );
};

export default AddTask;
