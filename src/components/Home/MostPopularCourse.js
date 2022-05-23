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
  const [loading, setLoading] = useState(true);
  const { userLanguage } = useUserContext();
  const { t } = useTranslation();
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    setLoading(true);
    axios("https://chessmafia.com/php/luxgap/App/api/get-popular-course", {
      method: "POST",
      params: {
        lang_code: userLanguage,
      },
    })
      .then((response) => {
        if (response?.data?.status === "Success") {
          // setMostPopularCourse(response?.data?.data);
          setMostPopularCourse(
            response?.data?.data.filter(
              (course) => course?.course_details !== null
            )
          );
          setLoading(false);
        }
      })
      .catch((err) => {
        if (err?.response?.data?.status === "Error") {
          window.location.reload();
          setLoading(false);
        }
      });
  }, []);

  return (
    <>
      {loading ? (
        <>
          <div className="sm:p-10 p-3 relative sm:mb-5 mb-5 flex justify-between items-start">
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
          <div className="grid xl:grid-cols-3 w-full grid-flow-row md:grid-cols-2 place-items-center items-center lg:gap-2 md:gap-16 gap-y-4">
            <SkeletonLoading />
            <SkeletonLoading />
            <SkeletonLoading />
          </div>
        </>
      ) : mostPopularCourse.length === 0 ? null : (
        <div className="sm:p-10 p-3 relative">
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
              mostPopularCourse.slice(0, 6).map((course) => (
                <Link
                  to={`/courses/aboutcourse/${course?.course_details?.course_id}`}
                  key={course?.id}
                >
                  <RoundedDiv onClick={ScrollToTop}>
                    <LazyLoadImage
                      src={
                        `https://chessmafia.com/php/luxgap/App/${course?.course_details?.image}` ||
                        null
                      }
                      alt={course?.course_details?.title}
                      className="h-1/2 w-full object-center rounded-tl-[182px]"
                    />
                    <div className="sm:p-5 p-3 sm:space-y-5 space-y-3">
                      <p className="sm:text-3xl text-2xl font-semibold truncate text-ellipsis whitespace-nowrap overflow-hidden sm:w-80 w-64">
                        {course?.course_details?.title}
                      </p>
                      <p className="text-secondary text-xl font-normal truncate text-ellipsis whitespace-nowrap overflow-hidden sm:w-72 w-64">
                        {course?.course_details?.about}
                      </p>
                      {/* --------------reviews in star----------- */}
                      {course?.review_info_count === null ? null : parseInt(
                          course?.review_info_count
                        ) === 5 ? (
                        <div className="flex items-start space-x-1">
                          <StarIcon className="w-8 h-8" color="gold" />
                          <StarIcon className="w-8 h-8" color="gold" />
                          <StarIcon className="w-8 h-8" color="gold" />
                          <StarIcon className="w-8 h-8" color="gold" />
                          <StarIcon className="w-8 h-8" color="gold" />
                        </div>
                      ) : parseInt(course?.review_info_count) === 4 ? (
                        <div className="flex items-start space-x-1">
                          <StarIcon className="w-8 h-8" color="gold" />
                          <StarIcon className="w-8 h-8" color="gold" />
                          <StarIcon className="w-8 h-8" color="gold" />
                          <StarIcon className="w-8 h-8" color="gold" />
                        </div>
                      ) : parseInt(course?.review_info_count) === 3 ? (
                        <div className="flex items-start space-x-1">
                          <StarIcon className="w-8 h-8" color="gold" />
                          <StarIcon className="w-8 h-8" color="gold" />
                          <StarIcon className="w-8 h-8" color="gold" />
                        </div>
                      ) : parseInt(course?.review_info_count) === 2 ? (
                        <div className="flex items-start space-x-1">
                          <StarIcon className="w-8 h-8" color="gold" />
                          <StarIcon className="w-8 h-8" color="gold" />
                        </div>
                      ) : parseInt(course?.review_info_count) === 1 ? (
                        <div className="flex items-start space-x-1">
                          <StarIcon className="w-8 h-8" color="gold" />
                        </div>
                      ) : (
                        parseInt(course?.review_info_count) <= 0 && (
                          <div className="flex items-start space-x-1">
                            <StarIcon className="w-8 h-8" color="gold" />
                          </div>
                        )
                      )}
                      <div className="flex items-center space-x-3">
                        <p className="text-secondary">
                          <span className="font-bold sm:text-2xl text-xl">
                            ${course?.price}
                          </span>
                          {/* /employee */}
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
      )}
    </>
  );
};

export default MostPopularCourse;

const RoundedDiv = tw.div`
border relative inline-block 
rounded-tl-[182px] rounded-tr-0 rounded-br-[182px] rounded-bl-0
  sm:h-[673px] h-[550px] sm:w-[364px] w-72
cursor-pointer`;
