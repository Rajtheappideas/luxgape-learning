import React from "react";
import { MetaTags } from "react-meta-tags";
import { Faq, Footer, Navbar, TermsAndConditions } from "../components";

const Faqs = [
  {
    num: "01",
    que: "Is OPEN just for married couples?",
    ans: " No. In fact, the majority of open relationships are between committed",
  },
  {
    num: "02",
    que: "Is OPEN just for married couples?",
    ans: " No. In fact, the majority of open relationships are between committed",
  },
  {
    num: "03",
    que: "Is OPEN just for married couples?",
    ans: " No. In fact, the majority of open relationships are between committed",
  },
  {
    num: "04",
    que: "Is OPEN just for married couples?",
    ans: " No. In fact, the majority of open relationships are between committed",
  },
  {
    num: "05",
    que: "Is OPEN just for married couples?",
    ans: " No. In fact, the majority of open relationships are between committed",
  },
  {
    num: "06",
    que: "Is OPEN just for married couples?",
    ans: " No. In fact, the majority of open relationships are between committed",
  },
  {
    num: "07",
    que: "Is OPEN just for married couples?",
    ans: " No. In fact, the majority of open relationships are between committed",
  },
  {
    num: "08",
    que: "Is OPEN just for married couples?",
    ans: " No. In fact, the majority of open relationships are between committed",
  },
  {
    num: "09",
    que: "Is OPEN just for married couples?",
    ans: " No. In fact, the majority of open relationships are between committed",
  },
  {
    num: "10",
    que: "Is OPEN just for married couples?",
    ans: " No. In fact, the majority of open relationships are between committed",
  },
];
const PrivacyPolicy = () => {
  const firstFiveFaqs = Faqs.slice(0, 5);
  const secondFiveFaqs = Faqs.slice(5, 10);
  return (
    <div>
      <MetaTags>
        <title>Privacy Policy</title>
      </MetaTags>
      {/* ------------------navbar--------------- */}
      <Navbar />

      {/* ------------------privacy policy --------------- */}
      <div className="p-10">
        <h1 className="text-3xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-l from-from to-to">
          Privacy Policy
        </h1>
        <p className="text-center text-xl font-normal mx-auto w-2/4 my-6">
          When you’re ready to go beyond prototyping in Figma, Webflow’s ready
          to help you bring your
        </p>
        {/* ----------------------privacy policy points--------------- */}
        <div className="space-y-6">
          {/* -------------------1 policy--------------- */}
          <div className="space-y-5">
            <p className="text-3xl font-bold block">Lorem ipsum dolor.</p>
            <p className="text-xl font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <p className="text-xl font-normal">
              Sunt in culpa qui officia deserunt mollit anim id est laborum. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          {/* -------------------2 policy--------------- */}
          <div className="space-y-5">
            <p className="text-3xl font-bold block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-xl font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident.
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
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi.
            </p>
          </div>

          {/* -------------------3 policy--------------- */}
          <div className="space-y-5">
            <p className="text-3xl font-bold block">Lorem ipsum dolor.</p>
            <p className="text-xl font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <p className="text-xl font-normal">
              Sunt in culpa qui officia deserunt mollit anim id est laborum. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          {/* -------------------4 policy--------------- */}
          <div className="space-y-5">
            <p className="text-3xl font-bold block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-xl font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident.
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
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi.
            </p>
          </div>
        </div>
      </div>
      {/* ------------------terms & conditiopns--------------- */}
      <TermsAndConditions />

      {/* ------------------FAQ--------------- */}
      <h1 className="text-3xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-l from-from to-to">
        FAQ
      </h1>
      <p className="text-center text-xl font-normal mx-auto w-2/4 my-6">
        When you’re ready to go beyond prototyping in Figma, Webflow’s ready to
        help you bring your
      </p>
      {firstFiveFaqs.map((firstFaq) => (
        <Faq {...firstFaq} {...secondFiveFaqs} key={firstFaq.num} />
      ))}

      {/* ------------------footer--------------- */}
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
