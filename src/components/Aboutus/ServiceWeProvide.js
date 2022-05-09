import React from "react";
import img2 from "../../assets/studyimg3.jpg";
import serviceprovideimg from "../../assets/serviceprovideimg.jpg";
import { useTranslation } from "react-i18next";

const ServiceWeProvide = () => {
  const { t } = useTranslation();
  return (
    <div className="sm:p-10 p-3 relative">
      {/* ----------------------eclipse 1----------------- */}
      {/* <div className="absolute -top-20 -left-40 blur-[200px] w-[300px] h-[300px] rounded-full bg-blue-300 " /> */}
      {/* ----------------------eclipse 2----------------- */}
      {/* <div className="absolute -bottom-20 right-0 blur-[200px]  w-[300px] h-[300px] rounded-full bg-pink-300 " /> */}

      {/* --------------heading-------------- */}
      <div className="text-center sm:mb-5 mb-3">
        <p className="sm:text-5xl text-3xl font-semibold sm:my-6">
          {t("service_we_provide")}
        </p>

        {/* -----------------------text---------------- */}
        <p className=" text-secondary sm:text-xl text-lg text-center sm:mb-16 mb-5">
          {t(
            "Luxgap offers several services tailored to you and/or your company"
          )}
        </p>
        {/* ------------------img serviceprovideimg--------------- */}
        <div className="lg:hidden block ">
          <img
            src={serviceprovideimg}
            alt="serviceprovideimg"
            className="object-center object-cover mx-auto sm:w-[607px] w-full sm:h-[624px] h-auto sm:rounded-tl-[303px] rounded-tl-[203px] sm:rounded-br-[305px] rounded-br-[205px] rounded-tr-none rounded-bl-none "
          />
        </div>
      </div>

      {/* ----------------------grid div---------------- */}
      <div className="grid lg:grid-cols-2 grid-flow-row grid-cols-1 gap-5 items-center justify-items-center">
        {/* ------------------services div-------------- */}
        <div className="space-y-16 ">
          {/* ------------1 service---------- */}
          <div className="flex bg-white shadow-lg rounded-lg p-5">
            {/* -----------img----------- */}
            <img
              src={img2}
              alt="img1"
              className="object-center mt-2 object-cover w-20 h-20 rounded-tl-[40px] rounded-tr-none rounded-br-[40px] rounded-bl-none "
            />
            {/* ----------------info------------ */}
            <div className="flex-col mx-3">
              <p className="font-bold text-2xl mb-2">
                {t("Personal Training")}
              </p>
              <p className="text-secondary text-lg font-normal leading-relaxed">
                {t(
                  "Train yourself in good data security practices to minimize the risk of leaks."
                )}
              </p>
            </div>
          </div>

          {/* ------------2 service---------- */}
          <div className="flex bg-white shadow-lg rounded-lg p-5">
            {/* -----------img----------- */}
            <img
              src={img2}
              alt="img1"
              className="object-center mt-2 object-cover w-20 h-20 rounded-tl-[40px] rounded-tr-none rounded-br-[40px] rounded-bl-none "
            />
            {/* ----------------info------------ */}
            <div className="flex-col mx-3">
              <p className="font-bold text-2xl mb-2">{t("Adapted Tools")}</p>
              <p className="text-secondary text-lg font-normal leading-relaxed">
                {t(
                  "You have GDPR-focused tools to help you do your job better."
                )}
              </p>
            </div>
          </div>

          {/* ------------3 service---------- */}
          <div className="flex bg-white shadow-lg rounded-lg p-5">
            {/* -----------img----------- */}
            <img
              src={img2}
              alt="img1"
              className="object-center mt-2 object-cover w-20 h-20 rounded-tl-[40px] rounded-tr-none rounded-br-[40px] rounded-bl-none "
            />
            {/* ----------------info------------ */}
            <div className="flex-col mx-3">
              <p className="font-bold text-2xl mb-2">{t("Sound advice")}</p>
              <p className="text-secondary text-lg font-normal leading-relaxed">
                {t(
                  "Thanks to our experience, we offer you wise advice that will help you improve your day-to-day life."
                )}
              </p>
            </div>
          </div>
        </div>

        {/* ------------------img serviceprovideimg--------------- */}
        <div className="lg:block hidden">
          <img
            src={serviceprovideimg}
            alt="serviceprovideimg"
            className="object-center object-cover w-[607px] h-[624px] rounded-tl-[303px] rounded-br-[305px] rounded-tr-none rounded-bl-none "
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceWeProvide;
