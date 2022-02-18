import React, { useState } from "react";
import { MetaTags } from "react-meta-tags";
import { Link } from "react-router-dom";
import logo from "../assets/LXG_RVB.png";
import signin from "../assets/signin.jpg";
import { EyeOffIcon, EyeIcon, XIcon } from "@heroicons/react/outline";

const SignIn = () => {
  const [showPassword, setShowpassword] = useState(false);
  return (
    <>
      <MetaTags>
        <title>Sign In</title>
      </MetaTags>
      {/* -------------main div---------------- */}
      <div className="p-10">
        {/* --------------logo------------------- */}
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="object-cover object-center h-16 cursor-pointer inline-block"
          />
        </Link>

        {/* --------------------grid div---------------- */}
        <div className="m-10 grid grid-cols-2 gap-5 grid-rows-1 justify-items-center">
          {/* ----------image------------- */}
          <div>
            <img
              src={signin}
              alt="signin"
              className="object-center object-cover w-[624px] h-[748px] rounded-tl-[312px] rounded-br-[312px] rounded-tr-none rounded-bl-none "
            />
          </div>
          <div className="space-y-7">
            {/* ----------form start from here */}
            <div className="flex justify-between items-center">
              <h1 className="font-bold text-4xl block my-5">
                Sign In
              </h1>
              <Link to="/">
                <XIcon className="w-8 h-8 cursor-pointer" color="gray" />
              </Link>
            </div>
            {/* ------------------radio box-------------- */}
            <div className="flex items-center justify-around space-x-10">
              <div className="border border-primary rounded-tl-[30px] rounded-br-[30px] rounded-bl-none rounded-tr-none w-[182px] h-[61px] relative">
                <input
                  type="radio"
                  placeholder="employee"
                  name="signinbox"
                  className="cursor-pointer absolute top-6 left-5"
                />
                <span className="absolute top-4 left-10 text-lg font-normal text-black">
                  employee
                </span>
              </div>
              <div className="border rounded-tl-[30px] rounded-br-[30px] rounded-bl-none rounded-tr-none w-[182px] h-[61px] relative">
                <input
                  type="radio"
                  placeholder="employee"
                  name="signinbox"
                  className="cursor-pointer absolute top-6 left-5"
                />
                <span className="absolute top-4 left-10 text-lg font-normal text-secondary">
                  employer
                </span>
              </div>
            </div>

            {/* --------------email------------------ */}
            <div>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="border px-6 w-[400px] h-[56px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none outline-none"
              />
            </div>
            {/* --------------password------------------ */}

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                name="password"
                className="border px-6 w-[400px] h-[56px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none outline-none"
              />
              <button
                className="w-5 h-5 absolute top-4 right-5 cursor-pointer"
                onClick={() => setShowpassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeIcon className="h-5 w-5 " color="gray" />
                ) : (
                  <EyeOffIcon className="w-5 h-5 " color="gray" />
                )}
              </button>
            </div>

            {/* --------------forgot password------------------ */}
            <div className=" cursor-pointer text-right">
              <button className="text-secondary font-bold text-xl ">
                Forgot password?
              </button>
            </div>

            {/* ---------------sign in button-------------- */}
            <button className="border bg-gradient-to-tr text-white text-xl font-semibold from-to to-from w-[400px] h-[56px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none">
              Sign in
            </button>

            {/* ----------text sign in with------------ */}
            <div className="flex items-center justify-center w-full">
              <hr className="border w-[40%]" />
              <p className="mx-5 whitespace-nowrap text-lg text-secondary">
                Or sign in with
              </p>
              <hr className="border w-[40%]" />
            </div>

            {/* --------------social sign in button-------------- */}
            <div className="flex items-center justify-center space-x-6">
              <button className="border  text-xl font-semibold w-[105px] h-[58px] rounded-tl-[29px] rounded-br-[29px] rounded-tr-none rounded-bl-none outline-none">
                <img
                  src="https://img.icons8.com/ios-glyphs/30/000000/mac-os.png"
                  alt="applelogo"
                  className="h-8 w-8 mx-auto"
                />
              </button>
              <button className="border text-xl font-semibold w-[105px] h-[58px] rounded-tl-[29px] rounded-br-[29px] rounded-tr-none rounded-bl-none outline-none">
                <img
                  src="https://img.icons8.com/color/48/000000/google-logo.png"
                  alt="googlelogo"
                  className="w-8 h-8 mx-auto"
                />
              </button>
              <button className="border text-xl font-semibold w-[105px] h-[58px] rounded-tl-[29px] rounded-br-[29px] rounded-tr-none rounded-bl-none outline-none">
                <img
                  src="https://img.icons8.com/color/48/000000/facebook-new.png"
                  alt="facebooklogo"
                  className="w-8 h-8 mx-auto"
                />
              </button>
            </div>

            {/* ---------sign up here---------- */}
            <p className="text-xl text-center font-bold">
              Don't have account?
              <Link to="/signup">
                <span className="text-primary mx-2">Sign up here</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
