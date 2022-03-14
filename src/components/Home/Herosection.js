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
    <div className="sm:p-10 p-5 xl:grid xl:grid-cols-2 xl:grid-flow-row xl:justify-items-end xl:items-start">
      {/* ------------text and search is here------------------------------ */}
      <div className="relative xl:text-left text-center space-y-20">
        {/* -------------------------------------text--------------------------------     */}
        <div v className="text-6xl space-y-6 font-bold text-black">
          {/* ---------------heading of herosection------------ */}
          <div className="space-y-6 w-full">
            <span className="block tracking-normal">{t("learning_and")}</span>
            <p className=" tracking-wider">
              {t("level_up_your")}
              <span className="text-from inline-block ml-4 ">
                {t("skills")}
              </span>
            </p>
            {/* ----------------------------------------paragraph--------------------------------- */}
            <p className="text-xl text-secondary font-semibold capitalize tracking-wide w-full leading-relaxed">
              {t("hero_section_paragraph")}
            </p>
          </div>
        </div>
        {/* -----------main image of herosection for xl screen--------------- */}
        <div className="relative md:flex items-center justify-center hidden xl:hidden">
          {/* ------------bg blue of image------------ */}
          <div className="rounded-tl-[282.5px] rounded-tr-[0px] rounded-br-[82px] rounded-bl-none h-[600px] w-[540px] bg-gradient-to-l from-from to-to" />
          {/* --------------image------------- */}
          <div className="absolute top-5 lg:left-56 md:left-24">
            <img
            
              className="rounded-tl-[18px] rounded-tr-[18px] rounded-br-[260px] rounded-bl-[18px] 
            h-[570px] w-[490px] object-right-top object-cover"
              src={main}
              alt="ladyimg"
            />
            {/*-------rocket bg div-------------  */}
            <div
              className="absolute w-[76px] h-[74px] top-16 -left-6 bg-white rounded-tl-[36.8479px]
   rounded-tr-[1.16056px] rounded-br-[17.9887px] rounded-bl-[1.16056px] shadow-2xl"
            />
            {/*-------rocket div-------------  */}
            <div
              className="absolute top-[4.8rem] -left-4 w-[54px] h-[54px]
rounded-tl-[26.9831px] rounded-tr-[0px] rounded-br-[12.7662px] rounded-bl-[0px]
bg-gradient-to-l from-[#33bac6] to-[#162765]"
            />
            {/*-------rocket-------------  */}
            <img
              src={rocket}
              alt="rocket"
              className="absolute top-[5.5rem] left-0 border-white w-8 h-8"
            />
            {/*-------active student bg div-------------  */}
            <div
              className="absolute top-80 left-[20rem] w-[280px] h-[74px] 
rounded-tl-[37px] rounded-tr-[1.16056px] rounded-br-[17.9887px] bg-white shadow-2xl"
            />
            {/*-------active student div-------------  */}
            <div
              className="absolute top-[20.8rem] left-[20.7rem] w-[54px] h-[54px]
rounded-tl-[26.9831px] rounded-tr-[0px] rounded-br-[12.7662px] rounded-bl-[0px]
bg-gradient-to-l from-[#33bac6] to-[#162765]"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              color="white"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="absolute top-[21.5rem] left-[21.5rem] w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <p className="text-lg whitespace-nowrap font-bold absolute top-[21.5rem] h-full left-[25rem]">
              50k+ {t("hero_section_picture_1")}
            </p>
            {/*-------profsseinal bg div-------------  */}
            <div
              className="absolute bottom-14 -left-20 w-[245px] h-[100px] 
rounded-tl-[36.8479px] rounded-tr-[1.16056px] rounded-br-[17.9887px] bg-white shadow-2xl"
            />

            {/*-------profsseinal div-------------  */}
            <div
              className="absolute bottom-16 -left-16 w-[73.18px] h-[73.18px]
rounded-tl-[26.9831px] rounded-tr-[0px] rounded-br-[12.7662px] rounded-bl-[0px]
bg-gradient-to-l from-[#33bac6] to-[#162765]"
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 absolute bottom-20 -left-12"
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
            <p className="absolute bottom-20 -left-4 text-2xl w-10 font-bold mx-9 my-auto">
              {t("hero_section_picture_2")}
            </p>
          </div>
        </div>

        {/* --------------------------search=-------------------------------- */}

        <div className=" w-[90%] flex items-center">
          <div className="relative w-full">
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

        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 items-center xl:justify-start justify-center sm:space-x-12 w-full">
          <img
            className="object-contain object-center h-28"
            src={simg3}
            alt="studyimg"
          />
          <img
            className="object-contain object-center h-28"
            src={simg1}
            alt="studyimg"
          />
          <img
            className="object-contain object-center h-28"
            src={simg2}
            alt="studyimg"
          />
        </div>
      </div>

      {/* -----------main image of herosection for xl screen--------------- */}
      <div className="h-full relative xl:block hidden">
        {/* ------------bg blue of image------------ */}
        <div className="rounded-tl-[282.5px] rounded-tr-[0px] rounded-br-[82px] rounded-bl-none h-full w-[540px] bg-gradient-to-l from-[#33bac6] to-[#162765]" />
        {/* --------------image------------- */}
        <img
          className="rounded-tl-[18px] rounded-tr-[18px] rounded-br-[260px] rounded-bl-[18px] 
      h-[90%] w-[490px] absolute top-5 left-8 object-right-top object-cover"
          src={main}
          alt="ladyimg"
        />
        {/*-------rocket bg div-------------  */}
        <div
          className="absolute w-[76px] h-[74px] top-16 left-0 bg-white rounded-tl-[36.8479px]
   rounded-tr-[1.16056px] rounded-br-[17.9887px] rounded-bl-[1.16056px] shadow-2xl"
        />
        {/*-------rocket div-------------  */}
        <div
          className="absolute top-[4.8rem] left-2 w-[54px] h-[54px]
rounded-tl-[26.9831px] rounded-tr-[0px] rounded-br-[12.7662px] rounded-bl-[0px]
bg-gradient-to-l from-[#33bac6] to-[#162765]"
        />
        {/*-------rocket-------------  */}
        <img
          src={rocket}
          alt="rocket"
          className="absolute top-[5.5rem] left-5 border-white w-8 h-8"
        />
        {/*-------active student bg div-------------  */}
        <div
          className="absolute top-80 left-[20rem] w-[280px] h-[74px] 
rounded-tl-[37px] rounded-tr-[1.16056px] rounded-br-[17.9887px] bg-white shadow-2xl"
        />
        {/*-------active student div-------------  */}
        <div
          className="absolute top-[20.8rem] left-[20.7rem] w-[54px] h-[54px]
rounded-tl-[26.9831px] rounded-tr-[0px] rounded-br-[12.7662px] rounded-bl-[0px]
bg-gradient-to-l from-[#33bac6] to-[#162765]"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          color="white"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="absolute top-[21.5rem] left-[21.5rem] w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        <p className="text-lg whitespace-nowrap font-bold absolute top-[21.5rem] h-full left-[25rem]">
          50k+ {t("hero_section_picture_1")}
        </p>
        {/*-------profsseinal bg div-------------  */}
        <div
          className="absolute bottom-14 -left-20 w-[245px] h-[100px] 
rounded-tl-[36.8479px] rounded-tr-[1.16056px] rounded-br-[17.9887px] bg-white shadow-2xl"
        />

        {/*-------profsseinal div-------------  */}
        <div
          className="absolute bottom-16 -left-16 w-[73.18px] h-[73.18px]
rounded-tl-[26.9831px] rounded-tr-[0px] rounded-br-[12.7662px] rounded-bl-[0px]
bg-gradient-to-l from-[#33bac6] to-[#162765]"
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 absolute bottom-20 -left-12"
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
        <p className="absolute bottom-20 -left-4 text-2xl w-10 font-bold mx-9 my-auto">
          {t("hero_section_picture_2")}
        </p>
      </div>
    </div>
  );
};

export default Herosection;
