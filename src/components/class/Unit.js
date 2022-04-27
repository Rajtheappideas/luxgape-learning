import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { GiCircle } from "react-icons/gi";
import Videos from "./Videos";

const Unit = ({ index, units, ...unit }) => {
  const [unitOpen, setUnitOpen] = useState(false);

  return (
    <div
      onClick={() => setUnitOpen(!unitOpen)}
      className="border-b border-[#c4c4c4] cursor-pointer"
    >
      {/* ----------------course details and units--------- */}
      <div className="flex md:flex-row flex-col justify-center items-start w-full border-b py-10 border-[#c4c4c4] last:border-b-0">
        {/* ---------------left side heading-------------- */}
        <div className="w-2/4">
          <p className="text-2xl flex items-center tracking-normal font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-to to-from">
            <GiCircle className="h-3 w-3 bg-gradient-to-br from-to to-from rounded-full mr-2" />
            {index + 1} Unit
          </p>
          <p className="font-bold text-secondary text-base sm:ml-3">
            {unit?.hours} hours
          </p>
        </div>

        {/* --------------course details---------------- */}
        <div className="w-full space-y-5">
          {/* ---------------course title ---------------- */}
          <div className="flex justify-between items-start">
            <p className="font-bold sm:text-3xl text-xl tracking-wide">
              Course: {unit?.unite_info?.unite_title}
            </p>
            {unitOpen ? (
              <ChevronUpIcon className="h-10" />
            ) : (
              <ChevronDownIcon className="h-10" />
            )}
          </div>

          {/* --------------------course deacription----------------- */}
          <p className="font-light text-lg">{unit?.unite_info?.about}</p>
        </div>
      </div>
      {unitOpen && <Videos units={units} />}
    </div>
  );
};

export default Unit;
