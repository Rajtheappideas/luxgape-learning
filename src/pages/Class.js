import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { MetaTags } from "react-meta-tags";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import {
  Footer,
  Navbar,
  MostPopularCourse,
  AboutClass,
  History,
  AboutCourse,
  Review,
  UnitVideos,
} from "../components";
import { useUserContext } from "../context/usercontext";

const Class = () => {
  const [openVideo, setOpenVideo] = useState(true);
  const [openAbout, setOpenAbout] = useState(false);
  const [openReview, setOpenReview] = useState(false);
  const [openHistory, setOpenHistory] = useState(false);
  const [courseDetails, setCourseDetails] = useState({});
  const [userReviews, setUserReviews] = useState([]);
  const [units, setUnits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [startExamLoading, setStartExamLoading] = useState(false);
  const [Url, setUrl] = useState(null);
  const [UniteId, setUnitId] = useState(null);
  const [UniteVideoId, setUnitVideoId] = useState(null);
  const [CourseId, setCourseId] = useState(null);
  const [watchedTime, setWathcedTime] = useState(null);
  const [videoTitle, setVideoTitle] = useState("");
  const [startExamInfo, setStartExamInfo] = useState({});
  const [attendedCourseInfo, setAttendedCourseInfo] = useState({});

  const { id } = useParams();
  const { userLanguage, userData } = useUserContext();

  const { t } = useTranslation();
  const navigate = useNavigate();

  // fetch data on first rendering page
  useEffect(() => {
    setLoading(true);
    axios("https://chessmafia.com/php/luxgap/App/api/view-course-detail", {
      method: "POST",
      params: {
        lang_code: userLanguage,
        course_id: id,
      },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "consumer-access-token": userData?.api_token,
      },
    }).then((response) => {
      if (response?.data?.status === "Success") {
        setCourseDetails(response?.data?.data);
        setUserReviews(response?.data?.data?.review_info);
        setLoading(false);
        return true;
      } else if (response?.data?.status === "Error") {
        setLoading(false);
        return false;
      }
    });

    axios("https://chessmafia.com/php/luxgap/App/api/start-course", {
      method: "POST",
      params: {
        lang_code: userLanguage,
        course_id: id,
      },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "consumer-access-token": userData?.api_token,
      },
    }).then((response) => {
      if (
        response?.data?.status === "Success" &&
        response?.data?.message === "success"
      ) {
        // toast("course is started", { type: "success" });
        setLoading(false);
        return true;
      } else if (response?.data?.message === "already exists") {
        // toast("course is already started", { type: "warning" });
        setLoading(false);
        return false;
      }
    });
    axios("https://chessmafia.com/php/luxgap/App/api/get-course-video", {
      method: "POST",
      params: {
        lang_code: userLanguage,
        course_id: id,
      },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "consumer-access-token": userData?.api_token,
      },
    }).then((response) => {
      if (response?.data?.status === "Success") {
        setUnits(response?.data?.data?.unites);
        setUrl(response?.data?.data?.unites[0]?.video_list[0]?.video);
        setUnitVideoId(
          response?.data?.data?.unites[0]?.video_list[0]?.unite_video_id
        );
        setStartExamInfo(response?.data?.data?.start_exam_info);
        setAttendedCourseInfo(response?.data?.data?.attended_course_info);
        setUnitId(response?.data?.data?.unites[0]?.video_list[0]?.unite_id);
        setCourseId(response?.data?.data?.unites[0]?.video_list[0]?.course_id);
        setWathcedTime(null);
        setVideoTitle(response?.data?.data?.unites[0]?.video_list[0]?.title);
        return true;
      } else if (response?.data?.message === "Error") {
        setLoading(false);
        return false;
      }
    });
  }, []);

  const StartExam = () => {
    setStartExamLoading(true);
    axios("https://chessmafia.com/php/luxgap/App/api/start-exam", {
      method: "POST",
      params: {
        lang_code: userLanguage,
        course_id: id,
      },
      headers: {
        "consumer-access-token": userData?.api_token,
      },
    }).then((response) => {
      if (response?.data?.message === "your course is not finished") {
        toast("your course is not finished yet!", { type: "warning" });
        setStartExamLoading(false);
        return false;
      } else if (response?.data?.status === "Success") {
        setStartExamLoading(false);
        navigate("/exam", {
          state: { id: id, message: response?.data?.message },
        });
        return true;
      } else if (response?.data?.status === "Error") {
        setStartExamLoading(false);
        return false;
      }
    });
  };

  const handlePassData = (
    url,
    unitevideoid,
    uniteId,
    courseid,
    watchedtime,
    videotitle
  ) => {
    setUrl(String(url));
    setUnitVideoId(unitevideoid);
    setUnitId(uniteId);
    setCourseId(courseid);
    setWathcedTime(watchedtime);
    setVideoTitle(videotitle);
  };
  return (
    <div className="relative">
      <MetaTags>
        <title>{t("class")}</title>
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
      {/* -------------------navbar---------------- */}
      <Navbar />

      {/* -------------------Aboutclass-------------------- */}
      <AboutClass
        openAbout={openAbout}
        setOpenAbout={setOpenAbout}
        Url={Url}
        UniteVideoId={UniteVideoId}
        UniteId={UniteId}
        CourseId={CourseId}
        units={units}
        watchedTime={watchedTime}
        courseDetails={courseDetails}
        videoTitle={videoTitle}
        loading={loading}
      />

      {/* --------------buttons for toggle the componetns--------------- */}
      <div className="sm:px-10 px-5">
        <p className="sm:text-4xl text-3xl block font-semibold sm:my-5 ">
          {courseDetails?.course_details?.title}
        </p>
        {/* -------------------buttons-------------- */}
        <div className="flex items-center relative sm:space-x-7 space-x-3 sm:my-7 my-3 text-secondary sm:text-2xl text-xl w-full">
          <button
            className={`font-semibold relative ${
              openVideo && "text-green-400"
            }`}
            onClick={() => {
              setOpenVideo(true);
              setOpenAbout(false);
              setOpenReview(false);
              setOpenHistory(false);
            }}
          >
            {t("Videos")}
            {openVideo && (
              <hr className=" absolute -bottom-4 left-0 h-1 z-10 bg-green-400 w-20" />
            )}
          </button>
          <button
            className={`font-semibold relative ${
              openAbout && "text-green-400"
            }`}
            onClick={() => {
              setOpenVideo(false);
              setOpenAbout(true);
              setOpenReview(false);
              setOpenHistory(false);
            }}
          >
            {t("about")}
            {openAbout && (
              <hr className=" absolute -bottom-4 left-0 h-1 z-10 bg-green-400 w-20" />
            )}
          </button>
          <button
            className={`font-semibold relative ${
              openReview && "text-green-400"
            }`}
            onClick={() => {
              setOpenAbout(false);
              setOpenVideo(false);
              setOpenReview(true);
              setOpenHistory(false);
            }}
          >
            {t("reviews")}

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
              setOpenVideo(false);
              setOpenReview(false);
              setOpenHistory(true);
            }}
          >
            {t("history")}
            {openHistory && (
              <hr className=" absolute -bottom-4 left-0 h-1 z-10 bg-green-400 w-20" />
            )}
          </button>
          <hr className=" absolute -bottom-4 -left-5 h-[2px] bg-green-200 sm:w-96 w-72" />
        </div>
      </div>

      {/* -------------------unit videos-------------------- */}

      {openVideo && (
        <UnitVideos
          units={units}
          loading={loading}
          handlePassData={handlePassData}
        />
      )}
      {/* -------------------About course-------------------- */}
      {openAbout && (
        <AboutCourse
          units={units}
          courseDetails={courseDetails}
          loading={loading}
        />
      )}

      {/* -------------------Reviews-------------------- */}
      {openReview && (
        <Review userReviews={userReviews} loading={loading} course_id={id} />
      )}

      {/* -------------------History-------------------- */}
      {openHistory && (
        <History
          handlePassData={handlePassData}
          courseDetails={courseDetails}
        />
      )}
      {/* start Exam button */}
      <div className="text-center my-10 ">
        <button
          type="button"
          className={`${
            attendedCourseInfo?.is_completed === 0 && "cursor-not-allowed"
          } h-10 active:scale-95 duration-100 ease-in-out transition-all delay-75 w-60 text-gray-500 font-semibold bg-gray-200  text-center rounded-tl-3xl rounded-br-3xl rounded-bl-none rounded-tr-none `}
          disabled={attendedCourseInfo?.is_completed === 0}
          onClick={() => {
            // attendedCourseInfo?.is_completed === 1 &&
            // startExamInfo?.is_completed === 1
            //   ? toast("Exam Is already submitted", { type: "warning" })
            //   : StartExam();
            StartExam();
          }}
        >
          {startExamLoading ? "loading..." : t("start_exam")}
        </button>
        <p className="text-center mt-3 w-2/5 font-normal text-base tracking-wide text-gray-500 mx-auto">
          {t("history_exam_paragraph")}
        </p>
      </div>
      {/* -------------most popular cousrse----------------- */}
      <MostPopularCourse showButton={false} />

      {/* -------------------footer---------------- */}
      <Footer />
    </div>
  );
};

export default Class;
