import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import mpcimg1 from "../../assets/mpcimg1.jpg";
import mpcimg2 from "../../assets/mpcimg2.jpg";
import mpcimg3 from "../../assets/mpcimg3.jpg";
import { ArrowRightIcon, StarIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    img: mpcimg1,
    courseName: "Lorem Ipsum is simply dummy text.",
    courseDeatils:
      "Lorem Ipsum has been the industry 's standard dummy text ever sincethe 1500s,",
    reviews: StarIcon,
    price: "22",
  },
  {
    id: 2,
    img: mpcimg2,
    courseName: "Lorem Ipsum is simply dummy text.",
    courseDeatils:
      "Lorem Ipsum has been the industry 's standard dummy text ever sincethe 1500s,",
    reviews: StarIcon,
    price: "20",
  },
  {
    id: 3,
    img: mpcimg3,
    courseName: "Lorem Ipsum is simply dummy text.",
    courseDeatils:
      "Lorem Ipsum has been the industry 's standard dummy text ever sincethe 1500s,",
    reviews: StarIcon,
    price: "32",
  },
  {
    id: 4,
    img: mpcimg3,
    courseName: "Lorem Ipsum is simply dummy text.",
    courseDeatils:
      "Lorem Ipsum has been the industry 's standard dummy text ever sincethe 1500s,",
    reviews: StarIcon,
    price: "29",
  },
  {
    id: 5,
    img: mpcimg1,
    courseName: "Lorem Ipsum is simply dummy text.",
    courseDeatils:
      "Lorem Ipsum has been the industry 's standard dummy text ever sincethe 1500s,",
    reviews: StarIcon,
    price: "21",
  },
  {
    id: 6,
    img: mpcimg2,
    courseName: "Lorem Ipsum is simply dummy text.",
    courseDeatils:
      "Lorem Ipsum has been the industry 's standard dummy text ever sincethe 1500s,",
    reviews: StarIcon,
    price: "25",
  },
  {
    id: 7,
    img: mpcimg1,
    courseName: "Lorem Ipsum is simply dummy text.",
    courseDeatils:
      "Lorem Ipsum has been the industry 's standard dummy text ever sincethe 1500s,",
    reviews: StarIcon,
    price: "25",
  },
  {
    id: 8,
    img: mpcimg3,
    courseName: "Lorem Ipsum is simply dummy text.",
    courseDeatils:
      "Lorem Ipsum has been the industry 's standard dummy text ever sincethe 1500s,",
    reviews: StarIcon,
    price: "25",
  },
  {
    id: 9,
    img: mpcimg2,
    courseName: "Lorem Ipsum is simply dummy text.",
    courseDeatils:
      "Lorem Ipsum has been the industry 's standard dummy text ever sincethe 1500s,",
    reviews: StarIcon,
    price: "25",
  },
];
const MostPopularCourse = () => {
  return (
    <div className="p-10 mb-10">
      <div className="mb-10 flex justify-between items-center">
        <p className="text-left font-semibold text-5xl mb-7 ml-6">
          More Popular Course
        </p>
      </div>
      <div className="grid grid-cols-3 grid-rows-3 items-center justify-items-center gap-x-5 gap-y-10">
        {/* -------------- rounde div=-------------- */}
        {data.map((course) => (
          <RoundedDiv key={course.id}>
            <Link to="/courses/aboutcourse">
              <img
                src={course.img}
                alt="mpcimg1"
                className="h-1/2 w-full object-center object-cover rounded-tl-[182px]"
              />
              <div className="p-5 space-y-5">
                <p className="text-3xl font-semibold">{course.courseName}</p>
                <p className="text-secondary text-xl font-semibold">
                  {course.courseDeatils}
                </p>
                <div className="flex items-start space-x-1">
                  <StarIcon className="w-8 h-8" color="gold" />
                  <StarIcon className="w-8 h-8" color="gold" />
                  <StarIcon className="w-8 h-8" color="gold" />
                  <StarIcon className="w-8 h-8" color="gold" />
                  <StarIcon className="w-8 h-8" color="gold" />
                </div>
                <div className="flex items-center space-x-3">
                  <p className="text-secondary">
                    <span className="font-bold text-2xl">${course.price}</span>
                    /employee
                  </p>
                  <button className="w-10 h-10 bg-black cursor-pointer">
                    <ArrowRightIcon className="p-2" color="white" />
                  </button>
                </div>
              </div>
            </Link>
          </RoundedDiv>
        ))}
      </div>
    </div>
  );
};

export default MostPopularCourse;

const RoundedDiv = tw.div`
border relative
rounded-tl-[182px] rounded-tr-0 rounded-br-[182px] rounded-bl-0
 h-[673px] w-[364px]
 cursor-pointer
 `;
