import React, { useEffect, useState } from "react";
import { UserCircleIcon } from "@heroicons/react/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useUserContext } from "../../context/usercontext";
import { toast } from "react-toastify";

const WhatOurEmployerSay = () => {
  const [reviews, setReviews] = useState([]);
  const { userLanguage } = useUserContext();
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  console.log(reviews);
  useEffect(() => {
    setLoading(true);
    axios("https://chessmafia.com/php/luxgap/App/api/get-review", {
      method: "POST",
      params: {
        lang_code: userLanguage,
      },
    })
      .then((response) => {
        if (response?.data?.status === "Success") {
          setReviews(response?.data?.data);
          setLoading(false);
          return true;
        }
      })
      .catch((err) => {
        if (err?.response?.data?.status === "Error") {
          setLoading(false);
          // toast("Somthing Went Wrong!!", { type: "error" });
          return false;
        }
      });
  }, []);
  return (
    <>
      {loading ? null : reviews.length === 0 ? null : (
        <div className="my-5 px-3 sm:px-9" id="testimonial">
          <p className="text-center sm:text-5xl text-3xl font-semibold sm:my-20 my-5 tracking-wide">
            {t("what_our_employer_say")}
          </p>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            // pagination={{
            //   clickable: true,
            // }}
            pagination={true}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
          >
            {reviews.map((review) => (
              <SwiperSlide
                color="red"
                key={review.id}
                className="flex w-full items-center h-full"
              >
                <div className="relative sm:p-8 p-6 hover:shadow-xl border w-full sm:h-60 h-96 rounded-tl-[85px] rounded-br-[85px] rounded-tr-none rounded-bl-none bg-white ">
                  {/* ----------------------profile and name div----------------------- */}

                  <div className="flex items-center mb-3">
                    {review?.user_info?.profile === null ? (
                      <UserCircleIcon className="h-16 w-16" color="gray" />
                    ) : (
                      <img
                        src={`https://chessmafia.com/php/luxgap/App/${review?.user_info?.profile}`}
                        alt={review?.user_info?.name}
                        className="rounded-full object-center object-cover w-16 h-16 bg-gray-400"
                      />
                    )}
                    <div className="flex-col items-start ml-3">
                      <p className="block font-semibold text-xl">
                        {review?.user_info?.name}
                      </p>
                      <span className="block text-lg">
                        {review?.course_detail_info?.title}
                      </span>
                    </div>
                  </div>
                  <p className="text-xl text-left leading-snug tracking-normal font-medium w-full sm:h-20 h-auto break-words scrollbar-hide overflow-auto">
                    {review.review.trim()}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default WhatOurEmployerSay;
