import React from "react";
import logo from "../assets/LXG_RVB.png";
import tw from "tailwind-styled-components";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-footer w-full">
      <div className="pb-14 pt-28 px-16 grid grid-cols-5 items-start justify-items-center">
        {/* --------------logo & description-------------- */}
        <div className="w-full col-span-2">
          <img
            src={logo}
            alt="companylogo"
            className="w-40 h-20 cursor-pointer object-center object-contain"
          />
          <p className="text-2xl leading-loose tracking-wide text-left font-semibold w-full">
            learn with us anytime and anywhere, let's hone your skills and be
            professional, with certified mentors and competitive prices
          </p>
        </div>

        {/* ---------------------------course----------------------------- */}
        <div className="pt-4">
          <Label>Course</Label>
          <ul className="space-y-5">
            <List>Lorem ipsum</List>
            <List>Lorem ipsum</List>
            <List>Lorem ipsum</List>
            <List>Lorem ipsum</List>
          </ul>
        </div>

        {/* ------------------company-------------------------- */}
        <div className="pt-4">
          <Label>Company</Label>
          <ul className="space-y-5">
            <List>About US</List>
            <List>Contact US</List>
            <List>Testimonials</List>
            <List>FAQ</List>
          </ul>
        </div>

        {/* ----------------------------follow links----------------- */}
        <div className="pt-4">
          <Label>Follow US</Label>
          <ul className="space-y-5">
            <List>Instagram</List>
            <List>Facebook</List>
            <List>Twitter</List>
          </ul>
        </div>
      </div>

      {/* ------------horizntal line-------------------- */}
      <div className="border w-full my-5 border-black" />
      <p className="text-xl text-center font-semibold pb-5">
        ©{currentYear} <span className="text-from font-bold">Lux Gap</span>. All
        Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;

const Label = tw.p`
mb-8 text-2xl font-semibold text-black tracking-wide`;

const List = tw.li`
text-2xl font-normal text-black tracking-normal cursor-pointer
`;