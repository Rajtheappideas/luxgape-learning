import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import React from "react";
import { MetaTags } from "react-meta-tags";
import { Footer, Navbar } from "../components";

const Employee = () => {
  return (
    <div>
      <MetaTags>
        <title>Employee</title>
      </MetaTags>
      {/* ---------------navbar--------------- */}
      <Navbar />
      {/* -----------------main div table-------------- */}
      <div className="p-10 mb-10">
        <div className="shadow-2xl p-10 bg-white w-full h-auto rounded-xl">
          {/* -----------------heading & serach box---------------- */}
          <div className="flex items-center justify-between">
            <span className="font-bold text-xl">Employee list</span>
            <input
              type="search"
              className="w-52 h-10 outline-none bg-gray-50 border p-3 rounded-xl"
              placeholder="search"
            />
          </div>

          {/* -------------table of employee----------- */}
          <div className="grid grid-cols-6 grid-rows-4 gap-y-1 my-6">
            {/* -----------first row------------- */}
            <>
              <div className="col-span-2 border-b ">
                <span className="font-semibold text-lg">Name</span>
              </div>
              <div className="border-b">
                <span className="font-semibold text-lg">Total Time</span>
              </div>
              <div className="border-b">
                <span className="font-semibold text-lg">Courses</span>
              </div>
              <div className="border-b">
                <span className="font-semibold text-lg">Join Date</span>
              </div>
              <div className="border-b">
                <span className="font-semibold text-lg">Status</span>
              </div>
            </>
            {/* -----------second row------------- */}
            <>
              <div className="col-span-2 border-b flex items-center py-4">
                <p>img</p>
                <p>name</p>
              </div>
              <div className="border-b py-4">
                <p className="flex text-green-500 font-bold">
                  <span>3:30:00</span>/<span>3:30:00</span>
                </p>
              </div>

              <div className="border-b py-4">
                <span className="font-semibold text-lg">
                  Lorem ipsum course
                </span>
              </div>
              <div className="border-b py-4">
                <span className="font-semibold text-lg">january 2,2020</span>
              </div>
              <div className="border-b py-4">
                <span className="font-semibold border border-green-400 text-green-500 bg-green-100 text-center px-2 py-1 w-full h-10 rounded-xl text-lg">
                  certified
                </span>
              </div>
            </>
            {/* -----------third row------------- */}
            <>
              <div className="col-span-2 border-b flex items-center py-4">
                <p>img</p>
                <p>name</p>
              </div>
              <div className="border-b py-4">
                <p className="flex text-green-500 font-bold">
                  <span>3:30:00</span>/<span>3:30:00</span>
                </p>
              </div>

              <div className="border-b py-4">
                <span className="font-semibold text-lg">
                  Lorem ipsum course
                </span>
              </div>
              <div className="border-b py-4">
                <span className="font-semibold text-lg">january 2,2020</span>
              </div>
              <div className="border-b py-4">
                <span className="font-semibold border border-green-400 text-green-500 bg-green-100 text-center px-2 py-1 w-full h-10 rounded-xl text-lg">
                  certified
                </span>
              </div>
            </>
            {/* -----------fourth row------------- */}
            <>
              <div className="col-span-2 border-b flex items-center py-4">
                <p>img</p>
                <p>name</p>
              </div>
              <div className="border-b py-4">
                <p className="flex text-green-500 font-bold">
                  <span>3:30:00</span>/<span>3:30:00</span>
                </p>
              </div>

              <div className="border-b py-4">
                <span className="font-semibold text-lg">
                  Lorem ipsum course
                </span>
              </div>
              <div className="border-b py-4">
                <span className="font-semibold text-lg">january 2,2020</span>
              </div>
              <div className="border-b py-4">
                <span className="font-semibold border border-green-400 text-green-500 bg-green-100 text-center px-2 py-1 w-full h-10 rounded-xl text-lg">
                  certified
                </span>
              </div>
            </>
          </div>

          <div className="flex justify-between items-center mt-10">
            <div >
              <p className="text-lg font-normal">showing 1-5 data from 200</p>
            </div>
            {/* ------------buttons pagiantoin-------------- */}
            <div className="space-x-2 flex items-center">
              <ChevronLeftIcon className="h-6 cursor-pointer" />
              <button className="px-4 py-2 rounded-lg bg-gray-100 text-black">
                1
              </button>
              <button className="px-4 py-2 rounded-lg bg-gray-100 text-black">
                2
              </button>
              <button className="px-4 py-2 rounded-lg bg-gray-100 text-black">
                3
              </button>
              <ChevronRightIcon className="h-6 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      {/* ---------------footer--------------- */}
      <Footer />
    </div>
  );
};

export default Employee;
