import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import img from "../../assets/studyimg3.jpg";
import { FiSend } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const reviews = [
  {
    id: 1,
    image: img,
    ratings: 4.5,
    reviewerName: "Reviewer Name",
    review:
      " Lorem Ipsum is simply dummy text of the printing and typesetting  industry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 2,
    image: img,
    ratings: 4.5,
    reviewerName: "Reviewer Name",
    review:
      " Lorem Ipsum is simply dummy text of the printing and typesetting  industry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 3,
    image: img,
    ratings: 4.5,
    reviewerName: "Reviewer Name",
    review:
      " Lorem Ipsum is simply dummy text of the printing and typesetting  industry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];
const Reviews = () => {
  const { t } = useTranslation();
  return (
    <div className="sm:p-10 p-3 relative">
      <span className="font-semibold block sm:text-5xl text-3xl text-left mb-4">
        {t("reviews")}
      </span>
      {/* -----------------review div-------------- */}
      <div className="w-full space-y-10 h-80 border border-primary overflow-y-auto scrollbar-hide bg-[#F9F9F9] opacity-90 rounded-tl-[80px] rounded-br-[80px] rounded-bl-none rounded-tr-none ">
        {reviews.map((review) => (
          <div
            className="first:sm:px-10 first:sm:pt-10 first:p-5 sm:px-10 px-5 last:sm:pb-20 last:pb-20 space-y-3"
            key={review.id}
          >
            {/* -----------profile----------- */}
            <div className="space-y-2">
              {/* -----------photo & stars----------------- */}
              <div className="flex items-start">
                <img
                  src={review.image}
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
                  <span className="font-semibold text-red-500 text-xl">
                    {review.ratings}
                  </span>
                </div>
              </div>
            </div>
            {/* ------------------reviewr name------------- */}
            <p className="sm:text-3xl text-xl font-bold block">{review.reviewerName}</p>

            {/* ---------------------review------------------ */}
            <p className="font-light text-lg">{review.review}</p>
          </div>
        ))}
      </div>
      {/* -----------input field------------- */}
      <div className="absolute flex items-center sm:bottom-16 bottom-10 lg:right-28 sm:right-16 right-6">
        <input
          type="text"
          placeholder="type here..."
          className="sm:w-[522px] w-auto h-12 mr-3 px-3 outline-none rounded-tl-[24px] rounded-br-[24px] rounded-bl-none rounded-tr-none border bg-white "
        />
        <button className="w-12 h-12 rounded-tl-[24px] rounded-br-[24px] rounded-tr-none rounded-bl-none bg-primary">
          <FiSend size={25} color="white" className="mx-auto" />
        </button>
      </div>
    </div>
  );
};

export default Reviews;
