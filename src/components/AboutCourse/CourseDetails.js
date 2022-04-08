import React, { useState } from "react";
import { CheckCircleIcon, ShareIcon } from "@heroicons/react/solid";
import { BsStarFill, BsStarHalf, BsFillPlayCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ReactPlayer from "react-player";
import ContentLoader from "react-content-loader";

const CourseDetails = ({ courseDetails, loading }) => {
  const { t } = useTranslation();
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="sm:p-10 p-3 w-full">
      {/* ---------------course details paragraph-------------- */}
      <div className="sm:text-center text-left mx-auto xl:w-3/5 sm:w-5/6">
        <p className="text-lg font-light">
          {courseDetails?.course_details?.about}
        </p>
      </div>

      {/* ----------------Deatails of course---------------- */}
      <div className="flex lg:flex-row flex-col justify-center items-start mt-10">
        {/* -------------------left side div video content----------------- */}
        {loading ? (
          <ContentLoader
            speed={1}
            backgroundColor="#efe6e6"
            foregroundColor="#d7bcbc"
            animate
            className="w-full h-screen"
          >
            <rect x="0" y="0" rx="3" ry="3" width="800" height="670" />
          </ContentLoader>
        ) : (
          <div className="w-full sm:h-screen h-96 relative lg:mr-10 bg-black mix-blend-darken border border-gray-300 rounded-xl">
            <ReactPlayer
              url={
                `https://chessmafia.com/php/luxgap/App/${courseDetails?.course_details?.demo_video}` ||
                null
              }
              controls
              playIcon={
                <div>
                  <BsFillPlayCircleFill
                    className="w-16 h-16 mx-auto"
                    color="gray"
                  />
                  <span className="text-gray-400 font-bold text-2xl">
                    {t("view_demo")}
                  </span>
                </div>
              }
              width="100%"
              height="100%"
              light={
                `https://chessmafia.com/php/luxgap/App/${courseDetails?.course_details?.image}` ||
                null
              }
              style={{ borderRadius: "2rem" }}
            />
          </div>
        )}
        {/* <div className="h-full w-full relative lg:mr-10 bg-black mix-blend-darken  rounded-tl-[243px] rounded-br-[243px] rounded-tr-none rounded-bl-none "> */}
        {/* <Link to="/class" onClick={ScrollToTop}> */}
        {/* <img
            src={`https://chessmafia.com/php/luxgap/App/${courseDetails?.course_details?.demo_video}`}
            alt="img"
            className="object-cover object-center opacity-70 w-full sm:h-screen h-96 rounded-tl-[243px] rounded-br-[243px] rounded-tr-none rounded-bl-none "
          /> */}

        {/* -------------play button---------- */}
        {/* <p className="absolute top-[40%] left-1/2 -translate-x-1/2 cursor-pointer">
            <BsFillPlayCircleFill className="w-16 h-16 mx-auto" />
            <span className="text-white font-bold text-2xl">
              {t("view_demo")}
            </span>
          </p> */}

        {/* -------------time----------- */}
        {/* <span className="bg-gray-600 text-white px-2 py-1 w-16 text-center rounded-lg absolute bottom-3 left-3">
            1:57
          </span> */}

        {/* -----------smalll div date-------------- */}
        {/* <p className="bg-primary absolute text-center py-2 top-[50px] left-[29.5px] w-[70px] h-[70px] rounded-tl-[35px] rounded-br-[35px] rounded-bl-none rounded-tr-none ">
            <span className="text-white block ">23</span>
            <span className="text-white block">Aug</span>
          </p> */}
        {/* </Link> */}
        {/* </div> */}

        {/* -------------------second div course deatrils--------------- */}
        {loading ? (
          <ContentLoader
            speed={1}
            width={374}
            height={674}
            backgroundColor="#efe6e6"
            foregroundColor="#d7bcbc"
            animate
            className="w-full"
          >
            <rect x="20" y="0" rx="3" ry="3" width="37" height="20" />
            <rect x="20" y="50" rx="3" ry="3" width="200" height="20" />
            <rect x="20" y="100" rx="3" ry="3" width="260" height="20" />
            <rect x="20" y="170" rx="3" ry="3" width="200" height="20" />
            <rect x="20" y="200" rx="3" ry="3" width="200" height="20" />
            <rect x="20" y="230" rx="3" ry="3" width="200" height="20" />
            <rect x="20" y="280" rx="3" ry="3" width="280" height="20" />
            <rect x="20" y="340" rx="3" ry="3" width="180" height="20" />
            <rect x="20" y="390" rx="3" ry="3" width="380" height="20" />
            <rect x="20" y="510" rx="3" ry="3" width="480" height="20" />
          </ContentLoader>
        ) : (
          <div className="w-full xl:space-y-10 sm:space-y-8 space-y-5 lg:mt-0 mt-5 lg:text-left text-center">
            {/* --------------course name------------- */}
            <p className="sm:text-5xl text-3xl font-bold">
              {courseDetails?.course_details?.title}
            </p>

            {/* ------------what you learn------------ */}
            <p className="font-semibold text-xl">{t("what_will_you_learn")}:</p>
            {/* ----------------course key points------------------ */}
            <div className="flex flex-row lg:justify-start justify-center items-center">
              <ul className="space-y-3 mr-10">
                <li className="flex ">
                  <CheckCircleIcon
                    className="h-6 w-6 sm:sm:mr-3"
                    color="lightblue"
                  />
                  {courseDetails?.course_details?.what_will_learn}
                </li>
                <li className="flex ">
                  <CheckCircleIcon
                    className="h-6 w-6 sm:mr-3"
                    color="lightblue"
                  />
                  {courseDetails?.course_details?.what_will_learn}
                </li>
                <li className="flex ">
                  <CheckCircleIcon
                    className="h-6 w-6 sm:mr-3"
                    color="lightblue"
                  />
                  {courseDetails?.course_details?.what_will_learn}
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex ">
                  <CheckCircleIcon
                    className="h-6 w-6 sm:mr-3"
                    color="lightblue"
                  />
                  {courseDetails?.course_details?.what_will_learn}
                </li>
                <li className="flex ">
                  <CheckCircleIcon
                    className="h-6 w-6 sm:mr-3"
                    color="lightblue"
                  />
                  {courseDetails?.course_details?.what_will_learn}
                </li>
                <li className="flex ">
                  <CheckCircleIcon
                    className="h-6 w-6 sm:mr-3"
                    color="lightblue"
                  />
                  {courseDetails?.course_details?.what_will_learn}
                </li>
              </ul>
            </div>

            {/* -------------review & complete course--------------- */}
            <div>
              {/* ------------------complete course users/student------------- */}
              <p className="font-semibold text-primary mb-2">
                204,559 Students done this course
              </p>
              {/* ------------------review--------------- */}
              <div className="flex items-center lg:justify-start justify-center space-x-2">
                <BsStarFill className="h-5 w-5" color="gold" />
                <BsStarFill className="h-5 w-5" color="gold" />
                <BsStarFill className="h-5 w-5" color="gold" />
                <BsStarFill className="h-5 w-5" color="gold" />
                <BsStarHalf className="h-5 w-5" color="gold" />
                <span className="font-semibold text-red-400">4.5</span>
              </div>
            </div>

            {/* -------------------price---------------------- */}
            <div className="flex sm:flex-row flex-col items-center lg:justify-start justify-center w-full">
              <p className="sm:space-x-5 space-x-2">
                <span className="font-bold sm:text-4xl text-xl">
                  $ {courseDetails?.sale_price}
                </span>
                <del className="text-[#c4c4c4] text-xl">
                  $ {courseDetails?.price}
                </del>
                <span className="border text-primary text-xl w-full sm:p-3 p-1 border-primary rounded-2xl">
                  Save 50%
                </span>
              </p>
            </div>

            {/* ----------------enroill now & share----------------- */}
            <div className="flex flex-row items-center lg:justify-start justify-center w-full sm:space-x-4 space-x-2">
              <Link
                // to={`/courses/aboutcourse/payment/${courseDetails?.course_details?.course_id}`}
                to={{
                  pathname: `/courses/aboutcourse/payment/${courseDetails?.course_details?.course_id}`,
                  state: { courseDetails },
                }}
                onClick={ScrollToTop}
              >
                <button className="bg-gradient-to-r from-to to-from text-white text-center uppercase sm:w-72 w-52 h-14 font-bold tracking-wider rounded-tl-[30px] rounded-br-[30px] rounded-bl-none rounded-tr-none">
                  {t("enroll_now")}
                </button>
              </Link>
              <p className="border mr-2 w-14 h-14 cursor-pointer rounded-tl-[30px] rounded-br-[30px] rounded-bl-none rounded-tr-none">
                <ShareIcon className="h-6 w-6 mx-auto my-4" color="gray" />
              </p>
              <p className="text-secondary sm:inline-block hidden text-xl font-semibold cursor-pointer">
                {t("share")}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetails;
