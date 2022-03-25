import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import {
  ArrowRightIcon,
  ClockIcon,
  CalculatorIcon,
  CheckCircleIcon,
} from "@heroicons/react/outline";
import { useTranslation } from "react-i18next";

const WhyChooseUs = () => {
  const { t } = useTranslation();
  return (
    <div className="sm:p-10 p-3 sm:mb-10 mb-5">
      <div className="sm:mb-10 mb-5">
        <p className="text-center font-semibold sm:text-5xl text-3xl sm:mb-7">
          {t("why_choose_us")}
        </p>
        <p className="text-gray-400  text-center text-lg font-normal tracking-widest">
          {t("why_choose_us_paragraph")}
        </p>
      </div>
      {/* ------------3 main divs-------------- */}
      <div className="grid lg:gap-10 gap-5 xl:grid-cols-3 grid-flow-row lg:grid-cols-2 grid-cols-1 place-items-center items-center ">
        {/* --------------1 big rounde div=-------------- */}
        <RoundedDiv>
          {/* ----------small round div---------- */}
          <RoundedSmallDiv className="bg-black">
            <ClockIcon
              color="white"
              className="w-10 h-10 absolute top-4 left-3"
            />
          </RoundedSmallDiv>
          <div>
            <p className="text-3xl font-bold tracking-widest">
              {t("why_choose_us_div_1_heading")}
            </p>
            <p className="sm:my-7 my-4 text-secondary tracking-wider text-xl leading-relaxed">
              {t("why_choose_us_div_1_paragraph")}
            </p>
            <p className="w-10 h-10 bg-black">
              <ArrowRightIcon className="p-2" color="white" />
            </p>
          </div>
        </RoundedDiv>
        {/* --------------2 big rounde div=-------------- */}

        <RoundedDiv>
          <RoundedSmallDiv className="bg-primary">
            <CalculatorIcon
              color="white"
              className="w-10 h-10 absolute top-4 left-3"
            />
          </RoundedSmallDiv>
          <div>
            <p className="text-3xl pt-2 font-bold tracking-wide">
              {t("why_choose_us_div_2_heading")}
            </p>
            <p className="sm:my-7 my-4 text-secondary tracking-wider text-xl leading-relaxed">
              {t("why_choose_us_div_2_paragraph")}
            </p>
            <p className="w-10 h-10 bg-black">
              <ArrowRightIcon className="p-2" color="white" />
            </p>
          </div>
        </RoundedDiv>
        {/* --------------3 big rounde div=-------------- */}

        <RoundedDiv className="lg:col-span-2 xl:col-span-1">
          <RoundedSmallDiv className="bg-black">
            <CheckCircleIcon
              color="white"
              className="w-10 h-10 absolute top-4 left-3"
            />
          </RoundedSmallDiv>
          <div>
            <p className="text-3xl font-bold tracking-widest">
              {t("why_choose_us_div_3_heading")}
            </p>
            <p className="sm:my-7 my-4 text-secondary tracking-wider text-xl leading-relaxed">
              {t("why_choose_us_div_3_paragraph")}
            </p>
            <p className="w-10 h-10 bg-black">
              <ArrowRightIcon className="p-2" color="white" />
            </p>
          </div>
        </RoundedDiv>
      </div>
    </div>
  );
};

export default WhyChooseUs;

const RoundedDiv = tw.div`
border relative
rounded-tl-[190px] rounded-tr-0 rounded-br-[190px] rounded-bl-0
 h-[410px] sm:w-[380px] w-auto
 flex items-center
 px-12 pt-16 hover:shadow-2xl `;

const RoundedSmallDiv = tw.div`
absolute w-[68px] h-[68px] top-[30px] left-[20px]
 rounded-tl-[34px] rounded-br-[34px] rounded-tr-0 rounded-bl-0 
`;
