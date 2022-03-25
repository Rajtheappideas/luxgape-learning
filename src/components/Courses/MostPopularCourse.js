import React, { useState } from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import mpcimg1 from "../../assets/mpcimg1.jpg";
import mpcimg2 from "../../assets/mpcimg2.jpg";
import mpcimg3 from "../../assets/mpcimg3.jpg";
import {
  ArrowRightIcon,
  StarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";

const data = [
  {
    img: mpcimg1,
    courseName: "Lorem Ipsum is simply dummy text.",
    courseDeatils:
      "Lorem Ipsum has been the industry 's standard dummy text ever sincethe 1500s,",
    reviews: StarIcon,
    price: "22",
  },
  {
    img: mpcimg2,
    courseName: "Lorem Ipsum is simply dummy text.",
    courseDeatils:
      "Lorem Ipsum has been the industry 's standard dummy text ever sincethe 1500s,",
    reviews: StarIcon,
    price: "20",
  },
  {
    img: mpcimg3,
    courseName: "Lorem Ipsum is simply dummy text.",
    courseDeatils:
      "Lorem Ipsum has been the industry 's standard dummy text ever sincethe 1500s,",
    reviews: StarIcon,
    price: "32",
  },
  {
    img: mpcimg3,
    courseName: "Lorem Ipsum is simply dummy text.",
    courseDeatils:
      "Lorem Ipsum has been the industry 's standard dummy text ever sincethe 1500s,",
    reviews: StarIcon,
    price: "29",
  },
  {
    img: mpcimg1,
    courseName: "Lorem Ipsum is simply dummy text.",
    courseDeatils:
      "Lorem Ipsum has been the industry 's standard dummy text ever sincethe 1500s,",
    reviews: StarIcon,
    price: "21",
  },
  {
    img: mpcimg2,
    courseName: "Lorem Ipsum is simply dummy text.",
    courseDeatils:
      "Lorem Ipsum has been the industry 's standard dummy text ever sincethe 1500s,",
    reviews: StarIcon,
    price: "25",
  },
  {
    img: mpcimg1,
    courseName: "Lorem Ipsum is simply dummy text.",
    courseDeatils:
      "Lorem Ipsum has been the industry 's standard dummy text ever sincethe 1500s,",
    reviews: StarIcon,
    price: "25",
  },
  {
    img: mpcimg3,
    courseName: "Lorem Ipsum is simply dummy text.",
    courseDeatils:
      "Lorem Ipsum has been the industry 's standard dummy text ever sincethe 1500s,",
    reviews: StarIcon,
    price: "25",
  },
  {
    img: mpcimg2,
    courseName: "Lorem Ipsum is simply dummy text.",
    courseDeatils:
      "Lorem Ipsum has been the industry 's standard dummy text ever sincethe 1500s,",
    reviews: StarIcon,
    price: "25",
  },
  {
    img: mpcimg1,
    courseName: "Lorem Ipsum is simply dummy text.",
    courseDeatils:
      "Lorem Ipsum has been the industry 's standard dummy text ever sincethe 1500s,",
    reviews: StarIcon,
    price: "22",
  },
  {
    img: mpcimg2,
    courseName: "Lorem Ipsum is simply dummy text.",
    courseDeatils:
      "Lorem Ipsum has been the industry 's standard dummy text ever sincethe 1500s,",
    reviews: StarIcon,
    price: "20",
  },
  {
    img: mpcimg3,
    courseName: "Lorem Ipsum is simply dummy text.",
    courseDeatils:
      "Lorem Ipsum has been the industry 's standard dummy text ever sincethe 1500s,",
    reviews: StarIcon,
    price: "32",
  },
  {
    img: mpcimg3,
    courseName: "Lorem Ipsum is simply dummy text.",
    courseDeatils:
      "Lorem Ipsum has been the industry 's standard dummy text ever sincethe 1500s,",
    reviews: StarIcon,
    price: "29",
  },
  {
    img: mpcimg1,
    courseName: "Lorem Ipsum is simply dummy text.",
    courseDeatils:
      "Lorem Ipsum has been the industry 's standard dummy text ever sincethe 1500s,",
    reviews: StarIcon,
    price: "21",
  },
  {
    img: mpcimg2,
    courseName: "Lorem Ipsum is simply dummy text.",
    courseDeatils:
      "Lorem Ipsum has been the industry 's standard dummy text ever sincethe 1500s,",
    reviews: StarIcon,
    price: "25",
  },
  {
    img: mpcimg1,
    courseName: "Lorem Ipsum is simply dummy text.",
    courseDeatils:
      "Lorem Ipsum has been the industry 's standard dummy text ever sincethe 1500s,",
    reviews: StarIcon,
    price: "25",
  },
  {
    img: mpcimg3,
    courseName: "Lorem Ipsum is simply dummy text.",
    courseDeatils:
      "Lorem Ipsum has been the industry 's standard dummy text ever sincethe 1500s,",
    reviews: StarIcon,
    price: "25",
  },
  {
    img: mpcimg2,
    courseName: "Lorem Ipsum is simply dummy text.",
    courseDeatils:
      "Lorem Ipsum has been the industry 's standard dummy text ever sincethe 1500s,",
    reviews: StarIcon,
    price: "25",
  },
  {
    img: mpcimg1,
    courseName: "Lorem Ipsum is simply dummy text.",
    courseDeatils:
      "Lorem Ipsum has been the industry 's standard dummy text ever sincethe 1500s,",
    reviews: StarIcon,
    price: "22",
  },
  {
    img: mpcimg2,
    courseName: "Lorem Ipsum is simply dummy text.",
    courseDeatils:
      "Lorem Ipsum has been the industry 's standard dummy text ever sincethe 1500s,",
    reviews: StarIcon,
    price: "20",
  },
  {
    img: mpcimg3,
    courseName: "Lorem Ipsum is simply dummy text.",
    courseDeatils:
      "Lorem Ipsum has been the industry 's standard dummy text ever sincethe 1500s,",
    reviews: StarIcon,
    price: "32",
  },
  {
    img: mpcimg3,
    courseName: "Lorem Ipsum is simply dummy text.",
    courseDeatils:
      "Lorem Ipsum has been the industry 's standard dummy text ever sincethe 1500s,",
    reviews: StarIcon,
    price: "29",
  },
  {
    img: mpcimg1,
    courseName: "Lorem Ipsum is simply dummy text.",
    courseDeatils:
      "Lorem Ipsum has been the industry 's standard dummy text ever sincethe 1500s,",
    reviews: StarIcon,
    price: "21",
  },
  {
    img: mpcimg2,
    courseName: "Lorem Ipsum is simply dummy text.",
    courseDeatils:
      "Lorem Ipsum has been the industry 's standard dummy text ever sincethe 1500s,",
    reviews: StarIcon,
    price: "25",
  },
  {
    img: mpcimg1,
    courseName: "Lorem Ipsum is simply dummy text.",
    courseDeatils:
      "Lorem Ipsum has been the industry 's standard dummy text ever sincethe 1500s,",
    reviews: StarIcon,
    price: "25",
  },
  {
    img: mpcimg3,
    courseName: "Lorem Ipsum is simply dummy text.",
    courseDeatils:
      "Lorem Ipsum has been the industry 's standard dummy text ever sincethe 1500s,",
    reviews: StarIcon,
    price: "25",
  },
  {
    img: mpcimg2,
    courseName: "Lorem Ipsum is simply dummy text.",
    courseDeatils:
      "Lorem Ipsum has been the industry 's standard dummy text ever sincethe 1500s,",
    reviews: StarIcon,
    price: "25",
  },
  {
    img: mpcimg1,
    courseName: "Lorem Ipsum is simply dummy text.",
    courseDeatils:
      "Lorem Ipsum has been the industry 's standard dummy text ever sincethe 1500s,",
    reviews: StarIcon,
    price: "22",
  },
  {
    img: mpcimg2,
    courseName: "Lorem Ipsum is simply dummy text.",
    courseDeatils:
      "Lorem Ipsum has been the industry 's standard dummy text ever sincethe 1500s,",
    reviews: StarIcon,
    price: "20",
  },
  {
    img: mpcimg3,
    courseName: "Lorem Ipsum is simply dummy text.",
    courseDeatils:
      "Lorem Ipsum has been the industry 's standard dummy text ever sincethe 1500s,",
    reviews: StarIcon,
    price: "32",
  },
  {
    img: mpcimg3,
    courseName: "Lorem Ipsum is simply dummy text.",
    courseDeatils:
      "Lorem Ipsum has been the industry 's standard dummy text ever sincethe 1500s,",
    reviews: StarIcon,
    price: "29",
  },
  {
    img: mpcimg1,
    courseName: "Lorem Ipsum is simply dummy text.",
    courseDeatils:
      "Lorem Ipsum has been the industry 's standard dummy text ever sincethe 1500s,",
    reviews: StarIcon,
    price: "21",
  },
  {
    img: mpcimg2,
    courseName: "Lorem Ipsum is simply dummy text.",
    courseDeatils:
      "Lorem Ipsum has been the industry 's standard dummy text ever sincethe 1500s,",
    reviews: StarIcon,
    price: "25",
  },
  {
    img: mpcimg1,
    courseName: "Lorem Ipsum is simply dummy text.",
    courseDeatils:
      "Lorem Ipsum has been the industry 's standard dummy text ever sincethe 1500s,",
    reviews: StarIcon,
    price: "25",
  },
  {
    img: mpcimg3,
    courseName: "Lorem Ipsum is simply dummy text.",
    courseDeatils:
      "Lorem Ipsum has been the industry 's standard dummy text ever sincethe 1500s,",
    reviews: StarIcon,
    price: "25",
  },
  {
    img: mpcimg2,
    courseName: "Lorem Ipsum is simply dummy text.",
    courseDeatils:
      "Lorem Ipsum has been the industry 's standard dummy text ever sincethe 1500s,",
    reviews: StarIcon,
    price: "25",
  },
];
const MostPopularCourse = () => {
  const [pageNumber, setPageNumber] = useState(0);

  const coursesPerPage = 6;
  const pagesVisited = pageNumber * coursesPerPage;
  const { t } = useTranslation();
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="sm:p-10 mb-10">
      <div className="mb-10 px-3 flex justify-between items-center">
        <p className="text-left font-semibold sm:text-5xl text-3xl sm:mb-7">
          {t("most_popular_course")}
        </p>
      </div>
      <div className="grid xl:grid-cols-3 grid-flow-row md:grid-cols-2 items-center place-items-center lg:gap-10 md:gap-16 gap-4">
        {/* -------------- rounde div=-------------- */}
        {data.map((course, index) => (
          <RoundedDiv key={index} onClick={ScrollToTop}>
            <Link to="/courses/aboutcourse">
              <LazyLoadImage
                src={course.img}
                alt="mpcimg1"
                className="h-1/2 w-full object-center object-cover rounded-tl-[182px]"
              />
              <div className="p-5 sm:space-y-5 space-y-2">
                <p className="sm:text-3xl text-2xl font-semibold">{course.courseName}</p>
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
      {/* ---------------pagination=------------------- */}
      <div className="flex items-center justify-center sm:space-x-5 space-x-2 mt-7">
        <button>
          <ChevronLeftIcon className="h-10" />
        </button>
        <button className=" bg-gradient-to-r to-from from-to rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none h-full px-4 py-2 text-white text-xl font-semibold">
          1
        </button>
        <button className="rounded-xl h-full px-4 py-2 text-xl font-semibold">
          2
        </button>
        <button className="rounded-xl h-full px-4 py-2 text-xl font-semibold">
          3
        </button>
        <button className="rounded-xl h-full px-4 py-2 text-xl font-semibold">
          4
        </button>
        <button className="rounded-xl h-full px-4 py-2 text-xl font-semibold">
          5
        </button>
        <button>
          <ChevronRightIcon className="h-10" />
        </button>
      </div>
    </div>
  );
};

export default MostPopularCourse;

const RoundedDiv = tw.div`
border relative
rounded-tl-[182px] rounded-tr-0 rounded-br-[182px] rounded-bl-0
 sm:h-[673px] sm:w-[364px] w-11/12
 cursor-pointer
 `;
