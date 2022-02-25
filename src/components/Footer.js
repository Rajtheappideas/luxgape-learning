import React from "react";
import logo from "../assets/logo.png";
import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";

const Footer = ({ classFooter, normalFooter }) => {
  const currentYear = new Date().getFullYear();
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <footer className="bg-footer w-full">
        <div className="pb-10 pt-16 px-16 grid grid-cols-5 items-start justify-items-center">
          {/* --------------logo & description-------------- */}
          <div className="w-full col-span-2">
            <Link to="/">
              <img
                src={logo}
                alt="companylogo"
                className="w-48 h-20 cursor-pointer object-center object-contain inline-block"
              />
            </Link>
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
            <ul className="space-y-6">
              <List onClick={ScrollToTop}>
                <Link to="/aboutus">About US</Link>
              </List>
              <List>
                <a href="/#contactus">Contact US</a>
              </List>
              <List>
                <a href="/#testimonial">Testimonials</a>
              </List>
              <List onClick={ScrollToTop}>
                <Link to="/privacypolicy">Privacy Policy</Link>
              </List>
            </ul>
          </div>

          {/* ----------------------------follow links----------------- */}
          <div className="pt-4">
            <Label>Follow US</Label>
            <ul className="space-y-5">
              <List>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </List>
              <List>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </List>

              <List>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                  Twitter
                </a>
              </List>
            </ul>
          </div>
        </div>
        {/* ------------horizntal line-------------------- */}
        <div className="border w-full my-5 border-black" />
        <p className="text-xl text-center font-semibold pb-5">
          ©{currentYear} <span className="text-from font-bold">Lux Gap</span>.
          All Rights Reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;

const Label = tw.p`
mb-8 text-2xl font-semibold text-black tracking-wide`;

const List = tw.li`
text-2xl font-normal text-black tracking-normal cursor-pointer
`;
