import axios from "axios";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useUserContext } from "../../context/usercontext";
import { useFormik, Form, FormikProvider, ErrorMessage } from "formik";
import * as yup from "yup";
import tw from "tailwind-styled-components/dist/tailwind";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation();

  const { userLanguage } = useUserContext();

  // --------------------yup-------------
  const ContactusSchema = yup.object().shape({
    email: yup.string().required(t("email_is_required")).email(),
    name: yup.string().required(t("name_is_required")),
    message: yup.string().required(t("message_is_required")),
  });

  // --------------------------formik-------------

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },
    validationSchema: ContactusSchema,
    onSubmit: async (values) => {
      const contactusform = {
        lang_code: userLanguage,
        name: values.name,
        email: values.email,
        massage: values.message,
      };
      await axios
        .post(
          "https://chessmafia.com/php/luxgap/App/api/contact-us-submit",
          contactusform,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          if (response?.data?.status === "Success") {
            toast(response?.data?.data, { type: "success" });
            setLoading(false);
            return true;
          } else if (response?.data?.status === "Error") {
            toast("Somthing went wrong!", { type: "error" });
            setLoading(false);
            return false;
          }
        })
        .catch((err) => {
          setLoading(false);
          return false;
        });
      resetForm();
    },
  });
  const {
    errors,
    touched,
    handleSubmit,
    isSubmitting,
    getFieldProps,
    resetForm,
  } = formik;

  // ------------------error text color tailwind-------------
  const TextError = tw.span`
  text-red-500
  `;
  return (
    <div
      id="contactus"
      className="sm:p-10 p-3 grid sm:gap-10 lg:grid-cols-2 lg:grid-rows-1 grid-cols-1 grid-flow-row items-start justify-items-center"
    >
      {/* --------------first div with text---------- */}
      <div className="sm:mb-0 mb-3">
        <p className="sm:text-5xl text-3xl font-bold tracking-wide leading-snug block mb-5">
          {t("stay_get_in_touch")}
          <span className="block">{t("with_us")}</span>
        </p>
        <p className="text-secondary text-xl font-semibold tracking-normal leading-relaxed">
          {t("stay_get_in_touch_with_us_paragraph")}
        </p>
      </div>
      {/* -----------second div with form ---------------- */}
      <FormikProvider value={formik}>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <div className="space-y-5 h-full w-full">
            <div className="flex md:flex-row flex-col items-center md:space-x-3 w-full">
              <div className="md:w-1/2 w-full">
                <label className="text-xl font-normal mb-3">
                  {t("your_name")}
                </label>
                <input
                  type="text"
                  placeholder={t("type_your_name")}
                  name="name"
                  {...getFieldProps("name")}
                  className={`border focus:border-2 bg-[#FFF8F0] focus:border-emerald-400 px-6 w-full p-5 rounded-2xl
                    ${
                      touched.name && errors.name && "border-2 border-red-600"
                    }`}
                />
                <ErrorMessage name="name" component={TextError} />
              </div>
              <div className="md:w-1/2 w-full">
                <label className="text-xl font-normal mb-3">
                  {t("your_email")}
                </label>
                <input
                  type="email"
                  placeholder={t("type_your_email")}
                  name="email"
                  {...getFieldProps("email")}
                  className={`border focus:border-2 bg-[#FFF8F0] focus:border-emerald-400 px-6 w-full p-5 rounded-2xl
                    ${
                      touched.email && errors.email && "border-2 border-red-600"
                    }`}
                />
                <ErrorMessage name="email" component={TextError} />
              </div>
            </div>
            <div>
              <p className="text-xl font-normal mb-3 min-h-fit scrollbar-hide">
                {t("your_message")}
              </p>
              <textarea
                placeholder={t("type_your_message")}
                rows={3}
                cols={10}
                name="messafe"
                {...getFieldProps("message")}
                className={`border focus:border-2 bg-[#FFF8F0] focus:border-emerald-400 px-6 w-full p-5 rounded-2xl
                    ${
                      touched.message &&
                      errors.message &&
                      "border-2 border-red-600"
                    }`}
              />
              <ErrorMessage name="message" component={TextError} />
            </div>
            <div className="lg:text-left text-center">
              <button
                type="submit"
                className=" text-center active:scale-95 transition-all duration-200 ease-in-out rounded-tl-[30px] rounded-tr-none rounded-br-[30px] rounded-bl-none w-[183px] h-[60px] bg-black text-white font-semibold "
                // onClick={handleSendMessage}
              >
                {isSubmitting ? "Sending..." : t("subscribe")}
              </button>
            </div>
          </div>
        </Form>
      </FormikProvider>
    </div>
  );
};

export default ContactUs;
