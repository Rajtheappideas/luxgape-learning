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
    <div>
      <MetaTags>
        <title>Class</title>
      </MetaTags>
      {/* -------------------navbar---------------- */}
      <Navbar />
      <Link to="/exam">
        {/* -------------------Aboutclass-------------------- */}
        <AboutClass />

        {/* -------------cousrse description----------------- */}
        <CourseDescription />

        {/* -------------most popular cousrse----------------- */}
        <MostPopularCourse showButton={false} />
      </Link>

      {/* -------------------footer---------------- */}
      <Footer />
    </div>
  );
};

export default Class;
