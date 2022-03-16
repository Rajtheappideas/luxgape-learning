import React from "react";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const { t } = useTranslation();
  return (
    <div
      id="contactus"
      className="sm:p-10 p-3 grid sm:gap-10 lg:grid-cols-2 lg:grid-rows-1 grid-cols-1 grid-flow-row items-start justify-items-center"
    >
      {/* --------------first div with text---------- */}
      <div className="">
        <p className="text-5xl font-bold tracking-wide leading-snug block">
          {t("stay_get_in_touch")}
          <span className="block">{t("with_us")}</span>
        </p>
        <p className="text-secondary text-xl font-semibold tracking-normal leading-relaxed">
          {t("stay_get_in_touch_with_us_paragraph")}
        </p>
      </div>
      {/* -----------second div with form ---------------- */}
      <div className="space-y-10 h-full w-full">
        <div>
          <p className="text-xl font-normal mb-3">{t("your_name")}</p>
          <input
            type="text"
            placeholder={t("type_your_name")}
            className="w-full bg-[#FFF8F0] p-5 rounded-2xl outline-none"
          />
        </div>
        <div>
          <p className="text-xl font-normal mb-3">{t("your_email")}</p>
          <input
            type="text"
            placeholder={t("type_your_email")}
            className="w-full bg-[#FFF8F0] p-5 rounded-2xl outline-none"
          />
        </div>
        <div className="lg:text-left text-center">
          <button className=" text-center rounded-tl-[30px] rounded-tr-none rounded-br-[30px] rounded-bl-none w-[183px] h-[60px] bg-black text-white font-semibold ">
            {t("subscribe")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
