import React from "react";
import { CourseDescription } from "..";

const AboutCourse = () => {
  return (
    <>
      <div className="text-xl sm:p-10 p-5">
        <div className="w-full space-y-6">
          <span className="font-bold text-2xl">About course</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </div>
      <hr className="border-collapse border-black mx-10 mt-10" />
      {/* -------------cousrse description----------------- */}
      <CourseDescription />
    </>
  );
};

export default AboutCourse;
