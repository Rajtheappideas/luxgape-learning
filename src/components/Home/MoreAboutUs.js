import React from "react";
import { useTranslation } from "react-i18next";
import img from "../../assets/moreaboutusimg.jpg";

const MoreAboutUs = () => {
  const { t } = useTranslation();
  return (
    <div className="relative sm:p-10 p-7 w-full h-full bg-black rounded-tl-[285px] rounded-br-[285px] rounded-tr-none rounded-bl-none">
      <div className="text-white sm:p-14 py-14 grid lg:grid-cols-2 grid-flow-row sm:grid-cols-1 place-items-center gap-10 items-center">
        {/* ------------------text is here---------------- */}
        <div className="w-full space-y-6 lg:text-left text-center">
          <p className="text-5xl font-medium sm:tracking-widest block sm:mt-0 mt-5">
            {t("more_about_us")}
          </p>
          {/* --------------image for small screen------------------- */}
          <div className="lg:hidden block">
            <img
              src={img}
              alt="studyimage"
              className="sm:w-[474px] sm:h-[374px] h-auto w-auto mx-auto object-center object-cover rounded-tl-[180px] rounded-br-[180px] rounded-tr-none rounded-bl-none"
            />
          </div>
          <p className="text-2xl w-[90%] leading-normal tracking-normal sm:mb-7 mb-">
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
