import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { MetaTags } from "react-meta-tags";
import { Link, useParams } from "react-router-dom";
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

  const { id } = useParams();
  const { userLanguage, userData } = useUserContext();

  const { t } = useTranslation();

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
      },
    }).then((response) => {
      if (response?.data?.status === "Success") {
        setCourseDetails(response?.data?.data);
        setUnits(response?.data?.data?.unites);
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
      if (response?.data?.status === "Success") {
        toast("course is started", { type: "success" });
        setLoading(false);
        return true;
      } else if (response?.data?.status === "Error") {
        toast("course is already started", { type: "warning" });
        setLoading(false);
        return false;
      }
    });
  }, []);
  // console.log(courseDetails);
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
      <AboutClass openAbout={openAbout} setOpenAbout={setOpenAbout} />

      {/* --------------buttons for toggle the componetns--------------- */}
      <div className="sm:px-10 px-5">
        <p className="sm:text-5xl text-3xl block font-semibold sm:my-5 ">
          Course Name in Details
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
      {openVideo && <UnitVideos />}
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
      {openHistory && <History />}

      {/* -------------most popular cousrse----------------- */}
      <MostPopularCourse showButton={false} />

      {/* -------------------footer---------------- */}
      <Footer />
    </div>
  );
};

export default Class;
