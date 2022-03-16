import { ArrowRightIcon, StarIcon } from "@heroicons/react/outline";
import React from "react";
import mpcimg1 from "../../assets/mpcimg1.jpg";
import tw from "tailwind-styled-components/dist/tailwind";
import { useTranslation } from "react-i18next";

const ProductYouBuy = () => {
  const { t } = useTranslation();
  return (
    <div className="md:border-b-0 md:pb-0 pb-5 border-b-2 border-dashed border-[#c4c4c4] h-full w-full lg:px-10 md:px-3">
      <div className="mb-8">
        <p className="text-3xl my-3 font-bold text-transparent bg-clip-text bg-gradient-to-r text-left from-to to-from">
          {t("product_you_buy")}
        </p>
        <p className="text-secondary text-xl font-normal leading-relaxed mt-5">
          Lorem Ipsum is simply dummy text of the printing and typetesting
          industry.
        </p>
      </div>

      {/* ----------------product you buy deatils----------- */}
      <RoundedDiv>
        {/* =---------------------img-------------- */}
        <img
          src={mpcimg1}
          alt="mpcimg1"
          className="h-1/2 w-full object-center object-cover rounded-tl-[182px]"
        />
        <div className="p-5 space-y-10">
          {/* =---------------------title-------------- */}

          <p className="text-3xl font-semibold">Lorem ipsum</p>
          {/* =---------------------description about course-------------- */}

          <p className="text-secondary text-xl font-semibold">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s,
          </p>

          <div className="flex items-center space-x-3">
            <p className="text-secondary">
              <span className="font-bold text-2xl">$25</span>
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
 h-[673px] sm:w-[364px] w-full
 cursor-pointer
 `;
