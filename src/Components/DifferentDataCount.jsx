import React from "react";
import DifferentDataCountCard from "./DifferentDataCountCard";
import { Typewriter } from "react-simple-typewriter";
const DifferentDataCount = () => {
  return (
    <div className="w-11/12 mx-auto py-12 font-plus">
      <div className="text-center py-6">
        <h1 className="text-5xl font-bold">
          <Typewriter
            words={["Empowering Freelancers & Clients Worldwide"]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={5000}
          />
        </h1>
        <p className="w-3/5 mx-auto pt-6 text-gray-700">
          Discover a thriving platform with thousands of jobs posted, skilled
          freelancers onboard, and projects completed with excellence. We
          connect talent with opportunity — fast and reliably.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <DifferentDataCountCard></DifferentDataCountCard>
      </div>
    </div>
  );
};

export default DifferentDataCount;
