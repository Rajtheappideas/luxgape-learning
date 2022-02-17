import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import mpcimg1 from "../assets/mpcimg1.jpg";
import mpcimg2 from "../assets/mpcimg2.jpg";
import mpcimg3 from "../assets/mpcimg3.jpg";
import { ArrowRightIcon, StarIcon } from "@heroicons/react/solid";

const MostPopularCourse = () => {
  return (
    <div className="p-10 mb-10">
      <div className="mb-10 flex justify-between items-center">
        <p className="text-left font-semibold text-5xl mb-7">
          More Popular Course
        </p>
        <p className="text-primary text-center text-2xl tracking-wide cursor-pointer underline font-semibold">
          View More
        </p>
      </div>
      {/* ---------------3 main divs rounded---------- */}
      <div className="flex items-center justify-around space-x-3">
        {/* --------------1 big rounde div=-------------- */}

        <RoundedDiv>
          <img
            src={mpcimg1}
            alt="mpcimg1"
            className="h-1/2 w-full object-center object-cover rounded-tl-[182px]"
          />
          <div className="p-5 space-y-5">
            <p className="text-3xl font-semibold">
              Lorem Ipsum is simply dummy text.
            </p>
            <p className="text-secondary text-xl font-semibold">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s,
            </p>
            <div className="flex items-start space-x-1">
              <StarIcon className="w-8 h-8" color="gold" />
              <StarIcon className="w-8 h-8" color="gold" />
              <StarIcon className="w-8 h-8" color="gold" />
              <StarIcon className="w-8 h-8" color="gold" />
              <StarIcon className="w-8 h-8" color="gold" />
            </div>
            <div className="flex items-center space-x-3">
              <p className="text-secondary">
                <span className="font-bold text-2xl">$22</span>/employee
              </p>
              <button className="w-10 h-10 bg-black cursor-pointer">
                <ArrowRightIcon className="p-2" color="white" />
              </button>
            </div>
          </div>
        </RoundedDiv>
        {/* --------------2 big rounde div=-------------- */}

        <RoundedDiv>
          <img
            src={mpcimg2}
            alt="mpcimg1"
            className="h-1/2 w-full object-center object-cover rounded-tl-[182px]"
          />
          <div className="p-5 space-y-5">
            <p className="text-3xl font-semibold">
              Lorem Ipsum is simply dummy text.
            </p>
            <p className="text-secondary text-xl font-semibold">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s,
            </p>
            <div className="flex items-start space-x-1">
              <StarIcon className="w-8 h-8" color="gold" />
              <StarIcon className="w-8 h-8" color="gold" />
              <StarIcon className="w-8 h-8" color="gold" />
              <StarIcon className="w-8 h-8" color="gold" />
              <StarIcon className="w-8 h-8" color="gold" />
            </div>
            <div className="flex items-center space-x-3">
              <p className="text-secondary text-base">
                <span className="font-bold text-2xl">$22</span>/employee
              </p>
              <button className="w-10 h-10 bg-black cursor-pointer">
                <ArrowRightIcon className="p-2" color="white" />
              </button>
            </div>
          </div>
        </RoundedDiv>
        {/* --------------3 big rounde div=-------------- */}

        <RoundedDiv>
          <img
            src={mpcimg3}
            alt="mpcimg1"
            className="h-1/2 w-full object-center object-cover rounded-tl-[182px]"
          />
          <div className="p-5 space-y-5">
            <p className="text-3xl font-semibold">
              Lorem Ipsum is simply dummy text.
            </p>
            <p className="text-secondary text-xl font-semibold">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s,
            </p>
            <div className="flex items-start space-x-1">
              <StarIcon className="w-8 h-8" color="gold" />
              <StarIcon className="w-8 h-8" color="gold" />
              <StarIcon className="w-8 h-8" color="gold" />
              <StarIcon className="w-8 h-8" color="gold" />
              <StarIcon className="w-8 h-8" color="gold" />
            </div>
            <div className="flex items-center space-x-3">
              <p className="text-secondary text-base">
                <span className="font-bold text-2xl">$22</span>/employee
              </p>
              <button className="w-10 h-10 bg-black cursor-pointer">
                <ArrowRightIcon className="p-2" color="white" />
              </button>
            </div>
          </div>
        </RoundedDiv>
      </div>
    </div>
  );
};

export default MostPopularCourse;

const RoundedDiv = tw.div`
border relative
rounded-tl-[182px] rounded-tr-0 rounded-br-[182px] rounded-bl-0
 h-[673px] w-[364px]`;