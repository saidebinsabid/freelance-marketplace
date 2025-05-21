import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { TiStopwatch } from "react-icons/ti";
import { GrUpdate } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import { GiHeartWings } from "react-icons/gi";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import Swal from "sweetalert2";

const MyTask = () => {
  const { user } = useContext(AuthContext);
  const [myTasks, setMyTasks] = useState([]);
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/myTasks?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setMyTasks(data);
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
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/tasks/${_id}`, {
          method: "DELETE",
        })
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

  const categoryImages = {
    "web development": "/Wj.png",
    "ui/ux design": "/Uj.png",
    "digital marketing": "/Dj.png",
    "content writing": "/Cj.png",
  };
  return (
    <div className="w-11/12 mx-auto my-24">
      {myTasks.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center p-8 bg-white rounded-lg shadow-sm">
          <MdOutlineAssignmentTurnedIn className="text-5xl text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold text-gray-600 mb-2">
            No Tasks Added Yet
          </h2>
          <p className="text-sm text-gray-500">
            Start by posting a task to connect with top freelancers!
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto w-full">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Title</th>
                <th>Category</th>
                <th>Budget</th>
                <th>Deadline</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myTasks.map((task, index) => {
                const profileImage =
                  categoryImages[task.taskCategory?.toLowerCase()] ||
                  "/default.png";

                return (
                  <tr key={task._id}>
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
                    <td>{task.taskCategory}</td>
                    <td>${task.budget}</td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <TiStopwatch size={20} />
                        {task.deadline}
                      </div>
                    </td>
                    <td className="flex items-center justify-center gap-2">
                      <button className="flex items-center gap-1 text-white text-xs px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-sky-600 hover:to-cyan-500 shadow-md transition-all">
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

                      <button className="flex items-center gap-1 text-white text-xs px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 shadow-md transition-all">
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
    </div>
  );
};

export default MyTask;
