import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Successful } from "..";
import { useTranslation } from "react-i18next";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useUserContext } from "../../context/usercontext";
import { toast } from "react-toastify";

const PaymentMethod = ({ product }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [radioBtn, setRadioBtn] = useState(true);
  const [loading, setLoading] = useState(false);
  const [enterCouponCode, setEnterCouponCode] = useState("");

  const { t } = useTranslation();

  const { userLanguage, userData } = useUserContext();
  const today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth();
  let yyyy = today.getFullYear();

  let hours = today.getHours();
  let seconds = today.getSeconds();
  let milliseconds = today.getMilliseconds();

  const makePayment = (token) => {
    if (!radioBtn) {
      toast("press the radio button", { type: "warning" });
      return false;
    }
    setLoading(true);
    axios("https://chessmafia.com/php/luxgap/App/api/course-booking", {
      method: "POST",
      params: {
        lang_code: userLanguage,
        course_id: product?.course_details?.course_id,
        coupon_id: null,
        discount_amount: 5,
        price: product?.price,
        grand_total: 35,
        booking_time: `${hours}:${seconds}:${milliseconds}`,
        booking_date: `${dd}/${mm}/${yyyy}`,
        stripe_token: token?.id,
        payment_method: "stripe",
      },
      headers: {
        "content-type": "application/json",
        "consumer-access-token": userData?.api_token,
      },
    })
      .then((response) => {
        console.log(response?.data?.data);
        if (response?.status === 200) {
          setLoading(false);
          setModalOpen(true);
        }
      })
      .catch((err) => {
        if (err?.response?.data) {
          console.log(err?.response?.data);
          setLoading(false);
        }
      });
      console.log(token)
  };

  const handleCouponeCode = () => {
    if (enterCouponCode === "") {
      toast("Oops forgot to enter coupon code!!", { type: "warning" });
      return false;
    }
    setLoading(true);
    axios("https://chessmafia.com/php/luxgap/App/api/apply-coupon", {
      method: "POST",
      params: {
        lang_code: userLanguage,
        coupon_code: enterCouponCode || null,
      },
    })
      .then((response) => {
        if (
          response?.data?.status === "Success" &&
          response?.data?.data?.coupon_code === enterCouponCode
        ) {
          toast("coupon code apply", { type: "success" });
          console.log("cc -> ", response?.data?.data);
          setLoading(false);
          return true;
        } else if (response?.data?.status === "Error") {
          toast(response?.data?.message, { type: "error" });
          setLoading(false);
          return false;
        }
      })
      .catch((err) => {
        console.log(err?.response?.data);
        setLoading(false);
        return false;
      });
  };
  return (
    <>
      <Successful
        modalOpen={modalOpen}
        closeModal={() => setModalOpen(false)}
      />

      <div className=" w-full md:border-r-2 border-gray-400 border-dashed">
        <h1 className="text-3xl mb-3 sm:px-5 font-bold text-transparent bg-clip-text bg-gradient-to-r text-left from-to to-from">
          {t("payment_method")}
        </h1>
        {/* -----------------payment description paragraph---------------- */}
        <p className="text-xl text-secondary sm:px-5 tracking-wide font-semibold mb-5">
          {t("payment_method_paragraph")}
        </p>
        {/* -----------------stipe payment------------------- */}
        <div className="space-y-5 sm:px-5">
          {/* --------------stripe img-------------- */}
          <div className="flex items-center">
            <input
              name="stripe"
              type="radio"
              checked={radioBtn}
              onChange={(e) => setRadioBtn(e.target.value)}
              onClick={() => setRadioBtn(true)}
              className="w-5 h-5 cursor-pointer"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png"
              alt="stripe"
              className="h-16 object-contain inline-block"
            />
          </div>
          <div className="flex items-end lg:flex-row flex-col lg:space-x-3 w-full lg:space-y-0 space-y-3">
            <div className="w-full">
              <label className="font-semibold text-xl mb-1 text-secondary">
                Promo Code / Coupon
              </label>
              <input
                type="text"
                placeholder="Enter Coupon Code here"
                value={enterCouponCode}
                className="rounded-tl-3xl rounded-br-3xl px-2 rounded-tr-none rounded-bl-none w-full h-12 border focus:border-lime-500 outline-none"
                onChange={(e) => setEnterCouponCode(e.target.value)}
              />
            </div>
            <div className="w-full">
              <button
                type="button"
                className={`rounded-xl bg-gradient-to-r rounded-tl-3xl rounded-br-3xl rounded-tr-none rounded-bl-none outline-none  from-to to-from lg:w-40 w-full h-12 p-2 text-white text-xl font-semibold active:scale-95 duration-200 transition-all ease-in-out`}
                onClick={handleCouponeCode}
              >
                {loading ? "Checking..." : "Apply"}
              </button>
            </div>
          </div>
        </div>

        {/* -----------------cancellation policy ---------------- */}
        <div className="mt-10 sm:px-5">
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
          <div className="flex items-center sm:flex-row flex-col mt-5 w-full">
            <StripeCheckout
              token={makePayment}
              amount={product?.price * 100}
              name="Buy course"
              stripeKey={process.env.REACT_APP_KEY}
            >
              <button
                type="button"
                className="font-bold text-center sm:mr-4 sm:mb-0 mb-2 text-xl bg-primary text-white border  sm:w-48 w-60 h-14 rounded-tl-3xl  rounded-br-3xl rounded-tr-none rounded-bl-none"
                // onClick={makePayment}
              >
                {t("confirm_and_pay")}
              </button>
            </StripeCheckout>
            <Link to="/courses">
              <button
                type="button"
                className="font-bold text-center text-xl border border-secondary sm:w-28 w-60 h-14 rounded-tl-3xl  rounded-br-3xl rounded-tr-none rounded-bl-none"
              >
                {t("cancel")}
              </button>
            </Link>
          </div>
        </div>
        {/* -----------------card payment------------------- */}
        {/* <div className="space-y-5 my-10 w-full sm:px-5"> */}
        {/* <div className="flex items-center rounded-lg bg-[#F2F7FE] w-48 h-auto p-1 mt-4">
            <input type="checkbox" className="w-5 h-5  rounded-lg ml-3" />
            <span className="font-medium whitespace-nowrap text-lg mx-2">
              {t("card_payment")}
            </span>
          </div> */}
        {/* -----------------credit card details---------------- */}
        {/* <p className="font-bold text-2xl">{t("credit_card_details")}</p> */}
        {/* -----------name------------------ */}
        {/* <div>
            <input
              type="text"
              placeholder={t("name_on_card")}
              className="w-full h-12 px-3 border border-gray-300  outline-none rounded-tl-3xl rounded-br-3xl rounded-tr-none rounded-bl-none "
            />
          </div> */}
        {/* ----------card number------------------- */}
        {/* <div>
            <input
              type="text"
              placeholder={t("card_number")}
              className="w-full h-12 px-3 border border-gray-300 outline-none rounded-tl-3xl rounded-br-3xl rounded-tr-none rounded-bl-none "
            />
          </div> */}
        {/* <div className="flex items-center relative"> */}
        {/* ----------------exp date------------ */}
        {/* <input
              type="date"
              className="w-1/2 h-12 px-3 mr-6 border-gray-300 border outline-none rounded-tl-3xl rounded-br-3xl rounded-tr-none rounded-bl-none "
            /> */}
        {/* ----------------CCV------------ */}
        {/* <input
              type="text"
              placeholder="CVV"
              className="w-1/2 h-12 px-3 border border-gray-300 outline-none rounded-tl-3xl rounded-br-3xl rounded-tr-none rounded-bl-none "
            />
            <InformationCircleIcon className="w-5 h-5 cursor-pointer absolute top-3 right-5" /> */}
        {/* </div>
        </div> */}
      </div>
    </>
  );
};

export default PaymentMethod;
