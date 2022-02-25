import React from "react";
import { MetaTags } from "react-meta-tags";
import { Navbar } from "../components";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import studentimg from "../assets/studyimg3.jpg";

const Exam = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <MetaTags>
        <title>Exam</title>
      </MetaTags>
      {/* ---------------navbar----------- */}
      <nav className="p-10">
        <div className="flex justify-between items-center">
          {/* ----------------logo------------------------- */}
          <div className="cursor-pointer">
            <Link to="/">
              <img
                src={logo}
                className="w-full h-20 object-contain cursor-pointer"
                alt="logo"
              />
            </Link>
          </div>

          <div className="flex items-center bg-gray-100 p-2 rounded-lg">
            <img
              src={studentimg}
              alt="studentimg"
              className="object-center object-cover rounded-tl-lg rounded-br-lg rounded-bl-none rounded-tr-none w-10 h-10"
            />
            <p className="text-xl font-semibold ml-2">Student Name</p>
          </div>
        </div>
      </nav>
      
      {/* --------------------main div----------- */}
      <div className="p-14 mb-10">
        {/* ---------------exam name and timer------------------ */}
        <div className="flex justify-between items-center ">
          {/* --------------ecxam name------------- */}
          <div>
            <span className="block text-xl mb-5">Exam name</span>
            <span className="block text-xl">Exmployer ID</span>
          </div>
          {/* --------------timer------------- */}
          <div>
            <p className="bg-pink-200 text-center text-pink-500 rounded-lg p-3 text-xl font-semibold">
              Time 00:12:57
            </p>
          </div>
        </div>

        {/* ---------------------exam form-=------------------ */}
        <div className="w-full h-auto rounded-xl shadow-2xl bg-white my-7 p-8">
          {/* ----------------ques and forwardand backwrd---------- */}
          <div className="flex justify-between items-center mx-5">
            <div>
              <p className="font-bold text-primary text-xl">
                questions 1 of 20
              </p>
            </div>
            <div className="flex items-center">
              <button className="border p-3 border-primary rounded-lg">
                <ChevronLeftIcon className="h-5 w-5" color="orange" />
              </button>
              <button className="border p-3 border-primary rounded-lg">
                <ChevronRightIcon className="h-5 w-5" color="orange" />
              </button>
            </div>
          </div>

          {/* ------------------------mcqss---------------- */}
          <div className="my-4 px-10">
            {/* ---------------que------------- */}
            <p className="text-xl font-semibold">
              <span className="text-primary text-3xl font-semibold mr-3">
                01.
              </span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry ?
            </p>

            {/* -------------------options / ans-------------- */}
            <div className=" my-3 space-y-6 p-5">
              <div className="flex items-center hover:bg-gray-100 w-1/2 rounded-lg">
                <span className="rounded-full border border-gray-400 pt-2 text-center w-12 h-12 mr-2 text-xl text-primary hover:text-white  hover:bg-primary ">
                  A
                </span>
                <button className="text-xl">
                  Lorem Ipsum is simply a dummy text.
                </button>
              </div>
              <div className="flex items-center hover:bg-gray-100 w-1/2 rounded-lg">
                <span className="rounded-full border border-gray-400 pt-2 text-center w-12 h-12 mr-2 text-xl text-primary hover:text-white  hover:bg-primary ">
                  B
                </span>
                <button className="text-xl">
                  Lorem Ipsum is simply a dummy text.
                </button>
              </div>
              <div className="flex items-center hover:bg-gray-100 w-1/2 rounded-lg">
                <span className="rounded-full border border-gray-400 pt-2 text-center w-12 h-12 mr-2 text-xl text-primary hover:text-white  hover:bg-primary ">
                  C
                </span>
                <button className="text-xl">
                  Lorem Ipsum is simply a dummy text.
                </button>
              </div>
              <div className="flex items-center hover:bg-gray-100 w-1/2 rounded-lg">
                <span className="rounded-full border border-gray-400 pt-2 text-center w-12 h-12 mr-2 text-xl text-primary hover:text-white  hover:bg-primary ">
                  D
                </span>
                <button className="text-xl">
                  Lorem Ipsum is simply a dummy text.
                </button>
              </div>
            </div>
          </div>

          {/* -------------------------pre & next buttons---------- */}
          <div className="flex justify-end items-center mb-3">
            <button className=" border mr-3 w-32 h-10 rounded-lg text-gray-400 text-center">
              previews
            </button>
            <button className="border w-32 h-10 rounded-lg text-center bg-primary text-white">
              Next Question
            </button>
          </div>
        </div>
      </div>
      {/* --------------------footer----------- */}
      <footer className="bg-footer w-full">
        <div className="flex-col flex items-center justify-center my-5 space-y-4">
          <div>
            <Link to="/">
              <img
                src={logo}
                alt="companylogo"
                className="w-48 h-20 cursor-pointer object-contain"
              />
            </Link>
          </div>
          <div>
            <p className="text-5xl font-semibold bg-gradient-to-r bg-clip-text text-transparent from-to to-from">
              Best of luck
            </p>
          </div>
        </div>
        {/* ------------horizntal line-------------------- */}
        <div className="border w-full my-5 border-black" />
        <p className="text-xl text-center font-semibold pb-5">
          ©{currentYear} <span className="text-from font-bold">Lux Gap</span>.
          All Rights Reserved
        </p>
      </footer>{" "}
    </div>
  );
};

export default Exam;
