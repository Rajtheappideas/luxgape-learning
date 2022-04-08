import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import { ArrowRightIcon, StarIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import axios from "axios";
import { useUserContext } from "../../context/usercontext";
import SkeletonLoading from "../SkeletonLoading";

const MostPopularCourse = ({ showButton, showEclipse }) => {
  const [mostPopularCourse, setMostPopularCourse] = useState([]);
  const [loading, setLoading] = useState(false);
  const { userLanguage } = useUserContext();
  const { t } = useTranslation();
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      axios("https://chessmafia.com/php/luxgap/App/api/get-popular-course", {
        method: "POST",
        params: {
          lang_code: userLanguage,
        },
      })
        .then((response) => {
          if (response?.data?.status === "Success") {
            setMostPopularCourse(response?.data?.data);
            setLoading(false);
            return true;
          }
        })
        .catch((err) => {
          console.log(err?.response?.data);
          setLoading(false);
          return false;
        });
    }, 3000);
  }, []);
  return (
    <div className="sm:p-10 p-3 relative">
      {/* ----------------eclipse 1--------------------- */}
      {/* {showEclipse && (
        <div className="absolute -top-32 left-56 w-[300px] h-[300px] blur-[200px] rounded-full bg-pink-300 " />
      )} */}
      {/* ----------------eclipse 2--------------------- */}
      {/* {showEclipse && (
        <div className="absolute bottom-10 -left-40 blur-[200px] w-[300px] h-[300px]  rounded-full bg-pink-300 " />
      )} */}

      <div className="sm:mb-10 mb-5 flex justify-between items-start">
        <p className="font-semibold sm:text-5xl text-3xl">
          {t("most_popular_course")}
        </p>
        {showButton && (
          <Link to="/courses">
            <button
              onClick={ScrollToTop}
              className="text-primary text-center text-2xl tracking-wide cursor-pointer underline font-semibold"
            >
              {t("view_more")}
            </button>
          </Link>
        )}
      </div>
      {/* --------------- main div---------- */}
      <div className="grid xl:grid-cols-3 w-full grid-flow-row md:grid-cols-2 place-items-center items-center lg:gap-2 md:gap-16 gap-y-4">
        {/* --------------Courses div=-------------- */}
        {loading ? (
          <>
            <SkeletonLoading />
            <SkeletonLoading />
            <SkeletonLoading />
          </>
        ) : (
          mostPopularCourse.map((course) => (
            <Link
              to={`/courses/aboutcourse/${course?.course_details?.course_id}`}
              key={course?.id}
            >
              <RoundedDiv onClick={ScrollToTop}>
                <LazyLoadImage
                  src={`https://chessmafia.com/php/luxgap/App/${course?.course_details?.image}`}
                  alt={course?.course_details?.title}
                  className="h-1/2 w-full object-center object-cover rounded-tl-[182px]"
                />
                <div className="p-5 space-y-5">
                  <p className="sm:text-3xl text-2xl font-semibold">
                    {course?.course_details?.title}
                  </p>
                  <p className="text-secondary text-xl font-normal">
                    {course?.course_details?.about}
                  </p>
                  <div className="flex items-start space-x-1">
                    <StarIcon className="w-8 h-8" color="gold" />
                    <StarIcon className="w-8 h-8" color="gold" />
                    <StarIcon className="w-8 h-8" color="gold" />
                    <StarIcon className="w-8 h-8" color="gold" />
                    <StarIcon className="w-8 h-8" color="gold" />
                  </div>
                  <div className="flex items-center space-x-3">
                    <p className="text-secondary">
                      <span className="font-bold text-2xl">
                        ${course?.price}
                      </span>
                      /employee
                    </p>
                    <button className="w-10 h-10 bg-black ">
                      <ArrowRightIcon className="p-2" color="white" />
                    </button>
                  </div>
                </div>
              </RoundedDiv>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default MostPopularCourse;

const RoundedDiv = tw.div`
border relative
rounded-tl-[182px] rounded-tr-0 rounded-br-[182px] rounded-bl-0
 sm:h-[673px] sm:w-[364px] w-auto
 cursor-pointer
 `;
