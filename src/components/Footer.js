import React from "react";
import logo from "../assets/logo.png";
import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = ({ classFooter, normalFooter }) => {
  const { t } = useTranslation();
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
        <div className="sm:pb-10 sm:pt-16 sm:py-0 py-5 sm:px-12 px-3 grid sm:gap-0 gap-5 lg:grid-cols-5 lg:grid-rows-1 sm:grid-cols-3 sm:grid-rows-2 grid-cols-2 sm:items-start sm:place-items-center">
          {/* --------------logo & description-------------- */}
          <div className="w-full lg:col-span-2 sm:col-span-3 col-span-2">
            <div className="lg:text-left">
              <Link to="/">
                <img
                  src={logo}
                  alt="companylogo"
                  className="sm:h-20 h-16 cursor-pointer object-center object-contain inline-block"
                />
              </Link>
            </div>
            <p className="sm:text-2xl text-lg leading-relaxed tracking-normal lg:text-left text-left font-semibold w-full">
              {t("footer_paragraph")}
            </p>
          </div>

          {/* ---------------------------course----------------------------- */}
          <div>
            <Label>{t("Course")}</Label>
            <ul className="sm:space-y-5 space-y-3">
              <List>Lorem ipsum</List>
              <List>Lorem ipsum</List>
              <List>Lorem ipsum</List>
              <List>Lorem ipsum</List>
            </ul>
          </div>

          {/* ------------------company-------------------------- */}
          <div>
            <Label className="mb-0">{t("company")}</Label>
            <ul className="sm:space-y-5 space-y-3">
              <List onClick={ScrollToTop}>
                <Link to="/aboutus">{t("About_Us")}</Link>
              </List>
              <List>
                <a href="/#contactus">{t("contact_Us")}</a>
              </List>
              <List>
                <a href="/#testimonial">{t("testimonials")}</a>
              </List>
              <List onClick={ScrollToTop}>
                <Link to="/privacypolicy">{t("privacy_policy")}</Link>
              </List>
            </ul>
          </div>

          {/* ----------------------------follow links----------------- */}
          <div className=" sm:col-span-1 col-span-2">
            <Label>{t("follow_us")}</Label>
            <ul className="sm:space-y-5 space-y-3">
              <List>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("instagram")}
                </a>
              </List>
              <List>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("facebook")}
                </a>
              </List>

              <List>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                  {t("twitter")}
                </a>
              </List>
            </ul>
          </div>
        </div>
        {/* ------------horizntal line-------------------- */}
        <div className="border w-full my-5 border-black" />
        {/* --------------bottom line-------------- */}
        <p className="text-xl text-center font-semibold pb-5">
          ©{currentYear} <span className="text-from font-bold">Lux Gap</span>.
          {t("all_Rights_Reserved")}
        </p>
      </footer>
    </>
  );
};

export default Footer;

const Label = tw.p`
sm:mb-5 sm:text-3xl mb-1 text-xl font-bold text-left tracking-wide`;

const List = tw.li`
sm:text-2xl text-lg font-normal text-left tracking-normal cursor-pointer
`;
