import React from "react";
import { useTranslation } from "react-i18next";
import { MetaTags } from "react-meta-tags";
import { CourseHistory, Footer, Navbar } from "../components";

const AttendCourseHistory = () => {
  const { t } = useTranslation();
  return (
    <div>
      <MetaTags>
        <title>{t("attend_course_history")}</title>
      </MetaTags>
      <Navbar />

      <CourseHistory showButton={false} slice={false} />
      <Footer />
    </div>
  );
};

export default AttendCourseHistory;
