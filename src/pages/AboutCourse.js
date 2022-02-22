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
} from "../components";

const AboutCourse = () => {
  return (
    <div className="bg-bgblank">
      <MetaTags>
        <title>About Course</title>
      </MetaTags>
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

      {/* ------------------------Contact US--------------------------- */}
      <ContactUs />

      {/* ----------------------------------foooter---------------------------- */}
      <Footer />
    </div>
  );
};

export default AboutCourse;
