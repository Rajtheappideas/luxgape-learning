import React, { useEffect, useState } from "react";
import { MetaTags } from "react-meta-tags";
import {
  Footer,
  Navbar,
  WhatOurEmployerSay,
  MostPopularCourses,
  SearchBoxAndFilter,
} from "../components";
import { useTranslation } from "react-i18next";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useUserContext } from "../context/usercontext";
import { useLocation } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation();

  const { state } = useLocation();

  const { userLanguage } = useUserContext();

  // fetch data when page loads up first time
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios("https://chessmafia.com/php/luxgap/App/api/get-course-list", {
        method: "POST",
        params: {
          lang_code: userLanguage,
        },
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response?.data?.status === "Success") {
            setCourses(
              response?.data?.data.filter(
                (course) => course?.course_details !== null
              )
            );
            setLoading(false);
            return true;
          }
        })
        .catch((err) => {
          if (err?.response?.data?.status === "Error") {
            console.log("error ->", err?.response?.data);
            setLoading(false);
            return false;
          }
        });
    }, 2000);
    if (state === null) return false;
  }, []);
  return (
    <div className="bg-bgblank relative">
      <MetaTags>
        <title>{t("Course")}</title>
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
      {/* -----------------------eclipse 1-------------- */}
      {/* <div className="absolute top-1/2 left-0 -z-10 blur-[200px] w-[300px] h-[300px] rounded-full bg-pink-300 " /> */}
      {/* -----------------------eclipse 2-------------- */}
      {/* <div className="absolute top-1/4 left-0 -z-10 blur-[200px] w-[300px] h-[300px] rounded-full bg-blue-300 " /> */}
      {/* -----------------------eclipse 3-------------- */}
      {/* <div className="absolute top-3/4 right-0 -z-10 blur-[200px] w-[300px] h-[300px] rounded-full bg-blue-300 " /> */}
      {/* -----------------------eclipse 4-------------- */}
      {/* <div className="absolute top-80 right-0 -z-10 blur-[200px] w-[300px] h-[300px] rounded-full bg-blue-300 " /> */}

      {/* -------------------navbar=------------------ */}
      <Navbar activeText="Course" />

      {/* -----------------search input & filters------------------ */}
      {/* <SearchBoxAndFilter
        handleSearchCourse={handleSearchCourse}
        setSearchCourse={setSearchCourse}
        setRating={setRating}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
        setCategoriesId={setCategoriesId}
        rating={rating}
        handleFilterCourse={handleFilterCourse}
        categoriesId={categoriesId}
        minPrice={minPrice}
        maxPrice={maxPrice}
      /> */}

      {/* -------------most popular cousrse----------------- */}
      <MostPopularCourses
        courses={courses}
        loading={loading}
        state={state}
        // searchCourse={searchCourse}
        // setSearchCourse={setSearchCourse}
        // setRating={setRating}
        // setMinPrice={setMinPrice}
        // setMaxPrice={setMaxPrice}
        // setCategoriesId={setCategoriesId}
        // rating={rating}
        // categoriesId={categoriesId}
        // minPrice={minPrice}
        // maxPrice={maxPrice}
      />

      {/* ------------------------WhatOurEmployerSay--------------------------- */}
      <WhatOurEmployerSay />

      {/* ----------------------------------foooter---------------------------- */}
      <Footer />
    </div>
  );
};

export default Courses;
