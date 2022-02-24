import React from "react";
import { MetaTags } from "react-meta-tags";
import { CourseHistory, Footer, Navbar } from "../components";

const AttendCourseHistory = () => {
  return (
    <div>
       <MetaTags>
        <title>About Course</title>
      </MetaTags>
      <Navbar />
      <CourseHistory showButton={false} />
      <Footer />
    </div>
  );
};

export default AttendCourseHistory;
