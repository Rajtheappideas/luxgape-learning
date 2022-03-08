import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import { MetaTags } from "react-meta-tags";
import { Link } from "react-router-dom";
import logo from "../assets/LXG_RVB.png";
import signup from "../assets/signup.jpg";
import { XIcon } from "@heroicons/react/outline";
import GoogleLogin from "react-google-login";
import * as yup from "yup";
import tw from "tailwind-styled-components/dist/tailwind";
import { FormikProvider, ErrorMessage, Form, useFormik } from "formik";

const Signup = () => {
  const [showPassword, setShowpassword] = useState(false);
  const [showConfirmPassword, setShowConfirmpassword] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  // -------------------------------yup---------------------------

  const SigninSchema = yup.object().shape({
    email: yup.string().required("email is required!").email(),
    name: yup
      .string()
      .required("name is required!")
      .min(3, "Too short!")
      .max(30, "Too long!"),
    // middlename: yup
    //   .string()
    //   .required("middle name is required!")
    //   .min(3, "Too short!")
    //   .max(30, "Too long!"),
    // firstname: yup
    //   .string()
    //   .required("first name is required!")
    //   .min(3, "Too short!")
    //   .max(30, "Too long!"),
    // age: yup.number().required("age is required!"),
    password: yup
      .string()
      .required("password is required!")
      .min(8, "Password should be 8 chars minimum.")
      .matches(/[a-zA-Z0-9]/, "Password can only contain Latin letters."),
    confirmpassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("confirm password is required!"),
    checkbox: yup.boolean().oneOf([true], "checkbox must be filled"),
    // profileimage: yup.required("you have to choose image!!"),
  });
  // ------------------------formik----------------------------
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      confirmpassword: "",
      checkbox: false,
      // firstname: "",
      // middlename: "",
      // age: "",
      // profileimage: "",
    },
    validationSchema: SigninSchema,
    onSubmit: async (values) => {
      const user = {
        email: values.email,
        name: values.name,
        password: values.password,
        // firstname: values.firstname,
        // middlename: values.middlename,
        // age: values.age,
        // profileimage: values.profileimage,
      };
      console.log("user -> ", user);
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

  const TextError = tw.span`
  text-red-500
  `;
  return (
    <>
      <MetaTags>
        <title>Sign Up</title>
      </MetaTags>
      {/* -------------main div---------------- */}
      <div className="sm:p-10">
        {/* --------------logo------------------- */}
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="object-cover object-center h-16 sm:m-0 m-5 cursor-pointer inline-block"
          />
        </Link>

        {/* --------------------grid div---------------- */}
        <div className="sm:p-10 p-5 lg:grid lg:grid-cols-2 lg:gap-5 lg:grid-rows-1 lg:justify-items-center">
          {/* ----------image------------- */}
          <div className="lg:block hidden">
            <img
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
                    Create your account
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
                    placeholder="type your name"
                    name="name"
                    {...getFieldProps("name")}
                    className={`border px-6 lg:w-[400px] w-full h-[56px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none outline-none
                    ${touched.name && errors.name && "border-2 border-red-400"}
                    `}
                  />
                </div>
                <ErrorMessage name="name" component={TextError} />

                {/* --------------email------------------ */}
                <div className="w-full">
                  <input
                    type="email"
                    placeholder="type your email"
                    name="email"
                    {...getFieldProps("email")}
                    className={`border px-6 lg:w-[400px] w-full h-[56px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none outline-none
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
                    placeholder="type your password"
                    name="password"
                    {...getFieldProps("password")}
                    className={`border px-6 lg:w-[400px] w-full h-[56px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none outline-none
                    ${
                      touched.password &&
                      errors.password &&
                      "border-2 border-red-400"
                    }
                    `}
                  />
                  <button
                    type="button"
                    className="w-5 h-5 absolute top-4 xl:right-1/3 lg:right-14 md:right-8 right-4 cursor-pointer"
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

                {/* --------------confirm password------------------ */}

                <div className="relative w-full">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="confirm password"
                    name="confirmpassword"
                    {...getFieldProps("confirmpassword")}
                    className={`border px-6 lg:w-[400px] w-full h-[56px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none outline-none
                    ${
                      touched.confirmpassword &&
                      errors.confirmpassword &&
                      "border-2 border-red-400"
                    }
                    `}
                  />
                  <button
                    type="button"
                    className="w-5 h-5 absolute top-4 xl:right-1/3 lg:right-14 md:right-8 right-4 cursor-pointer"
                    onClick={() => setShowConfirmpassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeIcon className="h-5 w-5 " color="gray" />
                    ) : (
                      <EyeOffIcon className="w-5 h-5 " color="gray" />
                    )}
                  </button>
                </div>
                <ErrorMessage name="confirmpassword" component={TextError} />

                {/* -----------terms of service----------- */}

                <div className="flex items-center w-full">
                  <div className="relative">
                    <input
                      type="checkbox"
                      name="checkbox"
                      {...getFieldProps("checkbox")}
                      className={`border opacity-70 cursor-pointer border-primary mr-1 w-6 h-6 rounded-xl
                        ${
                          touched.checkbox &&
                          errors.checkbox &&
                          "border-4 border-red-700"
                        }`}
                    />
                    <span className="after:" />
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
                        Terms of Service
                      </span>
                    </Link>
                  </p>
                </div>
                {/* ---------------sign in button-------------- */}
                <div className="w-full">
                  <button
                    type="submit"
                    className="border bg-gradient-to-tr text-white text-xl font-semibold from-to to-from lg:w-[400px] w-full h-[56px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none"
                  >
                    {isSubmitting ? "Loading" : null}
                    Sign up
                  </button>
                </div>
                {/* ---------sign up here---------- */}
                <p className="text-xl text-center font-bold">
                  Already have an account?
                  <Link to="/signin">
                    <span className="text-primary mx-2">Sign in here</span>
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
