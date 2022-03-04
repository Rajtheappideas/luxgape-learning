import React from "react";
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
  return (
    <>
      <MetaTags>
        <title>About Us</title>
      </MetaTags>
      {/* ------------------main div-------------- */}
      <div className="">
        {/* --------------navbar------------ */}
        <Navbar activeText="About Us" />
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-l text-center from-to to-from">
          About Us
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
        <MostPopularCourse/>

        {/* --------------------ContactUs------------------ */}
        <ContactUs />

        {/* ---------------footer---------------------- */}
        <Footer />
      </div>
    </>
  );
};

export default About;
