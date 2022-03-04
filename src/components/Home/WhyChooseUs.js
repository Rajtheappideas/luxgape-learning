import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import {
  ArrowRightIcon,
  ClockIcon,
  CalculatorIcon,
  CheckCircleIcon,
} from "@heroicons/react/outline";

const WhyChooseUs = () => {
  return (
    <div className="p-10 mb-10">
      <div className="mb-10">
        <p className="text-center font-semibold text-5xl mb-7">Why Choose Us</p>
        <p className="text-gray-400  text-center text-lg font-normal tracking-widest">
          Learn with us and enjoy the various advantages
        </p>
      </div>
      {/* ------------3 main divs-------------- */}
      <div className="grid gap-10 lg:grid-cols-3 lg:grid-rows-1 md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-3 place-items-center items-center space-x-3">
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
            <p className="text-3xl font-bold tracking-widest">Flexible Time</p>
            <p className="my-10 text-secondary tracking-wider text-xl leading-relaxed">
              Now learning is not fixated on time, learning can be whenever you
              want
            </p>
            <p className="w-10 h-10 bg-black">
              <ArrowRightIcon className="p-2" color="white" />
            </p>
          </div>
        </RoundedDiv>
        {/* --------------2 big rounde div=-------------- */}

        <RoundedDiv className="shadow-2xl">
          <RoundedSmallDiv className="bg-primary">
            <CalculatorIcon
              color="white"
              className="w-10 h-10 absolute top-4 left-3"
            />
          </RoundedSmallDiv>
          <div>
            <p className="text-3xl font-bold tracking-wide">Access Anywhere</p>
            <p className="my-10 text-secondary tracking-wider text-xl leading-relaxed">
              Now learning is not fixated on time, learning can be whenever you
              want
            </p>
            <p className="w-10 h-10 bg-black">
              <ArrowRightIcon className="p-2" color="white" />
            </p>
          </div>
        </RoundedDiv>
        {/* --------------3 big rounde div=-------------- */}

        <RoundedDiv>
          <RoundedSmallDiv className="bg-black">
            <CheckCircleIcon
              color="white"
              className="w-10 h-10 absolute top-4 left-3"
            />
          </RoundedSmallDiv>
          <div>
            <p className="text-3xl font-bold tracking-widest">Certified</p>
            <p className="my-10 text-secondary tracking-wider text-xl leading-relaxed">
              Now learning is not fixated on time, learning can be whenever you
              want
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
 h-[410px] w-[380px]
 flex items-center
 px-12 pt-16 `;

const RoundedSmallDiv = tw.div`
absolute w-[68px] h-[68px] top-[30px] left-[20px]
 rounded-tl-[34px] rounded-br-[34px] rounded-tr-0 rounded-bl-0 
`;
