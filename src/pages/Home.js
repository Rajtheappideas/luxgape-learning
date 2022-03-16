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
import { useTranslation } from "react-i18next";
const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white overflow-hidden">
      <MetaTags>
        <title>{t("Home")}</title>
      </MetaTags>
      {/* -------------------navbar=------------------ */}
      <Navbar activeText="Home" />

      {/* ---------------------herosection---------------------- */}
      <Herosection />

      {/* -----------------course history--------------------------- */}
      <CourseHistory showButton={true} />

      {/* -------------------whychooseus=------------------------- */}
      <WhyChooseUs />

      {/* -------------most popular cousrse----------------- */}
      <MostPopularCourse showButton={true} showEclipse={true} />

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
