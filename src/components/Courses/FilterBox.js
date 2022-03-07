import { StarIcon } from "@heroicons/react/solid";
import React from "react";
import { BiDollar } from "react-icons/bi";

const Topics = [
  { name: "RGPD" },
  { name: "IT security trainings" },
  { name: "Health" },
  { name: "ASBL" },
  { name: "Industry" },
  { name: "Finance" },
];

const ListOfCourse = [
  { name: "General GDPR training" },
  { name: "GDPR for Health" },
  { name: "GDPR for ASBL" },
  { name: "Retention periods, how to manage" },
  { name: "IT security awarness session" },
];

const CourseLanguage = [{ name: "English" }, { name: "Spanish" }];

const features = [
  { name: "all" },
  { name: "quiz" },
  { name: "assignment" },
  { name: "coding" },
];

const FilterBox = () => {
  return (
    <div>
      {/* --------------filters box--------------- */}
      <div className="bg-white my-8 p-10 w-full h-auto border shadow-2xl rounded-tl-[184px] rounded-br-[184px] rounded-bl-none rounded-tr-none ">
        {/* -----------grid first div--------------- */}
        <div className="grid lg:grid-cols-3 p-10 lg:grid-rows-1 md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-3 md:items-start gap-5 justify-items-center items-center">
          {/* ------------------firrst column-------------- */}
          <div>
            <p className="text-2xl text-[#C4C4C4] font-semibold mb-5">Topics</p>
            {Topics.map((topic) => (
              <div key={topic.name} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  className="rounded-xl cursor-pointer w-5 h-5 mr-4"
                />
                <span className="text-xl font-semibold w-full">{topic.name}</span>
              </div>
            ))}
          </div>

          {/* ------------------second column-------------- */}
          <div>
            <p className="text-2xl text-[#C4C4C4] font-semibold mb-5">
              List of courses
            </p>
            {ListOfCourse.map((topic) => (
              <div key={topic.name} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  className="rounded-xl cursor-pointer w-5 h-5 mr-4"
                />
                <span className="text-xl font-semibold w-full">
                  {topic.name}
                </span>
              </div>
            ))}
          </div>

          {/* ------------------third column-------------- */}
          <div className="lg:col-span-1 md:col-span-2">
            <p className="text-2xl text-[#C4C4C4] font-semibold mb-5">
              Course Language
            </p>
            {CourseLanguage.map((topic) => (
              <div key={topic.name} className="flex items-center mb-3">
                <input
                  type="checkbox"
                  className="rounded-xl cursor-pointer w-5 h-5 mr-4"
                />
                <span className="text-xl font-semibold">{topic.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* --------------dashed line-------------- */}
        <div className="border-dashed border-2 border-[#C4C4C4] w-full " />

        {/* ------------------second grid div------------- */}
        <div className="grid lg:grid-cols-3 p-10 lg:grid-rows-1 md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-3 md:items-start gap-5 justify-items-center items-center">
          {/* ------------------firrst column-------------- */}
          <div>
            <p className="text-2xl text-[#C4C4C4] font-semibold mb-5">
              Feature
            </p>
            {features.map((topic) => (
              <div key={topic.name} className="flex items-center mb-3">
                <input
                  type="checkbox"
                  className="rounded-xl cursor-pointer w-5 h-5 mr-4"
                />
                <span className="text-xl capitalize font-semibold">
                  {topic.name}
                </span>
              </div>
            ))}
          </div>

          {/* ------------------second column-------------- */}
          <div>
            <p className="text-2xl text-[#C4C4C4] font-semibold mb-5">
              Ratings
            </p>
            {/* -----------5 star---------- */}
            <div className="flex items-center mb-3">
              <input
                type="checkbox"
                className="rounded-xl cursor-pointer w-5 h-5 mr-4"
              />
              <p className="text-xl flex font-semibold whitespace-nowrap">
                <StarIcon className="h-5 w-5 " color="black" />
                <StarIcon className="h-5 w-5 " />
                <StarIcon className="h-5 w-5 " />
                <StarIcon className="h-5 w-5 " />
                <StarIcon className="h-5 w-5 " />
              </p>
            </div>

            {/* -----------4 star---------- */}
            <div className="flex items-center mb-3">
              <input
                type="checkbox"
                className="rounded-xl cursor-pointer w-5 h-5 mr-4"
              />
              <p className="text-xl flex font-semibold whitespace-nowrap">
                <StarIcon className="h-5 w-5 " />
                <StarIcon className="h-5 w-5 " />
                <StarIcon className="h-5 w-5 " />
                <StarIcon className="h-5 w-5 " />
              </p>
            </div>

            {/* -----------3 star---------- */}
            <div className="flex items-center mb-3">
              <input
                type="checkbox"
                className="rounded-xl cursor-pointer w-5 h-5 mr-4"
              />
              <p className="text-xl flex font-semibold whitespace-nowrap">
                <StarIcon className="h-5 w-5 " color="black" />
                <StarIcon className="h-5 w-5 " />
                <StarIcon className="h-5 w-5 " />
              </p>
            </div>

            {/* -----------2 star---------- */}
            <div className="flex items-center mb-3">
              <input
                type="checkbox"
                className="rounded-xl cursor-pointer w-5 h-5 mr-4"
              />
              <p className="text-xl flex font-semibold whitespace-nowrap">
                <StarIcon className="h-5 w-5 " color="black" />
                <StarIcon className="h-5 w-5 " />
              </p>
            </div>

            {/* -----------1 star---------- */}
            <div className="flex items-center mb-3">
              <input
                type="checkbox"
                className="rounded-xl cursor-pointer w-5 h-5 mr-4"
              />
              <p className="text-xl flex font-semibold whitespace-nowrap">
                <StarIcon className="h-5 w-5 " color="black" />
              </p>
            </div>
          </div>

          {/* ------------------third column-------------- */}
          <div className="lg:col-span-1 md:col-span-2">
            <p className="text-2xl text-[#C4C4C4] font-semibold mb-5">Price</p>
            <div className="flex items-center mb-3 ">
              <div className="flex-col flex items-start relative">
                <span className="text-lg font-semibold">min</span>
                <BiDollar
                  className="bg-[#C4C4C4] rounded-sm absolute h-10 top-[43%] left-0 w-6"
                  color="white"
                />
                <input
                  type="number"
                  className="border rounded-md pl-6 h-10 mr-7 w-20 outline-none"
                />
              </div>
              <div className="flex-col flex items-start relative">
                <span className="text-lg font-semibold">max</span>
                <BiDollar
                  className="bg-[#C4C4C4]  w-6 absolute top-[43%] left-0 h-10"
                  color="white"
                />
                <input
                  type="number"
                  className="border rounded-md pl-6 h-10 mr-7 w-20 outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* -----------------buttons-------------------- */}
        <div className="text-center flex flex-wrap items-center justify-center md:space-y-0 space-y-2">
          <button className=" w-[209px] md:mr-5 h-12 font-bold bg-[#E0E0E0] rounded-tl-[30px] rounded-br-[30px] rounded-bl-none rounded-tr-none ">
            Clear All Filters
          </button>
          <button className=" w-[209px] h-12 bg-primary text-white font-bold rounded-tl-[30px] rounded-br-[30px] rounded-bl-none rounded-tr-none ">
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBox;
