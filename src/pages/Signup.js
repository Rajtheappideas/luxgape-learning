import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { MetaTags } from "react-meta-tags";
import { Link } from "react-router-dom";
import logo from "../assets/LXG_RVB.png";
import signup from "../assets/signup.jpg";
import { XIcon } from "@heroicons/react/outline";

const Signup = () => {
  const [showPassword, setShowpassword] = useState(false);
  const [showConfirmPassword, setShowConfirmpassword] = useState(false);

  return (
    <>
      <MetaTags>
        <title>Sign Up</title>
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
              src={signup}
              alt="signin"
              className="object-center object-cover w-[624px] h-[748px] rounded-tl-[312px] rounded-br-[312px] rounded-tr-none rounded-bl-none "
            />
          </div>
          <div className="space-y-7">
            {/* ----------form start from here */}
            <div className="flex justify-between items-center">
              <h1 className="font-bold text-4xl block my-5">
                Create your account
              </h1>
              <Link to="/">
                <XIcon className="w-8 h-8 cursor-pointer" color="gray" />
              </Link>
            </div>

            {/* --------------name------------------ */}
            <div>
              <input
                type="text"
                placeholder="type your name"
                name="name"
                className="border px-6 w-[400px] h-[56px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none outline-none"
              />
            </div>
            {/* --------------email------------------ */}
            <div>
              <input
                type="email"
                placeholder="type your email"
                name="email"
                className="border px-6 w-[400px] h-[56px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none outline-none"
              />
            </div>
            {/* --------------password------------------ */}

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="type your password"
                name="password"
                className="border px-6 w-[400px] h-[56px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none outline-none"
              />
              <button
                className="w-5 h-5 absolute top-4 right-8 cursor-pointer"
                onClick={() => setShowpassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeIcon className="h-5 w-5 " color="gray" />
                ) : (
                  <EyeOffIcon className="w-5 h-5 " color="gray" />
                )}
              </button>
            </div>
            {/* --------------confirm password------------------ */}

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="confirm password"
                name="password"
                className="border text-secondary px-6 w-[400px] h-[56px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none outline-none"
              />
              <button
                className="w-5 h-5 absolute top-4 right-8 cursor-pointer"
                onClick={() => setShowConfirmpassword(!showPassword)}
              >
                {showConfirmPassword ? (
                  <EyeIcon className="h-5 w-5 " color="gray" />
                ) : (
                  <EyeOffIcon className="w-5 h-5 " color="gray" />
                )}
              </button>
            </div>

            {/* -----------terms of service----------- */}

            <div className="flex items-center w-full">
              <span className="border border-primary mr-1 w-6 h-6 rounded-tl-[12px] rounded-br-[12px] rounded-tr-none rounded-bl-none " />
              <p className="text-xl text-secondary">
                I have read and agree to the
                <span className="text-primary ml-1">Terms of Service</span>
              </p>
            </div>
            {/* ---------------sign in button-------------- */}
            <button className="border bg-gradient-to-tr text-white text-xl font-semibold from-to to-from w-[400px] h-[56px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none">
              Sign up
            </button>

            {/* ---------sign up here---------- */}
            <p className="text-xl text-center font-bold">
              Already have an account?
              <Link to="/signin">
                <span className="text-primary mx-2">Sign in here</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
