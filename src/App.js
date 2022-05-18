import React, { lazy, Suspense, useEffect } from "react";
import "./App.css";
import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";
import { UserProvider, useUserContext } from "./context/usercontext";
import Loading from "./assets/animations/loading.json";
import Lottie from "react-lottie";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorBoundary";

// pages import using lazy component of react
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const SignIn = lazy(() => import("./pages/SignIn"));
const SignUp = lazy(() => import("./pages/Signup"));
const UserProfile = lazy(() => import("./pages/UserProfile"));
const AboutCourse = lazy(() => import("./pages/AboutCourse"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const Faq = lazy(() => import("./pages/Faq"));
const Courses = lazy(() => import("./pages/Courses"));
const MyCourses = lazy(() => import("./pages/MyCourses"));
const Employee = lazy(() => import("./pages/Employee"));
const Exam = lazy(() => import("./pages/Exam"));
const AttendCourseHistory = lazy(() => import("./pages/AttendCourseHistory"));
const Payment = lazy(() => import("./pages/Payment"));
const Erro404 = lazy(() => import("./pages/Error404"));
const Class = lazy(() => import("./pages/Class"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));
const PrivateRoute = lazy(() => import("./pages/PrivateRoute"));

const App = () => {
  // default options for lottie files
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
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          window.location.reload();
        }}
      >
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
              <Route
                path="/userprofile"
                element={
                  <PrivateRoute>
                    <UserProfile />
                  </PrivateRoute>
                }
              />
              <Route path="/aboutus" element={<About />} />
              <Route path="/privacypolicy" element={<PrivacyPolicy />} />
              <Route
                path="/terms&conditions"
                element={<TermsAndConditions />}
              />
              <Route path="/faq" element={<Faq />} />
              <Route path="/courses" element={<Courses />} />
              <Route
                path="/mycourses"
                element={
                  <PrivateRoute>
                    <MyCourses />
                  </PrivateRoute>
                }
              />
              <Route
                path="/courses/aboutcourse/:id"
                element={<AboutCourse />}
              />
              <Route
                path="/courses/aboutcourse/payment/:id"
                element={
                  <PrivateRoute>
                    <Payment />
                  </PrivateRoute>
                }
              />
              <Route
                path="/attendcoursehistory"
                element={
                  <PrivateRoute>
                    <AttendCourseHistory />
                  </PrivateRoute>
                }
              />
              <Route
                path="/employees"
                element={
                  <PrivateRoute>
                    <Employee />
                  </PrivateRoute>
                }
              />
              <Route
                path="/exam"
                element={
                  <PrivateRoute>
                    <Exam />
                  </PrivateRoute>
                }
              />
              <Route
                path="/class/:id"
                element={
                  <PrivateRoute>
                    <Class />
                  </PrivateRoute>
                }
              />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
              <Route path="/resetpassword" element={<ResetPassword />} />
              <Route path="*" element={<Erro404 />} />
            </Routes>
          </UserProvider>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default App;
