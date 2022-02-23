import React, { useState } from "react";
import { PlusIcon, XIcon } from "@heroicons/react/outline";

const Faq = (props) => {
  const [faqOpen, setFaqOpen] = useState(false);
  return (
    // ----------------faqs-------------------------------
    <div className="grid  grid-cols-2 grid-rows-1 gap-6 items-start">
      {/* ---------------------left side div----------------- */}
      <div className="space-y-6 w-full px-10">
        <div>
          <div className="border-b my-5 w-full pb-5 ">
            <div className="flex justify-between items-center">
              <p className="font-bold text-lg">
                <span className="text-primary text-2xl font-normal mr-4">
                  {props.num}
                </span>
                {props.que}
              </p>
              <button onClick={() => setFaqOpen(!faqOpen)}>
                {faqOpen ? (
                  <XIcon className="w-6 h-6" color="gray" />
                ) : (
                  <PlusIcon className="w-6 h-6" color="gray" />
                )}
              </button>
            </div>
            {faqOpen && (
              <p className="bg-gray-100 my-2 mx-5 text-center text-lg rounded-xl leading-relaxed">
                {props.ans}
              </p>
            )}
          </div>
        </div>
      </div>
      {/* ---------------------right side div----------------- */}

      <div className="space-y-6 w-full px-10">
        <div>
          <div className="border-b my-5 w-full pb-5 ">
            <div className="flex justify-between items-center">
              <p className="font-bold text-lg">
                <span className="text-primary text-2xl font-normal mr-4">
                  {props.num}
                </span>
                {props.que}
              </p>
              <button onClick={() => setFaqOpen(!faqOpen)}>
                {faqOpen ? (
                  <XIcon className="w-6 h-6" color="gray" />
                ) : (
                  <PlusIcon className="w-6 h-6" color="gray" />
                )}
              </button>
            </div>
            {faqOpen && (
              <p className="bg-gray-100 my-2 mx-5 text-center text-lg rounded-xl leading-relaxed">
                {props.ans}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
