import React, { useState } from "react";
import axios from "axios";
import { MetaTags } from "react-meta-tags";
import { toast, ToastContainer } from "react-toastify";
import { useLocation, Link } from "react-router-dom";
import { EyeOffIcon, EyeIcon } from "@heroicons/react/outline";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [ShowPassword, setShowPassword] = useState(false);
  const { email } = useLocation().state;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === "" || ConfirmPassword === "") {
      return toast("you have to enter password and confirm password!", {
        type: "warning",
      });
    }

    await axios("https://chessmafia.com/php/luxgap/App/api/reset-password", {
      method: "POST",
      params: { email: email, password: password },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        const response = res?.data;
        if (password === ConfirmPassword) {
          toast("password reset successfully", { type: "success" });
          return true;
        } else {
          toast("confirm password does not mach with password!", {
            type: "warning",
          });
          return false;
        }
      })
      .catch((err) => {
        const error = err?.response?.data?.message;
        if (error === "OTP is not valid") {
          return toast("OTP is not valid!", { type: "error" });
        }
      });
  };
  return (
    <>
      <MetaTags>
        <title>Reset Password</title>
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
          Reset Password
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
            <div className="relative">
              <input
                type={ShowPassword ? "text" : "password"}
                placeholder="Enter your new password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                className={`border px-6 w-full h-[56px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none outline-none`}
              />
              <button
                type="button"
                className="absolute right-4 top-4"
                onClick={() => setShowPassword(!ShowPassword)}
              >
                {ShowPassword ? (
                  <EyeIcon className="h-5" />
                ) : (
                  <EyeOffIcon className="h-5" />
                )}
              </button>
            </div>
            <div>
              <input
                type="password"
                placeholder="Confirm your password"
                name="ConfirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`border px-6 w-full h-[56px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none outline-none`}
              />
            </div>
            <div>
              <button
                type="submit"
                className={`border active:scale-95 transition transform duration-100 ease-in-out text-lg font-semibold text-white text-center px-6 w-full h-[56px] bg-gradient-to-r from-to to-from rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none outline-none`}
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
            <div>
              <Link to="/signin">
                <button
                  type="button"
                  className={`border active:scale-95 transition transform duration-100 ease-in-out text-lg font-semibold text-white text-center px-6 w-full h-[56px] bg-gradient-to-r from-to to-from rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none outline-none`}
                >
                  Back to Login
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
