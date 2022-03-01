import React, { useState } from "react";
import { MetaTags } from "react-meta-tags";
import { Link } from "react-router-dom";
import logo from "../assets/LXG_RVB.png";
import signin from "../assets/signin.jpg";
import { EyeOffIcon, EyeIcon, XIcon } from "@heroicons/react/outline";
import { useFormik, Form, FormikProvider, ErrorMessage, Field } from "formik";
import * as yup from "yup";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import useUserData from "../hooks/useUserData";
import { useUserContext } from "../context/usercontext";
import tw from "tailwind-styled-components/dist/tailwind";
import ForgotPassword from "../components/ForgotPassword";

const SignIn = () => {
  const [showPassword, setShowpassword] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { handleFailure, handleLogout, handleSuccess } = useUserData();
  const { userData } = useUserContext();

  // --------------------yup-------------
  const SigninSchema = yup.object().shape({
    email: yup.string().required("email is required!").email(),
    password: yup.string().required("password is required!"),
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
  const responseFacebook = (response) => {
    console.log(response);
  };
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
          <FormikProvider value={formik}>
            <Form autoComplete="off" onSubmit={handleSubmit}>
              <div className="space-y-7">
                {/* ----------form start from here */}
                <div className="flex justify-between items-center">
                  <h1 className="font-bold text-4xl block my-5">Sign In</h1>
                  <Link to="/">
                    <XIcon className="w-8 h-8 cursor-pointer" color="gray" />
                  </Link>
                </div>
                {/* ------------------radio box-------------- */}

                <div className="flex items-center justify-around space-x-10">
                  {/* ----------------butoon 1----------------- */}
                  <div
                    className={`border ${
                      formik.values.userType === "employee" && "border-primary"
                    } rounded-tl-[30px] rounded-br-[30px] rounded-bl-none rounded-tr-none w-[182px] h-[61px] relative`}
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
                      employee
                    </span>
                  </div>
                  {/* ----------------butoon 2----------------- */}

                  <div
                    className={`border ${
                      formik.values.userType === "employer" && "border-primary"
                    } rounded-tl-[30px] rounded-br-[30px] rounded-bl-none rounded-tr-none w-[182px] h-[61px] relative`}
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
                    {...getFieldProps("email")}
                    className={`border px-6 w-[400px] h-[56px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none outline-none
                    ${
                      touched.email && errors.email && "border-2 border-red-600"
                    }
                    `}
                  />
                </div>
                <ErrorMessage name="email" component={TextError} />

                {/* --------------password------------------ */}
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="type your password"
                    name="password"
                    {...getFieldProps("password")}
                    className={`border px-6 w-[400px] h-[56px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none outline-none
                    ${
                      touched.password &&
                      errors.password &&
                      "border-2 border-red-400"
                    }
                    `}
                  />
                  <button
                    className="w-5 h-5 absolute top-4 right-10 cursor-pointer"
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
                <div className=" cursor-pointer text-right">
                  <button
                    type="button"
                    className="text-secondary font-bold text-xl "
                    onClick={() => setOpenModal(true)}
                  >
                    Forgot password?
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
                <div>
                  <button
                    type="submit"
                    className="border bg-gradient-to-tr text-white text-xl font-semibold from-to to-from w-[400px] h-[56px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none"
                  >
                    {isSubmitting ? "Loading" : null}
                    Sign in
                  </button>
                </div>

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
                  {userData ? (
                    <button
                      onClick={handleLogout}
                      className="w-auto p-2 bg-black text-white mb-2"
                    >
                      logout
                    </button>
                  ) : (
                    <GoogleLogin
                      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                      buttonText="Login with Google"
                      onSuccess={handleSuccess}
                      onFailure={handleFailure}
                      cookiePolicy={"single_host_origin"}
                      className="h-14 w-auto"
                    ></GoogleLogin>
                  )}
                  {/* <button className="border text-xl font-semibold w-[105px] h-[58px] rounded-tl-[29px] rounded-br-[29px] rounded-tr-none rounded-bl-none outline-none">
                    <img
                      src="https://img.icons8.com/color/48/000000/google-logo.png"
                      alt="googlelogo"
                      className="w-8 h-8 mx-auto"
                    />
                    
                  </button> */}
                  {/* <button className="border text-xl font-semibold w-[105px] h-[58px] rounded-tl-[29px] rounded-br-[29px] rounded-tr-none rounded-bl-none outline-none">
                    <img
                      src="https://img.icons8.com/color/48/000000/facebook-new.png"
                      alt="facebooklogo"
                      className="w-8 h-8 mx-auto"
                    />
                  </button> */}
                  <FacebookLogin
                    appId="1088597931155576"
                    autoLoad={true}
                    fields="name,email,picture"
                    textButton="login with facebook"
                    // onClick={componentClicked}
                    callback={responseFacebook}
                    className="h-14 w-auto"

                  />
                </div>

                {/* ---------sign up here---------- */}
                <p className="text-xl text-center font-bold">
                  Don't have account?
                  <Link to="/signup">
                    <span className="text-primary mx-2">Sign up here</span>
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
