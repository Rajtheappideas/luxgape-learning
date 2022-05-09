import React from "react";
import { ClockIcon, PlayIcon } from "@heroicons/react/solid";
import { FcComboChart } from "react-icons/fc";
import { GiCircle } from "react-icons/gi";
import ContentLoader from "react-content-loader";
import { useTranslation } from "react-i18next";

const CourseDescription = ({ courseDetails, loading }) => {
  const { t } = useTranslation();

  return (
    <div className="sm:px-10 px-3">
      {/* ------------------course program details-------------- */}
      <div className="flex md:flex-row flex-col justify-center items-start w-full border-b sm:py-10 py-5 border-[#c4c4c4]">
        {/* ---------------heading-------------- */}
        <div className="w-2/4">
          <h1 className="sm:text-5xl text-3xl tracking-normal font-semibold mb-4">
            {t("Course_Program")}:
          </h1>
          <p className="font-bold text-secondary text-base block whitespace-nowrap">
            {t("All_Course")} - {courseDetails?.total_unit} {t("Units")} (
            {courseDetails?.total_hour} {t("hours")})
          </p>
        </div>
        {/* --------------course details---------------- */}
        <p className="w-full font-light text-lg">
          {courseDetails?.course_details?.about}
        </p>
      </div>

      {/* ----------------course details and units--------- */}
      {loading ? (
        <>
          <ContentLoader
            speed={1}
            width={800}
            height={274}
            backgroundColor="#efe6e6"
            foregroundColor="#d7bcbc"
            animate
          >
            <rect x="50" y="40" rx="3" ry="3" width="40" height="20" />
            <rect x="50" y="80" rx="3" ry="3" width="90" height="20" />
            <rect x="450" y="40" rx="3" ry="3" width="274" height="20" />
            <rect x="450" y="80" rx="3" ry="3" width="374" height="20" />
            <rect x="450" y="120" rx="3" ry="3" width="274" height="20" />
            <rect x="450" y="160" rx="3" ry="3" width="374" height="20" />
          </ContentLoader>
        </>
      ) : (
        courseDetails?.unites?.map((unit, index) => (
          <div
            key={unit?.id}
            // className="flex md:flex-row flex-col justify-around items-start w-full border-b py-10 border-[#c4c4c4] last:border-b-0"
            className="grid grid-cols-3 items-start place-items-start w-full border-b border-[#c4c4c4] py-10"
          >
            {/* ---------------left side heading-------------- */}
            <div className="w-2/4">
              <p className="text-2xl flex items-center tracking-normal font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-to to-from">
                <GiCircle className="h-3 w-3 bg-gradient-to-br from-to to-from rounded-full mr-2" />
                {index + 1} {t("Unit")}
              </p>
              <p className="font-bold text-secondary text-base sm:ml-3">
                {unit?.hours} {t("hours")}
              </p>
            </div>

            {/* --------------course details---------------- */}
            <div className="w-full space-y-5 col-span-2">
              {/* ---------------course title ---------------- */}
              <p className="font-semibold sm:text-3xl text-xl tracking-wide">
                {unit?.unite_info?.unite_title}
              </p>

              {/* --------------------course deacription----------------- */}
              <p className="font-light text-lg">{unit?.unite_info?.about}</p>

              {/* --------------------video hours ---------------- */}
              <p className="flex font-semibold text-secondary">
                <ClockIcon className="w-6 h-6 mr-2" color="orange" />
                {unit?.video_list_count} {t("Video_Lectures")}
              </p>

              {/*-------------------------skills ---------------------  */}
              <p className="flex font-semibold text-secondary">
                <FcComboChart className="w-6 h-6 mr-2" />
                {t("Skills_You_Get")}: {unit?.skills_info?.skills_name}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CourseDescription;
