import React from "react";
import { useTranslation } from "react-i18next";
import classdetail from "../../assets/classdetails.jpg";
import logo from "../../assets/LXG_RVB.png";

const ClassDetails = () => {
  const { t } = useTranslation();
  return (
    <div className="sm:p-10 p-3 grid lg:grid-cols-2 lg:grid-rows-1 grid-cols-1 grid-rows-1 gap-10 justify-items-center items-center">
      <div className="space-y-7">
        {/* ---------------title text-------------- */}
        <span className="sm:text-5xl text-3xl font-semibold block">
          {t("About Luxgap")}
        </span>
        {/* -----------image on large screen-------------- */}
        <div className="lg:hidden block">
          <div className="relative w-full">
            <img
              src={classdetail}
              alt="classdetailimg"
              className=" object-center object-cover w-full h-[214px] rounded-tl-[107px] rounded-br-[107px] rounded-tr-none rounded-bl-none "
            />
            <img
              src={logo}
              alt="logo"
              className="sm:h-20 h-12 absolute top-[40%] left-[55%] -translate-x-1/2 object-center object-cover"
            />
          </div>
        </div>
        {/* ----------------------deatils------------------ */}
        <p className="text-secondary text-lg leading-relaxed tracking-tighter">
          {t("about_us_para_1")}
        </p>
        <p className="text-secondary text-lg leading-relaxed tracking-tighter">
          {t("about_us_para_2")}
        </p>
        <p className="text-secondary text-lg leading-relaxed tracking-tighter">
          {t("about_us_para_3")}
        </p>
      </div>
      {/* -----------image on large screen-------------- */}
      <div className="relative hidden lg:block">
        <img
          src={classdetail}
          alt="classdetailimg"
          className=" object-center object-cover w-[607px] h-[214px] rounded-tl-[107px] rounded-br-[107px] rounded-tr-none rounded-bl-none "
        />
        <img
          src={logo}
          alt="logo"
          className="h-20 absolute top-[30%] left-[53%] -translate-x-1/2 object-center object-cover"
        />
      </div>
    </div>
  );
};

export default ClassDetails;
