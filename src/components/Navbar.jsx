import React from "react";
import Logo from "../assets/logo.png";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <header className="w-full flex flex-col">
        <div className="message-banner bg-sky-900 w-full py-2 sm:py-3.5 flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-4">
          <span className="text-[17px] text-neutral-200 font-medium leading-7 font-inter md:inline-block hidden">
            Navigate your ideal career path with tailored expert advice
          </span>

          <span className="text-[17px] text-neutral-200 font-medium leading-7 font-inter md:hidden inline-block">
            Navigate your career with experts.
          </span>

          <a
            href="#"
            className="text-teal-300 md:text-[17px] font-medium leading-7 font-inter hover:underline transition-all duration-200"
          >
            Contact Expert
          </a>
        </div>

        <div className="nav-container w-full flex flex-row justify-center">
          <nav className="w-10/12 flex flex-col-reverse gap-4 items-center sm:flex-row sm:items-center sm:justify-between py-4">
            <div className="left-container flex flex-row gap-1 sm:gap-5">
              <div className="flex flex-col scale-90 cursor-pointer">
                <span className="text-[#1A73E8] text-3xl font-inter font-medium">
                  accredian
                </span>
                <span className="text-neutral-200 text-[0.7rem] self-center font-inter -mt-1 tracking-wider font-light">
                  credentials that matter
                </span>
              </div>
              <div className="bg-teal-600 py-2 px-4 rounded-md place-self-center shadow-sm text-white flex flex-row items-center justify-center gap-1 font-inter hover:bg-teal-700 transition-all duration-200 cursor-pointer">
                Courses <IoIosArrowDown className="mt-[3px]" />
              </div>
            </div>

            <div className="right-container flex flex-row gap-5">
              <ul className="nav-options lg:flex flex-row gap-6 items-center text-[14.7px] leading-6 font-medium text-neutral-200 font-inter hidden">
                <li className="transition-all duration-200 hover:underline cursor-pointer">
                  Refer & Earn
                </li>
                <li className="transition-all duration-200 hover:underline cursor-pointer">
                  Resources
                </li>
                <li className="transition-all duration-200 hover:underline cursor-pointer">
                  About Us
                </li>
              </ul>

              <div className="login-options flex flex-row gap-4 items-center">
                <button className="bg-slate-300 py-2 px-4 rounded-md shadow-sm text-[#1A202C] font-medium leading-6 text-[15.2px] font-inter hover:bg-slate-200 transition-all duration-200">
                  Login
                </button>
                <button className="bg-teal-600 hover:bg-teal-700 transition-all duration-200 py-2 px-4 rounded-md shadow-sm text-white font-medium leading-6 text-[15.2px] font-inter">
                  Try for free
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
