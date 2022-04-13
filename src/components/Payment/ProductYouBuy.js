import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import { useTranslation } from "react-i18next";
import { ArrowRightIcon } from "@heroicons/react/solid";

const ProductYouBuy = ({ product }) => {
  const { t } = useTranslation();

  return (
    <div className="md:border-b-0 md:pb-0 pb-5 border-b-2 border-dashed border-[#c4c4c4] h-full w-full lg:px-10 md:px-3">
      <div className="sm:mb-5 mb-3">
        <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r text-left from-to to-from">
          {t("product_you_buy")}
        </p>
      </div>

      {/* ----------------product you buy deatils----------- */}
      <RoundedDiv>
        {/* =---------------------img-------------- */}
        <img
          src={`https://chessmafia.com/php/luxgap/App/${product?.course_details?.image}`}
          alt="mpcimg1"
          className="h-1/2 w-full object-center rounded-tl-[182px] border-b"
        />
        <div className="p-5 space-y-10">
          {/* =---------------------title-------------- */}

          <p className="text-3xl font-semibold">
            {product?.course_details?.title}
          </p>
          {/* =---------------------description about course-------------- */}

          <p className="text-secondary text-xl font-semibold">
            {product?.course_details?.about}
          </p>

          <div className="flex items-center space-x-3">
            <p className="text-secondary">
              <span className="font-bold text-2xl">${product?.price}</span>
              /Course
            </p>
            <button className="w-10 h-10 bg-black rounded-tl-2xl rounded-br-2xl rounded-bl-none rounded-tr-none ">
              <ArrowRightIcon className="p-2" color="white" />
            </button>
          </div>
        </div>
      </RoundedDiv>
    </div>
  );
};

export default ProductYouBuy;
const RoundedDiv = tw.div`
border relative
rounded-tl-[182px] rounded-tr-0 rounded-br-[182px] rounded-bl-0
 h-[663px] sm:w-[364px] w-full
 cursor-pointer
 `;
