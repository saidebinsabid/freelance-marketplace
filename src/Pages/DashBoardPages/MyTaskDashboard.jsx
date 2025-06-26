import React, { useContext, useEffect, useState } from "react";

import { TiStopwatch } from "react-icons/ti";
import { GrUpdate } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import { GiHeartWings } from "react-icons/gi";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import Swal from "sweetalert2";

import { AuthContext } from "../../Provider/AuthProvider";
import UpdateTaskModal from "../../Components/UpdateTaskModal";
import Loading from "../Loading";

const MyTaskDashboard = () => {
  const { user } = useContext(AuthContext);
  const [myTasks, setMyTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [updateTask, setUpdateTask] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://freelance-marketplace-server-xi.vercel.app/my-tasks?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setMyTasks(data);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [user]);
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete the task!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://freelance-marketplace-server-xi.vercel.app/tasks/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Task has been deleted.",
                icon: "success",
              });
              const remainingCoffees = myTasks.filter((cof) => cof._id !== _id);
              setMyTasks(remainingCoffees);
            }
          });
      }
    });
  };

  const handleBid = async (taskId) => {
    try {
      const res = await fetch(
        `https://freelance-marketplace-server-xi.vercel.app/tasks/${taskId}`
      );
      const task = await res.json();
      const bidCount = task.bidsCount ?? 0;

      Swal.fire({
        title: "Bids on",
        html: `
    <h2 style="
      font-size: 22px;
      font-weight: bold;
      background: linear-gradient(to right, #8e2de2, #4a00e0);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 12px;
    ">
      "${task.title}"
    </h2>
    <p style="
      font-size: 16px;
      color: #555;
      margin-top: 0;
      margin-bottom: 6px;
    ">
      Current Bid Count:
    </p>
    <p style="
      font-size: 24px;
      font-weight: bold;
      background: linear-gradient(to right, #00c6ff, #0072ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin: 0;
    ">
      ${bidCount}
    </p>
  `,
        confirmButtonText: "OK",
        showConfirmButton: true,
        backdrop: true,
      });
    } catch (error) {
      console.error("Error fetching task:", error);
      Swal.fire(
        "Oops!",
        "Something went wrong while fetching bid count.",
        "error"
      );
    }
  };

  const categoryImages = {
    "web development": "/Wj.png",
    "ui/ux design": "/Uj.png",
    "digital marketing": "/Dj.png",
    "content writing": "/Cj.png",
  };

  const handleUpdate = async (updatedData) => {
    try {
      const res = await fetch(
        `https://freelance-marketplace-server-xi.vercel.app/tasks/${updateTask._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        }
      );
      const data = await res.json();

      if (data.modifiedCount > 0) {
        Swal.fire("Success!", "Task updated successfully.", "success");
        setMyTasks((prev) =>
          prev.map((t) =>
            t._id === updateTask._id ? { ...t, ...updatedData } : t
          )
        );
      } else {
        Swal.fire("Oops!", "Failed to update task.", "error");
      }
    } catch {
      Swal.fire("Error", "Something went wrong.", "error");
    } finally {
      setShowModal(false);
    }
  };

  if (loading) return <Loading></Loading>;
  return (
    <div className="pt-8 w-11/12 mx-auto">
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-bold pb-2 dark:text-gray-200">
          My Created Tasks
        </h1>
        <p className="md:w-3/5 mx-auto pt-6 text-gray-700 dark:text-gray-300 pb-6">
          Track the progress and manage details of the tasks you've posted for
          freelancer
        </p>
      </div>
      {myTasks.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center p-8 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
          <MdOutlineAssignmentTurnedIn className="text-5xl text-gray-400 dark:text-gray-300 mb-4" />
          <h2 className="text-2xl font-bold text-gray-600 dark:text-gray-300 mb-2">
            No Tasks Added Yet
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Start by posting a task to connect with top freelancers!
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto w-full">
          <table className="table dark:text-gray-200 dark:bg-gray-900">
            {/* head */}
            <thead className="dark:bg-gray-800 dark:text-gray-200">
              <tr>
                <th>No</th>
                <th>Title</th>
                <th>Category</th>
                <th>Budget</th>
                <th>Post Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myTasks.map((task, index) => {
                const profileImage =
                  categoryImages[task.taskCategory?.toLowerCase()] ||
                  "/default.png";

                return (
                  <tr key={task._id} className="dark:hover:bg-gray-800">
                    <td>{index + 1}</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img src={profileImage} alt="Category Icon" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{task.title}</div>
                        </div>
                      </div>
                    </td>
                    <td>{task.taskCategory?.charAt(0).toUpperCase() + task.taskCategory?.slice(1)}</td>
                    <td>${task.budget}</td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <TiStopwatch size={20} />
                        {task.postedDate
                          ? new Date(task.postedDate).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              }
                            )
                          : "Date not available"}
                      </div>
                    </td>
                    <td className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => {
                          setUpdateTask(task);
                          setShowModal(true);
                        }}
                        className="flex items-center gap-1 text-white text-xs px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-sky-600 hover:to-cyan-500 shadow-md transition-all"
                      >
                        <GrUpdate className="text-sm" />
                        Update
                      </button>

                      <button
                        onClick={() => handleDelete(task._id)}
                        className="flex items-center gap-1 text-white text-xs px-3 py-1 rounded-full bg-gradient-to-r from-rose-500 to-red-600 hover:from-red-600 hover:to-rose-500 shadow-md transition-all"
                      >
                        <MdDeleteForever className="text-sm" />
                        Delete
                      </button>

                      <button
                        onClick={() => handleBid(task._id)}
                        className="flex items-center gap-1 text-white text-xs px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 shadow-md transition-all"
                      >
                        <GiHeartWings className="text-sm" />
                        Bid
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      {/* Modal */}
      <UpdateTaskModal
        show={showModal}
        onClose={() => setShowModal(false)}
        task={updateTask}
        user={user}
        onUpdate={handleUpdate}
      />
    </div>
  );
};

export default MyTaskDashboard;
