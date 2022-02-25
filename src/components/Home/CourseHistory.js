import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import cimg1 from "../../assets/cimg1.jpg";
import cimg2 from "../../assets/cimg2.jpg";
import cimg3 from "../../assets/cimg3.jpg";
import { DocumentTextIcon, DownloadIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    img: cimg1,
    title: "Bond Physics",
    hours: "3.2",
    attendedhours: "1:30:49",
    totalhours: "3:22:10",
    percetange: 50,
    certified: false,
    completion: "Pending",
  },
  {
    id: 2,
    img: cimg2,
    title: "Humans Heart",
    hours: "4.2",
    attendedhours: "1:30:49",
    totalhours: "4:22:10",
    percetange: 100,
    certified: true,
    completion: "Done",
  },
  {
    id: 3,
    img: cimg3,
    title: "Bond Physics",
    hours: "4.1",
    attendedhours: "2:30:49",
    totalhours: "4:10:10",
    percetange: 100,
    certified: true,
    completion: "Done",
  },
];
const CourseHistory = ({ showButton }) => {
  return (
    <div className="mb-10 p-10 relative">
      {/* ----------------eclipse---------------- */}
      <div className="absolute -bottom-28 left-0 blur-[200px] w-[300px] h-[300px] rounded-full bg-pink-300 " />
      {/* --------------heading-------------- */}
      <div className="mb-20 flex justify-between items-center">
        <p className="text-5xl font-bold tracking-wide">
          Attended Course History
        </p>
        {showButton ? (
          <Link to="/attendcoursehistory">
            <button className="text-primary text-2xl cursor-pointer underline font-semibold">
              View More
            </button>
          </Link>
        ) : (
          <Link to="/employees">
            <button className="text-green-500 bg-green-100 border border-green-400 text-xl cursor-pointer h-10 w-auto px-5 text-center rounded-xl font-semibold">
              Employee History
            </button>
          </Link>
        )}
      </div>

      {/* -------------------course history----------------------- */}
      <div className="flex justify-around items-center space-x-3 ">
        {data.map((item) => (
          <BorderDiv
            key={item.id}
            className={`${
              item.percetange === 100 ? "border-from" : "border-red-500"
            }`}
          >
            <img
              src={item.img}
              alt="courseimg"
              className="w-[286px] h-[163px] rounded-tl-[81.5px] rounded-tr-none rounded-br-[81.5px] rounded-bl-none object-center object-cover"
            />
            <p className="font-bold text-2xl tracking-tight">{item.title}</p>
            <p className="text-gray-400 font-bold">{item.hours} hours video</p>
            <div className="flex justify-between items-center border-t border-b border-gray-300 py-3">
              {item.certified ? (
                <p className="font-bold flex">
                  <DocumentTextIcon className="h-5 w-5 mr-1" color="gray" />
                  Certified
                </p>
              ) : (
                <p className="font-bold text-red-500">
                  {item.attendedhours} / {item.totalhours}
                </p>
              )}
              {item.certified ? (
                <button>
                  <DownloadIcon className="h-5 w-5" />
                </button>
              ) : (
                <button className="text-red-600 underline font-bold">
                  Resume
                </button>
              )}
            </div>
            {item.certified ? (
              <div className="flex text-green-600">
                <p className="rounded-full w-14 px-2 py-3 text-center h-14 border-2 bg-gray-200 border-green-600">
                  100%
                </p>
                <div className="flex-col mx-2 font-bold">
                  <span className="block text-xl">100%</span>
                  <span className="block text-sm">Done</span>
                </div>
              </div>
            ) : (
              <div className="flex text-red-600">
                <p className="rounded-full  w-14 px-2 py-3 text-center h-14  border-b-2 bg-gray-200 border-red-600">
                  {item.percetange}%
                </p>
                <div className="flex-col mx-2 text-red-600 font-bold">
                  <span className="block text-xl">{item.percetange}%</span>
                  <span className="block text-sm">{item.completion}</span>
                </div>
              </div>
            )}
            <div className="absolute -top-8 -right-7 transform -rotate-45">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="70"
                height="70"
                viewBox="0 0 172 172"
                // className=" fill:#000000;"
                // color="red"
              >
                <g
                  fill="none"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  className="mix-blend-mode: normal"
                >
                  <path d="M0,172v-172h172v172z" fill="none"></path>
                  <g fill="#e74c3c">
                    <path d="M167.35662,72.73287l-4.72475,-5.86113c-2.37313,-2.95028 -3.57762,-6.65695 -3.39121,-10.43891l0.3764,-7.5173c0.49112,-9.86176 -6.06905,-18.88826 -15.59742,-21.46931l-7.26637,-1.96805c-3.65649,-0.98582 -6.80752,-3.28008 -8.87952,-6.44904l-4.11534,-6.30206c-5.39869,-8.26652 -16.00967,-11.71509 -25.23692,-8.202l-7.03336,2.68142c-3.53819,1.34788 -7.43844,1.34788 -10.97663,0l-7.03336,-2.68142c-9.22366,-3.51309 -19.83823,-0.06453 -25.23692,8.202l-4.11534,6.30206c-2.07201,3.16895 -5.22304,5.46322 -8.87952,6.44904l-7.26637,1.96805c-9.52837,2.58105 -16.08854,11.60755 -15.59742,21.46931l0.3764,7.5173c0.18641,3.78195 -1.01808,7.48863 -3.39121,10.43891l-4.72475,5.86113c-6.19093,7.68579 -6.19093,18.84882 0,26.53461l4.72475,5.86113c2.21182,2.75312 3.40913,6.16225 3.40913,9.67535c0,0.55851 0.02438,-0.08317 -0.39433,8.28086c-0.49112,9.86176 6.06905,18.88826 15.59742,21.46931l7.26637,1.96805c3.65649,0.98582 6.80752,3.28008 8.87952,6.44904l4.11534,6.30206c3.97912,6.09414 10.79022,9.5678 17.78773,9.5678c10.17973,0 15.52501,-7.83169 25.45918,-4.04723l7.03336,2.68142c9.22725,3.51309 19.83823,0.06453 25.23692,-8.202l4.11534,-6.30206c2.07201,-3.16895 5.22304,-5.46322 8.87952,-6.44904l7.26637,-1.96805c9.52837,-2.58105 16.08854,-11.60755 15.59742,-21.46931l-0.3764,-7.5173c-0.18641,-3.78195 1.01808,-7.48863 3.39121,-10.43891l4.72475,-5.86113c6.19093,-7.68579 6.19093,-18.84882 0,-26.53461zM85.99982,148.734c-34.46238,0 -62.73382,-28.27969 -62.73382,-62.73382c0,-34.46238 28.27969,-62.73382 62.73382,-62.73382c34.46238,0 62.73382,28.27969 62.73382,62.73382c0,34.46238 -28.27933,62.73382 -62.73382,62.73382zM85.99982,29.00202c-31.42893,0 -56.99816,25.56923 -56.99816,56.99816c0,31.42893 25.56923,56.99816 56.99816,56.99816c31.42893,0 56.99816,-25.56923 56.99816,-56.99816c0,-31.42893 -25.56923,-56.99816 -56.99816,-56.99816zM87.86427,74.17037c0,-1.58376 1.28407,-2.86783 2.86783,-2.86783h14.19577c1.58376,0 2.86783,1.28407 2.86783,2.86783c0,1.58376 -1.28407,2.86783 -2.86783,2.86783h-11.32794v6.09414h6.59601c1.58376,0 2.86783,1.28407 2.86783,2.86783c0,1.58376 -1.28407,2.86783 -2.86783,2.86783h-6.59601v6.09414h11.32794c1.58376,0 2.86783,1.28407 2.86783,2.86783c0,1.58376 -1.28407,2.86783 -2.86783,2.86783h-14.19577c-1.58376,0 -2.86783,-1.28407 -2.86783,-2.86783zM64.20466,74.17037c0,-1.58376 1.28407,-2.86783 2.86783,-2.86783h8.28086c4.84269,0 8.78273,3.94004 8.78273,8.78273c0,3.61598 -2.19676,6.72901 -5.32592,8.07366l4.91726,8.19555c1.15394,1.92288 -0.25309,4.34369 -2.4563,4.34369c-0.97435,0 -1.92432,-0.49649 -2.46203,-1.39269l-7.09788,-11.82981c-1.14534,-1.90854 0.23337,-4.34333 2.45917,-4.34333h1.18298c1.68019,0 3.04707,-1.36688 3.04707,-3.04707c0,-1.68019 -1.36688,-3.04707 -3.04707,-3.04707h-5.41303v20.79178c0,1.58376 -1.28407,2.86783 -2.86783,2.86783c-1.58376,0 -2.86783,-1.28407 -2.86783,-2.86783zM57.60829,77.03821h-11.32794v6.09414h8.96197c1.58376,0 2.86783,1.28407 2.86783,2.86783c0,1.58376 -1.28407,2.86783 -2.86783,2.86783h-8.96197v8.96197c0,1.58376 -1.28407,2.86783 -2.86783,2.86783c-1.58376,0 -2.86783,-1.28407 -2.86783,-2.86783v-23.65961c0,-1.58376 1.28407,-2.86783 2.86783,-2.86783h14.19577c1.58376,0 2.86783,1.28407 2.86783,2.86783c0,1.58376 -1.28371,2.86783 -2.86783,2.86783zM107.50856,118.98024h-43.01748c-1.58376,0 -2.86783,-1.28407 -2.86783,-2.86783c0,-1.58376 1.28407,-2.86783 2.86783,-2.86783h43.01748c1.58376,0 2.86783,1.28407 2.86783,2.86783c0,1.58376 -1.28371,2.86783 -2.86783,2.86783zM131.45495,74.17037c0,1.58376 -1.28407,2.86783 -2.86783,2.86783h-11.32794v6.09414h6.59601c1.58376,0 2.86783,1.28407 2.86783,2.86783c0,1.58376 -1.28407,2.86783 -2.86783,2.86783h-6.59601v6.09414h11.32794c1.58376,0 2.86783,1.28407 2.86783,2.86783c0,1.58376 -1.28407,2.86783 -2.86783,2.86783h-14.19577c-1.58376,0 -2.86783,-1.28407 -2.86783,-2.86783v-23.65961c0,-1.58376 1.28407,-2.86783 2.86783,-2.86783h14.19577c1.58412,0 2.86783,1.28371 2.86783,2.86783z"></path>
                  </g>
                </g>
              </svg>
            </div>
          </BorderDiv>
        ))}
      </div>
    </div>
  );
};

export default CourseHistory;

const BorderDiv = tw.div`
border-2
rounded-tl-[103px] rounded-tr-0 rounded-br-[119px] rounded-bl-0
 h-[434px] w-[322px]
 p-5
 space-y-4
 relative
`;
