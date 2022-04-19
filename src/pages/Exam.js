import React, { useEffect, useRef, useState } from "react";
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
import ContentLoader from "react-content-loader";

const Exam = () => {
  const [userDetails, setUserDetails] = useState({});
  const [getExamQuestions, setGetExamQuestions] = useState({});
  const [employerDetails, setEmployerDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [userDetailsLoading, setuserDetailsLoading] = useState(true);
  const [submitExam, setSubmitExam] = useState(false);
  const [questionLoading, setQuestionLoading] = useState(false);
  const [selectedOptionId, setSelectedOptionId] = useState("");
  const [selectedQuestionId, setSelectedQuestionId] = useState("");
  const [hours, sethours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [startExam, setStartExam] = useState(true);

  const currentYear = new Date().getFullYear();

  const { t } = useTranslation();

  const { userData, userLanguage } = useUserContext();

  let interval = useRef();

  const startTimer = () => {
    // const nextDay = new Date("April 20, 2022 00:10:00").getTime();

    const timer = getExamQuestions?.data[0]?.exam_info.total_time * 60 * 1000;
    const nextDay = timer + new Date().getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const countDown = nextDay - now;
      // calculate time left
      const hours = Math.floor(
        (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
      if (countDown <= 0) {
        clearInterval(interval.current);
      } else {
        sethours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  };

  // fetch user details first rendering
  useEffect(() => {
    // fetch the userdetails
    if (!startExam) {
      startTimer();
    }
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
        setGetExamQuestions(response?.data?.data?.questions);
        setEmployerDetails(response?.data?.data?.employer_id);
        setLoading(false);
        return true;
      } else if (response?.data?.status === Error) {
        setLoading(false);
        return false;
      } else if (response?.status === 500) {
        setLoading(false);
        return false;
      }
    });
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  const NextQuestions = () => {
    if (
      getExamQuestions?.current_page === getExamQuestions?.total &&
      getExamQuestions.next_page_url === null
    )
      return false;
    if (getExamQuestions?.current_page >= getExamQuestions?.total) {
      return false;
    } else {
      setQuestionLoading(true);
      setTimeout(() => {
        // next question calling
        axios(getExamQuestions?.next_page_url, {
          method: "POST",
          params: {
            lang_code: userLanguage,
            course_id: 1,
          },
          headers: {
            "consumer-access-token": userData?.api_token,
          },
        }).then((response) => {
          console.log("new page =>", response?.data?.data?.questions);
          if (response?.data?.status === "Success") {
            setGetExamQuestions(response?.data?.data?.questions);
            setQuestionLoading(false);
            return true;
          } else if (response?.data?.status === Error) {
            setQuestionLoading(false);
            return false;
          }
        });

        // submit answer is here at every single quetion
        axios("https://chessmafia.com/php/luxgap/App/api/submit-answer", {
          method: "POST",
          params: {
            lang_code: userLanguage,
            question_id: selectedQuestionId,
            option_id: selectedOptionId,
          },
          headers: {
            "consumer-access-token": userData?.api_token,
          },
        }).then((response) => {
          console.log("submit answer =>", response?.data?.data);
          if (response?.data?.status === "Success") {
            setSelectedOptionId("");
            setSelectedQuestionId("");
            return true;
          } else if (response?.data?.status === Error) {
            setSelectedOptionId("");
            setSelectedQuestionId("");
            return false;
          }
        });
      }, 1000);
    }
  };
  const PrevQuestions = () => {
    if (getExamQuestions?.prev_page_url === null) {
      return false;
    } else {
      // call prev page question
      setQuestionLoading(true);
      axios(getExamQuestions?.prev_page_url, {
        method: "POST",
        params: {
          lang_code: userLanguage,
          course_id: 1,
        },
        headers: {
          "consumer-access-token": userData?.api_token,
        },
      }).then((response) => {
        console.log("new page =>", response?.data?.data);
        if (response?.data?.status === "Success") {
          setGetExamQuestions(response?.data?.data?.questions);
          setQuestionLoading(false);
          return true;
        } else if (response?.data?.status === Error) {
          setQuestionLoading(false);
          return false;
        }
      });
    }
  };
  const SubmitExam = () => {
    setSubmitExam(true);
    setTimeout(() => {
      axios("https://chessmafia.com/php/luxgap/App/api/finish-exam", {
        method: "POST",
        params: {
          lang_code: userLanguage,
          course_id: getExamQuestions?.data[0]?.course_id,
          exam_id: getExamQuestions?.data[0]?.exam_id,
        },
        headers: {
          "consumer-access-token": userData?.api_token,
        },
      }).then((response) => {
        if (response?.data?.status === "Success") {
          console.log(response?.data?.data);
          setSubmitExam(false);
          ShowResult();
          return true;
        } else if (response?.data?.status === "Error") {
          console.log(response?.data);
          setSubmitExam(false);
          return false;
        }
      });
      clearInterval(interval.current);
    }, 2000);
    // submit answer is here at every single quetion
    axios("https://chessmafia.com/php/luxgap/App/api/submit-answer", {
      method: "POST",
      params: {
        lang_code: userLanguage,
        question_id: selectedQuestionId,
        option_id: selectedOptionId,
      },
      headers: {
        "consumer-access-token": userData?.api_token,
      },
    }).then((response) => {
      console.log("submit answer =>", response?.data?.data);
      if (response?.data?.status === "Success") {
        setSelectedOptionId("");
        setSelectedQuestionId("");
        return true;
      } else if (response?.data?.status === Error) {
        setSelectedOptionId("");
        setSelectedQuestionId("");
        return false;
      }
    });
  };
  const ShowResult = () => {
    axios("https://chessmafia.com/php/luxgap/App/api/get-result", {
      method: "POST",
      params: {
        lang_code: userLanguage,
        course_id: getExamQuestions?.data[0]?.course_id,
        exam_id: getExamQuestions?.data[0]?.exam_id,
      },
      headers: {
        "consumer-access-token": userData?.api_token,
      },
    }).then((response) => {
      if (response?.data?.status === "Success") {
        console.log(response?.data?.data);
        setSubmitExam(false);
        return true;
      } else if (response?.data?.status === "Error") {
        console.log(response?.data);
        setSubmitExam(false);
        return false;
      }
    });
  };
  const StartExam = () => {
    setStartExam(false);
    startTimer();
  };
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
        <p className="text-center text-4xl font-semibold leading-4">
          Loading...
        </p>
      ) : (
        getExamQuestions?.data.map((question, indx) => (
          <div className="sm:p-14 p-5 mb-10" key={indx}>
            {/* ---------------exam name and timer------------------ */}
            <div className="flex justify-between sm:items-center items-start ">
              {/* --------------exam name------------- */}
              <div>
                <span className="block text-xl mb-5 font-semibold">
                  {question?.exam_details?.exam_name}
                </span>
                <p className="block text-xl font-semibold">
                  Employer ID :{" "}
                  <span className="text-base font-normal">
                    {employerDetails?.employer_id}
                  </span>
                </p>
              </div>
              {/* --------------timer------------- */}
              <div>
                {startExam ? (
                  <p className="bg-pink-200 text-center text-pink-500 rounded-lg sm:p-3 p-1 text-xl font-semibold">
                    Time {hours}:{question?.exam_info?.total_time}:{seconds}
                  </p>
                ) : (
                  <p className="bg-pink-200 text-center text-pink-500 rounded-lg sm:p-3 p-1 text-xl font-semibold">
                    Time {hours}:{minutes}:{seconds}
                  </p>
                )}
              </div>
            </div>

            {/* ---------------------exam form-=------------------ */}
            {startExam ? (
              <div className="text-center bg-white sm:p-20 p-10 shadow-2xl sm:m-10 m-2 rounded-xl ">
                <button
                  type="button"
                  onClick={StartExam}
                  className="border sm:w-60 w-40 h-10 rounded-lg text-2xl text-center bg-primary text-white"
                >
                  Start Exam
                </button>
              </div>
            ) : questionLoading ? (
              <ContentLoader
                speed={1}
                // width={500}
                // height={374}
                backgroundColor="#efe6e6"
                foregroundColor="#d7bcbc"
                animate
                className="sm:p-8 p-3 lg:w-full md:w-[700px] w-72 h-96 shadow-2xl"
              >
                <rect x="0" y="80" rx="3" ry="3" width="400" height="20" />
                <rect x="0" y="120" rx="3" ry="3" width="1400" height="20" />
                <rect x="0" y="160" rx="3" ry="3" width="450" height="20" />
                <rect x="0" y="200" rx="3" ry="3" width="450" height="20" />
              </ContentLoader>
            ) : (
              <div className="w-full h-auto rounded-xl shadow-2xl bg-white my-7 sm:p-8 p-4">
                {/* ----------------ques and forwardand backwrd---------- */}
                <div className="flex justify-between items-center sm:mx-5">
                  <div>
                    <p className="font-bold text-primary text-xl">
                      questions {getExamQuestions?.current_page} of{" "}
                      {getExamQuestions?.total}
                    </p>
                  </div>
                  <div className="flex items-center">
                    {getExamQuestions?.prev_page_url === null ? null : (
                      <button
                        type="button"
                        onClick={PrevQuestions}
                        className="border p-2 border-primary text-orange-400 rounded-lg hover:bg-primary hover:text-white"
                      >
                        <ChevronLeftIcon className="h-5 w-5" />
                      </button>
                    )}
                    {getExamQuestions?.next_page_url === null ? null : (
                      <button
                        type="button"
                        onClick={NextQuestions}
                        className="border p-2 border-primary text-orange-400 rounded-lg hover:bg-primary hover:text-white"
                      >
                        <ChevronRightIcon className="h-5 w-5" />
                      </button>
                    )}
                  </div>
                </div>
                {/* ------------------------questions---------------- */}
                <div className="my-4 sm:px-5 px-4" key={indx}>
                  {/* ---------------que------------- */}
                  <p className="text-xl font-semibold">
                    <span className="text-primary sm:text-3xl text-xl font-semibold mr-3">
                      {getExamQuestions?.current_page}
                    </span>
                    {question?.exam_questions_details?.questions}
                  </p>
                </div>
                {/* -------------------options / ans-------------- */}
                {question?.exam_questions_details?.exam_questions_options_info.map(
                  (option, indx) => (
                    <div
                      className="first:mt-3 space-y-6 sm:p-3 p-2 cursor-pointer"
                      key={option?.id}
                      onClick={() => {
                        setSelectedQuestionId(option?.questions_id);
                        setSelectedOptionId(option?.id);
                      }}
                    >
                      <div
                        className={`flex items-center hover:bg-gray-100 w-full rounded-lg`}
                      >
                        <span
                          className={`rounded-full capitalize border border-gray-400 pt-2 text-center w-12 h-12 mr-2 text-xl ${
                            option?.id === selectedOptionId
                              ? "text-white bg-primary"
                              : "text-primary bg-white"
                          }`}
                        >
                          {option?.option_name}
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedOptionId(option?.id);
                            setSelectedQuestionId(option?.questions_id);
                          }}
                          className="text-base"
                        >
                          {option?.option_value}
                        </button>
                      </div>
                    </div>
                  )
                )}
                {/* -------------------------pre & next buttons---------- */}
                <div className="flex justify-end items-center mb-3">
                  <button
                    type="button"
                    onClick={PrevQuestions}
                    className=" border mr-3 w-32 h-10 rounded-lg text-gray-400 text-center"
                  >
                    previous
                  </button>
                  {getExamQuestions?.next_page_url === null ? (
                    <button
                      type="button"
                      onClick={SubmitExam}
                      className="border w-32 h-10 rounded-lg text-center bg-primary text-white"
                    >
                      {submitExam ? "submitting..." : "Submit Exam"}
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={NextQuestions}
                      className="border w-32 h-10 rounded-lg text-center bg-primary text-white"
                    >
                      Next Question
                    </button>
                  )}
                </div>
              </div>
            )}
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
      </footer>
    </div>
  );
};

export default Exam;
