import React from "react";
import { MetaTags } from "react-meta-tags";
import {
  Footer,
  Navbar,
  ContactUs,
  CourseDetails,
  CourseDescription,
  Reviews,
  SkillsYouGet,
  MostPopularCourse,
} from "../components";
import Eclipse from "../components/Eclipse";

const AboutCourse = () => {
  return (
    <div className="bg-bgblank relative">
      <MetaTags>
        <title>About Course</title>
      </MetaTags>
      <Eclipse />
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
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r text-center from-to to-from">
        About Course
      </h1>

      {/* -------------cousrse details----------------- */}
      <CourseDetails />

      {/* -------------Skills you get----------------- */}
      <SkillsYouGet />

      {/* -------------cousrse description----------------- */}
      <CourseDescription />

      {/* -------------Reviews----------------- */}
      <Reviews />

      {/* -------------Reviews----------------- */}
      <MostPopularCourse showButton={false} />

      {/* ------------------------Contact US--------------------------- */}
      <ContactUs />

      {/* ----------------------------------foooter---------------------------- */}
      <Footer />
    </div>
  );
};

export default AboutCourse;
