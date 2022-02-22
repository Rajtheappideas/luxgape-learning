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
} from "./pages/index";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/aboutcourse" element={<AboutCourse />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
