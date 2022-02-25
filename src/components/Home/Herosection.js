import React from "react";
import { SearchIcon } from "@heroicons/react/outline";
import simg1 from "../../assets/studyimg1.jpg";
import simg2 from "../../assets/studyimg2.jpg";
import simg3 from "../../assets/studyimg3.jpg";
import main from "../../assets/main.jpg";
import rocket from "../../assets/rocket.png";
import tw from "tailwind-styled-components";

const Herosection = () => {
  return (
    <div className="p-10 grid grid-cols-2 gap-2 mt-5 mb-16 h-full w-full">
      {/* ------------text and search is here------------------------------ */}
      <div className="w-full h-full mt-20 mb-5 space-y-16">
        {/* -------------------------------------text--------------------------------     */}

        <div className="text-6xl tracking-normal font-bold text-black">
          <div className="mb-10">
            <p className="mb-10 block">Learning And</p>
            Level up Your <span className="text-from inline-block">Skills</span>
          </div>
        </div>
        {/* ----------------------------------------paragraph--------------------------------- */}
        <p className="text-xl text-secondary font-semibold tracking-wide w-5/6 leading-relaxed">
          Welcome to the personal data protection continuing education portal.
          These trainings are part of your company's compliance with the GDPR.
        </p>

        {/* --------------------------search=-------------------------------- */}

        <div className="relative">
          <input
            type="search"
            placeholder="Search Course"
            name="search"
            className=" px-3 outline-none h-[72px] w-3/4 border bg-white "
          />
          {/* --------search button----------- */}
          <button className="absolute top-0 right-[8rem] h-[72px] w-[72px] bg-primary rounded-tl-[36px] rounded-br-[36px] rounded-tr-none rounded-bl-none ">
            <SearchIcon className="h-8 w-8 mx-auto " color="white" />
          </button>
        </div>

        {/* --------------------------------photos--------------------------------------- */}

        <div className="flex items-center space-x-16 mt-20 w-full">
          <Image src={simg3} alt="studyimg" />
          <Image src={simg1} alt="studyimg" />
          <Image src={simg2} alt="studyimg" />
        </div>
      </div>

      {/* -----------main image of herosection--------------- */}
      <div className="relative w-full h-full">
        {/* -----------eclipse 1------------------ */}
        <div className="absolute top-40 -right-10 blur-[200px] w-[300px] h-[300px] rounded-full bg-blue-300 " />
        {/* -----------eclipse 2------------------ */}
        <div className="absolute -bottom-28 blur-[200px] -left-32 w-[300px] h-[300px] rounded-full bg-blue-300 " />
        {/* ---------------------main image------------- */}
        <Imagebackgorund />
        <MainImage src={main} alt="ladyimg" />

        {/* ----------------------rocket--------------- */}
        <RocketDivbg />
        <RocketDiv />
        <img
          src={rocket}
          alt="rocket"
          className="absolute top-[6.4rem] left-[3.7rem] border-white w-8 h-8"
        />

        {/* ------------------activestudent----------------- */}
        <ActiveStudentDivbg />
        <ActiveStudentSmallDiv />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          color="white"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="absolute top-[24.5rem] left-[24.5rem] w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        <p className="text-lg font-bold absolute top-[24.5rem] left-[27rem] ml-3">
          50k+ Active Student
        </p>

        {/* ----------------------professinal mentor----------------- */}
        <ProfesionalDivbg />
        <ProfesionalSmallDiv />
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
        <p className="absolute top-[35rem] left-10 text-2xl font-bold mx-9 my-auto">
          Profesional
          <span className="block">Mentor</span>
        </p>
      </div>
    </div>
  );
};

export default Herosection;

// ----------------------tailwind compoentns=---------------------------
const Image = tw.img`
object-contain object-center h-24
`;

// main
const MainImage = tw.img`
rounded-tl-[18px] rounded-tr-[18px] rounded-br-[260px] rounded-bl-[18px] 
h-[632px]
w-[480px]
absolute top-10 left-16 object-right-top object-cover
`;

const Imagebackgorund = tw.div`
rounded-tl-[282.5px] rounded-tr-[0px] rounded-br-[82px] rounded-bl-none 
h-[684px]
w-[540px]
absolute top-5 left-10
 bg-gradient-to-l from-[#33bac6] to-[#162765]`;
//  main

// {/* rocket */}
const RocketDivbg = tw.div`
absolute w-[76px] h-[74px] top-20 left-10
bg-white 
rounded-tl-[36.8479px] rounded-tr-[1.16056px] rounded-br-[17.9887px] rounded-bl-[1.16056px]
shadow-2xl
`;

const RocketDiv = tw.div`
absolute top-[5.7rem] left-12 w-[54px] h-[54px]
rounded-tl-[26.9831px] rounded-tr-[0px] rounded-br-[12.7662px] rounded-bl-[0px]
bg-gradient-to-l from-[#33bac6] to-[#162765]`;
// {/* rocket */}

// activestudent
const ActiveStudentDivbg = tw.div`
absolute top-[23rem] left-[23rem] w-[300px] h-[74px] 
rounded-tl-[37px] rounded-tr-[1.16056px] rounded-br-[17.9887px] 
bg-white
shadow-2xl
`;

const ActiveStudentSmallDiv = tw.div`
absolute top-[23.7rem] left-[23.7rem] w-[54px] h-[54px]
rounded-tl-[26.9831px] rounded-tr-[0px] rounded-br-[12.7662px] rounded-bl-[0px]
bg-gradient-to-l from-[#33bac6] to-[#162765]
`;
// activestudent

const ProfesionalDivbg = tw.div`
absolute top-[34rem] -left-6 w-[245px;] h-[100px] 
rounded-tl-[36.8479px] rounded-tr-[1.16056px] rounded-br-[17.9887px] 
bg-white
shadow-2xl
`;

const ProfesionalSmallDiv = tw.div`
absolute top-[35rem] -left-2 w-[73.18px] h-[73.18px]
rounded-tl-[26.9831px] rounded-tr-[0px] rounded-br-[12.7662px] rounded-bl-[0px]
bg-gradient-to-l from-[#33bac6] to-[#162765]
`;
