import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon, ChevronDownIcon } from "@heroicons/react/outline";
import { useUserContext } from "../context/usercontext";
import useUserData from "../hooks/useUserData";
import { useTranslation } from "react-i18next";
import { UserIcon } from "@heroicons/react/solid";

const Navbar = ({ activeText }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { userData, ChangeLanguage } = useUserContext();
  const { handleLogout } = useUserData();

  const { t } = useTranslation();

  return (
    <nav className="xl:flex xl:justify-between xl:items-center sm:p-10 p-3">
      {/* ----------------logo------------------- ------ */}
      <div className="flex justify-between items-start lg:mb-0 mb-5">
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
            activeText === "Home"
              ? "text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-from to-to"
              : "hover:scale-95 hover:text-gray-400 duration-100 transition-all ease-in-out"
          }`}
        >
          <Link to="/">{t("Home")}</Link>
        </span>
        <span
          className={`${
            activeText === "Course"
              ? "text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-from to-to"
              : "hover:scale-95 hover:text-gray-400 duration-100 transition-all ease-in-out"
          }`}
        >
          <Link to="/courses">{t("Course")}</Link>
        </span>
        <span
          className={`${
            activeText === "About Us"
              ? "text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-from to-to"
              : "hover:scale-95 hover:text-gray-400 duration-100 transition-all ease-in-out"
          }`}
        >
          <Link to="/aboutus">{t("About_Us")}</Link>
        </span>
        {!userData && (
          <>
            {/* ------------------sign in---------------- */}
            <span className="hover:scale-95 hover:text-gray-400 duration-100 transition-all ease-in-out">
              <Link to="/signin">{t("Log_In")}</Link>
            </span>
            <Link to="/signup">
              <span className="rounded-br-full rounded-tl-full text-white text-center font-semibold bg-primary px-9 py-3">
                {t("Sign_Up")}
              </span>
            </Link>
          </>
        )}
        {/* ---------------language dropdown-------------- */}
        <div className="group  relative cursor-pointer rounded-tl-3xl rounded-br-3xl rounded-bl-none rounded-tr-none bg-gray-200 w-16 h-10">
          <p className="text-center text-2xl font-semibold">
            {localStorage.getItem("lang_code")}
          </p>
          <div className="group-hover:block text-center absolute top-10 -left-5 hidden h-auto z-10">
            <ul className="top-0 w-28 bg-white shadow-2xl px-3 py-4 rounded-xl">
              <li className="py-1">
                <button
                  onClick={() => {
                    ChangeLanguage("en");
                    localStorage.setItem("lang_code", "en");
                  }}
                  className="text-xl font-semibold ml-2 cursor-pointer hover:scale-95 hover:text-gray-400 duration-100 transition-all ease-in-out"
                >
                  {t("english")}
                </button>
              </li>
              <li className="py-1">
                <button
                  onClick={() => {
                    ChangeLanguage("sp");
                    localStorage.setItem("lang_code", "sp");
                  }}
                  className="text-xl font-semibold ml-2 cursor-pointer hover:scale-95 hover:text-gray-400 duration-100 transition-all ease-in-out"
                >
                  {t("spanish")}
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/* ----------------user profile--------------- */}
        {userData && (
          <>
            <div className="group  relative cursor-pointer rounded-tl-3xl rounded-br-3xl rounded-bl-none rounded-tr-none bg-gray-200 w-16 h-10">
              <UserIcon className="h-10 mx-auto" color="gray" />
              <div className="group-hover:block absolute top-10 -left-16 hidden h-auto z-10">
                <ul className="top-0 w-auto bg-white shadow-2xl px-3 py-4 rounded-xl">
                  <li className="py-1">
                    <Link
                      to="/userprofile"
                      className="text-xl font-semibold ml-2 block whitespace-nowrap cursor-pointer hover:scale-95 hover:text-gray-400 duration-100 transition-all ease-in-out"
                    >
                      {t("my_profile")}
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link
                      to="/mycourses"
                      className="text-xl font-semibold ml-2 block whitespace-nowrap cursor-pointer hover:scale-95 hover:text-gray-400 duration-100 transition-all ease-in-out"
                    >
                      {t("my_courses")}
                    </Link>
                  </li>
                  <li className="py-1">
                    <span
                      className="text-xl font-semibold ml-2 block whitespace-nowrap cursor-pointer hover:scale-95 hover:text-gray-400 duration-100 transition-all ease-in-out"
                      onClick={handleLogout}
                    >
                      {t("Log_out")}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
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
              <p>
                <Link
                  to="/userprofile"
                  className="text-xl font-semibold ml-2 cursor-pointer hover:scale-95 hover:text-gray-400 duration-100 transition-all ease-in-out"
                >
                  {t("my_profile")}
                </Link>
              </p>
              <p className="py-1">
                <Link
                  to="/mycourses"
                  className="text-xl font-semibold ml-2 cursor-pointer hover:scale-95 hover:text-gray-400 duration-100 transition-all ease-in-out"
                >
                  {t("my_courses")}
                </Link>
              </p>
              <p
                className="text-xl font-semibold ml-2 cursor-pointer"
                onClick={handleLogout}
              >
                {t("Log_out")}
              </p>
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
          {/* ----------------language change------------- */}
          <div className="flex flex-col relative items-center justify-center w-24 h-10 bg-gray-100 rounded-xl">
            <button
              className="inline-flex items-center"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              {/* <TranslateIcon className="h-5" /> */}
              {localStorage.getItem("lang_code")}
              <ChevronDownIcon className="h-5" />
            </button>

            {showDropdown && (
              <div className="absolute -bottom-12 font-semibold h-auto rounded-br-xl rounded-bl-xl left-0 bg-gray-100 text-center text-black">
                <button
                  onClick={() => {
                    ChangeLanguage("en");
                    setShowDropdown(false);
                    localStorage.setItem("lang_code", "en");
                  }}
                  className="hover:bg-gray-400 w-full hover:text-white"
                >
                  {t("english")}
                </button>
                <button
                  onClick={() => {
                    ChangeLanguage("sp");
                    setShowDropdown(false);
                    localStorage.setItem("lang_code", "sp");
                  }}
                  className="hover:bg-gray-400 w-full hover:text-white"
                >
                  {t("spanish")}
                </button>
              </div>
            )}
          </div>
          {/* --------------------my profile---------------------- */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
