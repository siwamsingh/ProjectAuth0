import React from "react";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import { useTransform } from "framer-motion";

export default function ModuleTwo() {
  const fadeInAnimationVariants = {
    initial: { opacity: 0, 
      scale: 0.5,
      y: 150 },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
    },
  };
  return (
    <div className="">
      <motion.div variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      className="h-screen bg-white border-2 ">
        <div className="py-12">
          <div className="flex justify-center scale-75 sm:scale-100 ">
            <a href="/">
              <div className="flex items-center gap-x-2 ">
                <img
                  alt="fixit logo"
                  width="50"
                  height="50"
                  src="https://www.fix-it.ai/_next/static/media/fixit_gray_bg.1049c903.svg"
                />
                <h4 className=" text-[3rem] ">fiXit</h4>
              </div>
            </a>
          </div>
          <div className="flex justify-center px-2 md:px-8">
            <form
              action=""
              className="flex border h-16 border-black w-full lg:w-3/4 rounded-xl overflow-hidden "
            >
              <input
                type="text"
                className="border h-16 w-full text-md  overflow-hidden px-3 outline-none"
                placeholder="Sales Gpt can help you browse uncovered topic "
              />
              <button type="submit" className="bg-gray-50 p-2 rounded-full">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  fontSize="25"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Search</title>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
