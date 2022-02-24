import React from "react";
import img from "../../assets/aboutcourseimg.jpg";
import { CheckCircleIcon, ShareIcon } from "@heroicons/react/solid";
import { BsStarFill, BsStarHalf, BsFillPlayCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const CourseDetails = () => {
  return (
    <div className="p-10  w-full">
      {/* ---------------course details paragraph-------------- */}
      <p className="text-lg font-light w-full px-36 text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>

      {/* ----------------Deatails of course---------------- */}
      <div className="flex justify-around items-start my-10 px-20">
        {/* -------------------left side div----------------- */}
        <Link to="/class">
          <div className="h-full w-full relative mr-10 bg-black mix-blend-darken  rounded-tl-[243px] rounded-br-[243px] rounded-tr-none rounded-bl-none ">
            <img
              src={img}
              alt="img"
              className="object-cover object-center opacity-70 w-[536px] h-[487px] rounded-tl-[243px] rounded-br-[243px] rounded-tr-none rounded-bl-none "
            />
            {/* -------------play button---------- */}
            <p className="absolute top-[40%] left-1/2 -translate-x-1/2 cursor-pointer">
              <BsFillPlayCircleFill className="w-16 h-16 mx-auto" />
              <span className="text-white font-bold text-2xl">View Demo</span>
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
          </div>
        </Link>

        {/* -------------------second div course deatrils--------------- */}
        <div className="w-full h-full space-y-9">
          {/* --------------course name------------- */}
          <p className="text-5xl whitespace-nowrap font-bold">
            Course Name in Details
          </p>

          {/* ------------what you learn------------ */}
          <p className="font-semibold text-xl">What will you learn:</p>
          {/* ----------------course key points------------------ */}
          <div className="flex flex-row items-center">
            <ul className="space-y-3 mr-10">
              <li className="flex ">
                <CheckCircleIcon className="h-6 w-6 mr-3" color="lightblue" />
                Lorem Ipsum
              </li>
              <li className="flex ">
                <CheckCircleIcon className="h-6 w-6 mr-3" color="lightblue" />
                Lorem Ipsum
              </li>
              <li className="flex ">
                <CheckCircleIcon className="h-6 w-6 mr-3" color="lightblue" />
                Lorem Ipsum
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex ">
                <CheckCircleIcon className="h-6 w-6 mr-3" color="lightblue" />
                Lorem Ipsum
              </li>
              <li className="flex ">
                <CheckCircleIcon className="h-6 w-6 mr-3" color="lightblue" />
                Lorem Ipsum
              </li>
              <li className="flex ">
                <CheckCircleIcon className="h-6 w-6 mr-3" color="lightblue" />
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
            <div className="flex items-center space-x-2">
              <BsStarFill className="h-5 w-5" color="gold" />
              <BsStarFill className="h-5 w-5" color="gold" />
              <BsStarFill className="h-5 w-5" color="gold" />
              <BsStarFill className="h-5 w-5" color="gold" />
              <BsStarHalf className="h-5 w-5" color="gold" />
              <span className="font-semibold text-red-400">4.5</span>
            </div>
          </div>

          {/* -------------------price---------------------- */}
          <div className="flex items-center ">
            <p className="space-x-5">
              <span className="font-bold text-4xl">$ 49.00</span>
              <del className="text-[#c4c4c4] text-xl">$ 99.00</del>
              <span className="border text-primary text-xl w-40 h-20 p-3 border-primary rounded-2xl">
                Save 50%
              </span>
            </p>
          </div>

          {/* ----------------enroill now & share----------------- */}
          <div className="flex items-center space-x-4">
            <Link to="/courses/aboutcourse/payment">
              <button className="bg-gradient-to-r from-to to-from text-white text-center uppercase w-72 h-14 font-bold tracking-wider rounded-tl-[30px] rounded-br-[30px] rounded-bl-none rounded-tr-none">
                enroll now
              </button>
            </Link>
            <p className="border w-14 h-14 cursor-pointer rounded-tl-[30px] rounded-br-[30px] rounded-bl-none rounded-tr-none">
              <ShareIcon className="h-6 w-6 mx-auto my-4" color="gray" />
            </p>
            <p className="text-secondary text-xl font-semibold cursor-pointer">
              Share
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
