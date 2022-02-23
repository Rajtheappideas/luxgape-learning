import React from "react";
import { CourseHistory, Footer, Navbar } from "../components";

const AttendCourseHistory = () => {
  return (
    <div>
      <Navbar />
      <CourseHistory showButton={false} />
      <Footer />
    </div>
  );
};

export default AttendCourseHistory;
