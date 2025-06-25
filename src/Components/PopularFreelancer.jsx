import React from "react";
import { FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
const freelancer = [
  {
    name: "Mark Henry",
    image: "/Free1.png",
    location: "New York, USA",
    specialization: ["Frontend Development", "React.js", "Tailwind CSS"],
    experience: 6,
    rating: 4.5,
  },
  {
    name: "Lucky Helen",
    image: "/Free2.png",
    location: "Paris, France",
    specialization: ["Backend Development", "Node.js", "MongoDB"],
    experience: 5,
    rating: 4.0,
  },
  {
    name: "Moon Henry",
    image: "/Free3.png",
    location: "London, UK",
    specialization: ["Full Stack Development", "Next.js", "GraphQL"],
    experience: 7,
    rating: 5.0,
  },
  {
    name: "Tom Monrow",
    image: "/Free4.png",
    location: "Berlin, Germany",
    specialization: ["DevOps", "Docker", "CI/CD Pipelines"],
    experience: 4,
    rating: 4.2,
  },
];

const PopularFreelancer = () => {
  return (
    <div className="bg-gradient-to-r from-slate-700 via-sky-700 to-slate-600">
      <div className="text-center pt-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 ">
          Most Popular{" "}
          <span className="bg-yellow-400 bg-opacity-80 text-slate-900 px-2 rounded">
            KajBoss
          </span>
        </h1>
        <p className="text-gray-200 text-lg md:text-xl max-w-xl mx-auto">
          Browse our top-rated freelancers, trusted for their skills,
          consistency, and excellent client feedback.
        </p>
      </div>

      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-12">
        {freelancer.map((member, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg dark:text-white font-semibold">{member.name}</h3>

              <div className="flex gap-1 justify-center items-center mt-2 text-yellow-500">
                <span className="text-sm text-gray-600 dark:text-gray-200">
                  <strong>Rating: </strong>
                </span>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>
                    {i + 1 <= Math.floor(member.rating)
                      ? "★"
                      : i < member.rating
                      ? ""
                      : "☆"}
                  </span>
                ))}
              </div>
              <div className="flex justify-around mt-3 gap-6">
                <div className="flex items-center space-x-2 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 px-3 py-1 rounded-full text-white text-sm shadow-sm">
                  <FaMapMarkerAlt />
                  <span>{member.location}</span>
                </div>
                <div className="flex items-center space-x-2 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 px-3 py-1 rounded-full text-white text-sm shadow-sm">
                  <FaBriefcase />
                  <span>{member.experience} years</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-2 text-sm mb-1 mt-2 bg-white dark:bg-gray-700 px-4 py-2 rounded-md shadow-sm">
                <strong className="w-full text-gray-700 dark:text-gray-200 mb-1">
                  Specializations:
                </strong>
                {member.specialization.map((item, index) => (
                  <span
                    key={index}
                    
                    className="px-3 py-1 rounded-full text-gray-800 
                    bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 
                    dark:from-gray-600 dark:via-gray-700 dark:to-gray-800 dark:text-gray-200
                    text-xs font-semibold"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularFreelancer;
