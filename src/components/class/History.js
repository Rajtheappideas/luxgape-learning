import { PlayIcon } from "@heroicons/react/solid";
import React from "react";
import { useTranslation } from "react-i18next";
import img from "../../assets/cimg3.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const courseHistorys = [
  {
    img: img,
    No: 1,
    title: "Video title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  },
  {
    img: img,
    No: 2,
    title: "Video title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  },
  {
    img: img,
    No: 3,
    title: "Video title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  },
  {
    img: img,
    No: 4,
    title: "Video title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  },
  {
    img: img,
    No: 5,
    title: "Video title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  },
  {
    img: img,
    No: 6,
    title: "Video title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  },
  {
    img: img,
    No: 7,
    title: "Video title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  },
  {
    img: img,
    No: 8,
    title: "Video title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  },
  {
    img: img,
    No: 9,
    title: "Video title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  },
];
const History = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="grid sm:gap-x-16 gap-y-5 lg:grid-cols-3 md:grid-cols-2 place-items-center grid-flow-row sm:p-10 p-3">
        {courseHistorys.map((courseHistory) => (
          <div key={courseHistory.No}>
            <div className="relative mix-blend-darken rounded-xl bg-black overflow-hidden">
              <LazyLoadImage
                src={courseHistory.img}
                alt="courseimage"
                className="h-48 object-center w-full object-cover opacity-70 "
              />
              <PlayIcon
                className="h-14 text-center absolute top-[40%] left-1/2 -translate-x-1/2 "
                color="black"
              />
            </div>
            <p className="font-bold text-xl ml-2">
              {courseHistory.No}. {courseHistory.title}
            </p>
            <p className="font-normal text-lg">{courseHistory.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
