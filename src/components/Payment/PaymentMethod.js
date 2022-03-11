import React, { useState } from "react";
import { Link } from "react-router-dom";
import { InformationCircleIcon } from "@heroicons/react/outline";
import { Successful } from "..";
import { useTranslation } from "react-i18next";
const PaymentMethod = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <Successful
        modalOpen={modalOpen}
        closeModal={() => setModalOpen(false)}
      />

      <div className=" w-full md:border-r-2 border-gray-400 border-dashed">
        <h1 className="text-3xl my-3 px-5 font-bold text-transparent bg-clip-text bg-gradient-to-r text-left from-to to-from">
          {t("payment_method")}
        </h1>
        {/* -----------------payment description paragraph---------------- */}
        <p className="text-xl text-secondary px-5 tracking-wide font-semibold mb-10">
          {t("payment_method_paragraph")}
        </p>
        {/* -----------------card payment------------------- */}
        <div className="space-y-5 my-10 w-full px-5">
          <div className="flex items-center rounded-lg bg-[#F2F7FE] w-44 h-9 mt-4">
            <input type="checkbox" className="w-5 h-5  rounded-lg ml-3" />
            <span className="font-medium text-lg mx-2">
              {t("card_payment")}
            </span>
          </div>
          {/* -----------------credit card details---------------- */}
          <p className="font-bold text-2xl">{t("credit_card_details")}</p>
          {/* -----------name------------------ */}
          <div>
            <input
              type="text"
              placeholder={t("name_on_card")}
              className="w-full h-12 px-3 border border-gray-300  outline-none rounded-tl-3xl rounded-br-3xl rounded-tr-none rounded-bl-none "
            />
          </div>
          {/* ----------card number------------------- */}
          <div>
            <input
              type="text"
              placeholder={t("card_number")}
              className="w-full h-12 px-3 border border-gray-300 outline-none rounded-tl-3xl rounded-br-3xl rounded-tr-none rounded-bl-none "
            />
          </div>
          <div className="flex items-center relative">
            {/* ----------------exp date------------ */}
            <input
              type="date"
              className="w-1/2 h-12 px-3 mr-6 border-gray-300 border outline-none rounded-tl-3xl rounded-br-3xl rounded-tr-none rounded-bl-none "
            />
            {/* ----------------CCV------------ */}
            <input
              type="text"
              placeholder="CVV"
              className="w-1/2 h-12 px-3 border border-gray-300 outline-none rounded-tl-3xl rounded-br-3xl rounded-tr-none rounded-bl-none "
            />
            <InformationCircleIcon className="w-5 h-5 cursor-pointer absolute top-3 right-5" />
          </div>
        </div>

        {/* -----------------stipe payment------------------- */}
        <div className="space-y-5 mt-20 px-5">
          <div className="flex items-center rounded-lg bg-[#F2F7FE] w-44 h-9 mt-4">
            <input type="checkbox" className="w-5 h-5 rounded-lg ml-3" />
            <span className="font-medium text-lg mx-2">
              {t("stripe_payment")}
            </span>
          </div>
          {/* --------------stripe img-------------- */}
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png"
              alt="stripe"
              className="h-16 object-contain inline-block"
            />
          </div>
          {/* -----------------stripe details---------------- */}
          <p className="font-bold text-2xl text-[#6E7491] mb-7">
            {t("create_your_account")}
          </p>
          {/* -----------name------------------ */}
          <div>
            <input
              type="text"
              placeholder={t("email_address_or_phone_number")}
              className="w-full h-12 px-3 border border-gray-300 outline-none rounded-tl-3xl rounded-br-3xl rounded-tr-none rounded-bl-none "
            />
          </div>
          <div>
            <input
              type="password"
              placeholder={t("password")}
              className="w-full h-12 px-3 border border-gray-300 outline-none rounded-tl-3xl rounded-br-3xl rounded-tr-none rounded-bl-none "
            />
          </div>
          {/* ---------------horizontal line--------------------- */}
          <div className="flex items-center ">
            <hr className="border w-2/4" />
            <p className="mx-5 whitespace-nowrap text-lg text-secondary">Or</p>
            <hr className="border w-2/4" />
          </div>
          {/* --------------social sign in button-------------- */}
          <div className="flex items-center  space-x-6">
            <button className="border  text-xl border-gray-300 font-semibold w-[105px] h-[58px] rounded-tl-[29px] rounded-br-[29px] rounded-tr-none rounded-bl-none outline-none">
              <img
                src="https://img.icons8.com/ios-glyphs/30/000000/mac-os.png"
                alt="applelogo"
                className="h-8 w-8 mx-auto"
              />
            </button>
            <button className="border text-xl border-gray-300 font-semibold w-[105px] h-[58px] rounded-tl-[29px] rounded-br-[29px] rounded-tr-none rounded-bl-none outline-none">
              <img
                src="https://img.icons8.com/color/48/000000/google-logo.png"
                alt="googlelogo"
                className="w-8 h-8 mx-auto"
              />
            </button>
            <button className="border text-xl border-gray-300 font-semibold w-[105px] h-[58px] rounded-tl-[29px] rounded-br-[29px] rounded-tr-none rounded-bl-none outline-none">
              <img
                src="https://img.icons8.com/color/48/000000/facebook-new.png"
                alt="facebooklogo"
                className="w-8 h-8 mx-auto"
              />
            </button>
          </div>
        </div>

        {/* -----------------cancellation policy ---------------- */}
        <div className="my-10 px-5">
          <p className="text-2xl mb-5 text-secondary font-semibold block">
            {t("cancellation_policy")}
          </p>
          <p className="text-[#c4c4c4] text-xl font-normal w-full">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
            <span className="text-primary mx-1">full cancellation policy</span>
            for this flight.
          </p>
          <div className="flex mt-10">
            {/* <Link></Link> */}
            <button
              className="font-bold text-center mr-5 text-xl bg-primary text-white border  w-48 h-14 rounded-tl-3xl  rounded-br-3xl rounded-tr-none rounded-bl-none"
              onClick={() => setModalOpen(true)}
            >
              {t("confirm_and_pay")}
            </button>
            <Link to="/courses/aboutcourse">
              <button className="font-bold text-center text-xl border border-secondary w-28 h-14 rounded-tl-3xl  rounded-br-3xl rounded-tr-none rounded-bl-none">
                {t("cancel")}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentMethod;
