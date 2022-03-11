import React from "react";
import { MetaTags } from "react-meta-tags";
import {
  Footer,
  Navbar,
  WhatOurEmployerSay,
  MostPopularCourseCourses,
  SearchBoxAndFilter,
} from "../components";

const Courses = () => {
  return (
    <div className="bg-bgblank relative">
      <MetaTags>
        <title>Courses</title>
      </MetaTags>
      {/* -----------------------eclipse 1-------------- */}
      {/* <div className="absolute top-1/2 left-0 -z-10 blur-[200px] w-[300px] h-[300px] rounded-full bg-pink-300 " /> */}
      {/* -----------------------eclipse 2-------------- */}
      {/* <div className="absolute top-1/4 left-0 -z-10 blur-[200px] w-[300px] h-[300px] rounded-full bg-blue-300 " /> */}
      {/* -----------------------eclipse 3-------------- */}
      {/* <div className="absolute top-3/4 right-0 -z-10 blur-[200px] w-[300px] h-[300px] rounded-full bg-blue-300 " /> */}
      {/* -----------------------eclipse 4-------------- */}
      {/* <div className="absolute top-80 right-0 -z-10 blur-[200px] w-[300px] h-[300px] rounded-full bg-blue-300 " /> */}

      {/* -------------------navbar=------------------ */}
      <Navbar activeText="Course" />

      {/* -----------------search input & filters------------------ */}
      <SearchBoxAndFilter />

      {/* -------------most popular cousrse----------------- */}
      <MostPopularCourseCourses />

      {/* ------------------------WhatOurEmployerSay--------------------------- */}
      <WhatOurEmployerSay />

      {/* ----------------------------------foooter---------------------------- */}
      <Footer />
    </div>
  );
};

export default Courses;
