import { XIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, Navigate } from "react-router-dom";
import ResetPassword from "../pages/ResetPassword";

const OtpVerify = ({ openModal, CloseModal, email, otp }) => {
  const [EnterOtp, SetEnterOtp] = useState("");
  const [loading, setLaoding] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLaoding(true);
    if (otp === "") return alert("you have to enter otp");
    await axios("https://chessmafia.com/php/luxgap/App/api/otp-verify", {
      method: "POST",
      params: { email, otp: EnterOtp },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          return navigate("/resetpassword", { state: { email: email } });
        }
      })
      .catch((err) => {
        const error = err?.response?.data?.message;
        if (error === "OTP is not valid") {
          return toast("OTP is not valid!", { type: "error" });
        }
      });
  };
  useEffect(() => {
    Modal.setAppElement("body");
  }, []);

  return (
    <Modal
      appElement={document.getElementById("root")}
      isOpen={openModal}
      onRequestClose={() => CloseModal()}
      preventScroll={false}
    >
      <button onClick={() => CloseModal()}>
        <XIcon className="h-9 z-10 absolute top-3 right-4" />
      </button>
      <div className="md:h-[500px] h-full md:w-[500px] w-full p-5 space-y-5 mt-5 absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center  rounded-tl-[130px] rounded-br-[130px] rounded-tr-none rounded-bl-none sm:shadow-2xl bg-white">
        <h1 className="font-bold text-4xl text-center tracking-wide">
          Enter yout OTP
        </h1>

        {/* -------------input fieilds--------------- */}
        <form action="post" onSubmit={handleSubmit} className="w-full">
          <div className="space-y-2 w-full">
            <div>
              <input
                type="email"
                name="email"
                value={email}
                disabled={true}
                className={`border px-6 w-full h-[56px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none outline-none`}
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Enter your otp here"
                name="otp"
                onChange={(e) => SetEnterOtp(e.target.value)}
                className={`border px-6 w-full h-[56px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none outline-none`}
              />
            </div>
            <div>
              <button
                type="submit"
                className={`border active:scale-95 transition transform duration-100 ease-in-out text-lg font-semibold text-white text-center px-6 w-full h-[56px] bg-gradient-to-r from-to to-from rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none outline-none`}
                onClick={handleSubmit}
              >
                {loading ? "Loading..." : "Check"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default OtpVerify;
