import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddTask = () => {
  const { user } = useContext(AuthContext);
  const handleAddTask = (e)=>{
     e.preventDefault();
     const form = e.target;
     const formdata = new FormData(form);
     const newTaskData = Object.fromEntries(formdata.entries());
     newTaskData.bidsCount = 0;
    //  console.log(newTaskData);

     fetch("http://localhost:3000/createTask",{
        method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTaskData),
     })
     .then((res)=> res.json())
     .then((data)=>{
        if (data.insertedId) {
          Swal.fire({
            title: "Task Added Successfully!",
            icon: "success",
            draggable: true,
          });
          form.reset();
        }
     })
  }
  return (
    <div className="w-11/12 mx-auto mb-24">
      <div className="text-center my-8">
        <h1 className="text-5xl font-bold pb-2">Post Your Task</h1>
        <p className="w-3/5 mx-auto pt-6 text-gray-700">
          Looking for expert help? Describe your task and connect instantly with
          skilled freelancers ready to <br /> get the job done — fast, easy, and
          hassle-free.
        </p>
      </div>
      <form onSubmit={handleAddTask}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">TASK TITLE</label>
            <input
              type="text"
              name="title"
              className="input w-full"
              placeholder="Describe you job here"
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label" htmlFor="taskCategory">
              TASK CATEGORY
            </label>
            <select
              name="taskCategory"
              id="taskCategory"
              className="select w-full"
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

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 col-span-1 md:col-span-2">
            <label className="label">JOB DESCRIPTION</label>
            <textarea
              name="description"
              className="textarea textarea-bordered w-full min-h-[150px] md:min-h-[200px]"
              placeholder="Describe"
            ></textarea>
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label" htmlFor="deadline">
              DEADLINE
            </label>
            <input
              type="date"
              name="deadline"
              id="deadline"
              className="input w-full"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">BUDGET</label>
            <input
              type="number"
              name="budget"
              className="input w-full"
              placeholder="Enter you task budget"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">YOUR EMAIL</label>
            <input
              type="email"
              name="email"
              className="input w-full"
              value={user?.email || ""}
              readOnly
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">YOUR NAME</label>
            <input
              type="text"
              name="name"
              className="input w-full"
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
