import React, { useState } from "react";
import img from "../../assets/classimg.jpg";
import { FiSkipForward, FiSkipBack } from "react-icons/fi";
import { BsFillPlayCircleFill } from "react-icons/bs";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const AboutClass = () => {
  return (
    <div className="p-10">
      <Link to="/exam">
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
          {/* -----------palyer buttons-------------- */}
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
      </Link>

      {/* --------------------classs detils-------------------- */}
    </div>
  );
};

export default AboutClass;
