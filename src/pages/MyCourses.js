import { ArrowRightIcon, StarIcon } from "@heroicons/react/outline";
import axios from "axios";
import tw from "tailwind-styled-components/dist/tailwind";
import React, { useEffect, useState } from "react";
import { MetaTags } from "react-meta-tags";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Footer, Navbar } from "../components";
import { useUserContext } from "../context/usercontext";
import { Link } from "react-router-dom";
import SkeletonLoading from "../components/SkeletonLoading";

const MyCourses = () => {
  const [loading, setLoading] = useState(true);
  const [getMyCourse, setGetMyCourse] = useState([]);

  const { userLanguage, userData } = useUserContext();

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // fetch data on first render
  useEffect(() => {
    setLoading(true);
    axios("https://chessmafia.com/php/luxgap/App/api/get-my-course", {
      method: "POST",
      params: {
        lang_code: userLanguage,
      },
      headers: {
        "consumer-access-token": userData?.api_token,
      },
    }).then((response) => {
      if (response?.data?.status === "Success") {
        setGetMyCourse(response?.data?.data);
        setLoading(false);
        return true;
      } else if (response?.data?.status === "Error") {
        console.log(response?.data);
        setLoading(false);
        return false;
      }
    });
  }, []);
  return (
    <>
      <MetaTags>
        <title>My Courses</title>
      </MetaTags>
      <Navbar />
      <div className="sm:p-10 p-3 w-full">
        {/* ----------------heading-------------- */}
        <h1 className="sm:text-5xl text-3xl font-semibold text-center sm:mb-10 mb-5">
          My Courses
        </h1>
        {/* ------------------------my coursses--------------------- */}
        <div className="grid xl:grid-cols-3 w-full grid-flow-row md:grid-cols-2 place-items-center items-center lg:gap-2 md:gap-16 gap-y-4">
          {loading ? (
            <>
              <SkeletonLoading />
              <SkeletonLoading />
              <SkeletonLoading />
            </>
          ) : (
            getMyCourse.map((course) => (
              <Link
                to={`/class/${course?.course_details?.course_id}`}
                key={course?.id}
              >
                <RoundedDiv onClick={ScrollToTop}>
                  <LazyLoadImage
                    src={`https://chessmafia.com/php/luxgap/App/${course?.course_details?.image}`}
                    alt={course?.course_details?.title}
                    className="h-1/2 w-full object-center rounded-tl-[182px]"
                  />
                  <div className="sm:p-5 p-3 sm:space-y-5 space-y-3">
                    <p className="sm:text-3xl text-2xl font-semibold">
                      {course?.course_details?.title}
                    </p>
                    <p className="text-secondary text-xl font-normal truncate text-ellipsis whitespace-nowrap overflow-hidden w-64">
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
                        <span className="font-bold sm:text-2xl text-xl">
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

      <Footer />
    </>
  );
};

export default MyCourses;

const RoundedDiv = tw.div`
border inline-block
rounded-tl-[182px] rounded-tr-0 rounded-br-[182px] rounded-bl-0
  sm:h-[673px] h-[550px] sm:w-[364px] w-72
cursor-pointer`;
