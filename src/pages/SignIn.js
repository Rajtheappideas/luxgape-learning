import React, { useEffect, useState } from "react";
import { MetaTags } from "react-meta-tags";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/LXG_RVB.png";
import signin from "../assets/signin.jpg";
import {
  EyeOffIcon,
  EyeIcon,
  XIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";
import { useFormik, Form, FormikProvider, ErrorMessage } from "formik";
import * as yup from "yup";
import { useUserContext } from "../context/usercontext";
import tw from "tailwind-styled-components/dist/tailwind";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ToastContainer, toast } from "react-toastify";
import Lottie from "react-lottie";
import loading from "../assets/animations/loading1.json";
import axios from "axios";

const SignIn = () => {
  const [showPassword, setShowpassword] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { ChangeLanguage, setUserdata } = useUserContext();

  // ----------deafult options for lotiie files animation--------
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const lang_code = localStorage.getItem("lang_code");

  const navigate = useNavigate();
  // ----------------language tranlate-----------
  const { t } = useTranslation();

  // ------------------usercontext-----------------------
  const { userData } = useUserContext();

  // --------------------yup-------------
  const SigninSchema = yup.object().shape({
    email: yup.string().required(t("email_is_required")).email(),
    password: yup.string().required(t("password_is_required")),
  });

  // --------------------------formik-------------

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      role: "Employee",
    },
    validationSchema: SigninSchema,
    onSubmit: async (values) => {
      const user = {
        username: values.email,
        password: values.password,
        role: values.role,
        lang_code: lang_code,
      };
      await axios
        .post("https://chessmafia.com/php/luxgap/App/api/login", user, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          const data = res?.data?.data;
          if (res.status === 200) {
            localStorage.setItem("user", JSON.stringify(data?.result));
            setUserdata(data?.result);
            navigate("/");
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          } else {
            return false;
          }
        })

        .catch((err) => {
          const { message } = err?.response?.data;
          if (message === "Credentials mismatch") {
            toast("Email and password are wrong!", { type: "error" });
          } else {
            return true;
          }
        });
    },
  });
  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  // ------------------error text color tailwind-------------
  const TextError = tw.span`
  text-red-500
  `;

  return (
    <>
      <MetaTags>
        <title>{t("Sign_In")}</title>
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
      {/* -------------main div---------------- */}
      <div className="sm:p-10">
        {/* --------------logo & lang box------------------- */}
        <div className="flex justify-between items-center">
          <Link to="/">
            <LazyLoadImage
              src={logo}
              alt="logo"
              className="object-cover object-center h-16 sm:m-0 m-2 cursor-pointer inline-block"
            />
          </Link>
          {/* ---------------language dropdown-------------- */}
          <div className="flex flex-col relative items-center justify-center w-24 h-10 bg-gray-100 rounded-xl">
            <button
              className="inline-flex items-center text-lg"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              {/* <TranslateIcon className="h-5" /> */}
              {localStorage.getItem("lang_code")}
              <ChevronDownIcon className="h-5 ml-3" />
            </button>

            {showDropdown && (
              <div className="absolute -bottom-10 font-semibold h-auto rounded-br-xl rounded-bl-xl left-0 bg-gray-100 text-center text-black">
                <button
                  onClick={() => {
                    ChangeLanguage("en");
                    setShowDropdown(false);
                    localStorage.setItem("lang_code", "en");
                  }}
                  className="hover:bg-gray-400 w-full hover:text-white"
                >
                  {t("english")}
                </button>
                <button
                  onClick={() => {
                    ChangeLanguage("sp");
                    setShowDropdown(false);
                    localStorage.setItem("lang_code", "sp");
                  }}
                  className="hover:bg-gray-400 w-full hover:text-white"
                >
                  {t("spanish")}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* --------------------grid div---------------- */}
        <div className="sm:py-5 p-3 lg:grid lg:grid-cols-2 lg:gap-5 lg:grid-rows-1 lg:justify-items-center">
          {/* ----------image------------- */}
          <div className="lg:block hidden">
            <LazyLoadImage
              src={signin}
              alt="signin"
              className="object-center object-cover w-[624px] h-[748px] rounded-tl-[312px] rounded-br-[312px] rounded-tr-none rounded-bl-none "
            />
          </div>
          <FormikProvider value={formik}>
            <Form autoComplete="off" onSubmit={handleSubmit}>
              <div className="space-y-7">
                {/* ----------form start from here */}
                <div className="flex justify-between items-center">
                  <h1 className="font-bold text-4xl block my-5">
                    {t("Log_In")}
                  </h1>
                  <Link to="/">
                    <XIcon className="w-8 h-8 cursor-pointer" color="gray" />
                  </Link>
                </div>
                {/* ------------------radio box of role-------------- */}

                {/* <div className="flex flex-row items-center justify-around sm:space-x-5 space-x-2"> */}
                {/* ----------------butoon 1----------------- */}
                {/* <div
                    className={`border ${
                      formik.values.role === "Employee" && "border-primary"
                    } rounded-tl-[30px] rounded-br-[30px] rounded-bl-none rounded-tr-none lg:w-96 sm:w-full w-1/2 h-[61px] relative`}
                  >
                    <input
                      className="cursor-pointer w-4 h-4 absolute top-6 left-5"
                      type="radio"
                      name="role"
                      id="Employee"
                      value="Employee"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      checked={formik.values.role === "Employee"}
                    />
                    <span className="absolute top-4 left-10 text-lg font-normal text-black">
                      {t("employee")}
                    </span>
                  </div> */}
                {/* ----------------butoon 2----------------- */}

                {/* <div
                    className={`border ${
                      formik.values.role === "Employer" && "border-primary"
                    } rounded-tl-[30px] rounded-br-[30px] rounded-bl-none rounded-tr-none sm:w-full w-1/2 h-[61px] relative`}
                  >
                    <input
                      className="cursor-pointer absolute w-4 h-4 top-6 left-5"
                      type="radio"
                      name="role"
                      id="Employer"
                      value="Employer"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      checked={formik.values.role === "Employer"}
                    />
                    <span className="absolute top-4 left-10 text-lg font-normal text-secondary">
                      {t("employer")}
                    </span>
                  </div> */}
                {/* </div> */}

                {/* --------------email------------------ */}
                <div className="w-full">
                  <input
                    type="email"
                    placeholder={t("email")}
                    name="email"
                    {...getFieldProps("email")}
                    className={`border focus:border-2 focus:border-emerald-400 px-6 lg:w-96 h-14 w-full rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none outline-none
                    ${
                      touched.email && errors.email && "border-2 border-red-600"
                    }
                    `}
                  />
                </div>
                <ErrorMessage name="email" component={TextError} />

                {/* --------------password------------------ */}
                <div className="relative w-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder={t("type_your_password")}
                    name="password"
                    {...getFieldProps("password")}
                    className={`border focus:border-2 focus:border-emerald-400 px-6 xl:w-full lg:w-full h-14 w-full rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none outline-none
                    ${
                      touched.password &&
                      errors.password &&
                      "border-2 border-red-400"
                    }
                    `}
                  />
                  <button
                    type="button"
                    className="w-5 h-5 absolute top-4 lg:right-10 right-4 cursor-pointer"
                    onClick={() => setShowpassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeIcon className="h-5 w-5 " color="gray" />
                    ) : (
                      <EyeOffIcon className="w-5 h-5 " color="gray" />
                    )}
                  </button>
                </div>
                <ErrorMessage name="password" component={TextError} />

                {/* --------------forgot password------------------ */}
                <div className="cursor-pointer text-right w-full inline-block">
                  <Link to="/forgotpassword">
                    <button
                      type="button"
                      className="text-secondary font-bold text-xl "
                    >
                      {t("Forgot_password")}?
                    </button>
                  </Link>
                </div>

                {/* ---------------sign in button-------------- */}
                <div className="w-full">
                  <button
                    type="submit"
                    className="border active:scale-95 duration-100 transition-all ease-in-out bg-gradient-to-tr text-white text-xl font-semibold from-to to-from lg:w-96 h-14 w-full rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none"
                  >
                    {isSubmitting ? (
                      <Lottie
                        options={defaultOptions}
                        height={40}
                        width={40}
                        className="z-10"
                      />
                    ) : (
                      t("Sign_In")
                    )}
                  </button>
                </div>

                {/* ----------text sign in with------------ */}
                {/* <div className="flex items-center justify-center w-full">
                  <hr className="border w-[40%]" />
                  <p className="mx-5 whitespace-nowrap text-lg text-secondary">
                    {t("Or_sign_in_with")}
                  </p>
                  <hr className="border w-[40%]" />
                </div> */}

                {/* --------------social sign in button-------------- */}
                {/* <div className="flex items-center justify-center sm:space-x-6 space-x-2 w-full">
                  <button
                    type="button"
                    className="border active:scale-95 duration-75 transition-all ease-in-out text-xl font-semibold w-[105px] h-[58px] rounded-tl-[29px] rounded-br-[29px] rounded-tr-none rounded-bl-none outline-none"
                  >
                    <LazyLoadImage
                      src="https://img.icons8.com/ios-glyphs/30/000000/mac-os.png"
                      alt="applelogo"
                      className="h-8 w-8 mx-auto"
                    />
                  </button>
                  {userData ? (
                    <button
                      onClick={handleLogout}
                      className="w-auto p-2 bg-black text-white mb-2"
                    >
                      {t("Log_out")}
                    </button>
                  ) : (
                    <div className="relative active:scale-95 duration-75 transition-all ease-in-out">
                      <button
                        type="button"
                        className="border text-xl font-semibold w-[105px] h-[58px] rounded-tl-[29px] rounded-br-[29px] rounded-tr-none rounded-bl-none outline-none"
                      >
                        <LazyLoadImage
                          src="https://img.icons8.com/color/48/000000/google-logo.png"
                          alt="googlelogo"
                          className="w-8 h-8 mx-auto z-10"
                        />
                      </button>
                      <div className="absolute inset-0 opacity-0">
                        {/* <GoogleLogin
                          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                          onSuccess={handleSuccess}
                          onFailure={handleFailure}
                          cookiePolicy={"single_host_origin"}
                          className="h-full w-full"
                        ></GoogleLogin> */}
                {/* </div>
                    </div>
                  )}

                  <button
                    type="button"
                    className="border active:scale-95 duration-75 transition-all ease-in-out text-xl font-semibold w-[105px] h-[58px] rounded-tl-[29px] rounded-br-[29px] rounded-tr-none rounded-bl-none outline-none"
                  >
                    <LazyLoadImage
                      src="https://img.icons8.com/color/48/000000/facebook-new.png"
                      alt="facebooklogo"
                      className="w-8 h-8 mx-auto"
                    />
                  </button> */}
                {/* </div>  */}

                {/* ---------sign up here---------- */}
                <p className="text-xl text-center font-bold">
                  {t("Don't_have_account")}?
                  <Link to="/signup">
                    <span className="text-primary mx-2">
                      {t("Sign_Up", "here")}
                    </span>
                  </Link>
                </p>
              </div>
            </Form>
          </FormikProvider>
        </div>
      </div>
    </>
  );
};

export default SignIn;
