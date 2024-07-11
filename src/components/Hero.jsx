import React from "react";
import BackgroundImage from "../assets/bg-image.png";
import Cash1 from "../assets/cash-1.png";
import Cash2 from "../assets/cash-3.png";
import Cash3 from "../assets/cash-5.png";
import { motion } from "framer-motion";

const Hero = ({ setIsModalVisible }) => {
  return (
    <>
      <motion.div
        className="tab-container w-full flex flex-row justify-center mt-3 md:mt-7"
        initial={{
          x: -1000,
        }}
        animate={{
          x: 0,
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <div className="tabs bg-sky-900 md:py-3 py-6 px-8 md:px-16 rounded-3xl grid grid-cols-2 grid-rows-2 md:flex flex-row gap-10 md:gap-24 items-center border-b-[3px] border-b-teal-500">
          <span className="text-teal-300 text-[18px] font-normal leading-[22px] font-roboto cursor-pointer">
            Refer
          </span>
          <span className="text-neutral-200 text-[18px] font-normal leading-[22px] font-roboto cursor-pointer">
            Benefits
          </span>
          <span className="text-neutral-200 text-[18px] font-normal leading-[22px] font-roboto cursor-pointer">
            FAQs
          </span>
          <span className="text-neutral-200 text-[18px] font-normal leading-[22px] font-roboto cursor-pointer">
            Support
          </span>
        </div>
      </motion.div>

      <motion.div
        className="hero-container mb-5 xl:mb-0 border-b-[4px] border-b-teal-500 -z-50 w-10/12 bg-sky-900 mx-auto mt-7 rounded-3xl flex flex-col-reverse xl:flex-row justify-between px-9"
        initial={{
          x: -1200,
        }}
        animate={{
          x: 0,
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <div className="left-container self-center flex flex-col gap-8 w-[75%] xl:w-[25%]">
          <h2 className="md:text-[60px] text-[40px] leading-[40px] text-neutral-200 md:leading-[60px] font-bold font-roboto">
            Let's Learn & Earn
          </h2>
          <h3 className="md:text-[30px] text-[24px] leading-[34px] text-neutral-200 md:leading-[40px] font-normal font-roboto">
            Get a chance to win up-to
            <span className="text-teal-400 font-semibold mx-2 md:text-[38px] text-[28px]">
              Rs. 15,000
            </span>
          </h3>
          <button
            className="bg-teal-600 py-2 px-8 mb-5 xl:mb-0 rounded-md shadow-sm text-white font-medium leading-6 text-[15.2px] font-inter hover:bg-teal-700 transition-all duration-200 "
            onClick={(e) => setIsModalVisible(true)}
          >
            Refer Now
          </button>
        </div>

        <div className="right-container relative z-10 h-full">
          <img
            src={BackgroundImage}
            alt="Background"
            width="520px"
            height="420px"
            className="brightness-95"
          />

          <img
            className="absolute top-0 right-0"
            width="120px"
            height="70px"
            src={Cash1}
          />

          <img
            className="absolute top-1/3 -right-7 -z-10"
            width="120px"
            height="70px"
            src={Cash2}
          />

          <img
            className="absolute bottom-4"
            width="120px"
            height="70px"
            src={Cash3}
          />
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
