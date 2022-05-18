import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { MetaTags } from "react-meta-tags";
import { useParams } from "react-router-dom";
import {
  Footer,
  Navbar,
  ContactUs,
  CourseDetails,
  CourseDescription,
  Reviews,
  SkillsYouGet,
  MostPopularCourse,
} from "../components";
import Eclipse from "../components/Eclipse";
import { useUserContext } from "../context/usercontext";

const AboutCourse = () => {
  const [courseDetails, setCourseDetails] = useState({});
  const [userReviews, setUserReviews] = useState([]);
  const [skillsYouGet, setSkillsYouGet] = useState([]);
  const [units, setUnits] = useState([]);
  const [loading, setLoading] = useState(true);

  const { userLanguage, userData, logoutAllTabsEventListener } =
    useUserContext();

  const { id } = useParams();
  const { t } = useTranslation();
  // fetch data on first rendering page
  useEffect(() => {
    logoutAllTabsEventListener();
    setTimeout(() => {
      setLoading(true);
      axios("https://chessmafia.com/php/luxgap/App/api/view-course-detail", {
        method: "POST",
        params: {
          lang_code: userLanguage,
          course_id: id,
        },
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "consumer-access-token": userData?.api_token,
        },
      })
        .then((response) => {
          if (response?.data?.status === "Success") {
            setCourseDetails(response?.data?.data);
            setUnits(response?.data?.data?.unites);
            setUserReviews(response?.data?.data?.review_info);
            setSkillsYouGet(response?.data?.data?.skill_details);
            setLoading(false);
            return true;
          }
        })
        .catch((err) => {
          console.log("error ->", err?.response);
          if (err?.response?.status === 404) {
            console.log("something went wrong!");
            setLoading(false);
            return false;
          }
        });
    }, 1000);
  }, [id]);
  return (
    <div className="">
      <MetaTags>
        <title>{t("About_course")}</title>
      </MetaTags>
      {/* <Eclipse /> */}
      {/* -------------------navbar=------------------ */}
      <Navbar activeText="Course" />
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r text-center from-to to-from">
        {t("About_course")}
      </h1>

      {/* -------------cousrse details----------------- */}
      <CourseDetails courseDetails={courseDetails} loading={loading} />

      {/* -------------Skills you get----------------- */}
      <SkillsYouGet skillsYouGet={skillsYouGet} loading={loading} />

      {/* -------------cousrse description----------------- */}
      <CourseDescription
        units={units}
        courseDetails={courseDetails}
        loading={loading}
      />

      {/* -------------Reviews----------------- */}
      <Reviews course_id={id} userReviews={userReviews} loading={loading} />

      {/* -------------Reviews----------------- */}
      <MostPopularCourse showButton={false} />

      {/* ------------------------Contact US--------------------------- */}
      <ContactUs />

      {/* ----------------------------------foooter---------------------------- */}
      <Footer />
    </div>
  );
};

export default AboutCourse;
