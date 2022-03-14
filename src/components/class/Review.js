import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import img from "../../assets/studyimg3.jpg";
import { FiSend } from "react-icons/fi";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Reviews = [
  {
    id: 1,
    img: img,
    name: "Karen Hope",
    reviewStar: "5.0",
    reviewTime: "1 Month ago",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesettingindustry.Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book.",
  },
  {
    id: 2,
    img: img,
    name: "Tony Soap",
    reviewStar: "5.0",
    reviewTime: "1 Month ago",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesettingindustry.Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book.",
  },
  {
    id: 3,
    img: img,
    name: "Karen Hope",
    reviewStar: "5.0",
    reviewTime: "1 Month ago",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesettingindustry.Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book.",
  },
  {
    id: 4,
    img: img,
    name: "Karen Hope",
    reviewStar: "5.0",
    reviewTime: "1 Month ago",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesettingindustry.Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book.",
  },
  {
    id: 5,
    img: img,
    name: "Tony Soap",
    reviewStar: "5.0",
    reviewTime: "1 Month ago",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesettingindustry.Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book.",
  },
];
const Review = () => {
  return (
    <div className="sm:p-10 p-5 relative">
      {/* -----------------review div-------------- */}
      <div className="w-full h-screen overflow-y-auto rounded-xl scrollbar-hide bg-gray-100 opacity-90 ">
        <div className="p-10 space-y-9">
          {/* -----------profile----------- */}
          {Reviews.map((review) => (
            <div className="space-y-2" key={review.id}>
              {/* -----------photo & stars----------------- */}
              <div className="flex items-start">
                <LazyLoadImage
                  src={review.img}
                  alt="img"
                  className="h-16 w-16 object-cover object-center rounded-xl"
                />
                <div className="ml-4">
                  <span className="font-bold text-black text-xl">
                    {review.name}
                  </span>
                  <div className="flex items-center space-x-3 mt-2">
                    <span className="font-semibold text-black text-xl">
                      {review.reviewStar}
                    </span>
                    <BsStarFill size={20} color="gold" />
                    <BsStarFill size={20} color="gold" />
                    <BsStarFill size={20} color="gold" />
                    <BsStarFill size={20} color="gold" />
                    <BsStarHalf size={20} color="gold" />
                    <span className=" border-l pl-4 border-gray-400 text-gray-400 font-semibold">
                      {review.reviewTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* ---------------------review------------------ */}
              <p className="font-normal text-lg">{review.review}</p>
            </div>
          ))}
        </div>
      </div>

      {/* -----------------input field----------------- */}
      <div className="absolute flex items-center bottom-16 md:right-20 right-10">
        <input
          type="text"
          placeholder="leave your review"
          className="md:w-[522px] h-12 mr-3 px-3 outline-none rounded-tl-[24px] rounded-br-[24px] rounded-bl-none rounded-tr-none bg-white "
        />
        <button className="w-12 h-12 rounded-tl-[24px] rounded-br-[24px] rounded-tr-none rounded-bl-none bg-primary">
          <FiSend size={25} color="white" className="mx-auto" />
        </button>
      </div>
    </div>
  );
};

export default Review;
