import React from "react";
import logo from "../assets/LXG_RVB.png";
import tw from "tailwind-styled-components";

const Navbar = () => {
  return (
    <Wrapper>
      {/* ----------------logo------------------------- */}
      <div className="cursor-pointer">
        <img src={logo} className="w-full h-20" alt="logo" />
      </div>

      {/* ------------------links------------------------ */}
      <div className="space-x-14 cursor-pointer text-lg text-secondary font-semibold">
        <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-from to-to">
          Home
        </span>
        <span>Course</span>
        <span>About Us</span>
        <span>Log In</span>
        <span className="rounded-br-full rounded-tl-full text-white text-center font-semibold bg-primary px-9 py-3">
          Sign up
        </span>
      </div>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = tw.div`
flex justify-between items-center p-10
`;
