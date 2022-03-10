import React from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  return (
    <div className="">
      <MetaTags>
        <title>About Course</title>
      </MetaTags>
      <Eclipse />
      {/* -------------------navbar=------------------ */}
      <Navbar activeText="Course" />
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r text-center from-to to-from">
        {t("About_course")}
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
