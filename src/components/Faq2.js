import { PlusIcon, XIcon } from "@heroicons/react/outline";
import React, { useState } from "react";

const Faq2 = ({ ...faq }) => {
  const [faqOpen, setFaqOpen] = useState(false);

  return (
    <div className="space-y-6 w-full px-10">
      <div>
        <div className="border-b my-5 w-full pb-5 ">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg">
              <span className="text-primary text-2xl font-normal mr-4">
                {faq.num}
              </span>
              {faq.que}
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
              {faq.ans}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Faq2;
