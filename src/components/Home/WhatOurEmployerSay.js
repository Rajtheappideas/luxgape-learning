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
    <div className="my-5 px-5" id="testimonial">
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
            spaceBetween: 60,
          },
        }}
      >
        {employerData.map((item) => (
          <SwiperSlide
            color="red"
            key={item.id}
            className="flex w-full items-center snap-x"
          >
            <div className="relative snap-x p-10 shadow-lg border w-auto h-auto rounded-tl-[85px] rounded-br-[85px] rounded-tr-none rounded-bl-none bg-white ">
              {/* ---------------------leftarrowdiv--------------------- */}

              {/* <div className="absolute top-24 -left-6 cursor-pointer w-[58px] h-[58px] rounded-tl-[26px] rounded-br-[26px] rounded-tr-none rounded-bl-none bg-primary ">
                <ArrowLeftIcon
                  className="absolute w-7 h-7 top-4 left-4"
                  color="white"
                />
              </div> */}
              {/* ---------------------rightarrowdiv--------------------- */}
              {/* <div className="absolute top-24 -right-6 cursor-pointer w-[58px] h-[58px] rounded-tl-[26px] rounded-br-[26px] rounded-tr-none rounded-bl-none bg-black ">
                <ArrowRightIcon
                  className="absolute w-7 h-7 top-4 right-4"
                  color="white"
                />
              </div> */}

              {/* ----------------------profile and name div----------------------- */}

              <div className="flex items-center mb-10 snap-center">
                <img
                  src={item.image}
                  alt="img"
                  className="rounded-full object-center object-cover w-16 h-16 bg-gray-400"
                />
                <div className="flex-col items-start ml-3">
                  <p className="block font-semibold text-xl">
                    {/* Mirza fatoerachaman */}
                    {item.name}
                  </p>
                  <span className="block text-lg">employer</span>
                </div>
              </div>
              <p className="text-xl leading-snug tracking-wide font-medium">
                {/* “The course is easy to understand and the mentor is cool, making
        my learning experience here very enjoyable” */}
                {item.review}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="flex items-center justify-center space-x-10 w-full overflow-x-scroll scrollbar-hide"> */}
      {/* --------------------------left div--------------------------- */}
      {/* <div className="p-10 border w-[663px] h-[246px] rounded-tl-[0px] rounded-br-[85px] rounded-tr-none rounded-bl-none bg-white "></div> */}

      {/* ----------------------center div----------------------- */}

      {/* -------------------------------right div-------------------------- */}
      {/* <div className="p-10 border w-[663px] h-[246px] rounded-tl-[85px] rounded-br-none rounded-tr-none rounded-bl-none bg-white ">
          <div className="flex items-center mb-10">
            <img
              src={img}
              alt="img"
              className="rounded-full object-center object-cover w-16 h-16 bg-gray-400"
            ></img>
            <div className="flex-col items-start ml-3">
              <p className="block font-semibold text-xl">Mirza fatoerachaman</p>
              <span className="block text-lg">employer</span>
            </div>
          </div>
          <p className="text-xl leading-snug tracking-wide font-medium">
            “The course is easy to understand and the mentor is cool, making my
            learning experience here very enjoyable”
          </p>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default WhatOurEmployerSay;
