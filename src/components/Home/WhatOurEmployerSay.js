import React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";
import img from "../../assets/studyimg3.jpg";

const WhatOurEmployerSay = () => {
  return (
    <div className="my-5 overflow-x-hidden" id="testimonial">
      <p className="text-center text-5xl font-semibold my-20 tracking-wide">
        What Our employer Say
      </p>
      <div className="flex items-center justify-center space-x-10 w-full">
        {/* --------------------------left div--------------------------- */}
        <div className="p-10 border w-[663px] h-[246px] rounded-tl-[0px] rounded-br-[85px] rounded-tr-none rounded-bl-none bg-white "></div>

        {/* ----------------------center div----------------------- */}

        <div className="relative p-10 shadow-lg border min-w-[663px] max-h-[246px] rounded-tl-[85px] rounded-br-[85px] rounded-tr-none rounded-bl-none bg-white ">
          {/* ---------------------leftarrowdiv--------------------- */}

          <div className="absolute top-24 -left-6 cursor-pointer w-[58px] h-[58px] rounded-tl-[26px] rounded-br-[26px] rounded-tr-none rounded-bl-none bg-primary ">
            <ArrowLeftIcon
              className="absolute w-7 h-7 top-4 left-4"
              color="white"
            />
          </div>
          {/* ---------------------rightarrowdiv--------------------- */}
          <div className="absolute top-24 -right-6 cursor-pointer w-[58px] h-[58px] rounded-tl-[26px] rounded-br-[26px] rounded-tr-none rounded-bl-none bg-black ">
            <ArrowRightIcon
              className="absolute w-7 h-7 top-4 right-4"
              color="white"
            />
          </div>

          {/* ----------------------profile and name div----------------------- */}
          <div className="flex items-center mb-10">
            <img
              src={img}
              alt="img"
              className="rounded-full object-center object-cover w-16 h-16 bg-gray-400"
            ></img>
            <div className="flex-col items-start ml-3">
              <p className="block font-semibold text-xl">Mirza fatoerachaman</p>
              <span className="block text-lg">employer</span>
            </div>
          </div>
          <p className="text-xl leading-snug tracking-wide font-medium">
            “The course is easy to understand and the mentor is cool, making my
            learning experience here very enjoyable”
          </p>
        </div>

        {/* -------------------------------right div-------------------------- */}
        <div className="p-10 border w-[663px] h-[246px] rounded-tl-[85px] rounded-br-none rounded-tr-none rounded-bl-none bg-white "></div>
      </div>
    </div>
  );
};

export default WhatOurEmployerSay;
