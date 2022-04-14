import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import cimg1 from "../../assets/cimg1.jpg";
import cimg2 from "../../assets/cimg2.jpg";
import cimg3 from "../../assets/cimg3.jpg";
import { DocumentTextIcon, DownloadIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useUserContext } from "../../context/usercontext";
import axios from "axios";
import ContentLoader from "react-content-loader";

const data = [
  {
    id: 1,
    img: cimg1,
    title: "Bond Physics",
    hours: "3.2",
    attendedhours: "1:30:49",
    totalhours: "3:22:10",
    percetange: 50,
    certified: false,
    completion: "Pending",
  },
  {
    id: 2,
    img: cimg2,
    title: "Humans Heart",
    hours: "4.2",
    attendedhours: "1:30:49",
    totalhours: "4:22:10",
    percetange: 100,
    certified: true,
    completion: "Done",
  },
  {
    id: 3,
    img: cimg3,
    title: "Bond Physics",
    hours: "4.1",
    attendedhours: "2:30:49",
    totalhours: "4:10:10",
    percetange: 100,
    certified: true,
    completion: "Done",
  },
];
const CourseHistory = ({ showButton }) => {
  const [courseHistory, setCourseHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const { userData, userLanguage } = useUserContext();

  const { t } = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      axios("https://chessmafia.com/php/luxgap/App/api/get-attended-course", {
        method: "POST",
        params: {
          lang_code: userLanguage,
        },
        headers: {
          "consumer-access-token": userData?.api_token,
        },
      }).then((response) => {
        if (response?.data?.status === "Success") {
          setCourseHistory(response?.data?.data);
          setLoading(false);
          return true;
        } else if (response?.data?.status === "Error") {
          console.log(response?.data);
          setLoading(false);
          return false;
        }
      });
    }, 2000);
  }, []);

  var date_future = 15 / 4 / 2022;
  var date_now = new Date().getDate();
  // get total seconds between the times
  var delta = Math.abs(date_future - date_now) / 1000;

  // calculate (and subtract) whole days
  var days = Math.floor(delta / 86400);
  delta -= days * 86400;

  // calculate (and subtract) whole hours
  var hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;

  // calculate (and subtract) whole minutes
  var minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;

  // what's left is seconds
  var seconds = delta % 60; // in theory the modulus is not required
  // console.log(delta.toLocaleString("en-US"));
  return (
    <div className=" sm:p-10 p-3 relative">
      {/* ----------------eclipse---------------- */}
      {/* <div className="absolute -bottom-28 left-0 blur-[200px] w-[300px] h-[300px] rounded-full bg-pink-300 " /> */}

      {/* --------------heading-------------- */}
      <div className="sm:mb-16 mb-5 flex justify-between items-start sm:items-center">
        <p className="sm:text-5xl text-3xl font-semibold tracking-wide">
          {t("attend_course_history")}
        </p>
        {showButton ? (
          <Link to="/attendcoursehistory">
            <button className="text-primary sm:text-2xl text-xl cursor-pointer underline font-semibold">
              {t("view_more")}
            </button>
          </Link>
        ) : (
          <Link to="/employees">
            <button className="text-green-500 bg-green-100 border border-green-400 text-xl cursor-pointer h-auto w-auto px-5 text-center rounded-xl font-semibold">
              {t("employee_history")}
            </button>
          </Link>
        )}
      </div>

      {/* -------------------course history----------------------- */}
      <div className="grid lg:grid-cols-3 grid-flow-row md:grid-cols-2 gap-x-10 gap-y-5 grid-cols-1 justify-items-center items-center">
        {loading ? (
          <>
            <ContentLoader
              speed={1}
              width={374}
              height={374}
              backgroundColor="#efe6e6"
              foregroundColor="#d7bcbc"
              animate
            >
              <rect x="0" y="0" rx="3" ry="3" width="374" height="200" />
              <rect x="0" y="220" rx="3" ry="3" width="260" height="20" />
              <rect x="0" y="260" rx="3" ry="3" width="340" height="30" />
              <rect x="0" y="320" rx="3" ry="3" width="260" height="20" />
            </ContentLoader>
            <ContentLoader
              speed={1}
              width={374}
              height={374}
              backgroundColor="#efe6e6"
              foregroundColor="#d7bcbc"
              animate
            >
              <rect x="0" y="0" rx="3" ry="3" width="374" height="200" />
              <rect x="0" y="220" rx="3" ry="3" width="260" height="20" />
              <rect x="0" y="260" rx="3" ry="3" width="340" height="30" />
              <rect x="0" y="320" rx="3" ry="3" width="260" height="20" />
            </ContentLoader>
            <ContentLoader
              speed={1}
              width={374}
              height={374}
              backgroundColor="#efe6e6"
              foregroundColor="#d7bcbc"
              animate
            >
              <rect x="0" y="0" rx="3" ry="3" width="374" height="200" />
              <rect x="0" y="220" rx="3" ry="3" width="260" height="20" />
              <rect x="0" y="260" rx="3" ry="3" width="340" height="30" />
              <rect x="0" y="320" rx="3" ry="3" width="260" height="20" />
            </ContentLoader>
          </>
        ) : (
          courseHistory.slice(0,3).map((course) => (
            <BorderDiv
              key={course?.course_details?.course_id}
              className={`${
                course.percetange === 100 ? "border-from" : "border-red-500"
              }`}
            >
              <img
                src={`https://chessmafia.com/php/luxgap/App/${course?.course_details?.image}`}
                alt={course?.course_details?.title}
                className="w-full h-44 rounded-tl-[81.5px] rounded-tr-none rounded-br-[81.5px] rounded-bl-none object-center object-fill"
              />
              <p className="font-bold text-2xl tracking-tight">
                {course?.course_details?.title}
              </p>
              <p className="text-gray-400 font-bold">
                {/* {course.hours} */}
                4.1 hours video
              </p>
              <div className="flex justify-between items-center border-t border-b border-gray-300 py-3">
                {course.certified ? (
                  <p className="font-bold flex">
                    <DocumentTextIcon className="h-5 w-5 mr-1" color="gray" />
                    Certified
                  </p>
                ) : (
                  <p className="font-bold text-red-500">2:30:49 / 4:22:10</p>
                )}
                {course.certified ? (
                  <button>
                    <DownloadIcon className="h-5 w-5" />
                  </button>
                ) : (
                  <button className="text-red-600 underline font-bold">
                    Resume
                  </button>
                )}
              </div>
              {course.certified ? (
                <div className="flex text-green-600">
                  <p className="rounded-full w-14 px-2 py-3 text-center h-14 border-2 bg-gray-200 border-green-600">
                    100%
                  </p>
                  <div className="flex-col mx-2 font-bold">
                    <span className="block text-xl">100%</span>
                    <span className="block text-sm">Done</span>
                  </div>
                </div>
              ) : (
                <div className="flex text-red-600">
                  <p className="rounded-full  w-14 px-2 py-3 text-center h-14  border-b-2 bg-gray-200 border-red-600">
                    {course.percetange}%
                  </p>
                  <div className="flex-col mx-2 text-red-600 font-bold">
                    <span className="block text-xl">{course.percetange}%</span>
                    <span className="block text-sm">{course.completion}</span>
                  </div>
                </div>
              )}
              <div className="absolute -top-10 sm:-right-7 -right-5 transform -rotate-45">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="74"
                  height="74"
                  viewBox="0 0 172 172"
                >
                  <g
                    fill="none"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                  >
                    <path d="M0,172v-172h172v172z" fill="none"></path>
                    <g fill="#e74c3c">
                      <path d="M86.00197,8.90234l-20.26714,14.72417h-25.05096l-7.74034,23.82466l-20.26714,14.72417l7.74034,23.82466l-7.74034,23.82466l20.26714,14.72417l7.74034,23.82466h25.05096l20.26714,14.72417l20.2632,-14.72417h25.05096l7.74362,-23.82466l20.26385,-14.72417l-7.74034,-23.82466l7.74034,-23.82466l-20.26385,-14.72417l-7.74362,-23.82466h-25.05096z"></path>
                    </g>
                    <g fill="#ffffff">
                      <path d="M61.38,84.075v3.68h-14.32v15.07h-4.5v-34.12h21.14v3.7h-16.64v11.67zM80.06,77.325v4.03c-0.65333,-0.10667 -1.36333,-0.16 -2.13,-0.16v0c-2.84667,0 -4.77667,1.21 -5.79,3.63v0v18h-4.34v-25.36h4.22l0.07,2.93c1.42667,-2.26667 3.44333,-3.4 6.05,-3.4v0c0.84,0 1.48,0.11 1.92,0.33zM94.12,103.295v0c-3.43333,0 -6.23,-1.13 -8.39,-3.39c-2.15333,-2.25333 -3.23,-5.27333 -3.23,-9.06v0v-0.79c0,-2.52 0.48,-4.76667 1.44,-6.74c0.96,-1.98 2.30333,-3.52667 4.03,-4.64c1.72667,-1.12 3.59667,-1.68 5.61,-1.68v0c3.3,0 5.86333,1.08667 7.69,3.26c1.82667,2.17333 2.74,5.28333 2.74,9.33v0v1.8h-17.18c0.06667,2.5 0.8,4.52 2.2,6.06c1.39333,1.54 3.17,2.31 5.33,2.31v0c1.52667,0 2.82333,-0.31333 3.89,-0.94c1.06,-0.62667 1.99,-1.45333 2.79,-2.48v0l2.65,2.06c-2.12667,3.26667 -5.31667,4.9 -9.57,4.9zM93.58,80.555v0c-1.74667,0 -3.21333,0.63667 -4.4,1.91c-1.18667,1.27333 -1.92,3.06 -2.2,5.36v0h12.7v-0.33c-0.12667,-2.2 -0.72,-3.90667 -1.78,-5.12c-1.06667,-1.21333 -2.50667,-1.82 -4.32,-1.82zM119.55,103.295v0c-3.43333,0 -6.23,-1.13 -8.39,-3.39c-2.15333,-2.25333 -3.23,-5.27333 -3.23,-9.06v0v-0.79c0,-2.52 0.48,-4.76667 1.44,-6.74c0.96,-1.98 2.30333,-3.52667 4.03,-4.64c1.72667,-1.12 3.59667,-1.68 5.61,-1.68v0c3.3,0 5.86333,1.08667 7.69,3.26c1.82667,2.17333 2.74,5.28333 2.74,9.33v0v1.8h-17.18c0.06667,2.5 0.8,4.52 2.2,6.06c1.39333,1.54 3.17,2.31 5.33,2.31v0c1.52667,0 2.82333,-0.31333 3.89,-0.94c1.06,-0.62667 1.99,-1.45333 2.79,-2.48v0l2.65,2.06c-2.12667,3.26667 -5.31667,4.9 -9.57,4.9zM119.01,80.555v0c-1.74667,0 -3.21333,0.63667 -4.4,1.91c-1.18667,1.27333 -1.92333,3.06 -2.21,5.36v0h12.71v-0.33c-0.12667,-2.2 -0.72,-3.90667 -1.78,-5.12c-1.06667,-1.21333 -2.50667,-1.82 -4.32,-1.82z"></path>
                    </g>
                  </g>
                </svg>
              </div>
            </BorderDiv>
          ))
        )}
      </div>
    </div>
  );
};

export default CourseHistory;

const BorderDiv = tw.div`
border-2
rounded-tl-[103px] rounded-tr-0 rounded-br-[119px] rounded-bl-0
 h-[434px] sm:w-[322px] w-auto
 p-5
 space-y-4
 relative
`;
