import React from "react";
import img2 from "../assets/studyimg3.jpg";
import serviceprovideimg from "../assets/serviceprovideimg.jpg";

const ServiceWeProvide = () => {
  return (
    <div className="p-10">
      {/* --------------heading-------------- */}
      <p className="text-6xl font-bold text-center my-6">Service We Provide</p>

      {/* -----------------------text---------------- */}
      <p className="text-center text-secondary text-xl  mb-16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit
        tristique volutp
      </p>

      {/* ----------------------grid div---------------- */}
      <div className="grid grid-cols-2 grid-rows-1 gap-5 items-center justify-items-center">
        {/* ------------------services div-------------- */}
        <div className="space-y-16 ">
          {/* ------------1 service---------- */}
          <div className="flex bg-white shadow-sm rounded-lg p-5">
            {/* -----------img----------- */}
            <img
              src={img2}
              alt="img1"
              className="object-center mt-2 object-cover w-[80px] h-[80px] rounded-tl-[40px] rounded-tr-none rounded-br-[40px] rounded-bl-none "
            />
            {/* ----------------info------------ */}
            <div className="flex-col mx-3">
              <p className="font-bold text-2xl mb-2">Personal Training</p>
              <p className="text-secondary text-lg font-normal leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus mag na
                fringilla urna, porttitor
              </p>
            </div>
          </div>

          {/* ------------2 service---------- */}
          <div className="flex bg-white shadow-sm rounded-lg p-5">
            {/* -----------img----------- */}
            <img
              src={img2}
              alt="img1"
              className="object-center mt-2 object-cover w-[80px] h-[80px] rounded-tl-[40px] rounded-tr-none rounded-br-[40px] rounded-bl-none "
            />
            {/* ----------------info------------ */}
            <div className="flex-col mx-3">
              <p className="font-bold text-2xl mb-2">Community Training</p>
              <p className="text-secondary text-lg font-normal leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus mag na
                fringilla urna, porttitor
              </p>
            </div>
          </div>

          {/* ------------3 service---------- */}
          <div className="flex bg-white shadow-sm rounded-lg p-5">
            {/* -----------img----------- */}
            <img
              src={img2}
              alt="img1"
              className="object-center mt-2 object-cover w-[80px] h-[80px] rounded-tl-[40px] rounded-tr-none rounded-br-[40px] rounded-bl-none "
            />
            {/* ----------------info------------ */}
            <div className="flex-col mx-3">
              <p className="font-bold text-2xl mb-2">Yoga Studio Rent</p>
              <p className="text-secondary text-lg font-normal leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus mag na
                fringilla urna, porttitor
              </p>
            </div>
          </div>
        </div>

        {/* ------------------img serviceprovideimg--------------- */}
        <div>
          <img
            src={serviceprovideimg}
            alt="serviceprovideimg"
            className="object-center object-cover w-[607px] h-[624px] rounded-tl-[303px] rounded-br-[305px] rounded-tr-none rounded-bl-none "
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceWeProvide;
