import React from "react";
import { SearchIcon } from "@heroicons/react/outline";
import simg1 from "../../assets/studyimg1.jpg";
import simg2 from "../../assets/studyimg2.jpg";
import simg3 from "../../assets/studyimg3.jpg";
import main from "../../assets/main.jpg";
import rocket from "../../assets/rocket.png";
import { useTranslation } from "react-i18next";

const Herosection = () => {
  const { t } = useTranslation();
  return (
    <div className="sm:p-10 p-5 mb-20 grid gap-10 lg:grid-cols-2 grid-flow-row  place-items-center items-center h-full w-full scrollbar-hide">
      {/* ------------text and search is here------------------------------ */}
      <div className="w-full relative h-full lg:text-left text-center space-y-16">
        {/* -------------------------------------text--------------------------------     */}

        <div className="text-6xl  font-bold text-black">
          <div className="mb-10">
            <span className="mb-10 block tracking-normal">
              {t("learning_and")}
            </span>
            <p className=" tracking-tight">
              {t("level_up_your")}
              <span className="text-from inline-block ml-4 ">
                {" "}
                {t("skills")}
              </span>
            </p>
          </div>
          {/* ----------------------------------------paragraph--------------------------------- */}
          <p className="text-xl text-secondary font-semibold capitalize tracking-wide w-full leading-relaxed">
            {t("hero_section_paragraph")}
          </p>
          
          {/* -------------------image for small and large screen------------------- */}
          <div className="w-full relative mt-5 lg:hidden md:block hidden">
            {/* -----------eclipse 1------------------ */}
            {/* <div className="absolute top-40 -right-10 blur-[200px] w-[300px] h-[300px] rounded-full bg-blue-300 " /> */}
            {/* -----------eclipse 2------------------ */}
            {/* <div className="absolute -bottom-28 blur-[200px] -left-32 w-[300px] h-[300px] rounded-full bg-blue-300 " /> */}
            {/* ----------------------image bg----------------- */}
            <div className="mx-auto rounded-tl-[282.5px] rounded-tr-[0px] rounded-br-[82px] rounded-bl-none h-[684px] w-[540px]  bg-gradient-to-l from-[#33bac6] to-[#162765]" />
            <img
              className="rounded-tl-[18px] rounded-tr-[18px] rounded-br-[260px] rounded-bl-[18px] 
              h-[632px] w-[500px] absolute top-10 left-10 object-right-top object-cover"
              src={main}
              alt="ladyimg"
            />
            {/* ----------------------rocket--------------- */}
            {/*-------rocket bg div-------------  */}
            <div
              className="absolute w-[76px] h-[74px] top-20 lg:left-32 md:left-4 bg-white rounded-tl-[36.8479px]
           rounded-tr-[1.16056px] rounded-br-[17.9887px] rounded-bl-[1.16056px] shadow-2xl"
            />
            {/*-------rocket div-------------  */}
            <div
              className="absolute top-[5.7rem] lg:left-36 md:left-8 w-[54px] h-[54px]
rounded-tl-[26.9831px] rounded-tr-[0px] rounded-br-[12.7662px] rounded-bl-[0px]
bg-gradient-to-l from-[#33bac6] to-[#162765]"
            />
            {/*-------rocket-------------  */}

            <img
              src={rocket}
              alt="rocket"
              className="absolute top-[6.4rem] left-10 border-white w-8 h-8"
            />
            {/* ------------------activestudent----------------- */}
            {/*-------active student bg div-------------  */}
            <div
              className="absolute top-[23rem] right-28 w-[280px] h-[74px] 
rounded-tl-[37px] rounded-tr-[1.16056px] rounded-br-[17.9887px] bg-white shadow-2xl"
            />
            {/*-------active student div-------------  */}
            <div
              className="absolute top-[23.7rem] right-[20.6rem] w-[54px] h-[54px]
rounded-tl-[26.9831px] rounded-tr-[0px] rounded-br-[12.7662px] rounded-bl-[0px]
bg-gradient-to-l from-[#33bac6] to-[#162765]"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              color="white"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="absolute top-[24.5rem] right-[21.5rem] w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <p className="text-lg whitespace-nowrap font-bold absolute top-[24.5rem] right-32 ml-3">
              50k+ {t("hero_section_picture_1")}
            </p>

            {/* ----------------------professinal mentor----------------- */}
            {/*-------profsseinal bg div-------------  */}
            <div
              className="absolute top-[34rem] lg:left-20 md:-left-3 w-[245px] h-[100px] 
rounded-tl-[36.8479px] rounded-tr-[1.16056px] rounded-br-[17.9887px] bg-white shadow-2xl"
            />

            {/*-------profsseinal div-------------  */}
            <div
              className="absolute top-[35rem] lg:left-24 w-[73.18px] h-[73.18px]
rounded-tl-[26.9831px] rounded-tr-[0px] rounded-br-[12.7662px] rounded-bl-[0px]
bg-gradient-to-l from-[#33bac6] to-[#162765]"
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 absolute top-[36rem] lg:left-28 md:left-5"
              fill="none"
              color="white"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
              />
            </svg>
            <p className="absolute top-[35rem] lg:left-36 md:left-14 text-2xl w-10 font-bold mx-9 my-auto">
              {t("hero_section_picture_2")}
            </p>
          </div>
        </div>

        {/* --------------------------search=-------------------------------- */}

        <div className=" w-full flex items-center lg:justify-start justify-center">
          <div className="relative sm:w-2/3 w-4/5">
            <input
              type="search"
              placeholder={t("search_course")}
              name="search"
              className=" px-3 outline-none h-[72px] w-full border bg-white "
            />
            {/* --------search button----------- */}
            <div className="absolute -right-10 bottom-0 h-[72px] w-[72px] text-center bg-primary rounded-tl-[36px] rounded-br-[36px] rounded-tr-none rounded-bl-none ">
              <button className="h-full">
                <SearchIcon className="h-8 w-8" color="white" />
              </button>
            </div>
          </div>
        </div>

        {/* --------------------------------photos--------------------------------------- */}

        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 items-center lg:justify-start justify-center sm:space-x-12 w-full">
          <img
            className="object-contain object-center sm:h-20 h-36"
            src={simg3}
            alt="studyimg"
          />
          <img
            className="object-contain object-center  sm:h-20 h-36"
            src={simg1}
            alt="studyimg"
          />
          <img
            className="object-contain object-center  sm:h-20 h-36"
            src={simg2}
            alt="studyimg"
          />
        </div>
      </div>

      {/* -----------main image of herosection for xl screen--------------- */}
      <div className="relative w-full h-full hidden lg:block">
        {/* -----------eclipse 1------------------ */}
        {/* <div className="absolute top-40 -right-10 blur-[200px] w-[300px] h-[300px] rounded-full bg-blue-300 " /> */}
        {/* -----------eclipse 2------------------ */}
        {/* <div className="absolute -bottom-28 blur-[200px] -left-32 w-[300px] h-[300px] rounded-full bg-blue-400 " /> */}
        {/* ---------------------main image------------- */}
        <div className="rounded-tl-[282.5px] rounded-tr-[0px] rounded-br-[82px] rounded-bl-none h-[684px] w-[540px] absolute top-5 left-10 bg-gradient-to-l from-[#33bac6] to-[#162765]" />
        <img
          className="rounded-tl-[18px] rounded-tr-[18px] rounded-br-[260px] rounded-bl-[18px] 
              h-[632px] w-auto absolute top-10 left-16 object-right-top object-cover"
          src={main}
          alt="ladyimg"
        />

        {/* ----------------------rocket--------------- */}
        {/*-------rocket bg div-------------  */}
        <div
          className="absolute w-[76px] h-[74px] top-20 left-10 bg-white rounded-tl-[36.8479px]
           rounded-tr-[1.16056px] rounded-br-[17.9887px] rounded-bl-[1.16056px] shadow-2xl"
        />
        {/*-------rocket div-------------  */}
        <div
          className="absolute top-[5.7rem] left-12 w-[54px] h-[54px]
rounded-tl-[26.9831px] rounded-tr-[0px] rounded-br-[12.7662px] rounded-bl-[0px]
bg-gradient-to-l from-[#33bac6] to-[#162765]"
        />
        {/*-------rocket-------------  */}

        <img
          src={rocket}
          alt="rocket"
          className="absolute top-[6.4rem] left-[3.7rem] border-white w-8 h-8"
        />

        {/* ------------------activestudent----------------- */}
        {/*-------active student bg div-------------  */}
        <div
          className="absolute top-[23rem] left-[16rem] w-[280px] h-[74px] 
rounded-tl-[37px] rounded-tr-[1.16056px] rounded-br-[17.9887px] bg-white shadow-2xl"
        />
        {/*-------active student div-------------  */}
        <div
          className="absolute top-[23.7rem] left-[17rem] w-[54px] h-[54px]
rounded-tl-[26.9831px] rounded-tr-[0px] rounded-br-[12.7662px] rounded-bl-[0px]
bg-gradient-to-l from-[#33bac6] to-[#162765]"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          color="white"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="absolute top-[24.5rem] left-[18rem] w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        <p className="text-lg font-bold absolute top-[24rem] h-full left-[21rem]">
          50k+ {t("hero_section_picture_1")}
        </p>

        {/* ----------------------professinal mentor----------------- */}
        {/*-------profsseinal bg div-------------  */}
        <div
          className="absolute top-[34rem] -left-6 w-[245px] h-[100px] 
rounded-tl-[36.8479px] rounded-tr-[1.16056px] rounded-br-[17.9887px] bg-white shadow-2xl"
        />

        {/*-------profsseinal div-------------  */}
        <div
          className="absolute top-[35rem] -left-2 w-[73.18px] h-[73.18px]
rounded-tl-[26.9831px] rounded-tr-[0px] rounded-br-[12.7662px] rounded-bl-[0px]
bg-gradient-to-l from-[#33bac6] to-[#162765]"
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 absolute top-[36rem] left-2"
          fill="none"
          color="white"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
          />
        </svg>
        <p className="absolute top-[35rem] left-10 text-2xl w-10 font-bold mx-9 my-auto">
        {t("hero_section_picture_2")}
        </p>
      </div>
    </div>
  );
};

export default Herosection;
