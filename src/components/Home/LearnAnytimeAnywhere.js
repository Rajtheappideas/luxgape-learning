import React from "react";
import studyboy from "../../assets/study_boy.jpg";
import { CheckIcon } from "@heroicons/react/outline";

const LearnAnytimeAnywhere = () => {
  return (
    <div className="p-10 grid grid-cols-2 grid-rows-1 justify-items-center items-center relative">
      {/* ----------------eclipse 1---------------- */}
      <div className="absolute -top-10 right-0 blur-[200px] w-[300px] h-[300px] rounded-full bg-blue-300 " />
      {/* ----------------eclipse 2---------------- */}
      <div className="absolute -bottom-40 left-1/2 blur-[300px]  w-[300px] h-[300px] rounded-full bg-pink-300 " />

      {/* -------------image is here------------- */}
      <div>
        <img
          src={studyboy}
          alt="studyboy"
          className="object-contain object-center w-[483px]"
        />
      </div>

      {/* ------------text is here------------------ */}
      <div className="space-y-12 h-full w-full p-7">
        <p className="text-5xl font-semibold tracking-wide">
          Learn Anytime Anywhere
        </p>
        <p className="text-secondary text-xl tracking-wider leading-normal">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <p className="text-secondary text-xl tracking-wider leading-normal">
          when an unknown printer took a galley of type and scrambled it to make
          a type specimen book.
        </p>
        <div className="flex items-center ">
          <div className="flex relative space-x-3 mr-7">
            <p className="w-[32px] h-[32px] rounded-tl-[16px] rounded-br-[16px] rounded-tr-none rounded-bl-none bg-black">
              <CheckIcon
                className="w-5 h-5 absolute top-[0.4rem] left-[0.4rem]"
                color="white"
              />
            </p>
            <p className="font-semibold text-xl ">More Flexible Study Time</p>
          </div>
          <div className="flex relative space-x-3">
            <p className="w-[32px] h-[32px] rounded-tl-[16px] rounded-br-[16px] rounded-tr-none rounded-bl-none bg-primary">
              <CheckIcon
                className="w-5 h-5 absolute top-[0.4rem] left-[0.4rem]"
                color="white"
              />
            </p>
            <p className="font-semibold text-xl ">More Affordable Course</p>
          </div>
        </div>

        <button className="w-[222px] h-[58px] bg-primary rounded-tl-[29px] rounded-br-[29px] rounded-tr-none rounded-bl-none text-xl text-white text-center">
          Explore Course
        </button>
      </div>
    </div>
  );
};

export default LearnAnytimeAnywhere;
