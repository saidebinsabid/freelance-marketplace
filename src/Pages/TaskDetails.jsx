import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { FaIdCardAlt, FaPuzzlePiece } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import { SiLevelsdotfyi } from "react-icons/si";
import { TbHeartSpark } from "react-icons/tb";

const TaskDetails = () => {
  const { _id, title, taskCategory, description, deadline, budget, name, bidsCount: initialBidsCount } =
    useLoaderData();
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
  return (
    <div className="w-11/12 mx-auto my-24">
        <h2 className="text-center text-xl font-semibold my-4">
  You bid for {bidsCount} {bidsCount === 1 ? "opportunity" : "opportunities"}.
</h2>
      <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">
        {title}
      </h1>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-8 mt-4">
          <div className="grid lg:grid-cols-3 gap-4">
            {/* card 1 */}
            <div className="bg-indigo-200 flex gap-4 items-center p-4 rounded">
              <FaIdCardAlt className="my-auto" size={40} />

              <div className="space-y-2">
                <h1 className="text-xl text-[#324b5c]">Posted By</h1>
                <p className="text-xl font-medium">{name}</p>
              </div>
            </div>

            {/* card 2 */}
            <div className="bg-slate-300 flex gap-4 items-center p-6 rounded">
              <FaPuzzlePiece className="my-auto" size={40} />

              <div className="space-y-2">
                <h1 className="text-xl text-[#324b5c]">Task Category</h1>
                <p className="text-xl font-medium">{taskCategory}</p>
              </div>
            </div>

            {/* card 3 */}
            <div className="bg-green-100 flex gap-4 items-center p-6 rounded">
              <FaIdCardAlt className="my-auto" size={40} />

              <div className="space-y-2">
                <h1 className="text-xl text-[#324b5c]">Task Deadline</h1>
                <p className="text-xl font-medium">{deadline}</p>
              </div>
            </div>

            {/* card 4 */}
            <div className="bg-violet-200 flex gap-4 items-center p-6 rounded">
              <SiLevelsdotfyi className="my-auto" size={40} />

              <div className="space-y-2">
                <h1 className="text-xl text-[#324b5c]">Project Level</h1>
                <p className="text-xl font-medium">Moderate Level</p>
              </div>
            </div>

            {/* card 5 */}
            <div className="bg-orange-50 flex gap-4 items-center p-6 rounded">
              <FaEarthAmericas className="my-auto" size={40} />

              <div className="space-y-2">
                <h1 className="text-xl text-[#324b5c]">Language</h1>
                <p className="text-xl font-medium">English</p>
              </div>
            </div>
          </div>

          <div>
            <h1>Task Description</h1>
            <p className="tracking-wider leading-loose">{description}</p>
          </div>
        </div>

        <div className="col-span-4 mt-4">
          <div className="bg-blue-100 flex flex-col items-center p-8 rounded space-y-6">
            <h1 className="text-5xl font-semibold text-gray-800">${budget}</h1>
            <p className="text-slate-700 font-semibold">Task Type: Fixed </p>
            <div onClick={handleBidClick} className="flex gap-2 items-center bg-[#728ceba4] hover:bg-[#6787FE] px-12 py-3 rounded-full">
              <TbHeartSpark size={30} />
              <button  className="text-lg">Bid Task</button>
            </div>

            <div>
              <table className="w-full table-fixed mt-6 bg-blue-50 rounded">
                <thead>
                  <tr>
                    <th
                      colSpan="2"
                      className="text-center text-lg font-bold px-2 py-4 bg-gray-100"
                    >
                      {title}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-dashed border-gray-300">
                    <td className="p-4">Posted By</td>
                    <td className="p-4">{name}</td>
                  </tr>
                  <tr className="border-b border-dashed border-gray-300">
                    <td className="p-4">Task Category</td>
                    <td className="p-4">{taskCategory}</td>
                  </tr>
                  <tr className="border-b border-dashed border-gray-300">
                    <td className="p-4">Project Level</td>
                    <td className="p-4">Moderate</td>
                  </tr>
                  <tr>
                    <td className="p-4">Deadline</td>
                    <td className="p-4">{deadline}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
