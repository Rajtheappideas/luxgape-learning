import React, { useEffect, useState, useRef } from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import { DownloadIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useUserContext } from "../../context/usercontext";
import axios from "axios";
import ContentLoader from "react-content-loader";
import examIcon from "../../assets/exam-icon.png";
import { Circle, ProgressProps } from "rc-progress";
import { saveAs } from "file-saver";
import Lottie from "react-lottie";
import Loading from "../../assets/animations/3-dots-loading.json";

const CourseHistory = ({ showButton, slice }) => {
  const [courseHistory, setCourseHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [certificateDownloadLoading, setCertificateDownloadLoading] =
    useState(false);

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
          setCourseHistory(
            response?.data?.data.filter(
              (course) => course?.course_details !== null
            )
          );
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

  // percentage from total time to elapsed time
  function totalSeconds(time) {
    var parts = time.split(":");
    return parts[0] * 3600 + parts[1] * 60 + parts[2];
  }
  var timeElapsed = "03:32:00"; // time elapsed
  var totalTime = "04:10:00"; // total time
  var percentage = Math.floor(
    (100 * totalSeconds(timeElapsed)) / totalSeconds(totalTime)
  );
  var totalVideo = 15;
  var watchedvideo = 3;
  var total = Math.floor((watchedvideo * 100) / totalVideo);

  const DownloadCertificate = (id) => {
    const fd = new FormData();
    fd.append("lang_code", userLanguage);
    fd.append("course_id", id);
    setCertificateDownloadLoading(true);
    axios
      .post("https://chessmafia.com/php/luxgap/App/api/get-certificate", fd, {
        headers: {
          Accept: "multipart/form-data",
          // "Content-Type": "application/pdf",
          "consumer-access-token": userData?.api_token,
        },
        // responseType: "blob",
      })
      .then((response) => {
        // if (response?.data?.data?.document === null) return false;
        const json = `https://chessmafia.com/php/luxgap/App/${response?.data?.data?.document}`;
        // const blob = new Blob([json], { type: "application/json" });
        // const href = URL.createObjectURL(blob);
        // const link = document.getElementById("downloadcertificate");
        // if (link) {
        //   link.setAttribute("href", json);
        //   link.setAttribute(
        //     "download",
        //     `https://chessmafia.com/php/luxgap/App/${response?.data?.data?.document}`
        //   );
        // }
        saveAs(json);
        setCertificateDownloadLoading(false);
      });
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      {userData && loading ? (
        <>
          <div className="sm:p-10 p-3 relative sm:mb-10 mb-5 flex justify-between items-start sm:items-center">
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
              // <Link to="/employees">
              //   <button className="text-green-500 bg-green-100 border border-green-400 text-xl cursor-pointer h-auto w-auto px-5 text-center rounded-xl font-semibold">
              //     {t("employee_history")}
              //   </button>
              // </Link>
              <></>
            )}
          </div>
          <div className="grid lg:grid-cols-3 grid-flow-row md:grid-cols-2 gap-x-10 gap-y-5 grid-cols-1 justify-items-center items-center">
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
          </div>
        </>
      ) : courseHistory.length === 0 ? null : (
        <div className=" sm:p-10 p-3 relative">
          {/* --------------heading-------------- */}
          <div className="sm:mb-16 mb-5 flex justify-between items-start sm:items-center">
            <p className="sm:text-5xl text-3xl font-semibold tracking-wide capitalize">
              {t("attend_course_history")}
            </p>
            {showButton ? (
              <Link to="/attendcoursehistory">
                <button className="text-primary sm:text-2xl text-xl cursor-pointer underline font-semibold">
                  {t("view_more")}
                </button>
              </Link>
            ) : (
              // <Link to="/employees">
              //   <button className="text-green-500 bg-green-100 border border-green-400 text-xl cursor-pointer h-auto w-auto px-5 text-center rounded-xl font-semibold">
              //     {t("employee_history")}
              //   </button>
              // </Link>
              <></>
            )}
          </div>

          {/* -------------------course history----------------------- */}
          <div className="grid lg:grid-cols-3 grid-flow-row md:grid-cols-2 gap-x-10 gap-y-5 grid-cols-1 justify-items-center items-center">
            {slice
              ? courseHistory.slice(0, 3).map((course, index) => (
                  <BorderDiv
                    // key={course?.course_details?.course_id}
                    key={course?.id}
                    className={`${
                      course?.total_watch_video_count ===
                      course?.total_video_count
                        ? "border-from"
                        : "border-red-500"
                    }`}
                  >
                    <Link
                      to={`/class/${course?.course_details?.course_id}`}
                      key={course?.id}
                      className="space-y-2"
                    >
                      <img
                        src={`https://chessmafia.com/php/luxgap/App/${course?.course_details?.image}`}
                        alt={course?.course_details?.title}
                        className="w-full h-44 outline-none rounded-tl-[81.5px] rounded-tr-none rounded-br-[81.5px] rounded-bl-none object-center object-fill"
                      />
                      {course?.course_details?.title ? (
                        <p className="font-bold text-2xl tracking-tight truncate text-ellipsis overflow-hidden sm:w-72 w-64">
                          {course?.course_details?.title}
                        </p>
                      ) : (
                        <p className="font-bold text-2xl tracking-tight truncate text-ellipsis overflow-hidden sm:w-72 w-64 h-8"></p>
                      )}
                      <p className="text-gray-400 font-bold">
                        {course?.total_video_count} {t("total_videos")}
                      </p>
                    </Link>
                    {/* -----------------videos and start exam logic conditionally----------------- */}
                    <div className="flex justify-between items-center border-t border-b border-gray-300 py-3">
                      {course?.total_watch_video_count ===
                        course?.total_video_count &&
                      course?.start_exam_info?.is_completed === 0 ? (
                        <p className="font-bold flex">
                          <img src={examIcon} className="h-7 w-7 mr-1" />
                          {t("Start_Exam")}
                        </p>
                      ) : course?.total_watch_video_count ===
                          course?.total_video_count &&
                        course?.start_exam_info?.is_completed === 1 &&
                        course?.start_exam_info?.is_certified === 1 ? (
                        <p className="font-bold text-secondary text-base">
                          {t("Download_Certificate")}
                        </p>
                      ) : course?.total_watch_video_count ===
                          course?.total_video_count &&
                        course?.start_exam_info?.is_completed === 1 &&
                        course?.start_exam_info?.is_certified === 0 ? (
                        <p className="font-bold text-red-500">
                          {t("Uncertified")}
                        </p>
                      ) : (
                        <p className="font-bold text-red-500">
                          {course?.total_watch_video_count} /{" "}
                          {course?.total_video_count}
                          {/* {course?.total_hours
                ? `${course?.total_hours}:00`
                : totalTime} */}
                        </p>
                      )}
                      {course?.total_watch_video_count ===
                        course?.total_video_count &&
                      course?.start_exam_info?.is_completed === 1 &&
                      course?.start_exam_info?.is_certified === 1 ? (
                        <a
                        // href="#"
                        // download="file.pdf"
                        // target="_blank"
                        // id="downloadcertificate"
                        >
                          <button
                            className="active:scale-95 duration-100 ease-in-out transition-all"
                            type="button"
                            onClick={() =>
                              DownloadCertificate(
                                course?.course_details?.course_id
                              )
                            }
                          >
                            {certificateDownloadLoading ? (
                              <Lottie
                                options={defaultOptions}
                                height={20}
                                width={70}
                              />
                            ) : (
                              <DownloadIcon className="h-5 w-5" />
                            )}{" "}
                          </button>
                        </a>
                      ) : course?.total_watch_video_count ===
                          course?.total_video_count &&
                        course?.start_exam_info?.is_completed === 1 &&
                        course?.start_exam_info?.is_certified === 0 ? null : (
                        <Link
                          to={`/class/${course?.course_details?.course_id}`}
                        >
                          <button className="text-red-600 underline font-bold">
                            {t("Resume")}
                          </button>
                        </Link>
                      )}
                    </div>
                    {course?.total_watch_video_count ===
                    course?.total_video_count ? (
                      <div className="flex text-green-600">
                        <p className="rounded-full w-14 px-2 py-3 text-center border-green-500 border-2 h-14 bg-gray-200">
                          100%
                        </p>
                        <div className="flex-col mx-2 font-bold">
                          <span className="block text-xl">100%</span>
                          <span className="block text-sm">{t("Done")}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="flex text-red-600 relative">
                        <div className="absolute top-0 left-0">
                          <Circle
                            percent={
                              Math.floor(
                                (100 * course?.total_watch_video_count) /
                                  course?.total_video_count
                              ) || 0
                            }
                            strokeWidth={5}
                            strokeLinecap="round"
                            strokeColor="red"
                            className="h-14 w-14 inline-block "
                          />
                        </div>
                        <p className="rounded-full text-lg  w-14 px-2 py-3 text-center h-14 bg-gray-200">
                          {Math.floor(
                            (100 * course?.total_watch_video_count) /
                              course?.total_video_count
                          ) || 0}
                          %
                          {/* {Math.floor(
                        (100 * totalSeconds(timeElapsed)) /
                          totalSeconds(`${course?.total_hours}:00`).toString()
                      ) || percentage} */}
                        </p>
                        <div className="flex-col mx-2 text-red-600 font-bold">
                          <span className="block text-xl">
                            {Math.floor(
                              (100 * course?.total_watch_video_count) /
                                course?.total_video_count
                            ) || 0}
                            %
                            {/* {Math.floor(
                              (100 * course?.total_watch_video_count) /
                                totalVideo
                            ) || 0} */}
                            {/* {Math.floor(
                          (100 * totalSeconds(timeElapsed)) /
                            totalSeconds(`${course?.total_hours}:00`).toString()
                        ) || percentage} */}
                          </span>
                          <span className="block text-sm">
                            {/* {timeElapsed === totalTime ? "Done" : "Pending"} */}
                            {course?.total_watch_video_count ===
                            course?.total_video_count
                              ? t("Done")
                              : t("Pending")}
                          </span>
                        </div>
                      </div>
                    )}
                    {course?.booking_info?.payment_method === "Free Course" && (
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
                    )}
                  </BorderDiv>
                ))
              : courseHistory.map((course, index) => (
                  <BorderDiv
                    // key={course?.course_details?.course_id}
                    key={course?.id}
                    className={`${
                      course?.total_watch_video_count ===
                      course?.total_video_count
                        ? "border-from"
                        : "border-red-500"
                    }`}
                  >
                    <Link
                      to={`/class/${course?.course_details?.course_id}`}
                      key={course?.id}
                      className="space-y-2"
                    >
                      <img
                        src={`https://chessmafia.com/php/luxgap/App/${course?.course_details?.image}`}
                        alt={course?.course_details?.title}
                        className="w-full h-44 outline-none rounded-tl-[81.5px] rounded-tr-none rounded-br-[81.5px] rounded-bl-none object-center object-fill"
                      />
                      {course?.course_details?.title ? (
                        <p className="font-bold text-2xl tracking-tight truncate text-ellipsis overflow-hidden sm:w-72 w-64">
                          {course?.course_details?.title}
                        </p>
                      ) : (
                        <p className="font-bold text-2xl tracking-tight truncate text-ellipsis overflow-hidden sm:w-72 w-64 h-8"></p>
                      )}
                      <p className="text-gray-400 font-bold">
                        {course?.total_video_count} {t("total_videos")}
                      </p>
                    </Link>
                    {/* -----------------videos and start exam logic conditionally----------------- */}
                    <div className="flex justify-between items-center border-t border-b border-gray-300 py-3">
                      {course?.total_watch_video_count ===
                        course?.total_video_count &&
                      course?.start_exam_info?.is_completed === 0 &&
                      course?.attended_course_info?.is_completed === 1 ? (
                        <p className="font-bold flex">
                          <img src={examIcon} className="h-7 w-7 mr-1" />
                          {t("Start_Exam")}
                        </p>
                      ) : course?.total_watch_video_count ===
                          course?.total_video_count &&
                        course?.start_exam_info?.is_completed === 1 &&
                        course?.start_exam_info?.is_certified === 1 ? (
                        <p className="font-bold text-secondary text-base">
                          {t("Download_Certificate")}
                        </p>
                      ) : course?.total_watch_video_count ===
                          course?.total_video_count &&
                        course?.start_exam_info?.is_completed === 1 &&
                        course?.start_exam_info?.is_certified === 0 ? (
                        <p className="font-bold text-red-500">
                          {t("Uncertified")}
                        </p>
                      ) : (
                        <p className="font-bold text-red-500">
                          {course?.total_watch_video_count} /{" "}
                          {course?.total_video_count}
                          {/* {course?.total_hours
            ? `${course?.total_hours}:00`
            : totalTime} */}
                        </p>
                      )}
                      {course?.total_watch_video_count ===
                        course?.total_video_count &&
                      course?.start_exam_info?.is_completed === 1 &&
                      course?.start_exam_info?.is_certified === 1 ? (
                        <a
                        // href="https://chessmafia.com/php/luxgap/App/"
                        // href="#"
                        // download="file.pdf"
                        // target="_blank"
                        // id="downloadcertificate"
                        >
                          <button
                            className="active:scale-95 duration-100 ease-in-out transition-all"
                            type="button"
                            onClick={() =>
                              DownloadCertificate(
                                course?.course_details?.course_id
                              )
                            }
                          >
                            {certificateDownloadLoading ? (
                              <Lottie
                                options={defaultOptions}
                                height={20}
                                width={70}
                              />
                            ) : (
                              <DownloadIcon className="h-5 w-5" />
                            )}
                          </button>
                        </a>
                      ) : course?.total_watch_video_count ===
                          course?.total_video_count &&
                        course?.start_exam_info?.is_completed === 1 &&
                        course?.start_exam_info?.is_certified === 0 ? null : (
                        <Link
                          to={`/class/${course?.course_details?.course_id}`}
                        >
                          <button className="text-red-600 underline font-bold">
                            {t("Resume")}
                          </button>
                        </Link>
                      )}
                    </div>
                    {course?.total_watch_video_count ===
                    course?.total_video_count ? (
                      <div className="flex text-green-600">
                        <p className="rounded-full w-14 px-2 py-3 text-center border-green-500 border-2 h-14 bg-gray-200">
                          100%
                        </p>
                        <div className="flex-col mx-2 font-bold">
                          <span className="block text-xl">100%</span>
                          <span className="block text-sm">{t("Done")}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="flex text-red-600 relative">
                        <div className="absolute top-0 left-0">
                          <Circle
                            percent={
                              Math.floor(
                                (100 * course?.total_watch_video_count) /
                                  course?.total_video_count
                              ) || 0
                            }
                            strokeWidth={6}
                            strokeLinecap="round"
                            strokeColor="red"
                            className="h-14 w-14 inline-block"
                          />
                        </div>
                        <p className="rounded-full text-lg  w-14 px-2 py-3 text-center h-14 bg-gray-200">
                          {Math.floor(
                            (100 * course?.total_watch_video_count) /
                              course?.total_video_count
                          ) || 0}
                          %
                          {/* {Math.floor(
                        (100 * totalSeconds(timeElapsed)) /
                          totalSeconds(`${course?.total_hours}:00`).toString()
                      ) || percentage} */}
                        </p>
                        <div className="flex-col mx-2 text-red-600 font-bold">
                          <span className="block text-xl">
                            {Math.floor(
                              (100 * course?.total_watch_video_count) /
                                course?.total_video_count
                            ) || 0}
                            %
                            {/* {Math.floor(
                              (100 * course?.total_watch_video_count) /
                                totalVideo
                            ) || 0} */}
                            {/* {Math.floor(
                          (100 * totalSeconds(timeElapsed)) /
                            totalSeconds(`${course?.total_hours}:00`).toString()
                        ) || percentage} */}
                          </span>
                          <span className="block text-sm">
                            {/* {timeElapsed === totalTime ? "Done" : "Pending"} */}
                            {course?.total_watch_video_count ===
                            course?.total_video_count
                              ? t("Done")
                              : t("Pending")}
                          </span>
                        </div>
                      </div>
                    )}
                    {course?.booking_info?.payment_method === "Free Course" && (
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
                    )}
                  </BorderDiv>
                ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CourseHistory;

const BorderDiv = tw.div`
border-2
rounded-tl-[103px] rounded-tr-0 rounded-br-[119px] rounded-bl-0
 h-[28rem] sm:w-[322px] w-auto
 p-5
 space-y-4
 relative
`;
