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
        <div className="pb-10 pt-16 sm:px-16 px-3 grid lg:grid-cols-5 lg:grid-rows-1 sm:grid-cols-3 sm:grid-rows-2 items-start justify-items-center">
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
            <p className="text-2xl leading-loose tracking-wide lg:text-left text-center font-semibold w-full">
              {t("footer_paragraph")}
            </p>
          </div>

          {/* ---------------------------course----------------------------- */}
          <div className="pt-4">
            <Label>{t("Course")}</Label>
            <ul className="space-y-5">
              <List>Lorem ipsum</List>
              <List>Lorem ipsum</List>
              <List>Lorem ipsum</List>
              <List>Lorem ipsum</List>
            </ul>
          </div>

          {/* ------------------company-------------------------- */}
          <div className="pt-4">
            <Label>{t("company")}</Label>
            <ul className="space-y-6">
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
          <div className="pt-4">
            <Label>{t("follow_us")}</Label>
            <ul className="space-y-5">
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
mb-8 text-4xl sm:text-2xl font-semibold text-black text-center tracking-wide`;

const List = tw.li`
text-2xl font-normal text-black text-center tracking-normal cursor-pointer
`;
