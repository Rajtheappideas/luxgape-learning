import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import cimg1 from "../assets/cimg1.jpg";
import cimg2 from "../assets/cimg2.jpg";
import cimg3 from "../assets/cimg3.jpg";
import { DocumentTextIcon } from "@heroicons/react/outline";

const CourseHistory = () => {
  return (
    <div className="mb-10 p-10">
      {/* --------------heading-------------- */}
      <div className="mb-20 flex justify-between items-center">
        <p className="text-5xl font-bold tracking-wide">
          Attended Course History
        </p>
        <p className="text-primary text-2xl cursor-pointer underline font-semibold">
          View More
        </p>
      </div>

      {/* -------------------course history----------------------- */}
      <div className="flex justify-around items-center space-x-3">
        <BorderDiv>
          <img
            src={cimg1}
            alt="courseimg"
            className="w-[286px] h-[163px] rounded-tl-[81.5px] rounded-tr-none rounded-br-[81.5px] rounded-bl-none object-center object-cover"
          />
          <p className="font-bold text-2xl tracking-tight">Bond Physics</p>
          <p className="text-gray-400">3.2 hours video</p>
          <div className="flex justify-between items-center border-t border-b border-gray-300 py-3">
            <p className="font-bold text-red-500">1:30:49 / time</p>
            <span className="text-green-600 font-bold">3:22:10</span>
          </div>
          <div className="flex text-green-600">
            <p className="rounded-full w-14 px-2 py-3 text-center h-14 border-2 bg-gray-200 border-green-600">
              100%
            </p>
            <div className="flex-col mx-2 font-bold">
              <span className="block text-xl">100%</span>
              <span className="block text-sm">Done</span>
            </div>
          </div>
        </BorderDiv>
        <BorderDiv>
          <img
            src={cimg2}
            alt="courseimg"
            className="w-[286px] h-[163px] rounded-tl-[81.5px] rounded-tr-none rounded-br-[81.5px] rounded-bl-none object-center object-cover"
          />
          <p className="font-bold text-2xl tracking-tight">Humans Heart</p>
          <p className="text-gray-400">4.3 hours video</p>
          <div className="flex justify-between items-center border-t border-b border-gray-300 py-3">
            <p className="font-bold flex">
              <DocumentTextIcon className="h-5 w-5 mr-1" color="gray" />
              Certified
            </p>
            <span className="text-green-600 font-bold">4:10:10</span>
          </div>
          <div className="flex text-red-600">
            <p className="rounded-full  w-14 px-2 py-3 text-center h-14  border-b-2 bg-gray-200 border-red-600">
              50%
            </p>
            <div className="flex-col mx-2 text-red-600 font-bold">
              <span className="block text-xl">50%</span>
              <span className="block text-sm">Pending</span>
            </div>
          </div>
        </BorderDiv>
        <BorderDiv>
          <img
            src={cimg3}
            alt="courseimg"
            className="w-[286px] h-[163px] rounded-tl-[81.5px] rounded-tr-none rounded-br-[81.5px] rounded-bl-none object-center object-cover"
          />
          <p className="font-bold text-2xl tracking-tight">
            Solution and Mixtures
          </p>
          <p className="text-gray-400">6.5 hours video</p>
          <div className="flex justify-between items-center border-t border-b border-gray-300 py-3">
            <p className="font-bold flex">
              <DocumentTextIcon className="h-5 w-5 mr-1" color="gray" />
              Certified
            </p>
            <span className="text-green-600 font-bold">6:55:40</span>
          </div>
          <div className="flex text-green-600">
            <p className="rounded-full w-14 px-2 py-3 text-center h-14 border-2 bg-gray-200 border-green-600">
              100%
            </p>
            <div className="flex-col mx-2 font-bold">
              <span className="block text-xl">100%</span>
              <span className="block text-sm">Done</span>
            </div>
          </div>
        </BorderDiv>
      </div>
    </div>
  );
};

export default CourseHistory;

const BorderDiv = tw.div`
border-2 border-from 
rounded-tl-[103px] rounded-tr-0 rounded-br-[119px] rounded-bl-0
 h-[434px] w-[322px]
 p-5
 space-y-4
`;
