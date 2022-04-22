import React, { useRef, useState } from "react";
import {
  PauseIcon,
  PlayIcon,
  FastForwardIcon,
  RewindIcon,
} from "@heroicons/react/outline";
import ReactPlayer from "react-player";
import { toast } from "react-toastify";

const AboutClass = () => {
  const [playing, setPlaying] = useState(false);
  const [played, setPlayed] = useState(0);
  const [url, setUrl] = useState(null);
  const [showButtons, setShowButtons] = useState(false);

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
  };
  const handlePause = () => {
    setPlaying(false);
  };
  return (
    <div className="sm:p-10 p-3">
      {/* <Link to="/exam"> */}
      {/* -------------------img-------------------------- */}
      <div
        onMouseOver={() => setShowButtons(true)}
        onMouseLeave={() => setShowButtons(false)}
        className="relative bg-black mix-blend-darken overflow-hidden rounded-3xl md:h-screen h-80 border border-gray-300"
      >
        <ReactPlayer
          url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
          // url="https://www.youtube.com/watch?v=OLcnr8eNo&list=PL4OKShK9gkQca9QVqmnPMzT6QYM2LHaqt&index=5"
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
          // onDuration={this.handleDuration}
        />

        {/* -----------palyer buttons-------------- */}
        {showButtons && (
          <div className="absolute space-x-7 flex items-center sm:top-[35%] top-[20%] left-1/2 -translate-x-1/2 z-50">
            <button
              type="button"
              onClick={() => handleRewind()}
              className="active:scale-95 active:shadow-black duration-100 transition-all ease-in-out"
            >
              <RewindIcon color="white" className="sm:h-20 sm:w-10 h-20 w-10" />
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
                <PlayIcon color="white" className="sm:h-40 sm:w-20 h-28 w-16" />
              </button>
            )}
            <button type="button" onClick={() => handleFastForward()}>
              <FastForwardIcon color="white" className="h-40 w-10" />
            </button>
          </div>
        )}
      </div>
      {/* </Link> */}

      {/* --------------------classs detils-------------------- */}
    </div>
  );
};

export default AboutClass;
