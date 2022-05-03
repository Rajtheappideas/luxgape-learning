import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import { useTranslation } from "react-i18next";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const ProductYouBuy = ({ product, grandTotal }) => {
  const { t } = useTranslation();
  console.log(product);

  return (
    <div className="md:border-b-0 md:pb-0 pb-5 border-b-2 border-dashed border-[#c4c4c4] h-full w-full lg:px-10 md:px-3">
      <div className="sm:mb-5 mb-3">
        <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r text-left from-to to-from">
          {t("product_you_buy")}
        </p>
      </div>

      {/* ----------------product you buy deatils----------- */}
      <Link to={`/courses/aboutcourse/${product?.course_details?.course_id}`}>
        <RoundedDiv>
          {/* =---------------------img-------------- */}
          <img
            src={`https://chessmafia.com/php/luxgap/App/${product?.course_details?.image}`}
            alt={product?.course_details?.title}
            className="h-1/2 w-full object-center object-cover rounded-tl-[182px] border-b"
          />
          <div className="p-5 space-y-10">
            {/* =---------------------title-------------- */}

            <p className="sm:text-3xl text-2xl font-semibold truncate text-ellipsis whitespace-nowrap overflow-hidden sm:w-80 w-64">
              {product?.course_details?.title}
            </p>
            {/* =---------------------description about course-------------- */}

            <p className="text-secondary text-xl font-normal truncate text-ellipsis whitespace-nowrap overflow-hidden sm:w-72 w-64">
              {product?.course_details?.about}
            </p>

            <div className="flex items-center space-x-3">
              <p className="text-secondary">
                <span className="font-bold text-2xl">
                  ${grandTotal === null ? product?.price : grandTotal}
                </span>
                /Course
              </p>
              <button className="w-10 h-10 bg-black rounded-tl-2xl rounded-br-2xl rounded-bl-none rounded-tr-none ">
                <ArrowRightIcon className="p-2" color="white" />
              </button>
            </div>
          </div>
        </RoundedDiv>
      </Link>
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
