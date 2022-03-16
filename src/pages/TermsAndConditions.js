import React from "react";
import { useTranslation } from "react-i18next";
import { MetaTags } from "react-meta-tags";
import { Footer, Navbar } from "../components";

const TermsAndConditions = () => {
  const { t } = useTranslation();

  return (
    <div className="">
      <MetaTags>
        <title>{t("terms_and_conditions")}</title>
      </MetaTags>
      {/* -----------------nvbar=----------------------- */}
      <Navbar />
      <h1 className="text-3xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-l from-from to-to">
        {t("terms_and_conditions")}
      </h1>
      <p className="text-center text-xl font-normal mx-auto md:w-2/4 w-full px-2 my-6">
        When you’re ready to go beyond prototyping in Figma, Webflow’s ready to
        help you bring your
      </p>
      {/* ----------------------privacy policy points--------------- */}
      <div className="space-y-6 sm:p-10 p-3">
        {/* -------------------1 policy--------------- */}
        <div className="space-y-5">
          <p className="text-3xl font-bold block">Lorem ipsum dolor.</p>
          <p className="text-xl font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
          <p className="text-xl font-normal">
            Sunt in culpa qui officia deserunt mollit anim id est laborum. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* -------------------2 policy--------------- */}
        <div className="space-y-5">
          <p className="text-3xl font-bold block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="text-xl font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
          <ul className="px-5 space-y-3 text-lg font-normal">
            <li style={{ listStyle: "disc" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </li>
            <li style={{ listStyle: "disc" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </li>
            <li style={{ listStyle: "disc" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </li>
          </ul>
          <p className="text-xl font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
          </p>
        </div>

        {/* -------------------3 policy--------------- */}
        <div className="space-y-5">
          <p className="text-3xl font-bold block">Lorem ipsum dolor.</p>
          <p className="text-xl font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
          <p className="text-xl font-normal">
            Sunt in culpa qui officia deserunt mollit anim id est laborum. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* -------------------4 policy--------------- */}
        <div className="space-y-5">
          <p className="text-3xl font-bold block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="text-xl font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
          <ul className="px-5 space-y-3 text-lg font-normal">
            <li style={{ listStyle: "disc" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </li>
            <li style={{ listStyle: "disc" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </li>
            <li style={{ listStyle: "disc" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </li>
          </ul>
          <p className="text-xl font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
