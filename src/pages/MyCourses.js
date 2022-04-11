import React from "react";
import { MetaTags } from "react-meta-tags";
import { Footer, Navbar } from "../components";

const MyCourses = () => {
  return (
    <>
      <MetaTags>
        <title>My Courses</title>
      </MetaTags>
      <Navbar />
      <div className="sm:p-10 p-3">
        <p>My courses</p>
      </div>
      <Footer />
    </>
  );
};

export default MyCourses;
