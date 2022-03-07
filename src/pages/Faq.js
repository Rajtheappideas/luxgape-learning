import React, { useState } from "react";
import { PlusIcon, XIcon } from "@heroicons/react/outline";
import { MetaTags } from "react-meta-tags";
import { Faq1, Faq2, Footer, Navbar } from "../components";

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
const Faq = () => {
  const [faqOpen, setFaqOpen] = useState(false);
  const firstFiveFaq = Faqs.slice(0, 5);
  const secondFiveFaq = Faqs.slice(5, 10);

  return (
    <>
      <MetaTags>
        <title>Faq</title>
      </MetaTags>
      {/* --------------nvabr-------------------- */}
      <Navbar />
      <h1 className="text-3xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-l from-from to-to">
        Faq
      </h1>
      <p className="text-center text-xl font-normal mx-auto md:w-2/4 w-full my-6">
        When you’re ready to go beyond prototyping in Figma, Webflow’s ready to
        help you bring your
      </p>
      <div className="place-items-center items-center w-full grid gap-10 lg:grid-cols-2 grid-cols-1 grid-flow-row">
        {/* ---------------------left side div----------------- */}
        <div className="mx-10 w-full h-screen">
          {firstFiveFaq.map((faq) => (
            <Faq1 {...faq} key={faq.num} />
          ))}
        </div>
        <div className="mx-10 w-full h-screen">
          {secondFiveFaq.map((faq) => (
            <Faq2 {...faq} key={faq.num} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faq;
