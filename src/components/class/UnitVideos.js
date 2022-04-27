import React from "react";
import { ClockIcon, PlayIcon } from "@heroicons/react/solid";
import { GiCircle } from "react-icons/gi";
import ContentLoader from "react-content-loader";

const UnitVideos = ({ units, handlePassData, loading }) => {
  return (
    <>
      <div className="sm:px-10 px-3">
        {loading ? (
          <ContentLoader
            speed={1}
            backgroundColor="#efe6e6"
            foregroundColor="#d7bcbc"
            animate
            className="sm:w-full w-72 h-80 grid lg:grid-cols-3 md:grid-cols-2 place-items-center items-start gap-5"
          >
            <rect x="20" y="20" rx="3" ry="3" width="400" height="20" />
            <rect x="20" y="50" rx="3" ry="3" width="400" height="20" />
            <rect x="20" y="80" rx="3" ry="3" width="400" height="20" />
            <rect x="20" y="120" rx="3" ry="3" width="300" height="200" />
            <rect x="450" y="120" rx="3" ry="3" width="300" height="200" />
            <rect x="900" y="120" rx="3" ry="3" width="300" height="200" />
          </ContentLoader>
        ) : (
          units?.map((unit, index) => (
            <div key={index}>
              {/* ----------------course details and units--------- */}
              <div className="flex md:flex-row flex-col items-start w-full py-5 last:border-b-0">
                {/* ---------------left side heading-------------- */}
                <div className="flex items-start space-x-5">
                  <div className="flex items-start flex-col">
                    <p className="text-2xl flex items-center tracking-normal font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-to to-from">
                      <GiCircle className="h-3 w-3 bg-gradient-to-br from-to to-from rounded-full mr-2" />
                      {index + 1} Unit : {unit?.unite_info?.unite_title}
                    </p>
                    <p className="flex font-semibold text-secondary sm:my-2">
                      <ClockIcon className="w-6 h-6 mr-2" color="orange" />
                      {unit?.video_list.length} Video Lectures
                      <span className="text-secondary font-bold text-base sm:ml-1">
                        ({unit?.hours} hours)
                      </span>
                    </p>
                    <p className="font-light text-lg">
                      {unit?.unite_info?.about}
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 place-items-start items-start gap-5 py-5 border-b border-[#c4c4c4]">
                {unit.video_list.map((video, index) => (
                  <div
                    key={index}
                    className="cursor-pointer"
                    onClick={() =>
                      handlePassData(
                        video.video,
                        video?.unite_video_id,
                        video?.unite_id,
                        video?.course_id
                      )
                    }
                  >
                    <div className="relative mix-blend-darken rounded-xl bg-black overflow-hidden">
                      <iframe
                        src={
                          `https://chessmafia.com/php/luxgap/App/${video?.video}?autoplay="false"` ||
                          null
                        }
                        alt="courseimage"
                        className="h-48 object-center w-full object-cover opacity-70 "
                      />
                      <PlayIcon
                        className="h-14 text-center absolute top-[40%] left-1/2 -translate-x-1/2 "
                        color="white"
                      />
                    </div>
                    <p className="font-medium text-lg">
                      <span className="mx-1 text-xl">
                        {index + 1}.{" "}
                        <span className="sm:ml-2 text-lg">title</span>
                      </span>
                    </p>
                    <p className="font-light text-xl">{video?.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default UnitVideos;
