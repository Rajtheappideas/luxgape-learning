import React, { useEffect, useState } from "react";
import { MetaTags } from "react-meta-tags";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useUserContext } from "../context/usercontext";

const Exam = () => {
  const [userDetails, setUserDetails] = useState({});
  const [getExamQuestions, setGetExamQuestions] = useState({});
  const [loading, setLoading] = useState(true);
  const [userDetailsLoading, setuserDetailsLoading] = useState(true);
  const [index, setIndex] = useState(1);
  const [currentQuestions, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const currentYear = new Date().getFullYear();

  const { t } = useTranslation();

  const { userData, userLanguage } = useUserContext();

  useEffect(() => {
    // fetch the userdetails
    setuserDetailsLoading(true);
    axios("https://chessmafia.com/php/luxgap/App/api/get-user-details", {
      method: "POST",
      params: {
        lang_code: userLanguage,
      },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "consumer-access-token": userData?.api_token,
      },
    }).then((response) => {
      if (response?.data?.status === "Success") {
        setUserDetails(response?.data?.data);
        setuserDetailsLoading(false);
        return true;
      } else if (response?.data?.status === "Error") {
        setuserDetailsLoading(false);
        return false;
      }
    });

    // fetch the exam questions
    setLoading(true);
    axios("https://chessmafia.com/php/luxgap/App/api/get-exam-question", {
      method: "POST",
      params: {
        lang_code: userLanguage,
        course_id: 1,
      },
      headers: {
        "consumer-access-token": userData?.api_token,
      },
    }).then((response) => {
      if (response?.data?.status === "Success") {
        setGetExamQuestions(response?.data?.data);
        setLoading(false);
        return true;
      } else if (response?.data?.status === Error) {
        setLoading(false);
        return false;
      }
    });
  }, []);

  const NextQuestions = (isCorrect) => {
    const nextQuestion = currentQuestions + 1;
    if (isCorrect) {
      setScore(score + 10);
    }
    if (
      nextQuestion <
      getExamQuestions?.data[0]?.exam_questions_details_info.length
    ) {
      console.log("ongoing");
      setIndex(index + 1);
      setCurrentQuestion(nextQuestion);
    } else {
      alert("finish");
      setShowScore(true);
    }
    if (index >= 20) {
      setIndex(index);
    } else {
      setIndex(index + 1);
      setCurrentQuestion(currentQuestions + 1);
    }
  };
  const PrevQuestions = () => {
    if (index <= 1 && currentQuestions <= 0) {
      setIndex(1);
      setCurrentQuestion(0);
    } else {
      setIndex(index - 1);
      setCurrentQuestion(currentQuestions - 1);
    }
  };
  console.log(getExamQuestions);
  console.log(score);
  return (
    <div>
      <MetaTags>
        <title>{t("exam")}</title>
      </MetaTags>
      {/* ---------------navbar----------- */}
      <nav className="sm:p-10 p-3">
        <div className="sm:flex sm:flex-row  sm:justify-between flex-col items-center space-y-3 sm:space-y-0">
          {/* ----------------logo------------------------- */}
          <div className="cursor-pointer">
            <Link to="/">
              <LazyLoadImage
                src={logo}
                className="w-full h-20 object-contain cursor-pointer"
                alt="logo"
              />
            </Link>
          </div>

          <div className="flex items-center bg-gray-100 p-2 rounded-lg">
            {userDetails?.profile === null ? (
              <UserIcon className="h- w-9" color="gray" />
            ) : (
              <LazyLoadImage
                src={`https://chessmafia.com/php/luxgap/App/${userDetails?.profile}`}
                alt={userDetails?.name}
                className="object-center object-cover rounded-tl-lg rounded-br-lg rounded-bl-none rounded-tr-none w-12 h-12"
              />
            )}
            <span className="text-2xl font-semibold ml-2 text-center">
              {userDetailsLoading ? <p>fetching...</p> : userDetails?.name}
            </span>
          </div>
        </div>
      </nav>
      {/* --------------------main div----------- */}
      {loading ? (
        <p>loading...</p>
      ) : showScore ? (
        <p>your score is {score}</p>
      ) : (
        getExamQuestions?.data.map((question, indx) => (
          <div className="sm:p-14 p-5 mb-10" key={indx}>
            {/* ---------------exam name and timer------------------ */}
            <div className="flex justify-between items-center ">
              {/* --------------ecxam name------------- */}
              <div>
                <span className="block text-xl mb-5">
                  {question?.exam_details?.exam_name}
                </span>
                <span className="block text-xl">Employer ID</span>
              </div>
              {/* --------------timer------------- */}
              <div>
                <p className="bg-pink-200 text-center text-pink-500 rounded-lg p-3 text-xl font-semibold">
                  Time {question?.exam_info?.total_time}:00:00
                </p>
              </div>
            </div>

            {/* ---------------------exam form-=------------------ */}
            <div className="w-full h-auto rounded-xl shadow-2xl bg-white my-7 sm:p-8 p-4">
              {/* ----------------ques and forwardand backwrd---------- */}
              <div className="flex justify-between items-center sm:mx-5">
                <div>
                  <p className="font-bold text-primary text-xl">
                    questions {index} of {question?.exam_info?.total_questions}
                  </p>
                </div>
                <div className="flex items-center">
                  <button
                    type="button"
                    onClick={PrevQuestions}
                    className="border p-3 border-primary text-orange-400 rounded-lg hover:bg-primary hover:text-white"
                  >
                    <ChevronLeftIcon className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={NextQuestions}
                    className="border p-3 border-primary text-orange-400 rounded-lg hover:bg-primary hover:text-white"
                  >
                    <ChevronRightIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* ------------------------mcqss---------------- */}
              <div className="my-4 sm:px-10 px-4" key={indx}>
                {/* ---------------que------------- */}
                <p className="text-xl font-semibold">
                  <span className="text-primary sm:text-3xl text-xl font-semibold mr-3">
                    {/* {question?.exam_questions_details_info[0]?.questions_id} */}
                    {index}
                  </span>
                  {
                    question?.exam_questions_details_info[currentQuestions]
                      ?.questions
                  }
                </p>
              </div>
              {/* -------------------options / ans-------------- */}
              {question?.exam_questions_details_info[
                currentQuestions
              ].exam_questions_options_info.map((option, indx) => (
                <div className="first:mt-3 space-y-6 sm:p-3 p-2" key={indx}>
                  <div className="flex items-center hover:bg-gray-100 w-auto rounded-lg">
                    <span className="rounded-full capitalize border border-gray-400 pt-2 text-center w-12 h-12 mr-2 text-xl text-primary hover:text-white  hover:bg-primary ">
                      {option?.option_name}
                    </span>
                    <button
                      type="button"
                      onClick={() => NextQuestions(option?.is_true === 1)}
                      className="text-base"
                    >
                      {option?.option_value}
                    </button>
                  </div>
                </div>
              ))}

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
        ))
      )}
      {/* --------------------footer----------- */}
      <footer className="bg-footer w-full">
        <div className="flex-col flex items-center justify-center my-5 space-y-4">
          <div>
            <Link to="/">
              <LazyLoadImage
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
