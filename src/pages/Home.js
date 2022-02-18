import React from "react";
import {
  Navbar,
  Footer,
  Herosection,
  CourseHistory,
  WhyChooseUs,
  MostPopularCourse,
  LearnAnytimeAnywhere,
  MoreAboutUs,
  WhatOurEmployerSay,
  ContactUs,
} from "../components/index";
import { MetaTags } from "react-meta-tags";
const Home = () => {
  return (
    <div className="bg-bgblank">
      <MetaTags>
        <title>Home</title>
      </MetaTags>
      {/* -------------------navbar=------------------ */}
      <Navbar activeText="Home" />

      {/* ---------------------herosection---------------------- */}
      <Herosection />

      {/* -----------------course history--------------------------- */}
      <CourseHistory />

      {/* -------------------whychooseus=------------------------- */}
      <WhyChooseUs />

      {/* -------------most popular cousrse----------------- */}
      <MostPopularCourse />

      {/* --------------------------LearnAnytimeAnywhere------------------------- */}
      <LearnAnytimeAnywhere />

      {/* ------------------------MoreAboutUs------------------------ */}
      <MoreAboutUs />

      {/* ------------------------WhatOurEmployerSay--------------------------- */}
      <WhatOurEmployerSay />

      {/* --------------------ContactUs------------------ */}
      <ContactUs />

      {/* ----------------------------------foooter---------------------------- */}
      <Footer />
    </div>
  );
};

export default Home;
