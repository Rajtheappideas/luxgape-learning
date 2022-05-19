import React, { useEffect, useState } from "react";
import { UserCircleIcon } from "@heroicons/react/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { useTranslation } from "react-i18next";
import axios from "axios";
import { useUserContext } from "../../context/usercontext";
import { toast } from "react-toastify";

const WhatOurEmployerSay = () => {
  const [reviews, setReviews] = useState([]);
  const { userLanguage } = useUserContext();
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
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
    <div id="testimonial">
      {loading ? null : reviews.length === 0 ? null : (
        <div className="my-5 px-3 sm:px-9 overflow-hidden" id="testimonial">
          <p className="text-center  sm:text-5xl text-3xl font-semibold sm:my-20 my-5 tracking-wide">
            {t("what_our_employer_say")}
          </p>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={"auto"}
            pagination={{
              clickable: true,
            }}
            // speed={600}
            // effect={"fade"}
            // parallax={true}
            // pagination={true}
            navigation={true}
            modules={[Navigation, Pagination, EffectFade]}
            breakpoints={{
              320: {
                slidesPerView: 1,
                pagination: true,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1,
                pagination: true,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                pagination: true,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 20,
                pagination: true,
              },
              1330: {
                slidesPerView: 2,
                spaceBetween: 20,
                pagination: false,
              },
            }}
            className="overflow-hidden"
          >
            {reviews.map((review) => (
              <SwiperSlide
                color="red"
                key={review.id}
                className="flex w-full items-center sm:h-full "
              >
                <div className="relative sm:p-8 p-6 hover:shadow-xl overflow-auto  scrollbar-hide border w-full sm:h-60 h-96 rounded-tl-[85px] rounded-br-[85px] rounded-tr-none rounded-bl-none bg-white ">
                  {/* ----------------------profile and name div----------------------- */}

                  <div className="flex sm:items-center items-start mb-3">
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
    </div>
  );
};

export default WhatOurEmployerSay;
