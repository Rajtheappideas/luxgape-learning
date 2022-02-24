import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import img from "../../assets/studyimg3.jpg";
import { FiSend } from "react-icons/fi";

const Reviews = () => {
  return (
    <div className="py-10 px-20 relative">
      <span className="font-bold block text-4xl text-left mb-4">Reviews</span>
      {/* -----------------review div-------------- */}
      <div className="w-full border border-primary overflow-y-auto scrollbar-hide bg-[#F9F9F9] opacity-90 h-80 rounded-tl-[80px] rounded-br-[80px] rounded-bl-none rounded-tr-none ">
        <div className="p-10 space-y-9">
          {/* -----------profile----------- */}
          <div className="space-y-2">
            {/* -----------photo & stars----------------- */}
            <div className="flex items-start">
              <img
                src={img}
                alt="img"
                className="h-16 w-16 object-cover object-center rounded-tr-none rounded-bl-none rounded-br-[32px] rounded-tl-[32px]"
              />
              <div className="ml-4">
                <div className="flex space-x-2">
                  <BsStarFill size={25} color="gold" />
                  <BsStarFill size={25} color="gold" />
                  <BsStarFill size={25} color="gold" />
                  <BsStarFill size={25} color="gold" />
                  <BsStarHalf size={25} color="gold" />
                </div>
                <span className="font-semibold text-red-500 text-xl">4.5</span>
              </div>
            </div>

            {/* ------------------reviewr name------------- */}
            <p className="text-3xl font-bold block">Reviewer Name</p>

            {/* ---------------------review------------------ */}
            <p className="font-light text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="space-y-2 ">
            {/* -----------photo & stars----------------- */}
            <div className="flex items-start">
              <img
                src={img}
                alt="img"
                className="h-16 w-16 object-cover object-center rounded-tr-none rounded-bl-none rounded-br-[32px] rounded-tl-[32px]"
              />
              <div className="ml-4">
                <div className="flex space-x-2">
                  <BsStarFill size={25} color="gold" />
                  <BsStarFill size={25} color="gold" />
                  <BsStarFill size={25} color="gold" />
                  <BsStarFill size={25} color="gold" />
                  <BsStarHalf size={25} color="gold" />
                </div>
                <span className="font-semibold text-red-500 text-xl">4.5</span>
              </div>
            </div>

            {/* ------------------reviewr name------------- */}
            <p className="text-3xl font-bold block">Reviewer Name</p>

            {/* ---------------------review------------------ */}
            <p className="font-light text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute flex items-center bottom-16 right-40">
        <input
          type="text"
          placeholder="type here..."
          className="w-[522px] h-12 mr-3 px-3 outline-none rounded-tl-[24px] rounded-br-[24px] rounded-bl-none rounded-tr-none border bg-white "
        />
        <button className="w-12 h-12 rounded-tl-[24px] rounded-br-[24px] rounded-tr-none rounded-bl-none bg-primary">
          <FiSend size={25} color="white" className="mx-auto" />
        </button>
      </div>
    </div>
  );
};

export default Reviews;