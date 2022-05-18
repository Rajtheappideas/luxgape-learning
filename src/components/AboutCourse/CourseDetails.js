import React, { useEffect, useState } from "react";
import { CheckCircleIcon, ShareIcon, XIcon } from "@heroicons/react/solid";
import { BsStarFill, BsStarHalf, BsFillPlayCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ReactPlayer from "react-player";
import ContentLoader from "react-content-loader";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappIcon,
  WhatsappShareButton,
  EmailIcon,
  EmailShareButton,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const CourseDetails = ({ courseDetails, loading }) => {
  const [openModal, setOpenModal] = useState(false);
  const { t } = useTranslation();
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const salePrice = courseDetails?.sale_price;
  // const price = Math.round(salePrice / courseDetails?.price) * 100;
  const discount = 50 / 100;
  const discountPrice = salePrice - salePrice * discount;

  function getPercentageIncrease(numA, numB) {
    return Math.abs(((numA - numB) / numB) * 100);
  }
  return (
    <div className="sm:p-10 p-3 w-full">
      {/* ---------------course details paragraph-------------- */}
      <div className="sm:text-center text-left mx-auto xl:w-3/5 sm:w-5/6">
        <p className="text-lg font-light">
          {courseDetails?.course_details?.about}
        </p>
      </div>

      {/* ----------------Deatails of course---------------- */}
      <div className="flex lg:flex-row flex-col justify-center items-start mt-10 h-auto">
        {/* -------------------left side div video content----------------- */}
        {loading ? (
          <ContentLoader
            speed={1}
            backgroundColor="#efe6e6"
            foregroundColor="#d7bcbc"
            animate
            className="w-full sm:h-screen h-80"
          >
            <rect x="0" y="0" rx="3" ry="3" width="800" height="670" />
          </ContentLoader>
        ) : (
          <div className="w-full md:h-screen h-80 relative overflow-hidden lg:mr-10 bg-black mix-blend-darken border rounded-xl border-gray-300">
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
                    color="white"
                  />
                  <span className="text-white font-bold text-2xl">
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
              className="object-cover object-center"
            />
          </div>
        )}
        {/* <div className="h-full w-full relative lg:mr-10 bg-black mix-blend-darken  rounded-tl-[243px] rounded-br-[243px] rounded-tr-none rounded-bl-none "> */}
        {/* <Link to="/className" onClick={ScrollToTop}> */}
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
            <rect x="20" y="10" rx="3" ry="3" width="37" height="20" />
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
            <div className="flex flex-row text-left">
              <ul className="space-y-3 sm:mr-5 mr-3">
                <li className="flex items-start justify-start">
                  <CheckCircleIcon className="h-5 sm:mr-1" color="lightblue" />
                  {courseDetails?.course_details?.what_will_learn}
                </li>
              </ul>
            </div>

            {/* -------------review & complete course--------------- */}
            <div>
              {/* ------------------complete course users/student------------- */}
              <p className="font-semibold text-primary mb-2">
                204,559 {t("Students_done_this_course")}
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
                  {/* $ {discountPrice.toFixed(2)} */}${" "}
                  {courseDetails?.sale_price}
                </span>
                <del className="text-[#c4c4c4] text-xl">
                  $ {courseDetails?.price}
                </del>
                <span className="border text-primary text-xl w-full sm:p-3 p-1 border-primary rounded-2xl">
                  {t("Save")}{" "}
                  {getPercentageIncrease(
                    courseDetails?.sale_price,
                    courseDetails?.price
                  ).toFixed(0)}
                  %
                </span>
              </p>
            </div>

            {/* ----------------enroill now & share----------------- */}
            <div className="relative flex flex-row items-center lg:justify-start justify-center w-full sm:space-x-4 space-x-2">
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
              <button
                type="button"
                onClick={() => setOpenModal(true)}
                className="border mr-2 w-14 h-14 cursor-pointer rounded-tl-[30px] rounded-br-[30px] rounded-bl-none rounded-tr-none"
              >
                <ShareIcon className="h-6 w-6 mx-auto my-4" color="gray" />
              </button>
              <button
                type="button"
                onClick={() => setOpenModal(true)}
                className="text-secondary sm:inline-block hidden text-xl font-semibold cursor-pointer"
              >
                {t("share")}
              </button>
              {openModal && (
                <div className="absolute top-16 lg:left-32 md:left-56 z-50 h-auto overflow-y-auto w-72 overflow-x-hidden shadow-lg rounded-lg bg-white">
                  <div className="block text-right p-3 border-b border-gray-400">
                    <button type="button" onClick={() => setOpenModal(false)}>
                      <XIcon className="h-7" />
                    </button>
                  </div>
                  <div className="px-6 py-2 items-center flex-auto space-x-2">
                    <EmailShareButton
                      url={`https://luxgape-learning.netlify.app/courses/aboutcourse/${courseDetails?.course_details?.course_id}`}
                      subject="luxgapcourse"
                      body="learn from lux gap courses"
                    >
                      <EmailIcon
                        color="blue"
                        size={40}
                        className="rounded-full"
                        round={true}
                      />
                    </EmailShareButton>
                    <WhatsappShareButton
                      url={`https://luxgape-learning.netlify.app/courses/aboutcourse/${courseDetails?.course_details?.course_id}`}
                      title="laxgapcourse"
                    >
                      <WhatsappIcon
                        color="green"
                        size={40}
                        className="rounded-full"
                        round={true}
                      />
                    </WhatsappShareButton>
                    <FacebookShareButton
                      url={`https://luxgape-learning.netlify.app/courses/aboutcourse/${courseDetails?.course_details?.course_id}`}
                      title="luxgapcourses"
                      hashtag="#luxgapelearning"
                    >
                      <FacebookIcon
                        color="blue"
                        size={40}
                        className="rounded-full"
                        round={true}
                      />
                    </FacebookShareButton>
                    <LinkedinShareButton
                      url={`https://luxgape-learning.netlify.app/courses/aboutcourse/${courseDetails?.course_details?.course_id}`}
                      title="lux gap course"
                      summary="learn from lux gap courses"
                    >
                      <LinkedinIcon
                        color="blue"
                        size={40}
                        className="rounded-full"
                        round={true}
                      />
                    </LinkedinShareButton>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetails;
