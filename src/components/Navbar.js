import React from "react";
import logo from "../assets/logo.png";
import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";

const Navbar = ({ activeText }) => {
  return (
    <Wrapper>
      {/* ----------------logo------------------------- */}
      <div className="cursor-pointer">
        <Link to="/">
          <img
            src={logo}
            className="w-full h-20 object-contain cursor-pointer"
            alt="logo"
          />
        </Link>
      </div>

      {/* ------------------links------------------------ */}
      <div className="space-x-14 cursor-pointer text-lg text-secondary font-semibold">
        <span
          className={`${
            activeText ==="Home" &&
            "text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-from to-to"
          }`}
        >
          <Link to="/">Home</Link>
        </span>
        <span
          className={`${
            activeText === "Course" &&
            "text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-from to-to"
          }`}
        >
          <Link to="/courses">
          Course
          </Link>
        </span>
        <span
          className={`${
            activeText === "About Us" &&
            "text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-from to-to"
          }`}
        >
          <Link to="/aboutus">About Us</Link>
        </span>
        <span>
          <Link to="/signin">Log In</Link>
        </span>
        <Link to="/signup">
          <span className="rounded-br-full rounded-tl-full text-white text-center font-semibold bg-primary px-9 py-3">
            Sign up
          </span>
        </Link>
      </div>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = tw.div`
flex justify-between items-center p-10
`;
