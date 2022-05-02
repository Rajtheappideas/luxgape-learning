import React, { useRef, useState, useEffect } from "react";
import {
  PauseIcon,
  PlayIcon,
  FastForwardIcon,
  RewindIcon,
} from "@heroicons/react/outline";
import ReactPlayer from "react-player";
import { toast } from "react-toastify";
import axios from "axios";
import { useUserContext } from "../../context/usercontext";
import moment from "moment";

const AboutClass = ({
  Url,
  UniteVideoId,
  UniteId,
  CourseId,
  watchedTime,
  videoTitle,
}) => {
  const [playing, setPlaying] = useState(false);
  const [played, setPlayed] = useState(
    watchedTime || JSON.parse(localStorage.getItem("playedSeconds"))
  );
  const [showButtons, setShowButtons] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [getVideoTotalTime, setGetVideoTotalTime] = useState(null);
  const { userLanguage, userData } = useUserContext();

  function convertSeconds(seconds) {
    var convert = function (x) {
      return x < 10 ? "0" + x : x;
    };
    return (
      convert(parseInt(seconds / (60 * 60))) +
      ":" +
      convert(parseInt((seconds / 60) % 60)) +
      ":" +
      convert(seconds % 60)
    );
  }
  const playerRef = useRef(null);
  const handlePlayPause = () => {
    setPlaying(!playing);
  };
  const handleFastForward = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10);
  };
  const handleRewind = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10);
  };
  const handleProgress = (seconds) => {
    setPlayed(convertSeconds(seconds.playedSeconds.toFixed(0)));
  };
  const handlePlay = () => {
    setPlaying(true);
    setGetVideoTotalTime(
      convertSeconds(playerRef.current.getDuration().toFixed(0))
    );

    axios("https://chessmafia.com/php/luxgap/App/api/start-video", {
      method: "POST",
      params: {
        lang_code: userLanguage,
        video_id: UniteVideoId,
        unit_id: UniteId,
        course_id: CourseId,
        total_video_time: getVideoTotalTime,
        watching_date: moment().format("l"),
        watched_time: JSON.parse(localStorage.getItem("playedSeconds")),
      },
      headers: {
        "consumer-access-token": userData?.api_token,
      },
    }).then((response) => {
      if (response?.data?.status === "Success") {
        console.log(response?.data?.data);
      } else if (response?.data?.status === "Error") {
        toast("Somthing Went Wrong!!", { type: "error" });
        console.log(response?.data);
      }
    });
  };
  const handlePause = () => {
    setPlaying(false);
    setGetVideoTotalTime(
      convertSeconds(playerRef.current.getDuration().toFixed(0))
    );
    axios("https://chessmafia.com/php/luxgap/App/api/start-video", {
      method: "POST",
      params: {
        lang_code: userLanguage,
        video_id: UniteVideoId,
        unit_id: UniteId,
        course_id: CourseId,
        total_video_time: getVideoTotalTime,
        watching_date: moment().format("l"),
        watched_time: JSON.parse(localStorage.getItem("playedSeconds")),
      },
      headers: {
        "consumer-access-token": userData?.api_token,
      },
    }).then((response) => {
      if (response?.data?.status === "Success") {
        console.log(response?.data?.data);
      } else if (response?.data?.status === "Error") {
        console.log(response?.data);
      }
    });
  };
  const handleReady = () => {
    setIsReady(true);
    setGetVideoTotalTime(
      convertSeconds(playerRef.current.getDuration().toFixed(0))
    );
  };
  useEffect(() => {
    localStorage.setItem("playedSeconds", JSON.stringify(played));
  }, [played]);
  useEffect(() => {
    // if (JSON.parse(localStorage.getItem("playedSeconds")) === null)
    if (watchedTime === null || watchedTime === undefined) return false;
    const [hours, minutes, seconds] = watchedTime.split(":");
    const totalSeconds = +hours * 60 * 60 + +minutes * 60 + +seconds;
    playerRef.current.seekTo(totalSeconds);
    // setWathcedTime(watchedTime)
  }, [watchedTime]);

  return (
    <div className="sm:p-10 p-3">
      {/* -------------------img-------------------------- */}
      <div
        onMouseOver={() => setShowButtons(true)}
        onMouseLeave={() => setShowButtons(false)}
        className="relative bg-black mix-blend-darken overflow-hidden rounded-3xl md:h-screen h-80 border border-gray-300"
      >
        <ReactPlayer
          url={`https://chessmafia.com/php/luxgap/App/${Url}`}
          ref={playerRef}
          controls={true}
          playing={playing}
          width="100%"
          height="100%"
          light={false}
          onPause={handlePause}
          onPlay={handlePlay}
          onProgress={handleProgress}
          onError={(e) => {
            console.log("onError", e);
            toast("somthing went wrong !!!", {
              type: "warning",
            });
          }}
          onReady={handleReady}

          // onDuration={this.handleDuration}
        />

        {/* -----------palyer buttons-------------- */}
        {showButtons && (
          <>
            <div className="absolute top-8 left-14 z-50 text-white text-3xl">
              <span>{UniteVideoId}.</span> {videoTitle}
            </div>
            <div className="absolute space-x-7 flex items-center sm:top-[35%] top-[20%] left-1/2 -translate-x-1/2 z-50">
              <button
                type="button"
                onClick={() => handleRewind()}
                className="active:scale-95 active:shadow-black duration-100 transition-all ease-in-out"
              >
                <RewindIcon
                  color="white"
                  className="sm:h-20 sm:w-10 h-20 w-10"
                />
              </button>
              {playing ? (
                <button type="button" onClick={() => handlePlayPause()}>
                  <PauseIcon
                    color="white"
                    className="sm:h-40 sm:w-20 h-28 w-16"
                  />
                </button>
              ) : (
                <button type="button" onClick={() => handlePlayPause()}>
                  <PlayIcon
                    color="white"
                    className="sm:h-40 sm:w-20 h-28 w-16"
                  />
                </button>
              )}
              <button type="button" onClick={() => handleFastForward()}>
                <FastForwardIcon color="white" className="h-40 w-10" />
              </button>
            </div>
          </>
        )}
      </div>
      {/* </Link> */}

      {/* --------------------classs detils-------------------- */}
    </div>
  );
};

export default AboutClass;
