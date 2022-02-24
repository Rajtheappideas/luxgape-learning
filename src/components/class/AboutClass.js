import React from "react";
import img from "../../assets/classimg.jpg";
import { FiSkipForward, FiSkipBack } from "react-icons/fi";
import { BsFillPlayCircleFill } from "react-icons/bs";
import ReactPlayer from "react-player";

const AboutClass = () => {
  return (
    <div className="p-10">
      {/* -------------------img-------------------------- */}
      <div className="relative bg-black mix-blend-darken overflow-hidden rounded-3xl">
        {/* <ReactPlayer
          url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
          controls
          playing
          width="100%"
          height="600px"
          light
          className="w-full mx-auto object-cover opacity-80 object-center shadow-lg"
        /> */}
        <img
          src={img}
          alt="classimg"
          className="w-full mx-auto h-screen object-cover opacity-50 object-center shadow-lg"
        />
        <div className="absolute space-x-7 flex items-center top-1/2 left-1/2 -translate-x-1/2 z-50">
          <button>
            <FiSkipBack size={50} color="white" />
          </button>
          <button>
            <BsFillPlayCircleFill size={100} color="black" />
          </button>
          <button>
            <FiSkipForward size={50} color="white" />
          </button>
        </div>
      </div>

      {/* --------------------classs detils-------------------- */}
      <div>
        <p className="text-5xl block font-bold my-5 ">Course Name in Details</p>
        {/* -------------------buttons-------------- */}
        <div className="flex items-center relative my-7 text-secondary text-3xl ">
          <button className="font-bold">About</button>
          <button className="font-bold mx-5">Review</button>
          <button className="font-bold">Discussion</button>
          <hr className="h-1 absolute -bottom-4 left-0  bg-red-600 w-1/3" />
        </div>

        {/* ------------------about course----------------- */}
        <div className="flex overflow-hidden w-full text-xl">
          <div className="w-full space-y-6">
            <span className="font-bold text-2xl">About course</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
          {/* <div className="w-full space-y-6">
            <span className="font-bold text-2xl">About course</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
          <div className="w-full space-y-6">
            <span className="font-bold text-2xl">About course</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutClass;
