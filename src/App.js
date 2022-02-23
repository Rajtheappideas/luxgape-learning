import React from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import {
  Home,
  SignIn,
  SignUp,
  About,
  Courses,
  AboutCourse,
  Payment,
  PrivacyPolicy,
  AttendCourseHistory,
  Class,
  Exam,
} from "./pages/index";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/aboutcourse" element={<AboutCourse />} />
        <Route path="/courses/aboutcourse/payment" element={<Payment />} />
        <Route path="/attendcoursehistory" element={<AttendCourseHistory />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/class" element={<Class />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
