import { t } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import { MetaTags } from "react-meta-tags";
import {
  AboutUsimg,
  ClassDetails,
  ContactUs,
  Footer,
  MostPopularCourse,
  Navbar,
  ServiceWeProvide,
  WhatOurEmployerSay,
} from "../components";

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <MetaTags>
        <title>{t("About_Us")}</title>
      </MetaTags>
      {/* ------------------main div-------------- */}
      <div>
        {/* --------------navbar------------ */}
        <Navbar activeText="About Us" />
        <h1 className="sm:text-5xl text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-l text-center from-to to-from">
          {t("About_Us")}
        </h1>

        {/* --------------images------------ */}
        <AboutUsimg />

        {/* ------------------------Class details--------------------------- */}
        <ClassDetails />

        {/* -----------------ServiceWeProvide---------------- */}
        <ServiceWeProvide />

        {/* ------------------------WhatOurEmployerSay--------------------------- */}
        <WhatOurEmployerSay />

        {/* -------------most popular cousrse----------------- */}
        <MostPopularCourse />

        {/* --------------------ContactUs------------------ */}
        <ContactUs />

        {/* ---------------footer---------------------- */}
        <Footer />
      </div>
    </>
  );
};

export default About;
