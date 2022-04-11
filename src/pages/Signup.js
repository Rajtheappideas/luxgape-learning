import React, { useEffect, useState } from "react";
import {
  EyeIcon,
  EyeOffIcon,
  CheckIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";
import { UserIcon } from "@heroicons/react/solid";
import { MetaTags } from "react-meta-tags";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/LXG_RVB.png";
import signup from "../assets/signup.jpg";
import { XIcon } from "@heroicons/react/outline";
import * as yup from "yup";
import tw from "tailwind-styled-components/dist/tailwind";
import { FormikProvider, ErrorMessage, Form, useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useUserContext } from "../context/usercontext";
import { toast, ToastContainer } from "react-toastify";
import Lottie from "react-lottie";
import loading from "../assets/animations/loading1.json";
import axios from "axios";

const Signup = () => {
  const [showPassword, setShowpassword] = useState(false);
  const [showConfirmPassword, setShowConfirmpassword] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { userData, ChangeLanguage, setUserdata } = useUserContext();

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

  const { t } = useTranslation();

  const navigate = useNavigate();
  // useEffect(() => {
  //   handleSubmit();
  // }, []);
  // -------------------------------yup---------------------------
  const SignUpSchema = yup.object().shape({
    email: yup.string().required(t("email_is_required")).email(),
    name: yup
      .string()
      .required(t("name_is_required"))
      .min(3, t("too_short"))
      .max(30, t("too_long")),
    password: yup
      .string()
      .required(t("password_is_required"))
      .min(8, t("password_validation_1"))
      .matches(/[a-zA-Z0-9]/, t("password_validation")),
    confirmpassword: yup
      .string()
      .oneOf([yup.ref("password"), null], t("password_must_match"))
      .required(t("confirm_password_is_required")),
    checkbox: yup.boolean().oneOf([true], t("checkbox_must_be_filled")),
    // role:
  });
  // ------------------------formik----------------------------
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      confirmpassword: "",
      role: "Employee",
      checkbox: false,
    },
    validationSchema: SignUpSchema,
    onSubmit: async (values) => {
      const user = {
        google_id: "",
        app_id: "",
        facebook_id: "",
        name: values.name,
        email: values.email,
        password: values.password,
        role: values.role,
        lang_code: lang_code,
      };
      await axios
        .post("https://chessmafia.com/php/luxgap/App/api/register", user, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          const data = res?.data?.data;
          if (res.status === 200) {
            localStorage.setItem("user", JSON.stringify(data));
            setUserdata(data);
            navigate("/");
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }
        })
        .catch((err) => {
          const error = err?.response?.data?.message;
          if (error === "Email is already exist") {
            toast("Email is already exist!!", { type: "error" });
          } else {
            return true;
          }
        });
    },
  });
  const {
    errors,
    touched,
    resetForm,
    handleSubmit,
    isSubmitting,
    getFieldProps,
    values,
  } = formik;
  // -------------------input errror text color--------------
  const TextError = tw.span`
  text-red-500
  `;

  return (
    <>
      <MetaTags>
        <title>{t("Sign_Up")}</title>
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
        <div className="sm:p-10 p-3 lg:grid lg:grid-cols-2 lg:gap-5 lg:grid-rows-1 lg:justify-items-center">
          {/* ----------image------------- */}
          <div className="lg:block hidden">
            <LazyLoadImage
              src={signup}
              alt="signin"
              className="object-center object-cover w-[624px] h-[748px] rounded-tl-[312px] rounded-br-[312px] rounded-tr-none rounded-bl-none "
            />
          </div>

          <FormikProvider value={formik}>
            <Form autoComplete="off" onSubmit={handleSubmit}>
              {/* --------------main form ------------------ */}
              <div className="space-y-7">
                {/* ----------form start from here */}
                <div className="flex justify-between items-center w-full">
                  <h1 className="font-bold text-4xl block my-5">
                    {t("create_your_account")}
                  </h1>
                  <Link to="/">
                    <XIcon className="w-8 h-8 cursor-pointer" color="gray" />
                  </Link>
                </div>
                {/* ------------------radio box of role-------------- */}

                <div className="flex flex-row items-center justify-around sm:space-x-10 space-x-2 w-full">
                  {/* ----------------butoon 1----------------- */}
                  <div
                    className={`border ${
                      formik.values.role === "Employee" && "border-primary"
                    } rounded-tl-[30px] rounded-br-[30px] rounded-bl-none rounded-tr-none sm:w-full w-1/2 h-[61px] relative`}
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
                  </div>
                  {/* ----------------butoon 2----------------- */}

                  <div
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
                  </div>
                </div>
                {/* --------------name------------------ */}
                <div className="w-full">
                  <input
                    type="text"
                    placeholder={t("type_your_name")}
                    name="name"
                    {...getFieldProps("name")}
                    className={`border focus:border-2 focus:border-emerald-400 px-6 w-full h-[56px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none outline-none
                    ${touched.name && errors.name && "border-2 border-red-400"}
                    `}
                  />
                </div>
                <ErrorMessage name="name" component={TextError} />

                {/* --------------email------------------ */}
                <div className="w-full">
                  <input
                    type="email"
                    placeholder={t("type_your_email")}
                    name="email"
                    {...getFieldProps("email")}
                    className={`border focus:border-2 focus:border-emerald-400 px-6 w-full h-[56px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none outline-none
                    ${
                      touched.email && errors.email && "border-2 border-red-400"
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
                    className={`border focus:border-2 focus:border-emerald-400 px-6 w-full h-[56px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none outline-none
                    ${
                      touched.password &&
                      errors.password &&
                      "border-2 border-red-400"
                    }
                    `}
                  />
                  <div className="absolute top-4 right-10">
                    <button
                      type="button"
                      className="w-5 h-5 cursor-pointer"
                      onClick={() => setShowpassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeIcon className="h-5 w-5 " color="gray" />
                      ) : (
                        <EyeOffIcon className="w-5 h-5 " color="gray" />
                      )}
                    </button>
                  </div>
                </div>
                <ErrorMessage name="password" component={TextError} />

                {/* --------------confirm password------------------ */}

                <div className="relative w-full">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder={t("confirm_password")}
                    name="confirmpassword"
                    {...getFieldProps("confirmpassword")}
                    className={`border focus:border-2 focus:border-emerald-400 px-6 w-full h-[56px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none outline-none
                    ${
                      touched.confirmpassword &&
                      errors.confirmpassword &&
                      "border-2 border-red-400"
                    }
                    `}
                  />
                  <div className="absolute top-4 right-10">
                    <button
                      type="button"
                      className="w-5 h-5  cursor-pointer"
                      onClick={() =>
                        setShowConfirmpassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeIcon className="h-5 w-5 " color="gray" />
                      ) : (
                        <EyeOffIcon className="w-5 h-5 " color="gray" />
                      )}
                    </button>
                  </div>
                </div>
                <ErrorMessage name="confirmpassword" component={TextError} />

                {/* -----------terms of service----------- */}

                <div className="flex items-start w-full">
                  <div className="relative">
                    <input
                      type="checkbox"
                      name="checkbox"
                      {...getFieldProps("checkbox")}
                      className={`cursor-pointer opacity-0 mr-1 w-6 h-6 rounded-xl
                        ${
                          touched.checkbox &&
                          errors.checkbox &&
                          "border-4 border-red-700"
                        }`}
                    />
                    <span className="absolute top-2 cursor-pointer left-0 -z-10 rounded-tl-xl rounded-br-xl rounded-bl-none rounded-tr-none border-primary border-2 h-6 w-6" />
                    {values.checkbox && (
                      <CheckIcon className="h-6 cursor-pointer absolute top-2 left-0 -z-10" />
                    )}
                    {errors.checkbox && touched.checkbox && (
                      <span className="bg-gray-100 absolute -top-12 sm:-left-20 -left-2 animate-bounce w-auto h-12 p-3 font-semibold px-2 whitespace-nowrap text-black rounded-xl">
                        <ErrorMessage name="checkbox" />
                      </span>
                    )}
                  </div>
                  <p className="text-xl text-secondary">
                    I have read and agree to the
                    <Link to="/terms&conditions">
                      <span className="text-primary ml-1">
                        {t("terms_of_service")}
                      </span>
                    </Link>
                  </p>
                </div>
                {/* ---------------sign in button-------------- */}
                <div className="w-full">
                  <button
                    type="submit"
                    className="border active:scale-95 transition-all duration-100 ease-in-out bg-gradient-to-tr text-white text-xl font-semibold from-to to-from w-full h-[56px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none"
                  >
                    {isSubmitting ? (
                      <Lottie
                        options={defaultOptions}
                        height={40}
                        width={40}
                        className="z-10"
                      />
                    ) : (
                      t("Sign_Up")
                    )}
                  </button>
                </div>
                {/* ---------sign up here---------- */}
                <p className="text-xl w-full text-center font-bold">
                  {t("Already have an account")}?
                  <Link to="/signin">
                    <span className="text-primary mx-2">
                      {t("Sign_In")} {t("here")}
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

export default Signup;
