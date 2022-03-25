import React from "react";
import { ClockIcon } from "@heroicons/react/solid";
import { FcComboChart } from "react-icons/fc";
import { GiCircle } from "react-icons/gi";

const CourseDescription = () => {
  return (
    <div className="sm:px-10 px-3">
      {/* ------------------course program details-------------- */}
      <div className="flex md:flex-row flex-col justify-center items-start w-full border-b sm:py-10 py-5 border-[#c4c4c4]">
        {/* ---------------heading-------------- */}
        <div className="w-2/4">
          <h1 className="sm:text-5xl text-3xl tracking-normal font-bold mb-4">
            Course Program:
          </h1>
          <p className="font-bold text-secondary text-base">
            All Course - 3 Units (320 hours)
          </p>
        </div>
        {/* --------------course details---------------- */}
        <p className="w-full font-light text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.Lorem Ipsum is simply dummy
          text of the printing and typesetting industry.Lorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s.
        </p>
      </div>

      {/* ----------------first div course details--------- */}
      <div className="flex md:flex-row flex-col justify-center items-start w-full border-b py-10 border-[#c4c4c4]">
        {/* ---------------left side heading-------------- */}
        <div className="w-2/4">
          <p className="text-2xl flex items-center tracking-normal font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-to to-from">
            <GiCircle className="h-3 w-3 bg-gradient-to-br from-to to-from rounded-full mr-2" />
            1 Unit
          </p>
          <p className="font-bold text-secondary text-base sm:ml-3">80 hours</p>
        </div>

        {/* --------------course details---------------- */}
        <div className="w-full space-y-5">
          {/* ---------------course title ---------------- */}
          <p className="font-bold sm:text-3xl text-xl tracking-wide">
            Course: Getting Started with Simple Styling
          </p>

          {/* --------------------course deacription----------------- */}
          <p className="font-light text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. simply
          </p>

          {/* --------------------video hours ---------------- */}
          <p className="flex font-semibold text-secondary">
            <ClockIcon className="w-6 h-6 mr-2" color="orange" />
            13 Video Lectures, 6 Training Methodics, 4 Tasks
          </p>

          {/*-------------------------skills ---------------------  */}
          <p className="flex font-semibold text-secondary">
            <FcComboChart className="w-6 h-6 mr-2" />
            Skills You Get: CSS
          </p>
        </div>
      </div>

      {/* ----------------second div course details--------- */}
      <div className="flex md:flex-row flex-col justify-center items-start w-full border-b py-10 border-[#c4c4c4]">
        {/* ---------------left sides heading-------------- */}
        <div className="w-2/4">
          <p className="text-2xl flex items-center tracking-normal font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-to to-from">
            <GiCircle className="h-3 w-3 bg-gradient-to-br from-to to-from rounded-full mr-2" />
            2 Unit
          </p>
          <p className="font-bold text-secondary text-base sm:ml-3">110 hours</p>
        </div>

        <div className="space-y-7 w-full">
          {/* --------------first course details---------------- */}
          <div className="w-full space-y-5">
            {/* ---------------course title ---------------- */}
            <p className="font-bold sm:text-3xl text-xl tracking-wide">
              Course: Week Three: Psuedo-classes, Pseudo-elements, Transitions,
              and Positioning
            </p>

            {/* --------------------course deacription----------------- */}
            <p className="font-light text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. simply
            </p>

            {/* --------------------video hours ---------------- */}
            <p className="flex font-semibold text-secondary">
              <ClockIcon className="w-6 h-6 mr-2" color="orange" />
              13 Video Lectures, 6 Training Methodics, 4 Tasks
            </p>

            {/*-------------------------skills ---------------------  */}
            <p className="flex font-semibold text-secondary">
              <FcComboChart className="w-6 h-6 mr-2" />
              Skills You Get: Advanced CSS
            </p>
          </div>

          {/* --------------second course details---------------- */}
          <div className="w-full space-y-5">
            {/* ---------------course title ---------------- */}
            <p className="font-bold sm:text-3xl text-xl tracking-wide">
              Course: Web Design Principles, Grids and Conposition
            </p>

            {/* -------------------- course deacription----------------- */}
            <p className="font-light text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. simply
            </p>

            {/* --------------------video hours ---------------- */}
            <p className="flex font-semibold text-secondary">
              <ClockIcon className="w-6 h-6 mr-2" color="orange" />8 Video
              Lectures, 6 Training Methodics, 4 Tasks
            </p>

            {/*-------------------------skills ---------------------  */}
            <p className="flex font-semibold text-secondary">
              <FcComboChart className="w-6 h-6 mr-2" />
              Skills You Get: Design
            </p>
          </div>
        </div>
      </div>

      {/* ----------------third div course details--------- */}
      <div className="flex md:flex-row flex-col justify-center items-start w-full py-10">
        {/* ---------------left sides heading-------------- */}
        <div className="w-2/4">
          <p className="text-2xl flex items-center tracking-normal font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-to to-from">
            <GiCircle className="h-3 w-3 bg-gradient-to-br from-to to-from rounded-full mr-2" />
            3 Unit
          </p>
          <p className="font-bold text-secondary text-base sm:ml-3">130 hours</p>
        </div>

        <div className="space-y-7 w-full">
          {/* --------------first course details---------------- */}

          <div className="w-full space-y-5">
            {/* ---------------course title ---------------- */}
            <p className="font-bold sm:text-3xl text-xl tracking-wide">
              Course: What is HTML5. Adaptive layout
            </p>

            {/* --------------------course deacription----------------- */}
            <p className="font-light text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. simply
            </p>

            {/* --------------------video hours ---------------- */}
            <p className="flex font-semibold text-secondary">
              <ClockIcon className="w-6 h-6 mr-2" color="orange" />
              24 Video Lectures, 6 Training Methodics, 4 Tasks
            </p>

            {/*-------------------------skills ---------------------  */}
            <p className="flex font-semibold text-secondary">
              <FcComboChart className="w-6 h-6 mr-2" />
              Skills You Get: Advanced HTML5
            </p>
          </div>

          {/* --------------second course details---------------- */}
          <div className="w-full space-y-5">
            {/* ---------------course title ---------------- */}
            <p className="font-bold sm:text-3xl text-xl tracking-wide">
              Course: Website Devepopment and Final Task - Real Site Landing{" "}
            </p>

            {/* --------------------course deacription----------------- */}
            <p className="font-light text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. simply
            </p>

            {/* --------------------video hours ---------------- */}
            <p className="flex font-semibold text-secondary">
              <ClockIcon className="w-6 h-6 mr-2" color="orange" />
              13 Video Lectures, 6 Training Methodics, 4 Tasks
            </p>

            {/*-------------------------skills ---------------------  */}
            <p className="flex font-semibold text-secondary">
              <FcComboChart className="w-6 h-6 mr-2" />
              Skills You Get: Website Development, Web Accessibillity,
              Wordpress, WooCommerce
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDescription;
