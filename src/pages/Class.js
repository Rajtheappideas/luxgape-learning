import React from "react";
import { MetaTags } from "react-meta-tags";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

import {
  Footer,
  Navbar,
  MostPopularCourse,
  CourseDescription,
  AboutClass,
} from "../components";

const Class = () => {
  return (
    <div className="relative">
      <MetaTags>
        <title>Class</title>
      </MetaTags>
      {/* -----------------------eclipse 1-------------- */}
      <div className="absolute top-1/2 left-0 -z-10 blur-[200px] w-[300px] h-[300px] rounded-full bg-pink-300 " />
      {/* -----------------------eclipse 2-------------- */}
      <div className="absolute top-1/4 left-0 -z-10 blur-[200px] w-[300px] h-[300px] rounded-full bg-blue-300 " />
      {/* -----------------------eclipse 3-------------- */}
      <div className="absolute top-3/4 right-0 -z-10 blur-[200px] w-[300px] h-[300px] rounded-full bg-blue-300 " />
      {/* -----------------------eclipse 4-------------- */}
      <div className="absolute top-80 right-0 -z-10 blur-[200px] w-[300px] h-[300px] rounded-full bg-blue-300 " />
      {/* -------------------navbar---------------- */}
      <Navbar />
      {/* -------------------Aboutclass-------------------- */}
      <AboutClass />
      {/* -------------cousrse description----------------- */}
      <CourseDescription />

      {/* -------------most popular cousrse----------------- */}
      <MostPopularCourse showButton={false} />

      {/* -------------------footer---------------- */}
      <Footer />
    </div>
  );
};

export default Class;
