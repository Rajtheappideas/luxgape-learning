import React from "react";
import img from "../../assets/aboutcourseimg.jpg";
import { CheckCircleIcon, ShareIcon } from "@heroicons/react/solid";
import { BsStarFill, BsStarHalf, BsFillPlayCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CourseDetails = () => {
  const { t } = useTranslation();
  return (
    <div className="sm:p-10 p-3 w-full">
      {/* ---------------course details paragraph-------------- */}
      <div className="text-center mx-auto xl:w-3/5 sm:w-5/6">
        <p className="text-lg font-light">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>

      {/* ----------------Deatails of course---------------- */}
      <div className="flex lg:flex-row flex-col justify-center items-center mt-10">
        {/* -------------------left side div----------------- */}
        <div className="h-full w-full relative lg:mr-10 bg-black mix-blend-darken  rounded-tl-[243px] rounded-br-[243px] rounded-tr-none rounded-bl-none ">
          <Link to="/class">
            <img
              src={img}
              alt="img"
              className="object-cover object-center opacity-70 w-full h-screen rounded-tl-[243px] rounded-br-[243px] rounded-tr-none rounded-bl-none "
            />
            {/* -------------play button---------- */}
            <p className="absolute top-[40%] left-1/2 -translate-x-1/2 cursor-pointer">
              <BsFillPlayCircleFill className="w-16 h-16 mx-auto" />
              <span className="text-white font-bold text-2xl">
                {t("view_demo")}
              </span>
            </p>

            {/* -------------time----------- */}
            <span className="bg-gray-600 text-white px-2 py-1 w-16 text-center rounded-lg absolute bottom-3 left-3">
              1:57
            </span>

            {/* -----------smalll div date-------------- */}
            <p className="bg-primary absolute text-center py-2 top-[50px] left-[29.5px] w-[70px] h-[70px] rounded-tl-[35px] rounded-br-[35px] rounded-bl-none rounded-tr-none ">
              <span className="text-white block ">23</span>
              <span className="text-white block">Aug</span>
            </p>
          </Link>
        </div>

        {/* -------------------second div course deatrils--------------- */}
        <div className="w-full h-screen xl:space-y-12 space-y-5 lg:mt-0 mt-5 lg:text-left text-center">
          {/* --------------course name------------- */}
          <p className="text-5xl font-bold">Course Name in Details</p>

          {/* ------------what you learn------------ */}
          <p className="font-semibold text-xl">{t("what_will_you_learn")}:</p>
          {/* ----------------course key points------------------ */}
          <div className="flex flex-row lg:justify-start justify-center items-center">
            <ul className="space-y-3 mr-10">
              <li className="flex ">
                <CheckCircleIcon className="h-6 w-6 sm:sm:mr-3" color="lightblue" />
                Lorem Ipsum
              </li>
              <li className="flex ">
                <CheckCircleIcon className="h-6 w-6 sm:mr-3" color="lightblue" />
                Lorem Ipsum
              </li>
              <li className="flex ">
                <CheckCircleIcon className="h-6 w-6 sm:mr-3" color="lightblue" />
                Lorem Ipsum
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex ">
                <CheckCircleIcon className="h-6 w-6 sm:mr-3" color="lightblue" />
                Lorem Ipsum
              </li>
              <li className="flex ">
                <CheckCircleIcon className="h-6 w-6 sm:mr-3" color="lightblue" />
                Lorem Ipsum
              </li>
              <li className="flex ">
                <CheckCircleIcon className="h-6 w-6 sm:mr-3" color="lightblue" />
                Lorem Ipsum
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
              <span className="font-bold sm:text-4xl text-xl">$ 49.00</span>
              <del className="text-[#c4c4c4] text-xl">$ 99.00</del>
              <span className="border text-primary text-xl w-full sm:p-3 p-1 border-primary rounded-2xl">
                Save 50%
              </span>
            </p>
          </div>

          {/* ----------------enroill now & share----------------- */}
          <div className="flex sm:flex-row flex-col items-center lg:justify-start justify-center w-full sm:space-x-4 space-y-2 sm:space-y-0">
            <Link to="/courses/aboutcourse/payment">
              <button className="bg-gradient-to-r from-to to-from text-white text-center uppercase sm:w-72 w-60 h-14 font-bold tracking-wider rounded-tl-[30px] rounded-br-[30px] rounded-bl-none rounded-tr-none">
                {t("enroll_now")}
              </button>
            </Link>
            <p className="border w-14 h-14 cursor-pointer rounded-tl-[30px] rounded-br-[30px] rounded-bl-none rounded-tr-none">
              <ShareIcon className="h-6 w-6 mx-auto my-4" color="gray" />
            </p>
            <p className="text-secondary text-xl font-semibold cursor-pointer">
              {t("share")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
