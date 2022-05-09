import React, { useState } from "react";
import axios from "axios";
import { MetaTags } from "react-meta-tags";
import { toast, ToastContainer } from "react-toastify";
import { OtpVerify } from "../components";
import { useTranslation } from "react-i18next";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const CloseModal = () => setOpenModal(false);
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "")
      return toast("you have to enter Email", { type: "warning" });
    await axios("https://chessmafia.com/php/luxgap/App/api/forgot-password", {
      method: "POST",
      params: { email: email },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        const { email } = res?.data?.data;
        const { otp } = res?.data?.data;
        if (res.status === 200) {
          console.log("email ->", email);
          console.log("otp ->", otp);
          setEmail(email);
          setOtp(otp);
          setOpenModal(true);
          return true;
        }
      })
      .catch((err) => {
        const { data } = err.response;
        if (data.message === "Email id is not found") {
          return toast(data.message, { type: "error" });
        }
      });
  };
  return (
    <>
      <MetaTags>
        <title>Forgot Password</title>
      </MetaTags>

      {/* -----------react toasatify toast container--------------- */}

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="md:h-[500px] h-full md:w-[500px] w-full p-5 space-y-5 absolute top-[10%] left-1/2 -translate-x-1/2 flex flex-col items-center justify-center  rounded-tl-[130px] rounded-br-[130px] rounded-tr-none rounded-bl-none sm:shadow-2xl bg-white">
        <h1 className="font-bold text-4xl text-center tracking-wide">
          {t("Forgot Password")}
        </h1>
        <p className="font-light text-lg">
          {t(
            "Enter the email address you used when you joined and we’ll send youinstructions to reset your password"
          )}
          .
        </p>
        <p className="font-light text-lg">
          {t(
            "store your password. So rest assured that we will never send your password via email. For security reasons, we do NOT"
          )}
        </p>
        {/* -------------input fieilds--------------- */}
        <form action="post" onSubmit={handleSubmit} className="w-full">
          <div className="space-y-2 w-full">
            <div>
              {/* <label className="font-semibold text-2xl">Email</label> */}
              <input
                type="email"
                placeholder={`${t("type_your_email")}`}
                name="email"
                value={email}
                // required
                onChange={(e) => setEmail(e.target.value)}
                className={`border px-6 w-full h-[56px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none outline-none`}
              />
            </div>
            <div>
              <button
                type="submit"
                className={`border active:scale-95 transition transform duration-100 ease-in-out text-lg font-semibold text-white text-center px-6 w-full h-[56px] bg-gradient-to-r from-to to-from rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none outline-none`}
                onClick={handleSubmit}
              >
                {t("Submit")}
              </button>
              {openModal && (
                <OtpVerify
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                  CloseModal={CloseModal}
                  email={email}
                  otp={otp}
                />
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
