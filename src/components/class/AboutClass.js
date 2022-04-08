import React, { useState } from "react";
import img from "../../assets/classimg.jpg";
import { FiSkipForward, FiSkipBack } from "react-icons/fi";
import { BsFillPlayCircleFill } from "react-icons/bs";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";


const AboutClass = () => {
  return (
    <div className="sm:p-10 p-3">
      {/* <Link to="/exam"> */}
        {/* -------------------img-------------------------- */}
        <div className="relative bg-black mix-blend-darken overflow-hidden rounded-3xl">
          <ReactPlayer
          url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
          controls
          playing
          width="100%"
          height="600px"
          light
          className="w-full mx-auto object-cover opacity-80 object-center shadow-lg"
        />
          {/* <img
            src={img}
            alt="classimg"
            className="w-full h-full object-cover opacity-50 object-center shadow-lg"
          /> */}
          {/* -----------palyer buttons-------------- */}
          {/* <div className="absolute space-x-7 flex items-center sm:top-[35%] top-[20%] left-1/2 -translate-x-1/2 z-50">
            <button>
              <FiSkipBack color="white" className="sm:h-20 sm:w-10 h-20 w-10" />
            </button>
            <button>
              <BsFillPlayCircleFill color="black" className="sm:h-40 sm:w-20 h-28 w-16" />
            </button>
            <button>
              <FiSkipForward color="white" className="h-40 w-10" />
            </button>
          </div> */}
        </div>
      {/* </Link> */}

      {/* --------------------classs detils-------------------- */}
    </div>
  );
};

export default AboutClass;
