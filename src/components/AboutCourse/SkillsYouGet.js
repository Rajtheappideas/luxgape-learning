import React from "react";
import ContentLoader from "react-content-loader";
import { useTranslation } from "react-i18next";

const SkillsYouGet = ({ skillsYouGet, loading }) => {
  const { t } = useTranslation();
  // const data = [
  //   {
  //     id: 1,
  //     heading: <AiFillHtml5 />,
  //     name: "Html5",
  //     description: t("html"),
  //   },
  //   {
  //     id: 2,
  //     heading: <DiCss3Full />,
  //     name: "Css3",
  //     description: t("css"),
  //   },
  //   {
  //     id: 3,
  //     heading: t("web_development_heading"),
  //     name: t("web_development"),
  //     description: t("web_development_paragraph"),
  //   },
  //   {
  //     id: 4,
  //     heading: t("web_design_skills_heading"),
  //     name: t("web_design_skills"),
  //     description: t("web_design_paragraph"),
  //   },
  //   {
  //     id: 5,
  //     heading: t("advanced_sheets_styling_heading"),
  //     name: t("advanced_sheets_styling"),
  //     description: t("sitemap_paragraph"),
  //   },
  //   {
  //     id: 6,
  //     heading: t("adaptive_layout_code_heading"),
  //     name: t("adaptive_layout_code"),
  //     description: t("laptop_code_paragraph"),
  //   },
  //   {
  //     id: 7,
  //     heading: t("moved_the_site_to_wordPress_heading"),
  //     name: t("moved_the_site_to_wordPress"),
  //     description: t("window_restore_paragraph"),
  //   },
  //   {
  //     id: 8,
  //     heading: t("editing_and_adding_content_heading"),
  //     name: t("editing_and_adding_content"),
  //     description: t("edit_content_paragraph"),
  //   },
  // ];

  return (
    <div className="px-3 sm:space-y-10 space-y-3 my-3">
      {/* --------------heading----------- */}
      <p className="font-bold sm:text-5xl text-3xl text-center block">
        {t("skills_you_will_get")}
      </p>
      {/* -----------jsut paragraph----------- */}
      <p className="text-lg font-light sm:text-center  xl:w-3/5 sm:w-5/6 mx-auto">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      {/* -----------rounded all divs grid alyout------------- */}
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-flow-row gap-y-5 place-items-center items-center">
        {skillsYouGet.length === 0 && !loading ? (
          <p className="text-2xl font-semibold col-span-4">
            Ooops No Skills added!!
          </p>
        ) : loading ? (
          <>
            <ContentLoader
              speed={1}
              width={300}
              height={200}
              backgroundColor="#efe6e6"
              foregroundColor="#d7bcbc"
              animate
            >
              <circle
                cx="150"
                cy="100"
                r="70"
                className="rounded-tl-[123px] rounded-br-[123px] rounded-tr-none rounded-bl-none"
              />
            </ContentLoader>
            <ContentLoader
              speed={1}
              width={300}
              height={200}
              backgroundColor="#efe6e6"
              foregroundColor="#d7bcbc"
              animate
            >
              <circle
                cx="150"
                cy="100"
                r="70"
                className="rounded-tl-[123px] rounded-br-[123px] rounded-tr-none rounded-bl-none"
              />
            </ContentLoader>
            <ContentLoader
              speed={1}
              width={300}
              height={200}
              backgroundColor="#efe6e6"
              foregroundColor="#d7bcbc"
              animate
            >
              <circle
                cx="150"
                cy="100"
                r="70"
                className="rounded-tl-[123px] rounded-br-[123px] rounded-tr-none rounded-bl-none"
              />
            </ContentLoader>
            <ContentLoader
              speed={1}
              width={300}
              height={200}
              backgroundColor="#efe6e6"
              foregroundColor="#d7bcbc"
              animate
            >
              <circle
                cx="150"
                cy="100"
                r="70"
                className="rounded-tl-[123px] rounded-br-[123px] rounded-tr-none rounded-bl-none"
              />
            </ContentLoader>
          </>
        ) : (
          skillsYouGet.map((skill) => (
            // -------------main div--------------
            <div
              className="h-[16rem] w-[16rem]  cursor-pointer group perspective"
              key={skill?.skills_id}
            >
              {/* ------------------main content div-------------- */}
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-500">
                {/* -----------------front side div=----------------- */}
                <div className="absolute backface-hidden rounded-tl-[123px] rounded-br-[123px] rounded-tr-none rounded-bl-none border-primary border w-full h-full">
                  <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2">
                    <p className="text-transparent bg-clip-text text-to sm:text-3xl text-xl font-bold">
                      {skill?.skills_name}
                    </p>
                    <p className="text-transparent text-center mx-auto whitespace-normal bg-clip-text bg-gradient-to-r from-to to-from sm:text-xl text-lg font-bold">
                      {skill?.skills_name}
                    </p>
                  </div>
                </div>
                {/* -----------------back side div=----------------- */}
                <div className="absolute my-rotate-y-180 bg-primary backface-hidden overflow-hidden rounded-tl-[123px] rounded-br-[123px] rounded-tr-none rounded-bl-none border-primary border w-full h-full">
                  <div className="text-center text-sm text-white font-semibold flex flex-col items-center justify-center h-full px-2">
                    {skill?.skills_name}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SkillsYouGet;
