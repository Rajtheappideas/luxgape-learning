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
    <div className="bg-bgblank">
      <MetaTags>
        <title>Courses</title>
      </MetaTags>
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
