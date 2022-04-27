import React from "react";
import { PlayIcon } from "@heroicons/react/solid";
import img from "../../assets/cimg3.jpg";

const Videos = ({ units }) => {
  return (
    <div className="w-full grid sm:gap-x-16 gap-y-5 lg:grid-cols-3 md:grid-cols-2 place-items-center grid-flow-row sm:p-10 p-3">
      {units.map((unit) => (
        <div key={unit?.id}>
          <div className="relative mix-blend-darken rounded-xl bg-black overflow-hidden">
            <img
              src={img}
              alt="courseimage"
              className="h-48 object-center w-full object-cover opacity-70 "
            />
            <PlayIcon
              className="h-14 text-center absolute top-[40%] left-1/2 -translate-x-1/2 "
              color="white"
            />
          </div>
          <p className="font-bold text-xl">{unit?.unite_info?.unit_title}</p>
          <p className="font-normal text-lg">{unit?.unite_info?.about}</p>
        </div>
      ))}
    </div>
  );
};

export default Videos;
