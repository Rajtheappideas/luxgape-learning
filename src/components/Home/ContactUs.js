import React from "react";

const ContactUs = () => {
  return (
    <div
      id="contactus"
      className="p-10 grid gap-10 lg:grid-cols-2 lg:grid-rows-1 grid-cols-1 grid-rows-2 items-center justify-items-center"
    >
      {/* --------------first div with text---------- */}
      <div className="mx-auto w-full">
        <p className="text-5xl font-bold tracking-wide my-5 leading-snug block">
          Stay get in touch
          <span className="block">with us</span>
        </p>
        <p className="text-secondary text-xl font-semibold tracking-normal leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      {/* -----------second div with form ---------------- */}
      <div className="space-y-10 w-full">
        <div>
          <p className="text-xl font-normal mb-3">Your name</p>
          <input
            type="text"
            placeholder="Full name here"
            className="w-full bg-[#FFF8F0] p-5 rounded-2xl outline-none"
          />
        </div>
        <div>
          <p className="text-xl font-normal mb-3">Your email</p>
          <input
            type="text"
            placeholder="Your email address"
            className="w-full bg-[#FFF8F0] p-5 rounded-2xl outline-none"
          />
        </div>
        <div className="lg:text-left text-center">
          <button className=" text-center rounded-tl-[30px] rounded-tr-none rounded-br-[30px] rounded-bl-none w-[183px] h-[60px] bg-black text-white font-semibold ">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
