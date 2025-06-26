import React, { useContext } from "react";
import { IoMdPaperPlane } from "react-icons/io";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Logo from "./Logo";

const Footer = () => {
  const { user } = useContext(AuthContext);
  return (
    <div
      className="bg-gradient-to-r from-[#1e1b4b] to-[#312e81]
dark:from-slate-900 dark:to-slate-800"
    >
      <div className="w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-4 py-12 gap-6 text-white">
        <div>
          <div className="flex justify-start items-center gap-2 mb-4">
            <Logo></Logo>
          </div>
          <div className="join">
            <input
              type="text"
              placeholder="Enter your Email"
              className="input input-bordered join-item"
            />
            <button className="btn bg-[#30507a] join-item text-white">
              {" "}
              <IoMdPaperPlane size={20} />
            </button>
          </div>

          <div className="flex gap-6 mt-2">
            <a
              href="https://www.pinterest.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPinterestP size={20} className="text-[#E60023]" />
            </a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={20} className="text-[#1DA1F2]" />
            </a>
            <a
              href="https://www.facebook.com/saidebinsabid"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={20} className="text-[#1877F2]" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={20} className="text-[#C13584]" />
            </a>
            <a
              href="https://www.youtube.com/@ProgrammingHeroCommunity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={20} className="text-[#FF0000]" />
            </a>
          </div>
        </div>

        <div className="space-y-1">
          <h1 className="text-base font-bold mb-4">Contact Us</h1>
          <div className="flex items-center text-sm gap-2">
            <CiLocationOn size={20} />
            <p>3517 W. Gray St. Utica, Pennsylvania 57867</p>
          </div>
          <div className="flex items-center gap-2">
            <CiPhone size={20} />
            <p>(480) 555-0103</p>
          </div>
          <div className="flex items-center gap-2">
            <CiMail size={20} />
            <p>"m.alyaqout@4house.Com</p>
          </div>
          <div className="flex items-center gap-2">
            <IoTimeOutline size={20} />
            <p>Sun - Sat / 10:00 AM - 8:00 PM</p>
          </div>
        </div>

        <div className="space-y-1 text-sm lg:pl-12">
          <h1 className="text-base font-bold mb-4">Link</h1>
          <ul className="menu-vertical px-1 gap-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-black border-b-2"
                    : "text-white"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/browseTask"
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-black border-b-2"
                    : "text-white"
                }
              >
                Browse Task
              </NavLink>
            </li>

            {user && (
              <>
                <li>
                  <NavLink
                    to="/addTask"
                    className={({ isActive }) =>
                      isActive
                        ? "font-semibold text-black border-b-2"
                        : "text-white"
                    }
                  >
                    Add Task
                  </NavLink>{" "}
                </li>

                <li>
                  <NavLink
                    to="/myTask"
                    className={({ isActive }) =>
                      isActive
                        ? "font-semibold text-black border-b-2"
                        : "text-white"
                    }
                  >
                    My Task
                  </NavLink>{" "}
                </li>
              </>
            )}
          </ul>
        </div>

        <div>
          <h1 className="font-bold mb-4 text-white">
            Kaj<span className="text-indigo-500">Kori</span>.com{" "}
            <span className="text-white ml-2">Gallery</span>
          </h1>
          <div className="grid grid-cols-3 gap-1">
            <img
              src="/f1.png"
              alt="gallery"
              className="w-full h-20 object-cover block"
            />
            <img
              src="/f2.png"
              alt="gallery"
              className="w-full h-20 object-cover block"
            />
            <img
              src="/f3.png"
              alt="gallery"
              className="w-full h-20 object-cover block"
            />
            <img
              src="/f4.png"
              alt="gallery"
              className="w-full h-20 object-cover block"
            />
            <img
              src="/f5.png"
              alt="gallery"
              className="w-full h-20 object-cover block"
            />
            <img
              src="/f6.png"
              alt="gallery"
              className="w-full h-20 object-cover block"
            />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#1e1b4b63] to-[#363381] dark:from-slate-700 dark:to-slate-600 w-full py-4">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-white">
          <h1 className="mb-2 md:mb-0">
            Copyright © 2025. All rights reserved
          </h1>
          <div className="flex gap-4">
            <p className="cursor-pointer hover:underline">Privacy Policy</p>
            <p className="cursor-pointer hover:underline">Term & Condition</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
