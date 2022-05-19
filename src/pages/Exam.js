import React, { useEffect, useRef, useState } from "react";
import { MetaTags } from "react-meta-tags";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useUserContext } from "../context/usercontext";
import ContentLoader from "react-content-loader";
import { toast, ToastContainer } from "react-toastify";

const Exam = () => {
  const [userDetails, setUserDetails] = useState({});
  const [getExamDetails, setGetExamDetails] = useState();
  const [getExamQuestions, setGetExamQuestions] = useState([]);
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
  const [countDown, setCountDown] = useState();
  const [startExam, setStartExam] = useState(true);
  const [currentPage, setCurrentPage] = useState();
  const [intervalId, setIntervalId] = useState(0);
  const [currentUrl, setCurrentUrl] = useState(null);
  const [examTime, setExamTime] = useState(null);
  const [examId, setExamId] = useState(null);

  const currentYear = new Date().getFullYear();

  const { t } = useTranslation();

  const { userData, userLanguage, setExamSubmitted } = useUserContext();

  // let interval;

  const { id } = useLocation().state;
  const navigate = useNavigate();

  // const startTimer = () => {
  //   if (intervalId && interval) {
  //     clearInterval(intervalId);
  //     clearInterval(interval);
  //     setIntervalId(0);
  //     return;
  //   }
  //   const timer = 1 * 20 * 1000;
  //   const nextDay = timer + new Date().getTime();
  //   // const timer = getExamDetails?.data[0]?.exam_info?.total_time;
  //   // const nextDay =
  //   //   timer.split(":")[0] * 60 * 1000 +
  //   //   timer.split(":")[1] * 1000 +
  //   //   new Date().getTime();
  //   const interval = setInterval(() => {
  //     const now = new Date().getTime();
  //     const countdown = nextDay - now;
  //     const Hours = Math.floor(
  //       (countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //     );
  //     const Minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
  //     const Seconds = Math.floor((countdown % (1000 * 60)) / 1000);

  //     if (countdown <= 0) {
  //       console.log("if");
  //       SubmitExam();
  //       setCountDown(0);
  //       // clearTheInt();
  //       clearInterval(interval);
  //       alert("Time is Over!! Exam Automatically submitted");
  //       // clearInterval(intervalId);
  //       // clearInterval(interval.current);
  //       // navigate("/");
  //     } else {
  //       sethours(Hours);
  //       setMinutes(Minutes);
  //       setSeconds(Seconds);
  //       sessionStorage.setItem("examTime", countdown);
  //       // sessionStorage.setItem("examTime", interval);
  //       setExamTime(sessionStorage.getItem("examTime"));
  //       setIntervalId(interval);
  //     }
  //   }, 1000);
  // };

  let interval;
  const startTimer = () => {
    if (intervalId && interval) {
      clearInterval(intervalId);
      clearInterval(interval);
      setIntervalId(0);
      return;
    }
    // const timer = 1 * 20 * 1000;
    // const nextDay = timer + new Date().getTime();

    const timer = getExamDetails?.data[0]?.exam_info?.total_time;
    const nextDay =
      timer.split(":")[0] * 60 * 1000 +
      timer.split(":")[1] * 1000 +
      new Date().getTime();
    if (examTime === null) {
      console.log("new timer", examTime);
    } else {
      console.log("old timer", examTime);
    }
    interval = setInterval(() => {
      const now = new Date().getTime();

      const countdown = nextDay - now;
      const Hours = Math.floor(
        (countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const Minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
      const Seconds = Math.floor((countdown % (1000 * 60)) / 1000);

      if (countdown <= 0) {
        console.log("if");
        SubmitExam();
        setCountDown(0);
        // clearTheInt();
        clearInterval(interval);
        alert("Time is Over!! Exam Automatically submitted");
        // clearInterval(intervalId);
        // clearInterval(interval.current);
        // navigate("/");
      } else {
        sethours(Hours);
        setMinutes(Minutes);
        setSeconds(Seconds);
        sessionStorage.setItem("examTime", countdown);
        // sessionStorage.setItem("examTime", interval);
        setExamTime(sessionStorage.getItem("examTime"));
        setIntervalId(interval);
      }
    }, 1000);
    // if (examTime === null) {
    // } else {
    //   interval = setInterval(() => {
    //     // const now = new Date().getTime();

    //     // const countdown = nextDay - now;
    //     const Hours = Math.floor(
    //       (examTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    //     );
    //     const Minutes = Math.floor((examTime % (1000 * 60 * 60)) / (1000 * 60));
    //     const Seconds = Math.floor((examTime % (1000 * 60)) / 1000);
    //     console.log(examTime);
    //     console.log(Hours, Minutes, Seconds);
    //     if (examTime <= 0) {
    //       console.log("if");
    //       SubmitExam();
    //       setCountDown(0);
    //       // clearTheInt();
    //       clearInterval(interval);
    //       alert("Time is Over!! Exam Automatically submitted");
    //       // clearInterval(intervalId);
    //       // clearInterval(interval.current);
    //       // navigate("/");
    //     } else {
    //       sethours(Hours);
    //       setMinutes(Minutes);
    //       setSeconds(Seconds);
    //       sessionStorage.setItem("examTime", examTime);
    //       // sessionStorage.setItem("examTime", interval);
    //       setExamTime(sessionStorage.getItem("examTime"));
    //       setIntervalId(interval);
    //     }
    //   }, 1000);
    // }
  };
  // console.log(hours, minutes, seconds);
  function clearTheInt() {
    // console.log("clearTheInt", interval);
    // clearInterval(interval);
    // setinterval(clearInterval(interval));
    // sessionStorage.removeItem("examTime");
    clearInterval(intervalId);
    // clearInterval(interval);
  }

  window.onbeforeunload = () => {
    setCurrentUrl(sessionStorage.getItem("currentUrl"));
    setExamTime(sessionStorage.getItem("examTime"));
  };

  window.onunload = () => {
    // sessionStorage.removeItem("examTime");
    // sessionStorage.removeItem("currentUrl");
    // sessionStorage.clear();
  };
  // fetch user details first rendering
  useEffect(() => {
    setExamTime(sessionStorage.getItem("examTime"));
    setCurrentUrl(sessionStorage.getItem("currentUrl"));

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
    })
      .then((response) => {
        if (response?.data?.status === "Success") {
          setUserDetails(response?.data?.data);
          setuserDetailsLoading(false);
          return true;
        }
      })
      .catch((err) => {
        if (err?.response?.data?.message === "Un-Authentic") {
          window.localStorage.clear();
          toast("Un-authentic!!", { type: "error" });
          setuserDetailsLoading(false);
          setTimeout(() => {
            navigate("/signin");
          }, 2000);
        }
      });

    // fetch the exam questions
    setLoading(true);
    axios("https://chessmafia.com/php/luxgap/App/api/get-exam-question", {
      method: "POST",
      params: {
        lang_code: userLanguage,
        course_id: id,
        page: 1,
      },
      headers: {
        "consumer-access-token": userData?.api_token,
      },
    })
      .then((response) => {
        if (response?.data?.status === "Success") {
          setGetExamDetails(response?.data?.data?.questions);
          setGetExamQuestions(
            response?.data?.data?.questions?.data[0]?.exam_questions_details
          );
          // setCurrentUrl(response?.data?.data?.questions?.first_page_url);
          // sessionStorage.setItem(
          //   "currentUrl",
          //   JSON.stringify(response?.data?.data?.questions?.first_page_url)
          // );
          setCurrentPage(response?.data?.data?.questions?.current_page);
          setEmployerDetails(response?.data?.data?.employer_id);
          setExamId(response?.data?.data?.questions?.data[0]?.exam_id);
          setLoading(false);
          return true;
        } else if (response?.data?.status === Error) {
          setLoading(false);
          return false;
        } else if (response?.status === 500) {
          setLoading(false);
          return false;
        }
      })
      .catch((err) => {
        if (err?.response?.data?.message === "Un-Authentic") {
          window.localStorage.clear();
          toast("Un-authentic!!", { type: "error" });
          setLoading(false);
          setTimeout(() => {
            navigate("/signin");
          }, 2000);
        }
      });
    // return () => clearInterval(intervalId);
  }, []);

  // nexy questions
  const NextQuestions = () => {
    let option = getExamQuestions?.exam_questions_options_info.map(
      (options) => options.is_answer_count === 0
    );
    let checker = (arr) => arr.every((option) => option === true);
    if (
      selectedQuestionId === "" &&
      selectedOptionId === "" &&
      checker(option) === true
    ) {
      toast("you have to choose the answer!!!", { type: "warning" });
      return false;
    }
    if (
      getExamDetails?.current_page === getExamDetails?.total &&
      getExamDetails.next_page_url === null
    )
      return false;
    if (getExamDetails?.current_page >= getExamDetails?.total) {
      return false;
    } else {
      setQuestionLoading(true);
      setTimeout(() => {
        setCurrentUrl(getExamDetails?.next_page_url);
        sessionStorage.setItem("currentUrl", getExamDetails?.next_page_url);
        // next question calling
        axios(getExamDetails?.next_page_url, {
          method: "POST",
          params: {
            lang_code: userLanguage,
            course_id: id,
            exam_id: examId,
          },
          headers: {
            "consumer-access-token": userData?.api_token,
          },
        }).then((response) => {
          console.log("new page =>", response?.data?.data?.questions);
          if (response?.data?.status === "Success") {
            setGetExamDetails(response?.data?.data?.questions);
            setGetExamQuestions(
              response?.data?.data?.questions?.data[0]?.exam_questions_details
            );
            setCurrentPage(response?.data?.data?.questions?.current_page);
            setQuestionLoading(false);
            setSelectedOptionId("");
            setSelectedQuestionId("");
            return true;
          } else if (response?.data?.status === Error) {
            setQuestionLoading(false);
            return false;
          }
        });
      }, 1000);
      // submit answer is here at every single quetion
      axios("https://chessmafia.com/php/luxgap/App/api/submit-answer", {
        method: "POST",
        params: {
          lang_code: userLanguage,
          question_id: selectedQuestionId,
          option_id: selectedOptionId,
          exam_id: examId,
          course_id: id,
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
    }
  };
  // prev questions
  const PrevQuestions = () => {
    if (getExamDetails?.prev_page_url === null) {
      return false;
    } else {
      // call prev page question
      setQuestionLoading(true);
      setCurrentUrl(getExamDetails?.prev_page_url);
      sessionStorage.setItem("currentUrl", getExamDetails?.prev_page_url);
      axios(getExamDetails?.prev_page_url, {
        method: "POST",
        params: {
          lang_code: userLanguage,
          course_id: id,
          exam_id: examId,
        },
        headers: {
          "consumer-access-token": userData?.api_token,
        },
      }).then((response) => {
        console.log("new page =>", response?.data?.data?.questions);
        if (response?.data?.status === "Success") {
          setGetExamDetails(response?.data?.data?.questions);
          setGetExamQuestions(
            response?.data?.data?.questions?.data[0]?.exam_questions_details
          );
          setCurrentPage(response?.data?.data?.questions?.current_page);
          setQuestionLoading(false);
          return true;
        } else if (response?.data?.status === Error) {
          setQuestionLoading(false);
          return false;
        }
      });
    }
  };
  // submit exam
  const SubmitExam = (e) => {
    // e.preventDefault();
    // clearInterval(intervalId);
    let option = getExamQuestions?.exam_questions_options_info.map(
      (options) => options.is_answer_count === 0
    );
    let checker = (arr) => arr.every((option) => option === true);
    if (
      selectedQuestionId === "" &&
      selectedOptionId === "" &&
      checker(option) === true
    ) {
      toast("you have to choose the answer!!!", { type: "warning" });
      return false;
    }

    setSubmitExam(true);
    setTimeout(() => {
      axios("https://chessmafia.com/php/luxgap/App/api/finish-exam", {
        method: "POST",
        params: {
          lang_code: userLanguage,
          course_id: id,
          exam_id: examId,
        },
        headers: {
          "consumer-access-token": userData?.api_token,
        },
      }).then((response) => {
        if (response?.data?.status === "Success") {
          console.log(response?.data?.data);
          setCountDown(0);
          setSubmitExam(false);
          setExamSubmitted(true);
          clearTheInt();
          sessionStorage.clear();
          navigate("/");
          toast(t("Exam Succesfully Submitted"), { type: "success" });
          return true;
        } else if (response?.data?.status === "Error") {
          console.log(response?.data);
          setSubmitExam(false);
          return false;
        }
      });
    }, 1000);
    // submit answer is here at every single quetion
    axios("https://chessmafia.com/php/luxgap/App/api/submit-answer", {
      method: "POST",
      params: {
        lang_code: userLanguage,
        question_id: selectedQuestionId,
        option_id: selectedOptionId,
        course_id: id,
        exam_id: examId,
      },
      headers: {
        "consumer-access-token": userData?.api_token,
      },
    }).then((response) => {
      // console.log("submit answer =>", response?.data?.data);
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

    setCurrentUrl(null);
  };
  // start exam
  const StartExam = () => {
    setStartExam(false);
    startTimer();
  };

  return (
    <div>
      <MetaTags>
        <title>{t("exam")}</title>
      </MetaTags>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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

          {/* ---------------------user details========== */}
          <div className="flex items-center bg-gray-100 p-2 rounded-lg">
            {userDetails?.profile === null ? (
              <>
                <UserIcon className="h- w-9" color="gray" />
                <span className="text-2xl font-semibold ml-2 text-center">
                  {userDetails?.name}
                </span>
              </>
            ) : userDetailsLoading ? (
              <ContentLoader
                speed={1}
                // width={500}
                // height={374}
                backgroundColor="#efe6e6"
                foregroundColor="#d7bcbc"
                animate
                className="w-40 h-10"
              >
                <rect x="1100" y="20" rx="3" ry="3" width="50" height="10" />
              </ContentLoader>
            ) : (
              <>
                <LazyLoadImage
                  src={`https://chessmafia.com/php/luxgap/App/${userDetails?.profile}`}
                  alt={userDetails?.name}
                  className="object-center object-cover rounded-tl-lg rounded-br-lg rounded-bl-none rounded-tr-none w-12 h-12"
                />
                <span className="text-2xl font-semibold ml-2 text-center">
                  {userDetails?.name}
                </span>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* --------------------main div----------- */}
      {loading ? (
        <p className="text-center text-4xl font-semibold leading-4">
          <ContentLoader
            speed={1}
            // width={500}
            // height={374}
            backgroundColor="#efe6e6"
            foregroundColor="#d7bcbc"
            animate
            className="sm:w-full w-72 sm:h-screen h-60"
          >
            <rect x="70" y="80" rx="3" ry="3" width="200" height="20" />
            <rect x="70" y="120" rx="3" ry="3" width="200" height="20" />
            <rect
              x="1100"
              y="100"
              rx="3"
              ry="3"
              width="200"
              height="50"
              className="xl:block hidden"
            />
            <rect
              x="580"
              y="300"
              rx="3"
              ry="3"
              width="200"
              height="50"
              className="xl:block hidden"
            />
            <rect
              x="800"
              y="100"
              rx="3"
              ry="3"
              width="200"
              height="50"
              className="xl:hidden lg:block hidden"
            />
            <rect
              x="500"
              y="100"
              rx="3"
              ry="3"
              width="200"
              height="50"
              className="lg:hidden md:block"
            />
            <rect
              x="300"
              y="100"
              rx="3"
              ry="3"
              width="200"
              height="50"
              className="md:hidden block"
            />
            <rect
              x="400"
              y="300"
              rx="3"
              ry="3"
              width="200"
              height="50"
              className="xl:hidden block"
            />
          </ContentLoader>
        </p>
      ) : getExamDetails === undefined || getExamQuestions === null ? (
        <p className="text-3xl font-semibold text-center m-10 h-auto">
          {t("Oops No Exam for this Course")}
        </p>
      ) : (
        getExamDetails?.data.map((question, indx) => (
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
                    {/* Time {hours}:{question?.exam_info?.total_time}:{seconds} */}
                    Time 00:{question?.exam_info?.total_time}
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
                  {t("Start Exam")}
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
                      {t("questions")} {getExamDetails?.current_page} of{" "}
                      {getExamDetails?.total}
                    </p>
                  </div>
                  <div className="flex items-center">
                    {getExamDetails?.prev_page_url === null ? null : (
                      <button
                        type="button"
                        onClick={PrevQuestions}
                        className="active:scale-95 duration-100 ease-in-out transition-all border p-2 border-primary text-orange-400 rounded-lg hover:bg-primary hover:text-white"
                        disabled={countDown === 0}
                      >
                        <ChevronLeftIcon className="h-5 w-5" />
                      </button>
                    )}
                    {getExamDetails?.next_page_url === null ? null : (
                      <button
                        type="button"
                        onClick={NextQuestions}
                        className="active:scale-95 duration-100 ease-in-out transition-all border p-2 border-primary text-orange-400 rounded-lg hover:bg-primary hover:text-white"
                        disabled={countDown === 0}
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
                      {getExamDetails?.current_page}
                    </span>
                    {getExamQuestions?.questions}
                  </p>
                </div>
                {/* -------------------options / ans-------------- */}
                {getExamQuestions?.exam_questions_options_info.map(
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
                        className={`flex items-center hover:bg-gray-100 rounded-lg`}
                      >
                        <button
                          className={`rounded-full capitalize text-center border border-gray-400 w-12 h-12  text-xl ${
                            countDown !== 0 && option?.id === selectedOptionId
                              ? "text-white bg-primary"
                              : "text-primary bg-white"
                          } ${
                            countDown !== 0 && selectedOptionId !== ""
                              ? null
                              : option?.is_answer_count === 1 &&
                                "bg-orange-200 text-white"
                          }`}
                          disabled={countDown === 0}
                        >
                          {option?.option_name}
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedOptionId(option?.id);
                            setSelectedQuestionId(option?.questions_id);
                          }}
                          disabled={countDown === 0}
                          className="text-base text-left w-full ml-2"
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
                    className=" border mr-3 w-32 active:scale-95 duration-100 ease-in-out transition-all h-10 rounded-lg text-gray-400 text-center"
                    disabled={countDown === 0}
                  >
                    {t("previous")}
                  </button>
                  {getExamDetails?.next_page_url === null ? (
                    <button
                      type="button"
                      onClick={() => SubmitExam()}
                      className="border w-auto px-1 h-10 active:scale-95 duration-100 ease-in-out transition-all rounded-lg text-center bg-primary text-white"
                    >
                      {submitExam ? t("submitting...") : t("Submit Exam")}
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={NextQuestions}
                      disabled={countDown === 0}
                      className="border w-auto px-1 h-10 rounded-lg text-center bg-primary text-white"
                    >
                      {t("Next Question")}
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
                className="w-52 h-20 cursor-pointer object-contain"
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
