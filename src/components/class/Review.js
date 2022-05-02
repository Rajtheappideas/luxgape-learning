import React, { useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import axios from "axios";
import { useUserContext } from "../../context/usercontext";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import ContentLoader from "react-content-loader";
import { UserCircleIcon } from "@heroicons/react/solid";

const Review = ({ userReviews, course_id, loading }) => {
  const [review, setReview] = useState("");
  const [currentValue, setCurrentvalue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [Loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const stars = Array(5).fill(0);

  // ---context----------
  const { userData, userLanguage } = useUserContext();

  const handlePostReview = () => {
    if (currentValue === 0 || review === "") {
      toast("review field and stars are should be filled!", {
        type: "warning",
      });
      return false;
    }
    setLoading(true);
    axios("https://chessmafia.com/php/luxgap/App/api/post-review", {
      method: "POST",
      params: {
        lang_code: userLanguage,
        course_id: course_id,
        rating: currentValue,
        review: review,
      },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "consumer-access-token": userData?.api_token,
      },
    })
      .then((response) => {
        if (response?.data?.status === "Success") {
          toast(response?.data?.message, { type: "success" });
          setLoading(false);
          window.location.reload();
          return true;
        }
      })
      .catch((err) => {
        console.log("review err->", err?.response?.data);
        if (err?.response?.data?.status === "Error") {
          toast(err?.response?.data?.message, { type: "error" });
          setLoading(false);
          return false;
        }
      });
    setCurrentvalue(0);
    setReview("");
  };

  const handleClick = (value) => {
    setCurrentvalue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };
  const showRating = (rating) => {
    if (rating >= 5) {
      return Array(5).fill(0);
    } else if (rating >= 4) {
      return Array(4).fill(0);
    } else if (rating >= 3) {
      return Array(3).fill(0);
    } else if (rating >= 2) {
      return Array(2).fill(0);
    } else if (rating >= 1) {
      return Array(1).fill(0);
    } else {
      return Array(1).fill(0);
    }
  };

  return (
    <div className="sm:p-10 p-3 relative">
      {/* -----------------review div-------------- */}
      <div className="w-full h-screen overflow-y-auto rounded-xl scrollbar-hide bg-gray-100 opacity-90 ">
        <div className="sm:p-10 p-3 sm:space-y-9 space-y-5">
          {/* -----------profile----------- */}
          {loading ? (
            <>
              <ContentLoader
                speed={1}
                width={800}
                height={180}
                backgroundColor="#efe6e6"
                foregroundColor="#d7bcbc"
                animate
              >
                <circle cx="90" cy="70" r="40" />
                <rect x="150" y="40" rx="3" ry="3" width="100" height="15" />
                <rect x="150" y="80" rx="3" ry="3" width="40" height="15" />
                <rect x="50" y="120" rx="3" ry="3" width="200" height="15" />
                <rect x="50" y="160" rx="3" ry="3" width="800" height="15" />
              </ContentLoader>
              <ContentLoader
                speed={1}
                width={800}
                height={180}
                backgroundColor="#efe6e6"
                foregroundColor="#d7bcbc"
                animate
              >
                <circle cx="90" cy="70" r="40" />
                <rect x="150" y="40" rx="3" ry="3" width="100" height="15" />
                <rect x="150" y="80" rx="3" ry="3" width="40" height="15" />
                <rect x="50" y="120" rx="3" ry="3" width="200" height="15" />
                <rect x="50" y="160" rx="3" ry="3" width="800" height="15" />
              </ContentLoader>
            </>
          ) : (
            userReviews.map((review) => (
              <div
                className="space-y-2 sm:last:pb-10 last:pb-32"
                key={review?.id}
              >
                {/* -----------photo & stars----------------- */}
                <div className="flex">
                  {review?.user_info?.profile === null ? (
                    <UserCircleIcon
                      className="h-16 w-16 rounded-xl bg-gray-400"
                      color="white"
                    />
                  ) : (
                    <LazyLoadImage
                      src={`https://chessmafia.com/php/luxgap/App/${review?.user_info?.profile}`}
                      alt={review?.user_info?.name}
                      className="h-16 w-16 object-cover object-center rounded-xl "
                    />
                  )}

                  <div className="ml-4">
                    <span className="font-bold text-black text-xl">
                      {review?.user_info?.name}
                    </span>
                    <div className="flex items-center sm:space-x-3 space-x-1 sm:mt-2">
                      <span className="font-semibold text-black text-xl">
                        {review?.rating}
                      </span>
                      <div className="flex space-x-2">
                        {showRating(review?.rating).map((_, index) => (
                          <BsStarFill key={index} size={24} color="gold" />
                        ))}
                      </div>
                      {/* <span className=" border-l h-auto pl-4 border-gray-400 text-gray-400 font-semibold">
                        {review.reviewTime}
                      </span> */}
                    </div>
                  </div>
                </div>

                {/* ---------------------review------------------ */}
                <p className="font-normal text-lg w-full overflow-x-hidden leading-relaxed break-words">
                  {review?.review}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
      {/* -----------------input field----------------- */}
      <div className="absolute flex md:flex-row flex-col sm:items-center space-y-1 sm:space-y-0 justify-end sm:bottom-14 bottom-4 lg:right-28 sm:right-16 left-12 backdrop-blur-sm sm:backdrop-blur-0">
        <div className="flex items-center mb-1 md:mb-0">
          <input
            type="text"
            placeholder="type your review"
            onChange={(e) => setReview(e.target.value)}
            className="lg:w-[30rem] md:w-80 w-64 h-12 mr-1 px-3 outline-none rounded-tl-[24px] rounded-br-[24px] rounded-bl-none rounded-tr-none border bg-white "
          />
        </div>
        <div className="flex items-center sm:space-x-2 space-x-5">
          {stars.map((_, index) => (
            <BsStarFill
              key={index}
              size={26}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? "orange" : "gray"}
              style={{
                marginRight: 10,
                cursor: "pointer",
              }}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={handlePostReview}
          className="sm:w-12 sm:h-12 w-64 h-10 active:scale-95 transition-all duration-75 ease-in-out rounded-tl-[24px] rounded-br-[24px] rounded-tr-none rounded-bl-none bg-primary"
        >
          {Loading ? (
            "..."
          ) : (
            <FiSend size={25} color="white" className="mx-auto" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Review;
