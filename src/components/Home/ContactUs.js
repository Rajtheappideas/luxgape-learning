import axios from "axios";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useUserContext } from "../../context/usercontext";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation();

  const { userLanguage } = useUserContext();
  
  const handleSendMessage = () => {
    if (name === "" || email === "" || message === "") {
      toast("All fields should be filled!!", { type: "warning" });
      return false;
    }
    setLoading(true);
    axios("https://chessmafia.com/php/luxgap/App/api/contact-us-submit", {
      method: "POST",
      params: {
        lang_code: userLanguage,
        name: name,
        email: email,
        massage: message,
      },
    })
      .then((response) => {
        if (response?.data?.status === "Success") {
          toast(response?.data?.data, { type: "success" });
          setLoading(false);
          setName("");
          setEmail("");
          setMessage("");
          return true;
        } else if (response?.data?.status === "Error") {
          toast("Somthing went wrong!", { type: "error" });
          setLoading(false);
          setName("");
          setEmail("");
          setMessage("");
          return false;
        }
      })
      .catch((err) => {
        setLoading(false);
        return false;
      });
  };
  return (
    <div
      id="contactus"
      className="sm:p-10 p-3 grid sm:gap-10 lg:grid-cols-2 lg:grid-rows-1 grid-cols-1 grid-flow-row items-start justify-items-center"
    >
      {/* --------------first div with text---------- */}
      <div className="sm:mb-0 mb-3">
        <p className="sm:text-5xl text-3xl font-bold tracking-wide leading-snug block mb-5">
          {t("stay_get_in_touch")}
          <span className="block">{t("with_us")}</span>
        </p>
        <p className="text-secondary text-xl font-semibold tracking-normal leading-relaxed">
          {t("stay_get_in_touch_with_us_paragraph")}
        </p>
      </div>
      {/* -----------second div with form ---------------- */}
      <div className="space-y-5 h-full w-full">
        <div className="flex md:flex-row flex-col items-center md:space-x-3 w-full">
          <div className="md:w-1/2 w-full md:mb-0 mb-3">
            <label className="text-xl font-normal mb-3">{t("your_name")}</label>
            <input
              type="text"
              placeholder={t("type_your_name")}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-[#FFF8F0] p-5 rounded-2xl outline-none"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <label className="text-xl font-normal mb-3">
              {t("your_email")}
            </label>
            <input
              type="email"
              placeholder={t("type_your_email")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#FFF8F0] p-5 rounded-2xl outline-none"
            />
          </div>
        </div>
        <div>
          <p className="text-xl font-normal mb-3 min-h-fit scrollbar-hide">
            {t("your_message")}
          </p>
          <textarea
            placeholder={t("type_your_message")}
            rows={3}
            cols={10}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-[#FFF8F0] p-5 rounded-2xl outline-none"
          />
        </div>
        <div className="lg:text-left text-center">
          <button
            type="button"
            className=" text-center active:scale-95 transition-all duration-200 ease-in-out rounded-tl-[30px] rounded-tr-none rounded-br-[30px] rounded-bl-none w-[183px] h-[60px] bg-black text-white font-semibold "
            onClick={handleSendMessage}
          >
            {loading ? "Sending..." : t("subscribe")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
