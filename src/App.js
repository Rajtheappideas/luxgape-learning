import React, { lazy, Suspense } from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/usercontext";
import Loading from "./assets/animations/loading.json";
import Lottie from "react-lottie";

// pages import
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const SignIn = lazy(() => import("./pages/SignIn"));
const SignUp = lazy(() => import("./pages/Signup"));
const AboutCourse = lazy(() => import("./pages/AboutCourse"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const Faq = lazy(() => import("./pages/Faq"));
const Courses = lazy(() => import("./pages/Courses"));
const Employee = lazy(() => import("./pages/Employee"));
const Exam = lazy(() => import("./pages/Exam"));
const AttendCourseHistory = lazy(() => import("./pages/AttendCourseHistory"));
const Payment = lazy(() => import("./pages/Payment"));
const Erro404 = lazy(() => import("./pages/Error404"));
const Class = lazy(() => import("./pages/Class"));

const App = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="absolute top-[30%] left-1/2 -translate-x-1/2">
            <Lottie options={defaultOptions} height={300} width={300} />
          </div>
        }
      >
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
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
