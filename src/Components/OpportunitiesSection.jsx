import React from "react";
import { Link } from "react-router";
import { BsCheckCircleFill } from "react-icons/bs";
import opportunities from "/opportunities.png";
import LeafletBanner from "./LeafletBanner";

const OpportunitiesSection = () => {
  return (
    <div className="pt-16">
      <LeafletBanner
        pageTitle="About Us"
        breadcrumb={["Home", "About"]}
      ></LeafletBanner>
      <div className="w-11/12 mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 py-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={opportunities}
            alt="Freelance Opportunities"
            className="w-full my-auto shadow-lg"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 flex flex-col space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Millions of Freelance Opportunities. Find the Perfect Gig for You.
          </h2>
          <p className="text-base md:text-lg max-w-xl">
            Search through thousands of freelance tasks tailored to your skills
            and preferences. Discover your ideal project with personalized
            recommendations and competitive rates.
          </p>

          <div className="space-y-4 max-w-xl">
            <p className="flex items-start gap-3 text-base md:text-lg">
              <BsCheckCircleFill className="text-indigo-700" size={24} />
              Seamless wallet recharge for hassle-free payments
            </p>
            <p className="flex items-start gap-3 text-base md:text-lg">
              <BsCheckCircleFill className="text-indigo-700" size={24} />
              Direct communication between clients and freelancers
            </p>
            <p className="flex items-start gap-3 text-base md:text-lg">
              <BsCheckCircleFill className="text-indigo-700" size={24} />
              Earn commission on every successful transaction
            </p>
          </div>

          <p className="text-base md:text-lg max-w-xl font-medium">
            Join KajKori.com today and start building your freelance career with
            confidence!
          </p>

          <Link
            to="/browseTask"
            aria-label="Get Started"
            className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group max-w-max"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-indigo-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <span className="relative z-10">Get Started</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OpportunitiesSection;
