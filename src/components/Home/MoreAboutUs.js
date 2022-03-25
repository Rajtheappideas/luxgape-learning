import React from "react";
import { useTranslation } from "react-i18next";
import img from "../../assets/moreaboutusimg.jpg";

const MoreAboutUs = () => {
  const { t } = useTranslation();
  return (
    <div className="relative lg:p-10 p-3 w-full h-full bg-black sm:rounded-tl-[285px] sm:rounded-br-[285px] rounded-tr-none rounded-bl-none">
      <div className="text-white sm:p-14 grid lg:grid-cols-2 grid-flow-row sm:grid-cols-1 place-items-center gap-10 items-center">
        {/* ------------------text is here---------------- */}
        <div className="w-full sm:space-y-6 space-y-3 sm:py-5 lg:text-left text-center">
          <p className="sm:text-5xl text-3xl font-semibold sm:tracking-widest block sm:mt-0 mt-5">
            {t("more_about_us")}
          </p>
          {/* --------------image for small screen------------------- */}
          <div className="lg:hidden md:block hidden">
            <img
              src={img}
              alt="studyimage"
              className="sm:w-[474px] sm:h-[374px] h-auto w-auto mx-auto object-center object-cover rounded-tl-[180px] rounded-br-[180px] rounded-tr-none rounded-bl-none"
            />
          </div>
          <p className="sm:text-2xl text-xl w-full leading-normal text-left tracking-normal sm:mb-7">
            {t("more_about_us_paragraph")}
          </p>
          <button className="bg-primary rounded-tl-[29px] rounded-br-[29px] rounded-tr-none rounded-bl-none w-[185px] h-[58px] text-xl text-center font-bold ">
            {t("learn_more")}
          </button>
        </div>

        {/* --------------image for large screen------------------- */}
        <div className="lg:block hidden">
          <img
            src={img}
            alt="studyimage"
            className="w-[574px] h-[410px] object-center object-cover rounded-tl-[205px] rounded-br-[205px] rounded-tr-none rounded-bl-none bg-secondary "
          />
        </div>
      </div>
    </div>
  );
};

export default MoreAboutUs;
