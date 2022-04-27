import { PlayIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import img from "../../assets/cimg3.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import axios from "axios";
import { useUserContext } from "../../context/usercontext";
import ContentLoader from "react-content-loader";
import { toast } from "react-toastify";

const History = ({ handlePassData }) => {
  const [courseHistory, setCourseHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  const { userLanguage, userData } = useUserContext();

  useEffect(() => {
    setLoading(true);
    axios("https://chessmafia.com/php/luxgap/App/api/get-video-history", {
      method: "POST",
      params: {
        lang_code: userLanguage,
        course_id: 1,
      },
      headers: {
        // "consumer-access-token": "gGvQAS3rh5vSDB1fBc2g",
        "consumer-access-token": userData?.api_token,
      },
    }).then((response) => {
      if (response?.data?.status === "Success") {
        setCourseHistory(response?.data?.data);
        setLoading(false);
      } else if (response?.data?.status === "Error") {
        toast("somthing went wrong!!", { type: "error" });
        window.location.reload();
        setLoading(false);
      }
    });
  }, []);
  return (
    <>
      <div className="grid sm:gap-x-16 gap-y-5 lg:grid-cols-3 md:grid-cols-2 place-items-center grid-flow-row sm:p-10 p-3">
        {loading ? (
          <>
            <ContentLoader
              speed={1}
              backgroundColor="#efe6e6"
              foregroundColor="#d7bcbc"
              animate
              className="sm:w-full w-72 h-60"
            >
              <rect x="0" y="0" rx="3" ry="3" width="300" height="200" />
            </ContentLoader>
            <ContentLoader
              speed={1}
              backgroundColor="#efe6e6"
              foregroundColor="#d7bcbc"
              animate
              className="sm:w-full w-72 h-60"
            >
              <rect x="0" y="0" rx="3" ry="3" width="300" height="200" />
            </ContentLoader>
            <ContentLoader
              speed={1}
              backgroundColor="#efe6e6"
              foregroundColor="#d7bcbc"
              animate
              className="sm:w-full w-72 h-60"
            >
              <rect x="0" y="0" rx="3" ry="3" width="300" height="200" />
            </ContentLoader>
          </>
        ) : (
          courseHistory.map((unites, index) => (
            <div
              key={unites.id}
              className="cursor-pointer"
              onClick={() =>
                handlePassData(
                  unites?.video_list?.video,
                  unites?.course_id,
                  unites?.unit_id,
                  unites?.video_list?.unite_video_id,
                  unites?.watched_time
                )
              }
            >
              <div className="relative mix-blend-darken rounded-xl bg-black overflow-hidden">
                <iframe
                  src={
                    `https://chessmafia.com/php/luxgap/App/${unites?.video_list?.video}?autoplay='false'` ||
                    null
                  }
                  className="h-48 object-center w-full object-cover opacity-70 "
                />

                <PlayIcon
                  className="h-14 text-center absolute top-[40%] left-1/2 -translate-x-1/2 "
                  color="white"
                />
              </div>
              <p className="font-bold text-xl ml-2">
                {index + 1}. {courseHistory.title}title
              </p>
              <p className="font-normal text-lg">
                {/* {unites?.video_list?.description} */}
              </p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default History;
