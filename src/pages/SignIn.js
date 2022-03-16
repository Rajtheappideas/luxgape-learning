import React, { useEffect, useState } from "react";
import { MetaTags } from "react-meta-tags";
import { Link } from "react-router-dom";
import logo from "../assets/LXG_RVB.png";
import signin from "../assets/signin.jpg";
import { EyeOffIcon, EyeIcon, XIcon } from "@heroicons/react/outline";
import { useFormik, Form, FormikProvider, ErrorMessage } from "formik";
import * as yup from "yup";
import GoogleLogin from "react-google-login";
// import FacebookLogin from "react-facebook-login";
import useUserData from "../hooks/useUserData";
import { useUserContext } from "../context/usercontext";
import tw from "tailwind-styled-components/dist/tailwind";
import ForgotPassword from "../components/ForgotPassword";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SignIn = () => {
  const [showPassword, setShowpassword] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  // ----------------language tranlate-----------
  const { t } = useTranslation();

  // ------------------userhook-----------------------
  const { handleFailure, handleLogout, handleSuccess } = useUserData();

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
      userType: "employee",
    },
    validationSchema: SigninSchema,
    onSubmit: async (values) => {
      const user = {
        email: values.email,
        password: values.password,
        usertype: values.userType,
      };
      console.log(user);
      resetForm();
    },
  });
  const {
    errors,
    touched,
    resetForm,
    handleSubmit,
    isSubmitting,
    getFieldProps,
  } = formik;

  // ------------------error text color tailwind-------------
  const TextError = tw.span`
  text-red-500
  `;

  // ------------------error text color tailwind-------------
  const handleModal = () => setOpenModal(false);

  // --------facebook login------------
  // useEffect(() => {
  //   responseFacebook();
  // }, []);
  // const responseFacebook = (response) => {
  //   console.log(response);
  // };
  useEffect(() => {}, [t]);

  return (
    <>
      <MetaTags>
        <title>{t("Sign_In")}</title>
      </MetaTags>
      {/* -------------main div---------------- */}
      <div className="sm:p-10">
        {/* --------------logo------------------- */}
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="object-cover object-center sm:m-0 m-5 h-16 cursor-pointer inline-block"
          />
        </Link>

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
                {/* ------------------radio box-------------- */}

                <div className="flex flex-row items-center justify-around sm:space-x-10 space-x-2 w-full">
                  {/* ----------------butoon 1----------------- */}
                  <div
                    className={`border ${
                      formik.values.userType === "employee" && "border-primary"
                    } rounded-tl-[30px] rounded-br-[30px] rounded-bl-none rounded-tr-none sm:w-full w-1/2 h-[61px] relative`}
                  >
                    <input
                      className="cursor-pointer w-4 h-4 absolute top-6 left-5"
                      type="radio"
                      name="userType"
                      id="employee"
                      value="employee"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      checked={formik.values.userType === "employee"}
                    />
                    <span className="absolute top-4 left-10 text-lg font-normal text-black">
                      {t("employee")}
                    </span>
                  </div>
                  {/* ----------------butoon 2----------------- */}

                  <div
                    className={`border ${
                      formik.values.userType === "employer" && "border-primary"
                    } rounded-tl-[30px] rounded-br-[30px] rounded-bl-none rounded-tr-none sm:w-full w-1/2 h-[61px] relative`}
                  >
                    <input
                      className="cursor-pointer absolute w-4 h-4 top-6 left-5"
                      type="radio"
                      name="userType"
                      id="employer"
                      value="employer"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      checked={formik.values.userType === "employer"}
                    />
                    <span className="absolute top-4 left-10 text-lg font-normal text-secondary">
                      {t("employer")}
                    </span>
                  </div>
                </div>

                {/* --------------email------------------ */}
                <div className="w-full">
                  <input
                    type="email"
                    placeholder={t("email")}
                    name="email"
                    {...getFieldProps("email")}
                    className={`border px-6 w-full h-[56px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none outline-none
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
                    className={`border px-6 w-full h-[56px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none outline-none
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
                <div className=" cursor-pointer text-right w-full">
                  <button
                    type="button"
                    className="text-secondary font-bold text-xl "
                    onClick={() => setOpenModal(true)}
                  >
                    {t("Forgot_password")}?
                  </button>
                  {openModal && (
                    <ForgotPassword
                      openModal={openModal}
                      setOpenModal={setOpenModal}
                      handleModal={handleModal}
                    />
                  )}
                </div>

                {/* ---------------sign in button-------------- */}
                <div className="w-full">
                  <button
                    type="submit"
                    className="border bg-gradient-to-tr text-white text-xl font-semibold from-to to-from w-full h-[56px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none"
                  >
                    {isSubmitting ? "Loading" : null}
                    {t("Sign_In")}
                  </button>
                </div>

                {/* ----------text sign in with------------ */}
                <div className="flex items-center justify-center w-full">
                  <hr className="border w-[40%]" />
                  <p className="mx-5 whitespace-nowrap text-lg text-secondary">
                    {t("Or_sign_in_with")}
                  </p>
                  <hr className="border w-[40%]" />
                </div>

                {/* --------------social sign in button-------------- */}
                <div className="flex flex-wrap items-center justify-center sm:space-x-6 space-x-2 w-full">
                  <button
                    type="button"
                    className="border  text-xl font-semibold w-[105px] h-[58px] rounded-tl-[29px] rounded-br-[29px] rounded-tr-none rounded-bl-none outline-none"
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
                      {t("log_out")}
                    </button>
                  ) : (
                    <div className="relative">
                      <button
                        type="button"
                        className="border text-xl font-semibold w-[105px] h-[58px] rounded-tl-[29px] rounded-br-[29px] rounded-tr-none rounded-bl-none outline-none"
                      >
                        <LazyLoadImage
                          src="https://img.icons8.com/color/48/000000/google-logo.png"
                          alt="googlelogo"
                          className="w-8 h-8 mx-auto z-50"
                        />
                      </button>
                      <div className="absolute inset-0 opacity-0">
                        <GoogleLogin
                          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                          buttonText=""
                          onSuccess={handleSuccess}
                          onFailure={handleFailure}
                          cookiePolicy={"single_host_origin"}
                          className="h-full w-full"
                        ></GoogleLogin>
                      </div>
                    </div>
                  )}

                  <button
                    type="button"
                    className="border text-xl font-semibold w-[105px] h-[58px] rounded-tl-[29px] rounded-br-[29px] rounded-tr-none rounded-bl-none outline-none"
                  >
                    <LazyLoadImage
                      src="https://img.icons8.com/color/48/000000/facebook-new.png"
                      alt="facebooklogo"
                      className="w-8 h-8 mx-auto"
                    />
                  </button>
                  {/* <FacebookLogin
                    appId="351223826901579"
                    autoLoad={true}
                    fields="name,email,picture"
                    textButton="login"
                    callback={responseFacebook}
                    className="h-10 w-auto"
                  /> */}
                </div>

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
