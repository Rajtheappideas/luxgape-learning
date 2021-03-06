import React, { useEffect, useState } from "react";
import Loading from "../assets/animations/loading1.json";
import Lottie from "react-lottie";
import { toast } from "react-toastify";
import axios from "axios";
import { useUserContext } from "../context/usercontext";
import * as yup from "yup";
import { useFormik, Form, FormikProvider, ErrorMessage } from "formik";
import tw from "tailwind-styled-components/dist/tailwind";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const EditProfile = ({ profileImage, userDetails }) => {
  const [loading, setLoading] = useState(false);

  // ---context----------
  const { userData } = useUserContext();

  const { t } = useTranslation();
  const navigate = useNavigate();

  //   ---------------language code--------
  const lang_code = localStorage.getItem("lang_code");

  // --------------------yup-------------
  const SigninSchema = yup.object().shape({
    email: yup.string().required("email_is_required").email(),
    fullName: yup.string().required("full name is required!"),
    phoneNumber: yup.string().required("phone number is required"),
  });

  // --------------------------formik-------------

  const formik = useFormik({
    initialValues: {
      email: userDetails?.email || "",
      fullName: userDetails?.name || "",
      phoneNumber: userDetails?.phone_no || "",
    },
    enableReinitialize: true,
    validationSchema: SigninSchema,
    onSubmit: (values) => {
      let fd = new FormData();
      fd.append("lang_code", lang_code);
      fd.append("name", values.fullName);
      fd.append("email", values.email);
      fd.append("profile", profileImage);
      // if (profileImage) {
      //   let name = profileImage?.substring(profileImage?.lastIndexOf("/") + 1);
      //   fd.append("profile", {
      //     uri: profileImage,
      //     name: name,
      //     type: "image/jpg",
      //   });
      // } else {
      //   fd.append("profile", "");
      // }
      fd.append("phone_no", values.phoneNumber);
      setLoading(true);
      axios
        .post("https://chessmafia.com/php/luxgap/App/api/update-profile", fd, {
          headers: {
            "Content-Type": "multipart/form-data",
            "consumer-access-token": userData?.api_token,
          },
        })
        .then((response) => {
          if (response?.data?.status === "Success") {
            toast(t("profile updated"), { type: "success" });
            setLoading(false);
            setTimeout(() => {
              window.location.reload();
            }, 1000);
            return true;
          }
        })
        .catch((err) => {
          if (
            err?.response?.data?.message === "Un-Authentic" &&
            err?.response?.data?.status === "Error"
          ) {
            toast(err?.response?.data?.message, { type: "error" });
            setLoading(false);
            navigate("/signin");
          } else if (err?.response?.data?.status === "Error") {
            toast(err?.response?.data?.message, { type: "error" });
            setLoading(false);
            return false;
          }
        });
    },
  });

  const { errors, touched, handleSubmit, getFieldProps } = formik;

  // ------------------error text color tailwind-------------
  const TextError = tw.span`text-red-500`;

  // -------------  lottie file react---------------
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      {/* -----------------input fields-------------------- */}
      <FormikProvider value={userDetails || formik.initialValues}>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <div className="w-full flex lg:flex-row flex-col lg:justify-around items-center">
            {/* -----------email---------- */}
            <div className="lg:w-[40%] w-[90%]">
              <label className="semifont-bold text-2xl ml-2">
                {t("email")}
              </label>
              <input
                type="email"
                placeholder={`${t("type_your_email")}`}
                name="email"
                {...getFieldProps("email")}
                className={`border focus:border-2 focus:border-emerald-400 px-6 w-full h-12  rounded-tl-3xl rounded-br-3xl rounded-tr-none rounded-bl-none outline-none
                ${touched.email && errors.email && "border-2 border-red-600"}
                `}
              />
              <ErrorMessage name="email" component={TextError} />
            </div>
            {/* -----------name---------- */}

            <div className="lg:w-[40%] w-[90%]">
              <label className="semifont-bold text-2xl ml-2">
                {t("full_name")}
              </label>
              <input
                type="text"
                placeholder={`${t("type_your_name")}`}
                name="fullName"
                {...getFieldProps("fullName")}
                className={`border focus:border-2 focus:border-emerald-400 px-6 w-full h-12  rounded-tl-3xl rounded-br-3xl rounded-tr-none rounded-bl-none outline-none
                ${
                  touched.fullName &&
                  errors.fullName &&
                  "border-2 border-red-600"
                }
                `}
              />
              <ErrorMessage name="fullName" component={TextError} />
            </div>
          </div>
          {/* -----------phone number---------- */}

          <div className="w-full mx-auto mt-3">
            <div className="lg:w-1/2 w-[90%] mx-auto">
              <label className="semifont-bold text-2xl ml-2">
                {t("phone_number")}
              </label>
              <input
                type="tel"
                placeholder={`${t("Enter your Phone Number")}`}
                max={10}
                maxLength={10}
                minLength={10}
                name="phoneNumber"
                {...getFieldProps("phoneNumber")}
                className={`border focus:border-2 focus:border-emerald-400 px-6 w-full h-12  rounded-tl-3xl rounded-br-3xl rounded-tr-none rounded-bl-none outline-none
                ${
                  touched.phoneNumber &&
                  errors.phoneNumber &&
                  "border-2 border-red-600"
                }
                `}
              />
              <ErrorMessage name="phoneNumber" component={TextError} />
            </div>
          </div>

          {/* -------------------save changes button------------*/}
          <div className="text-center mt-8">
            <button
              type="submit"
              className="w-40 rounded-xl h-12 active:scale-95 transition-all duration-100 ease-in-out bg-primary text-white text-center"
            >
              {loading ? (
                <Lottie
                  options={defaultOptions}
                  height={30}
                  width={30}
                  className="z-10"
                />
              ) : (
                t("save_changes")
              )}
            </button>
          </div>
        </Form>
      </FormikProvider>
    </>
  );
};

export default EditProfile;
