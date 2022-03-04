import React, { useState } from "react";
import { MetaTags } from "react-meta-tags";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

import {
  Footer,
  Navbar,
  MostPopularCourse,
  AboutClass,
  History,
  AboutCourse,
  Review,
} from "../components";

const Class = () => {
  const [openAbout, setOpenAbout] = useState(true);
  const [openReview, setOpenReview] = useState(false);
  const [openHistory, setOpenHistory] = useState(false);
  return (
    <div className="relative">
      <MetaTags>
        <title>Class</title>
      </MetaTags>
      {/* -----------------------eclipse 1-------------- */}
      <div className="absolute top-1/2 left-0 -z-10 blur-[200px] w-[300px] h-[300px] rounded-full bg-pink-300 " />
      {/* -----------------------eclipse 2-------------- */}
      <div className="absolute top-1/4 left-0 -z-10 blur-[200px] w-[300px] h-[300px] rounded-full bg-blue-300 " />
      {/* -----------------------eclipse 3-------------- */}
      <div className="absolute top-3/4 right-0 -z-10 blur-[200px] w-[300px] h-[300px] rounded-full bg-blue-300 " />
      {/* -----------------------eclipse 4-------------- */}
      <div className="absolute top-80 right-0 -z-10 blur-[200px] w-[300px] h-[300px] rounded-full bg-blue-300 " />
      {/* -------------------navbar---------------- */}
      <Navbar />

      {/* -------------------Aboutclass-------------------- */}
      <AboutClass openAbout={openAbout} setOpenAbout={setOpenAbout} />

      {/* --------------buttons for toggle the componetns--------------- */}
      <div className="px-10">
        <p className="text-5xl block font-bold my-5 ">Course Name in Details</p>
        {/* -------------------buttons-------------- */}
        <div className="flex items-center relative my-7 text-secondary text-2xl ">
          <button
            className={`font-semibold relative ${
              openAbout && "text-green-400"
            }`}
            onClick={() => {
              setOpenAbout(true);
              setOpenReview(false);
              setOpenHistory(false);
            }}
          >
            About
            {openAbout && (
              <hr className=" absolute -bottom-4 left-0 h-1 z-10 bg-green-400 w-20" />
            )}
          </button>
          <button
            className={`font-semibold mx-5 relative ${
              openReview && "text-green-400"
            }`}
            onClick={() => {
              setOpenAbout(false);
              setOpenReview(true);
              setOpenHistory(false);
            }}
          >
            Reviews
            {openReview && (
              <hr className=" absolute -bottom-4 left-0 h-1 z-10 bg-green-400 w-20" />
            )}
          </button>
          <button
            className={`font-semibold relative ${
              openHistory && "text-green-400"
            }`}
            onClick={() => {
              setOpenAbout(false);
              setOpenReview(false);
              setOpenHistory(true);
            }}
          >
            History
            {openHistory && (
              <hr className=" absolute -bottom-4 left-0 h-1 z-10 bg-green-400 w-20" />
            )}
          </button>
          <hr className=" absolute -bottom-4 left-0 h-[2px] bg-green-200 w-[17rem]" />
        </div>
      </div>

      {/* -------------------About course-------------------- */}
      {openAbout && <AboutCourse />}

      {/* -------------------Reviews-------------------- */}
      {openReview && <Review />}

      {/* -------------------History-------------------- */}
      {openHistory && <History />}

      {/* -------------most popular cousrse----------------- */}
      <MostPopularCourse showButton={false} />

      {/* -------------------footer---------------- */}
      <Footer />
    </div>
  );
};

export default Class;
