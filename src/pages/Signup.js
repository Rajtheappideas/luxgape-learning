import React, { useEffect, useState } from "react";
import { EyeIcon, EyeOffIcon, CheckIcon } from "@heroicons/react/outline";
import { UserIcon } from "@heroicons/react/solid";
import { MetaTags } from "react-meta-tags";
import { Link } from "react-router-dom";
import logo from "../assets/LXG_RVB.png";
import signup from "../assets/signup.jpg";
import { XIcon } from "@heroicons/react/outline";
import GoogleLogin from "react-google-login";
import * as yup from "yup";
import tw from "tailwind-styled-components/dist/tailwind";
import { FormikProvider, ErrorMessage, Form, useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Signup = () => {
  const [showPassword, setShowpassword] = useState(false);
  const [showConfirmPassword, setShowConfirmpassword] = useState(false);
  const { t } = useTranslation();
  // -------------------------------yup---------------------------

  const SigninSchema = yup.object().shape({
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
  });
  // ------------------------formik----------------------------
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      confirmpassword: "",
      checkbox: false,
    },
    validationSchema: SigninSchema,
    onSubmit: async (values) => {
      const user = {
        email: values.email,
        name: values.name,
        password: values.password,
      };
      console.log("user -> ", user);
      // resetForm();
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
      {/* -------------main div---------------- */}
      <div className="sm:p-10 p-3">
        {/* --------------logo------------------- */}
        <Link to="/">
          <LazyLoadImage
            src={logo}
            alt="logo"
            className="object-cover object-center h-16 sm:m-0 m-2 cursor-pointer inline-block"
          />
        </Link>

        {/* --------------------grid div---------------- */}
        <div className="sm:p-10 lg:grid lg:grid-cols-2 lg:gap-5 lg:grid-rows-1 lg:justify-items-center">
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
                {/* <Form> */}

                {/* --------------name------------------ */}
                <div className="w-full">
                  <input
                    type="text"
                    placeholder={t("type_your_name")}
                    name="name"
                    {...getFieldProps("name")}
                    className={`border px-6 w-full h-[56px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none outline-none
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
                    className={`border px-6 w-full h-[56px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none outline-none
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
                    className={`border px-6 w-full h-[56px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none outline-none
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
                    className={`border px-6 w-full h-[56px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none outline-none
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

                <div className="flex items-center w-full">
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
                    <span className="absolute top-1 cursor-pointer left-0 -z-10 rounded-tl-xl rounded-br-xl rounded-bl-none rounded-tr-none border-primary border-2 h-6 w-6" />
                    {values.checkbox && (
                      <CheckIcon className="h-6 cursor-pointer absolute top-1 left-0 -z-10" />
                    )}
                    {errors.checkbox && touched.checkbox && (
                      <span className="bg-gray-100 absolute -top-12 -left-20 animate-bounce w-auto h-12 p-3 font-semibold px-2 whitespace-nowrap text-black rounded-xl">
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
                    className="border bg-gradient-to-tr text-white text-xl font-semibold from-to to-from w-full h-[56px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none"
                  >
                    {isSubmitting ? "Loading" : null}
                    {t("Sign_Up")}
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
