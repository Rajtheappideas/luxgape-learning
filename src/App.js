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
  TermsAndConditions,
  Faq,
  AttendCourseHistory,
  Class,
  Exam,
  Erro404,
  Employee,
} from "./pages/index";
import { UserProvider } from "./context/usercontext";
import { UserLanguageProvider } from "./context/userLanguage";

const App = () => {
  return (
    <BrowserRouter>
      {/* <UserLanguageProvider> */}
        <UserProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/terms&conditions" element={<TermsAndConditions />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/aboutcourse" element={<AboutCourse />} />
            <Route path="/courses/aboutcourse/payment" element={<Payment />} />
            <Route
              path="/attendcoursehistory"
              element={<AttendCourseHistory />}
            />
            <Route path="/employees" element={<Employee />} />
            <Route path="/exam" element={<Exam />} />
            <Route path="/class" element={<Class />} />
            <Route path="*" element={<Erro404 />} />
          </Routes>
        </UserProvider>
      {/* </UserLanguageProvider> */}
    </BrowserRouter>
  );
};

export default App;
