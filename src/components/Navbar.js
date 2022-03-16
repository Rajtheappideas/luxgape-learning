import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";
import {
  MenuIcon,
  XIcon,
  TranslateIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";
import { useUserContext } from "../context/usercontext";
import useUserData from "../hooks/useUserData";
import { useTranslation } from "react-i18next";

const Navbar = ({ activeText }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { userData, ChangeLanguage, userLanguage } = useUserContext();
  const { handleLogout } = useUserData();

  const userName = userData?.Du?.tf;
  const userImage = userData?.profileObj?.imageUrl;

  const { t } = useTranslation();
  // useEffect(() => {
  //   console.log(userLanguage);
  // }, [t, userLanguage]);

  return (
    <nav className="xl:flex xl:justify-between xl:items-center sm:p-10 p-3">
      {/* ----------------logo------------------- ------ */}
      <div className="flex justify-between items-center lg:mb-0 mb-5">
        <Link to="/">
          <img
            src={logo}
            className="sm:h-20 h-12 cursor-pointer inline object-contain"
            alt="logo"
          />
        </Link>
        <button onClick={() => setOpenSidebar(!openSidebar)}>
          {openSidebar ? (
            <XIcon className="h-10 inline-block xl:hidden " />
          ) : (
            <MenuIcon className="h-10 inline-block xl:hidden " />
          )}
        </button>
      </div>

      {/* ------------desktop--------------- */}
      <div className="space-x-10 text-lg text-secondary font-semibold xl:flex xl:flex-wrap hidden items-center">
        <span
          className={`${
            activeText === "Home" &&
            "text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-from to-to"
          }`}
        >
          <Link to="/">{t("Home")}</Link>
        </span>
        <span
          className={`${
            activeText === "Course" &&
            "text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-from to-to"
          }`}
        >
          <Link to="/courses">{t("Course")}</Link>
        </span>
        <span
          className={`${
            activeText === "About Us" &&
            "text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-from to-to"
          }`}
        >
          <Link to="/aboutus">{t("About_Us")}</Link>
        </span>
        {userData ? (
          <>
            <span className="text-xl font-semibold ml-2" onClick={handleLogout}>
              {t("Log out")}
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
              <Link to="/signin">{t("Log_In")}</Link>
            </span>
            <Link to="/signup">
              <span className="rounded-br-full rounded-tl-full text-white text-center font-semibold bg-primary px-9 py-3">
                {t("Sign_Up")}
              </span>
            </Link>
          </>
        )}
        <div className="flex flex-col relative items-center justify-center w-24 h-10 bg-gray-100 rounded-xl">
          <button
            className="inline-flex items-center"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {/* <TranslateIcon className="h-5" /> */}
            {localStorage.getItem("userLang")}
            <ChevronDownIcon className="h-5" />
          </button>

          {showDropdown && (
            <div className="absolute -bottom-12 font-semibold h-auto rounded-br-xl rounded-bl-xl left-0 bg-gray-100 text-center text-black">
              <button
                onClick={() => {
                  ChangeLanguage("en");
                  setShowDropdown(false);
                  localStorage.setItem("userLang", "en");
                }}
                className="hover:bg-gray-400 w-full hover:text-white"
              >
                English
              </button>
              <button
                onClick={() => {
                  ChangeLanguage("sp");
                  setShowDropdown(false);
                  localStorage.setItem("userLang", "sp");
                }}
                className="hover:bg-gray-400 w-full hover:text-white"
              >
                Spanish
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ------------mobile / tablet--------------- */}
      {openSidebar && (
        <div
          className={`space-y-10 py-4 shadow-xl text-xl rounded text-secondary font-semibold w-full xl:hidden bg-gray-200 flex flex-col flex-wrap items-center`}
        >
          <span
            className={`${
              activeText === "Home" &&
              "text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-from to-to"
            }`}
          >
            <Link to="/">{t("Home")}</Link>
          </span>
          <span
            className={`${
              activeText === "Course" &&
              "text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-from to-to"
            }`}
          >
            <Link to="/courses">{t("Course")}</Link>
          </span>
          <span
            className={`${
              activeText === "About Us" &&
              "text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-from to-to"
            }`}
          >
            <Link to="/aboutus">{t("About_Us")}</Link>
          </span>
          {userData ? (
            <>
              <span
                className="text-xl font-semibold ml-2"
                onClick={handleLogout}
              >
                {t("Log_out")}
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
                <Link to="/signin">{t("Log_In")}</Link>
              </span>
              <Link to="/signup">
                <span className="">{t("Sign_Up")}</span>
              </Link>
            </>
          )}

          <div className="flex flex-col relative items-center justify-center w-24 h-10 bg-gray-100 rounded-xl">
            <button
              className="inline-flex items-center"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              {/* <TranslateIcon className="h-5" /> */}
              {localStorage.getItem("userLang")}
              <ChevronDownIcon className="h-5" />
            </button>

            {showDropdown && (
              <div className="absolute -bottom-12 font-semibold h-auto rounded-br-xl rounded-bl-xl left-0 bg-gray-100 text-center text-black">
                <button
                  onClick={() => {
                    ChangeLanguage("en");
                    setShowDropdown(false);
                    localStorage.setItem("userLang", "en");
                  }}
                  className="hover:bg-gray-400 w-full hover:text-white"
                >
                  {t("english")}
                </button>
                <button
                  onClick={() => {
                    ChangeLanguage("sp");
                    setShowDropdown(false);
                    localStorage.setItem("userLang", "sp");
                  }}
                  className="hover:bg-gray-400 w-full hover:text-white"
                >
                  {t("spanish")}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
