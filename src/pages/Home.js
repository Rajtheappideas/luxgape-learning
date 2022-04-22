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
import { ToastContainer } from "react-toastify";
import { useUserContext } from "../context/usercontext";

const Home = () => {
  const { t } = useTranslation();
  const { userData, examSubmitted, setExamSubmitted } = useUserContext();
  console.log(examSubmitted);
  return (
    <div className="bg-white overflow-hidden">
      <MetaTags>
        <title>{t("Home")}</title>
      </MetaTags>
      {/* -----------react toasatify toast container--------------- */}

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* -------------------navbar=------------------ */}
      <Navbar activeText="Home" />

      {/* ---------------------herosection---------------------- */}
      <Herosection />

      {/* -----------------course history--------------------------- */}
      {userData && <CourseHistory showButton={true} slice={true} />}

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
