import React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";
import img from "../../assets/studyimg3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useTranslation } from "react-i18next";

const employerData = [
  {
    id: 1,
    image: img,
    name: "Mirza fatoerachaman",
    review:
      "  “The course is easy to understand and the mentor is cool, making my learning experience here very enjoyable”",
  },
  {
    id: 2,
    image: img,
    name: "Mirza kjasndjkasd",
    review:
      "  “The course is easy to understand and the mentor is cool, making my learning experience here very enjoyable”",
  },
  {
    id: 3,
    image: img,
    name: "Mirza aksjdioasdhuih",
    review:
      "  “The course is easy to understand and the mentor is cool, making my learning experience here very enjoyable”",
  },
  {
    id: 4,
    image: img,
    name: "Mirza fatoerachaman",
    review:
      "  “The course is easy to understand and the mentor is cool, making my learning experience here very enjoyable”",
  },
];
const WhatOurEmployerSay = () => {
  const { t } = useTranslation();
  return (
    <div className="my-5 px-3 sm:px-9" id="testimonial">
      <p className="text-center text-5xl font-semibold my-20 tracking-wide">
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
        {employerData.map((item) => (
          <SwiperSlide
            color="red"
            key={item.id}
            className="flex w-full items-center "
          >
            <div className="relative sm:p-10 p-6 hover:shadow-xl border w-auto h-auto rounded-tl-[85px] rounded-br-[85px] rounded-tr-none rounded-bl-none bg-white ">
              {/* ----------------------profile and name div----------------------- */}

              <div className="flex items-center mb-10 snap-center">
                <img
                  src={item.image}
                  alt="img"
                  className="rounded-full object-center object-cover w-16 h-16 bg-gray-400"
                />
                <div className="flex-col items-start ml-3">
                  <p className="block font-semibold text-xl">{item.name}</p>
                  <span className="block text-lg">employer</span>
                </div>
              </div>
              <p className="text-xl leading-snug tracking-wide font-medium">
                {item.review}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WhatOurEmployerSay;
