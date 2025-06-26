import React from "react";
import { Link } from "react-router";

const LeafletBanner = ({
  pageTitle = "About Us",
  breadcrumb = ["Home", "About"],
}) => {
  return (
    <div
      className="w-full min-h-[20vh] lg:min-h-[40vh] bg-cover bg-center relative"
      style={{ backgroundImage: `url('/OtherBg.jpeg')` }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute top-12 md:top-20 px-6 md:px-20">
        <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
          {pageTitle}
        </h1>
        <nav className="hidden lg:inline text-lg text-white">
          <Link to="/" className="hover:text-indigo-400 cursor-pointer">   
            {breadcrumb[0]}
          </Link>
          <span className="mx-2">{">>"}</span>
          <span>{breadcrumb[1]}</span>
        </nav>
      </div>
    </div>
  );
};

export default LeafletBanner;
