import React, { useEffect, useState } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useUserContext } from "../../context/usercontext";
import { toast, ToastContainer } from "react-toastify";
import ContentLoader from "react-content-loader";

const Reviews = ({ course_id, userReviews, loading }) => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [Loading, setLoading] = useState(false);
  const { t } = useTranslation();

  // ---context----------
  const { userData, userLanguage } = useUserContext();

  const handlePostReview = () => {
    if (rating === "" || review === "") {
      toast("review and rating fields should be filled!", { type: "warning" });
      return false;
    }
    setLoading(true);
    axios("https://chessmafia.com/php/luxgap/App/api/post-review", {
      method: "POST",
      params: {
        lang_code: userLanguage,
        course_id: course_id,
        rating: rating,
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
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="sm:p-10 p-3 relative">
        <span className="font-semibold block sm:text-5xl text-3xl text-left mb-4">
          {t("reviews")}
        </span>
        {/* -----------------review div-------------- */}
        <div className="w-full space-y-10 h-80 border border-primary overflow-y-auto scrollbar-hide bg-[#F9F9F9] opacity-90 rounded-tl-[80px] rounded-br-[80px] rounded-bl-none rounded-tr-none ">
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
                className="first:sm:px-10 first:sm:pt-10 first:p-5 sm:px-10 px-5 last:md:pb-20 last:pb-32 space-y-3 w-full"
                key={review?.id}
              >
                {/* -----------profile----------- */}
                <div className="space-y-2 w-full">
                  {/* -----------photo & stars----------------- */}
                  <div className="flex items-start">
                    <img
                      src={
                        `https://chessmafia.com/php/luxgap/App/${review?.user_info?.profile}` ||
                        null
                      }
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
                        {review?.rating}
                      </span>
                    </div>
                  </div>
                </div>
                {/* ------------------reviewr name------------- */}
                <p className="sm:text-3xl text-xl font-bold block">
                  {review?.user_info?.name}
                </p>

                {/* ---------------------review------------------ */}
                <p className="font-light text-lg w-full overflow-x-hidden leading-relaxed break-words">
                  {review?.review}
                </p>
              </div>
            ))
          )}
        </div>
        {/* -----------input field------------- */}
        <div className="absolute flex md:flex-row flex-col items-center sm:bottom-16 bottom-4 lg:right-28 sm:right-16 right-3">
          <div className="flex items-center mb-1 md:mb-0">
            <input
              type="text"
              placeholder="type your review"
              onChange={(e) => setReview(e.target.value)}
              className="lg:w-96 md:w-60 w-[8.8rem] h-12 mr-1 px-3 outline-none rounded-tl-[24px] rounded-br-[24px] rounded-bl-none rounded-tr-none border bg-white "
            />
            <input
              type="text"
              placeholder="enter your rating"
              onChange={(e) => setRating(e.target.value)}
              className="lg:w-96 md:w-60 w-[8.8rem] h-12 sm:mr-3 mr-1 px-3 outline-none rounded-tl-[24px] rounded-br-[24px] rounded-bl-none rounded-tr-none border bg-white "
            />
          </div>

          <button
            type="button"
            onClick={handlePostReview}
            className="w-12 h-12 rounded-tl-[24px] rounded-br-[24px] rounded-tr-none rounded-bl-none bg-primary"
          >
            {Loading ? (
              "..."
            ) : (
              <FiSend size={25} color="white" className="mx-auto" />
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Reviews;
