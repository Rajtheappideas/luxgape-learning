import React from "react";
import studyboy from "../../assets/study_boy.jpg";
import { CheckIcon } from "@heroicons/react/outline";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const LearnAnytimeAnywhere = () => {
  const { t } = useTranslation();
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="sm:p-10 p-3 grid lg:grid-cols-2 grid-flow-row  grid-cols-1 gap-10 place-items-center items-center relative">
      {/* ----------------eclipse 1---------------- */}
      {/* <div className="absolute -top-10 right-0 blur-[200px] w-[300px] h-[300px] rounded-full bg-blue-300 " /> */}
      {/* ----------------eclipse 2---------------- */}
      {/* <div className="absolute -bottom-40 left-1/2 blur-[300px]  w-[300px] h-[300px] rounded-full bg-pink-300 " /> */}

      {/* -------------image is here------------- */}
      <div className="hidden lg:block">
        <img
          src={studyboy}
          alt="studyboy"
          className="object-contain object-center h-screen"
        />
      </div>

      {/* ------------text is here------------------ */}
      <div className="space-y-12 h-full w-full p-3">
        <p className="text-5xl font-semibold tracking-wide lg:text-left text-center">
          {t("learn_anywhere_anytime")}
        </p>

        {/* -------------image is here------------- */}
        <div className="lg:hidden block">
          <img
            src={studyboy}
            alt="studyboy"
            className="object-contain object-center sm:h-screen h-auto mx-auto"
          />
        </div>
        <div className="w-full space-y-12">
          <p className="text-secondary w-full text-xl tracking-widest leading-normal">
            {t("learn_anywhere_anytime_paragraph_1")}
          </p>
          <p className="text-secondary w-full text-xl tracking-widest leading-normal">
            {t("learn_anywhere_anytime_paragraph_2")}
          </p>
        </div>

        {/* --------------check mark and details------------ */}
        <div className="sm:flex flex-wrap lg:space-y-2 sm:space-y-0 space-y-3 items-center">
          <div className="flex relative mr-3">
            <p className="w-[32px] h-[32px] sm:mr-2 rounded-tl-[16px] rounded-br-[16px] rounded-tr-none rounded-bl-none bg-black">
              <CheckIcon
                className="w-5 h-5 absolute top-[0.4rem] left-[0.4rem]"
                color="white"
              />
            </p>
            <p className="font-semibold text-xl whitespace-nowrap">
              {t("more_flexible_study_time")}
            </p>
          </div>
          <div className="flex relative">
            <p className="w-[32px] h-[32px] mr-2 rounded-tl-[16px] rounded-br-[16px] rounded-tr-none rounded-bl-none bg-primary">
              <CheckIcon
                className="w-5 h-5 absolute top-[0.4rem] left-[0.4rem]"
                color="white"
              />
            </p>
            <p className="font-semibold text-xl whitespace-nowrap">
              {t("more_affordable_course")}
            </p>
          </div>
        </div>
        {/* --------------explote button------------ */}

        <div>
          <Link to="/courses">
            <button
              type="button"
              className="w-60 h-16 cursor-pointer bg-primary rounded-tl-[29px] rounded-br-[29px] rounded-tr-none rounded-bl-none text-xl text-white text-center"
              onClick={ScrollToTop}
            >
              {t("explore_course")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LearnAnytimeAnywhere;
