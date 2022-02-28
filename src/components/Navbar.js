import React, { useState } from "react";
import logo from "../assets/logo.png";
import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useUserContext } from "../context/usercontext";
import useUserData from "../hooks/useUserData";

const Navbar = ({ activeText }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const { userData } = useUserContext();
  const { handleLogout } = useUserData();

  const userName = userData?.Ju?.tf;
  const userImage = userData?.profileObj?.imageUrl;

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
      <div className="space-x-14 cursor-pointer text-lg text-secondary font-semibold hidden lg:flex lg:items-center">
        <span
          className={`${
            activeText === "Home" &&
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
          <Link to="/courses">Course</Link>
        </span>
        <span
          className={`${
            activeText === "About Us" &&
            "text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-from to-to"
          }`}
        >
          <Link to="/aboutus">About Us</Link>
        </span>
        {userData ? (
          <>
            <span className="text-xl font-semibold ml-2" onClick={handleLogout}>
              Logout
            </span>
            <div className="flex items-center bg-gray-100 w-auto h-12 px-2 rounded-lg">
              <img
                src={userImage}
                alt="studentimg"
                className="object-center object-cover rounded-tl-lg rounded-br-lg rounded-bl-none rounded-tr-none w-10 h-10"
              />
              <span className="text-xl font-semibold ml-2">{userName}</span>
            </div>
          </>
        ) : (
          <>
            <span>
              <Link to="/signin">Log In</Link>
            </span>
            <Link to="/signup">
              <span className="rounded-br-full rounded-tl-full text-white text-center font-semibold bg-primary px-9 py-3">
                Sign up
              </span>
            </Link>
          </>
        )}
      </div>
      {/* --------------------mobile menu----------------- */}
      <div className="space-x-14 w-full cursor-pointer text-lg text-secondary font-semibold lg:hidden flex justify-end ">
        <button onClick={() => setOpenSidebar(true)} className="fixed">
          <MenuIcon className="h-10" />
        </button>
        {/* {openSidebar ? (
          <button onClick={() => setOpenSidebar(false)}>
            <XIcon className="h-10" />
          </button>
        ) : (
          <button onClick={() => setOpenSidebar(true)}>
            <MenuIcon className="h-10" />
          </button>
        )} */}
        {openSidebar && (
          <div className="h-screen p-10 w-full text-blue-400 text-xl transition transform  bg-gray-100 ">
            <button
              className="absolute top-4 right-5"
              onClick={() => setOpenSidebar(false)}
            >
              <XIcon className="h-10" color="black" />
            </button>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = tw.div`
flex justify-between lg:items-center md:items-start p-10
`;
