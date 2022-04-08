import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { MetaTags } from "react-meta-tags";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Footer, Navbar, PaymentMethod, ProductYouBuy } from "../components";
import { useUserContext } from "../context/usercontext";
const Payment = () => {
  const [product, setProduct] = useState({});
  const { userLanguage } = useUserContext();
  const { t } = useTranslation();
  const { id } = useParams();
  useEffect(() => {
    axios("https://chessmafia.com/php/luxgap/App/api/view-course-detail", {
      method: "POST",
      params: {
        lang_code: userLanguage,
        course_id: id,
      },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response?.data?.status === "Success") {
          setProduct(response?.data?.data);
          return true;
        }
      })
      .catch((err) => {
        console.log("error ->", err?.response);
        if (err?.response?.status === 404) {
          toast("something went wrong!", { type: "error" });
          return false;
        }
      });
  }, []);
  return (
    <div className="bg-bgblank">
      <MetaTags>
        <title>{t("payment")}</title>
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
      {/* -------------------navbar=------------------ */}
      <Navbar activeText="" />

      <div className="sm:p-5 p-5 md:grid md:grid-cols-2 sm:gap-x-4 grid-flow-row place-items-start items-start ">
        {/* --------------------payment method and product for large screen----------------- */}
        <div className="md:hidden block">
          <ProductYouBuy product={product} />
        </div>
        <PaymentMethod product={product} />
        <div className="md:block hidden">
          <ProductYouBuy product={product} />
        </div>
      </div>

      {/* ----------------------------------foooter---------------------------- */}
      <Footer />
    </div>
  );
};

export default Payment;
