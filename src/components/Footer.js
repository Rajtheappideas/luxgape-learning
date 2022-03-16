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
        <div className="pb-10 pt-16 sm:px-12 px-3 grid sm:gap-0 gap-5 lg:grid-cols-5 lg:grid-rows-1 sm:grid-cols-3 sm:grid-rows-2 items-start place-items-center">
          {/* --------------logo & description-------------- */}
          <div className="w-full lg:col-span-2 sm:col-span-3">
            <div className="lg:text-left text-center">
              <Link to="/">
                <img
                  src={logo}
                  alt="companylogo"
                  className="h-20 cursor-pointer object-center object-contain inline-block"
                />
              </Link>
            </div>
            <p className="text-2xl leading-relaxed tracking-normal lg:text-left text-center font-semibold w-full">
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
            <Label>{t("company")}</Label>
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
          <div>
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
sm:mb-5 text-3xl font-semibold text-black text-center tracking-wide`;

const List = tw.li`
text-2xl font-normal text-black text-center tracking-normal cursor-pointer
`;
